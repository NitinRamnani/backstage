/*! For license information please see cc6cb161.0336f027.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[60917],{38626:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>s});var t=r(824246),o=r(511151);const u={id:"plugin-search-backend-node.lunrsearchengineindexer.buildindex",title:"LunrSearchEngineIndexer.buildIndex()",description:"API reference for LunrSearchEngineIndexer.buildIndex()"},c=void 0,i={id:"reference/plugin-search-backend-node.lunrsearchengineindexer.buildindex",title:"LunrSearchEngineIndexer.buildIndex()",description:"API reference for LunrSearchEngineIndexer.buildIndex()",source:"@site/../docs/reference/plugin-search-backend-node.lunrsearchengineindexer.buildindex.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.lunrsearchengineindexer.buildindex",permalink:"/docs/reference/plugin-search-backend-node.lunrsearchengineindexer.buildindex",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.lunrsearchengineindexer.buildindex.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.lunrsearchengineindexer.buildindex",title:"LunrSearchEngineIndexer.buildIndex()",description:"API reference for LunrSearchEngineIndexer.buildIndex()"}},a={},s=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengineindexer",children:(0,t.jsx)(n.code,{children:"LunrSearchEngineIndexer"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengineindexer.buildindex",children:(0,t.jsx)(n.code,{children:"buildIndex"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"buildIndex(): lunr.Index;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"lunr.Index"})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,u={},s=null,l=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(u[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===u[t]&&(u[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:l,props:u,_owner:i.current}}n.Fragment=u,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function x(e,n,r){this.props=e,this.context=n,this.refs=b,this.updater=r||y}function m(){}function _(e,n,r){this.props=e,this.context=n,this.refs=b,this.updater=r||y}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=x.prototype;var g=_.prototype=new m;g.constructor=_,h(g,x.prototype),g.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,n,t){var o,u={},c=null,i=null;if(null!=n)for(o in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(c=""+n.key),n)k.call(n,o)&&!E.hasOwnProperty(o)&&(u[o]=n[o]);var a=arguments.length-2;if(1===a)u.children=t;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:r,type:e,key:c,ref:i,props:u,_owner:S.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,u,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case t:a=!0}}if(a)return c=c(a=e),e=""===u?"."+R(a,0):u,v(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(c,n,o,"",(function(e){return e}))):null!=c&&(I(c)&&(c=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),n.push(c)),1;if(a=0,u=""===u?".":u+":",v(e))for(var s=0;s<e.length;s++){var l=u+R(i=e[s],s);a+=C(i,n,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)a+=C(i=i.value,n,o,l=u+R(i,s++),c);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,n,r){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},L={transition:null},T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};function A(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:$,forEach:function(e,n,r){$(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=x,n.Fragment=o,n.Profiler=c,n.PureComponent=_,n.StrictMode=u,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.act=A,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,i=S.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)k.call(n,s)&&!E.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==a?a[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:i}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=j,n.createFactory=function(e){var n=j.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=I,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:f,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=L.transition;L.transition={};try{e()}finally{L.transition=n}},n.unstable_act=A,n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,r){return P.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,r){return P.current.useReducer(e,n,r)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return P.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return P.current.useTransition()},n.version="18.3.1"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var t=r(667294);const o={},u=t.createContext(o);function c(e){const n=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(u.Provider,{value:n},e.children)}}}]);