"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[5333],{25848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"data_science/cortex/features/secondary/healthkit_sleep_duration","title":"Healthkit Sleep Duration","description":"computed from raw feature: cortex.raw.sleep","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/08-healthkit_sleep_duration.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/healthkit_sleep_duration","permalink":"/data_science/cortex/features/secondary/healthkit_sleep_duration","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/08-healthkit_sleep_duration.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731010294000,"sidebarPosition":8,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Game Results","permalink":"/data_science/cortex/features/secondary/game_results"},"next":{"title":"Hometime","permalink":"/data_science/cortex/features/secondary/hometime"}}');var s=n(74848),a=n(28453);const i={},o="Healthkit Sleep Duration",d={},l=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function c(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"healthkit-sleep-duration",children:"Healthkit Sleep Duration"})}),"\n",(0,s.jsxs)(t.p,{children:["computed from raw feature: ",(0,s.jsx)(t.code,{children:"cortex.raw.sleep"})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Healthkit sleep duration sums the durations from the ",(0,s.jsx)(t.code,{children:"lamp.sleep"}),' sensor. The "in_bed", "in_sleep", or "in_awake" durations can be summed. This data only comes from watches. Please refer to section on API Feature Types for more information.']}),"\n",(0,s.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"resolution"}),": (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"duration_type"}),': (str, default: "in bed", options: "in_bed", "in_sleep", "in_awake") the type of durations to sum. If an invalid duration type is passed, None will be returned.']}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,s.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"}),": (int, units: ms) the duration."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.healthkit_sleep_duration.healthkit_sleep_duration(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000, duration_type="in_bed")\n'})}),"\n",(0,s.jsx)(t.p,{children:"Output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': None},\n           {'timestamp': 1607331600000, 'value': 20000027},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 30040029}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);