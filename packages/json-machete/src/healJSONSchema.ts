import { JSONSchema } from './types';
import { OnCircularReference, visitJSONSchema } from './visitJSONSchema';

const reservedTypeNames = ['Query', 'Mutation', 'Subscription'];

export async function healJSONSchema(schema: JSONSchema) {
  return visitJSONSchema<JSONSchema>(
    schema,
    (subSchema, { path }) => {
      if (typeof subSchema === 'object') {
        if (!subSchema.title && !subSchema.$ref) {
          // Try to get definition name if missing
          const maybeDefinitionBasedPath = path.includes('/definitions/') ? path.split('/definitions/')[1] : path;
          let pathBasedName = maybeDefinitionBasedPath.split('/properties').join('').split('/').join('_');
          switch (subSchema.type) {
            case 'string':
              // If it has special pattern, use path based name because it is specific
              if (subSchema.pattern || subSchema.maxLength || subSchema.minLength || subSchema.enum) {
                subSchema.title = pathBasedName;
                // Otherwise use the format name
              } else if (subSchema.format) {
                subSchema.title = subSchema.format;
              }
              break;
            case 'integer':
              // Use format name
              if (subSchema.format) {
                subSchema.title = subSchema.format;
              }
              break;
          }
          // If type name is reserved, add a suffix
          if (reservedTypeNames.includes(pathBasedName)) {
            pathBasedName += '_';
          }
          subSchema.title = subSchema.title || pathBasedName;
        }
        // Try to find the type
        if (!subSchema.type) {
          // If required exists without properties
          if (subSchema.required && !subSchema.properties) {
            // Add properties
            subSchema.properties = {};
            for (const missingPropertyName of subSchema.required) {
              subSchema.properties[missingPropertyName] = {
                oneOf: [
                  { type: 'string' },
                  { type: 'integer' },
                  { type: 'boolean' },
                  { type: 'object', additionalProperties: true },
                ],
              };
            }
          }
          // Properties only exist in objects
          if (subSchema.properties) {
            subSchema.type = 'object';
          }
          // Items only exist in arrays
          if (subSchema.items) {
            subSchema.type = 'array';
          }
        }
      }
      return subSchema;
    },
    {
      visitedSubschemaResultMap: new WeakMap(),
      path: '',
      keepObjectRef: true,
      onCircularReference: OnCircularReference.IGNORE,
    }
  );
}
