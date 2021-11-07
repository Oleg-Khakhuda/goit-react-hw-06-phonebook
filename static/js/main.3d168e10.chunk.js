(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{27:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),i=n(4),l=n(14),u=n(16),s="contact/add",b="contact/delete",d="contact/changeFilter",m=Object(i.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case s:if(t.find((function(t){return t.name===a.name})))alert("".concat(a.name," is already in contacts!"));else{if(!t.find((function(t){return t.number===a.number})))return[].concat(Object(u.a)(t),[a]);alert("".concat(a.number," is already in contacts!"))}case b:return t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return n===d?a:t}}),j=Object(i.combineReducers)({contacts:m}),f=Object(i.createStore)(j,Object(l.composeWithDevTools)()),h=n(2),p=(n(27),n(12)),O=n(30),_=function(t,e){return{type:s,payload:{id:Object(O.a)(),name:t,number:e}}},x=function(t){return{type:b,payload:t}},v=function(t){return{type:d,payload:t}},y=n(3),g=n.n(y),C=n(1),N=Object(h.b)(null,(function(t){return{addNewContact:function(e,n){return t(_(e,n))}}}))((function(t){var e=t.addNewContact,n=Object(a.useState)(""),c=Object(p.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),l=Object(p.a)(i,2),u=l[0],s=l[1],b=Object(O.a)(),d=Object(O.a)(),m=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":s(a);break;default:return}},j=function(){s(""),o("")};return Object(C.jsxs)("form",{className:g.a.form,onSubmit:function(t){t.preventDefault(),e(r,u),j()},children:[Object(C.jsx)("label",{className:g.a.label,htmlFor:b,children:"Name"}),Object(C.jsx)("input",{className:g.a.input,type:"text",value:r,id:b,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m}),Object(C.jsx)("label",{className:g.a.label,htmlFor:d,children:"Number"}),Object(C.jsx)("input",{className:g.a.input,type:"tel",value:u,id:d,name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m}),Object(C.jsx)("button",{className:g.a.button,type:"submit",children:"Add contact"})]})})),F=n(8),w=n.n(F),A=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},k=Object(h.b)((function(t){return{contacts:A(t.contacts.items,t.contacts.filter)}}),(function(t){return{handleDelete:function(e){return t(x(e.target.id))}}}))((function(t){var e=t.contacts,n=t.handleDelete;return Object(C.jsx)("ul",{className:w.a.list,children:e.map((function(t){return Object(C.jsxs)("li",{className:w.a.listItem,children:[t.name,": ",t.number,Object(C.jsx)("button",{className:w.a.deleteButton,type:"button",id:t.id,onClick:n,children:"Delete"})]},t.id)}))})})),z=n(9),B=n.n(z),Z=Object(h.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(v(e.target.value))}}}))((function(t){var e=t.value,n=t.changeFilter,a=Object(O.a)();return Object(C.jsxs)("form",{className:B.a.form,children:[Object(C.jsx)("label",{className:B.a.label,htmlFor:a,children:"Find contacts by name"}),Object(C.jsx)("input",{className:B.a.input,type:"text",value:e,id:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:n})]})})),D=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(N,{}),Object(C.jsx)("h1",{children:"Contacts"}),Object(C.jsx)(Z,{}),Object(C.jsx)(k,{})]})};o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(h.a,{store:f,children:Object(C.jsx)(D,{})})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__1lMXN",input:"ContactForm_input__pYguw",label:"ContactForm_label__1wX2y",button:"ContactForm_button__2EKA9"}},8:function(t,e,n){t.exports={list:"ContactsList_list__Hx9UB",listItem:"ContactsList_listItem__22Ntf",deleteButton:"ContactsList_deleteButton__3l4Ks"}},9:function(t,e,n){t.exports={form:"Filter_form__2XfHX",label:"Filter_label__1kivQ",input:"Filter_input__2qfm0"}}},[[29,1,2]]]);
//# sourceMappingURL=main.3d168e10.chunk.js.map