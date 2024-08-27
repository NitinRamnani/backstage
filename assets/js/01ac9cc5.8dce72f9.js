/*! For license information please see 01ac9cc5.8dce72f9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[976841],{284225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"plugin-catalog-backend-module-ldap.ldap_rdn_annotation",title:"LDAP_RDN_ANNOTATION",description:"API reference for LDAP_RDN_ANNOTATION"},u=void 0,c={id:"reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation",title:"LDAP_RDN_ANNOTATION",description:"API reference for LDAP_RDN_ANNOTATION",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation",permalink:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.ldap_rdn_annotation",title:"LDAP_RDN_ANNOTATION",description:"API reference for LDAP_RDN_ANNOTATION"}},i={},l=[];function s(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation",children:(0,r.jsx)(t.code,{children:"LDAP\\_RDN\\_ANNOTATION"})})]}),"\n",(0,r.jsx)(t.p,{children:"The name of an entity annotation, that references the RDN of the LDAP object it was ingested from."}),"\n",(0,r.jsx)(t.p,{children:'The RDN is the name of the leftmost attribute that identifies the item; for example, for an item with the fully qualified DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with the value "john".'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'LDAP_RDN_ANNOTATION = "backstage.io/ldap-rdn"\n'})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,s=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:s,props:a,_owner:c.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,h={};function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=g.prototype=new b;v.constructor=g,_(v,m.prototype),v.isPureReactComponent=!0;var k=Array.isArray,N=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var o,a={},u=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)N.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:n,type:e,key:u,ref:c,props:a,_owner:S.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var A=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function w(e,t,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return u=u(i=e),e=""===a?"."+x(i,0):a,k(u)?(o="",null!=e&&(o=e.replace(A,"$&/")+"/"),w(u,t,o,"",(function(e){return e}))):null!=u&&(R(u)&&(u=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(A,"$&/")+"/")+e)),t.push(u)),1;if(i=0,a=""===a?".":a+":",k(e))for(var l=0;l<e.length;l++){var s=a+x(c=e[l],l);i+=w(c,t,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(c=e.next()).done;)i+=w(c=c.value,t,o,s=a+x(c,l++),u);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function E(e,t,n){if(null==e)return e;var r=[],o=0;return w(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},T={transition:null},C={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};function $(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=g,t.StrictMode=a,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.act=$,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=_({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)N.call(t,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){i=Array(l);for(var s=0;s<l;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:n,type:e.type,key:a,ref:u,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=$,t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>u});var r=n(667294);const o={},a=r.createContext(o);function u(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);