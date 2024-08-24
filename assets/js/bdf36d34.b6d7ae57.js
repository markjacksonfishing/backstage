/*! For license information please see bdf36d34.b6d7ae57.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[454620],{930111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(824246),r=t(511151);const i={id:"service-to-service-auth",title:"Service to Service Auth",description:"This section describes service to service authentication works, both internally within Backstage plugins and when external callers want to make requests."},a=void 0,o={id:"auth/service-to-service-auth",title:"Service to Service Auth",description:"This section describes service to service authentication works, both internally within Backstage plugins and when external callers want to make requests.",source:"@site/../docs/auth/service-to-service-auth.md",sourceDirName:"auth",slug:"/auth/service-to-service-auth",permalink:"/docs/auth/service-to-service-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/service-to-service-auth.md",tags:[],version:"current",frontMatter:{id:"service-to-service-auth",title:"Service to Service Auth",description:"This section describes service to service authentication works, both internally within Backstage plugins and when external callers want to make requests."},sidebar:"docs",previous:{title:"Contributing New Providers",permalink:"/docs/auth/add-auth-provider"},next:{title:"Auto Logout",permalink:"/docs/auth/autologout"}},c={},l=[{value:"Standard Plugin-to-Plugin Auth",id:"standard-plugin-to-plugin-auth",level:2},{value:"Static Keys for Plugin-to-Plugin Auth",id:"static-keys-for-plugin-to-plugin-auth",level:3},{value:"Static Tokens",id:"static-tokens",level:2},{value:"JWKS Token Auth",id:"jwks-token-auth",level:2},{value:"Legacy Tokens",id:"legacy-tokens",level:2},{value:"Configuration (legacy)",id:"configuration-legacy",level:3},{value:"External Callers (legacy)",id:"external-callers-legacy",level:3},{value:"Access Restrictions",id:"access-restrictions",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This documentation is written for ",(0,s.jsx)(n.a,{href:"/docs/backend-system/",children:"the new backend system"})," which is the default since Backstage\n",(0,s.jsx)(n.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend\nsystem, you may want to read ",(0,s.jsx)(n.a,{href:"/docs/auth/service-to-service-auth--old",children:"its own article"}),"\ninstead, and ",(0,s.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,s.jsxs)(n.p,{children:["This article describes how ",(0,s.jsx)(n.em,{children:"service-to-service auth"})," works in Backstage, both\nbetween Backstage backend plugins and for external callers who want to make\nrequests to them. This is in contrast to ",(0,s.jsx)(n.em,{children:"user and user-to-service auth"})," which\nuse different flows."]}),"\n",(0,s.jsx)(n.p,{children:"Each section describes one distinct type of auth flow."}),"\n",(0,s.jsx)(n.h2,{id:"standard-plugin-to-plugin-auth",children:"Standard Plugin-to-Plugin Auth"}),"\n",(0,s.jsxs)(n.p,{children:["Backstage plugins that use the new backend system and handle credentials using\nthe ",(0,s.jsx)(n.code,{children:"auth"})," and ",(0,s.jsx)(n.code,{children:"httpAuth"})," service APIs are secure by default, without requiring\nany configuration. They generate self-signed tokens automatically for making\nrequests to other Backstage backend plugins, and the receivers use the caller's\npublic key set endpoint to be able to perform verification."]}),"\n",(0,s.jsxs)(n.p,{children:["A backend plugin wishing to make a request to another backend plugin acquires\nthe required token as follows, where ",(0,s.jsx)(n.code,{children:"auth"})," and ",(0,s.jsx)(n.code,{children:"httpAuth"})," are assumed to be\ninjected from ",(0,s.jsx)(n.code,{children:"coreServices.auth"})," and ",(0,s.jsx)(n.code,{children:"coreServices.httpAuth"}),", respectively:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const credentials = await httpAuth.credentials(req);\nconst { token } = await auth.getPluginRequestToken({\n  onBehalfOf: credentials,\n  targetPluginId: '<plugin-id>', // e.g. 'catalog'\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example we are assuming that we are in an Express request handler, and\nwe extract the caller credentials (typically a user or a service) out of its\n",(0,s.jsx)(n.code,{children:"req"})," and make the upstream request on-behalf-of that principal. Prefer to use\nthis pattern wherever there's an incoming set of credentials to refer to."]}),"\n",(0,s.jsx)(n.p,{children:"If you want to initiate a request entirely as your own service, not on behalf of\nanybody else, you can do so as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const { token } = await auth.getPluginRequestToken({\n  onBehalfOf: await auth.getOwnServiceCredentials(),\n  targetPluginId: '<plugin-id>', // e.g. 'catalog'\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Callers pass along the tokens verbatim with requests in the ",(0,s.jsx)(n.code,{children:"Authorization"}),"\nheader:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Authorization: Bearer eyJhbG...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You may occasionally also see some code, e.g. clients to other systems, that\naccept a ",(0,s.jsx)(n.code,{children:"credentials"})," argument directly instead of a token. For those, just\npass in the credentials as acquired above, instead of making a token. The client\ncode will know what to do with those credentials internally."]}),"\n",(0,s.jsxs)(n.p,{children:["This flow has only one configuration option to set in your app-config:\n",(0,s.jsx)(n.code,{children:"backend.auth.dangerouslyDisableDefaultAuthPolicy"}),", which can be set to ",(0,s.jsx)(n.code,{children:"true"}),"\nif you for some reason need to completely disable both the issuing and\nverification of tokens between backend plugins. This makes your backends\ninsecure and callable by anyone without auth, so only use this as a last resort\nand when your deployment is behind a secure ingress like a VPN."]}),"\n",(0,s.jsx)(n.p,{children:"External callers cannot leverage this flow; it's only used internally by backend\nplugins calling other backend plugins."}),"\n",(0,s.jsx)(n.h3,{id:"static-keys-for-plugin-to-plugin-auth",children:"Static Keys for Plugin-to-Plugin Auth"}),"\n",(0,s.jsx)(n.p,{children:"In some special circumstances, such as when running worker nodes on readonly\ndatabase replicas, you may wish to opt out of the standard database based\npublic-key scheme. As an alternative, you can put static keys in your config\nthat are used for token signing and validation."}),"\n",(0,s.jsxs)(n.p,{children:["You can make keys using the ",(0,s.jsx)(n.code,{children:"openssl"})," command line utility."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First generate a private key using the ES256 algorithm:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"openssl ecparam -name prime256v1 -genkey -out private.ec.key\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Convert it to PKCS#8 format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in private.ec.key -out private.key\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Extract the public key:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"openssl ec -inform PEM -outform PEM -pubout -in private.key -out public.key\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After this you have the files ",(0,s.jsx)(n.code,{children:"private.key"})," and ",(0,s.jsx)(n.code,{children:"public.key"}),". Put them in a\nplace where you know their absolute paths, and then set up your app-config\naccordingly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"backend:\n  auth:\n    # This is the new section for configuring plugin-to-plugin key storage\n    pluginKeyStore:\n      type: static\n      static:\n        keys:\n          - publicKeyFile: /absolute/path/to/public.key\n            privateKeyFile: /absolute/path/to/private.key\n            keyId: some-custom-id\n"})}),"\n",(0,s.jsx)(n.p,{children:"As long as all your nodes have this same config with the same set of keys, they\nwill now be able to successfully communicate with each other without touching the\ndatabase."}),"\n",(0,s.jsxs)(n.p,{children:["You'll note that the ",(0,s.jsx)(n.code,{children:"keys"})," value is an array, which is useful for key rotation.\nThe first entry will always be used for signing, but any of the subsequent\nentries will also be used for token validation. This lets you have a period of\ntime where tokens signed by the previous top entry are still accepted by\nreceivers, by just inserting your new key pair as the top entry and leaving the\nold ones intact. You can remove old private keys however; those won't be used."]}),"\n",(0,s.jsx)(n.h2,{id:"static-tokens",children:"Static Tokens"}),"\n",(0,s.jsx)(n.p,{children:"This access method consists of random static tokens that can be handed out to\nexternal callers who want to make requests to Backstage backend plugins. This is\nuseful for the most basic callers such as command line scripts, web hooks and\nsimilar."}),"\n",(0,s.jsxs)(n.p,{children:["You configure this access method by adding one or more entries of type ",(0,s.jsx)(n.code,{children:"static"}),"\nto the ",(0,s.jsx)(n.code,{children:"backend.auth.externalAccess"})," app-config key:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="in e.g. app-config.production.yaml"',children:"backend:\n  auth:\n    externalAccess:\n      - type: static\n        options:\n          token: ${CICD_TOKEN}\n          subject: cicd-system-completion-events\n        # Restrictions are optional; see below\n        accessRestrictions:\n          - plugin: events\n      - type: static\n        options:\n          token: ${ADMIN_CURL_TOKEN}\n          subject: admin-curl-access\n"})}),"\n",(0,s.jsx)(n.p,{children:"The tokens can be any string without whitespace, but for security reasons should\nbe sufficiently long so as not to be easy to guess by brute force. You can for\nexample generate them on the command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'node -p \'require("crypto").randomBytes(24).toString("base64")\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"The subjects must be strings without whitespace. They are used for identifying\neach caller, and become part of the credentials object that request recipient\nplugins get."}),"\n",(0,s.jsxs)(n.p,{children:["Callers must pass along tokens verbatim with requests in the ",(0,s.jsx)(n.code,{children:"Authorization"}),"\nheader when calling Backstage plugins:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Authorization: Bearer eZv5o+fW3KnR3kVabMW4ZcDNLPl8nmMW\n"})}),"\n",(0,s.jsx)(n.h2,{id:"jwks-token-auth",children:"JWKS Token Auth"}),"\n",(0,s.jsx)(n.p,{children:"This access method allows for external caller token authentication using configured\nJSON Web Key Sets (JWKS). This is useful for callers that are authenticating to our\ninstance of Backstage with third-party tools, such as Auth0."}),"\n",(0,s.jsxs)(n.p,{children:["You can configure this access method by adding one or more entries of type ",(0,s.jsx)(n.code,{children:"jwks"}),"\nto the ",(0,s.jsx)(n.code,{children:"backend.auth.externalAccess"})," app-config key:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="in e.g. app-config.production.yaml"',children:"backend:\n  auth:\n    externalAccess:\n      - type: jwks\n        options:\n          url: https://example.com/.well-known/jwks.json\n          issuer: https://example.com\n          algorithm: RS256\n          audience: example, other-example\n          subjectPrefix: custom-prefix\n      - type: jwks\n        options:\n          url: https://another-example.com/.well-known/jwks.json\n          issuer: https://example.com\n"})}),"\n",(0,s.jsx)(n.p,{children:"The URL should point at an unauthenticated endpoint that returns the JWKS."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"issuer"})," specifies the issuer(s) of the JWT that the authenticating app will accept.\nPassed JWTs must have an ",(0,s.jsx)(n.code,{children:"iss"})," claim which matches one of the specified issuers."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"algorithm"})," specifies the algorithm(s) that are used to verify the JWT. The passed JWTs\nmust have been signed using one of the listed algorithms."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"audience"}),' specifies the intended audience(s) of the JWT. The passed JWTs must have an "aud"\nclaim that matches one of the audiences specified, or have no audience specified.']}),"\n",(0,s.jsx)(n.p,{children:"For additional details regarding the JWKS configuration, please consult your authentication\nprovider's documentation."}),"\n",(0,s.jsxs)(n.p,{children:["The subject returned from the token verification will become part of the\ncredentials object that the request recipient plugins get. All subjects will have the prefix\n",(0,s.jsx)(n.code,{children:"external:"}),", but you can also provide a custom subjectPrefix which will get appended before the\nsubject returned from your JWKS service (ex. ",(0,s.jsx)(n.code,{children:"external:custom-prefix:sub"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Callers must pass along tokens with requests in the ",(0,s.jsx)(n.code,{children:"Authorization"})," header when\ncalling Backstage plugins:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Authorization: Bearer eyJhbG...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"legacy-tokens",children:"Legacy Tokens"}),"\n",(0,s.jsxs)(n.p,{children:["Plugins and backends that are ",(0,s.jsx)(n.em,{children:"not"})," on the new backend system use a legacy token\nflow, where shared static secrets in your app-config are used for signing and\nverification. If you are on the new backend system and are not using legacy\nplugins using the compatibility wrapper, you can skip this section."]}),"\n",(0,s.jsx)(n.h3,{id:"configuration-legacy",children:"Configuration (legacy)"}),"\n",(0,s.jsx)(n.p,{children:"In local development, there is no need to configure anything for this auth\nmethod. But in production, you must configure at least one legacy type external\naccess method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="in e.g. app-config.production.yaml"',children:"backend:\n  auth:\n    externalAccess:\n      - type: legacy\n        options:\n          secret: my-secret-key-catalog\n          subject: legacy-catalog\n      - type: legacy\n        options:\n          secret: my-secret-key-scaffolder\n          subject: legacy-scaffolder\n"})}),"\n",(0,s.jsx)(n.p,{children:"The old style keys config is also supported as an alternative, but please\nconsider using the new style above instead:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="in e.g. app-config.production.yaml"',children:"backend:\n  auth:\n    keys:\n      - secret: my-secret-key-catalog\n      - secret: my-secret-key-scaffolder\n"})}),"\n",(0,s.jsx)(n.p,{children:"The secrets must be any base64-encoded random data, but for security reasons\nshould be sufficiently long so as not to be easy to guess by brute force. You\ncan for example generate them on the command line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'node -p \'require("crypto").randomBytes(24).toString("base64")\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"The subjects must be strings without whitespace. They are used for identifying\neach caller, and become part of the credentials object that request recipient\nplugins get."}),"\n",(0,s.jsx)(n.p,{children:"In both of the examples we showed two secrets being specified, but the minimum\nis one. The order is significant: the first one is always used for signing of\noutgoing requests to other backend plugins, while all of the keys are used for\nverification. This is useful if you want to be able to have unique keys per\ndeployment if you are using split deployments of Backstage. Then each deployment\nlists its own signing secret at the top, and only adds the secrets for those\nother deployments that it wants to permit to call it."}),"\n",(0,s.jsxs)(n.p,{children:["For most organizations, we recommend leaving it at just one key and\n",(0,s.jsx)(n.a,{href:"/docs/backend-system/building-backends/migrating",children:"migrating"})," to the new\nbackend system as soon as possible instead of experimenting with multiple legacy\nsecrets."]}),"\n",(0,s.jsx)(n.h3,{id:"external-callers-legacy",children:"External Callers (legacy)"}),"\n",(0,s.jsx)(n.p,{children:"For legacy Backstage backend plugins, the above configuration is enough. But\nexternal callers who wish to make requests using this flow must generate tokens\naccording to the following rules."}),"\n",(0,s.jsxs)(n.p,{children:["The token must be a JWT with a ",(0,s.jsx)(n.code,{children:"HS256"})," signature, using the raw base64 decoded\nvalue of the configured key as the secret. It must also have the following\npayload:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sub"}),': the exact string "backstage-server"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exp"}),": one hour from the time it was generated, in epoch seconds"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(n.p,{children:["The JWT must encode the ",(0,s.jsx)(n.code,{children:"alg"})," header as a protected header, such as with\n",(0,s.jsx)(n.a,{href:"https://github.com/panva/jose/blob/main/docs/classes/jwt_sign.SignJWT.md#setprotectedheader",children:"setProtectedHeader"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["The caller then passes along the JWT token with requests in the ",(0,s.jsx)(n.code,{children:"Authorization"}),"\nheader:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Authorization: Bearer eZv5o+fW3KnR3kVabMW4ZcDNLPl8nmMW\n"})}),"\n",(0,s.jsx)(n.h2,{id:"access-restrictions",children:"Access Restrictions"}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.code,{children:"externalAccess"})," entry may optionally have an ",(0,s.jsx)(n.code,{children:"accessRestrictions"})," key,\nwhich limits what that particular access method can do. Let's look at an\nexample:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="in e.g. app-config.production.yaml"',children:"backend:\n  auth:\n    externalAccess:\n      - type: static\n        options:\n          token: ${CICD_TOKEN}\n          subject: cicd-system-completion-events\n        accessRestrictions:\n          - plugin: events\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this short example there's only one entry. It says that for anyone trying to\nmake access with the CICD token, they will be rejected if they try to contact\nanything but the ",(0,s.jsx)(n.code,{children:"events"})," backend plugin. You could add additional entries to\nthe array that allow targeting more plugins if that's what you want."]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(n.p,{children:["If no ",(0,s.jsx)(n.code,{children:"accessRestrictions"})," are added, the access method has unlimited access to\nall functionality of all plugins. It is recommended that you try to specify\naccess restrictions whenever possible, to reduce risk."]})}),"\n",(0,s.jsx)(n.p,{children:"Each entry has one or more of the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"plugin"})}),": Required. A plugin ID as a string, for example ",(0,s.jsx)(n.code,{children:"'catalog'"}),". Permits\naccess to make requests to this plugin. Can be further refined by setting\nadditional fields as per below."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"accessRestrictions:\n  # access to any other plugin will be rejected\n  - plugin: my-plugin\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"permission"})}),": Optional. A collection (comma/space separated string or\nstring array) of permission names. If given, this method is limited to only\nperforming actions with these named permissions in the plugin with the ID\ngiven above."]}),"\n",(0,s.jsx)(n.p,{children:"Note that this only applies where permissions checks are enabled in the first\nplace. Endpoints that are not protected by the permissions system at all, are\nnot affected by this setting."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"accessRestrictions:\n  - plugin: my-plugin\n    # Any other permission check will be rejected.\n    permission:\n      - my-plugin.add-item\n      - my-plugin.remove-item\n    # Also supports the shorthand form:\n    # permission: my-plugin.add-item, my-plugin.remove-item\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"permissionAttribute"})}),": Optional. A key-value object of permission attributes\nwhere each value is a collection (comma/space separated string or string\narray) of allowed such values. If given, this method is limited to only\nperforming actions whose permissions have these attributes."]}),"\n",(0,s.jsx)(n.p,{children:"Note that this only applies where permissions checks are\nenabled in the first place. Endpoints that are not protected by\nthe permissions system at all, are not affected by this\nsetting."}),"\n",(0,s.jsxs)(n.p,{children:["In practice, this is typically used to limit by the ",(0,s.jsx)(n.code,{children:"action"})," attribute, for\n",(0,s.jsx)(n.code,{children:"'create'"}),", ",(0,s.jsx)(n.code,{children:"'read'"}),", ",(0,s.jsx)(n.code,{children:"'update'"}),", or ",(0,s.jsx)(n.code,{children:"'delete'"})," values."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"accessRestrictions:\n  - plugin: my-plugin\n    permissionAttribute:\n      # Updates and deletes will be rejected.\n      action:\n        - create\n        - read\n      # Also supports the shorthand form:\n      # action: create, read\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},371426:(e,n,t)=>{var s=t(827378),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,i={},l=null,u=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:l,ref:u,props:i,_owner:o.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),s=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}function x(){}function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=m.prototype;var j=b.prototype=new x;j.constructor=b,y(j,m.prototype),j.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,s){var r,i={},a=null,o=null;if(null!=n)for(r in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(a=""+n.key),n)v.call(n,r)&&!_.hasOwnProperty(r)&&(i[r]=n[r]);var c=arguments.length-2;if(1===c)i.children=s;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:t,type:e,key:a,ref:o,props:i,_owner:w.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var A=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,r,i,a){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case s:c=!0}}if(c)return a=a(c=e),e=""===i?"."+E(c,0):i,k(a)?(r="",null!=e&&(r=e.replace(A,"$&/")+"/"),P(a,n,r,"",(function(e){return e}))):null!=a&&(T(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(A,"$&/")+"/")+e)),n.push(a)),1;if(c=0,i=""===i?".":i+":",k(e))for(var l=0;l<e.length;l++){var u=i+E(o=e[l],l);c+=P(o,n,r,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(o=e.next()).done;)c+=P(o=o.value,n,r,u=i+E(o,l++),a);else if("object"===o)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,n,t){if(null==e)return e;var s=[],r=0;return P(e,s,"","",(function(e){return n.call(t,e,r++)})),s}function R(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},q={transition:null},I={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:q,ReactCurrentOwner:w};function O(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:C,forEach:function(e,n,t){C(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return C(e,(function(){n++})),n},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=r,n.Profiler=a,n.PureComponent=b,n.StrictMode=i,n.Suspense=u,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.act=O,n.cloneElement=function(e,n,s){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=y({},e.props),i=e.key,a=e.ref,o=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,o=w.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)v.call(n,l)&&!_.hasOwnProperty(l)&&(r[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)r.children=s;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:t,type:e.type,key:i,ref:a,props:r,_owner:o}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=T,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:R}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=q.transition;q.transition={};try{e()}finally{q.transition=n}},n.unstable_act=O,n.useCallback=function(e,n){return N.current.useCallback(e,n)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,n){return N.current.useEffect(e,n)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,n,t){return N.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return N.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return N.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return N.current.useMemo(e,n)},n.useReducer=function(e,n,t){return N.current.useReducer(e,n,t)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return N.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return N.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(667294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);