/*! For license information please see 5c167675.4dc460b3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[422506],{836827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>u,metadata:()=>c,toc:()=>a});var r=n(824246),o=n(511151);const u={id:"frontend-test-utils.extensionquery.instance",title:"ExtensionQuery.instance",description:"API reference for ExtensionQuery.instance"},s=void 0,c={id:"reference/frontend-test-utils.extensionquery.instance",title:"ExtensionQuery.instance",description:"API reference for ExtensionQuery.instance",source:"@site/../docs/reference/frontend-test-utils.extensionquery.instance.md",sourceDirName:"reference",slug:"/reference/frontend-test-utils.extensionquery.instance",permalink:"/docs/reference/frontend-test-utils.extensionquery.instance",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-test-utils.extensionquery.instance.md",tags:[],version:"current",frontMatter:{id:"frontend-test-utils.extensionquery.instance",title:"ExtensionQuery.instance",description:"API reference for ExtensionQuery.instance"}},i={},a=[];function f(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/frontend-test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-test-utils.extensionquery",children:(0,r.jsx)(t.code,{children:"ExtensionQuery"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/frontend-test-utils.extensionquery.instance",children:(0,r.jsx)(t.code,{children:"instance"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'get instance(): import("@backstage/frontend-plugin-api").AppNodeInstance;\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,u={},a=null,f=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)s.call(t,r)&&!i.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:o,type:e,key:a,ref:f,props:u,_owner:c.current}}t.Fragment=u,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var x=v.prototype=new b;x.constructor=v,h(x,_.prototype),x.isPureReactComponent=!0;var S=Array.isArray,E=Object.prototype.hasOwnProperty,g={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,u={},s=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)E.call(t,o)&&!k.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=r;else if(1<i){for(var a=Array(i),f=0;f<i;f++)a[f]=arguments[f+2];u.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:n,type:e,key:s,ref:c,props:u,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,u,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return s=s(i=e),e=""===u?"."+C(i,0):u,S(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(s,t,o,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(i=0,u=""===u?".":u+":",S(e))for(var a=0;a<e.length;a++){var f=u+C(c=e[a],a);i+=$(c,t,o,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(c=e.next()).done;)i+=$(c=c.value,t,o,f=u+C(c,a++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},q={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:q,ReactCurrentOwner:g};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=s,t.PureComponent=v,t.StrictMode=u,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=g.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)E.call(t,a)&&!k.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==i?i[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){i=Array(a);for(var f=0;f<a;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:n,type:e.type,key:u,ref:s,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=q.transition;q.transition={};try{e()}finally{q.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(667294);const o={},u=r.createContext(o);function s(e){const t=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(u.Provider,{value:t},e.children)}}}]);