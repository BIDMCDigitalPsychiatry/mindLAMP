"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[6860],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}},90421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"deploy/costs","title":"Costs of Deploying the LAMP Platform","description":"The components of the LAMP Platform rely on IT infrastructure that can be self-hosted by your organization (sometimes called \\"on-prem\\") or hosted by a cloud provider such as Amazon or Google.","source":"@site/docs/07-deploy/03-costs.md","sourceDirName":"07-deploy","slug":"/deploy/costs","permalink":"/deploy/costs","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/03-costs.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1740761949000,"sidebarPosition":3,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Deployment Recommendations","permalink":"/deploy/recs"},"next":{"title":"Provisioning the LAMP Platform","permalink":"/deploy/provisioning"}}');var i=n(74848),r=n(28453);const o={},d="Costs of Deploying the LAMP Platform",l={},a=[{value:"Factors that Influence Provisioning of Compute and Storage Resources.",id:"factors-that-influence-provisioning-of-compute-and-storage-resources",level:2},{value:"Example Use-Cases and Their Associated Cloud Computing Costs.",id:"example-use-cases-and-their-associated-cloud-computing-costs",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"costs-of-deploying-the-lamp-platform",children:"Costs of Deploying the LAMP Platform"})}),"\n",(0,i.jsx)(t.p,{children:'The components of the LAMP Platform rely on IT infrastructure that can be self-hosted by your organization (sometimes called "on-prem") or hosted by a cloud provider such as Amazon or Google.'}),"\n",(0,i.jsxs)(t.p,{children:["If you'd like to deploy your organization's instance of the LAMP Platform on a cloud provider, please consult with your legal and IT departments first, and ",(0,i.jsx)(t.strong,{children:"always ensure that you have signed a Business Associate Agreement"})," (BAA) with the cloud provider to ",(0,i.jsx)(t.strong,{children:"comply with HIPAA"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"factors-that-influence-provisioning-of-compute-and-storage-resources",children:"Factors that Influence Provisioning of Compute and Storage Resources."}),"\n",(0,i.jsx)(t.p,{children:"There are a few factors that need to be accounted when determining how to deploy the components explained above, as well as how high your monthly costs may be."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Computing:"})," The components of the LAMP Platform are highly efficient and won't need much computing power; however, at minimum they require ",(0,i.jsx)(t.strong,{children:"a single dual-core node with at least 2 gigabytes of memory."})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Storage:"})," The data collection rate for the LAMP Platform varies significantly depending on usage needs, spanning from a minimum of ",(0,i.jsx)(t.strong,{children:"250 gigabytes of low-throughput (HDD) storage"})," to a recommended ",(0,i.jsx)(t.strong,{children:"4 terabytes of high-throughput (SSD) storage."})]}),"\n",(0,i.jsxs)(t.p,{children:["If you are collecting digital phenotyping data, using the integrated development environments, or scheduling intervention delivery/data analysis scripts, the minimum requirements ",(0,i.jsx)(t.strong,{children:"WILL NOT"})," be sufficient."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Network:"})," The network bandwidth of the LAMP Platform varies significantly depending on your organization's size and study/clinic requirements; at minimum you must have single virtual private endpoint (i.e. firewall) with a bandwidth of ",(0,i.jsx)(t.strong,{children:"at least 1 Gbps"}),", to a recommended ",(0,i.jsx)(t.strong,{children:"10 Gbps"})," to adequately handle sustained multi-user loads."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In all cases, the most costly and intensive part of deploying and maintaining the LAMP Platform will be storing the data."}),"\n",(0,i.jsx)(t.h2,{id:"example-use-cases-and-their-associated-cloud-computing-costs",children:"Example Use-Cases and Their Associated Cloud Computing Costs."}),"\n",(0,i.jsxs)(t.p,{children:["When hosting the LAMP Platform with a cloud provider, your monthly costs may vary significantly based on the requirements explained previously. ",(0,i.jsx)(t.a,{href:"https://calculator.aws/#/estimate?id=f27215a7bb211d98cdfc0b2250888241299c41a9",children:"Here are two example configurations with the Amazon Web Services (AWS) cloud provider:"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:'"I run a digital clinic with about ~15 patients and don\'t intend to use advanced features such as digital phenotyping (sensor data) collection or Automations."'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Computing:"})," 1 node, 2 vCPU, 2 GB RAM"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Storage:"})," 250 GB, no snapshots"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Network:"})," Up to 10 Gbps"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Total Cost: ~$35.00/mo"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:'"I run multiple research studies with 200+ patients and intend to collect digital phenotyping data at a high frequency, develop and use machine learning algorithms through the Automations framework, and more advanced features."'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Computing:"})," 2 nodes, 16 vCPU, 32 GB RAM"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Storage:"})," 8.0 TB, automated monthly snapshots"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Network:"})," 25 Gbps"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Total Cost: ~$1,500.00/mo"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Please note that it is currently not yet possible to configure specific sensors to operate at specific frequencies. ",(0,i.jsx)(t.strong,{children:"This feature is coming soon but not available today."})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Specification"}),(0,i.jsx)(t.th,{children:"vCPU"}),(0,i.jsx)(t.th,{children:"RAM (GB)"}),(0,i.jsx)(t.th,{children:"SSD (TB)"}),(0,i.jsx)(t.th,{children:"EBS"}),(0,i.jsx)(t.th,{children:"EC2"}),(0,i.jsx)(t.th,{children:"S3"}),(0,i.jsx)(t.th,{children:"Data Transfer"}),(0,i.jsx)(t.th,{children:"Total Monthly"}),(0,i.jsx)(t.th,{children:"Total Yearly"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'"10 participants, active only"'}),(0,i.jsx)(t.td,{children:"2 (t3.small)"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"0.5"}),(0,i.jsx)(t.td,{children:"50"}),(0,i.jsx)(t.td,{children:"13.72"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"0.48"}),(0,i.jsx)(t.td,{children:"64.2"}),(0,i.jsx)(t.td,{children:"770.4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'"100 participants, active only"'}),(0,i.jsx)(t.td,{children:"2 (t3.small)"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"0.5"}),(0,i.jsx)(t.td,{children:"50"}),(0,i.jsx)(t.td,{children:"13.72"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"2.06"}),(0,i.jsx)(t.td,{children:"65.78"}),(0,i.jsx)(t.td,{children:"789.36"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'"1000 participants, active only"'}),(0,i.jsx)(t.td,{children:"2 (t3.small)"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"102.4"}),(0,i.jsx)(t.td,{children:"13.72"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"2.06"}),(0,i.jsx)(t.td,{children:"118.18"}),(0,i.jsx)(t.td,{children:"1418.16"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'"10 participants, active + passive"'}),(0,i.jsx)(t.td,{children:"4 (c5.large)"}),(0,i.jsx)(t.td,{children:"8"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"102.4"}),(0,i.jsx)(t.td,{children:"124.1"}),(0,i.jsx)(t.td,{children:"23.56"}),(0,i.jsx)(t.td,{children:"5.12"}),(0,i.jsx)(t.td,{children:"255.18"}),(0,i.jsx)(t.td,{children:"3062.16"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'"100 participants, active + passive"'}),(0,i.jsx)(t.td,{children:"4 (c5d.large)"}),(0,i.jsx)(t.td,{children:"16"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"204.8"}),(0,i.jsx)(t.td,{children:"186.4"}),(0,i.jsx)(t.td,{children:"23.56"}),(0,i.jsx)(t.td,{children:"10.24"}),(0,i.jsx)(t.td,{children:"425"}),(0,i.jsx)(t.td,{children:"5100.000000000001"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1000 participants active + passive"}),(0,i.jsx)(t.td,{children:"8 (c5d.2xlarge)"}),(0,i.jsx)(t.td,{children:"32"}),(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"409.6"}),(0,i.jsx)(t.td,{children:"248.2"}),(0,i.jsx)(t.td,{children:"23.56"}),(0,i.jsx)(t.td,{children:"20.48"}),(0,i.jsx)(t.td,{children:"701.84"}),(0,i.jsx)(t.td,{children:"8422.079999999998"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:['When self-hosting the LAMP Platform (that is, "on-prem"), it\'s difficult to determine the monthly costs and maintenance needs. ',(0,i.jsx)(t.a,{href:"mailto:team@digitalpsych.org",children:"Please reach out to us for a consultation"})," if you or your organization would like assistance with self-hosting."]}),"\n",(0,i.jsx)(t.p,{children:'Though self-hosting may appear to be cheaper, the "hidden costs" should not be neglected in: ensuring redundant storage, no system down-time, regular storage backups, HIPAA-compatible encryption during flight and at rest, preventing network bottlenecks, regular system maintenance, and more.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"We do not recommend self-hosting"})," unless your organization already has the infrastructure to correctly do so."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);