/*! For license information please see c2d7c4e9.f5cc4ba3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[453923],{40599:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(824246),o=n(511151);const i={id:"plugin-permission-node.conditiontransformer",title:"ConditionTransformer",description:"API reference for ConditionTransformer"},s=void 0,c={id:"reference/plugin-permission-node.conditiontransformer",title:"ConditionTransformer",description:"API reference for ConditionTransformer",source:"@site/../docs/reference/plugin-permission-node.conditiontransformer.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.conditiontransformer",permalink:"/docs/reference/plugin-permission-node.conditiontransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.conditiontransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.conditiontransformer",title:"ConditionTransformer",description:"API reference for ConditionTransformer"}},u={},a=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.conditiontransformer",children:(0,t.jsx)(r.code,{children:"ConditionTransformer"})})]}),"\n",(0,t.jsxs)(r.p,{children:["A function which accepts ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"s logically grouped in a ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"PermissionCriteria"})," object, and transforms the ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"}),"s into plugin specific query fragments while retaining the enclosing criteria shape."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type ConditionTransformer<TQuery> = (conditions: PermissionCriteria<PermissionCondition>) => PermissionCriteria<TQuery>;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"PermissionCriteria"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncondition",children:"PermissionCondition"})]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,i={},a=null,f=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)s.call(r,t)&&!u.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:f,props:i,_owner:c.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function _(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||m}function g(){}function b(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=_.prototype;var v=b.prototype=new g;v.constructor=b,y(v,_.prototype),v.isPureReactComponent=!0;var C=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var o,i={},s=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)j.call(r,o)&&!S.hasOwnProperty(o)&&(i[o]=r[o]);var u=arguments.length-2;if(1===u)i.children=t;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];i.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:c,props:i,_owner:x.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,o,i,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case t:u=!0}}if(u)return s=s(u=e),e=""===i?"."+P(u,0):i,C(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(s,r,o,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),r.push(s)),1;if(u=0,i=""===i?".":i+":",C(e))for(var a=0;a<e.length;a++){var f=i+P(c=e[a],a);u+=R(c,r,o,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(c=e.next()).done;)u+=R(c=c.value,r,o,f=i+P(c,a++),s);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,r,n){if(null==e)return e;var t=[],o=0;return R(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},A={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};function D(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,n){$(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=s,r.PureComponent=b,r.StrictMode=i,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.act=D,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,c=x.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in r)j.call(r,a)&&!S.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==u?u[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){u=Array(a);for(var f=0;f<a;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=D,r.useCallback=function(e,r){return T.current.useCallback(e,r)},r.useContext=function(e){return T.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return T.current.useDeferredValue(e)},r.useEffect=function(e,r){return T.current.useEffect(e,r)},r.useId=function(){return T.current.useId()},r.useImperativeHandle=function(e,r,n){return T.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return T.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return T.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return T.current.useMemo(e,r)},r.useReducer=function(e,r,n){return T.current.useReducer(e,r,n)},r.useRef=function(e){return T.current.useRef(e)},r.useState=function(e){return T.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return T.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return T.current.useTransition()},r.version="18.3.1"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>s});var t=n(667294);const o={},i=t.createContext(o);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);