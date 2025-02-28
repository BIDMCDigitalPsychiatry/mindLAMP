"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2801],{28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var r=i(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}},90600:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"type":"api","id":"create-a-sensor-event-for-a-participant","title":"Create a SensorEvent for a Participant.","description":"","slug":"/create-a-sensor-event-for-a-participant","frontMatter":{},"api":{"operationId":"SensorEvent.create","description":"Create a SensorEvent for a Participant.","tags":["SensorEvent"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The special case `\\"me\\"` parameter can also be used to implicitly refer to the Participant ID of the currently authenticated user (Credential)."}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"oneOf":[{"type":"object","description":"An event generated by a participant interacting with the LAMP app.","properties":{"timestamp":{"type":"integer","format":"int64","description":"The UNIX Epoch date-time representation of when this event was recorded: number of milliseconds since 1/1/1970 12:00 AM."},"sensor":{"type":"string","description":"The type of the sensor event.","example":"lamp.accelerometer"},"data":{"type":"object","additionalProperties":true,"description":"The item information recorded within the sensor event.","example":{"x":0.1234,"y":1.2345,"z":2.3456}}},"required":["timestamp","sensor","data"]},{"type":"array","items":{"type":"object","description":"An event generated by a participant interacting with the LAMP app.","properties":{"timestamp":{"type":"integer","format":"int64","description":"The UNIX Epoch date-time representation of when this event was recorded: number of milliseconds since 1/1/1970 12:00 AM."},"sensor":{"type":"string","description":"The type of the sensor event.","example":"lamp.accelerometer"},"data":{"type":"object","additionalProperties":true,"description":"The item information recorded within the sensor event.","example":{"x":0.1234,"y":1.2345,"z":2.3456}}},"required":["timestamp","sensor","data"]}}]}}}},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object"}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"}],"method":"post","path":"/participant/{id}/sensor_event","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"securitySchemes":{"Authorization":{"type":"http","scheme":"basic"}},"info":{"title":"LAMP Platform","version":"1.0.0","description":"See docs.lamp.digital for more.","contact":{"url":"https://digitalpsych.org/","email":"team@digitalpsych.org","name":"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},"postman":{"name":"Create a SensorEvent for a Participant.","description":{"content":"Create a SensorEvent for a Participant.","type":"text/plain"},"url":{"path":["participant",":id","sensor_event"],"host":["{{baseUrl}}"],"query":[],"variable":[{"disabled":false,"description":{"content":"(Required) The special case `\\"me\\"` parameter can also be used to implicitly refer to the Participant ID of the currently authenticated user (Credential).","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"},{"key":"Accept","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n  \\"timestamp\\": \\"<long>\\",\\n  \\"sensor\\": \\"<string>\\",\\n  \\"data\\": {\\n    \\"consecteturfd9\\": -92444805,\\n    \\"aliquip_8\\": -41542691.77200112\\n  }\\n}","options":{"raw":{"language":"json"}}},"auth":{"type":"basic","basic":[{"type":"any","value":"{{basicAuthUsername}}","key":"username"},{"type":"any","value":"{{basicAuthPassword}}","key":"password"}]}}},"source":"@site/LAMP-protocol/openapi.yml","sourceDirName":".","permalink":"/api/create-a-sensor-event-for-a-participant","previous":{"title":"Query ActivityEvents for a Participant.","permalink":"/api/query-activity-events-for-a-participant"},"next":{"title":"Query SensorEvents for a Participant.","permalink":"/api/query-sensor-events-for-a-participant"}}');var n=i(74848),a=i(28453);const s={},o="Create a SensorEvent for a Participant.",c=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"create-a-sensorevent-for-a-participant",children:"Create a SensorEvent for a Participant."})}),"\n",(0,n.jsx)(t.p,{children:"Create a SensorEvent for a Participant."}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"id"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"},children:(0,n.jsxs)(t.p,{children:["The special case ",(0,n.jsx)(t.code,{children:'"me"'})," parameter can also be used to implicitly refer to the Participant ID of the currently authenticated user (Credential)."]})})]})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Request Body "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:(0,n.jsx)("span",{style:{opacity:"0.6"},children:" undefined"})})})})]}),"\n",(0,n.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,n.jsxs)("tbody",{children:[(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"200"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Success"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"data"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" object"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})})]})})]})}),(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,n.jsx)("code",{children:"default"})}),(0,n.jsx)("div",{children:(0,n.jsx)(t.p,{children:"Error"})})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("th",{style:{textAlign:"left"},children:[(0,n.jsx)("span",{children:"Schema "}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,n.jsx)("div",{})]})})}),(0,n.jsx)("tbody",{children:(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{children:[(0,n.jsx)("code",{children:"error"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" string"}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,n.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"})]})})})]})})]})})]})]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);