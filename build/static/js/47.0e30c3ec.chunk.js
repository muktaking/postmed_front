(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[47,49],{137:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={Home:{metaInfo:{title:"Online Exam Platform",description:"Online Exam Platform - participate into exam from anywhere anytime with extensive solve immediately. Question and answer is authentic with help of talented mentor."}},Exams:{metaInfo:{title:"Lists Of Exams",description:"Lists of all available exams. Participate into the exams. Test your skill and find the gap."}},Dashboard:{metaInfo:{title:"Dashboard",description:"Get all contents at one place. Your routine, reports, activity, featured & latest exam and many more."}},Course:{metaInfo:{title:"Course",description:"Enroll for your desire courses and prepare for upcoming exams."}},Reports:{metaInfo:{title:"Reports",description:"In depth reports all of your exam. Take a look and get the gap."}},Profile:{metaInfo:{title:"Profile",description:"Update the profile and get a better user exprience."}},Settings:{metaInfo:{title:"Settings"}},Category:{metaInfo:{title:"CategoryBuilder"}},Question:{metaInfo:{title:"QuestionBuilder"}},CourseBuilder:{metaInfo:{title:"CourseBuilder"}},RoutineBuilder:{metaInfo:{title:"RoutineBuilder"}},ExamBuilder:{metaInfo:{title:"ExamBuilder"}},ExamEdit:{metaInfo:{title:"ExamEdit"}},Login:{metaInfo:{title:"Login",description:"Login to access the app."}},Signup:{metaInfo:{title:"Signup",description:"To use the app fully, You have to signup "}}}},141:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(160),o="yas",i=a(137).a.Home.metaInfo,c=i.title,s=i.description;t.a=function(e){var t=e.meta,a=void 0===t?[]:t,n=e.defer,i=void 0!==n&&n,m=e.lang,u=void 0===m?"en":m,d=e.title,p=void 0===d?c:d,E=e.description,f=void 0===E?s:E;return r.a.createElement(l.b,{defer:i,title:p,htmlAttributes:{lang:u},titleTemplate:"%s | ".concat("MediOnExam"),meta:[{name:"description",content:f},{property:"og:description",content:f},{property:"og:title",content:p},{property:"og:type",content:"website"},{property:"og:image",content:"".concat("https://postmed.rajdoctors.com","/logo.png")},{name:"author",content:o}].concat(a)})}},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(143),r=a(0),l=a.n(r),o=a(670),i=a(322),c=a(323),s=a(324),m=a(325),u=a(326),d=a(327),p=a(328),E=a(329),f=35,h=!0;function x(e){var t=e.title,a=e.description,r=e.url,x=Object(n.a)(e,["title","description","url"]);return r="https://postmed.rajdoctors.com"+r,l.a.createElement("div",Object.assign({className:"mt-3"},x),l.a.createElement(o.a,{variant:"success",className:"mr-1 p-1",style:{fontSize:".8rem"}},"Share on"),l.a.createElement(i.a,{url:r,quote:a,hashtag:t,className:"mr-1"},l.a.createElement(c.a,{size:f,round:h})),l.a.createElement(s.a,{url:r,title:a,hashtag:t,className:"mr-1"},l.a.createElement(m.a,{size:f,round:h})),l.a.createElement(u.a,{url:r,body:a,title:t,className:"mr-1"},l.a.createElement(d.a,{size:f,round:h})),l.a.createElement(p.a,{url:r,source:r,body:a,title:t,className:"mr-1"},l.a.createElement(E.a,{size:f,round:h})))}},330:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(134),r=a(28),l=a.n(r),o=a(149),i=a(0),c=a.n(i),s=a(654),m=a(222),u=a(655),d=a(202),p=a(172),E=a(670),f=a(139),h=a(203),x=a(684),g=a(22),v=a(35),y=a(218),b=a(141),N=a(175),j=a(137),w=a(53),I=a(189),k=a(179);o.extend(k),o.extend(I);var O={position:"fixed",top:"70px",right:"10px",zIndex:100};function C(e){var t=e.landing,a=void 0===t?null:t,r=Object(g.c)(),I=Object(g.d)((function(e){return e.courses})),k=Object(g.d)((function(e){return null!==e.auth.token})),C=Object(i.useState)(null),S=Object(n.a)(C,2),B=S[0],z=S[1],T=Object(i.useState)(null),L=Object(n.a)(T,2),P=L[0],D=L[1],R=I?a?I.courses.filter((function(e,t){return t<3})):I.courses:[];Object(i.useEffect)((function(){r(Object(w.c)())}),[r]);var H=function(){D(null)};return c.a.createElement("div",null,!a&&c.a.createElement(b.a,j.a.Course.metaInfo),c.a.createElement(s.a,{show:P,onHide:H},c.a.createElement(s.a.Header,{closeButton:!0},c.a.createElement(s.a.Title,null,"Details")),c.a.createElement(s.a.Body,null,c.a.createElement(x.a,{remarkPlugins:[y.a]},P)),c.a.createElement(s.a.Footer,null,c.a.createElement(m.a,{variant:"secondary ",onClick:H},"Close"))),c.a.createElement(u.a,{show:B,onClose:function(){z(null)},style:O},c.a.createElement(u.a.Header,{className:"bg-warning text-white"},c.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),c.a.createElement("strong",{className:"me-auto"},"Server Response")),c.a.createElement(u.a.Body,null,B)),c.a.createElement("h3",{className:"text-center heading"},"Available Courses"),a&&c.a.createElement("div",{className:"heading-underline"}),I.loading&&(a?c.a.createElement("div",{className:"text-center"},c.a.createElement("span",null,"Please wait. Courses are loading ")):c.a.createElement(d.a,{animation:"border",role:"status",variant:"dark",className:"content-center"})),c.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},R.map((function(e){return c.a.createElement(p.a,{className:"my-3",style:{width:"350px"}},c.a.createElement(h.LazyLoadComponent,null,c.a.createElement(p.a.Img,{variant:"top",src:e.imageUrl?"".concat("https://postmed.v1.backend.rajdoctors.com","/").concat(e.imageUrl):"".concat("https://postmed.v1.backend.rajdoctors.com","/images/courses/index.png")})),c.a.createElement(p.a.Body,null,c.a.createElement(p.a.Title,{style:{fontSize:"1.4rem",fontWeight:"900"}},e.title),c.a.createElement(p.a.Text,null,c.a.createElement(x.a,{remarkPlugins:[y.a]},e.description.substring(0,250)+" ..."),c.a.createElement("p",{className:"text-center"},c.a.createElement(m.a,{variant:"outline-primary",onClick:function(){D(e.description)}},"More"))),c.a.createElement(p.a.Text,{className:"d-flex justify-content-between"},c.a.createElement("div",null,c.a.createElement(f.I,{size:"1.5rem"})," ",c.a.createElement("span",{className:"bg-info text-white px-3 py-1"},e.price?e.price+" Taka":"Free")),c.a.createElement("div",null,c.a.createElement(f.h,{size:"1.5rem"})," ",c.a.createElement("span",{className:"bg-secondary text-white px-3 py-1"},o.duration(o(e.endDate).diff(e.startDate)).humanize()))),k&&c.a.createElement(p.a.Text,{className:"text-center mt-2"},c.a.createElement(v.Link,{to:"/exams/courses/"+e.id},c.a.createElement(m.a,{variant:"primary"},"Go to Exams"))),c.a.createElement("hr",null),k?c.a.createElement(m.a,{variant:"primary",style:{width:"320px",height:"55px",fontSize:"18px"},onClick:function(){l()({baseURL:"https://postmed.v1.backend.rajdoctors.com",url:"/courses/enroll/"+e.id,method:"patch"}).then((function(e){z(e.data.message)})).catch((function(e){z("Sorry. Enrollment to this course is not possible due to server error. Please contact with admin.")}))}},"Enroll"):c.a.createElement(E.a,{variant:"warning",className:"p-2"},"Please Login to Enroll."),c.a.createElement("hr",null),c.a.createElement(p.a.Text,{className:"text-muted text-center"},c.a.createElement("span",null,"Start: ",o(e.startDate).fromNow()))),c.a.createElement(p.a.Footer,null,c.a.createElement(N.a,{title:e.title,description:e.description,url:""})))}))))}},678:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(149),r=a(0),l=a.n(r),o=a(670),i=a(22),c=a(35),s=a(141),m=a(137),u=a(53),d=a(330);function p(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.courses}));return Object(r.useEffect)((function(){e(Object(u.b)())}),[e]),l.a.createElement("div",{className:""},l.a.createElement("h2",{className:"text-center"},"Enrolled Courses"),l.a.createElement("div",{className:"m-3 d-flex justify-content-around flex-wrap"},t.coursesEnrolledByStu.length<1?l.a.createElement("div",null,l.a.createElement("p",{className:"text-center text-danger"}," ","You have not enrolled for any course yet. Please enroll for course first."),l.a.createElement(d.default,null)):t.coursesEnrolledByStu.map((function(e){return l.a.createElement("div",{className:"mt-3 mr-3 px-5 pt-5 pb-3 bg-dark text-white"},l.a.createElement("h4",null,e.title),l.a.createElement("p",{className:"mt-5 text-center"},n().isAfter(e.endDate)?l.a.createElement(o.a,{variant:"danger",className:"p-3"},"This Course is ended"):l.a.createElement(c.Link,{to:"/exams/courses/"+e.id},l.a.createElement(o.a,{variant:"light",className:"p-3"},"Go to Exams"))))}))),l.a.createElement(s.a,m.a.Exams.metaInfo))}}}]);
//# sourceMappingURL=47.0e30c3ec.chunk.js.map