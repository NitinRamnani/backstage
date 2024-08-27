/*! For license information please see f01b5c0e.f7915ec1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[993424],{390137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(824246),o=t(511151);const c={},a="Release v1.2.0-next.3",s={id:"releases/v1.2.0-next.3-changelog",title:"Release v1.2.0-next.3",description:"@backstage/core-components@0.9.4-next.2",source:"@site/../docs/releases/v1.2.0-next.3-changelog.md",sourceDirName:"releases",slug:"/releases/v1.2.0-next.3-changelog",permalink:"/docs/releases/v1.2.0-next.3-changelog",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.2.0-next.3-changelog.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"@backstage/core-components@0.9.4-next.2",id:"backstagecore-components094-next2",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"@backstage/plugin-home@0.4.21-next.3",id:"backstageplugin-home0421-next3",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"@backstage/plugin-kubernetes@0.6.5-next.3",id:"backstageplugin-kubernetes065-next3",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"@backstage/plugin-kubernetes-backend@0.5.1-next.2",id:"backstageplugin-kubernetes-backend051-next2",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"@backstage/plugin-kubernetes-common@0.2.10-next.1",id:"backstageplugin-kubernetes-common0210-next1",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"@backstage/plugin-org@0.5.5-next.3",id:"backstageplugin-org055-next3",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"@backstage/plugin-scaffolder@1.2.0-next.3",id:"backstageplugin-scaffolder120-next3",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"@backstage/plugin-techdocs@1.1.1-next.3",id:"backstageplugin-techdocs111-next3",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"release-v120-next3",children:"Release v1.2.0-next.3"}),"\n",(0,r.jsx)(n.h2,{id:"backstagecore-components094-next2",children:"@backstage/core-components@0.9.4-next.2"}),"\n",(0,r.jsx)(n.h3,{id:"patch-changes",children:"Patch Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"52c02ac02b: Don't set the background color on an Avatar component that has a picture."}),"\n",(0,r.jsxs)(n.li,{children:["3603014e0e: Add ARIA landmark( ",(0,r.jsx)(n.code,{children:"<main>"}),"), & label and a heading to OAuthRequestDialog. Removed nested interactive control (button)."]}),"\n",(0,r.jsxs)(n.li,{children:["2025d7c123: Properly highlight ",(0,r.jsx)(n.code,{children:"SidebarSubmenuItem"})," dropdown items on hover, use ellipsis styling on long labels in ",(0,r.jsx)(n.code,{children:"SidebarSubmenu"}),", allow ",(0,r.jsx)(n.code,{children:"icon"})," and ",(0,r.jsx)(n.code,{children:"to"})," properties to be optional on ",(0,r.jsx)(n.code,{children:"SidebarSubmenuItem"}),", and fix ",(0,r.jsx)(n.code,{children:"SidebarPage"})," padding to be responsive to pinned state"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backstageplugin-home0421-next3",children:"@backstage/plugin-home@0.4.21-next.3"}),"\n",(0,r.jsx)(n.h3,{id:"patch-changes-1",children:"Patch Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["69093c5f91: Display entity titles in ",(0,r.jsx)(n.code,{children:"StarredEntities"})," home page card (if defined) and don't show entities which no longer exist"]}),"\n",(0,r.jsxs)(n.li,{children:["Updated dependencies\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@backstage/core-components@0.9.4-next.2"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backstageplugin-kubernetes065-next3",children:"@backstage/plugin-kubernetes@0.6.5-next.3"}),"\n",(0,r.jsx)(n.h3,{id:"patch-changes-2",children:"Patch Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"447e060872: Add support for 'oidc' as authProvider for kubernetes authentication\nand adds optional 'oidcTokenProvider' config value. This will allow\nusers to authenticate to kubernetes cluster using id tokens obtained\nfrom the configured auth provider in their backstage instance."}),"\n",(0,r.jsxs)(n.li,{children:["Updated dependencies\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@backstage/plugin-kubernetes-common@0.2.10-next.1"}),"\n",(0,r.jsx)(n.li,{children:"@backstage/core-components@0.9.4-next.2"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backstageplugin-kubernetes-backend051-next2",children:"@backstage/plugin-kubernetes-backend@0.5.1-next.2"}),"\n",(0,r.jsx)(n.h3,{id:"patch-changes-3",children:"Patch Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"447e060872: Add support for 'oidc' as authProvider for kubernetes authentication\nand adds optional 'oidcTokenProvider' config value. This will allow\nusers to authenticate to kubernetes cluster using id tokens obtained\nfrom the configured auth provider in their backstage instance."}),"\n",(0,r.jsxs)(n.li,{children:["Updated dependencies\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@backstage/plugin-kubernetes-common@0.2.10-next.1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backstageplugin-kubernetes-common0210-next1",children:"@backstage/plugin-kubernetes-common@0.2.10-next.1"}),"\n",(0,r.jsx)(n.h3,{id:"patch-changes-4",children:"Patch Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"447e060872: Add support for 'oidc' as authProvider for kubernetes authentication\nand adds optional 'oidcTokenProvider' config value. This will allow\nusers to authenticate to kubernetes cluster using id tokens obtained\nfrom the configured auth provider in their backstage instance."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backstageplugin-org055-next3",children:"@backstage/plugin-org@0.5.5-next.3"}),"\n",(0,r.jsx)(n.h3,{id:"patch-changes-5",children:"Patch Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["2025d7c123: Include namespace in ",(0,r.jsx)(n.code,{children:"MyGroupSidebarItem"})," if not default and remove root item routing if there are multiple groups"]}),"\n",(0,r.jsxs)(n.li,{children:["Updated dependencies\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@backstage/core-components@0.9.4-next.2"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backstageplugin-scaffolder120-next3",children:"@backstage/plugin-scaffolder@1.2.0-next.3"}),"\n",(0,r.jsx)(n.h3,{id:"patch-changes-6",children:"Patch Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["cc8ddd0979: revert dependency ",(0,r.jsx)(n.code,{children:"event-source-polyfill"})," to ",(0,r.jsx)(n.code,{children:"1.0.25"})]}),"\n",(0,r.jsxs)(n.li,{children:["Updated dependencies\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@backstage/core-components@0.9.4-next.2"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backstageplugin-techdocs111-next3",children:"@backstage/plugin-techdocs@1.1.1-next.3"}),"\n",(0,r.jsx)(n.h3,{id:"patch-changes-7",children:"Patch Changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["cc8ddd0979: revert dependency ",(0,r.jsx)(n.code,{children:"event-source-polyfill"})," to ",(0,r.jsx)(n.code,{children:"1.0.25"})]}),"\n",(0,r.jsxs)(n.li,{children:["Updated dependencies\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"@backstage/core-components@0.9.4-next.2"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,c={},l=null,u=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,r)&&!i.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:u,props:c,_owner:s.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,x={};function b(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||p}function v(){}function m(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var y=m.prototype=new v;y.constructor=m,g(y,b.prototype),y.isPureReactComponent=!0;var k=Array.isArray,j=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,r){var o,c={},a=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,o)&&!S.hasOwnProperty(o)&&(c[o]=n[o]);var i=arguments.length-2;if(1===i)c.children=r;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];c.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:t,type:e,key:a,ref:s,props:c,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function E(e,n,o,c,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case r:i=!0}}if(i)return a=a(i=e),e=""===c?"."+R(i,0):c,k(a)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),E(a,n,o,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(w,"$&/")+"/")+e)),n.push(a)),1;if(i=0,c=""===c?".":c+":",k(e))for(var l=0;l<e.length;l++){var u=c+R(s=e[l],l);i+=E(s,n,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)i+=E(s=s.value,n,o,u=c+R(s,l++),a);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,n,t){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:_};function U(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=o,n.Profiler=a,n.PureComponent=m,n.StrictMode=c,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.act=U,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),c=e.key,a=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,s=_.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in n)j.call(n,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==i?i[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){i=Array(l);for(var u=0;u<l;u++)i[u]=arguments[u+2];o.children=i}return{$$typeof:t,type:e.type,key:c,ref:a,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=C,n.createFactory=function(e){var n=C.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=P,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=U,n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,t){return I.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,t){return I.current.useReducer(e,n,t)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return I.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return I.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(667294);const o={},c=r.createContext(o);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);