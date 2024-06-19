/*! For license information please see 7c63aa32.9a7329cc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[538784],{748247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(824246),i=n(511151);const o={id:"input-examples",title:"Input Examples",description:"Some examples to use in your template"},a=void 0,s={id:"features/software-templates/input-examples",title:"Input Examples",description:"Some examples to use in your template",source:"@site/../docs/features/software-templates/input-examples.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/input-examples",permalink:"/docs/features/software-templates/input-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/input-examples.md",tags:[],version:"current",frontMatter:{id:"input-examples",title:"Input Examples",description:"Some examples to use in your template"},sidebar:"docs",previous:{title:"Writing Templates",permalink:"/docs/features/software-templates/writing-templates"},next:{title:"Builtin actions",permalink:"/docs/features/software-templates/builtin-actions"}},l={},u=[{value:"Simple text input",id:"simple-text-input",level:2},{value:"Simple input with basic validations",id:"simple-input-with-basic-validations",level:3},{value:"Multi line text input",id:"multi-line-text-input",level:3},{value:"Arrays options",id:"arrays-options",level:2},{value:"Array with custom titles",id:"array-with-custom-titles",level:3},{value:"A multiple choices list",id:"a-multiple-choices-list",level:3},{value:"Array with another types",id:"array-with-another-types",level:3},{value:"Boolean options",id:"boolean-options",level:2},{value:"Boolean",id:"boolean",level:3},{value:"Boolean Yes or No options",id:"boolean-yes-or-no-options",level:3},{value:"Boolean multiple options",id:"boolean-multiple-options",level:3},{value:"Use parameters as condition in steps",id:"use-parameters-as-condition-in-steps",level:2},{value:"Use parameters as conditional for fields",id:"use-parameters-as-conditional-for-fields",level:2},{value:"Conditionally set parameters",id:"conditionally-set-parameters",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["All the examples on this page you can test using ",(0,r.jsx)(t.em,{children:"create/edit"})," from your Backstage installation."]}),"\n",(0,r.jsxs)(t.p,{children:["It is important to remember that all examples are based on ",(0,r.jsx)(t.a,{href:"https://rjsf-team.github.io/react-jsonschema-form/",children:"react-jsonschema-form"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"simple-text-input",children:"Simple text input"}),"\n",(0,r.jsx)(t.h3,{id:"simple-input-with-basic-validations",children:"Simple input with basic validations"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Simple text input\n        type: string\n        description: Description about input\n        maxLength: 8\n        pattern: '^([a-zA-Z][a-zA-Z0-9]*)(-[a-zA-Z0-9]+)*$'\n        ui:autofocus: true\n        ui:help: 'Hint: additional description...'\n"})}),"\n",(0,r.jsx)(t.h3,{id:"multi-line-text-input",children:"Multi line text input"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      multiline:\n        title: Text area input\n        type: string\n        description: Insert your multi line string\n        ui:widget: textarea\n        ui:options:\n          rows: 10\n        ui:help: 'Hint: Make it strong!'\n        ui:placeholder: |\n          apiVersion: backstage.io/v1alpha1\n            kind: Component\n            metadata:\n              name: backstage\n            spec:\n              type: library\n              owner: CNCF\n              lifecycle: experimental\n"})}),"\n",(0,r.jsx)(t.h2,{id:"arrays-options",children:"Arrays options"}),"\n",(0,r.jsx)(t.h3,{id:"array-with-custom-titles",children:"Array with custom titles"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      volume_type:\n        title: Volume Type\n        type: string\n        description: The volume type to be used\n        default: gp2\n        enum:\n          - gp2\n          - gp3\n          - io1\n          - io2\n          - sc1\n          - st1\n          - standard\n        enumNames:\n          - 'General Purpose SSD (gp2)'\n          - 'General Purpose SSD (gp3)'\n          - 'Provisioned IOPS (io1)'\n          - 'Provisioned IOPS (io2)'\n          - 'Cold HDD (sc1)'\n          - 'Throughput Optimized HDD (st1)'\n          - 'Magnetic (standard)'\n"})}),"\n",(0,r.jsx)(t.h3,{id:"a-multiple-choices-list",children:"A multiple choices list"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Select environments\n        type: array\n        items:\n          type: string\n          enum:\n            - production\n            - staging\n            - development\n        uniqueItems: true\n        ui:widget: checkboxes\n"})}),"\n",(0,r.jsx)(t.h3,{id:"array-with-another-types",children:"Array with another types"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      arrayObjects:\n        title: Array with custom objects\n        type: array\n        minItems: 0\n        ui:options:\n          addable: true\n          orderable: true\n          removable: true\n        items:\n          type: object\n          properties:\n            array:\n              title: Array string with default value\n              type: string\n              default: value3\n              enum:\n                - value1\n                - value2\n                - value3\n            flag:\n              title: Boolean flag\n              type: boolean\n              ui:widget: radio\n            someInput:\n              title: Simple text input\n              type: string\n"})}),"\n",(0,r.jsx)(t.h2,{id:"boolean-options",children:"Boolean options"}),"\n",(0,r.jsx)(t.h3,{id:"boolean",children:"Boolean"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Checkbox boolean\n        type: boolean\n"})}),"\n",(0,r.jsx)(t.h3,{id:"boolean-yes-or-no-options",children:"Boolean Yes or No options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Yes or No options\n        type: boolean\n        ui:widget: radio\n"})}),"\n",(0,r.jsx)(t.h3,{id:"boolean-multiple-options",children:"Boolean multiple options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      name:\n        title: Select features\n        type: array\n        items:\n          type: boolean\n          enum:\n            - 'Enable scraping'\n            - 'Enable HPA'\n            - 'Enable cache'\n        uniqueItems: true\n        ui:widget: checkboxes\n"})}),"\n",(0,r.jsx)(t.h2,{id:"use-parameters-as-condition-in-steps",children:"Use parameters as condition in steps"}),"\n",(0,r.jsx)(t.p,{children:"Conditions use Javascript equality operators."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'- name: Only development environments\n  if: ${{ parameters.environment === "staging" or parameters.environment === "development" }}\n  action: debug:log\n  input:\n    message: \'development step\'\n\n- name: Only production environments\n  if: ${{ parameters.environment === "prod" or parameters.environment === "production" }}\n  action: debug:log\n  input:\n    message: \'production step\'\n\n- name: Non-production environments\n  if: ${{ parameters.environment !== "prod" and parameters.environment !== "production" }}\n  action: debug:log\n  input:\n    message: \'non-production step\'\n'})}),"\n",(0,r.jsx)(t.h2,{id:"use-parameters-as-conditional-for-fields",children:"Use parameters as conditional for fields"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"parameters:\n  - title: Fill in some steps\n    properties:\n      includeName:\n        title: Include Name?\n        type: boolean\n        default: true\n\n    dependencies:\n      includeName:\n        allOf:\n          - if:\n              properties:\n                includeName:\n                  const: true\n            then:\n              properties:\n                lastName:\n                  title: Last Name\n                  type: string\n              # You can use additional fields of parameters within conditional parameters such as required.\n              required:\n                - lastName\n"})}),"\n",(0,r.jsx)(t.h2,{id:"conditionally-set-parameters",children:"Conditionally set parameters"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"if"})," keyword within the parameter uses ",(0,r.jsx)(t.a,{href:"https://mozilla.github.io/nunjucks/templating.html#if",children:"nunjucks templating"}),". The ",(0,r.jsx)(t.code,{children:"not"})," keyword is unavailable; instead, use javascript equality."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  parameters:\n    - title: Fill in some steps\n      properties:\n        path:\n          title: path\n          type: string\n\n  steps:\n    - id: fetch\n      name: Fetch template\n      action: fetch:template\n      input:\n        url: ${{ parameters.path if parameters.path else '/root' }}\n    - id: fetch_not_example\n      name: Fetch template not example\n      action: fetch:template\n      input:\n        url: ${{ '/root' if parameters.path !== true else parameters.path }}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,p=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:p,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function x(){}function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=v.prototype;var b=g.prototype=new x;b.constructor=g,h(b,v.prototype),b.isPureReactComponent=!0;var j=Array.isArray,_=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)_.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+N(l,0):o,j(a)?(i="",null!=e&&(i=e.replace(C,"$&/")+"/"),$(a,t,i,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",j(e))for(var u=0;u<e.length;u++){var p=o+N(s=e[u],u);l+=$(s,t,i,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(s=e.next()).done;)l+=$(s=s.value,t,i,p=o+N(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],i=0;return $(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},P={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:P,ReactCurrentOwner:w};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=g,t.StrictMode=o,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=h({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)_.call(t,u)&&!S.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(667294);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);