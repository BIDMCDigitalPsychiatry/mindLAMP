(window.webpackJsonp=window.webpackJsonp||[]).push([[147,230],{317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a(29),i=a(385),o=a(3),s=a(8),u=a(328),m=a(506),d=a(510),f=a(511),b=a(509),h=a(342),p=a(432),v=a(233),k=a.n(v),_=["item","onItemClick","collapsible","activePath"],E=["item","onItemClick","activePath","collapsible"];var g=function e(t,a){return"link"===t.type?(n=t.href,r=a,(c=function(e){return e.endsWith("/")?e:e+"/"})(n)===c(r)):"category"===t.type&&t.items.some((function(t){return e(t,a)}));var n,r,c};function C(e){var t,a,c,l=e.item,i=e.onItemClick,m=e.collapsible,d=e.activePath,f=Object(s.a)(e,_),b=l.items,h=l.label,p=g(l,d),v=(a=p,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),E=Object(n.useState)((function(){return!!m&&(!p&&l.collapsed)})),C=E[0],w=E[1];Object(n.useEffect)((function(){p&&!v&&C&&w(!1)}),[p,v,C]);var j=Object(n.useCallback)((function(e){e.preventDefault(),w((function(e){return!e}))}),[w]);return 0===b.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":C}),key:h},r.a.createElement("a",Object(o.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&p},t[k.a.menuLinkText]=!m,t)),onClick:m?j:void 0,href:m?"#!":void 0},f),h),r.a.createElement("ul",{className:"menu__list"},b.map((function(e){return r.a.createElement(O,{tabIndex:C?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:m,activePath:d})}))))}function w(e){var t=e.item,a=e.onItemClick,n=e.activePath,c=(e.collapsible,Object(s.a)(e,E)),l=t.href,i=t.label,m=t.deprecated,d=g(t,n);return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(h.a,Object(o.a)({className:Object(u.a)("menu__link",{"menu__link--active":d,"menu__link--deprecated":m}),style:{justifyContent:"start"},to:l},Object(p.a)(l)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},c),m&&r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:{alignSelf:"center",flexShrink:0,marginRight:"calc(var(--ifm-menu-link-padding-horizontal) / 1.5)"},fill:"currentColor",width:"18px",height:"18px"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"})),i))}function O(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(w,e)}}var j=function(e){var t,a,l=Object(n.useState)(!1),i=l[0],o=l[1],s=Object(c.default)(),h=s.siteConfig,p=(h=void 0===h?{}:h).themeConfig.navbar,v=((p=void 0===p?{}:p).title,p.hideOnScroll),_=void 0!==v&&v,E=(s.isClient,Object(m.a)().isAnnouncementBarClosed),g=Object(n.useState)(0),C=g[0],w=g[1];Object(b.a)((function(e){var t=e.scrollY;w(t)}));var j=e.docsSidebars,N=e.path,y=e.sidebar,S=e.sidebarCollapsible;Object(d.a)(i);var M=Object(f.a)();if(Object(n.useEffect)((function(){M===f.b.desktop&&o(!1)}),[M]),!y)return null;var x=j[y];if(!x)throw new Error('Cannot find the sidebar "'+y+'" in the sidebar config!');return r.a.createElement("div",{className:Object(u.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=_,t))},r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",k.a.menu,(a={"menu--show":i},a[k.a.menuWithAnnouncementBar]=!E&&0===C,a))},r.a.createElement("button",{"aria-label":i?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){o(!i)}},i?r.a.createElement("span",{className:Object(u.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},x.map((function(e,t){return r.a.createElement(O,{key:t,item:e,onItemClick:function(e){e.target.blur(),o(!1)},collapsible:S,activePath:N})})))))},N=a(430),y=a(24),S=a(234),M=a.n(S);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,o=t.routes.find((function(e){return Object(y.matchPath)(n.pathname,e)}))||{},s=a.permalinkToSidebar,u=a.docsSidebars,m=a.version,d=s[o.path],f=Object(c.default)(),b=f.siteConfig,h=(b=void 0===b?{}:b).themeConfig,p=void 0===h?{}:h,v=f.isClient,k=p.sidebarCollapsible,_=void 0===k||k;return 0===Object.keys(o).length?r.a.createElement(N.default,e):r.a.createElement(i.a,{version:m,key:v},r.a.createElement("div",{className:M.a.docPage},d&&r.a.createElement("div",{className:M.a.docSidebarContainer,role:"complementary"},r.a.createElement(j,{docsSidebars:u,path:o.path,sidebar:d,sidebarCollapsible:_})),r.a.createElement("main",{className:M.a.docMainContainer},Object(l.a)(t.routes))))}},386:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return s}));a(369);var n=["en"],r=!1,c=null,l="edf0b351",i=8,o=50,s={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},430:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(385),l=a(329);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(l.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(l.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(l.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);