"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[6908],{95456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"develop/intro","title":"Components of the LAMP Platform","description":"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see Deployment Recommendations if you do not plan on using Docker.","source":"@site/docs/08-develop/01-intro.md","sourceDirName":"08-develop","slug":"/develop/intro","permalink":"/develop/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/01-intro.md","tags":[],"version":"current","lastUpdatedBy":"Matt Flathers","lastUpdatedAt":1730911240000,"sidebarPosition":1,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Configuring your server to add Sensors and Activities","permalink":"/deploy/enabling_sensors_and_activities"},"next":{"title":"How the Platform Works","permalink":"/develop/how_works"}}');var i=t(74848),o=t(28453);const r={},d="Components of the LAMP Platform",a={},l=[{value:"<strong>API Server</strong>",id:"api-server",level:3},{value:"<strong>Database</strong>",id:"database",level:3},{value:"<strong>Message Queue</strong>",id:"message-queue",level:3},{value:"<strong>Automations Worker</strong>",id:"automations-worker",level:3},{value:"Repositories",id:"repositories",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"components-of-the-lamp-platform",children:"Components of the LAMP Platform"})}),"\n",(0,i.jsxs)(n.p,{children:["The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see ",(0,i.jsx)(n.strong,{children:"Deployment Recommendations"})," if you do not plan on using Docker."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(5566).A+"",width:"5804",height:"3820"})}),"\n",(0,i.jsx)(n.h3,{id:"api-server",children:(0,i.jsx)(n.strong,{children:"API Server"})}),"\n",(0,i.jsx)(n.p,{children:"The gatekeeper between the internal and external domains."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This component is implemented in ",(0,i.jsx)(n.strong,{children:"Node.js"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"****All API requests are stateless (i.e. there is no session management) and map to a single response."}),"\n",(0,i.jsx)(n.li,{children:"All requests irrespective of authentication requirement must be accompanied by a client API key. This pre-registered API key is recorded in the audit log with each request and serves as origination reference for resources and events."}),"\n",(0,i.jsx)(n.li,{children:"Using the Credential API, requests that require authentication and authorization are validated."}),"\n",(0,i.jsx)(n.li,{children:"Data transport must be encrypted and decrypted as per security & privacy policy."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"database",children:(0,i.jsx)(n.strong,{children:"Database"})}),"\n",(0,i.jsx)(n.p,{children:"The persistent data storage device supporting transient caching and complex querying."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This component is implemented by ",(0,i.jsx)(n.strong,{children:"CouchDB"}),", with an alternate implementation for low-power usage in ",(0,i.jsx)(n.strong,{children:"Node.js"})," using the ",(0,i.jsx)(n.strong,{children:"PouchDB"})," framework.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This component can instead by substituted using custom adapter code by ",(0,i.jsx)(n.strong,{children:"Redis"}),", ",(0,i.jsx)(n.strong,{children:"Amazon S3"}),", or for low-power usage, a na\xefve ",(0,i.jsx)(n.strong,{children:"Dictionary/Map"})," object in ",(0,i.jsx)(n.strong,{children:"js"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["A key-value or document database (noSQL) is most ideal for storage needs of the ",(0,i.jsx)(n.strong,{children:"LAMP Protocol"}),", due to its hierarchical object data and high throughput access and low latency manipulation requirements."]}),"\n",(0,i.jsx)(n.li,{children:"To support real-time intervention deployment and management, an intermediate in-memory cache is used to ease the load on main long-term storage databases."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"message-queue",children:(0,i.jsx)(n.strong,{children:"Message Queue"})}),"\n",(0,i.jsx)(n.p,{children:"Handles the synchronization of communication between all the above actors in the server layer."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This component is implemented by the ",(0,i.jsx)(n.strong,{children:"Redis"})," high performance key-value store, with an alternate implementation for low-power usage in ",(0,i.jsx)(n.strong,{children:"Node.js"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Each component upon startup must register itself with the message queue for service discovery."}),"\n",(0,i.jsx)(n.li,{children:"Any component may create any number of topics for which other components may publish messages to or subscribe to."}),"\n",(0,i.jsx)(n.li,{children:"Implementation of database manipulation operations, automation events, and the audit log relies solely on subscription to the global topic; the API Server publishes requests here with a unique identifier awaiting response."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"automations-worker",children:(0,i.jsx)(n.strong,{children:"Automations Worker"})}),"\n",(0,i.jsx)(n.p,{children:"This component handles scheduled push notification delivery as well as execution of triggered scripts to deliver interventions to patients."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A compute platform such as a Docker-enabled system or AWS Lambda is used to handle actual execution of code once bundled."}),"\n",(0,i.jsx)(n.li,{children:"A dependency bundler such as Webpack, PIP, or Packrat is used to bundle each automation\u2019s code to avoid dependency versioning conflicts that could crash or halt execution."}),"\n",(0,i.jsxs)(n.li,{children:["This component encompasses: ",(0,i.jsx)(n.strong,{children:"Docker Environment, Attachment Container, Automation Scripts, Scheduler"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"repositories",children:"Repositories"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Frontend"}),(0,i.jsx)(n.th,{children:"Backend"}),(0,i.jsx)(n.th,{children:"Native Core"}),(0,i.jsx)(n.th,{children:"Data Science"}),(0,i.jsx)(n.th,{children:"Programming Libraries"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-dashboard",children:"Dashboard"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-server",children:"API Server"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-ios",children:"iOS"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex",children:"Cortex"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-r",children:"R"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-activities",children:"Activities"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-app-gateway",children:"App Gateway"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-android",children:"Android"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study",children:"CollegeStudy"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-js",children:"JS"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py",children:"Python"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-swift",children:"Swift"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-kotlin",children:"Kotlin"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The LAMP Platform is designed, developed, and managed entirely as a series of GitHub repositories:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Core:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-platform"}),": ",(0,i.jsx)(n.strong,{children:"All issues and documentation across any component repository MUST be centralized here!"})," Acts as the project tracker and documentation hub.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"package.json"}),": All configuration for the Docusaurus documentation generator is housed here; the ",(0,i.jsx)(n.code,{children:"docusaurus.config.js"})," file is dynamically generated."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"openapi.json"}),": This file is dynamically generated from the ",(0,i.jsx)(n.code,{children:"LAMP-protocol"})," git submodule that contains the ",(0,i.jsx)(n.code,{children:"openapi.yaml"})," file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"blog"}),': This directory contains the release notes/updates/"What\'s New" tab documents.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docs"}),": This directory contains all documentation in entirely markdown files. Each file and folder includes a numeric prefix that sorts its order in the documentation sidebar, as well as an ",(0,i.jsx)(n.code,{children:"assets"})," folder for all relevant images and media."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-protocol"}),": The ",(0,i.jsx)(n.code,{children:"openapi.yml"})," file houses the OpenAPI specification for the LAMP Protocol, upon which the entire LAMP Platform is built."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Backend:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-server"}),": (See Backend section in the documentation for more details on the nature of the component and how the code is organized.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-worker"}),": (See Automations section in the documentation for more details on the nature of the component and how the code is organized.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-app-gateway"}),": (See App Gateway section in the documentation for more details on the nature of the component and how the code is organized.)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Frontend:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-dashboard"}),": (See Frontend section in the documentation for more details on the nature of the component and how the code is organized.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-data-studio"}),":"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-activities"}),":"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["SDKs:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-js"}),":"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-py"}),":"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-r"}),":"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-swift"}),":"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-kotlin"}),":"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Data Science:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-cortex"}),": (See Cortex section in the documentation for more details on the nature of the component and how the code is organized.)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-ide"}),": A JupyterLab and VSCode-based integrated development environment with extensive support for Cortex."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Native Apps:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-core-ios"}),": A Swift-based scaffolding that incorporates support for TypeScript business logic and a WKWebView for the frontend UI. Designed to work well with the ",(0,i.jsx)(n.code,{children:"LAMP-swift"})," SDK."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-core-android"}),": A Kotlin-based scaffolding that incorporates support for TypeScript business logic and a WebView for the frontend UI. Designed to work well with the ",(0,i.jsx)(n.code,{children:"LAMP-kotlin"})," SDK."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Other:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-college-study"}),": A proof of concept for the Automations framework that is a part of the LAMP Platform."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clinical-scales-importer"}),": Automated clinical scale importer that works for RedCap integration into the LAMP Platform."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"analysis-tools"}),": Misc. analysis tools for working with research studies using the LAMP Platform."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Deprecated:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-app"}),": The mindLAMP v1 native app for iOS and Android. ",(0,i.jsx)(n.strong,{children:"DO NOT USE."})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"LAMP-portal"}),": The mindLAMP v1 backend. ",(0,i.jsx)(n.strong,{children:"DO NOT USE."})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5566:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Platform_Overview-0c296dc1945d269d56d5b323bb31c142.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);