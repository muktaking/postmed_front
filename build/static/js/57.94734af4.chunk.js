(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[57],{310:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(132),l=a(28),r=a.n(l),c=a(146),s=a(0),o=a.n(s),i=a(694),m=a(237),u=a(749),d=a(284),E=a(716),p=a(136),x=a(188),f=a(745),h=a(22),g=a(32),b=a(191),v=a(147),y=a(238),N=a(148),w=a(204),j=a(141),k=a(50),O=a(195),C=a(189);c.extend(C),c.extend(O);var z={position:"fixed",top:"70px",right:"10px",zIndex:100};function L(e){var t=e.landing,a=void 0===t?null:t,l=Object(h.c)(),O=Object(h.d)((function(e){return e.courses})),C=Object(h.d)((function(e){return null!==e.auth.token})),L=Object(s.useState)(!1),S=Object(n.a)(L,2),T=S[0],P=S[1],B=Object(s.useState)(null),D=Object(n.a)(B,2),F=D[0],I=D[1],H=Object(s.useState)(null),R=Object(n.a)(H,2),U=R[0],J=R[1],M=O?a?O.courses.filter((function(e,t){return t<3})):O.courses:[];Object(s.useEffect)((function(){l(Object(k.a)()),l(Object(k.d)())}),[l]);var _=function(){J(null)};return o.a.createElement("div",null,!a&&o.a.createElement(N.a,j.a.Course.metaInfo),o.a.createElement(i.a,{show:U,onHide:_},o.a.createElement(i.a.Header,{closeButton:!0},o.a.createElement(i.a.Title,null,"Details")),o.a.createElement(i.a.Body,null,o.a.createElement(f.a,{remarkPlugins:[b.a]},U)),o.a.createElement(i.a.Footer,null,o.a.createElement(m.a,{variant:"secondary ",onClick:_},"Close"))),o.a.createElement(u.a,{show:F,onClose:function(){I(null)},style:z},o.a.createElement(u.a.Header,{className:"bg-warning text-white"},o.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),o.a.createElement("strong",{className:"me-auto"},"Server Response")),o.a.createElement(u.a.Body,null,F)),o.a.createElement("h3",{className:"text-center heading"},"Available Courses"),a&&o.a.createElement("div",{className:"heading-underline"}),T&&o.a.createElement(v.a,null),O.loading&&(a?o.a.createElement("div",{className:"text-center"},o.a.createElement("span",null,"Please wait. Courses are "),o.a.createElement(y.a,null)):o.a.createElement(v.a,null)),o.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},O.error?o.a.createElement("p",{className:"text-danger"},o.a.createElement("span",null,"Courses can not be retrived."),!a&&o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",null),o.a.createElement("span",null,"Possible Reason: ",O.error)," ")):M.map((function(e){return o.a.createElement(d.a,{className:"my-3",style:{width:"350px"}},o.a.createElement(x.LazyLoadComponent,null,o.a.createElement(d.a.Img,{variant:"top",src:e.imageUrl?"".concat("https://backend.medionexam.com","/").concat(e.imageUrl):"".concat("https://backend.medionexam.com","/images/courses/index.png")})),o.a.createElement(d.a.Body,null,o.a.createElement(g.Link,{to:"/courses/".concat(e.id)},o.a.createElement(d.a.Title,{style:{fontSize:"1.4rem",fontWeight:"900"}},e.title)),o.a.createElement(d.a.Text,null,o.a.createElement(f.a,{remarkPlugins:[b.a]},e.description.substring(0,250)+" ..."),o.a.createElement("p",{className:"text-center"},o.a.createElement(m.a,{variant:"outline-primary",onClick:function(){J(e.description)}},"More"))),o.a.createElement(d.a.Text,{className:"d-flex justify-content-between"},o.a.createElement("div",null,o.a.createElement(p.I,{size:"1.5rem"})," ",o.a.createElement("span",{className:"bg-info text-white px-3 py-1"},e.price?e.price+" Taka":"Free")),o.a.createElement("div",null,o.a.createElement(p.i,{size:"1.5rem"})," ",o.a.createElement("span",{className:"bg-secondary text-white px-3 py-1"},c.duration(c(e.endDate).diff(e.startDate)).humanize()+" long."))),o.a.createElement(d.a.Text,{className:"text-center mt-2"},o.a.createElement(g.Link,{to:"/exams/courses/"+e.id},o.a.createElement(m.a,{variant:"primary"},"Go to Exams"))),o.a.createElement("hr",null),o.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},C?o.a.createElement(m.a,{variant:"primary",style:{width:"300px",height:"55px",fontSize:"18px"},onClick:function(){P(!0),r()({baseURL:"https://backend.medionexam.com",url:"/courses/enroll/"+e.id,method:"patch"}).then((function(e){P(!1),I(e.data.message)})).catch((function(e){P(!1),I("Sorry. Enrollment to this course is not possible due to server error. Please contact with admin.")}))}},"Enroll"):o.a.createElement(g.Link,{to:"/login"},o.a.createElement(E.a,{variant:"warning",className:"p-2"},"Please Login to Enroll."))),o.a.createElement("hr",null),o.a.createElement(d.a.Text,{className:"text-muted text-center"},o.a.createElement("span",null,"Start: ",c(e.startDate).fromNow()))),o.a.createElement(d.a.Footer,null,o.a.createElement(w.a,{title:e.title,description:e.description,url:""})))}))),a&&O.courses.length>3&&o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(g.Link,{to:"/courses"},o.a.createElement(m.a,{variant:"warning",size:"xl",className:"text-white"},"More Ongoing Courses..."))))}}}]);
//# sourceMappingURL=57.94734af4.chunk.js.map