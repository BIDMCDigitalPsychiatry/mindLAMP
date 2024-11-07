"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[4060],{20835:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"deploy/troubleshooting","title":"Troubleshooting Deployment","description":"This page contains fixes for potential issues you may encounter when using LAMP. However, it is not comprehensive. If you encounter an issue you are unable to resolve with the help of this page, please help us improve by posting your issue at community.lamp.digital","source":"@site/docs/07-deploy/09-troubleshooting.md","sourceDirName":"07-deploy","slug":"/deploy/troubleshooting","permalink":"/deploy/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/09-troubleshooting.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731010294000,"sidebarPosition":9,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Testing the LAMP Platform","permalink":"/deploy/testing"},"next":{"title":"Complex Password Requirements","permalink":"/deploy/passwords"}}');var s=o(74848),i=o(28453);const r={},a="Troubleshooting Deployment",l={},c=[{value:"Large Logs",id:"large-logs",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"troubleshooting-deployment",children:"Troubleshooting Deployment"})}),"\n",(0,s.jsxs)(n.p,{children:["This page contains fixes for potential issues you may encounter when using LAMP. However, it is not comprehensive. If you encounter an issue you are unable to resolve with the help of this page, please help us improve by posting your issue at ",(0,s.jsx)(n.a,{href:"https://community.lamp.digital",children:"community.lamp.digital"})]}),"\n",(0,s.jsx)(n.h2,{id:"large-logs",children:"Large Logs"}),"\n",(0,s.jsx)(n.p,{children:"LAMP-server is designed for long uptimes and detailed logging. An unfortunate side-effect of this is that, especially over a long period of time, logging files can grow large and affect available disk space, negatively impacting docker performance."}),"\n",(0,s.jsxs)(n.p,{children:["Check your disk space usage in the terminal of your ",(0,s.jsx)(n.code,{children:"lamp-server"})," node with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"df\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If it is 100%, navigate to your docker directory (try ",(0,s.jsx)(n.code,{children:"cd /var/lib/docker"}),") and run"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"   du -h --max-depth=1 containers/\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command will list your containers space usage. If LAMP-server is very large (in excess of 10gb), you can attempt to clean the logs by running"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"    docker stop YOUR_SERVER_ONTAINER_ID_HERE && docker rm YOUR_CONTAINER_ID_HERE\n    \n"})}),"\n",(0,s.jsx)(n.p,{children:"This will stop and remove your container, at which point docker swarm should spin up a new one."}),"\n",(0,s.jsx)(n.p,{children:"To prevent this issue from happening in the future, add the following to your docker compose file. The docs YAML file has this added as of September 2nd, so this bug should not occur if you began using LAMP after this date."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'    logging:\n      options:\n        max-size: "10m"\n        max-file: "3"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var t=o(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);