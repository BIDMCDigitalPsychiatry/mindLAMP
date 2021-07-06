(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(353)),o=["components"],c={},p={unversionedId:"develop/app_gateway",id:"develop/app_gateway",isDocsHomePage:!1,title:"Working with the App Gateway",description:"The app gateway requires an API Key to make requests and supports apns (Apple device push notification service), gcm (Google device push notification service), mailto (standard mail address via AWS SES), sms (standard phone number SMS via AWS SNS), and slack (a Slack channel API hook) recipients.",source:"@site/docs/07-develop/07-app_gateway.md",sourceDirName:"07-develop",slug:"/develop/app_gateway",permalink:"/develop/app_gateway",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-develop/07-app_gateway.md",version:"current",lastUpdatedBy:"Rebecca Bilden",lastUpdatedAt:1625583176,formattedLastUpdatedAt:"7/6/2021",sidebarPosition:7,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Just-In-Time Adaptive Interventions",permalink:"/develop/adaptive_interventions"},next:{title:"Introduction",permalink:"/data_science/intro"}},s=[{value:"Push Notifications",id:"push-notifications",children:[]}],l={toc:s};function u(e){var t=e.components,c=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The app gateway requires an API Key to make requests and supports ",Object(i.b)("inlineCode",{parentName:"p"},"apns")," (Apple device push notification service), ",Object(i.b)("inlineCode",{parentName:"p"},"gcm")," (Google device push notification service), ",Object(i.b)("inlineCode",{parentName:"p"},"mailto")," (standard mail address via AWS SES), ",Object(i.b)("inlineCode",{parentName:"p"},"sms")," (standard phone number SMS via AWS SNS), and ",Object(i.b)("inlineCode",{parentName:"p"},"slack")," (a Slack channel API hook) recipients. "),Object(i.b)("p",null,"Example API call:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "https://app-gateway.lamp.digital/push" \\\n -H \'Content-Type: application/json\' \\\n --data-binary @- <<\'EOF\'\n{\n   "api_key": "YOUR_API_TOKEN_HERE",\n   "device_token": "apns:YOUR_APNS_DEVICE_TOKEN_HERE",\n   "payload": {\n      "aps": {\n         "alert": "Hello world!",\n         "badge": 0,\n         "sound": "default",\n         "mutable-content": 1,\n         "content-available": 1\n      },\n      "notificationId": "test123",\n      "expiry": 84600000,\n      "actions": []\n   }\n}\nEOF\n')),Object(i.b)("p",null,"The flow of data is shown below:\n",Object(i.b)("img",{src:n(6146).default})),Object(i.b)("h2",{id:"push-notifications"},"Push Notifications"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Automations Worker")," component handles all push notification scheduling working in tandem with the API Server using the ",Object(i.b)("inlineCode",{parentName:"p"},"LAMP-js")," SDK. It caches CRON expressions matching to Activity IDs and Participant IDs for delivery. The workflow is shown below:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(6147).default})))}u.isMDXComponent=!0},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6146:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/push_notifications-d682e6f910e5410f132684088ec959e0.png"},6147:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/activity_schedules-aa8c83e11230f46bad8e8ee0f3ce7696.svg"}}]);