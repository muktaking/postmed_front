(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[42],{159:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),c=a(249),l={position:"fixed",top:"45vh",left:"50%",zIndex:"10000000000"};function m(){return r.a.createElement(c.a,{animation:"grow",role:"status",variant:"dark",style:l})}},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(225),r=a.n(n);function c(e,t,a){var n=(t-1)*a;return r()(e).slice(n).take(a).value()}},234:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),c=a(672);function l(e){var t=e.categoryType;return t&&t.map((function(e){return r.a.createElement(c.a,{key:e.name,pill:!0,variant:m(e.name),className:"mr-1"},e.name)}))}var m=function(e){var t="primary";switch(e){case"Featured":t="warning";break;case"Free":t="secondary"}return t}},370:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(153),r=a(0),c=a.n(r),l=a(165),m=a(672),s=a(257),u=a(411),i=a(670),o=a(22),d=a(32),E=a(234),f=a(50),p=a(393),x=a(201),v=a(183);function h(e){var t=e.exam,a=e.courseId,r=void 0===a?null:a,x=Object(o.c)(),v=Object(o.d)((function(e){return!!e.auth.token}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{sm:12},c.a.createElement("h4",{className:""},c.a.createElement("span",{className:""},t.title)),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,c.a.createElement(E.a,{categoryType:t.categoryType.filter((function(e){return"Free"!==e.name}))})),c.a.createElement("div",null,c.a.createElement(m.a,{variant:"dark",className:"px-2 py-1"},Object(p.a)(t.type))))),c.a.createElement(l.a,{sm:12,className:"mt-1"},c.a.createElement("p",{className:""},c.a.createElement(u.a,{size:"1.5rem",className:"m-1"}),c.a.createElement("span",{className:"ml-2"},t.description)),c.a.createElement("hr",null),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(d.Link,{className:"text-white",to:(!v&&t.categoryType.filter((function(e){return"Free"===e.name})).length>0?"/exams/free/":"/exams/")+(r?t.id+"_"+r:t.id)},c.a.createElement(s.a,{variant:"outline-primary",onClick:function(){x(Object(f.j)())}},c.a.createElement(i.a,{id:"btn.start",defaultMessage:"Start Exam"}))),r&&c.a.createElement(d.Link,{className:"text-white",to:"/result/rank/"+r+"_"+t.id},c.a.createElement(s.a,{onClick:function(){x(Object(f.j)())},variant:"outline-primary",className:"ml-2"},c.a.createElement(i.a,{id:"btn.rank",defaultMessage:"Rank"})))),c.a.createElement("hr",null),c.a.createElement("p",{className:"text-center text-muted"},"Start: ",n(t.startDate).fromNow())))}n.extend(v),n.extend(x)},698:function(e,t,a){"use strict";a.r(t);var n=a(136),r=a(28),c=a.n(r),l=a(0),m=a.n(l),s=a(231),u=a(165),i=a(353),o=a.n(i),d=a(17),E=a(159),f=a(187),p=a(370),x=a(145),v=a(178),h=a(358),b=a(257);function g(e){var t=e.setExams,a=e.id,n=[{name:"Assignment",value:0},{name:"Weekly",value:1},{name:"Monthly",value:2},{name:"Assesment",value:3},{name:"Term",value:4},{name:"Test",value:5},{name:"Final",value:6}];return m.a.createElement("div",null,m.a.createElement(v.a,{initialValues:{text:""},onSubmit:function(e,n){n.setSubmitting;var r=e.text,l=Object(x.a)(e,["text"]),m=Object.values(l).map((function(e){return e[0]}));m.length<1&&(m=["0","1","2","3","4","5","6"]),c.a.post("http://localhost:4000/exams/course/"+a,{text:r,examType:m}).then((function(e){t(e.data)})).catch((function(e){console.log(e)}))}},(function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange),r=e.handleBlur,c=e.handleSubmit;e.isSubmitting;return m.a.createElement(h.a,{onSubmit:c},m.a.createElement(h.a.Group,{className:"mb-3",controlId:"formBasicPassword"},m.a.createElement(h.a.Label,null,"Search"),m.a.createElement(h.a.Control,{type:"text",name:"text",placeholder:"e.g. Abcde..",onChange:a,onBlur:r,value:t.text})),m.a.createElement("h4",null,"Select Exam Type"),m.a.createElement("div",{className:"pl-2"},n.map((function(e,t){return m.a.createElement(h.a.Check,{label:e.name,name:e.name,type:"checkbox",onChange:a,onBlur:r,id:e.name,value:e.value})}))),m.a.createElement(b.a,{className:"mt-3",type:"submit"},"Apply"))})))}function y(e){var t=e.courseId,a=void 0===t?null:t,r=Object(l.useState)(null),u=Object(n.a)(r,2),i=u[0],o=u[1];return Object(l.useEffect)((function(){c.a.get("http://localhost:4000/exams/current?courseId="+a).then((function(e){o(e.data)})).catch((function(e){console.log(e)}))}),[]),m.a.createElement(m.a.Fragment,null,m.a.createElement("h3",{className:"text-center"},"Current Exam"),m.a.createElement(s.a,{className:"mx-auto mb-5 py-3 pl-2 border border-secondary",style:{width:"350px"}},i?m.a.createElement(p.a,{exam:i,courseId:a}):m.a.createElement("p",null,"No current exam")))}function N(){var e=Object(d.m)().id,t=Object(l.useState)([]),a=Object(n.a)(t,2),r=a[0],i=a[1],x=Object(l.useState)(!1),v=Object(n.a)(x,2),h=v[0],b=v[1],N=Object(l.useState)(1),j=Object(n.a)(N,2),k=j[0],O=j[1];Object(l.useEffect)((function(){b(!0),c.a.post("http://localhost:4000/exams/course/"+e).then((function(e){b(!1),i(e.data)})).catch((function(e){b(!1),console.log(e)}))}),[e]);var w=Object(f.a)(r,k,5);return m.a.createElement("div",null,h&&m.a.createElement(E.a,null),m.a.createElement(s.a,null,m.a.createElement(u.a,{lg:2},m.a.createElement(g,{setExams:i,id:e})),m.a.createElement(u.a,{lg:10},m.a.createElement(y,{courseId:e}),m.a.createElement("h2",{className:"text-center"},m.a.createElement("span",{className:"mr-2"},"Available Exams")),!h&&m.a.createElement("p",{className:"text-center text-danger"},r.length<1&&"NO Exam is avaiable."),m.a.createElement("div",{className:"d-flex justify-content-center flex-wrap"},w&&w.map((function(t){return m.a.createElement(s.a,{key:t.title,className:"m-2 py-3 pl-2 border border-secondary",style:{width:"350px"}},m.a.createElement(p.a,{exam:t,courseId:e}))}))),m.a.createElement("div",{className:"d-flex justify-content-center mt-3"},m.a.createElement(o.a,{activePage:k,itemsCountPerPage:5,totalItemsCount:r.length,pageRangeDisplayed:2,onChange:function(e){O(e)},itemClass:"page-item",linkClass:"page-link",prevPageText:"Previous",nextPageText:"Next"})))))}a.d(t,"default",(function(){return N}))}}]);
//# sourceMappingURL=42.ccfa07c6.chunk.js.map