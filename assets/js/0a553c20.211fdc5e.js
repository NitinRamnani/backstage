/*! For license information please see 0a553c20.211fdc5e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[671558],{812125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider"},c=void 0,a={id:"reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider",source:"@site/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",permalink:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",title:"IncrementalEntityProvider",description:"API reference for IncrementalEntityProvider"}},s={},l=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider",children:(0,r.jsx)(t.code,{children:"IncrementalEntityProvider"})})]}),"\n",(0,r.jsx)(t.p,{children:"Ingest entities into the catalog in bite-sized chunks."}),"\n",(0,r.jsxs)(t.p,{children:["A Normal ",(0,r.jsx)(t.code,{children:"EntityProvider"})," allows you to introduce entities into the processing pipeline by calling an ",(0,r.jsx)(t.code,{children:"applyMutation()"})," on the full set of entities. However, this is not great when the number of entities that you have to keep track of is extremely large because it entails having all of them in memory at once. An ",(0,r.jsx)(t.code,{children:"IncrementalEntityProvider"})," by contrast allows you to provide batches of entities in sequence so that you never need to have more than a few hundred in memory at a time."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface IncrementalEntityProvider<TCursor, TContext> \n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.eventhandler",children:"eventHandler?"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["{ onEvent: (params: ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-events-node.eventparams",children:"EventParams"}),") => Promise<",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityeventresult",children:"IncrementalEntityEventResult"}),">; supportsEventTopics: () => string[]; }"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," If set, the IncrementalEntityProvider will receive and respond to events."]}),(0,r.jsxs)(t.p,{children:["This system acts as a wrapper for the Backstage events bus, and requires the events backend to function. It does not provide its own events backend. See ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-backend",children:"https://github.com/backstage/backstage/tree/master/plugins/events-backend"}),"."]})]})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.around",children:"around(burst)"})}),(0,r.jsxs)(t.td,{children:["Do any setup and teardown necessary in order to provide the context for fetching pages. This should always invoke ",(0,r.jsx)(t.code,{children:"burst"})," in order to fetch the individual pages."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.getprovidername",children:"getProviderName()"})}),(0,r.jsx)(t.td,{children:"This name must be unique between all of the entity providers operating in the catalog."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovider.next",children:"next(context, cursor)"})}),(0,r.jsx)(t.td,{children:"Return a single page of entities from a specific point in the ingestion."})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var x=b.prototype=new g;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var j=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var o,i={},c=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:c,ref:a,props:i,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,i,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return c=c(s=e),e=""===i?"."+I(s,0):i,j(c)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),R(c,t,o,"",(function(e){return e}))):null!=c&&(S(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+e)),t.push(c)),1;if(s=0,i=""===i?".":i+":",j(e))for(var l=0;l<e.length;l++){var u=i+I(a=e[l],l);s+=R(a,t,o,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)s+=R(a=a.value,t,o,u=i+I(a,l++),c);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function C(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:k};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=c,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=D,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)_.call(t,l)&&!E.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:c,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(667294);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);