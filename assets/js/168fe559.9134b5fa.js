"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[6052],{35756:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"develop/cron_jobs","title":"Scheduling Tasks with Cron Jobs in LAMP","description":"While using LAMP, you may wish to schedule events or scripts to run on a regular basis - for example, analysis scripts or scripts that schedule study participants for different studies based on different criteria.","source":"@site/docs/08-develop/08-cron_jobs.md","sourceDirName":"08-develop","slug":"/develop/cron_jobs","permalink":"/develop/cron_jobs","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/08-cron_jobs.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1730910383000,"sidebarPosition":8,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"App Gateway","permalink":"/develop/app_gateway"},"next":{"title":"Creating a Github Release","permalink":"/develop/Repositories/creating-github-release"}}');var t=n(74848),o=n(28453);const i={},a="Scheduling Tasks with Cron Jobs in LAMP",c={},l=[{value:"1. Create a manager service",id:"1-create-a-manager-service",level:4},{value:"2. Create the script service.",id:"2-create-the-script-service",level:4}];function d(e){const r={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"scheduling-tasks-with-cron-jobs-in-lamp",children:"Scheduling Tasks with Cron Jobs in LAMP"})}),"\n",(0,t.jsx)(r.p,{children:"While using LAMP, you may wish to schedule events or scripts to run on a regular basis - for example, analysis scripts or scripts that schedule study participants for different studies based on different criteria."}),"\n",(0,t.jsxs)(r.p,{children:["If you are using Portainer to support LAMP, you can use the following method and the ",(0,t.jsx)(r.a,{href:"https://github.com/crazy-max/swarm-cronjob",children:"swarm-cronjob"})," project to schedule these scripts to run regularly."]}),"\n",(0,t.jsx)(r.h4,{id:"1-create-a-manager-service",children:"1. Create a manager service"}),"\n",(0,t.jsx)(r.p,{children:"To create a manager service, add the following service to a stack (if you do not have a dedicated cron stack, you may wish to create one).It should look something like this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'  manager:\n    image: crazymax/swarm-cronjob\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    environment:\n      TZ: "America/New_York"\n'})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Image should be ",(0,t.jsx)(r.code,{children:"crazymax/swarm-cronjob"})]}),"\n",(0,t.jsxs)(r.li,{children:["Volume should be ",(0,t.jsx)(r.code,{children:"/var/run/docker.sock:/var/run/docker.sock:ro"})]}),"\n",(0,t.jsx)(r.li,{children:"The TZ env variable should be set to your local timezone - this will affect the times your scripts run if you specify an hour for them to run."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Only do this step ",(0,t.jsx)(r.strong,{children:"ONCE"}),", regardless of how many services you plan to create."]}),"\n",(0,t.jsx)(r.h4,{id:"2-create-the-script-service",children:"2. Create the script service."}),"\n",(0,t.jsx)(r.p,{children:"Second, create the service that will run your script. It should look similar to this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'  my_analysis:\n    image: python:3.8\n    command: [\'python\',\'/script/my_cool_script.py\']\n    environment:\n      TZ: "America/New_York"\n      ANALYSIS_NAME: "My Analysis"\n    volumes:\n      - /usr/bin:/script\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    deploy:\n      mode: replicated\n      replicas: 0\n      restart_policy:\n        condition: none\n      labels:\n        swarm.cronjob.enable: "true"\n        swarm.cronjob.schedule: "0 3 * * *"\n        swarm.cronjob.skip-running: "false"\n'})}),"\n",(0,t.jsx)(r.p,{children:"N.B."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"To install additional modules not included with the standard python3.8 image (for example), you may wish to run pip install commands through a shell script."}),"\n",(0,t.jsxs)(r.li,{children:["Use swarm.cronjob.schedule to enter your ",(0,t.jsx)(r.a,{href:"https://crontab.guru/",children:"cron string"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Do this step for each service you plan to create. After you update the stack, the script should begin running as scheduled. The service above, for instance, will run at daily at 3 AM."})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var s=n(96540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);