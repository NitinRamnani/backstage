/*! For license information please see 1b813f1a.0c4a1dfc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[763681],{361975:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=t(824246),a=t(511151);const c={id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.settranslator",title:"ElasticSearchSearchEngine.setTranslator()",description:"API reference for ElasticSearchSearchEngine.setTranslator()"},o=void 0,s={id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.settranslator",title:"ElasticSearchSearchEngine.setTranslator()",description:"API reference for ElasticSearchSearchEngine.setTranslator()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.settranslator.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.settranslator",permalink:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.settranslator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.settranslator.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.settranslator",title:"ElasticSearchSearchEngine.setTranslator()",description:"API reference for ElasticSearchSearchEngine.setTranslator()"}},u={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine",children:(0,n.jsx)(r.code,{children:"ElasticSearchSearchEngine"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchsearchengine.settranslator",children:(0,n.jsx)(r.code,{children:"setTranslator"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"setTranslator(translator: ElasticSearchQueryTranslator): void;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"translator"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchquerytranslator",children:"ElasticSearchQueryTranslator"})}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"void"})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,n)&&!u.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:a,type:e,key:i,ref:l,props:c,_owner:s.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||p}function _(){}function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var v=g.prototype=new _;v.constructor=g,y(v,b.prototype),v.isPureReactComponent=!0;var S=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var a,c={},o=null,s=null;if(null!=r)for(a in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(o=""+r.key),r)j.call(r,a)&&!k.hasOwnProperty(a)&&(c[a]=r[a]);var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){for(var i=Array(u),l=0;l<u;l++)i[l]=arguments[l+2];c.children=i}if(e&&e.defaultProps)for(a in u=e.defaultProps)void 0===c[a]&&(c[a]=u[a]);return{$$typeof:t,type:e,key:o,ref:s,props:c,_owner:x.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,a,c,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return o=o(u=e),e=""===c?"."+C(u,0):c,S(o)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),$(o,r,a,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(R,"$&/")+"/")+e)),r.push(o)),1;if(u=0,c=""===c?".":c+":",S(e))for(var i=0;i<e.length;i++){var l=c+C(s=e[i],i);u+=$(s,r,a,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(s=e.next()).done;)u+=$(s=s.value,r,a,l=c+C(s,i++),o);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function P(e,r,t){if(null==e)return e;var n=[],a=0;return $(e,n,"","",(function(e){return r.call(t,e,a++)})),n}function T(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};function D(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=a,r.Profiler=o,r.PureComponent=g,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.act=D,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=y({},e.props),c=e.key,o=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(o=r.ref,s=x.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in r)j.call(r,i)&&!k.hasOwnProperty(i)&&(a[i]=void 0===r[i]&&void 0!==u?u[i]:r[i])}var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){u=Array(i);for(var l=0;l<i;l++)u[l]=arguments[l+2];a.children=u}return{$$typeof:t,type:e.type,key:c,ref:o,props:a,_owner:s}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:T}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=D,r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,t){return O.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,t){return O.current.useReducer(e,r,t)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return O.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return O.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>o});var n=t(667294);const a={},c=n.createContext(a);function o(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);