"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[7714],{38428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"develop/build_new_activities","title":"Building New Activities","description":"Because the LAMP Platform is built around around a simple native core and a flexible WebView UI, any HTML/CSS/JavaScript code that works in a browser can work in the app.","source":"@site/docs/08-develop/05-build_new_activities.md","sourceDirName":"08-develop","slug":"/develop/build_new_activities","permalink":"/develop/build_new_activities","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/05-build_new_activities.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731010294000,"sidebarPosition":5,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Continuous Monitoring & Intervention Delivery","permalink":"/develop/intervention_delivery"},"next":{"title":"Just-In-Time Adaptive Interventions","permalink":"/develop/adaptive_interventions"}}');var s=n(74848),a=n(28453);const o={},c="Building New Activities",r={},d=[{value:"Back Button Function in Activity",id:"back-button-function-in-activity",level:2},{value:"Initialized Settings from LAMP",id:"initialized-settings-from-lamp",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"building-new-activities",children:"Building New Activities"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(71585).A+"",width:"3065",height:"766"})}),"\n",(0,s.jsxs)(t.p,{children:["Because the ",(0,s.jsx)(t.strong,{children:"LAMP Platform"})," is built around around a simple native core and a flexible WebView UI, any HTML/CSS/JavaScript code that works in a browser can work in the app."]}),"\n",(0,s.jsx)(t.p,{children:"Learning modules, surveys, cognitive tests, and interventions all use the same API and using a framework such as React makes it simple, for example, to create new interventions as needed with patient/participant feedback."}),"\n",(0,s.jsxs)(t.p,{children:["Any Javascript-based code can be added the LAMP Platform using the ActivitySpec API, as long as it uses ",(0,s.jsx)(t.code,{children:"window.postMessage()"})," and ",(0,s.jsx)(t.code,{children:"window.addEventListener()"})," API to receive the Activity settings and submit the ActivityEvent once complete."]}),"\n",(0,s.jsx)(t.p,{children:"Approximately ~40 lines of JavaScript + React code, shown on the left produces a na\xefve implementation of the Jewels game, shown on the right."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(63113).A+"",width:"3244",height:"1880"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["If you'd like to try creating your own, but don't have a ReactJS development environment, ",(0,s.jsxs)(t.strong,{children:["consider using ",(0,s.jsx)(t.a,{href:"https://codesandbox.io/",children:"CodeSandbox"})]}),", a free service."]})}),"\n",(0,s.jsx)(t.h1,{id:"specific-instructions-to-add-custom-activity",children:"Specific Instructions to add Custom Activity"}),"\n",(0,s.jsx)(t.p,{children:"To add a custom activity, the HTML page must be compressed in base64 and must be able to be accessed by the dashboard.\nTo do this, you can run this command on your html file:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"$ cat index.html | base64 > index.html.b64"})}),"\n",(0,s.jsxs)(t.p,{children:["In your Activity Spec DB document it should have an ",(0,s.jsx)(t.strong,{children:"executable"})," and a ",(0,s.jsx)(t.strong,{children:"settings"})," attribute.\nShould look something similiar to this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'"executable": "https://path/to/your/index.html.b64"\n"settings": {\n    "type": "object",\n    "properties": {\n      "settings": {\n        "title": "Activity Settings",\n        "type": "object",\n        "required": [\n          "totalTrials",\n          "maxTime"\n        ],\n        "properties": {\n          "totalTrials": {\n            "title": "Total Trials",\n            "description": "The number of trials.",\n            "type": "number",\n            "default": 20,\n            "minimum": 1,\n            "maximum": 100,\n            "ui:grid": {\n              "xs": 4\n            }\n          },\n          "maxTime": {\n            "title": "Max Time",\n            "description": "The time it takes to get to the stopsign in seconds",\n            "type": "number",\n            "default": 0.75,\n            "minimum": 0.1,\n            "maximum": 2,\n            "ui:grid": {\n              "xs": 4\n            }\n          }\n        }\n      }\n    }\n  },\n'})}),"\n",(0,s.jsx)(t.h1,{id:"custom-activity-html-file",children:"Custom Activity HTML file"}),"\n",(0,s.jsx)(t.h2,{id:"back-button-function-in-activity",children:"Back Button Function in Activity"}),"\n",(0,s.jsxs)(t.p,{children:["In your HTML document, include a function where the user can revert back to LAMP. The ",(0,s.jsx)(t.em,{children:"onclick"})," attribute should then call a parent postMessage."]}),"\n",(0,s.jsx)(t.p,{children:"Something like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"function clickedBackButton(){\n  console.log('clicked back button')\n  parent.postMessage(null, '*');\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"In that specific example, the postMessage is sent to the LAMP with no data."}),"\n",(0,s.jsx)(t.h2,{id:"initialized-settings-from-lamp",children:"Initialized Settings from LAMP"}),"\n",(0,s.jsxs)(t.p,{children:["Using the settings we added to the document, we can access these variables using the ",(0,s.jsx)(t.em,{children:"addEventListener()"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'window.addEventListener("message", (event) => {\n  // console.log(event)\n  settings = event.data.activity.settings\n\n  totalTrials = settings.totalTrials // the totalTrials settings can be accessed here\n\n  totalTrials = 20 //default\n  maxTime = settings.maxTime // the maxTime settings can be accessed here\n\n   \n}, false);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},63113:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Screen_Shot_2019-04-16_at_12.12.16_PM-289c1d28979a3911df0a34438f507d69.png"},71585:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/activity_spec_event-4079658d64bcccde57fec657a006dabc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);