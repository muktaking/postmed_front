(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[45],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={Home:{metaInfo:{title:"Online Exam Platform",description:"Online Exam Platform - participate into exam from anywhere anytime with extensive solve immediately. Question and answer is authentic with help of talented mentor."}},Exams:{metaInfo:{title:"Lists Of Exams",description:"Lists of all available exams. Participate into the exams. Test your skill and find the gap."}},Dashboard:{metaInfo:{title:"Dashboard",description:"Get all contents at one place. Your routine, reports, activity, featured & latest exam and many more."}},Course:{metaInfo:{title:"Course",description:"Enroll for your desire courses and prepare for upcoming exams."}},Reports:{metaInfo:{title:"Reports",description:"In depth reports all of your exam. Take a look and get the gap."}},Profile:{metaInfo:{title:"Profile",description:"Update the profile and get a better user exprience."}},Settings:{metaInfo:{title:"Settings"}},Category:{metaInfo:{title:"CategoryBuilder"}},Question:{metaInfo:{title:"QuestionBuilder"}},CourseBuilder:{metaInfo:{title:"CourseBuilder"}},RoutineBuilder:{metaInfo:{title:"RoutineBuilder"}},ExamBuilder:{metaInfo:{title:"ExamBuilder"}},ExamEdit:{metaInfo:{title:"ExamEdit"}},Login:{metaInfo:{title:"Login",description:"Login to access the app."}},Signup:{metaInfo:{title:"Signup",description:"To use the app fully, You have to signup "}}}},141:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(172),o="yas",s=a(135).a.Home.metaInfo,l=s.title,m=s.description;t.a=function(e){var t=e.meta,a=void 0===t?[]:t,n=e.defer,s=void 0!==n&&n,c=e.lang,u=void 0===c?"en":c,p=e.title,d=void 0===p?l:p,f=e.description,E=void 0===f?m:f;return i.a.createElement(r.b,{defer:s,title:d,htmlAttributes:{lang:u},titleTemplate:"%s | ".concat("ExamA+"),meta:[{name:"description",content:E},{property:"og:description",content:E},{property:"og:title",content:d},{property:"og:type",content:"website"},{property:"og:image",content:"".concat("https://postmed.rajdoctors.com","/logo.png")},{name:"author",content:o}].concat(a)})}},227:function(e,t,a){"use strict";var n=a(5),i=a(10),r=a(128),o=a.n(r),s=a(0),l=a.n(s),m=a(129),c=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,s=e.pill,c=e.className,u=e.as,p=void 0===u?"span":u,d=Object(i.a)(e,["bsPrefix","variant","pill","className","as"]),f=Object(m.b)(a,"badge");return l.a.createElement(p,Object(n.a)({ref:t},d,{className:o()(c,f,s&&f+"-pill",r&&f+"-"+r)}))}));c.displayName="Badge",c.defaultProps={pill:!1},t.a=c},551:function(e,t,a){},688:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(134),o=a(27),s=a.n(o),l=a(150),m=a(234),c=a(227),u=(a(551),["Assignment","Weekly","Monthly","Assesment","Term","Test","Final"]);function p(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){s.a.get("https://postmed.v1.backend.rajdoctors.com/dashboard").then((function(e){200===e.status&&o(e.data)})).catch((function(e){console.log(e)}))}),[]),a.map((function(e){return{examTitles:m.map(e.userExamStat.examTitles,"title"),examType:m.map(e.userExamStat.examTitles,"type"),marks:m.map(e.userExamStat.stat,(function(e){return"Mark: ".concat(e.averageScore," Out of ").concat(e.totalMark)})),lastAttemptTimes:m.map(e.userExamStat.stat,"lastAttemptTime")}})).map((function(e,t){var n=e.examTitles,r=e.examType,o=e.marks,s=e.lastAttemptTimes;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h6",{className:"card-title text-center"},"Exams Under"," ",i.a.createElement(c.a,{variant:"primary",style:{fontSize:"1rem"}},a[t].title)," ","Course"),i.a.createElement("div",{id:"content"},i.a.createElement("ul",{className:"timeline"},n.map((function(e,t){return i.a.createElement("li",{key:e,className:"event","data-date":l(s[t]).format("YYYY-MM-DD, h:mm a")},i.a.createElement("h3",null,e),i.a.createElement("p",{className:"text-danger"},u[r[t]]),i.a.createElement("p",{className:"text-secondary"},o[t]))})))))))))}))}var d=a(141),f=a(398),E=a(135);function v(){return i.a.createElement("div",null,i.a.createElement(d.a,E.a.Profile.metaInfo),i.a.createElement(f.a,{isProfile:!0,size:"300"}),i.a.createElement(p,null))}a.d(t,"default",(function(){return v}))}}]);
//# sourceMappingURL=45.9db4d299.chunk.js.map