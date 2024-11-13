"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[9262],{81244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"data_science/data","title":"How does the LAMP Data Format Work?","description":"\u2460","source":"@site/docs/09-data_science/03-data.md","sourceDirName":"09-data_science","slug":"/data_science/data","permalink":"/data_science/data","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/03-data.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1731507795000,"sidebarPosition":3,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Sensor Types","permalink":"/data_science/data_types/sensor_types"},"next":{"title":"Preparing to Analyze Your Data in Python","permalink":"/data_science/python"}}');var i=n(74848),s=n(28453);const r={},d="How does the LAMP Data Format Work?",c={},l=[{value:"\u2460",id:"",level:2},{value:"\u2461",id:"-1",level:2},{value:"\u2462",id:"-2",level:2},{value:"\u2463",id:"-3",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"how-does-the-lamp-data-format-work",children:"How does the LAMP Data Format Work?"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(4344).A+"",width:"2129",height:"1245"})}),"\n",(0,i.jsx)(t.h2,{id:"",children:"\u2460"}),"\n",(0,i.jsx)(t.p,{children:"Activity Specification"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Each activity that patients/participants can interact with is defined and encapsulated in an ",(0,i.jsx)(t.strong,{children:"ActivitySpec"})," that contains the applet (written in HTML), along with a schema to describe the input and output data."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"-1",children:"\u2461"}),"\n",(0,i.jsx)(t.p,{children:"Temporal Slices"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["When a patient begins an interactive session with any activity, session-wide data about who, what, and when is recorded. Each user tap within is then automatically validated and converted into a time-indexed standardized format called a ",(0,i.jsx)(t.strong,{children:"TemporalSlice"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"This means data processing code can be written just once and work for any activity or any user."}),"\n",(0,i.jsx)(t.h2,{id:"-2",children:"\u2462"}),"\n",(0,i.jsx)(t.p,{children:"Event Stream"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["When the user completes the interactive session, all the ",(0,i.jsx)(t.strong,{children:"TemporalSlice"}),"s are packaged into chronologically ordered ",(0,i.jsx)(t.strong,{children:"ActivityEvent"}),"s indexed under the user's ",(0,i.jsx)(t.strong,{children:"Participant"})," object as a low-latency stream of continuously generated data."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"-3",children:"\u2463"}),"\n",(0,i.jsx)(t.p,{children:"Time Series Query"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The researcher/data scientist can query this data at any desired temporal resolution (e.g. one millisecond, one day, one year, etc.) and filter by the type of activity (e.g. Survey, Jewels, etc.). The query can be manipulated using map/reduce document transforms and listened to notify client code directly with real-time updates."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Example JSONata"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'// Get all participants\n$Participant_all("study").{ id, timestamp }\n\n// Get all activities\n$Activity_all("study").{ id, ... }\n\n// Get all activity events for all participants\n$Participant_all("study").$merge([$ActivityEvent_all(id), { "#parent": id }])[$exists(timestamp)]\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},4344:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data-d7d27d596920e6b8895fb42154bc3811.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var a=n(96540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);