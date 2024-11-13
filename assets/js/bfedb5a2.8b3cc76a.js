"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[4106],{98162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"data_science/cortex/features/secondary/deprecated_features/sleep_duration","title":"Sleep Duration","description":"To use this feature, please use Cortex version 2022.03.11 or earlier.","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/18-deprecated_features/13-sleep_duration.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary/18-deprecated_features","slug":"/data_science/cortex/features/secondary/deprecated_features/sleep_duration","permalink":"/data_science/cortex/features/secondary/deprecated_features/sleep_duration","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/18-deprecated_features/13-sleep_duration.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1731507795000,"sidebarPosition":13,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Bluetooth Device Count","permalink":"/data_science/cortex/features/secondary/deprecated_features/bluetooth_device_count"},"next":{"title":"Data Quality","permalink":"/data_science/cortex/visualizations/data_quality"}}');var s=r(74848),a=r(28453);const i={},o="Sleep Duration",d={},c=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function l(e){const t={code:"code",em:"em",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"sleep-duration",children:"Sleep Duration"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"To use this feature, please use Cortex version 2022.03.11 or earlier."})})}),"\n",(0,s.jsxs)(t.p,{children:["computed from primary feature: ",(0,s.jsx)(t.code,{children:"cortex.primary.sleep_periods"}),"\ncomputed from raw feature: ",(0,s.jsx)(t.code,{children:"cortex.raw.accelerometer"})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Sleep duration is the sum of the sleep periods."}),"\n",(0,s.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"resolution"}),": (int, units: ms) the resolution over which to compute features."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,s.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"}),": (int, units: ms) the sleep duration."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.sleep_duration.sleep_duration(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 0,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 38720178},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 12218716}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);