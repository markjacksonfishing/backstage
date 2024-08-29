/*! For license information please see 31f912fd.cf6cff18.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[458891],{368448:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(785893),s=n(511151);const o={id:"plugin-kubernetes-backend.kubernetesproxyoptions",title:"KubernetesProxyOptions",description:"API reference for KubernetesProxyOptions"},c=void 0,i={id:"reference/plugin-kubernetes-backend.kubernetesproxyoptions",title:"KubernetesProxyOptions",description:"API reference for KubernetesProxyOptions",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesproxyoptions.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesproxyoptions",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesproxyoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesproxyoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesproxyoptions",title:"KubernetesProxyOptions",description:"API reference for KubernetesProxyOptions"}},u={},p=[];function a(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesproxyoptions",children:(0,t.jsx)(r.code,{children:"KubernetesProxyOptions"})})]}),"\n",(0,t.jsx)(r.p,{children:"Options accepted as a parameter by the KubernetesProxy"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type KubernetesProxyOptions = {\n    logger: LoggerService;\n    clusterSupplier: KubernetesClustersSupplier;\n    authStrategy: AuthenticationStrategy;\n    discovery: DiscoveryService;\n    httpAuth?: HttpAuthService;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.authenticationstrategy",children:"AuthenticationStrategy"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.httpauthservice",children:"HttpAuthService"})]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},675251:(e,r,n)=>{var t=n(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var t,o={},p=null,a=null;for(t in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(a=r.ref),r)c.call(r,t)&&!u.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:p,ref:a,props:o,_owner:i.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},785893:(e,r,n)=>{e.exports=n(675251)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>c});var t=n(667294);const s={},o=t.createContext(s);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);