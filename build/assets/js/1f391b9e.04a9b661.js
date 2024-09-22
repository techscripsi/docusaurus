"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[61],{6896:(e,n,t)=>{t.d(n,{A:()=>x});t(6540);var a=t(4164),i=t(1312),s=t(5260),l=t(4848);function r(){return(0,l.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(s.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,l.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,l.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=t(7559),f=t(7293);function h(e){let{className:n}=e;return(0,l.jsx)(f.A,{type:"caution",title:(0,l.jsx)(d,{}),className:(0,a.A)(n,m.G.common.draftBanner),children:(0,l.jsx)(u,{})})}function g(e){let{className:n}=e;return(0,l.jsx)(f.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,a.A)(n,m.G.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function v(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(g,{...e})]})}function x(e){let{metadata:n}=e;const{unlisted:t,frontMatter:a}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||a.unlisted)&&(0,l.jsx)(v,{}),a.draft&&(0,l.jsx)(h,{})]})}},7973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(6540);var a=t(4164),i=t(1213),s=t(7559),l=t(781),r=t(7910),o=t(7763),c=t(6896),d=t(4336);const u={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(4848);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:g,description:v,frontMatter:x,lastUpdatedBy:p,lastUpdatedAt:b}=t,{keywords:j,wrapperClassName:A,hide_table_of_contents:N}=x,L=f.image??x.image,C=!!(g||b||p);return(0,m.jsx)(i.e3,{className:(0,a.A)(A??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,m.jsxs)(l.A,{children:[(0,m.jsx)(i.be,{title:h,description:v,keywords:j,image:L}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,a.A)("row",u.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,a.A)("col",!N&&"col--8"),children:[(0,m.jsx)(c.A,{metadata:t}),(0,m.jsx)("article",{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(n,{})})}),C&&(0,m.jsx)(d.A,{className:(0,a.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:g,lastUpdatedAt:b,lastUpdatedBy:p})]}),!N&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(o.A,{toc:n.toc,minHeadingLevel:x.toc_min_heading_level,maxHeadingLevel:x.toc_max_heading_level})})]})})]})})}},5195:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(6540),i=t(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=o(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(8774),m=t(4848);function f(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,m.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(f);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...f}=e;const g=(0,i.p)(),v=c??g.tableOfContents.minHeadingLevel,x=u??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:v,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:x}}),[r,o,v,x])),(0,m.jsx)(h,{toc:p,className:t,linkClassName:r,...f})}},7763:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var a=t(4164),i=t(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848);const r="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(i.A,{...t,linkClassName:r,linkActiveClassName:o})})}},6205:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var a=t(4164),i=t(8774),s=t(4848);const l=e=>{let{size:n=null,outline:t=!1,variant:l="primary",block:r=!1,disabled:o=!1,className:c,style:d,link:u,label:m}=e;const f=n?{sm:"sm",small:"sm",lg:"lg",large:"lg",medium:null}[n]:"",h=f?`button--${f}`:"",g=t?"button--outline":"",v=l?`button--${l}`:"",x=r?"button--block":"",p=o?"disabled":"",b=o?null:u;return(0,s.jsx)(i.A,{to:b,children:(0,s.jsx)("button",{className:(0,a.A)("button",h,g,v,x,p,c),style:d,role:"button","aria-disabled":o,children:m})})}},8506:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(3384),i=t(6205);const s={...a.A,Button:i.A}}}]);