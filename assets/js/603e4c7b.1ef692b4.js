/*! For license information please see 603e4c7b.1ef692b4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[731719],{413981:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=t(824246),o=t(511151);const s={id:"core-components.codesnippetprops.showlinenumbers",title:"CodeSnippetProps.showLineNumbers",description:"API reference for CodeSnippetProps.showLineNumbers"},u=void 0,c={id:"reference/core-components.codesnippetprops.showlinenumbers",title:"CodeSnippetProps.showLineNumbers",description:"API reference for CodeSnippetProps.showLineNumbers",source:"@site/../docs/reference/core-components.codesnippetprops.showlinenumbers.md",sourceDirName:"reference",slug:"/reference/core-components.codesnippetprops.showlinenumbers",permalink:"/docs/reference/core-components.codesnippetprops.showlinenumbers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.codesnippetprops.showlinenumbers.md",tags:[],version:"current",frontMatter:{id:"core-components.codesnippetprops.showlinenumbers",title:"CodeSnippetProps.showLineNumbers",description:"API reference for CodeSnippetProps.showLineNumbers"}},i={},a=[{value:"Remarks",id:"remarks",level:2}];function f(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components",children:(0,n.jsx)(r.code,{children:"@backstage/core-components"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components.codesnippetprops",children:(0,n.jsx)(r.code,{children:"CodeSnippetProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components.codesnippetprops.showlinenumbers",children:(0,n.jsx)(r.code,{children:"showLineNumbers"})})]}),"\n",(0,n.jsx)(r.p,{children:"Whether to show line number"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"showLineNumbers?: boolean;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Default: false"})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,s={},a=null,f=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:f,props:s,_owner:c.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function _(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var w=v.prototype=new _;w.constructor=v,m(w,b.prototype),w.isPureReactComponent=!0;var S=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function g(e,r,n){var o,s={},u=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(u=""+r.key),r)k.call(r,o)&&!x.hasOwnProperty(o)&&(s[o]=r[o]);var i=arguments.length-2;if(1===i)s.children=n;else if(1<i){for(var a=Array(i),f=0;f<i;f++)a[f]=arguments[f+2];s.children=a}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===s[o]&&(s[o]=i[o]);return{$$typeof:t,type:e,key:u,ref:c,props:s,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,o,s,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return u=u(i=e),e=""===s?"."+R(i,0):s,S(u)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),P(u,r,o,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),r.push(u)),1;if(i=0,s=""===s?".":s+":",S(e))for(var a=0;a<e.length;a++){var f=s+R(c=e[a],a);i+=P(c,r,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(c=e.next()).done;)i+=P(c=c.value,r,o,f=s+R(c,a++),u);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},I={transition:null},L={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};function T(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=u,r.PureComponent=v,r.StrictMode=s,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.act=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=j.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in r)k.call(r,a)&&!x.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==i?i[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){i=Array(a);for(var f=0;f<a;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:t,type:e.type,key:s,ref:u,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=g,r.createFactory=function(e){var r=g.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=T,r.useCallback=function(e,r){return N.current.useCallback(e,r)},r.useContext=function(e){return N.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return N.current.useDeferredValue(e)},r.useEffect=function(e,r){return N.current.useEffect(e,r)},r.useId=function(){return N.current.useId()},r.useImperativeHandle=function(e,r,t){return N.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return N.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return N.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return N.current.useMemo(e,r)},r.useReducer=function(e,r,t){return N.current.useReducer(e,r,t)},r.useRef=function(e){return N.current.useRef(e)},r.useState=function(e){return N.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return N.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return N.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>u});var n=t(667294);const o={},s=n.createContext(o);function u(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);