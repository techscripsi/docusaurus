"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2163],{22791:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(74848),a=t(28453),l=t(20418);const r={sidebar_position:2},u="sequenceDiagram",o={id:"diagrams/diagrams-plus",title:"sequenceDiagram",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",source:"@site/docs/diagrams/diagrams-plus.mdx",sourceDirName:"diagrams",slug:"/diagrams/diagrams-plus",permalink:"/docusaurus/docs/diagrams/diagrams-plus",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"start",previous:{title:"Billing Sequence",permalink:"/docusaurus/docs/diagrams/"},next:{title:"Introduction",permalink:"/docusaurus/docs/example/sample-application-flow-oauth-2-project"}},c={},s=[{value:"sequenceDiagram II",id:"sequencediagram-ii",level:2},{value:"checkPurchasesAvailbility",id:"checkpurchasesavailbility",level:2}];function d(e){const i={h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"sequencediagram",children:"sequenceDiagram"})}),"\n",(0,n.jsx)(i.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),"\n",(0,n.jsx)(l.A,{value:"sequenceDiagram\n  participant \u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c\n  participant \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n  participant \u0412\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440\n  participant RuStore_Billing_Client\n  participant RuStore C\u0435\u0440\u0432\u0435\u0440\n  participant \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b\n\n\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u0412\u0445\u043e\u0434\u0438\u0442 \u0432 \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\nactivate \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435->>RuStore_Billing_Client: checkPurchasesAvailbility\nactivate RuStore_Billing_Client\nRuStore_Billing_Client->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\ndeactivate \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\ndeactivate RuStore_Billing_Client\nactivate \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435->>RuStore_Billing_Client: getProducts\nactivate RuStore_Billing_Client\nRuStore_Billing_Client->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\ndeactivate RuStore_Billing_Client\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435->>\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c: \u041f\u043e\u043a\u0430\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043f\u043e\u043a\u0443\u043f\u043e\u043a\n\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u041f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435->>RuStore_Billing_Client: purchaseProduct\nactivate RuStore_Billing_Client\nRuStore_Billing_Client->>\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c: \u0417\u0430\u043f\u0440\u043e\u0441 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043e\u043f\u043b\u0430\u0442\u044b\n\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c->>RuStore_Billing_Client: \u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b\nRuStore_Billing_Client->>RuStore_Billing_Client: \u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0430\nRuStore_Billing_Client->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0430\ndeactivate RuStore_Billing_Client\ndeactivate \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\nactivate \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\nopt \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0430\nRuStore C\u0435\u0440\u0432\u0435\u0440--\x3e>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: Callback \u043e \u043f\u043b\u0430\u0442\u0435\u0436\u0435\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435--\x3e>RuStore C\u0435\u0440\u0432\u0435\u0440: \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f (public API)\nactivate RuStore C\u0435\u0440\u0432\u0435\u0440\nRuStore C\u0435\u0440\u0432\u0435\u0440--\x3e>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u041f\u043e\u043b\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043a\u0443\u043f\u043a\u0435\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435--\x3e>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u041d\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044e\ndeactivate \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435->>RuStore_Billing_Client: confirmPurchase\nactivate RuStore_Billing_Client\nRuStore_Billing_Client->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u041d\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044e\nend\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435->>RuStore_Billing_Client: purchaseProduct\nactivate \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\nactivate RuStore_Billing_Client\nRuStore_Billing_Client->>\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c: \u0417\u0430\u043f\u0440\u043e\u0441 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043e\u043f\u043b\u0430\u0442\u044b\n\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c->>RuStore_Billing_Client: \u0423\u043a\u0430\u0437\u0430\u043b \u0421\u0411\u041f/SberPay/T-Pay\nRuStore_Billing_Client->>\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b: \u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043e\u043f\u043b\u0430\u0442\u044b\nactivate \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b\n\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b->>\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c: \u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043e\u043f\u043b\u0430\u0442\u044b\n\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c->>\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b: \u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438\n\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\n\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435->>RuStore_Billing_Client: OnNewIntent\nRuStore_Billing_Client->>\u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435: \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043e\u043f\u043b\u0430\u0442\u044b\ndeactivate \u0412\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\nRuStore_Billing_Client->>\u041f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c: \u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0448\u0442\u043e\u0440\u043a\u0438 \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043e\u043f\u043b\u0430\u0442\u044b\ndeactivate RuStore_Billing_Client\n"}),"\n",(0,n.jsx)(i.h2,{id:"sequencediagram-ii",children:"sequenceDiagram II"}),"\n",(0,n.jsx)(i.h2,{id:"checkpurchasesavailbility",children:"checkPurchasesAvailbility"}),"\n",(0,n.jsx)(i.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}function m(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>u});var n=t(96540);const a={},l=n.createContext(a);function r(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function u(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);