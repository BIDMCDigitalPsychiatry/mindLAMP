"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[7570],{27106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"data_science/cortex/features/secondary/step_count","title":"Step Count","description":"This feature uses the new version of the lamp.steps sensor data from April 2022. To use this feature with older data, please use Cortex version 2022.03.11 or earlier.","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/13-step_count.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/step_count","permalink":"/data_science/cortex/features/secondary/step_count","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/13-step_count.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1740761949000,"sidebarPosition":13,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Screen Duration","permalink":"/data_science/cortex/features/secondary/screen_duration"},"next":{"title":"Survey Results","permalink":"/data_science/cortex/features/secondary/survey_results"}}');var r=n(74848),o=n(28453);const a={},i="Step Count",c={},d=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function l(e){const t={code:"code",em:"em",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"step-count",children:"Step Count"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"This feature uses the new version of the lamp.steps sensor data from April 2022. To use this feature with older data, please use Cortex version 2022.03.11 or earlier."})})}),"\n",(0,r.jsxs)(t.p,{children:["computed from raw feature: ",(0,r.jsx)(t.code,{children:"cortex.raw.steps"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsxs)(t.strong,{children:["Step data collected on Apple phones prior to version ",(0,r.jsx)(t.code,{children:"2023.5.2"})," of mindLAMP may be cumulative, producing inaccurate results. This problem can be solved by using argument ",(0,r.jsx)(t.code,{children:"data_type"}),"='pedometer'."]})})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Step count aggregates the number of steps."}),"\n",(0,r.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"resolution"}),": (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"data_type"}),": (str; values: ",(0,r.jsx)(t.code,{children:"health"}),", ",(0,r.jsx)(t.code,{children:"pedometer"}),", ",(0,r.jsx)(t.code,{children:"watch"}),"; default: ",(0,r.jsx)(t.code,{children:"health"}),") the source from which the step data is collected. ",(0,r.jsx)(t.code,{children:"health"})," is from the Health app (Apple) or GoogleFit app (Android); ",(0,r.jsx)(t.code,{children:"pedometer"})," is from the phone's accelerometer sensor and only works on Apple phones; and ",(0,r.jsx)(t.code,{children:"watch"})," is from an Apple watch device."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,r.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"value"}),": (int, units: None) the number of steps."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.step_count.step_count(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)\n'})}),"\n",(0,r.jsx)(t.p,{children:"Output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 0},\n           {'timestamp': 1607331600000, 'value': 1027},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 13208}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);