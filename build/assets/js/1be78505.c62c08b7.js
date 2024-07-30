"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[9514,4248],{50819:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ke});var n=a(67294),l=a(86010),o=a(79488),r=a(23702),c=a(60246),i=a(78259),s=a(58801),d=a(84432),m=a(40162),u=a(97325),b=a(85560);const p="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function E(){const{shown:e,scrollToTop:t}=(0,b.a)({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",r.k.common.backToTopButton,p,e&&h),type:"button",onClick:t})}var f=a(58986),_=a(16550),g=a(13488),v=a(20107),k=a(96811),C=a(87462);function S(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function T(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",I),onClick:t},n.createElement(S,{className:N}))}var y=a(65830),x=a(72957),w=a(51689),L=a(43768),A=a(54639),M=a(69003),B=a(83699),F=a(51048);function H(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function Z(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.L)(),f=function(e){const t=(0,F.default)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),_=(0,i._F)(t,o),g=(0,M.Mg)(h,o),{collapsed:k,setCollapsed:S}=(0,A.u)({initialState:()=>!!b&&(!_&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=(0,w.f)(),T=function(e){void 0===e&&(e=!k),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,L.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:_,collapsed:k,updateCollapsed:T}),(0,n.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},n.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(B.default,(0,C.Z)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":_}),onClick:b?e=>{a?.(t),h?T(!1):(e.preventDefault(),T())}:()=>{a?.(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},d),u),h&&b&&n.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})),n.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},n.createElement(j,{items:m,tabIndex:k?-1:0,onItemClick:a,activePath:o,level:c+1})))}var P=a(2735),D=a(14082);const W="menuExternalLink_NmtK";function R(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,o),E=(0,P.Z)(m);return n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},n.createElement(B.default,(0,C.Z)({className:(0,l.default)("menu__link",!E&&W,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(D.Z,null)))}const V="menuHtmlItem_M9Kj";function z(e){let{item:t,level:a,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return n.createElement("li",{className:(0,l.default)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(a),i&&[V,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function U(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(Z,(0,C.Z)({item:t},a));case"html":return n.createElement(z,(0,C.Z)({item:t},a));default:return n.createElement(R,(0,C.Z)({item:t},a))}}function K(e){let{items:t,...a}=e;return n.createElement(w.D,null,t.map(((e,t)=>n.createElement(U,(0,C.Z)({key:t,item:e,index:t},a)))))}const j=(0,n.memo)(K),G="menu_SIkG",Y="menuWithAnnouncementBar_GW3s";function q(e){let{path:t,sidebar:a,className:o}=e;const c=function(){const{isActive:e}=(0,y.nT)(),[t,a]=(0,n.useState)(e);return(0,x.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.default)("menu thin-scrollbar",G,c&&Y,o)},n.createElement("ul",{className:(0,l.default)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(j,{items:a,activePath:t,level:1})))}const O="sidebar_njMd",X="sidebarWithHideableNavbar_wUlq",J="sidebarHidden_VK0M",Q="sidebarLogo_isFc";function $(e){let{path:t,sidebar:a,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.L)();return n.createElement("div",{className:(0,l.default)(O,c&&X,r&&J)},c&&n.createElement(k.Z,{tabIndex:-1,className:Q}),n.createElement(q,{path:t,sidebar:a}),i&&n.createElement(T,{onClick:o}))}const ee=n.memo($);var te=a(53086),ae=a(60735);const ne=e=>{let{sidebar:t,path:a}=e;const o=(0,ae.e)();return n.createElement("ul",{className:(0,l.default)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(j,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function le(e){return n.createElement(te.Zo,{component:ne,props:e})}const oe=n.memo(le);function re(e){const t=(0,g.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(ee,e),l&&n.createElement(oe,e))}const ce="expandButton_m80_",ie="expandButtonIcon_BlDH";function se(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ce,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(S,{className:ie}))}const de={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function me(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function ue(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,_.TH)(),[i,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{i&&s(!1),!i&&(0,f.n)()&&s(!0),o((e=>!e))}),[o,i]);return n.createElement("aside",{className:(0,l.default)(r.k.docs.docSidebarContainer,de.docSidebarContainer,a&&de.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(de.docSidebarContainer)&&a&&s(!0)}},n.createElement(me,null,n.createElement("div",{className:(0,l.default)(de.sidebarViewport,i&&de.sidebarViewportHidden)},n.createElement(re,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&n.createElement(se,{toggleSidebar:d}))))}const be={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function pe(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.V)();return n.createElement("main",{className:(0,l.default)(be.docMainContainer,(t||!o)&&be.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced)},a))}const he="docPage__5DB",Ee="docsWrapper_BCFX";function fe(e){let{children:t}=e;const a=(0,d.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:Ee},n.createElement(E,null),n.createElement("div",{className:he},a&&n.createElement(ue,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(pe,{hiddenSidebarContainer:l},t)))}var _e=a(74248),ge=a(33647);function ve(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(ge.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ke(e){const{versionMetadata:t}=e,a=(0,i.hI)(e);if(!a)return n.createElement(_e.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(ve,e),n.createElement(o.FG,{className:(0,l.default)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(fe,null,c)))))}},74248:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),l=a(97325),o=a(79488),r=a(40162);function c(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},51689:(e,t,a)=>{a.d(t,{D:()=>c,f:()=>i});var n=a(67294),l=a(43768);const o=Symbol("EmptyContext"),r=n.createContext(o);function c(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(r.Provider,{value:o},t)}function i(){const e=(0,n.useContext)(r);if(e===o)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},85560:(e,t,a)=>{a.d(t,{a:()=>r});var n=a(67294),l=a(72957),o=a(43266);function r(e){let{threshold:t}=e;const[a,r]=(0,n.useState)(!1),c=(0,n.useRef)(!1),{startScroll:i,cancelScroll:s}=(0,l.Ct)();return(0,l.RF)(((e,a)=>{let{scrollY:n}=e;const l=a?.scrollY;l&&(c.current?c.current=!1:n>=l?(s(),r(!1)):n<t?r(!1):n+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,o.S)((e=>{e.location.hash&&(c.current=!0,r(!1))})),{shown:a,scrollToTop:()=>i(0)}}}}]);