"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[7293],{13154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"data_science/cortex/features/secondary/survey_results","title":"Survey Results","description":"computed from primary feature: cortex.primary.survey_scores","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/14-survey_results.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/survey_results","permalink":"/data_science/cortex/features/secondary/survey_results","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/14-survey_results.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1730910383000,"sidebarPosition":14,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Step Count","permalink":"/data_science/cortex/features/secondary/step_count"},"next":{"title":"Trip Distance","permalink":"/data_science/cortex/features/secondary/trip_distance"}}');var n=r(74848),a=r(28453);const o={},i="Survey Results",c={},l=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function d(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"survey-results",children:"Survey Results"})}),"\n",(0,n.jsxs)(t.p,{children:["computed from primary feature: ",(0,n.jsx)(t.code,{children:"cortex.primary.survey_scores"}),"\ncomputed from raw feature: ",(0,n.jsx)(t.code,{children:"cortex.raw.survey"})]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Survey results computes the mean score per resolution bin for a given category. The category should match a category in the scoring_dict. Please see the documentation on ",(0,n.jsx)(t.code,{children:"primary.survey_scores"})," for a full description of the scoring_dict."]}),"\n",(0,n.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"resolution"}),": (int, units: ms) the resolution over which to compute features."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"question_or_category"}),": (str) a survey category / question to average."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,n.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"value"}),": (int, units: ms) the average score."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-markdown",children:'scoring_dict = {\n    "category_list": ["GAD-7"],\n    "questions": {\n            "Over the past week, I have felt nervous, anxious, or on edge.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have not been able to stop or control worrying.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have been worrying too much about different things.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have had trouble relaxing.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have felt so restless that it\'s hard to sit still.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have felt myself becoming easily annoyed or irritable.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have felt afraid as if something awful might happen.": {"category": "GAD-7", "scoring": "value_map"},\n        },\n    "value_map": {\n        "Not at all": 0,\n        "Several days": 1,\n        "More than half the days": 2,\n        "Nearly every day": 3\n    },\n}\ncortex.secondary.survey_results.survey_results(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000,\n        scoring_dict=scoring_dict, question_or_category="GAD-7")\n'})}),"\n",(0,n.jsx)(t.p,{children:"Output:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 0,\n  'duration': 4524000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 5},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 2.5}\n          ]\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);