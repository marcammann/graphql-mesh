(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),c=(a(0),a(297)),p={},i={unversionedId:"api/interfaces/types_src.yamlconfig.graphqlhandler",id:"api/interfaces/types_src.yamlconfig.graphqlhandler",isDocsHomePage:!1,title:"types_src.yamlconfig.graphqlhandler",description:"Interface: GraphQLHandler",source:"@site/docs/api/interfaces/types_src.yamlconfig.graphqlhandler.md",slug:"/api/interfaces/types_src.yamlconfig.graphqlhandler",permalink:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.yamlconfig.graphqlhandler.md",version:"current",sidebar:"sidebar",previous:{title:"types_src.yamlconfig.filterhelperargsopts",permalink:"/docs/api/interfaces/types_src.yamlconfig.filterhelperargsopts"},next:{title:"types_src.yamlconfig.graphqlintrospectioncachingoptions",permalink:"/docs/api/interfaces/types_src.yamlconfig.graphqlintrospectioncachingoptions"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"batch",id:"batch",children:[]},{value:"cacheIntrospection",id:"cacheintrospection",children:[]},{value:"customFetch",id:"customfetch",children:[]},{value:"endpoint",id:"endpoint",children:[]},{value:"introspection",id:"introspection",children:[]},{value:"method",id:"method",children:[]},{value:"multipart",id:"multipart",children:[]},{value:"operationHeaders",id:"operationheaders",children:[]},{value:"schemaHeaders",id:"schemaheaders",children:[]},{value:"useGETForQueries",id:"usegetforqueries",children:[]},{value:"useSSEForSubscription",id:"usesseforsubscription",children:[]},{value:"webSocketImpl",id:"websocketimpl",children:[]}]}],s={toc:o};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-graphqlhandler"},"Interface: GraphQLHandler"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/types_src"}),"types/src"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"../modules/types_src.yamlconfig"}),"YamlConfig"),".GraphQLHandler"),Object(c.b)("p",null,"Handler for remote/local/third-party GraphQL schema"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphQLHandler"))),Object(c.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#batch"}),"batch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#cacheintrospection"}),"cacheIntrospection")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#customfetch"}),"customFetch")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#endpoint"}),"endpoint")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#introspection"}),"introspection")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#method"}),"method")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#multipart"}),"multipart")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#operationheaders"}),"operationHeaders")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#schemaheaders"}),"schemaHeaders")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#usegetforqueries"}),"useGETForQueries")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#usesseforsubscription"}),"useSSEForSubscription")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/interfaces/types_src.yamlconfig.graphqlhandler#websocketimpl"}),"webSocketImpl"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"batch"},"batch"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"batch"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Batch requests"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L236"}),"packages/types/src/config.ts:236")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"cacheintrospection"},"cacheIntrospection"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"cacheIntrospection"),": ",Object(c.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"types_src.yamlconfig.graphqlintrospectioncachingoptions"}),Object(c.b)("em",{parentName:"a"},"GraphQLIntrospectionCachingOptions"))),Object(c.b)("p",null,"Cache Introspection (Any of: GraphQLIntrospectionCachingOptions, Boolean)"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L228"}),"packages/types/src/config.ts:228")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"customfetch"},"customFetch"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"customFetch"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Path to a custom W3 Compatible Fetch Implementation"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L215"}),"packages/types/src/config.ts:215")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"endpoint"},"endpoint"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"endpoint"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"A url or file path to your remote GraphQL endpoint.\nIf you provide a path to a code file(js or ts),\nother options will be ignored and the schema exported from the file will be used directly."),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L188"}),"packages/types/src/config.ts:188")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"introspection"},"introspection"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"introspection"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Path to the introspection\nYou can seperately give schema introspection"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L224"}),"packages/types/src/config.ts:224")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"method"},"method"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"method"),": ",Object(c.b)("em",{parentName:"p"},"GET")," ","|"," ",Object(c.b)("em",{parentName:"p"},"POST")),Object(c.b)("p",null,"HTTP method used for GraphQL operations (Allowed values: GET, POST)"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L207"}),"packages/types/src/config.ts:207")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"multipart"},"multipart"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"multipart"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Enable multipart/formdata in order to support file uploads"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L232"}),"packages/types/src/config.ts:232")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"operationheaders"},"operationHeaders"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"operationHeaders"),": { ","[k: string]",": ",Object(c.b)("em",{parentName:"p"},"any"),";  }"),Object(c.b)("p",null,"JSON object representing the Headers to add to the runtime of the API calls only for operation during runtime"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L197"}),"packages/types/src/config.ts:197")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"schemaheaders"},"schemaHeaders"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"schemaHeaders"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"JSON object representing the Headers to add to the runtime of the API calls only for schema introspection\nYou can also provide ",Object(c.b)("inlineCode",{parentName:"p"},".js")," or ",Object(c.b)("inlineCode",{parentName:"p"},".ts")," file path that exports schemaHeaders as an object"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L193"}),"packages/types/src/config.ts:193")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"usegetforqueries"},"useGETForQueries"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"useGETForQueries"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Use HTTP GET for Query operations"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L203"}),"packages/types/src/config.ts:203")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"usesseforsubscription"},"useSSEForSubscription"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"useSSEForSubscription"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Use Server Sent Events instead of WebSocket for Subscriptions"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L211"}),"packages/types/src/config.ts:211")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"websocketimpl"},"webSocketImpl"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"webSocketImpl"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Path to a custom W3 Compatible WebSocket Implementation"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L219"}),"packages/types/src/config.ts:219")))}b.isMDXComponent=!0},297:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),l=b(a),m=r,u=l["".concat(p,".").concat(m)]||l[m]||h[m]||c;return a?n.a.createElement(u,i(i({ref:t},s),{},{components:a})):n.a.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,p=new Array(c);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<c;s++)p[s]=a[s];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);