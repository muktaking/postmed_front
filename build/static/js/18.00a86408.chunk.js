(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[18],{136:function(e,t,n){"use strict";var a=n(6),r=n(11),i=n(128),c=n.n(i),o=/-(.)/g;var s=n(0),l=n.n(s),u=n(129);n.d(t,"a",(function(){return d}));var m=function(e){return e[0].toUpperCase()+(t=e,t.replace(o,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,i=n.displayName,o=void 0===i?m(e):i,s=n.Component,d=void 0===s?"div":s,f=n.defaultProps,p=l.a.forwardRef((function(t,n){var i=t.className,o=t.bsPrefix,s=t.as,m=void 0===s?d:s,f=Object(r.a)(t,["className","bsPrefix","as"]),p=Object(u.b)(o,e);return l.a.createElement(m,Object(a.a)({ref:n,className:c()(i,p)},f))}));return p.defaultProps=f,p.displayName=o,p}},143:function(e,t,n){"use strict";var a=n(0);var r=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=r(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}n.d(t,"a",(function(){return i}))},150:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},154:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},163:function(e,t,n){"use strict";var a=n(197),r=n(198);t.a=function(e,t,n,i){return Object(a.a)(e,t,n,i),function(){Object(r.a)(e,t,n,i)}}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var a=n(134),r=n(151),i=n(27),c=n.n(i),o=n(139),s=n.n(o),l=n(0),u=n.n(l),m=n(219),d=n(175),f=n(164),p=n(275),E=n(334),h=n(212),v=n(348),g=n(23),x=n(36),b=n(600),y=n(601),j=n(602),O=n(603),k=n(604),N=n(605),C=n(606),S=n(607),T=n(48),w=n(21),M=35,L=!0,D=function(e){var t=e.title,n=e.description,a=e.url,i=Object(r.a)(e,["title","description","url"]);return a="https://postmed.rajdoctors.com"+a,u.a.createElement("div",Object.assign({className:"mt-3"},i),u.a.createElement("hr",null),u.a.createElement(m.a,{variant:"success",className:"mr-1 p-1",style:{fontSize:".8rem"}},"Share on"),u.a.createElement(b.a,{url:a,quote:n,hashtag:t,className:"mr-1"},u.a.createElement(y.a,{size:M,round:L})),u.a.createElement(j.a,{url:a,title:n,hashtag:t,className:"mr-1"},u.a.createElement(O.a,{size:M,round:L})),u.a.createElement(k.a,{url:a,body:n,title:t,className:"mr-1"},u.a.createElement(N.a,{size:M,round:L})),u.a.createElement(C.a,{url:a,source:a,body:n,title:t,className:"mr-1"},u.a.createElement(S.a,{size:M,round:L})))},F=function(e){var t="primary";switch(e){case"Featured":t="warning";break;case"Free":t="secondary"}return t};function U(e){var t=e.width,n=void 0===t?"350":t,r=e.height,i=void 0===r?"180":r,c=e.examId,o=e.imgSrc,E=e.title,b=e.categoryType,y=e.description,j=e.createdAt,O=e.endDate,k=e.free,N=e.examLoader,C=(e.landing,Object(g.c)()),S=Object(g.d)((function(e){return e.auth.token})),M=Object(h.a)(),L=Object(l.useState)(null),U=Object(a.a)(L,2),P=U[0],R=U[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{key:c,className:"mr-2 mb-2",style:{width:n+"px"}},!Object(w.a)(w.b.admin,S)&&u.a.createElement(d.a.Img,{variant:"top",src:o,width:n,height:i}),u.a.createElement(d.a.Body,null,u.a.createElement("div",null,u.a.createElement(d.a.Title,{style:{fontSize:"1.4rem",fontWeight:"900"}},E),u.a.createElement(d.a.Subtitle,null,b&&b.map((function(e){return u.a.createElement(m.a,{key:e.name,variant:F(e.name),className:"mr-1"},e.name)})))),u.a.createElement("div",{className:"mt-1 pt-2"},u.a.createElement("p",{className:""},y," "),u.a.createElement("p",{className:"text-right"},u.a.createElement("span",{className:"text-muted"},M.formatMessage({id:"db.so",defaultMessage:"Start on"})," ",": ",s()(j).format("YYYY-MMM-DD hh:mm A")),u.a.createElement("br",null),u.a.createElement("span",{className:"text-danger"},M.formatMessage({id:"db.eo",defaultMessage:"Ends on"})," ",": ",s()(O).format("YYYY-MMM-DD hh:mm A")))),!Object(w.a)(w.b.admin,S)&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"d-flex justify-content-around"},u.a.createElement(x.Link,{className:"text-white",to:(k?"/exams/free/":"/exams/")+c},u.a.createElement(f.a,{variant:"outline-primary",onClick:function(){C(Object(T.j)())}},u.a.createElement(v.a,{id:"btn.start",defaultMessage:"Start Exam"}))),u.a.createElement(x.Link,{className:"text-white",to:"/result/rank/"+c},u.a.createElement(f.a,{onClick:function(){C(Object(T.j)())},variant:"outline-dark"},u.a.createElement(v.a,{id:"btn.rank",defaultMessage:"Rank"})))),u.a.createElement(D,{url:"/exams/"+c,title:E,description:y})),Object(w.a)(w.b.admin,S)&&u.a.createElement("div",null,u.a.createElement(f.a,{disabled:!0,variant:"primary",className:"mr-3"},"Edit"),u.a.createElement(p.a,{trigger:"click",placement:"top",overlay:u.a.createElement(Y,{id:c,res:P,setRes:R,token:S,examLoader:N})},u.a.createElement(f.a,{onClick:function(){C(Object(T.j)())},variant:"danger"},"Delete"))))))}var Y=u.a.forwardRef((function(e,t){var n=e.id,a=e.res,i=e.setRes,o=(e.token,e.examLoader),s=Object(r.a)(e,["id","res","setRes","token","examLoader"]);return u.a.createElement(E.a,Object.assign({id:"popover-basic",ref:t},s),u.a.createElement(E.a.Title,{as:"h3"},"Are You Sure To delete The Exam"),u.a.createElement(E.a.Content,null,u.a.createElement("p",null,a),u.a.createElement(f.a,{variant:"danger",onClick:function(){c()({baseURL:"https://postmed.v1.backend.rajdoctors.com",url:"/exams/"+n,method:"delete"}).then((function(e){o(),i("Successfully Deleted")})).catch((function(e){i("Can not delete the exam"+JSON.stringify(e))}))}},"Yes")))}))},173:function(e,t,n){"use strict";var a=n(150);function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var c=/^ms-/;function o(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(c,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(o(t))||r(e).getPropertyValue(o(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!s.test(e))}(r)?n+=o(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(o(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n(134),r=n(0),i=n.n(r),c=n(590),o=n(219),s=n(159),l=n(141),u=n(164),m=n(212),d=n(23),f=n(171);function p(e,t){return Math.floor(Math.random()*(t-e))+e}function E(e){var t=e.title,n=e.exams,E=e.landing,h=e.examLoader,v=Object(d.d)((function(e){return!!e.auth.token})),g=Object(m.a)(),x=Object(r.useState)(!1),b=Object(a.a)(x,2),y=b[0],j=b[1],O=function(){return j(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{show:y,onHide:O,size:"xl"},i.a.createElement(c.a.Header,{closeButton:!0},i.a.createElement(c.a.Title,null,g.formatMessage({id:"btn.more",defaultMessage:"More"}),i.a.createElement(o.a,{variant:"warning"}," "+t.toUpperCase()+" "),g.formatMessage({id:"btn.exams",defaultMessage:"Exams"}))),i.a.createElement(c.a.Body,null,i.a.createElement(s.a,{className:"mt-3 ml-3"},i.a.createElement(l.a,{className:"d-flex justify-content-center flex-wrap"},n.slice(2).map((function(e){return i.a.createElement(f.a,{key:e.id,examId:e.id,imgSrc:e.categoryType.length>0?"https://postmed.v1.backend.rajdoctors.com/"+e.categoryType[p(0,e.categoryType.length)].imageUrl:"/assets/image/uncat.jpg",title:e.title,categoryType:e.categoryType.length>0?e.categoryType:[{name:"Uncategorized"}],description:e.description,createdAt:e.createdAt,endDate:e.endDate,free:!v&&e.categoryType.filter((function(e){return"Free"===e.name})).length>0,examLoader:h})}))))),i.a.createElement(c.a.Footer,null,i.a.createElement(u.a,{variant:"secondary",onClick:O},"Close"))),i.a.createElement("div",{className:"mb-2 border position-relative",style:{marginTop:"100px"}},i.a.createElement("h3",{className:"text-center bg-warning text-light px-2 py-1",style:{position:"absolute",top:"-30px",left:"50px"}},t.toUpperCase()+" "," ",!E&&i.a.createElement(o.a,{variant:"light",className:"ml-2"}," ",n.length)," "),i.a.createElement("div",{className:"mt-4"},i.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},n.length<1&&i.a.createElement("p",{className:"lead text-danger"}," ",t+" "+g.formatMessage({id:"noExamCreated",defaultMessage:"Exams is not created"})," "),n.map((function(e,t){return t<3?i.a.createElement(f.a,{key:e.id,examId:e.id,imgSrc:e.categoryType.length>0?"https://postmed.v1.backend.rajdoctors.com/"+e.categoryType[p(0,e.categoryType.length)].imageUrl:"/assets/image/uncat.jpg",title:e.title,categoryType:e.categoryType.length>0?e.categoryType:[{name:"Uncategorized"}],description:e.description,createdAt:e.startDate,endDate:e.endDate,free:!v&&e.categoryType.filter((function(e){return"Free"===e.name})).length>0,examLoader:h}):""}))),!E&&i.a.createElement("div",{className:"my-2 d-flex justify-content-center"},n.length>2?i.a.createElement(u.a,{style:{height:"50px",width:"150px"},onClick:function(){j(!0)}},g.formatMessage({id:"btn.more",defaultMessage:"More..."}),"."):""))))}},188:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=r.a.createContext(null)},189:function(e,t,n){"use strict";var a=n(0),r=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},196:function(e,t,n){"use strict";var a=n(154),r=n(173),i=n(163),c=a.a&&"ontransitionend"in window;function o(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),c=Object(i.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),c()}}t.a=function(e,t,n){return c?(null==n&&(n=function(e){var t=Object(r.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0),o(e,n),Object(i.a)(e,"transitionend",t)):o(e,0,0)}},197:function(e,t,n){"use strict";var a=n(154),r=!1,i=!1;try{var c={get passive(){return r=!0},get once(){return i=r=!0}};a.a&&(window.addEventListener("test",c,c),window.removeEventListener("test",c,!0))}catch(o){}t.a=function(e,t,n,a){if(a&&"boolean"!==typeof a&&!i){var c=a.once,o=a.capture,s=n;!i&&c&&(s=n.__once||function e(a){this.removeEventListener(t,e,o),n.call(this,a)},n.__once=s),e.addEventListener(t,s,r?a:o)}e.addEventListener(t,n,a)}},198:function(e,t,n){"use strict";t.a=function(e,t,n,a){var r=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)}},199:function(e,t,n){"use strict";function a(e){e.offsetHeight}n.d(t,"a",(function(){return a}))},208:function(e,t,n){"use strict";var a=n(11),r=n(15),i=(n(24),n(0)),c=n.n(i),o=n(32),s=n.n(o),l=!1,u=c.a.createContext(null);n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p}));var m="exited",d="entering",f="entered",p="exiting",E=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=m,a.appearStatus=d):r=f:r=t.unmountOnExit||t.mountOnEnter?"unmounted":m,a.state={status:r},a.nextCallback=null,a}Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:m}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==f&&(t=d):n!==d&&n!==f||(t=p)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=s.a.findDOMNode(this);t===d?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===m&&this.setState({status:"unmounted"})},n.performEnter=function(e,t){var n=this,a=this.props.enter,r=this.context?this.context.isMounting:t,i=this.getTimeouts(),c=r?i.appear:i.enter;!t&&!a||l?this.safeSetState({status:f},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,r),this.safeSetState({status:d},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,c,(function(){n.safeSetState({status:f},(function(){n.props.onEntered(e,r)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n&&!l?(this.props.onExit(e),this.safeSetState({status:p},(function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,(function(){t.safeSetState({status:m},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:m},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var a=null==t&&!this.props.addEndListener;e&&!a?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=Object(a.a)(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return c.a.createElement(u.Provider,{value:null},n(e,r));var i=c.a.Children.only(n);return(c.a.createElement(u.Provider,{value:null},c.a.cloneElement(i,r)))},t}(c.a.Component);function h(){}E.contextType=u,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},E.UNMOUNTED=0,E.EXITED=1,E.ENTERING=2,E.ENTERED=3,E.EXITING=4;t.e=E},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},599:function(e,t,n){"use strict";n.r(t);var a=n(43),r=n(44),i=n(46),c=n(45),o=n(47),s=n(27),l=n.n(s),u=n(0),m=n.n(u),d=n(57),f=n(179),p=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this))).state={exams:[]},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.get("https://postmed.v1.backend.rajdoctors.com/exams/featured").then((function(t){200==t.status&&e.setState({exams:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement("div",{id:"exam",className:"mb-5 offset"},m.a.createElement(f.a,{title:this.props.intl.formatMessage({id:"db.fe",defaultMessage:"Our Featured Exams"}),exams:this.state.exams,landing:!0}))}}]),t}(u.Component);t.default=Object(d.c)(p)}}]);
//# sourceMappingURL=18.00a86408.chunk.js.map