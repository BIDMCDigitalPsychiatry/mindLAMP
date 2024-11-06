"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8899],{62741:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"develop/intervention_delivery","title":"Continuous Monitoring & Intervention Delivery","description":"The primary goal of the LAMP Platform remains the integration of continuous monitoring and rapid intervention delivery. Using the various components of the Platform with the mindLAMP app as an interface could suffice in most situations \u2014 processing power and battery life unconstrained, as well as constant access to network resources and the results of the processing from a Cloud server. As a Participant actively enrolled in a study uses the app, including interacting with Activities available therein, sensor instruments periodically collect measurements in the background. These data are submitted to the Cloud server which notifies and activates the correct set of Automations in the right order. These could include Visualizations, Predictive Models, or Clinical Decision Support systems that were installed by the Researcher supervising that Participant\u2019s study.","source":"@site/docs/08-develop/04-intervention_delivery.md","sourceDirName":"08-develop","slug":"/develop/intervention_delivery","permalink":"/develop/intervention_delivery","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/04-intervention_delivery.md","tags":[],"version":"current","lastUpdatedBy":"Matt Flathers","lastUpdatedAt":1730911240000,"sidebarPosition":4,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Low Power & Connectivity Support","permalink":"/develop/low_power"},"next":{"title":"Building New Activities","permalink":"/develop/build_new_activities"}}');var s=i(74848),o=i(28453);const a={},r="Continuous Monitoring & Intervention Delivery",l={},c=[];function d(e){const t={a:"a",h1:"h1",header:"header",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"continuous-monitoring--intervention-delivery",children:"Continuous Monitoring & Intervention Delivery"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(99222).A+"",width:"3083",height:"1937"})}),"\n",(0,s.jsx)(t.p,{children:"The primary goal of the LAMP Platform remains the integration of continuous monitoring and rapid intervention delivery. Using the various components of the Platform with the mindLAMP app as an interface could suffice in most situations \u2014 processing power and battery life unconstrained, as well as constant access to network resources and the results of the processing from a Cloud server. As a Participant actively enrolled in a study uses the app, including interacting with Activities available therein, sensor instruments periodically collect measurements in the background. These data are submitted to the Cloud server which notifies and activates the correct set of Automations in the right order. These could include Visualizations, Predictive Models, or Clinical Decision Support systems that were installed by the Researcher supervising that Participant\u2019s study."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"mailto:team@digitalpsych.org",children:"Please contact us directly for guidance on delivery of just-in-time interventions."})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(84434).A+"",width:"3762",height:"3366"})}),"\n",(0,s.jsx)(t.p,{children:"Taking the example of a Big Data-powered Clinical Decision Support (CDS) system, it may ingest a vast amount of passive as well as active data to apply heuristics and derive extracted meta-information, upon which machine learning analysis may detect a critical anomaly requiring clinical intervention and support. After notifying the clinician, this system may notify the Participant with an intervention Activity. As the Participant interacts with the newly suggested intervention, newly recorded measurements from the aforementioned sensor instruments will be synchronized to the Cloud server, and this same CDS system will be invoked again to verify that how successful the feedback was."}),"\n",(0,s.jsx)(t.p,{children:"Supposing a Participant were not able to remain connected to the network frequently, the mindLAMP app may not be able to communicate with the Cloud server responsible for managing the execution of these Automations. Instead, however, a \u201clow-connectivity\u201d mode is entered, and of all the Automations installed by the Researcher, those specifically designated as capable of low-power processing (and written only in JavaScript, accessing no network or disk resources) will be downloaded and version-synchronized whenever possible. It is this lightweight version of the CDS system that will instead be executed, but the same intervention Activity will be presented to the Participant in the same timely manner. This version of the CDS system might instead rely only on simple heuristic such as the value of a single question related to suicidal ideation, as the processing scale of the Big data-powered variant CDS system would be dramatically greater and unsupportable on smartphone devices."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},99222:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/Clinic_Loop-3b31e525f2ae9a61380815241350b73f.png"},84434:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/Cloud_vs_On-device_CDS-2915a2405f9952265b1b342443876dbc.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);