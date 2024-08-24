/*! For license information please see 0fb3e0a0.6bd7eb7c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[989530],{715276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>a,toc:()=>l});var n=r(824246),o=r(511151);const u={id:"plugin-catalog-backend-module-puppetdb.default_provider_id",title:"DEFAULT_PROVIDER_ID",description:"API reference for DEFAULT_PROVIDER_ID"},c=void 0,a={id:"reference/plugin-catalog-backend-module-puppetdb.default_provider_id",title:"DEFAULT_PROVIDER_ID",description:"API reference for DEFAULT_PROVIDER_ID",source:"@site/../docs/reference/plugin-catalog-backend-module-puppetdb.default_provider_id.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-puppetdb.default_provider_id",permalink:"/docs/reference/plugin-catalog-backend-module-puppetdb.default_provider_id",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-puppetdb.default_provider_id.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-puppetdb.default_provider_id",title:"DEFAULT_PROVIDER_ID",description:"API reference for DEFAULT_PROVIDER_ID"}},i={},l=[];function s(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-puppetdb",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-puppetdb"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-puppetdb.default_provider_id",children:(0,n.jsx)(t.code,{children:"DEFAULT\\_PROVIDER\\_ID"})})]}),"\n",(0,n.jsx)(t.p,{children:"Name of the default provider when a using a simple configuration."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'DEFAULT_PROVIDER_ID = "default"\n'})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,u={},l=null,s=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:s,props:u,_owner:a.current}}t.Fragment=u,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function h(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var g=v.prototype=new h;g.constructor=v,_(g,b.prototype),g.isPureReactComponent=!0;var E=Array.isArray,k=Object.prototype.hasOwnProperty,R={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var o,u={},c=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,o)&&!S.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];u.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:r,type:e,key:c,ref:a,props:u,_owner:R.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var x=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function w(e,t,o,u,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return c=c(i=e),e=""===u?"."+I(i,0):u,E(c)?(o="",null!=e&&(o=e.replace(x,"$&/")+"/"),w(c,t,o,"",(function(e){return e}))):null!=c&&(D(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(x,"$&/")+"/")+e)),t.push(c)),1;if(i=0,u=""===u?".":u+":",E(e))for(var l=0;l<e.length;l++){var s=u+I(a=e[l],l);i+=w(a,t,o,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(a=e.next()).done;)i+=w(a=a.value,t,o,s=u+I(a,l++),c);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,t,r){if(null==e)return e;var n=[],o=0;return w(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},$={transition:null},T={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:$,ReactCurrentOwner:R};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!D(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=c,t.PureComponent=v,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=_({},e.props),u=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=R.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in t)k.call(t,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==i?i[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){i=Array(l);for(var s=0;s<l;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:r,type:e.type,key:u,ref:c,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=D,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,r){return C.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,r){return C.current.useReducer(e,t,r)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return C.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return C.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var n=r(667294);const o={},u=n.createContext(o);function c(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);