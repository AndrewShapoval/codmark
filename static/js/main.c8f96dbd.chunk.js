(this.webpackJsonpcodmark=this.webpackJsonpcodmark||[]).push([[0],{18:function(e,t,a){e.exports={groupedTags:"GroupedTags_groupedTags__mUxs_",uniqueTag:"GroupedTags_uniqueTag__191ad",images:"GroupedTags_images__3X1SC"}},23:function(e,t,a){e.exports={image:"Image_image__15mkD",img:"Image_img__1UAoH"}},35:function(e,t,a){},41:function(e,t,a){e.exports={header:"Header_header__3MFKn"}},49:function(e,t,a){},5:function(e,t,a){e.exports={mainBlock:"Main_mainBlock__5aICz",mainContainer:"Main_mainContainer__KoDBs",form:"Main_form__3hcEP",load:"Main_load__2A8OV",clear:"Main_clear__2PnN6",group:"Main_group__3R4OT",compositeImageBlock:"Main_compositeImageBlock__3mL4g",compositeImage:"Main_compositeImage__3__Fv",img:"Main_img__ecFBd",images:"Main_images__KzOY_"}},72:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a.n(c),s=a(14),r=a.n(s),o=(a(49),a(35)),u=a.n(o),m=a(24),l=a(5),g=a.n(l),d=a(43),j=a(6),_=a(22),p=a.n(_),b=a(39),O=a(25),f=a(3),h=a(40),x=a.n(h).a.create({baseURL:"https://api.giphy.com/v1/gifs/"}),v=function(e){return x.get("random?api_key=".concat("gTJAO48YcpmrADUyo4opy4ES4g7iDBxx","&tag=").concat(e))},T={status:"idle",images:[],responseMessage:"",uniqueTagsNames:[],compositeImage:[]},S=function(e){return{type:"APP/SET_STATUS",status:e}},E=function(e){return{type:"APP/SET_RESPONSE_MESSAGE",message:e}},A=function(e,t){return{type:"APP/SET_COMPOSITE_IMAGE",imgI:e,imgB:t}},N=a(9),M=a.n(N),P=function(e){var t=e.active,a=e.setActive,c=e.text;return Object(n.jsx)("div",{className:t?"".concat(M.a.modal," ").concat(M.a.active):M.a.modal,onClick:function(){return a(!1)},children:Object(n.jsx)("div",{className:t?"".concat(M.a.modalContent," ").concat(M.a.modalContentActive):M.a.modalContent,onClick:function(e){return e.stopPropagation()},children:Object(n.jsx)("p",{className:M.a.text,children:c})})})},I=a(18),C=a.n(I),k=a(23),y=a.n(k),G=i.a.memo((function(e){return Object(n.jsx)("div",{className:y.a.image,children:Object(n.jsx)("img",{className:y.a.img,src:e.image.image_url,onClick:function(){return e.handlerSetTagValueInput(e.image.tag)},alt:e.image.tag})})})),B=i.a.memo((function(e){var t=Object(j.c)((function(e){return e.app.uniqueTagsNames})),a=Object(j.c)((function(e){return e.app.images}));return Object(n.jsx)(n.Fragment,{children:t&&t.map((function(t,c){return Object(n.jsxs)("div",{className:C.a.groupedTags,children:[Object(n.jsx)("h3",{className:C.a.uniqueTag,children:t}),Object(n.jsx)("div",{className:C.a.images,children:a&&a.filter((function(e){return e.tag===t})).map((function(t,a){return Object(n.jsx)(G,{handlerSetTagValueInput:e.handlerSetTagValueInput,image:t},"".concat(t.id," ").concat(a))}))})]},c)}))})})),q=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.app.images})),a=Object(j.c)((function(e){return e.app.status})),i=Object(j.c)((function(e){return e.app.responseMessage})),s=Object(c.useState)(!1),r=Object(m.a)(s,2),o=r[0],u=r[1],l=Object(c.useState)(!1),_=Object(m.a)(l,2),O=_[0],f=_[1],h=Object(j.c)((function(e){return e.app.compositeImage})),x=Object(d.a)({initialValues:{tag:""},validate:function(e){var t={};return e.tag?/^[a-z, ]+$/i.test(e.tag)||(t.tag="\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430"):t.tag="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 '\u0442\u0435\u0433'",t},onSubmit:function(t){if(-1===t.tag.indexOf(","))e((n=t.tag,function(e){e(S("loading")),v(n).then((function(t){if(0!==t.data.data.length){var a=t.data.data,c=a.id,i=a.image_url;e(function(e,t,a){return{type:"APP/SET_IMAGE",id:e,image_url:t,tag:a}}(c,i,n.toLowerCase())),e(function(e){return{type:"APP/SET_UNIQUE_TAG_NAME",tag:e}}(n.toLowerCase()))}else e(E("\u041f\u043e \u0442\u0435\u0433\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")),setTimeout((function(){return e(E(""))}),3e3)})).catch((function(){e(E("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 http \u043e\u0448\u0438\u0431\u043a\u0430")),setTimeout((function(){return e(E(""))}),3e3)})).finally((function(){e(S("succeeded"))}))}));else{var a=t.tag.split(/\s*,\s*/);e(function(e){return function(){var t=Object(b.a)(p.a.mark((function t(a){var n,c,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(S("loading")),t.prev=1,t.next=4,Promise.all([v(e[0]),v(e[1])]);case 4:n=t.sent,c=n[0].data.data.image_url,i=n[1].data.data.image_url,a(A(c,i)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a(E("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 http \u043e\u0448\u0438\u0431\u043a\u0430"));case 13:a(S("succeeded"));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}(a))}var n}}),T=function(e){x.setFieldValue("tag",e)};return Object(n.jsxs)("div",{className:g.a.mainBlock,children:[i?Object(n.jsx)(P,{active:o,setActive:u,text:i}):null,Object(n.jsxs)("div",{className:g.a.mainContainer,children:[Object(n.jsxs)("form",{onSubmit:x.handleSubmit,className:g.a.form,children:[Object(n.jsx)("input",{type:"text",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433",onChange:x.handleChange,name:"tag",value:x.values.tag}),x.errors.tag?Object(n.jsx)(P,{active:o,setActive:u,text:x.errors.tag}):null,Object(n.jsx)("button",{className:g.a.load,value:"send",disabled:"loading"===a,onClick:function(){x.errors&&u(!0),x.handleSubmit()},type:"submit",children:"loading"===a?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),Object(n.jsx)("button",{className:g.a.clear,type:"button",onClick:function(){e({type:"APP/REMOVE_IMAGE"}),x.resetForm()},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),O?Object(n.jsx)("button",{className:g.a.group,type:"button",onClick:function(){return f(!1)},children:"\u0420\u0430\u0437\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):Object(n.jsx)("button",{className:g.a.group,type:"button",onClick:function(){return f(!0)},children:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),h.length>0?Object(n.jsx)("div",{className:g.a.compositeImageBlock,children:h.map((function(e,t){return Object(n.jsx)("div",{className:g.a.compositeImage,children:Object(n.jsx)("img",{src:e,className:g.a.img})},t)}))}):null,O?Object(n.jsx)(B,{handlerSetTagValueInput:T}):Object(n.jsx)("div",{className:g.a.images,children:t&&t.map((function(e,t){return Object(n.jsx)(G,{handlerSetTagValueInput:T,image:e},"".concat(e.id," ").concat(t))}))})]})]})},V=a(41),w=a.n(V),F=function(){return Object(n.jsx)("div",{className:w.a.header,children:Object(n.jsx)("h1",{children:"Header"})})},U=function(){return Object(n.jsxs)("div",{className:u.a.app,children:[Object(n.jsx)(F,{}),Object(n.jsx)(q,{})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))},R=a(11),D=a(42),z=Object(R.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(f.a)(Object(f.a)({},e),{},{status:t.status});case"APP/SET_IMAGE":return Object(f.a)(Object(f.a)({},e),{},{images:[].concat(Object(O.a)(e.images),[{id:t.id,image_url:t.image_url,tag:t.tag}])});case"APP/REMOVE_IMAGE":return Object(f.a)(Object(f.a)({},e),{},{images:[],uniqueTagsNames:[],compositeImage:[]});case"APP/SET_RESPONSE_MESSAGE":return Object(f.a)(Object(f.a)({},e),{},{responseMessage:t.message});case"APP/SET_UNIQUE_TAG_NAME":return e.uniqueTagsNames.length?e.uniqueTagsNames.find((function(e){return e===t.tag}))?e:Object(f.a)(Object(f.a)({},e),{},{uniqueTagsNames:[].concat(Object(O.a)(e.uniqueTagsNames),[t.tag])}):Object(f.a)(Object(f.a)({},e),{},{uniqueTagsNames:[t.tag]});case"APP/SET_COMPOSITE_IMAGE":return Object(f.a)(Object(f.a)({},e),{},{compositeImage:[t.imgI,t.imgB]});default:return e}}}),H=Object(R.d)(z,Object(R.a)(D.a));window.store=H,r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j.a,{store:H,children:Object(n.jsx)(U,{})})}),document.getElementById("root")),L()},9:function(e,t,a){e.exports={modal:"Modal_modal__1kS8s",modalContent:"Modal_modalContent__2GV_h",text:"Modal_text__2r-Su",modalContentActive:"Modal_modalContentActive__3QTwg",active:"Modal_active__IM28W"}}},[[72,1,2]]]);
//# sourceMappingURL=main.c8f96dbd.chunk.js.map