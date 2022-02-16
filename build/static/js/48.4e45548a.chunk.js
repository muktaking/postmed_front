(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[48],{158:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),s=a(186),l={position:"fixed",top:"45vh",left:"50%",zIndex:"10000000000"};function o(){return r.a.createElement(s.a,{animation:"grow",role:"status",variant:"dark",style:l})}},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(234),r=a.n(n);function s(e,t,a){var n=(t-1)*a;return r()(e).slice(n).take(a).value()}},306:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(372);t.a=function(e){var t=e.itemsCount,a=e.pageSize,n=e.onPageHandler,l=e.currentPage,o=Math.ceil(t/a);if(1===o)return null;for(var i=[],m=function(e){i.push(r.a.createElement(s.a.Item,{key:e,onClick:function(){n(e)},active:e===l,className:"my-2 mr-2 text-center",style:{width:"40px",height:"30px"}},e))},c=1;c<=o;c++)m(c);return r.a.createElement(s.a,{className:"justify-content-start align-content-start flex-wrap"},i)}},339:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(170),l=a(22),o=a(34);t.a=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var t=e.isAuthenticated?["dashboard","exams","logout"]:["exams","signup","login"];return r.a.createElement(s.a,{className:"bg-light"},r.a.createElement(s.a.Item,{as:"li",className:"mr-3"},r.a.createElement(o.NavLink,{to:{pathname:"/"},className:"nav-link"},"Home".toUpperCase())),r.a.createElement(s.a.Item,{as:"li",className:"mr-3"},r.a.createElement(o.NavLink,{to:"/#contact",className:"nav-link"},"Contact".toUpperCase())),t.map((function(e){return r.a.createElement(s.a.Item,{key:e,as:"li",className:"mr-3"},r.a.createElement(o.NavLink,{to:{pathname:"/"+e},className:"nav-link"},e.toUpperCase()))})))}))},681:function(e,t,a){"use strict";a.r(t);var n=a(134),r=a(41),s=a(46),l=a(44),o=a(42),i=a(43),m=a(0),c=a.n(m),u=a(227),d=a(650),p=a(241),h=a(217),g=a(350),E=a(233),f=a(173),x=a(556),y=a(172),k=a(140),v=a(54),S=a(345),C=a.n(S),b=a(22),w=a(18),P=a(322),I=a(305),N=function(e){var t=e.id,a=e.qType,n=e.stem,r=e.index,s=e.handleChange,l=e.defaultChecked,o=Object(b.d)((function(e){return e.exams.disableQuestions}));return c.a.createElement(E.a,{className:"px-md-4 px-xs-2"},c.a.createElement(f.a,{xs:"9"},r+". "+n),c.a.createElement(g.a.Group,{as:f.a,controlId:"formGroupQuestionStemAnswer"},"matrix"===a?c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a.Check,{type:"radio"},c.a.createElement(g.a.Check.Input,{disabled:o&&o.includes(t+"_"+r),type:"radio",name:t+"_"+r,id:"formHorizontalRadios1",value:1,defaultChecked:"1"===l,onChange:s,className:"mb-0"}),c.a.createElement(g.a.Check.Label,null,"True")),c.a.createElement(g.a.Check,{type:"radio"},c.a.createElement(g.a.Check.Input,{disabled:o&&o.includes(t+"_"+r),type:"radio",name:t+"_"+r,id:"formHorizontalRadios2",value:0,defaultChecked:"0"===l,onChange:s,className:"mb-0"}),c.a.createElement(g.a.Check.Label,null,"False"))):c.a.createElement(g.a.Check,null,c.a.createElement(g.a.Check.Input,{disabled:o&&o.includes(t.toString()),type:"radio",name:t,id:"formHorizontalRadios1",value:r,defaultChecked:l==r,onChange:s,className:"mb-0"}))))},T=function(e){var t=e.question,a=e.handleChange,n=e.defaultChecked,r=e.index;return console.log(r),c.a.createElement(I.a,{as:"ul",className:"mt-3"},c.a.createElement(I.a.Item,{as:"li",active:!0},c.a.createElement(u.a,{variant:"danger p-1 mr-2",style:{fontSize:"1rem"}},"Question No. ",r),c.a.createElement("span",null,t.qText)),t.stems.map((function(e,r){return c.a.createElement(I.a.Item,{as:"li",key:r},c.a.createElement(N,{qType:t.qType,stem:e,index:r+1,id:t.id,handleChange:a,defaultChecked:n?"matrix"===t.qType?n[r]:n[0]:null}))})))},H=a(339),q=a(306),L=a(158),M=a(49),O=a(215);function j(e){var t=e.examStartDialogueHandler,a=e.exams,r=Object(w.k)(),s=Object(m.useState)(!0),l=Object(n.a)(s,2),o=l[0],i=l[1];console.log(a);var h=function(){t(),i(!1)};return c.a.createElement("div",null,c.a.createElement(d.a,{show:o,onHide:h},c.a.createElement(d.a.Header,{closeButton:!0},c.a.createElement(d.a.Title,null,"Are You Sure to Proceed?")),c.a.createElement(d.a.Body,null,c.a.createElement("p",null,"Exam's Rules"),a&&c.a.createElement(I.a,null,c.a.createElement(I.a.Item,null,"Total Questions:"," ",c.a.createElement(u.a,null,a.questions&&a.questions.length)),c.a.createElement(I.a.Item,null,"Total Mark:"," ",c.a.createElement(u.a,null,a.questions&&a.singleQuestionMark&&a.questions.length*a.singleQuestionMark)),c.a.createElement(I.a.Item,null,"Time Limit: ",c.a.createElement(u.a,null,a.timeLimit&&a.timeLimit)," ","Mins"),c.a.createElement(I.a.Item,null,"Penalty Mark:"," ",c.a.createElement(u.a,null,a.totalPenaltyMark&&a.totalPenaltyMark)))),c.a.createElement(d.a.Footer,null,c.a.createElement(p.a,{variant:"secondary",onClick:function(){r.goBack()}},"Go Back"),c.a.createElement(p.a,{variant:"primary",onClick:h},"Proceed"))))}var z=function(){return c.a.createElement("span",{className:"text-danger"},"Your Time is Finished")},B=function(e){var t=e.hours,a=e.minutes,n=e.seconds;return e.completed?c.a.createElement(z,null):c.a.createElement("span",null,c.a.createElement(u.a,{variant:t<1&a<5?"danger":"success",style:{fontSize:"2rem"}},t+" H"),c.a.createElement(u.a,{variant:"light",style:{fontSize:"1.5rem"}},":"),c.a.createElement(u.a,{variant:t<1&a<5?"danger":"success",style:{fontSize:"2rem"}},a+" M"),c.a.createElement(u.a,{variant:"light",style:{fontSize:"1.5rem"}},":"),c.a.createElement(u.a,{variant:t<1&a<5?"danger":"success",style:{fontSize:"2rem"}},n+" S"))},F=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),m=0;m<s;m++)i[m]=arguments[m];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!1,pageSize:1,currentPage:1,date:Date.now(),timeExpired:!1,modalShow:!1,arrowState:!0,showPagination:!0,examStartDialogue:!0},a.timeTakenToComplete=0,a.answers=[],a.answerIds=new Set,a.modalShow=function(){a.setState({modalShow:!0})},a.modalHide=function(){a.setState({modalShow:!1})},a.examStartDialogueHandler=function(){a.setState({examStartDialogue:!1})},a.onPageHandler=function(e){a.setState({currentPage:e})},a.onHandleChange=function(e){var t=e.target.name,r=e.target.value;if(a.props.onDisableQuestionsAddLoader(t),t.includes("_")){var s=t.split("_"),l=Object(n.a)(s,2),o=l[0],i=l[1];a.setState((function(e){e[o]||(e[o]=[]),e[o][i-1]=r,a.answerIds.add(o)}))}else a.setState((function(e){e[t]=[r],a.answerIds.add(t)}))},a.onSwithchHandleChange=function(e){e.target.checked?a.setState({pageSize:a.props.exams.questions.length,currentPage:1,showPagination:!1}):a.setState({pageSize:1,showPagination:!0})},a.onSubmitHandler=function(){var e=a.props.match.params.id.split("_")[0],t=a.props.match.params.id.split("_")[1];a.setState({loading:!0}),a.answerIds.forEach((function(e){a.answers.push({id:e,stems:a.state[e],type:_.find(a.props.exams.questions,(function(t){return t.id===+e})).qType})})),a.props.free?a.props.onPostFreeExamByIdLoader({examId:e,timeTakenToComplete:(a.timeTakenToComplete/60).toFixed(4),answers:a.answers,questionIdsByOrder:a.props.exams.questionIdsByOrder}):a.props.onPostExamByIdLoader({examId:e,courseId:t,timeTakenToComplete:Math.ceil(a.timeTakenToComplete/60).toFixed(4),answers:a.answers,questionIdsByOrder:a.props.exams.questionIdsByOrder})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onResetExamLoader(),this.props.auth.token?this.props.onGetExamByIdLoader(this.props.match.params.id):this.props.onGetFreeExamByIdLoader(this.props.match.params.id)}},{key:"render",value:function(){var e=this,t=Object(O.a)(this.props.exams.questions,this.state.currentPage,this.state.pageSize);return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,null,c.a.createElement("title",null,"Exam- test your knowledge")),(this.props.exams.examResult||this.props.exams.error)&&c.a.createElement(w.c,{to:"/result"}),this.props.exams.questions.length<1&&!this.props.exams.examError&&c.a.createElement(L.a,null),c.a.createElement(d.a,{show:this.state.modalShow,onHide:this.modalHide},this.state.loading?c.a.createElement("p",{className:"lead mt-5 text-center"},"Your submitted Exam is processing..."):this.state.timeExpired?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a.Header,null,c.a.createElement(d.a.Title,{className:"text-danger"},"Time Expired")),c.a.createElement(d.a.Body,null,c.a.createElement("div",null,c.a.createElement("p",{className:"lead"},"You will Taken To Result Page."),c.a.createElement(x.a,{date:Date.now()+5e3,renderer:function(e){var t=e.seconds;return c.a.createElement("p",{className:"text-center text-danger",style:{fontSize:"2rem"}},t)},onComplete:this.onSubmitHandler})))):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a.Header,{closeButton:!0},c.a.createElement(d.a.Title,null,this.props.intl.formatMessage({id:"btn.sas",defaultMessage:"Submit Answer Sheet"}))),c.a.createElement(d.a.Body,null,c.a.createElement("div",null,c.a.createElement("p",{className:"lead"},this.props.intl.formatMessage({id:"et.agree",defaultMessage:"Are You Sure ? You will Taken To Result Page."})),c.a.createElement(x.a,{date:Date.now()+5e3,renderer:function(e){var t=e.seconds;return c.a.createElement("p",{className:"text-center text-danger",style:{fontSize:"2rem"}},t)},onComplete:this.onSubmitHandler}))),c.a.createElement(d.a.Footer,null,c.a.createElement(p.a,{variant:"secondary",onClick:this.modalHide},this.props.intl.formatMessage({id:"et.no",defaultMessage:"Go Back"})),c.a.createElement(p.a,{variant:"primary",onClick:this.onSubmitHandler},this.props.intl.formatMessage({id:"et.yes",defaultMessage:"Yes, I Want."}))))),this.props.exams.examError?c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{variant:"danger",className:"text-center mt-5"},c.a.createElement("h2",null,this.props.exams.examError),c.a.createElement("h4",null,"Possible Solution"),c.a.createElement("p",null,"You may not be logged in. So you can not participate exams other than free. So login or participate free exam only.")),c.a.createElement(H.a,null)):this.props.exams.timeLimit&&(this.state.examStartDialogue?c.a.createElement(j,{exams:this.props.exams,examStartDialogueHandler:this.examStartDialogueHandler}):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"text-dark text-center mt-1",id:"et-top"},c.a.createElement(g.a.Switch,{id:"custom-switch",label:this.props.intl.formatMessage({id:"btn.aqv",defaultMessage:"Switch to All Questions View"}),className:"mb-2",onChange:this.onSwithchHandleChange}),c.a.createElement(x.a,{date:this.state.date+60*this.props.exams.timeLimit*1e3,renderer:B,onTick:function(){e.timeTakenToComplete++},onComplete:function(){e.setState({timeExpired:!0,modalShow:!0})}})),c.a.createElement("div",{className:"scroll-container d-flex justify-content-center flex-wrap"},c.a.createElement(P.Link,{to:"et-top",spy:!0,smooth:!0,offset:-50,duration:500},c.a.createElement(k.G,{size:"1.2rem"})),c.a.createElement(P.Link,{to:"qNavigator",spy:!0,smooth:!0,offset:-50,duration:500},c.a.createElement(k.F,{size:"1.2rem"}))),c.a.createElement(E.a,null,c.a.createElement(f.a,{lg:9},t.map((function(t,a){return c.a.createElement(T,{key:t.id,question:t,handleChange:e.onHandleChange,defaultChecked:e.state[t.id]?e.state[t.id]:null,index:e.state.showPagination?e.state.currentPage*e.state.pageSize:a+1})})),c.a.createElement("div",{className:"mt-2 d-flex justify-content-center"},this.state.showPagination&&c.a.createElement(C.a,{activePage:this.state.currentPage,itemsCountPerPage:1,totalItemsCount:this.props.exams.questions.length,pageRangeDisplayed:1,onChange:this.onPageHandler,itemClass:"page-item",linkClass:"page-link",prevPageText:"Previous",nextPageText:"Next"}),c.a.createElement(p.a,{onClick:this.modalShow,className:"mb-3 ml-5 btn-md",id:"qNavigator"},this.props.intl.formatMessage({id:"btn.sas",defaultMessage:"Submit Answer Sheet"})))),c.a.createElement(f.a,{lg:3,className:"mt-3"},this.state.showPagination&&c.a.createElement(q.a,{itemsCount:this.props.exams.questions.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onPageHandler:this.onPageHandler}))))))}}]),t}(m.Component);t.default=Object(v.c)(Object(b.b)((function(e){return{exams:e.exams,auth:e.auth}}),(function(e){return{onGetExamByIdLoader:function(t){return e(Object(M.e)(t))},onGetFreeExamByIdLoader:function(t){return e(Object(M.f)(t))},onPostExamByIdLoader:function(t){return e(Object(M.g)(t))},onPostFreeExamByIdLoader:function(t){return e(Object(M.h)(t))},onResetExamLoader:function(){return e({type:M.i.type})},onDisableQuestionsAddLoader:function(t){return e({type:M.b.type,payload:t})}}}))(Object(w.o)(F)))}}]);
//# sourceMappingURL=48.4e45548a.chunk.js.map