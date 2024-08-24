/*! For license information please see c949aeb4.045960f1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[256545],{494909:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=t(824246),u=t(511151);const o={id:"plugin-kubernetes-backend.kubernetesbuilderreturn",title:"KubernetesBuilderReturn",description:"API reference for KubernetesBuilderReturn"},s=void 0,c={id:"reference/plugin-kubernetes-backend.kubernetesbuilderreturn",title:"KubernetesBuilderReturn",description:"API reference for KubernetesBuilderReturn",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilderreturn",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilderreturn",title:"KubernetesBuilderReturn",description:"API reference for KubernetesBuilderReturn"}},i={},a=[];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,u.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilderreturn",children:(0,n.jsx)(r.code,{children:"KubernetesBuilderReturn"})})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsx)(r.p,{children:"Please migrate to the new backend system as this will be removed in the future."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The return type of the ",(0,n.jsx)(r.code,{children:"KubernetesBuilder.build"})," method"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type KubernetesBuilderReturn = Promise<{\n    router: express.Router;\n    clusterSupplier: KubernetesClustersSupplier;\n    customResources: CustomResource[];\n    fetcher: KubernetesFetcher;\n    proxy: KubernetesProxy;\n    objectsProvider: KubernetesObjectsProvider;\n    serviceLocator: KubernetesServiceLocator;\n    authStrategyMap: {\n        [key: string]: AuthenticationStrategy;\n    };\n}>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.customresource",children:"CustomResource"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesfetcher",children:"KubernetesFetcher"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxy",children:"KubernetesProxy"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesobjectsprovider",children:"KubernetesObjectsProvider"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesservicelocator",children:"KubernetesServiceLocator"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.authenticationstrategy",children:"AuthenticationStrategy"})]})]})}function f(e={}){const{wrapper:r}={...(0,u.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,o={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:u,type:e,key:a,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function k(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||b}function m(){}function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||b}k.prototype.isReactComponent={},k.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=k.prototype;var v=_.prototype=new m;v.constructor=_,y(v,k.prototype),v.isPureReactComponent=!0;var g=Array.isArray,x=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var u,o={},s=null,c=null;if(null!=r)for(u in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)x.call(r,u)&&!S.hasOwnProperty(u)&&(o[u]=r[u]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(u in i=e.defaultProps)void 0===o[u]&&(o[u]=i[u]);return{$$typeof:t,type:e,key:s,ref:c,props:o,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,u,o,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return s=s(i=e),e=""===o?"."+C(i,0):o,g(s)?(u="",null!=e&&(u=e.replace(E,"$&/")+"/"),P(s,r,u,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,u+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),r.push(s)),1;if(i=0,o=""===o?".":o+":",g(e))for(var a=0;a<e.length;a++){var l=o+C(c=e[a],a);i+=P(c,r,u,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)i+=P(c=c.value,r,u,l=o+C(c,a++),s);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,r,t){if(null==e)return e;var n=[],u=0;return P(e,n,"","",(function(e){return r.call(t,e,u++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var K={current:null},I={transition:null},A={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};function T(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=k,r.Fragment=u,r.Profiler=s,r.PureComponent=_,r.StrictMode=o,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.act=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=y({},e.props),o=e.key,s=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,c=j.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in r)x.call(r,a)&&!S.hasOwnProperty(a)&&(u[a]=void 0===r[a]&&void 0!==i?i[a]:r[a])}var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){i=Array(a);for(var l=0;l<a;l++)i[l]=arguments[l+2];u.children=i}return{$$typeof:t,type:e.type,key:o,ref:s,props:u,_owner:c}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=T,r.useCallback=function(e,r){return K.current.useCallback(e,r)},r.useContext=function(e){return K.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return K.current.useDeferredValue(e)},r.useEffect=function(e,r){return K.current.useEffect(e,r)},r.useId=function(){return K.current.useId()},r.useImperativeHandle=function(e,r,t){return K.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return K.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return K.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return K.current.useMemo(e,r)},r.useReducer=function(e,r,t){return K.current.useReducer(e,r,t)},r.useRef=function(e){return K.current.useRef(e)},r.useState=function(e){return K.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return K.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return K.current.useTransition()},r.version="18.3.1"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>s});var n=t(667294);const u={},o=n.createContext(u);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(u):e.components||u:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);