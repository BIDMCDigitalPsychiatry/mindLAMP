"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[7900],{18667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"data_science/cortex/features/secondary/call_duration","title":"Call Duration","description":"computed from raw feature: cortex.raw.telephony","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/03-call_duration.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/call_duration","permalink":"/data_science/cortex/features/secondary/call_duration","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/03-call_duration.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1730910383000,"sidebarPosition":3,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Call Degree","permalink":"/data_science/cortex/features/secondary/call_degree"},"next":{"title":"Call Number","permalink":"/data_science/cortex/features/secondary/call_number"}}');var a=t(74848),i=t(28453);const l={},s="Call Duration",o={},c=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function d(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"call-duration",children:"Call Duration"})}),"\n",(0,a.jsxs)(n.p,{children:["computed from raw feature: ",(0,a.jsx)(n.code,{children:"cortex.raw.telephony"})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Call duration sums the time spent on calls."}),"\n",(0,a.jsx)(n.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"resolution"}),": (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"call_direction"}),' : (string, default: "all") whether to compute for incoming ("incoming"), outgoing ("outgoing"), or\nall ("all") types of calls.']}),"\n",(0,a.jsxs)(n.li,{children:["(deprecated) ",(0,a.jsx)(n.code,{children:"incoming"}),": (boolean, default: True) whether to compute for incoming (True) or outgoing (False) calls.\nOverrides call_direction if not None."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"data",children:"Data"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,a.jsx)(n.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"value"}),": (float, units: s) the call duration."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:'cortex.secondary.call_duration.call_duration(call_direction="incoming", id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 111},\n           {'timestamp': 1607331600000, 'value': 0},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 7}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);