"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8686],{67754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"data_science/cortex/features/secondary/data_quality","title":"Data Quality","description":"computed from raw feature: cortex.raw.gps or cortex.raw.accelerometer","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/05-data_quality.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/data_quality","permalink":"/data_science/cortex/features/secondary/data_quality","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/05-data_quality.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1730901961000,"sidebarPosition":5,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Call Number","permalink":"/data_science/cortex/features/secondary/call_number"},"next":{"title":"Entropy","permalink":"/data_science/cortex/features/secondary/entropy"}}');var r=a(74848),i=a(28453);const s={},o="Data Quality",c={},l=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function d(e){const t={code:"code",em:"em",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"data-quality",children:"Data Quality"})}),"\n",(0,r.jsxs)(t.p,{children:["computed from raw feature: ",(0,r.jsx)(t.code,{children:"cortex.raw.gps"})," or ",(0,r.jsx)(t.code,{children:"cortex.raw.accelerometer"})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Data quality computes the percent of the time that a feature achieved a certain data quality. This feature currently supports accelerometer and gps."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Note: Data quality in one of two ways 1) by pulling all raw data from 'start' to 'end' and looping over each time bin to determine if a datapoint with that timestamp in the bin exists or 2) by looping over each time bin and trying to pull a single datapoint from that time bin using the API to determine if a timestamp in that bin exists. The threshold for switching between these methods has been set to 150 bins (ie less than 150 and method #2 will be used, else method #1) to try to increase processing speed."})}),"\n",(0,r.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"id"}),": (str) participant id."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"start"}),": (units: ms) the start time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"end"}),": (units: ms) the end time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"resolution"}),": (units: ms) the resolution over which to compute features."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"feature"}),': (str, options: "gps" or "accelerometer") the feature to compute data quality. If something other than "gps" or "accelerometer" is passed None will be returned.']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"bin_size"}),': (float, units: ms, default: -1) the width of each bin. If set to -1 then default parameters will be used which are 1000 ms (1s) for "accelerometer" and 1000 * 600 ms (10min) for "gps".']}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,r.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"value"}),": (float, units: None) the percent of the time that there was at least one datapoint in each bin of size ",(0,r.jsx)(t.code,{children:"bin_size"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.data_quality.data_quality(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000, feature="gps", bin_size=10000)\n'})}),"\n",(0,r.jsx)(t.p,{children:"Output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 1.0},\n           {'timestamp': 1607331600000, 'value': 0.789291823},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 0.121212344}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);