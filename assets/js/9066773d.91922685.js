"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2795],{8286:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"develop/adaptive_interventions","title":"Just-In-Time Adaptive Interventions","description":"This is a proof-of-concept for the LAMP Automations system. The workflow is detailed below:","source":"@site/docs/08-develop/06-adaptive_interventions.md","sourceDirName":"08-develop","slug":"/develop/adaptive_interventions","permalink":"/develop/adaptive_interventions","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/06-adaptive_interventions.md","tags":[],"version":"current","lastUpdatedBy":"Matt Flathers","lastUpdatedAt":1730911240000,"sidebarPosition":6,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Building New Activities","permalink":"/develop/build_new_activities"},"next":{"title":"App Gateway","permalink":"/develop/app_gateway"}}');var t=s(74848),a=s(28453);const r={},o="Just-In-Time Adaptive Interventions",d={},l=[{value:"Private Sensors and Tags",id:"private-sensors-and-tags",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"just-in-time-adaptive-interventions",children:"Just-In-Time Adaptive Interventions"})}),"\n",(0,t.jsx)(i.p,{children:"This is a proof-of-concept for the LAMP Automations system. The workflow is detailed below:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Patient logs into mobile app (iOS/Android)"}),"\n",(0,t.jsx)(i.li,{children:"Mobile app uses Study configuration to activate device sensor data collection (i.e. which sensors, frequency per sensor, misc. settings)"}),"\n",(0,t.jsx)(i.li,{children:"Mobile app collects sensor data in background and caches it"}),"\n",(0,t.jsx)(i.li,{children:"Conditions must be met: device charged/charging + active WiFi connection"}),"\n",(0,t.jsx)(i.li,{children:"Mobile app bulk uploads cached sensor data to specified server (organization)"}),"\n",(0,t.jsx)(i.li,{children:"Mobile app individually uploads activity data upon participant\u2019s completion of a session"}),"\n",(0,t.jsx)(i.li,{children:"API Server processes and stores this data into database"}),"\n",(0,t.jsx)(i.li,{children:"API Server signals all listeners that new data has arrived (per-study, per-activity, per-participant)"}),"\n",(0,t.jsx)(i.li,{children:"Automations worker receives new data notification"}),"\n",(0,t.jsxs)(i.li,{children:["Worker searches its installed scripts catalog for scripts that specify a matching trigger condition","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study/blob/master/main.py",children:"For example, the BIDMC College Study has installed their own script (source code provided here)."})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Worker executes scripts, providing the new data notification information to the script"}),"\n",(0,t.jsx)(i.li,{children:"Scripts (third-party user-specified code) are executed in isolated docker containers"}),"\n",(0,t.jsxs)(i.li,{children:["Script processes the data as it needs and may optionally execute actions","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"Example: BIDMC college study script"})}),"\n",(0,t.jsx)(i.li,{children:"Script computes change in daily survey score today vs. yesterday += 3 points"}),"\n",(0,t.jsx)(i.li,{children:"If condition is met, script selects a random activity (meditation, journaling, placebo) to send to participant"}),"\n",(0,t.jsx)(i.li,{children:"Script sends message containing activity ID to API server for mobile app push notification"}),"\n",(0,t.jsxs)(i.li,{children:["Participant receives push notification on their mobile device","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Participant opens push notification and starts activity session"}),"\n",(0,t.jsx)(i.li,{children:"Upon completion of session (i.e. saved a journal entry), activity data is uploaded to server"}),"\n",(0,t.jsx)(i.li,{children:"Repeat this feedback cycle from step #6"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"private-sensors-and-tags",children:"Private Sensors and Tags"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lamp.gps.contextual"})," Sensor: This was a mindLAMP 1 feature that collected street-level GPS (not lat/long coordinates) with a paired survey asking about social and environmental context (who you were with and where you were) between 5-30 min of taking a survey in the app."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lamp.demographics"})," Tag: This holds processed clinical scale data from when a patient is onboarded onto a study (i.e. via paper-pencil surveys or RedCap, etc.)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"beiwe.*"})," Sensors: The full list of these Sensors is below; these are migrated sensors from when the Beiwe app was used alongside mindLAMP 1.","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.identifiers"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.accelerometer"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.bluetooth"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.calls"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.gps"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.power_state"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.texts"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.wifi"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.audio_recordings"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.survey_answers"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.survey_timings"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.app_log"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"beiwe.ios_log"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lamp.dashboard.activity_details"})," and ",(0,t.jsx)(i.code,{children:"lamp.dashboard.survey_description"})," Tags: These were placeholder tags for the mindLAMP v1 to v2 migration; the Activity API was not fixed at the time and did not support activity icons, descriptions, etc. and so these Tags were required on each customized Activity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lamp.dashboard.credential_roles"})," Tag: The Care Team feature allowed attaching a separate Tag with a dictionary, where each key matched a Credential set on the Participant; the values for each key (the Credential's email address) was a name, photo, and description of the individual's role in the care team. This is no longer supported as a feature."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lamp.name"})," Tag: This added backwards-compatible support for the ",(0,t.jsx)(i.code,{children:"Participant.aliases"})," feature."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lamp.messaging"})," Tag: This added backwards-compatible support for the Conversations feature of the dashboard."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lamp.dashboard.welcome_dismissed"})," Tag: Unknown; this Tag was never used."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"lamp.selectedStudies"}),", ",(0,t.jsx)(i.code,{children:"lamp.selectedActivities"}),", and ",(0,t.jsx)(i.code,{children:"lamp.selectedSensors"})," Tags: Due to bugs in the earliest version of the mindLAMP v2 dashboard, these tags held an array of studies, activities, or sensors that were selected by the currently logged in Researcher. This is now defunct and should not be used (",(0,t.jsx)(i.code,{children:"localStorage"})," should be used instead)."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>o});var n=s(96540);const t={},a=n.createContext(t);function r(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);