(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[42],{145:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(10);function l(e,t){if(null==e)return{};var a,l,r=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)a=c[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),l=a.n(n),r=a(209),c={position:"fixed",top:"45vh",left:"50%",zIndex:"10000000000"};function s(){return l.a.createElement(r.a,{animation:"grow",role:"status",variant:"dark",style:c})}},219:function(e,t,a){"use strict";var n=a(5),l=a(10),r=a(127),c=a.n(r),s=a(0),o=a.n(s),u=a(128),i=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,s=e.pill,i=e.className,m=e.as,d=void 0===m?"span":m,f=Object(l.a)(e,["bsPrefix","variant","pill","className","as"]),b=Object(u.b)(a,"badge");return o.a.createElement(d,Object(n.a)({ref:t},f,{className:c()(i,b,s&&b+"-pill",r&&b+"-"+r)}))}));i.displayName="Badge",i.defaultProps={pill:!1},t.a=i},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(133),l=a(145),r=a(27),c=a.n(r),s=a(0),o=a.n(s),u=a(650),i=a(299),m=a(217),d=a(204),f=a.n(d),b=(a(203),a(140)),E=a(158);function p(e){var t=e.defaultValue,a=void 0===t?[]:t,r=(Object(l.a)(e,["defaultValue"]),Object(s.useState)(!1)),d=Object(n.a)(r,2),p=d[0],h=d[1],v=Object(s.useState)(null),g=Object(n.a)(v,2),y=g[0],O=g[1],j=Object(s.useState)(new Date),w=Object(n.a)(j,2),D=w[0],x=w[1],S=Object(s.useState)(new Date),M=Object(n.a)(S,2),N=M[0],k=M[1],Y=Object(s.useState)([]),C=Object(n.a)(Y,2),R=C[0],T=C[1],P=Object(s.useRef)(),F=Object(s.useRef)();return Object(s.useEffect)((function(){c.a.get("https://backend.exam.p2abd.com/courses/auth").then((function(e){T(e.data)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("div",null,p&&o.a.createElement(E.a,null),o.a.createElement(u.a,{show:y,onClose:function(){O(null)},style:{position:"absolute"}},o.a.createElement(u.a.Header,null,o.a.createElement("strong",{className:"mr-auto"},"Message")),o.a.createElement(u.a.Body,null,y)),o.a.createElement("h4",null,"Routine Builder"),o.a.createElement("div",{className:"d-flex"},o.a.createElement("div",{className:"my-3 mr-5"},o.a.createElement("p",null,"Start Date"),o.a.createElement(f.a,{selected:a.length>0?a[1]:D,onChange:function(e){a.length>0&&(a[1]=e),x(e)},showTimeSelect:!0,minDate:new Date,dateFormat:"yyyy-MMM-dd, hh:mm a"}),o.a.createElement(b.H,{size:"1.7rem"})),o.a.createElement("div",{className:"my-3"},o.a.createElement("p",null,"End Date"),o.a.createElement(f.a,{selected:a.length>0?a[2]:N,onChange:function(e){a.length>0&&(a[2]=e),k(e)},showTimeSelect:!0,minDate:new Date,dateFormat:"yyyy-MMM-dd, hh:mm a"}),o.a.createElement(b.H,{size:"1.7rem"}))),o.a.createElement(i.a.Group,{controlId:"exampleForm.ControlTextarea1"},o.a.createElement(i.a.Label,null,"Syllabus"),o.a.createElement(i.a.Control,{as:"textarea",ref:P,rows:2,defaultValue:a.length>0?a[3]:""})),o.a.createElement(i.a.Group,{controlId:"exampleForm.ControlSelect1"},o.a.createElement(i.a.Label,null,"Select A Course"),o.a.createElement(i.a.Control,{as:"select",ref:F,value:a.length>0?a[4]:""},R.map((function(e){return o.a.createElement("option",{value:e.id},e.title)})))),o.a.createElement(m.a,{variant:"primary",onClick:function(){h(!0),a.length>0?c.a.put("https://backend.exam.p2abd.com/routine",{id:a[0],startDate:a[1],endDate:a[2],syllabus:P.current.value,courseId:F.current.value}).then((function(e){h(!1),O(e.data.message)})).catch((function(e){h(!1),O(e.message)})):c.a.post("https://backend.exam.p2abd.com/routine",{startDate:D,endDate:N,syllabus:P.current.value,courseId:F.current.value}).then((function(e){h(!1),O(e.data.message)})).catch((function(e){h(!1),O(e.message)}))}},"Submit"))}},287:function(e,t,a){"use strict";var n=a(5),l=a(10),r=a(127),c=a.n(r),s=a(0),o=a.n(s),u=a(128),i=o.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.striped,i=e.bordered,m=e.borderless,d=e.hover,f=e.size,b=e.variant,E=e.responsive,p=Object(l.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(u.b)(a,"table"),v=c()(r,h,b&&h+"-"+b,f&&h+"-"+f,s&&h+"-striped",i&&h+"-bordered",m&&h+"-borderless",d&&h+"-hover"),g=o.a.createElement("table",Object(n.a)({},p,{className:v,ref:t}));if(E){var y=h+"-responsive";return"string"===typeof E&&(y=y+"-"+E),o.a.createElement("div",{className:y},g)}return g}));t.a=i},301:function(e,t,a){"use strict";var n=a(133),l=a(27),r=a.n(l),c=a(0),s=a.n(c),o=a(649),u=a(217),i=a(650),m=a(651),d=a(555),f=a(292),b=a(34),E=a(256),p=a(145),h=a(155),v=a(436),g=a(219),y=a(250),O=s.a.forwardRef((function(e,t){var a=e.id,n=e.setMsg,l=Object(p.a)(e,["id","setMsg"]);return s.a.createElement(v.a,Object.assign({ref:t,id:"button-tooltip"},l),s.a.createElement("p",null,"Are you sure to delete this syllabus."),s.a.createElement(u.a,{variant:"danger",onClick:function(){r.a.delete("https://backend.exam.p2abd.com/routine/"+a).then((function(e){console.log(e),n(e.data.message)})).catch((function(e){console.log(e),n(e.message)}))}},"Yes"))}));function j(e){var t=e.syllabus,a=(e.ind,e.showRaw),n=e.getStatus,l=e.setShowModal,r=e.setEditSyllabusValue,c=e.setMsg;return s.a.createElement("li",{key:t.id,className:"event","data-date":h(t.startDate).format("DD-MMM-YYYY, h:mm a")},s.a.createElement("p",null,t.syllabus),s.a.createElement("p",{className:"text-danger"},s.a.createElement(g.a,{variant:"info",className:"mr-2"},"Status:"," "),n(t.startDate,t.endDate)),s.a.createElement("p",{className:"text-secondary"},"Exam ends: ",h(t.endDate).format("DD-MMM-YYYY, h:mm a")),a&&s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{variant:"warning",onClick:function(){l(!0),r([t.id,new Date(t.startDate),new Date(t.endDate),t.syllabus,t.courseId])}},"Edit"),s.a.createElement(y.a,{trigger:"click",placement:"right",overlay:s.a.createElement(O,{setMsg:c,id:t.id})},s.a.createElement(u.a,{variant:"danger",className:"ml-2"},"Delete"))))}function w(e,t){var a=new Date,n=new Date(e),l=new Date(t);return n.getTime()<=a.getTime()&&l.getTime()>=a.getTime()?"Ongoing":l.getTime()<=a.getTime()?"Past":"Upcoming"}function D(e){var t=e.showRaw,a=e.id,l=e.title,p=Object(c.useState)([]),h=Object(n.a)(p,2),v=h[0],g=h[1],y=Object(c.useState)(!1),O=Object(n.a)(y,2),D=O[0],x=O[1],S=Object(c.useState)(null),M=Object(n.a)(S,2),N=M[0],k=M[1],Y=Object(c.useState)([]),C=Object(n.a)(Y,2),R=C[0],T=C[1],P=Object(c.useState)([]),F=Object(n.a)(P,2),I=F[0],H=F[1],V=function(){x(!1)};return Object(c.useEffect)((function(){r.a.get("https://backend.exam.p2abd.com/courses/").then((function(e){H(e.data)})).catch((function(e){return console.log(e)})),r.a.get("https://backend.exam.p2abd.com/routine"+(t?"/raw":"/course/"+a)).then((function(e){g(e.data)})).catch()}),[t]),s.a.createElement("div",{className:"container"},s.a.createElement(o.a,{show:D,onHide:V},s.a.createElement(o.a.Header,{closeButton:!0},s.a.createElement(o.a.Title,null,"Edit The Syllabus")),s.a.createElement(o.a.Body,null,s.a.createElement(E.a,{defaultValue:R})),s.a.createElement(o.a.Footer,null,s.a.createElement(u.a,{variant:"secondary",onClick:V},"Close"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},t&&s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{show:N,onClose:function(){k(null)},style:{position:"absolute",right:"10px",top:"10px"}},s.a.createElement(i.a.Header,null,s.a.createElement("strong",{className:"mr-auto"},"Message")),s.a.createElement(i.a.Body,null,N)),s.a.createElement("h4",{className:"card-title"},"Raw Routine"),s.a.createElement(u.a,{variant:"light",onClick:function(){r.a.get("https://backend.exam.p2abd.com/routine/raw").then((function(e){g(e.data)})).catch()}},s.a.createElement(f.a,{size:"1.3rem"}))),s.a.createElement("div",{id:"content",style:{maxHeight:"350px",overflowY:"scroll"}}," ",t?s.a.createElement(m.a,{defaultActiveKey:"0",id:"uncontrolled-tab-example"},I.map((function(e,a){return s.a.createElement(d.a,{eventKey:a,title:e.title},s.a.createElement("ul",{className:"timeline mt-3"},v.filter((function(t){return t.courseId===e.id})).map((function(e){return s.a.createElement(j,{syllabus:e,showRaw:t,getStatus:w,setShowModal:x,setEditSyllabusValue:T,setMsg:k})}))))}))):s.a.createElement("div",null,s.a.createElement("ul",{className:"timeline"},v.map((function(e){return s.a.createElement(j,{key:e.id,syllabus:e,showRaw:t,getStatus:w,setShowModal:x,setEditSyllabusValue:T,setMsg:k})}))),s.a.createElement(b.Link,{to:{pathname:"/print",state:{fromRoutine:!0,routine:v,title:l}},style:{position:"absolute",bottom:"-15px",right:"50px"}},s.a.createElement(u.a,null,"Details")))))))))}a.d(t,"b",(function(){return w})),a.d(t,"a",(function(){return D}))},690:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(0),r=a.n(l),c=a(217),s=a(18),o=a(155),u=a(287),i=a(301);function m(e){var t=e.routine,a=e.title;return r.a.createElement("div",null,r.a.createElement("h3",{className:"text-primary text-center"},"Routine For: ",a),r.a.createElement(u.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,["#","Topics","Status","Start Date","End Date"].map((function(e){return r.a.createElement("th",null,e)})))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.syllabus),r.a.createElement("td",null,Object(i.b)(e.startDate,e.endDate)),r.a.createElement("td",null,o(e.startDate).format("DD-MMM-YYYY, h:mm a")),r.a.createElement("td",null,o(e.endDate).format("DD-MMM-YYYY, h:mm a")))})))))}function d(e){Object(n.a)({},e);var t=Object(s.l)();return r.a.createElement("div",{className:"pt-3"},r.a.createElement(c.a,null,"Print this"),r.a.createElement(c.a,{className:"ml-2"},"Save as Pdf"),t.state&&t.state.fromRoutine&&r.a.createElement(m,{routine:t.state.routine,title:t.state.title}))}a.d(t,"default",(function(){return d}))}}]);
//# sourceMappingURL=42.43ebe462.chunk.js.map