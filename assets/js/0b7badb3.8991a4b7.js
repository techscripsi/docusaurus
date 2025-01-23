(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3392],{77390:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(74848),a=n(28453),s=(n(43905),n(51107)),o=n(23397),i=n.n(o),c=n(19365);n(69016);const l={id:"omnicart-api",title:"OmniCart API",description:"API DESCRIPTION HERE.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},u=void 0,d={id:"api/omnicart-api",title:"OmniCart API",description:"API DESCRIPTION HERE.",source:"@site/docs/api/omnicart-api.info.mdx",sourceDirName:"api",slug:"/api/omnicart-api",permalink:"/docusaurus/docs/api/omnicart-api",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"omnicart-api",title:"OmniCart API",description:"API DESCRIPTION HERE.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"api",next:{title:"confirm payment",permalink:"/docusaurus/docs/api/confirm"}},f={},p=[];function m(e){const t={code:"code",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0.0"}),"\n",(0,r.jsx)(s.default,{as:"h1",className:"openapi__heading",children:"OmniCart API"}),"\n",(0,r.jsx)(t.p,{children:"API DESCRIPTION HERE."}),"\n",(0,r.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,r.jsx)(s.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,r.jsx)(i(),{className:"openapi-tabs__security-schemes",children:(0,r.jsxs)(c.default,{label:"API Key: ApiKey",value:"ApiKey",children:[(0,r.jsxs)(t.p,{children:["Key Auth: Requests contain a valid ",(0,r.jsx)(t.code,{children:"API_KEY"})," in the request headers."]}),(0,r.jsx)("div",{children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"apiKey"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Header parameter name:"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"API_KEY"})})]})]})})})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},96591:(e,t,n)=>{"use strict";n.d(t,{f:()=>i});var r=n(96540),a=n(89532);const s={attributes:!0,characterData:!0,childList:!0,subtree:!0};function o(e,t){const[n,o]=(0,r.useState)(),i=(0,r.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=s);const o=(0,a._q)(t),i=(0,a.Be)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,i),()=>t.disconnect()}),[e,o,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function i(){const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!1),s=(0,r.useRef)(null),i=(0,r.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");a(n)}),[s]);return o(s,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:i}}},26058:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(95293),a=n(6342);function s(){const{prism:e}=(0,a.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},36266:(e,t,n)=>{"use strict";n.d(t,{i:()=>a});var r=n(44586);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,r.default)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.default)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},88473:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var r=n(96540),a=n(74848);function s(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:s.length>0?(0,a.jsx)(a.Fragment,{children:s}):null}}(e.children),s=e.title??t;return{...e,...s&&{title:s},children:n}}},34291:(e,t,n)=>{"use strict";n.d(t,{Li:()=>m,M$:()=>h,Op:()=>p,_u:()=>f,wt:()=>d});var r=n(18426),a=n.n(r);const s=/title=(?<quote>["'])(?<title>.*?)\1/,o=/\{(?<range>[\d,-]+)\}/,i={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},c={...i,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},l=Object.keys(i);function u(e,t){const n=e.map((e=>{const{start:n,end:r}=c[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function d(e){return e?.match(s)?.groups.title??""}function f(e){return Boolean(e?.includes("showLineNumbers"))}function p(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function m(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:s,metastring:i}=t;if(i&&o.test(i)){const e=i.match(o).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,r=a()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return u(["tex"],t);case"lua":case"haskell":case"sql":return u(["lua"],t);case"wasm":return u(["wasm"],t);case"vb":case"vba":case"visual-basic":return u(["vb","rem"],t);case"vbnet":return u(["vbnet","rem"],t);case"batch":return u(["rem"],t);case"basic":return u(["rem","f90"],t);case"fsharp":return u(["js","ml"],t);case"ocaml":case"sml":return u(["ml"],t);case"fortran":return u(["f90"],t);case"cobol":return u(["cobol"],t);default:return u(l,t)}}(r,s),d=n.split("\n"),f=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),p=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let a=0;a<d.length;){const e=d[a].match(c);if(!e){a+=1;continue}const t=e.slice(1).find((e=>void 0!==e));p[t]?f[p[t]].range+=`${a},`:m[t]?f[m[t]].start=a:h[t]&&(f[h[t]].range+=`${f[h[t]].start}-${a-1},`),d.splice(a,1)}n=d.join("\n");const b={};return Object.entries(f).forEach((e=>{let[t,{range:n}]=e;a()(n).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:n}}function h(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,a]=e;const s=t[r];s&&"string"==typeof a&&(n[s]=a)})),n}},69016:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(96540)),s=r(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return a.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},a.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),a.default.createElement("ul",{className:"export-dropdown dropdown__menu"},a.default.createElement("li",null,a.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),s.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(96540)),s=n(42214),o=r(n(86025)),i=r(n(15626));t.default=function(e){const{colorMode:t}=(0,s.useColorMode)(),{logo:n,darkLogo:r}=e,c=()=>"dark"===t?r?.altText??n?.altText:n?.altText,l=(0,o.default)(n?.url),u=(0,o.default)(r?.url);return n&&r?a.default.createElement(i.default,{alt:c(),sources:{light:l,dark:u},className:"openapi__logo"}):n||r?a.default.createElement(i.default,{alt:c(),sources:{light:l??u,dark:l??u},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var r,a,s,o=n(96763);a=[],void 0===(s="function"==typeof(r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(o.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){l(r.response,t,n)},r.onerror=function(){o.error("could not download file")},r.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,c=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var o=i.URL||i.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?s(c):a(c.href)?r(e,t,n):s(c,c.target="_blank")):(c.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,o),n);else if(a(e))r(e,n,o);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){s(i)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var s="application/octet-stream"===e.type,o=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&o||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,f=d.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});i.saveAs=l.saveAs=l,e.exports=l})?r.apply(t,a):r)||(e.exports=s)},18426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,s]=t;if(r&&s){r=parseInt(r),s=parseInt(s);const e=r<s?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(s+=e);for(let t=r;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);