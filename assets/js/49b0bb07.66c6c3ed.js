/*! For license information please see 49b0bb07.66c6c3ed.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[616099],{953486:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(785893),n=t(511151);const a={id:"v1.28.0",title:"v1.28.0",description:"Backstage Release v1.28.0"},r=void 0,o={id:"releases/v1.28.0",title:"v1.28.0",description:"Backstage Release v1.28.0",source:"@site/../docs/releases/v1.28.0.md",sourceDirName:"releases",slug:"/releases/v1.28.0",permalink:"/docs/releases/v1.28.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.28.0.md",tags:[],version:"current",frontMatter:{id:"v1.28.0",title:"v1.28.0",description:"Backstage Release v1.28.0"},sidebar:"releases",previous:{title:"v1.29.0",permalink:"/docs/releases/v1.29.0"},next:{title:"v1.27.0",permalink:"/docs/releases/v1.27.0"}},h={},c=[{value:"Highlights",id:"highlights",level:2},{value:"<strong>BREAKING</strong>: Proxy backend plugin protected by default",id:"breaking-proxy-backend-plugin-protected-by-default",level:3},{value:"<strong>BREAKING</strong>: Gerrit integration breaking changes",id:"breaking-gerrit-integration-breaking-changes",level:3},{value:"<strong>BREAKING</strong>: Github integration breaking changes",id:"breaking-github-integration-breaking-changes",level:3},{value:"<strong>BREAKING</strong>: OAuth Scope Updates",id:"breaking-oauth-scope-updates",level:3},{value:"<strong>BREAKING</strong>: User Info service",id:"breaking-user-info-service",level:3},{value:"New Backend System API movement towards 1.0 release",id:"new-backend-system-api-movement-towards-10-release",level:3},{value:"Package Metadata - Important for Package Publishers!",id:"package-metadata---important-for-package-publishers",level:3},{value:"Other Auth Improvements",id:"other-auth-improvements",level:3},{value:"Scaffolder <code>ui:widget: password</code> notice",id:"scaffolder-uiwidget-password-notice",level:3},{value:"New Scaffolder Permissions",id:"new-scaffolder-permissions",level:3},{value:"Route bindings via app-config",id:"route-bindings-via-app-config",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Test utilities",id:"test-utilities",level:3},{value:"Notifications improvements",id:"notifications-improvements",level:3},{value:"Links and References",id:"links-and-references",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["These are the release notes for the v1.28.0 release of ",(0,i.jsx)(s.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,i.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,i.jsxs)(s.h3,{id:"breaking-proxy-backend-plugin-protected-by-default",children:[(0,i.jsx)(s.strong,{children:"BREAKING"}),": Proxy backend plugin protected by default"]}),"\n",(0,i.jsx)(s.p,{children:"The proxy backend plugin is now protected by Backstage auth, by default. Unless specifically configured (see below), all proxy endpoints will reject requests immediately unless a valid Backstage user or service token is passed along with the request. This aligns the proxy with how other Backstage backends behave out of the box, and serves to protect your upstreams from unauthorized access."}),"\n",(0,i.jsx)(s.p,{children:"Here's an example of how to configure:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-diff",children:"  proxy:\n    endpoints:\n      '/pagerduty':\n        target: https://api.pagerduty.com\n+       credentials: require\n        headers:\n          Authorization: Token token=${PAGERDUTY_TOKEN}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["There are three ",(0,i.jsx)(s.code,{children:"credentials"})," settings:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"require"}),": Callers need Backstage credentials. These are not forwarded to the target."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"forward"}),": Callers need Backstage credentials, which are forwarded to the target."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"dangerously-allow-unauthenticated"}),": No Backstage credentials needed. Target can apply its own checks. Incoming tokens of any sort will be allowed but ignored, and will also be forwarded if ",(0,i.jsx)(s.code,{children:"allowedHeaders: ['Authorization']"})," is included."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The new default is ",(0,i.jsx)(s.code,{children:"require"}),", replacing the old ",(0,i.jsx)(s.code,{children:"dangerously-allow-unauthenticated"}),". This means some previously permitted requests may now result in ",(0,i.jsx)(s.code,{children:"401 Unauthorized"})," responses. This does not apply if ",(0,i.jsx)(s.code,{children:"backend.auth.dangerouslyDisableDefaultAuthPolicy"})," is set to ",(0,i.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["For proxy endpoints still requiring unauthenticated access, add ",(0,i.jsx)(s.code,{children:"credentials: dangerously-allow-unauthenticated"})," in your app-config."]}),"\n",(0,i.jsxs)(s.p,{children:["See ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/plugins/proxying/",children:"the proxy documentation"})," for more information."]}),"\n",(0,i.jsxs)(s.h3,{id:"breaking-gerrit-integration-breaking-changes",children:[(0,i.jsx)(s.strong,{children:"BREAKING"}),": Gerrit integration breaking changes"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"workdir"})," argument have been removed from The ",(0,i.jsx)(s.code,{children:"GerritUrlReader"})," constructor;"]}),"\n",(0,i.jsxs)(s.li,{children:["The Gerrit ",(0,i.jsx)(s.code,{children:"readTree"})," implementation will now only use the Gitiles api, so the support for using git to clone the repo has been removed;"]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"gitilesBaseUrl"})," is now mandatory for the Gerrit integration and the ability to override this requirement using the ",(0,i.jsx)(s.code,{children:"DISABLE_GERRIT_GITILES_REQUIREMENT"})," environment variable has been removed."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Contributed by ",(0,i.jsx)(s.a,{href:"https://github.com/anicke",children:"@anicke"})," in ",(0,i.jsx)(s.a,{href:"https://github.com/backstage/backstage/pull/25123",children:"#25123"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"breaking-github-integration-breaking-changes",children:[(0,i.jsx)(s.strong,{children:"BREAKING"}),": Github integration breaking changes"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Removed deprecated code from when casing was changed from ",(0,i.jsx)(s.code,{children:"GitHub"})," to ",(0,i.jsx)(s.code,{children:"Github"})," nearly two years ago. The following items have been removed:\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"getGitHubFileFetchUrl"})," (use ",(0,i.jsx)(s.code,{children:"getGithubFileFetchUrl"})," instead)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"GitHubIntegrationConfig"})," (use ",(0,i.jsx)(s.code,{children:"GithubIntegrationConfig"})," instead)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"GitHubIntegration"})," (use ",(0,i.jsx)(s.code,{children:"GithubIntegration"})," instead)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"readGitHubIntegrationConfig"})," (use ",(0,i.jsx)(s.code,{children:"readGithubIntegrationConfig"})," instead)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"readGitHubIntegrationConfigs"})," (use ",(0,i.jsx)(s.code,{children:"readGithubIntegrationConfigs"})," instead)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"replaceGitHubUrlType"})," (use ",(0,i.jsx)(s.code,{children:"replaceGithubUrlType"})," instead)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Contributed by ",(0,i.jsx)(s.a,{href:"https://github.com/awanlin",children:"@awanlin"})," in ",(0,i.jsx)(s.a,{href:"https://github.com/backstage/backstage/pull/25100",children:"#25100"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"breaking-oauth-scope-updates",children:[(0,i.jsx)(s.strong,{children:"BREAKING"}),": OAuth Scope Updates"]}),"\n",(0,i.jsxs)(s.p,{children:["The way that OAuth-based auth providers handle scopes has received several updates. There is now a new ",(0,i.jsx)(s.code,{children:".additionalScopes"})," configuration for all OAuth providers, which can be used to request additional scopes for all sessions. Many providers already had a similar configuration, but in most cases this did not work correctly as scopes requested by the client would override the configured set."]}),"\n",(0,i.jsx)(s.p,{children:"Many providers now also have a set of required scopes that will always be present. This is in contrast to the previous solution where the client would be responsible for including a set of baseline scopes."}),"\n",(0,i.jsx)(s.p,{children:"A bug has also been fixed in the handling of persistent scopes, which could break session refresh for some providers, such as GitHub."}),"\n",(0,i.jsxs)(s.h3,{id:"breaking-user-info-service",children:[(0,i.jsx)(s.strong,{children:"BREAKING"}),": User Info service"]}),"\n",(0,i.jsxs)(s.p,{children:["Limited-access user tokens (as used in cookies) no longer contain the ",(0,i.jsx)(s.code,{children:"ent"})," ownership claim. This is notably used by TechDocs and the app-backend. If you use those services, you may want to log out and in again."]}),"\n",(0,i.jsxs)(s.p,{children:["Background: As part of the previous auth improvements, we added the ",(0,i.jsx)(s.code,{children:"coreServices.userInfo"})," service. This service can extract user details from incoming credentials - notably the so-called ",(0,i.jsx)(s.code,{children:"ent"})," claim with its ownership information."]}),"\n",(0,i.jsx)(s.p,{children:"In this release, the auth backend part of this has been implemented, such that the information returned by your sign-in resolver gets persisted and can be acquired after the fact. With this in place, we could finally start slimming down on token sizes, starting with the cookie tokens. Unfortunately this has to be done in such a way that it\u2019s breaking in the short term."}),"\n",(0,i.jsx)(s.p,{children:"If any issues persist, try clearing your cookies, and then reach out to us on Discord or with an issue if necessary."}),"\n",(0,i.jsxs)(s.p,{children:["Contributed by ",(0,i.jsx)(s.a,{href:"https://github.com/kuangp",children:"@kuangp"})," in ",(0,i.jsx)(s.a,{href:"https://github.com/backstage/backstage/pull/24729",children:"#24729"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"new-backend-system-api-movement-towards-10-release",children:"New Backend System API movement towards 1.0 release"}),"\n",(0,i.jsxs)(s.p,{children:["As part of finalizing the ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/backend-system/",children:"New Backend System"}),", we are restructuring the out-of-the-box functionality a bit. As part of this release, you will see a large amount of deprecations on the ",(0,i.jsx)(s.code,{children:"@backstage/backend-common"})," package (which will be deleted in a future release), and also on the ",(0,i.jsx)(s.code,{children:"@backstage/backend-app-api"})," package (which is just being slimmed down to its essentials). Instead, you will see that the ",(0,i.jsx)(s.code,{children:"@backstage/backend-defaults"})," package has received new subpath exports that neatly arrange all of these factories and default implementations."]}),"\n",(0,i.jsxs)(s.p,{children:["As an example, the ",(0,i.jsx)(s.code,{children:"rootLoggerServiceFactory"})," export on ",(0,i.jsx)(s.code,{children:"@backstage/backend-app-api"})," has been deprecated, and should now be imported from ",(0,i.jsx)(s.code,{children:"@backstage/backend-defaults/rootLogger"}),". Most other deprecations follow the same pattern. Each deprecated symbol should have a deprecation message on it, which clearly states from where you should now be importing that particular functionality instead."]}),"\n",(0,i.jsx)(s.p,{children:"This rearrangement was one of the crucial final pieces for settling the API surfaces of this backend system! We hope you\u2019ll find it neater and clearer to understand."}),"\n",(0,i.jsx)(s.p,{children:"Please update deprecated imports in your own repo code as soon as convenient, to avoid the breaking changes in future releases when these symbols are finally removed."}),"\n",(0,i.jsx)(s.p,{children:"You will also note that backend features (plugins and modules) no longer are returned as functions, which simplifies interacting with features! You may see this in your editor in the form of deprecations, whose message tells you to remove the trailing parentheses."}),"\n",(0,i.jsx)(s.p,{children:"Your code may be changed in the following way as an example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-diff",children:" await startTestBackend({\n   features: [\n     // service - stays unchanged\n     eventsServiceFactory(),\n     // module - remove parentheses\n-    catalogModuleBitbucketCloudEntityProvider(),\n+    catalogModuleBitbucketCloudEntityProvider,\n"})}),"\n",(0,i.jsxs)(s.p,{children:["In related news, we have unified some type names. The ",(0,i.jsx)(s.code,{children:"UrlReader"})," types are now properly prefixed with the service name, so you\u2019ll see that for example ",(0,i.jsx)(s.code,{children:"ReadTreeOptions"})," is now ",(0,i.jsx)(s.code,{children:"UrlReaderServiceReadTreeOptions"}),". Functions better follow the proper naming convention for their arguments, for example ",(0,i.jsx)(s.code,{children:"BackendPluginConfig"})," now becoming ",(0,i.jsx)(s.code,{children:"CreateBackendPluginOptions"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"package-metadata---important-for-package-publishers",children:"Package Metadata - Important for Package Publishers!"}),"\n",(0,i.jsxs)(s.p,{children:["All ",(0,i.jsx)(s.code,{children:"@backstage/*"})," packages now include a new set of metadata in ",(0,i.jsx)(s.code,{children:"package.json"})," that helps associate related plugin packages with each other. This metadata is also required for all packages published through the ",(0,i.jsx)(s.code,{children:"@backstage/cli"})," to the Backstage ecosystem. For this purpose, a new ",(0,i.jsx)(s.code,{children:"--publish"})," flag has been added to the ",(0,i.jsx)(s.code,{children:"repo fix"})," command. You can read more about this requirement and how to generate the metadata in the documentation section on ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/tooling/package-metadata#metadata-for-published-packages",children:"Metadata for Published Packages"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"other-auth-improvements",children:"Other Auth Improvements"}),"\n",(0,i.jsxs)(s.p,{children:["The OneLogin auth implementation now lives in its own module, ",(0,i.jsx)(s.code,{children:"@backstage/plugin-auth-backend-module-onelogin-provider"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["In some special use cases such as when you have read-replica databases, you may desire to not use the builtin zero-config plugin-to-plugin auth system that stores keys in the database. For those cases, there is now a new static mode where you supply key pairs in config that are used for this purpose. The howto is ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/auth/service-to-service-auth#static-keys-for-plugin-to-plugin-auth",children:"in the docs"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["There is also a new general ",(0,i.jsx)(s.code,{children:"jwks"})," external access method for those of you who want to externally call Backstage plugins using already-established token flows! Check out ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/auth/service-to-service-auth#jwks-token-auth",children:"the docs"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Contributed by ",(0,i.jsx)(s.a,{href:"https://github.com/ryan-hanchett",children:"@ryan-hanchett"})," in ",(0,i.jsx)(s.a,{href:"https://github.com/backstage/backstage/pull/24681",children:"#24681"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"scaffolder-uiwidget-password-notice",children:["Scaffolder ",(0,i.jsx)(s.code,{children:"ui:widget: password"})," notice"]}),"\n",(0,i.jsxs)(s.p,{children:["Using ",(0,i.jsx)(s.code,{children:"ui:widget: password"})," does not treat the input as a secret in the Scaffolder, and can lead to exposing some secrets in plaintext, this implementation has been overridden to provide warnings to users that mistakenly use this component and will now render a warning message along with rendering the input in plaintext for additional indication."]}),"\n",(0,i.jsxs)(s.p,{children:["Please use the ",(0,i.jsx)(s.code,{children:"ui:field: Secret"})," option instead, as is mentioned in the ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/features/software-templates/writing-templates/#using-secrets",children:"using secrets"})," documentation."]}),"\n",(0,i.jsx)(s.h3,{id:"new-scaffolder-permissions",children:"New Scaffolder Permissions"}),"\n",(0,i.jsx)(s.p,{children:"The Scaffolder plugin has been upgraded to include additional permissions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"scaffolder.task.create"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"scaffolder.task.cancel"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"scaffolder.task.read"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The new permissions allow you to control who should have read or write access to tasks."}),"\n",(0,i.jsxs)(s.p,{children:["Contributed by ",(0,i.jsx)(s.a,{href:"https://github.com/Zaperex",children:"@Zaperex"})," in ",(0,i.jsx)(s.a,{href:"https://github.com/backstage/backstage/pull/24518",children:"#24518"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"route-bindings-via-app-config",children:"Route bindings via app-config"}),"\n",(0,i.jsxs)(s.p,{children:["It is now possible to configure route bindings through static configuration, using the ",(0,i.jsx)(s.code,{children:"app.routes.bindings"})," key. For example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"app:\n  routes:\n    bindings:\n      catalog.createComponent: catalog-import.importPage\n"})}),"\n",(0,i.jsx)(s.p,{children:"Is the equivalent of the following:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"const app = createApp({\n  // ...\n  bindRoutes({ bind }) {\n    bind(catalogPlugin.externalRoutes, {\n      createComponent: catalogImportPlugin.routes.importPage,\n    });\n  },\n});\n"})}),"\n",(0,i.jsx)(s.p,{children:"Additionally, the following default targets have been added for external routes."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["For catalog:\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"createComponent"})," binds to the Scaffolder page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"viewTechDoc"})," binds to the TechDocs entity documentation page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"createFromTemplate"})," binds to the Scaffolder selected template page"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["For scaffolder:\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"registerComponent"})," binds to the catalog import page."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"viewTechDoc"})," binds to the TechDocs entity documentation page."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,i.jsx)(s.p,{children:"This release does not contain any security fixes."}),"\n",(0,i.jsx)(s.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,i.jsxs)(s.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"test-utilities",children:"Test utilities"}),"\n",(0,i.jsxs)(s.p,{children:["There is now a ",(0,i.jsx)(s.code,{children:"TestCaches"})," class in ",(0,i.jsx)(s.code,{children:"@backstage/backend-test-utils"})," that functions just like ",(0,i.jsx)(s.code,{children:"TestDatabases"}),". This may help in testing out cache based flows against actual cache implementations, using ",(0,i.jsx)(s.code,{children:"testcontainers"})," if available!"]}),"\n",(0,i.jsx)(s.h3,{id:"notifications-improvements",children:"Notifications improvements"}),"\n",(0,i.jsx)(s.p,{children:"The notifications system has received numerous updates, including the ability to perform in-flight processing of notifications. The related signals subsystem now also powers real time updates of the user settings plugin. Thanks to the notifications maintainers for their tireless efforts in this exciting area!"}),"\n",(0,i.jsx)(s.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,i.jsx)(s.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,i.jsxs)(s.li,{children:["Backstage's ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.28.0-changelog.md",children:"Changelog"})}),"\n",(0,i.jsxs)(s.li,{children:["Backstage ",(0,i.jsx)(s.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,i.jsx)(s.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,i.jsx)(s.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,i.jsx)(s.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Sign up for our ",(0,i.jsx)(s.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]}),"\n",(0,i.jsxs)(s.p,{children:["Big shoutout to all 64 of you amazing folks who chipped in on this release \ud83d\ude4f: ",(0,i.jsx)(s.a,{href:"https://github.com/acierto",children:"@acierto"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/adityak60",children:"@adityak60"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/adsk-mukul",children:"@adsk-mukul"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/alexef",children:"@alexef"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/andrei-ivanovici",children:"@andrei-ivanovici"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/anicke",children:"@anicke"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/aramissennyeydd",children:"@aramissennyeydd"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/awanlin",children:"@awanlin"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/benjdlambert",children:"@benjdlambert"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/benjidotsh",children:"@benjidotsh"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/bethgriggs",children:"@bethgriggs"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/brianphillips",children:"@brianphillips"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/brunobastosg",children:"@brunobastosg"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/camilaibs",children:"@camilaibs"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/cjlee01",children:"@cjlee01"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/cmoulliard",children:"@cmoulliard"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/davidfestal",children:"@davidfestal"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/debsmita1",children:"@debsmita1"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/drodil",children:"@drodil"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/dweber019",children:"@dweber019"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/elaine-mattos",children:"@elaine-mattos"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/erik-adsk",children:"@erik-adsk"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/fabian-m-95",children:"@fabian-m-95"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/freben",children:"@freben"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/grantila",children:"@grantila"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/huggingpixels",children:"@huggingpixels"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/ismailmmd",children:"@ismailmmd"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/jeevaramanathan",children:"@jeevaramanathan"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/johanhammar",children:"@johanhammar"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/jslott2sigma",children:"@jslott2sigma"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/julien-hery",children:"@julien-hery"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/kalleericson",children:"@kalleericson"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/kissmikijr",children:"@kissmikijr"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/kuangp",children:"@kuangp"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/maetis",children:"@maetis"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/marcpalm",children:"@marcpalm"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/marcuseide",children:"@marcuseide"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/mareklibra",children:"@mareklibra"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/mario-mui",children:"@mario-mui"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/matteosilv",children:"@matteosilv"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/mclarke47",children:"@mclarke47"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/npiyush97",children:"@npiyush97"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/nurbaysymbat",children:"@nurbaysymbat"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/parsifal-m",children:"@parsifal-m"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/piatkiewicz",children:"@piatkiewicz"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/raffitamizian",children:"@raffitamizian"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/rbillon59",children:"@rbillon59"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/rewixe",children:"@rewixe"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/rugvip",children:"@rugvip"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/ryan-hanchett",children:"@ryan-hanchett"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/sblausten",children:"@sblausten"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/snowblitzer",children:"@snowblitzer"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/stanislav-c",children:"@stanislav-c"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/stephenglass",children:"@stephenglass"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/stijnbrouwers",children:"@stijnbrouwers"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/suniljose25",children:"@suniljose25"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/tcardonne",children:"@tcardonne"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/vadave",children:"@vadave"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/veenarm",children:"@veenarm"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/vinisdl",children:"@vinisdl"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/vinzscam",children:"@vinzscam"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/waldirmontoya25",children:"@waldirmontoya25"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/ydayagi",children:"@ydayagi"}),", ",(0,i.jsx)(s.a,{href:"https://github.com/zaperex",children:"@zaperex"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},675251:(e,s,t)=>{var i=t(667294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var i,a={},c=null,l=null;for(i in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)r.call(s,i)&&!h.hasOwnProperty(i)&&(a[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===a[i]&&(a[i]=s[i]);return{$$typeof:n,type:e,key:c,ref:l,props:a,_owner:o.current}}s.Fragment=a,s.jsx=c,s.jsxs=c},785893:(e,s,t)=>{e.exports=t(675251)},511151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var i=t(667294);const n={},a=i.createContext(n);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);