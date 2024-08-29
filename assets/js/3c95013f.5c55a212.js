/*! For license information please see 3c95013f.5c55a212.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[925858],{866626:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(785893),t=o(511151);const i={id:"plugin-auth-node.authproviderfactory",title:"AuthProviderFactory",description:"API reference for AuthProviderFactory"},c=void 0,a={id:"reference/plugin-auth-node.authproviderfactory",title:"AuthProviderFactory",description:"API reference for AuthProviderFactory",source:"@site/../docs/reference/plugin-auth-node.authproviderfactory.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.authproviderfactory",permalink:"/docs/reference/plugin-auth-node.authproviderfactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.authproviderfactory.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.authproviderfactory",title:"AuthProviderFactory",description:"API reference for AuthProviderFactory"}},s={},d=[];function u(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderfactory",children:(0,n.jsx)(r.code,{children:"AuthProviderFactory"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type AuthProviderFactory = (options: {\n    providerId: string;\n    globalConfig: AuthProviderConfig;\n    config: Config;\n    logger: LoggerService;\n    resolverContext: AuthResolverContext;\n    baseUrl: string;\n    appUrl: string;\n    isOriginAllowed: (origin: string) => boolean;\n    cookieConfigurer?: CookieConfigurer;\n}) => AuthProviderRouteHandlers;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderconfig",children:"AuthProviderConfig"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authresolvercontext",children:"AuthResolverContext"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.cookieconfigurer",children:"CookieConfigurer"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-auth-node.authproviderroutehandlers",children:"AuthProviderRouteHandlers"})]})]})}function f(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},675251:(e,r,o)=>{var n=o(667294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,o){var n,i={},d=null,u=null;for(n in void 0!==o&&(d=""+o),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:d,ref:u,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},785893:(e,r,o)=>{e.exports=o(675251)},511151:(e,r,o)=>{o.d(r,{Z:()=>a,a:()=>c});var n=o(667294);const t={},i=n.createContext(t);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);