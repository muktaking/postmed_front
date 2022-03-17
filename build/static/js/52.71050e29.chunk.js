(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[52],{136:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={Home:{metaInfo:{title:"Online Exam Platform",description:"Online Exam Platform - participate into exam from anywhere anytime with extensive solve immediately. Question and answer is authentic with help of talented mentor."}},Exams:{metaInfo:{title:"Lists Of Exams",description:"Lists of all available exams. Participate into the exams. Test your skill and find the gap."}},Dashboard:{metaInfo:{title:"Dashboard",description:"Get all contents at one place. Your routine, reports, activity, featured & latest exam and many more."}},Course:{metaInfo:{title:"Course",description:"Enroll for your desire courses and prepare for upcoming exams."}},Reports:{metaInfo:{title:"Reports",description:"In depth reports all of your exam. Take a look and get the gap."}},Profile:{metaInfo:{title:"Profile",description:"Update the profile and get a better user exprience."}},Settings:{metaInfo:{title:"Settings"}},Category:{metaInfo:{title:"CategoryBuilder"}},Question:{metaInfo:{title:"QuestionBuilder"}},CourseBuilder:{metaInfo:{title:"CourseBuilder"}},RoutineBuilder:{metaInfo:{title:"RoutineBuilder"}},ExamBuilder:{metaInfo:{title:"ExamBuilder"}},ExamEdit:{metaInfo:{title:"ExamEdit"}},Login:{metaInfo:{title:"Login",description:"Login to access the app."}},Signup:{metaInfo:{title:"Signup",description:"To use the app fully, You have to signup "}}}},142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(169),i="yas",o=a(136).a.Home.metaInfo,s=o.title,c=o.description;t.a=function(e){var t=e.meta,a=void 0===t?[]:t,n=e.defer,o=void 0!==n&&n,m=e.lang,u=void 0===m?"en":m,d=e.title,p=void 0===d?s:d,f=e.description,E=void 0===f?c:f;return r.a.createElement(l.b,{defer:o,title:p,htmlAttributes:{lang:u},titleTemplate:"%s | ".concat("ExamA+"),meta:[{name:"description",content:E},{property:"og:description",content:E},{property:"og:title",content:p},{property:"og:type",content:"website"},{property:"og:image",content:"".concat("https://exam.p2abd.com","/logo.png")},{name:"author",content:i}].concat(a)})}},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(145),r=a(0),l=a.n(r),i=a(219),o=a(261),s=a(262),c=a(263),m=a(264),u=a(265),d=a(266),p=a(267),f=a(268),E=35,x=!0;function h(e){var t=e.title,a=e.description,r=e.url,h=Object(n.a)(e,["title","description","url"]);return r="https://exam.p2abd.com"+r,l.a.createElement("div",Object.assign({className:"mt-3"},h),l.a.createElement(i.a,{variant:"success",className:"mr-1 p-1",style:{fontSize:".8rem"}},"Share on"),l.a.createElement(o.a,{url:r,quote:a,hashtag:t,className:"mr-1"},l.a.createElement(s.a,{size:E,round:x})),l.a.createElement(c.a,{url:r,title:a,hashtag:t,className:"mr-1"},l.a.createElement(m.a,{size:E,round:x})),l.a.createElement(u.a,{url:r,body:a,title:t,className:"mr-1"},l.a.createElement(d.a,{size:E,round:x})),l.a.createElement(p.a,{url:r,source:r,body:a,title:t,className:"mr-1"},l.a.createElement(f.a,{size:E,round:x})))}},335:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(133),r=a(27),l=a.n(r),i=a(155),o=a(0),s=a.n(o),c=a(649),m=a(217),u=a(650),d=a(209),p=a(178),f=a(219),E=a(140),x=a(218),h=a(672),g=a(22),y=a(34),b=a(235),v=a(142),w=a(188),N=a(136),I=a(52),k=a(192),C=a(193);function j(e){var t=e.landing,a=void 0===t?null:t,r=Object(g.c)(),k=Object(g.d)((function(e){return e.courses})),C=Object(g.d)((function(e){return null!==e.auth.token})),j=Object(o.useState)(null),z=Object(n.a)(j,2),O=z[0],S=z[1],B=Object(o.useState)(null),T=Object(n.a)(B,2),L=T[0],P=T[1],D=k?a?k.courses.filter((function(e,t){return t<3})):k.courses:[];Object(o.useEffect)((function(){r(Object(I.c)())}),[r]);var R=function(){P(null)};return s.a.createElement("div",null,!a&&s.a.createElement(v.a,N.a.Course.metaInfo),s.a.createElement(c.a,{show:L,onHide:R},s.a.createElement(c.a.Header,{closeButton:!0},s.a.createElement(c.a.Title,null,"Details")),s.a.createElement(c.a.Body,null,s.a.createElement(h.a,{remarkPlugins:[b.a]},L)),s.a.createElement(c.a.Footer,null,s.a.createElement(m.a,{variant:"secondary ",onClick:R},"Close"))),s.a.createElement(u.a,{show:O,onClose:function(){S(null)},style:{position:"fixed",top:"70px",right:"10px",zIndex:100}},s.a.createElement(u.a.Header,{className:"bg-warning text-white"},s.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),s.a.createElement("strong",{className:"me-auto"},"Server Response")),s.a.createElement(u.a.Body,null,O)),s.a.createElement("h3",{className:"text-center heading",style:{marginTop:"80px"}},"Available Courses"),k.loading&&(a?s.a.createElement("div",{className:"text-center"},s.a.createElement("span",null,"Please wait. Courses are loading "),s.a.createElement(d.a,{as:"span",animation:"grow",role:"status","aria-hidden":"true",variant:"dark",size:"md"})):s.a.createElement(d.a,{animation:"border",role:"status",variant:"dark",className:"content-center"})),s.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},D.map((function(e){return s.a.createElement(p.a,{className:"my-3",style:{width:"350px"}},s.a.createElement(x.LazyLoadComponent,null,s.a.createElement(p.a.Img,{variant:"top",src:e.imageUrl?"".concat("https://backend.exam.p2abd.com","/").concat(e.imageUrl):"".concat("https://backend.exam.p2abd.com","/images/courses/index.png")})),s.a.createElement(p.a.Body,null,s.a.createElement(p.a.Title,{style:{fontSize:"1.4rem",fontWeight:"900"}},e.title),s.a.createElement(p.a.Text,null,s.a.createElement(h.a,{remarkPlugins:[b.a]},e.description.substring(0,250)+" ..."),s.a.createElement("p",{className:"text-center"},s.a.createElement(m.a,{variant:"outline-primary",onClick:function(){P(e.description)}},"More"))),s.a.createElement(p.a.Text,{className:"d-flex justify-content-between"},s.a.createElement("div",null,s.a.createElement(E.z,{size:"1.5rem"})," ",s.a.createElement("span",{className:"bg-info text-white px-3 py-1"},e.price?e.price+" Taka":"Free")),s.a.createElement("div",null,s.a.createElement(E.f,{size:"1.5rem"})," ",s.a.createElement("span",{className:"bg-secondary text-white px-3 py-1"},i.duration(i(e.endDate).diff(e.startDate)).humanize()))),C&&s.a.createElement(p.a.Text,{className:"text-center mt-2"},s.a.createElement(y.Link,{to:"/exams/courses/"+e.id},s.a.createElement(m.a,{variant:"primary"},"Go to Exams"))),s.a.createElement("hr",null),C?s.a.createElement(m.a,{variant:"primary",style:{width:"320px",height:"55px",fontSize:"18px"},onClick:function(){l()({baseURL:"https://backend.exam.p2abd.com",url:"/courses/enroll/"+e.id,method:"patch"}).then((function(e){S(e.data.message)})).catch((function(e){S("Sorry. Enrollment to this course is not possible due to server error. Please contact with admin.")}))}},"Enroll"):s.a.createElement(f.a,{variant:"warning",className:"p-2"},"Please Login to Enroll."),s.a.createElement("hr",null),s.a.createElement(p.a.Text,{className:"text-muted text-center"},s.a.createElement("span",null,"Start: ",i(e.startDate).fromNow()))),s.a.createElement(p.a.Footer,null,s.a.createElement(w.a,{title:e.title,description:e.description,url:""})))}))))}i.extend(C),i.extend(k)}}]);
//# sourceMappingURL=52.71050e29.chunk.js.map