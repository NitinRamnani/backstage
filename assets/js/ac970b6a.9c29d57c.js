/*! For license information please see ac970b6a.9c29d57c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[427155],{764109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=r(824246),o=r(511151);const c={id:"adrs-adr006",title:"ADR006: Avoid React.FC and React.SFC",description:"Architecture Decision Record (ADR) log on Avoid React.FC and React.SFC"},i=void 0,a={id:"architecture-decisions/adrs-adr006",title:"ADR006: Avoid React.FC and React.SFC",description:"Architecture Decision Record (ADR) log on Avoid React.FC and React.SFC",source:"@site/../docs/architecture-decisions/adr006-avoid-react-fc.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr006",permalink:"/docs/architecture-decisions/adrs-adr006",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/architecture-decisions/adr006-avoid-react-fc.md",tags:[],version:"current",frontMatter:{id:"adrs-adr006",title:"ADR006: Avoid React.FC and React.SFC",description:"Architecture Decision Record (ADR) log on Avoid React.FC and React.SFC"},sidebar:"docs",previous:{title:"ADR005: Catalog Core Entities",permalink:"/docs/architecture-decisions/adrs-adr005"},next:{title:"ADR007: Use MSW to mock http requests",permalink:"/docs/architecture-decisions/adrs-adr007"}},s={},u=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,n.jsxs)(t.p,{children:["Facebook has removed ",(0,n.jsx)(t.code,{children:"React.FC"})," from their base template for a TypeScript\nproject. The reason for this was that it was found to be an unnecessary feature\nwith next to no benefits in combination with a few downsides."]}),"\n",(0,n.jsx)(t.p,{children:"The main reasons were:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"children props"})," were implicitly added"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Generic Type"})," was not supported on children"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Read more about the removal in\n",(0,n.jsx)(t.a,{href:"https://github.com/facebook/create-react-app/pull/8177",children:"this PR"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsxs)(t.p,{children:["To keep our codebase up to date, we have decided that ",(0,n.jsx)(t.code,{children:"React.FC"})," and ",(0,n.jsx)(t.code,{children:"React.SFC"}),"\nshould be avoided in our codebase when adding new code."]}),"\n",(0,n.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"/* Avoid this: */\ntype BadProps = { text: string };\nconst BadComponent: FC<BadProps> = ({ text, children }) => (\n  <div>\n    <div>{text}</div>\n    {children}\n  </div>\n);\n\n/* Do this instead: */\ntype GoodProps = { text: string; children?: React.ReactNode };\nconst GoodComponent = ({ text, children }: GoodProps) => (\n  <div>\n    <div>{text}</div>\n    {children}\n  </div>\n);\n\n/* Or as a shorthand, if no specific child type is required */\ntype GoodProps = PropsWithChildren<{ text: string }>;\nconst GoodComponent = ({ text, children }: GoodProps) => (\n  <div>\n    <div>{text}</div>\n    {children}\n  </div>\n);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,n.jsxs)(t.p,{children:["We will gradually remove the current usage of ",(0,n.jsx)(t.code,{children:"React.FC"})," and ",(0,n.jsx)(t.code,{children:"React.SFC"})," from\nour codebase."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,c={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:a.current}}t.Fragment=c,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}function _(){}function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var x=b.prototype=new _;x.constructor=b,y(x,m.prototype),x.isPureReactComponent=!0;var R=Array.isArray,C=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function g(e,t,n){var o,c={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,o)&&!j.hasOwnProperty(o)&&(c[o]=t[o]);var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:a,props:c,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function F(e,t,o,c,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return i=i(s=e),e=""===c?"."+E(s,0):c,R(i)?(o="",null!=e&&(o=e.replace(k,"$&/")+"/"),F(i,t,o,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(s=0,c=""===c?".":c+":",R(e))for(var u=0;u<e.length;u++){var l=c+E(a=e[u],u);s+=F(a,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)s+=F(a=a.value,t,o,l=c+E(a,u++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,t,r){if(null==e)return e;var n=[],o=0;return F(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},D={transition:null},O={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:D,ReactCurrentOwner:S};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=i,t.PureComponent=b,t.StrictMode=c,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=S.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)C.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:r,type:e.type,key:c,ref:i,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=g,t.createFactory=function(e){var t=g.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var n=r(667294);const o={},c=n.createContext(o);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);