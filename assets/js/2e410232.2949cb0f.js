"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[9153],{603905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var r=o(667294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},510476:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=o(487462),n=o(263366),a=(o(667294),o(603905)),i=["components"],s={},l="Deployment Recommendations",c={unversionedId:"deploy/recs",id:"deploy/recs",isDocsHomePage:!1,title:"Deployment Recommendations",description:"We encourage all self-deploying users to consult the legal and IT departments, as well as sign a Business Associate Agreement (BAA) with the cloud provider to comply with HIPAA regulations.",source:"@site/docs/07-deploy/02-recs.md",sourceDirName:"07-deploy",slug:"/deploy/recs",permalink:"/deploy/recs",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/02-recs.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646856660,formattedLastUpdatedAt:"3/9/2022",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Prerequisites for Deploying the LAMP Platform",permalink:"/deploy/prereqs"},next:{title:"Costs of Deploying the LAMP Platform",permalink:"/deploy/costs"}},p=[{value:"Remote Access (WAF) Notes",id:"remote-access-waf-notes",children:[],level:3}],u={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment-recommendations"},"Deployment Recommendations"),(0,a.kt)("h1",{id:"disclosure"},"Disclosure"),(0,a.kt)("p",null,"We encourage all self-deploying users to consult the legal and IT departments, as well as sign a Business Associate Agreement (BAA) with the cloud provider to comply with HIPAA regulations."),(0,a.kt)("p",null,"LAMP is completely free, open source software; as a result you are free to follow any or all steps that are suggested. However, we can only assure a successful deployment of the LAMP Platform if each required step is followed. If these steps are not implemented correctly, we are unable to guarantee LAMP will deploy properly. We are also unable to offer the technical support from our team for other deployments."),(0,a.kt)("h1",{id:"technical-requirements"},"Technical Requirements"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"use of Docker is imperative to successful self-deployment"),". A single Docker Stack file is used to automate single-node or multi-node deployments, and requires Docker Swarm (multi-node for cloud testing, integration, and production usage, or single-node for local testing or smaller deployments). The LAMP Platform has only been tested with Docker Swarm, so therefore our team is only equipped to provide support for those using Docker or Docker compatible services."),(0,a.kt)("p",null,"We highly recommend the use of ",(0,a.kt)("a",{parentName:"p",href:"https://www.portainer.io/"},"Portainer")," as a Swarm Management Console to make it easier to troubleshoot failed deployments, rapidly test and integrate new components, and effectively monitor container logs and health. ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.portainer.io/"},"Read this documentation to learn more about Portainer")," and how to configure and use it. We also recommend Traefik for managing service mesh routing and in-flight TLS encryption; additional Docker Stack files and instructions are provided for both in the self-deploy documentation. "),(0,a.kt)("h3",{id:"remote-access-waf-notes"},"Remote Access (WAF) Notes"),(0,a.kt)("p",null,'The mobile apps and browsers must make an initial connection to the hosted VersionCheck API (part of the App Gateway) before downloading the user interface component. If your organization chooses to submit separate copies of the mobile apps to the Apple/Google app stores, you will also be responsible for deploying the App Gateway within your organization as well. This also means your organization must "pin" the versions of components as accessed from the VersionCheck API. If your organization is NOT deploying an internal App Gateway (i.e if using the existing mindLAMP apps on the App Store) then you will be using the App Gateway as hosted by the Division of Digital Psychiatry. (This must be disclosed in security/IT diagrams.)'))}d.isMDXComponent=!0}}]);