"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[1141],{603905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},291630:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=a(487462),n=a(263366),i=(a(667294),a(603905)),o=["components"],s={},l="Cortex",c={unversionedId:"data_science/Cortex/cortex",id:"data_science/Cortex/cortex",isDocsHomePage:!1,title:"Cortex",description:"What is Cortex?",source:"@site/docs/09-data_science/06-Cortex/02-cortex.md",sourceDirName:"09-data_science/06-Cortex",slug:"/data_science/Cortex/cortex",permalink:"/data_science/Cortex/cortex",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-Cortex/02-cortex.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646856660,formattedLastUpdatedAt:"3/9/2022",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Cortex Quick Start Guide",permalink:"/data_science/Cortex/getting-started"},next:{title:"Advanced Usage",permalink:"/data_science/Cortex/advanced"}},d=[{value:"<strong>What is Cortex?</strong>",id:"what-is-cortex",children:[],level:2},{value:"<strong>Why Cortex?</strong>",id:"why-cortex",children:[],level:2},{value:"Cortex Engine",id:"cortex-engine",children:[],level:2},{value:"<strong>Examples of Algorithms</strong>",id:"examples-of-algorithms",children:[{value:"<em>Sleep Suite</em>",id:"sleep-suite",children:[],level:3},{value:"<em>Mobility Suite</em>",id:"mobility-suite",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cortex"},"Cortex"),(0,i.kt)("h2",{id:"what-is-cortex"},(0,i.kt)("strong",{parentName:"h2"},"What is Cortex?")),(0,i.kt)("p",null,"The Cortex data analysis toolkit is part of the LAMP Platform, enabling researchers and clinicians with a variety of backgrounds to use pre-built tools to analyze their data and build analysis pipelines. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It integrates tightly across the platform to provide a unified processing pipeline to convert patient or participant data into useful features that provide valuable clinical and research insight."),(0,i.kt)("li",{parentName:"ul"},"It offers robust support for behavioral feature extraction, interactive visualizations, and high-performance data processing through parallelization and vectorization techniques."),(0,i.kt)("li",{parentName:"ul"},"It obviates the need for individual analyses tied to custom code for specific sensor types across various devices."),(0,i.kt)("li",{parentName:"ul"},"It provides a companion IDE based on JupyterLab and VSCode that abstracts away login and security issues by securely injecting an authenticated connection to the server into Cortex and resulting analysis notebooks.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(940651).Z})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Categories of Activity and Sensor data types alongside Cortex features synthesized from raw data streams. Availability of Wearable Sensors depends on the device type used and supported API.")),(0,i.kt)("h2",{id:"why-cortex"},(0,i.kt)("strong",{parentName:"h2"},"Why Cortex?")),(0,i.kt)("p",null,"The unique data structure of the LAMP platform allows all users to analyze their data without the need for a specific data science team. Cortex makes meaningful analysis easy and accessible with only a few lines of code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Robust data streams \u2014 Cortex leverages the wide variety of data collected in the LAMP platform to provide researchers, clinicians, and patients numerous features that characterize users\u2019 moment-by-moment behaviors. These data streams are derived from data reported within the app as well as data sensed passively by user devices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Flexible \u2014 Cortex allows you to easily customize the processing of your data. For example, whether you want to view your data at hourly, daily, or weekly intervals, Cortex will automatically parse your data into the timeframe of your choice.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Scalable \u2014 The LAMP platform was designed with large datasets in mind. Handling data across large studies is often a challenge. Cortex can process any amount of data, without requiring extra code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Interoperable \u2014 In Cortex, raw data from the mindLAMP app is transformed into and stored as a list of dictionaries which can easily be transformed into a Pandas DataFrame. Pandas is a popular package that provides a robust set of tools for analyzing data. For example, after processing is done and your featurized data is ready for use as a dataframe, you can perform correlational or time-series analysis with just a few lines of code. If you would like to perform analysis using another statistical package, such as R or SPSS, you can easily export the processed data in CSV/XLS format and import it in the exogenous environment. You can also run other team\u2019s algorithms or see how your code procedures result compared to others."))),(0,i.kt)("h2",{id:"cortex-engine"},"Cortex Engine"),(0,i.kt)("p",null,'The Cortex Engine breaks down data streams into three fundamental categories of "features." A feature is a consolidated representation of significant behavioral measures as captured by ',(0,i.kt)("em",{parentName:"p"},"both")," activities and sensors in the LAMP Platform. Features may also act as target or independent variables, for example, in the context of machine learning models. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Raw Features"),': A "raw" feature is a fully virtualized Cortex-compatible abstraction of a low level data stream from the LAMP Platform (for example, survey question responses or accelerometer data). The integration of raw features allows for simplified development of analysis code both within Cortex and outside of Cortex, by avoiding the need to switch contexts between the higher-level Cortex abstractions and the lower-level underlying LAMP Protocol when writing code. For information about raw features, please see the documentation on Feature Types.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Primary Features"),': A "primary" feature is a miniaturized abstraction around a raw feature that can either be used directly, or used within ',(0,i.kt)("em",{parentName:"li"},"multiple")," secondary features and analyses. It acts as a reusable intermediate or bridge between these higher-level representations features and lower-level raw data streams. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"Significant Locations")," is a primary feature that processes raw GPS data and groups these data points together into weighted travelled regions of significance."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Secondary Features"),': A "secondary" feature is a composite (i.e. summary) clinical / behavioral representation of multiple data streams, either through raw or primary features. Secondary features are additionally windowed by time resolution (i.e. "each day" vs. "each week"). For example, ',(0,i.kt)("inlineCode",{parentName:"li"},"Home Time")," is a secondary feature that buckets ",(0,i.kt)("inlineCode",{parentName:"li"},"Significant Locations")," by the specified resolution and determines the amount of time an individual spent at home within that time window. Additionally, ",(0,i.kt)("inlineCode",{parentName:"li"},"Trip Distance")," is a secondary feature that also relis on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Significant Locations")," primary feature to calculate the distance traveled by an individual per time window. ")),(0,i.kt)("p",null,"It's easy to use existng features to create your own novel features, or start entirely from scratch. Cortex will automatically handle the dependency and execution graph to ensure your data streams are post-processed in the right order. Cortex also intelligently caches raw features for re-running processing code and parallelized workflows across multiple features."),(0,i.kt)("p",null,"Features in Cortex need not handle pre-processing for variation in sensor data between Android and iOS, because the LAMP Platform harmonizes the data, accounting for various differences in functionality and recording between Apple and Android devices. For example, accelerometer measurements taken on Apple devices are measured in G's (unit of gravity) with a frame of reference experiencing -1G in the downward-facing axis, whereas measurements on Android are measured in meters per second squared (m/s^2) without a frame of reference provided. Because the platform automatically applies this harmonization step, data analysis code and Cortex feature code need not have an intrinsic understanding of the source of the data. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(51720).Z})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A sample execution plan for Cortex:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The clinician or researcher creates an aggregate operation."),(0,i.kt)("li",{parentName:"ol"},"Cortex transparently interposes the correct feature layers by creating a dependency graph of data and executes each \u201catomic operation\u201d (i.e. independent of external variables) in the order it computes to be most efficient."),(0,i.kt)("li",{parentName:"ol"},"Any raw sensor data is transparently cached during execution.")),(0,i.kt)("h2",{id:"examples-of-algorithms"},(0,i.kt)("strong",{parentName:"h2"},"Examples of Algorithms")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Entropy"),": The variability of the time a participant spent at significant locations (i.e. clusters) determined by their GPS data."),(0,i.kt)("h3",{id:"sleep-suite"},(0,i.kt)("em",{parentName:"h3"},"Sleep Suite")),(0,i.kt)("p",null,"Cortex provides daily estimated sleep duration for users, derived from sensor data. Estimates are customized to each user\u2019s individual behavior, as Cortex finds their most common sleep window. The sleep estimation method is highly reliant on accelerometer data in particular, so users must have data from this sensor in order for Cortex to provide an accurate estimate. From this sensor data Cortex also provides estimates for time spent in active and sedentary states."),(0,i.kt)("h3",{id:"mobility-suite"},(0,i.kt)("em",{parentName:"h3"},"Mobility Suite")),(0,i.kt)("p",null,"Cortex provides various features characterizing a user\u2019s mobility in a given time window. Unlike the sleep estimates, the mobility suite can be used at any time scale, whether that is two minutes, hours, days, or months. Mobility features rely on GPS sensor data, so users must have data from this sensor in order for processing to successfully occur."),(0,i.kt)("p",null,"Mobility features belong to one of two categories: ",(0,i.kt)("em",{parentName:"p"},"trips")," and ",(0,i.kt)("em",{parentName:"p"},"significant locations"),". ",(0,i.kt)("em",{parentName:"p"},"Trips")," provide information on discrete movement events that a user undergoes\u2014e.g. commuting to work or going to the grocery store. Features included in this category are trip duration, distance and count. ",(0,i.kt)("em",{parentName:"p"},"Significant locations")," provide information on places that users commonly visit. The coordinates of these locations is provided as well as the amount and fragmentation of time spent at each one, such as hometime location entropy, respectively."))}p.isMDXComponent=!0},51720:function(e,t,a){t.Z=a.p+"assets/images/cortex_caching-48e12ee19b06a4e2c7ca11748fcb68a8.svg"},940651:function(e,t,a){t.Z=a.p+"assets/images/cortex_diagram-0f5a0f0388a44c57813dab20b80e7483.svg"}}]);