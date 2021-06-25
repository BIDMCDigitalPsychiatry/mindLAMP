(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(8),o=(a(0),a(320)),i=["components"],c={},s={unversionedId:"why_use/intro",id:"why_use/intro",isDocsHomePage:!1,title:"How mindLAMP, the Data Center, and Cortex Work Together",description:"LAMP Platform",source:"@site/docs/04-why_use/01-intro.md",sourceDirName:"04-why_use",slug:"/why_use/intro",permalink:"/why_use/intro",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/04-why_use/01-intro.md",version:"current",lastUpdatedBy:"Rebecca Bilden",lastUpdatedAt:1624643215,formattedLastUpdatedAt:"6/25/2021",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MAPNET",permalink:"/about/mapnet"},next:{title:"What is the LAMP Platform?",permalink:"/why_use/what"}},l=[{value:"LAMP Platform",id:"lamp-platform",children:[{value:"\u2460 App",id:"\u2460-app",children:[]},{value:"\u2461 Dashboard",id:"\u2461-dashboard",children:[]},{value:"\u2462 Database",id:"\u2462-database",children:[]},{value:"\u2463 Cortex",id:"\u2463-cortex",children:[]}]}],p={toc:l};function u(e){var t=e.components,c=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"lamp-platform"},"LAMP Platform"),Object(o.b)("p",null,Object(o.b)("img",{src:a(6085).default})),Object(o.b)("h3",{id:"\u2460-app"},"\u2460 App"),Object(o.b)("p",null,"The patient uses the ",Object(o.b)("strong",{parentName:"p"},"App"),", taking surveys, playing cognitive games, accessing helpful tips and resources, or doing meditation and breathing exercises; when enabled and configured, the app collects sensor data from the mobile device's accelerometer, GPS, pedometer, and more in the background without interrupting the patient. It also collects metadata about the patient's use of the app, like how long certain questions took to answer in a survey, or which helpful tips they appreciated the most, and uploads the data securely to a server you or your organization owns."),Object(o.b)("h3",{id:"\u2461-dashboard"},"\u2461 Dashboard"),Object(o.b)("p",null,"Clinicians and Researchers can create, customize, and schedule activities for patients or participants to interact and receive notifications, and tap into near-real-time information about patients and better inform decision making. "),Object(o.b)("h3",{id:"\u2462-database"},"\u2462 Database"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Database")," securely and chronologically indexes the data through the ",Object(o.b)("strong",{parentName:"p"},"LAMP Protocol")," for programming and data science. It informs custom data analysis code in real-time that new patient data has arrived. Researchers can better build reusable tools, analysis pipelines, and conduct reproducible science, knowing that others around the globe using the ",Object(o.b)("strong",{parentName:"p"},"LAMP Platform")," can easily work with their data or replicate their unique study."),Object(o.b)("h3",{id:"\u2463-cortex"},"\u2463 Cortex"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Cortex")," data analysis pipeline is designed to easily hook into the ",Object(o.b)("strong",{parentName:"p"},"Database")," and extract important and clinically useful secondary data features, such as sedentary behavior, time spent at home, device/screen usage, sleep estimates, and much more, from the terabytes of raw data. It can trigger custom just-in-time adaptive interventions and produce useful interactive visualizations viewable by patients and clinicians."))}u.isMDXComponent=!0},320:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},6085:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/LAMP_Overview-2214d02d381118a8d2772f096620d6d3.png"}}]);