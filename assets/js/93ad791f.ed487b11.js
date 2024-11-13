"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[1545],{83027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"data_science/cortex/features/primary/screen_active","title":"Screen Active","description":"computed from raw feature: cortex.raw.device_state","source":"@site/docs/09-data_science/06-cortex/05-features/01-primary/04-screen_active.md","sourceDirName":"09-data_science/06-cortex/05-features/01-primary","slug":"/data_science/cortex/features/primary/screen_active","permalink":"/data_science/cortex/features/primary/screen_active","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/01-primary/04-screen_active.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1731507795000,"sidebarPosition":4,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Game level scores","permalink":"/data_science/cortex/features/primary/game_level_scores"},"next":{"title":"Significant Locations","permalink":"/data_science/cortex/features/primary/sig_locs"}}');var s=n(74848),i=n(28453);const a={},c="Screen Active",d={},o=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function l(e){const t={code:"code",em:"em",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"screen-active",children:"Screen Active"})}),"\n",(0,s.jsxs)(t.p,{children:["computed from raw feature: ",(0,s.jsx)(t.code,{children:"cortex.raw.device_state"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:['Note: "lamp.screen_state" is now deprecated and has been replaced by "lamp.device_state". To preserve backwards compatability, Cortex will pull both "lamp.screen_state" and "lamp.device_state" events and merge them into the single raw data stream ',(0,s.jsx)(t.code,{children:"cortex.raw.device_state"}),"."]})}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Using ",(0,s.jsx)(t.code,{children:"screen_state"}),' metrics, bouts of time where the screen_state is continously in the "on" state are computed. The value --\x3e representation mapping is as follows:']}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'0 --\x3e "screen_on"'}),"\n",(0,s.jsx)(t.li,{children:'1 --\x3e "screen_off"'}),"\n",(0,s.jsx)(t.li,{children:'2 --\x3e "locked"'}),"\n",(0,s.jsx)(t.li,{children:'3 --\x3e "unlocked"'}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"start"}),': (int, units: ms) the start time of a given bout when the phone is "on".']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time of a given bout."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"duration"}),": (int, units: ms) the duration of the bout (ie ",(0,s.jsx)(t.code,{children:"start - end"}),")."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:'cortex.primary.screen_active.screen_active(id="U1234567890", start=1607072400000, end=cortex.now())\n'})}),"\n",(0,s.jsx)(t.p,{children:"Output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'data': [\n           {'start': 1607094896733, 'end': 1607100072241, 'duration': 5175508},\n           {'start': 1607100076065, 'end': 1607100088981, 'duration': 12916},\n                 .\n                 .\n                 .\n           {'start': 1607103351139, 'end': 1607108478253, 'duration': 5127114}\n          ],\n  'has_raw_data': 1,\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);