(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[46],{154:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),c=a(202),l={position:"fixed",top:"45vh",left:"50%",zIndex:"10000000000"};function m(){return r.a.createElement(c.a,{animation:"grow",role:"status",variant:"dark",style:l})}},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(167),r=a.n(n);function c(e,t,a){var n=(t-1)*a;return r()(e).slice(n).take(a).value()}},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),c=a(670);function l(e){var t=e.categoryType;return t&&t.map((function(e){return r.a.createElement(c.a,{key:e.name,pill:!0,variant:m(e.name),className:"mr-1"},e.name)}))}var m=function(e){var t="primary";switch(e){case"Featured":t="warning";break;case"Free":t="secondary"}return t}},294:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(149),r=a(0),c=a.n(r),l=a(165),m=a(670),s=a(222),u=a(391),i=a(668),o=a(22),d=a(35),E=a(188),f=a(50),p=a(315),v=a(189),x=a(179);function b(e){var t=e.exam,a=e.courseId,r=void 0===a?null:a,v=Object(o.c)(),x=Object(o.d)((function(e){return!!e.auth.token}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{sm:12},c.a.createElement("h4",{className:""},c.a.createElement("span",{className:""},t.title)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,c.a.createElement(E.a,{categoryType:t.categoryType.filter((function(e){return"Free"!==e.name}))})),c.a.createElement("div",null,c.a.createElement(m.a,{variant:"dark",className:"px-2 py-1"},Object(p.a)(t.type))))),c.a.createElement(l.a,{sm:12,className:"mt-1"},c.a.createElement("p",{className:""},c.a.createElement(u.a,{size:"1.5rem",className:"m-1"}),c.a.createElement("span",{className:"ml-2"},t.description)),c.a.createElement("p",{className:"text-right"},"End on:"," ",c.a.createElement(m.a,{className:"ml-2",variant:"danger"},n(t.endDate).format("DD-MMM-YYYY hh:mm A"))),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement(d.Link,{className:"text-white",to:(!x&&t.categoryType.filter((function(e){return"Free"===e.name})).length>0?"/exams/free/":"/exams/")+(r?t.id+"_"+r:t.id)},c.a.createElement(s.a,{variant:"outline-primary",onClick:function(){v(Object(f.j)())}},c.a.createElement(i.a,{id:"btn.start",defaultMessage:"Start Exam"}))),c.a.createElement(d.Link,{className:"text-white",to:"/result/rank/"+(r?r+"_"+t.id:t.id)},c.a.createElement(s.a,{onClick:function(){v(Object(f.j)())},variant:"outline-primary",className:"ml-2"},c.a.createElement(i.a,{id:"btn.rank",defaultMessage:"Rank"})))),c.a.createElement("hr",null),c.a.createElement("p",{className:"text-center text-muted"},"Start: ",n(t.startDate).fromNow())))}n.extend(x),n.extend(v)},695:function(e,t,a){"use strict";a.r(t);var n=a(134),r=a(28),c=a.n(r),l=a(0),m=a.n(l),s=a(214),u=a(165),i=a(270),o=a.n(i),d=a(17),E=a(154),f=a(180),p=a(294),v=a(143),x=a(171),b=a(276),h=a(222);function g(e){var t=e.setExams,a=e.id,n=[{name:"Assignment",value:0},{name:"Weekly",value:1},{name:"Monthly",value:2},{name:"Assesment",value:3},{name:"Term",value:4},{name:"Test",value:5},{name:"Final",value:6}];return m.a.createElement("div",null,m.a.createElement(x.a,{initialValues:{text:""},onSubmit:function(e,n){n.setSubmitting;var r=e.text,l=Object(v.a)(e,["text"]),m=Object.values(l).map((function(e){return e[0]}));m.length<1&&(m=["0","1","2","3","4","5","6"]),c.a.post("https://postmed.v1.backend.rajdoctors.com/exams/course/"+a,{text:r,examType:m}).then((function(e){t(e.data)})).catch((function(e){console.log(e)}))}},(function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange),r=e.handleBlur,c=e.handleSubmit;e.isSubmitting;return m.a.createElement(b.a,{onSubmit:c},m.a.createElement(b.a.Group,{className:"mb-3",controlId:"formBasicPassword"},m.a.createElement(b.a.Label,null,"Search"),m.a.createElement(b.a.Control,{type:"text",name:"text",placeholder:"e.g. Abcde..",onChange:a,onBlur:r,value:t.text})),m.a.createElement("h4",null,"Select Exam Type"),m.a.createElement("div",{className:"pl-2"},n.map((function(e,t){return m.a.createElement(b.a.Check,{label:e.name,name:e.name,type:"checkbox",onChange:a,onBlur:r,id:e.name,value:e.value})}))),m.a.createElement(h.a,{className:"mt-3",type:"submit"},"Apply"))})))}function y(e){var t=e.courseId,a=void 0===t?null:t,r=Object(l.useState)(null),u=Object(n.a)(r,2),i=u[0],o=u[1];return Object(l.useEffect)((function(){c.a.get("https://postmed.v1.backend.rajdoctors.com/exams/current").then((function(e){o(e.data)})).catch((function(e){console.log(e)}))}),[]),m.a.createElement(m.a.Fragment,null,m.a.createElement("h3",{className:"text-center"},"Current Exam"),m.a.createElement(s.a,{className:"mx-auto mb-5 py-3 pl-2 border border-secondary",style:{width:"350px"}},i?m.a.createElement(p.a,{exam:i,courseId:a}):m.a.createElement("p",null,"No current exam")))}function N(){var e=Object(d.m)().id,t=Object(l.useState)([]),a=Object(n.a)(t,2),r=a[0],i=a[1],v=Object(l.useState)(!1),x=Object(n.a)(v,2),b=x[0],h=x[1],N=Object(l.useState)(1),j=Object(n.a)(N,2),k=j[0],O=j[1];Object(l.useEffect)((function(){h(!0),c.a.post("https://postmed.v1.backend.rajdoctors.com/exams/course/"+e).then((function(e){h(!1),i(e.data)})).catch((function(e){h(!1),console.log(e)}))}),[e]);var w=Object(f.a)(r,k,5);return m.a.createElement("div",null,b&&m.a.createElement(E.a,null),m.a.createElement(s.a,null,m.a.createElement(u.a,{lg:2},m.a.createElement(g,{setExams:i,id:e})),m.a.createElement(u.a,{lg:10},m.a.createElement(y,{courseId:e}),m.a.createElement("h2",{className:"text-center"},m.a.createElement("span",{className:"mr-2"},"Available Exams")),!b&&m.a.createElement("p",{className:"text-center text-danger"},r.length<1&&"NO Exam is avaiable."),m.a.createElement("div",{className:"d-flex justify-content-center flex-wrap"},w&&w.map((function(t){return m.a.createElement(s.a,{key:t.title,className:"m-2 py-3 pl-2 border border-secondary",style:{width:"350px"}},m.a.createElement(p.a,{exam:t,courseId:e}))}))),m.a.createElement("div",{className:"d-flex justify-content-center mt-3"},m.a.createElement(o.a,{activePage:k,itemsCountPerPage:5,totalItemsCount:r.length,pageRangeDisplayed:2,onChange:function(e){O(e)},itemClass:"page-item",linkClass:"page-link",prevPageText:"Previous",nextPageText:"Next"})))))}a.d(t,"default",(function(){return N}))}}]);
//# sourceMappingURL=46.5ddb76bd.chunk.js.map