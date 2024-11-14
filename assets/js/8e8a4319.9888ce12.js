"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2054],{81179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"data_science/cortex/features/primary/survey_scores","title":"Survey scores","description":"computed from raw feature: cortex.raw.survey","source":"@site/docs/09-data_science/06-cortex/05-features/01-primary/07-survey_scores.md","sourceDirName":"09-data_science/06-cortex/05-features/01-primary","slug":"/data_science/cortex/features/primary/survey_scores","permalink":"/data_science/cortex/features/primary/survey_scores","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/01-primary/07-survey_scores.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731616827000,"sidebarPosition":7,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Significant Locations","permalink":"/data_science/cortex/features/primary/sig_locs"},"next":{"title":"Trips","permalink":"/data_science/cortex/features/primary/trips"}}');var r=n(74848),a=n(28453);const o={},i="Survey scores",l={},c=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function d(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"survey-scores",children:"Survey scores"})}),"\n",(0,r.jsxs)(t.p,{children:["computed from raw feature: ",(0,r.jsx)(t.code,{children:"cortex.raw.survey"})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Computes survey scores from raw survey data."}),"\n",(0,r.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"return_ind_ques"}),": (boolean, default: False) whether to return individual question scores (or just category scores)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"scoring_dict"}),": (dictionary) dictionary holding scoring information in the following form:"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'scoring_dict = {\n        "category_list": [list of category strings],\n        "questions": {\n                         "question #1 text": {\n                                                  "category": something from list of category strings,\n                                                  "scoring": type of scoring\n                                             },\n                         "question #2 text": {\n                                                  "category": something from list of category strings,\n                                                  "map_to": "question #1 text"\n                                             },\n                     },\n        "map0": {\n                    "Never": 0,\n                    "Some of the time": 1,\n                    "All of the time": 2\n                }\n    }\n'})}),"\n",(0,r.jsx)(t.p,{children:"The supported scoring types are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'"value": will cast the result to an int ("1" --\x3e 1)'}),"\n",(0,r.jsx)(t.li,{children:'"boolean": "Yes" --\x3e 1, "No" --\x3e 0'}),"\n",(0,r.jsx)(t.li,{children:'map to a dictionary: give the name of the dictionary (ex: "map0", and create a corresponding dictionary in the scoring_dict)\nNon-numeric scores are not supported at this time.'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'"map_to" can be used to say that for example "question #2" should really be considered identical to "quesiton #1."\nPlease see the example below for an example of a scoring_dict.'}),"\n",(0,r.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time of a given survey entry."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time of a given survey entry."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"category"}),": (str) the category of the given survey entry."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"question"}),": (str) the question of the given survey entry, same as category for sum scores."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"score"}),": (float) the sum of the scores for all questions in the survey entry.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'Note: Only questions that are in the entry will be added to the score. Please ensure that all questions you wish to be added to your score are available in the participant data. (i.e. if you are trying to sum the results of "question 1" and "question 2" but participant X only has "question 2" the category score for particiapnt X will be only the "question 2" score.)'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-markdown",children:'scoring_dict = {\n    "category_list": ["PHQ-9", "GAD-7", "DWAI", "Daily_sleep_qual"],\n    "questions": {\n            "Over the past week, I have felt nervous, anxious, or on edge.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have not been able to stop or control worrying.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have been worrying too much about different things.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have had trouble relaxing.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have felt so restless that it\'s hard to sit still.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have felt myself becoming easily annoyed or irritable.": {"category": "GAD-7", "scoring": "value_map"},\n            "Over the past week, I have felt afraid as if something awful might happen.": {"category": "GAD-7", "scoring": "value_map"},\n\n            "Overall, how would you rate your sleep last night?": {"category": "Daily_sleep_qual", "scoring": "value"},\n            "How did you sleep last night?": {"category": "Daily_sleep_qual", "map_to": "Overall, how would you rate your sleep last night?"},\n        \n            "I feel uninterested in the things I used to enjoy.": {"category": "PQ-16", "scoring": "boolean"},\n            "I often seem to live through events exactly as they happened before (d\xe9j\xe0 vu).": {"category": "PQ-16", "scoring": "boolean"},\n            "I sometimes smell or taste things that other people can\u2019t smell or taste.": {"category": "PQ-16", "scoring": "boolean"},\n\n            "I trust the app to guide me towards my personal goals.": {"category": "DWAI", "scoring": "dwai_value_map"},\n            "I believe the app tasks will help me to address my problems.": {"category": "DWAI", "scoring": "dwai_value_map"},\n        },\n    "value_map": {\n        "Not at all": 0,\n        "Several days": 1,\n        "More than half the days": 2,\n        "Over half the days": 2,\n        "Nearly every day": 3\n    },\n    "dwai_value_map": {\n        "Strongly disagree": 0,\n        "Disagree": 1,\n        "Neither agree nor disagree": 2,\n        "Agree": 3,\n        "Strongly agree": 4\n    }\n}\ncortex.primary.survey_scores.survey_scores(id="U1234567890", start=0, end=cortex.now(), return_ind_ques=1, scoring_dict=scoring_dict)\n'})}),"\n",(0,r.jsx)(t.p,{children:"Output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 0,\n  'duration': 1627067480000,\n  'data': [\n           {'start': 1639759199227, 'end': 1639777579969, 'category': 'GAD-7', 'question': 'GAD-7', 'score': 7},\n           {'start': 1639759199227, 'end': 1639777579969, 'category': 'DWAI', 'question': 'DWAI', 'score': 6},\n           .\n           .\n           .\n           {'start': 1639426388269, 'end': 1639426610663, 'category': 'Daily_sleep_qual', 'question': 'How did you sleep last night?', score': 1},\n          ],\n  'has_raw_data': 1,\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Notes on the example above:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'The "category_list" may contain surveys that are not listed in the quesiton list, this will not throw an error but will also return no results. Scores are based only on the questions listed in "questions."'}),"\n",(0,r.jsx)(t.li,{children:'Similarly, there can be questions in "questions" that have categories not in "category_list." These questions, if found in participant data, will not be scored.'}),"\n",(0,r.jsx)(t.li,{children:'If you have multiple questions that should be considered the same, you may use "map_to" to point to another question. This is convinient if for example a spelling error is found and corrected during the study. Please note that answers must be the same.'}),"\n",(0,r.jsx)(t.li,{children:'As shown in the "value_map", you may have multiple keys with the same value.'}),"\n",(0,r.jsx)(t.li,{children:'Notice that the start / end time of the two returned survey scores (GAD-7 and DWAI) are the same. This is because GAD-7 questions and DWAI questions are part of the same survey in LAMP. They have been split into two seperate dictionaries here because of the way we mapped the questions to different categories (ie "DWAI" and "GAD-7")'}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);