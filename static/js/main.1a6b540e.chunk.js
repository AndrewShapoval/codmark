(this.webpackJsonpcodmark=this.webpackJsonpcodmark||[]).push([[0],{18:function(e,t,a){e.exports={groupedTags:"GroupedTags_groupedTags__mUxs_",uniqueTag:"GroupedTags_uniqueTag__191ad",images:"GroupedTags_images__3X1SC"}},22:function(e,t,a){e.exports={image:"Image_image__15mkD",img:"Image_img__1UAoH"}},34:function(e,t,a){},39:function(e,t,a){e.exports={header:"Header_header__3MFKn"}},47:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a.n(c),s=a(14),r=a.n(s),o=(a(47),a(34)),u=a.n(o),l=a(23),g=a(8),m=a.n(g),d=a(41),j=a(5),_=a(24),b=a(4),p=a(38),O=a.n(p).a.create({baseURL:"https://api.giphy.com/v1/gifs/"}),f=function(e){return O.get("random?api_key=".concat("gTJAO48YcpmrADUyo4opy4ES4g7iDBxx","&tag=").concat(e))},h={status:"idle",images:[],responseMessage:"",uniqueTagsNames:[]},x=function(e){return{type:"APP/SET_STATUS",status:e}},T=function(e){return{type:"APP/SET_RESPONSE_MESSAGE",message:e}},v=a(9),S=a.n(v),N=function(e){var t=e.active,a=e.setActive,c=e.text;return Object(n.jsx)("div",{className:t?"".concat(S.a.modal," ").concat(S.a.active):S.a.modal,onClick:function(){return a(!1)},children:Object(n.jsx)("div",{className:t?"".concat(S.a.modalContent," ").concat(S.a.modalContentActive):S.a.modalContent,onClick:function(e){return e.stopPropagation()},children:Object(n.jsx)("p",{className:S.a.text,children:c})})})},A=a(18),E=a.n(A),M=a(22),P=a.n(M),C=i.a.memo((function(e){return Object(n.jsx)("div",{className:P.a.image,children:Object(n.jsx)("img",{className:P.a.img,src:e.image.image_url,onClick:function(){return e.handlerSetTagValueInput(e.image.tag)},alt:e.image.tag})})})),k=i.a.memo((function(e){var t=Object(j.c)((function(e){return e.app.uniqueTagsNames})),a=Object(j.c)((function(e){return e.app.images}));return Object(n.jsx)(n.Fragment,{children:t&&t.map((function(t,c){return Object(n.jsxs)("div",{className:E.a.groupedTags,children:[Object(n.jsx)("h3",{className:E.a.uniqueTag,children:t}),Object(n.jsx)("div",{className:E.a.images,children:a&&a.filter((function(e){return e.tag===t})).map((function(t,a){return Object(n.jsx)(C,{handlerSetTagValueInput:e.handlerSetTagValueInput,image:t},"".concat(t.id," ").concat(a))}))})]},c)}))})})),y=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.app.images})),a=Object(j.c)((function(e){return e.app.status})),i=Object(j.c)((function(e){return e.app.responseMessage})),s=Object(c.useState)(!1),r=Object(l.a)(s,2),o=r[0],u=r[1],g=Object(c.useState)(!1),_=Object(l.a)(g,2),b=_[0],p=_[1],O=Object(d.a)({initialValues:{tag:""},validate:function(e){var t={};return e.tag?/^[a-z,]+$/i.test(e.tag)||(t.tag="\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430"):t.tag="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 '\u0442\u0435\u0433'",t},onSubmit:function(t){var a;e((a=t.tag,function(e){e(x("loading")),f(a).then((function(t){if(0!==t.data.data.length){var n=t.data.data,c=n.id,i=n.image_url;e(function(e,t,a){return{type:"APP/SET_IMAGE",id:e,image_url:t,tag:a}}(c,i,a.toLowerCase())),e(function(e){return{type:"APP/SET_UNIQUE_TAG_NAME",tag:e}}(a.toLowerCase()))}else e(T("\u041f\u043e \u0442\u0435\u0433\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")),setTimeout((function(){return e(T(""))}),3e3)})).catch((function(){e(T("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 http \u043e\u0448\u0438\u0431\u043a\u0430")),setTimeout((function(){return e(T(""))}),3e3)})).finally((function(){e(x("succeeded"))}))}))}}),h=function(e){O.setFieldValue("tag",e)};return Object(n.jsxs)("div",{className:m.a.mainBlock,children:[i?Object(n.jsx)(N,{active:o,setActive:u,text:i}):null,Object(n.jsxs)("div",{className:m.a.mainContainer,children:[Object(n.jsxs)("form",{onSubmit:O.handleSubmit,className:m.a.form,children:[Object(n.jsx)("input",{type:"text",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433",onChange:O.handleChange,name:"tag",value:O.values.tag}),O.errors.tag?Object(n.jsx)(N,{active:o,setActive:u,text:O.errors.tag}):null,Object(n.jsx)("button",{className:m.a.load,value:"send",disabled:"loading"===a,onClick:function(){O.errors&&u(!0),O.handleSubmit()},type:"submit",children:"loading"===a?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),Object(n.jsx)("button",{className:m.a.clear,type:"button",onClick:function(){e({type:"APP/REMOVE_IMAGE"}),O.resetForm()},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),b?Object(n.jsx)("button",{className:m.a.group,type:"button",onClick:function(){return p(!1)},children:"\u0420\u0430\u0437\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}):Object(n.jsx)("button",{className:m.a.group,type:"button",onClick:function(){return p(!0)},children:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),b?Object(n.jsx)(k,{handlerSetTagValueInput:h}):Object(n.jsx)("div",{className:m.a.images,children:t&&t.map((function(e,t){return Object(n.jsx)(C,{handlerSetTagValueInput:h,image:e},"".concat(e.id," ").concat(t))}))})]})]})},I=a(39),G=a.n(I),q=function(){return Object(n.jsx)("div",{className:G.a.header,children:Object(n.jsx)("h1",{children:"Header"})})},V=function(){return Object(n.jsxs)("div",{className:u.a.app,children:[Object(n.jsx)(q,{}),Object(n.jsx)(y,{})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))},F=a(11),w=a(40),B=Object(F.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case"APP/SET_IMAGE":return Object(b.a)(Object(b.a)({},e),{},{images:[].concat(Object(_.a)(e.images),[{id:t.id,image_url:t.image_url,tag:t.tag}])});case"APP/REMOVE_IMAGE":return Object(b.a)(Object(b.a)({},e),{},{images:[],uniqueTagsNames:[]});case"APP/SET_RESPONSE_MESSAGE":return Object(b.a)(Object(b.a)({},e),{},{responseMessage:t.message});case"APP/SET_UNIQUE_TAG_NAME":return e.uniqueTagsNames.length?e.uniqueTagsNames.find((function(e){return e===t.tag}))?e:Object(b.a)(Object(b.a)({},e),{},{uniqueTagsNames:[].concat(Object(_.a)(e.uniqueTagsNames),[t.tag])}):Object(b.a)(Object(b.a)({},e),{},{uniqueTagsNames:[t.tag]});default:return e}}}),R=Object(F.d)(B,Object(F.a)(w.a));window.store=R,r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j.a,{store:R,children:Object(n.jsx)(V,{})})}),document.getElementById("root")),U()},8:function(e,t,a){e.exports={mainBlock:"Main_mainBlock__5aICz",mainContainer:"Main_mainContainer__KoDBs",form:"Main_form__3hcEP",load:"Main_load__2A8OV",clear:"Main_clear__2PnN6",group:"Main_group__3R4OT",images:"Main_images__KzOY_",image:"Main_image__3Nt_z",img:"Main_img__ecFBd"}},9:function(e,t,a){e.exports={modal:"Modal_modal__1kS8s",modalContent:"Modal_modalContent__2GV_h",text:"Modal_text__2r-Su",modalContentActive:"Modal_modalContentActive__3QTwg",active:"Modal_active__IM28W"}}},[[69,1,2]]]);
//# sourceMappingURL=main.1a6b540e.chunk.js.map