/*! For license information please see cea35d2c.d843aabc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[720733],{309246:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>l});var n=t(824246),o=t(511151);const u={id:"plugin-search-react.searchresultgrouplayoutprops",title:"SearchResultGroupLayoutProps",description:"API reference for SearchResultGroupLayoutProps"},c=void 0,s={id:"reference/plugin-search-react.searchresultgrouplayoutprops",title:"SearchResultGroupLayoutProps",description:"API reference for SearchResultGroupLayoutProps",source:"@site/../docs/reference/plugin-search-react.searchresultgrouplayoutprops.md",sourceDirName:"reference",slug:"/reference/plugin-search-react.searchresultgrouplayoutprops",permalink:"/docs/reference/plugin-search-react.searchresultgrouplayoutprops",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-react.searchresultgrouplayoutprops.md",tags:[],version:"current",frontMatter:{id:"plugin-search-react.searchresultgrouplayoutprops",title:"SearchResultGroupLayoutProps",description:"API reference for SearchResultGroupLayoutProps"}},a={},l=[];function i(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouplayoutprops",children:(0,n.jsx)(r.code,{children:"SearchResultGroupLayoutProps"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Props for ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultgrouplayout",children:"SearchResultGroupLayout()"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type SearchResultGroupLayoutProps<FilterOption> = ListProps & {\n    error?: Error;\n    loading?: boolean;\n    icon: JSX.Element;\n    title: ReactNode;\n    titleProps?: Partial<TypographyProps>;\n    link?: ReactNode;\n    linkProps?: Partial<LinkProps>;\n    filterOptions?: FilterOption[];\n    renderFilterOption?: (value: FilterOption, index: number, array: FilterOption[]) => JSX.Element | null;\n    filterFields?: string[];\n    renderFilterField?: (key: string) => JSX.Element | null;\n    resultItems?: SearchResult[];\n    renderResultItem?: (value: SearchResult, index: number, array: SearchResult[]) => JSX.Element | null;\n    noResultsComponent?: ReactNode;\n    disableRenderingWithNoResults?: boolean;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components.linkprops",children:"LinkProps"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-common.searchresult",children:"SearchResult"})]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,u={},l=null,i=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:i,props:u,_owner:s.current}}r.Fragment=u,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function g(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=_.prototype;var v=b.prototype=new g;v.constructor=b,h(v,_.prototype),v.isPureReactComponent=!0;var S=Array.isArray,R=Object.prototype.hasOwnProperty,k={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,n){var o,u={},c=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(c=""+r.key),r)R.call(r,o)&&!x.hasOwnProperty(o)&&(u[o]=r[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var l=Array(a),i=0;i<a;i++)l[i]=arguments[i+2];u.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:t,type:e,key:c,ref:s,props:u,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,u,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return c=c(a=e),e=""===u?"."+w(a,0):u,S(c)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(c,r,o,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+e)),r.push(c)),1;if(a=0,u=""===u?".":u+":",S(e))for(var l=0;l<e.length;l++){var i=u+w(s=e[l],l);a+=C(s,r,o,i,c)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),l=0;!(s=e.next()).done;)a+=C(s=s.value,r,o,i=u+w(s,l++),c);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function O(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},I={transition:null},F={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};function N(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=c,r.PureComponent=b,r.StrictMode=u,r.Suspense=i,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.act=N,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,c=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,s=k.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in r)R.call(r,l)&&!x.hasOwnProperty(l)&&(o[l]=void 0===r[l]&&void 0!==a?a[l]:r[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){a=Array(l);for(var i=0;i<l;i++)a[i]=arguments[i+2];o.children=a}return{$$typeof:t,type:e.type,key:u,ref:c,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=j,r.createFactory=function(e){var r=j.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=N,r.useCallback=function(e,r){return L.current.useCallback(e,r)},r.useContext=function(e){return L.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return L.current.useDeferredValue(e)},r.useEffect=function(e,r){return L.current.useEffect(e,r)},r.useId=function(){return L.current.useId()},r.useImperativeHandle=function(e,r,t){return L.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return L.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return L.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return L.current.useMemo(e,r)},r.useReducer=function(e,r,t){return L.current.useReducer(e,r,t)},r.useRef=function(e){return L.current.useRef(e)},r.useState=function(e){return L.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return L.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return L.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>c});var n=t(667294);const o={},u=n.createContext(o);function c(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);