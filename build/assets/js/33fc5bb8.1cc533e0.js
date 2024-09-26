"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[867],{47713:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var s=a(21312),n=a(39022),r=a(74848);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(s.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,r.jsx)(n.A,{permalink:l,title:(0,r.jsx)(s.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},82907:(e,t,a)=>{a.d(t,{A:()=>C});a(96540);var s=a(34164),n=a(44096),r=a(74848);function l(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var i=a(28774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,n.e7)(),{permalink:c,title:d}=a,u=l?"h1":"h2";return(0,r.jsx)(u,{className:(0,s.A)(o.title,t),children:l?d:(0,r.jsx)(i.default,{to:c,children:d})})}var d=a(21312),u=a(53465),g=a(36266);const m={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:l,readingTime:i}=a,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(m.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(h,{readingTime:i})]})]});var c}var f=a(56913);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(f.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(A,{})]})}var N=a(70440),w=a(72857);function _(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,n.e7)();return(0,r.jsx)("div",{id:l?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(w.A,{children:t})})}var T=a(17559),k=a(4336),P=a(62053);function y(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(i.default,{"aria-label":(0,d.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(y,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=a.length>0;if(!(g||u||i))return null;if(t){const e=!!(i||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",T.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(P.A,{tags:a})})}),e&&(0,r.jsx)(k.A,{className:(0,s.A)("margin-top--sm",T.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,r.jsx)(P.A,{tags:a})}),u&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":g}),children:(0,r.jsx)(R,{blogPostTitle:l,to:e.permalink})})]})}function C(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,s.A)(i,a),children:[(0,r.jsx)(v,{}),(0,r.jsx)(_,{children:t}),(0,r.jsx)(U,{})]})}},33892:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var s=a(44096),n=a(82907),r=a(74848);function l(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},30778:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(96540);var s=a(34164),n=a(45500),r=a(17559),l=a(96461),i=a(28774),o=a(44096),c=a(28027),d=a(47713),u=a(41463),g=a(33892),m=a(56913),h=a(74848);function p(e){let{author:t}=e;const a=(0,l.wI)(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.be,{title:a}),(0,h.jsx)(u.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,o.x)();return(0,h.jsx)(i.default,{href:e,children:(0,h.jsx)(l.np,{})})}function j(e){let{author:t,items:a,sidebar:s,listMetadata:n}=e;return(0,h.jsxs)(c.A,{sidebar:s,children:[(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(m.A,{as:"h1",author:t}),t.description&&(0,h.jsx)("p",{children:t.description}),(0,h.jsx)(x,{})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(g.A,{items:a}),(0,h.jsx)(d.A,{metadata:n})]})}function f(e){return(0,h.jsxs)(n.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsPostsPage),children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(j,{...e})]})}},39022:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var s=a(34164),n=a(28774),r=a(74848);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,r.jsxs)(n.default,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var s=a(34164),n=a(28774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=a(74848);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,l.jsxs)(n.default,{href:t,title:o,className:(0,s.A)(r.tag,i?r.tagWithCount:r.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}},62053:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(34164),n=a(21312),r=a(56133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=a(74848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r.A,{...e})},e.permalink)))})]})}},96461:(e,t,a)=>{a.d(t,{ZD:()=>i,np:()=>d,uz:()=>c,wI:()=>o});a(96540);var s=a(21312),n=a(53465),r=a(74848);function l(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,s.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=l();return(0,s.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=l();return(0,s.translate)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.translate)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,r.jsx)(s.default,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);