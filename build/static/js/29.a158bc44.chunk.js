(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[29],{141:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={Home:{metaInfo:{title:"Online Exam Platform",description:"Online Exam Platform - participate into exam from anywhere anytime with extensive solve immediately. Question and answer is authentic with help of talented mentor."}},Exams:{metaInfo:{title:"Lists Of Exams",description:"Lists of all available exams. Participate into the exams. Test your skill and find the gap."}},Dashboard:{metaInfo:{title:"Dashboard",description:"Get all contents at one place. Your routine, reports, activity, featured & latest exam and many more."}},Course:{metaInfo:{title:"Course",description:"Enroll for your desire courses and prepare for upcoming exams."}},Reports:{metaInfo:{title:"Reports",description:"In depth reports all of your exam. Take a look and get the gap."}},Profile:{metaInfo:{title:"Profile",description:"Update the profile and get a better user exprience."}},Settings:{metaInfo:{title:"Settings"}},Category:{metaInfo:{title:"CategoryBuilder"}},Question:{metaInfo:{title:"QuestionBuilder"}},CourseBuilder:{metaInfo:{title:"CourseBuilder"}},RoutineBuilder:{metaInfo:{title:"RoutineBuilder"}},ExamBuilder:{metaInfo:{title:"ExamBuilder"}},ExamEdit:{metaInfo:{title:"ExamEdit"}},Login:{metaInfo:{title:"Login",description:"Login to access the app."}},Signup:{metaInfo:{title:"Signup",description:"To use the app fully, You have to signup "}}}},148:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(235),o="yas",i=t(141).a.Home.metaInfo,l=i.title,c=i.description;a.a=function(e){var a=e.meta,t=void 0===a?[]:a,n=e.defer,i=void 0!==n&&n,m=e.lang,u=void 0===m?"en":m,d=e.title,f=void 0===d?l:d,p=e.description,g=void 0===p?c:p;return(r.a.createElement(s.b,{defer:i,title:f,htmlAttributes:{lang:u},titleTemplate:"%s | ".concat("MediOnExam"),meta:[{name:"description",content:g},{property:"og:description",content:g},{property:"og:title",content:f},{property:"og:type",content:"website"},{property:"og:image",content:"".concat("https://medionexam.com","/logo.png")},{name:"author",content:o}].concat(t)}))}},194:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(164),o=t(230),i=t(425),l=t(22),c=t(32),m=t(232),u=t(233),d={position:"fixed",top:"0px",left:"0px",width:"100%",zIndex:"1000"};a.a=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var a=Object(i.a)(),t=[a.formatMessage({id:"btn.home",defaultMessage:"home"}),a.formatMessage({id:"btn.contact",defaultMessage:"contact"})],n=e.isAuthenticated?[a.formatMessage({id:"btn.db",defaultMessage:"dashboard"}),a.formatMessage({id:"btn.courses",defaultMessage:"courses"}),a.formatMessage({id:"btn.exams",defaultMessage:"exams"}),a.formatMessage({id:"btn.help",defaultMessage:"help"}),a.formatMessage({id:"btn.logout",defaultMessage:"logout"})]:[a.formatMessage({id:"btn.courses",defaultMessage:"courses"}),a.formatMessage({id:"btn.exams",defaultMessage:"exams"}),a.formatMessage({id:"btn.help",defaultMessage:"help"}),a.formatMessage({id:"btn.signup",defaultMessage:"signup"}),a.formatMessage({id:"btn.login",defaultMessage:"login"})],l=e.isAuthenticated?["dashboard","courses","exams","help","logout"]:["courses","exams","help","signup","login"];return r.a.createElement("div",{style:d},r.a.createElement(o.a,{bg:"dark",variant:"dark",expand:"md"},r.a.createElement(c.Link,{to:"/",className:"navbar-brand"},"MediOnExam"),r.a.createElement(o.a.Toggle,{"aria-controls":"navbarResponsive"}),r.a.createElement(o.a.Collapse,{id:"navbarResponsive"},r.a.createElement(s.a,{className:"ml-auto"},["home","contact"].map((function(a,n){return r.a.createElement(s.a.Item,{key:a,as:"li",className:"mr-3"},e.isLanding?r.a.createElement(u.Link,{activeClass:"active",to:a,spy:!0,smooth:!0,offset:-100,duration:500,href:"home"===a?"/":"/#".concat(a),className:"nav-link"},t[n]):r.a.createElement(m.HashLink,{to:"/#"+a,className:"nav-link",activeClassName:"active"},t[n]))})),l.map((function(e,a){return r.a.createElement(s.a.Item,{key:e,as:"li",className:"mr-3"},r.a.createElement(c.NavLink,{to:{pathname:"/"+e},className:"nav-link"},n[a]))}))))))}))},236:function(e,a,t){"use strict";var n=t(5),r=t(10),s=t(0),o=t.n(s),i=t(128),l=t.n(i),c=t(129),m=o.a.forwardRef((function(e,a){var t,s=e.as,i=void 0===s?"div":s,m=e.className,u=e.fluid,d=e.bsPrefix,f=Object(r.a)(e,["as","className","fluid","bsPrefix"]),p=((t={})[d=Object(c.b)(d,"jumbotron")]=!0,t[d+"-fluid"]=u,t);return o.a.createElement(i,Object(n.a)({ref:a},f,{className:l()(m,p)}))}));m.defaultProps={fluid:!1},m.displayName="Jumbotron",a.a=m},296:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(132),r=t(0),s=t.n(r),o=t(136),i=t(297),l=t.n(i);function c(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),t=a[0],i=a[1];Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>400?i(!0):i(!1)}))}),[]);return s.a.createElement("div",{className:l.a.topToBtm},t&&s.a.createElement(o.c,{className:l.a.iconPosition+" "+l.a.iconStyle,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}))}},297:function(e,a,t){e.exports={topToBtm:"scrollToTop_topToBtm__3-3uk",iconPosition:"scrollToTop_iconPosition__3XUjB",iconStyle:"scrollToTop_iconStyle__1_ayY",movebtn:"scrollToTop_movebtn__1ObLZ"}},346:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(173),o=t(136);a.a=function(e){var a=null;switch(e.icon){case"cloud":a=r.a.createElement(o.n,{size:"4rem"});break;case"hourglass":a=r.a.createElement(o.A,{size:"4rem"});break;case"thumbs-up":a=r.a.createElement(o.ab,{color:"rgb(255, 193, 7)",size:"4rem"});break;case"bar":a=r.a.createElement(o.j,{color:"rgb(255, 193, 7)",size:"4rem"});break;case"hubspot":a=r.a.createElement(o.B,{size:"4rem"});break;case"stop":a=r.a.createElement(o.Z,{color:"tomato",size:"4rem"});break;default:a=r.a.createElement(o.n,{size:"4rem"})}return(r.a.createElement(s.a,{md:4},r.a.createElement("div",{className:"feature"},r.a.createElement("span",null,a),r.a.createElement("h3",{className:"mt-2"},e.heading),r.a.createElement("p",null,e.para))))}},347:function(e,a,t){e.exports={container:"hero_container__6DMEa",heading:"hero_heading__OOjcz"}},431:function(e,a,t){e.exports=t.p+"static/media/bg.80b673b6.svg"},754:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(194),o=t(148),i=t(141),l=t(173),c=t(236),m=t(216),u=t(425),d=t(714),f=t(346),p=function(e){var a=Object(u.a)(),t={heading:[a.formatMessage({id:"feature.ep",defaultMessage:"Exam Reports"}),a.formatMessage({id:"feature.lth",defaultMessage:"Learning & Testing Hub"}),a.formatMessage({id:"feature.ac",defaultMessage:"Accurecy"})],para:[a.formatMessage({id:"feature.ep.details",defaultMessage:"Advance exam analytical reports to find out the gap and on which topic to workout"}),a.formatMessage({id:"feature.lth.details",defaultMessage:"Learn at the time of exam with better explanation. Join our Facebook group for more learning resources "}),a.formatMessage({id:"feature.ac.details",defaultMessage:"Our academic team tries hard to make all questions and answers almost 100% accurate"})],faIcons:["bar","hubspot","thumbs-up"]};return r.a.createElement("div",{id:"feature",className:"offset"},r.a.createElement(c.a,null,r.a.createElement("div",{className:"narrow text-center"},r.a.createElement(l.a,{xs:12},r.a.createElement("h3",{className:"heading"},r.a.createElement(d.a,{id:"featureWhychoseUs",defaultMessage:"How We Help You"})),r.a.createElement("div",{className:"heading-underline"})),r.a.createElement(m.a,{className:""},t.faIcons.map((function(e,a){return r.a.createElement(f.a,{key:e+a,icon:e,heading:t.heading[a],para:t.para[a]})}))))))},g=t(432),E=t(715),h=t(237),b=t(32),v=t(431),x=t.n(v),y=t(347),M=t.n(y);function k(){return r.a.createElement(g.a,{id:"home",className:"".concat(M.a.container)},r.a.createElement(m.a,null,r.a.createElement(l.a,{lg:{span:8}},r.a.createElement(E.a,{src:x.a})),r.a.createElement(l.a,{className:"d-flex justify-content-center align-items-center",lg:{span:4,order:"first"}},r.a.createElement("div",{className:"".concat(M.a.heading)},r.a.createElement("h2",null,"Medical Online"),r.a.createElement("h3",null,"Examination"),r.a.createElement("div",{className:"heading-underline my-3 mx-0"}),r.a.createElement("p",{className:"lead"},"Knowledge, Revision and Time Management - keys for any competitive exams."),r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement(b.Link,{to:"/exams/category/Free-1"},r.a.createElement(h.a,{variant:"warning",size:"lg"},"Try Demo Exam")))))))}var N=t(296),_=Object(n.lazy)((function(){return t.e(49).then(t.bind(null,728))})),w=Object(n.lazy)((function(){return t.e(52).then(t.bind(null,729))})),I=Object(n.lazy)((function(){return t.e(59).then(t.bind(null,730))})),O=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(11),t.e(32)]).then(t.bind(null,310))}));a.default=function(e){return r.a.createElement("div",{className:"__landing__upper"},r.a.createElement(o.a,i.a.Home.metaInfo),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(s.a,{isLanding:!0})),r.a.createElement(k,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(p,null),r.a.createElement("div",{className:"my-5"},r.a.createElement(O,{landing:!0})),r.a.createElement(I,null),r.a.createElement(w,null),r.a.createElement(_,null)),r.a.createElement(N.a,null))}}}]);
//# sourceMappingURL=29.a158bc44.chunk.js.map