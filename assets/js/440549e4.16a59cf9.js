"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[4771],{603905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var l=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),c=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?l.createElement(y,i(i({ref:e},p),{},{components:n})):l.createElement(y,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},205795:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var l=n(487462),r=n(263366),a=(n(667294),n(603905)),i=["components"],o={},s="Create an TagSpec.",c={type:"api",id:"create-an-tag-spec",unversionedId:"create-an-tag-spec",title:"Create an TagSpec.",description:"",slug:"/create-an-tag-spec",frontMatter:{},api:{operationId:"TagSpec.create",description:"Create an TagSpec.",tags:["TagSpec"],parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",description:"The TagSpec determines the parameters of Tags and execution of Automations.",properties:{id:{type:"string",description:"The name of the Tag, in reverse-DNS format.",example:"cortex.survey_groups"},schema:{allOf:[{type:"object",properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},readOnly:{type:"boolean",default:!1},examples:{type:"array",items:{}},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{type:"integer",minimum:0},minLength:{type:"integer",minimum:0,default:0},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#/components/schemas/JSONSchema"},items:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}}],default:!0},maxItems:{type:"integer",minimum:0},minItems:{type:"integer",minimum:0,default:0},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#/components/schemas/JSONSchema"},maxProperties:{type:"integer",minimum:0},minProperties:{type:"integer",minimum:0,default:0},required:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]},additionalProperties:{$ref:"#/components/schemas/JSONSchema"},definitions:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}]}},propertyNames:{$ref:"#/components/schemas/JSONSchema"},enum:{type:"array",items:{},minItems:1,uniqueItems:!0},type:{anyOf:[{enum:["array","boolean","integer","null","number","object","string"]},{type:"array",items:{enum:["array","boolean","integer","null","number","object","string"]},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#/components/schemas/JSONSchema"},then:{$ref:"#/components/schemas/JSONSchema"},else:{$ref:"#/components/schemas/JSONSchema"},allOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},anyOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},oneOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},not:{$ref:"#/components/schemas/JSONSchema"}},example:{type:"object",additionalProperties:!0}},{description:"The data definition of a Tag.",example:{type:"object",properties:{x:{title:"X Coordinate",type:"number",format:"double",description:"The x coordinate of the accelerometer reading.",example:1.123}}}}]}},required:["id"]}}}},responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",properties:{data:{type:"object"}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",example:"400.bad-request"}}}}}}},security:[{Authorization:[]}],"x-code-samples":[{lang:"js",label:"JavaScript",source:'import LAMP from \'lamp-core\'\nawait LAMP.connect({ serverAddress: "api.lamp.digital", accessKey: "email@address.com", secretKey: "password" })\n// function-specific sample code here\n'},{lang:"python",label:"Python",source:'import LAMP\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'},{lang:"go",label:"R Script",source:'library(LAMP)\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'}],method:"post",path:"/tag_spec",servers:[{url:"https://{server_url}",description:"LAMP Platform API Server",variables:{server_url:{default:"api.lamp.digital",description:"A specific API server instance (HTTPS required)."}}}],securitySchemes:{Authorization:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{id:"cortex.survey_groups",schema:{$id:"string",$schema:"string",$ref:"string",$comment:"string",title:"string",description:"string",readOnly:!1,examples:[null],multipleOf:0,maximum:0,exclusiveMaximum:0,minimum:0,exclusiveMinimum:0,maxLength:0,minLength:0,pattern:"string",maxItems:0,minItems:0,uniqueItems:!1,maxProperties:0,minProperties:0,required:["string"],definitions:{},properties:{},patternProperties:{},dependencies:{},enum:[null],format:"string",contentMediaType:"string",contentEncoding:"string",allOf:[null],anyOf:[null],oneOf:[null]}},info:{title:"LAMP Platform",version:"1.0.0",description:"See docs.lamp.digital for more.",contact:{url:"https://digitalpsych.org/",email:"team@digitalpsych.org",name:"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},postman:{name:"Create an TagSpec.",description:{content:"Create an TagSpec.",type:"text/plain"},url:{path:["tag_spec"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "id": "<string>"\n}'},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},source:"@site/LAMP-protocol/openapi.yml",sourceDirName:".",permalink:"/api/create-an-tag-spec",previous:{title:"View a SensorSpec.",permalink:"/api/view-a-sensor-spec"},next:{title:"List all TagSpecs.",permalink:"/api/list-all-tag-specs"}},p=[],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-tagspec"},"Create an TagSpec."),(0,a.kt)("p",null,"Create an TagSpec."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The name of the Tag, in reverse-DNS format.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$ref"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$comment"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"title"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"description"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"readOnly"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"examples"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"multipleOf"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maximum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exclusiveMaximum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minimum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exclusiveMinimum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxLength"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minLength"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"pattern"),(0,a.kt)("span",{style:{opacity:"0.6"}}," regex"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"additionalItems"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"items"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"uniqueItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contains"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"required"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"additionalProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"definitions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"properties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"patternProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"dependencies"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"propertyNames"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"format"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contentMediaType"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contentEncoding"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"if"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"then"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"else"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"allOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"anyOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"oneOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"not"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))))))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Success"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"default")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"error"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}m.isMDXComponent=!0}}]);