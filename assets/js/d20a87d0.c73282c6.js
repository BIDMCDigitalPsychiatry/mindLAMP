"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[4683],{86866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"data_science/cortex/utils/database","title":"Database functions","description":"Warning: Directly interacting with the database can carry some risk. Please read the documentation carefully.","source":"@site/docs/09-data_science/06-cortex/07-utils/05-database.md","sourceDirName":"09-data_science/06-cortex/07-utils","slug":"/data_science/cortex/utils/database","permalink":"/data_science/cortex/utils/database","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/07-utils/05-database.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1731616827000,"sidebarPosition":5,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Sensor functions","permalink":"/data_science/cortex/utils/sensors"},"next":{"title":"Notifications","permalink":"/data_science/cortex/utils/notifications"}}');var s=t(74848),l=t(28453);const d={},a="Database functions",r={},c=[{value:"<code>utils.db.change_parent</code>",id:"utilsdbchange_parent",level:2},{value:"Args",id:"args",level:4},{value:"Example",id:"example",level:4},{value:"<code>utils.db.get_survey_names</code>",id:"utilsdbget_survey_names",level:2},{value:"Args",id:"args-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>utils.db.list_deleted_activities</code>",id:"utilsdblist_deleted_activities",level:2},{value:"Args",id:"args-2",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>utils.db.list_deleted_participants</code>",id:"utilsdblist_deleted_participants",level:2},{value:"Args",id:"args-3",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>utils.db.restore_activities</code>",id:"utilsdbrestore_activities",level:2},{value:"Args",id:"args-4",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>utils.db.restore_participant</code>",id:"utilsdbrestore_participant",level:2},{value:"Args",id:"args-5",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>utils.db.restore_activities_manually</code>",id:"utilsdbrestore_activities_manually",level:2},{value:"Args",id:"args-6",level:4},{value:"Example",id:"example-6",level:4}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"database-functions",children:"Database functions"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Warning: Directly interacting with the database can carry some risk. Please read the documentation carefully."})}),"\n",(0,s.jsx)(n.p,{children:"These functions provide a way to directly interact with a LAMP MongoDB database and add some functionality that is not currently present in the LAMP API, such as restoring deleted activities or participants. Deleting a patient or activity through the mindLAMP dashboard does not actually erase their data from a server. Rather, it applies the 'delete' FLAG to them at a database level. As such, these functions include safeguards that should prevent unintended consequences, but directly interacting with the database can carry some risk, so please read the documentation for these functions carefully before using them. Please report any issues to community.lamp.digital."}),"\n",(0,s.jsx)(n.p,{children:"Please note: if you are using an older version of LAMP, e.g. one using CouchDB, these functions may not work."}),"\n",(0,s.jsx)(n.h2,{id:"utilsdbchange_parent",children:(0,s.jsx)(n.code,{children:"utils.db.change_parent"})}),"\n",(0,s.jsx)(n.p,{children:"Change a LAMP element's parent - e.g. move a participant from one study to another, a study from a researcher to another, or an activity from study to study."}),"\n",(0,s.jsx)(n.h4,{id:"args",children:"Args"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"target"}),": the target's LAMP id"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"original_parent"}),": the LAMP id of the original parent of the target"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"target_parent"}),": the LAMP id of the parent the target should be moved to"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),": the database this will happen in (usually 'LAMP')"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_url"}),": a valid mongodb URL w/ login info (one of this or ",(0,s.jsx)(n.code,{children:"client"})," is required, but not both)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"}),": a valid pymongo client"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\ncortex.utils.db.change_parent('U0591253803','dynp0g0530xkahnzh0xc','ef0b54h281vfmhc0515d',client_url=MONGO_URL)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"U0591253803 updated. Moved participant from study Second Study - (dynp0g0530xkahnzh0xc) to study LAMP Testing (Internal - Luke) - (ef0b54h281vfmhc0515d)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"utilsdbget_survey_names",children:(0,s.jsx)(n.code,{children:"utils.db.get_survey_names"})}),"\n",(0,s.jsx)(n.p,{children:"Get the survey names and specs for all ActivityEvents for a participant. Use the database to get deleted survey ids as well."}),"\n",(0,s.jsx)(n.h4,{id:"args-1",children:"Args"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"participant_id"}),": (string) the participant id."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),": (string, default: 'LAMP') the database."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_url"}),": (string) a valid mongodb URL with login info."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"}),": (object) a valid pymongo client"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:'A dataframe containing the ActivityEvent data for this participant with two additional columns: "name" and "spec".'}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:'YOUR_MONGO_URL = "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]"\nutils.db.get_survey_names("U1234567890", client_url=YOUR_MONGO_URL)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Output:\n",(0,s.jsx)(n.img,{src:t(90600).A+"",width:"1738",height:"270"})]}),"\n",(0,s.jsx)(n.h2,{id:"utilsdblist_deleted_activities",children:(0,s.jsx)(n.code,{children:"utils.db.list_deleted_activities"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns a list of dictionaries, each reflecting a deleted activity, with an ",(0,s.jsx)(n.code,{children:"id"})," and ",(0,s.jsx)(n.code,{children:"name"})," key."]}),"\n",(0,s.jsx)(n.h4,{id:"args-2",children:"Args"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"study_id"}),": the study to examine"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),": the database this will happen in (usually 'LAMP')"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_url"}),": a valid mongodb URL w/ login info"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"}),": a valid pymongo client"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\ncortex.utils.db.list_deleted_activities('dynp0g0530xkahnzh0xc',client_url=MONGO_URL)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[{'id': 'qa0k8arrv8cx1brp724d', 'name': 'Jewels A testing'},\n {'id': 'fgqyjzspc92n2nwb8d7d', 'name': 'Test Survey'}]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"utilsdblist_deleted_participants",children:(0,s.jsx)(n.code,{children:"utils.db.list_deleted_participants"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns a list of dictionaries, each reflecting a deleted participant, with an ",(0,s.jsx)(n.code,{children:"id"})," key."]}),"\n",(0,s.jsx)(n.h4,{id:"args-3",children:"Args"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"study_id"}),": the study to examine"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),": the database this will happen in (usually 'LAMP')"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_url"}),": a valid mongodb URL w/ login info"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"}),": a valid pymongo client"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\nprint(LAMP.Study.all_by_researcher('ffmz65mn1gtav5fq3bhq')['data'])\n\ncortex.utils.db.list_deleted_participants('ef0b54h281vfmhc0515d',client_url=MONGO_URL)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[{'id': 'ef0b54h281vfmhc0515d', 'name': 'LAMP Testing (Internal - Luke)'}, {'id': 'dynp0g0530xkahnzh0xc', 'name': 'Second Study'}]\n[{'id': 'U4942710066'}]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"utilsdbrestore_activities",children:(0,s.jsx)(n.code,{children:"utils.db.restore_activities"})}),"\n",(0,s.jsx)(n.p,{children:"Restores activities given one or more activity ids"}),"\n",(0,s.jsx)(n.h4,{id:"args-4",children:"Args"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"activity_id"}),": string or list of the LAMP IDs of the activity(s) to restore"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),": the database this will happen in (usually 'LAMP')"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_url"}),": a valid mongodb URL w/ login info"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"}),": a valid pymongo client"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"restore_tags"}),": Whether to restore any tags created on a activity"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\ndeleted = [x['id'] for x in cortex.utils.db.list_deleted_activities('dynp0g0530xkahnzh0xc',client_url=MONGO_URL)]\n\ncortex.utils.db.restore_activities(deleted,client_url=MONGO_URL)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Restoring qa0k8arrv8cx1brp724d...\nRestoring fgqyjzspc92n2nwb8d7d...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"utilsdbrestore_participant",children:(0,s.jsx)(n.code,{children:"utils.db.restore_participant"})}),"\n",(0,s.jsx)(n.p,{children:"Restores participants given one or more participant ids"}),"\n",(0,s.jsx)(n.h4,{id:"args-5",children:"Args"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"participant_id"}),": string or list of the LAMP IDs of the participant(s) to restore"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),": the database this will happen in (usually 'LAMP')"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_url"}),": a valid mongodb URL w/ login info"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"}),": a valid pymongo client"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"restore_tags"}),": Whether to restore any tags created on a activity"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\ncortex.utils.db.restore_participant(['U4942710066'],client_url=MONGO_URL)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Restoring U4942710066...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"utilsdbrestore_activities_manually",children:(0,s.jsx)(n.code,{children:"utils.db.restore_activities_manually"})}),"\n",(0,s.jsx)(n.p,{children:"Prompts the user to enter a list of activities to undelete them"}),"\n",(0,s.jsx)(n.h4,{id:"args-6",children:"Args"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"study_id"}),": the study_id to restore activities too"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"db"}),": the database this will happen in (usually 'LAMP')"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_url"}),": a valid mongodb URL w/ login info"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client"}),": a valid pymongo client"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"import cortex\nMONGO_URL = \"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]\"\nprint(LAMP.Study.all_by_researcher('ffmz65mn1gtav5fq3bhq')['data'])\ncortex.utils.db.restore_activities_manually('dynp0g0530xkahnzh0xc',client_url=MONGO_URL)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[{'id': 'ef0b54h281vfmhc0515d', 'name': 'LAMP Testing (Internal - Luke)'}, {'id': 'dynp0g0530xkahnzh0xc', 'name': 'Second Study'}]\n\nThe following activities are deleted\n0:Jewels A testing:qa0k8arrv8cx1brp724d\n1:Jewels B Testing:4at12eky0manz92bvhbj\n2:Test Survey:fgqyjzspc92n2nwb8d7d\n3:Scratch Card:8z9vcgewqt1j9vknm48d\nPlease input, comma-seperated, the numbers of the activity you would like to restore. (e.g. 1,4)\n 1,3\nAll done. As of now:\nThe following activities are deleted\n0:Jewels A testing:qa0k8arrv8cx1brp724d\n1:Test Survey:fgqyjzspc92n2nwb8d7d\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},90600:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/db_activity_names-de2835b1afae4f23220e5355cb03632d.png"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(96540);const s={},l=i.createContext(s);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);