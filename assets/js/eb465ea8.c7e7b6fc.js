"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[61],{22947:e=>{e.exports=JSON.parse('{"permalink":"/blog/2022/04/23/","source":"@site/blog/2022-04-23.md","title":"Release 2022.4.23","description":"Features & Improvements","date":"2022-04-23T00:00:00.000Z","tags":[],"readingTime":5.055,"hasTruncateMarker":false,"authors":[{"name":"Aditya Vaidyam","title":"Division of Digital Psychiatry","url":"https://github.com/avaidyam","imageURL":"https://avatars.githubusercontent.com/u/1361003","key":null,"page":null}],"frontMatter":{"author":"Aditya Vaidyam","author_title":"Division of Digital Psychiatry","author_url":"https://github.com/avaidyam","author_image_url":"https://avatars.githubusercontent.com/u/1361003"},"unlisted":false,"nextItem":{"title":"","permalink":"/blog/2022/03/22/"}}')},28453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>d});var n=s(96540);const o={},t=n.createContext(o);function r(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(t.Provider,{value:i},e.children)}},32487:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var n=s(22947),o=s(74848),t=s(28453);const r={author:"Aditya Vaidyam",author_title:"Division of Digital Psychiatry",author_url:"https://github.com/avaidyam",author_image_url:"https://avatars.githubusercontent.com/u/1361003"},d="Release 2022.4.23",a={authorsImageUrls:[void 0]},c=[{value:"Features &amp; Improvements",id:"features--improvements",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}];function l(e){const i={code:"code",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h3,{id:"features--improvements",children:"Features & Improvements"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Added support for custom ",(0,o.jsx)(i.code,{children:"ActivitySpec"})," definitions, including custom configuration, text, icons, and script contents."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Added a warning popup to require the user select a group to create an activity or sensor under if none specified."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Reduced background network requests when polling for new clinician-sent messages."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Reduced background network requests for sensor data when only viewing the home screen of the app."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Reduced background network requests for analytics when logged in as a researcher instead of a patient."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-activities]"})," The Matrix options type is now fully available for Surveys, with full data export support for every type of question."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-ios]"})," Added full support for detection of ambient light and sound, wearable/watch positioning and accelerometer, aggregated daily travel routines, detailed keyboard typing metrics, text message and phone call usage with third-party app support, cross-browser website and cross-device app usage/screen time and notification pickups data, through the new Apple SensorKit framework.","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.strong,{children:"Not available for use outside of BIDMC-approved studies; requires developer entitlements which necessitate a legal contract with Apple Inc. and BIDMC; contact us for questions about SensorKit."})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-ios]"})," Reduced background callbacks when sensor data collection is disabled to preserve battery life."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-ios]"})," Enforced strict data collection rules to match organization-level requirements when sensors are configured."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-ios]"})," Added support for a new schedule repeat-type ",(0,o.jsx)(i.code,{children:"every two weeks"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Added support for Battery Saver (i.e. Low Power Mode on iOS) detection to assist with imputation of missing sensor data."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Reduced background callbacks when sensor data collection is disabled to preserve battery life."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Eliminated App Not Responding issues; the app now crashes instead of hanging indefinitely and slowing down the phone."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Added user-facing crash report to allow users to quickly screenshot or screen record bugs and app crashes."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Added support for a new schedule repeat-type ",(0,o.jsx)(i.code,{children:"every two weeks"}),"."]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where certain Activity configuration text boxes (i.e. Tips) were not resizable."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where the back button did not work in certain activities (i.e. Tips) when opened from a notification."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where it was not possible to exit certain activities (i.e. Tips) when opened from the mobile app."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where the Activity scheduler interface would not recognize typed date/times, requiring users to slowly manually select them via clock/calendar interface."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where the Activity scheduler would not allow scheduling activities on the first of the month."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved a ",(0,o.jsx)(i.strong,{children:"SIGNIFICANT"})," issue where grouped activities would always display in an infinite loop for certain users."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where tab page headings would display in all lowercase."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where the Save button of the Activity configuration page would obscure the configuration form itself."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved a ",(0,o.jsx)(i.strong,{children:"SIGNIFICANT"})," issue where surveys and voice recordings would not load under certain configuration parameters."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved a ",(0,o.jsx)(i.strong,{children:"SIGNIFICANT"})," issue where users would be automatically logged out erroneously when opening an activity from a notification without network connection."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where certain mobile devices would clip parts of the activity interface, preventing successful completion of the activity."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-dashboard]"})," Resolved an issue where a single data point would not display or display incorrectly as a mini tile in the Prevent tab."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-activities]"})," Resolved an issue where the Goal Tracker and Medication Tracker activities (not officially available for public usage) did not connect to the ",(0,o.jsx)(i.code,{children:"ActivitySpec"})," API correctly and would not work with the dashboard."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-activities]"})," Resolved an issue for the DBT Diary Card where the ",(0,o.jsx)(i.code,{children:"Actions"})," graph did not display a date range picker."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-activities]"})," Resolved an issue where images were not center-aligned for the Scratch Card activity."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-activities]"})," Resolved an issue where time picker questions in Surveys would display the wrong time format (AM/PM vs. 24hr)."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-activities]"})," Resolved an issue with Pop the Bubbles where certain bubbles would overlap and remain fixed in the center of the screen."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-activities]"})," Resolved an issue where bubbles in Pop the Bubbles had reduced sensitivity to taps."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-activities]"})," Resolved an issue where bubbles in Pop the Bubbles would sometimes display on the edges of the screen, making it difficult to see or tap them."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-ios]"})," Resolved an issue where local notifications (i.e. offline non-push without server involvement) sent notifications with an incorrect timezone."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-ios]"})," Resolved an issue where local notifications would fail with unhandled schedule repeat-types."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-ios]"})," Resolved an issue where ",(0,o.jsx)(i.code,{children:"lamp.device_state"})," data would be saved under the legacy name ",(0,o.jsx)(i.code,{children:"lamp.screen_state"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-ios]"})," Resolved a ",(0,o.jsx)(i.strong,{children:"SIGNIFICANT"})," issue where tapping on an activity from a notification would lead to a white screen."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Resolved an issue where local notifications (i.e. offline non-push without server involvement) sent notifications with an incorrect timezone."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Resolved an issue where toggling battery saver mode when not logged into the mindLAMP app would crash the app."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Resolved an issue where if no sensors were configured, all sensor data would be collected for a user."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Resolved an issue where sensor data collection maximum frequencies were not the same between iOS and Android."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Resolved an issue where the WearOS app would be out-of-date with the Android app due to a GitHub workflow issue."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Resolved an issue where Android analytics data would not match the format of the iOS analytics data."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Resolved an issue where ",(0,o.jsx)(i.code,{children:"lamp.device_state"})," data did not match the same data format as iOS."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-core-android]"})," Resolved a ",(0,o.jsx)(i.strong,{children:"SIGNIFICANT"})," issue where tapping on an activity from a notification would lead to a white screen."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-server]"})," Resolved an issue where ",(0,o.jsx)(i.code,{children:"SensorEvents"})," would not be flushed from the cache to the database correctly."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-server]"})," Resolved an issue where the ",(0,o.jsx)(i.code,{children:"ActivitySpec"})," schema provided incorrect parameter names."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"[LAMP-worker]"})," Resolved an issue where push notifications would be sent to users even if the device had logged out of the mindLAMP app."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);