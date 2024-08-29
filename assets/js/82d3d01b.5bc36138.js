/*! For license information please see 82d3d01b.5bc36138.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[273219],{239837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(785893),s=n(511151);const a={id:"auth-service-migration",title:"Migrating to New Auth Services",description:"A guide for how to migrate Backstage backend plugins and modules to use the new auth services"},r=void 0,o={id:"tutorials/auth-service-migration",title:"Migrating to New Auth Services",description:"A guide for how to migrate Backstage backend plugins and modules to use the new auth services",source:"@site/../docs/tutorials/auth-service-migration.md",sourceDirName:"tutorials",slug:"/tutorials/auth-service-migration",permalink:"/docs/tutorials/auth-service-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/auth-service-migration.md",tags:[],version:"current",frontMatter:{id:"auth-service-migration",title:"Migrating to New Auth Services",description:"A guide for how to migrate Backstage backend plugins and modules to use the new auth services"},sidebar:"docs",previous:{title:"Migrating from Material UI v4 to v5",permalink:"/docs/tutorials/migrate-to-mui5"},next:{title:"Enabling a public entry point",permalink:"/docs/tutorials/enable-public-entry"}},c={},l=[{value:"Backend migration",id:"backend-migration",level:2},{value:"Disabling the default auth policy",id:"disabling-the-default-auth-policy",level:3},{value:"Migrating the backend",id:"migrating-the-backend",level:3},{value:"Plugin &amp; Module migration",id:"plugin--module-migration",level:2},{value:"Adding auth policies",id:"adding-auth-policies",level:3},{value:"Using the new auth services",id:"using-the-new-auth-services",level:3},{value:"Updating dependencies in the new backend system",id:"updating-dependencies-in-the-new-backend-system",level:4},{value:"Making the new auth services available in <code>createRouter</code>",id:"making-the-new-auth-services-available-in-createrouter",level:4},{value:"Replacing old auth service calls",id:"replacing-old-auth-service-calls",level:4},{value:"Example 1: Making a standalone service-to-service request",id:"example-1-making-a-standalone-service-to-service-request",level:5},{value:"Example 2: Forwarding credentials from an incoming request",id:"example-2-forwarding-credentials-from-an-incoming-request",level:5},{value:"Example 3: Getting the user identity from a request",id:"example-3-getting-the-user-identity-from-a-request",level:5}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The auth services for the Backstage backend system have been reworked in the 1.24 release. Among other improvements, this brings protection by default for Backstage backends, replacing the ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/9aac2b0d36bdb8095ea747fe5e5490cfea1c9f16/contrib/docs/tutorials/authenticate-api-requests.md",children:"authenticate-api-requests.md"})," guide in contrib. This guide will help you migrate your existing backend setup as well as backend ",(0,i.jsx)(t.em,{children:"plugins and modules"})," to use the new auth services."]}),"\n",(0,i.jsxs)(t.p,{children:["The change with the most impact that accompanies the new auth services is the default behavior of all plugins running in the new backend system to block all requests that are not authenticated as a user or service, also known as the ",(0,i.jsx)(t.em,{children:"default auth policy"}),". This is the only breaking production change introduced as part of this update, and may require action to be taken on both backend installations and plugins. More on that in the individual sections below."]}),"\n",(0,i.jsx)(t.h2,{id:"backend-migration",children:"Backend migration"}),"\n",(0,i.jsxs)(t.p,{children:["In order to use these new services your backend needs to be using the ",(0,i.jsx)(t.a,{href:"/docs/backend-system/building-backends/index",children:"new backend system"}),". If your backend is running the old system, you will need to ",(0,i.jsx)(t.a,{href:"/docs/backend-system/building-backends/migrating",children:"migrate it to the new system first"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you have ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/9aac2b0d36bdb8095ea747fe5e5490cfea1c9f16/contrib/docs/tutorials/authenticate-api-requests.md",children:"authenticate-api-requests.md"})," installed in your backend, you should generally remove it and rely on the new auth services instead. If you do not wish to make that change yet but still want to upgrade to the latest release of Backstage, you can also leave it in place and instead disable the default auth policy as described in the next section."]}),"\n",(0,i.jsx)(t.h3,{id:"disabling-the-default-auth-policy",children:"Disabling the default auth policy"}),"\n",(0,i.jsx)(t.p,{children:"If you do not want to enforce authentication of requests by default, you can disable the default auth policy. This is done using the following configuration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"backend:\n  auth:\n    dangerouslyDisableDefaultAuthPolicy: true\n"})}),"\n",(0,i.jsx)(t.p,{children:"Please note that this functionality will be removed in a future release, and you should migrate to using the new auth services as soon as possible or you would have to support your own service for issuing tokens."}),"\n",(0,i.jsxs)(t.p,{children:["In short, this will allow requests through to plugins in your backend, even if they do not include any credentials. The requests will still be treated as unauthenticated however, which not all plugin endpoints may accept. For more information on the impact of this configuration, see the ",(0,i.jsx)(t.a,{href:"/docs/backend-system/core-services/auth",children:"auth service documentation"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"migrating-the-backend",children:"Migrating the backend"}),"\n",(0,i.jsx)(t.p,{children:"If you do want to keep the default auth policy in effect, there is some minor action needed to migrate the backend itself. Be sure to upgrade all plugins to their latest versions to pick up any updates that may be needed for the new auth services. If you have any internal plugins or modules, refer to the plugin migration section below."}),"\n",(0,i.jsxs)(t.p,{children:["With the default auth policy in effect you will now need to ensure that the requests to your backend are authenticated, also during local development. If you already have a setup where you use an auth provider for local development, you can keep using that. But, if you rely on the ",(0,i.jsx)(t.code,{children:"'guest'"})," access for local development we recommend that you install the new guest provider module in your auth backend:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-guest-provider\n"})}),"\n",(0,i.jsx)(t.p,{children:"Add it to your backend:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"// highlight-add-next-line\nbackend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));\n"})}),"\n",(0,i.jsx)(t.p,{children:"Lastly, add the following to your development configuration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"auth:\n  providers:\n    guest: {}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Make sure that you only enable the guest provider for local development, and not in production. It will refuse to be enabled in production by default, but it is still best to avoid it entirely. If you do not have a separate development configuration, add the following to your production configuration:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"auth:\n  providers:\n    guest: null\n"})}),"\n",(0,i.jsx)(t.p,{children:"If you still want to enable guest login in non-development environments, you can use this config snippet:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"auth:\n  providers:\n    guest:\n      dangerouslyAllowOutsideDevelopment: true\n"})}),"\n",(0,i.jsxs)(t.p,{children:["That's all you need for guest authentication! The default ",(0,i.jsx)(t.code,{children:"SignInPage"})," from ",(0,i.jsx)(t.code,{children:"@backstage/core-components"})," will detect and use the guest provider if it's enabled."]}),"\n",(0,i.jsxs)(t.p,{children:["Since the default auth policy is in effect for all plugins running in the new backend system, you do not need to worry about whether individual plugins are protected or not. The impact of plugins not yet being migrated is that they may have endpoints that should allow unauthenticated requests, but are now blocked by the default auth policy. If you want to temporarily work around this for individual plugins, you can install a module for the plugin that adds the required policy via the ",(0,i.jsx)(t.a,{href:"/docs/backend-system/core-services/http-router",children:"http router service"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you have a custom ",(0,i.jsx)(t.a,{href:"/docs/backend-system/core-services/identity",children:"identity"})," or ",(0,i.jsx)(t.a,{href:"/docs/backend-system/core-services/token-manager",children:"token manager"})," service implementations you can use the ",(0,i.jsx)(t.code,{children:"createLegacyAuthAdapters"})," helper from ",(0,i.jsx)(t.code,{children:"@backstage/backend-common"})," to adapt them for the new auth services."]}),"\n",(0,i.jsx)(t.h2,{id:"plugin--module-migration",children:"Plugin & Module migration"}),"\n",(0,i.jsx)(t.p,{children:"This part of the guide will help you migrate your backend plugin or module to using the new auth APIs. It is split into two main sections: the first is to add any required auth policies to your plugin for the new backend system, and the second is to migrate to use the new auth services. This first step more urgent and may be required for your plugin to keep functioning in the new backend system, while the second step is less urgent and won't be required until support for the old auth services is removed."}),"\n",(0,i.jsx)(t.h3,{id:"adding-auth-policies",children:"Adding auth policies"}),"\n",(0,i.jsxs)(t.p,{children:["If your plugin supports the ",(0,i.jsx)(t.a,{href:"/docs/backend-system/",children:"new backend system"})," you may need to add exceptions to the default auth policy. If your plugins is supposed to accept unauthenticated requests or requests authenticated with a user cookie, then you need to add a policy for that. This is done using the ",(0,i.jsx)(t.code,{children:"httpRouter"})," service. For example, the following allows unauthenticated requests to the ",(0,i.jsx)(t.code,{children:"/health"})," endpoint:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export default createBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        config: coreServices.rootConfig,\n        logger: coreServices.logger,\n        httpRouter: coreServices.httpRouter,\n        auth: coreServices.auth,\n        httpAuth: coreServices.httpAuth,\n      },\n      async init({ config, logger, httpRouter, auth, httpAuth }) {\n        httpRouter.use(await createRouter({ config, logger, auth, httpAuth }));\n\n        // highlight-add-start\n        httpRouter.addAuthPolicy({\n          path: '/health',\n          allow: 'unauthenticated',\n        });\n        // highlight-add-end\n      },\n    });\n  },\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"using-the-new-auth-services",children:"Using the new auth services"}),"\n",(0,i.jsxs)(t.p,{children:["The goal in this section is to completely remove usages of the existing ",(0,i.jsx)(t.a,{href:"/docs/backend-system/core-services/identity",children:"identity"})," and ",(0,i.jsx)(t.a,{href:"/docs/backend-system/core-services/token-manager",children:"token manager"})," services from inside your plugin, and instead use the new ",(0,i.jsx)(t.a,{href:"/docs/backend-system/core-services/auth",children:"auth"})," and ",(0,i.jsx)(t.a,{href:"/docs/backend-system/core-services/http-auth",children:"http auth"})," services. You plugin may still accept the ",(0,i.jsx)(t.code,{children:"identity"})," and ",(0,i.jsx)(t.code,{children:"tokenManager"})," services as optional dependencies from the plugin environment though, in order to avoid breaking the setup for existing users."]}),"\n",(0,i.jsxs)(t.p,{children:["If your plugin does not currently rely on the ",(0,i.jsx)(t.code,{children:"identity"})," or ",(0,i.jsx)(t.code,{children:"tokenManager"})," services or uses the ",(0,i.jsx)(t.code,{children:"DefaultIdentityClient"})," internally, then this step is not required and no further action is needed."]}),"\n",(0,i.jsxs)(t.p,{children:["This guide assumes that your plugin uses the ",(0,i.jsx)(t.code,{children:"createRouter"})," pattern as its external API for the old backend system. If you have different and/or other external API surfaces they should be treated in the same way, but you may need to adapt these examples to fit your implementation."]}),"\n",(0,i.jsx)(t.h4,{id:"updating-dependencies-in-the-new-backend-system",children:"Updating dependencies in the new backend system"}),"\n",(0,i.jsxs)(t.p,{children:["If your plugin supports the new backend system, the first step of the migration is to make sure that we use the new auth services. For now we will add both ",(0,i.jsx)(t.code,{children:"AuthService"})," and ",(0,i.jsx)(t.code,{children:"HttpAuthService"}),", but it may be that you only need one of them in the end, in which case you can remove the other."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export default createBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        config: coreServices.rootConfig,\n        logger: coreServices.logger,\n        discovery: coreServices.discovery,\n        httpRouter: coreServices.httpRouter,\n        // highlight-remove-start\n        identity: coreServices.identity,\n        tokenManager: coreServices.tokenManager,\n        // highlight-remove-end\n        // highlight-add-start\n        auth: coreServices.auth,\n        httpAuth: coreServices.httpAuth,\n        // highlight-add-end\n      },\n      async init({\n        config,\n        logger,\n        discovery,\n        httpRouter,\n        // highlight-remove-start\n        identity,\n        tokenManager,\n        // highlight-remove-end\n        // highlight-add-start\n        auth,\n        httpAuth,\n        // highlight-add-end\n      }) {\n        const router = await createRouter({\n          config,\n          logger,\n          discovery,\n          // highlight-remove-start\n          identity,\n          tokenManager,\n          // highlight-remove-end\n          // highlight-add-start\n          auth,\n          httpAuth,\n          // highlight-add-end\n        });\n        httpRouter.use();\n      },\n    });\n  },\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Don't worry if your plugin doesn't currently depend on the ",(0,i.jsx)(t.code,{children:"identity"})," or ",(0,i.jsx)(t.code,{children:"tokenManager"})," service, that can be ignored. However, if your plugin doesn't already depend on the ",(0,i.jsx)(t.code,{children:"discovery"})," service you will need to add that as a required dependence, as it is needed for the compatibility layer that we will introduce."]}),"\n",(0,i.jsxs)(t.h4,{id:"making-the-new-auth-services-available-in-createrouter",children:["Making the new auth services available in ",(0,i.jsx)(t.code,{children:"createRouter"})]}),"\n",(0,i.jsxs)(t.p,{children:["In order to make the new auth services available to the plugin implementation in a backwards compatible way, we use the ",(0,i.jsx)(t.code,{children:"createLegacyAuthAdapters"})," helper from ",(0,i.jsx)(t.code,{children:"@backstage/backend-common"}),". This helper accepts both the old and new auth services, and returns implementations for the new ones. If provided with implementations for the new services it will pass them through directly, which is what we want for the new backend system. If the new services are not provide it will instead create fallback implementations using the old services, falling back to default implementations of the old services if they are not available either."]}),"\n",(0,i.jsxs)(t.p,{children:["In practice, this is what it might look like to apply this change to the ",(0,i.jsx)(t.code,{children:"createRouter"})," function:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"export interface RouterOptions {\n  config: RootConfigService;\n  logger: LoggerService;\n  discovery: DiscoveryService;\n  identity?: IdentityService;\n  // highlight-add-start\n  auth?: AuthService;\n  httpAuth?: HttpAuthService;\n  // highlight-add-end\n}\n\nexport function createRouter(options: RouterOptions) {\n  // highlight-add-next-line\n  const { auth, httpAuth } = createLegacyAuthAdapters(options);\n\n  // ... the rest of the implementation\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that if your ",(0,i.jsx)(t.code,{children:"createRouter"})," function doesn't already accept the ",(0,i.jsx)(t.code,{children:"identity"})," or ",(0,i.jsx)(t.code,{children:"tokenManager"})," services, you should ",(0,i.jsx)(t.strong,{children:"not"})," add them. Likewise, if there is any default implementation used by your plugin for either of those services, then that implementation ",(0,i.jsx)(t.strong,{children:"must"})," be passed on to ",(0,i.jsx)(t.code,{children:"createLegacyAuthAdapters"}),". Both of these constraints ensure that your plugin will continue to behave in the same way as before."]}),"\n",(0,i.jsxs)(t.p,{children:["As mentioned earlier, you may end up not needing both ",(0,i.jsx)(t.code,{children:"auth"})," and ",(0,i.jsx)(t.code,{children:"httpAuth"})," in the implementation. If that is the case you should remove the unused one from the router options."]}),"\n",(0,i.jsx)(t.h4,{id:"replacing-old-auth-service-calls",children:"Replacing old auth service calls"}),"\n",(0,i.jsxs)(t.p,{children:["Once the ",(0,i.jsx)(t.code,{children:"auth"})," and ",(0,i.jsx)(t.code,{children:"httpAuth"})," services are available in the plugin implementation, what's left is to replace existing usage of the ",(0,i.jsx)(t.code,{children:"identity"})," and ",(0,i.jsx)(t.code,{children:"tokenManager"})," services. In this section we'll walk through and explain the most common usages of the existing services, and how to migrate those to use the new services instead."]}),"\n",(0,i.jsx)(t.h5,{id:"example-1-making-a-standalone-service-to-service-request",children:"Example 1: Making a standalone service-to-service request"}),"\n",(0,i.jsx)(t.p,{children:"To generate a new service token for a service-to-service request that is not in a request path or needs elevated privileges, you would previously use the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const { token } = await tokenManager.getToken();\n"})}),"\n",(0,i.jsx)(t.p,{children:"The equivalent using the new auth services is the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const { token } = await auth.getPluginRequestToken({\n  onBehalfOf: await auth.getOwnServiceCredentials(),\n  targetPluginId: '<plugin-id>', // e.g. 'catalog'\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"onBehalfOf"})," option provides the credentials we want to use for the request. Here we use the plugin's own credentials, but in other places you'll see how it is also used to forward the credentials from incoming requests."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"targetPluginId"})," is a new requirement that allows for a more fine-grained control of service-to-service auth. When generating a new token for a service-to-service request, you must now specify the ID of the plugin that you want to make the request towards."]}),"\n",(0,i.jsx)(t.h5,{id:"example-2-forwarding-credentials-from-an-incoming-request",children:"Example 2: Forwarding credentials from an incoming request"}),"\n",(0,i.jsx)(t.p,{children:"Reading the credentials from an incoming request typically looked like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"router.get('/example/:entityRef', async (req, _res) => {\n  const token = getBearerTokenFromAuthorizationHeader(\n    req.header('authorization'),\n  );\n\n  // Some followup call using the token, for example using the catalog client\n  const entity = await catalogClient.getEntityByRef(req.params.entityRef, {\n    token,\n  });\n\n  // Or forwarding the token to evaluate permissions\n  await permissions.authorize(\n    [{ permission: examplePermission, resourceRef: entityRef }],\n    { token },\n  );\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"The new auth services intentionally add an additional step to this process, in order to avoid direct forwarding of both user and service tokens in upstream requests. You now instead first extract the credentials from the incoming requests, and then use those credentials to generate new tokens for upstream requests."}),"\n",(0,i.jsx)(t.p,{children:"With the new auth services, the above example now looks like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"router.get('/example/:entityRef', async (req, _res) => {\n  const credentials = await httpAuth.credentials(req);\n\n  // The catalog client only accepts tokens right now, it will be updated\n  // to accept credentials directly in the future.\n  // For now we will need to issue a new token to pass to the catalog client.\n  const { token } = await auth.getPluginRequestToken({\n    onBehalfOf: credentials,\n    targetPluginId: 'catalog',\n  });\n  const entity = await catalogClient.getEntityByRef(req.params.entityRef, {\n    token,\n  });\n\n  // The permissions service accepts credentials directly\n  await permissions.authorize(\n    [{ permission: examplePermission, resourceRef: entityRef }],\n    { credentials },\n  );\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note that for the above ",(0,i.jsx)(t.code,{children:"permissions"})," call to work you will need to update your plugin to depend on the ",(0,i.jsx)(t.code,{children:"PermissionsService"})," from ",(0,i.jsx)(t.code,{children:"@backstage/backend-plugin-api"}),", rather than ",(0,i.jsx)(t.code,{children:"PermissionEvaluator"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["As a general pattern you will want to refactor your plugin so that it forwards the ",(0,i.jsx)(t.code,{children:"BackstageCredentials"})," objects as far as possible, only generating tokens immediately before they are used."]}),"\n",(0,i.jsx)(t.h5,{id:"example-3-getting-the-user-identity-from-a-request",children:"Example 3: Getting the user identity from a request"}),"\n",(0,i.jsxs)(t.p,{children:["To get the user identity from an incoming request you would previously use the ",(0,i.jsx)(t.code,{children:"identity"})," service:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"router.get('/example/by-user', async (req, _res) => {\n  const user = await identity.getIdentity({ request: req });\n\n  if (!user) {\n    throw new AuthenticationError();\n  }\n\n  console.log(`User ${user.identity.userEntityRef} is making a request`);\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"The equivalent using the new auth services is the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"router.get('/example/by-user', async (req, _res) => {\n  const credentials = await httpAuth.credentials(req, { allow: ['user'] });\n\n  console.log(\n    `User ${credentials.principal.userEntityRef} is making a request`,\n  );\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the above code the ",(0,i.jsx)(t.code,{children:"allow"})," option of the ",(0,i.jsx)(t.code,{children:"credentials"})," call is used to narrow down the accepted user credentials. If the incoming requests is not authenticated as a user, the ",(0,i.jsx)(t.code,{children:"credentials"})," call will throw an error."]}),"\n",(0,i.jsxs)(t.p,{children:["If your existing code do not require an authenticated user but only uses it if available, you can instead pass ",(0,i.jsx)(t.code,{children:"allow: ['user', 'service', 'none']"})," to the ",(0,i.jsx)(t.code,{children:"credentials"})," call and then check the ",(0,i.jsx)(t.code,{children:"credentials.principal.type"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var i=n(667294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,a={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},511151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(667294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);