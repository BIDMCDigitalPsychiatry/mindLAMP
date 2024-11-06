"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[5067],{39088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"data_science/cortex/utils/miscellaneous","title":"Miscellaneous","description":"utils.miscfunctions.getos_version","source":"@site/docs/09-data_science/06-cortex/07-utils/07-miscellaneous.md","sourceDirName":"09-data_science/06-cortex/07-utils","slug":"/data_science/cortex/utils/miscellaneous","permalink":"/data_science/cortex/utils/miscellaneous","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/07-utils/07-miscellaneous.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1730901961000,"sidebarPosition":7,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Notifications","permalink":"/data_science/cortex/utils/notifications"},"next":{"title":"Adding Cortex Features","permalink":"/data_science/cortex/developing_cortex"}}');var i=n(74848),a=n(28453);const o={},c="Miscellaneous",r={},l=[{value:"<code>utils.misc_functions.get_os_version</code>",id:"utilsmisc_functionsget_os_version",level:2},{value:"Args",id:"args",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"miscellaneous",children:"Miscellaneous"})}),"\n",(0,i.jsx)(t.h2,{id:"utilsmisc_functionsget_os_version",children:(0,i.jsx)(t.code,{children:"utils.misc_functions.get_os_version"})}),"\n",(0,i.jsx)(t.p,{children:"Attempts to parse the lamp.analytics data to get the phone OS, version and device type information."}),"\n",(0,i.jsx)(t.h4,{id:"args",children:"Args"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"participant_id"}),": (string) the participant id."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:'A dictionary comtaining "device_type", "os_version", and "phone_type". Each parameter will be None if it cannot be parsed or if there is no lamp.analytics data.'}),"\n",(0,i.jsx)(t.p,{children:"Please note that the lamp.analytics 'user_agent' information was updated in Spring 2022. This code will not work with older data."}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markdown",children:'cortex.utils.misc_functions.get_os_version("U1234567890")\n'})}),"\n",(0,i.jsx)(t.p,{children:"Output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markdown",children:'{\n  "device_type": "iOS",\n  "os_version": "14.7.1",\n  "phone_type": "iPhone12,1"\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);