"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9048],{55738:(e,t,a)=>{a.r(t),a.d(t,{default:()=>be});var n=a(96540),o=a(34164),i=a(45500),s=a(17559),l=a(26972),r=a(60609),c=a(21312),d=a(7663);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=a(74848);function b(){const{shown:e,scrollToTop:t}=(0,d.H)({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,c.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var h=a(53109),p=a(56347),x=a(24581),f=a(6342),j=a(23465);function _(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v="collapseSidebarButton_PEFL",g="collapseSidebarButtonIcon_kv0_";function k(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",v),onClick:t,children:(0,m.jsx)(_,{className:g})})}var C=a(65041),A=a(23104),S=a(33082),N=a(89532),T=a(41422),I=a(99169),B=a(28774),y=a(92303);function w(e){let{collapsed:t,categoryLabel:a,onClick:n}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.translate)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,c.translate)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:n})}function L(e){let{item:t,onItemClick:a,activePath:i,level:r,index:c,...d}=e;const{items:u,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,f.p)(),_=function(e){const t=(0,y.default)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),v=(0,l.w8)(t,i),g=(0,I.ys)(x,i),{collapsed:k,setCollapsed:C}=(0,T.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:A,setExpandedItem:L}=(0,S.G)(),H=function(e){void 0===e&&(e=!k),L(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:o}=e;const i=(0,N.ZC)(t);(0,n.useEffect)((()=>{t&&!i&&a&&o(!1)}),[t,i,a,o])}({isActive:v,collapsed:k,updateCollapsed:H}),(0,n.useEffect)((()=>{h&&null!=A&&A!==c&&j&&C(!0)}),[h,A,c,C,j]),(0,m.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":k},p),children:[(0,m.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,m.jsx)(B.default,{className:(0,o.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":v}),onClick:h?e=>{a?.(t),x?H(!1):(e.preventDefault(),H())}:()=>{a?.(t)},"aria-current":g?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!k:void 0,href:h?_??"#":_,...d,children:b}),x&&h&&(0,m.jsx)(w,{collapsed:k,categoryLabel:b,onClick:e=>{e.preventDefault(),H()}})]}),(0,m.jsx)(T.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,m.jsx)(F,{items:u,tabIndex:k?-1:0,onItemClick:a,activePath:i,level:r+1})})]})}var H=a(16654),M=a(43186);const E="menuExternalLink_NmtK";function G(e){let{item:t,onItemClick:a,activePath:n,level:i,index:r,...c}=e;const{href:d,label:u,className:b,autoAddBaseUrl:h}=t,p=(0,l.w8)(t,n),x=(0,H.A)(d);return(0,m.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),children:(0,m.jsxs)(B.default,{className:(0,o.A)("menu__link",!x&&E,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:a?()=>a(t):void 0},...c,children:[u,!x&&(0,m.jsx)(M.A,{})]})},u)}const R="menuHtmlItem_M9Kj";function W(e){let{item:t,level:a,index:n}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,m.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(a),l&&[R,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},n)}function P(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,m.jsx)(L,{item:t,...a});case"html":return(0,m.jsx)(W,{item:t,...a});default:return(0,m.jsx)(G,{item:t,...a})}}function D(e){let{items:t,...a}=e;const n=(0,l.Y)(t,a.activePath);return(0,m.jsx)(S.A,{children:n.map(((e,t)=>(0,m.jsx)(P,{item:e,index:t,...a},t)))})}const F=(0,n.memo)(D),U="menu_SIkG",V="menuWithAnnouncementBar_GW3s";function Y(e){let{path:t,sidebar:a,className:i}=e;const l=function(){const{isActive:e}=(0,C.M)(),[t,a]=(0,n.useState)(e);return(0,A.Mq)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.translate)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",U,l&&V,i),children:(0,m.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(F,{items:a,activePath:t,level:1})})})}const K="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",q="sidebarHidden_VK0M",O="sidebarLogo_isFc";function J(e){let{path:t,sidebar:a,onCollapse:n,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,f.p)();return(0,m.jsxs)("div",{className:(0,o.A)(K,s&&z,i&&q),children:[s&&(0,m.jsx)(j.A,{tabIndex:-1,className:O}),(0,m.jsx)(Y,{path:t,sidebar:a}),l&&(0,m.jsx)(k,{onClick:n})]})}const Q=n.memo(J);var X=a(75600),Z=a(22069);const $=e=>{let{sidebar:t,path:a}=e;const n=(0,Z.M)();return(0,m.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(F,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function ee(e){return(0,m.jsx)(X.GX,{component:$,props:e})}const te=n.memo(ee);function ae(e){const t=(0,x.l)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[a&&(0,m.jsx)(Q,{...e}),n&&(0,m.jsx)(te,{...e})]})}const ne={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:ne.expandButton,title:(0,c.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(_,{className:ne.expandButtonIcon})})}const ie={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function se(e){let{children:t}=e;const a=(0,r.t)();return(0,m.jsx)(n.Fragment,{children:t},a?.name??"noSidebar")}function le(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,p.zy)(),[r,c]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{r&&c(!1),!r&&(0,h.O)()&&c(!0),i((e=>!e))}),[i,r]);return(0,m.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,ie.docSidebarContainer,a&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&a&&c(!0)},children:(0,m.jsx)(se,{children:(0,m.jsxs)("div",{className:(0,o.A)(ie.sidebarViewport,r&&ie.sidebarViewportHidden),children:[(0,m.jsx)(ae,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,m.jsx)(oe,{toggleSidebar:d})]})})})}const re={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ce(e){let{hiddenSidebarContainer:t,children:a}=e;const n=(0,r.t)();return(0,m.jsx)("main",{className:(0,o.A)(re.docMainContainer,(t||!n)&&re.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",re.docItemWrapper,t&&re.docItemWrapperEnhanced),children:a})})}const de={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ue(e){let{children:t}=e;const a=(0,r.t)(),[o,i]=(0,n.useState)(!1);return(0,m.jsxs)("div",{className:de.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:de.docRoot,children:[a&&(0,m.jsx)(le,{sidebar:a.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,m.jsx)(ce,{hiddenSidebarContainer:o,children:t})]})]})}var me=a(23363);function be(e){const t=(0,l.B5)(e);if(!t)return(0,m.jsx)(me.A,{});const{docElement:a,sidebarName:n,sidebarItems:c}=t;return(0,m.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,m.jsx)(r.V,{name:n,items:c,children:(0,m.jsx)(ue,{children:a})})})}},23363:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(34164),o=a(21312),i=a(51107),s=a(74848);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,n.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.default,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.default,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},7663:(e,t,a)=>{a.d(t,{H:()=>s});var n=a(96540),o=a(23104),i=a(75062);function s(e){let{threshold:t}=e;const[a,s]=(0,n.useState)(!1),l=(0,n.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,o.gk)();return(0,o.Mq)(((e,a)=>{let{scrollY:n}=e;const o=a?.scrollY;o&&(l.current?l.current=!1:n>=o?(c(),s(!1)):n<t?s(!1):n+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,i.$)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:a,scrollToTop:()=>r(0)}}}}]);