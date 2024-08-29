/*! For license information please see 5b2c45c4.60f1f229.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[219440],{482072:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(785893),s=i(511151);const a={id:"github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication"},o=void 0,r={id:"integrations/github/github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication",source:"@site/../docs/integrations/github/github-apps.md",sourceDirName:"integrations/github",slug:"/integrations/github/github-apps",permalink:"/docs/integrations/github/github-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/github-apps.md",tags:[],version:"current",frontMatter:{id:"github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication"},sidebar:"docs",previous:{title:"Org Data",permalink:"/docs/integrations/github/org"},next:{title:"Locations",permalink:"/docs/integrations/gitlab/locations"}},l={},c=[{value:"Caveats",id:"caveats",level:2},{value:"Using the CLI (public GitHub only)",id:"using-the-cli-public-github-only",level:2},{value:"GitHub Enterprise",id:"github-enterprise",level:2},{value:"Including in Integrations Config",id:"including-in-integrations-config",level:2},{value:"Limiting the GitHub App installations",id:"limiting-the-github-app-installations",level:2},{value:"App permissions",id:"app-permissions",level:2},{value:"Updating Permissions",id:"updating-permissions",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Backstage can be configured to use GitHub Apps for backend authentication. This\ncomes with advantages such as higher rate limits and that Backstage can act as\nan application instead of a user or bot account."}),"\n",(0,t.jsx)(n.p,{children:"It also provides a much clearer and better authorization model as a opposed to\nthe OAuth apps and their respective scopes."}),"\n",(0,t.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This authentication method is built for authenticating towards\norganization repositories and not towards personal repositories."}),"\n",(0,t.jsx)(n.li,{children:"It's not possible to have multiple Backstage GitHub Apps installed in the same\nGitHub organization, to be handled by Backstage. We currently don't check\nthrough all the registered GitHub Apps to see which ones are installed for a\nparticular repository. We only respect global Organization installs right now."}),"\n",(0,t.jsxs)(n.li,{children:["App permissions is not managed by Backstage. They're created with some simple\ndefault permissions which you are free to change as you need, but you will\nneed to update them in the GitHub web console, not in Backstage right now. The\npermissions that are defaulted are ",(0,t.jsx)(n.code,{children:"metadata:read"})," and ",(0,t.jsx)(n.code,{children:"contents:read"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"The created GitHub App is private by default, this is most likely what you\nwant for github.com but it's recommended to make your application public for\nGitHub Enterprise in order to share application across your GHE organizations."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A GitHub app created with the cli will have read\naccess by default. You have to manually update the GitHub App settings in GitHub\nto grant the app more permissions if needed."}),"\n",(0,t.jsx)(n.h2,{id:"using-the-cli-public-github-only",children:"Using the CLI (public GitHub only)"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"backstage-cli"})," to create a GitHub App using a manifest file\nthat we provide. This gives us a way to automate some of the work required to\ncreate a GitHub app."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"yarn backstage-cli create-github-app <github org>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about the\n",(0,t.jsx)(n.a,{href:"/docs/tooling/cli/commands#create-github-app",children:(0,t.jsx)(n.code,{children:"backstage-cli create-github-app"})})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["Once you've gone through the CLI command, it should produce a YAML file in the\nroot of the project which you can then use as an ",(0,t.jsx)(n.code,{children:"include"})," in your\n",(0,t.jsx)(n.code,{children:"app-config.yaml"}),". You can go ahead and\n",(0,t.jsx)(n.a,{href:"#including-in-integrations-config",children:"skip ahead"})," if you've already got an app."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that the created app will have a webhook that is disabled by default and\npoints to ",(0,t.jsx)(n.code,{children:"smee.io"}),", which is intended for local development. There's also\ncurrently no part of Backstage that makes use of the webhook."]}),"\n",(0,t.jsx)(n.h2,{id:"github-enterprise",children:"GitHub Enterprise"}),"\n",(0,t.jsxs)(n.p,{children:["You have to create the GitHub Application manually using these\n",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-a-github-app",children:"instructions"}),"\nas GitHub Enterprise does not support creation of apps from manifests."]}),"\n",(0,t.jsx)(n.p,{children:"Once the application is created you have to generate a private key for the\napplication and place it in a YAML file."}),"\n",(0,t.jsxs)(n.p,{children:["The YAML file must include the following information. Please note that the\nindentation for the ",(0,t.jsx)(n.code,{children:"privateKey"})," is required."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"appId: app id\nclientId: client id\nclientSecret: client secret\nwebhookSecret: webhook secret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  ...Key content...\n  -----END RSA PRIVATE KEY-----\n"})}),"\n",(0,t.jsx)(n.h2,{id:"including-in-integrations-config",children:"Including in Integrations Config"}),"\n",(0,t.jsxs)(n.p,{children:["Once the credentials are stored in a YAML file generated by ",(0,t.jsx)(n.code,{children:"create-github-app"}),",\nor manually by following the ",(0,t.jsx)(n.a,{href:"#github-enterprise",children:"GitHub Enterprise"}),"\ninstructions, they can be included in the ",(0,t.jsx)(n.code,{children:"app-config.yaml"})," under the\n",(0,t.jsx)(n.code,{children:"integrations"})," section."]}),"\n",(0,t.jsx)(n.p,{children:"Please note that the credentials file is highly sensitive and should NOT be\nchecked into any kind of version control. Instead use your preferred secure\nmethod of distributing secrets."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"integrations:\n  github:\n    - host: github.com\n      apps:\n        - $include: example-backstage-app-credentials.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Alternatively you can use environment variables as well:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"integrations:\n  github:\n    - host: github.com\n      apps:\n        - appId: ${AUTH_ORG_APP_ID}\n          clientId: ${AUTH_ORG_CLIENT_ID}\n          clientSecret: ${AUTH_ORG_CLIENT_SECRET}\n          privateKey: ${AUTH_ORG1_PRIVATE_KEY}\n          webhookSecret: ${AUTH_ORG_WEBHOOK_SECRET}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Note that in both examples above ",(0,t.jsx)(n.code,{children:"apps"})," is an array which means you can add multiple GitHub Apps using ",(0,t.jsx)(n.code,{children:"$include"})," or environment variables as long as they are each for a different GitHub Org as mentioned under the ",(0,t.jsx)(n.a,{href:"#caveats",children:"Caveats"})," section."]})}),"\n",(0,t.jsx)(n.h2,{id:"limiting-the-github-app-installations",children:"Limiting the GitHub App installations"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to limit the GitHub app installations visible to backstage you may\noptionally include the ",(0,t.jsx)(n.code,{children:"allowedInstallationOwners"})," option. If you configure\nmultiple apps, specifying this will bring some small performance benefits\nas backstage can more easily select which app to use for a URL."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"appId: app id\nallowedInstallationOwners: ['GlobexCorp']\nclientId: client id\nclientSecret: client secret\nwebhookSecret: webhook secret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  ...Key content...\n  -----END RSA PRIVATE KEY-----\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will result in backstage preventing the use of any installation that is not\nwithin the allow list."}),"\n",(0,t.jsx)(n.h2,{id:"app-permissions",children:"App permissions"}),"\n",(0,t.jsx)(n.p,{children:"When creating a GitHub App, you must select permissions to define the level of\naccess for the app. The permissions required vary depending on your use of the\nintegration:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reading software components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Contents"}),": ",(0,t.jsx)(n.code,{children:"Read-only"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Commit statuses"}),": ",(0,t.jsx)(n.code,{children:"Read-only"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reading organization data:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Members"}),": ",(0,t.jsx)(n.code,{children:"Read-only"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Publishing software templates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Administration"}),": ",(0,t.jsx)(n.code,{children:"Read & write"})," (for creating repositories)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Contents"}),": ",(0,t.jsx)(n.code,{children:"Read & write"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Metadata"}),": ",(0,t.jsx)(n.code,{children:"Read-only"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Pull requests"}),": ",(0,t.jsx)(n.code,{children:"Read & write"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Issues"}),": ",(0,t.jsx)(n.code,{children:"Read & write"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Workflows"}),": ",(0,t.jsx)(n.code,{children:"Read & write"})," (if templates include GitHub workflows)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Variables"}),": ",(0,t.jsx)(n.code,{children:"Read & write"})," (if templates include GitHub Action Repository Variables)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Secrets"}),": ",(0,t.jsx)(n.code,{children:"Read & write"})," (if templates include GitHub Action Repository Secrets)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Environments"}),": ",(0,t.jsx)(n.code,{children:"Read & write"})," (if templates include GitHub Environments)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updating-permissions",children:"Updating Permissions"}),"\n",(0,t.jsx)(n.p,{children:"There may be times where you need to update the permissions for your GitHub App, to easily get at the GitHub App you can find it at this URL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"https://github.com/organizations/{ORG}/settings/apps/{APP_NAME}/permissions\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Please note that when you change permissions, the app owner will get an email\nthat must be approved first before the changes are applied."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"email",src:i(871162).Z+"",width:"1262",height:"732"})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"HttpError: This endpoint requires you to be authenticated."})}),"\n",(0,t.jsxs)(n.p,{children:["This message tends to wrap a ",(0,t.jsx)(n.code,{children:"NotFoundError: No app installation found"})," under the hood, which\nis the result of not installing the app in your organization. Even if created via the ",(0,t.jsx)(n.code,{children:"backstage-cli"}),"\nas a member and app manager of your organization, the app will not automatically install. You\nmust possess the ",(0,t.jsx)(n.code,{children:"Owner"})," role in the organization to see the ",(0,t.jsx)(n.code,{children:"Install"})," menu under your\napp settings, then manually press ",(0,t.jsx)(n.code,{children:"Install"})," to authorize the application."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},675251:(e,n,i)=>{var t=i(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var t,a={},c=null,d=null;for(t in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:r.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},785893:(e,n,i)=>{e.exports=i(675251)},871162:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/email-d5628d6813a978b367112f533ff20242.png"},511151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(667294);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);