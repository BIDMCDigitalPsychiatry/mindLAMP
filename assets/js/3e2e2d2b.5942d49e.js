"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8430],{48683:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"data_science/cortex/visualizations/participant_level","title":"Participant-Level Visualizations","description":"At times, it may be necessary to run specific analyses on one participant - for example, to ensure continuous data quality monitoring or check the level of interaction with LAMP. The following functions are designed to run on a specific participant and return information that may be helpful either with monitoring LAMP data collection or examining cortex scores","source":"@site/docs/09-data_science/06-cortex/06-visualizations/03-participant_level.md","sourceDirName":"09-data_science/06-cortex/06-visualizations","slug":"/data_science/cortex/visualizations/participant_level","permalink":"/data_science/cortex/visualizations/participant_level","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/06-visualizations/03-participant_level.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1731507795000,"sidebarPosition":3,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Basic Analysis","permalink":"/data_science/cortex/visualizations/basic_analysis"},"next":{"title":"General functions","permalink":"/data_science/cortex/utils/general_functions"}}');var s=i(74848),n=i(28453);const r={},l="Participant-Level Visualizations",c={},o=[{value:"Passive Data Quality",id:"passive-data-quality",level:2},{value:"Function",id:"function",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Code Example",id:"code-example",level:3},{value:"Active Data Quality",id:"active-data-quality",level:2},{value:"Function",id:"function-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Code Example",id:"code-example-1",level:3},{value:"Cortex Tertiles",id:"cortex-tertiles",level:2},{value:"Function",id:"function-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Code Example",id:"code-example-2",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"participant-level-visualizations",children:"Participant-Level Visualizations"})}),"\n",(0,s.jsx)(t.p,{children:"At times, it may be necessary to run specific analyses on one participant - for example, to ensure continuous data quality monitoring or check the level of interaction with LAMP. The following functions are designed to run on a specific participant and return information that may be helpful either with monitoring LAMP data collection or examining cortex scores"}),"\n",(0,s.jsx)(t.h2,{id:"passive-data-quality",children:"Passive Data Quality"}),"\n",(0,s.jsx)(t.h3,{id:"function",children:"Function"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    cortex.visualizations.participant.passive(id)\n"})}),"\n",(0,s.jsx)(t.p,{children:"This function produces two graphs intended to help assess data quality - a scatterplot and a heatmap, which both show on an hourly level the amount of data collected over the previous week. Data is stored in attachments to prevent unnecessary server load on subsequent runs - as such, this can be run repeatedly throughout the week to speed up individual runs."}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id_list"}),": A string or array of strings of LAMP ids (participant, study, researcher)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"show_graphs"}),": If True, graphs are displayed in the output"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"attach_graphs"}),": If True, graphs are attached to the participant"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"display_graphs"}),": If True, graphs are attached to the study and researcher for display"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"days_ago"}),": The number of days ago the analysis should end. If 0, analysis ends on the current timestamp"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"sample_length"}),": The number of days to query data for"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"set_to_utc_midnight"}),": If True, timestamps are adjusted to UTC midnight"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reporter_func"}),": The function that should output important logging info. Use with a webhook, for example logging to slack"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"return_dict"}),": If true, returns a dictionary containing data output. Else returns None."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reset"}),": If true, data from previous runs will be deleted."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"code-example",children:"Code Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"researcher_id='ffmz65mn1gtav5fq3bhq'\ncortex.visualizations.participant.passive(researcher_id,attach_graphs=False)\n"})}),"\n",(0,s.jsx)(t.p,{children:"First Time:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Found no U5946075691 data under lamp.analysis.Accel_Quality_stored\nQuerying for U5946075691 - Accel_Quality\n"})}),"\n",(0,s.jsx)(t.p,{children:"Repeat Time:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Querying for U5946075691 - GPS_Quality\nPrevious data was found. 168 chunks were excluded.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Scatterplot:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(40358).A+"",width:"460",height:"364"})}),"\n",(0,s.jsx)(t.p,{children:"Heatmap:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(8668).A+"",width:"527",height:"219"})}),"\n",(0,s.jsx)(t.h2,{id:"active-data-quality",children:"Active Data Quality"}),"\n",(0,s.jsx)(t.h3,{id:"function-1",children:"Function"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    cortex.visualizations.participant.active(id)\n"})}),"\n",(0,s.jsx)(t.p,{children:"This function produces a graph intended to help assess participant interaction with lamp - a stacked bar chart, which shows on an daily level the number of LAMP activities collected each day."}),"\n",(0,s.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id_list"}),": a string or array of strings of LAMP ids(participant, study, researcher)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"target_array"}),": a list of specs, names, or ids to display. Default is all. Include '' to show all activities."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"exclude_array"}),": a list of names to exclude. Default is None."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"exclude_groups"}),": attempt to exclude group completions"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"show_graphs"}),": if True, graphs are displayed in the output"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"attach_graphs"}),": if True, graphs are attached to the participant"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"display_graphs"}),": if True, graphs are attached to the study and researcher for display"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"graph_name"}),": set to another string to override the default name"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"days_ago"}),": the number of days ago the analysis should end.If 0, analysis ends on the current timestamp"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"sample_length"}),": The number of days to query data for"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reporter_func"}),": The function that should output important logging info.Use with a webhook, for example logging to slack"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"return_dict"}),": If true, returns a dictionary containing data output. Else returns None."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"code-example-1",children:"Code Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cortex.visualizations.participant.active('U1978824471',attach_graphs=True,days_ago=160,sample_length=30)\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:i(85494).A+"",width:"1110",height:"690"})}),"\n",(0,s.jsx)(t.h2,{id:"cortex-tertiles",children:"Cortex Tertiles"}),"\n",(0,s.jsx)(t.h3,{id:"function-2",children:"Function"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    cortex.visualizations.participant.cortex_tertiles(id)\n"})}),"\n",(0,s.jsx)(t.p,{children:"This function produces a graph intended to help assess how participant's cortex measures change day by day. Using a 'lollipop' chart, researcher can visualize whether a particpant's scores on different cortex measures are high, medium, or low, relative to a week's worth of measurements."}),"\n",(0,s.jsx)(t.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"target_id"}),": Required. a string or array of LAMP user, study, or researcher ids.All user ids below one or more ids in the list (if applicable) will be run"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"cortex_measures"}),": Default:['acc_energy','entropy','hometime','screen_duration']. a string, list, or dict of cortex measures. If a dict, keys will be used for the array fed into run and the values will be used as labels. E.g. ",(0,s.jsx)(t.code,{children:"{'sleep_periods':'Sleep'}"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"measure_params"}),": Measure params to pass into cortex"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"use_cache"}),": If true, attempt to use cached data"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"show_graphs"}),":Default"," True. a boolean - whether to show graphs generated to the user running the function call"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"attach_graphs"}),":Default"," True. a boolean - whether to attach graphs to the participant as a tag"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"display_graphs"}),":Default"," True. a boolean - whether to display graphs tothe participant on their prevent page"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"days_ago"}),": Default 0. Number of days ago to end analysis. Set to 0 to end analysis today"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"sample_length"}),": Default 7. Timespan for analysis, in days."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reporter_func"}),": Default 'print'. A function which should take one variable,which are outputs from this function, and displays them to a user"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"set_to_utc_midnight"}),": Default True. Whether or not to set the utc time to true"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"return_dict"}),": Default False. Whether or not to return a dictionary of all cortex outputs at the end."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"code-example-2",children:"Code Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cortex.visualizations.participant.cortex_tertiles(['U1978824471'],attach_graphs=True,use_cache=True)\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:i(90293).A+"",width:"262",height:"380"}),"\n",(0,s.jsx)(t.img,{src:i(9326).A+"",width:"269",height:"380"}),"\n",(0,s.jsx)(t.img,{src:i(2945).A+"",width:"289",height:"380"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85494:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/active_plot-e82921fee658093679a4dc572b8d5945.png"},90293:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/entropy-d66411dea03dd4d68d3976a89910c03c.png"},9326:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/hometime-3c6dd6217253874d5503415250903938.png"},8668:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/passive_heatmap-50d130f748fefdda9f7ee7bf6b09df4c.png"},40358:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/passive_scatter-8f1d1fe60415460f52b3257934d9337a.png"},2945:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/screen_duration-48500d85c1978ee5a446a32f63dd1ce7.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var a=i(96540);const s={},n=a.createContext(s);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);