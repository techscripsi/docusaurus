(self.webpackChunkds=self.webpackChunkds||[]).push([[2076],{52138:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var o=n(96540),r=n(92303),s=n(34164),c=n(26058),a=n(17559),i=n(34291);const l={codeBlockContainer:"codeBlockContainer_Ckt0"};var u=n(74848);function d(e){let{as:t,...n}=e;const o=(0,c.A)(),r=(0,i.M$)(o);return(0,u.jsx)(t,{...n,style:r,className:(0,s.A)(n.className,l.codeBlockContainer,a.G.common.codeBlock)})}const m={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function f(e){let{children:t,className:n}=e;return(0,u.jsx)(d,{as:"pre",tabIndex:0,className:(0,s.A)(m.codeBlockStandalone,"thin-scrollbar",n),children:(0,u.jsx)("code",{className:m.codeBlockLines,children:t})})}var p=n(6342),h=n(96591),g=n(71765);const b={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function v(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:r,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=r({line:t,className:(0,s.A)(n,o&&b.codeLine)}),i=t.map(((e,t)=>(0,u.jsx)("span",{...c({token:e})},t)));return(0,u.jsxs)("span",{...a,children:[o?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:b.codeLineNumber}),(0,u.jsx)("span",{className:b.codeLineContent,children:i})]}):i,(0,u.jsx)("br",{})]})}var x=n(33436),y=n(21312);function k(e){return(0,u.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function B(e){return(0,u.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const C={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function j(e){let{code:t,className:n}=e;const[r,c]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{(0,x.default)(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,u.jsx)("button",{type:"button","aria-label":r?(0,y.translate)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,y.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,y.translate)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",n,C.copyButton,r&&C.copyButtonCopied),onClick:i,children:(0,u.jsxs)("span",{className:C.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(k,{className:C.copyButtonIcon}),(0,u.jsx)(B,{className:C.copyButtonSuccessIcon})]})})}function L(e){return(0,u.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,u.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const w={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function E(e){let{className:t,onClick:n,isEnabled:o}=e;const r=(0,y.translate)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",t,o&&w.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,u.jsx)(L,{className:w.wordWrapButtonIcon,"aria-hidden":"true"})})}function N(e){let{children:t,className:n="",metastring:o,title:r,showLineNumbers:a,language:l}=e;const{prism:{defaultLanguage:f,magicComments:b}}=(0,p.p)(),x=function(e){return e?.toLowerCase()}(l??(0,i.Op)(n)??f),y=(0,c.A)(),k=(0,h.f)(),B=(0,i.wt)(o)||r,{lineClassNames:C,code:L}=(0,i.Li)(t,{metastring:o,language:x,magicComments:b}),w=a??(0,i._u)(o);return(0,u.jsxs)(d,{as:"div",className:(0,s.A)(n,x&&!n.includes(`language-${x}`)&&`language-${x}`),children:[B&&(0,u.jsx)("div",{className:m.codeBlockTitle,children:B}),(0,u.jsxs)("div",{className:m.codeBlockContent,children:[(0,u.jsx)(g.Highlight,{theme:y,code:L,language:x??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:r,getTokenProps:c}=e;return(0,u.jsx)("pre",{tabIndex:0,ref:k.codeBlockRef,className:(0,s.A)(t,m.codeBlock,"thin-scrollbar"),style:n,children:(0,u.jsx)("code",{className:(0,s.A)(m.codeBlockLines,w&&m.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,u.jsx)(v,{line:e,getLineProps:r,getTokenProps:c,classNames:C[t],showLineNumbers:w},t)))})})}}),(0,u.jsxs)("div",{className:m.buttonGroup,children:[(k.isEnabled||k.isCodeScrollable)&&(0,u.jsx)(E,{className:m.codeButton,onClick:()=>k.toggle(),isEnabled:k.isEnabled}),(0,u.jsx)(j,{className:m.codeButton,code:L})]})]})]})}function A(e){let{children:t,...n}=e;const s=(0,r.default)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?N:f;return(0,u.jsx)(a,{...n,children:c},String(s))}},7131:(e,t,n)=>{"use strict";n.d(t,{e:()=>i,i:()=>a});var o=n(96540),r=n(89532),s=n(74848);const c=o.createContext(null);function a(e){let{children:t,content:n,isBlogPostPage:r=!1}=e;const a=function(e){let{content:t,isBlogPostPage:n}=e;return(0,o.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:r});return(0,s.jsx)(c.Provider,{value:a,children:t})}function i(){const e=(0,o.useContext)(c);if(null===e)throw new r.dV("BlogPostProvider");return e}},96591:(e,t,n)=>{"use strict";n.d(t,{f:()=>a});var o=n(96540),r=n(89532);const s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){const[n,c]=(0,o.useState)(),a=(0,o.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=s);const c=(0,r._q)(t),a=(0,r.Be)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,a),()=>t.disconnect()}),[e,c,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function a(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),s=(0,o.useRef)(null),a=(0,o.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),i=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");r(n)}),[s]);return c(s,i),(0,o.useEffect)((()=>{i()}),[e,i]),(0,o.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:a}}},26058:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(95293),r=n(6342);function s(){const{prism:e}=(0,r.p)(),{colorMode:t}=(0,o.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},20366:(e,t,n)=>{"use strict";n.d(t,{i:()=>i});var o=n(96540),r=n(6342);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>s(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function a(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){const t=(0,o.useRef)(void 0),n=a();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:s,maxHeadingLevel:a}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let r=t;r<=n;r+=1)o.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:s,maxHeadingLevel:a}),l=c(i,{anchorTopOffset:n.current}),u=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}},36266:(e,t,n)=>{"use strict";n.d(t,{i:()=>r});var o=n(44586);function r(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,o.default)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,o.default)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},88473:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var o=n(96540),r=n(74848);function s(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=t.filter((e=>e!==n)),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:s.length>0?(0,r.jsx)(r.Fragment,{children:s}):null}}(e.children),s=e.title??t;return{...e,...s&&{title:s},children:n}}},84255:(e,t,n)=>{"use strict";n.d(t,{G:()=>c});var o=n(96540),r=n(56347),s=n(99169);function c(e){const{pathname:t}=(0,r.zy)();return(0,o.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,s.ys)(e.permalink,t))}(e,t)))),[e,t])}},34291:(e,t,n)=>{"use strict";n.d(t,{Li:()=>p,M$:()=>h,Op:()=>f,_u:()=>m,wt:()=>d});var o=n(18426),r=n.n(o);const s=/title=(?<quote>["'])(?<title>.*?)\1/,c=/\{(?<range>[\d,-]+)\}/,a={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},i={...a,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},l=Object.keys(a);function u(e,t){const n=e.map((e=>{const{start:n,end:o}=i[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function d(e){return e?.match(s)?.groups.title??""}function m(e){return Boolean(e?.includes("showLineNumbers"))}function f(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function p(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:a}=t;if(a&&c.test(a)){const e=a.match(c).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return u(["tex"],t);case"lua":case"haskell":case"sql":return u(["lua"],t);case"wasm":return u(["wasm"],t);case"vb":case"vba":case"visual-basic":return u(["vb","rem"],t);case"vbnet":return u(["vbnet","rem"],t);case"batch":return u(["rem"],t);case"basic":return u(["rem","f90"],t);case"fsharp":return u(["js","ml"],t);case"ocaml":case"sml":return u(["ml"],t);case"fortran":return u(["f90"],t);case"cobol":return u(["cobol"],t);default:return u(l,t)}}(o,s),d=n.split("\n"),m=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),f=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),p=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<d.length;){const e=d[r].match(i);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));f[t]?m[f[t]].range+=`${r},`:p[t]?m[p[t]].start=r:h[t]&&(m[h[t]].range+=`${m[h[t]].start}-${r-1},`),d.splice(r,1)}n=d.join("\n");const g={};return Object.entries(m).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{g[e]??=[],g[e].push(t)}))})),{lineClassNames:g,code:n}}function h(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const s=t[o];s&&"string"==typeof r&&(n[s]=r)})),n}},6676:(e,t,n)=>{"use strict";n.d(t,{k:()=>u,J:()=>d});var o=n(86025),r=n(44586),s=n(36803);var c=n(7131);const a=e=>new Date(e).toISOString();function i(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function l(e,t,n){return e?{image:f({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function u(e){const{siteConfig:t}=(0,r.default)(),{withBaseUrl:n}=(0,o.useBaseUrlUtils)(),{metadata:{blogDescription:s,blogTitle:c,permalink:u}}=e,d=`${t.url}${u}`;return{"@context":"https://schema.org","@type":"Blog","@id":d,mainEntityOfPage:d,headline:c,description:s,blogPost:e.items.map((e=>function(e,t,n){const{assets:o,frontMatter:r,metadata:s}=e,{date:c,title:u,description:d,lastUpdatedAt:m}=s,f=o.image??r.image,p=r.keywords??[],h=`${t.url}${s.permalink}`,g=m?a(m):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:u,name:u,description:d,datePublished:c,...g?{dateModified:g}:{},...i(s.authors),...l(f,n,u),...p?{keywords:p}:{}}}(e.content,t,n)))}}function d(){const e=function(){const e=(0,s.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,c.e)(),{siteConfig:u}=(0,r.default)(),{withBaseUrl:d}=(0,o.useBaseUrlUtils)(),{date:m,title:f,description:p,frontMatter:h,lastUpdatedAt:g}=n,b=t.image??h.image,v=h.keywords??[],x=g?a(g):void 0,y=`${u.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":y,mainEntityOfPage:y,url:y,headline:f,name:f,description:p,datePublished:m,...x?{dateModified:x}:{},...i(n.authors),...l(b,d,f),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":`${u.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function f(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},37243:(e,t,n)=>{"use strict";n.d(t,{h:()=>a,v:()=>s});var o=n(96540);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):o.push(r)})),o}function s(e){return(0,o.useMemo)((()=>r(e)),[e])}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,o.useMemo)((()=>c({toc:r(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}},46445:(e,t,n)=>{"use strict";n.d(t,{AE:()=>i,Rc:()=>c,Uh:()=>a});n(96540);var o=n(21312),r=n(5260),s=n(74848);function c(){return(0,s.jsx)(o.default,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,s.jsx)(o.default,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function i(){return(0,s.jsx)(r.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}},53465:(e,t,n)=>{"use strict";n.d(t,{W:()=>u});var o=n(96540),r=n(44586),s=n(96763);const c=["zero","one","two","few","many","other"];function a(e){return c.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return s.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function u(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&s.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),c=n.pluralForms.indexOf(r);return o[Math.min(c,o.length-1)]}(n,t,e)}}},18426:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,s]=t;if(o&&s){o=parseInt(o),s=parseInt(s);const e=o<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>c,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}},33436:(e,t,n)=>{"use strict";function o(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection(),s=r.rangeCount>0&&r.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}return n.remove(),s&&(r.removeAllRanges(),r.addRange(s)),o&&o.focus(),c}n.r(t),n.d(t,{default:()=>o})},96206:(e,t,n)=>{"use strict";n.d(t,{s:()=>r});const o=document.createElement("i");function r(e){const t="&"+e+";";o.innerHTML=t;const n=o.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}},43589:(e,t,n)=>{"use strict";function o(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||!(65535&~n)||65534==(65535&n)||n>1114111?"\ufffd":String.fromCharCode(n)}n.d(t,{C:()=>o})},35380:(e,t,n)=>{"use strict";function o(e,t,n,o){const r=e.length;let s,c=0;if(t=t<0?-t>r?0:r+t:t>r?r:t,n=n>0?n:0,o.length<1e4)s=Array.from(o),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);c<o.length;)s=o.slice(c,c+1e4),s.unshift(t,0),e.splice(...s),c+=1e4,t+=1e4}function r(e){const t={};let n,r,c,a,i,l,u,d=-1;for(;++d<e.length;){for(;d in t;)d=t[d];if(n=e[d],d&&"chunkFlow"===n[1].type&&"listItemPrefix"===e[d-1][1].type&&(l=n[1]._tokenizer.events,c=0,c<l.length&&"lineEndingBlank"===l[c][1].type&&(c+=2),c<l.length&&"content"===l[c][1].type))for(;++c<l.length&&"content"!==l[c][1].type;)"chunkText"===l[c][1].type&&(l[c][1]._isInFirstContentOfListItem=!0,c++);if("enter"===n[0])n[1].contentType&&(Object.assign(t,s(e,d)),d=t[d],u=!0);else if(n[1]._container){for(c=d,r=void 0;c--&&(a=e[c],"lineEnding"===a[1].type||"lineEndingBlank"===a[1].type);)"enter"===a[0]&&(r&&(e[r][1].type="lineEndingBlank"),a[1].type="lineEnding",r=c);r&&(n[1].end=Object.assign({},e[r][1].start),i=e.slice(r,d),i.unshift(n),o(e,r,d-r+1,i))}}return!u}function s(e,t){const n=e[t][1],r=e[t][2];let s=t-1;const c=[],a=n._tokenizer||r.parser[n.contentType](n.start),i=a.events,l=[],u={};let d,m,f=-1,p=n,h=0,g=0;const b=[g];for(;p;){for(;e[++s][1]!==p;);c.push(s),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),m&&a.defineSkip(p.start),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),m=p,p=p.next}for(p=n;++f<i.length;)"exit"===i[f][0]&&"enter"===i[f-1][0]&&i[f][1].type===i[f-1][1].type&&i[f][1].start.line!==i[f][1].end.line&&(g=f+1,b.push(g),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(a.events=[],p?(p._tokenizer=void 0,p.previous=void 0):b.pop(),f=b.length;f--;){const t=i.slice(b[f],b[f+1]),n=c.pop();l.unshift([n,n+t.length-1]),o(e,n,2,t)}for(f=-1;++f<l.length;)u[h+l[f][0]]=h+l[f][1],h+=l[f][1]-l[f][0]-1;return u}n.d(t,{w:()=>r})}}]);