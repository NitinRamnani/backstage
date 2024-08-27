/*! For license information please see da91ee9d.d4fd4305.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[646671],{116749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(824246),s=n(511151);const a={},i="Declarative Integrated Search Plugin",o={id:"features/search/declarative-integration",title:"Declarative Integrated Search Plugin",description:"Disclaimer:",source:"@site/../docs/features/search/declarative-integration.md",sourceDirName:"features/search",slug:"/features/search/declarative-integration",permalink:"/docs/features/search/declarative-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/declarative-integration.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Main Concepts",id:"main-concepts",level:2},{value:"Search Plugin",id:"search-plugin",level:2},{value:"Installation",id:"installation",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Customizations",id:"customizations",level:3},{value:"Future Enhancement Opportunities",id:"future-enhancement-opportunities",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"declarative-integrated-search-plugin",children:"Declarative Integrated Search Plugin"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Disclaimer:"}),"\nDeclarative integration is in an experimental stage and is not recommended for production."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This is a guide for experimenting with ",(0,r.jsx)(t.code,{children:"Search"})," in a declarative integrated Backstage front-end application."]}),"\n",(0,r.jsx)(t.h2,{id:"main-concepts",children:"Main Concepts"}),"\n",(0,r.jsxs)(t.p,{children:["Using declarative integration, you can customize your Backstage instance without writing code, see this ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/18372",children:"RFC"})," for more information."]}),"\n",(0,r.jsx)(t.p,{children:"In the new frontend system, everything that extends Backstage's core features is called an extension, so an extension can be anything from an API to a page component."}),"\n",(0,r.jsx)(t.p,{children:"Extensions produces output artifacts and these artifacts are inputs consumed by other extensions:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"search extensions example",src:n(765276).Z+"",width:"1160",height:"365"})}),"\n",(0,r.jsxs)(t.p,{children:["In the image above, a ",(0,r.jsx)(t.code,{children:"SearchResultItem"})," extension outputs a component and this component is injected as input to the ",(0,r.jsx)(t.code,{children:"SearchPage"}),' "items" attachment point. The ',(0,r.jsx)(t.code,{children:"SearchPage"})," in turn uses the search result items to compose a search page element and outputs a route path and the page element so they are used as inputs attached to the ",(0,r.jsx)(t.code,{children:"CoreRoutes"})," extension. Finally, the ",(0,r.jsx)(t.code,{children:"CoreRoutes"})," renders the page element when the location matches the search page path."]}),"\n",(0,r.jsxs)(t.p,{children:["The basic concepts briefly mentioned are crucial to understanding how the declarative version of the ",(0,r.jsx)(t.code,{children:"Search"})," plugin works."]}),"\n",(0,r.jsx)(t.h2,{id:"search-plugin",children:"Search Plugin"}),"\n",(0,r.jsx)(t.p,{children:"The search plugin is a collection of extensions that implement the search feature in Backstage."}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["Only one step is required to start using the ",(0,r.jsx)(t.code,{children:"Search"})," plugin within declarative integration, so all you have to do is to install the ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog"})," and ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search"})," packages, (e.g., ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/app-next",children:"app-next"}),"):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"yarn add @backstage/plugin-catalog @backstage/plugin-search\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Search"})," plugin depends on the ",(0,r.jsx)(t.code,{children:"Catalog API"}),", that's the reason we have to install the ",(0,r.jsx)(t.code,{children:" @backstage/plugin-catalog"})," package too."]}),"\n",(0,r.jsx)(t.h3,{id:"extensions",children:"Extensions"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Search"})," plugin provides the following ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/3f4a44aef39bd8dbf5098e60b6fdf66fd754c6d9/plugins/search/src/alpha.tsx#L246",children:"extensions preset"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"SearchApi"}),": Outputs a concrete implementation for the ",(0,r.jsx)(t.code,{children:"Search API"})," that is attached as an input to the ",(0,r.jsx)(t.code,{children:"Core"})," apis holder;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"SearchPage"}),": Outputs a component that represents the advanced ",(0,r.jsx)(t.code,{children:"Search"})," page interface, this extension expects ",(0,r.jsx)(t.code,{children:"Search"})," result items components as inputs to use them for rendering results in a custom way;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"SearchNavItem"}),": It is an extension that outputs a data that represents a ",(0,r.jsx)(t.code,{children:"Search"})," item in the main application sidebar, in other words, it inputs a sidebar item to the ",(0,r.jsx)(t.code,{children:"Core"})," nav extension."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"configurations",children:"Configurations"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Search"})," extensions are configurable via ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," file in the ",(0,r.jsx)(t.code,{children:"app.extensions"})," field using the extension id as the configuration key:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Example disabling the search page extension"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  extensions:\n    - page:search: false # \u2728\n    - nav-item:search: false # \u2728\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Example setting the search sidebar item title"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  extensions:\n    - nav-item:search: # \u2728\n        config:\n          title: 'Search Page'\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Known limitations:"}),"\nIt is currently not possible to open modals in sidebar items and also configure a different icon via configuration file, but it is already on the maintainers' radar."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"customizations",children:"Customizations"}),"\n",(0,r.jsxs)(t.p,{children:["Plugin developers can use the ",(0,r.jsx)(t.code,{children:"createSearchResultItemExtension"})," factory provided by the ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search-react"})," for building their own custom ",(0,r.jsx)(t.code,{children:"Search"})," result item extensions."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Example creating a custom ",(0,r.jsx)(t.code,{children:"TechDocsSearchResultItemExtension"})]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// plugins/techdocs/alpha.tsx\nimport { createSearchResultListItemExtension } from '@backstage/plugin-search-react/alpha';\n\n/** @alpha */\nexport const TechDocsSearchResultListItemExtension =\n  createSearchResultListItemExtension({\n    id: 'techdocs',\n    configSchema: createSchemaFromZod(z =>\n      z.object({\n        noTrack: z.boolean().default(false),\n        lineClamp: z.number().default(5),\n      }),\n    ),\n    predicate: result => result.type === 'techdocs',\n    component: async ({ config }) => {\n      const { TechDocsSearchResultListItem } = await import(\n        './components/TechDocsSearchResultListItem'\n      );\n      return props => <TechDocsSearchResultListItem {...props} {...config} />;\n    },\n  });\n"})}),"\n",(0,r.jsxs)(t.p,{children:['In the snippet above, a plugin developer is providing a custom component for rendering search results of type "techdocs". The custom result item extension will be enabled by default once the ',(0,r.jsx)(t.code,{children:"@backstage/plugin-techdocs"})," package is installed, that means adopters don't have to enable the extension manually via configuration file."]}),"\n",(0,r.jsxs)(t.p,{children:["When a Backstage adopter doesn't want to use the custom ",(0,r.jsx)(t.code,{children:"TechDocs"})," search result item after installing the ",(0,r.jsx)(t.code,{children:"TechDocs"})," plugin, they could disable it via Backstage configuration file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  extensions:\n    - plugin.search.result.item.techdocs: false # \u2728\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Because a configuration schema was provided to the extension factory, Backstage adopters will be able to customize ",(0,r.jsx)(t.code,{children:"TechDocs"})," search results ",(0,r.jsx)(t.strong,{children:"line clamp"})," that defaults to 3 and also ",(0,r.jsx)(t.strong,{children:"disable automatic analytics events tracking"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  extensions:\n    - plugin.search.result.item.techdocs:\n        config: # \u2728\n          noTrack: true\n          lineClamp: 3\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"createSearchResultItemExtension"})," function returns a Backstage's extension representation as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'{\n  "$$type": "@backstage/Extension", // [1]\n  "id": "plugin.search.result.item.techdocs", // [2]\n  "at": "plugin.search.page/items", // [3]\n  "inputs": {} // [4\ufe0f]\n  "output": { // [5\ufe0f]\n    "item": {\n      "$$type": "@backstage/ExtensionDataRef",\n      "id": "plugin.search.result.item.data",\n      "config": {}\n    }\n  },\n  "configSchema": { // [6\ufe0f]\n    "schema": {\n      "type": "object",\n      "properties": {\n        "noTrack": {\n          "type": "boolean",\n          "default": false\n        },\n        "lineClamp": {\n          "type": "number",\n          "default": 5\n        }\n      },\n      "additionalProperties": false,\n      "$schema": "http://json-schema.org/draft-07/schema#"\n    }\n  },\n  "disabled": false, // [7\ufe0f]\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"In this object, you can see exactly what will happen once the custom extension is installed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"[1] $$type"}),": declares that the object represents an extension;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"[2] id"}),": Is a unique identification for the extension, the ",(0,r.jsx)(t.code,{children:"plugin.search.result.item.techdocs"})," is the key used to configure the extension in the ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," file;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"[3] at"}),": It represents the extension attachment point, so the value ",(0,r.jsx)(t.code,{children:"plugin.search.page/items"})," says that the ",(0,r.jsx)(t.code,{children:"TechDocs"}),'\'s search result item output will be injected as input on the "items" attachment expected by the search page extension;']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"[4] inputs"}),": in this case is an empty object because this extension doesn't expect inputs;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"[5] output"}),": Object representing the artifact produced by the ",(0,r.jsx)(t.code,{children:"TechDocs"})," result item extension, on the example, it is a react component reference;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"[6] configSchema"}),": represents the ",(0,r.jsx)(t.code,{children:"TechDocs"})," search result item configuration definition, this is the same schema that adopters will use for customizing the extension via ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," file;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"[7] disable"}),": Says that the result item extension will be enable by default when the ",(0,r.jsx)(t.code,{children:"TechDocs"})," plugin is installed in the app."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To complete the development cycle for creating a custom search result item extension, we should provide the extension via ",(0,r.jsx)(t.code,{children:"TechDocs"})," plugin:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// plugins/techdocs/alpha.tsx\nimport { createPlugin } from \"@backstage/frontend-plugin-api\";\n\n// plugins should be always exported as default\nexport default createPlugin({\n  id: 'techdocs'\n  extensions: [TechDocsSearchResultItemExtension]\n})\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Here is the ",(0,r.jsx)(t.code,{children:"plugins/techdocs/alpha.tsx"})," final version, and you can also take a look at the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs/src/alpha.tsx",children:"actual implementation"})," of a custom ",(0,r.jsx)(t.code,{children:"TechDocs"})," search result item:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// plugins/techdocs/alpha.tsx\nimport { createPlugin } from '@backstage/frontend-plugin-api';\nimport { createSearchResultListItemExtension } from '@backstage/plugin-search-react/alpha';\n\n/** @alpha */\nexport const TechDocsSearchResultListItemExtension =\n  createSearchResultListItemExtension({\n    id: 'techdocs',\n    configSchema: createSchemaFromZod(z =>\n      z.object({\n        noTrack: z.boolean().default(false),\n        lineClamp: z.number().default(5),\n      }),\n    ),\n    predicate: result => result.type === 'techdocs',\n    component: async ({ config }) => {\n      const { TechDocsSearchResultListItem } = await import(\n        './components/TechDocsSearchResultListItem'\n      );\n      return props => <TechDocsSearchResultListItem {...props} {...config} />;\n    },\n  });\n\n/** @alpha */\nexport default createPlugin({\n  // plugins should be always exported as default\n  id: 'techdocs',\n  extensions: [TechDocsSearchResultListItemExtension],\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"future-enhancement-opportunities",children:"Future Enhancement Opportunities"}),"\n",(0,r.jsx)(t.p,{children:"Backstage maintainers are currently working on the extension replacement feature, and with this release, adopters will also be able to replace extensions provided by plugins, so stay tuned for future updates to this documentation."}),"\n",(0,r.jsxs)(t.p,{children:["The first version of the ",(0,r.jsx)(t.code,{children:"SearchPage"})," extension makes room for the ",(0,r.jsx)(t.code,{children:"Search"})," plugin maintainers to convert filters into extensions as well in the future, if you also would like to collaborate with them on this idea, don't hesitate to open an issue and submit a pull request, your contribution is more than welcome!"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},765276:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/search-extensions-example.drawio-a2709032c54e4fb3c455503f5224b5b1.svg"},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:u,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,x={};function g(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||f}function j(){}function y(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var b=y.prototype=new j;b.constructor=y,m(b,g.prototype),b.isPureReactComponent=!0;var v=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var s,a={},i=null,o=null;if(null!=t)for(s in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,s)&&!w.hasOwnProperty(s)&&(a[s]=t[s]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===a[s]&&(a[s]=c[s]);return{$$typeof:n,type:e,key:i,ref:o,props:a,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,s,a,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+I(c,0):a,v(i)?(s="",null!=e&&(s=e.replace(R,"$&/")+"/"),T(i,t,s,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,s+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",v(e))for(var l=0;l<e.length;l++){var u=a+I(o=e[l],l);c+=T(o,t,s,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=T(o=o.value,t,s,u=a+I(o,l++),i);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,n){if(null==e)return e;var r=[],s=0;return T(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},$={transition:null},O={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=s,t.Profiler=i,t.PureComponent=y,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=L,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=m({},e.props),a=e.key,i=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,o=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)S.call(t,l)&&!w.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:s,_owner:o}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(667294);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);