(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[35],{165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,a){var i=r||"<<anonymous>>",s=a||n;if(null==t[n])return new Error("The "+o+" `"+s+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var c=arguments.length,l=Array(c>5?c-5:0),u=5;u<c;u++)l[u-5]=arguments[u];return e.apply(void 0,[t,n,r,o,a].concat(l))}},e.exports=t.default},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(){return Object(r.useState)(null)}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),o=n(162),a=n(0),i={position:"absolute",top:"0",left:"0",opacity:"0",pointerEvents:"none"},s={};function c(e,t,n){var c=void 0===n?{}:n,l=c.enabled,u=void 0===l||l,d=c.placement,f=void 0===d?"bottom":d,p=c.positionFixed,h=void 0!==p&&p,b=c.eventsEnabled,v=void 0===b||b,m=c.modifiers,O=void 0===m?{}:m,w=Object(a.useRef)(),j=!(!O.arrow||!O.arrow.element),y=Object(a.useCallback)((function(){w.current&&w.current.scheduleUpdate()}),[]),g=Object(a.useState)({placement:f,scheduleUpdate:y,outOfBoundaries:!1,styles:i,arrowStyles:s}),E=g[0],C=g[1];return Object(a.useEffect)((function(){y()}),[E.placement,y]),Object(a.useEffect)((function(){w.current&&(v?w.current.enableEventListeners():w.current.disableEventListeners())}),[v]),Object(a.useEffect)((function(){if(u&&null!=e&&null!=t){var n=O.arrow&&Object(r.a)({},O.arrow,{element:O.arrow.element});return w.current=new o.a(e,t,{placement:f,positionFixed:h,modifiers:Object(r.a)({},O,{arrow:n,applyStyle:{enabled:!1},updateStateModifier:{enabled:!0,order:900,fn:function(e){C({scheduleUpdate:y,styles:Object(r.a)({position:e.offsets.popper.position},e.styles),arrowStyles:e.arrowStyles,outOfBoundaries:e.hide,placement:e.placement})}}})}),function(){null!==w.current&&(w.current.destroy(),w.current=null)}}}),[u,f,h,e,t,j]),E}},169:function(e,t,n){"use strict";var r=n(158),o=n(184),a=n(0),i=n(149),s=n(137),c=n.n(s),l=function(){};t.a=function(e,t,n){var s=void 0===n?{}:n,u=s.disabled,d=s.clickTrigger,f=void 0===d?"click":d,p=Object(a.useRef)(!1),h=t||l,b=Object(a.useCallback)((function(t){var n,o=e&&("current"in e?e.current:e);c()(!!o,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),p.current=!o||!!((n=t).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(t)||Object(r.a)(o,t.target)}),[e]),v=Object(i.a)((function(e){p.current||h(e)})),m=Object(i.a)((function(e){27===e.keyCode&&h(e)}));Object(a.useEffect)((function(){if(!u&&null!=e){var t=Object(o.a)(document,f,b,!0),n=Object(o.a)(document,f,v),r=Object(o.a)(document,"keyup",m),a=[];return"ontouchstart"in document.documentElement&&(a=[].slice.call(document.body.children).map((function(e){return Object(o.a)(e,"mousemove",l)}))),function(){t(),n(),r(),a.forEach((function(e){return e()}))}}}),[e,u,f,b,v,m])}},174:function(e,t,n){"use strict";var r=n(5),o=n(10),a=n(128),i=n.n(a),s=n(0),c=n.n(s),l=n(139),u=n(149),d=n(144),f=n(159),p=n(129),h=n(143),b=n(157),v=n(154),m={show:!0,transition:h.a,closeLabel:"Close alert"},O={show:"onClose"},w=c.a.forwardRef((function(e,t){var n=Object(l.a)(e,O),a=n.bsPrefix,s=n.show,d=n.closeLabel,f=n.className,h=n.children,v=n.variant,m=n.onClose,w=n.dismissible,j=n.transition,y=Object(o.a)(n,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),g=Object(p.b)(a,"alert"),E=Object(u.a)((function(e){m(!1,e)})),C=c.a.createElement("div",Object(r.a)({role:"alert"},j?y:void 0,{className:i()(f,g,v&&g+"-"+v,w&&g+"-dismissible")}),w&&c.a.createElement(b.a,{onClick:E,label:d}),h);return j?c.a.createElement(j,Object(r.a)({unmountOnExit:!0,ref:t},y,{in:s}),C):s?C:null})),j=Object(f.a)("h4");j.displayName="DivStyledAsH4",w.displayName="Alert",w.defaultProps=m,w.Link=Object(d.a)("alert-link",{Component:v.a}),w.Heading=Object(d.a)("alert-heading",{Component:j}),t.a=w},231:function(e,t,n){"use strict";var r=n(5),o=n(10),a=n(14),i=n(158),s=n(0),c=n.n(s),l=n(33),u=n.n(l),d=(n(137),n(128)),f=n.n(d),p=n(162),h=n(23),b=n.n(h),v=n(167),m=n(203),O=n(168),w=n(169),j=n(186),y=c.a.forwardRef((function(e,t){var n=e.flip,a=e.placement,i=e.containerPadding,l=e.popperConfig,d=void 0===l?{}:l,f=e.transition,p=Object(v.a)(),h=p[0],b=p[1],y=Object(v.a)(),g=y[0],E=y[1],C=Object(m.a)(b,t),P=Object(j.a)(e.container),x=Object(j.a)(e.target),S=Object(s.useState)(!e.show),N=S[0],_=S[1],k=d.modifiers,M=void 0===k?{}:k,T=Object(O.a)(x,h,Object(r.a)({},d,{placement:a||"bottom",enableEvents:e.show,modifiers:Object(r.a)({},M,{preventOverflow:Object(r.a)({padding:i||5},M.preventOverflow),arrow:Object(r.a)({},M.arrow,{enabled:!!g,element:g}),flip:Object(r.a)({enabled:!!n},M.preventOverflow)})})),R=T.styles,H=T.arrowStyles,B=Object(o.a)(T,["styles","arrowStyles"]);e.show?N&&_(!1):e.transition||N||_(!0);var D=e.show||f&&!N;if(Object(w.a)(h,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!D)return null;var L=e.children(Object(r.a)({},B,{show:e.show,props:{style:R,ref:C},arrowProps:{style:H,ref:E}}));if(f){var A=e.onExit,F=e.onExiting,U=e.onEnter,K=e.onEntering,q=e.onEntered;L=c.a.createElement(f,{in:e.show,appear:!0,onExit:A,onExiting:F,onExited:function(){_(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:U,onEntering:K,onEntered:q},L)}return P?u.a.createPortal(L,P):null}));y.displayName="Overlay",y.propTypes={show:b.a.bool,placement:b.a.oneOf(p.a.placements),target:b.a.any,container:b.a.any,flip:b.a.bool,children:b.a.func.isRequired,containerPadding:b.a.number,popperConfig:b.a.object,rootClose:b.a.bool,rootCloseEvent:b.a.oneOf(["click","mousedown"]),rootCloseDisabled:b.a.bool,onHide:function(e){var t=b.a.func;e.rootClose&&(t=t.isRequired);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.apply(void 0,[e].concat(r))},transition:b.a.elementType,onEnter:b.a.func,onEntering:b.a.func,onEntered:b.a.func,onExit:b.a.func,onExiting:b.a.func,onExited:b.a.func},y.defaultProps={containerPadding:5};var g=y,E=n(143),C={transition:E.a,rootClose:!1,show:!1,placement:"top"};function P(e){var t=e.children,n=e.transition,a=Object(o.a)(e,["children","transition"]);return n=!0===n?E.a:n||null,c.a.createElement(g,Object(r.a)({},a,{transition:n}),(function(e){var a=e.props,i=e.arrowProps,s=e.show,u=Object(o.a)(e,["props","arrowProps","show"]);return function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(l.findDOMNode)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(l.findDOMNode)(e))})}(a,i),"function"===typeof t?t(Object(r.a)({},u,{},a,{show:s,arrowProps:i})):c.a.cloneElement(t,Object(r.a)({},u,{},a,{arrowProps:i,className:f()(t.props.className,!n&&s&&"show"),style:Object(r.a)({},t.props.style,{},a.style)}))}))}P.defaultProps=C;var x=P,S=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return this.props.children},t}(c.a.Component),N=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}},_=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).getTarget=function(){return u.a.findDOMNode(r.trigger.current)},r.handleShow=function(){clearTimeout(r._timeout),r._hoverState="show";var e=N(r.props.delay);e.show?r._timeout=setTimeout((function(){"show"===r._hoverState&&r.show()}),e.show):r.show()},r.handleHide=function(){clearTimeout(r._timeout),r._hoverState="hide";var e=N(r.props.delay);e.hide?r._timeout=setTimeout((function(){"hide"===r._hoverState&&r.hide()}),e.hide):r.hide()},r.handleFocus=function(e){var t=r.getChildProps().onFocus;r.handleShow(e),t&&t(e)},r.handleBlur=function(e){var t=r.getChildProps().onBlur;r.handleHide(e),t&&t(e)},r.handleClick=function(e){var t=r.getChildProps().onClick;r.state.show?r.hide():r.show(),t&&t(e)},r.handleMouseOver=function(e){r.handleMouseOverOut(r.handleShow,e,"fromElement")},r.handleMouseOut=function(e){return r.handleMouseOverOut(r.handleHide,e,"toElement")},r.trigger=c.a.createRef(),r.state={show:!!t.defaultShow},r.ariaModifier={enabled:!0,order:900,fn:function(e){var t=e.instance.popper,n=r.getTarget();if(!r.state.show||!n)return e;var o=t.getAttribute("role")||"";return t.id&&"tooltip"===o.toLowerCase()&&n.setAttribute("aria-describedby",t.id),e}},r}Object(a.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){clearTimeout(this._timeout)},n.getChildProps=function(){return c.a.Children.only(this.props.children).props},n.handleMouseOverOut=function(e,t,n){var r=t.currentTarget,o=t.relatedTarget||t.nativeEvent[n];o&&o===r||Object(i.a)(r,o)||e(t)},n.hide=function(){this.setState({show:!1})},n.show=function(){this.setState({show:!0})},n.render=function(){var e=this.props,t=e.trigger,n=e.overlay,a=e.children,i=e.popperConfig,l=void 0===i?{}:i,u=Object(o.a)(e,["trigger","overlay","children","popperConfig"]);delete u.delay,delete u.defaultShow;var d=c.a.Children.only(a),f={},p=null==t?[]:[].concat(t);return-1!==p.indexOf("click")&&(f.onClick=this.handleClick),-1!==p.indexOf("focus")&&(f.onFocus=this.handleShow,f.onBlur=this.handleHide),-1!==p.indexOf("hover")&&(f.onMouseOver=this.handleMouseOver,f.onMouseOut=this.handleMouseOut),c.a.createElement(c.a.Fragment,null,c.a.createElement(S,{ref:this.trigger},Object(s.cloneElement)(d,f)),c.a.createElement(x,Object(r.a)({},u,{popperConfig:Object(r.a)({},l,{modifiers:Object(r.a)({},l.modifiers,{ariaModifier:this.ariaModifier})}),show:this.state.show,onHide:this.handleHide,target:this.getTarget}),n))},t}(c.a.Component);_.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};t.a=_},335:function(e,t,n){"use strict";var r=n(5),o=n(10),a=n(128),i=n.n(a),s=n(0),c=n.n(s),l=(n(165),n(129)),u=c.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,s=e.bsPrefix,u=e.className,d=e.children,f=Object(o.a)(e,["as","bsPrefix","className","children"]);return s=Object(l.b)(s,"popover-header"),c.a.createElement(a,Object(r.a)({ref:t},f,{className:i()(s,u)}),d)})),d=c.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,s=e.bsPrefix,u=e.className,d=e.children,f=Object(o.a)(e,["as","bsPrefix","className","children"]);return s=Object(l.b)(s,"popover-body"),c.a.createElement(a,Object(r.a)({ref:t},f,{className:i()(u,s)}),d)})),f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.placement,s=e.className,u=e.style,f=e.children,p=e.content,h=e.arrowProps,b=(e.scheduleUpdate,e.outOfBoundaries,Object(o.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","scheduleUpdate","outOfBoundaries"])),v=Object(l.b)(n,"popover");return c.a.createElement("div",Object(r.a)({ref:t,role:"tooltip",style:u,"x-placement":a,className:i()(s,v,"bs-popover-"+a)},b),c.a.createElement("div",Object(r.a)({className:"arrow"},h)),p?c.a.createElement(d,null,f):f)}));f.defaultProps={placement:"right"},f.Title=u,f.Content=d;t.a=f}}]);
//# sourceMappingURL=35.e6ac4ddc.chunk.js.map