"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8184],{20668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"develop/low_power","title":"Low Power & Connectivity Support","description":"The LAMP Platform API Server encompasses two main purposes:","source":"@site/docs/08-develop/03-low_power.md","sourceDirName":"08-develop","slug":"/develop/low_power","permalink":"/develop/low_power","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/03-low_power.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731010294000,"sidebarPosition":3,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"How the Platform Works","permalink":"/develop/how_works"},"next":{"title":"Continuous Monitoring & Intervention Delivery","permalink":"/develop/intervention_delivery"}}');var o=t(74848),a=t(28453);const s={},r="Low Power & Connectivity Support",c={},l=[{value:"Limitations &amp; Strategies",id:"limitations--strategies",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"low-power--connectivity-support",children:"Low Power & Connectivity Support"})}),"\n",(0,o.jsx)(n.p,{children:"The LAMP Platform API Server encompasses two main purposes:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Communicate via the LAMP protocol as an API to any participating clients, and"}),"\n",(0,o.jsx)(n.li,{children:"store data in the LAMP protocol data format."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"As the client of the API Server need not worry about the data storage, the semantics of how the data is stored as well as where, or for how long, are transparent and are subject to change in real-time. As long as the client uses the API, all storage access is transparently cached, proxied, or retrieved from a pre-specified medium."}),"\n",(0,o.jsx)(n.p,{children:"In proxy mode, an instance of the API Server can continue to vend the API without being attached to permanent/long-term storage. This process requires:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A data cache,"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"a connection to another instance of the LAMP server, and"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"periodic synchronization between (1) and (2) determined by an availability factor."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(54261).A+"",width:"6516",height:"3554"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The proxy mode use-case of the LAMP server enables chaining instances together for accumulative data transfer. This serves useful for several reasons:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Network availability no longer impacts the API client as long as sufficient storage space is available for caching."}),"\n",(0,o.jsx)(n.li,{children:'ActivitySpec updates (that is, when the code underlying a cognitive test or intervention, for example, is updated) are automatically propogated to all instances downstream of the first non-proxy instance when synchronization occurs. Thus, an "application update" not involving the native code of the API client occurs transparently.'}),"\n",(0,o.jsx)(n.li,{children:"Connectivity method is not specifically defined; though it becomes the concern of the specific instance, it allows for flexibility of transfer between WiFi, bluetooth, LTE, etc. as needed or as capable by the hardware."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"As battery and storage size are concerns that impact the overall cost of a smartphone as well as how often it must be charged, patients with lower economic ability, for example, may not be able to sustain high frequency sensor collection while simultaneously lacking consistent network connectivity."}),"\n",(0,o.jsx)(n.p,{children:"By both lowering the collection frequency of sensors and running an app-local instance of the LAMP server configured in proxy mode, patients will be able to use the same app, automations, and interventions, at a lower but still acceptable fidelity while incurring less battery and storage penalty."}),"\n",(0,o.jsx)(n.p,{children:'In contrast, even in capable devices and well-equipped environments, recording high frequency sensor data from multiple devices still require coordination. Patients would be able to configure the smartwatch instance in proxy mode to connect to the smartphone instance, which itself would be configured in proxy mode to connect to an instance of the LAMP server in the cloud. This daisy-chaining of instances allows the smartphone instance of the LAMP server to effectively "see" the data from the smartwatch instance and be able to perform actions in response to it.'}),"\n",(0,o.jsx)(n.h2,{id:"limitations--strategies",children:"Limitations & Strategies"}),"\n",(0,o.jsx)(n.p,{children:"While a server instance in proxy mode appears transparent to any clients, there are a few concerns followed by mitigations thereof:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"origination:"})," data cached and transferred through several instances in proxy mode would lose meaningful tagging of origin (i.e. from a wearable with high accuracy sensors or a smartphone with low accuracy sensors).","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"the use of an API key carries origination information encoded as a JWT (JSON Web Token) for all clients irrespective of which server instance they choose to communicate with."}),"\n",(0,o.jsx)(n.li,{children:"LAMP server instances must only brand their origination upon data if none exists already."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"timestamp invalidity:"})," though the root instance of a LAMP server may be geolocated in the EST (U.S. East) time zone, it may be synchronizing with instances configured in proxy mode geolocated in the IST (Indian) time zone.","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"LAMP server instances convert timestamps into the GMT (+0) time zone upon receipt from the client."}),"\n",(0,o.jsx)(n.li,{children:"upon client data access, the LAMP server re-converts timestamps into the local time zone (as specified by an IP address, for example) or the time zone requested by the client."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"automation support:"})," intensive automations such as those written in Python or R cannot be invoked without network availability at the root instance.","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'some automations, when marked as "lightweight" and written in a supported language, such as Javascript, may be locally cached and invoked on-schedule to facilitate critical and vital functions (i.e. intervention deployment dependent on reported suicidal ideation).'}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"synchronization of non-timestamp-marked data:"})," update or creation actions on non-event data cannot be synchronized or merged.","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"such actions can be considered completed by the proxy mode instance but will be queued for synchronization with a timestamp; if the root instance rejects the action, the local proxy mode instance will be reconciled with the most recent data."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Activity deployment-notification and scheduling:"})," a push notification to deploy an Activity to a patient at the current instance (that is, not a scheduled one) may not succeed if the root instance does not synchronize with the proxy mode instance, and specifically targeting one instance may not be possible (such as the proxy mode instance running on a smartphone instead of on a wearable device, which is unsuitable for interaction).","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"the API key (that is, the origination as explained above) of a suitable client can optionally be specified when pushing a notification; such notifications will remain queued at the root instance until downstream synchronization reaches the correct proxy mode instance."}),"\n",(0,o.jsx)(n.li,{children:"if no origination is required, the first available proxy mode instance with the applicable ActivitySpec will consume the notification and dequeue it (preventing downstream instances from knowing it was ever present)."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},54261:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Proxy_Mode-fd17d8b33db60db5a3b9f8a5215f305d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);