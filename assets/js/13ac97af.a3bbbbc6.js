(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1126:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Proxy_Mode-fd17d8b33db60db5a3b9f8a5215f305d.png"},379:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(r,".").concat(m)]||d[m]||b[m]||i;return n?o.a.createElement(u,c(c({ref:t},l),{},{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(8),i=(n(0),n(379)),r=["components"],c={},s={unversionedId:"develop/low_power",id:"develop/low_power",isDocsHomePage:!1,title:"Low Power & Connectivity Support",description:"The LAMP Platform API Server encompasses two main purposes:",source:"@site/docs/07-develop/03-low_power.md",sourceDirName:"07-develop",slug:"/develop/low_power",permalink:"/develop/low_power",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-develop/03-low_power.md",version:"current",lastUpdatedBy:"Tanvi Lakhtakia",lastUpdatedAt:1629986509,formattedLastUpdatedAt:"8/26/2021",sidebarPosition:3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How the Platform Works",permalink:"/develop/how_works"},next:{title:"Continuous Monitoring & Intervention Delivery",permalink:"/develop/intervention_delivery"}},l=[{value:"Limitations &amp; Strategies",id:"limitations--strategies",children:[]}],p={toc:l};function d(e){var t=e.components,c=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The LAMP Platform API Server encompasses two main purposes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Communicate via the LAMP protocol as an API to any participating clients, and"),Object(i.b)("li",{parentName:"ol"},"store data in the LAMP protocol data format.")),Object(i.b)("p",null,"As the client of the API Server need not worry about the data storage, the semantics of how the data is stored as well as where, or for how long, are transparent and are subject to change in real-time. As long as the client uses the API, all storage access is transparently cached, proxied, or retrieved from a pre-specified medium."),Object(i.b)("p",null,"In proxy mode, an instance of the API Server can continue to vend the API without being attached to permanent/long-term storage. This process requires:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A data cache,")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"a connection to another instance of the LAMP server, and")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"periodic synchronization between (1) and (2) determined by an availability factor."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{src:n(1126).default})))),Object(i.b)("p",null,"The proxy mode use-case of the LAMP server enables chaining instances together for accumulative data transfer. This serves useful for several reasons:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Network availability no longer impacts the API client as long as sufficient storage space is available for caching."),Object(i.b)("li",{parentName:"ol"},'ActivitySpec updates (that is, when the code underlying a cognitive test or intervention, for example, is updated) are automatically propogated to all instances downstream of the first non-proxy instance when synchronization occurs. Thus, an "application update" not involving the native code of the API client occurs transparently.'),Object(i.b)("li",{parentName:"ol"},"Connectivity method is not specifically defined; though it becomes the concern of the specific instance, it allows for flexibility of transfer between WiFi, bluetooth, LTE, etc. as needed or as capable by the hardware.")),Object(i.b)("p",null,"As battery and storage size are concerns that impact the overall cost of a smartphone as well as how often it must be charged, patients with lower economic ability, for example, may not be able to sustain high frequency sensor collection while simultaneously lacking consistent network connectivity."),Object(i.b)("p",null,"By both lowering the collection frequency of sensors and running an app-local instance of the LAMP server configured in proxy mode, patients will be able to use the same app, automations, and interventions, at a lower but still acceptable fidelity while incurring less battery and storage penalty."),Object(i.b)("p",null,'In contrast, even in capable devices and well-equipped environments, recording high frequency sensor data from multiple devices still require coordination. Patients would be able to configure the smartwatch instance in proxy mode to connect to the smartphone instance, which itself would be configured in proxy mode to connect to an instance of the LAMP server in the cloud. This daisy-chaining of instances allows the smartphone instance of the LAMP server to effectively "see" the data from the smartwatch instance and be able to perform actions in response to it.'),Object(i.b)("h2",{id:"limitations--strategies"},"Limitations & Strategies"),Object(i.b)("p",null,"While a server instance in proxy mode appears transparent to any clients, there are a few concerns followed by mitigations thereof:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"origination:")," data cached and transferred through several instances in proxy mode would lose meaningful tagging of origin (i.e. from a wearable with high accuracy sensors or a smartphone with low accuracy sensors).",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"the use of an API key carries origination information encoded as a JWT (JSON Web Token) for all clients irrespective of which server instance they choose to communicate with."),Object(i.b)("li",{parentName:"ol"},"LAMP server instances must only brand their origination upon data if none exists already."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"timestamp invalidity:")," though the root instance of a LAMP server may be geolocated in the EST (U.S. East) time zone, it may be synchronizing with instances configured in proxy mode geolocated in the IST (Indian) time zone.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"LAMP server instances convert timestamps into the GMT (+0) time zone upon receipt from the client."),Object(i.b)("li",{parentName:"ol"},"upon client data access, the LAMP server re-converts timestamps into the local time zone (as specified by an IP address, for example) or the time zone requested by the client."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"automation support:")," intensive automations such as those written in Python or R cannot be invoked without network availability at the root instance.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},'some automations, when marked as "lightweight" and written in a supported language, such as Javascript, may be locally cached and invoked on-schedule to facilitate critical and vital functions (i.e. intervention deployment dependent on reported suicidal ideation).'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"synchronization of non-timestamp-marked data:")," update or creation actions on non-event data cannot be synchronized or merged.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"such actions can be considered completed by the proxy mode instance but will be queued for synchronization with a timestamp; if the root instance rejects the action, the local proxy mode instance will be reconciled with the most recent data."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Activity deployment-notification and scheduling:")," a push notification to deploy an Activity to a patient at the current instance (that is, not a scheduled one) may not succeed if the root instance does not synchronize with the proxy mode instance, and specifically targeting one instance may not be possible (such as the proxy mode instance running on a smartphone instead of on a wearable device, which is unsuitable for interaction).",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"the API key (that is, the origination as explained above) of a suitable client can optionally be specified when pushing a notification; such notifications will remain queued at the root instance until downstream synchronization reaches the correct proxy mode instance."),Object(i.b)("li",{parentName:"ol"},"if no origination is required, the first available proxy mode instance with the applicable ActivitySpec will consume the notification and dequeue it (preventing downstream instances from knowing it was ever present).")))))}d.isMDXComponent=!0}}]);