/*! For license information please see ec0397b4.b781b091.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[382884],{52032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(824246),r=n(511151);const o={id:"package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility"},i=void 0,s={id:"tutorials/package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility",source:"@site/../docs/tutorials/package-role-migration.md",sourceDirName:"tutorials",slug:"/tutorials/package-role-migration",permalink:"/docs/tutorials/package-role-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/package-role-migration.md",tags:[],version:"current",frontMatter:{id:"package-role-migration",title:"Package Role Migration",description:"Guide for how to migrate packages to use the new role utility"},sidebar:"docs",previous:{title:"Migrating to React 18",permalink:"/docs/tutorials/react18-migration"},next:{title:"Migrating away from @backstage/core",permalink:"/docs/tutorials/migrating-away-from-core"}},c={},l=[{value:"Migration",id:"migration",level:2},{value:"TL;DR, Step 1-4:",id:"tldr-step-1-4",level:3},{value:"Step 1 - Add package roles",id:"step-1---add-package-roles",level:3},{value:"Step 2 - Migrate package scripts",id:"step-2---migrate-package-scripts",level:3},{value:"Step 3 - Migrate package ESLint configurations",id:"step-3---migrate-package-eslint-configurations",level:3},{value:"Step 4 - Use <code>backstage-cli repo</code>",id:"step-4---use-backstage-cli-repo",level:3},{value:"FAQ",id:"faq",level:2},{value:"Why were package roles introduced?",id:"why-were-package-roles-introduced",level:3},{value:"Do I have to migrate to using package roles?",id:"do-i-have-to-migrate-to-using-package-roles",level:3},{value:"I have a package where none of the existing roles apply",id:"i-have-a-package-where-none-of-the-existing-roles-apply",level:3},{value:"Should I include the role in published packages?",id:"should-i-include-the-role-in-published-packages",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The Backstage CLI has introduced the concept of package roles, whose purpose is to\nenable more powerful tooling, optimizations, and leaner package configuration. More background and\ninformation about the change can be found in the ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/8729",children:"original RFC"})," and the ",(0,a.jsx)(t.a,{href:"#faq",children:"FAQ"})," on this page."]}),"\n",(0,a.jsxs)(t.p,{children:["Package roles are implemented through a well-known ",(0,a.jsx)(t.code,{children:'"backstage"."role"'})," field in the\n",(0,a.jsx)(t.code,{children:"package.json"})," of each package. There are a handful of roles defined so far, and it\nis not possible to use values outside the ",(0,a.jsx)(t.a,{href:"/docs/tooling/cli/build-system#package-roles",children:"set of predefined roles"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["With roles in place in all packages, the Backstage CLI is able to automatically\ndetermine how to handle each package. For example, the different build commands\nhave been replaced by a single one that instead knows how to build each role.\nThe test and lint configurations are also selected automatically based on the role, and\na new category of ",(0,a.jsx)(t.code,{children:"repo"})," commands have been introduced in the CLI, which are able\nto operate across all packages simultaneously."]}),"\n",(0,a.jsx)(t.p,{children:"Package roles have been used in the Backstage main repository for a while, and\nwe now recommend that all Backstage projects are migrated to use package roles."}),"\n",(0,a.jsx)(t.h2,{id:"migration",children:"Migration"}),"\n",(0,a.jsxs)(t.p,{children:["In order to make the migration as smooth as possible ",(0,a.jsx)(t.code,{children:"@backstage/cli"})," provides\na number of migration utilities. Using these in combination with some manual review\nand optional steps should be all you need to migrate to package roles in most projects."]}),"\n",(0,a.jsxs)(t.p,{children:["Before you begin the migration, make sure you have updated to the most recent version of\nthe ",(0,a.jsx)(t.code,{children:"@backstage/cli"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"tldr-step-1-4",children:"TL;DR, Step 1-4:"}),"\n",(0,a.jsx)(t.p,{children:"This is a shorter version of all of the steps below, in case you're in a hurry."}),"\n",(0,a.jsx)(t.p,{children:"Run the following commands:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"yarn backstage-cli migrate package-roles\nyarn backstage-cli migrate package-scripts\nyarn backstage-cli migrate package-lint-configs\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Have a look at the new commands under ",(0,a.jsx)(t.code,{children:"yarn backstage-cli repo"}),", and switch to them wherever you can. They tend to be much faster compared to their ",(0,a.jsx)(t.code,{children:"lerna"})," equivalents."]}),"\n",(0,a.jsx)(t.h3,{id:"step-1---add-package-roles",children:"Step 1 - Add package roles"}),"\n",(0,a.jsxs)(t.p,{children:["The first step is to add the ",(0,a.jsx)(t.code,{children:'"backstage"."role"'})," field to each package. This can of course be done manually, but the following command will attempt to automatically detect the role of each package in your project:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"yarn backstage-cli migrate package-roles\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The automatic detection is not perfect, so it is recommended to manually review the\nroles that were assigned to each package.\nYou can use the ",(0,a.jsx)(t.a,{href:"/docs/tooling/cli/build-system#package-roles",children:"package role definitions"})," as a reference."]}),"\n",(0,a.jsx)(t.h3,{id:"step-2---migrate-package-scripts",children:"Step 2 - Migrate package scripts"}),"\n",(0,a.jsxs)(t.p,{children:["The migration to package roles also introduces a new ",(0,a.jsx)(t.code,{children:"package"})," command category to the CLI.\nEach command under the ",(0,a.jsx)(t.code,{children:"package"})," category is designed to be mapped directly to an entry in ",(0,a.jsx)(t.code,{children:'"scripts"'})," in ",(0,a.jsx)(t.code,{children:"package.json"}),". These commands replace the existing commands like ",(0,a.jsx)(t.code,{children:"build"}),", ",(0,a.jsx)(t.code,{children:"app:build"}),", ",(0,a.jsx)(t.code,{children:"lint"}),", and ",(0,a.jsx)(t.code,{children:"test"}),". They look something like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "scripts": {\n    "start": "backstage-cli package start",\n    "build": "backstage-cli package build",\n    "lint": "backstage-cli package lint",\n    ...\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Every package role has a fixed set of recommended scripts. It is strongly recommended that you use these scripts, as it allows for optimizations in other parts of the CLI. You can migrate to using all of these scripts by running the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"yarn backstage-cli migrate package-scripts\n"})}),"\n",(0,a.jsx)(t.p,{children:"The migration command also carries over any existing flags that were being passed in the old scripts."}),"\n",(0,a.jsxs)(t.p,{children:["If you in the end do not want to use this exact script setup, it is still recommended to migrate to using the ",(0,a.jsx)(t.code,{children:"package"})," commands, as the top-level commands will be deprecated and removed. If you don't want to use package roles either, you can pass an explicit role to some of the package commands, for example ",(0,a.jsx)(t.code,{children:"yarn backstage-cli package build --role web-library"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"step-3---migrate-package-eslint-configurations",children:"Step 3 - Migrate package ESLint configurations"}),"\n",(0,a.jsxs)(t.p,{children:["An area that has been simplified as part of the move to package roles is the ESLint configuration. Rather than having each package select which configuration they want (and getting it wrong), they now use a shared configuration factory that utilizes the package role. You can read more about the new configuration setup in the ",(0,a.jsx)(t.a,{href:"/docs/tooling/cli/build-system#linting",children:"build system documentation"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"To migrate the ESLint configuration of all packages in your project, run the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"yarn backstage-cli migrate package-lint-configs\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will migrate all existing ",(0,a.jsx)(t.code,{children:".eslintrc.js"})," that extend the old configuration from ",(0,a.jsx)(t.code,{children:"@backstage/cli"}),", as well as carry over any additional configuration."]}),"\n",(0,a.jsxs)(t.h3,{id:"step-4---use-backstage-cli-repo",children:["Step 4 - Use ",(0,a.jsx)(t.code,{children:"backstage-cli repo"})]}),"\n",(0,a.jsxs)(t.p,{children:["The Backstage CLI recently introduced a new ",(0,a.jsx)(t.code,{children:"repo"})," command category, which houses commands that operate on an entire monorepo at once. These commands work particularly well once packages have been migrated to use roles, as that allows for some very effective optimizations. It is typically much faster to use these commands compared to using tools like ",(0,a.jsx)(t.code,{children:"lerna"}),", as they're able to avoid the overhead of calling package scripts through ",(0,a.jsx)(t.code,{children:"yarn"})," and can operate on multiple packages at once. You can read more about the ",(0,a.jsx)(t.code,{children:"repo"})," command in the ",(0,a.jsx)(t.a,{href:"/docs/tooling/cli/commands#repo-build",children:"CLI command documentation"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The way to execute this step of the migration is not as well defined as the previous steps, as it depends on what your development and CI/CD setup looks like. Look for the following patterns to replace in your root ",(0,a.jsx)(t.code,{children:"package.json"})," as well as CI/CD setup:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Commands that lint the entire repo should be replaced with ",(0,a.jsx)(t.code,{children:"yarn backstage-cli repo lint"})," along with a ",(0,a.jsx)(t.code,{children:"--since"})," flag if needed. For example this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"lerna run lint --since origin/master --\n"})}),"\n",(0,a.jsx)(t.p,{children:"would be replaced by the following:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"backstage-cli repo lint --since origin/master\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In places where the entire repo is being built, use ",(0,a.jsx)(t.code,{children:"yarn backstage-cli repo build"}),", which also supports the ",(0,a.jsx)(t.code,{children:"--since"})," flag. The migration here is a bit more nuanced as it depends on why you are building all packages."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If you are building all packages to ",(0,a.jsx)(t.strong,{children:"verify"})," that you are able to build them, you most likely want ",(0,a.jsx)(t.code,{children:"backstage-cli repo build --all"}),". The ",(0,a.jsx)(t.code,{children:"--all"})," flag signals that bundled packages like ",(0,a.jsx)(t.code,{children:"packages/app"})," and ",(0,a.jsx)(t.code,{children:"packages/backend"})," should be built as well. Pair this up with a ",(0,a.jsx)(t.code,{children:"--since"})," flag in CI to avoid needing to build all packages."]}),"\n",(0,a.jsxs)(t.li,{children:["If you are building all packages to ",(0,a.jsx)(t.strong,{children:"publish"})," them, then ",(0,a.jsx)(t.code,{children:"backstage-cli repo build"})," is enough, as it builds all published packages."]}),"\n",(0,a.jsxs)(t.li,{children:["If you are building all packages to ",(0,a.jsx)(t.strong,{children:"deploy"})," them, you likely don't want to use the ",(0,a.jsx)(t.code,{children:"repo"})," command at all, simply call ",(0,a.jsx)(t.code,{children:"yarn build"})," in the packages you want to deploy instead. For example, if you are deploying the backend with a docker host build, it's enough to call ",(0,a.jsx)(t.code,{children:"yarn build"})," inside ",(0,a.jsx)(t.code,{children:"packages/backend"}),". In a standard ",(0,a.jsx)(t.code,{children:"@backstage/create-app"})," there is also a shorthand for building the backend from the root, ",(0,a.jsx)(t.code,{children:"yarn build:backend"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.h3,{id:"why-were-package-roles-introduced",children:"Why were package roles introduced?"}),"\n",(0,a.jsxs)(t.p,{children:["To keep configuration lean, allow for more utilities and tooling, and to enable optimizations in the build system. You can read more about the reasoning in the ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/8729",children:"original RFC"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"do-i-have-to-migrate-to-using-package-roles",children:"Do I have to migrate to using package roles?"}),"\n",(0,a.jsx)(t.p,{children:"Short answer - yes."}),"\n",(0,a.jsxs)(t.p,{children:["Longer answer - mostly, you can get around having to declare the role of your packages by instead explicitly declaring the role in the command invocation or configuration. For example, the ",(0,a.jsx)(t.code,{children:"app:build"})," command will go away, but you can replace it with ",(0,a.jsx)(t.code,{children:"package build --role frontend"})," if you don't want to declare the role in ",(0,a.jsx)(t.code,{children:"package.json"})," . It is however strongly recommended to declare the package roles."]}),"\n",(0,a.jsx)(t.h3,{id:"i-have-a-package-where-none-of-the-existing-roles-apply",children:"I have a package where none of the existing roles apply"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"web-library"}),", ",(0,a.jsx)(t.code,{children:"node-library"})," and ",(0,a.jsx)(t.code,{children:"common-library"})," roles are general purpose roles that should cover most use cases. If you feel like none of those roles work for you, then please open an issue in the ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"Backstage repo"})," and suggest the addition of a new role."]}),"\n",(0,a.jsx)(t.h3,{id:"should-i-include-the-role-in-published-packages",children:"Should I include the role in published packages?"}),"\n",(0,a.jsx)(t.p,{children:"Yes. While there is nothing that will consume the role at the moment, it is likely that future tooling will be able to provide a better experience for users when published packages include the role."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},371426:(e,t,n)=>{var a=n(827378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,o={},l=null,d=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:l,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var x=b.prototype=new k;x.constructor=b,f(x,y.prototype),x.isPureReactComponent=!0;var j=Array.isArray,w=Object.prototype.hasOwnProperty,v={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,a){var r,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=a;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:n,type:e,key:i,ref:s,props:o,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case a:c=!0}}if(c)return i=i(c=e),e=""===o?"."+E(c,0):o,j(i)?(r="",null!=e&&(r=e.replace(I,"$&/")+"/"),R(i,t,r,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(I,"$&/")+"/")+e)),t.push(i)),1;if(c=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var d=o+E(s=e[l],l);c+=R(s,t,r,d,i)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(s=e.next()).done;)c+=R(s=s.value,t,r,d=o+E(s,l++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,n){if(null==e)return e;var a=[],r=0;return R(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},L={transition:null},O={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:L,ReactCurrentOwner:v};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=M,t.cloneElement=function(e,t,a){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=f({},e.props),o=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=v.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=a;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:n,type:e.type,key:o,ref:i,props:r,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(667294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);