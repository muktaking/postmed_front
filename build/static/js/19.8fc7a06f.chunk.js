(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19],{137:function(e,t,a){"use strict";var r=function(){};e.exports=r},139:function(e,t,a){"use strict";var r=a(6),n=a(11),o=a(128),i=a.n(o),s=a(0),l=a.n(s),c=a(129),u=["xl","lg","md","sm","xs"],m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.as,m=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),d=Object(c.b)(a,"col"),p=[],h=[];return u.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],null!=n&&"object"===typeof n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+d+i:""+d+i+"-"+t),null!=r&&h.push("order"+i+"-"+r),null!=a&&h.push("offset"+i+"-"+a)})),p.length||p.push(d),l.a.createElement(m,Object(r.a)({},f,{ref:t,className:i.a.apply(void 0,[o].concat(p,h))}))}));m.displayName="Col",t.a=m},141:function(e,t,a){"use strict";var r=a(6),n=a(11),o=a(128),i=a.n(o),s=(a(178),a(0)),l=a.n(s),c=a(158),u=a(135),m=a(129),f=l.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,c=e.bsCustomPrefix,f=e.className,d=e.isValid,p=e.isInvalid,h=e.isStatic,b=e.as,y=void 0===b?"input":b,g=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),v=Object(s.useContext)(u.a),E=v.controlId;return o=v.custom?Object(m.b)(c,"custom-control-input"):Object(m.b)(o,"form-check-input"),l.a.createElement(y,Object(r.a)({},g,{ref:t,id:a||E,className:i()(f,o,d&&"is-valid",p&&"is-invalid",h&&"position-static")}))}));f.displayName="FormCheckInput",f.defaultProps={type:"checkbox"};var d=f,p=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,c=e.className,f=e.htmlFor,d=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(s.useContext)(u.a),h=p.controlId;return a=p.custom?Object(m.b)(o,"custom-control-label"):Object(m.b)(a,"form-check-label"),l.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:f||h,className:i()(c,a)}))}));p.displayName="FormCheckLabel";var h=p,b=l.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,f=e.bsCustomPrefix,p=e.inline,b=e.disabled,y=e.isValid,g=e.isInvalid,v=e.feedback,E=e.className,w=e.style,O=e.title,N=e.type,C=e.label,T=e.children,x=e.custom,j=e.as,P=void 0===j?"input":j,S=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===N||x;o=k?Object(m.b)(f,"custom-control"):Object(m.b)(o,"form-check");var A=Object(s.useContext)(u.a).controlId,I=Object(s.useMemo)((function(){return{controlId:a||A,custom:k}}),[A,k,a]),L=null!=C&&!1!==C&&!T,M=l.a.createElement(d,Object(r.a)({},S,{type:"switch"===N?"checkbox":N,ref:t,isValid:y,isInvalid:g,isStatic:!L,disabled:b,as:P}));return l.a.createElement(u.a.Provider,{value:I},l.a.createElement("div",{style:w,className:i()(E,o,k&&"custom-"+N,p&&o+"-inline")},T||l.a.createElement(l.a.Fragment,null,M,L&&l.a.createElement(h,{title:O},C),(y||g)&&l.a.createElement(c.a,{type:y?"valid":"invalid"},v))))}));b.displayName="FormCheck",b.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},b.Input=d,b.Label=h;t.a=b},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r={Home:{metaInfo:{title:"Online Exam Platform - Exam from anywhere anytime.",description:"Online Exam Platform - participate into exam from anywhere anytime with extensive solve immediately. Question and answer is authentic with help of talented mentor."}},Exams:{metaInfo:{title:"Lists Of all available exams",description:"Lists of all avaiable exams. Participate into the exams."}},Dashboard:{metaInfo:{title:"Dashboard- Get all your desired content in one place"}},Profile:{metaInfo:{title:"Profile- Know yourself and edit them"}},Settings:{metaInfo:{title:"Settings: Change the life as you want "}},Category:{metaInfo:{title:"Category- Create, edit and delete category"}},Question:{metaInfo:{title:"Question- Create, upload, edit and delete question"}},ExamBuilder:{metaInfo:{title:"ExamBuilder- Build exam easily"}},ExamEdit:{metaInfo:{title:"ExamEdit- edit and delete exam easily"}},Login:{metaInfo:{title:"Login- Login to access the app"}},Signup:{metaInfo:{title:"Signup- To use the app fully, You have to signup "}}}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(11);function n(e,t){if(null==e)return{};var a,n,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},153:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(194),i="yas",s=a(145).a.Home.metaInfo,l=s.title,c=s.description;t.a=function(e){var t=e.meta,a=void 0===t?[]:t,r=e.defer,s=void 0!==r&&r,u=e.lang,m=void 0===u?"en":u,f=e.title,d=void 0===f?l:f,p=e.description,h=void 0===p?c:p;return n.a.createElement(o.b,{defer:s,title:d,htmlAttributes:{lang:m},titleTemplate:"%s | ".concat("ExamA+"),meta:[{name:"description",content:h},{property:"og:description",content:h},{property:"og:title",content:d},{property:"og:type",content:"website"},{property:"og:image",content:"".concat("https://postmed.rajdoctors.com","/logo.png")},{name:"author",content:i}].concat(a)})}},164:function(e,t,a){"use strict";var r=a(6),n=a(11),o=a(128),i=a.n(o),s=a(0),l=a.n(s),c=a(129),u=a(143),m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.variant,s=e.size,m=e.active,f=e.className,d=e.block,p=e.type,h=e.as,b=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(c.b)(a,"btn"),g=i()(f,y,m&&"active",y+"-"+o,d&&y+"-block",s&&y+"-"+s);if(b.href)return l.a.createElement(u.a,Object(r.a)({},b,{as:h,ref:t,className:i()(g,b.disabled&&"disabled")}));t&&(b.ref=t),h||(b.type=p);var v=h||"button";return l.a.createElement(v,Object(r.a)({},b,{className:g}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=m},165:function(e,t,a){"use strict";var r=a(6),n=a(11),o=a(128),i=a.n(o),s=a(0),l=a.n(s),c=a(129),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.variant,s=e.animation,u=e.size,m=e.children,f=e.as,d=void 0===f?"div":f,p=e.className,h=Object(n.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),b=(a=Object(c.b)(a,"spinner"))+"-"+s;return l.a.createElement(d,Object(r.a)({ref:t},h,{className:i()(p,b,u&&b+"-"+u,o&&"text-"+o)}),m)}));u.displayName="Spinner",t.a=u},170:function(e,t,a){"use strict";a.r(t);var r=a(150),n=a(0),o=a.n(n),i=a(162),s=a(196),l=a(214),c=a(23),u=a(36),m=a(187),f=a(188),d=a(189),p=a.n(d);t.default=Object(c.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var t=Object(l.a)(),a=[t.formatMessage({id:"btn.home",defaultMessage:"home"}),t.formatMessage({id:"btn.contact",defaultMessage:"contact"})],n=e.isAuthenticated?[t.formatMessage({id:"btn.db",defaultMessage:"dashboard"}),t.formatMessage({id:"btn.exams",defaultMessage:"exams"}),t.formatMessage({id:"btn.logout",defaultMessage:"logout"})]:[t.formatMessage({id:"btn.exams",defaultMessage:"exams"}),t.formatMessage({id:"btn.signup",defaultMessage:"signup"}),t.formatMessage({id:"btn.login",defaultMessage:"login"})],c=e.isAuthenticated?["dashboard","exams","logout"]:["exams","signup","login"];return o.a.createElement(s.a,{bg:"dark",variant:"dark",fixed:"top",expand:"md"},o.a.createElement(u.Link,{to:"/",className:"navbar-brand"},"ExamA+"),o.a.createElement(s.a.Toggle,{"aria-controls":"navbarResponsive"}),o.a.createElement(s.a.Collapse,{id:"navbarResponsive"},o.a.createElement(i.a,{className:"ml-auto"},["home","contact"].map((function(t,r){return o.a.createElement(i.a.Item,{key:t,as:"li",className:"mr-3"},e.isLanding?o.a.createElement(f.Link,{activeClass:"active",to:t,spy:!0,smooth:!0,offset:-50,duration:500,href:"/",className:"nav-link"},a[r]):o.a.createElement(m.HashLink,{to:"/#"+t,className:"nav-link",activeClassName:"active"},a[r]))})),c.map((function(e,t){return o.a.createElement(i.a.Item,{key:e,as:"li",className:"mr-3"},o.a.createElement(u.NavLink,{to:{pathname:"/"+e},className:"nav-link"},n[t]))})))),e.isLanding?o.a.createElement(p.a,{showUnder:160},o.a.createElement(r.a,{icon:"arrow-up",size:"3x",transform:"shrink-4"})):null)}))},177:function(e,t,a){},186:function(e,t,a){"use strict";var r=a(6),n=a(11),o=a(128),i=a.n(o),s=a(0),l=a.n(s),c=a(141),u=a(172),m=a(135),f=a(129),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.children,u=e.controlId,d=e.as,p=void 0===d?"div":d,h=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(f.b)(a,"form-group");var b=Object(s.useMemo)((function(){return{controlId:u}}),[u]);return l.a.createElement(m.a.Provider,{value:b},l.a.createElement(p,Object(r.a)({},h,{ref:t,className:i()(o,a)}),c))}));d.displayName="FormGroup";var p=d,h=(a(137),a(139)),b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.column,c=e.srOnly,u=e.className,d=e.htmlFor,p=Object(n.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),b=Object(s.useContext)(m.a).controlId;a=Object(f.b)(a,"form-label");var y=i()(u,a,c&&"sr-only",o&&"col-form-label");return d=d||b,o?l.a.createElement(h.a,Object(r.a)({as:"label",className:y,htmlFor:d},p)):l.a.createElement("label",Object(r.a)({ref:t,className:y,htmlFor:d},p))}));b.displayName="FormLabel",b.defaultProps={column:!1,srOnly:!1};var y=b,g=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.as,c=void 0===s?"small":s,u=e.muted,m=Object(n.a)(e,["bsPrefix","className","as","muted"]);return a=Object(f.b)(a,"form-text"),l.a.createElement(c,Object(r.a)({},m,{ref:t,className:i()(o,a,u&&"text-muted")}))}));g.displayName="FormText";var v=g,E=l.a.forwardRef((function(e,t){return l.a.createElement(c.a,Object(r.a)({},e,{ref:t,type:"switch"}))}));E.displayName="Switch",E.Input=c.a.Input,E.Label=c.a.Label;var w=E,O=a(138),N=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,s=e.className,c=e.validated,u=e.as,m=void 0===u?"form":u,d=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(f.b)(a,"form"),l.a.createElement(m,Object(r.a)({},d,{ref:t,className:i()(s,c&&"was-validated",o&&a+"-inline")}))}));N.displayName="Form",N.defaultProps={inline:!1},N.Row=Object(O.a)("form-row"),N.Group=p,N.Control=u.a,N.Check=c.a,N.Switch=w,N.Label=y,N.Text=v;t.a=N},194:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return ue}));var r=a(24),n=a.n(r),o=a(203),i=a.n(o),s=a(204),l=a.n(s),c=a(0),u=a.n(c),m=a(50),f=a.n(m),d="bodyAttributes",p="htmlAttributes",h="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},y=(Object.keys(b).map((function(e){return b[e]})),"charset"),g="cssText",v="href",E="http-equiv",w="innerHTML",O="itemprop",N="name",C="property",T="rel",x="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},S="defaultTitle",k="defer",A="encodeSpecialCharacters",I="onChangeClientState",L="titleTemplate",M=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),R=[b.NOSCRIPT,b.SCRIPT,b.STYLE],F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},D=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a},_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=Q(e,b.TITLE),a=Q(e,L);if(a&&t)return a.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,S);return t||r||void 0},Y=function(e){return Q(e,I)||function(){}},z=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,a){if(!t.length)for(var r=Object.keys(a),n=0;n<r.length;n++){var o=r[n].toLowerCase();if(-1!==e.indexOf(o)&&a[o])return t.concat(a)}return t}),[])},K=function(e,t,a){var r={};return a.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,a){var n={};a.filter((function(e){for(var a=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],l=s.toLowerCase();-1===t.indexOf(l)||a===T&&"canonical"===e[a].toLowerCase()||l===T&&"stylesheet"===e[l].toLowerCase()||(a=l),-1===t.indexOf(s)||s!==w&&s!==g&&s!==O||(a=s)}if(!a||!e[a])return!1;var c=e[a].toLowerCase();return r[a]||(r[a]={}),n[a]||(n[a]={}),!r[a][c]&&(n[a][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),i=0;i<o.length;i++){var s=o[i],l=f()({},r[s],n[s]);r[s]=l}return e}),[]).reverse()},Q=function(e,t){for(var a=e.length-1;a>=0;a--){var r=e[a];if(r.hasOwnProperty(t))return r[t]}return null},W=function(){var e=Date.now();return function(t){var a=Date.now();a-e>16?(e=a,t(a)):setTimeout((function(){W(t)}),0)}}(),J=function(e){return clearTimeout(e)},$="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||W:e.requestAnimationFrame||W,Z="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||J:e.cancelAnimationFrame||J,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},ee=null,te=function(e,t){var a=e.baseTag,r=e.bodyAttributes,n=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;ne(b.BODY,r),ne(b.HTML,n),re(m,f);var d={baseTag:oe(b.BASE,a),linkTags:oe(b.LINK,o),metaTags:oe(b.META,i),noscriptTags:oe(b.NOSCRIPT,s),scriptTags:oe(b.SCRIPT,c),styleTags:oe(b.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],a=t.newTags,r=t.oldTags;a.length&&(p[e]=a),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,p,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},re=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ae(e)),ne(b.TITLE,t)},ne=function(e,t){var a=document.getElementsByTagName(e)[0];if(a){for(var r=a.getAttribute("data-react-helmet"),n=r?r.split(","):[],o=[].concat(n),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],c=t[l]||"";a.getAttribute(l)!==c&&a.setAttribute(l,c),-1===n.indexOf(l)&&n.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)a.removeAttribute(o[m]);n.length===o.length?a.removeAttribute("data-react-helmet"):a.getAttribute("data-react-helmet")!==i.join(",")&&a.setAttribute("data-react-helmet",i.join(","))}},oe=function(e,t){var a=document.head||document.querySelector(b.HEAD),r=a.querySelectorAll(e+"[data-react-helmet]"),n=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var a=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)a.innerHTML=t.innerHTML;else if(r===g)a.styleSheet?a.styleSheet.cssText=t.cssText:a.appendChild(document.createTextNode(t.cssText));else{var s="undefined"===typeof t[r]?"":t[r];a.setAttribute(r,s)}a.setAttribute("data-react-helmet","true"),n.some((function(e,t){return i=t,a.isEqualNode(e)}))?n.splice(i,1):o.push(a)})),n.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return a.appendChild(e)})),{oldTags:n,newTags:o}},ie=function(e){return Object.keys(e).reduce((function(t,a){var r="undefined"!==typeof e[a]?a+'="'+e[a]+'"':""+a;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[P[a]||a]=e[a],t}),t)},le=function(e,t,a){switch(e){case b.TITLE:return{toComponent:function(){return function(e,t,a){var r,n=((r={key:t})["data-react-helmet"]=!0,r),o=se(a,n);return[u.a.createElement(b.TITLE,o,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,a,r){var n=ie(a),o=ae(t);return n?"<"+e+' data-react-helmet="true" '+n+">"+q(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,a)}};case d:case p:return{toComponent:function(){return se(t)},toString:function(){return ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,a){var r,n=((r={key:a})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var a=P[e]||e;if(a===w||a===g){var r=t.innerHTML||t.cssText;n.dangerouslySetInnerHTML={__html:r}}else n[a]=t[e]})),u.a.createElement(e,n)}))}(e,t)},toString:function(){return function(e,t,a){return t.reduce((function(t,r){var n=Object.keys(r).filter((function(e){return!(e===w||e===g)})).reduce((function(e,t){var n="undefined"===typeof r[t]?t:t+'="'+q(r[t],a)+'"';return e?e+" "+n:n}),""),o=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+n+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,a)}}}},ce=function(e){var t=e.baseTag,a=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:le(b.BASE,t,r),bodyAttributes:le(d,a,r),htmlAttributes:le(p,n,r),link:le(b.LINK,o,r),meta:le(b.META,i,r),noscript:le(b.NOSCRIPT,s,r),script:le(b.SCRIPT,l,r),style:le(b.STYLE,c,r),title:le(b.TITLE,{title:m,titleAttributes:f},r)}},ue=function(e){var t,a;return a=t=function(t){function a(){return G(this,a),_(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t),a.prototype.shouldComponentUpdate=function(e){return!l()(this.props,e)},a.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(e){var t,a=e.child,r=e.arrayTypeChildren,n=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[a.type]=[].concat(r[a.type]||[],[H({},n,this.mapNestedChildrenToProps(a,o))]),t))},a.prototype.mapObjectTypeChildren=function(e){var t,a,r=e.child,n=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return H({},n,((t={})[r.type]=i,t.titleAttributes=H({},o),t));case b.BODY:return H({},n,{bodyAttributes:H({},o)});case b.HTML:return H({},n,{htmlAttributes:H({},o)})}return H({},n,((a={})[r.type]=H({},o),a))},a.prototype.mapArrayTypeChildrenToProps=function(e,t){var a=H({},t);return Object.keys(e).forEach((function(t){var r;a=H({},a,((r={})[t]=e[t],r))})),a},a.prototype.warnOnInvalidChildren=function(e,t){return!0},a.prototype.mapChildrenToProps=function(e,t){var a=this,r={};return u.a.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,o=n.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[M[a]||a]=e[a],t}),t)}(D(n,["children"]));switch(a.warnOnInvalidChildren(e,o),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=a.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},a.prototype.render=function(){var t=this.props,a=t.children,r=D(t,["children"]),n=H({},r);return a&&(n=this.mapChildrenToProps(a,n)),u.a.createElement(e,n)},B(a,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),a}(u.a.Component),t.propTypes={base:n.a.object,bodyAttributes:n.a.object,children:n.a.oneOfType([n.a.arrayOf(n.a.node),n.a.node]),defaultTitle:n.a.string,defer:n.a.bool,encodeSpecialCharacters:n.a.bool,htmlAttributes:n.a.object,link:n.a.arrayOf(n.a.object),meta:n.a.arrayOf(n.a.object),noscript:n.a.arrayOf(n.a.object),onChangeClientState:n.a.func,script:n.a.arrayOf(n.a.object),style:n.a.arrayOf(n.a.object),title:n.a.string,titleAttributes:n.a.object,titleTemplate:n.a.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a}(i()((function(e){return{baseTag:V([v,j],e),bodyAttributes:z(d,e),defer:Q(e,k),encode:Q(e,A),htmlAttributes:z(p,e),linkTags:K(b.LINK,[T,v],e),metaTags:K(b.META,[N,y,E,C,O],e),noscriptTags:K(b.NOSCRIPT,[w],e),onChangeClientState:Y(e),scriptTags:K(b.SCRIPT,[x,w],e),styleTags:K(b.STYLE,[g],e),title:U(e),titleAttributes:z(h,e)}}),(function(e){ee&&Z(ee),e.defer?ee=$((function(){te(e,(function(){ee=null}))})):(te(e),ee=null)}),ce)((function(){return null})));ue.renderStatic=ue.rewind,t.b=ue}).call(this,a(28))},203:function(e,t,a){"use strict";var r,n=a(0),o=(r=n)&&"object"===typeof r&&"default"in r?r.default:r;function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,a){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof a&&"function"!==typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map((function(e){return e.props}))),m.canUseDOM?t(l):a&&(l=a(l))}var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.peek=function(){return l},n.rewind=function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var i=n.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},n}(n.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",s),m}}},204:function(e,t){var a="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var s,l,c,u;if(Array.isArray(t)){if((s=t.length)!=i.length)return!1;for(l=s;0!==l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((s=t.length)!=i.length)return!1;for(l=s;0!==l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((s=(c=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(i,c[l]))return!1;if(a&&t instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!t.$$typeof)&&!e(t[c[l]],i[c[l]]))return!1;return!0}return t!==t&&i!==i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},599:function(e,t,a){"use strict";a.r(t);var r=a(52),n=a(43),o=a(44),i=a(46),s=a(45),l=a(47),c=a(152),u=a(27),m=a.n(u),f=a(0),d=a.n(f),p=a(164),h=a(139),b=a(186),y=a(165),g=a(171),v=a.n(g),E=(a(177),a(170)),w=a(153),O=a(145),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,o=t.value,i=a.state.formErrors;switch(a.setState({errorMessage:null}),n){case"firstName":i.firstName=v.a.isLength(o,{min:3,max:15})?"":"First Name should be minimum 3 or maximum 20 characters";break;case"lastName":i.lastName=v.a.isLength(o,{min:3,max:15})?"":"Last Name should be minimum 3 or maximum 20 characters";break;case"userName":i.userName=v.a.isLength(o,{min:3,max:15})&&v.a.isAlphanumeric(o)?"":"Username should be alpha neumaric with minimum 3 or maximum 20 characters";break;case"email":i.email=v.a.isEmail(o)?"":"Email address is not valid";break;case"password":i.password=v.a.matches(o,/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/)?"":"Password should be minimum 6 characters and contain atleast one capital and lowercase alpha, neumeric value";break;case"repeatPassword":i.repeatPassword=v.a.equals(o,a.passwordRef.current.value)?"":"Password and RepeatPassword should be same";break;case"checked":i.checked=e.target.checked?"":"Check Me is not selected"}a.setState(Object(r.a)({formErrors:i},n,o))},a.submitHandler=function(e){e.preventDefault(),a.setState({errorMessage:null});var t=a.state,r=t.firstName,n=t.lastName,o=t.userName,i=t.email,s=t.password,l=t.repeatPassword,u=t.gender,f=t.formErrors;a.setState({loading:!0}),!function(e){var t=e.formErrors,a=Object(c.a)(e,["formErrors"]),r=!0;return Object.values(t).forEach((function(e){e.length>0&&(r=!1)})),Object.values(a).forEach((function(e){null===e&&(r=!1)})),r}({firstName:r,lastName:n,userName:o,email:i,password:s,repeatPassword:l,gender:u,formErrors:f})?a.setState({loading:!1,errorMessage:"Please fill form correctly."}):m.a.post("https://backend.postmed.v1.rajdoctors.com/auth/registration",{firstName:r,lastName:n,userName:o,email:i,password:s,repeatPassword:l,gender:u}).then((function(e){a.setState({loading:!1}),201===e.status&&a.props.history.push({pathname:"/login"})})).catch((function(e){if(a.setState({loading:!1}),e.response)if(409===(e=e.response).data.statusCode)a.setState({errorMessage:e.data.message+" Redirecting ....."}),setTimeout((function(){a.props.history.push({pathname:"/login"})}),3e3);else if(400===e.data.statusCode){var t="";e.data.message.forEach((function(e){t+="".concat(e.value," is not valid in [ ").concat(e.property,' ] field due to " ').concat(Object.values(e.constraints).toString(),' "')})),a.setState({errorMessage:t})}else a.props.history.push({pathname:"/"});else a.setState({errorMessage:"Server may be down. Please try sometime later"})}))},a.passwordRef=d.a.createRef(),a.state={loading:!1,firstName:null,lastName:null,userName:null,password:null,repeatPassword:null,gender:"male",errorMessage:null,formErrors:{firstName:"",lastName:"",userName:"",email:"",password:"",repeatPassword:"",checked:""}},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.formErrors;return d.a.createElement("div",{className:"registration"},d.a.createElement(w.a,O.a.Signup.metaInfo),d.a.createElement(E.default,{isLanding:!1}),d.a.createElement("div",{className:"landing"},d.a.createElement("div",{className:"home-inner"})),d.a.createElement("div",{className:"caption text-center"},d.a.createElement("h1",null,"Signup Form"),this.state.loading&&d.a.createElement(y.a,{animation:"border",role:"status",variant:"light",className:"mb-2"}),d.a.createElement("div",{className:"heading-underline"}),d.a.createElement(b.a,{onSubmit:this.submitHandler,novalidate:!0},d.a.createElement("div",{className:"text-white mb-2 bg-danger"},this.state.errorMessage),d.a.createElement(b.a.Row,null,d.a.createElement(b.a.Group,{as:h.a,controlId:"formGridFirstName"},d.a.createElement(b.a.Label,null,"First Name: "),d.a.createElement(b.a.Control,{name:"firstName",type:"text",placeholder:"Eaqub",onChange:this.handleChange,className:e.firstName.length>0&&"is-invalid"}),e.firstName.length>0&&d.a.createElement("span",{className:"errorMessage"},e.firstName)),d.a.createElement(b.a.Group,{as:h.a,controlId:"formGridLastName"},d.a.createElement(b.a.Label,null,"Last Name"),d.a.createElement(b.a.Control,{name:"lastName",type:"text",placeholder:"Sarder",onChange:this.handleChange,className:e.lastName.length>0&&"is-invalid"}),e.lastName.length>0&&d.a.createElement("span",{className:"errorMessage"},e.lastName))),d.a.createElement(b.a.Row,null,d.a.createElement(b.a.Group,{as:h.a,controlId:"formGridUserName"},d.a.createElement(b.a.Label,null,"Username"),d.a.createElement(b.a.Control,{name:"userName",type:"text",placeholder:"Enter username",onChange:this.handleChange,className:e.userName.length>0&&"is-invalid"}),e.userName.length>0&&d.a.createElement("span",{className:"errorMessage"},e.userName)),d.a.createElement(b.a.Group,{as:h.a,controlId:"formGridEmail"},d.a.createElement(b.a.Label,null,"Email"),d.a.createElement(b.a.Control,{name:"email",type:"email",placeholder:"Enter email",onChange:this.handleChange,className:e.email.length>0&&"is-invalid"}),e.email.length>0&&d.a.createElement("span",{className:"errorMessage"},e.email))),d.a.createElement(b.a.Row,null,d.a.createElement(b.a.Group,{as:h.a,controlId:"formGridPassword"},d.a.createElement(b.a.Label,null,"Password"),d.a.createElement(b.a.Control,{ref:this.passwordRef,name:"password",type:"password",placeholder:"Password",onChange:this.handleChange,className:e.password.length>0&&"is-invalid"}),d.a.createElement(b.a.Text,{className:"text-warning"},"e.g. 123abcDEF"),e.password.length>0&&d.a.createElement("span",{className:"errorMessage"},e.password)),d.a.createElement(b.a.Group,{as:h.a,controlId:"formGridRepeatPassword"},d.a.createElement(b.a.Label,null,"Repeat Password"),d.a.createElement(b.a.Control,{name:"repeatPassword",type:"password",placeholder:"Enter again Password",onChange:this.handleChange,className:e.repeatPassword.length>0&&"is-invalid"}),e.repeatPassword.length>0&&d.a.createElement("span",{className:"errorMessage"},e.repeatPassword))),d.a.createElement(b.a.Row,null,d.a.createElement(b.a.Group,{as:h.a,controlId:"formGridState"},d.a.createElement(b.a.Label,null,"Gender"),d.a.createElement(b.a.Control,{name:"gender",as:"select",onChange:this.handleChange},d.a.createElement("option",{value:"male"},"Male"),d.a.createElement("option",{value:"female"},"Female")))),d.a.createElement(b.a.Group,{id:"formGridCheckbox"},d.a.createElement(b.a.Check,{name:"checked",type:"checkbox",label:"By checking the box, You will agree our terms and conditions.",onChange:this.handleChange,defaultChecked:!0,className:e.checked.length>0&&"is-invalid"}),e.checked.length>0&&d.a.createElement("span",{className:"errorMessage"},e.checked)),d.a.createElement(p.a,{type:"submit",className:"btn-submit"},"Submit"))))}}]),t}(f.Component);t.default=N}}]);
//# sourceMappingURL=19.8fc7a06f.chunk.js.map