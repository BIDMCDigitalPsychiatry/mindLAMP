"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8169],{25215:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/cortex_caching-48e12ee19b06a4e2c7ca11748fcb68a8.svg"},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>o});var i=a(96540);const r={},s=i.createContext(r);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:t},e.children)}},41623:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/cortex_diagram-94de71693df138ae41d4007dd849e50b.svg"},95140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"data_science/cortex/what_is_cortex","title":"What is Cortex?","description":"Overview","source":"@site/docs/09-data_science/06-cortex/02-what_is_cortex.md","sourceDirName":"09-data_science/06-cortex","slug":"/data_science/cortex/what_is_cortex","permalink":"/data_science/cortex/what_is_cortex","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/02-what_is_cortex.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1739471246000,"sidebarPosition":2,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Cortex Quick Start Guide","permalink":"/data_science/cortex/getting-started"},"next":{"title":"Running Cortex","permalink":"/data_science/cortex/running_cortex"}}');var r=a(74848),s=a(28453);const n={},o="What is Cortex?",d={},l=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Why Cortex?</strong>",id:"why-cortex",level:2},{value:"Cortex Engine",id:"cortex-engine",level:2},{value:"<strong>Examples of Algorithms</strong>",id:"examples-of-algorithms",level:2},{value:"<em>Sleep Suite</em>",id:"sleep-suite",level:3},{value:"<em>Mobility Suite</em>",id:"mobility-suite",level:3}];function c(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"what-is-cortex",children:"What is Cortex?"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:(0,r.jsx)(t.strong,{children:"Overview"})}),"\n",(0,r.jsx)(t.p,{children:"The Cortex data analysis toolkit is part of the LAMP Platform, enabling researchers and clinicians with a variety of backgrounds to use pre-built tools to analyze their data and build analysis pipelines."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"It integrates tightly across the platform to provide a unified processing pipeline to convert patient or participant data into useful features that provide valuable clinical and research insight."}),"\n",(0,r.jsx)(t.li,{children:"It offers robust support for behavioral feature extraction, interactive visualizations, and high-performance data processing through parallelization and vectorization techniques."}),"\n",(0,r.jsx)(t.li,{children:"It obviates the need for individual analyses tied to custom code for specific sensor types across various devices."}),"\n",(0,r.jsx)(t.li,{children:"It provides a companion IDE based on JupyterLab and VSCode that abstracts away login and security issues by securely injecting an authenticated connection to the server into Cortex and resulting analysis notebooks."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:a(41623).A+""})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Categories of Activity and Sensor data types alongside Cortex features synthesized from raw data streams. Availability of Wearable Sensors depends on the device type used and supported API. You may use cortex.all_features() to list all features."})}),"\n",(0,r.jsx)(t.h2,{id:"why-cortex",children:(0,r.jsx)(t.strong,{children:"Why Cortex?"})}),"\n",(0,r.jsx)(t.p,{children:"The unique data structure of the LAMP platform allows all users to analyze their data without the need for a specific data science team. Cortex makes meaningful analysis easy and accessible with only a few lines of code."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.em,{children:"Robust data streams \u2014 Cortex leverages the wide variety of data collected in the LAMP platform to provide researchers, clinicians, and patients numerous features that characterize users\u2019 moment-by-moment behaviors. These data streams are derived from data reported within the app as well as data sensed passively by user devices."})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.em,{children:"Flexible \u2014 Cortex allows you to easily customize the processing of your data. For example, whether you want to view your data at hourly, daily, or weekly intervals, Cortex will automatically parse your data into the timeframe of your choice."})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.em,{children:"Scalable \u2014 The LAMP platform was designed with large datasets in mind. Handling data across large studies is often a challenge. Cortex can process any amount of data, without requiring extra code."})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.em,{children:"Interoperable \u2014 In Cortex, raw data from the mindLAMP app is transformed into and stored as a list of dictionaries which can easily be transformed into a Pandas DataFrame. Pandas is a popular package that provides a robust set of tools for analyzing data. For example, after processing is done and your featurized data is ready for use as a dataframe, you can perform correlational or time-series analysis with just a few lines of code. If you would like to perform analysis using another statistical package, such as R or SPSS, you can easily export the processed data in CSV/XLS format and import it in the exogenous environment. You can also run other team\u2019s algorithms or see how your code procedures result compared to others."})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"cortex-engine",children:"Cortex Engine"}),"\n",(0,r.jsxs)(t.p,{children:['The Cortex Engine breaks down data streams into three fundamental categories of "features." A feature is a consolidated representation of significant behavioral measures as captured by ',(0,r.jsx)(t.em,{children:"both"})," activities and sensors in the LAMP Platform. Features may also act as target or independent variables, for example, in the context of machine learning models."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Raw Features"}),': A "raw" feature is a fully virtualized Cortex-compatible abstraction of a low level data stream from the LAMP Platform (for example, survey question responses or accelerometer data). The integration of raw features allows for simplified development of analysis code both within Cortex and outside of Cortex, by avoiding the need to switch contexts between the higher-level Cortex abstractions and the lower-level underlying LAMP Protocol when writing code. For information about raw features, please see the documentation on Feature Types.']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Primary Features"}),': A "primary" feature is a miniaturized abstraction around a raw feature that can either be used directly, or used within ',(0,r.jsx)(t.em,{children:"multiple"})," secondary features and analyses. It acts as a reusable intermediate or bridge between these higher-level representations features and lower-level raw data streams. For example, ",(0,r.jsx)(t.code,{children:"Significant Locations"})," is a primary feature that processes raw GPS data and groups these data points together into weighted travelled regions of significance."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Secondary Features"}),': A "secondary" feature is a composite (i.e. summary) clinical / behavioral representation of multiple data streams, either through raw or primary features. Secondary features are additionally windowed by time resolution (i.e. "each day" vs. "each week"). For example, ',(0,r.jsx)(t.code,{children:"Home Time"})," is a secondary feature that buckets ",(0,r.jsx)(t.code,{children:"Significant Locations"})," by the specified resolution and determines the amount of time an individual spent at home within that time window. Additionally, ",(0,r.jsx)(t.code,{children:"Trip Distance"})," is a secondary feature that also relis on the ",(0,r.jsx)(t.code,{children:"Significant Locations"})," primary feature to calculate the distance traveled by an individual per time window."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"It's easy to use existng features to create your own novel features, or start entirely from scratch. Cortex will automatically handle the dependency and execution graph to ensure your data streams are post-processed in the right order. Cortex also intelligently caches raw features for re-running processing code and parallelized workflows across multiple features."}),"\n",(0,r.jsx)(t.p,{children:"Features in Cortex need not handle pre-processing for variation in sensor data between Android and iOS, because the LAMP Platform harmonizes the data, accounting for various differences in functionality and recording between Apple and Android devices. For example, accelerometer measurements taken on Apple devices are measured in G's (unit of gravity) with a frame of reference experiencing -1G in the downward-facing axis, whereas measurements on Android are measured in meters per second squared (m/s^2) without a frame of reference provided. Because the platform automatically applies this harmonization step, data analysis code and Cortex feature code need not have an intrinsic understanding of the source of the data."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:a(25215).A+"",width:"722",height:"567"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"A sample execution plan for Cortex:"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"The clinician or researcher creates an aggregate operation."}),"\n",(0,r.jsx)(t.li,{children:"Cortex transparently interposes the correct feature layers by creating a dependency graph of data and executes each \u201catomic operation\u201d (i.e. independent of external variables) in the order it computes to be most efficient."}),"\n",(0,r.jsx)(t.li,{children:"Any raw sensor data is transparently cached during execution."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples-of-algorithms",children:(0,r.jsx)(t.strong,{children:"Examples of Algorithms"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Entropy"}),": The variability of the time a participant spent at significant locations (i.e. clusters) determined by their GPS data."]}),"\n",(0,r.jsx)(t.h3,{id:"sleep-suite",children:(0,r.jsx)(t.em,{children:"Sleep Suite"})}),"\n",(0,r.jsx)(t.p,{children:"Cortex provides daily estimated sleep duration for users, derived from sensor data. Estimates are customized to each user\u2019s individual behavior, as Cortex finds their most common sleep window. The sleep estimation method is highly reliant on accelerometer data in particular, so users must have data from this sensor in order for Cortex to provide an accurate estimate. From this sensor data Cortex also provides estimates for time spent in active and sedentary states."}),"\n",(0,r.jsx)(t.h3,{id:"mobility-suite",children:(0,r.jsx)(t.em,{children:"Mobility Suite"})}),"\n",(0,r.jsx)(t.p,{children:"Cortex provides various features characterizing a user\u2019s mobility in a given time window. Unlike the sleep estimates, the mobility suite can be used at any time scale, whether that is two minutes, hours, days, or months. Mobility features rely on GPS sensor data, so users must have data from this sensor in order for processing to successfully occur."}),"\n",(0,r.jsxs)(t.p,{children:["Mobility features belong to one of two categories: ",(0,r.jsx)(t.em,{children:"trips"})," and ",(0,r.jsx)(t.em,{children:"significant locations"}),". ",(0,r.jsx)(t.em,{children:"Trips"})," provide information on discrete movement events that a user undergoes\u2014e.g. commuting to work or going to the grocery store. Features included in this category are trip duration, distance and count. ",(0,r.jsx)(t.em,{children:"Significant locations"})," provide information on places that users commonly visit. The coordinates of these locations is provided as well as the amount and fragmentation of time spent at each one, such as hometime location entropy, respectively."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);