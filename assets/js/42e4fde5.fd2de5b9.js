(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(8),r=(a(0),a(379)),o=["components"],l={author:"Aditya Vaidyam",author_title:"Division of Digital Psychiatry",author_url:"https://github.com/avaidyam",author_image_url:"https://avatars.githubusercontent.com/u/1361003"},s={permalink:"/blog/2021/04/22/",source:"@site/blog/2021-04-22.md",title:"Significant Performance Improvements & UI Overhaul",description:"This is a significant update -- please review the bolded disclaimer text!",date:"2021-04-22T00:00:00.000Z",formattedDate:"April 22, 2021",tags:[],readingTime:2.885,truncated:!1,prevItem:{title:"Minor Stability Updates and Bug Fixes",permalink:"/blog/2021/08/09/"},nextItem:{title:"Documentation Overhaul",permalink:"/blog/2021/04/01/"}},d=[{value:"Frontend",id:"frontend",children:[{value:"Features",id:"features",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]}]},{value:"Backend",id:"backend",children:[]},{value:"Features",id:"features-1",children:[{value:"Bug Fixes",id:"bug-fixes-1",children:[]}]},{value:"Native Core (iOS &amp; Android)",id:"native-core-ios--android",children:[{value:"Features",id:"features-2",children:[]},{value:"Bug Fixes",id:"bug-fixes-2",children:[]}]}],c={toc:d};function u(e){var t=e.components,a=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is a significant update -- please review the bolded disclaimer text! "),Object(r.b)("h2",{id:"frontend"},"Frontend"),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"This release of the Frontend REQUIRES the Backend to be updated first. If you are using the ",Object(r.b)("inlineCode",{parentName:"strong"},"dashboard.lamp.digital")," link, please ask your system administrator to upgrade your backend immediately.")))),Object(r.b)("h3",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Overhauled activity creation for automatic validation, descriptions, min/max guides for numeric values."),Object(r.b)("li",{parentName:"ul"},"Added a new tab item for Sensors management and a new tab item for Studies management when logged in as a clinician."),Object(r.b)("li",{parentName:"ul"},"Added a new patient list creation option to auto-create a study based on a template with a single patient."),Object(r.b)("li",{parentName:"ul"},"Added the ability to configure multiple system administrator-level accounts from the API and the dashboard. ")),Object(r.b)("h3",{id:"improvements"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Added the ability to search by patient alias or study name."),Object(r.b)("li",{parentName:"ul"},"Added page navigation to make it easier to track and sort activities or patients."),Object(r.b)("li",{parentName:"ul"},"Updated the layout to a larger and more readable grid."),Object(r.b)("li",{parentName:"ul"},"Significant performance improvements across the clinician dashboard that support up multiple clinics/studies containing a total of up to 1000 patients.")),Object(r.b)("h3",{id:"bug-fixes"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Resolved an issue where the last patient in the patient list would be hidden underneath the navigation bar. "),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where tips would disappear from the Learn tab once viewed."),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where survey questions with longer text would be entirely cut off or require scrolling to view the full text."),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where Activity Groups would incorrectly appear in the Prevent tab. "),Object(r.b)("li",{parentName:"ul"},"Resolved consistency issues with the DBT Diary Card component. "),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where scheduled activities would sometimes not correctly appear in the Feed tab."),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where icons for tips would not appear. "),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where Jewels would sometimes be hidden underneath the bottom bar of the Jewels game."),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where the login email address field auto-capitalized text on mobile devices."),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where the back/next buttons for surveys on mobile devices would hide the actual question."),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where sensor data would not upload correctly for Samsung devices if the URL included a '/'."),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where Activity Groups erroneously had a disabled incorrect schedule automatically added.")),Object(r.b)("h2",{id:"backend"},"Backend"),Object(r.b)("h2",{id:"features-1"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Added support for MongoDB in addition to CouchDB, including enterprise managed solutions such as AWS DocumentDB and Azure CosmosDB."),Object(r.b)("li",{parentName:"ul"},"Added the ability to configure multiple system administrator-level accounts from the API and the dashboard. "),Object(r.b)("li",{parentName:"ul"},"Added a brand new visualization and data extraction query system. ")),Object(r.b)("h3",{id:"bug-fixes-1"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Resolved several memory leak related issues for the LISTEN and push notificatons API."),Object(r.b)("li",{parentName:"ul"},"Resolved an issue with MongoDB backends where queries could run indefinitely and bottleneck the backend processes. ")),Object(r.b)("h2",{id:"native-core-ios--android"},"Native Core (iOS & Android)"),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"This release of the Native Core apps (iOS, Android, Apple Watch, Google wearOS) REQUIRES the Backend to be updated first. If you are NOT using the ",Object(r.b)("inlineCode",{parentName:"strong"},"api.lamp.digital")," link, please ask your system administrator to upgrade your backend immediately.")))),Object(r.b)("h3",{id:"features-2"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sensors are now configurable (enable/disable specific sensor types) using the new Frontend and Backend components.")),Object(r.b)("h3",{id:"bug-fixes-2"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Resolved an issue where cached sensor data would sometimes fail to upload. "),Object(r.b)("li",{parentName:"ul"},"Resolved an issue on iOS where the app would crash in the background and halt the sensor data collection process. "),Object(r.b)("li",{parentName:"ul"},"Resolved an issue where sleep duration from wearable sensors would not be collected correctly.")))}u.isMDXComponent=!0},379:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=i.a.createContext({}),c=function(e){var t=i.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return a?i.a.createElement(m,l(l({ref:t},d),{},{components:a})):i.a.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);