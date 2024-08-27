/*! For license information please see 0b0af847.b2182db1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[506894],{141807:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>a,toc:()=>s});var t=r(824246),o=r(511151);const u={id:"backend-dynamic-feature-service.dynamicpluginmanager.frontendplugins",title:"DynamicPluginManager.frontendPlugins()",description:"API reference for DynamicPluginManager.frontendPlugins()"},c=void 0,a={id:"reference/backend-dynamic-feature-service.dynamicpluginmanager.frontendplugins",title:"DynamicPluginManager.frontendPlugins()",description:"API reference for DynamicPluginManager.frontendPlugins()",source:"@site/../docs/reference/backend-dynamic-feature-service.dynamicpluginmanager.frontendplugins.md",sourceDirName:"reference",slug:"/reference/backend-dynamic-feature-service.dynamicpluginmanager.frontendplugins",permalink:"/docs/reference/backend-dynamic-feature-service.dynamicpluginmanager.frontendplugins",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-dynamic-feature-service.dynamicpluginmanager.frontendplugins.md",tags:[],version:"current",frontMatter:{id:"backend-dynamic-feature-service.dynamicpluginmanager.frontendplugins",title:"DynamicPluginManager.frontendPlugins()",description:"API reference for DynamicPluginManager.frontendPlugins()"}},i={},s=[];function f(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service",children:(0,t.jsx)(n.code,{children:"@backstage/backend-dynamic-feature-service"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service.dynamicpluginmanager",children:(0,t.jsx)(n.code,{children:"DynamicPluginManager"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service.dynamicpluginmanager.frontendplugins",children:(0,t.jsx)(n.code,{children:"frontendPlugins"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"frontendPlugins(): FrontendDynamicPlugin[];\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/backend-dynamic-feature-service.frontenddynamicplugin",children:"FrontendDynamicPlugin"}),"[]"]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,u={},s=null,f=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,t)&&!i.hasOwnProperty(t)&&(u[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===u[t]&&(u[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:f,props:u,_owner:a.current}}n.Fragment=u,n.jsx=s,n.jsxs=s},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function h(e,n,r){this.props=e,this.context=n,this.refs=g,this.updater=r||y}function _(){}function v(e,n,r){this.props=e,this.context=n,this.refs=g,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var b=v.prototype=new _;b.constructor=v,m(b,h.prototype),b.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,t){var o,u={},c=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(c=""+n.key),n)S.call(n,o)&&!P.hasOwnProperty(o)&&(u[o]=n[o]);var i=arguments.length-2;if(1===i)u.children=t;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];u.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:c,ref:a,props:u,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,u,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case t:i=!0}}if(i)return c=c(i=e),e=""===u?"."+R(i,0):u,k(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(c,n,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),n.push(c)),1;if(i=0,u=""===u?".":u+":",k(e))for(var s=0;s<e.length;s++){var f=u+R(a=e[s],s);i+=C(a,n,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)i+=C(a=a.value,n,o,f=u+R(a,s++),c);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,n,r){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},M={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};function T(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:$,forEach:function(e,n,r){$(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=h,n.Fragment=o,n.Profiler=c,n.PureComponent=v,n.StrictMode=u,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,n.act=T,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=j.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in n)S.call(n,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==i?i[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=T,n.useCallback=function(e,n){return D.current.useCallback(e,n)},n.useContext=function(e){return D.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return D.current.useDeferredValue(e)},n.useEffect=function(e,n){return D.current.useEffect(e,n)},n.useId=function(){return D.current.useId()},n.useImperativeHandle=function(e,n,r){return D.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return D.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return D.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return D.current.useMemo(e,n)},n.useReducer=function(e,n,r){return D.current.useReducer(e,n,r)},n.useRef=function(e){return D.current.useRef(e)},n.useState=function(e){return D.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return D.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return D.current.useTransition()},n.version="18.3.1"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>c});var t=r(667294);const o={},u=t.createContext(o);function c(e){const n=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(u.Provider,{value:n},e.children)}}}]);