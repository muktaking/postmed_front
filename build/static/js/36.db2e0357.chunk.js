(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[36],{235:function(e,a,t){"use strict";var r=t(6),n=t(11),s=t(128),l=t.n(s),i=t(0),c=t.n(i),o=(t(137),t(148)),m=t(129),u=t(209),d=t(200),p=t(153),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.active,o=e.disabled,u=e.className,b=e.variant,f=e.action,h=e.as,v=e.eventKey,E=e.onClick,x=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(m.b)(t,"list-group-item");var k=Object(i.useCallback)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();E&&E(e)}),[o,E]);return c.a.createElement(d.a,Object(r.a)({ref:a},x,{eventKey:Object(p.b)(v,x.href),as:h||(f?x.href?"a":"button":"div"),onClick:k,className:l()(u,t,s&&"active",o&&"disabled",b&&t+"-"+b,f&&t+"-action")}))}));b.defaultProps={variant:null,active:!1,disabled:!1},b.displayName="ListGroupItem";var f=b,h=c.a.forwardRef((function(e,a){var t,s=Object(o.a)(e,{activeKey:"onSelect"}),i=s.className,d=s.bsPrefix,p=s.variant,b=s.horizontal,f=s.as,h=void 0===f?"div":f,v=Object(n.a)(s,["className","bsPrefix","variant","horizontal","as"]);return d=Object(m.b)(d,"list-group"),t=b?!0===b?"horizontal":"horizontal-"+b:null,c.a.createElement(u.a,Object(r.a)({ref:a},v,{as:h,className:l()(i,d,p&&d+"-"+p,t&&d+"-"+t)}))}));h.defaultProps={variant:null,horizontal:null},h.displayName="ListGroup",h.Item=f;a.a=h},432:function(e,a,t){"use strict";var r=t(6),n=t(11),s=t(128),l=t.n(s),i=t(0),c=t.n(i),o=t(129),m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.striped,m=e.bordered,u=e.borderless,d=e.hover,p=e.size,b=e.variant,f=e.responsive,h=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(o.b)(t,"table"),E=l()(s,v,b&&v+"-"+b,p&&v+"-"+p,i&&v+"-striped",m&&v+"-bordered",u&&v+"-borderless",d&&v+"-hover"),x=c.a.createElement("table",Object(r.a)({},h,{className:E,ref:a}));if(f){var k=v+"-responsive";return"string"===typeof f&&(k=k+"-"+f),c.a.createElement("div",{className:k},x)}return x}));a.a=m},610:function(e,a,t){"use strict";t.r(a);var r=t(43),n=t(44),s=t(46),l=t(45),i=t(47),c=t(139),o=t.n(c),m=t(0),u=t.n(m),d=t(235),p=t(432),b=t(348),f=t(23),h=t(48),v=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.onExamRankByLoader(this.props.match.params.id)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"mt-5"},u.a.createElement("h3",{className:"text-center"},u.a.createElement(b.a,{id:"btn.rank",defaultMessage:"Rank"})),this.props.exam&&u.a.createElement(d.a,{horizontal:"lg"},u.a.createElement(d.a.Item,null,u.a.createElement(b.a,{id:"exam",defaultMessage:"Exams"})," :"," ",this.props.exam.title),u.a.createElement(d.a.Item,null,u.a.createElement(b.a,{id:"db.os",defaultMessage:"Total Mark"})," :"," ",this.props.exam.singleQuestionMark*this.props.exam.questions.length),u.a.createElement(d.a.Item,null,u.a.createElement(b.a,{id:"tquestions",defaultMessage:"Total Questions"})," ",": ",this.props.exam.questions.length),u.a.createElement(d.a.Item,null,u.a.createElement(b.a,{id:"penalty mark",defaultMessage:"Penalty Mark"})," ",":"," ",(this.props.exam.penaltyMark*this.props.exam.questionStemLength).toFixed(2)),u.a.createElement(d.a.Item,null,u.a.createElement(b.a,{id:"timelimit",defaultMessage:"Time Limit"})," :"," ",this.props.exam.timeLimit," Mins"),u.a.createElement(d.a.Item,null,u.a.createElement(b.a,{id:"db.so",defaultMessage:"Started From"})," :"," ",o()(this.props.exam.createdAt).calendar())),u.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,responsive:"md",className:"mt-3"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"#"),u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Score"),u.a.createElement("th",null,"Attempts"))),u.a.createElement("tbody",null,this.props.rank&&this.props.rank.map((function(a,t){return u.a.createElement("tr",{key:t,className:e.props.userId===a.user.id?"bg-success text-light ":""},u.a.createElement("td",null,t+1),u.a.createElement("td",null,a.user.name),u.a.createElement("td",null,a.exam.length>0?a.exam[0].score:"Exam Not Yet Tried"),u.a.createElement("td",null,a.exam.length>0?a.exam[0].attempts:"Exam Not Yet Tried"))})))))}}]),a}(m.Component);a.default=Object(f.b)((function(e){return{rank:e.exams.rank,exam:e.exams.exam,userId:e.auth.userId}}),(function(e){return{onExamRankByLoader:function(a){return e(Object(h.c)(a))}}}))(v)}}]);
//# sourceMappingURL=36.db2e0357.chunk.js.map