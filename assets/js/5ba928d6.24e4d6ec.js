"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[3793],{603905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},263600:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=r(487462),n=r(263366),a=(r(667294),r(603905)),i=["components"],s={},l="Provisioning the LAMP Platform",c={unversionedId:"deploy/provisioning",id:"deploy/provisioning",isDocsHomePage:!1,title:"Provisioning the LAMP Platform",description:"BIDMC Digital Psychiatry's LAMP Platform",source:"@site/docs/07-deploy/04-provisioning.md",sourceDirName:"07-deploy",slug:"/deploy/provisioning",permalink:"/deploy/provisioning",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/04-provisioning.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646856660,formattedLastUpdatedAt:"3/9/2022",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Costs of Deploying the LAMP Platform",permalink:"/deploy/costs"},next:{title:"Preparing Resources on AWS",permalink:"/deploy/aws"}},d=[{value:"Segmenting Compute Resources",id:"segmenting-compute-resources",children:[],level:3}],u={toc:d};function p(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"provisioning-the-lamp-platform"},"Provisioning the LAMP Platform"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(786141).Z})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"BIDMC Digital Psychiatry's LAMP Platform")),(0,a.kt)("p",null,"The LAMP Platform is cloud-agnostic and can be hosted on Amazon Web Services, Microsoft Azure, Google Cloud, any other cloud provider, or self-hosted on-prem. "),(0,a.kt)("p",null,"The LAMP Platform requires computing and storage resources (i.e. AWS EC2 and EBS), along with external network access;  managed services from cloud providers tend to provide robust and maintenance-free bring-up for the LAMP Platform and are recommended over self-hosting on-prem. Furthermore, additional services such as Amazon CloudFront or CloudFlare allow less expensive and more effective caching and edge content delivery of the mindLAMP Dashboard and UI without the need for multi-region deployments. "),(0,a.kt)("p",null,"A single Docker Stack file (",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),") is used to automate single-node or multi-node deployments, and requires Docker Swarm (multi-node for cloud testing, integration, and production usage, or single-node for local testing or smaller deployments). Though possible to use Kubernetes or Terraform to manage larger scale deployments, the LAMP Platform has only been tested with Docker Swarm. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We provide additional examples for (1) local development, and (2) Amazon Web Services.\nIf you or your organization have further questions about choosing a cloud provider or deploying on-prem, ",(0,a.kt)("a",{parentName:"strong",href:"mailto:team@digitalpsych.org"},"please contact us."))),(0,a.kt)("h3",{id:"segmenting-compute-resources"},"Segmenting Compute Resources"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(478980).Z})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"BIDMC Digital Psychiatry's LAMP Platform")),(0,a.kt)("p",null,"When developing or testing the LAMP Platform, it is useful and effective to segment compute resources and develop natively in the cloud (or on-prem). Consider carefully how your organization expects to the use the LAMP Platform and segregate computing resources (nodes) to reduce cost and improve performance. "),(0,a.kt)("p",null,"The LAMP Platform source code repositories are hosted on GitHub and use the GitHub Actions and GitHub Packages features to quickly perform continuous testing, integration, and deployment. As code is pull requested from a feature branch into the master branch, it should pass a round of code review and pass any/all unit tests. Once the code is merged, the automated CI/CD will prepare and upload Docker images. "),(0,a.kt)("p",null,"We highly recommend the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"Portainer")," to remotely manage your Docker Swarm nodes and container health, as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"Traefik")," for managing service mesh routing and in-flight TLS encryption; additional Docker Stack files and instructions are provided for both. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Traefik")," router interfaces with Docker Swarm and your DNS provider to automatically manage internal and external access to services, according to the configuration in the Docker Stack files provided. To monitor node health and container resource metrics, we recommend ",(0,a.kt)("inlineCode",{parentName:"p"},"Netdata")," and have included it in the stack file below."),(0,a.kt)("p",null,"If you'd like to follow along but would like to test the deployment out first, or don't have provisioned resources yet, ",(0,a.kt)("strong",{parentName:"p"},"consider using ",(0,a.kt)("a",{parentName:"strong",href:"https://labs.play-with-docker.com/"},"Play With Docker"),", a free service")," from the Docker team where you can provision a temporary Swarm cluster."))}p.isMDXComponent=!0},478980:function(e,t,r){t.Z=r.p+"assets/images/AWS_Map-79cec1b4cd8758040aa0139dff4fdd88.png"},786141:function(e,t,r){t.Z=r.p+"assets/images/AWS_Mini_Map-62a6866f932dfcc514d1ab82ddf76dad.png"}}]);