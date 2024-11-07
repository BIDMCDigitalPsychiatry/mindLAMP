"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[6009],{8620:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"data_science/cortex/utils/module_scheduler","title":"Module scheduler","description":"The module scheduling code allows researchers to specify a set of activities as a \\"module\\" which can then be used to easily schedule sets of activities for participants.","source":"@site/docs/09-data_science/06-cortex/07-utils/02-module_scheduler.md","sourceDirName":"09-data_science/06-cortex/07-utils","slug":"/data_science/cortex/utils/module_scheduler","permalink":"/data_science/cortex/utils/module_scheduler","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/07-utils/02-module_scheduler.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731010294000,"sidebarPosition":2,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"General functions","permalink":"/data_science/cortex/utils/general_functions"},"next":{"title":"Activity functions","permalink":"/data_science/cortex/utils/activities"}}');var l=t(74848),n=t(28453);const d={},r="Module scheduler",c={},a=[{value:"Module specification",id:"module-specification",level:2},{value:"Setting module schedules",id:"setting-module-schedules",level:2},{value:"Method 1: <code>utils.module_scheduler.correct_modules</code>",id:"method-1-utilsmodule_schedulercorrect_modules",level:3},{value:"Args",id:"args",level:4},{value:"Example",id:"example",level:4},{value:"Method 2: <code>utils.module_scheduler.schedule_module</code>",id:"method-2-utilsmodule_schedulerschedule_module",level:3},{value:"Args",id:"args-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Other useful functions",id:"other-useful-functions",level:3},{value:"<code>utils.module_scheduler.unschedule_other_surveys</code>",id:"utilsmodule_schedulerunschedule_other_surveys",level:3},{value:"Args",id:"args-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>utils.module_scheduler.unschedule_specific_survey</code>",id:"utilsmodule_schedulerunschedule_specific_survey",level:3},{value:"Args",id:"args-3",level:4},{value:"Example",id:"example-3",level:4}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"module-scheduler",children:"Module scheduler"})}),"\n",(0,l.jsx)(s.p,{children:'The module scheduling code allows researchers to specify a set of activities as a "module" which can then be used to easily schedule sets of activities for participants.'}),"\n",(0,l.jsx)(s.h2,{id:"module-specification",children:"Module specification"}),"\n",(0,l.jsx)(s.p,{children:"First, the researcher must specify what activities consitutes a module and how they should be arranged in time. Modules should be specified in a json file. Each module must include the name of the module (which should be the key in the dictionary) and a dictionary containing:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:'"activities": the list of names of activities for the module which should already exist in the participants'}),"\n",(0,l.jsx)(s.li,{children:'"daily": the list of either "none" or "daily" for if the activity should repeat daily or only occur once'}),"\n",(0,l.jsx)(s.li,{children:'"times": the start times of each activity (relative to the start of the module, see example below)'}),"\n",(0,l.jsx)(s.li,{children:'"message": a message to send to the participant (optional, put "" for no message)'}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Here is a sample specification:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'{\n    "trial_period": {\n        "activities": ["Trial Period Day 1",\n                       "Trial Period Day 2",\n                       "Trial Period Day 3"],\n        "daily": ["none", "none", "none"],\n        "times": [0, 86400000, 172800000],\n        "message": ""\n    },\n    "gratitude_journal": {\n        "activities": ["Gratitude",\n                       "Gratitude Journal Day 1",\n                       "Gratitude Journal Day 2",\n                       "Gratitude Journal Day 3",\n                       "Gratitude Journal Day 4",\n                       "Gratitude Journal Day 5",\n                       "Gratitude Journal Day 6"],\n        "daily": ["none",\n                  "none",\n                  "none",\n                  "none",\n                  "none",\n                  "none",\n                  "none"],\n        "times": [-60000,\n                   60000,\n                   86400000,\n                   172800000,\n                   259200000,\n                   345600000,\n                   432000000],\n        "message": "This week\'s module centers around gratitude."\n    },\n}\n'})}),"\n",(0,l.jsx)(s.p,{children:'In the example above, we have specified two modules, "trial_period" and "gratitude_journal". The "trial_period" module has 3 activities, none of which repeat. The first one will occur at the time of scheduling (for example, at 6pm on that day), the second one will happen 86400000 ms later (ie at 6pm on the second day), and the third one will happen 172800000 ms later (ie at 6pm on the third day). Notice that the first activity for "gratitude_journal" has a negative time. This will schedule the activity 1 minute before the scheduled start time, or at 5:59pm.'}),"\n",(0,l.jsxs)(s.p,{children:["Please see the source code examples for more information here: ",(0,l.jsx)(s.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex/tree/master/cortex/utils",children:"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex/tree/master/cortex/utils"})]}),"\n",(0,l.jsx)(s.h2,{id:"setting-module-schedules",children:"Setting module schedules"}),"\n",(0,l.jsx)(s.p,{children:"Once modules have been specified, they can be scheduled in one of two ways:"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["Configuring participant attachments to tell the system which modules should be assigned and when. Then ",(0,l.jsx)(s.code,{children:"correct_modules()"})," is used to update participant module schedules."]}),"\n",(0,l.jsxs)(s.li,{children:["Use the ",(0,l.jsx)(s.code,{children:"schedule_module()"})," function directly."]}),"\n"]}),"\n",(0,l.jsxs)(s.h3,{id:"method-1-utilsmodule_schedulercorrect_modules",children:["Method 1: ",(0,l.jsx)(s.code,{children:"utils.module_scheduler.correct_modules"})]}),"\n",(0,l.jsx)(s.p,{children:"This method requires two tags be set on participants: a phase tag and a modules tag. Here is an example phase tag:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'{\n  "status": "enrolled",\n  "phases": {"enrolled": 1649217600000,\n             "trial": 1648353600000}\n}\n'})}),"\n",(0,l.jsx)(s.p,{children:'"phases" is the dictionary that holds when (in miliseconds) the participant started each phase of the study. Module scheduling is designed to only occur for particpants in the "enrolled" or "trial" phase. The module scheduler will check how long the participant has been in the given phase to determine which module should be scheduled.'}),"\n",(0,l.jsx)(s.p,{children:"The second required tag is a module tag. For example:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'{\n    "trial_period": {\n                      "module": "trial_period",\n                      "phase": "trial",\n                      "start_end": [0, 345600000],\n                      "shift": 18\n                 },\n    "gratitude_journal": {\n                     "module": "gratitude_journal",\n                     "phase": "enrolled",\n                     "start_end": [0, 518400000],\n                     "shift": 18\n                 },\n}\n'})}),"\n",(0,l.jsx)(s.p,{children:'In this example, the participant will have the "trial_period" module scheduled when they are in time 0 to 345600000 ms (first 4 days) of the "trial" phase. In addition, the activity schedule will start at 18 (18:00), or 6pm. The "gratitude_journal" module will be during the "enrolled" phase and will last from the start of enrollment (0 ms) to the end of the first week (518400000 ms = day 6). This module will also be shifted in time to start at 6pm (18:00).'}),"\n",(0,l.jsx)(s.p,{children:"With the modules specified, and phase / module tags set on the participant, correct_modules() can be called to 1) check which module the participant should be scheduled for 2) determine if this matches with the current scheduled activities and 3) make any necessary corrections to the schedules. It typically makes sense to call this function once every day or so."}),"\n",(0,l.jsx)(s.h4,{id:"args",children:"Args"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"part_id"}),": (string) the participant ID."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"PHASE_TAG"}),": (string) the name of the phase tag."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"MODULE_TAG"}),": (string) the name of the module tag."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"module_json"}),": (dict, default: MODULE_JSON) the module specificaitons."]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-markdown",children:'utils.module_scheduler.correct_modules("U1234567890", "my_study.phases", "my_study.modules", MODULE_JSON)\n'})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsxs)(s.h3,{id:"method-2-utilsmodule_schedulerschedule_module",children:["Method 2: ",(0,l.jsx)(s.code,{children:"utils.module_scheduler.schedule_module"})]}),"\n",(0,l.jsxs)(s.p,{children:["This function is a helper function for ",(0,l.jsx)(s.code,{children:"correct_modules()"})," and can be used to schedule a module for a participant."]}),"\n",(0,l.jsx)(s.h4,{id:"args-1",children:"Args"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"part_id"}),": (string) the participant ID."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"module_name"}),": (string) the name of the module to schedule. This must be a name in the module json."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"start_time"}),': (int, units: ms) the time to use as the "start" / reference time for the module. This does not need to be the time of the first activity. In addition, you can use negative times to schedule some activities before the start.']}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"module_json"}),": (dict) the specification for the modules."]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-markdown",children:'utils.module_scheduler.schedule_module("U1234567890", "gratitude_journal", 1648368000000, module_json)\n'})}),"\n",(0,l.jsxs)(s.p,{children:["Please see the top of this page for the example ",(0,l.jsx)(s.code,{children:"module_json"}),"."]}),"\n",(0,l.jsx)(s.h3,{id:"other-useful-functions",children:"Other useful functions"}),"\n",(0,l.jsx)(s.h3,{id:"utilsmodule_schedulerunschedule_other_surveys",children:(0,l.jsx)(s.code,{children:"utils.module_scheduler.unschedule_other_surveys"})}),"\n",(0,l.jsxs)(s.p,{children:["Uschedule all surveys for a participant (except those specified in ",(0,l.jsx)(s.code,{children:"keep_these"}),")."]}),"\n",(0,l.jsx)(s.h4,{id:"args-2",children:"Args"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"part_id"}),": (string) the participant ID."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"keep_these"}),": (list of strings) names of any surveys to keep the schedules for."]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-markdown",children:'utils.module_scheduler.unschedule_other_surveys("U1234567890", keep_these=["Morning Daily Survey", "Weekly Survey"])\n'})}),"\n",(0,l.jsx)(s.h3,{id:"utilsmodule_schedulerunschedule_specific_survey",children:(0,l.jsx)(s.code,{children:"utils.module_scheduler.unschedule_specific_survey"})}),"\n",(0,l.jsx)(s.p,{children:"Uschedule a specific survey."}),"\n",(0,l.jsx)(s.h4,{id:"args-3",children:"Args"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"part_id"}),": (string) the participant ID."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"survey_name"}),": (string) the name of the survey to unschedule."]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"example-3",children:"Example"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-markdown",children:'utils.module_scheduler.unschedule_specific_survey("U1234567890", "Gratitude Journal Day 3")\n'})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>r});var i=t(96540);const l={},n=i.createContext(l);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);