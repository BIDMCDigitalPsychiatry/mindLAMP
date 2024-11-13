"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[5638],{70726:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>h,default:()=>o,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"data_science/tags","title":"Tags & Attachments","description":"To offer a way to store persistent, easily accessible data, the LAMP platform has implemented a feature known as attachments (sometimes also called tags). You can use tags to store any json-formatted data. Using this feature, you can attach data to any element of LAMP including:","source":"@site/docs/09-data_science/09-tags.md","sourceDirName":"09-data_science","slug":"/data_science/tags","permalink":"/data_science/tags","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/09-tags.md","tags":[],"version":"current","lastUpdatedBy":"sarithapillai8","lastUpdatedAt":1731507795000,"sidebarPosition":9,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Using the LAMP Data Portal","permalink":"/data_science/data_portal"},"next":{"title":"Admin Checklist","permalink":"/consortium/admin/checklist"}}');var s=a(74848),i=a(28453);const r={},h="Tags & Attachments",l={},c=[{value:"Functions",id:"functions",level:2},{value:"LAMP.Type.list_attachments(&#39;id&#39;)",id:"lamptypelist_attachmentsid",level:3},{value:"LAMP.Type.get_attachment(&#39;id&#39;,&#39;tag_name&#39;)",id:"lamptypeget_attachmentidtag_name",level:3},{value:"LAMP.Type.set_attachment(&#39;parent&#39;,&#39;target&#39;,&#39;tag_name&#39;,&#39;body&#39;)",id:"lamptypeset_attachmentparenttargettag_namebody",level:3},{value:"Authority",id:"authority",level:2},{value:"Case Example 1: Conflicting Tags",id:"case-example-1-conflicting-tags",level:3},{value:"Case Example 2: Removing a conflict",id:"case-example-2-removing-a-conflict",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"tags--attachments",children:"Tags & Attachments"})}),"\n",(0,s.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"To offer a way to store persistent, easily accessible data, the LAMP platform has implemented a feature known as attachments (sometimes also called tags). You can use tags to store any json-formatted data. Using this feature, you can attach data to any element of LAMP including:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Participants"}),"\n",(0,s.jsx)(t.li,{children:"Studies"}),"\n",(0,s.jsx)(t.li,{children:"Researchers"}),"\n",(0,s.jsx)(t.li,{children:"Activities"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.p,{children:"There are three main functions used to interact with LAMP attachments, that allow you to list, view, and set attachments. In order, they are:"}),"\n",(0,s.jsx)(t.h3,{id:"lamptypelist_attachmentsid",children:"LAMP.Type.list_attachments('id')"}),"\n",(0,s.jsx)(t.p,{children:"Given a LAMP id, this function returns an array of strings. Each string corresponds to a tag that has been set on the target. For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"LAMP.Type.list_attachments(\"ffmz65mn1gtav5fq3bhq\")['data']\n\n\n['graphs.data_quality.activity_counts',\n 'graphs.data_quality.passive_features',\n 'graphs.data_quality.quality_tags',\n 'lamp.attachment_test',\n 'lamp.dashboard.credential_roles',\n 'lamp.dashboard.researcher_tags',\n 'lamp.dashboard.user_type',\n 'lamp.test']\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"lamptypeget_attachmentidtag_name",children:"LAMP.Type.get_attachment('id','tag_name')"}),"\n",(0,s.jsxs)(t.p,{children:["Given a LAMP id and an existing tag, this function returns the currently set value of the tag. It returns a 404 error if the tag is not set. If the same tag has been set multiple times by different agents, (e.g. both a Researcher and a Study), the tag belonging to the highest authority (e.g. Researcher over Study) is returned. For more information on this, see ",(0,s.jsx)(t.a,{href:"#Authority",children:"Authority"})," below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"LAMP.Type.get_attachment(\"ffmz65mn1gtav5fq3bhq\",'lamp.test')['data']\n\n{'test_data_key': 21283,\n 'my_list_of_data': [\"Android\", \"iOS\"]}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"lamptypeset_attachmentparenttargettag_namebody",children:"LAMP.Type.set_attachment('parent','target','tag_name','body')"}),"\n",(0,s.jsxs)(t.p,{children:["This function is used to set the value of a tag. 'Target' here is the LAMP element the tag will be attached to - while 'parent' is the agent setting the tag (such as a Researcher, Study, or even a Participant). An element can also use the shorthand ",(0,s.jsx)(t.code,{children:"'me'"})," to set a tag on itself - e.g. a Researcher targeting themself. This function can also be used to delete a tag by setting ",(0,s.jsx)(t.code,{children:"body"})," as ",(0,s.jsx)(t.code,{children:"None"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','This is a test tag')['data']\n\nLAMP.Type.get_attachment('U0591253803','lamp.test')['data']\n'This is a test tag'\n\n\nLAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",\"me\",'lamp.test','This is also a test tag')['data']\n\nLAMP.Type.get_attachment(\"ffmz65mn1gtav5fq3bhq\",'lamp.test')['data']\n'This is also a test tag'\n"})}),"\n",(0,s.jsx)(t.h2,{id:"authority",children:"Authority"}),"\n",(0,s.jsxs)(t.p,{children:["LAMP does not restrict the setting of a tag even if it has already been set. If the tag was previously set by the same parent, it will be overwritten (or deleted if set to ",(0,s.jsx)(t.code,{children:"None"}),"). If the same tag has been set on the same target, but by multiple users, e.g. by both a Researcher and a Study, both will be ",(0,s.jsx)(t.em,{children:"present"})," in the database, but only the one set by the highest authority(see below) user will be returned from ",(0,s.jsx)(t.code,{children:"LAMP.Type.get_attachment"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In descending order, authorities are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Admin"}),"\n",(0,s.jsx)(t.li,{children:"Researcher"}),"\n",(0,s.jsx)(t.li,{children:"Study"}),"\n",(0,s.jsx)(t.li,{children:"Participant"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If a tag set by a higher authority user is later deleted, however, a tag set by a lower authority user will become available again."}),"\n",(0,s.jsx)(t.h3,{id:"case-example-1-conflicting-tags",children:"Case Example 1: Conflicting Tags"}),"\n",(0,s.jsxs)(t.p,{children:["In the following code block, both \"ffmz65mn1gtav5fq3bhq\" (a Researcher), and 'dynp0g0530xkahnzh0xc' (a Study) attempt to set the ",(0,s.jsx)(t.code,{children:"lamp.test"})," tag on the user 'U0591253803'. Both tags are successfully set and no error is thrown. However, since the Researcher has a higher authority than the Study, the tag set by the Researcher is returned (even though the tag set by the Study was set later)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','Set by Researcher')['data']\nLAMP.Type.set_attachment('dynp0g0530xkahnzh0xc','U0591253803','lamp.test','Set by Study')['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n\n'Set by Researcher'\n"})}),"\n",(0,s.jsx)(t.h3,{id:"case-example-2-removing-a-conflict",children:"Case Example 2: Removing a conflict"}),"\n",(0,s.jsxs)(t.p,{children:["In the following code block, both \"ffmz65mn1gtav5fq3bhq\" (a Researcher), and 'dynp0g0530xkahnzh0xc' (a Study) attempt to set the ",(0,s.jsx)(t.code,{children:"lamp.test"})," tag on the user 'U0591253803'. As before, since the Researcher has a higher authority than the Study, the tag set by the Researcher is returned (even though the tag set by the Study was set later)."]}),"\n",(0,s.jsx)(t.p,{children:"However, the Researcher tag is then removed, and the tag set by the Study is now the one returned by the API"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','Set by Researcher')['data']\nLAMP.Type.set_attachment('dynp0g0530xkahnzh0xc','U0591253803','lamp.test','Set by Study')['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n'Set by Researcher'\n\nLAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test',None)['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n'Set by Study'\n"})})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>h});var n=a(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);