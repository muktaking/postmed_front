(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[43],{227:function(e,a,t){"use strict";var s=t(0),n=t.n(s),r=t(180),o=t(330),c=t(477),i=t(22),l=t(32),m=t(333),u=t(246),d={position:"fixed",top:"0px",left:"0px",width:"100%",zIndex:"1000"};a.a=Object(i.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var a=Object(c.a)(),t=[a.formatMessage({id:"btn.home",defaultMessage:"home"}),a.formatMessage({id:"btn.contact",defaultMessage:"contact"})],s=e.isAuthenticated?[a.formatMessage({id:"btn.db",defaultMessage:"dashboard"}),a.formatMessage({id:"btn.courses",defaultMessage:"courses"}),a.formatMessage({id:"btn.exams",defaultMessage:"exams"}),a.formatMessage({id:"btn.logout",defaultMessage:"logout"})]:[a.formatMessage({id:"btn.courses",defaultMessage:"courses"}),a.formatMessage({id:"btn.exams",defaultMessage:"exams"}),a.formatMessage({id:"btn.signup",defaultMessage:"signup"}),a.formatMessage({id:"btn.login",defaultMessage:"login"})],i=e.isAuthenticated?["dashboard","courses","exams","logout"]:["courses","exams","signup","login"];return n.a.createElement("div",{style:d},n.a.createElement(o.a,{bg:"dark",variant:"dark",expand:"md"},n.a.createElement(l.Link,{to:"/",className:"navbar-brand"},"MediOnExam"),n.a.createElement(o.a.Toggle,{"aria-controls":"navbarResponsive"}),n.a.createElement(o.a.Collapse,{id:"navbarResponsive"},n.a.createElement(r.a,{className:"ml-auto"},["home","contact"].map((function(a,s){return n.a.createElement(r.a.Item,{key:a,as:"li",className:"mr-3"},e.isLanding?n.a.createElement(u.Link,{activeClass:"active",to:a,spy:!0,smooth:!0,offset:-100,duration:500,href:"home"===a?"/":"/#".concat(a),className:"nav-link"},t[s]):n.a.createElement(m.HashLink,{to:"/#"+a,className:"nav-link",activeClassName:"active"},t[s]))})),i.map((function(e,a){return n.a.createElement(r.a.Item,{key:e,as:"li",className:"mr-3"},n.a.createElement(l.NavLink,{to:{pathname:"/"+e},className:"nav-link"},s[a]))}))))))}))},251:function(e,a,t){},339:function(e,a,t){"use strict";var s=t(0),n=t.n(s),r=t(180),o=t(22),c=t(32);a.a=Object(o.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var a=e.isAuthenticated?["dashboard","courses","exams","logout"]:["courses","exams","signup","login"];return n.a.createElement(r.a,{className:"bg-light"},n.a.createElement(r.a.Item,{as:"li",className:"mr-3"},n.a.createElement(c.NavLink,{to:{pathname:"/"},className:"nav-link link-hover"},"Home".toUpperCase())),a.map((function(e){return n.a.createElement(r.a.Item,{key:e,as:"li",className:"mr-3"},n.a.createElement(c.NavLink,{to:{pathname:"/"+e},className:"nav-link link-hover"},e.toUpperCase()))})),n.a.createElement(r.a.Item,{as:"li",className:"mr-3"},n.a.createElement(c.NavLink,{to:"/#contact",className:"nav-link link-hover"},"Contact".toUpperCase())))}))},669:function(e,a,t){"use strict";t.r(a);var s=t(43),n=t(48),r=t(47),o=t(44),c=t(46),i=t(0),l=t.n(i),m=(t(251),t(227)),u=t(339),d=function(e){function a(){return Object(s.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"registration"},l.a.createElement(m.a,{isLanding:!1}),l.a.createElement("div",{className:"landing"},l.a.createElement("div",{className:"home-wrap"},l.a.createElement("div",{className:"home-inner"}))),l.a.createElement("div",{className:"caption text-center",style:{top:"15%"}},l.a.createElement("h1",null,"404-Page"),l.a.createElement("p",{className:"lead"},this.props.location.state?this.props.location.state.message:"Your Desired Content -> Not Found"),l.a.createElement(u.a,null)))}}]),a}(i.Component);a.default=d}}]);
//# sourceMappingURL=43.62e8365d.chunk.js.map