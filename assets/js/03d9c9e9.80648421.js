/*! For license information please see 03d9c9e9.80648421.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[94561],{148497:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>a});var n=t(824246),o=t(511151);const u={id:"plugin-kubernetes-common.clientcurrentresourceusage",title:"ClientCurrentResourceUsage",description:"API reference for ClientCurrentResourceUsage"},c=void 0,s={id:"reference/plugin-kubernetes-common.clientcurrentresourceusage",title:"ClientCurrentResourceUsage",description:"API reference for ClientCurrentResourceUsage",source:"@site/../docs/reference/plugin-kubernetes-common.clientcurrentresourceusage.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-common.clientcurrentresourceusage",permalink:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-common.clientcurrentresourceusage.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-common.clientcurrentresourceusage",title:"ClientCurrentResourceUsage",description:"API reference for ClientCurrentResourceUsage"}},i={},a=[{value:"Properties",id:"properties",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-common"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage",children:(0,n.jsx)(r.code,{children:"ClientCurrentResourceUsage"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface ClientCurrentResourceUsage \n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage.currentusage",children:"currentUsage"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"number | string"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage.limittotal",children:"limitTotal"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"number | string"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-common.clientcurrentresourceusage.requesttotal",children:"requestTotal"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"number | string"}),(0,n.jsx)(r.td,{})]})]})]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,u={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!i.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:l,props:u,_owner:s.current}}r.Fragment=u,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function g(){}function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var j=_.prototype=new g;j.constructor=_,h(j,b.prototype),j.isPureReactComponent=!0;var x=Array.isArray,v=Object.prototype.hasOwnProperty,k={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,n){var o,u={},c=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(c=""+r.key),r)v.call(r,o)&&!C.hasOwnProperty(o)&&(u[o]=r[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];u.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:t,type:e,key:c,ref:s,props:u,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,u,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return c=c(i=e),e=""===u?"."+w(i,0):u,x(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),$(c,r,o,"",(function(e){return e}))):null!=c&&(R(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),r.push(c)),1;if(i=0,u=""===u?".":u+":",x(e))for(var a=0;a<e.length;a++){var l=u+w(s=e[a],a);i+=$(s,r,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(s=e.next()).done;)i+=$(s=s.value,r,o,l=u+w(s,a++),c);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,r,t){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},I={transition:null},T={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};function A(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=c,r.PureComponent=_,r.StrictMode=u,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.act=A,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,c=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,s=k.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in r)v.call(r,a)&&!C.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==i?i[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){i=Array(a);for(var l=0;l<a;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:t,type:e.type,key:u,ref:c,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=A,r.useCallback=function(e,r){return U.current.useCallback(e,r)},r.useContext=function(e){return U.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return U.current.useDeferredValue(e)},r.useEffect=function(e,r){return U.current.useEffect(e,r)},r.useId=function(){return U.current.useId()},r.useImperativeHandle=function(e,r,t){return U.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return U.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return U.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return U.current.useMemo(e,r)},r.useReducer=function(e,r,t){return U.current.useReducer(e,r,t)},r.useRef=function(e){return U.current.useRef(e)},r.useState=function(e){return U.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return U.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return U.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>c});var n=t(667294);const o={},u=n.createContext(o);function c(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);