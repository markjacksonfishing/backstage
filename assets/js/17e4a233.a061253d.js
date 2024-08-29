/*! For license information please see 17e4a233.a061253d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[165368],{972215:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=o(785893),n=o(511151);const s={id:"backend-common.setrootlogger",title:"setRootLogger()",description:"API reference for setRootLogger()"},c=void 0,a={id:"reference/backend-common.setrootlogger",title:"setRootLogger()",description:"API reference for setRootLogger()",source:"@site/../docs/reference/backend-common.setrootlogger.md",sourceDirName:"reference",slug:"/reference/backend-common.setrootlogger",permalink:"/docs/reference/backend-common.setrootlogger",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.setrootlogger.md",tags:[],version:"current",frontMatter:{id:"backend-common.setrootlogger",title:"setRootLogger()",description:"API reference for setRootLogger()"}},i={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-common",children:(0,r.jsx)(t.code,{children:"@backstage/backend-common"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-common.setrootlogger",children:(0,r.jsx)(t.code,{children:"setRootLogger"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.p,{children:["As we are going to deprecate the legacy backend, this function will be removed in the future. If you need to set the root logger in the new system, please check out this documentation: ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/core-services/logger",children:"https://backstage.io/docs/backend-system/core-services/logger"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'Sets a completely custom default "root" logger.'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"function setRootLogger(newLogger: winston.Logger): void;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"newLogger"}),(0,r.jsx)(t.td,{children:"winston.Logger"}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"void"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"This is the logger instance that will be the foundation for all other logger instances passed to plugins etc, in a given backend."}),"\n",(0,r.jsxs)(t.p,{children:["Only use this if you absolutely need to make a completely custom logger. Normally if you want to make light adaptations to the default logger behavior, you would instead call ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-common.createrootlogger",children:"createRootLogger()"}),"."]})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},675251:(e,t,o)=>{var r=o(667294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,s={},d=null,l=null;for(r in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:d,ref:l,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},785893:(e,t,o)=>{e.exports=o(675251)},511151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>c});var r=o(667294);const n={},s=r.createContext(n);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);