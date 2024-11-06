"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[4622],{43719:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"data_science/cortex/visualizations/basic_analysis","title":"Basic Analysis","description":"There are some basic analyses that are useful for exploring study data. The Jupyter Notebook cortex/visualizations/correlation_plots.ipynb has code to:","source":"@site/docs/09-data_science/06-cortex/06-visualizations/02-basic_analysis.md","sourceDirName":"09-data_science/06-cortex/06-visualizations","slug":"/data_science/cortex/visualizations/basic_analysis","permalink":"/data_science/cortex/visualizations/basic_analysis","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/06-visualizations/02-basic_analysis.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1730910383000,"sidebarPosition":2,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Data Quality","permalink":"/data_science/cortex/visualizations/data_quality"},"next":{"title":"Participant-Level Visualizations","permalink":"/data_science/cortex/visualizations/participant_level"}}');var i=s(74848),r=s(28453);const n={},o="Basic Analysis",l={},c=[{value:"Data",id:"data",level:3},{value:"Survey data",id:"survey-data",level:4},{value:"Passive data",id:"passive-data",level:4},{value:"Other features",id:"other-features",level:4},{value:"Analysis",id:"analysis",level:3},{value:"Correlations",id:"correlations",level:4},{value:"Comparison across groups",id:"comparison-across-groups",level:4},{value:"Logistic regression model",id:"logistic-regression-model",level:4}];function d(e){const a={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"basic-analysis",children:"Basic Analysis"})}),"\n",(0,i.jsx)(a.p,{children:"There are some basic analyses that are useful for exploring study data. The Jupyter Notebook cortex/visualizations/correlation_plots.ipynb has code to:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Score survey data and save it into a user specified directory."}),"\n",(0,i.jsx)(a.li,{children:"Load survey data, passive data features, and any other researcher-generated features to generate correlation plots."}),"\n",(0,i.jsx)(a.li,{children:"Compare features across groups of interest."}),"\n",(0,i.jsx)(a.li,{children:"Fit a basic logistic regression model to predict the participants group based on the features."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"While these functionalities are by no means comprehensive, they can provide a starting place for further exploration."}),"\n",(0,i.jsx)(a.h3,{id:"data",children:"Data"}),"\n",(0,i.jsx)(a.h4,{id:"survey-data",children:"Survey data"}),"\n",(0,i.jsx)(a.p,{children:"Surveys are scored using Cortex's score_surveys() function. Results are saved by survey category by participant in individual csv files. Each csv file will have a column for the timestamp as well as columns for each question in the survey and a total score."}),"\n",(0,i.jsx)(a.h4,{id:"passive-data",children:"Passive data"}),"\n",(0,i.jsx)(a.p,{children:"Passive data should be processed prior to analysis. cortex.run() can be used to generate the file format required. In particular, secondary features should be in pickle files with a column for timestamp and a column for the value of the secondary feature."}),"\n",(0,i.jsx)(a.h4,{id:"other-features",children:"Other features"}),"\n",(0,i.jsx)(a.p,{children:'Additional data can come in the form of "global" data or data that holds true across the entirety of the study (ex: number of activities, age). These features should be stored in a csv file called participantId_other_global_features.csv where each column of the dataframe is a differnet global feature. Each column that you would like to be used in analysis should be listed in the list OTHER_GLOBAL_FEATS.'}),"\n",(0,i.jsx)(a.p,{children:'Other local features are "local" in time. These features look just like survey or passive data in that they will have a timestamp column (in ms) as well as columns for each feature. The file can be named anything, and the name of the file may or may not be in the columns. Using this filename, files will be saved in SURVEY_DIR as participantID_filename.csv. OTHER_LOCAL_FEATS should be a list of all of these file names. Then you must specify which columns in each file that should be usef in analysis. An example of how to do this in OTHER_LOCAL_SUBFEATS is shown below.'}),"\n",(0,i.jsx)(a.h3,{id:"analysis",children:"Analysis"}),"\n",(0,i.jsx)(a.p,{children:"For example, we could look at GAD-7 questions, sleep duration, and some passive data features from one of our studies. These example features are listed below."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:s(26998).A+"",width:"442",height:"244"})}),"\n",(0,i.jsx)(a.h4,{id:"correlations",children:"Correlations"}),"\n",(0,i.jsx)(a.p,{children:"Using these features, we could then produce a correlation map. The * indicate signficant correlations (p < 0.05, corrected for multiple comparisons)."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:s(44881).A+"",width:"1320",height:"1409"})}),"\n",(0,i.jsx)(a.h4,{id:"comparison-across-groups",children:"Comparison across groups"}),"\n",(0,i.jsx)(a.p,{children:"We could then look at whether these features differed among participants that improved over the course of the study. Significantly different groups based on a t-test (p < 0.05, corrected for multiple comparisons) are marked with *. Entropy, home time, and GPS data quality differ between the group that did and did not improve."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:s(23831).A+"",width:"722",height:"712"})}),"\n",(0,i.jsx)(a.h4,{id:"logistic-regression-model",children:"Logistic regression model"}),"\n",(0,i.jsx)(a.p,{children:"Finally, we fit a logistic regression model to predict which participants improved. The model achieved an AUC of 0.862 and had three non-zero coefficients:"}),"\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{children:"Feature"}),(0,i.jsx)(a.th,{children:"Coefficient"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"entropy"}),(0,i.jsx)(a.td,{children:"0.468"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"screen_duration"}),(0,i.jsx)(a.td,{children:"0.212"})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"sleep_duration"}),(0,i.jsx)(a.td,{children:"0.223"})]})]})]}),"\n",(0,i.jsx)(a.p,{children:"From here, we can take a deeper look at why some features may be different across groups or investigate the relationships between correlated variables. The goal of these visualizations is to provide a starting point for further analysis."})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},23831:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/comp_feats-a7a5519327c7069a6196a7e7a15565fe.png"},44881:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/corr_example-d4c0b8af34386d4e82b07f52ea56c270.png"},26998:(e,a,s)=>{s.d(a,{A:()=>t});const t=s.p+"assets/images/corr_key-976b0f6d56c508bb260ba52e313c05b2.png"},28453:(e,a,s)=>{s.d(a,{R:()=>n,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function n(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);