"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[6592],{31456:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"deploy/recs","title":"Deployment Recommendations","description":"We encourage all self-deploying users to consult the legal and IT departments, as well as sign a Business Associate Agreement (BAA) with the cloud provider to comply with HIPAA regulations.","source":"@site/docs/07-deploy/02-recs.md","sourceDirName":"07-deploy","slug":"/deploy/recs","permalink":"/deploy/recs","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/02-recs.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1731507795000,"sidebarPosition":2,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Prerequisites for Deploying the LAMP Platform","permalink":"/deploy/prereqs"},"next":{"title":"Costs of Deploying the LAMP Platform","permalink":"/deploy/costs"}}');var n=o(74848),r=o(28453);const i={},a="Deployment Recommendations",l={},c=[{value:"Remote Access (WAF) Notes",id:"remote-access-waf-notes",level:3}];function d(e){const t={a:"a",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"deployment-recommendations",children:"Deployment Recommendations"})}),"\n",(0,n.jsx)(t.h1,{id:"disclosure",children:"Disclosure"}),"\n",(0,n.jsx)(t.p,{children:"We encourage all self-deploying users to consult the legal and IT departments, as well as sign a Business Associate Agreement (BAA) with the cloud provider to comply with HIPAA regulations."}),"\n",(0,n.jsx)(t.p,{children:"LAMP is completely free, open source software; as a result you are free to follow any or all steps that are suggested. However, we can only assure a successful deployment of the LAMP Platform if each required step is followed. If these steps are not implemented correctly, we are unable to guarantee LAMP will deploy properly. We are also unable to offer the technical support from our team for other deployments."}),"\n",(0,n.jsx)(t.h1,{id:"technical-requirements",children:"Technical Requirements"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"use of Docker is imperative to successful self-deployment"}),". A single Docker Stack file is used to automate single-node or multi-node deployments, and requires Docker Swarm (multi-node for cloud testing, integration, and production usage, or single-node for local testing or smaller deployments). The LAMP Platform has only been tested with Docker Swarm, so therefore our team is only equipped to provide support for those using Docker or Docker compatible services."]}),"\n",(0,n.jsxs)(t.p,{children:["We highly recommend the use of ",(0,n.jsx)(t.a,{href:"https://www.portainer.io/",children:"Portainer"})," as a Swarm Management Console to make it easier to troubleshoot failed deployments, rapidly test and integrate new components, and effectively monitor container logs and health. ",(0,n.jsx)(t.a,{href:"https://documentation.portainer.io/",children:"Read this documentation to learn more about Portainer"})," and how to configure and use it. We also recommend Traefik for managing service mesh routing and in-flight TLS encryption; additional Docker Stack files and instructions are provided for both in the self-deploy documentation."]}),"\n",(0,n.jsx)(t.h3,{id:"remote-access-waf-notes",children:"Remote Access (WAF) Notes"}),"\n",(0,n.jsx)(t.p,{children:'The mobile apps and browsers must make an initial connection to the hosted VersionCheck API (part of the App Gateway) before downloading the user interface component. If your organization chooses to submit separate copies of the mobile apps to the Apple/Google app stores, you will also be responsible for deploying the App Gateway within your organization as well. This also means your organization must "pin" the versions of components as accessed from the VersionCheck API. If your organization is NOT deploying an internal App Gateway (i.e if using the existing mindLAMP apps on the App Store) then you will be using the App Gateway as hosted by the Division of Digital Psychiatry. (This must be disclosed in security/IT diagrams.)'})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var s=o(96540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);