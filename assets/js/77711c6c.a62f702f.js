/*! For license information please see 77711c6c.a62f702f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[354946],{988633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates"},i=void 0,s={id:"features/software-templates/adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates",source:"@site/../docs/features/software-templates/adding-templates.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/adding-templates",permalink:"/docs/features/software-templates/adding-templates",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/adding-templates.md",tags:[],version:"current",frontMatter:{id:"adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/features/software-templates/configuration"},next:{title:"Writing Templates",permalink:"/docs/features/software-templates/writing-templates"}},c={},u=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Templates are stored in the ",(0,r.jsx)(t.strong,{children:"Software Catalog"})," under a kind ",(0,r.jsx)(t.code,{children:"Template"}),". The\nminimum that is needed to define a template is a ",(0,r.jsx)(t.code,{children:"template.yaml"})," file, but it\nwould be good to also have some files in there that can be templated in."]}),"\n",(0,r.jsxs)(t.p,{children:["A simple ",(0,r.jsx)(t.code,{children:"template.yaml"})," definition might look something like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\n# some metadata about the template itself\nmetadata:\n  name: v1beta3-demo\n  title: Test Action template\n  description: scaffolder v1beta3 template demo\nspec:\n  owner: backstage/techdocs-core\n  type: service\n\n  # these are the steps which are rendered in the frontend with the form input\n  parameters:\n    - title: Fill in some steps\n      required:\n        - name\n      properties:\n        name:\n          title: Name\n          type: string\n          description: Unique name of the component\n          ui:autofocus: true\n          ui:options:\n            rows: 5\n    - title: Choose a location\n      required:\n        - repoUrl\n      properties:\n        repoUrl:\n          title: Repository Location\n          type: string\n          ui:field: RepoUrlPicker\n          ui:options:\n            allowedHosts:\n              - github.com\n\n  # here's the steps that are executed in series in the scaffolder backend\n  steps:\n    - id: fetch-base\n      name: Fetch Base\n      action: fetch:template\n      input:\n        url: ./template\n        values:\n          name: ${{ parameters.name }}\n\n    - id: fetch-docs\n      name: Fetch Docs\n      action: fetch:plain\n      input:\n        targetPath: ./community\n        url: https://github.com/backstage/community/tree/main/backstage-community-sessions\n\n    - id: publish\n      name: Publish\n      action: publish:github\n      input:\n        allowedHosts: ['github.com']\n        description: This is ${{ parameters.name }}\n        repoUrl: ${{ parameters.repoUrl }}\n\n    - id: register\n      name: Register\n      action: catalog:register\n      input:\n        repoContentsUrl: ${{ steps['publish'].output.repoContentsUrl }}\n        catalogInfoPath: '/catalog-info.yaml'\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-template",children:"Template Entity"}),"\ncontains more information about the required fields."]}),"\n",(0,r.jsxs)(t.p,{children:["Once we have a ",(0,r.jsx)(t.code,{children:"template.yaml"})," ready, we can then add it to the software catalog\nfor use by the scaffolder."]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"note",children:(0,r.jsxs)(t.p,{children:["When you add or modify a template, you will need to refresh the location entity.\nOtherwise, Backstage won't display the template in the available templates,\nor it will keep showing the old template. You can refresh the location instance by\ngoing into ",(0,r.jsx)(t.code,{children:"Catalog"})," web page, choosing ",(0,r.jsx)(t.code,{children:"Locations"})," instead of ",(0,r.jsx)(t.code,{children:"Components"}),', and selecting the correct\nlocation entity.\nFrom there, you can click on the refresh icon representing "Scheduled entity refresh" action.\nAfterwards, you should see your template updated.']})}),"\n",(0,r.jsxs)(t.p,{children:["You can add the template files to the catalog through\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/configuration#static-location-configuration",children:"static location configuration"}),",\nfor example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: url\n      target: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/react-ssr-template/template.yaml\n      rules:\n        - allow: [Template]\n    - type: file\n      target: template.yaml # Backstage will expect the file to be in packages/backend/template.yaml\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Or you can add the template using the ",(0,r.jsx)(t.code,{children:"catalog-import"})," plugin, which unless\nconfigured differently should be running on ",(0,r.jsx)(t.code,{children:"/catalog-import"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For information about writing your own templates, you can check out the docs\n",(0,r.jsx)(t.a,{href:"/docs/features/software-templates/writing-templates",children:"here"})]}),"\n",(0,r.jsxs)(t.p,{children:["If you are looking for a method to discover templates without the need for manual ingestion, there are several options available. One approach is to utilize Discovery providers, such as ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/integrations/github/discovery",children:"GitHub Discovery"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively, you can choose to set up an external integration. This involves connecting your system to external sources or platforms that may host templates relevant to your needs, as mentioned in ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/external-integrations/",children:"External Integration"}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var w=v.prototype=new b;w.constructor=v,h(w,g.prototype),w.isPureReactComponent=!0;var _=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return i=i(c=e),e=""===a?"."+R(c,0):a,_(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),$(i,t,o,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",_(e))for(var u=0;u<e.length;u++){var l=a+R(s=e[u],u);c+=$(s,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=$(s=s.value,t,o,l=a+R(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},A={transition:null},U={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:A,ReactCurrentOwner:k};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=i,t.PureComponent=v,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.act=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)x.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(667294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);