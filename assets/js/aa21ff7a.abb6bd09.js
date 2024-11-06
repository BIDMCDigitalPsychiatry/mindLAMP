"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[9634],{85891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"data_science/cortex/features/secondary/inactive_duration","title":"Inactive Duration","description":"computed from raw feature: cortex.raw.screen_state and cortex.raw.accelerometer","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/10-inactive_duration.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/inactive_duration","permalink":"/data_science/cortex/features/secondary/inactive_duration","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/10-inactive_duration.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1730910383000,"sidebarPosition":10,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Hometime","permalink":"/data_science/cortex/features/secondary/hometime"},"next":{"title":"Nearby Device Count","permalink":"/data_science/cortex/features/secondary/nearby_device_count"}}');var a=n(74848),i=n(28453);const s={},c="Inactive Duration",o={},d=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function l(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"inactive-duration",children:"Inactive Duration"})}),"\n",(0,a.jsxs)(t.p,{children:["computed from raw feature: ",(0,a.jsx)(t.code,{children:"cortex.raw.screen_state"})," and ",(0,a.jsx)(t.code,{children:"cortex.raw.accelerometer"})]}),"\n",(0,a.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Inactive duration is the sum of the inactive periods. Can be used as an estimate of sleep."}),"\n",(0,a.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"resolution"}),": (int, units: ms) the resolution over which to compute features."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,a.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"value"}),": (int, units: ms) the inactive duration."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.inactive_duration.inactive_duration(id="U1234567890", start=1607072400000, end=1609232400000, resolution=86400000)\n'})}),"\n",(0,a.jsx)(t.p,{children:"Output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 0,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 38720178},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 12218716}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);