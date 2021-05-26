(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(8),o=(a(0),a(318)),i={},s={unversionedId:"about/intro",id:"about/intro",isDocsHomePage:!1,title:"How does LAMP Platform Work?",description:"LAMP stands for Learn, Assess, Manage, Prevent. It is a measurement based care platform designed for both research and clinical use. The core components are the app and the dashboard.",source:"@site/docs/03-about/01-intro.md",sourceDirName:"03-about",slug:"/about/intro",permalink:"/about/intro",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/03-about/01-intro.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1622040958,formattedLastUpdatedAt:"5/26/2021",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Security & Privacy Policy",permalink:"/privacy"},next:{title:"Introduction",permalink:"/about/consortium/intro"}},c=[{value:"The App",id:"the-app",children:[]},{value:"The Dashboard",id:"the-dashboard",children:[]},{value:"Diagram of the LAMP Platform",id:"diagram-of-the-lamp-platform",children:[]}],p={toc:c};function l(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"LAMP stands for Learn, Assess, Manage, Prevent. It is a measurement based care platform designed for both research and clinical use. The core components are the app and the dashboard."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Researchers")," have read and write access to one or multiple studies with each study containing at least one ",Object(o.b)("strong",{parentName:"p"},"Participant.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Clinician")," is synonymous with ",Object(o.b)("em",{parentName:"p"},"Researcher")," and ",Object(o.b)("strong",{parentName:"p"},"Patient")," is synonymous with ",Object(o.b)("em",{parentName:"p"},"Participant"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"System Administrators")," are the people who deploy your LAMP backend; they have the admin keys and will create the initial Researcher/Clinician account."),Object(o.b)("h3",{id:"the-app"},"The App"),Object(o.b)("p",null,"The mindLAMP2 app collects multiple, customizable data streams from a user and offers activities that encourage mindfulness and self-reflection. The app captures both ",Object(o.b)("strong",{parentName:"p"},"passive")," and ",Object(o.b)("strong",{parentName:"p"},"active")," ",Object(o.b)("strong",{parentName:"p"},"data,")," offers surveys that measure and stabilize symptoms, and features games that assess cognition. ",Object(o.b)("strong",{parentName:"p"},"Active data")," includes information collected when the individual is using the app. ",Object(o.b)("strong",{parentName:"p"},"Passive data")," includes information collected in the background even if the user is not using the app. Surveys, activities, tips, etc. are customizable and able to be grouped. For example, participants in the same research study can be grouped so they receive the same set of activities and surveys."),Object(o.b)("h3",{id:"the-dashboard"},"The Dashboard"),Object(o.b)("p",null,"The dashboard aggregates, analyzes, and displays data collected from the smartphone app. Dashboard information can be shared with clinicians, family members, and trusted peers. It allows clinicians, researchers, and patients to visualize data that is collected and aid in treatment and/or research."),Object(o.b)("p",null,"Please note that LAMP requires at least Android 7 minimum and soon will require iOS 14 minimum to run on a smartphone."),Object(o.b)("h3",{id:"diagram-of-the-lamp-platform"},"Diagram of the LAMP Platform"),Object(o.b)("p",null,Object(o.b)("img",{src:a(6086).default})))}l.isMDXComponent=!0},318:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?n.a.createElement(b,s(s({ref:t},p),{},{components:a})):n.a.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6086:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/LAMP_Diagrams-5c2387d79c0edb486e929898ad996a70.png"}}]);