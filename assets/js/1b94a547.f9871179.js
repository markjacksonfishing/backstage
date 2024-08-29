/*! For license information please see 1b94a547.f9871179.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[605864],{100613:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(785893),s=r(511151);const o={id:"plugin-auth-node.signinresolver",title:"SignInResolver",description:"API reference for SignInResolver"},i=void 0,c={id:"reference/plugin-auth-node.signinresolver",title:"SignInResolver",description:"API reference for SignInResolver",source:"@site/../docs/reference/plugin-auth-node.signinresolver.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.signinresolver",permalink:"/docs/reference/plugin-auth-node.signinresolver",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-node.signinresolver.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.signinresolver",title:"SignInResolver",description:"API reference for SignInResolver"}},a={},l=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.signinresolver",children:(0,t.jsx)(n.code,{children:"SignInResolver"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Describes the function which handles the result of a successful authentication. Must return a valid ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.backstagesigninresult",children:"BackstageSignInResult"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type SignInResolver<TAuthResult> = (info: SignInInfo<TAuthResult>, context: AuthResolverContext) => Promise<BackstageSignInResult>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.signininfo",children:"SignInInfo"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.authresolvercontext",children:"AuthResolverContext"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-auth-node.backstagesigninresult",children:"BackstageSignInResult"})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},675251:(e,n,r)=>{var t=r(667294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,u=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},785893:(e,n,r)=>{e.exports=r(675251)},511151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(667294);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);