(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(1),o=n(9),a=(n(0),n(202)),i={id:"snapshot",title:"Snapshot Transform",sidebar_label:"Snapshot"},s={id:"transforms/snapshot",title:"Snapshot Transform",description:"The `snapshot` transform allow you to apply snapshot for development usage.",source:"@site/docs/transforms/snapshot.md",permalink:"/docs/transforms/snapshot",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/transforms/snapshot.md",sidebar_label:"Snapshot",sidebar:"sidebar",previous:{title:"Cache Transform",permalink:"/docs/transforms/cache"},next:{title:"Mock Transform",permalink:"/docs/transforms/mock"}},l=[{value:"How to use?",id:"how-to-use",children:[]},{value:"Codesandbox Example",id:"codesandbox-example",children:[]},{value:"Config API Reference",id:"config-api-reference",children:[]}],p={rightToc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"snapshot")," transform allow you to apply snapshot for development usage."),Object(a.b)("p",null,"The snapshot transform writes the responses of your remote data source to your file-system and then uses it instead of re-fetching it every time. It's alse useful because you can easily manipulate your data manually, and see how your API mesh responds to it."),Object(a.b)("p",null,"To get started with this transform, install it from npm:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn add @graphql-mesh/transform-snapshot\n")),Object(a.b)("h2",{id:"how-to-use"},"How to use?"),Object(a.b)("p",null,"Add the following configuration to your Mesh config file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"transforms:\n  - snapshot:\n      if: \"process.env.NODE_ENV != 'production'\"\n      apply: \n        - Query.*\n      outputDir: __snapshots__\n")),Object(a.b)("p",null,"The following snapshot will work if you are in development environment (see the ",Object(a.b)("inlineCode",{parentName:"p"},"if")," command)."),Object(a.b)("p",null,"To modify your snapshots and change the responses, go to ",Object(a.b)("inlineCode",{parentName:"p"},"__snapshots__")," and modify the responses under those files. "),Object(a.b)("h2",{id:"codesandbox-example"},"Codesandbox Example"),Object(a.b)("p",null,"You can check out our example that uses SOAP Handler with snapshot transform."),Object(a.b)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/country-info?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"country-info-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),Object(a.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(a.b)("p",null,Object(a.b)("ul",{parentName:"p"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"if")," -  - Expression for when to activate this extension.\nValue can be a valid JS expression string or a boolean One of: ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"String")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Boolean")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"apply")," (type: ",Object(a.b)("inlineCode",{parentName:"li"},"Array of String"),", required) - Resolver to be applied\nFor example;\napply:\n- Query.",Object(a.b)("em",{parentName:"li"}," <- ")," will apply this extension to all fields of Query type\n- Mutation.someMutationButProbablyYouWontNeedIt"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"outputDir")," (type: ",Object(a.b)("inlineCode",{parentName:"li"},"String"),", required) - Path to the directory of the generated snapshot files"))))}c.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,s({ref:t},p,{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);