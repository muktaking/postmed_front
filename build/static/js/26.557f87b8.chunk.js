(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[26],{142:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={Home:{metaInfo:{title:"Online Exam Platform - Exam from anywhere anytime.",description:"Online Exam Platform - participate into exam from anywhere anytime with extensive solve immediately. Question and answer is authentic with help of talented mentor."}},Exams:{metaInfo:{title:"Lists Of all available exams",description:"Lists of all avaiable exams. Participate into the exams."}},Dashboard:{metaInfo:{title:"Dashboard- Get all your desired content in one place"}},Profile:{metaInfo:{title:"Profile- Know yourself and edit them"}},Settings:{metaInfo:{title:"Settings: Change the life as you want "}},Category:{metaInfo:{title:"Category- Create, edit and delete category"}},Question:{metaInfo:{title:"Question- Create, upload, edit and delete question"}},ExamBuilder:{metaInfo:{title:"ExamBuilder- Build exam easily"}},ExamEdit:{metaInfo:{title:"ExamEdit- edit and delete exam easily"}},Login:{metaInfo:{title:"Login- Login to access the app"}},Signup:{metaInfo:{title:"Signup- To use the app fully, You have to signup "}}}},152:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(192),m="yas",s=t(142).a.Home.metaInfo,c=s.title,i=s.description;a.a=function(e){var a=e.meta,t=void 0===a?[]:a,n=e.defer,s=void 0!==n&&n,o=e.lang,u=void 0===o?"en":o,d=e.title,E=void 0===d?c:d,p=e.description,b=void 0===p?i:p;return l.a.createElement(r.b,{defer:s,title:E,htmlAttributes:{lang:u},titleTemplate:"%s | ".concat("ExamA+"),meta:[{name:"description",content:b},{property:"og:description",content:b},{property:"og:title",content:E},{property:"og:type",content:"website"},{property:"og:image",content:"".concat("https://postmed.rajdoctors.com","/logo.png")},{name:"author",content:m}].concat(t)})}},365:function(e,a,t){},367:function(e,a,t){},614:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(141),m=t(368),s=t(159),c=t(349),i=t(19),o=(t(365),t(43)),u=t(44),d=t(46),E=t(45),p=t(47),b=t(162),f=t(194),h=t(146),N=t(348),v=t(23),g=t(36),x=t(21),y=t(134),k=t(27),I=t.n(k),j=t(590),O=t(596),z=t(164),L=t(366),w=t(56),C=t(139),S=t.n(C);function B(e){var a=e.firstName,t=e.lastName,n=e.email,r=e.mobile,m=e.userFrom,s=e.address,c=e.institution,i=e.faculty;return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("h6",{className:"mb-0"},"Full Name")),l.a.createElement("div",{className:"col-sm-9 text-secondary"},a+" "+t)),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("h6",{className:"mb-0"},"Email")),l.a.createElement("div",{className:"col-sm-9 text-secondary"},n)),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("h6",{className:"mb-0"},"Mobile")),l.a.createElement("div",{className:"col-sm-9 text-secondary"},r)),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("h6",{className:"mb-0"},"User From")),l.a.createElement("div",{className:"col-sm-9 text-secondary"},S()(m).format("MMM Do YY"))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("h6",{className:"mb-0"},"Institution")),l.a.createElement("div",{className:"col-sm-9 text-secondary"},c)),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("h6",{className:"mb-0"},"Faculty")),l.a.createElement("div",{className:"col-sm-9 text-secondary"},function(e){switch(e){case 0:return"Basic";case 1:return"Medicine";case 2:return"Surgery";case 3:return"Gynecology";case 4:return"Paediatrics";default:return"Null"}}(i))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("h6",{className:"mb-0"},"Address")),l.a.createElement("div",{className:"col-sm-9 text-secondary"},s))))}var P=t(615),M=t(234);function F(e){var a=e.user,t=e.updater,r=e.show,m=e.handleClose,s=Object(n.useState)(null),c=Object(y.a)(s,2),i=c[0],o=c[1],u=Object(n.useRef)(),d=Object(n.useRef)(),E=Object(n.useRef)(),p=Object(n.useRef)(),b=Object(n.useRef)(),f=Object(n.useRef)(),h=Object(n.useRef)(),N=Object(n.useRef)(),v=Object(n.useRef)();return l.a.createElement("div",null,l.a.createElement(P.a,{show:i,onClose:function(){o(null)},style:{position:"absolute",top:"20px",left:"10px",zIndex:"11111"}},l.a.createElement(P.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Server Response")),l.a.createElement(P.a.Body,null,i)),l.a.createElement(j.a,{show:r,onHide:m},l.a.createElement(j.a.Header,{closeButton:!0},l.a.createElement(j.a.Title,null,"Edit Your Profile")),l.a.createElement(j.a.Body,null,l.a.createElement(M.a,null,l.a.createElement(M.a.Group,{controlId:"formBasicFirstName"},l.a.createElement(M.a.Label,null,"FirstName"),l.a.createElement(M.a.Control,{ref:u,type:"text",placeholder:"FirstName",defaultValue:a.firstName})),l.a.createElement(M.a.Group,{controlId:"formBasicLastName"},l.a.createElement(M.a.Label,null,"LastName"),l.a.createElement(M.a.Control,{ref:d,type:"text",placeholder:"LastName",defaultValue:a.lastName})),l.a.createElement(M.a.Group,{controlId:"formBasicUserName"},l.a.createElement(M.a.Label,null,"UserName"),l.a.createElement(M.a.Control,{ref:E,type:"text",placeholder:"UserName",defaultValue:a.userName})),l.a.createElement(M.a.Group,{controlId:"formBasicEmail"},l.a.createElement(M.a.Label,null,"Email address"),l.a.createElement(M.a.Control,{ref:p,type:"email",placeholder:"Enter email",defaultValue:a.email}),l.a.createElement(M.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(M.a.Group,{controlId:"formBasicMobile"},l.a.createElement(M.a.Label,null,"Mobile(+88)"),l.a.createElement(M.a.Control,{ref:b,type:"text",placeholder:"mobile",defaultValue:a.mobile})),l.a.createElement(M.a.Group,null,l.a.createElement(M.a.Label,null,"Faculty"),l.a.createElement(M.a.Control,{ref:f,as:"select",name:"faculty",defaultValue:a.faculty},l.a.createElement("option",{value:"0"},"Basic"),l.a.createElement("option",{value:"1"},"Medicine"),l.a.createElement("option",{value:"2"},"Surgery"),l.a.createElement("option",{value:"3"},"Gynecology"),l.a.createElement("option",{value:"4"},"Paediatrics"))),l.a.createElement(M.a.Group,{controlId:"formBasicInstitution"},l.a.createElement(M.a.Label,null,"Institution"),l.a.createElement(M.a.Control,{ref:N,type:"text",placeholder:"Institution",defaultValue:a.institution})),l.a.createElement(M.a.Group,{controlId:"formBasicAddress"},l.a.createElement(M.a.Label,null,"Address"),l.a.createElement(M.a.Control,{ref:v,type:"text",placeholder:"Address",defaultValue:a.address})),l.a.createElement(M.a.Group,{controlId:"formGridState"},l.a.createElement(M.a.Label,null,"Gender"),l.a.createElement(M.a.Control,{ref:h,name:"gender",as:"select",defaultValue:a.gender},l.a.createElement("option",{value:"male"},"Male"),l.a.createElement("option",{value:"female"},"Female"))))),l.a.createElement(j.a.Footer,null,l.a.createElement(z.a,{variant:"secondary",onClick:m},"Close"),l.a.createElement(z.a,{variant:"primary",onClick:function(e){e.preventDefault();var n={id:a.id,firstName:u.current.value,lastName:d.current.value,userName:E.current.value,email:p.current.value,mobile:b.current.value,faculty:f.current.value,institution:N.current.value,address:v.current.value,gender:h.current.value};I.a.put("https://postmed.v1.backend.rajdoctors.com/users/"+a.id,n).then((function(e){console.log(e),o(e.data.message),t(),m()})).catch((function(e){console.log(e),o(e.message)}))}},"Save Changes"))))}var G=["boy","boy1","girl","girl1","hacker","man","woman","woman1","woman2","soccer-player","bear"];function D(e){var a=e.isProfile,t=e.size,r=void 0===t?"100":t,m=Object(v.c)(),s=Object(v.d)((function(e){return e.user})),c=Object(n.useState)(!1),i=Object(y.a)(c,2),o=i[0],u=i[1],d=Object(n.useState)(!1),E=Object(y.a)(d,2),p=E[0],b=E[1],f=Object(n.useState)(s.avatar),h=Object(y.a)(f,2),N=h[0],g=h[1],k=function(){return u(!1)};return l.a.createElement("div",null,l.a.createElement(F,{user:s,updater:function(){m(Object(w.b)())},show:p,handleClose:function(){return b(!1)}}),l.a.createElement(j.a,{show:o,onHide:k},l.a.createElement(j.a.Header,{closeButton:!0},l.a.createElement(j.a.Title,null,"Pick Your desired avatar")),l.a.createElement(j.a.Body,null,l.a.createElement("div",null,G.map((function(e,a){return l.a.createElement(O.a,{key:a,thumbnail:!0,src:"/assets/image/avatar/"+e+".png",roundedCircle:!0,className:"mb-2 mr-2 "+(N===e&&"bg-primary p-2"),style:{width:"64px",height:"64px",cursor:"pointer"},onClick:function(){g(e)}})})))),l.a.createElement(j.a.Footer,null,l.a.createElement(z.a,{variant:"secondary",onClick:k},"Close"),l.a.createElement(z.a,{variant:"primary",onClick:function(){setTimeout(k,500),I.a.post("https://postmed.v1.backend.rajdoctors.com/users/avatar/"+N).then((function(e){m(Object(w.b)())})).catch((function(e){console.log(e)}))}},"Save Changes"))),l.a.createElement("div",{className:"d-flex flex-column align-items-center text-center mb-3"+(a?"":" bottom-border")},l.a.createElement("div",null,l.a.createElement("img",{src:"/assets/image/avatar/"+(s.avatar?s.avatar:"boy")+".png",alt:"Avatar",className:"rounded-circle",width:r}),a&&l.a.createElement(L.a,{size:"1.7rem",style:{cursor:"pointer"},onClick:function(){return u(!0)}})),l.a.createElement("div",{className:a?"mt-3":"mt-3 text-white"},l.a.createElement("h4",null,s.userName),l.a.createElement("p",{className:"mb-1"},Object(x.c)(s.role)),l.a.createElement("p",{className:"font-size-sm"},s.address))),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{size:"1.7rem",style:{cursor:"pointer"},onClick:function(){return b(!0)},className:"mb-2 ml-3"}),l.a.createElement(B,{firstName:s.firstName,lastName:s.lastName,email:s.email,userFrom:s.userFrom,mobile:s.mobile,address:s.address,institution:s.institution,faculty:s.faculty})))}var A=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).classes={sideNav:["flex-column","mt-4"].join(" "),sideNavLink:["text-white","p-3","mb-2"].join(" "),fa:["text-light","fa-lg","mr-3"].join(" ")},t.faIcons=[],t.menuName=[],t.navLinks=[],t.menuIntlId=[],t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(x.a)(x.b.student,this.props.token)&&(this.faIcons=[l.a.createElement(h.e,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.a,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.w,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.v,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Exams","Profile","Settings"],this.menuIntlId=["btn.db","btn.exams","profile","settings"],this.navLinks=["/dashboard","/exams","/profile","/settings"]),Object(x.a)(x.b.mentor,this.props.token)&&(this.faIcons=[l.a.createElement(h.e,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.k,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.j,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.w,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.v,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Question","Exam Builder","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/question","/exambuilder","/profile","/settings"]),Object(x.a)(x.b.admin,this.props.token)&&(this.faIcons=[l.a.createElement(h.e,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.b,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.j,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.k,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.j,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.b,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.w,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.v,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Category","Routine Builder","Question","Exam Builder","Exam Edit","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/category","/routine","/question","/exambuilder","/examedit","/profile","/settings"]),l.a.createElement("div",{className:"px-4"},l.a.createElement(f.a.Brand,{className:"text-white d-block mx-auto text-center py-3 mb-4 bottom-border"},l.a.createElement(g.NavLink,{to:"/",className:"text-white"},"ExamA+")),l.a.createElement("h3",{className:"text-white text-center mb-2"},l.a.createElement(N.a,{id:"goodDay",defaultMessage:"Good Day"})),l.a.createElement(D,null),l.a.createElement(b.a,{className:this.classes.sideNav},this.faIcons.map((function(a,t){return l.a.createElement(b.a.Item,{key:t},l.a.createElement(g.NavLink,{to:e.navLinks[t],className:"nav-link "+e.classes.sideNavLink+" sidebar-link",activeClassName:"current"},a,e.menuIntlId.length>1?l.a.createElement(N.a,{id:e.menuIntlId[t],defaultMessage:e.menuName[t]}):e.menuName[t]))}))))}}]),a}(n.Component),R=Object(v.b)((function(e){return{token:e.auth.token}}))(A),T=t(149),H=t(60),V=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).classes={sideNav:["flex-column","mt-2"].join(" "),sideNavLink:["text-white","p-1","mb-2"].join(" "),fa:["text-light","fa-lg","mr-3"].join(" ")},t.faIcons=[],t.menuName=[],t.navLinks=[],t.menuIntlId=[],t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.onGetUserLoader(),this.props.onUserExamStatLoader()}},{key:"render",value:function(){var e=this;return this.faIcons=[l.a.createElement(h.e,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.j,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.w,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.w,{size:"1.6em",className:"mr-2"})],this.menuName=["Home","Exams","Signup","Login"],this.menuIntlId=["btn.home","btn.exams","btn.signup","btn.login"],this.navLinks=["/","/exams","/signup","/login"],Object(x.a)(x.b.student,this.props.token)&&(this.faIcons=[l.a.createElement(h.e,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.a,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.w,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.v,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Exams","Profile","Settings"],this.menuIntlId=["btn.db","btn.exams","profile","settings"],this.navLinks=["/dashboard","/exams","/profile","/settings"]),Object(x.a)(x.b.mentor,this.props.token)&&(this.faIcons=[l.a.createElement(h.e,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.k,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.j,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.w,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.v,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Question","Exam Builder","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/question","/exambuilder","/profile","/settings"]),Object(x.a)(x.b.admin,this.props.token)&&(this.faIcons=[l.a.createElement(h.e,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.b,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.j,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.k,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.j,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.b,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.w,{size:"1.6em",className:"mr-2"}),l.a.createElement(h.v,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Category","Routine Builder","Question","Exam Builder","Exam Edit","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/category","/routine","/question","/exambuilder","/examedit","/profile","/settings"]),l.a.createElement("div",{style:U},l.a.createElement(D,null),l.a.createElement(b.a,{className:this.classes.sideNav},this.faIcons.map((function(a,t){return l.a.createElement(b.a.Item,{key:t},l.a.createElement(g.NavLink,{exact:!0,to:e.navLinks[t],className:"nav-link "+e.classes.sideNavLink+" sidebar-link",activeClassName:"current"},a,e.menuIntlId.length>1?l.a.createElement(N.a,{id:e.menuIntlId[t],defaultMessage:e.menuName[t]}):e.menuName[t]))})),l.a.createElement("div",{className:"hideInMd"},this.props.token?l.a.createElement(b.a.Item,{className:"ml-md-auto"},l.a.createElement(g.NavLink,{to:{pathname:"/logout"},className:"nav-link"},l.a.createElement(T.a,{icon:"sign-out-alt",size:"lg",className:"text-danger"}))):l.a.createElement(l.a.Fragment,null))))}}]),a}(n.Component),Y=Object(v.b)((function(e){return{token:e.auth.token,user:e.user}}),(function(e){return{onGetUserLoader:function(){return e(Object(w.b)())},onUserExamStatLoader:function(){return e(H.c)}}}))(V),U={fontSize:"14px"},Q=function(e){var a=Object(v.d)((function(e){return e.auth.token}));return l.a.createElement("div",{className:"bg-dark py-2 top-navbar mb-3 w-100"},l.a.createElement(s.a,{className:"align-items-center"},l.a.createElement(r.a,{md:4,style:{paddingLeft:"3rem"}},l.a.createElement("h4",{className:"text-light text-uppercase mb-0"},l.a.createElement(N.a,{id:e.pageName,defaultMessage:e.pageName}))),l.a.createElement(r.a,{md:8,className:"hideInSm pr-5"},l.a.createElement(b.a,{className:"",style:{fontSize:"1.2rem"}},l.a.createElement(b.a.Item,{className:""},l.a.createElement(g.NavLink,{to:{pathname:"/"},className:"nav-link"},l.a.createElement(N.a,{id:"btn.home",defaultMessage:"Home"}))),l.a.createElement(b.a.Item,{className:""},l.a.createElement(g.NavLink,{to:{pathname:"/exams"},className:"nav-link"},l.a.createElement(N.a,{id:"btn.exams",defaultMessage:"Exams"}))),a?l.a.createElement(b.a.Item,{className:""},l.a.createElement(g.NavLink,{to:{pathname:"/logout"},className:"nav-link"},l.a.createElement(T.a,{icon:"sign-out-alt",size:"lg",className:""}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a.Item,{className:""},l.a.createElement(g.NavLink,{to:{pathname:"/signup"},className:"nav-link"},l.a.createElement(N.a,{id:"btn.signup",defaultMessage:"Signup"}))),l.a.createElement(b.a.Item,{className:""},l.a.createElement(g.NavLink,{to:{pathname:"/login"},className:"nav-link"},l.a.createElement(N.a,{id:"btn.login",defaultMessage:"Login"}))))))))},q=t(191),W=(t(367),["Assignment","Weekly","Monthly","Assesment","Term","Test","Final"]);function J(){var e=Object(v.d)((function(e){return e.dashboard.userExamStat})),a=e?q.map(e.examTitles,"title"):[],t=e?q.map(e.examTitles,"type"):[],n=e?q.map(e.stat,(function(e){return"Mark: ".concat(e.averageScore," Out of ").concat(e.totalMark)})):[],r=e?q.map(e.stat,"lastAttemptTime"):[];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h6",{className:"card-title"},"All Exam Results"),l.a.createElement("div",{id:"content"},l.a.createElement("ul",{className:"timeline"},a.map((function(e,a){return l.a.createElement("li",{key:e,className:"event","data-date":S()(r[a]).format("YYYY-MM-DD, h:mm a")},l.a.createElement("h3",null,e),l.a.createElement("p",{className:"text-danger"},W[t[a]]),l.a.createElement("p",{className:"text-secondary"},n[a]))})))))))))}var K=t(152),X=t(142);function Z(){return l.a.createElement("div",null,l.a.createElement(K.a,X.a.Profile.metaInfo),l.a.createElement(D,{isProfile:!0,size:"300"}),l.a.createElement(J,null))}var $=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(23),t.e(38)]).then(t.bind(null,625))})),_=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(6),t.e(10),t.e(13)]).then(t.bind(null,612))})),ee=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(6),t.e(10),t.e(21)]).then(t.bind(null,608))})),ae=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(6),t.e(7),t.e(27)]).then(t.bind(null,617))})),te=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(28)]).then(t.bind(null,222))})),ne=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(9),t.e(25)]).then(t.bind(null,619))})),le=Object(n.lazy)((function(){return Promise.all([t.e(9),t.e(33)]).then(t.bind(null,609))})),re=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(24),t.e(30)]).then(t.bind(null,620))})),me=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(20),t.e(37)]).then(t.bind(null,613))})),se=Object(n.lazy)((function(){return t.e(36).then(t.bind(null,610))})),ce=Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(7),t.e(32)]).then(t.bind(null,616))})),ie=Object(n.lazy)((function(){return t.e(40).then(t.bind(null,611))})),oe=(a.default=function(e){var a=e.match.url.split("/",2)[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.slide,{styles:oe},l.a.createElement(Y,null)),l.a.createElement(m.a,{fluid:"true"},l.a.createElement(s.a,{className:"no-gutters"},l.a.createElement(r.a,{xl:2,lg:3,md:4,className:"sidebar"},l.a.createElement(R,null)),l.a.createElement(r.a,{xl:10,lg:9,md:8,sm:12},l.a.createElement("div",null,l.a.createElement(Q,{pageName:a}),l.a.createElement("div",{className:"px-1 ml-md-4",style:{marginTop:"70px"}},l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",{className:"text-center",style:{marginTop:"45vh"}},"Loading...")},l.a.createElement(i.d,{path:"/dashboard",exact:!0,component:_}),l.a.createElement(i.d,{path:"/profile",exact:!0,component:Z}),l.a.createElement(i.d,{path:"/category",exact:!0,component:$}),l.a.createElement(i.d,{path:"/routine",exact:!0,component:ee}),l.a.createElement(i.d,{path:"/question",exact:!0,component:me}),l.a.createElement(i.d,{path:"/exambuilder",exact:!0,component:ae}),l.a.createElement(i.d,{path:"/examedit",exact:!0,component:te}),l.a.createElement(i.d,{path:"/exams/:id",exact:!0,render:function(e){return l.a.createElement(re,Object.assign({free:!1},e))}}),l.a.createElement(i.d,{path:"/exams",exact:!0,component:ne}),l.a.createElement(i.d,{path:"/exams/category/:id",exact:!0,component:le}),l.a.createElement(i.d,{path:"/exams/free/:id",exact:!0,render:function(e){return l.a.createElement(re,Object.assign({free:!0},e))}}),l.a.createElement(i.d,{path:"/result",exact:!0,component:ce}),l.a.createElement(i.d,{path:"/result/rank/:id",exact:!0,component:se}),l.a.createElement(i.d,{path:"/settings",exact:!0,component:ie}))))))))},{bmBurgerButton:{position:"fixed",width:"30px",height:"25px",right:"28px",top:"10px"},bmBurgerBars:{background:"#67aaaa"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",height:"100%"},bmMenu:{background:"#373a47",padding:"2.5em 1.5em 0",fontSize:"1.15em"},bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad",padding:"0.8em"},bmItem:{display:"inline-block"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}})}}]);
//# sourceMappingURL=26.557f87b8.chunk.js.map