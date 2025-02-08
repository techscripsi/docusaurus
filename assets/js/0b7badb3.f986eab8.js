(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3392],{25804:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/omnicart-api","title":"OmniCart API","description":"API DESCRIPTION HERE.","source":"@site/docs/api/omnicart-api.info.mdx","sourceDirName":"api","slug":"/api/omnicart-api","permalink":"/docusaurus/docs/api/omnicart-api","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"omnicart-api","title":"OmniCart API","description":"API DESCRIPTION HERE.","sidebar_label":"Introduction","sidebar_position":0,"hide_title":true,"custom_edit_url":null},"sidebar":"api","next":{"title":"Initiate cart","permalink":"/docusaurus/docs/api/10-init"}}');var s=n(74848),a=n(28453),o=(n(64624),n(9303)),i=n(12990),c=n.n(i),l=n(79329);n(25383);const u={id:"omnicart-api",title:"OmniCart API",description:"API DESCRIPTION HERE.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},d=void 0,f={},p=[];function m(e){const t={code:"code",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0.2"}),"\n",(0,s.jsx)(o.default,{as:"h1",className:"openapi__heading",children:"OmniCart API"}),"\n",(0,s.jsx)(t.p,{children:"API DESCRIPTION HERE."}),"\n",(0,s.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,s.jsx)(o.default,{id:"authentication",as:"h2",className:"openapi-tabs__heading",children:"Authentication"}),(0,s.jsx)(c(),{className:"openapi-tabs__security-schemes",children:(0,s.jsxs)(l.default,{label:"API Key: ApiKey",value:"ApiKey",children:[(0,s.jsxs)(t.p,{children:["Key Auth: Requests contain a valid ",(0,s.jsx)(t.code,{children:"API_KEY"})," in the request headers."]}),(0,s.jsx)("div",{children:(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"apiKey"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Header parameter name:"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Api-Access-Token"})})]})]})})})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},61360:(e,t,n)=>{"use strict";n.d(t,{f:()=>i});var r=n(96540),s=n(26849);const a={attributes:!0,characterData:!0,childList:!0,subtree:!0};function o(e,t){const[n,o]=(0,r.useState)(),i=(0,r.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=a);const o=(0,s._q)(t),i=(0,s.Be)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,i),()=>t.disconnect()}),[e,o,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function i(){const[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(!1),a=(0,r.useRef)(null),i=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");s(n)}),[a]);return o(a,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:i}}},31177:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(8532),s=n(53115);function a(){const{prism:e}=(0,s.p)(),{colorMode:t}=(0,r.G)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},98569:(e,t,n)=>{"use strict";n.d(t,{i:()=>s});var r=n(40797);function s(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,r.default)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.default)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},60506:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});var r=n(96540),s=n(74848);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:a.length>0?(0,s.jsx)(s.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}},64566:(e,t,n)=>{"use strict";n.d(t,{Li:()=>m,M$:()=>h,Op:()=>p,_u:()=>f,wt:()=>d});var r=n(18426),s=n.n(r);const a=/title=(?<quote>["'])(?<title>.*?)\1/,o=/\{(?<range>[\d,-]+)\}/,i={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},c={...i,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},l=Object.keys(i);function u(e,t){const n=e.map((e=>{const{start:n,end:r}=c[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function d(e){return e?.match(a)?.groups.title??""}function f(e){return Boolean(e?.includes("showLineNumbers"))}function p(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function m(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:i}=t;if(i&&o.test(i)){const e=i.match(o).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=s()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return u(["js","jsBlock"],t);case"jsx":case"tsx":return u(["js","jsBlock","jsx"],t);case"html":return u(["js","jsBlock","html"],t);case"python":case"py":case"bash":return u(["bash"],t);case"markdown":case"md":return u(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return u(["tex"],t);case"lua":case"haskell":return u(["lua"],t);case"sql":return u(["lua","jsBlock"],t);case"wasm":return u(["wasm"],t);case"vb":case"vba":case"visual-basic":return u(["vb","rem"],t);case"vbnet":return u(["vbnet","rem"],t);case"batch":return u(["rem"],t);case"basic":return u(["rem","f90"],t);case"fsharp":return u(["js","ml"],t);case"ocaml":case"sml":return u(["ml"],t);case"fortran":return u(["f90"],t);case"cobol":return u(["cobol"],t);default:return u(l,t)}}(r,a),d=n.split("\n"),f=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),p=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let s=0;s<d.length;){const e=d[s].match(c);if(!e){s+=1;continue}const t=e.slice(1).find((e=>void 0!==e));p[t]?f[p[t]].range+=`${s},`:m[t]?f[m[t]].start=s:h[t]&&(f[h[t]].range+=`${f[h[t]].start}-${s-1},`),d.splice(s,1)}n=d.join("\n");const b={};return Object.entries(f).forEach((e=>{let[t,{range:n}]=e;s()(n).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:n}}function h(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,s]=e;const a=t[r];a&&"string"==typeof s&&(n[a]=s)})),n}},25383:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(96540)),a=r(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return s.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},s.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),s.default.createElement("ul",{className:"export-dropdown dropdown__menu"},s.default.createElement("li",null,s.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},64624:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:n,darkLogo:r}=e,c=()=>"dark"===t?r?.altText??n?.altText:n?.altText,l=(0,o.default)(n?.url),u=(0,o.default)(r?.url);if(n&&r)return s.default.createElement(i.default,{alt:c(),sources:{light:l,dark:u},className:"openapi__logo"});if(n||r)return s.default.createElement(i.default,{alt:c(),sources:{light:l??u,dark:l??u},className:"openapi__logo"});return};const s=r(n(96540)),a=n(23323),o=r(n(29030)),i=r(n(24475))},4213:function(e,t,n){var r,s,a,o=n(96763);s=[],void 0===(a="function"==typeof(r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(o.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){l(r.response,t,n)},r.onerror=function(){o.error("could not download file")},r.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,c=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var o=i.URL||i.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?a(c):s(c.href)?r(e,t,n):a(c,c.target="_blank")):(c.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(c.href)}),4e4),setTimeout((function(){a(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,o),n);else if(s(e))r(e,n,o);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,t,n,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var a="application/octet-stream"===e.type,o=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&o||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=e:location=e,s=null},u.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,f=d.createObjectURL(e);s?s.location=f:location.href=f,s=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});i.saveAs=l.saveAs=l,e.exports=l})?r.apply(t,s):r)||(e.exports=a)},18426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,s,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);