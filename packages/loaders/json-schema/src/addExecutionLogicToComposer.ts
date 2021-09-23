import { SchemaComposer } from 'graphql-compose';
import crossFetch from 'cross-fetch';
import { Logger, MeshPubSub } from '@graphql-mesh/types';
import { JSONSchemaOperationConfig } from './types';
import { getOperationMetadata, isPubSubOperationConfig } from './utils';
import { jsonFlatStringify, parseInterpolationStrings, stringInterpolator } from '@graphql-mesh/utils';
import { inspect } from '@graphql-tools/utils';
import { env } from 'process';
import urlJoin from 'url-join';
import { resolveDataByUnionInputType } from './resolveDataByUnionInputType';
import { stringify as qsStringify } from 'qs';
import { isScalarType } from 'graphql';

export interface AddExecutionLogicToComposerOptions {
  fetch: typeof crossFetch;
  logger: Logger;
  operations: JSONSchemaOperationConfig[];
  operationHeaders?: Record<string, string>;
  baseUrl: string;
  pubsub?: MeshPubSub;
  errorMessage?: string;
}

export async function addExecutionLogicToComposer(
  schemaComposer: SchemaComposer,
  { fetch, logger, operations, operationHeaders, baseUrl, pubsub, errorMessage }: AddExecutionLogicToComposerOptions
) {
  logger.debug(`Attaching execution logic to the schema`);
  for (const operationConfig of operations) {
    const { httpMethod, rootTypeName, fieldName } = getOperationMetadata(operationConfig);
    const operationLogger = logger.child(`${rootTypeName}.${fieldName}`);

    const interpolationStrings: string[] = [...Object.values(operationHeaders || {}), baseUrl];

    const rootTypeComposer = schemaComposer[rootTypeName];

    const field = rootTypeComposer.getField(fieldName);

    if (isPubSubOperationConfig(operationConfig)) {
      if (!pubsub) {
        throw new Error(`You should have PubSub defined in the config!`);
      }
      field.description = field.description || `PubSub Topic: ${operationConfig.pubsubTopic}`;
      field.subscribe = (root, args, context, info) => {
        const interpolationData = { root, args, context, info, env };
        const pubsubTopic = stringInterpolator.parse(operationConfig.pubsubTopic, interpolationData);
        operationLogger.debug(`=> Subscribing to pubSubTopic: ${pubsubTopic}`);
        return pubsub.asyncIterator(pubsubTopic);
      };
      field.resolve = root => {
        operationLogger.debug(`Received ${inspect(root)} from ${operationConfig.pubsubTopic}`);
        return root;
      };
      interpolationStrings.push(operationConfig.pubsubTopic);
    } else if (operationConfig.path) {
      field.description = field.description || `${operationConfig.method} ${operationConfig.path}`;
      field.resolve = async (root, args, context, info) => {
        operationLogger.debug(`=> Resolving`);
        const interpolationData = { root, args, context, info, env };
        const interpolatedBaseUrl = stringInterpolator.parse(baseUrl, interpolationData);
        const interpolatedPath = stringInterpolator.parse(operationConfig.path, interpolationData);
        const fullPath = urlJoin(interpolatedBaseUrl, interpolatedPath);
        const headers = {
          ...operationHeaders,
          ...operationConfig?.headers,
        };
        for (const headerName in headers) {
          headers[headerName] = stringInterpolator.parse(headers[headerName], interpolationData);
        }
        const requestInit: RequestInit = {
          method: httpMethod,
          headers,
        };
        const urlObj = new URL(fullPath);
        // Resolve union input
        const input = resolveDataByUnionInputType(args.input, field.args?.input?.type?.getType(), schemaComposer);
        if (input) {
          switch (httpMethod) {
            case 'GET':
            case 'HEAD':
            case 'CONNECT':
            case 'OPTIONS':
            case 'TRACE': {
              const newSearchParams = new URLSearchParams(input);
              newSearchParams.forEach((value, key) => {
                urlObj.searchParams.set(key, value);
              });
              break;
            }
            case 'POST':
            case 'PUT':
            case 'PATCH':
            case 'DELETE': {
              const [, contentType] =
                Object.entries(headers).find(([key]) => key.toLowerCase() === 'content-type') || [];
              if (contentType?.startsWith('application/x-www-form-urlencoded')) {
                requestInit.body = qsStringify(input);
              } else {
                requestInit.body = jsonFlatStringify(input);
              }
              break;
            }
            default:
              throw new Error(`Unknown method ${httpMethod}`);
          }
        }
        operationLogger.debug(`=> Fetching ${urlObj.toString()}=>${inspect(requestInit)}`);
        const response = await fetch(urlObj.toString(), requestInit);
        const responseText = await response.text();
        operationLogger.debug(
          `=> Fetched from ${urlObj.toString()}=>{
              body: ${responseText}
            }`
        );
        const returnType = field.type;
        let responseJson: any;
        try {
          responseJson = JSON.parse(responseText);
        } catch (e) {
          // The result might be defined as scalar
          if (isScalarType(returnType)) {
            operationLogger.debug(` => Return type is not a JSON so returning ${responseText}`);
            return responseText;
          }
          throw responseText;
        }
        const errorMessageTemplate = errorMessage || 'message';
        function normalizeError(error: any): Error {
          const errorMessage = stringInterpolator.parse(errorMessageTemplate, error);
          if (typeof error === 'object' && errorMessage) {
            const errorObj = new Error(errorMessage);
            errorObj.stack = null;
            Object.assign(errorObj, error);
            return errorObj;
          } else {
            return error;
          }
        }
        const errors = responseJson.errors || responseJson._errors;
        // Make sure the return type doesn't have a field `errors`
        // so ignore auto error detection if the return type has that field
        if (errors?.length) {
          if (!('getFields' in returnType && 'errors' in returnType.getFields())) {
            const normalizedErrors: Error[] = errors.map(normalizeError);
            const aggregatedError = new AggregateError(
              normalizedErrors,
              `${rootTypeName}.${fieldName} failed; \n${normalizedErrors
                .map(error => ` - ${error.message || error}`)
                .join('\n')}\n`
            );
            aggregatedError.stack = null;
            logger.debug(`=> Throwing the error ${inspect(aggregatedError)}`);
            return aggregatedError;
          }
        }
        if (responseJson.error) {
          if (!('getFields' in returnType && 'error' in returnType.getFields())) {
            const normalizedError = normalizeError(responseJson.error);
            operationLogger.debug(`=> Throwing the error ${inspect(normalizedError)}`);
            return normalizedError;
          }
        }
        operationLogger.debug(`=> Returning ${inspect(responseJson)}`);
        return responseJson;
      };
      interpolationStrings.push(...Object.values(operationConfig.headers || {}));
      interpolationStrings.push(operationConfig.path);
    }
    const { args: globalArgs } = parseInterpolationStrings(interpolationStrings, operationConfig.argTypeMap);
    rootTypeComposer.addFieldArgs(fieldName, globalArgs);
  }

  logger.debug(`Building the executable schema.`);
  return schemaComposer;
}
