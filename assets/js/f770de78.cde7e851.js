/*! For license information please see f770de78.cde7e851.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[597470],{114463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(824246),o=n(511151);const i={id:"plugin-notifications-common.notification_2",title:"Notification_2",description:"API reference for Notification_2"},c=void 0,u={id:"reference/plugin-notifications-common.notification_2",title:"Notification_2",description:"API reference for Notification_2",source:"@site/../docs/reference/plugin-notifications-common.notification_2.md",sourceDirName:"reference",slug:"/reference/plugin-notifications-common.notification_2",permalink:"/docs/reference/plugin-notifications-common.notification_2",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-notifications-common.notification_2.md",tags:[],version:"current",frontMatter:{id:"plugin-notifications-common.notification_2",title:"Notification_2",description:"API reference for Notification_2"}},a={},s=[];function f(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-common",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-notifications-common"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-common.notification_2",children:(0,r.jsx)(t.code,{children:"Notification\\_2"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type Notification = {\n    id: string;\n    user: string | null;\n    created: Date;\n    saved?: Date;\n    read?: Date;\n    updated?: Date;\n    origin: string;\n    payload: NotificationPayload;\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-notifications-common.notificationpayload",children:"NotificationPayload"})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,f=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:f,props:i,_owner:u.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,_={};function h(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||y}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var g=b.prototype=new v;g.constructor=b,m(g,h.prototype),g.isPureReactComponent=!0;var S=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,i={},c=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,o)&&!x.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(1===a)i.children=r;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];i.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:n,type:e,key:c,ref:u,props:i,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,i,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case r:a=!0}}if(a)return c=c(a=e),e=""===i?"."+C(a,0):i,S(c)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(c,t,o,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),t.push(c)),1;if(a=0,i=""===i?".":i+":",S(e))for(var s=0;s<e.length;s++){var f=i+C(u=e[s],s);a+=$(u,t,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(u=e.next()).done;)a+=$(u=u.value,t,o,f=i+C(u,s++),c);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},I={transition:null},D={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=c,t.PureComponent=b,t.StrictMode=i,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)j.call(t,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==a?a[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:n,type:e.type,key:i,ref:c,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>c});var r=n(667294);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);