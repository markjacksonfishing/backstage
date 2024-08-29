/*! For license information please see ee9b3207.e3f3e76a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[127971],{565976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(785893),o=r(511151);const s={id:"plugin-auth-node.authresolvercontext",title:"AuthResolverContext",description:"API reference for AuthResolverContext"},c=void 0,a={id:"reference/plugin-auth-node.authresolvercontext",title:"AuthResolverContext",description:"API reference for AuthResolverContext",source:"@site/../docs/reference/plugin-auth-node.authresolvercontext.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.authresolvercontext",permalink:"/docs/reference/plugin-auth-node.authresolvercontext",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.authresolvercontext.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.authresolvercontext",title:"AuthResolverContext",description:"API reference for AuthResolverContext"}},i={},u=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-node",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-node.authresolvercontext",children:(0,n.jsx)(t.code,{children:"AuthResolverContext"})})]}),"\n",(0,n.jsx)(t.p,{children:"The context that is used for auth processing."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type AuthResolverContext = {\n    issueToken(params: TokenParams): Promise<{\n        token: string;\n    }>;\n    findCatalogUser(query: AuthResolverCatalogUserQuery): Promise<{\n        entity: Entity;\n    }>;\n    signInWithCatalogUser(query: AuthResolverCatalogUserQuery): Promise<BackstageSignInResult>;\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-node.tokenparams",children:"TokenParams"}),", ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-node.authresolvercataloguserquery",children:"AuthResolverCatalogUserQuery"}),", ",(0,n.jsx)(t.a,{href:"/docs/reference/catalog-model.entity",children:"Entity"}),", ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-node.backstagesigninresult",children:"BackstageSignInResult"})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},675251:(e,t,r)=>{var n=r(667294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,s={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},785893:(e,t,r)=>{e.exports=r(675251)},511151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var n=r(667294);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);