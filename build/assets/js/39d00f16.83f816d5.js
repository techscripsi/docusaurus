(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[4844],{18679:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(67294),o=r(86010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.default)(n,s),hidden:r},t)}},75034:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Collapsible:()=>i.z,ErrorBoundaryError:()=>C.aG,ErrorBoundaryTryAgainButton:()=>C.Cw,ErrorCauseBoundary:()=>C.QW,HtmlClassNameProvider:()=>d.FG,NavbarSecondaryMenuFiller:()=>f.Zo,PageMetadata:()=>d.d,ReactContextError:()=>p.i6,SkipToContentFallbackId:()=>N.u,SkipToContentLink:()=>N.l,ThemeClassNames:()=>u.k,composeProviders:()=>p.Qc,createStorageSlot:()=>o.WA,duplicates:()=>T.l,filterDocCardListItems:()=>s.MN,isMultiColumnFooterLinks:()=>x.a,isRegexpStringMatch:()=>_.F,listStorageKeys:()=>o._f,listTagsByLetters:()=>g.P,prefersReducedMotion:()=>c.n,processAdmonitionProps:()=>A,translateTagsPageTitle:()=>g.M,uniq:()=>T.j,useCollapsible:()=>i.u,useColorMode:()=>m.I,useContextualSearchFilters:()=>n._q,useCurrentSidebarCategory:()=>s.jA,useDocsPreferredVersion:()=>S.J,useEvent:()=>p.zX,useIsomorphicLayoutEffect:()=>p.LI,usePluralForm:()=>l.c,usePrevious:()=>p.D9,usePrismTheme:()=>E.p,useSearchLinkCreator:()=>w,useSearchQueryString:()=>k,useStorageSlot:()=>o.Nk,useThemeConfig:()=>a.L,useWindowSize:()=>h.i});var a=r(20107),o=r(92560),n=r(60246),s=r(78259),l=r(23777),i=r(54639),u=r(23702),c=r(58986),p=r(43768),d=r(79488),m=r(9200),f=r(53086),h=r(13488),g=r(45565),b=r(67294),v=r(39962),y=r(75238);function k(){return(0,y.Nc)("q")}function w(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,v.default)(),{algolia:{searchPagePath:r}}=t;return(0,b.useCallback)((t=>`${e}${r}?q=${encodeURIComponent(t)}`),[e,r])}var x=r(42605),_=r(61500),T=r(33609),E=r(4779),S=r(86409);function A(e){const{mdxAdmonitionTitle:t,rest:r}=function(e){const t=b.Children.toArray(e),r=t.find((e=>b.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=b.createElement(b.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:r?.props.children,rest:a}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:r}}var N=r(51515),C=r(12303)},82262:(e,t,r)=>{"use strict";r.d(t,{Y:()=>d});var a=r(67294),o=r(16550),n=r(75238),s=r(33609),l=r(92560);function i(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:o}}=e;return{value:t,label:r,attributes:a,default:o}}))}function u(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??i(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,n._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,n=u(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[d,m]=p({queryString:r,groupId:o}),[f,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,l.Nk)(r);return[o,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:o}),g=(()=>{const e=d??f;return c({value:e,tabValues:n})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),h(e)}),[m,h,n]),tabValues:n}}},45565:(e,t,r)=>{"use strict";r.d(t,{M:()=>o,P:()=>n});var a=r(97325);const o=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const r=function(e){return e[0].toUpperCase()}(e.label);t[r]??=[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[r]=e,[a]=t;return r.localeCompare(a)})).map((e=>{let[t,r]=e;return{letter:t,tags:r.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},23777:(e,t,r)=>{"use strict";r.d(t,{c:()=>c});var a=r(67294),o=r(39962),n=r(25108);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,o.default)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return n.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=u();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&n.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return a[Math.min(s,a.length-1)]}(r,t,e)}}},34779:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(67294)),n=a(r(93162));t.default=function(e){let{url:t,proxy:r}=e;return o.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},o.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),o.default.createElement("ul",{className:"export-dropdown dropdown__menu"},o.default.createElement("li",null,o.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),n.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},79518:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(67294)),n=r(75034),s=a(r(79524)),l=a(r(7909));t.default=function(e){const{colorMode:t}=(0,n.useColorMode)(),{logo:r,darkLogo:a}=e,i=()=>"dark"===t?a?.altText??r?.altText:r?.altText,u=(0,s.default)(r?.url),c=(0,s.default)(a?.url);return r&&a?o.default.createElement(l.default,{alt:i(),sources:{light:u,dark:c},className:"openapi__logo"}):r||a?o.default.createElement(l.default,{alt:i(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},65254:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var a=r(87462),o=r(67294),n=r(72957),s=r(82262),l=r(51048),i=r(86010),u=r(85564),c=r.n(u);function p(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,n.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==s&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()},f=(0,o.useRef)(null),[h,g]=(0,o.useState)(!1);(0,o.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.offsetWidth<t.target.scrollWidth?g(!0):g(!1)}));return e.observe(f.current),()=>{e.disconnect()}}),[]);return o.createElement("div",{className:"openapi-tabs__schema-tabs-container"},h&&o.createElement("button",{className:"openapi-tabs__arrow left",onClick:()=>{f.current.scrollLeft-=90}}),o.createElement("ul",{ref:f,role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("openapi-tabs__schema-list-container","tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:n}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},n,{className:(0,i.default)("tabs__item","openapi-tabs__schema-item",n?.className,{active:s===t})}),o.createElement("span",{className:"openapi-tabs__schema-label"},r??t))}))),h&&o.createElement("button",{className:"openapi-tabs__arrow right",onClick:()=>{f.current.scrollLeft+=90}}))}function d(e){let{lazy:t,children:r,selectedValue:a}=e;r=Array.isArray(r)?r:[r];const n=c()(r);if(t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,s.Y)(e);return o.createElement("div",{className:"openapi-tabs__schema-container"},o.createElement(p,(0,a.Z)({},e,t)),o.createElement(d,(0,a.Z)({},e,t)))}function f(e){const t=(0,l.default)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},27711:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var a=r(87462),o=(r(67294),r(3905)),n=r(79518),s=r.n(n),l=r(65254),i=r(18679),u=r(34779),c=r.n(u);const p={id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},d=void 0,m={unversionedId:"petstore/swagger-petstore-yaml",id:"petstore/swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",source:"@site/docs/petstore/swagger-petstore-yaml.info.mdx",sourceDirName:"petstore",slug:"/petstore/swagger-petstore-yaml",permalink:"/docusaurus/docs/petstore/swagger-petstore-yaml",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"swagger-petstore-yaml",title:"Swagger Petstore YAML",description:"This is a sample server Petstore server.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docusaurus/docs/tutorial-extras/translate-your-site"},next:{title:"Add a new pet to the store",permalink:"/docusaurus/docs/petstore/add-pet"}},f={},h=[{value:"Introduction",id:"introduction",level:2},{value:"OpenAPI Specification",id:"openapi-specification",level:2},{value:"Cross-Origin Resource Sharing",id:"cross-origin-resource-sharing",level:2},{value:"Authentication",id:"authentication",level:2}],g={toc:h};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 2.0.0"),(0,o.kt)(c(),{url:"https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",proxy:void 0,mdxType:"Export"}),(0,o.kt)("h1",{className:"openapi__heading"},"Swagger Petstore YAML"),(0,o.kt)(s(),{logo:{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},darkLogo:void 0,mdxType:"ApiLogo"}),(0,o.kt)("p",null,"This is a sample server Petstore server.\nYou can find out more about Swagger at\n",(0,o.kt)("a",{parentName:"p",href:"http://swagger.io"},"http://swagger.io")," or on ",(0,o.kt)("a",{parentName:"p",href:"http://swagger.io/irc/"},"irc.freenode.net, #swagger"),".\nFor this sample, you can use the api key ",(0,o.kt)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This API is documented in ",(0,o.kt)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,o.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,o.kt)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,o.kt)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,o.kt)("h2",{id:"openapi-specification"},"OpenAPI Specification"),(0,o.kt)("p",null,"This API is documented in ",(0,o.kt)("strong",{parentName:"p"},"OpenAPI format")," and is based on\n",(0,o.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/"},"Petstore sample")," provided by ",(0,o.kt)("a",{parentName:"p",href:"http://swagger.io"},"swagger.io")," team.\nIt was ",(0,o.kt)("strong",{parentName:"p"},"extended")," to illustrate features of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Rebilly/generator-openapi-repo"},"generator-openapi-repo"),"\ntool and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc"},"ReDoc")," documentation. In addition to standard\nOpenAPI syntax we use a few ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md"},"vendor extensions"),"."),(0,o.kt)("h2",{id:"cross-origin-resource-sharing"},"Cross-Origin Resource Sharing"),(0,o.kt)("p",null,"This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/cors/"},"W3C spec"),".\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Petstore offers two forms of authentication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API Key"),(0,o.kt)("li",{parentName:"ul"},"OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.")),(0,o.kt)("div",{style:{marginBottom:"2rem"}},(0,o.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,o.kt)(l.default,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,o.kt)(i.default,{label:"OAuth 2.0: petstore_auth",value:"petstore_auth",mdxType:"TabItem"},(0,o.kt)("p",null,"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access."),(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Security Scheme Type:"),(0,o.kt)("td",null,"oauth2")),(0,o.kt)("tr",null,(0,o.kt)("th",null,"OAuth Flow (implicit):"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Authorization URL: http://petstore.swagger.io/api/oauth/dialog"),(0,o.kt)("span",null,"Scopes:"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"write:pets: modify pets in your account"),(0,o.kt)("li",null,"read:pets: read your pets")))))))),(0,o.kt)(i.default,{label:"API Key: api_key",value:"api_key",mdxType:"TabItem"},(0,o.kt)("p",null,"For this sample, you can use the api key ",(0,o.kt)("inlineCode",{parentName:"p"},"special-key")," to test the authorization filters."),(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Security Scheme Type:"),(0,o.kt)("td",null,"apiKey")),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Header parameter name:"),(0,o.kt)("td",null,"api_key")))))))),(0,o.kt)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,o.kt)("h3",{style:{marginBottom:"0.25rem"}},"Contact"),(0,o.kt)("span",null,"API Support: ",(0,o.kt)("a",{href:"mailto:apiteam@swagger.io"},"apiteam@swagger.io")),(0,o.kt)("span",null,"URL: ",(0,o.kt)("a",{href:"https://github.com/Redocly/redoc"},"https://github.com/Redocly/redoc"))),(0,o.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,o.kt)("h3",{style:{marginBottom:"0.25rem"}},"Terms of Service"),(0,o.kt)("a",{href:"http://swagger.io/terms/"},"http://swagger.io/terms/")),(0,o.kt)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"}},(0,o.kt)("h3",{style:{marginBottom:"0.25rem"}},"License"),(0,o.kt)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache 2.0")))}b.isMDXComponent=!0},93162:function(e,t,r){var a,o,n,s=r(25108);o=[],void 0===(n="function"==typeof(a=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,r){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){u(a.response,t,r)},a.onerror=function(){s.error("could not download file")},a.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r.g&&r.g.global===r.g?r.g:void 0,i=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,r){var s=l.URL||l.webkitURL,i=document.createElement("a");t=t||e.name||"download",i.download=t,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?n(i):o(i.href)?a(e,t,r):n(i,i.target="_blank")):(i.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(i.href)}),4e4),setTimeout((function(){n(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,s){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),r);else if(o(e))a(e,r,s);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){n(l)}))}}:function(e,t,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,r);var n="application/octet-stream"===e.type,s=/constructor/i.test(l.HTMLElement)||l.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||n&&s||i)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},c.readAsDataURL(e)}else{var p=l.URL||l.webkitURL,d=p.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});l.saveAs=u.saveAs=u,e.exports=u})?a.apply(t,o):a)||(e.exports=n)},62705:(e,t,r)=>{var a=r(55639).Symbol;e.exports=a},62488:e=>{e.exports=function(e,t){for(var r=-1,a=t.length,o=e.length;++r<a;)e[o+r]=t[r];return e}},21078:(e,t,r)=>{var a=r(62488),o=r(37285);e.exports=function e(t,r,n,s,l){var i=-1,u=t.length;for(n||(n=o),l||(l=[]);++i<u;){var c=t[i];r>0&&n(c)?r>1?e(c,r-1,n,s,l):a(l,c):s||(l[l.length]=c)}return l}},44239:(e,t,r)=>{var a=r(62705),o=r(89607),n=r(2333),s=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?o(e):n(e)}},9454:(e,t,r)=>{var a=r(44239),o=r(37005);e.exports=function(e){return o(e)&&"[object Arguments]"==a(e)}},31957:(e,t,r)=>{var a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=a},89607:(e,t,r)=>{var a=r(62705),o=Object.prototype,n=o.hasOwnProperty,s=o.toString,l=a?a.toStringTag:void 0;e.exports=function(e){var t=n.call(e,l),r=e[l];try{e[l]=void 0;var a=!0}catch(i){}var o=s.call(e);return a&&(t?e[l]=r:delete e[l]),o}},37285:(e,t,r)=>{var a=r(62705),o=r(35694),n=r(1469),s=a?a.isConcatSpreadable:void 0;e.exports=function(e){return n(e)||o(e)||!!(s&&e&&e[s])}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:(e,t,r)=>{var a=r(31957),o="object"==typeof self&&self&&self.Object===Object&&self,n=a||o||Function("return this")();e.exports=n},85564:(e,t,r)=>{var a=r(21078);e.exports=function(e){return(null==e?0:e.length)?a(e,1):[]}},35694:(e,t,r)=>{var a=r(9454),o=r(37005),n=Object.prototype,s=n.hasOwnProperty,l=n.propertyIsEnumerable,i=a(function(){return arguments}())?a:function(e){return o(e)&&s.call(e,"callee")&&!l.call(e,"callee")};e.exports=i},1469:e=>{var t=Array.isArray;e.exports=t},37005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}}}]);