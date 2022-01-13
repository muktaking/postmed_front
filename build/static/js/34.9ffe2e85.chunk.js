(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[34],{151:function(e,t,a){"use strict";var r=a(6),n=a(11),o=a(129),s=a.n(o),i=a(0),l=a.n(i),c=a(130),u=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.as,f=void 0===i?"div":i,m=Object(n.a)(e,["bsPrefix","className","as"]),p=Object(c.b)(a,"col"),d=[],b=[];return u.forEach((function(e){var t,a,r,n=m[e];if(delete m[e],null!=n&&"object"===typeof n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";null!=t&&d.push(!0===t?""+p+s:""+p+s+"-"+t),null!=r&&b.push("order"+s+"-"+r),null!=a&&b.push("offset"+s+"-"+a)})),d.length||d.push(p),l.a.createElement(f,Object(r.a)({},m,{ref:t,className:s.a.apply(void 0,[o].concat(d,b))}))}));f.displayName="Col",t.a=f},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var r=a(55),n=a(24),o=a.n(n),s=a(0),i=a.n(s);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){c(e,t,a[t])}))}return e}function f(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),n=p(t.slice(0,r)),o=t.slice(r+1).trim();return n.startsWith("webkit")?e[(a=n,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[n]=o,e}),{})}var b=!1;try{b=!0}catch(O){}function y(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function v(e){var t=e.icon,a=e.mask,n=e.symbol,o=e.className,s=e.title,i=y(t),l=g("classes",[].concat(m(function(e){var t,a=e.spin,r=e.pulse,n=e.fixedWidth,o=e.inverse,s=e.border,i=e.listItem,l=e.flip,u=e.size,f=e.rotation,m=e.pull,p=(c(t={"fa-spin":a,"fa-pulse":r,"fa-fw":n,"fa-inverse":o,"fa-border":s,"fa-li":i,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(u),"undefined"!==typeof u&&null!==u),c(t,"fa-rotate-".concat(f),"undefined"!==typeof f&&null!==f),c(t,"fa-pull-".concat(m),"undefined"!==typeof m&&null!==m),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(e)),m(o.split(" ")))),f=g("transform","string"===typeof e.transform?r.c.transform(e.transform):e.transform),p=g("mask",y(a)),d=Object(r.a)(i,u({},l,f,p,{symbol:n,title:s}));if(!d)return function(){var e;!b&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",i),null;var O=d.abstract,x={};return Object.keys(e).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(x[t]=e[t])})),h(O[0],x)}v.displayName="FontAwesomeIcon",v.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof a)return a;var n=(a.children||[]).map((function(a){return e(t,a)})),o=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=d(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[p(t)]=r}return e}),{attrs:{}}),s=r.style,i=void 0===s?{}:s,l=f(r,["style"]);return o.attrs.style=u({},o.attrs.style,i),t.apply(void 0,[a.tag,u({},o.attrs,l)].concat(m(n)))}.bind(null,i.a.createElement)},167:function(e,t,a){"use strict";var r=a(6),n=a(11),o=a(129),s=a.n(o),i=a(0),l=a.n(i),c=a(130),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.noGutters,i=e.as,u=void 0===i?"div":i,f=e.className,m=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(c.b)(a,"row");return l.a.createElement(u,Object(r.a)({ref:t},m,{className:s()(f,p,o&&"no-gutters")}))}));u.defaultProps={noGutters:!1},t.a=u},299:function(e,t,a){"use strict";var r=a(6),n=a(11),o=a(0),s=a.n(o),i=a(129),l=a.n(i),c=a(130),u=s.a.forwardRef((function(e,t){var a,o=e.as,i=void 0===o?"div":o,u=e.className,f=e.fluid,m=e.bsPrefix,p=Object(n.a)(e,["as","className","fluid","bsPrefix"]),d=((a={})[m=Object(c.b)(m,"jumbotron")]=!0,a[m+"-fluid"]=f,a);return s.a.createElement(i,Object(r.a)({ref:t},p,{className:l()(u,d)}))}));u.defaultProps={fluid:!1},u.displayName="Jumbotron",t.a=u},632:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(151),s=a(299),i=a(167),l=a(218),c=a(352),u=a(152),f=function(e){return n.a.createElement(o.a,{md:4},n.a.createElement("div",{className:"feature"},n.a.createElement(u.a,{icon:e.icon,size:"4x",transform:"shrink-3 up-5"}),n.a.createElement("h3",null,e.heading),n.a.createElement("p",null,e.para)))};t.default=function(e){var t=Object(l.a)(),a={heading:[t.formatMessage({id:"feature.cb",defaultMessage:"Cloud Based"}),t.formatMessage({id:"feature.an",defaultMessage:"Anywhere At Anytime"}),t.formatMessage({id:"feature.ac",defaultMessage:"Accurecy"})],para:[t.formatMessage({id:"feature.cb.details",defaultMessage:"All System is based on cloud. Test the digitalization in exam management system"}),t.formatMessage({id:"feature.an.details",defaultMessage:"You can give exam at anytime from anywhere. Home, sweet home!! "}),t.formatMessage({id:"feature.ac.details",defaultMessage:"We try hard to make all questions and answers 100% accuret"})],faIcons:["cloud","hourglass","thumbs-up"]};return n.a.createElement("div",{id:"feature",className:"offset"},n.a.createElement(s.a,null,n.a.createElement("div",{className:"narrow text-center"},n.a.createElement(o.a,{xs:12},n.a.createElement("h3",{className:"heading"},n.a.createElement(c.a,{id:"features",defaultMessage:"Features"})),n.a.createElement("div",{className:"heading-underline"})),n.a.createElement(i.a,{className:""},a.faIcons.map((function(e,t){return n.a.createElement(f,{key:e+t,icon:e,heading:a.heading[t],para:a.para[t]})}))))))}}}]);
//# sourceMappingURL=34.9ffe2e85.chunk.js.map