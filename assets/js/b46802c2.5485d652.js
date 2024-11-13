"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8254],{50891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"data_science/cortex/features/secondary/entropy","title":"Entropy","description":"computed from primary feature: cortex.primary.significant_locations","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/06-entropy.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/entropy","permalink":"/data_science/cortex/features/secondary/entropy","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/06-entropy.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1731507795000,"sidebarPosition":6,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Data Quality","permalink":"/data_science/cortex/features/secondary/data_quality"},"next":{"title":"Game Results","permalink":"/data_science/cortex/features/secondary/game_results"}}');var a=n(74848),s=n(28453);const i={},o="Entropy",c={},l=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function d(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"entropy",children:"Entropy"})}),"\n",(0,a.jsxs)(t.p,{children:["computed from primary feature: ",(0,a.jsx)(t.code,{children:"cortex.primary.significant_locations"}),"\ncomputed from raw feature: ",(0,a.jsx)(t.code,{children:"cortex.raw.gps"})]}),"\n",(0,a.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Entropy is a measure of how much a participant moves around to different locations. Higher entropy typically means that the participant's time is more evenly split between differnt locations. Assuming that p is an array holding the porportion of time at each location, entropy can be computed as follows:"}),"\n",(0,a.jsx)("img",{src:"https://latex.codecogs.com/svg.latex?\\small&space;\\sum_{i=0}^{n}-p[i]\\log(p[i])"}),"\n",(0,a.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"resolution"}),": (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,a.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"value"}),": (float) the entropy. If there is no gps data, entropy will be 'None'."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.entropy.entropy(id="U1234567890", start=1607072400000, end=1609232400000, resolution=86400000)\n'})}),"\n",(0,a.jsx)(t.p,{children:"Output:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 0.16071499652789484},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 0.8753883626144159}\n          ]\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);