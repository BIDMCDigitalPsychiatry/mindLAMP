(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{334:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(422)),i={},s={unversionedId:"todo/Components of the LAMP Platform",id:"todo/Components of the LAMP Platform",isDocsHomePage:!1,title:"Components of the LAMP Platform",description:"Components of the LAMP Platform",source:"@site/docs/todo/Components of the LAMP Platform.md",slug:"/todo/Components of the LAMP Platform",permalink:"/LAMP-platform/todo/Components of the LAMP Platform",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/todo/Components of the LAMP Platform.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1616008991,sidebar:"Main",previous:{title:"Care Team - Connection with Patients",permalink:"/LAMP-platform/todo/care_team"},next:{title:"Consortium Webinar Recordings",permalink:"/LAMP-platform/todo/Consortium Webinar Recordings"}},c=[{value:"<strong>API Server</strong>",id:"api-server",children:[]},{value:"<strong>Database</strong>",id:"database",children:[]},{value:"<strong>Message Queue</strong>",id:"message-queue",children:[]},{value:"<strong>Automations Worker</strong>",id:"automations-worker",children:[]}],l={toc:c};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"components-of-the-lamp-platform"},"Components of the LAMP Platform"),Object(a.b)("p",null,"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see ",Object(a.b)("a",{parentName:"p",href:"Deployment%20Recommendations.md"},"Deployment Recommendations")," if you do not plan on using Docker."),Object(a.b)("p",null,Object(a.b)("img",{src:n(770).default})),Object(a.b)("h3",{id:"api-server"},Object(a.b)("strong",{parentName:"h3"},"API Server")),Object(a.b)("p",null,"The gatekeeper between the internal and external domains."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This component is implemented in ",Object(a.b)("strong",{parentName:"li"},"Node.js"),"."),Object(a.b)("li",{parentName:"ul"},"****All API requests are stateless (i.e. there is no session management) and map to a single response."),Object(a.b)("li",{parentName:"ul"},"All requests irrespective of authentication requirement must be accompanied by a client API key. This pre-registered API key is recorded in the audit log with each request and serves as origination reference for resources and events."),Object(a.b)("li",{parentName:"ul"},"Using the Credential API, requests that require authentication and authorization are validated."),Object(a.b)("li",{parentName:"ul"},"Data transport must be encrypted and decrypted as per security & privacy policy.")),Object(a.b)("h3",{id:"database"},Object(a.b)("strong",{parentName:"h3"},"Database")),Object(a.b)("p",null,"The persistent data storage device supporting transient caching and complex querying."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This component is implemented by ",Object(a.b)("strong",{parentName:"li"},"CouchDB"),", with an alternate implementation for low-power usage in ",Object(a.b)("strong",{parentName:"li"},"Node.js")," using the ",Object(a.b)("strong",{parentName:"li"},"PouchDB")," framework.",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"This component can instead by substituted using custom adapter code by ",Object(a.b)("strong",{parentName:"li"},"Redis"),", ",Object(a.b)("strong",{parentName:"li"},"Amazon S3"),", or for low-power usage, a na\xefve ",Object(a.b)("strong",{parentName:"li"},"Dictionary/Map")," object in ",Object(a.b)("strong",{parentName:"li"},"js"),"."))),Object(a.b)("li",{parentName:"ul"},"A key-value or document database (noSQL) is most ideal for storage needs of the ",Object(a.b)("strong",{parentName:"li"},"LAMP Protocol"),", due to its hierarchical object data and high throughput access and low latency manipulation requirements."),Object(a.b)("li",{parentName:"ul"},"To support real-time intervention deployment and management, an intermediate in-memory cache is used to ease the load on main long-term storage databases.")),Object(a.b)("h3",{id:"message-queue"},Object(a.b)("strong",{parentName:"h3"},"Message Queue")),Object(a.b)("p",null,"Handles the synchronization of communication between all the above actors in the server layer."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This component is implemented by the ",Object(a.b)("strong",{parentName:"li"},"Redis")," high performance key-value store, with an alternate implementation for low-power usage in ",Object(a.b)("strong",{parentName:"li"},"Node.js"),"."),Object(a.b)("li",{parentName:"ul"},"Each component upon startup must register itself with the message queue for service discovery."),Object(a.b)("li",{parentName:"ul"},"Any component may create any number of topics for which other components may publish messages to or subscribe to."),Object(a.b)("li",{parentName:"ul"},"Implementation of database manipulation operations, automation events, and the audit log relies solely on subscription to the global topic; the API Server publishes requests here with a unique identifier awaiting response.")),Object(a.b)("h3",{id:"automations-worker"},Object(a.b)("strong",{parentName:"h3"},"Automations Worker")),Object(a.b)("p",null,"This component handles scheduled push notification delivery as well as execution of triggered scripts to deliver interventions to patients."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"****A compute platform such as a Docker-enabled system or AWS Lambda is used to handle actual execution of code once bundled."),Object(a.b)("li",{parentName:"ul"},"****A dependency bundler such as Webpack, PIP, or Packrat is used to bundle each automation\u2019s code to avoid dependency versioning conflicts that could crash or halt execution."),Object(a.b)("li",{parentName:"ul"},"This component encompasses: ",Object(a.b)("strong",{parentName:"li"},"Docker Environment, Attachment Container, Automation Scripts, Scheduler"),".")))}p.isMDXComponent=!0},422:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||a;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},770:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Platform_Overview-0c296dc1945d269d56d5b323bb31c142.png"}}]);