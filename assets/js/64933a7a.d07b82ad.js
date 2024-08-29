/*! For license information please see 64933a7a.d07b82ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[817172],{397638:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var o=r(785893),i=r(511151);const t={id:"core-plugin-api.pluginconfig",title:"PluginConfig",description:"API reference for PluginConfig"},c=void 0,s={id:"reference/core-plugin-api.pluginconfig",title:"PluginConfig",description:"API reference for PluginConfig",source:"@site/../docs/reference/core-plugin-api.pluginconfig.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.pluginconfig",permalink:"/docs/reference/core-plugin-api.pluginconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.pluginconfig.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.pluginconfig",title:"PluginConfig",description:"API reference for PluginConfig"}},a={},l=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,o.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,o.jsx)(n.a,{href:"/docs/reference/core-plugin-api.pluginconfig",children:(0,o.jsx)(n.code,{children:"PluginConfig"})})]}),"\n",(0,o.jsx)(n.p,{children:"Plugin descriptor type."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"export type PluginConfig<Routes extends AnyRoutes, ExternalRoutes extends AnyExternalRoutes> = {\n    id: string;\n    apis?: Iterable<AnyApiFactory>;\n    routes?: Routes;\n    externalRoutes?: ExternalRoutes;\n    featureFlags?: PluginFeatureFlagConfig[];\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"References:"})," ",(0,o.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyroutes",children:"AnyRoutes"}),", ",(0,o.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyexternalroutes",children:"AnyExternalRoutes"}),", ",(0,o.jsx)(n.a,{href:"/docs/reference/core-plugin-api.anyapifactory",children:"AnyApiFactory"}),", ",(0,o.jsx)(n.a,{href:"/docs/reference/core-plugin-api.pluginfeatureflagconfig",children:"PluginFeatureFlagConfig"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},675251:(e,n,r)=>{var o=r(667294),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,t={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)c.call(n,o)&&!a.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:i,type:e,key:l,ref:u,props:t,_owner:s.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var o=r(667294);const i={},t=o.createContext(i);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);