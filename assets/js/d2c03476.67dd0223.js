/*! For license information please see d2c03476.67dd0223.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[546861],{608856:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=t(824246),o=t(511151);const c={id:"plugin-catalog-backend-module-msgraph.microsoftgraphclient",title:"MicrosoftGraphClient",description:"API reference for MicrosoftGraphClient"},s=void 0,i={id:"reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",title:"MicrosoftGraphClient",description:"API reference for MicrosoftGraphClient",source:"@site/../docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",permalink:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-msgraph.microsoftgraphclient",title:"MicrosoftGraphClient",description:"API reference for MicrosoftGraphClient"}},a={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-msgraph"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient",children:(0,n.jsx)(r.code,{children:"MicrosoftGraphClient"})})]}),"\n",(0,n.jsxs)(r.p,{children:["A HTTP Client that communicates with Microsoft Graph API. Simplify Authentication and API calls to get ",(0,n.jsx)(r.code,{children:"User"})," and ",(0,n.jsx)(r.code,{children:"Group"})," from Microsoft Graph"]}),"\n",(0,n.jsxs)(r.p,{children:["Uses ",(0,n.jsx)(r.code,{children:"msal-node"})," for authentication"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class MicrosoftGraphClient \n"})}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Constructor"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient._constructor_",children:"(constructor)(baseUrl, tokenCredential)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Constructs a new instance of the ",(0,n.jsx)(r.code,{children:"MicrosoftGraphClient"})," class"]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.create",children:"create(config)"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"static"})}),(0,n.jsxs)(r.td,{children:["Factory method that instantiate ",(0,n.jsx)(r.code,{children:"msal"})," client and return an instance of ",(0,n.jsx)(r.code,{children:"MicrosoftGraphClient"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupmembers",children:"getGroupMembers(groupId, query, queryMode)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Get a collection of ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/user",children:"User"})," belonging to a ",(0,n.jsx)(r.code,{children:"Group"})," from Graph API and return as ",(0,n.jsx)(r.code,{children:"AsyncIterable"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphoto",children:"getGroupPhoto(groupId, sizeId)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupphotowithsizelimit",children:"getGroupPhotoWithSizeLimit(groupId, maxSize)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Get ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/profilephoto",children:"profilePhoto"})," of ",(0,n.jsx)(r.code,{children:"Group"})," from Graph API with size limit"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroups",children:"getGroups(query, queryMode)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Get a collection of ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/group",children:"Group"})," from Graph API and return as ",(0,n.jsx)(r.code,{children:"AsyncIterable"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getgroupusermembers",children:"getGroupUserMembers(groupId, query, queryMode)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Get a collection of ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/user",children:"User"})," belonging to a ",(0,n.jsx)(r.code,{children:"Group"})," from Graph API and return as ",(0,n.jsx)(r.code,{children:"AsyncIterable"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getorganization",children:"getOrganization(tenantId)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Get ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/organization",children:"Organization"})," from Graph API"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getuserphoto",children:"getUserPhoto(userId, sizeId)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getuserphotowithsizelimit",children:"getUserPhotoWithSizeLimit(userId, maxSize)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Get ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/profilephoto",children:"profilePhoto"})," of ",(0,n.jsx)(r.code,{children:"User"})," from Graph API with size limit"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.getusers",children:"getUsers(query, queryMode)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Get a collection of ",(0,n.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/graph/api/resources/user",children:"User"})," from Graph API and return as ",(0,n.jsx)(r.code,{children:"AsyncIterable"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.requestapi",children:"requestApi(path, query, headers)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Abstract on top of ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.requestraw",children:"MicrosoftGraphClient.requestRaw()"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.requestcollection",children:"requestCollection(path, query, queryMode)"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:["Get a collection of resource from Graph API and return an ",(0,n.jsx)(r.code,{children:"AsyncIterable"})," of that resource"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-msgraph.microsoftgraphclient.requestraw",children:"requestRaw(url, headers, retryCount)"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"Makes a HTTP call to Graph API with token"})]})]})]})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,c={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:u,props:c,_owner:i.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||p}function j(){}function y(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||p}x.prototype.isReactComponent={},x.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=x.prototype;var b=y.prototype=new j;b.constructor=y,m(b,x.prototype),b.isPureReactComponent=!0;var _=Array.isArray,k=Object.prototype.hasOwnProperty,v={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,n){var o,c={},s=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(s=""+r.key),r)k.call(r,o)&&!C.hasOwnProperty(o)&&(c[o]=r[o]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];c.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:s,ref:i,props:c,_owner:v.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function G(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,o,c,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return s=s(a=e),e=""===c?"."+G(a,0):c,_(s)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),P(s,r,o,"",(function(e){return e}))):null!=s&&(I(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(a=0,c=""===c?".":c+":",_(e))for(var l=0;l<e.length;l++){var u=c+G(i=e[l],l);a+=P(i,r,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)a+=P(i=i.value,r,o,u=c+G(i,l++),s);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function M(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},R={transition:null},$={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:R,ReactCurrentOwner:v};function q(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:M,forEach:function(e,r,t){M(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return M(e,(function(){r++})),r},toArray:function(e){return M(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=x,r.Fragment=o,r.Profiler=s,r.PureComponent=y,r.StrictMode=c,r.Suspense=u,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.act=q,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,s=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,i=v.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in r)k.call(r,l)&&!C.hasOwnProperty(l)&&(o[l]=void 0===r[l]&&void 0!==a?a[l]:r[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}return{$$typeof:t,type:e.type,key:c,ref:s,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=I,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=R.transition;R.transition={};try{e()}finally{R.transition=r}},r.unstable_act=q,r.useCallback=function(e,r){return A.current.useCallback(e,r)},r.useContext=function(e){return A.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return A.current.useDeferredValue(e)},r.useEffect=function(e,r){return A.current.useEffect(e,r)},r.useId=function(){return A.current.useId()},r.useImperativeHandle=function(e,r,t){return A.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return A.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return A.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return A.current.useMemo(e,r)},r.useReducer=function(e,r,t){return A.current.useReducer(e,r,t)},r.useRef=function(e){return A.current.useRef(e)},r.useState=function(e){return A.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return A.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return A.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(667294);const o={},c=n.createContext(o);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);