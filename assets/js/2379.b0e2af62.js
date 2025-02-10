/*! For license information please see 2379.b0e2af62.js.LICENSE.txt */
(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2379],{5783:(e,a,s)=>{"use strict";s.d(a,{A:()=>h});s(96540);var t=s(34164),r=s(50539),n=s(204),i=s(56289);const l={iconEdit:"iconEdit_Z9Sw"};var o=s(74848);function d(e){let{className:a,...s}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,t.A)(l.iconEdit,a),"aria-hidden":"true",...s,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:a}=e;return(0,o.jsxs)(i.default,{to:a,className:n.G.common.editThisPage,children:[(0,o.jsx)(d,{}),(0,o.jsx)(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var f=s(98569);function u(e){let{lastUpdatedAt:a}=e;const s=new Date(a),t=(0,f.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(s);return(0,o.jsx)(r.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,o.jsx)("b",{children:(0,o.jsx)("time",{dateTime:s.toISOString(),itemProp:"dateModified",children:t})})},children:" on {date}"})}function m(e){let{lastUpdatedBy:a}=e;return(0,o.jsx)(r.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,o.jsx)("b",{children:a})},children:" by {user}"})}function p(e){let{lastUpdatedAt:a,lastUpdatedBy:s}=e;return(0,o.jsxs)("span",{className:n.G.common.lastUpdated,children:[(0,o.jsx)(r.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:a?(0,o.jsx)(u,{lastUpdatedAt:a}):"",byUser:s?(0,o.jsx)(m,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const x={lastUpdated:"lastUpdated_JAkA"};function h(e){let{className:a,editUrl:s,lastUpdatedAt:r,lastUpdatedBy:n}=e;return(0,o.jsxs)("div",{className:(0,t.A)("row",a),children:[(0,o.jsx)("div",{className:"col",children:s&&(0,o.jsx)(c,{editUrl:s})}),(0,o.jsx)("div",{className:(0,t.A)("col",x.lastUpdated),children:(r||n)&&(0,o.jsx)(p,{lastUpdatedAt:r,lastUpdatedBy:n})})]})}},44715:(e,a,s)=>{"use strict";s.d(a,{A:()=>y});var t=s(96540),r=s(27143),n=s(43413),i=s(74848);function l(e){return(0,i.jsx)("code",{...e})}var o=s(56289);var d=s(56701);function c(e){const a=t.Children.toArray(e.children),s=a.find((e=>t.isValidElement(e)&&"summary"===e.type)),r=(0,i.jsx)(i.Fragment,{children:a.filter((e=>e!==s))});return(0,i.jsx)(d.default,{...e,summary:s,children:r})}var f=s(9303);function u(e){return(0,i.jsx)(f.default,{...e})}var m=s(34164);const p="containsTaskList_mC6p";function x(e){if(void 0!==e)return(0,m.A)(e,e?.includes("contains-task-list")&&p)}var h=s(25246);const b="img_ev3q";var N=s(79709),v=s(30205);const y={Head:r.A,details:c,Details:c,code:function(e){return function(e){return void 0!==e.children&&t.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,i.jsx)(l,{...e}):(0,i.jsx)(n.default,{...e})},a:function(e){return(0,i.jsx)(o.default,{...e})},pre:function(e){return(0,i.jsx)(i.Fragment,{children:e.children})},ul:function(e){return(0,i.jsx)("ul",{...e,className:x(e.className)})},li:function(e){return(0,h.A)().collectAnchor(e.id),(0,i.jsx)("li",{...e})},img:function(e){return(0,i.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(a=e.className,(0,m.A)(a,b))});var a},h1:e=>(0,i.jsx)(u,{as:"h1",...e}),h2:e=>(0,i.jsx)(u,{as:"h2",...e}),h3:e=>(0,i.jsx)(u,{as:"h3",...e}),h4:e=>(0,i.jsx)(u,{as:"h4",...e}),h5:e=>(0,i.jsx)(u,{as:"h5",...e}),h6:e=>(0,i.jsx)(u,{as:"h6",...e}),admonition:N.A,mermaid:v.A}},57985:(e,a,s)=>{"use strict";s.d(a,{A:()=>i});s(96540);var t=s(28453),r=s(17762),n=s(74848);function i(e){let{children:a}=e;return(0,n.jsx)(t.x,{components:r.A,children:a})}},11865:(e,a,s)=>{"use strict";s.d(a,{A:()=>i});s(96540);var t=s(34164),r=s(56289),n=s(74848);function i(e){const{permalink:a,title:s,subLabel:i,isNext:l}=e;return(0,n.jsxs)(r.default,{className:(0,t.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:a,children:[i&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,n.jsx)("div",{className:"pagination-nav__label",children:s})]})}},46547:(e,a,s)=>{"use strict";s.d(a,{A:()=>c});s(96540);var t=s(34164),r=s(50539),n=s(56289);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(74848);function o(e){let{permalink:a,label:s,count:r,description:o}=e;return(0,l.jsxs)(n.default,{href:a,title:o,className:(0,t.A)(i.tag,r?i.tagWithCount:i.tagRegular),children:[s,r&&(0,l.jsx)("span",{children:r})]})}const d={tags:"tags_jXut",tag:"tag_QGVx"};function c(e){let{tags:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(r.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,t.A)(d.tags,"padding--none","margin-left--sm"),children:a.map((e=>(0,l.jsx)("li",{className:d.tag,children:(0,l.jsx)(o,{...e})},e.permalink)))})]})}},80110:(e,a,s)=>{"use strict";s.d(a,{A:()=>u});var t=s(46942),r=s.n(t),n=s(96540),i=s(74848);const l=["as","disabled"];function o({tagName:e,disabled:a,href:s,target:t,rel:r,role:n,onClick:i,tabIndex:l=0,type:o}){e||(e=null!=s||null!=t||null!=r?"a":"button");const d={tagName:e};if("button"===e)return[{type:o||"button",disabled:a},d];const c=t=>{(a||"a"===e&&function(e){return!e||"#"===e.trim()}(s))&&t.preventDefault(),a?t.stopPropagation():null==i||i(t)};return"a"===e&&(s||(s="#"),a&&(s=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:a?void 0:l,href:s,target:"a"===e?t:void 0,"aria-disabled":a||void 0,rel:"a"===e?r:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},d]}const d=n.forwardRef(((e,a)=>{let{as:s,disabled:t}=e,r=function(e,a){if(null==e)return{};var s={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)>=0)continue;s[t]=e[t]}return s}(e,l);const[n,{tagName:d}]=o(Object.assign({tagName:s,disabled:t},r));return(0,i.jsx)(d,Object.assign({},r,n,{ref:a}))}));d.displayName="Button";var c=s(36519);const f=n.forwardRef((({as:e,bsPrefix:a,variant:s="primary",size:t,active:n=!1,disabled:l=!1,className:d,...f},u)=>{const m=(0,c.oU)(a,"btn"),[p,{tagName:x}]=o({tagName:e,disabled:l,...f}),h=x;return(0,i.jsx)(h,{...p,...f,ref:u,disabled:l,className:r()(d,m,n&&"active",s&&`${m}-${s}`,t&&`${m}-${t}`,f.href&&l&&"disabled")})}));f.displayName="Button";const u=f},70616:(e,a,s)=>{"use strict";s.d(a,{A:()=>d});var t=s(46942),r=s.n(t),n=s(96540),i=s(36519),l=s(74848);const o=n.forwardRef((({bsPrefix:e,size:a,vertical:s=!1,className:t,role:n="group",as:o="div",...d},c)=>{const f=(0,i.oU)(e,"btn-group");let u=f;return s&&(u=`${f}-vertical`),(0,l.jsx)(o,{...d,ref:c,role:n,className:r()(t,u,a&&`${f}-${a}`)})}));o.displayName="ButtonGroup";const d=o},85064:(e,a,s)=>{"use strict";s.d(a,{A:()=>d});var t=s(46942),r=s.n(t),n=s(96540),i=s(36519),l=s(74848);const o=n.forwardRef((({bsPrefix:e,className:a,role:s="toolbar",...t},n)=>{const o=(0,i.oU)(e,"btn-toolbar");return(0,l.jsx)("div",{...t,ref:n,className:r()(a,o),role:s})}));o.displayName="ButtonToolbar";const d=o},5635:(e,a,s)=>{"use strict";s.d(a,{A:()=>I});var t=s(46942),r=s.n(t),n=s(96540),i=s(36519),l=s(74848);const o=n.forwardRef((({className:e,bsPrefix:a,as:s="div",...t},n)=>(a=(0,i.oU)(a,"card-body"),(0,l.jsx)(s,{ref:n,className:r()(e,a),...t}))));o.displayName="CardBody";const d=o,c=n.forwardRef((({className:e,bsPrefix:a,as:s="div",...t},n)=>(a=(0,i.oU)(a,"card-footer"),(0,l.jsx)(s,{ref:n,className:r()(e,a),...t}))));c.displayName="CardFooter";const f=c,u=n.createContext(null);u.displayName="CardHeaderContext";const m=u,p=n.forwardRef((({bsPrefix:e,className:a,as:s="div",...t},o)=>{const d=(0,i.oU)(e,"card-header"),c=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,l.jsx)(m.Provider,{value:c,children:(0,l.jsx)(s,{ref:o,...t,className:r()(a,d)})})}));p.displayName="CardHeader";const x=p,h=n.forwardRef((({bsPrefix:e,className:a,variant:s,as:t="img",...n},o)=>{const d=(0,i.oU)(e,"card-img");return(0,l.jsx)(t,{ref:o,className:r()(s?`${d}-${s}`:d,a),...n})}));h.displayName="CardImg";const b=h,N=n.forwardRef((({className:e,bsPrefix:a,as:s="div",...t},n)=>(a=(0,i.oU)(a,"card-img-overlay"),(0,l.jsx)(s,{ref:n,className:r()(e,a),...t}))));N.displayName="CardImgOverlay";const v=N,y=n.forwardRef((({className:e,bsPrefix:a,as:s="a",...t},n)=>(a=(0,i.oU)(a,"card-link"),(0,l.jsx)(s,{ref:n,className:r()(e,a),...t}))));y.displayName="CardLink";const g=y,j=e=>n.forwardRef(((a,s)=>(0,l.jsx)("div",{...a,ref:s,className:r()(a.className,e)}))),w=j("h6"),U=n.forwardRef((({className:e,bsPrefix:a,as:s=w,...t},n)=>(a=(0,i.oU)(a,"card-subtitle"),(0,l.jsx)(s,{ref:n,className:r()(e,a),...t}))));U.displayName="CardSubtitle";const C=U,$=n.forwardRef((({className:e,bsPrefix:a,as:s="p",...t},n)=>(a=(0,i.oU)(a,"card-text"),(0,l.jsx)(s,{ref:n,className:r()(e,a),...t}))));$.displayName="CardText";const k=$,A=j("h5"),P=n.forwardRef((({className:e,bsPrefix:a,as:s=A,...t},n)=>(a=(0,i.oU)(a,"card-title"),(0,l.jsx)(s,{ref:n,className:r()(e,a),...t}))));P.displayName="CardTitle";const R=P,F=n.forwardRef((({bsPrefix:e,className:a,bg:s,text:t,border:n,body:o=!1,children:c,as:f="div",...u},m)=>{const p=(0,i.oU)(e,"card");return(0,l.jsx)(f,{ref:m,...u,className:r()(a,p,s&&`bg-${s}`,t&&`text-${t}`,n&&`border-${n}`),children:o?(0,l.jsx)(d,{children:c}):c})}));F.displayName="Card";const I=Object.assign(F,{Img:b,Title:R,Subtitle:C,Body:d,Link:g,Text:k,Header:x,Footer:f,ImgOverlay:v})},61105:(e,a,s)=>{"use strict";s.d(a,{A:()=>d});var t=s(46942),r=s.n(t),n=s(96540),i=s(36519),l=s(74848);const o=n.forwardRef(((e,a)=>{const[{className:s,...t},{as:n="div",bsPrefix:o,spans:d}]=function({as:e,bsPrefix:a,className:s,...t}){a=(0,i.oU)(a,"col");const n=(0,i.gy)(),l=(0,i.Jm)(),o=[],d=[];return n.forEach((e=>{const s=t[e];let r,n,i;delete t[e],"object"==typeof s&&null!=s?({span:r,offset:n,order:i}=s):r=s;const c=e!==l?`-${e}`:"";r&&o.push(!0===r?`${a}${c}`:`${a}${c}-${r}`),null!=i&&d.push(`order${c}-${i}`),null!=n&&d.push(`offset${c}-${n}`)})),[{...t,className:r()(s,...o,...d)},{as:e,bsPrefix:a,spans:o}]}(e);return(0,l.jsx)(n,{...t,ref:a,className:r()(s,!d.length&&o)})}));o.displayName="Col";const d=o},43048:(e,a,s)=>{"use strict";s.d(a,{A:()=>d});var t=s(46942),r=s.n(t),n=s(96540),i=s(36519),l=s(74848);const o=n.forwardRef((({bsPrefix:e,fluid:a=!1,as:s="div",className:t,...n},o)=>{const d=(0,i.oU)(e,"container"),c="string"==typeof a?`-${a}`:"-fluid";return(0,l.jsx)(s,{ref:o,...n,className:r()(t,a?`${d}${c}`:d)})}));o.displayName="Container";const d=o},49679:(e,a,s)=>{"use strict";s.d(a,{A:()=>D});var t=s(46942),r=s.n(t),n=s(5556),i=s.n(n),l=s(96540),o=s(74848);const d={type:i().string,tooltip:i().bool,as:i().elementType},c=l.forwardRef((({as:e="div",className:a,type:s="valid",tooltip:t=!1,...n},i)=>(0,o.jsx)(e,{...n,ref:i,className:r()(a,`${s}-${t?"tooltip":"feedback"}`)})));c.displayName="Feedback",c.propTypes=d;const f=c,u=l.createContext({});var m=s(36519);const p=l.forwardRef((({id:e,bsPrefix:a,className:s,type:t="checkbox",isValid:n=!1,isInvalid:i=!1,as:d="input",...c},f)=>{const{controlId:p}=(0,l.useContext)(u);return a=(0,m.oU)(a,"form-check-input"),(0,o.jsx)(d,{...c,ref:f,type:t,id:e||p,className:r()(s,a,n&&"is-valid",i&&"is-invalid")})}));p.displayName="FormCheckInput";const x=p,h=l.forwardRef((({bsPrefix:e,className:a,htmlFor:s,...t},n)=>{const{controlId:i}=(0,l.useContext)(u);return e=(0,m.oU)(e,"form-check-label"),(0,o.jsx)("label",{...t,ref:n,htmlFor:s||i,className:r()(a,e)})}));h.displayName="FormCheckLabel";const b=h;const N=l.forwardRef((({id:e,bsPrefix:a,bsSwitchPrefix:s,inline:t=!1,reverse:n=!1,disabled:i=!1,isValid:d=!1,isInvalid:c=!1,feedbackTooltip:p=!1,feedback:h,feedbackType:N,className:v,style:y,title:g="",type:j="checkbox",label:w,children:U,as:C="input",...$},k)=>{a=(0,m.oU)(a,"form-check"),s=(0,m.oU)(s,"form-switch");const{controlId:A}=(0,l.useContext)(u),P=(0,l.useMemo)((()=>({controlId:e||A})),[A,e]),R=!U&&null!=w&&!1!==w||function(e,a){return l.Children.toArray(e).some((e=>l.isValidElement(e)&&e.type===a))}(U,b),F=(0,o.jsx)(x,{...$,type:"switch"===j?"checkbox":j,ref:k,isValid:d,isInvalid:c,disabled:i,as:C});return(0,o.jsx)(u.Provider,{value:P,children:(0,o.jsx)("div",{style:y,className:r()(v,R&&a,t&&`${a}-inline`,n&&`${a}-reverse`,"switch"===j&&s),children:U||(0,o.jsxs)(o.Fragment,{children:[F,R&&(0,o.jsx)(b,{title:g,children:w}),h&&(0,o.jsx)(f,{type:N,tooltip:p,children:h})]})})})}));N.displayName="FormCheck";const v=Object.assign(N,{Input:x,Label:b});s(9771);const y=l.forwardRef((({bsPrefix:e,type:a,size:s,htmlSize:t,id:n,className:i,isValid:d=!1,isInvalid:c=!1,plaintext:f,readOnly:p,as:x="input",...h},b)=>{const{controlId:N}=(0,l.useContext)(u);return e=(0,m.oU)(e,"form-control"),(0,o.jsx)(x,{...h,type:a,size:t,ref:b,readOnly:p,id:n||N,className:r()(i,f?`${e}-plaintext`:e,s&&`${e}-${s}`,"color"===a&&`${e}-color`,d&&"is-valid",c&&"is-invalid")})}));y.displayName="FormControl";const g=Object.assign(y,{Feedback:f}),j=l.forwardRef((({className:e,bsPrefix:a,as:s="div",...t},n)=>(a=(0,m.oU)(a,"form-floating"),(0,o.jsx)(s,{ref:n,className:r()(e,a),...t}))));j.displayName="FormFloating";const w=j,U=l.forwardRef((({controlId:e,as:a="div",...s},t)=>{const r=(0,l.useMemo)((()=>({controlId:e})),[e]);return(0,o.jsx)(u.Provider,{value:r,children:(0,o.jsx)(a,{...s,ref:t})})}));U.displayName="FormGroup";const C=U;var $=s(61105);const k=l.forwardRef((({as:e="label",bsPrefix:a,column:s=!1,visuallyHidden:t=!1,className:n,htmlFor:i,...d},c)=>{const{controlId:f}=(0,l.useContext)(u);a=(0,m.oU)(a,"form-label");let p="col-form-label";"string"==typeof s&&(p=`${p} ${p}-${s}`);const x=r()(n,a,t&&"visually-hidden",s&&p);return i=i||f,s?(0,o.jsx)($.A,{ref:c,as:"label",className:x,htmlFor:i,...d}):(0,o.jsx)(e,{ref:c,className:x,htmlFor:i,...d})}));k.displayName="FormLabel";const A=k,P=l.forwardRef((({bsPrefix:e,className:a,id:s,...t},n)=>{const{controlId:i}=(0,l.useContext)(u);return e=(0,m.oU)(e,"form-range"),(0,o.jsx)("input",{...t,type:"range",ref:n,className:r()(a,e),id:s||i})}));P.displayName="FormRange";const R=P,F=l.forwardRef((({bsPrefix:e,size:a,htmlSize:s,className:t,isValid:n=!1,isInvalid:i=!1,id:d,...c},f)=>{const{controlId:p}=(0,l.useContext)(u);return e=(0,m.oU)(e,"form-select"),(0,o.jsx)("select",{...c,size:s,ref:f,className:r()(t,e,a&&`${e}-${a}`,n&&"is-valid",i&&"is-invalid"),id:d||p})}));F.displayName="FormSelect";const I=F,T=l.forwardRef((({bsPrefix:e,className:a,as:s="small",muted:t,...n},i)=>(e=(0,m.oU)(e,"form-text"),(0,o.jsx)(s,{...n,ref:i,className:r()(a,e,t&&"text-muted")}))));T.displayName="FormText";const _=T,S=l.forwardRef(((e,a)=>(0,o.jsx)(v,{...e,ref:a,type:"switch"})));S.displayName="Switch";const B=Object.assign(S,{Input:v.Input,Label:v.Label}),O=l.forwardRef((({bsPrefix:e,className:a,children:s,controlId:t,label:n,...i},l)=>(e=(0,m.oU)(e,"form-floating"),(0,o.jsxs)(C,{ref:l,className:r()(a,e),controlId:t,...i,children:[s,(0,o.jsx)("label",{htmlFor:t,children:n})]}))));O.displayName="FloatingLabel";const L=O,z={_ref:i().any,validated:i().bool,as:i().elementType},V=l.forwardRef((({className:e,validated:a,as:s="form",...t},n)=>(0,o.jsx)(s,{...t,ref:n,className:r()(e,a&&"was-validated")})));V.displayName="Form",V.propTypes=z;const D=Object.assign(V,{Group:C,Control:g,Floating:w,Check:v,Switch:B,Label:A,Text:_,Range:R,Select:I,FloatingLabel:L})},44479:(e,a,s)=>{"use strict";s.d(a,{A:()=>d});var t=s(46942),r=s.n(t),n=s(96540),i=s(36519),l=s(74848);const o=n.forwardRef((({bsPrefix:e,className:a,as:s="div",...t},n)=>{const o=(0,i.oU)(e,"row"),d=(0,i.gy)(),c=(0,i.Jm)(),f=`${o}-cols`,u=[];return d.forEach((e=>{const a=t[e];let s;delete t[e],null!=a&&"object"==typeof a?({cols:s}=a):s=a;const r=e!==c?`-${e}`:"";null!=s&&u.push(`${f}${r}-${s}`)})),(0,l.jsx)(s,{ref:n,...t,className:r()(a,o,...u)})}));o.displayName="Row";const d=o},36519:(e,a,s)=>{"use strict";s.d(a,{Jm:()=>c,gy:()=>d,oU:()=>o});var t=s(96540);s(74848);const r=["xxl","xl","lg","md","sm","xs"],n=t.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"}),{Consumer:i,Provider:l}=n;function o(e,a){const{prefixes:s}=(0,t.useContext)(n);return e||s[a]||a}function d(){const{breakpoints:e}=(0,t.useContext)(n);return e}function c(){const{minBreakpoint:e}=(0,t.useContext)(n);return e}},9771:(e,a,s)=>{"use strict";s(96763);var t=function(){};e.exports=t},46942:(e,a)=>{var s;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(e=i(e,n(s)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var s in e)t.call(e,s)&&e[s]&&(a=i(a,s));return a}function i(e,a){return a?e?e+" "+a:e+a:e}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(a,[]))||(e.exports=s)}()}}]);