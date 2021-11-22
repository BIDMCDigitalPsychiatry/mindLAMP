(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),o=a(8),i=(a(0),a(391)),n=["components"],s={},l={unversionedId:"data_science/data_portal",id:"data_science/data_portal",isDocsHomePage:!1,title:"Using the LAMP Data Portal",description:"As of late September 2021, the latest versions of the LAMP platform includes a data analysis platform that allows a researcher to do some basic analyses, download data, or view pre-made graphs.",source:"@site/docs/09-data_science/09-data_portal.md",sourceDirName:"09-data_science",slug:"/data_science/data_portal",permalink:"/data_science/data_portal",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/09-data_portal.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1637615649,formattedLastUpdatedAt:"11/22/2021",sidebarPosition:9,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Using Document Transformations",permalink:"/data_science/jsonata"},next:{title:"Admin Checklist",permalink:"/consortium/admin/checklist"}},c=[{value:"Data Portal Options",id:"data-portal-options",children:[]},{value:"Downloading your data",id:"downloading-your-data",children:[]},{value:"Terminal Mode",id:"terminal-mode",children:[]},{value:"GUI Mode",id:"gui-mode",children:[{value:"Researcher/Study-wide analysis",id:"researcherstudy-wide-analysis",children:[]},{value:"Specific data analysis",id:"specific-data-analysis",children:[]},{value:"Help &amp; Updates",id:"help--updates",children:[]}]}],d={toc:c};function p(e){var t=e.components,s=Object(o.a)(e,n);return Object(i.b)("wrapper",Object(r.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"overview"},"Overview"),Object(i.b)("p",null,"As of late September 2021, the latest versions of the LAMP platform includes a data analysis platform that allows a researcher to do some basic analyses, download data, or view pre-made graphs."),Object(i.b)("p",null,"The data portal is accessible in three ways:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"After logging in as an administrator, click the 'Data Portal' tab on the left or bottom of your screen."),Object(i.b)("li",{parentName:"ol"},"After logging in as a researcher, click the 'Data Portal' tab on the left or bottom of your screen."),Object(i.b)("li",{parentName:"ol"},"Direct navigation to ",Object(i.b)("a",{parentName:"li",href:"dashboard.lamp.digital/#/data_portal"},"dashboard.lamp.digital/#/data_portal"))),Object(i.b)("p",null,"At this time, the data portal is not accessible using participant credentials."),Object(i.b)("h2",{id:"data-portal-options"},"Data Portal Options"),Object(i.b)("p",null,"There are two main ways to use the data portal - Terminal Mode and GUI Mode. To switch between these modes, click on the button marked 'Change Viewing Mode' in the upper right corner of the data portal. Choose your desired viewing mode with the toggle, then press the button marked \"Set Viewing Mode\" to set the current mode."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Terminal Mode allows a user to write custom queries using the JSONata query language and directly query a LAMP database. For more information about valid JSONata queries, please see ",Object(i.b)("a",{parentName:"li",href:"https://docs.lamp.digital/data_science/jsonata"},"this section of the LAMP docs")),Object(i.b)("li",{parentName:"ul"},"GUI Mode allows a user to see pre-rendered graphs or other data that have been attached to user, study or researcher as a LAMP Tag. LAMP Tags are special pieces of information attached to a user, study, or researcher. Please see the GUI Mode section below for how the LAMP Data Portal uses tags, or ",Object(i.b)("a",{parentName:"li",href:"https://docs.lamp.digital/api/list-all-tags-set-for-or-by-a-researcher-study-participant-activity-or-sensor"},"the LAMP API docs")," for information on tags and how to set and retrieve them.")),Object(i.b)("p",null,"Both modes allow a user to download activity data (surveys, cognitive games, etc.) in the form of a csv."),Object(i.b)("h2",{id:"downloading-your-data"},"Downloading your data"),Object(i.b)("p",null,"To download activity event data for a researcher, study, or specific participant, follow these instructions, which can be done in either viewing mode."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Using the Collapse/Expand arrow buttons in the listings on the left side of the portal, navigate through your researchers (if applicable), studies, and/or users until you can see the target you want to download. If you have many users, you may find it helpful to use the search functionality by clicking the magnifying glass icon."),Object(i.b)("li",{parentName:"ol"},"Press the Download button to the left of the Collapse/Expand button to bring up the selection window."),Object(i.b)("li",{parentName:"ol"},"Change the auto-generated file name if necessary, then click the download button.")),Object(i.b)("p",null,"At this time, it is not possible to download sensor data through the data portal due to the high volume of data required. To download sensor data for analysis, please see the appropriate section in the ",Object(i.b)("inlineCode",{parentName:"p"},"Cortex and API")," section of the LAMP docs based on your chosen programming language."),Object(i.b)("h1",{id:"mode-specific-information"},"Mode Specific Information"),Object(i.b)("h2",{id:"terminal-mode"},"Terminal Mode"),Object(i.b)("p",null,"As described above, terminal mode allows you to write and execute valid JSONata queries to directly query the database, either to read data or set new parameters such as tags, which can be used by LAMP in a variety of ways. The process of using the terminal is very simple:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click in the terminal on the right side of the page and type a valid JSONata query, such as $LAMP.Study.list('RESEARCHER_ID_HERE'), which will list all studies under a specific researcher."),Object(i.b)("li",{parentName:"ol"},"Press the 'Run Query' button in the bottom right of the page. The result of your query will appear in the box below the terminal, which should also expand to give you a better look at the result."),Object(i.b)("li",{parentName:"ol"},"To write another query, simply return to step 1.")),Object(i.b)("h2",{id:"gui-mode"},"GUI Mode"),Object(i.b)("p",null,"GUI Mode allows you to easily see pre-existing data stored in LAMP - and is particularly useful for looking at pre-made graphs."),Object(i.b)("p",null,"The LAMP data portal uses the Vega visualization grammar library to generate graphs. For more info on generating graphs with Vega, please visit ",Object(i.b)("a",{parentName:"p",href:"https://vega.github.io/vega/docs/"},"their docs"),"."),Object(i.b)("p",null,"To analyze data for a researcher, study, or participant, navigate to the target you want to see using the Collapse/Expand arrows in the listings on the left of the data portal, then either click the right-facing arrow or, on a desktop computer, drag and drop your target into the top box on the left side of the page."),Object(i.b)("p",null,"If you are analyzing a researcher or study, you can choose between 'Analyze Participant Data,' which shows you data on a researcher or study-wide level across all or multiple participants, or switch the toggle off to analyze specific tag info about the researcher or study. This second option is the only one available if you are analyzing a participant."),Object(i.b)("h3",{id:"researcherstudy-wide-analysis"},"Researcher/Study-wide analysis"),Object(i.b)("p",null,"To analyze shared tags, use the dropdown menu to check boxes corresponding to the tags/data you would like to see. This list is sourced from either the ",Object(i.b)("inlineCode",{parentName:"p"},"lamp.dashboard.researcher_tags")," or the ",Object(i.b)("inlineCode",{parentName:"p"},"lamp.dashboard.study_tags")," tag - if you do not see info that you expect to in this dropdown, or you see a message that there are no shared tags, try editing either ",Object(i.b)("inlineCode",{parentName:"p"},"lamp.dashboard.researcher_tags")," or ",Object(i.b)("inlineCode",{parentName:"p"},"lamp.dashboard.study_tags"),", making sure it is an array of tags you want made available. A valid example would be:\n",Object(i.b)("inlineCode",{parentName:"p"},'["lamp.dashboard.experimental.gps","lamp.dashboard.experimental.Exercise Habits","lamp.dashboard.experimental.Self Esteem"]')),Object(i.b)("p",null,"You can also simply click 'Select All Shared Tags' to load all selected data."),Object(i.b)("p",null,'Once you have loaded your data, you can click the "Adjust Graph Display" button to change the size of your graphs, filter by a ',Object(i.b)("em",{parentName:"p"},"participant")," ID (or name, if they have one assigned), or change how graphs are grouped (by participant or by graph name). You can also download a PDF with the displayed graphs by clicking the "),Object(i.b)("h3",{id:"specific-data-analysis"},"Specific data analysis"),Object(i.b)("p",null,"To analyze specific data, use the 'Select tag categories' dropdown menu to select a category of tag you would like to see more details about, then select a specific tag name that is listed. If you are using publicly available LAMP analysis code - e.g. from a GitHub repository or other publicly available site, graphs are likely under the 'experimental' category."),Object(i.b)("h1",{id:"data-portal-usage-examples"},"Data Portal Usage Examples"),Object(i.b)("p",null,"Below are some examples and ideas to get you started using the LAMP Data Portal."),Object(i.b)("p",null,Object(i.b)("img",{src:a(6181).default}),"\n",Object(i.b)("strong",{parentName:"p"},"Example 1"),": By plotting number of gps(or other passive measure) data points received by hour, you quickly identify which (if any) of your participants may be having data collection issues. Prevent unpleasant end-of-study realizations by ensuring that all your participants are collecting the highest quality data possible.  "),Object(i.b)("p",null,Object(i.b)("img",{src:a(6182).default}),"\n",Object(i.b)("strong",{parentName:"p"},"Example 2"),": Use Vega's easy to create and manage tooltips to fit far more data into a single graph than would be possible in a traditional paper graph - here, for example, you can both see how survey responses trend and examine specific surveys in detail.  "),Object(i.b)("p",null,Object(i.b)("img",{src:a(6183).default}),"\n",Object(i.b)("strong",{parentName:"p"},"Example 3"),": Keep track of which activities (and how many) your participants are doing with Vega's stacked bar plots.  "),Object(i.b)("p",null,Object(i.b)("img",{src:a(6184).default}),"\n",Object(i.b)("strong",{parentName:"p"},"Example 4"),": Use an array of charts to examine a participant's data in great detail. Here, find examples of summary graphs which show changes over time, correlation heatmaps which highlight connections between different LAMP measures (outlined in red), and the activity tracking functionality seen in example 3.  "),Object(i.b)("h3",{id:"help--updates"},"Help & Updates"),Object(i.b)("p",null,"The LAMP data portal is currently in alpha, as is this documentation. We are actively seeking both feedback and requests about the usability and usefulness of the data portal and this documentation. Please give us any questions, comments, or feature requests either through our ",Object(i.b)("a",{parentName:"p",href:"community.lamp.digital"},"community page")," or our public ",Object(i.b)("a",{parentName:"p",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/issues"},"GitHub repository")))}p.isMDXComponent=!0},391:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var r=a(0),o=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,n=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,b=p["".concat(n,".").concat(h)]||p[h]||u[h]||i;return a?o.a.createElement(b,s(s({ref:t},c),{},{components:a})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var c=2;c<i;c++)n[c]=a[c];return o.a.createElement.apply(null,n)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6181:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/docs_gps_scatter_example-d733ec9d265e237727b7d7dcb8a52453.png"},6182:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/docs_tooltip_example-5eb4253df962f6f4b9ad920c0cf72aac.png"},6183:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/docs_activity_counts-6ca498706c7435174cdaa81554990c8f.png"},6184:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/docs_example_charts-c9dc39891699c45fcef0da8d8d51ab60.png"}}]);