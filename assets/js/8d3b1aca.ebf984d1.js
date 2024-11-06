"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[9562],{11680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"data_science/cortex/features/secondary/screen_duration","title":"Screen Duration","description":"computed from primary feature: cortex.primary.screen_active","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/12-screen_duration.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/screen_duration","permalink":"/data_science/cortex/features/secondary/screen_duration","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/12-screen_duration.md","tags":[],"version":"current","lastUpdatedBy":"Matt Flathers","lastUpdatedAt":1730911240000,"sidebarPosition":12,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Nearby Device Count","permalink":"/data_science/cortex/features/secondary/nearby_device_count"},"next":{"title":"Step Count","permalink":"/data_science/cortex/features/secondary/step_count"}}');var s=n(74848),a=n(28453);const i={},c="Screen Duration",o={},d=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function l(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"screen-duration",children:"Screen Duration"})}),"\n",(0,s.jsxs)(t.p,{children:["computed from primary feature: ",(0,s.jsx)(t.code,{children:"cortex.primary.screen_active"}),"\ncomputed from raw feature: ",(0,s.jsx)(t.code,{children:"cortex.raw.screen_state"})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:'Screen duration is the sum of the time spent with the screen "on".'}),"\n",(0,s.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"resolution"}),": (int, units: ms) the resolution over which to compute features."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,s.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"}),": (int, units: ms) the screen duration."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.screen_duration.screen_duration(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 0,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 63720178},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 86218716}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);