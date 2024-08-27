/*! For license information please see f7097385.ae631f2d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[89508],{781988:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var n=t(824246),o=t(511151);const s={id:"plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest"},i=void 0,u={id:"reference/plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest",source:"@site/../docs/reference/plugin-permission-common.authorizepermissionrequest.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.authorizepermissionrequest",permalink:"/docs/reference/plugin-permission-common.authorizepermissionrequest",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-common.authorizepermissionrequest.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.authorizepermissionrequest",title:"AuthorizePermissionRequest",description:"API reference for AuthorizePermissionRequest"}},c={},a=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.authorizepermissionrequest",children:(0,n.jsx)(r.code,{children:"AuthorizePermissionRequest"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Request object for ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator.authorize",children:"PermissionEvaluator.authorize()"}),". If a ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"})," is provided, it must include a corresponding ",(0,n.jsx)(r.code,{children:"resourceRef"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type AuthorizePermissionRequest = {\n    permission: Exclude<Permission, ResourcePermission>;\n    resourceRef?: never;\n} | {\n    permission: ResourcePermission;\n    resourceRef: string;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"})]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,s={},a=null,f=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:f,props:s,_owner:u.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||d}function v(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||d}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=_.prototype;var g=b.prototype=new v;g.constructor=b,y(g,_.prototype),g.isPureReactComponent=!0;var R=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,n){var o,s={},i=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,o)&&!S.hasOwnProperty(o)&&(s[o]=r[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var a=Array(c),f=0;f<c;f++)a[f]=arguments[f+2];s.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:t,type:e,key:i,ref:u,props:s,_owner:x.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,s,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case n:c=!0}}if(c)return i=i(c=e),e=""===s?"."+w(c,0):s,R(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(i,r,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),r.push(i)),1;if(c=0,s=""===s?".":s+":",R(e))for(var a=0;a<e.length;a++){var f=s+w(u=e[a],a);c+=C(u,r,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(u=e.next()).done;)c+=C(u=u.value,r,o,f=s+w(u,a++),i);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function q(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},z={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:z,ReactCurrentOwner:x};function I(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=i,r.PureComponent=b,r.StrictMode=s,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.act=I,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=x.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in r)j.call(r,a)&&!S.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==c?c[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){c=Array(a);for(var f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:t,type:e.type,key:s,ref:i,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:q}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=z.transition;z.transition={};try{e()}finally{z.transition=r}},r.unstable_act=I,r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,t){return O.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,t){return O.current.useReducer(e,r,t)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return O.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return O.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>u,a:()=>i});var n=t(667294);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);