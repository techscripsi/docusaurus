"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8401],{66915:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});t(96540);var i=t(45500),r=t(60542),c=t(64157),o=t(69500),s=t(74848);function a(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,s.jsx)(r._,{content:e.content,children:(0,s.jsxs)(i.e3,{className:n,children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(o.default,{children:(0,s.jsx)(t,{})})]})})}},20366:(e,n,t)=>{t.d(n,{i:()=>a});var i=t(96540),r=t(6342);function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>c(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function s(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function a(e){const n=(0,i.useRef)(void 0),t=s();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:s}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let r=n;r<=t;r+=1)i.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:c,maxHeadingLevel:s}),l=o(a,{anchorTopOffset:t.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}},44084:(e,n,t)=>{t.d(n,{AE:()=>a,Rc:()=>o,TT:()=>d,Uh:()=>s,Yh:()=>l});t(96540);var i=t(21312),r=t(5260),c=t(74848);function o(){return(0,c.jsx)(i.default,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,c.jsx)(i.default,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function a(){return(0,c.jsx)(r.A,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function l(){return(0,c.jsx)(i.default,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,c.jsx)(i.default,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},37243:(e,n,t)=>{t.d(n,{h:()=>s,v:()=>c});var i=t(96540);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):i.push(r)})),i}function c(e){return(0,i.useMemo)((()=>r(e)),[e])}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:c}=e;return(0,i.useMemo)((()=>o({toc:r(n),minHeadingLevel:t,maxHeadingLevel:c})),[n,t,c])}}}]);