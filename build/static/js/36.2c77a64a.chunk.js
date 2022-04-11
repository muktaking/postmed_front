(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[36],{138:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={Home:{metaInfo:{title:"Online Exam Platform",description:"Online Exam Platform - participate into exam from anywhere anytime with extensive solve immediately. Question and answer is authentic with help of talented mentor."}},Exams:{metaInfo:{title:"Lists Of Exams",description:"Lists of all available exams. Participate into the exams. Test your skill and find the gap."}},Dashboard:{metaInfo:{title:"Dashboard",description:"Get all contents at one place. Your routine, reports, activity, featured & latest exam and many more."}},Course:{metaInfo:{title:"Course",description:"Enroll for your desire courses and prepare for upcoming exams."}},Reports:{metaInfo:{title:"Reports",description:"In depth reports all of your exam. Take a look and get the gap."}},Profile:{metaInfo:{title:"Profile",description:"Update the profile and get a better user exprience."}},Settings:{metaInfo:{title:"Settings"}},Category:{metaInfo:{title:"CategoryBuilder"}},Question:{metaInfo:{title:"QuestionBuilder"}},CourseBuilder:{metaInfo:{title:"CourseBuilder"}},RoutineBuilder:{metaInfo:{title:"RoutineBuilder"}},ExamBuilder:{metaInfo:{title:"ExamBuilder"}},ExamEdit:{metaInfo:{title:"ExamEdit"}},Login:{metaInfo:{title:"Login",description:"Login to access the app."}},Signup:{metaInfo:{title:"Signup",description:"To use the app fully, You have to signup "}}}},144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(162),o="yas",l=a(138).a.Home.metaInfo,c=l.title,s=l.description;t.a=function(e){var t=e.meta,a=void 0===t?[]:t,n=e.defer,l=void 0!==n&&n,m=e.lang,d=void 0===m?"en":m,u=e.title,p=void 0===u?c:u,f=e.description,g=void 0===f?s:f;return r.a.createElement(i.b,{defer:l,title:p,htmlAttributes:{lang:d},titleTemplate:"%s | ".concat("MediOnExam"),meta:[{name:"description",content:g},{property:"og:description",content:g},{property:"og:title",content:p},{property:"og:type",content:"website"},{property:"og:image",content:"".concat("https://medionexam.com","/logo.png")},{name:"author",content:o}].concat(a)})}},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),i=a(249),o={position:"fixed",top:"45vh",left:"50%",zIndex:"10000000000"};function l(){return r.a.createElement(i.a,{animation:"grow",role:"status",variant:"dark",style:o})}},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(145),r=a(0),i=a.n(r),o=a(672),l=a(442),c=a(443),s=a(444),m=a(445),d=a(446),u=a(447),p=a(448),f=a(449),g=35,E=!0;function x(e){var t=e.title,a=e.description,r=e.url,x=Object(n.a)(e,["title","description","url"]);return r="https://medionexam.com"+r,i.a.createElement("div",Object.assign({className:"mt-3"},x),i.a.createElement(o.a,{variant:"success",className:"mr-1 p-1",style:{fontSize:".8rem"}},"Share on"),i.a.createElement(l.a,{url:r,quote:a,hashtag:t,className:"mr-1"},i.a.createElement(c.a,{size:g,round:E})),i.a.createElement(s.a,{url:r,title:a,hashtag:t,className:"mr-1"},i.a.createElement(m.a,{size:g,round:E})),i.a.createElement(d.a,{url:r,body:a,title:t,className:"mr-1"},i.a.createElement(u.a,{size:g,round:E})),i.a.createElement(p.a,{url:r,source:r,body:a,title:t,className:"mr-1"},i.a.createElement(f.a,{size:g,round:E})))}},234:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),i=a(672);function o(e){var t=e.categoryType;return t&&t.map((function(e){return r.a.createElement(i.a,{key:e.name,pill:!0,variant:l(e.name),className:"mr-1"},e.name)}))}var l=function(e){var t="primary";switch(e){case"Featured":t="warning";break;case"Free":t="secondary"}return t}},325:function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var n=a(145),r=a(136),i=a(28),o=a.n(i),l=a(0),c=a.n(l),s=a(188),m=a(195),d=a(257),u=a(359),p=a(422),f=a(477),g=a(670),E=a(233),x=a(22),h=a(32),y=a(50),v=a(16),b=a(196),k=a(234),j=c.a.lazy((function(){return Promise.all([a.e(2),a.e(3),a.e(7),a.e(9),a.e(31)]).then(a.bind(null,326))}));function O(e){return e.filter((function(e){return"Free"===e.name})).length>0}function N(e){var t=e.width,a=void 0===t?"350":t,n=e.height,i=void 0===n?"180":n,o=e.examId,p=e.courseId,N=e.imgSrc,w=e.title,I=e.categoryType,L=e.description,C=(e.createdAt,e.endDate,e.examLoader),M=e.landing,S=Object(x.c)(),z=Object(x.d)((function(e){return e.auth.token})),F=(Object(f.a)(),Object(l.useState)(null)),A=Object(r.a)(F,2),B=A[0],D=A[1],R=Object(l.useState)(!1),U=Object(r.a)(R,2),P=U[0],G=U[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{key:o,className:"mr-2 mb-2",style:{width:a+"px"}},c.a.createElement(E.LazyLoadComponent,null,!Object(v.a)(v.e.coordinator,z)&&c.a.createElement(s.a.Img,{variant:"top",src:N,width:a,height:i})),c.a.createElement(s.a.Body,null,c.a.createElement("div",null,c.a.createElement(s.a.Title,{style:{fontSize:"1.4rem",fontWeight:"900"}},w),c.a.createElement(s.a.Subtitle,null,c.a.createElement(k.a,{categoryType:z?I.filter((function(e){return"Free"!==e.name})):I}))),c.a.createElement("div",{className:"mt-1 pt-2"},c.a.createElement("p",{className:""},L," ")),c.a.createElement("hr",null),z&&M&&(O(I)?c.a.createElement(m.a,{variant:"warning",className:"mt-2"},"Taking part to this exam will not be added to your exam profile."," "):c.a.createElement(m.a,{variant:"danger",className:"mt-2"},"You can not take part this exam. Go to"," ",c.a.createElement(h.Link,{to:"/exams"},"avaiable exams "))),c.a.createElement("div",{className:"d-flex justify-content-around"},c.a.createElement(h.Link,{className:"text-white",to:p?"/exams/".concat(o,"_").concat(p):O(I)?"/exams/free/".concat(o):""},c.a.createElement(d.a,{variant:"outline-primary",onClick:function(){S(Object(y.j)())},disabled:!O(I)},c.a.createElement(g.a,{id:"btn.start",defaultMessage:"Start Exam"})))),c.a.createElement("hr",null),c.a.createElement(b.a,{url:"/exams/"+o,title:w,description:L}),Object(v.a)(v.e.coordinator,z)&&c.a.createElement("div",{className:"mt-2"},P&&c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement(j,{editExam:P,editExamHandleClose:function(){G(!1)}})),c.a.createElement(d.a,{variant:"primary",className:"mr-3",onClick:function(){G(!0)}},"Edit"),c.a.createElement(u.a,{trigger:"click",placement:"top",overlay:c.a.createElement(T,{id:o,res:B,setRes:D,token:z,examLoader:C})},c.a.createElement(d.a,{onClick:function(){S(Object(y.j)())},variant:"danger"},"Delete"))))))}var T=c.a.forwardRef((function(e,t){var a=e.id,r=e.res,i=e.setRes,l=(e.token,e.examLoader),s=Object(n.a)(e,["id","res","setRes","token","examLoader"]);return c.a.createElement(p.a,Object.assign({id:"popover-basic",ref:t},s),c.a.createElement(p.a.Title,{as:"h3"},"Are You Sure To delete The Exam"),c.a.createElement(p.a.Content,null,c.a.createElement("p",null,r),c.a.createElement(d.a,{variant:"danger",onClick:function(){o()({baseURL:"https://backend.medionexam.com",url:"/exams/"+a,method:"delete"}).then((function(e){l(),i("Successfully Deleted")})).catch((function(e){i("Can not delete the exam"+JSON.stringify(e))}))}},"Yes")))}))},340:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(136),r=a(0),i=a.n(r),o=a(665),l=a(672),c=a(231),s=a(165),m=a(257),d=a(477),u=a(32),p=a(325);function f(e){var t=e.title,a=e.exams,f=e.landing,g=e.examLoader,E=Object(d.a)(),x=Object(r.useState)(!1),h=Object(n.a)(x,2),y=h[0],v=h[1],b=function(){return v(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{show:y,onHide:b,size:"xl"},i.a.createElement(o.a.Header,{closeButton:!0},i.a.createElement(o.a.Title,null,E.formatMessage({id:"btn.more",defaultMessage:"More"}),i.a.createElement(l.a,{variant:"warning"}," "+t.toUpperCase()+" "),E.formatMessage({id:"btn.exams",defaultMessage:"Exams"}))),i.a.createElement(o.a.Body,null,i.a.createElement(c.a,{className:"mt-3 ml-3"},i.a.createElement(s.a,{className:"d-flex justify-content-center flex-wrap"},a.slice(2).map((function(e){return i.a.createElement(p.a,{key:e.id,examId:e.id,imgSrc:e.categoryType.length>0?"https://backend.medionexam.com/"+e.categoryType[(t=0,a=e.categoryType.length,Math.floor(Math.random()*(a-t))+t)].imageUrl:"/assets/image/uncat.jpg",title:e.title,categoryType:e.categoryType.length>0?e.categoryType:[{name:"Uncategorized"}],description:e.description,createdAt:e.createdAt,endDate:e.endDate,free:e.categoryType.filter((function(e){return"Free"===e.name})).length>0,examLoader:g,landing:f});var t,a}))))),i.a.createElement(o.a.Footer,null,i.a.createElement(m.a,{variant:"secondary",onClick:b},"Close"))),i.a.createElement("div",{className:"my-5 position-relative"},i.a.createElement("h3",{className:"text-center bg-warning text-light p-3 mx-auto",style:{maxWidth:"400px"}},t.toUpperCase()+" "," ",!f&&i.a.createElement(l.a,{variant:"light",className:"ml-2"}," ",a.length)," "),i.a.createElement("div",{className:"mt-5"},i.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},a.length<1&&i.a.createElement("p",{className:"lead text-danger"}," ",t+" "+E.formatMessage({id:"noExamCreated",defaultMessage:"are not created"})," "),a.map((function(e,t){return i.a.createElement(p.a,{key:e.id,examId:e.id,imgSrc:e.categoryType.length>0?"https://backend.medionexam.com/images/bootstrap/featured_0"+(Math.floor(3*Math.random())+1)+".svg":"https://backend.medionexam.com/images/bootstrap/uncat.svg",title:e.title,categoryType:e.categoryType.length>0?e.categoryType:[{name:"Uncategorized"}],description:e.description,createdAt:e.startDate,endDate:e.endDate,examLoader:g,landing:f})}))),f?i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(u.Link,{to:"/exams/category/Featured-2"},i.a.createElement(m.a,{variant:"warning",size:"lg",className:"text-white"},"More Featured Exams..."))):i.a.createElement("div",{className:"my-2 d-flex justify-content-center"},a.length>2?i.a.createElement(m.a,{style:{height:"50px",width:"150px"},onClick:function(){v(!0)}},E.formatMessage({id:"btn.more",defaultMessage:"More..."}),"."):""))))}},450:function(e,t,a){"use strict";a.r(t),a.d(t,"examType",(function(){return x}));var n=a(43),r=a(48),i=a(47),o=a(44),l=a(46),c=a(0),s=a.n(c),m=a(73),d=a(22),u=a(340),p=a(144),f=a(159),g=a(138),E=a(50),x=["Assignment","Weekly","Monthly","Assesment","Term","Test","Final"],h=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetAllExamsLoader()}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,g.a.Exams.metaInfo),this.props.exams.exams.length<1&&s.a.createElement(f.a,null),Object.keys(this.props.exams.exams).map((function(t){return e.props.exams.exams[t]&&s.a.createElement(u.a,{key:t,title:e.props.intl.formatMessage({id:t,defaultMessage:t}),exams:e.props.exams.exams[t],examLoader:e.props.onGetAllExamsLoader})})))}}]),t}(c.Component);t.default=Object(m.c)(Object(d.b)((function(e){return{exams:e.exams}}),(function(e){return{onGetAllExamsLoader:function(){return e(Object(E.d)())}}}))(h))}}]);
//# sourceMappingURL=36.2c77a64a.chunk.js.map