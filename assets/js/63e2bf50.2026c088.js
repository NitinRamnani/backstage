/*! For license information please see 63e2bf50.2026c088.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[430764],{810162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(824246),o=r(511151);const a={id:"catalog-client.catalogapi.getentitybyref",title:"CatalogApi.getEntityByRef()",description:"API reference for CatalogApi.getEntityByRef()"},c=void 0,i={id:"reference/catalog-client.catalogapi.getentitybyref",title:"CatalogApi.getEntityByRef()",description:"API reference for CatalogApi.getEntityByRef()",source:"@site/../docs/reference/catalog-client.catalogapi.getentitybyref.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogapi.getentitybyref",permalink:"/docs/reference/catalog-client.catalogapi.getentitybyref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-client.catalogapi.getentitybyref.md",tags:[],version:"current",frontMatter:{id:"catalog-client.catalogapi.getentitybyref",title:"CatalogApi.getEntityByRef()",description:"API reference for CatalogApi.getEntityByRef()"}},u={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client",children:(0,n.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogapi",children:(0,n.jsx)(t.code,{children:"CatalogApi"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogapi.getentitybyref",children:(0,n.jsx)(t.code,{children:"getEntityByRef"})})]}),"\n",(0,n.jsx)(t.p,{children:"Gets a single entity from the catalog by its ref (kind, namespace, name) triplet."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"getEntityByRef(entityRef: string | CompoundEntityRef, options?: CatalogRequestOptions): Promise<Entity | undefined>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"entityRef"}),(0,n.jsxs)(t.td,{children:["string | ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})]}),(0,n.jsx)(t.td,{children:"A complete entity ref, either on string or compound form"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/catalog-client.catalogrequestoptions",children:"CatalogRequestOptions"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Additional options"]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:["Promise<",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"})," | undefined>"]}),"\n",(0,n.jsx)(t.p,{children:"The matching entity, or undefined if there was no entity with that ref"})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,a={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var j=_.prototype=new b;j.constructor=_,h(j,g.prototype),j.isPureReactComponent=!0;var x=Array.isArray,v=Object.prototype.hasOwnProperty,E={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,o)&&!R.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:r,type:e,key:c,ref:i,props:a,_owner:E.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return c=c(u=e),e=""===a?"."+w(u,0):a,x(c)?(o="",null!=e&&(o=e.replace(k,"$&/")+"/"),P(c,t,o,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(k,"$&/")+"/")+e)),t.push(c)),1;if(u=0,a=""===a?".":a+":",x(e))for(var s=0;s<e.length;s++){var l=a+w(i=e[s],s);u+=P(i,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)u+=P(i=i.value,t,o,l=a+w(i,s++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:E};function B(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=B,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)v.call(t,s)&&!R.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var l=0;l<s;l++)u[l]=arguments[l+2];o.children=u}return{$$typeof:r,type:e.type,key:a,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=B,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>c});var n=r(667294);const o={},a=n.createContext(o);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);