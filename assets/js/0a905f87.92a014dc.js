"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[2601],{603905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var l=n(667294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,i=function(t,e){if(null==t)return{};var n,l,i={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=l.createContext({}),c=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=i,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?l.createElement(y,r(r({ref:e},p),{},{components:n})):l.createElement(y,r({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},887904:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var l=n(487462),i=n(263366),a=(n(667294),n(603905)),r=["components"],s={},o="Create an ActivitySpec.",c={type:"api",id:"create-an-activity-spec",unversionedId:"create-an-activity-spec",title:"Create an ActivitySpec.",description:"",slug:"/create-an-activity-spec",frontMatter:{},api:{operationId:"ActivitySpec.create",description:"Create an ActivitySpec.",tags:["ActivitySpec"],parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",description:"The ActivitySpec determines the parameters and properties of an Activity and its corresponding generated ActivityEvents.",properties:{id:{type:"string",readOnly:!0,description:"The name of the activity spec.",example:"lamp.survey"},help_contents:{type:"string",description:"Either a binary blob containing a document or video, or a string containing  instructional aid about the Activity."},script_contents:{type:"string",description:"The WebView-compatible script that provides this Activity on mobile or desktop (IFrame) clients."},static_data_schema:{allOf:[{type:"object",properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},readOnly:{type:"boolean",default:!1},examples:{type:"array",items:{}},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{type:"integer",minimum:0},minLength:{type:"integer",minimum:0,default:0},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#/components/schemas/JSONSchema"},items:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}}],default:!0},maxItems:{type:"integer",minimum:0},minItems:{type:"integer",minimum:0,default:0},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#/components/schemas/JSONSchema"},maxProperties:{type:"integer",minimum:0},minProperties:{type:"integer",minimum:0,default:0},required:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]},additionalProperties:{$ref:"#/components/schemas/JSONSchema"},definitions:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}]}},propertyNames:{$ref:"#/components/schemas/JSONSchema"},enum:{type:"array",items:{},minItems:1,uniqueItems:!0},type:{anyOf:[{enum:["array","boolean","integer","null","number","object","string"]},{type:"array",items:{enum:["array","boolean","integer","null","number","object","string"]},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#/components/schemas/JSONSchema"},then:{$ref:"#/components/schemas/JSONSchema"},else:{$ref:"#/components/schemas/JSONSchema"},allOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},anyOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},oneOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},not:{$ref:"#/components/schemas/JSONSchema"}},example:{type:"object",additionalProperties:!0}},{description:"The static data definition of an ActivitySpec.",example:{type:"object",properties:{jewel_count:{title:"Difficulty Level",type:"string",enum:["beginner","intermediate","advanced","expert"],description:"The difficulty level that will be experienced by the participant when playing the game.",example:"expert"}}}}]},temporal_event_schema:{allOf:[{type:"object",properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},readOnly:{type:"boolean",default:!1},examples:{type:"array",items:{}},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{type:"integer",minimum:0},minLength:{type:"integer",minimum:0,default:0},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#/components/schemas/JSONSchema"},items:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}}],default:!0},maxItems:{type:"integer",minimum:0},minItems:{type:"integer",minimum:0,default:0},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#/components/schemas/JSONSchema"},maxProperties:{type:"integer",minimum:0},minProperties:{type:"integer",minimum:0,default:0},required:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]},additionalProperties:{$ref:"#/components/schemas/JSONSchema"},definitions:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}]}},propertyNames:{$ref:"#/components/schemas/JSONSchema"},enum:{type:"array",items:{},minItems:1,uniqueItems:!0},type:{anyOf:[{enum:["array","boolean","integer","null","number","object","string"]},{type:"array",items:{enum:["array","boolean","integer","null","number","object","string"]},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#/components/schemas/JSONSchema"},then:{$ref:"#/components/schemas/JSONSchema"},else:{$ref:"#/components/schemas/JSONSchema"},allOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},anyOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},oneOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},not:{$ref:"#/components/schemas/JSONSchema"}},example:{type:"object",additionalProperties:!0}},{description:"The temporal event data definition of an ActivitySpec.",example:{type:"object",properties:{item:{title:"Question",type:"string",description:"The survey question text.",example:"What day is it today?"},value:{title:"Response",type:["string","integer"],description:"The question response chosen by the participant.",example:"The sky is blue."},type:{title:"Unused",type:"object",nullable:!0,example:null},level:{title:"Unused",type:"object",nullable:!0,example:null},duration:{title:"Time Taken",type:"integer",format:"int64",description:"The number of milliseconds taken by the participant to answer this questtion.",example:8473}}}}]},settings_schema:{allOf:[{type:"object",properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},readOnly:{type:"boolean",default:!1},examples:{type:"array",items:{}},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{type:"integer",minimum:0},minLength:{type:"integer",minimum:0,default:0},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#/components/schemas/JSONSchema"},items:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}}],default:!0},maxItems:{type:"integer",minimum:0},minItems:{type:"integer",minimum:0,default:0},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#/components/schemas/JSONSchema"},maxProperties:{type:"integer",minimum:0},minProperties:{type:"integer",minimum:0,default:0},required:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]},additionalProperties:{$ref:"#/components/schemas/JSONSchema"},definitions:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}]}},propertyNames:{$ref:"#/components/schemas/JSONSchema"},enum:{type:"array",items:{},minItems:1,uniqueItems:!0},type:{anyOf:[{enum:["array","boolean","integer","null","number","object","string"]},{type:"array",items:{enum:["array","boolean","integer","null","number","object","string"]},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#/components/schemas/JSONSchema"},then:{$ref:"#/components/schemas/JSONSchema"},else:{$ref:"#/components/schemas/JSONSchema"},allOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},anyOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},oneOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},not:{$ref:"#/components/schemas/JSONSchema"}},example:{type:"object",additionalProperties:!0}},{description:"The Activity settings definition of an ActivitySpec.",example:{type:"object",properties:{jewel_count:{title:"Number of Jewels Displayed",type:"integer",format:"int32",description:"The number of Jewels to display on the screen; if using Jewels variant B, this number is effectively half to account for the two types of Jewels for a participant to tap on.",example:20},max_duration:{title:"Maximum Duration for a Jewels Game",type:"number",format:"float",description:"The number of seconds to cut a participant off when playing Jewels, if they have not already finished the game.",example:120}}}}]}},required:["id"]}}}},responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",properties:{data:{type:"object"}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",example:"400.bad-request"}}}}}}},security:[{Authorization:[]}],"x-code-samples":[{lang:"js",label:"JavaScript",source:'import LAMP from \'lamp-core\'\nawait LAMP.connect({ serverAddress: "api.lamp.digital", accessKey: "email@address.com", secretKey: "password" })\n// function-specific sample code here\n'},{lang:"python",label:"Python",source:'import LAMP\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'},{lang:"go",label:"R Script",source:'library(LAMP)\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'}],method:"post",path:"/activity_spec",servers:[{url:"https://{server_url}",description:"LAMP Platform API Server",variables:{server_url:{default:"api.lamp.digital",description:"A specific API server instance (HTTPS required)."}}}],securitySchemes:{Authorization:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{id:"lamp.survey",help_contents:"string",script_contents:"string",static_data_schema:{$id:"string",$schema:"string",$ref:"string",$comment:"string",title:"string",description:"string",readOnly:!1,examples:[null],multipleOf:0,maximum:0,exclusiveMaximum:0,minimum:0,exclusiveMinimum:0,maxLength:0,minLength:0,pattern:"string",maxItems:0,minItems:0,uniqueItems:!1,maxProperties:0,minProperties:0,required:["string"],definitions:{},properties:{},patternProperties:{},dependencies:{},enum:[null],format:"string",contentMediaType:"string",contentEncoding:"string",allOf:[null],anyOf:[null],oneOf:[null]},temporal_event_schema:{$id:"string",$schema:"string",$ref:"string",$comment:"string",title:"string",description:"string",readOnly:!1,examples:[null],multipleOf:0,maximum:0,exclusiveMaximum:0,minimum:0,exclusiveMinimum:0,maxLength:0,minLength:0,pattern:"string",maxItems:0,minItems:0,uniqueItems:!1,maxProperties:0,minProperties:0,required:["string"],definitions:{},properties:{},patternProperties:{},dependencies:{},enum:[null],format:"string",contentMediaType:"string",contentEncoding:"string",allOf:[null],anyOf:[null],oneOf:[null]},settings_schema:{$id:"string",$schema:"string",$ref:"string",$comment:"string",title:"string",description:"string",readOnly:!1,examples:[null],multipleOf:0,maximum:0,exclusiveMaximum:0,minimum:0,exclusiveMinimum:0,maxLength:0,minLength:0,pattern:"string",maxItems:0,minItems:0,uniqueItems:!1,maxProperties:0,minProperties:0,required:["string"],definitions:{},properties:{},patternProperties:{},dependencies:{},enum:[null],format:"string",contentMediaType:"string",contentEncoding:"string",allOf:[null],anyOf:[null],oneOf:[null]}},info:{title:"LAMP Platform",version:"1.0.0",description:"See docs.lamp.digital for more.",contact:{url:"https://digitalpsych.org/",email:"team@digitalpsych.org",name:"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},postman:{name:"Create an ActivitySpec.",description:{content:"Create an ActivitySpec.",type:"text/plain"},url:{path:["activity_spec"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "help_contents": "<string>",\n    "script_contents": "<string>",\n    "static_data_schema": true,\n    "temporal_event_schema": true,\n    "settings_schema": true\n}'},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},source:"@site/LAMP-protocol/openapi.yml",sourceDirName:".",permalink:"/api/create-an-activity-spec",previous:{title:"Query the LAMP Database.",permalink:"/api/query-the-lamp-database"},next:{title:"List all ActivitySpecs.",permalink:"/api/list-all-activity-specs"}},p=[],u={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-activityspec"},"Create an ActivitySpec."),(0,a.kt)("p",null,"Create an ActivitySpec."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The name of the activity spec.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"help_contents"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"Either a binary blob containing a document or video, or a string containing  instructional aid about the Activity.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"script_contents"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The WebView-compatible script that provides this Activity on mobile or desktop (IFrame) clients.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"static_data_schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$ref"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$comment"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"title"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"description"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"readOnly"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"examples"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"multipleOf"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maximum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exclusiveMaximum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minimum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exclusiveMinimum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxLength"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minLength"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"pattern"),(0,a.kt)("span",{style:{opacity:"0.6"}}," regex"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"additionalItems"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"items"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"uniqueItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contains"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"required"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"additionalProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"definitions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"properties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"patternProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"dependencies"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"propertyNames"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"format"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contentMediaType"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contentEncoding"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"if"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"then"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"else"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"allOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"anyOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"oneOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"not"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"temporal_event_schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$ref"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$comment"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"title"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"description"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"readOnly"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"examples"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"multipleOf"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maximum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exclusiveMaximum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minimum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exclusiveMinimum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxLength"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minLength"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"pattern"),(0,a.kt)("span",{style:{opacity:"0.6"}}," regex"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"additionalItems"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"items"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"uniqueItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contains"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"required"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"additionalProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"definitions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"properties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"patternProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"dependencies"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"propertyNames"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"format"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contentMediaType"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contentEncoding"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"if"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"then"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"else"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"allOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"anyOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"oneOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"not"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"settings_schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$ref"),(0,a.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"$comment"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"title"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"description"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"readOnly"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"examples"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"multipleOf"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maximum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exclusiveMaximum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minimum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"exclusiveMinimum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxLength"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minLength"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"pattern"),(0,a.kt)("span",{style:{opacity:"0.6"}}," regex"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"additionalItems"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"items"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"uniqueItems"),(0,a.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contains"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"maxProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"minProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"required"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"additionalProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"definitions"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"properties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"patternProperties"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"dependencies"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"propertyNames"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"enum"),(0,a.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"type"),(0,a.kt)("span",{style:{opacity:"0.6"}}," "))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"format"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contentMediaType"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"contentEncoding"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"if"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"then"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"else"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"allOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"anyOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"oneOf"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"not"),(0,a.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))))))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Success"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"default")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"error"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}m.isMDXComponent=!0}}]);