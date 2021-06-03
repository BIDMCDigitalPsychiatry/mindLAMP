(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(8),i=(r(0),r(319)),o=["components"],s={author:"Aditya Vaidyam",author_title:"Division of Digital Psychiatry",author_url:"https://github.com/avaidyam",author_image_url:"https://avatars.githubusercontent.com/u/1361003"},l={permalink:"/blog/2021/02/12/",source:"@site/blog/2021-02-12.md",title:"Patient Profile & New Cognitive Tests",description:"Features",date:"2021-02-12T00:00:00.000Z",formattedDate:"February 12, 2021",tags:[],readingTime:2.34,truncated:!1,prevItem:{title:"Documentation Overhaul",permalink:"/blog/2021/04/01/"},nextItem:{title:"Stability & Performance Improvements",permalink:"/blog/2021/01/11/"}},c=[{value:"Features",id:"features",children:[{value:"Patient Profile UI",id:"patient-profile-ui",children:[]},{value:"Pop The Bubbles &amp; Balloon Risk",id:"pop-the-bubbles--balloon-risk",children:[]}]},{value:"Improvements",id:"improvements",children:[{value:"<strong>Improved Native Apps</strong>",id:"improved-native-apps",children:[]},{value:"<strong>Improved Native Apps</strong>",id:"improved-native-apps-1",children:[]},{value:"Hardened Security Requirements",id:"hardened-security-requirements",children:[]}]},{value:"Bug Fixes",id:"bug-fixes",children:[]}],u={toc:c};function p(e){var t=e.components,s=Object(n.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("h3",{id:"patient-profile-ui"},"Patient Profile UI"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The new Patient profile interface allows quick and easy management of activities, sensors, and conversations in one place."),Object(i.b)("li",{parentName:"ul"},"You are now able to add, remove, and configure specific sensors for data collection across studies. (Support for this feature requires the upcoming smartphone and wearable app release.)")),Object(i.b)("p",null,Object(i.b)("img",{src:r(514).default})),Object(i.b)("p",null,Object(i.b)("img",{src:r(515).default})),Object(i.b)("p",null,Object(i.b)("img",{src:r(516).default})),Object(i.b)("h3",{id:"pop-the-bubbles--balloon-risk"},"Pop The Bubbles & Balloon Risk"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'The new "Pop The Bubbles" and "Balloon Risk" cognitive test activities are available for configuration and usage (in specific installations only; consult your system administrator).')),Object(i.b)("p",null,Object(i.b)("img",{src:r(517).default})),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("h3",{id:"improved-native-apps"},Object(i.b)("strong",{parentName:"h3"},"Improved Native Apps")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updated and refactored the iOS and Android apps for higher performance and support for new enhanced features.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"mindLAMP now requires a minimum version of iOS 14 or watchOS 6."),Object(i.b)("li",{parentName:"ul"},"This update will be rolling out in the coming weeks once approved by Apple and Google."))),Object(i.b)("li",{parentName:"ul"},"Updated push notifications to collect metadata about notifications and user interactions as a new sensor type.")),Object(i.b)("h3",{id:"improved-native-apps-1"},Object(i.b)("strong",{parentName:"h3"},"Improved Native Apps")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updated graphing code to be higher performance and restored Step Count graphs."),Object(i.b)("li",{parentName:"ul"},"Updated error boundaries to display errors to the user instead of crashing to an unhelpful blank screen, and added a version number.")),Object(i.b)("h3",{id:"hardened-security-requirements"},"Hardened Security Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hardened security requirements for enterprise deployments will be rolling out in the coming weeks.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Clinicians will need to request their system administrator to be added to a clinic/study and system administrators may generate a password of sufficient complexity as required by organizational policies."),Object(i.b)("li",{parentName:"ul"},"Patients and study participants will need to request their clinician or research coordinators to reset their password or add additional care team members.")))),Object(i.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Resolved minor labeling and functionality issues with the DBT Diary Card activity."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where the backend message queue would not accept large payloads and inadvertently crash the API Server."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where Breathe exercises did not record duration spent correctly."),Object(i.b)("li",{parentName:"ul"},"Resolved issues in rare cases with embedded activities (i.e. Jewels) not receiving the correct language code for translations support at runtime."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where Activity Groups appeared in the Prevent tab incorrectly."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where tapping a notification could lead to a blank page instead of an embedded activity."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where loading patients' data could erroneously take twice as long as expected."),Object(i.b)("li",{parentName:"ul"},"We are aware of an issue with scrolling being temporarily locked on Safari browsers when viewing the Patient or Activity tabs in the dashboard; a temporary workaround is to resize the browser window, after which scrolling will resume normally."),Object(i.b)("li",{parentName:"ul"},"We are aware of an issue leading to slower than expected performance and speed when using the Patient tab of the dashboard across all browsers; a resolution for this issue is in progress.")))}p.isMDXComponent=!0},319:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?n.a.createElement(m,s(s({ref:t},c),{},{components:r})):n.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},514:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/Screen_Shot_2021-02-12_at_11.54.43_AM-f36dfdcee6c416807af60e250994b8b3.png"},515:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/Screen_Shot_2021-02-12_at_11.54.48_AM-0c22c51006eec943674a316ee35423cc.png"},516:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/Screen_Shot_2021-02-12_at_11.55.09_AM-0e41050f60b7894ccd31c3a4b08fff77.png"},517:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/Untitled_A-4500e5e513b087376a3339cfdba010d9.png"}}]);