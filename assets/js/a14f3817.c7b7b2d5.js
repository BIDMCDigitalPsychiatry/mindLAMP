"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2322],{46403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"data_science/cortex/features/primary/trips","title":"Trips","description":"computed from raw feature: cortex.raw.gps","source":"@site/docs/09-data_science/06-cortex/05-features/01-primary/08-trips.md","sourceDirName":"09-data_science/06-cortex/05-features/01-primary","slug":"/data_science/cortex/features/primary/trips","permalink":"/data_science/cortex/features/primary/trips","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/01-primary/08-trips.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1730910383000,"sidebarPosition":8,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Survey scores","permalink":"/data_science/cortex/features/primary/survey_scores"},"next":{"title":"Sleep Periods","permalink":"/data_science/cortex/features/primary/deprecated_features/sleep_periods"}}');var i=r(74848),s=r(28453);const a={},d="Trips",c={},o=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function l(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"trips",children:"Trips"})}),"\n",(0,i.jsxs)(t.p,{children:["computed from raw feature: ",(0,i.jsx)(t.code,{children:"cortex.raw.gps"})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Computes trips from GPS data. Trips are when a participant is traveling more than 10 kph. Any change in gps less than 10 kph or over more than 600 ms is considered stationary."}),"\n",(0,i.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time of a given trip."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time of a given trip."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"latitude"}),": (float, units: degrees) the latitude of the starting point of the trip."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"longitude"}),": (float, units: degrees) the longitude of the starting point of the trip."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"distance"}),": (float, units: km) the distance traveled on the trip."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markdown",children:'cortex.primary.trips.trips(id="U1234567890", start=0, end=cortex.now())\n'})}),"\n",(0,i.jsx)(t.p,{children:"Output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 0,\n  'duration': 1627067480000,\n  'data': [\n           {'start': 1607094903526, 'end': 1607094905476, 'latitude': 42.33786999329302, 'longitude': -71.0842230494398, 'distance': 0.008896610358911157},\n           {'start': 1607094907376, 'end': 1607094933999, 'latitude': 42.33787296688118, 'longitude': -71.08414299583944, 'distance': 0.015118418131814458},\n                 .\n                 .\n                 .\n           {'start': 1607094950000, 'end': 1607094950000, 'latitude': 42.3379491204939, 'longitude': -71.08427063527692, 'distance': 0.0028039384631051243}\n          ],\n  'has_raw_data': 1,\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);