(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{345:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(391)),s=["components"],o={},c={unversionedId:"develop/how_works",id:"develop/how_works",isDocsHomePage:!1,title:"How the Platform Works",description:"The LAMP Platform always collects data in a secure way before automatically processing and harmonizing it for you. Researchers/clinicians, and patients/participants can view their data in the frontend user interface. Patients will always retain ownership when contributing their data to your study or clinic and may always download and view their own data. Cognitive tests and survey instruments collect high quality metadata that can measure attention, focus, memory performance, and more.",source:"@site/docs/08-develop/02-how_works.md",sourceDirName:"08-develop",slug:"/develop/how_works",permalink:"/develop/how_works",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/02-how_works.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1637615649,formattedLastUpdatedAt:"11/22/2021",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Components of the LAMP Platform",permalink:"/develop/intro"},next:{title:"Low Power & Connectivity Support",permalink:"/develop/low_power"}},l=[{value:"Step 1: Sensor events are recorded in real-time.",id:"step-1-sensor-events-are-recorded-in-real-time",children:[]},{value:"Step 2: Collected events are cached, awaiting server reachability.",id:"step-2-collected-events-are-cached-awaiting-server-reachability",children:[]},{value:"Step 3: Server receives and processes requests from the app.",id:"step-3-server-receives-and-processes-requests-from-the-app",children:[]},{value:"Step 4: Server coordinates internal components for processing.",id:"step-4-server-coordinates-internal-components-for-processing",children:[]},{value:"Step 5: Database records the incoming data.",id:"step-5-database-records-the-incoming-data",children:[]},{value:"Step 6: The scheduler coordinates and runs automations.",id:"step-6-the-scheduler-coordinates-and-runs-automations",children:[]},{value:"Step 7: Applets are launched into a safe environment and run.",id:"step-7-applets-are-launched-into-a-safe-environment-and-run",children:[]},{value:"Step 8: Applet results are saved after being run.",id:"step-8-applet-results-are-saved-after-being-run",children:[]},{value:"Step 9: Applet results are persisted for later access.",id:"step-9-applet-results-are-persisted-for-later-access",children:[]},{value:"Step 10: Scheduler updates invocation and audit log.",id:"step-10-scheduler-updates-invocation-and-audit-log",children:[]},{value:"Step 11: Request completes with any response data.",id:"step-11-request-completes-with-any-response-data",children:[]},{value:"Tags &amp; Automations",id:"tags--automations",children:[{value:"Tags as Arbitrary Data on Resources",id:"tags-as-arbitrary-data-on-resources",children:[]},{value:"Data-URI strings in Tags",id:"data-uri-strings-in-tags",children:[]},{value:"Atomic Indexed Access and Modification",id:"atomic-indexed-access-and-modification",children:[]},{value:"Automations as Multidimensional Planes of Data within Tags",id:"automations-as-multidimensional-planes-of-data-within-tags",children:[]}]},{value:"Federated Systems Using the Automation Framework",id:"federated-systems-using-the-automation-framework",children:[]}],d={toc:l};function p(e){var t=e.components,o=Object(r.a)(e,s);return Object(i.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The LAMP Platform always collects data in a secure way before automatically processing and harmonizing it for you. Researchers/clinicians, and patients/participants can view their data in the frontend user interface. Patients will always retain ownership when contributing their data to your study or clinic and may always download and view their own data. Cognitive tests and survey instruments collect high quality metadata that can measure attention, focus, memory performance, and more."),Object(i.b)("p",null,"The LAMP Protocol, upon which the LAMP Platform is built, may also be integrated into other systems as it is intuitive, simple, and has security and privacy built-in. It models active and passive data together as evolving streams of events, and data becomes reactive and clinically actionable through user-defined applets across R, Python, and JS. Credential management is built into the object hierarchy, which uses OpenAPI and JSONSchema to mark up extensible interfaces. The industry encryption standards AES-256 and TLSv1.3 facilitate secure storage and transmission of data in a HIPAA, COPPA, and GDPR-compliant manner."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"LAMP Platform")," consists of two broad domains: ",Object(i.b)("strong",{parentName:"p"},"(1) local"),": the components that users will see and interact with through smartphone or wearable devices, and ",Object(i.b)("strong",{parentName:"p"},"(2) remote"),": the components located off-device that process data, coordinate applets, and handle synchronization. The app serves to both capture diverse streams of sensor and activity measurements ranging from heart rate to mood and to prompt suggested user interactions. It informs the ",Object(i.b)("strong",{parentName:"p"},"LAMP Platform")," with a micro-temporal slice of the user\u2019s physical and mental health. The server components supporting the ",Object(i.b)("strong",{parentName:"p"},"LAMP Platform")," play an equally important role in securely encrypting and processing the data, establishing the user\u2019s \u201cdigital fingerprint\u201d and predicting changes that could potentially result in relapse. app-based interventions can be deployed to improve the user\u2019s health and relevant health data can automatically be shared with authorized care team members."),Object(i.b)("p",null,"The figures below detail one operation typically performed by the ",Object(i.b)("strong",{parentName:"p"},"LAMP Platform"),". Shown on the left-hand side is the app, and on the right-hand side is the server. Note that both pieces consist of numerous components that work together as a modular distributed system to transfer and process data in a clinically relevant context. A full specification of all components and their interactivity is documented in later sections. Please note that an important distinction in naming is made between the ",Object(i.b)("strong",{parentName:"p"},"local")," and ",Object(i.b)("strong",{parentName:"p"},"remote")," domains: the components of the former are prefixed with \u201c",Object(i.b)("strong",{parentName:"p"},"mindLAMP"),"\u201d where the components of the latter are prefixed only with \u201c",Object(i.b)("strong",{parentName:"p"},"LAMP"),"\u201d as this distinction clarifies the scope and requirements of the components themselves."),Object(i.b)("p",null,Object(i.b)("img",{src:a(770).default})),Object(i.b)("p",null,Object(i.b)("img",{src:a(6259).default})),Object(i.b)("h2",{id:"step-1-sensor-events-are-recorded-in-real-time"},"Step 1: Sensor events are recorded in real-time."),Object(i.b)("p",null,"High-frequency sensors on the mobile or wearable device record measurements based on the user\u2019s current configuration settings defined by an administrator. This data is stored in a buffer on the device's hardware managed by the operating system (either iOS or Android) and provided to the app periodically while it is in the background."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6260).default})),Object(i.b)("h2",{id:"step-2-collected-events-are-cached-awaiting-server-reachability"},"Step 2: Collected events are cached, awaiting server reachability."),Object(i.b)("p",null,"The device\u2019s buffer and operating system make no guarantees to save data from the current moment for the next time the app is run in the background. Because of this and the likelihood that the remote server may not be reachable due to poor signal, the measurements are immediately cached by the app whenever it is notified in the background. When battery levels are sufficient, and network connectivity to the remote server available, and enough data is cached, the app begins synchronization."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6261).default})),Object(i.b)("h2",{id:"step-3-server-receives-and-processes-requests-from-the-app"},"Step 3: Server receives and processes requests from the app."),Object(i.b)("p",null,"The app submits a request to the server for synchronizing and uploading its cached data. Once uploaded successfully, it is unpacked and examined by the server for further automated processing."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6262).default})),Object(i.b)("h2",{id:"step-4-server-coordinates-internal-components-for-processing"},"Step 4: Server coordinates internal components for processing."),Object(i.b)("p",null,'The server prepares instructions for internal components based on the data uploaded by the app. These instructions are pushed through the internal data bus (a message queue) that connects all internal controllers in the platform. The extensibility of the internal components and the data bus interconnecting them means components can be swapped out or replaced depending on context. In deployments or regions where some features should be disabled, their relevant components are "unplugged" from this data bus.'),Object(i.b)("p",null,Object(i.b)("img",{src:a(6263).default})),Object(i.b)("h2",{id:"step-5-database-records-the-incoming-data"},"Step 5: Database records the incoming data."),Object(i.b)("p",null,"Depending on the server\u2019s system configuration and the content of the data uploaded, the database then records all event data and schedules an automated backup. The database considers the origin of the events as it saves them, harmonizing data from various sensors through a unified schema."),Object(i.b)("p",null,"![](assets/Untitled 75.png)"),Object(i.b)("h2",{id:"step-6-the-scheduler-coordinates-and-runs-automations"},"Step 6: The scheduler coordinates and runs automations."),Object(i.b)("p",null,"Once the database completes saving data and any backup processes, the scheduler component is engaged to determine if any data processing \u201capplets\u201d or other internal maintenance tasks need to run. After assessing cost and priority, the scheduler creates an execution plan consisting of the above and notifies these components. The scheduler relies on heuristics gathered from audit logs to determine the plan."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6264).default})),Object(i.b)("h2",{id:"step-7-applets-are-launched-into-a-safe-environment-and-run"},"Step 7: Applets are launched into a safe environment and run."),Object(i.b)("p",null,"Assuming no internal maintenance tasks need to run, the scheduler may create an execution plan with only a single applet. Once started, a new virtual environment is prepared and securely isolated from other data. For example, an R environment would analyze the script to run and install the correct versions of all required packages, replicating the environment used by the applet's author."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"mailto:team@digitalpsych.org"},"Please contact us directly for guidance on delivery of just-in-time interventions.")),Object(i.b)("p",null,Object(i.b)("img",{src:a(6265).default})),Object(i.b)("h2",{id:"step-8-applet-results-are-saved-after-being-run"},"Step 8: Applet results are saved after being run."),Object(i.b)("p",null,'As the applet executes, its input and output are spliced from the automation controller and saved as tags. For example, an applet called "com.test.some_script" may create a new tag \u201ccom.test.some_script\u201d attached to some resource in the database, or append to an existing tag with the same name. Any runtime logs are extracted separately from this result.'),Object(i.b)("p",null,Object(i.b)("img",{src:a(6266).default})),Object(i.b)("h2",{id:"step-9-applet-results-are-persisted-for-later-access"},"Step 9: Applet results are persisted for later access."),Object(i.b)("p",null,"If an applet is configured to persist its output, the data are persisted to the database as a tag and may be accessed by a client app directly at a later time. For example, an applet may compute a dynamic visualization to be cached, or it could lookup login credentials from a predefined tag to access and convert data from a third-party system such as Fitbit into native resource objects which are then persisted by the database."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6267).default})),Object(i.b)("h2",{id:"step-10-scheduler-updates-invocation-and-audit-log"},"Step 10: Scheduler updates invocation and audit log."),Object(i.b)("p",null,"Once an execution plan completes, the scheduler records statistics about it for its next engagement."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6268).default})),Object(i.b)("h2",{id:"step-11-request-completes-with-any-response-data"},"Step 11: Request completes with any response data."),Object(i.b)("p",null,"If any controller responds to their currently executing instruction with a response payload (such as the execution output of an applet), it is bundled and returned to the API client synchronously. If a controller needs more time to process an instruction, it can return a pointer to an operation resource that can be used in a later asynchronous request to the server to locate the response once completed. If a controller chooses to respond to an instruction but is unable to complete it, the response returns immediately to the client app as an error."),Object(i.b)("h2",{id:"tags--automations"},"Tags & Automations"),Object(i.b)("p",null,"Automations are a flexible framework for the LAMP platform that allow you to run complex analytics and decision support tools either in reaction to new events in an event stream, or on a periodic schedule. Without having to configure a processing pipeline for system requirements such as CPU, I/O, or RAM, automations abstract the functional logic from data resources and system requirements. Automations support simple, flexible, and portable code that can run on low-power devices such as smartwatches or older smartphones all the way up to large servers and computing clusters in the cloud."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6269).default})),Object(i.b)("p",null,'These "applets," called Automations, can be written in typical data science programming languages such as JavaScript, Python, and R, with any packages or dependencies automatically bundled within. When installed onto a Resource (that is, a Researcher, Study, Participant, or even an Activity), it is capable of listening to events generated by that Resource. For example, if installed for Participants, one such applet could listen to any SensorEvents or ActivityEvents, or when installed for Activities, it could listen only to anonymized ActivityEvents generated by any Participant. When the Cloud server receives new events, it prepares all Automations that fit the specified event mask and allows them to execute with preallocated hardware limits.'),Object(i.b)("h3",{id:"tags-as-arbitrary-data-on-resources"},"Tags as Arbitrary Data on Resources"),Object(i.b)("p",null,"Tags are an arbitrary unit of extensibility available to all Resource sub-types. Through string-indexed/keyed subscripting, out-of-line data may be attached to objects in the LAMP Platform as an ad-hoc micro-database. For a flow chart on the usage of Tags, see the figure below. Tags are a powerful tool that may be leveraged by clients of the LAMP Platform to build applets for the Platform as well as smaller apps within such client apps themselves."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6270).default})),Object(i.b)("h3",{id:"data-uri-strings-in-tags"},"Data-URI strings in Tags"),Object(i.b)("p",null,"Tags may consist of JSON object, array, or primitive types, as well as encoded ",Object(i.b)("inlineCode",{parentName:"p"},"data-uri")," strings (to represent binary data like PDFs or MP3s). ",Object(i.b)("inlineCode",{parentName:"p"},"data-uri")," strings are normal string primitives but prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"data:<mime_type>[;base64],")," where ",Object(i.b)("inlineCode",{parentName:"p"},"<mime_type>")," refers to the binary application file type of the data that follows, such as ",Object(i.b)("inlineCode",{parentName:"p"},"application/json"),", ",Object(i.b)("inlineCode",{parentName:"p"},"text/plain; charset=utf8"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"image/svg+xml"),". If the ",Object(i.b)("inlineCode",{parentName:"p"},"base64")," optional parameter is provided, the contents of the string following the comma are to be base64-decoded when interpreted by the LAMP Platform or clients of the LAMP Protocol. Specifying an optional ",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," header type may optionally allow the LAMP server component or other LAMP Protocol vendors to automatically convert such ",Object(i.b)("inlineCode",{parentName:"p"},"data-uri")," strings into a binary type."),Object(i.b)("h3",{id:"atomic-indexed-access-and-modification"},"Atomic Indexed Access and Modification"),Object(i.b)("p",null,"Furthermore, to support atomic operations on Tags, an indexed modifier version of get & set methods shall exist such that for a Tag whose content is an object, the method ",Object(i.b)("inlineCode",{parentName:"p"},"GET | POST /type/<id>/my.tag.name.here[/someKeyedIndex]")," shall return or replace only the sub-content of the object but not the whole object represented by the Tag. For JSON arrays, keyed indices shall take the form of continuous numbered indices found in the array itself, including the special index ",Object(i.b)("inlineCode",{parentName:"p"},"length")," which shall only return but not replace the length of the underlying array. Through these rudimentary atomic mutation facilities, vendors and clients of the LAMP Protocol may perform basic synchronization without poll-waiting or SSE (Server Sent Events) reconciliation."),Object(i.b)("h3",{id:"automations-as-multidimensional-planes-of-data-within-tags"},"Automations as Multidimensional Planes of Data within Tags"),Object(i.b)("p",null,"Automations shall be represented by their specific LAMP Protocol object schema, but encoded as a plaintext JSON data-uri string with the mime type ",Object(i.b)("inlineCode",{parentName:"p"},"application/vnd+lamp.automation"),". When registering or unregistering an Automation\u2019s availability with a LAMP server or other component, the component itself shall maintain a running record of compute images, trigger-points, and code for each Automation. When the Tag containing the Automation data is removed, the Automation itself shall be unregistered and made no longer functional in that instance of the LAMP Platform. The figure below describes the relationship between the static data plan (Tags) and the dynamic data plane (Automations) which leverage the functionality described in prior chapters to perform Just-In-Time intervention, prediction, analysis, visualization, or some other set of relevant functions. ",Object(i.b)("strong",{parentName:"p"},"This functionality has also been superceded by the TagSpec API.")),Object(i.b)("p",null,Object(i.b)("img",{src:a(6271).default})),Object(i.b)("h2",{id:"federated-systems-using-the-automation-framework"},"Federated Systems Using the Automation Framework"),Object(i.b)("p",null,"Supposing multiple existing systems provided clinically useful sources of data, such as longitudinal imaging repositories or existing Fitbit devices synchronized to the cloud. While data retrieval and ad-hoc storage of \u201cout-of-line\u201d (that is, unrecognized by the Platform, but retaining meaning to its owner) data from within the Platform is simple using the API, it would be simply infeasible to manually verify modified data against multiple specific conditions and run several scripts in the Researcher\u2019s local computer before sending out notifications or awaiting further processing from elsewhere. Instead, the Platform supports, through the Automations framework, a method of dynamically running such scripts as \u201capplets\u201d atop extremely powerful unconstrained hardware not managed by the Researcher or their IT department."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6272).default})),Object(i.b)("p",null,"In the example above, a combination of two applets and an external Amazon S3 database (unknown to the LAMP Platform) provide the equivalent three step upload-process-analyze functionality of apps such as AWARE, Fitbit, Beiwe, Google Fit, and more. The ",Object(i.b)("inlineCode",{parentName:"p"},"lamp.anomaly_detection")," applet is not considered a part of this group as it was written to use only the standard API provided by the LAMP Platform; it contains no knowledge of the other two applets and the external database. The ",Object(i.b)("inlineCode",{parentName:"p"},"org.aware.upload")," applet requests preallocation of storage, perhaps on the order of ~5GB, but entirely variable depending on the Participant\u2019s device or historical data uploads. It then returns a response immediately to the requesting smartphone device or internet service with a URL to which it can upload the data. The second applet, ",Object(i.b)("inlineCode",{parentName:"p"},"org.aware.processing")," is instead run by the Cloud server every 5 minutes to check if any processing needs to be done in the database, and if so, executes the processing, but otherwise does nothing. This applet converts the uploaded data to LAMP Resources (ActivityEvents or SensorEvents, specifically) and submits them to the Cloud server in bulk. Just as with any other events received by the Cloud server, it will then execute a set of Automation applets \u2014 in this case, ",Object(i.b)("inlineCode",{parentName:"p"},"lamp.anomaly_detection"),". In summary, with this multi-applet workflow, data is automatically uploaded and stored in an external database wholly maintained by a third-party, subsequently converted to actionable reactive LAMP Sensor or ActivityEvents, and finally analyzed through the same methods as all other data."))}p.isMDXComponent=!0},391:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return a?r.a.createElement(m,o(o({ref:t},l),{},{components:a})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6259:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_70-de49155d4339fac5a2e52be850b61c8b.png"},6260:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_71-e11357790059c520d3b7626087a41e8c.png"},6261:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_72-74800a942c1b724d35cdf6e933490cd9.png"},6262:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_73-acca8b13717d72fa1dd27e164759b6a2.png"},6263:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_74-391533020cae0f7b1f3f65b7bb202037.png"},6264:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_76-2e669d298769343215ef01b6815be70f.png"},6265:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_77-444461fc01fe965dcc0ce9aa07e03591.png"},6266:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_78-5cb596a24573770380780cb83af464d2.png"},6267:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_79-0d9c0b9f73c1ca024767bf404fc06c56.png"},6268:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled_80-0ec80c39dd7d2229f16bb15bdedb4e93.png"},6269:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Analysis_Methods-c26de5faf7a71752969b3fd08a08b878.png"},6270:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Tags_Example-5b87923d7a9d39e168ae0a63e14ed025.png"},6271:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Dynamic_Attachments-7d81352def9ccf4a7e1154fc551452d9.png"},6272:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Action_Chart-2d9395017b1f9a82874edf0127e9ddad.png"},770:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Platform_Overview-0c296dc1945d269d56d5b323bb31c142.png"}}]);