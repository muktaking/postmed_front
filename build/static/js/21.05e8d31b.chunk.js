(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[21],{155:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(11);function r(e,t){if(null==e)return{};var a,r,l=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(183),r=a.n(n);function l(e,t,a){var n=(t-1)*a;return r()(e).slice(n).take(a).value()}},239:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=o(a(24)),l=o(a(240)),i=o(a(241)),s=o(a(128));function o(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(e){function t(){return m(this,t),f(this,p(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),a=t,(r=[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,r=t.pageRangeDisplayed,o=t.activePage,c=t.prevPageText,u=t.nextPageText,m=t.firstPageText,d=t.lastPageText,f=t.totalItemsCount,p=t.onChange,b=t.activeClass,g=t.itemClass,v=t.itemClassFirst,y=t.itemClassPrev,h=t.itemClassNext,E=t.itemClassLast,C=t.activeLinkClass,O=t.disabledClass,j=(t.hideDisabled,t.hideNavigation,t.linkClass),S=t.linkClassFirst,x=t.linkClassPrev,k=t.linkClassNext,P=t.linkClassLast,q=(t.hideFirstLastPages,t.getPageUrl),T=new l.default(a,r).build(f,o),N=T.first_page;N<=T.last_page;N++)e.push(n.default.createElement(i.default,{isActive:N===o,key:N,href:q(N),pageNumber:N,pageText:N+"",onClick:p,itemClass:g,linkClass:j,activeClass:b,activeLinkClass:C,ariaLabel:"Go to page number ".concat(N)}));return this.isPrevPageVisible(T.has_previous_page)&&e.unshift(n.default.createElement(i.default,{key:"prev"+T.previous_page,href:q(T.previous_page),pageNumber:T.previous_page,onClick:p,pageText:c,isDisabled:!T.has_previous_page,itemClass:(0,s.default)(g,y),linkClass:(0,s.default)(j,x),disabledClass:O,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(T.has_previous_page)&&e.unshift(n.default.createElement(i.default,{key:"first",href:q(1),pageNumber:1,onClick:p,pageText:m,isDisabled:!T.has_previous_page,itemClass:(0,s.default)(g,v),linkClass:(0,s.default)(j,S),disabledClass:O,ariaLabel:"Go to first page"})),this.isNextPageVisible(T.has_next_page)&&e.push(n.default.createElement(i.default,{key:"next"+T.next_page,href:q(T.next_page),pageNumber:T.next_page,onClick:p,pageText:u,isDisabled:!T.has_next_page,itemClass:(0,s.default)(g,h),linkClass:(0,s.default)(j,k),disabledClass:O,ariaLabel:"Go to next page"})),this.isLastPageVisible(T.has_next_page)&&e.push(n.default.createElement(i.default,{key:"last",href:q(T.total_pages),pageNumber:T.total_pages,onClick:p,pageText:d,isDisabled:T.current_page===T.total_pages,itemClass:(0,s.default)(g,E),linkClass:(0,s.default)(j,P),disabledClass:O,ariaLabel:"Go to last page"})),e}},{key:"render",value:function(){var e=this.buildPages();return n.default.createElement("ul",{className:this.props.innerClass},e)}}])&&d(a.prototype,r),o&&d(a,o),t}(n.default.Component);t.default=v,g(v,"propTypes",{totalItemsCount:r.default.number.isRequired,onChange:r.default.func.isRequired,activePage:r.default.number,itemsCountPerPage:r.default.number,pageRangeDisplayed:r.default.number,prevPageText:r.default.oneOfType([r.default.string,r.default.element]),nextPageText:r.default.oneOfType([r.default.string,r.default.element]),lastPageText:r.default.oneOfType([r.default.string,r.default.element]),firstPageText:r.default.oneOfType([r.default.string,r.default.element]),disabledClass:r.default.string,hideDisabled:r.default.bool,hideNavigation:r.default.bool,innerClass:r.default.string,itemClass:r.default.string,itemClassFirst:r.default.string,itemClassPrev:r.default.string,itemClassNext:r.default.string,itemClassLast:r.default.string,linkClass:r.default.string,activeClass:r.default.string,activeLinkClass:r.default.string,linkClassFirst:r.default.string,linkClassPrev:r.default.string,linkClassNext:r.default.string,linkClassLast:r.default.string,hideFirstLastPages:r.default.bool,getPageUrl:r.default.func}),g(v,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}})},240:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var n=Math.max(1,t-Math.floor(this.length/2)),r=Math.min(a,t+Math.floor(this.length/2));r-n+1<this.length&&(t<a/2?r=Math.min(a,r+(this.length-(r-n))):n=Math.max(1,n-(this.length-(r-n)))),r-n+1>this.length&&(t>a/2?n++:r--);var l=this.per_page*(t-1);l<0&&(l=0);var i=this.per_page*t-1;return i<0&&(i=0),i>Math.max(e-1,0)&&(i=Math.max(e-1,0)),{total_pages:a,pages:Math.min(r-n+1,a),current_page:t,first_page:n,last_page:r,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(i-l+1,e),first_result:l,last_result:i}}},241:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=i(a(24)),l=i(a(128));function i(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(e){function t(){return c(this,t),m(this,d(t).apply(this,arguments))}var a,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,n=t.pageNumber;e.preventDefault(),a||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,r=(t.pageNumber,t.activeClass),i=t.itemClass,s=t.linkClass,o=t.activeLinkClass,c=t.disabledClass,u=t.isActive,m=t.isDisabled,d=t.href,f=t.ariaLabel,b=(0,l.default)(i,(p(e={},r,u),p(e,c,m),e)),g=(0,l.default)(s,p({},o,u));return n.default.createElement("li",{className:b,onClick:this.handleClick.bind(this)},n.default.createElement("a",{className:g,href:d,"aria-label":f},a))}}])&&u(a.prototype,r),i&&u(a,i),t}(n.Component);t.default=b,p(b,"propTypes",{pageText:r.default.oneOfType([r.default.string,r.default.element]),pageNumber:r.default.number.isRequired,onClick:r.default.func.isRequired,isActive:r.default.bool.isRequired,isDisabled:r.default.bool,activeClass:r.default.string,activeLinkClass:r.default.string,itemClass:r.default.string,linkClass:r.default.string,disabledClass:r.default.string,href:r.default.string}),p(b,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})},599:function(e,t,a){"use strict";a.r(t);var n=a(138),r=a(0),l=a.n(r),i=a(175),s=a(23),o=a(145),c=a(139),u=a(49),m=a(54),d=a(243),f=a(182),p=a(6),b=a(11),g=a(128),v=a.n(g);function y(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}function h(){var e=function(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(r.useRef)(),a=function(){return clearTimeout(t.current)};return y(a),{set:function(n,r){e()&&(a(),t.current=setTimeout(n,r))},clear:a}}var E=a(169),C=a(159),O=a(129),j=a(176),S=l.a.createContext({onClose:function(){}}),x=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.closeLabel,i=e.closeButton,s=e.className,o=e.children,c=Object(b.a)(e,["bsPrefix","closeLabel","closeButton","className","children"]);a=Object(O.b)(a,"toast-header");var u=Object(r.useContext)(S),m=Object(C.a)((function(){u&&u.onClose()}));return l.a.createElement("div",Object(p.a)({ref:t},c,{className:v()(a,s)}),o,i&&l.a.createElement(j.a,{label:n,onClick:m,className:"ml-2 mb-1","data-dismiss":"toast"}))}));x.displayName="ToastHeader",x.defaultProps={closeLabel:"Close",closeButton:!0};var k=x,P=a(137),q=Object(P.a)("toast-body"),T={animation:!0,autohide:!1,delay:3e3,show:!0,transition:E.a},N=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.children,s=e.transition,o=e.show,c=e.animation,u=e.delay,m=e.autohide,d=e.onClose,f=Object(b.a)(e,["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"]);a=Object(O.b)("toast");var g=Object(r.useRef)(u),y=Object(r.useRef)(d);Object(r.useEffect)((function(){g.current=u,y.current=d}),[u,d]);var E=h(),C=Object(r.useCallback)((function(){m&&o&&y.current()}),[m,o]);E.set(C,g.current);var j=Object(r.useMemo)((function(){return s&&c}),[s,c]),x=l.a.createElement("div",Object(p.a)({},f,{ref:t,className:v()(a,n,!j&&o&&"show"),role:"alert","aria-live":"assertive","aria-atomic":"true"}),i),k={onClose:d};return l.a.createElement(S.Provider,{value:k},j?l.a.createElement(s,{in:o},x):x)}));N.defaultProps=T,N.displayName="Toast",N.Body=q,N.Header=k;var _=N,w=a(208),F=a(155),L=a(605),R=a(260),M=a(604),H=l.a.forwardRef((function(e,t){var a=e.questionId,n=Object(F.a)(e,["questionId"]),r=Object(s.c)();return l.a.createElement(L.a,Object.assign({id:"popover-basic"},n,{ref:t}),l.a.createElement(L.a.Title,{as:"h3"},"Are You sure to delete this question"),l.a.createElement(L.a.Content,null,l.a.createElement(i.a,{variant:"danger",size:"sm",className:"mx-2",onClick:function(){r(Object(u.c)(a))}},"Yes")))}));function D(e){var t=e.question,a=e.viewHandler;return l.a.createElement("div",null,l.a.createElement("p",{style:{fontSize:"1.1rem"}},t.qText+" --\x3e  ",l.a.createElement(R.a,{variant:"secondary"},t.qType+" "),l.a.createElement(i.a,{variant:"primary",size:"sm",className:"mx-2",disabled:!a,onClick:function(){a("edit",t.id)}}," Edit "),l.a.createElement(M.a,{trigger:"click",placement:"bottom",overlay:l.a.createElement(H,{questionId:t.id})},l.a.createElement(i.a,{variant:"danger",size:"sm",className:"mr-2"},"Delete"))))}var I=a(51);function G(e){var t=e.values,a=e.errors,n=e.handleChange,i=Object(s.c)(),o=Object(s.d)((function(e){return e.category.categories}));return Object(r.useEffect)((function(){i(Object(I.c)())}),[]),l.a.createElement("div",null,l.a.createElement(w.a.Group,{controlId:"formGroupQuestionTitle"},l.a.createElement(w.a.Label,null,"Question Title"),l.a.createElement(w.a.Control,{type:"text",placeholder:"Question Title",name:"title",value:t.title,onChange:n}),l.a.createElement("span",{className:"errorMessage"},a.title)),l.a.createElement(w.a.Group,{controlId:"formGridCategory"},l.a.createElement(w.a.Label,null,"Question Category"),l.a.createElement(w.a.Control,{as:"select",name:"category",value:t.category,onChange:n},l.a.createElement("option",null,"Select..."),o.map((function(e,t){var a=e.slug.replace(/_/g," / ");if("Free"!==e.name&&"Featured"!==e.name&&"Uncategorized"!==e.name)return l.a.createElement("option",{key:t,value:e.id},a)}))),l.a.createElement("span",{className:"errorMessage"},a.category)),l.a.createElement(w.a.Group,{controlId:"formGridQType"},l.a.createElement(w.a.Label,null,"Question Category"),l.a.createElement(w.a.Control,{as:"select",name:"qType",value:t.qType,onChange:n},l.a.createElement("option",{value:"matrix"},"Matrix"),l.a.createElement("option",{value:"sba"},"SBA")),l.a.createElement("span",{className:"errorMessage"},a.category)),l.a.createElement(w.a.Group,{controlId:"formGroupQuestionQText"},l.a.createElement(w.a.Label,null,"Question Text"),l.a.createElement(w.a.Control,{type:"text",placeholder:"Question text",name:"qText",value:t.qText,onChange:n}),l.a.createElement("span",{className:"errorMessage"},a.qText)))}function Q(e){var t=e.values,a=e.errors,n=e.handleChange;return l.a.createElement("div",null,l.a.createElement(w.a.Group,{controlId:"formGroupQuestionTitle"},l.a.createElement(w.a.Label,null,"General Feedback"),l.a.createElement(w.a.Control,{type:"text",placeholder:"feedback",name:"generalFeedback",value:t.generalFeedback,onChange:n}),l.a.createElement("span",{className:"errorMessage"},a.generalFeedback)),l.a.createElement(w.a.Group,{controlId:"formGroupQuestionQText"},l.a.createElement(w.a.Label,null,"Question Tags"),l.a.createElement(w.a.Control,{type:"text",placeholder:"tag, tags",name:"tags",value:t.tags,onChange:n}),l.a.createElement("span",{className:"errorMessage"},a.tags)))}var z=a(160),B=a(143),A=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.size,r=e.className,i=e.as,s=void 0===i?"div":i,o=Object(b.a)(e,["bsPrefix","size","className","as"]);return a=Object(O.b)(a,"input-group"),l.a.createElement(s,Object(p.a)({ref:t},o,{className:v()(r,a,n&&a+"-"+n)}))})),V=Object(P.a)("input-group-append"),U=Object(P.a)("input-group-prepend"),J=Object(P.a)("input-group-text",{Component:"span"});A.displayName="InputGroup",A.Text=J,A.Radio=function(e){return l.a.createElement(J,null,l.a.createElement("input",Object(p.a)({type:"radio"},e)))},A.Checkbox=function(e){return l.a.createElement(J,null,l.a.createElement("input",Object(p.a)({type:"checkbox"},e)))},A.Append=V,A.Prepend=U;var W=A;function Y(e){var t=e.values,a=e.stems,n=(e.errors,e.handleChange),r=e.stemInc,s=e.stemDec;return l.a.createElement("div",null,a.map((function(e,a){return l.a.createElement(z.a,{className:"pr-3 pl-2 mt-1"},l.a.createElement(B.a,{lg:5},l.a.createElement(w.a.Group,{controlId:"formGroupQuestionStem"},l.a.createElement(W,{className:"mb-2"},l.a.createElement(W.Prepend,null,l.a.createElement(W.Text,null,a)),l.a.createElement(w.a.Control,{type:"text",placeholder:"stem...",name:"qStem"+a,value:t["qStem"+a],onChange:n})))),l.a.createElement(B.a,{lg:2},l.a.createElement(w.a.Group,{as:B.a,controlId:"formGroupQuestionStemAnswer"},"matrix"===t.qType?l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a.Check,{inline:!0,type:"radio",label:"True",name:"aStem"+a,id:"formHorizontalRadios1",value:1,checked:"1"===t["aStem"+a],onChange:n}),l.a.createElement(w.a.Check,{inline:!0,type:"radio",label:"False",name:"aStem"+a,id:"formHorizontalRadios2",value:0,checked:"0"===t["aStem"+a],onChange:n})):l.a.createElement(w.a.Check,{type:"radio",name:"aStemSba",id:"formHorizontalRadios1",value:a,checked:t.aStemSba===a.toString(),onChange:n}))),l.a.createElement(B.a,{lg:5},l.a.createElement(w.a.Group,{as:B.a,controlId:"formGroupQuestionStemFeedBack"},l.a.createElement(w.a.Control,{type:"text",placeholder:"FeedBack",name:"fbStem"+a,value:t["fbStem"+a],onChange:n}))))})),l.a.createElement("div",{className:"mt-2 mb-5"},l.a.createElement(i.a,{className:"mr-3",onClick:r},"Plus"),l.a.createElement(i.a,{onClick:function(e){s(e)}},"Minus")))}var X=function(e){if("number"===typeof e){for(var t=[],a=0;a<e;a++)t.push({qStem:"",aStem:"",fbStem:""});return t}return e};function K(e,t,a){return function(n,r){var l=r.setSubmitting,i="";n.stems&&n.stems.length>0&&n.qStem0?n.stems.forEach((function(e,t){t>0&&!n["qStem"+(t-1)]&&n["qStem"+t]?i+=" Stem's No.".concat(t-1," qStem can not be empty"):"matrix"!==n.qType||!n["aStem"+t]&&!n["fbStem"+t]||n["qStem"+t]?"matrix"===n.qType&&n["qStem"+t]&&!n["aStem"+t]?i+=" Stem's No.".concat(t," qStem or aStem can not be empty"):"sba"===n.qType&&n["fbStem"+t]&&!n["qStem"+t]?i+=" Stem's No.".concat(t," qStem can not be empty"):"sba"!==n.qType||n["qStem"+n.aStemSba]||(i+=" Stem's No.".concat(n.aStemSba," qStem or aStem can not be empty")):i+=" Stem's No.".concat(t," qStem can not be empty"),""===i&&(e.qStem=n["qStem"+t],e.aStem="matrix"===n.qType?n["aStem"+t]:n.aStemSba+1,e.fbStem=n["fbStem"+t])})):(i+="Stems can not be emty",n.stems=Object(m.a)(X(e))),""===i?(n.stems=n.stems.filter((function(e){return e.qStem})),t(a?Object(u.d)(n.id,{title:n.title,category:n.category,qType:n.qType,qText:n.qText,stem:n.stems,generalFeedback:n.generalFeedback,tags:[n.tags]}):Object(u.a)({title:n.title,category:n.category,qType:n.qType,qText:n.qText,stem:n.stems,generalFeedback:n.generalFeedback,tags:[n.tags]})),l(!0)):(alert(JSON.stringify(i,null,2)),l(!1))}}function Z(e){var t=e.viewHandler,a=Object(r.useState)(5),o=Object(n.a)(a,2),c=o[0],p=o[1],b=Object(r.useState)(X(5)),g=Object(n.a)(b,2),v=g[0],y=g[1],h=Object(s.c)(),E=Object(s.d)((function(e){return e.question.loading})),C=Object(s.d)((function(e){return e.question.response})),O=function(){y(X(c+1)),p(c+1)},j=function(e){delete e["qStem"+(c-1)],delete e["aStem"+(c-1)],delete e["fbStem"+(c-1)],y(X(c-1)),p(c-1)};return l.a.createElement("div",null,E&&l.a.createElement(f.a,{animation:"grow",role:"status",variant:"dark",className:"content-center"}),l.a.createElement(_,{show:C,onClose:function(){h(Object(u.g)())},style:{position:"fixed",right:"20px"}},l.a.createElement(_.Header,null,l.a.createElement("strong",{className:"mr-auto"},C&&"result"in C?"Question Created Successfully":"Error Message")),l.a.createElement(_.Body,null,C&&"result"in C?l.a.createElement(D,{question:C.result,viewHandler:t}):C)),l.a.createElement("h3",null,"Create Question"),l.a.createElement(d.a,{initialValues:{title:"",category:"",qType:"matrix",qText:"",stems:Object(m.a)(v),generalFeedback:"",tags:""},validate:function(e){var t={};return e.title?e.category?e.qText||(t.qText="Required"):t.category="Required":t.title="Required",t},onSubmit:K(c,h)},(function(e){var t=e.values,a=e.errors,n=e.handleChange,r=e.handleSubmit;return l.a.createElement(w.a,{onSubmit:r},l.a.createElement(G,{values:t,errors:a,handleChange:n}),l.a.createElement(Y,{stems:v,values:t,errors:a,handleChange:n,stemInc:O,stemDec:j}),l.a.createElement(Q,{values:t,errors:a,handleChange:n}),l.a.createElement(i.a,{type:"submit",className:"mt-3 btn-submit"},"Submit"))})))}var $=a(52),ee=a(62),te=a(28),ae=a.n(te);function ne(e){var t=e.viewHandler,a=e.id,o=Object(r.useState)(5),c=Object(n.a)(o,2),p=c[0],b=c[1],g=Object(r.useState)(X(5)),v=Object(n.a)(g,2),y=v[0],h=v[1],E=Object(s.c)(),C=Object(s.d)((function(e){return e.question.loading})),O=Object(s.d)((function(e){return e.question.response})),j=Object(r.useState)({id:null,title:"",category:"",qType:"matrix",qText:"",stems:Object(m.a)(y),generalFeedback:"",tags:""}),S=Object(n.a)(j,2),x=S[0],k=S[1];Object(r.useEffect)((function(){ae.a.get("http://localhost:4000/questions/"+a).then((function(e){var t={id:e.data.id,title:e.data.title,category:e.data.categoryId,qType:e.data.qType,qText:e.data.qText,generalFeedback:e.data.generalFeedback,tags:e.data.tags};e.data.stems.forEach((function(e,a){var n;t=Object(ee.a)({},t,(n={},Object($.a)(n,"qStem"+a,e.qStem),Object($.a)(n,"aStem"+a,e.aStem.toString()),Object($.a)(n,"fbStem"+a,e.fbStem),Object($.a)(n,"aStemSba",e.aStem.toString()),n))})),k(t)})).catch((function(e){return console.log(e)}))}),[]);var P=function(){h(X(p+1)),b(p+1)},q=function(e){delete e["qStem"+(p-1)],delete e["aStem"+(p-1)],delete e["fbStem"+(p-1)],h(X(p-1)),b(p-1)};return l.a.createElement("div",null,C&&l.a.createElement(f.a,{animation:"grow",role:"status",variant:"dark",className:"content-center"}),l.a.createElement(_,{show:O,onClose:function(){E(Object(u.g)())},style:{position:"fixed",right:"20px"}},l.a.createElement(_.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Question Edited Successfully")),l.a.createElement(_.Body,null,O&&"id"in O?l.a.createElement(D,{question:O,viewHandler:t}):"Error occured")),l.a.createElement("h3",null,"Edit Question"),l.a.createElement(d.a,{enableReinitialize:!0,initialValues:x,validate:function(e){var t={};return e.title?e.category?e.qText||(t.qText="Required"):t.category="Required":t.title="Required",t},onSubmit:K(p,E,!0)},(function(e){var t=e.values,a=e.errors,n=e.handleChange,r=e.handleSubmit;return l.a.createElement(w.a,{onSubmit:r},l.a.createElement(G,{values:t,errors:a,handleChange:n}),l.a.createElement(Y,{stems:y,values:t,errors:a,handleChange:n,stemInc:P,stemDec:q}),l.a.createElement(Q,{values:t,errors:a,handleChange:n}),l.a.createElement(i.a,{type:"submit",className:"mt-3 btn-submit"},"Submit"))})))}var re=a(246),le=a(239),ie=a.n(le),se=a(187);function oe(e){var t=e.viewHandler,a=Object(r.useState)(1),i=Object(n.a)(a,2),o=i[0],c=i[1],m=Object(r.useState)(null),d=Object(n.a)(m,2),p=d[0],b=d[1],g=Object(s.c)(),v=Object(s.d)((function(e){return e.category.categories})),y=Object(s.d)((function(e){return e.question.questions})),h=Object(s.d)((function(e){return e.question.loading})),E=Object(s.d)((function(e){return e.question.response}));Object(r.useEffect)((function(){g(Object(I.c)())}),[]);var C=Object(se.a)(y,o,10);return l.a.createElement("div",null,h&&l.a.createElement(f.a,{animation:"grow",role:"status",variant:"dark",className:"content-center"}),l.a.createElement(_,{show:E,onClose:function(){g(Object(u.g)()),g(Object(u.e)(p))},style:{position:"fixed",right:"20px"}},l.a.createElement(_.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Response")),l.a.createElement(_.Body,null,E&&"message"in E?E.message:JSON.stringify(E))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",null,l.a.createElement(w.a.Group,{controlId:"categoryType",className:"mr-5"},l.a.createElement(w.a.Label,null,"Category Type"),l.a.createElement(w.a.Control,{as:"select",name:"categoryType",onChange:function(e){g(Object(u.e)(e.target.value)),b(e.target.value)}},l.a.createElement("option",{value:""},"Select..."),v.map((function(e){var t=e.slug.replace(/_/g," / ");return l.a.createElement("option",{value:e.id},t)}))))),l.a.createElement("div",null,l.a.createElement(re.a,{className:"my-2"},y.length<1&&l.a.createElement("p",{className:"text-danger"},"No Question in this category."),C.map((function(e,a){return l.a.createElement(re.a.Item,{key:e.id,variant:a%2===0?"dark":"light",className:"d-flex"},l.a.createElement("div",{className:"mt-1 mr-3"},(a+1)*o,"."),l.a.createElement(D,{question:e,viewHandler:t}))}))))),l.a.createElement(ie.a,{activePage:o,itemsCountPerPage:10,totalItemsCount:y.length,pageRangeDisplayed:4,onChange:function(e){c(e)},itemClass:"page-item",linkClass:"page-link",prevPageText:"Previous",nextPageText:"Next"}))}var ce=a(181),ue=a.n(ce),me=a(57),de=a(598);function fe(e){var t=e.index,a=e.question,s=(e.viewHandler,Object(r.useState)(!1)),o=Object(n.a)(s,2),c=o[0],u=o[1],m=function(){return u(!1)};return l.a.createElement("div",null,l.a.createElement(de.a,{show:c,onHide:m},l.a.createElement(de.a.Header,{closeButton:!0},l.a.createElement(de.a.Title,null,"Edit Question")),l.a.createElement(de.a.Body,null,l.a.createElement(ne,{id:a.id})),l.a.createElement(de.a.Footer,null,l.a.createElement(i.a,{variant:"secondary",onClick:m},"Close"))),l.a.createElement("p",{style:{fontSize:"1.1rem"}},t+1+". "+a.qText+" --\x3e  ",l.a.createElement(R.a,{variant:"secondary"},a.qType+" "),l.a.createElement(i.a,{variant:"primary",size:"sm",className:"mx-2",onClick:function(){return u(!0)}}," Edit "),l.a.createElement(M.a,{trigger:"click",placement:"bottom",overlay:l.a.createElement(H,{questionId:a.id})},l.a.createElement(i.a,{variant:"danger",size:"sm",className:"mr-2"},"Delete"))))}var pe=function(e){var t=e.viewHandler,a=Object(s.c)(),o=Object(s.d)((function(e){return e.category.categories})),c=Object(r.useState)({category:void 0,file:void 0}),u=Object(n.a)(c,2),m=u[0],d=u[1],p=Object(r.useState)(void 0),b=Object(n.a)(p,2),g=b[0],v=b[1],y=Object(r.useState)(void 0),h=Object(n.a)(y,2),E=h[0],C=h[1],O=Object(r.useState)(null),j=Object(n.a)(O,2),S=j[0],x=j[1],k=Object(r.useState)(!1),P=Object(n.a)(k,2),q=P[0],T=P[1],N=Object(r.useState)([]),F=Object(n.a)(N,2),L=F[0],R=F[1];Object(r.useEffect)((function(){a(Object(I.c)())}),[]);var M=function(e){var t=e.target,a=t.name,n=t.value,r=t.files,l=m;switch(a){case"category":l.category=ue.a.isInt(n)||ue.a.isMongoId(n)?void 0:"Category is not valid"}d(l),"file"===a&&v(r?r[0]:void 0),"category"===a&&C(n)};return l.a.createElement("div",null,q&&l.a.createElement(f.a,{animation:"grow",role:"status",variant:"dark",className:"content-center"}),l.a.createElement(_,{show:S,onClose:function(){x(null),R([])},style:{height:"100vh",position:"fixed",right:"20px",overflowY:"scroll",overflowX:"hidden"}},l.a.createElement(_.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Response")),l.a.createElement(_.Body,null,l.a.createElement("p",null,S+" ",L.length>0&&L.length),l.a.createElement("div",null,L.length>0&&L.map((function(e,a){return l.a.createElement(fe,{key:a,index:a,question:e,viewHandler:t})}))))),l.a.createElement("h3",null," Upload by Excel file"),l.a.createElement(w.a,{className:"mt-2",onSubmit:function(e){e.preventDefault();var t=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];console.log(a,e);var r=!0,l="";return Object.values(e).forEach((function(e){e&&(r=!1)&&(l=e),e&&(l=e)})),Object.values(a).forEach((function(e){void 0===e&&(r=!1)})),{valid:r,error:l}}(m,g,E),a=t.valid,n=t.error;if(a){var r=new FormData;r.append("file",g),r.append("category",E),T(!0),ae.a.post("http://localhost:4000/questions/files",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){R(e.data),x("Successfully Updated"),T(!1)})).catch((function(e){x(Object(me.a)(e)),T(!1)}))}else x("Please fill form corectly"+(n?" __ "+n.toUpperCase()+" __":""))}},l.a.createElement(w.a.Group,{controlId:"formGridCategory"},l.a.createElement(w.a.Label,null,"Question Category"),l.a.createElement(w.a.Control,{as:"select",name:"category",onChange:M},l.a.createElement("option",{value:""},"Select"),o.map((function(e,t){var a=e.slug.replace(/_/g," / ");return l.a.createElement("option",{key:t,value:e.id},a)}))),m.category&&l.a.createElement("span",{className:"errorMessage"},m.category)),l.a.createElement(w.a.Group,null,l.a.createElement(w.a.Label,null,"Upload an excel file"),l.a.createElement("input",{type:"file",name:"file",className:"form-control-file",onChange:M})),l.a.createElement(i.a,{type:"submit",className:"btn-submit"},"Submit")))};a.d(t,"default",(function(){return ge}));var be=function(e){var t=e.viewHandler,a=e.disable;return l.a.createElement("div",{className:"my-3"},l.a.createElement(o.a,c.a.Question.metaInfo),l.a.createElement(i.a,{variant:"primary",size:"bg",className:"mr-3 mt-3",disabled:"create"===a,onClick:function(){t("create")}},"Create Question"),l.a.createElement(i.a,{variant:"primary",size:"bg",className:"mr-3 mt-3",disabled:"upload"===a,onClick:function(){t("upload")}},"Upload An Excel File"),l.a.createElement(i.a,{variant:"primary",size:"bg",className:"mt-3",disabled:"select"===a,onClick:function(){t("select")}},"Select Questions For Edit"))};function ge(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(null),c=Object(n.a)(o,2),m=c[0],d=c[1],f=Object(s.c)(),p=function(e,t){f(Object(u.g)()),t&&d(t),i(e)};switch(a){case"create":return l.a.createElement(l.a.Fragment,null," ",l.a.createElement(be,{viewHandler:p,disable:"create"})," ",l.a.createElement(Z,{viewHandler:p})," ");case"upload":return l.a.createElement(l.a.Fragment,null," ",l.a.createElement(be,{viewHandler:p,disable:"upload"})," ",l.a.createElement(pe,{viewHandler:p})," ");case"select":return l.a.createElement(l.a.Fragment,null," ",l.a.createElement(be,{viewHandler:p,disable:"select"})," ",l.a.createElement(oe,{viewHandler:p})," ");case"edit":return l.a.createElement(l.a.Fragment,null," ",l.a.createElement(be,{viewHandler:p})," ",l.a.createElement(ne,{viewHandler:p,id:m})," ");default:return l.a.createElement(be,{viewHandler:p})}}}}]);
//# sourceMappingURL=21.05e8d31b.chunk.js.map