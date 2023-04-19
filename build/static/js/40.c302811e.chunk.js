(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[40],{170:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(190),r=a.n(n);function s(e,t,a){var n=(t-1)*a;return r()(e).slice(n).take(a).value()}},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(286);t.a=function(e){var t=e.itemsCount,a=e.pageSize,n=e.onPageHandler,l=e.currentPage,o=Math.ceil(t/a);if(1===o)return null;for(var i=[],m=function(e){i.push(r.a.createElement(s.a.Item,{key:e,onClick:function(){n(e)},active:e===l,className:"my-2 mr-2 text-center",style:{width:"40px",height:"30px"}},e))},c=1;c<=o;c++)m(c);return(r.a.createElement(s.a,{className:"justify-content-start align-content-start flex-wrap"},i))}},234:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(164),l=a(22),o=a(32);t.a=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var t=e.isAuthenticated?["dashboard","courses","exams","logout","help"]:["courses","exams","signup","login","help"];return(r.a.createElement(s.a,{className:"bg-light"},r.a.createElement(s.a.Item,{as:"li",className:"mr-3"},r.a.createElement(o.NavLink,{to:{pathname:"/"},className:"nav-link link-hover"},"Home".toUpperCase())),t.map((function(e){return r.a.createElement(s.a.Item,{key:e,as:"li",className:"mr-3"},r.a.createElement(o.NavLink,{to:{pathname:"/"+e},className:"nav-link link-hover"},e.toUpperCase()))})),r.a.createElement(s.a.Item,{as:"li",className:"mr-3"},r.a.createElement(o.NavLink,{to:"/#contact",className:"nav-link link-hover"},"Contact".toUpperCase()))))}))},752:function(e,t,a){"use strict";a.r(t);var n=a(132),r=a(42),s=a(48),l=a(47),o=a(44),i=a(45),m=a(0),c=a.n(m),u=a(716),d=a(694),p=a(237),h=a(174),E=a(282),g=a(216),f=a(173),x=a(581),y=a(235),k=a(73),v=a(245),b=a.n(v),S=a(22),w=a(17),C=a(147),T=a(152),N=a(183),q=a(243),P=a(715),I=a(188),H=a(745),O=a(191),j=function(e){var t=e.id,a=e.qType,n=e.stem,r=e.index,s=e.handleChange,l=e.defaultChecked,o=Object(S.d)((function(e){return e.exams.disableQuestions}));return c.a.createElement(g.a,{className:"px-md-4 px-xs-2"},c.a.createElement(f.a,{xs:"9"},r+". "+n),c.a.createElement(E.a.Group,{as:f.a,controlId:"formGroupQuestionStemAnswer"},"matrix"===a?c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a.Check,{type:"radio"},c.a.createElement(E.a.Check.Input,{disabled:o&&o.includes(t+"_"+r),type:"radio",name:t+"_"+r,id:"formHorizontalRadios1",value:1,defaultChecked:"1"===l,onChange:s,className:"mb-0"}),c.a.createElement(E.a.Check.Label,null,"True")),c.a.createElement(E.a.Check,{type:"radio"},c.a.createElement(E.a.Check.Input,{disabled:o&&o.includes(t+"_"+r),type:"radio",name:t+"_"+r,id:"formHorizontalRadios2",value:0,defaultChecked:"0"===l,onChange:s,className:"mb-0"}),c.a.createElement(E.a.Check.Label,null,"False"))):c.a.createElement(E.a.Check,null,c.a.createElement(E.a.Check.Input,{disabled:o&&o.includes(t.toString()),type:"radio",name:t,id:"formHorizontalRadios1",value:r,defaultChecked:l==r,onChange:s,className:"mb-0"}))))},L=function(e){var t=e.question,a=e.handleChange,n=e.defaultChecked,r=e.index;return console.log(r),c.a.createElement(N.a,{as:"ul",className:"mt-3"},c.a.createElement(N.a.Item,{className:"lead",as:"li",active:!0},c.a.createElement(u.a,{variant:"danger"},"Question No. ",r),c.a.createElement(H.a,{remarkPlugins:[O.a],components:{table:function(e){e.node;var t=e.children;Object(T.a)(e,["node","children"]);return(c.a.createElement(q.a,{bordered:!0,responsive:!0,className:"text-white w-50",children:t}))},img:function(e){e.node;var t=e.src,a=e.alt;Object(T.a)(e,["node","src","alt"]);return(c.a.createElement(I.LazyLoadComponent,null,c.a.createElement(P.a,{src:t,alt:a,width:350,fluid:!0})))}}},t.qText)),t.stems.map((function(e,r){return c.a.createElement(N.a.Item,{as:"li",key:r},c.a.createElement(j,{qType:t.qType,stem:e,index:r+1,id:t.id,handleChange:a,defaultChecked:n?"matrix"===t.qType?n[r]:n[0]:null}))})))},M=a(234),B=a(196),z=a(53),F=a(170);function D(e){var t=e.examStartDialogueHandler,a=e.exams,r=Object(w.k)(),s=Object(m.useState)(!0),l=Object(n.a)(s,2),o=l[0],i=l[1],E=Object(m.useState)(!1),g=Object(n.a)(E,2),f=g[0],x=g[1],y=function(){t(),i(!1)};return c.a.createElement("div",null,c.a.createElement(d.a,{show:o,onHide:y},c.a.createElement(d.a.Header,{closeButton:!0},c.a.createElement(d.a.Title,null,"Do You want to Proceed to Exam?")),c.a.createElement(d.a.Body,null,c.a.createElement("p",null,"Exam's Stats"),a&&c.a.createElement(N.a,null,c.a.createElement(N.a.Item,null,"Total Questions:"," ",c.a.createElement(u.a,null,a.questions&&a.questions.length)),c.a.createElement(N.a.Item,null,"Total Mark:"," ",c.a.createElement(u.a,null,a.questions&&a.singleQuestionMark&&a.questions.length*a.singleQuestionMark)),c.a.createElement(N.a.Item,null,"Time Limit: ",c.a.createElement(u.a,null,a.timeLimit&&a.timeLimit)," ","Mins"),a.penaltyMark&&c.a.createElement(N.a.Item,null,"Penalty Mark:"," ",c.a.createElement(u.a,{variant:"danger"},a.penaltyMark)," (for each wrong stem)")),c.a.createElement(q.a,{striped:!0,bordered:!0,className:"mt-3"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Question Type"),c.a.createElement("th",null,"Number"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"True/False questions"),c.a.createElement("td",null,a.questions.filter((function(e){return"matrix"===e.qType})).length)),c.a.createElement("tr",null,c.a.createElement("td",null,"SBA questions"),c.a.createElement("td",null,a.questions.filter((function(e){return"sba"===e.qType})).length)))),c.a.createElement(p.a,{onClick:function(){x(!f)},variant:"dark"},"Exam's Ruless"),f&&c.a.createElement(h.a,{variant:"warning",className:"mt-3"},c.a.createElement("p",null,"1. First"," ",a.questions.filter((function(e){return"matrix"===e.qType})).length," ","questions are True/False type. Rest"," ",a.questions.filter((function(e){return"sba"===e.qType})).length," ","questions are SBA type."),c.a.createElement("p",null,"2. You can not modify your answer after clicking an option."),c.a.createElement("p",null,"3. After timelimit you will push to result page or you can submit your answer anytime."))),c.a.createElement(d.a.Footer,null,c.a.createElement(p.a,{variant:"secondary",onClick:function(){r.goBack()}},"Go Back"),c.a.createElement(p.a,{variant:"primary",onClick:y},"Proceed"))))}var A=function(){return c.a.createElement("span",{className:"text-danger"},"Your Time is Finished")},R=function(e){var t=e.hours,a=e.minutes,n=e.seconds;return e.completed?c.a.createElement(A,null):c.a.createElement("span",null,c.a.createElement(u.a,{variant:t<1&a<5?"danger":"success",style:{fontSize:"2rem"}},t+" H"),c.a.createElement(u.a,{variant:"light",style:{fontSize:"1.5rem"}},":"),c.a.createElement(u.a,{variant:t<1&a<5?"danger":"success",style:{fontSize:"2rem"}},a+" M"),c.a.createElement(u.a,{variant:"light",style:{fontSize:"1.5rem"}},":"),c.a.createElement(u.a,{variant:t<1&a<5?"danger":"success",style:{fontSize:"2rem"}},n+" S"))},Y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),m=0;m<s;m++)i[m]=arguments[m];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!1,pageSize:1,currentPage:1,date:Date.now(),timeExpired:!1,modalShow:!1,arrowState:!0,showPagination:!0,examStartDialogue:!0},a.timeTakenToComplete=0,a.answers=[],a.answerIds=new Set,a.modalShow=function(){a.setState({modalShow:!0})},a.modalHide=function(){a.setState({modalShow:!1})},a.examStartDialogueHandler=function(){a.setState({examStartDialogue:!1})},a.onPageHandler=function(e){a.setState({currentPage:e})},a.onHandleChange=function(e){var t=e.target.name,r=e.target.value;if(a.props.onDisableQuestionsAddLoader(t),t.includes("_")){var s=t.split("_"),l=Object(n.a)(s,2),o=l[0],i=l[1];a.setState((function(e){e[o]||(e[o]=[]),e[o][i-1]=r,a.answerIds.add(o)}))}else a.setState((function(e){e[t]=[r],a.answerIds.add(t)}))},a.onSwithchHandleChange=function(e){e.target.checked?a.setState({pageSize:a.props.exams.questions.length,currentPage:1,showPagination:!1}):a.setState({pageSize:1,showPagination:!0})},a.onSubmitHandler=function(){var e=a.props.match.params.id.split("_")[0],t=a.props.match.params.id.split("_")[1];a.setState({loading:!0}),a.answerIds.forEach((function(e){a.answers.push({id:e,stems:a.state[e],type:_.find(a.props.exams.questions,(function(t){return t.id===+e})).qType})})),a.props.free?a.props.onPostFreeExamByIdLoader({examId:e,timeTakenToComplete:(a.timeTakenToComplete/60).toFixed(4),answers:a.answers,questionIdsByOrder:a.props.exams.questionIdsByOrder}):a.props.onPostExamByIdLoader({examId:e,courseId:t,timeTakenToComplete:Math.ceil(a.timeTakenToComplete/60).toFixed(4),answers:a.answers,questionIdsByOrder:a.props.exams.questionIdsByOrder})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onResetExamLoader(),this.props.auth.token?this.props.onGetExamByIdLoader(this.props.match.params.id):this.props.onGetFreeExamByIdLoader(this.props.match.params.id)}},{key:"render",value:function(){var e=this,t=Object(F.a)(this.props.exams.questions,this.state.currentPage,this.state.pageSize);return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,null,c.a.createElement("title",null,"Exam- test your knowledge")),(this.props.exams.examResult||this.props.exams.error)&&c.a.createElement(w.c,{to:"/result"}),this.props.exams.questions.length<1&&!this.props.exams.examError&&c.a.createElement(C.a,null),c.a.createElement(d.a,{show:this.state.modalShow,onHide:this.modalHide},this.state.loading?c.a.createElement("p",{className:"lead mt-5 text-center"},"Your submitted Exam is processing..."):this.state.timeExpired?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a.Header,null,c.a.createElement(d.a.Title,{className:"text-danger"},"Time Expired")),c.a.createElement(d.a.Body,null,c.a.createElement("div",null,c.a.createElement("p",{className:"lead"},"You will Taken To Result Page."),c.a.createElement(x.a,{date:Date.now()+5e3,renderer:function(e){var t=e.seconds;return(c.a.createElement("p",{className:"text-center text-danger",style:{fontSize:"2rem"}},t))},onComplete:this.onSubmitHandler})))):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a.Header,{closeButton:!0},c.a.createElement(d.a.Title,null,this.props.intl.formatMessage({id:"btn.sas",defaultMessage:"Submit Answer Sheet"}))),c.a.createElement(d.a.Body,null,c.a.createElement("div",null,c.a.createElement("p",{className:"lead"},this.props.intl.formatMessage({id:"et.agree",defaultMessage:"Are You Sure ? You will Taken To Result Page. "}),"You do no answer",c.a.createElement("span",{className:"text-danger"}," ",this.props.exams.questions.length-this.answerIds.size," ")," questions."),c.a.createElement(x.a,{date:Date.now()+1e4,renderer:function(e){var t=e.seconds;return(c.a.createElement("p",{className:"text-center text-danger",style:{fontSize:"2rem"}},t))},onComplete:this.onSubmitHandler}))),c.a.createElement(d.a.Footer,null,c.a.createElement(p.a,{variant:"secondary",onClick:this.modalHide},this.props.intl.formatMessage({id:"et.no",defaultMessage:"Go Back"})),c.a.createElement(p.a,{variant:"primary",onClick:this.onSubmitHandler},this.props.intl.formatMessage({id:"et.yes",defaultMessage:"Yes, I Want."}))))),this.props.exams.examError?c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{variant:"danger",className:"text-center mt-5"},c.a.createElement("h2",null,this.props.exams.examError),c.a.createElement("h4",null,"Possible Solution"),this.props.auth.token?c.a.createElement("p",null,"You may not enrolled for the course. Please enroll first."):c.a.createElement("p",null," You are not logged in. So you can not participate exams other than free. So login or participate free exam only.")),c.a.createElement(M.a,null)):this.props.exams.timeLimit&&(this.state.examStartDialogue?c.a.createElement(D,{exams:this.props.exams,examStartDialogueHandler:this.examStartDialogueHandler}):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"text-dark text-center px-2 pt-3 pb-2 mt-1 bg-light sticky-top"},c.a.createElement("div",{className:"d-flex justify-content-around mb-2"},c.a.createElement(E.a.Switch,{id:"custom-switch",label:this.props.intl.formatMessage({id:"btn.aqv",defaultMessage:"Switch to All Questions View"}),className:"mr-2",onChange:this.onSwithchHandleChange}),c.a.createElement(p.a,{onClick:this.modalShow,className:"btn-md"},this.props.intl.formatMessage({id:"btn.sas",defaultMessage:"Submit Answer Sheet"}))),c.a.createElement(x.a,{date:this.state.date+60*this.props.exams.timeLimit*1e3,renderer:R,onTick:function(){e.timeTakenToComplete++},onComplete:function(){e.setState({timeExpired:!0,modalShow:!0})}})),c.a.createElement(g.a,{id:"et-top"},c.a.createElement(f.a,{lg:9},t.map((function(t,a){return c.a.createElement(L,{key:t.id,question:t,handleChange:e.onHandleChange,defaultChecked:e.state[t.id]?e.state[t.id]:null,index:e.state.showPagination?e.state.currentPage*e.state.pageSize:a+1})})),c.a.createElement("div",{className:"mt-2 d-flex justify-content-center"},this.state.showPagination&&c.a.createElement(b.a,{activePage:this.state.currentPage,itemsCountPerPage:1,totalItemsCount:this.props.exams.questions.length,pageRangeDisplayed:1,onChange:this.onPageHandler,itemClass:"page-item",linkClass:"page-link",prevPageText:"Previous",nextPageText:"Next"}))),c.a.createElement(f.a,{lg:3,className:"mt-3",id:"qNavigator"},this.state.showPagination&&c.a.createElement(B.a,{itemsCount:this.props.exams.questions.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onPageHandler:this.onPageHandler}))))))}}]),t}(m.Component);t.default=Object(k.c)(Object(S.b)((function(e){return{exams:e.exams,auth:e.auth}}),(function(e){return{onGetExamByIdLoader:function(t){return e(Object(z.e)(t))},onGetFreeExamByIdLoader:function(t){return e(Object(z.f)(t))},onPostExamByIdLoader:function(t){return e(Object(z.g)(t))},onPostFreeExamByIdLoader:function(t){return e(Object(z.h)(t))},onResetExamLoader:function(){return e({type:z.i.type})},onDisableQuestionsAddLoader:function(t){return e({type:z.b.type,payload:t})}}}))(Object(w.o)(Y)))}}]);
//# sourceMappingURL=40.c302811e.chunk.js.map