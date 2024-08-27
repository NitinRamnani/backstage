/*! For license information please see 070b50d6.9720c5a9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[663828],{952078:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(824246),c=t(511151);const o={id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()"},a=void 0,s={id:"reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()",source:"@site/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",permalink:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",title:"ElasticSearchClientWrapper.bulk()",description:"API reference for ElasticSearchClientWrapper.bulk()"}},u={},l=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper",children:(0,n.jsx)(r.code,{children:"ElasticSearchClientWrapper"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchclientwrapper.bulk",children:(0,n.jsx)(r.code,{children:"bulk"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'bulk(bulkOptions: {\n        datasource: Readable;\n        onDocument: () => ElasticSearchIndexAction;\n        refreshOnCompletion?: string | boolean;\n    }): import("@elastic/elasticsearch/lib/Helpers").BulkHelper<import("@elastic/elasticsearch/lib/Helpers").BulkStats>;\n'})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bulkOptions"}),(0,n.jsxs)(r.td,{children:["{ datasource: Readable; onDocument: () => ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-module-elasticsearch.elasticsearchindexaction",children:"ElasticSearchIndexAction"}),"; refreshOnCompletion?: string | boolean; }"]}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:'import("@elastic/elasticsearch/lib/Helpers").BulkHelper<import("@elastic/elasticsearch/lib/Helpers").BulkStats>'})]})}function f(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,r,t)=>{var n=t(827378),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,o={},l=null,i=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,n)&&!u.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:c,type:e,key:l,ref:i,props:o,_owner:s.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function m(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}function k(){}function _(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var v=_.prototype=new k;v.constructor=_,y(v,m.prototype),v.isPureReactComponent=!0;var x=Array.isArray,j=Object.prototype.hasOwnProperty,S={current:null},g={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var c,o={},a=null,s=null;if(null!=r)for(c in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,c)&&!g.hasOwnProperty(c)&&(o[c]=r[c]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),i=0;i<u;i++)l[i]=arguments[i+2];o.children=l}if(e&&e.defaultProps)for(c in u=e.defaultProps)void 0===o[c]&&(o[c]=u[c]);return{$$typeof:t,type:e,key:a,ref:s,props:o,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,c,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return a=a(u=e),e=""===o?"."+R(u,0):o,x(a)?(c="",null!=e&&(c=e.replace(C,"$&/")+"/"),O(a,r,c,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,c+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),r.push(a)),1;if(u=0,o=""===o?".":o+":",x(e))for(var l=0;l<e.length;l++){var i=o+R(s=e[l],l);u+=O(s,r,c,i,a)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),l=0;!(s=e.next()).done;)u+=O(s=s.value,r,c,i=o+R(s,l++),a);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,r,t){if(null==e)return e;var n=[],c=0;return O(e,n,"","",(function(e){return r.call(t,e,c++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null},D={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:A,ReactCurrentOwner:S};function T(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=c,r.Profiler=a,r.PureComponent=_,r.StrictMode=o,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.act=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var c=y({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=S.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in r)j.call(r,l)&&!g.hasOwnProperty(l)&&(c[l]=void 0===r[l]&&void 0!==u?u[l]:r[l])}var l=arguments.length-2;if(1===l)c.children=n;else if(1<l){u=Array(l);for(var i=0;i<l;i++)u[i]=arguments[i+2];c.children=u}return{$$typeof:t,type:e.type,key:o,ref:a,props:c,_owner:s}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=A.transition;A.transition={};try{e()}finally{A.transition=r}},r.unstable_act=T,r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>a});var n=t(667294);const c={},o=n.createContext(c);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);