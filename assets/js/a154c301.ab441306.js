"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[7957],{34382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"data_science/cortex/running_cortex","title":"Running Cortex","description":"The cortex.run() function is the easiest way to run multiple cortex features on multiple participants in a single function call.","source":"@site/docs/09-data_science/06-cortex/03-running_cortex.md","sourceDirName":"09-data_science/06-cortex","slug":"/data_science/cortex/running_cortex","permalink":"/data_science/cortex/running_cortex","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/03-running_cortex.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1731507795000,"sidebarPosition":3,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"What is Cortex?","permalink":"/data_science/cortex/what_is_cortex"},"next":{"title":"Advanced Usage","permalink":"/data_science/cortex/advanced"}}');var i=n(74848),r=n(28453);const s={},l="Running Cortex",o={},c=[{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function d(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"running-cortex",children:"Running Cortex"})}),"\n",(0,i.jsx)(t.p,{children:"The cortex.run() function is the easiest way to run multiple cortex features on multiple participants in a single function call."}),"\n",(0,i.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"id_or_set"}),": (list of strings) a list of researchers, studies, and participants that will be expanded into a list of all participants in the set."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"features"}),": (list of strings) a list of the names of raw, primary, or secondary features to run."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"feature_params"}),": (dict, default=",") a dictionary holding any other parameters to pass to the feature functions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"start"}),": (int, units: ms, default=None) the start time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"end"}),": (int, units: ms, default=None) the end time.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Note: If start or end is set to None, the first / last timestamp with raw data will be determined. If resolution is additionally set to the number of miliseconds in a day then these timestamps will be shifted to 9am UTC."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"resolution"}),": (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"path_to_save"}),': (string, default: "") a filepath to a directory for the features. Folders will be created for each feature and participant data will be saved in individual pickle files.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"run_part_and_features"}),': (string, default: "") a path to a csv file with "participant" and "feature" columns to run only certain features for certain participants.']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"cache"}),": (boolean, default: False) whether or not to cache the raw data."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"print_logs"}),": (boolean, default: False) whether to print logs. Otherwise the log level will be set to warning."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.code,{children:"path_to_save"}),' is not set, a dictionary with keys for each feature will be created. Each feature will have a datafream with columns "id" for the participant id, and then any parameters in the data.']}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markdown",children:"cortex.run(\"dhfiej29384\",\n           features=['screen_duration', 'data_quality'],\n           feature_params={'screen_duration': {}, 'data_quality': {\"feature\":\"gps\", \"bin_size\":3600000}},\n           start=1638248400000,\n           end=1638248400000 + 7 * MS_IN_DAY)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markdown",children:"{'screen_duration':             id           timestamp       value\n 0  U7869554142 2021-11-30 05:00:00  25588172.0\n 1  U7869554142 2021-12-01 05:00:00  15561390.0\n 2  U7869554142 2021-12-02 05:00:00  25896531.0\n 3  U7869554142 2021-12-03 05:00:00  33756622.0\n 4  U7869554142 2021-12-04 05:00:00  16850746.0\n 5  U7869554142 2021-12-05 05:00:00  19710799.0\n 0  U1949510612 2021-11-30 05:00:00         0.0\n 1  U1949510612 2021-12-01 05:00:00    184235.0\n 2  U1949510612 2021-12-02 05:00:00         0.0\n 3  U1949510612 2021-12-03 05:00:00  15452842.0\n 4  U1949510612 2021-12-04 05:00:00  13476068.0\n 5  U1949510612 2021-12-05 05:00:00  31316368.0,\n 'data_quality':             id           timestamp     value\n 0  U7869554142 2021-11-30 05:00:00  0.791667\n 1  U7869554142 2021-12-01 05:00:00  0.958333\n 2  U7869554142 2021-12-02 05:00:00  0.916667\n 3  U7869554142 2021-12-03 05:00:00  1.000000\n 4  U7869554142 2021-12-04 05:00:00  0.958333\n 5  U7869554142 2021-12-05 05:00:00  0.708333\n 0  U1949510612 2021-11-30 05:00:00  0.041667\n 1  U1949510612 2021-12-01 05:00:00  0.041667\n 2  U1949510612 2021-12-02 05:00:00  0.000000\n 3  U1949510612 2021-12-03 05:00:00  0.416667\n 4  U1949510612 2021-12-04 05:00:00  0.750000\n 5  U1949510612 2021-12-05 05:00:00  1.000000}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);