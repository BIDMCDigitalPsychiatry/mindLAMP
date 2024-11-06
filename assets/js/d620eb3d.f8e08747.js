"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[5635],{43311:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"data_science/data_portal","title":"Using the LAMP Data Portal","description":"As of late September 2021, the latest versions of the LAMP platform includes a data analysis platform that allows a researcher to do some basic analyses, download data, or view pre-made graphs.","source":"@site/docs/09-data_science/08-data_portal.md","sourceDirName":"09-data_science","slug":"/data_science/data_portal","permalink":"/data_science/data_portal","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/08-data_portal.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1730901961000,"sidebarPosition":8,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Using Document Transformations","permalink":"/data_science/jsonata"},"next":{"title":"Tags & Attachments","permalink":"/data_science/tags"}}');var i=t(74848),o=t(28453);const r={},n="Using the LAMP Data Portal",l={},d=[{value:"Data Portal Options",id:"data-portal-options",level:2},{value:"Downloading your data",id:"downloading-your-data",level:2},{value:"Terminal Mode",id:"terminal-mode",level:2},{value:"GUI Mode",id:"gui-mode",level:2},{value:"Researcher/Study-wide analysis",id:"researcherstudy-wide-analysis",level:3},{value:"Specific data analysis",id:"specific-data-analysis",level:3},{value:"Help &amp; Updates",id:"help--updates",level:3}];function h(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"using-the-lamp-data-portal",children:"Using the LAMP Data Portal"})}),"\n",(0,i.jsx)(a.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(a.p,{children:"As of late September 2021, the latest versions of the LAMP platform includes a data analysis platform that allows a researcher to do some basic analyses, download data, or view pre-made graphs."}),"\n",(0,i.jsx)(a.p,{children:"The data portal is accessible in three ways:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"After logging in as an administrator, click the 'Data Portal' tab on the left or bottom of your screen."}),"\n",(0,i.jsx)(a.li,{children:"After logging in as a researcher, click the 'Data Portal' tab on the left or bottom of your screen."}),"\n",(0,i.jsxs)(a.li,{children:["Direct navigation to ",(0,i.jsx)(a.a,{href:"https://dashboard.lamp.digital/#/data_portal",children:"dashboard.lamp.digital/#/data_portal"})]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"At this time, the data portal is not accessible using participant credentials."}),"\n",(0,i.jsx)(a.h2,{id:"data-portal-options",children:"Data Portal Options"}),"\n",(0,i.jsx)(a.p,{children:"There are two main ways to use the data portal - Terminal Mode and GUI Mode. To switch between these modes, click on the button marked 'Change Viewing Mode' in the upper right corner of the data portal. Choose your desired viewing mode with the toggle, then press the button marked \"Set Viewing Mode\" to set the current mode."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Terminal Mode allows a user to write custom queries using the JSONata query language and directly query a LAMP database. For more information about valid JSONata queries, please see ",(0,i.jsx)(a.a,{href:"https://docs.lamp.digital/data_science/jsonata",children:"this section of the LAMP docs"})]}),"\n",(0,i.jsxs)(a.li,{children:["GUI Mode allows a user to see pre-rendered graphs or other data that have been attached to user, study or researcher as a LAMP Tag. LAMP Tags are special pieces of information attached to a user, study, or researcher. Please see the GUI Mode section below for how the LAMP Data Portal uses tags, or ",(0,i.jsx)(a.a,{href:"https://docs.lamp.digital/api/list-all-tags-set-for-or-by-a-researcher-study-participant-activity-or-sensor",children:"the LAMP API docs"})," for information on tags and how to set and retrieve them."]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Both modes allow a user to download activity data (surveys, cognitive games, etc.) in the form of a csv."}),"\n",(0,i.jsx)(a.h2,{id:"downloading-your-data",children:"Downloading your data"}),"\n",(0,i.jsx)(a.p,{children:"To download activity event data for a researcher, study, or specific participant, follow these instructions, which can be done in either viewing mode."}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Using the Collapse/Expand arrow buttons in the listings on the left side of the portal, navigate through your researchers (if applicable), studies, and/or users until you can see the target you want to download. If you have many users, you may find it helpful to use the search functionality by clicking the magnifying glass icon."}),"\n",(0,i.jsx)(a.li,{children:"Press the Download button to the left of the Collapse/Expand button to bring up the selection window."}),"\n",(0,i.jsx)(a.li,{children:"Change the auto-generated file name if necessary, then click the download button."}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["At this time, it is not possible to download sensor data through the data portal due to the high volume of data required. To download sensor data for analysis, please see the appropriate section in the ",(0,i.jsx)(a.code,{children:"Cortex and API"})," section of the LAMP docs based on your chosen programming language."]}),"\n",(0,i.jsx)(a.h1,{id:"mode-specific-information",children:"Mode Specific Information"}),"\n",(0,i.jsx)(a.h2,{id:"terminal-mode",children:"Terminal Mode"}),"\n",(0,i.jsx)(a.p,{children:"As described above, terminal mode allows you to write and execute valid JSONata queries to directly query the database, either to read data or set new parameters such as tags, which can be used by LAMP in a variety of ways. The process of using the terminal is very simple:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Click in the terminal on the right side of the page and type a valid JSONata query, such as $LAMP.Study.list('RESEARCHER_ID_HERE'), which will list all studies under a specific researcher."}),"\n",(0,i.jsx)(a.li,{children:"Press the 'Run Query' button in the bottom right of the page. The result of your query will appear in the box below the terminal, which should also expand to give you a better look at the result."}),"\n",(0,i.jsx)(a.li,{children:"To write another query, simply return to step 1."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"gui-mode",children:"GUI Mode"}),"\n",(0,i.jsx)(a.p,{children:"GUI Mode allows you to easily see pre-existing data stored in LAMP - and is particularly useful for looking at pre-made graphs."}),"\n",(0,i.jsxs)(a.p,{children:["The LAMP data portal uses the Vega visualization grammar library to generate graphs. For more info on generating graphs with Vega, please visit ",(0,i.jsx)(a.a,{href:"https://vega.github.io/vega/docs/",children:"their docs"}),"."]}),"\n",(0,i.jsx)(a.p,{children:"To analyze data for a researcher, study, or participant, navigate to the target you want to see using the Collapse/Expand arrows in the listings on the left of the data portal, then either click the right-facing arrow or, on a desktop computer, drag and drop your target into the top box on the left side of the page."}),"\n",(0,i.jsx)(a.p,{children:"If you are analyzing a researcher or study, you can choose between 'Analyze Participant Data,' which shows you data on a researcher or study-wide level across all or multiple participants, or switch the toggle off to analyze specific tag info about the researcher or study. This second option is the only one available if you are analyzing a participant."}),"\n",(0,i.jsx)(a.h3,{id:"researcherstudy-wide-analysis",children:"Researcher/Study-wide analysis"}),"\n",(0,i.jsxs)(a.p,{children:["To analyze shared tags, use the dropdown menu to check boxes corresponding to the tags/data you would like to see. This list is sourced from either the ",(0,i.jsx)(a.code,{children:"lamp.dashboard.researcher_tags"})," or the ",(0,i.jsx)(a.code,{children:"lamp.dashboard.study_tags"})," tag - if you do not see info that you expect to in this dropdown, or you see a message that there are no shared tags, try editing either ",(0,i.jsx)(a.code,{children:"lamp.dashboard.researcher_tags"})," or ",(0,i.jsx)(a.code,{children:"lamp.dashboard.study_tags"}),", making sure it is an array of tags you want made available. A valid example would be:\n",(0,i.jsx)(a.code,{children:'["lamp.dashboard.experimental.gps","lamp.dashboard.experimental.Exercise Habits","lamp.dashboard.experimental.Self Esteem"]'})]}),"\n",(0,i.jsx)(a.p,{children:"You can also simply click 'Select All Shared Tags' to load all selected data."}),"\n",(0,i.jsxs)(a.p,{children:['Once you have loaded your data, you can click the "Adjust Graph Display" button to change the size of your graphs, filter by a ',(0,i.jsx)(a.em,{children:"participant"})," ID (or name, if they have one assigned), or change how graphs are grouped (by participant or by graph name). You can also download a PDF with the displayed graphs by clicking the"]}),"\n",(0,i.jsx)(a.h3,{id:"specific-data-analysis",children:"Specific data analysis"}),"\n",(0,i.jsx)(a.p,{children:"To analyze specific data, use the 'Select tag categories' dropdown menu to select a category of tag you would like to see more details about, then select a specific tag name that is listed. If you are using publicly available LAMP analysis code - e.g. from a GitHub repository or other publicly available site, graphs are likely under the 'experimental' category."}),"\n",(0,i.jsx)(a.h1,{id:"data-portal-usage-examples",children:"Data Portal Usage Examples"}),"\n",(0,i.jsx)(a.p,{children:"Below are some examples and ideas to get you started using the LAMP Data Portal."}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.img,{src:t(79964).A+"",width:"2566",height:"1518"}),"\n",(0,i.jsx)(a.strong,{children:"Example 1"}),": By plotting number of gps(or other passive measure) data points received by hour, you quickly identify which (if any) of your participants may be having data collection issues. Prevent unpleasant end-of-study realizations by ensuring that all your participants are collecting the highest quality data possible."]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.img,{src:t(84390).A+"",width:"1260",height:"681"}),"\n",(0,i.jsx)(a.strong,{children:"Example 2"}),": Use Vega's easy to create and manage tooltips to fit far more data into a single graph than would be possible in a traditional paper graph - here, for example, you can both see how survey responses trend and examine specific surveys in detail."]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.img,{src:t(49222).A+"",width:"2568",height:"1518"}),"\n",(0,i.jsx)(a.strong,{children:"Example 3"}),": Keep track of which activities (and how many) your participants are doing with Vega's stacked bar plots."]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.img,{src:t(84548).A+"",width:"2562",height:"1289"}),"\n",(0,i.jsx)(a.strong,{children:"Example 4"}),": Use an array of charts to examine a participant's data in great detail. Here, find examples of summary graphs which show changes over time, correlation heatmaps which highlight connections between different LAMP measures (outlined in red), and the activity tracking functionality seen in example 3."]}),"\n",(0,i.jsx)(a.h3,{id:"help--updates",children:"Help & Updates"}),"\n",(0,i.jsxs)(a.p,{children:["The LAMP data portal is currently in alpha, as is this documentation. We are actively seeking both feedback and requests about the usability and usefulness of the data portal and this documentation. Please give us any questions, comments, or feature requests either through our ",(0,i.jsx)(a.a,{href:"https://community.lamp.digital",children:"community page"})," or our public ",(0,i.jsx)(a.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/issues",children:"GitHub repository"})]})]})}function c(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},49222:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/docs_activity_counts-6ca498706c7435174cdaa81554990c8f.png"},84548:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/docs_example_charts-c9dc39891699c45fcef0da8d8d51ab60.png"},79964:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/docs_gps_scatter_example-d733ec9d265e237727b7d7dcb8a52453.png"},84390:(e,a,t)=>{t.d(a,{A:()=>s});const s=t.p+"assets/images/docs_tooltip_example-5eb4253df962f6f4b9ad920c0cf72aac.png"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>n});var s=t(96540);const i={},o=s.createContext(i);function r(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);