"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2085],{69561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"data_science/cortex/features/secondary/deprecated_features/bluetooth_device_count","title":"Bluetooth Device Count","description":"computed from raw feature: cortex.raw.bluetooth","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/18-deprecated_features/02-bluetooth_device_count.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary/18-deprecated_features","slug":"/data_science/cortex/features/secondary/deprecated_features/bluetooth_device_count","permalink":"/data_science/cortex/features/secondary/deprecated_features/bluetooth_device_count","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/18-deprecated_features/02-bluetooth_device_count.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731010294000,"sidebarPosition":2,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"SMS Number","permalink":"/data_science/cortex/features/secondary/deprecated_features/sms_number"},"next":{"title":"Sleep Duration","permalink":"/data_science/cortex/features/secondary/deprecated_features/sleep_duration"}}');var o=n(74848),s=n(28453);const a={},c="Bluetooth Device Count",i={},d=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function l(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"bluetooth-device-count",children:"Bluetooth Device Count"})}),"\n",(0,o.jsxs)(t.p,{children:["computed from raw feature: ",(0,o.jsx)(t.code,{children:"cortex.raw.bluetooth"})]}),"\n",(0,o.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Bluetooth device count sums the number of bluetooth device connections."}),"\n",(0,o.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"resolution"}),": (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features."]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,o.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"value"}),": (int, units: None) the number of unique bluetooth devices."]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.bluetooth_device_count.bluetooth_device_count(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)\n'})}),"\n",(0,o.jsx)(t.p,{children:"Output:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 0},\n           {'timestamp': 1607331600000, 'value': 6},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 3}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);