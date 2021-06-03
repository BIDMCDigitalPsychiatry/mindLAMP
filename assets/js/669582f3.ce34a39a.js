(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(319)),o=["components"],c={author:"Aditya Vaidyam",author_title:"Division of Digital Psychiatry",author_url:"https://github.com/avaidyam",author_image_url:"https://avatars.githubusercontent.com/u/1361003"},l={permalink:"/blog/2021/01/11/",source:"@site/blog/2021-01-11.md",title:"Stability & Performance Improvements",description:"Improvements",date:"2021-01-11T00:00:00.000Z",formattedDate:"January 11, 2021",tags:[],readingTime:.765,truncated:!1,prevItem:{title:"Patient Profile & New Cognitive Tests",permalink:"/blog/2021/02/12/"},nextItem:{title:"Ease of Use Improvements",permalink:"/blog/2020/12/17/"}},s=[{value:"Improvements",id:"improvements",children:[{value:"Analytics API",id:"analytics-api",children:[]}]},{value:"Bug Fixes",id:"bug-fixes",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"improvements"},"Improvements"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Server Administrators:\nPlease begin to migrate your Docker image tags for ",Object(i.b)("inlineCode",{parentName:"strong"},"LAMP-server")," and ",Object(i.b)("inlineCode",{parentName:"strong"},"LAMP-dashboard")," from ",Object(i.b)("inlineCode",{parentName:"strong"},"2020")," to ",Object(i.b)("inlineCode",{parentName:"strong"},"2021")," to prepare for major upcoming releases.")),Object(i.b)("h3",{id:"analytics-api"},"Analytics API"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added support for patient analytics (tab open, notification receipt). (See the ",Object(i.b)("inlineCode",{parentName:"li"},"lamp.analytics")," ",Object(i.b)("inlineCode",{parentName:"li"},"SensorSpec"),".)")),Object(i.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Resolved an issue with the Feed tab incorrectly displaying weekly/monthly schedules."),Object(i.b)("li",{parentName:"ul"},"Resolved several issues with activity icon uploads and configuration/settings."),Object(i.b)("li",{parentName:"ul"},"Resolved a theme inconsistency when logged in as a system administrator."),Object(i.b)("li",{parentName:"ul"},"Resolved a cursor glitch issue when hovering over the desktop sidebar icons."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where the conversations icon would always show an indicator even if previously viewed."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where launching a survey from a scheduled activity group on the Feed tab would prevent correctly saving the data."),Object(i.b)("li",{parentName:"ul"},"Resolved several display issues with the DBT Diary Card clinician-facing graphs."),Object(i.b)("li",{parentName:"ul"},"Resolved minor notification-related issues on the backend.")))}p.isMDXComponent=!0},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);