(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[52],{158:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),c=t(186),l={position:"fixed",top:"45vh",left:"50%",zIndex:"10000000000"};function s(){return r.a.createElement(c.a,{animation:"grow",role:"status",variant:"dark",style:l})}},227:function(e,a,t){"use strict";var n=t(5),r=t(10),c=t(128),l=t.n(c),s=t(0),m=t.n(s),i=t(129),o=m.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,s=e.pill,o=e.className,u=e.as,d=void 0===u?"span":u,f=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),E=Object(i.b)(t,"badge");return m.a.createElement(d,Object(n.a)({ref:a},f,{className:l()(o,E,s&&E+"-pill",c&&E+"-"+c)}))}));o.displayName="Badge",o.defaultProps={pill:!1},a.a=o},335:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(150),r=t(0),c=t.n(r),l=t(173),s=t(227),m=t(241),i=t(363),o=t(454),u=t(22),d=t(34),f=t(49),E=t(355);function p(e){var a=e.exam,t=e.courseId,r=void 0===t?null:t,p=Object(u.c)(),v=Object(u.d)((function(e){return!!e.auth.token}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{sm:12},c.a.createElement("h4",{className:""},c.a.createElement("span",{className:""},a.title)),c.a.createElement("div",null,c.a.createElement(s.a,{variant:"warning",className:"px-2 py-1"},Object(E.a)(a.type))),c.a.createElement("div",{className:""},c.a.createElement("span",null,"Start on: "),c.a.createElement(s.a,{className:"",variant:"light"},n(a.startDate).format("YYYY-MMM-DD hh:mm A")))),c.a.createElement(l.a,{sm:12,className:"mt-1"},c.a.createElement("p",{className:""},c.a.createElement(i.a,{size:"1.5rem",className:"m-1"}),c.a.createElement("span",{className:"ml-2"},a.description)),c.a.createElement("p",{className:"text-right"},"Ends on:"," ",c.a.createElement(s.a,{className:"ml-2",variant:"danger"},n(a.endDate).format("YYYY-MMM-DD hh:mm A"))),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement(d.Link,{className:"text-white",to:(!v&&a.categoryType.filter((function(e){return"Free"===e.name})).length>0?"/exams/free/":"/exams/")+(r?a.id+"_"+r:a.id)},c.a.createElement(m.a,{variant:"outline-primary",onClick:function(){p(Object(f.j)())}},c.a.createElement(o.a,{id:"btn.start",defaultMessage:"Start Exam"}))),c.a.createElement(d.Link,{className:"text-white",to:"/result/rank/"+(r?r+"_"+a.id:a.id)},c.a.createElement(m.a,{onClick:function(){p(Object(f.j)())},variant:"outline-primary",className:"ml-2"},c.a.createElement(o.a,{id:"btn.rank",defaultMessage:"Rank"}))))))}},670:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(134),r=t(27),c=t.n(r),l=t(0),s=t.n(l),m=t(227),i=t(233),o=t(18),u=t(158),d=t(335);function f(){var e=Object(o.m)().id,a=null,t=null;if(e){var r=e.split("-"),f=Object(n.a)(r,2);a=f[0],t=f[1]}var E=Object(l.useState)([]),p=Object(n.a)(E,2),v=p[0],b=p[1],N=Object(l.useState)(!1),h=Object(n.a)(N,2),x=h[0],j=h[1];return Object(l.useEffect)((function(){j(!0),c.a.get("https://postmed.v1.backend.rajdoctors.com/exams/category/"+t).then((function(e){j(!1),b(e.data)})).catch((function(e){j(!1),console.log(e)}))}),[t]),s.a.createElement("div",{className:"mt-5"},x&&s.a.createElement(u.a,null),s.a.createElement("h2",{className:"text-center"},s.a.createElement("span",{className:"mr-2"},"Available Exams Under"),s.a.createElement(m.a,{variant:"warning"},a)),!x&&s.a.createElement("p",{className:"text-center text-danger"},v.length<1&&"NO Exam is avaiable."),s.a.createElement("div",{className:"d-flex justify-content-center flex-wrap"},v.map((function(e){return s.a.createElement(i.a,{key:e.title,className:"m-2 py-3 pl-2 border border-secondary",style:{width:"350px"}},s.a.createElement(d.a,{exam:e}))}))))}}}]);
//# sourceMappingURL=52.0847f480.chunk.js.map