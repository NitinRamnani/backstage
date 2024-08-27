/*! For license information please see 9c7a6060.15015565.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[134881],{842498:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=n(824246),o=n(511151);const c={id:"backend-dynamic-feature-service.backendpluginprovider.backendplugins",title:"BackendPluginProvider.backendPlugins()",description:"API reference for BackendPluginProvider.backendPlugins()"},u=void 0,a={id:"reference/backend-dynamic-feature-service.backendpluginprovider.backendplugins",title:"BackendPluginProvider.backendPlugins()",description:"API reference for BackendPluginProvider.backendPlugins()",source:"@site/../docs/reference/backend-dynamic-feature-service.backendpluginprovider.backendplugins.md",sourceDirName:"reference",slug:"/reference/backend-dynamic-feature-service.backendpluginprovider.backendplugins",permalink:"/docs/reference/backend-dynamic-feature-service.backendpluginprovider.backendplugins",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-dynamic-feature-service.backendpluginprovider.backendplugins.md",tags:[],version:"current",frontMatter:{id:"backend-dynamic-feature-service.backendpluginprovider.backendplugins",title:"BackendPluginProvider.backendPlugins()",description:"API reference for BackendPluginProvider.backendPlugins()"}},i={},s=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-dynamic-feature-service",children:(0,t.jsx)(r.code,{children:"@backstage/backend-dynamic-feature-service"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-dynamic-feature-service.backendpluginprovider",children:(0,t.jsx)(r.code,{children:"BackendPluginProvider"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-dynamic-feature-service.backendpluginprovider.backendplugins",children:(0,t.jsx)(r.code,{children:"backendPlugins"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"backendPlugins(): BackendDynamicPlugin[];\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/backend-dynamic-feature-service.backenddynamicplugin",children:"BackendDynamicPlugin"}),"[]"]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,t)&&!i.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:l,props:c,_owner:a.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,m={};function k(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}function v(){}function h(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}k.prototype.isReactComponent={},k.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=k.prototype;var g=h.prototype=new v;g.constructor=h,b(g,k.prototype),g.isPureReactComponent=!0;var _=Array.isArray,P=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var o,c={},u=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)P.call(r,o)&&!j.hasOwnProperty(o)&&(c[o]=r[o]);var i=arguments.length-2;if(1===i)c.children=t;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];c.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:n,type:e,key:u,ref:a,props:c,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,c,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case t:i=!0}}if(i)return u=u(i=e),e=""===c?"."+R(i,0):c,_(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(u,r,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(i=0,c=""===c?".":c+":",_(e))for(var s=0;s<e.length;s++){var l=c+R(a=e[s],s);i+=C(a,r,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)i+=C(a=a.value,r,o,l=c+R(a,s++),u);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,r,n){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},B={transition:null},D={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:B,ReactCurrentOwner:S};function T(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,n){$(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=k,r.Fragment=o,r.Profiler=u,r.PureComponent=h,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.act=T,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=b({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=S.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)P.call(r,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:n,type:e.type,key:c,ref:u,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=B.transition;B.transition={};try{e()}finally{B.transition=r}},r.unstable_act=T,r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,n){return I.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,n){return I.current.useReducer(e,r,n)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return I.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return I.current.useTransition()},r.version="18.3.1"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>u});var t=n(667294);const o={},c=t.createContext(o);function u(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);