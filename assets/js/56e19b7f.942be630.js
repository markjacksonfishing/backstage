/*! For license information please see 56e19b7f.942be630.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[481044],{381097:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var s=c(785893),n=c(511151);const a={id:"plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessclaims",title:"CloudflareAccessClaims",description:"API reference for CloudflareAccessClaims"},o=void 0,l={id:"reference/plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessclaims",title:"CloudflareAccessClaims",description:"API reference for CloudflareAccessClaims",source:"@site/../docs/reference/plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessclaims.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessclaims",permalink:"/docs/reference/plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessclaims",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessclaims.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessclaims",title:"CloudflareAccessClaims",description:"API reference for CloudflareAccessClaims"}},t={},i=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend-module-cloudflare-access-provider",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-auth-backend-module-cloudflare-access-provider"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessclaims",children:(0,s.jsx)(r.code,{children:"CloudflareAccessClaims"})})]}),"\n",(0,s.jsx)(r.p,{children:"Can be used in externally provided auth handler or sign in resolver to enrich user profile for sign-in user entity"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export type CloudflareAccessClaims = {\n    aud: string[];\n    email: string;\n    exp: number;\n    iat: number;\n    nonce: string;\n    identity_nonce: string;\n    sub: string;\n    iss: string;\n    custom: string;\n};\n"})})]})}function u(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},675251:(e,r,c)=>{var s=c(667294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,c){var s,a={},i=null,d=null;for(s in void 0!==c&&(i=""+c),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!t.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:n,type:e,key:i,ref:d,props:a,_owner:l.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},785893:(e,r,c)=>{e.exports=c(675251)},511151:(e,r,c)=>{c.d(r,{Z:()=>l,a:()=>o});var s=c(667294);const n={},a=s.createContext(n);function o(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);