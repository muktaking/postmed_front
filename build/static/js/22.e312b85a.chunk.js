(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{148:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(165),c={position:"fixed",top:"45vh",left:"50%",zIndex:"10000000000"};function i(){return r.a.createElement(o.a,{animation:"grow",role:"status",variant:"dark",style:c})}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(11);function r(e,t){if(null==e)return{};var a,r,o=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},174:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a,n,r,o){var c=n||"<<anonymous>>",i=o||a;if(null==t[a])return new Error("The "+r+" `"+i+"` is required to make `"+c+"` accessible for users of assistive technologies such as screen readers.");for(var l=arguments.length,s=Array(l>5?l-5:0),u=5;u<l;u++)s[u-5]=arguments[u];return e.apply(void 0,[t,a,n,r,o].concat(s))}},e.exports=t.default},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useState)(null)}},183:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(6),r=a(166),o=a(0),c={position:"absolute",top:"0",left:"0",opacity:"0",pointerEvents:"none"},i={};function l(e,t,a){var l=void 0===a?{}:a,s=l.enabled,u=void 0===s||s,d=l.placement,m=void 0===d?"bottom":d,f=l.positionFixed,p=void 0!==f&&f,h=l.eventsEnabled,b=void 0===h||h,v=l.modifiers,E=void 0===v?{}:v,O=Object(o.useRef)(),g=!(!E.arrow||!E.arrow.element),w=Object(o.useCallback)((function(){O.current&&O.current.scheduleUpdate()}),[]),y=Object(o.useState)({placement:m,scheduleUpdate:w,outOfBoundaries:!1,styles:c,arrowStyles:i}),j=y[0],C=y[1];return Object(o.useEffect)((function(){w()}),[j.placement,w]),Object(o.useEffect)((function(){O.current&&(b?O.current.enableEventListeners():O.current.disableEventListeners())}),[b]),Object(o.useEffect)((function(){if(u&&null!=e&&null!=t){var a=E.arrow&&Object(n.a)({},E.arrow,{element:E.arrow.element});return O.current=new r.a(e,t,{placement:m,positionFixed:p,modifiers:Object(n.a)({},E,{arrow:a,applyStyle:{enabled:!1},updateStateModifier:{enabled:!0,order:900,fn:function(e){C({scheduleUpdate:w,styles:Object(n.a)({position:e.offsets.popper.position},e.styles),arrowStyles:e.arrowStyles,outOfBoundaries:e.hide,placement:e.placement})}}})}),function(){null!==O.current&&(O.current.destroy(),O.current=null)}}}),[u,m,p,e,t,g]),j}},184:function(e,t,a){"use strict";var n=a(157),r=a(163),o=a(0),c=a(142),i=a(137),l=a.n(i),s=function(){};t.a=function(e,t,a){var i=void 0===a?{}:a,u=i.disabled,d=i.clickTrigger,m=void 0===d?"click":d,f=Object(o.useRef)(!1),p=t||s,h=Object(o.useCallback)((function(t){var a,r=e&&("current"in e?e.current:e);l()(!!r,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),f.current=!r||!!((a=t).metaKey||a.altKey||a.ctrlKey||a.shiftKey)||!function(e){return 0===e.button}(t)||Object(n.a)(r,t.target)}),[e]),b=Object(c.a)((function(e){f.current||p(e)})),v=Object(c.a)((function(e){27===e.keyCode&&p(e)}));Object(o.useEffect)((function(){if(!u&&null!=e){var t=Object(r.a)(document,m,h,!0),a=Object(r.a)(document,m,b),n=Object(r.a)(document,"keyup",v),o=[];return"ontouchstart"in document.documentElement&&(o=[].slice.call(document.body.children).map((function(e){return Object(r.a)(e,"mousemove",s)}))),function(){t(),a(),n(),o.forEach((function(e){return e()}))}}}),[e,u,m,h,b,v])}},220:function(e,t,a){"use strict";var n=a(6),r=a(11),o=a(128),c=a.n(o),i=a(0),l=a.n(i),s=a(129),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.variant,i=e.pill,u=e.className,d=e.as,m=void 0===d?"span":d,f=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),p=Object(s.b)(a,"badge");return l.a.createElement(m,Object(n.a)({ref:t},f,{className:c()(u,p,i&&p+"-pill",o&&p+"-"+o)}))}));u.displayName="Badge",u.defaultProps={pill:!1},t.a=u},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(134),r=a(27),o=a.n(r),c=a(0),i=a.n(c),l=a(591),s=a(186),u=a(164),d=a(224),m=a.n(d),f=(a(205),a(147)),p=a(148);function h(e){var t=e.defaultValue,a=void 0===t?[]:t,r=Object(c.useState)(!1),d=Object(n.a)(r,2),h=d[0],b=d[1],v=Object(c.useState)(null),E=Object(n.a)(v,2),O=E[0],g=E[1],w=Object(c.useState)(new Date),y=Object(n.a)(w,2),j=y[0],C=y[1],S=Object(c.useState)(new Date),M=Object(n.a)(S,2),D=M[0],x=M[1],k=Object(c.useRef)();return i.a.createElement("div",null,h&&i.a.createElement(p.a,null),i.a.createElement(l.a,{show:O,onClose:function(){g(null)},style:{position:"absolute"}},i.a.createElement(l.a.Header,null,i.a.createElement("strong",{className:"mr-auto"},"Message")),i.a.createElement(l.a.Body,null,O)),i.a.createElement("h4",null,"Routine Builder"),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"my-3 mr-5"},i.a.createElement("p",null,"Start Date"),i.a.createElement(m.a,{selected:a.length>0?a[1]:j,onChange:function(e){a.length>0&&(a[1]=e),C(e)},showTimeSelect:!0,minDate:new Date,dateFormat:"yyyy-MMM-dd, hh:mm a"}),i.a.createElement(f.n,{size:"1.7rem"})),i.a.createElement("div",{className:"my-3"},i.a.createElement("p",null,"End Date"),i.a.createElement(m.a,{selected:a.length>0?a[2]:D,onChange:function(e){a.length>0&&(a[2]=e),x(e)},showTimeSelect:!0,minDate:new Date,dateFormat:"yyyy-MMM-dd, hh:mm a"}),i.a.createElement(f.n,{size:"1.7rem"}))),i.a.createElement(s.a.Group,{controlId:"exampleForm.ControlTextarea1"},i.a.createElement(s.a.Label,null,"Syllabus"),i.a.createElement(s.a.Control,{as:"textarea",ref:k,rows:2,defaultValue:a.length>0?a[3]:""})),i.a.createElement(u.a,{variant:"primary",onClick:function(){b(!0),a.length>0?o.a.put("https://backend.postmed.v1.rajdoctors.com/routine",{id:a[0],startDate:a[1],endDate:a[2],syllabus:k.current.value}).then((function(e){b(!1),g(e.data.message)})).catch((function(e){b(!1),g(e.message)})):o.a.post("https://backend.postmed.v1.rajdoctors.com/routine",{startDate:j,endDate:D,syllabus:k.current.value}).then((function(e){b(!1),g(e.data.message)})).catch((function(e){b(!1),g(e.message)}))}},"Submit"))}},265:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(134),r=a(152),o=a(27),c=a.n(o),i=a(140),l=a.n(i),s=a(0),u=a.n(s),d=a(583),m=a(164),f=a(590),p=a(591),h=a(220),b=a(272),v=a(327),E=a(233);var O=u.a.forwardRef((function(e,t){var a=e.id,n=e.setMsg,o=Object(r.a)(e,["id","setMsg"]);return u.a.createElement(d.a,Object.assign({ref:t,id:"button-tooltip"},o),u.a.createElement("p",null,"Are you sure to delete this syllabus."),u.a.createElement(m.a,{variant:"danger",onClick:function(){c.a.delete("https://backend.postmed.v1.rajdoctors.com/routine/"+a).then((function(e){console.log(e),n(e.data.message)})).catch((function(e){console.log(e),n(e.message)}))}},"Yes"))}));function g(e){var t=e.showRaw,a=Object(s.useState)([]),r=Object(n.a)(a,2),o=r[0],i=r[1],d=Object(s.useState)(!1),g=Object(n.a)(d,2),w=g[0],y=g[1],j=Object(s.useState)(null),C=Object(n.a)(j,2),S=C[0],M=C[1],D=Object(s.useState)([]),x=Object(n.a)(D,2),k=x[0],N=x[1],T=function(){y(!1)};return Object(s.useEffect)((function(){c.a.get("https://backend.postmed.v1.rajdoctors.com/routine"+(t?"/raw":"")).then((function(e){i(e.data)})).catch()}),[t]),u.a.createElement("div",{className:"container"},u.a.createElement(f.a,{show:w,onHide:T},u.a.createElement(f.a.Header,{closeButton:!0},u.a.createElement(f.a.Title,null,"Edit The Syllabus")),u.a.createElement(f.a.Body,null,u.a.createElement(E.a,{defaultValue:k})),u.a.createElement(f.a.Footer,null,u.a.createElement(m.a,{variant:"secondary",onClick:T},"Close"))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-12"},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},t&&u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{show:S,onClose:function(){M(null)},style:{position:"absolute",right:"10px",top:"10px"}},u.a.createElement(p.a.Header,null,u.a.createElement("strong",{className:"mr-auto"},"Message")),u.a.createElement(p.a.Body,null,S)),u.a.createElement("h4",{className:"card-title"},"Raw Routine"),u.a.createElement(m.a,{variant:"light",onClick:function(){c.a.get("https://backend.postmed.v1.rajdoctors.com/routine/raw").then((function(e){i(e.data)})).catch()}},u.a.createElement(v.a,{size:"1.3rem"}))),u.a.createElement("div",{id:"content",style:{maxHeight:"350px",overflowY:"scroll"}},u.a.createElement("ul",{className:"timeline"},o.map((function(e,a){return u.a.createElement("li",{key:e.id,className:"event","data-date":l()(e.startDate).format("YYYY-MMM-DD, h:mm a")},u.a.createElement("p",null,e.syllabus),u.a.createElement("p",{className:"text-danger"},u.a.createElement(h.a,{variant:"info",className:"mr-2"},"Status:"," "),function(e,t){var a=new Date,n=new Date(e),r=new Date(t);return n.getTime()<=a.getTime()&&r.getTime()>=a.getTime()?"Ongoing":r.getTime()<=a.getTime()?"Past":"Upcoming"}(e.startDate,e.endDate)),u.a.createElement("p",{className:"text-secondary"},"Exam ends:"," ",l()(e.endDate).format("YYYY-MMM-DD, h:mm a")),t&&u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{variant:"warning",onClick:function(){y(!0),N([e.id,new Date(e.startDate),new Date(e.endDate),e.syllabus])}},"Edit"),u.a.createElement(b.a,{trigger:"click",placement:"right",overlay:u.a.createElement(O,{setMsg:M,id:e.id})},u.a.createElement(m.a,{variant:"danger",className:"ml-2"},"Delete"))))})))))))))}},272:function(e,t,a){"use strict";var n=a(6),r=a(11),o=a(15),c=a(157),i=a(0),l=a.n(i),s=a(32),u=a.n(s),d=(a(137),a(128)),m=a.n(d),f=a(166),p=a(24),h=a.n(p),b=a(182),v=a(192),E=a(183),O=a(184),g=a(179),w=l.a.forwardRef((function(e,t){var a=e.flip,o=e.placement,c=e.containerPadding,s=e.popperConfig,d=void 0===s?{}:s,m=e.transition,f=Object(b.a)(),p=f[0],h=f[1],w=Object(b.a)(),y=w[0],j=w[1],C=Object(v.a)(h,t),S=Object(g.a)(e.container),M=Object(g.a)(e.target),D=Object(i.useState)(!e.show),x=D[0],k=D[1],N=d.modifiers,T=void 0===N?{}:N,P=Object(E.a)(M,p,Object(n.a)({},d,{placement:o||"bottom",enableEvents:e.show,modifiers:Object(n.a)({},T,{preventOverflow:Object(n.a)({padding:c||5},T.preventOverflow),arrow:Object(n.a)({},T.arrow,{enabled:!!y,element:y}),flip:Object(n.a)({enabled:!!a},T.preventOverflow)})})),_=P.styles,R=P.arrowStyles,H=Object(r.a)(P,["styles","arrowStyles"]);e.show?x&&k(!1):e.transition||x||k(!0);var F=e.show||m&&!x;if(Object(O.a)(p,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!F)return null;var B=e.children(Object(n.a)({},H,{show:e.show,props:{style:_,ref:C},arrowProps:{style:R,ref:j}}));if(m){var Y=e.onExit,A=e.onExiting,U=e.onEnter,z=e.onEntering,K=e.onEntered;B=l.a.createElement(m,{in:e.show,appear:!0,onExit:Y,onExiting:A,onExited:function(){k(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:U,onEntering:z,onEntered:K},B)}return S?u.a.createPortal(B,S):null}));w.displayName="Overlay",w.propTypes={show:h.a.bool,placement:h.a.oneOf(f.a.placements),target:h.a.any,container:h.a.any,flip:h.a.bool,children:h.a.func.isRequired,containerPadding:h.a.number,popperConfig:h.a.object,rootClose:h.a.bool,rootCloseEvent:h.a.oneOf(["click","mousedown"]),rootCloseDisabled:h.a.bool,onHide:function(e){var t=h.a.func;e.rootClose&&(t=t.isRequired);for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return t.apply(void 0,[e].concat(n))},transition:h.a.elementType,onEnter:h.a.func,onEntering:h.a.func,onEntered:h.a.func,onExit:h.a.func,onExiting:h.a.func,onExited:h.a.func},w.defaultProps={containerPadding:5};var y=w,j=a(144),C={transition:j.a,rootClose:!1,show:!1,placement:"top"};function S(e){var t=e.children,a=e.transition,o=Object(r.a)(e,["children","transition"]);return a=!0===a?j.a:a||null,l.a.createElement(y,Object(n.a)({},o,{transition:a}),(function(e){var o=e.props,c=e.arrowProps,i=e.show,u=Object(r.a)(e,["props","arrowProps","show"]);return function(e,t){var a=e.ref,n=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(s.findDOMNode)(e))}),t.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(s.findDOMNode)(e))})}(o,c),"function"===typeof t?t(Object(n.a)({},u,{},o,{show:i,arrowProps:c})):l.a.cloneElement(t,Object(n.a)({},u,{},o,{arrowProps:c,className:m()(t.props.className,!a&&i&&"show"),style:Object(n.a)({},t.props.style,{},o.style)}))}))}S.defaultProps=C;var M=S,D=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return this.props.children},t}(l.a.Component),x=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}},k=function(e){function t(t,a){var n;return(n=e.call(this,t,a)||this).getTarget=function(){return u.a.findDOMNode(n.trigger.current)},n.handleShow=function(){clearTimeout(n._timeout),n._hoverState="show";var e=x(n.props.delay);e.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),e.show):n.show()},n.handleHide=function(){clearTimeout(n._timeout),n._hoverState="hide";var e=x(n.props.delay);e.hide?n._timeout=setTimeout((function(){"hide"===n._hoverState&&n.hide()}),e.hide):n.hide()},n.handleFocus=function(e){var t=n.getChildProps().onFocus;n.handleShow(e),t&&t(e)},n.handleBlur=function(e){var t=n.getChildProps().onBlur;n.handleHide(e),t&&t(e)},n.handleClick=function(e){var t=n.getChildProps().onClick;n.state.show?n.hide():n.show(),t&&t(e)},n.handleMouseOver=function(e){n.handleMouseOverOut(n.handleShow,e,"fromElement")},n.handleMouseOut=function(e){return n.handleMouseOverOut(n.handleHide,e,"toElement")},n.trigger=l.a.createRef(),n.state={show:!!t.defaultShow},n.ariaModifier={enabled:!0,order:900,fn:function(e){var t=e.instance.popper,a=n.getTarget();if(!n.state.show||!a)return e;var r=t.getAttribute("role")||"";return t.id&&"tooltip"===r.toLowerCase()&&a.setAttribute("aria-describedby",t.id),e}},n}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){clearTimeout(this._timeout)},a.getChildProps=function(){return l.a.Children.only(this.props.children).props},a.handleMouseOverOut=function(e,t,a){var n=t.currentTarget,r=t.relatedTarget||t.nativeEvent[a];r&&r===n||Object(c.a)(n,r)||e(t)},a.hide=function(){this.setState({show:!1})},a.show=function(){this.setState({show:!0})},a.render=function(){var e=this.props,t=e.trigger,a=e.overlay,o=e.children,c=e.popperConfig,s=void 0===c?{}:c,u=Object(r.a)(e,["trigger","overlay","children","popperConfig"]);delete u.delay,delete u.defaultShow;var d=l.a.Children.only(o),m={},f=null==t?[]:[].concat(t);return-1!==f.indexOf("click")&&(m.onClick=this.handleClick),-1!==f.indexOf("focus")&&(m.onFocus=this.handleShow,m.onBlur=this.handleHide),-1!==f.indexOf("hover")&&(m.onMouseOver=this.handleMouseOver,m.onMouseOut=this.handleMouseOut),l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{ref:this.trigger},Object(i.cloneElement)(d,m)),l.a.createElement(M,Object(n.a)({},u,{popperConfig:Object(n.a)({},s,{modifiers:Object(n.a)({},s.modifiers,{ariaModifier:this.ariaModifier})}),show:this.state.show,onHide:this.handleHide,target:this.getTarget}),a))},t}(l.a.Component);k.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};t.a=k},609:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(0),r=a.n(n),o=a(160),c=a(139),i=a(233),l=a(265);function s(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{sm:4},r.a.createElement(i.a,null)),r.a.createElement(c.a,{sm:8},r.a.createElement(l.a,{showRaw:!0})))}}}]);
//# sourceMappingURL=22.e312b85a.chunk.js.map