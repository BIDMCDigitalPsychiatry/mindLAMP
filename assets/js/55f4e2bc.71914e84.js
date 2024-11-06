"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[543],{2736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"data_science/cortex/developing_cortex","title":"Adding Cortex Features","description":"Cortex is an open source analysis package. If you would like to contribute your own features, you may open a pull request.","source":"@site/docs/09-data_science/06-cortex/08-developing_cortex.md","sourceDirName":"09-data_science/06-cortex","slug":"/data_science/cortex/developing_cortex","permalink":"/data_science/cortex/developing_cortex","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/08-developing_cortex.md","tags":[],"version":"current","lastUpdatedBy":"Matt Flathers","lastUpdatedAt":1730911240000,"sidebarPosition":8,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Miscellaneous","permalink":"/data_science/cortex/utils/miscellaneous"},"next":{"title":"Using Document Transformations","permalink":"/data_science/jsonata"}}');var r=n(74848),s=n(28453);const a={},i="Adding Cortex Features",c={},d=[{value:"How to add a new feature:",id:"how-to-add-a-new-feature",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"adding-cortex-features",children:"Adding Cortex Features"})}),"\n",(0,r.jsx)(t.p,{children:"Cortex is an open source analysis package. If you would like to contribute your own features, you may open a pull request."}),"\n",(0,r.jsx)(t.h3,{id:"how-to-add-a-new-feature",children:"How to add a new feature:"}),"\n",(0,r.jsxs)(t.ol,{start:"0",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Clone LAMP-cortex from source."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Make sure you are on the master branch (and it is up to date). Create a new branch."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Github commands"}),(0,r.jsx)(t.p,{children:"git checkout master\ngit pull\ngit checkout -b my_new_feature"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Write your code."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add your file to run_pylint.sh to make sure you are following the python style guidelines. Please include good comments and docstrings."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add unit tests for your code to the /tests folder. Add your file to run_tests.sh to show code coverage. Please note that if you are not a BIDMC user the existing tests will not work as you do not have access to our data. However, this code can be used as an example for testing your own code."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add any new dependencies to pyproject.toml (if applicable)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Push your code."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Github commands"}),(0,r.jsx)(t.p,{children:'git add .\ngit commit -m "i added a cool feature"\ngit push --set-upstream origin my_new_feature'})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"When you are ready, create a pull request (PR). Assign yourself, and assign someone from our team as a reviewer. At least one person must review and approve your code for it to be merged into master."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"When we review your code, we will run the unittests, test any new features, and check code for style. We may suggest changes or additions that we feel improve the code or integration with Cortex."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Along with your PR to cortex, you must add documentation for your code. This is very important to allow others to understand how to use your code."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Your feature should be added as a new markdown file to the appropriate folder here: ",(0,r.jsx)(t.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/tree/master/docs/09-data_science/06-cortex",children:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/tree/master/docs/09-data_science/06-cortex"}),". Please follow the example structure of other files in the documentation."]}),"\n",(0,r.jsxs)(t.li,{children:["Create a PR for your documentation. A Github action will run when new docs are edited to publish to ",(0,r.jsx)(t.a,{href:"https://docs.lamp.digital/",children:"https://docs.lamp.digital/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Once the PR is merged, make sure you switch back to master and pull your changes. You can also delete the local copy of your branch if you wish."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Github commands"}),(0,r.jsx)(t.p,{children:"git checkout master\ngit pull\ngit branch -d my_new_feature"})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);