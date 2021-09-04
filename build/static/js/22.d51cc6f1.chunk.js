/*! For license information please see 22.d51cc6f1.chunk.js.LICENSE */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{128:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},129:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return s}));var n=a(6),r=a(195),i=a.n(r),l=a(0),c=a.n(l),o=c.a.createContext({});o.Consumer,o.Provider;function u(e,t){var a=Object(l.useContext)(o);return e||a[t]||t}function s(e,t){"string"===typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,r=t,l=r.prefix,o=r.forwardRefAs,s=void 0===o?a?"ref":"innerRef":o;return i()((function(t,a){var r=Object(n.a)({},t);r[s]=a;var i=u(r.bsPrefix,l);return c.a.createElement(e,Object(n.a)({},r,{bsPrefix:i}))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},140:function(e,t,a){"use strict";var n=a(6),r=a(11),i=a(0),l=a.n(i),c=a(187);function o(e){return!e||"#"===e.trim()}var u=l.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"a":a,u=e.disabled,s=e.onKeyDown,f=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,a=f.onClick;(u||o(t))&&e.preventDefault(),u?e.stopPropagation():a&&a(e)};return o(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),u&&(f.tabIndex=-1,f["aria-disabled"]=!0),l.a.createElement(i,Object(n.a)({ref:t},f,{onClick:d,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),s)}))}));u.displayName="SafeAnchor",t.a=u},164:function(e,t,a){"use strict";var n=a(6),r=a(11),i=a(128),l=a.n(i),c=a(0),o=a.n(c),u=a(129),s=a(140),f=o.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,c=e.size,f=e.active,d=e.className,m=e.block,p=e.type,v=e.as,b=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(u.b)(a,"btn"),E=l()(d,y,f&&"active",y+"-"+i,m&&y+"-block",c&&y+"-"+c);if(b.href)return o.a.createElement(s.a,Object(n.a)({},b,{as:v,ref:t,className:l()(E,b.disabled&&"disabled")}));t&&(b.ref=t),v||(b.type=p);var h=v||"button";return o.a.createElement(h,Object(n.a)({},b,{className:E}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=f},187:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)}},195:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,i=a.defaultProps,l=a.allowFallback,c=void 0!==l&&l,o=a.displayName,u=void 0===o?e.name||e.displayName:o,s=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!c?r.default.forwardRef(s):function(e){return s(e,null)},{displayName:u,propTypes:n,defaultProps:i})};var n,r=(n=a(0))&&n.__esModule?n:{default:n}},212:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a(57),i=a(17);function l(){var e=n.useContext(r.a);return Object(i.c)(e),e}},347:function(e,t,a){},348:function(e,t,a){"use strict";var n=a(9),r=a(0),i=a(212),l=a(17);var c=r.memo((function(e){var t=Object(i.a)(),a=t.formatMessage,l=t.textComponent,c=void 0===l?r.Fragment:l,o=e.id,u=e.description,s=e.defaultMessage,f=e.values,d=e.children,m=e.tagName,p=void 0===m?c:m,v=a({id:o,description:u,defaultMessage:s},f,{ignoreTag:e.ignoreTag});return Array.isArray(v)||(v=[v]),"function"===typeof d?d(v):p?r.createElement.apply(r,Object(n.d)([p,null],v)):r.createElement(r.Fragment,null,v)}),(function(e,t){var a=e.values,r=Object(n.c)(e,["values"]),i=t.values,c=Object(n.c)(t,["values"]);return Object(l.d)(i,a)&&Object(l.d)(r,c)}));c.displayName="FormattedMessage",t.a=c},622:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(347),a(164)),l=a(348),c=a(36),o=Object(n.lazy)((function(){return Promise.all([a.e(2),a.e(3),a.e(29)]).then(a.bind(null,169))})),u=function(e){return r.a.createElement("div",{id:"home"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(o,{isLanding:!0})),r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"home-wrap"},r.a.createElement("div",{className:"home-inner"}))),r.a.createElement("div",{className:"caption text-center"},r.a.createElement("h1",{style:{fontSize:"3rem"}},"ExamA+"," ",r.a.createElement("br",null),r.a.createElement(l.a,{id:"site.title",defaultMessage:"The Best Online Exam  Platform For Fcps or Residency Exam"})),r.a.createElement("h3",{style:{fontSize:"1.8rem"}},r.a.createElement(l.a,{id:"site.subtitle",defaultMessage:"Find Your Lacking & Make You Strong For Post-Graduate Exam"})),r.a.createElement(c.Link,{to:"/exams"},r.a.createElement(i.a,{variant:"outline-light",size:"lg",className:"btn-lg"},r.a.createElement(l.a,{id:"btn.exams",defaultMessage:"Exams"})))))},s=Object(n.lazy)((function(){return a.e(34).then(a.bind(null,621))})),f=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(8),a.e(18)]).then(a.bind(null,599))})),d=Object(n.lazy)((function(){return a.e(35).then(a.bind(null,618))}));t.default=function(e){return r.a.createElement("div",{className:"__landing__upper"},r.a.createElement(u,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(f,null),r.a.createElement(d,null),r.a.createElement(s,null)))}}}]);
//# sourceMappingURL=22.d51cc6f1.chunk.js.map