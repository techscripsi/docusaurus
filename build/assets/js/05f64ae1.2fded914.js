"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[8845],{17661:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),s=r(86010),i=r(78259),c=r(83699),o=r(2735),a=r(97325);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(c.default,{href:t,className:(0,s.default)("card padding--lg",l)},r)}function m(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,s.default)("text--truncate",d),title:i},r," ",i),c&&n.createElement("p",{className:(0,s.default)("text--truncate",u),title:c},c))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,s.default)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},90668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),s=(r(67294),r(3905)),i=r(17661),c=r(78259);const o={id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},a=void 0,l={unversionedId:"petstore/pet",id:"petstore/pet",title:"Pets",description:"Pets",source:"@site/docs/petstore/pet.tag.mdx",sourceDirName:"petstore",slug:"/petstore/pet",permalink:"/docusaurus/docs/petstore/pet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"API Reference",permalink:"/docusaurus/docs/payment-api"},next:{title:"Add a new pet to the store",permalink:"/docusaurus/docs/petstore/add-pet"}},d={},u=[],p={toc:u};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Everything about your Pets"),(0,s.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);