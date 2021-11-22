(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{236:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),o=(a(0),a(391)),i=["components"],l={},c={unversionedId:"develop/intro",id:"develop/intro",isDocsHomePage:!1,title:"Components of the LAMP Platform",description:"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see Deployment Recommendations if you do not plan on using Docker.",source:"@site/docs/08-develop/01-intro.md",sourceDirName:"08-develop",slug:"/develop/intro",permalink:"/develop/intro",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/01-intro.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1637615649,formattedLastUpdatedAt:"11/22/2021",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Troubleshooting Deployment",permalink:"/deploy/troubleshooting"},next:{title:"How the Platform Works",permalink:"/develop/how_works"}},b=[{value:"<strong>API Server</strong>",id:"api-server",children:[]},{value:"<strong>Database</strong>",id:"database",children:[]},{value:"<strong>Message Queue</strong>",id:"message-queue",children:[]},{value:"<strong>Automations Worker</strong>",id:"automations-worker",children:[]},{value:"Repositories",id:"repositories",children:[]}],s={toc:b};function p(e){var t=e.components,l=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see ",Object(o.b)("strong",{parentName:"p"},"Deployment Recommendations")," if you do not plan on using Docker."),Object(o.b)("p",null,Object(o.b)("img",{src:a(770).default})),Object(o.b)("h3",{id:"api-server"},Object(o.b)("strong",{parentName:"h3"},"API Server")),Object(o.b)("p",null,"The gatekeeper between the internal and external domains."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This component is implemented in ",Object(o.b)("strong",{parentName:"li"},"Node.js"),"."),Object(o.b)("li",{parentName:"ul"},"****All API requests are stateless (i.e. there is no session management) and map to a single response."),Object(o.b)("li",{parentName:"ul"},"All requests irrespective of authentication requirement must be accompanied by a client API key. This pre-registered API key is recorded in the audit log with each request and serves as origination reference for resources and events."),Object(o.b)("li",{parentName:"ul"},"Using the Credential API, requests that require authentication and authorization are validated."),Object(o.b)("li",{parentName:"ul"},"Data transport must be encrypted and decrypted as per security & privacy policy.")),Object(o.b)("h3",{id:"database"},Object(o.b)("strong",{parentName:"h3"},"Database")),Object(o.b)("p",null,"The persistent data storage device supporting transient caching and complex querying."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This component is implemented by ",Object(o.b)("strong",{parentName:"li"},"CouchDB"),", with an alternate implementation for low-power usage in ",Object(o.b)("strong",{parentName:"li"},"Node.js")," using the ",Object(o.b)("strong",{parentName:"li"},"PouchDB")," framework.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"This component can instead by substituted using custom adapter code by ",Object(o.b)("strong",{parentName:"li"},"Redis"),", ",Object(o.b)("strong",{parentName:"li"},"Amazon S3"),", or for low-power usage, a na\xefve ",Object(o.b)("strong",{parentName:"li"},"Dictionary/Map")," object in ",Object(o.b)("strong",{parentName:"li"},"js"),"."))),Object(o.b)("li",{parentName:"ul"},"A key-value or document database (noSQL) is most ideal for storage needs of the ",Object(o.b)("strong",{parentName:"li"},"LAMP Protocol"),", due to its hierarchical object data and high throughput access and low latency manipulation requirements."),Object(o.b)("li",{parentName:"ul"},"To support real-time intervention deployment and management, an intermediate in-memory cache is used to ease the load on main long-term storage databases.")),Object(o.b)("h3",{id:"message-queue"},Object(o.b)("strong",{parentName:"h3"},"Message Queue")),Object(o.b)("p",null,"Handles the synchronization of communication between all the above actors in the server layer."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This component is implemented by the ",Object(o.b)("strong",{parentName:"li"},"Redis")," high performance key-value store, with an alternate implementation for low-power usage in ",Object(o.b)("strong",{parentName:"li"},"Node.js"),"."),Object(o.b)("li",{parentName:"ul"},"Each component upon startup must register itself with the message queue for service discovery."),Object(o.b)("li",{parentName:"ul"},"Any component may create any number of topics for which other components may publish messages to or subscribe to."),Object(o.b)("li",{parentName:"ul"},"Implementation of database manipulation operations, automation events, and the audit log relies solely on subscription to the global topic; the API Server publishes requests here with a unique identifier awaiting response.")),Object(o.b)("h3",{id:"automations-worker"},Object(o.b)("strong",{parentName:"h3"},"Automations Worker")),Object(o.b)("p",null,"This component handles scheduled push notification delivery as well as execution of triggered scripts to deliver interventions to patients."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A compute platform such as a Docker-enabled system or AWS Lambda is used to handle actual execution of code once bundled."),Object(o.b)("li",{parentName:"ul"},"A dependency bundler such as Webpack, PIP, or Packrat is used to bundle each automation\u2019s code to avoid dependency versioning conflicts that could crash or halt execution."),Object(o.b)("li",{parentName:"ul"},"This component encompasses: ",Object(o.b)("strong",{parentName:"li"},"Docker Environment, Attachment Container, Automation Scripts, Scheduler"),".")),Object(o.b)("h2",{id:"repositories"},"Repositories"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Frontend"),Object(o.b)("th",{parentName:"tr",align:null},"Backend"),Object(o.b)("th",{parentName:"tr",align:null},"Native Core"),Object(o.b)("th",{parentName:"tr",align:null},"Data Science"),Object(o.b)("th",{parentName:"tr",align:null},"Programming Libraries"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-dashboard"},"Dashboard")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-server"},"API Server")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-ios"},"iOS")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex"},"Cortex")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-r"},"R"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-activities"},"Activities")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-app-gateway"},"App Gateway")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-android"},"Android")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study"},"CollegeStudy")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-js"},"JS"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"},"Python"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-swift"},"Swift"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-kotlin"},"Kotlin"))))),Object(o.b)("p",null,"The LAMP Platform is designed, developed, and managed entirely as a series of GitHub repositories: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Core:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-platform"),": ",Object(o.b)("strong",{parentName:"li"},"All issues and documentation across any component repository MUST be centralized here!")," Acts as the project tracker and documentation hub.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"package.json"),": All configuration for the Docusaurus documentation generator is housed here; the ",Object(o.b)("inlineCode",{parentName:"li"},"docusaurus.config.js")," file is dynamically generated."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"openapi.json"),": This file is dynamically generated from the ",Object(o.b)("inlineCode",{parentName:"li"},"LAMP-protocol")," git submodule that contains the ",Object(o.b)("inlineCode",{parentName:"li"},"openapi.yaml")," file. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"blog"),': This directory contains the release notes/updates/"What\'s New" tab documents. '),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"docs"),": This directory contains all documentation in entirely markdown files. Each file and folder includes a numeric prefix that sorts its order in the documentation sidebar, as well as an ",Object(o.b)("inlineCode",{parentName:"li"},"assets")," folder for all relevant images and media. "))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-protocol"),": The ",Object(o.b)("inlineCode",{parentName:"li"},"openapi.yml")," file houses the OpenAPI specification for the LAMP Protocol, upon which the entire LAMP Platform is built."))),Object(o.b)("li",{parentName:"ol"},"Backend:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-server"),": (See Backend section in the documentation for more details on the nature of the component and how the code is organized.)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-worker"),": (See Automations section in the documentation for more details on the nature of the component and how the code is organized.)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-app-gateway"),": (See App Gateway section in the documentation for more details on the nature of the component and how the code is organized.)"))),Object(o.b)("li",{parentName:"ol"},"Frontend:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-dashboard"),": (See Frontend section in the documentation for more details on the nature of the component and how the code is organized.)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-data-studio"),":"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-activities"),": "))),Object(o.b)("li",{parentName:"ol"},"SDKs:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-js"),":"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-py"),":"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-r"),":"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-swift"),":"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-kotlin"),":"))),Object(o.b)("li",{parentName:"ol"},"Data Science:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-cortex"),": (See Cortex section in the documentation for more details on the nature of the component and how the code is organized.)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-ide"),": A JupyterLab and VSCode-based integrated development environment with extensive support for Cortex."))),Object(o.b)("li",{parentName:"ol"},"Native Apps:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-core-ios"),": A Swift-based scaffolding that incorporates support for TypeScript business logic and a WKWebView for the frontend UI. Designed to work well with the ",Object(o.b)("inlineCode",{parentName:"li"},"LAMP-swift")," SDK."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-core-android"),": A Kotlin-based scaffolding that incorporates support for TypeScript business logic and a WebView for the frontend UI. Designed to work well with the ",Object(o.b)("inlineCode",{parentName:"li"},"LAMP-kotlin")," SDK."))),Object(o.b)("li",{parentName:"ol"},"Other:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-college-study"),": A proof of concept for the Automations framework that is a part of the LAMP Platform."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"clinical-scales-importer"),": Automated clinical scale importer that works for RedCap integration into the LAMP Platform."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"analysis-tools"),": Misc. analysis tools for working with research studies using the LAMP Platform."))),Object(o.b)("li",{parentName:"ol"},"Deprecated:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-app"),": The mindLAMP v1 native app for iOS and Android. ",Object(o.b)("strong",{parentName:"li"},"DO NOT USE.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"LAMP-portal"),": The mindLAMP v1 backend. ",Object(o.b)("strong",{parentName:"li"},"DO NOT USE."))))))}p.isMDXComponent=!0},391:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?r.a.createElement(u,l(l({ref:t},b),{},{components:a})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},770:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Platform_Overview-0c296dc1945d269d56d5b323bb31c142.png"}}]);