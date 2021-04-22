(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(362)),o={},i={unversionedId:"costs",id:"costs",isDocsHomePage:!1,title:"Costs of Deploying the LAMP Platform",description:'The components of the LAMP Platform rely on IT infrastructure that can be self-hosted by your organization (sometimes called "on-prem") or hosted by a cloud provider such as Amazon or Google.',source:"@site/docs/costs.md",sourceDirName:".",slug:"/costs",permalink:"/costs",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/costs.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1619127166,formattedLastUpdatedAt:"4/22/2021",frontMatter:{},sidebar:"Main",previous:{title:"Deployment Recommendations",permalink:"/deployment_recs"},next:{title:"Provisioning the LAMP Platform",permalink:"/provisioning_lamp"}},c=[{value:"Factors that Influence Provisioning of Compute and Storage Resources.",id:"factors-that-influence-provisioning-of-compute-and-storage-resources",children:[]},{value:"Example Use-Cases and Their Associated Cloud Computing Costs.",id:"example-use-cases-and-their-associated-cloud-computing-costs",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,'The components of the LAMP Platform rely on IT infrastructure that can be self-hosted by your organization (sometimes called "on-prem") or hosted by a cloud provider such as Amazon or Google. '),Object(l.b)("p",null,"If you'd like to deploy your organization's instance of the LAMP Platform on a cloud provider, please consult with your legal and IT departments first, and ",Object(l.b)("strong",{parentName:"p"},"always ensure that you have signed a Business Associate Agreement")," (BAA) with the cloud provider to ",Object(l.b)("strong",{parentName:"p"},"comply with HIPAA"),"."),Object(l.b)("h2",{id:"factors-that-influence-provisioning-of-compute-and-storage-resources"},"Factors that Influence Provisioning of Compute and Storage Resources."),Object(l.b)("p",null,"There are a few factors that need to be accounted when determining how to deploy the components explained above, as well as how high your monthly costs may be."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Computing:")," The components of the LAMP Platform are highly efficient and won't need much computing power; however, at minimum they require ",Object(l.b)("strong",{parentName:"p"},"a single dual-core node with at least 2 gigabytes of memory."))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Storage:")," The data collection rate for the LAMP Platform varies significantly depending on usage needs, spanning from a minimum of ",Object(l.b)("strong",{parentName:"p"},"250 gigabytes of low-throughput (HDD) storage")," to a recommended ",Object(l.b)("strong",{parentName:"p"},"4 terabytes of high-throughput (SSD) storage.")),Object(l.b)("p",{parentName:"li"},"If you are collecting digital phenotyping data, using the integrated development environments, or scheduling intervention delivery/data analysis scripts, the minimum requirements ",Object(l.b)("strong",{parentName:"p"},"WILL NOT")," be sufficient.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Network:")," The network bandwidth of the LAMP Platform varies significantly depending on your organization's size and study/clinic requirements; at minimum you must have single virtual private endpoint (i.e. firewall) with a bandwidth of ",Object(l.b)("strong",{parentName:"p"},"at least 1 Gbps"),", to a recommended ",Object(l.b)("strong",{parentName:"p"},"10 Gbps")," to adequately handle sustained multi-user loads."))),Object(l.b)("p",null,"In all cases, the most costly and intensive part of deploying and maintaining the LAMP Platform will be storing the data."),Object(l.b)("h2",{id:"example-use-cases-and-their-associated-cloud-computing-costs"},"Example Use-Cases and Their Associated Cloud Computing Costs."),Object(l.b)("p",null,"When hosting the LAMP Platform with a cloud provider, your monthly costs may vary significantly based on the requirements explained previously. ",Object(l.b)("a",{parentName:"p",href:"https://calculator.aws/#/estimate?id=f27215a7bb211d98cdfc0b2250888241299c41a9"},"Here are two example configurations with the Amazon Web Services (AWS) cloud provider:")," "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},'"I run a digital clinic with about ~15 patients and don\'t intend to use advanced features such as digital phenotyping (sensor data) collection or Automations."'),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Computing:")," 1 node, 2 vCPU, 2 GB RAM"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Storage:")," 250 GB, no snapshots"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Network:")," Up to 10 Gbps"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Total Cost: ~$35.00/mo")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},'"I run multiple research studies with 200+ patients and intend to collect digital phenotyping data at a high frequency, develop and use machine learning algorithms through the Automations framework, and more advanced features."'),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Computing:")," 2 nodes, 16 vCPU, 32 GB RAM"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Storage:")," 8.0 TB, automated monthly snapshots"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Network:")," 25 Gbps"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Total Cost: ~$1,500.00/mo"))))),Object(l.b)("p",null,"Please note that it is currently not yet possible to configure specific sensors to operate at specific frequencies. ",Object(l.b)("strong",{parentName:"p"},"This feature is coming soon but not available today.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Specification"),Object(l.b)("th",{parentName:"tr",align:null},"vCPU"),Object(l.b)("th",{parentName:"tr",align:null},"RAM (GB)"),Object(l.b)("th",{parentName:"tr",align:null},"SSD (TB)"),Object(l.b)("th",{parentName:"tr",align:null},"EBS"),Object(l.b)("th",{parentName:"tr",align:null},"EC2"),Object(l.b)("th",{parentName:"tr",align:null},"S3"),Object(l.b)("th",{parentName:"tr",align:null},"Data Transfer"),Object(l.b)("th",{parentName:"tr",align:null},"Total Monthly"),Object(l.b)("th",{parentName:"tr",align:null},"Total Yearly"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},'"10 participants, active only"'),Object(l.b)("td",{parentName:"tr",align:null},"2 (t3.small)"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"0.5"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"13.72"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"0.48"),Object(l.b)("td",{parentName:"tr",align:null},"64.2"),Object(l.b)("td",{parentName:"tr",align:null},"770.4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},'"100 participants, active only"'),Object(l.b)("td",{parentName:"tr",align:null},"2 (t3.small)"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"0.5"),Object(l.b)("td",{parentName:"tr",align:null},"50"),Object(l.b)("td",{parentName:"tr",align:null},"13.72"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"2.06"),Object(l.b)("td",{parentName:"tr",align:null},"65.78"),Object(l.b)("td",{parentName:"tr",align:null},"789.36")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},'"1000 participants, active only"'),Object(l.b)("td",{parentName:"tr",align:null},"2 (t3.small)"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"102.4"),Object(l.b)("td",{parentName:"tr",align:null},"13.72"),Object(l.b)("td",{parentName:"tr",align:null},"0"),Object(l.b)("td",{parentName:"tr",align:null},"2.06"),Object(l.b)("td",{parentName:"tr",align:null},"118.18"),Object(l.b)("td",{parentName:"tr",align:null},"1418.16")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},'"10 participants, active + passive"'),Object(l.b)("td",{parentName:"tr",align:null},"4 (c5.large)"),Object(l.b)("td",{parentName:"tr",align:null},"8"),Object(l.b)("td",{parentName:"tr",align:null},"1"),Object(l.b)("td",{parentName:"tr",align:null},"102.4"),Object(l.b)("td",{parentName:"tr",align:null},"124.1"),Object(l.b)("td",{parentName:"tr",align:null},"23.56"),Object(l.b)("td",{parentName:"tr",align:null},"5.12"),Object(l.b)("td",{parentName:"tr",align:null},"255.18"),Object(l.b)("td",{parentName:"tr",align:null},"3062.16")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},'"100 participants, active + passive"'),Object(l.b)("td",{parentName:"tr",align:null},"4 (c5d.large)"),Object(l.b)("td",{parentName:"tr",align:null},"16"),Object(l.b)("td",{parentName:"tr",align:null},"2"),Object(l.b)("td",{parentName:"tr",align:null},"204.8"),Object(l.b)("td",{parentName:"tr",align:null},"186.4"),Object(l.b)("td",{parentName:"tr",align:null},"23.56"),Object(l.b)("td",{parentName:"tr",align:null},"10.24"),Object(l.b)("td",{parentName:"tr",align:null},"425"),Object(l.b)("td",{parentName:"tr",align:null},"5100.000000000001")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"1000 participants active + passive"),Object(l.b)("td",{parentName:"tr",align:null},"8 (c5d.2xlarge)"),Object(l.b)("td",{parentName:"tr",align:null},"32"),Object(l.b)("td",{parentName:"tr",align:null},"4"),Object(l.b)("td",{parentName:"tr",align:null},"409.6"),Object(l.b)("td",{parentName:"tr",align:null},"248.2"),Object(l.b)("td",{parentName:"tr",align:null},"23.56"),Object(l.b)("td",{parentName:"tr",align:null},"20.48"),Object(l.b)("td",{parentName:"tr",align:null},"701.84"),Object(l.b)("td",{parentName:"tr",align:null},"8422.079999999998")))),Object(l.b)("p",null,'When self-hosting the LAMP Platform (that is, "on-prem"), it\'s difficult to determine the monthly costs and maintenance needs. ',Object(l.b)("a",{parentName:"p",href:"mailto:team@digitalpsych.org"},"Please reach out to us for a consultation")," if you or your organization would like assistance with self-hosting."),Object(l.b)("p",null,'Though self-hosting may appear to be cheaper, the "hidden costs" should not be neglected in: ensuring redundant storage, no system down-time, regular storage backups, HIPAA-compatible encryption during flight and at rest, preventing network bottlenecks, regular system maintenance, and more. '),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"We do not recommend self-hosting")," unless your organization already has the infrastructure to correctly do so."))}s.isMDXComponent=!0},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||l;return n?r.a.createElement(d,i(i({ref:t},b),{},{components:n})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);