"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[935],{96721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"deploy/testing","title":"Testing the LAMP Platform","description":"Once you\'ve deployed the LAMP-server and LAMP-database, you\'ll be able to use the mindLAMP app (either on your mobile device or in a desktop browser) to connect to your instance.","source":"@site/docs/07-deploy/08-testing.md","sourceDirName":"07-deploy","slug":"/deploy/testing","permalink":"/deploy/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/08-testing.md","tags":[],"version":"current","lastUpdatedBy":"Matt Flathers","lastUpdatedAt":1730911240000,"sidebarPosition":8,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Deploying the LAMP Platform","permalink":"/deploy/deploying"},"next":{"title":"Troubleshooting Deployment","permalink":"/deploy/troubleshooting"}}');var s=n(74848),o=n(28453);const i={},a="Testing the LAMP Platform",c={},l=[{value:"Password encrypt/decryption script",id:"password-encryptdecryption-script",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing-the-lamp-platform",children:"Testing the LAMP Platform"})}),"\n",(0,s.jsxs)(t.p,{children:["Once you've deployed the ",(0,s.jsx)(t.code,{children:"LAMP-server"})," and ",(0,s.jsx)(t.code,{children:"LAMP-database"}),", you'll be able to use the mindLAMP app (either on your mobile device or ",(0,s.jsx)(t.a,{href:"https://dashboard.lamp.digital/",children:"in a desktop browser"}),") to connect to your instance."]}),"\n",(0,s.jsxs)(t.p,{children:["All data is encrypted before communication between your browser or the app to and from your newly deployed server. No data will be communicated with any other server, including the default API server at ",(0,s.jsx)(t.a,{href:"http://api.lamp.digital",children:"api.lamp.digital"})," or other third party services."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Verify the status of the database."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -k https://admin:DB_PASSSWORD_HERE@db.example.com/\n"})}),"\n",(0,s.jsx)(t.p,{children:"or"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mongo 'mongodb://username:password@databaselocation:port/databasename'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.code,{children:"mongo"})," command cannot be found, you can also try ",(0,s.jsx)(t.code,{children:"mongosh"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Verify the status of the LAMP Platform API Server."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -k https://api.example.com/\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Check the Docker service logs for ",(0,s.jsx)(t.code,{children:"LAMP_server"})," to locate your generated server administrator password."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker service logs LAMP_server\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["The logs will only print the administrator password once. Restarting the service will not reveal the password again. If you did not save the password when you initialized the database, you can find the password by decrypting the secret key found in the ",(0,s.jsx)(t.code,{children:"credential"})," collection using your root key. See the decryption script below this page."]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Verify that the newly generated password (",(0,s.jsx)(t.code,{children:"GENERATED_PASSWORD_HERE"}),") works."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:GENERATED_PASSWORD_HERE'\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Create a ",(0,s.jsx)(t.code,{children:"Researcher"})," and a ",(0,s.jsx)(t.code,{children:"Participant"})," using the browser management user interface to verify the setup works as expected. To jumpstart your instance of the LAMP Platform and test surveys or other activities, follow the instructions in ",(0,s.jsx)(t.strong,{children:"Create Surveys"})," and import the file below into the ",(0,s.jsx)(t.code,{children:"Researcher"})," you just created."]}),"\n",(0,s.jsx)(t.p,{children:"[lamp_example_survey_battery_export.json](Testing the LAMP Platform/export.json)"}),"\n",(0,s.jsx)(t.p,{children:"If any of the above steps fails to complete successfully you will not be able to reach this step."}),"\n",(0,s.jsx)(t.h3,{id:"password-encryptdecryption-script",children:"Password encrypt/decryption script"}),"\n",(0,s.jsxs)(t.p,{children:["If you need to manually encrypt/decrypt your secret key, see the below script. You can execute this script via terminal with ",(0,s.jsx)(t.code,{children:"node <script_name> <encrypt:decrypt> <secret_key>"}),". Please replace ",(0,s.jsx)(t.code,{children:"<ROOT_KEY>"})," with the root key used in your lamp-server service."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"#!/usr/bin/env node\nconst PRIVATE_KEY = <ROOT_KEY> // DO NOT SHARE!\n\nconst crypto = require('crypto')\nconst mode = (process.argv[2] || '')\nconst input = (process.argv[3] || '')\nlet output = 'Usage: passcrypt.js <encrypt | decrypt> <string to encrypt or decrypt>'\n\ntry {\n\tif (mode === 'encrypt') {\n\t\tlet ivl = crypto.randomBytes(16)\n\t\tlet cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(PRIVATE_KEY, 'hex'), ivl)\n\t\toutput = Buffer.concat([\n\t\t\tivl,\n\t\t\tcipher.update(Buffer.from(input, 'utf16le')), \n\t\t\tcipher.final()\n\t\t]).toString('base64')\n\t} else if (mode === 'decrypt') {\n\t\tlet dat = Buffer.from(input, 'base64')\n\t\tlet cipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(PRIVATE_KEY, 'hex'), dat.slice(0, 16))\n\t\toutput = Buffer.concat([\n\t\t\tcipher.update(dat.slice(16)),\n\t\t\tcipher.final()\n\t\t]).toString('utf16le')\n\t}\n\tconsole.dir(output)\n} catch(e) { \n\tconsole.log('*** ERROR: Could not ' + mode + ' the string. ***')\n\tprocess.exit(1) \n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);