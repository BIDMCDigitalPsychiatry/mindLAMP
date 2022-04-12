"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[847],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},489042:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(487462),a=r(263366),l=(r(667294),r(603905)),i=["components"],o={},s="Update a Researcher.",c={type:"api",id:"update-a-researcher",unversionedId:"update-a-researcher",title:"Update a Researcher.",description:"",slug:"/update-a-researcher",frontMatter:{},api:{operationId:"Researcher.set",description:"Update a Researcher's settings.",tags:["Researcher"],parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",description:"",properties:{id:{type:"string",readOnly:!0,description:"The self-referencing identifier to this object.",example:"2wp97csc3g57ptznhhkg"},name:{type:"string",description:"The name of the researcher.",example:"Harvard Psychiatry"}},required:["id","name"]}}}},responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",properties:{data:{type:"object"}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",example:"400.bad-request"}}}}}}},security:[{Authorization:[]}],"x-code-samples":[{lang:"js",label:"JavaScript",source:'import LAMP from \'lamp-core\'\nawait LAMP.connect({ serverAddress: "api.lamp.digital", accessKey: "email@address.com", secretKey: "password" })\n// function-specific sample code here\n'},{lang:"python",label:"Python",source:'import LAMP\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'},{lang:"go",label:"R Script",source:'library(LAMP)\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'}],method:"put",path:"/researcher/{id}",servers:[{url:"https://{server_url}",description:"LAMP Platform API Server",variables:{server_url:{default:"api.lamp.digital",description:"A specific API server instance (HTTPS required)."}}}],securitySchemes:{Authorization:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{id:"2wp97csc3g57ptznhhkg",name:"Harvard Psychiatry"},info:{title:"LAMP Platform",version:"1.0.0",description:"See docs.lamp.digital for more.",contact:{url:"https://digitalpsych.org/",email:"team@digitalpsych.org",name:"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},postman:{name:"Update a Researcher.",description:{content:"Update a Researcher's settings.",type:"text/plain"},url:{path:["researcher",":id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'{\n    "name": "<string>",\n    "laborumd": true\n}'},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},source:"@site/LAMP-protocol/openapi.yml",sourceDirName:".",permalink:"/api/update-a-researcher",previous:{title:"List all Researchers.",permalink:"/api/list-all-researchers"},next:{title:"Delete a Researcher.",permalink:"/api/delete-a-researcher"}},p=[],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"update-a-researcher"},"Update a Researcher."),(0,l.kt)("p",null,"Update a Researcher's settings."),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The self-referencing identifier to this object.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"The name of the researcher.")))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Success"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"data"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"default")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Error"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"error"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);