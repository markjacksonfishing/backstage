/*! For license information please see 9e25f69a.e8e536d3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[879939],{926180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(824246),s=t(511151);const r={id:"addons",title:"TechDocs Addons",description:"How to find, use, or create TechDocs Addons."},c=void 0,a={id:"features/techdocs/addons",title:"TechDocs Addons",description:"How to find, use, or create TechDocs Addons.",source:"@site/../docs/features/techdocs/addons.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/addons",permalink:"/docs/features/techdocs/addons",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/addons.md",tags:[],version:"current",frontMatter:{id:"addons",title:"TechDocs Addons",description:"How to find, use, or create TechDocs Addons."},sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/features/techdocs/concepts"},next:{title:"TechDocs Architecture",permalink:"/docs/features/techdocs/architecture"}},i={},d=[{value:"Concepts",id:"concepts",level:2},{value:"Addons",id:"addons",level:3},{value:"Locations",id:"locations",level:3},{value:"Addon Registry",id:"addon-registry",level:3},{value:"Installing and using Addons",id:"installing-and-using-addons",level:2},{value:"Available Addons",id:"available-addons",level:2},{value:"Creating an Addon",id:"creating-an-addon",level:2},{value:"Addons in the Content location",id:"addons-in-the-content-location",level:3},{value:"Testing Addons",id:"testing-addons",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,o.jsx)(n.p,{children:"TechDocs is a centralized platform for publishing, viewing, and discovering\ntechnical documentation across an entire organization. It's a solid foundation!\nBut it doesn't solve higher-order documentation needs on its own: how do you\ncreate and reinforce a culture of documentation? How do you build trust in the\nquality of technical documentation?"}),"\n",(0,o.jsx)(n.p,{children:"TechDocs Addons are a mechanism by which you can customize the TechDocs\nexperience in order to try and address some of these higher-order needs."}),"\n",(0,o.jsx)(n.h3,{id:"addons",children:"Addons"}),"\n",(0,o.jsx)(n.p,{children:"An Addon is just a react component. Like any react component, it can retrieve\nand render data using normal Backstage or native hooks, APIs, and components.\nProps can be used to configure its behavior, where appropriate."}),"\n",(0,o.jsx)(n.h3,{id:"locations",children:"Locations"}),"\n",(0,o.jsxs)(n.p,{children:["Addons declare a ",(0,o.jsx)(n.code,{children:"location"})," where they will be rendered. Most locations are\nrepresentative of physical spaces in the TechDocs UI:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Header"}),": For Addons which fill up the header from the right, on the same\nline as the title."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Subheader"}),": For Addons that sit below the header but above all content.\nThis is a great location for tooling/configuration of TechDocs display."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Settings"}),": These addons are items added to the settings menu list and are designed to make\nthe reader experience customizable, for example accessibility options."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PrimarySidebar"}),": Left of the content, above of the navigation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SecondarySidebar"}),": Right of the content, above the table of contents."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Content"}),": A special location intended for Addons which augment the\nstatically generated content of the documentation itself."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Component"}),": A ",(0,o.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/11109",children:"proposed-but-not-yet-implemented"}),"\nvirtual location, aimed at simplifying a common type of Addon."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"TechDocs Addon Location Guide",src:t(21228).Z+"",width:"3582",height:"1968"})}),"\n",(0,o.jsx)(n.h3,{id:"addon-registry",children:"Addon Registry"}),"\n",(0,o.jsxs)(n.p,{children:["The installation and configuration of Addons happens within a Backstage app's\nfrontend. Addons are imported from plugins and added underneath a registry\ncomponent called ",(0,o.jsx)(n.code,{children:"<TechDocsAddons>"}),". This registry can be configured for both\nthe TechDocs Reader page as well as the Entity docs page."]}),"\n",(0,o.jsx)(n.p,{children:"Addons are rendered in the order in which they are registered."}),"\n",(0,o.jsx)(n.h2,{id:"installing-and-using-addons",children:"Installing and using Addons"}),"\n",(0,o.jsxs)(n.p,{children:["To start using Addons you need to add the ",(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})," package to your app. You can do that by running this command from the root of your project: ",(0,o.jsx)(n.code,{children:"yarn --cwd packages/app add @backstage/plugin-techdocs-module-addons-contrib"})]}),"\n",(0,o.jsxs)(n.p,{children:["Addons can be installed and configured in much the same way as extensions for\nother Backstage plugins: by adding them underneath an extension registry\ncomponent (",(0,o.jsx)(n.code,{children:"<TechDocsAddons>"}),") under the route representing the TechDocs Reader\npage in your ",(0,o.jsx)(n.code,{children:"App.tsx"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// packages/app/src/App.tsx\n\nimport { TechDocsReaderPage } from '@backstage/plugin-techdocs';\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react';\nimport { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';\n\n// ...\n\n<Route path=\"/docs/:namespace/:kind/:name/*\" element={<TechDocsReaderPage />}>\n  <TechDocsAddons>\n    <ReportIssue />\n    {/* Other addons can be added here. */}\n  </TechDocsAddons>\n</Route>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you are using a custom ",(0,o.jsx)(n.a,{href:"/docs/features/techdocs/how-to-guides#how-to-customize-the-techdocs-reader-page",children:"TechDocs reader page"})," your setup will be very similar, here's an example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'<Route path="/docs/:namespace/:kind/:name/*" element={<TechDocsReaderPage />}>\n  <TechDocsAddons>\n    <ReportIssue />\n    {/* Other addons can be added here. */}\n  </TechDocsAddons>\n  {techDocsPage} // This is your custom TechDocs reader page\n</Route>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The process for configuring Addons on the documentation tab on the entity page\nis very similar; instead of adding the ",(0,o.jsx)(n.code,{children:"<TechDocsAddons>"})," registry under a\n",(0,o.jsx)(n.code,{children:"<Route>"}),", you'd add it as a child of ",(0,o.jsx)(n.code,{children:"<EntityTechdocsContent />"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// packages/app/src/components/catalog/EntityPage.tsx\n\nimport { EntityLayout } from '@backstage/plugin-catalog';\nimport { EntityTechdocsContent } from '@backstage/plugin-techdocs';\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react';\nimport { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';\n\n// ...\n\n<EntityLayout.Route path=\"/docs\" title=\"Docs\">\n  <EntityTechdocsContent>\n    <TechDocsAddons>\n      <ReportIssue />\n      {/* Other addons can be added here. */}\n    </TechDocsAddons>\n  </EntityTechdocsContent>\n</EntityLayout.Route>;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that on the entity page, because the Catalog plugin is responsible for the\npage header, TechDocs Addons whose location is ",(0,o.jsx)(n.code,{children:"Header"})," will not be rendered."]}),"\n",(0,o.jsx)(n.h2,{id:"available-addons",children:"Available Addons"}),"\n",(0,o.jsx)(n.p,{children:"Addons can, in principle, be provided by any plugin! To make it easier to\ndiscover available Addons, we've compiled a list of them here:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Addon"}),(0,o.jsx)(n.th,{children:"Package/Plugin"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-techdocs-module-addons-contrib.expandablenavigation",children:(0,o.jsx)(n.code,{children:"<ExpandableNavigation />"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})}),(0,o.jsx)(n.td,{children:"Allows TechDocs users to expand or collapse the entire TechDocs main navigation, and keeps the user's preferred state between documentation sites."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-techdocs-module-addons-contrib.reportissue",children:(0,o.jsx)(n.code,{children:"<ReportIssue />"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})}),(0,o.jsx)(n.td,{children:"Allows TechDocs users to select a portion of text on a TechDocs page and open an issue against the repository that contains the documentation, populating the issue description with the selected text according to a configurable template."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-techdocs-module-addons-contrib.textsize",children:(0,o.jsx)(n.code,{children:"<TextSize />"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})}),(0,o.jsx)(n.td,{children:"This TechDocs addon allows users to customize text size on documentation pages, they can select how much they want to increase or decrease the font size via slider or buttons. The default value for font size is 100% and this setting is kept in the browser's local storage whenever it is changed."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-techdocs-module-addons-contrib.lightbox",children:(0,o.jsx)(n.code,{children:"<LightBox />"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-module-addons-contrib"})}),(0,o.jsxs)(n.td,{children:["This TechDocs addon allows users to open images in a light-box on documentation pages, they can navigate between images if there are several on one page. The image size of the light-box image is the same as the image size on the document page. When clicking on the zoom icon it zooms the image to fit in the screen (similar to ",(0,o.jsx)(n.code,{children:"background-size: contain"}),")."]})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Got an Addon to contribute? Feel free to add a row above!"}),"\n",(0,o.jsx)(n.h2,{id:"creating-an-addon",children:"Creating an Addon"}),"\n",(0,o.jsx)(n.p,{children:"The simplest Addons are plain old react components that get rendered in\nspecific locations within a TechDocs site. To package such a react component as\nan Addon, follow these steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Write the component in your plugin like any other component"}),"\n",(0,o.jsx)(n.li,{children:"Create, provide, and export the component from your plugin"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// plugins/your-plugin/src/plugin.ts\n\nimport {\n  createTechDocsAddonExtension,\n  TechDocsAddonLocations,\n} from '@backstage/plugin-techdocs-react';\nimport { CatGifComponent, CatGifComponentProps } from './addons';\n\n// ...\n\n// You must \"provide\" your Addon, just like any extension, via your plugin.\nexport const CatGif = yourPlugin.provide(\n  // This function \"creates\" the Addon given a component and location. If your\n  // component can be configured via props, pass the prop type here too.\n  createTechDocsAddonExtension<CatGifComponentProps>({\n    name: 'CatGif',\n    location: TechDocsAddonLocations.Header,\n    component: CatGifComponent,\n  }),\n);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"addons-in-the-content-location",children:"Addons in the Content location"}),"\n",(0,o.jsx)(n.p,{children:"Beyond the \"render a component in a region\" use-case, it's also possible for\nAddons to access and manipulate a TechDocs site's DOM; this could be used to,\nfor example, load and instantiate client-side diagramming libraries, replace\nelements with dynamically loaded content, etc."}),"\n",(0,o.jsxs)(n.p,{children:["This type of Addon is still expressed as a react component, but instead of\nreturning a react element to be rendered, it updates the DOM via side-effects\n(e.g. with ",(0,o.jsx)(n.code,{children:"useEffect"}),"). Access to the DOM is made available via utility hooks\nprovided by the Addon framework."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// plugins/your-plugin/src/addons/MakeAllImagesCatGifs.tsx\n\nimport React, { useEffect } from 'react';\nimport { useShadowRootElements } from '@backstage/plugin-techdocs-react';\n\n// This is a normal react component; in order to make it an Addon, you would\n// still create and provide it via your plugin as described above. The only\n// difference is that you'd set `location` to `TechDocsAddonLocations.Content`.\nexport const MakeAllImagesCatGifsAddon = () => {\n  // This hook can be used to get references to specific elements. If you need\n  // access to the whole shadow DOM, use the the underlying useShadowRoot()\n  // hook instead.\n  const images = useShadowRootElements<HTMLImageElement>(['img']);\n\n  useEffect(() => {\n    images.forEach(img => {\n      if (img.src !== 'https://example.com/cat.gif') {\n        img.src = 'https://example.com/cat.gif';\n      }\n    });\n  }, [images]);\n\n  // Nothing to render directly, so we can just return null.\n  return null;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"testing-addons",children:"Testing Addons"}),"\n",(0,o.jsxs)(n.p,{children:["Install ",(0,o.jsx)(n.code,{children:"@backstage/plugin-techdocs-addons-test-utils"})," as a ",(0,o.jsx)(n.code,{children:"devDependency"})," in\nyour plugin for access to utilities that make testing such Addons easier."]}),"\n",(0,o.jsx)(n.p,{children:"A test for the above Addon might look something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// plugins/your-plugin/src/addons/MakeAllImagesCatGifs.test.tsx\nimport { TechDocsAddonTester } from '@backstage/plugin-techdocs-addons-test-utils';\n\n// Note: import your actual addon (the one provided by your plugin).\nimport { MakeAllImagesCatGifs } from '../plugin.ts';\n\ndescribe('MakeAllImagesCatGifs', () => {\n  it('replaces img srcs with cat gif', async () => {\n    const { getByTestId } = await TechDocsAddonTester.buildAddonsInTechDocs([\n      <MakeAllImagesCatGifs />,\n    ])\n      .withDom(<img data-testid=\"fixture\" src=\"http://example.com/dog.jpg\" />)\n      .renderWithEffects();\n\n    expect(getByTestId('fixture')).toHaveAttribute(\n      'src',\n      'https://example.com/cat.gif',\n    );\n  });\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},21228:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/addon-locations-684d47051de7f2b16c25d8354d4f1f2f.png"},371426:(e,n,t)=>{var o=t(827378),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,r={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,o)&&!i.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:a.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},541535:(e,n)=>{var t=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}function x(){}function b(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var j=b.prototype=new x;j.constructor=b,g(j,y.prototype),j.isPureReactComponent=!0;var v=Array.isArray,A=Object.prototype.hasOwnProperty,k={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,o){var s,r={},c=null,a=null;if(null!=n)for(s in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(c=""+n.key),n)A.call(n,s)&&!T.hasOwnProperty(s)&&(r[s]=n[s]);var i=arguments.length-2;if(1===i)r.children=o;else if(1<i){for(var d=Array(i),l=0;l<i;l++)d[l]=arguments[l+2];r.children=d}if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===r[s]&&(r[s]=i[s]);return{$$typeof:t,type:e,key:c,ref:a,props:r,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var D=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,s,r,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case o:i=!0}}if(i)return c=c(i=e),e=""===r?"."+C(i,0):r,v(c)?(s="",null!=e&&(s=e.replace(D,"$&/")+"/"),R(c,n,s,"",(function(e){return e}))):null!=c&&(_(c)&&(c=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,s+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(D,"$&/")+"/")+e)),n.push(c)),1;if(i=0,r=""===r?".":r+":",v(e))for(var d=0;d<e.length;d++){var l=r+C(a=e[d],d);i+=R(a,n,s,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),d=0;!(a=e.next()).done;)i+=R(a=a.value,n,s,l=r+C(a,d++),c);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function E(e,n,t){if(null==e)return e;var o=[],s=0;return R(e,o,"","",(function(e){return n.call(t,e,s++)})),o}function S(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},P={transition:null},O={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:P,ReactCurrentOwner:k};function $(){throw Error("act(...) is not supported in production builds of React.")}n.Children={map:E,forEach:function(e,n,t){E(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return E(e,(function(){n++})),n},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=s,n.Profiler=c,n.PureComponent=b,n.StrictMode=r,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,n.act=$,n.cloneElement=function(e,n,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),r=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=k.current),void 0!==n.key&&(r=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(d in n)A.call(n,d)&&!T.hasOwnProperty(d)&&(s[d]=void 0===n[d]&&void 0!==i?i[d]:n[d])}var d=arguments.length-2;if(1===d)s.children=o;else if(1<d){i=Array(d);for(var l=0;l<d;l++)i[l]=arguments[l+2];s.children=i}return{$$typeof:t,type:e.type,key:r,ref:c,props:s,_owner:a}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:d,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:S}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=P.transition;P.transition={};try{e()}finally{P.transition=n}},n.unstable_act=$,n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,t){return I.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,t){return I.current.useReducer(e,n,t)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return I.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return I.current.useTransition()},n.version="18.3.1"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var o=t(667294);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);