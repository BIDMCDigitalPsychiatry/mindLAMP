"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[2472],{603905:function(t,e,i){i.d(e,{Zo:function(){return u},kt:function(){return h}});var a=i(667294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e){if(null==t)return{};var i,a,r=function(t,e){if(null==t)return{};var i,a,r={},n=Object.keys(t);for(a=0;a<n.length;a++)i=n[a],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)i=n[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},u=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var i=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(i),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return i?a.createElement(m,o(o({ref:e},u),{},{components:i})):a.createElement(m,o({ref:e},u))}));function h(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=i.length,o=new Array(n);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var l=2;l<n;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},589461:function(t,e,i){i.r(e),i.d(e,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=i(487462),r=i(263366),n=(i(667294),i(603905)),o=["components"],c={},s="Create and Customize Activities",l={unversionedId:"start_here/activities/create_activities",id:"start_here/activities/create_activities",isDocsHomePage:!1,title:"Create and Customize Activities",description:"How to add an Assess cognitive test from the Patient Profile",source:"@site/docs/06-start_here/06-activities/05-create_activities.md",sourceDirName:"06-start_here/06-activities",slug:"/start_here/activities/create_activities",permalink:"/start_here/activities/create_activities",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/06-start_here/06-activities/05-create_activities.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646856660,formattedLastUpdatedAt:"3/9/2022",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Delete and Schedule Activities",permalink:"/start_here/activities/delete_activities"},next:{title:"Customize and Schedule Activities",permalink:"/start_here/activities/customize_activities"}},u=[{value:"Create a New Activity for the Assess and Manage tabs",id:"create-a-new-activity-for-the-assess-and-manage-tabs",children:[],level:3}],p={toc:u};function d(t){var e=t.components,c=(0,r.Z)(t,o);return(0,n.kt)("wrapper",(0,a.Z)({},p,c,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-and-customize-activities"},"Create and Customize Activities"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-km1ztZgLdY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"How to add an Assess cognitive test from the Patient Profile")),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SJpWGlI_jdQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"How to add a Manage activity from the Patient Profile")),(0,n.kt)("p",null,"If you would like to create your own custom activity, you can do so by writing it in html/javascript. There is no required structure or framework; as long as it is in html/javascript it will work with LAMP."),(0,n.kt)("p",null,"Survey instruments and other Activities in the LAMP Platform afford you automatic version control. In other software or when managing \u201cpaper & pencil\u201d data, it is typically difficult, if not impossible, to track changes to survey questions or survey responses when administered with a patient. "),(0,n.kt)("h3",{id:"create-a-new-activity-for-the-assess-and-manage-tabs"},"Create a New Activity for the Assess and Manage tabs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to the dashboard and navigate to the Activities tab."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"[+ Add]")," button at the top right of the list to begin. If you would like to edit an existing activity, simply tap on its row in the list instead."),(0,n.kt)("li",{parentName:"ol"},"Select an activity like the DBT Diary Card or a cognitive test like Jewels for the Assess tab."),(0,n.kt)("li",{parentName:"ol"},"Select an activity like Mindfulness for the Manage tab."),(0,n.kt)("li",{parentName:"ol"},"If you would like to create a group of activities, click Activity Group.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(928548).Z})),(0,n.kt)("p",null,"Note, you can add surveys and activities to an activity group. This group of activities can then be scheduled like a survey or other activities."),(0,n.kt)("h1",{id:"customize-which-tab-an-activity-appears-in"},"Customize Which Tab an Activity Appears in"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"How to customize which tab on LAMP an Activity Appears in")),(0,n.kt)("p",null,'If you would like to customize which tab an activity appears in, you can do so by clicking the pencil icon next to the activity you would like to move. Next, check the box next to "Customize which Tab this Activity sppears in". '),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(747354).Z})),(0,n.kt)("p",null,"Finally, click the dropdown to display all tab options. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(806225).Z})),(0,n.kt)("p",null,"There are four tab options to choose from: Assess, Learn, Manage, and Portal. Check off the box next to the desired tab you would like the activity to appear in."),(0,n.kt)("p",null,"Note that you can select no tabs, which hides the activity. This can be helpful if there are schedules assigned to a particular activity. It can also be helpful if there are several surveys grouped together, and you only would like the group to appear. Note that you can also display the activity on multiple tabs. "),(0,n.kt)("p",null,'Finally, click the "Save" button on the bottom right.'))}d.isMDXComponent=!0},928548:function(t,e,i){e.Z=i.p+"assets/images/activity_menu-2788d6de1850a80a5fa39b0b5e4b0d69.jpg"},806225:function(t,e,i){e.Z=i.p+"assets/images/customizeactivitytab2-2b024bed2d78c340c67ccc9bb4d4cd2c.png"},747354:function(t,e,i){e.Z=i.p+"assets/images/customizetabactivity1-42d2cfb9e538281dbd8bb3a22f236b6d.png"}}]);