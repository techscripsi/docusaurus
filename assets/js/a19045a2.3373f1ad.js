"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1058],{97077:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>I,frontMatter:()=>y,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"api/15-status","title":"Retrieve status","description":"Use this method to retrieve information for a previously created cart or specific items in that cart. You can narrow down the results using the `tags`, `itemId`, or `timerEnabled` fields.","source":"@site/docs/api/15-status.api.mdx","sourceDirName":"api","slug":"/api/15-status","permalink":"/docusaurus/docs/api/15-status","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-status","title":"Retrieve status","description":"Use this method to retrieve information for a previously created cart or specific items in that cart. You can narrow down the results using the `tags`, `itemId`, or `timerEnabled` fields.","sidebar_label":"Retrieve status","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"get api-method","info_path":"docs/api/omnicart-api","custom_edit_url":null},"sidebar":"api","previous":{"title":"Initiate cart","permalink":"/docusaurus/docs/api/10-init"},"next":{"title":"Cancel","permalink":"/docusaurus/docs/api/20-cancel"}}');var a=i(74848),r=i(28453),n=i(33617),o=i.n(n),d=i(17543),p=i.n(d),c=i(86013),m=i.n(c),u=i(63723),l=i.n(u),h=(i(18766),i(79329),i(9303));const y={id:"15-status",title:"Retrieve status",description:"Use this method to retrieve information for a previously created cart or specific items in that cart. You can narrow down the results using the `tags`, `itemId`, or `timerEnabled` fields.",sidebar_label:"Retrieve status",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/omnicart-api",custom_edit_url:null},f=void 0,b={},g=[];function j(e){const t={code:"code",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Retrieve status"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/status/{cartId}",context:"endpoint"}),"\n",(0,a.jsxs)(t.p,{children:["Use this method to retrieve information for a previously created cart or specific items in that cart. You can narrow down the results using the ",(0,a.jsx)(t.code,{children:"tags"}),", ",(0,a.jsx)(t.code,{children:"itemId"}),", or ",(0,a.jsx)(t.code,{children:"timerEnabled"})," fields."]}),"\n",(0,a.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(p(),{parameters:[{name:"cartId",in:"path",required:!0,description:"`cartId` used to initiate your cart.\n",schema:{type:"string",title:" ",minimum:9,maximum:36}},{name:"tags",in:"query",description:"You can use tags that were passed with the cart to retrieve items marked with these tags.\n",schema:{type:"array"}},{name:"itemIds",in:"query",description:"An array of specific item IDs to retrieve.\n",schema:{type:"array"}},{name:"timerEnabled",in:"query",description:"If this option is defined, the results will include **only** items with explicitly defined timer settings:\n\n`true` - only items with enabled timer will be returned\n\n`false` - only item with timer will be returned\n\nIf this option is not set, all items that meet other criteria will be returned.\n",schema:{type:"boolean"}}]}),"\n",(0,a.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(l(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["code","message","timestamp"],properties:{data:{description:"Response parameters.",properties:{cartId:{type:"string",title:" ",example:"6f891edb-1e1f-48bb-b042-2cb790a0f402",minimum:9,maximum:36},customerId:{type:"string",title:" ",example:"8d7d8181-b4bf-49bb-b732-d498d15dc5cc"},currency:{type:"string",title:" ",example:"EUR",description:"[ISO 4217](https://www.iban.com/currency-codes) alphabetic currency code."},totalAmounts:{type:"object",properties:{initiated:{type:"integer",title:" ",description:"Total initiated amount of the requested items in minimum currency units.\n"},captured:{type:"integer",title:" ",description:"Total captured cart amount of the requested items amount in minimum currency units.\n"},refunded:{type:"integer",title:" ",description:"Total finalized cart amount of the requested items amount in minimum currency units.\n"}},title:"object_totalAmounts_status_res"},items:{type:"array",items:{type:"object",title:" ",properties:{itemId:{type:"object",title:" ",properties:{paymentStatus:{type:"string",title:" ",enum:["initiated","canceled","rejected","approved","captured","finalized","refunded"]},fullAmounts:{type:"object",title:" ",description:"object_amountInfo_status_res.",properties:{initiated:{type:"integer",title:" ",description:"Full initiated amount for the item in minimum currency units.\n"},captured:{type:"integer",title:" ",description:"Full captured amount for the item in minimum currency units.\n"},refunded:{type:"integer",title:" ",description:"Full captured amount for the item in minimum currency units.\n"}}},tag:{type:"string",title:" ",example:"groceries"},paymentSnapshot:{type:"object",title:" ",properties:{amountPerItem:{type:"integer",title:" ",example:9999},quantity:{type:"number",title:" ",format:"float",minimum:.01,description:"The quantity of an item. Can be whole numbers or decimals.\nIf `amountMode` is set to `calculated`, the `amount` value is multiplied by the `quantity` value on the OmniCart side.\nIf `amountMode` is set to declared, the `quantity` value is stored in OmniCart but does not affect the resulting item price.\n"},amountModifier:{type:"number",title:" ",format:"float",minimum:.01,example:.7,description:"If `amountMode` is set to `calculated`, the `amountModifier` value acts as a multiplier for the total item `amount`. Here is an example.\n\nConsider an item that costs 100 EUR. However, there is a time-limited 30% discount or the customer has a personal 30% discount. For this item, the `amountModifier` value should be set to `0.7` (as it is 70% of the original price).\n\nIf `amountMode` is set to `declared`, the `amountModifier` value will be stored in OmniCart but will not affect the resulting item price. LINK\n"}}},timerSnapshot:{type:"object",title:" ",properties:{triggerEvent:{enum:["initiated","canceled","rejected","approved","captured","finalized","refunded","manual"],type:"string",title:" "},timerStatus:{type:"string",title:"primitive_timerStatus",enum:["pending","started","paused","stopped","elapsed"]},remainingSecs:{type:"integer",title:" "}}}}}}}}},type:"object",title:" "},code:{type:"string",title:" "},message:{example:"Items statuses successfully retrieved",type:"string",description:"Response message (see [Response codes and messages](/docusaurus/docs/api/response-codes)).\n",title:" "},timestamp:{type:"string",title:" ",format:"date-time",description:"Date and time the request was received by the server.\n",example:"2025-04-23T18:25:43.511Z"}}}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",required:["data","code","message","timestamp"],properties:{data:{type:"object"},code:{type:"number"},message:{type:"string"},timestamp:{type:"string",title:" ",format:"date-time",description:"Date and time the request was received by the server.\n",example:"2025-04-23T18:25:43.511Z"}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"object",required:["code","message","timestamp"],properties:{code:{type:"number",title:" ",description:'Error code "(see [Response codes and messages](/docusaurus/docs/api/response-codes))."\n',example:"auth_error"},message:{type:"string",title:" ",description:'Error message "(see [Response codes and messages](/docusaurus/docs/api/response-codes))."\n',example:"Authentication error"},timestamp:{type:"string",title:" ",format:"date-time",description:"Date and time the request was received by the server.\n",example:"2025-04-23T18:25:43.511Z"}}}}}},500:{description:"Internal Server Error"},503:{description:"Service Unavailable"}}})]})}function I(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}}}]);