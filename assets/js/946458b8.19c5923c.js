/*! For license information please see 946458b8.19c5923c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[412677],{415640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(824246),r=t(511151);const a={id:"linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo"},i=void 0,s={id:"tooling/local-dev/linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo",source:"@site/../docs/tooling/local-dev/linking-local-packages.md",sourceDirName:"tooling/local-dev",slug:"/tooling/local-dev/linking-local-packages",permalink:"/docs/tooling/local-dev/linking-local-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tooling/local-dev/linking-local-packages.md",tags:[],version:"current",frontMatter:{id:"linking-local-packages",title:"Linking in Local Packages",description:"How to link in other local packages into your Backstage monorepo"},sidebar:"docs",previous:{title:"Commands",permalink:"/docs/tooling/cli/commands"},next:{title:"Debugging Backstage",permalink:"/docs/tooling/local-dev/debugging"}},c={},l=[{value:"Why?",id:"why",level:2},{value:"Linking in Backstage NPM Packages",id:"linking-in-backstage-npm-packages",level:2},{value:"Making Backstage Changes",id:"making-backstage-changes",level:2},{value:"Common Problems",id:"common-problems",level:2},{value:"Backend Issues",id:"backend-issues",level:3},{value:"Typescript Issues",id:"typescript-issues",level:3},{value:"Version Issues",id:"version-issues",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,o.jsx)(n.p,{children:"If you are looking to make changes within the core Backstage repository and test\nthose changes within your Backstage application, you will need to link the two\ntogether:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"~/backstage                // cloned from Github\n~/my-backstage-application // generated using npx\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For example, you might want to make modifications to ",(0,o.jsx)(n.code,{children:"@backstage/core-plugin-api"})," and try them out in your company's\ninstance of Backstage."]}),"\n",(0,o.jsx)(n.h2,{id:"linking-in-backstage-npm-packages",children:"Linking in Backstage NPM Packages"}),"\n",(0,o.jsxs)(n.p,{children:["To link in external packages, add them to your root ",(0,o.jsx)(n.code,{children:"package.json"})," and ",(0,o.jsx)(n.code,{children:"lerna.json"}),"\n",(0,o.jsx)(n.code,{children:'"workspace"'})," paths. These can be either relative or absolute paths with or without\nglobs."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="/lerna.json"',children:'...\n"packages": [\n  "packages/*",\n  "plugins/*",\n  "../backstage/packages/core-plugin-api", // New path added to work on @backstage/core-plugin-api\n],\n...\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="/package.json"',children:'...\n"workspaces": {\n  "packages": [\n    "packages/*",\n    "plugins/*",\n    "../backstage/packages/core-plugin-api", // New path added to work on @backstage/core-plugin-api\n  ],\n}\n...\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now reinstall all packages from the root to make yarn set up symlinks from your application to the core Backstage clone:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,o.jsx)(n.h2,{id:"making-backstage-changes",children:"Making Backstage Changes"}),"\n",(0,o.jsxs)(n.p,{children:["With this in place you can now modify the ",(0,o.jsx)(n.code,{children:"@backstage/core-plugin-api"})," package\nwithin the main repo, and have those changes be reflected and tested in your\napp. Simply run your app using ",(0,o.jsx)(n.code,{children:"yarn dev"})," (or ",(0,o.jsx)(n.code,{children:"yarn start"})," for just frontend) as\nnormal."]}),"\n",(0,o.jsx)(n.h2,{id:"common-problems",children:"Common Problems"}),"\n",(0,o.jsx)(n.h3,{id:"backend-issues",children:"Backend Issues"}),"\n",(0,o.jsxs)(n.p,{children:["For backend packages you need to make sure that linked packages are\nnot dependencies of any non-linked package. If you for example want to work on\n",(0,o.jsx)(n.code,{children:"@backstage/backend-common"}),", you need to also link in other backend plugins and\npackages that depend on ",(0,o.jsx)(n.code,{children:"@backstage/backend-common"}),", or temporarily disable\nthose plugins in your backend. This is because the transformation of backend\nmodule tree stops whenever a non-local package is encountered, and from that\npoint node will ",(0,o.jsx)(n.code,{children:"require"})," packages directly for that entire module subtree."]}),"\n",(0,o.jsx)(n.h3,{id:"typescript-issues",children:"Typescript Issues"}),"\n",(0,o.jsxs)(n.p,{children:["Type checking can also have issues when linking in external packages, since the\nlinked in packages will use the types in the external project and dependency\nversion mismatches between the two projects may cause errors. To fix any of\nthose errors you need to sync versions of the dependencies in the two projects.\nA simple way to do this can be to copy over ",(0,o.jsx)(n.code,{children:"yarn.lock"})," from the external\nproject and run ",(0,o.jsx)(n.code,{children:"yarn install"}),", although this is quite intrusive and can cause\nother issues in existing projects, so use this method with care. It can often be\nbest to simply ignore the type errors, as app serving will work just fine\nanyway."]}),"\n",(0,o.jsxs)(n.p,{children:["Another issue with type checking is that the incremental type cache doesn't\ninvalidate correctly for the linked in packages, causing type checking to not\nreflect changes made to types. You can work around this by either setting\n",(0,o.jsx)(n.code,{children:"compilerOptions.incremental = false"})," in ",(0,o.jsx)(n.code,{children:"tsconfig.json"}),", or by deleting the\ntypes cache folder ",(0,o.jsx)(n.code,{children:"dist-types"})," before running ",(0,o.jsx)(n.code,{children:"yarn tsc"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"version-issues",children:"Version Issues"}),"\n",(0,o.jsxs)(n.p,{children:["While ",(0,o.jsx)(n.code,{children:"yarn install"})," might not error, it does not mean that the linking worked properly.\nYou will know that linking worked properly when:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Your Backstage application root ",(0,o.jsx)(n.code,{children:"/node_modules/@backstage/[some package]"})," is a symlink"]}),"\n",(0,o.jsxs)(n.li,{children:["Your Backstage application ",(0,o.jsx)(n.code,{children:"/packages/app/node_modules"})," and ",(0,o.jsx)(n.code,{children:"/packages/backend/node_modules"})," does\nnot contain the package you are attempting to link!"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If you see Yarn continuing to download the package you are trying to link from NPM, you might need to be\nexplicit in your ",(0,o.jsx)(n.code,{children:"package.json"})," version so that it exactly matches what you have in the cloned Backstage\nrepository on your machine. For example, if you have cloned ",(0,o.jsx)(n.code,{children:"/plugins/catalog"})," with version\n",(0,o.jsx)(n.code,{children:'"version": "1.19.1-next.1"'})," you will need to be explicit in your application to point to ",(0,o.jsx)(n.code,{children:'"1.19.1-next.1"'}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},371426:(e,n,t)=>{var o=t(827378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,a={},l=null,u=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,o)&&!c.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:r,type:e,key:l,ref:u,props:a,_owner:s.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function k(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||h}function m(){}function b(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=k.prototype;var v=b.prototype=new m;v.constructor=b,g(v,k.prototype),v.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,o){var r,a={},i=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)j.call(n,r)&&!_.hasOwnProperty(r)&&(a[r]=n[r]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:t,type:e,key:i,ref:s,props:a,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,r,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case o:c=!0}}if(c)return i=i(c=e),e=""===a?"."+P(c,0):a,x(i)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),R(i,n,r,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),n.push(i)),1;if(c=0,a=""===a?".":a+":",x(e))for(var l=0;l<e.length;l++){var u=a+P(s=e[l],l);c+=R(s,n,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=R(s=s.value,n,r,u=a+P(s,l++),i);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,n,t){if(null==e)return e;var o=[],r=0;return R(e,o,"","",(function(e){return n.call(t,e,r++)})),o}function I(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},B={transition:null},N={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:B,ReactCurrentOwner:w};function T(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=k,n.Fragment=r,n.Profiler=i,n.PureComponent=b,n.StrictMode=a,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,n.act=T,n.cloneElement=function(e,n,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=g({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,s=w.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)j.call(n,l)&&!_.hasOwnProperty(l)&&(r[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:t,type:e.type,key:a,ref:i,props:r,_owner:s}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},n.memo=function(e,n){return{$$typeof:p,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=B.transition;B.transition={};try{e()}finally{B.transition=n}},n.unstable_act=T,n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(667294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);