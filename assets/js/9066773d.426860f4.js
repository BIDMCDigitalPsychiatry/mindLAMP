(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{250:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a(3),n=a(8),r=(a(0),a(388)),o=["components"],l={},s={unversionedId:"develop/adaptive_interventions",id:"develop/adaptive_interventions",isDocsHomePage:!1,title:"Just-In-Time Adaptive Interventions",description:"This is a proof-of-concept for the LAMP Automations system. The workflow is detailed below:",source:"@site/docs/08-develop/06-adaptive_interventions.md",sourceDirName:"08-develop",slug:"/develop/adaptive_interventions",permalink:"/develop/adaptive_interventions",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/06-adaptive_interventions.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1634822495,formattedLastUpdatedAt:"10/21/2021",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Building New Activities",permalink:"/develop/build_new_activities"},next:{title:"Working with the App Gateway",permalink:"/develop/app_gateway"}},c=[{value:"Private Sensors and Tags",id:"private-sensors-and-tags",children:[]}],p={toc:c};function b(e){var t=e.components,a=Object(n.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is a proof-of-concept for the LAMP Automations system. The workflow is detailed below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Patient logs into mobile app (iOS/Android)"),Object(r.b)("li",{parentName:"ol"},"Mobile app uses Study configuration to activate device sensor data collection (i.e. which sensors, frequency per sensor, misc. settings)"),Object(r.b)("li",{parentName:"ol"},"Mobile app collects sensor data in background and caches it"),Object(r.b)("li",{parentName:"ol"},"Conditions must be met: device charged/charging + active WiFi connection"),Object(r.b)("li",{parentName:"ol"},"Mobile app bulk uploads cached sensor data to specified server (organization) "),Object(r.b)("li",{parentName:"ol"},"Mobile app individually uploads activity data upon participant\u2019s completion of a session"),Object(r.b)("li",{parentName:"ol"},"API Server processes and stores this data into database "),Object(r.b)("li",{parentName:"ol"},"API Server signals all listeners that new data has arrived (per-study, per-activity, per-participant)"),Object(r.b)("li",{parentName:"ol"},"Automations worker receives new data notification"),Object(r.b)("li",{parentName:"ol"},"Worker searches its installed scripts catalog for scripts that specify a matching trigger condition",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study/blob/master/main.py"},"For example, the BIDMC College Study has installed their own script (source code provided here).")))),Object(r.b)("li",{parentName:"ol"},"Worker executes scripts, providing the new data notification information to the script"),Object(r.b)("li",{parentName:"ol"},"Scripts (third-party user-specified code) are executed in isolated docker containers"),Object(r.b)("li",{parentName:"ol"},"Script processes the data as it needs and may optionally execute actions",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Example: BIDMC college study script")),Object(r.b)("li",{parentName:"ol"},"Script computes change in daily survey score today vs. yesterday += 3 points"),Object(r.b)("li",{parentName:"ol"},"If condition is met, script selects a random activity (meditation, journaling, placebo) to send to participant "),Object(r.b)("li",{parentName:"ol"},"Script sends message containing activity ID to API server for mobile app push notification"),Object(r.b)("li",{parentName:"ol"},"Participant receives push notification on their mobile device ",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Participant opens push notification and starts activity session"),Object(r.b)("li",{parentName:"ol"},"Upon completion of session (i.e. saved a journal entry), activity data is uploaded to server"),Object(r.b)("li",{parentName:"ol"},"Repeat this feedback cycle from step #6")))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"private-sensors-and-tags"},"Private Sensors and Tags"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"lamp.gps.contextual")," Sensor: This was a mindLAMP 1 feature that collected street-level GPS (not lat/long coordinates) with a paired survey asking about social and environmental context (who you were with and where you were) between 5-30 min of taking a survey in the app. "),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"lamp.demographics")," Tag: This holds processed clinical scale data from when a patient is onboarded onto a study (i.e. via paper-pencil surveys or RedCap, etc.)"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.*")," Sensors: The full list of these Sensors is below; these are migrated sensors from when the Beiwe app was used alongside mindLAMP 1.",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.identifiers")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.accelerometer")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.bluetooth")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.calls")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.gps")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.power_state")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.texts")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.wifi")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.audio_recordings")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.survey_answers")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.survey_timings")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.app_log")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"beiwe.ios_log")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"lamp.dashboard.activity_details")," and ",Object(r.b)("inlineCode",{parentName:"li"},"lamp.dashboard.survey_description")," Tags: These were placeholder tags for the mindLAMP v1 to v2 migration; the Activity API was not fixed at the time and did not support activity icons, descriptions, etc. and so these Tags were required on each customized Activity."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"lamp.dashboard.credential_roles")," Tag: The Care Team feature allowed attaching a separate Tag with a dictionary, where each key matched a Credential set on the Participant; the values for each key (the Credential's email address) was a name, photo, and description of the individual's role in the care team. This is no longer supported as a feature."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"lamp.name")," Tag: This added backwards-compatible support for the ",Object(r.b)("inlineCode",{parentName:"li"},"Participant.aliases")," feature."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"lamp.messaging")," Tag: This added backwards-compatible support for the Conversations feature of the dashboard."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"lamp.dashboard.welcome_dismissed")," Tag: Unknown; this Tag was never used. "),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"lamp.selectedStudies"),", ",Object(r.b)("inlineCode",{parentName:"li"},"lamp.selectedActivities"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"lamp.selectedSensors")," Tags: Due to bugs in the earliest version of the mindLAMP v2 dashboard, these tags held an array of studies, activities, or sensors that were selected by the currently logged in Researcher. This is now defunct and should not be used (",Object(r.b)("inlineCode",{parentName:"li"},"localStorage")," should be used instead).")))}b.isMDXComponent=!0},388:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),m=i,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||r;return a?n.a.createElement(u,l(l({ref:t},c),{},{components:a})):n.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);