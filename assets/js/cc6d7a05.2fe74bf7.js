(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(362)),o={author:"Aditya Vaidyam",author_title:"Division of Digital Psychiatry",author_url:"https://github.com/avaidyam",author_image_url:"https://avatars.githubusercontent.com/u/1361003"},c={permalink:"/blog/2020/11/05/",source:"@site/blog/2020-11-05.md",title:"Stability & Performance Improvements",description:"Improvements",date:"2020-11-05T00:00:00.000Z",formattedDate:"November 5, 2020",tags:[],readingTime:1.305,truncated:!1,prevItem:{title:"Ease of Use Improvements",permalink:"/blog/2020/11/06/"},nextItem:{title:"Clinical Customization Updates",permalink:"/blog/2020/10/23/"}},s=[{value:"Survey Slider Options &amp; Description",id:"survey-slider-options--description",children:[]},{value:"Upload Guided Meditation Audio",id:"upload-guided-meditation-audio",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]}],l={toc:s};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Improvements"),Object(a.b)("h3",{id:"survey-slider-options--description"},"Survey Slider Options & Description"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Customize the slider question type with as many or as few stops, and now add descriptions for each stop along the slider that will show below the slider for when a patient makes a selection.")),Object(a.b)("p",null,Object(a.b)("img",{src:n(561).default})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Survey and other activities now support custom descriptions and icons.")),Object(a.b)("p",null,Object(a.b)("img",{src:n(562).default})),Object(a.b)("h3",{id:"upload-guided-meditation-audio"},"Upload Guided Meditation Audio"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Breathe now supports uploading custom mp3 files for guided meditation, as well as using other mp3 files that are publicly available on the internet.")),Object(a.b)("p",null,Object(a.b)("img",{src:n(563).default})),Object(a.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Resolved an issue where the descriptions of activities/surveys would show the text ",Object(a.b)("inlineCode",{parentName:"li"},"(10 minutes)")," erroneously regardless of survey length or expected activity duration."),Object(a.b)("li",{parentName:"ul"},"Resolved an issue where devices running Android 10 had inconsistent app behavior, including crashing or opening to a white screen."),Object(a.b)("li",{parentName:"ul"},"Resolved an issue where opening the Manage tab would cause the app to crash if there were no Manage activities enabled for a patient."),Object(a.b)("li",{parentName:"ul"},"Resolved several areas where push notifications were inconsistent, either sending no notification or many (~50) duplicate notifications to logged in devices."),Object(a.b)("li",{parentName:"ul"},"Resolved an issue where logging out of one account and into another account caused the device to erroneously continue receive notifications for the previous account."),Object(a.b)("li",{parentName:"ul"},"Resolved an issue where the user interface was very slow when managing more than ten studies.")),Object(a.b)("p",null,"Please note that we are currently investigating an issue regarding inconsistent data collection from HealthKit (such as step count) on Apple iOS devices when paired to an Apple Watch, when compared to the Apple Health app."))}u.isMDXComponent=!0},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},561:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Screen_Shot_2020-11-05_at_3.34.00_PM-2a2c3c65bc6e5acc1cd604bc716647cf.png"},562:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Screen_Shot_2020-11-05_at_3.34.30_PM-cda7c73e872f06447c50527b755b0fed.png"},563:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Screen_Shot_2020-11-05_at_3.31.00_PM-29ec230d83e8c0ed90f0284e6fc3decb.png"}}]);