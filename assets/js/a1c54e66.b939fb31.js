/*! For license information please see a1c54e66.b939fb31.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[969398],{651678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(824246),o=n(511151);const s={id:"well-known-statuses",title:"Well-known Status fields of Catalog Entities",sidebar_label:"Well-known Statuses",description:"Lists a number of well known entity statuses, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed."},a=void 0,i={id:"features/software-catalog/well-known-statuses",title:"Well-known Status fields of Catalog Entities",description:"Lists a number of well known entity statuses, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed.",source:"@site/../docs/features/software-catalog/well-known-statuses.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/well-known-statuses",permalink:"/docs/features/software-catalog/well-known-statuses",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/well-known-statuses.md",tags:[],version:"current",frontMatter:{id:"well-known-statuses",title:"Well-known Status fields of Catalog Entities",sidebar_label:"Well-known Statuses",description:"Lists a number of well known entity statuses, that have defined semantics. They can be attached to catalog entities and consumed by plugins as needed."},sidebar:"docs",previous:{title:"Well-known Relations",permalink:"/docs/features/software-catalog/well-known-relations"},next:{title:"Extending the model",permalink:"/docs/features/software-catalog/extending-the-model"}},u={},c=[{value:"Common Fields",id:"common-fields",level:2},{value:"Status Item Types",id:"status-item-types",level:2},{value:"<code>backstage.io/catalog-processing</code>",id:"backstageiocatalog-processing",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This section lists well known\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#common-to-all-kinds-status",children:"entity statuses"}),", that have\ndefined semantics. They can be attached to catalog entities and consumed by\nplugins as needed."]}),"\n",(0,r.jsxs)(t.p,{children:["If you are looking to extend the statuses, see\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/extending-the-model",children:"Extending the model"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"common-fields",children:"Common Fields"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"status"})," object of an entity is currently left unrestricted, except for the\n",(0,r.jsx)(t.code,{children:"items"})," field. Its structure is defined in the\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#common-to-all-kinds-status",children:"descriptor format"})," section."]}),"\n",(0,r.jsx)(t.p,{children:"We reserve the right to extend this model in the future. This status is in\nactive development and its format will change unexpectedly. Do not consume it in\nyour own code until such a time that this documentation has been updated."}),"\n",(0,r.jsx)(t.h2,{id:"status-item-types",children:"Status Item Types"}),"\n",(0,r.jsxs)(t.p,{children:["This is a (non-exhaustive) list of ",(0,r.jsx)(t.code,{children:"status.items.[].type"})," values that are known\nto be in active use."]}),"\n",(0,r.jsx)(t.h3,{id:"backstageiocatalog-processing",children:(0,r.jsx)(t.code,{children:"backstage.io/catalog-processing"})}),"\n",(0,r.jsx)(t.p,{children:"Expresses an aspect of the current status of the catalog's ingestion of this\nentity. Errors that may appear here include inability to read from the remote\nSCM provider, syntax errors in the YAML file, and similar."}),"\n",(0,r.jsx)(t.p,{children:"Note that the entity data itself may be of an older version, when errors are\npresent. The ingestion system keeps the old valid entity data untouched when\npossible, so the errors described in this state may not seem to align with the\nrest of the entity, because they pertain to a remote that could not be\nsuccessfully ingested. This is normal."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# Example:\nstatus:\n  items:\n    - type: backstage.io/catalog-processing\n      level: error\n      message: 'NotFoundError: File not found'\n      error:\n        name: NotFoundError\n        message: File not found\n        stack: ...\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function w(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var v=w.prototype=new g;v.constructor=w,y(v,b.prototype),v.isPureReactComponent=!0;var _=Array.isArray,k=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,s={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!S.hasOwnProperty(o)&&(s[o]=t[o]);var u=arguments.length-2;if(1===u)s.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];s.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===s[o]&&(s[o]=u[o]);return{$$typeof:n,type:e,key:a,ref:i,props:s,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,s,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return a=a(u=e),e=""===s?"."+R(u,0):s,_(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),$(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(u=0,s=""===s?".":s+":",_(e))for(var c=0;c<e.length;c++){var l=s+R(i=e[c],c);u+=$(i,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(i=e.next()).done;)u+=$(i=i.value,t,o,l=s+R(i,c++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function T(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},F={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=a,t.PureComponent=w,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.act=L,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:n,type:e.type,key:s,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(667294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);