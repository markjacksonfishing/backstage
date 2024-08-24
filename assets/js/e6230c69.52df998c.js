/*! For license information please see e6230c69.52df998c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[606825],{382077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(824246),o=n(511151);const a={id:"yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3"},i=void 0,s={id:"tutorials/yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3",source:"@site/../docs/tutorials/yarn-migration.md",sourceDirName:"tutorials",slug:"/tutorials/yarn-migration",permalink:"/docs/tutorials/yarn-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/yarn-migration.md",tags:[],version:"current",frontMatter:{id:"yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3"},sidebar:"docs",previous:{title:"Using the Backstage Proxy from Within a Plugin",permalink:"/docs/tutorials/using-backstage-proxy-within-plugin"},next:{title:"Migrating from Material UI v4 to v5",permalink:"/docs/tutorials/migrate-to-mui5"}},l={},c=[{value:"Migration",id:"migration",level:2},{value:"Ignore File Updates",id:"ignore-file-updates",level:3},{value:"Installation",id:"installation",level:3},{value:"Migrate Usage",id:"migrate-usage",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["While Backstage projects created with ",(0,r.jsx)(t.code,{children:"@backstage/create-app"})," use ",(0,r.jsx)(t.a,{href:"https://classic.yarnpkg.com/",children:"Yarn 1"})," by default, it\nis possible to switch them to instead use ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/",children:"Yarn 3"}),". Tools like ",(0,r.jsx)(t.code,{children:"yarn backstage-cli versions:bump"})," will\nstill work, as they recognize both lockfile formats."]}),"\n",(0,r.jsx)(t.h2,{id:"migration",children:"Migration"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to this guide, also be sure to check out the ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/getting-started/migration",children:"Yarn migration guide"})," as well."]}),"\n",(0,r.jsx)(t.h3,{id:"ignore-file-updates",children:"Ignore File Updates"}),"\n",(0,r.jsx)(t.p,{children:"First off, be sure to have the updated ignore entries in your app. These are included in all newly created projects, but might be missing in yours:"}),"\n",(0,r.jsxs)(t.p,{children:["Add the following to ",(0,r.jsx)(t.code,{children:".gitignore"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gitignore",children:"# Yarn 3 files\n.pnp.*\n.yarn/*\n!.yarn/patches\n!.yarn/plugins\n!.yarn/releases\n!.yarn/sdks\n!.yarn/versions\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And this to ",(0,r.jsx)(t.code,{children:".dockerignore"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gitignore",children:".yarn/cache\n.yarn/install-state.gz\n"})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Let's move on to the actual installation. We'd recommend making separate Git commits of most of these steps, in case you need to go back and debug anything. To install Yarn 3, run the following command in the project root:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn set version 3.x\n"})}),"\n",(0,r.jsx)(t.p,{children:"We'll need the Yarn workspace tools plugin later on, so let's install that too:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn plugin import @yarnpkg/plugin-workspace-tools\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now we're ready to re-install all dependencies. This will update your ",(0,r.jsx)(t.code,{children:"yarn.lock"})," and switch the project to use ",(0,r.jsx)(t.code,{children:"node-modules"})," as the Yarn node linker."]}),"\n",(0,r.jsxs)(t.p,{children:["In case you had a ",(0,r.jsx)(t.code,{children:".yarnrc"})," you can delete it now, but be sure to migrate over any options to ",(0,r.jsx)(t.code,{children:".yarnrc.yml"}),". See the ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/configuration/manifest",children:"Yarn configuration docs"})," for a full list of options. For example, ",(0,r.jsx)(t.code,{children:"registry"})," is now ",(0,r.jsx)(t.code,{children:"npmRegistryServer"}),", and ",(0,r.jsx)(t.code,{children:"network-timeout"})," is ",(0,r.jsx)(t.code,{children:"httpTimeout"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"migrate-usage",children:"Migrate Usage"}),"\n",(0,r.jsxs)(t.p,{children:["At this point you'll be all set up with Yarn 3! What remains is to migrate any usage of Yarn according to their ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/getting-started/migration",children:"migration guide"}),". For example, any ",(0,r.jsx)(t.code,{children:"yarn install --frozen-lockfile"})," commands should be replaced with ",(0,r.jsx)(t.code,{children:"yarn install --immutable"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You'll also need to update any ",(0,r.jsx)(t.code,{children:"Dockerfile"}),"s to add instructions to copy in your Yarn 3 installation into the image:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:"COPY .yarn ./.yarn\nCOPY .yarnrc.yml ./\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In a multi-stage ",(0,r.jsx)(t.code,{children:"Dockerfile"}),", each stage that runs a ",(0,r.jsx)(t.code,{children:"yarn"})," command will also need the Yarn 3 installation. For example, in the final stage you may need to add the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:"COPY --from=build --chown=node:node /app/.yarn ./.yarn\nCOPY --from=build --chown=node:node /app/.yarnrc.yml  ./\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"--production"})," flag to ",(0,r.jsx)(t.code,{children:"yarn install"})," has been removed in Yarn 3, instead you need to use ",(0,r.jsx)(t.code,{children:"yarn workspaces focus --all --production"})," to avoid installing development dependencies in your production deployment. A tradeoff of this is that ",(0,r.jsx)(t.code,{children:"yarn workspaces focus"})," does not support the ",(0,r.jsx)(t.code,{children:"--immutable"})," flag."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:'RUN yarn workspaces focus --all --production && rm -rf "$(yarn cache clean)"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, ",(0,r.jsx)(t.code,{children:"yarn config"})," has been reworked from being able to store any arbitrary key-value pairs to only supporting a handful of predefined pairs. Previously, we would set our preferred ",(0,r.jsx)(t.code,{children:"python3"})," interpreter to work around ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/11583",children:"any issues related to node-gyp"})," so we need to provide an appropriate substitute."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:'FROM node:16-bullseye-slim\n\n# highlight-add-start\n# Set Python interpreter for `node-gyp` to use\nENV PYTHON=/usr/bin/python3\n# highlight-add-end\n\n# Install sqlite3 dependencies. You can skip this if you don\'t use sqlite3 in the image,\n# in which case you should also move better-sqlite3 to "devDependencies" in package.json.\nRUN apt-get update && \\\n    apt-get install -y --no-install-recommends libsqlite3-dev python3 build-essential && \\\n    # highlight-remove-start\n    rm -rf /var/lib/apt/lists/* && \\\n    yarn config set python /usr/bin/python3\n    # highlight-remove-end\n    # highlight-add-next-line\n    rm -rf /var/lib/apt/lists/*\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You'll want to make sure that the ",(0,r.jsx)(t.code,{children:"PYTHON"})," environment variable is declared relatively early, before any instances of ",(0,r.jsx)(t.code,{children:"Yarn"})," are invoked as ",(0,r.jsx)(t.code,{children:"node-gyp"})," is indirectly triggered by some modules during installation."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have any internal CLI tools in your project that are exposed through ",(0,r.jsx)(t.code,{children:'"bin"'})," entries in ",(0,r.jsx)(t.code,{children:"package.json"}),", then you'll need to add these packages as dependencies in your project root ",(0,r.jsx)(t.code,{children:"package.json"}),". This is to make sure Yarn picks up the executables and makes them available through ",(0,r.jsx)(t.code,{children:"yarn <executable>"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function j(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=m.prototype;var b=x.prototype=new j;b.constructor=x,y(b,m.prototype),b.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},i=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:n,type:e,key:i,ref:s,props:a,_owner:_.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var Y=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return i=i(l=e),e=""===a?"."+C(l,0):a,v(i)?(o="",null!=e&&(o=e.replace(Y,"$&/")+"/"),R(i,t,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Y,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",v(e))for(var c=0;c<e.length;c++){var u=a+C(s=e[c],c);l+=R(s,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=R(s=s.value,t,o,u=a+C(s,c++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},I={transition:null},N={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:I,ReactCurrentOwner:_};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=i,t.PureComponent=x,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!w.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:n,type:e.type,key:a,ref:i,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.3.1"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(667294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);