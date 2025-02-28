"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[4232],{4838:(e,o,t)=>{t.d(o,{A:()=>r});const r=t.p+"assets/images/AWS_Map-79cec1b4cd8758040aa0139dff4fdd88.png"},21512:(e,o,t)=>{t.d(o,{A:()=>r});const r=t.p+"assets/images/AWS_Mini_Map-62a6866f932dfcc514d1ab82ddf76dad.png"},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var r=t(96540);const n={},i=r.createContext(n);function s(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:o},e.children)}},46396:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"deploy/provisioning","title":"Provisioning the LAMP Platform","description":"BIDMC Digital Psychiatry\'s LAMP Platform","source":"@site/docs/07-deploy/04-provisioning.md","sourceDirName":"07-deploy","slug":"/deploy/provisioning","permalink":"/deploy/provisioning","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/04-provisioning.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1740761949000,"sidebarPosition":4,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Costs of Deploying the LAMP Platform","permalink":"/deploy/costs"},"next":{"title":"Preparing Resources on AWS","permalink":"/deploy/aws"}}');var n=t(74848),i=t(28453);const s={},a="Provisioning the LAMP Platform",d={},c=[{value:"Segmenting Compute Resources",id:"segmenting-compute-resources",level:3}];function l(e){const o={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"provisioning-the-lamp-platform",children:"Provisioning the LAMP Platform"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:t(21512).A+"",width:"5641",height:"3695"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"BIDMC Digital Psychiatry's LAMP Platform"})}),"\n",(0,n.jsx)(o.p,{children:"The LAMP Platform is cloud-agnostic and can be hosted on Amazon Web Services, Microsoft Azure, Google Cloud, any other cloud provider, or self-hosted on-prem."}),"\n",(0,n.jsx)(o.p,{children:"The LAMP Platform requires computing and storage resources (i.e. AWS EC2 and EBS), along with external network access;  managed services from cloud providers tend to provide robust and maintenance-free bring-up for the LAMP Platform and are recommended over self-hosting on-prem. Furthermore, additional services such as Amazon CloudFront or CloudFlare allow less expensive and more effective caching and edge content delivery of the mindLAMP Dashboard and UI without the need for multi-region deployments."}),"\n",(0,n.jsxs)(o.p,{children:["A single Docker Stack file (",(0,n.jsx)(o.code,{children:"docker-compose.yml"}),") is used to automate single-node or multi-node deployments, and requires Docker Swarm (multi-node for cloud testing, integration, and production usage, or single-node for local testing or smaller deployments). Though possible to use Kubernetes or Terraform to manage larger scale deployments, the LAMP Platform has only been tested with Docker Swarm."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.strong,{children:["We provide additional examples for (1) local development, and (2) Amazon Web Services.\nIf you or your organization have further questions about choosing a cloud provider or deploying on-prem, ",(0,n.jsx)(o.a,{href:"mailto:team@digitalpsych.org",children:"please contact us."})]})}),"\n",(0,n.jsx)(o.h3,{id:"segmenting-compute-resources",children:"Segmenting Compute Resources"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:t(4838).A+"",width:"4758",height:"3133"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"BIDMC Digital Psychiatry's LAMP Platform"})}),"\n",(0,n.jsx)(o.p,{children:"When developing or testing the LAMP Platform, it is useful and effective to segment compute resources and develop natively in the cloud (or on-prem). Consider carefully how your organization expects to the use the LAMP Platform and segregate computing resources (nodes) to reduce cost and improve performance."}),"\n",(0,n.jsx)(o.p,{children:"The LAMP Platform source code repositories are hosted on GitHub and use the GitHub Actions and GitHub Packages features to quickly perform continuous testing, integration, and deployment. As code is pull requested from a feature branch into the master branch, it should pass a round of code review and pass any/all unit tests. Once the code is merged, the automated CI/CD will prepare and upload Docker images."}),"\n",(0,n.jsxs)(o.p,{children:["We highly recommend the use of ",(0,n.jsx)(o.code,{children:"Portainer"})," to remotely manage your Docker Swarm nodes and container health, as well as ",(0,n.jsx)(o.code,{children:"Traefik"})," for managing service mesh routing and in-flight TLS encryption; additional Docker Stack files and instructions are provided for both. The ",(0,n.jsx)(o.code,{children:"Traefik"})," router interfaces with Docker Swarm and your DNS provider to automatically manage internal and external access to services, according to the configuration in the Docker Stack files provided. To monitor node health and container resource metrics, we recommend ",(0,n.jsx)(o.code,{children:"Netdata"})," and have included it in the stack file below."]}),"\n",(0,n.jsxs)(o.p,{children:["If you'd like to follow along but would like to test the deployment out first, or don't have provisioned resources yet, ",(0,n.jsxs)(o.strong,{children:["consider using ",(0,n.jsx)(o.a,{href:"https://labs.play-with-docker.com/",children:"Play With Docker"}),", a free service"]})," from the Docker team where you can provision a temporary Swarm cluster."]})]})}function m(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);