/*! For license information please see ce665d95.4d942c24.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[737641],{521779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=t(824246),o=t(511151);const c={id:"core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons"},u=void 0,a={id:"reference/core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons",source:"@site/../docs/reference/core-app-api.appicons.md",sourceDirName:"reference",slug:"/reference/core-app-api.appicons",permalink:"/docs/reference/core-app-api.appicons",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.appicons.md",tags:[],version:"current",frontMatter:{id:"core-app-api.appicons",title:"AppIcons",description:"API reference for AppIcons"}},i={},s=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-app-api",children:(0,r.jsx)(n.code,{children:"@backstage/core-app-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/core-app-api.appicons",children:(0,r.jsx)(n.code,{children:"AppIcons"})})]}),"\n",(0,r.jsx)(n.p,{children:"A set of well-known icons that should be available within an app."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type AppIcons = {\n    'kind:api': IconComponent;\n    'kind:component': IconComponent;\n    'kind:domain': IconComponent;\n    'kind:group': IconComponent;\n    'kind:location': IconComponent;\n    'kind:system': IconComponent;\n    'kind:user': IconComponent;\n    'kind:resource': IconComponent;\n    'kind:template': IconComponent;\n    brokenImage: IconComponent;\n    catalog: IconComponent;\n    chat: IconComponent;\n    dashboard: IconComponent;\n    docs: IconComponent;\n    email: IconComponent;\n    github: IconComponent;\n    group: IconComponent;\n    help: IconComponent;\n    scaffolder: IconComponent;\n    search: IconComponent;\n    techdocs: IconComponent;\n    user: IconComponent;\n    warning: IconComponent;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/core-plugin-api.iconcomponent",children:"IconComponent"})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,t){var r,c={},s=null,p=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(p=n.ref),n)u.call(n,r)&&!i.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:p,props:c,_owner:a.current}}n.Fragment=c,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),l=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function _(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function b(){}function v(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var C=v.prototype=new b;C.constructor=v,m(C,_.prototype),C.isPureReactComponent=!0;var I=Array.isArray,k=Object.prototype.hasOwnProperty,g={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,n,r){var o,c={},u=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(u=""+n.key),n)k.call(n,o)&&!S.hasOwnProperty(o)&&(c[o]=n[o]);var i=arguments.length-2;if(1===i)c.children=r;else if(1<i){for(var s=Array(i),p=0;p<i;p++)s[p]=arguments[p+2];c.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:t,type:e,key:u,ref:a,props:c,_owner:g.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,o,c,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case r:i=!0}}if(i)return u=u(i=e),e=""===c?"."+E(i,0):c,I(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),R(u,n,o,"",(function(e){return e}))):null!=u&&(x(u)&&(u=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),n.push(u)),1;if(i=0,c=""===c?".":c+":",I(e))for(var s=0;s<e.length;s++){var p=c+E(a=e[s],s);i+=R(a,n,o,p,u)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(a=e.next()).done;)i+=R(a=a.value,n,o,p=c+E(a,s++),u);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},A={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:A,ReactCurrentOwner:g};function D(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=_,n.Fragment=o,n.Profiler=u,n.PureComponent=v,n.StrictMode=c,n.Suspense=p,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.act=D,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,a=g.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in n)k.call(n,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){i=Array(s);for(var p=0;p<s;p++)i[p]=arguments[p+2];o.children=i}return{$$typeof:t,type:e.type,key:c,ref:u,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=j,n.createFactory=function(e){var n=j.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=x,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=A.transition;A.transition={};try{e()}finally{A.transition=n}},n.unstable_act=D,n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,t){return P.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,t){return P.current.useReducer(e,n,t)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return P.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return P.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>u});var r=t(667294);const o={},c=r.createContext(o);function u(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);