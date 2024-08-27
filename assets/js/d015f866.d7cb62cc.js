/*! For license information please see d015f866.d7cb62cc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[938855],{109669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(824246),r=n(511151);const s={id:"contributing-to-storybook",title:"Contributing to Storybook",description:"Documentation on How to Contribute to Storybook"},i=void 0,a={id:"dls/contributing-to-storybook",title:"Contributing to Storybook",description:"Documentation on How to Contribute to Storybook",source:"@site/../docs/dls/contributing-to-storybook.md",sourceDirName:"dls",slug:"/dls/contributing-to-storybook",permalink:"/docs/dls/contributing-to-storybook",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/dls/contributing-to-storybook.md",tags:[],version:"current",frontMatter:{id:"contributing-to-storybook",title:"Contributing to Storybook",description:"Documentation on How to Contribute to Storybook"},sidebar:"docs",previous:{title:"Component Design Guidelines",permalink:"/docs/dls/component-design-guidelines"},next:{title:"Figma",permalink:"/docs/dls/figma"}},c={},u=[{value:"Creating a new Story",id:"creating-a-new-story",level:2},{value:"Running locally",id:"running-locally",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:'The Backstage Storybook provides you a way to explore reusable Backstage User\nInterface elements and how to use them in developing the Backstage core and its\nplugins. These UI elements are commonly called "components", and include things\nsuch as buttons, tables, specialized widgets with specific formatting, and so\non.'}),"\n",(0,o.jsxs)(t.p,{children:["You'll find our storybook at\n",(0,o.jsx)(t.a,{href:"http://backstage.io/storybook",children:"http://backstage.io/storybook"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["As noted in the ",(0,o.jsx)(t.a,{href:"/docs/dls/design",children:"design introduction"}),", Backstage's design is based\noff of ",(0,o.jsx)(t.a,{href:"https://material-ui.com/",children:"Material UI"}),". Much of the UI elements use\ndirect Material UI, while we've also extended and written custom ones to provide\nspecific functionality."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Storybook Page",src:n(360246).Z+"",width:"1920",height:"877"})}),"\n",(0,o.jsx)(t.p,{children:'Storybook "Stories" are used to provide examples for how to use a specific\ncomponent, which are then displayed both visually and with sample code to be\ncopied.'}),"\n",(0,o.jsxs)(t.p,{children:["When custom Backstage components are created, they are placed in the\n",(0,o.jsx)(t.code,{children:"@backstage/core-components"})," package and added to the Storybook."]}),"\n",(0,o.jsxs)(t.p,{children:["There may be times where an existing Material UI component (in\n",(0,o.jsx)(t.code,{children:"@material-ui/core"}),") is sufficient and doesn't need to be wrapped or duplicated.\nHowever, we may want to identify an ",(0,o.jsx)(t.em,{children:"opinionated"})," way to use that component\ninside of Backstage. In these cases, stories showing how to use those existing\ncomponents will also be put into our storybook."]}),"\n",(0,o.jsx)(t.p,{children:"When a story example using Material UI becomes more complex, requiring a\nspecific set of colors, variants, parameters, etc., it may become a candidate to\nbe refactored to become a full Backstage core component."}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-new-story",children:"Creating a new Story"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"A Story basically represents a single visual state of a component."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To create a new story, create a new file located alongside the component you\nwant to document on Storybook."}),"\n",(0,o.jsx)(t.p,{children:"See below an example of the structure:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"core\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 components\n        \u2514\u2500\u2500 Progress\n            \u251c\u2500\u2500 Progress.tsx\n            \u2514\u2500\u2500 Progress.stories.tsx\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Note: make sure your component story file has the following format\ncomponentName.stories.tsx"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"running-locally",children:"Running locally"}),"\n",(0,o.jsxs)(t.p,{children:["Go to ",(0,o.jsx)(t.code,{children:"storybook"}),", run ",(0,o.jsx)(t.code,{children:"yarn install"})," and install the dependencies, then run the\nfollowing on your command line: ",(0,o.jsx)(t.code,{children:"yarn start"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Storybook command startup",src:n(62375).Z+"",width:"700",height:"600"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"You should see a log like the image above."})}),"\n",(0,o.jsxs)(t.p,{children:["If everything worked out, your server will be running on ",(0,o.jsx)(t.strong,{children:"port 6006"}),", go to\nyour browser and navigate to ",(0,o.jsx)(t.code,{children:"http://localhost:6006/"}),". You should be able to\nnavigate and see the Storybook page."]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},62375:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/running-storybook-97abcf0d87701e8bd83f6f8a5307f3b1.png"},360246:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/storybook-page-658f654f25a07d8c58798ad039d81ca3.png"},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var o,s={},u=null,l=null;for(o in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:u,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function g(){}function k(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var v=k.prototype=new g;v.constructor=k,h(v,b.prototype),v.isPureReactComponent=!0;var x=Array.isArray,_=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var r,s={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!j.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(1===c)s.children=o;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:n,type:e,key:i,ref:a,props:s,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,r,s,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return i=i(c=e),e=""===s?"."+R(c,0):s,x(i)?(r="",null!=e&&(r=e.replace(E,"$&/")+"/"),$(i,t,r,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,s=""===s?".":s+":",x(e))for(var u=0;u<e.length;u++){var l=s+R(a=e[u],u);c+=$(a,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=$(a=a.value,t,r,l=s+R(a,u++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,n){if(null==e)return e;var o=[],r=0;return $(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},U={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:U,ReactCurrentOwner:w};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=r,t.Profiler=i,t.PureComponent=k,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=D,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=h({},e.props),s=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=w.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)_.call(t,u)&&!j.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=o;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];r.children=c}return{$$typeof:n,type:e.type,key:s,ref:i,props:r,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=U.transition;U.transition={};try{e()}finally{U.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(667294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);