/*! For license information please see 70a198d6.ebbc8aea.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[83364],{474472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(824246),o=r(511151);const i={id:"provider",title:"OAuth 2 Proxy Provider",sidebar_label:"OAuth 2 Custom Proxy",description:"Adding OAuth2Proxy as an authentication provider in Backstage"},a=void 0,s={id:"auth/oauth2-proxy/provider",title:"OAuth 2 Proxy Provider",description:"Adding OAuth2Proxy as an authentication provider in Backstage",source:"@site/../docs/auth/oauth2-proxy/provider.md",sourceDirName:"auth/oauth2-proxy",slug:"/auth/oauth2-proxy/provider",permalink:"/docs/auth/oauth2-proxy/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/oauth2-proxy/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"OAuth 2 Proxy Provider",sidebar_label:"OAuth 2 Custom Proxy",description:"Adding OAuth2Proxy as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Okta",permalink:"/docs/auth/okta/provider"},next:{title:"OneLogin",permalink:"/docs/auth/onelogin/provider"}},u={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Backstage ",(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," package comes with an\n",(0,n.jsx)(t.code,{children:"oauth2Proxy"})," authentication provider that can authenticate users by using a\n",(0,n.jsx)(t.a,{href:"https://github.com/oauth2-proxy/oauth2-proxy",children:"oauth2-proxy"})," in front of an\nactual Backstage instance. This enables to reuse existing authentications within\na cluster. In general the ",(0,n.jsx)(t.code,{children:"oauth2-proxy"})," supports all OpenID Connect providers,\nfor more details check this\n",(0,n.jsx)(t.a,{href:"https://oauth2-proxy.github.io/oauth2-proxy/docs/configuration/oauth_provider",children:"list of supported providers"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["The provider configuration can be added to your ",(0,n.jsx)(t.code,{children:"app-config.yaml"})," under the root\n",(0,n.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"auth:\n  environment: development\n  providers:\n    oauth2Proxy:\n      signIn:\n        resolvers:\n          # typically you would pick one of these\n          - resolver: emailMatchingUserEntityProfileEmail\n          - resolver: emailLocalPartMatchingUserEntityName\n          - resolver: forwardedUserMatchingUserEntityName\n"})}),"\n",(0,n.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,n.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,n.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,n.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"forwardedUserMatchingUserEntityName"}),": Matches the value in the ",(0,n.jsx)(t.code,{children:"x-forwarded-user"})," header from the auth provider with the User entity that has a matching ",(0,n.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"note",children:(0,n.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,n.jsx)(t.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,n.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,n.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-oauth2-proxy-provider\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then we will need to this line:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-auth-backend-module-oauth2-proxy-provider'),\n);\n/* highlight-add-end */\n"})}),"\n",(0,n.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/auth/#sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"})," for pointers on how to set up the sign-in page, and to also make it work smoothly for local development. You'll use ",(0,n.jsx)(t.code,{children:"oauth2Proxy"})," as the provider name."]}),"\n",(0,n.jsxs)(t.p,{children:["If you ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver#building-custom-resolvers",children:"provide a custom sign in resolver"}),", you can skip the ",(0,n.jsx)(t.code,{children:"signIn"})," block entirely."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}function g(){}function x(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var b=x.prototype=new g;b.constructor=x,y(b,v.prototype),b.isPureReactComponent=!0;var k=Array.isArray,_=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,o)&&!w.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:j.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return a=a(u=e),e=""===i?"."+C(u,0):i,k(a)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),O(a,t,o,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(u=0,i=""===i?".":i+":",k(e))for(var c=0;c<e.length;c++){var l=i+C(s=e[c],c);u+=O(s,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(s=e.next()).done;)u+=O(s=s.value,t,o,l=i+C(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function R(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},A={transition:null},N={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:A,ReactCurrentOwner:j};function U(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=x,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=U,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)_.call(t,c)&&!w.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=U,t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var n=r(667294);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);