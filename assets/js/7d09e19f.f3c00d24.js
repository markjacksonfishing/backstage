/*! For license information please see 7d09e19f.f3c00d24.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[915162],{426097:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=t(824246),o=t(511151);const c={id:"config-loader.remoteconfigsource.create",title:"RemoteConfigSource.create()",description:"API reference for RemoteConfigSource.create()"},u=void 0,i={id:"reference/config-loader.remoteconfigsource.create",title:"RemoteConfigSource.create()",description:"API reference for RemoteConfigSource.create()",source:"@site/../docs/reference/config-loader.remoteconfigsource.create.md",sourceDirName:"reference",slug:"/reference/config-loader.remoteconfigsource.create",permalink:"/docs/reference/config-loader.remoteconfigsource.create",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config-loader.remoteconfigsource.create.md",tags:[],version:"current",frontMatter:{id:"config-loader.remoteconfigsource.create",title:"RemoteConfigSource.create()",description:"API reference for RemoteConfigSource.create()"}},a={},s=[{value:"Parameters",id:"parameters",level:2}];function f(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/config-loader",children:(0,n.jsx)(r.code,{children:"@backstage/config-loader"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/config-loader.remoteconfigsource",children:(0,n.jsx)(r.code,{children:"RemoteConfigSource"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/config-loader.remoteconfigsource.create",children:(0,n.jsx)(r.code,{children:"create"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Creates a new ",(0,n.jsx)(r.a,{href:"/docs/reference/config-loader.remoteconfigsource",children:"RemoteConfigSource"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"static create(options: RemoteConfigSourceOptions): ConfigSource;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config-loader.remoteconfigsourceoptions",children:"RemoteConfigSourceOptions"})}),(0,n.jsx)(r.td,{children:"Options for the source."})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/config-loader.configsource",children:"ConfigSource"})}),"\n",(0,n.jsx)(r.p,{children:"A new remote config source."})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,c={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:i.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function _(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var v=b.prototype=new _;v.constructor=b,y(v,g.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,c={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)x.call(r,o)&&!C.hasOwnProperty(o)&&(c[o]=r[o]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var s=Array(a),f=0;f<a;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:u,ref:i,props:c,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,c,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return u=u(a=e),e=""===c?"."+E(a,0):c,j(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(u,r,o,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(a=0,c=""===c?".":c+":",j(e))for(var s=0;s<e.length;s++){var f=c+E(i=e[s],s);a+=$(i,r,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(i=e.next()).done;)a+=$(i=i.value,r,o,f=c+E(i,s++),u);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function O(e,r,t){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=u,r.PureComponent=b,r.StrictMode=c,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=S.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in r)x.call(r,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==a?a[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){a=Array(s);for(var f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:t,type:e.type,key:c,ref:u,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=T.transition;T.transition={};try{e()}finally{T.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>u});var n=t(667294);const o={},c=n.createContext(o);function u(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);