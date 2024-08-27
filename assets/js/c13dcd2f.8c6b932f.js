/*! For license information please see c13dcd2f.8c6b932f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[709508],{331666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(824246),o=t(511151);const i={id:"frontend-plugin-api.createextensionblueprint",title:"createExtensionBlueprint()",description:"API reference for createExtensionBlueprint()"},a=void 0,u={id:"reference/frontend-plugin-api.createextensionblueprint",title:"createExtensionBlueprint()",description:"API reference for createExtensionBlueprint()",source:"@site/../docs/reference/frontend-plugin-api.createextensionblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.createextensionblueprint",permalink:"/docs/reference/frontend-plugin-api.createextensionblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.createextensionblueprint.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.createextensionblueprint",title:"createExtensionBlueprint()",description:"API reference for createExtensionBlueprint()"}},s={},c=[{value:"Parameters",id:"parameters",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensionblueprint",children:(0,r.jsx)(n.code,{children:"createExtensionBlueprint"})})]}),"\n",(0,r.jsxs)(n.p,{children:["A simpler replacement for wrapping up ",(0,r.jsx)(n.code,{children:"createExtension"})," inside a kind or type. This allows for a cleaner API for creating types and instances of those types."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createExtensionBlueprint<TParams, UOutput extends AnyExtensionDataRef, TInputs extends {\n    [inputName in string]: ExtensionInput<AnyExtensionDataRef, {\n        optional: boolean;\n        singleton: boolean;\n    }>;\n}, TConfigSchema extends {\n    [key in string]: (zImpl: typeof z) => z.ZodType;\n}, UFactoryOutput extends ExtensionDataValue<any, any>, TKind extends string, TNamespace extends string | undefined = undefined, TName extends string | undefined = undefined, TDataRefs extends {\n    [name in string]: AnyExtensionDataRef;\n} = never>(options: CreateExtensionBlueprintOptions<TKind, TNamespace, TName, TParams, UOutput, TInputs, TConfigSchema, UFactoryOutput, TDataRefs>): ExtensionBlueprint<{\n    kind: TKind;\n    namespace: TNamespace;\n    name: TName;\n}, TParams, UOutput, string extends keyof TInputs ? {} : TInputs, string extends keyof TConfigSchema ? {} : {\n    [key in keyof TConfigSchema]: z.infer<ReturnType<TConfigSchema[key]>>;\n}, string extends keyof TConfigSchema ? {} : z.input<z.ZodObject<{\n    [key in keyof TConfigSchema]: ReturnType<TConfigSchema[key]>;\n}>>, TDataRefs>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.createextensionblueprintoptions",children:"CreateExtensionBlueprintOptions"}),"<TKind, TNamespace, TName, TParams, UOutput, TInputs, TConfigSchema, UFactoryOutput, TDataRefs>"]}),(0,r.jsx)(n.td,{})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint",children:"ExtensionBlueprint"}),"<{ kind: TKind; namespace: TNamespace; name: TName; }, TParams, UOutput, string extends keyof TInputs ? {} : TInputs, string extends keyof TConfigSchema ? {} : { [key in keyof TConfigSchema]: z.infer<ReturnType<TConfigSchema[key]>>; }, string extends keyof TConfigSchema ? {} : z.input<z.ZodObject<{ [key in keyof TConfigSchema]: ReturnType<TConfigSchema[key]>; }>>, TDataRefs>"]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,f=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(f=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:f,props:i,_owner:u.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function x(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function g(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=x.prototype;var _=b.prototype=new g;_.constructor=b,h(_,x.prototype),_.isPureReactComponent=!0;var T=Array.isArray,k=Object.prototype.hasOwnProperty,v={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,n,r){var o,i={},a=null,u=null;if(null!=n)for(o in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(a=""+n.key),n)k.call(n,o)&&!S.hasOwnProperty(o)&&(i[o]=n[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),f=0;f<s;f++)c[f]=arguments[f+2];i.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:t,type:e,key:a,ref:u,props:i,_owner:v.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var C=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,o,i,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+R(s,0):i,T(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),O(a,n,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),n.push(a)),1;if(s=0,i=""===i?".":i+":",T(e))for(var c=0;c<e.length;c++){var f=i+R(u=e[c],c);s+=O(u,n,o,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),c=0;!(u=e.next()).done;)s+=O(u=u.value,n,o,f=i+R(u,c++),a);else if("object"===u)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function w(e,n,t){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},$={transition:null},N={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:$,ReactCurrentOwner:v};function D(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:w,forEach:function(e,n,t){w(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return w(e,(function(){n++})),n},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=x,n.Fragment=o,n.Profiler=a,n.PureComponent=b,n.StrictMode=i,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,n.act=D,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=v.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)k.call(n,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===n[c]&&void 0!==s?s[c]:n[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:t,type:e.type,key:i,ref:a,props:o,_owner:u}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=j,n.createFactory=function(e){var n=j.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=$.transition;$.transition={};try{e()}finally{$.transition=n}},n.unstable_act=D,n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,t){return I.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,t){return I.current.useReducer(e,n,t)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return I.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return I.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>a});var r=t(667294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);