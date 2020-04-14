(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),i=(n(0),n(202)),l={id:"json-schema",title:"JSON Schema",sidebar_label:"JSON Schema"},o={id:"handlers/json-schema",title:"JSON Schema",description:"![image](https://user-images.githubusercontent.com/20847995/79218994-11434880-7e5a-11ea-8594-08185526080f.png)",source:"@site/docs/handlers/json-schema.md",permalink:"/docs/handlers/json-schema",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/json-schema.md",sidebar_label:"JSON Schema",sidebar:"sidebar",previous:{title:"gRPC & Protobuf",permalink:"/docs/handlers/grpc"},next:{title:"PostgreSQL / PostGraphile",permalink:"/docs/handlers/postgraphile"}},c=[{value:"Codesandbox Example",id:"codesandbox-example",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/20847995/79218994-11434880-7e5a-11ea-8594-08185526080f.png",alt:"image"}))),Object(i.b)("p",null,"This handler allows you to load any remote REST service, and describe it's request/response using the YAML config."),Object(i.b)("p",null,"With this handler, you can easily customize and control the built GraphQL schema."),Object(i.b)("p",null,"To get started, install the handler library from NPM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/json-schema\n")),Object(i.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: MyApi\n    handler:\n      jsonSchema:\n        baseUrl: https://some-service-url/endpoint-path/\n        operations:\n          - type: Query\n            field: users\n            path: /users\n            method: GET\n            responseSchema: ./json-schemas/users.json\n")),Object(i.b)("h2",{id:"codesandbox-example"},"Codesandbox Example"),Object(i.b)("p",null,"You can check out our example that uses JSON Schema handler with mock data."),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/json-schema-example?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"json-schema-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(i.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(i.b)("p",null,Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"baseUrl")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"typeReferences")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of Object"),"): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"reference")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sharedType")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inputType")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"outputType")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operations")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of Object"),", required): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"field")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"description")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String (Query | Mutation)"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"method")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String (GET | DELETE | POST | PUT)"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestSchema")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"responseSchema")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"headers")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),")"))))))}b.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,u=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return n?a.a.createElement(u,o({ref:t},p,{components:n})):a.a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);