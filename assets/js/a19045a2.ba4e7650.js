"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1058],{97077:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>x,frontMatter:()=>y,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"api/15-status","title":"Retrieve status","description":"Use this method to retrieve information for a previously created cart or specific items in that cart. You can narrow down the results using the `tags`, `itemId`, or `timerEnabled` fields.","source":"@site/docs/api/15-status.api.mdx","sourceDirName":"api","slug":"/api/15-status","permalink":"/docusaurus/docs/api/15-status","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"id":"15-status","title":"Retrieve status","description":"Use this method to retrieve information for a previously created cart or specific items in that cart. You can narrow down the results using the `tags`, `itemId`, or `timerEnabled` fields.","sidebar_label":"Retrieve status","hide_title":true,"hide_table_of_contents":true,"api":"eJztWVtv2zgW/isHBAqkhXxtMkkM7EM29WyNzE6DXB5mkyCmpSObU4lUSMqu1/B/XxxSkuXYcS4znUWB6UPLipfznfvFCxahCbXIrFCS9di1QbATYSBFO1ERWAUarRY4RRAyVjrldBJipYFDpnEqVG6SOYQaucUIQq4tKA0mw1DEIgRhMTUgJNgJt267Cb+pHEIuQXKt1QwiNaNtBI0mT6yB3Ag5dl+Glo/NMIAhPTOIhgG9PbQiRd2XfJRgNIRYYBKZ5q1kAdNoMiUNGtZbsG67Tf+sc/jljAUsVNKitLTLsywRoeOq9buhIwtmwgmmnFZ2niHrMTX6HUPr3n/IhcaI9W5YqCJkAUvRGD6mFcEylqcZuwtYplWG2goPJeKWb2K5KNBCxjVP0aI2Tfb4KolsENXAGKuFHDt6NqEPwAKG33iauf/9FB8ddzAaNTrYiRv7R6NRY9Te7za64ejwuM3b8X67S7CFFGmest5xwFL+za8//rQMWJgbq1LUryF6FB1GR52jTmO0P4ob+8dE9PBjtxHtHx9FnYMoPAhD5t7WGmU4f/nL/esLFjyS283g8gvsdzuHd3sTazPTa7Vms1lTjLhshiptlVQapCLzHniSTfgIrQih3ALaahIkqyxPTlKVS2u2qXxdG0IKK8jSa0eFtDhG/YiFdchXRAWq28AdQVBxYfgPORr6XrlLoZ8V4FwK66ycxMgzm+s3gigve1/dDaTYfQ6PxjiX0RvxxELyRPz3TwS0XBH1aryvK/neWG5zc6/REHb3bg0415rP2eb3yiDq/DwyDhekXncn4/MUpb10mJ51C0leelOzQrIFGWLilhqJnFvyLNNqWhwojCVglahZTWd3y4DFebLLB55WYSFfr5aBjFVNupux7K3e83OebHEeSkJkIyT27+UyjnLlMW8h/Ebf+KOEnRPw8csD7VirELXwTlFapeSZmSj7OpP2YM9RDyymz7JdITg+Pj5eBuwh59IKW08RMk9HG/d8McJ6LE4Ut/WM1m62OxuhZoJQvkyxhUsnxCaccgkjhNlEJQiekKEiI8JQpDwhYQ5iGHqe/q0iHIIwYNBSbTQMeRLmCRnlMPAFiz84hClPcqSjaZ5YkSUCIxjN/ZkSSHlK+fLnSyrFKYVAIyLcSTfCMOEao2D7e3TQKrIbIVevjnILkUIDUlngcYyhrVVdVHE5s8q0CLGw3Yq6iAXqP6qRStPt5uFj/bxBxiWskmseWgPcAF+JXFceY33+JQZLFTXhM2onLC6hwNa8lbfyVEnSgC6NpChdlbEGOu029K8vmvBZzXCK2iEqXgEqABuJSAUFqY/tdxAJE/ps5lGUpRVMHM4MtVGSJ2tnm/CzOy2MI76TZTNReRKR/ZbCajcPh7DH6S5hGnba7XfQcAT+AYftd8MysSotxpQNvL7fO8Z3KKG0uN0qmIkkcWi2W5/bfon1wS+DX8+qKEbV/tsikdViPEbdnxbF/nfJn1Q/y5wnVPU/HWorRp5N9JkmCxJTvK9fWCX/DGXkbxjLtYeb8dy4hbEqy9wKE56ZIr1rTLmQQo4vMTTPRORl+SfYIWhKqNT+7Mwuy1VzRLKvMs3AVXK+TkADJg9DNIZKkHnVbRIHj19+onkqaMAt2zOIwBOj4KbadS0AcBmV58zdXitSYW54rnNDS9NyctC+CUStlS46h/fNW+b6yg09+j7vmeRaBcSIW2zQtQ0uPnGLDh3t1itemHEDGkMU01XmMKinqH2ru5Jnt909aLT3G92PV52jXvegt/+xedDp/IeVetzf1gj/k0dw4Wn9WR2x63KDNzXG689umleRcNZNal32P6ZmOpuauZY8txOli0Dzlw8rtot+V7HaJ59xrvZdvXAlWBLQvTuz0ySex/xXBI8V7JPcTlDaQoVQMfDD2e3BtogykBY1lRSX7lFwEv47tvx/dLQMGMnCiZpmEqxzYMpKYjVuZL2bBZM8pQeLQWPABEHMuJ2sqcDqHB/zMfR3hkDVB9WJZWEFc5VrP+11sDd0vFVyT80kl0EFkubBJcSHHPV8Q7blcDmnUTYfG1+9z6hIz7ghnDNhJ74cp8J0bcTtKpOU66+1Y8U7TzDix0V1iH4K9AzKEwnuJpXja7NyGHwydUwvJlsfiu+mPYh9e6HcB6ryI4yFLNvJcgrvqnUhwySPED58UDKZf/hQiMjJBr+RMwubzMsHnD1rahqoojc9aiqGZDhDaAA9sHbdYy3ulK2DRptriZG7GvPErN8ttPLklU3eqN8waAPgSVKQdxaRIlpQ1L1BqIVFLfjGi08If6RUgpzak7uAGQxz7eYVNwt2kokzpOUdbfkfUWi2gm6STC7VYy3vh62Fd54lUXAe7r0x1wnrsXKuPRXaFv5vZpyamUk+ckPuq/7p58vTi8H55aD1kPF5q9NsN9usDumSgPtYWAJbGZD/UBjKBHnkcnxhTCeZaJy4srxxpb6i3LChM5wDZbNeWUMaoDDPhQROzaCIYHhyPrg/6/829L/+rGKcJ2aablBLvyo5WEUcqBrGk/MBCxiJxVMk9rqbfnQ+gE99J4erwZdf4XP/ou/G+pkyNuUuwRQ8XZReXsXBtacWqzz1w/8MVujY4jfbyhIu3DDHGdaisMIbVkmhVwT+u4BNlLG0t1iMuMFrnSyX9NmHETLOSBgfYHrONXeI8PuG4a0MfiUDLzOEG0iwHmMUIl8O+5VxeQeOVRp4I5S/w/TrwvQum1jPjSuF3NF/tKCNV9r33kVRGb2HF1dBWxGW8VjO68hK5IVvLmmKUwRpwuk3KUJntnZto7xey0L/6l/RZCsn/6/nga8uDxQLen0rpC0pwaOgv8myt95aLHyiWS6r837ryRtVKirciJhYLpf/Awl9Owg=","sidebar_class_name":"get api-method","info_path":"docs/api/omnicart-api","custom_edit_url":null},"sidebar":"api","previous":{"title":"Initiate","permalink":"/docusaurus/docs/api/10-init"},"next":{"title":"Cancel","permalink":"/docusaurus/docs/api/20-cancel"}}');var r=i(74848),s=i(28453),n=i(33617),o=i.n(n),d=i(17543),c=i.n(d),u=i(86013),m=i.n(u),p=i(63723),l=i.n(p),h=(i(18766),i(79329),i(9303));const y={id:"15-status",title:"Retrieve status",description:"Use this method to retrieve information for a previously created cart or specific items in that cart. You can narrow down the results using the `tags`, `itemId`, or `timerEnabled` fields.",sidebar_label:"Retrieve status",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/omnicart-api",custom_edit_url:null},b=void 0,f={},g=[];function w(e){const t={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Retrieve status"}),"\n",(0,r.jsx)(o(),{method:"get",path:"/status/{cartId}",context:"endpoint"}),"\n",(0,r.jsxs)(t.p,{children:["Use this method to retrieve information for a previously created cart or specific items in that cart. You can narrow down the results using the ",(0,r.jsx)(t.code,{children:"tags"}),", ",(0,r.jsx)(t.code,{children:"itemId"}),", or ",(0,r.jsx)(t.code,{children:"timerEnabled"})," fields."]}),"\n",(0,r.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{parameters:[{name:"cartId",in:"path",required:!0,description:"`cartId` used to initiate your cart.\n",schema:{type:"string",title:" ",minimum:9,maximum:36}},{name:"tags",in:"query",description:"You can use tags that were passed with the cart to retrieve items marked with these tags.\n",schema:{type:"array"}},{name:"itemIds",in:"query",description:"An array of specific item IDs to retrieve.\n",schema:{type:"array"}},{name:"timerEnabled",in:"query",description:"If this option is defined, the results will include **only** items with explicitly defined timer settings:\n\n`true` - only items with enabled timer will be returned\n\n`false` - only item with timer will be returned\n\nIf this option is not set, all items that meet other criteria will be returned.\n",schema:{type:"boolean"}}]}),"\n",(0,r.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(l(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["code","message","timestamp"],properties:{data:{description:"Response parameters.",properties:{cartId:{type:"string",title:" ",example:"6f891edb-1e1f-48bb-b042-2cb790a0f402",minimum:9,maximum:36},customerId:{type:"string",title:" ",example:"8d7d8181-b4bf-49bb-b732-d498d15dc5cc"},currency:{type:"string",title:" ",example:"EUR",description:"[ISO 4217](https://www.iban.com/currency-codes) alphabetic currency code."},totalAmounts:{type:"object",properties:{initiated:{type:"integer",title:" ",description:"Total initiated amount of the requested items in minimum currency units.\n"},captured:{type:"integer",title:" ",description:"Total captured cart amount of the requested items amount in minimum currency units.\n"},refunded:{type:"integer",title:" ",description:"Total finalized cart amount of the requested items amount in minimum currency units.\n"}},title:"object_totalAmounts_status_res"},items:{type:"array",items:{type:"object",title:" ",properties:{itemId:{type:"object",title:" ",properties:{paymentStatus:{type:"string",title:" ",enum:["initiated","canceled","rejected","approved","captured","finalized","refunded"]},fullAmounts:{type:"object",title:" ",description:"object_amountInfo_status_res.",properties:{initiated:{type:"integer",title:" ",description:"Full initiated amount for the item in minimum currency units.\n"},captured:{type:"integer",title:" ",description:"Full captured amount for the item in minimum currency units.\n"},refunded:{type:"integer",title:" ",description:"Full captured amount for the item in minimum currency units.\n"}}},tag:{type:"string",title:" ",example:"groceries"},paymentSnapshot:{type:"object",title:" ",properties:{amountPerItem:{type:"integer",title:" ",example:9999},quantity:{type:"number",title:" ",format:"float",minimum:.01,description:"The quantity of an item. Can be whole numbers or decimals.\nIf `amountMode` is set to `calculated`, the `amount` value is multiplied by the `quantity` value on the OmniCart side.\nIf `amountMode` is set to declared, the `quantity` value is stored in OmniCart but does not affect the resulting item price.\n"},amountModifier:{type:"number",title:" ",format:"float",minimum:.01,example:.7,description:"If `amountMode` is set to `calculated`, the `amountModifier` value acts as a multiplier for the total item `amount`. Here is an example.\n\nConsider an item that costs 100 EUR. However, there is a time-limited 30% discount or the customer has a personal 30% discount. For this item, the `amountModifier` value should be set to `0.7` (as it is `100% - 30% = 70%` of the original price).\n\nIf `amountMode` is set to `declared`, the `amountModifier` value will be stored in OmniCart but will not affect the resulting item price. LINK\n"}}},timerSnapshot:{type:"object",title:" ",properties:{triggerEvent:{enum:["initiated","canceled","rejected","approved","captured","finalized","refunded","manual"],type:"string",title:" "},timerStatus:{type:"string",title:"primitive_timerStatus",enum:["pending","started","paused","stopped","elapsed"]},remainingSecs:{type:"integer",title:" "}}}}}}}}},type:"object",title:" "},code:{type:"string",title:" "},message:{example:"Items statuses successfully retrieved",type:"string",description:'Response message "(see also [Response codes and messages](/docusaurus/docs/integration/error-codes))."\n',title:" "},timestamp:{type:"string",title:" ",format:"date-time",description:"Date and time the request was received by the server.\n",example:"2025-04-23T18:25:43.511Z"}}}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",required:["data","code","message","timestamp"],properties:{data:{type:"object"},code:{type:"number"},message:{type:"string"},timestamp:{type:"string",title:" ",format:"date-time",description:"Date and time the request was received by the server.\n",example:"2025-04-23T18:25:43.511Z"}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"object",required:["code","message","timestamp"],properties:{code:{type:"number",title:" ",description:'Error code "(see also [Response codes and messages](/docusaurus/docs/integration/error-codes))."\n',example:"auth_error"},message:{type:"string",title:" ",description:'Error message "(see also [Response codes and messages](/docusaurus/docs/integration/error-codes))."\n',example:"Authentication error"},timestamp:{type:"string",title:" ",format:"date-time",description:"Date and time the request was received by the server.\n",example:"2025-04-23T18:25:43.511Z"}}}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",required:["data","code","message","timestamp"],properties:{data:{type:"object"},code:{type:"number"},message:{type:"string"},timestamp:{type:"string",title:" ",format:"date-time",description:"Date and time the request was received by the server.\n",example:"2025-04-23T18:25:43.511Z"}}}}}}}})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}}}]);