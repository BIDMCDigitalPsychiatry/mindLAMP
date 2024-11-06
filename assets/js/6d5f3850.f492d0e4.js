"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2018],{59840:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"using/sensors","title":"Sensor Types","description":"Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the Platform Server automatically by using the Activity API written in JavaScript. By \u201cbeginning\u201d and \u201cending\u201d a recording of these interactions, as well as \u201cemitting\u201d temporal data during the interaction, an ActivityEvent can be captured and sent to the Platform Server. A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository.","source":"@site/docs/05-using/07-sensors.md","sourceDirName":"05-using","slug":"/using/sensors","permalink":"/using/sensors","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/05-using/07-sensors.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1730910383000,"sidebarPosition":7,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Cognitive Games and Assessments","permalink":"/using/cog_games"},"next":{"title":"Clinical vs. Research Use","permalink":"/using/clin_vs_res"}}');var t=i(74848),r=i(28453);const o={},a="Sensor Types",c={},d=[{value:"Details on the most commonly analyzed specs are below: For greater detail of specs, see <strong>Cortex &amp; API</strong> section.",id:"details-on-the-most-commonly-analyzed-specs-are-below-for-greater-detail-of-specs-see-cortex--api-section",level:4},{value:"Accelerometer",id:"accelerometer",level:2},{value:"Description",id:"description",level:3},{value:"Bluetooth",id:"bluetooth",level:2},{value:"Description",id:"description-1",level:3},{value:"Calls",id:"calls",level:2},{value:"Description",id:"description-2",level:3},{value:"Distance",id:"distance",level:2},{value:"GPS",id:"gps",level:2},{value:"Description",id:"description-3",level:3},{value:"Gyroscope",id:"gyroscope",level:2},{value:"Description",id:"description-4",level:3},{value:"Motion",id:"motion",level:2},{value:"Description",id:"description-5",level:3},{value:"None",id:"none",level:2},{value:"Description",id:"description-6",level:3},{value:"SMS",id:"sms",level:2},{value:"Description",id:"description-7",level:3},{value:"Screen",id:"screen",level:2},{value:"Description",id:"description-8",level:3},{value:"WiFi",id:"wifi",level:2},{value:"Description",id:"description-9",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sensor-types",children:"Sensor Types"})}),"\n",(0,t.jsxs)(n.p,{children:["Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the ",(0,t.jsx)(n.strong,{children:"Platform Server"})," automatically by using the Activity API written in JavaScript. By \u201cbeginning\u201d and \u201cending\u201d a recording of these interactions, as well as \u201cemitting\u201d temporal data during the interaction, an ActivityEvent can be captured and sent to the ",(0,t.jsx)(n.strong,{children:"Platform Server"}),". A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"SensorSpec"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Analytics"}),(0,t.jsx)(n.td,{children:"lamp.analytics"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Location"}),(0,t.jsx)(n.td,{children:"lamp.gps"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Device Motion"}),(0,t.jsx)(n.td,{children:"lamp.device_motion"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Accelerometer"}),(0,t.jsx)(n.td,{children:"lamp.accelerometer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Pedometer"}),(0,t.jsx)(n.td,{children:"lamp.steps"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sleep"}),(0,t.jsx)(n.td,{children:"lamp.sleep"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Nutrition"}),(0,t.jsx)(n.td,{children:"lamp.nutrition"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Workouts"}),(0,t.jsx)(n.td,{children:"lamp.segment"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Screen"}),(0,t.jsx)(n.td,{children:"lamp.screen_state"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Bluetooth & WiFi"}),(0,t.jsx)(n.td,{children:"lamp.nearby_device"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Calls & Texts"}),(0,t.jsx)(n.td,{children:"lamp.telephony"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blood Pressure"}),(0,t.jsx)(n.td,{children:"lamp.blood_pressure"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blood Glucose"}),(0,t.jsx)(n.td,{children:"lamp.blood_glucose"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Oxygen Saturation"}),(0,t.jsx)(n.td,{children:"lamp.oxygen_saturation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Body Temperature"}),(0,t.jsx)(n.td,{children:"lamp.body_temperature"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Heart Rate & HRV"}),(0,t.jsx)(n.td,{children:"lamp.heart_rate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Respiratory Rate"}),(0,t.jsx)(n.td,{children:"lamp.respiratory_rate"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Activity Recognition"}),(0,t.jsx)(n.td,{children:"lamp.activity_recognition"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"lamp.none"})]})]})]}),"\n",(0,t.jsxs)(n.h4,{id:"details-on-the-most-commonly-analyzed-specs-are-below-for-greater-detail-of-specs-see-cortex--api-section",children:["Details on the most commonly analyzed specs are below: For greater detail of specs, see ",(0,t.jsx)(n.strong,{children:"Cortex & API"})," section."]}),"\n",(0,t.jsx)(n.h2,{id:"accelerometer",children:"Accelerometer"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.accelerometer"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The triaxial accelerometer measures acceleration applied to the device. Each measurement is measured in Gs and is taken relative to the coordinate plane of the device, screen facing upwards. For example, a device resting face-up on a flat surface will report a measurement with the coordinate values ",(0,t.jsx)(n.code,{children:"<0, 0, 1>"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"bluetooth",children:"Bluetooth"}),"\n",(0,t.jsx)(n.p,{children:"Cortex: cortex.raw.bluetooth"}),"\n",(0,t.jsx)(n.h3,{id:"description-1",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The bluetooth sensor logs information about the device's Bluetooth sensor and about surrounding Bluetooth devices that are enabled and/or visible. The device scan for surrounding Bluetooth devices at a set frequency (default is 60 seconds). If multiple devices are detected in a single scan, they are all assigned the same timestamp."}),"\n",(0,t.jsx)(n.h2,{id:"calls",children:"Calls"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.calls"}),"\n",(0,t.jsx)(n.h3,{id:"description-2",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The calls sensor measures information on phone calls made and received by the user. Each event is a single phone call, with information on its type (incoming, outgoing, missed, etc), duration, and trace (the other device which the user connected with during the call).\nCall type options differ between Android and iOS devices."}),"\n",(0,t.jsx)(n.h2,{id:"distance",children:"Distance"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.distance"}),"\n",(0,t.jsx)(n.h2,{id:"gps",children:"GPS"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.gps"}),"\n",(0,t.jsx)(n.h3,{id:"description-3",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The GPS sensor gets the longitude and latitude of a user at a designated frequency of ~1Hz. As a requirement for smartphone apps to be running in the background and collecting any passive sensor data, ",(0,t.jsx)(n.strong,{children:"GPS collection permissions must be accepted to obtain high frequency data from any sensor"}),", even if it is not manually selected. To save battery and make it so extra data is not collected, GPS is collected at a lower frequency when it is not selected."]}),"\n",(0,t.jsx)(n.h2,{id:"gyroscope",children:"Gyroscope"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.gyroscope"}),"\n",(0,t.jsx)(n.h3,{id:"description-4",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The gyroscope sensors measures the rate of rotation around each of a device's x, y and z axes. Rotation values are in radians/second. Positive values indicate counter-clockwise rotation; negative values indicate clockwise rotation. These are raw values\u2014i.e. they do not correct for nosie or drift."}),"\n",(0,t.jsx)(n.h2,{id:"motion",children:"Motion"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.accelerometer.motion"}),"\n",(0,t.jsx)(n.h3,{id:"description-5",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The motion sensor gathers information on the device's physical movement. It includes metrics on device tilt, rotation, experienced gravity, acceleration, and magnetic field. The acceleration measure here differs from ",(0,t.jsx)(n.code,{children:"lamp.accelerometer"})," in that this measure does not correct for gravity."]}),"\n",(0,t.jsx)(n.h2,{id:"none",children:"None"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.none"}),"\n",(0,t.jsx)(n.h3,{id:"description-6",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The none sensor makes it so that no sensor data is collected from any sensors. This can be convenient if a user or study is ideally only to collect active data."}),"\n",(0,t.jsx)(n.h2,{id:"sms",children:"SMS"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.sms"}),"\n",(0,t.jsx)(n.h3,{id:"description-7",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The sms sensor measures information on text messages sent and received by the user. Each event is a single message, with information on its type (incoming, outgoing) and trace (the other device involved in the messaging exchange)."}),"\n",(0,t.jsx)(n.h2,{id:"screen",children:"Screen"}),"\n",(0,t.jsx)(n.p,{children:"SensorSpec: lamp.device_state (previous version: lamp.screen_state)"}),"\n",(0,t.jsx)(n.h3,{id:"description-8",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The screen state sensor records when the screen was turned on or off, when the device was locked or unlocked, and changes in battery level from charging or discharging the device.\nThis sensor ",(0,t.jsx)(n.strong,{children:"DOES NOT"})," record the amount of time spent within specific apps on the device or how many notifications were received."]}),"\n",(0,t.jsx)(n.h2,{id:"wifi",children:"WiFi"}),"\n",(0,t.jsx)(n.p,{children:"Cortex: cortex.raw.wifi"}),"\n",(0,t.jsx)(n.h3,{id:"description-9",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The wifi sensor provides information about the devices to which the user's device connects via wifi."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);