"use strict";(self.webpackChunkds=self.webpackChunkds||[]).push([[101],{78621:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=s(74848),n=s(28453),i=s(3514),c=s(84142);const o={id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},a=void 0,d={id:"petstore/pet",title:"Pets",description:"Pets",source:"@site/docs/petstore/pet.tag.mdx",sourceDirName:"petstore",slug:"/petstore/pet",permalink:"/docusaurus/docs/petstore/pet",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"API Reference",permalink:"/docusaurus/docs/payment-api"},next:{title:"Add a new pet to the store",permalink:"/docusaurus/docs/petstore/add-pet"}},l={},u=[];function p(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Everything about your Pets"}),"\n","\n",(0,r.jsx)(i.A,{items:(0,c.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3514:(e,t,s)=>{s.d(t,{A:()=>j});s(96540);var r=s(34164),n=s(84142),i=s(28774),c=s(53465),o=s(16654),a=s(21312),d=s(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(74848);function p(e){let{href:t,children:s}=e;return(0,u.jsx)(i.default,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:n,description:i}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(d.default,{as:"h2",className:(0,r.A)("text--truncate",l.cardTitle),title:n,children:[s," ",n]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const s=(0,n.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,a.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const s=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const s=(0,n.$S)();return(0,u.jsx)(j,{items:s.items,className:t})}function j(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(g,{...e});const i=(0,n.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",s),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}}}]);