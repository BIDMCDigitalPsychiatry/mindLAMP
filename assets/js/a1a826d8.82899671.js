"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2030],{71629:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"data_science/cortex/features/primary/overview","title":"Primary Feature Overview","description":"Primary features in cortex are derived from raw data and typically contain multiple bouts / periods.","source":"@site/docs/09-data_science/06-cortex/05-features/01-primary/01-overview.md","sourceDirName":"09-data_science/06-cortex/05-features/01-primary","slug":"/data_science/cortex/features/primary/overview","permalink":"/data_science/cortex/features/primary/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/01-primary/01-overview.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1730901961000,"sidebarPosition":1,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Advanced Usage","permalink":"/data_science/cortex/advanced"},"next":{"title":"Accelerometer Jerk","permalink":"/data_science/cortex/features/primary/acc_jerk"}}');var n=r(74848),s=r(28453);const i={},c="Primary Feature Overview",d={},o=[{value:"&#39;has_raw_data&#39;",id:"has_raw_data",level:3}];function l(e){const a={code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"primary-feature-overview",children:"Primary Feature Overview"})}),"\n",(0,n.jsx)(a.p,{children:"Primary features in cortex are derived from raw data and typically contain multiple bouts / periods."}),"\n",(0,n.jsx)(a.h3,{id:"has_raw_data",children:"'has_raw_data'"}),"\n",(0,n.jsxs)(a.p,{children:["All primary features will return a ",(0,n.jsx)(a.code,{children:"has_raw_data"})," along with the ",(0,n.jsx)(a.code,{children:"data"})," which is whether any raw datapoints exist. Some features can return the same result if there is / is not raw data, so this flag reduces ambiguity."]}),"\n",(0,n.jsx)(a.p,{children:"For example, consider screen_active (the bouts where the screen is on):"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-markdown",children:'cortex.primary.screen_active.screen_active(id="U1234567890", start=1607072400000, end=cortex.now())\n'})}),"\n",(0,n.jsx)(a.p,{children:"If there are screen on and off events, the data may look something like this:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'data': [\n           {'start': 1607094896733, 'end': 1607100072241, 'duration': 5175508},\n           {'start': 1607100076065, 'end': 1607100088981, 'duration': 12916},\n                 .\n                 .\n                 .\n           {'start': 1607103351139, 'end': 1607108478253, 'duration': 5127114}\n          ],\n  'has_raw_data': 1,\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["If there is no device_state data, ",(0,n.jsx)(a.code,{children:"screen_active"})," will return the following:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'data': [\n          ],\n  'has_raw_data': 0,\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:'However, if there is device_state data, but only "screen_off" events (so there are no bouts where the screen is "on") the following will be returned:'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'data': [\n          ],\n  'has_raw_data': 1,\n}\n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>c});var t=r(96540);const n={},s=t.createContext(n);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);