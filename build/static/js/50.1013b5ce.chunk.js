(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[50],{158:function(e,t,a){"use strict";var n=a(5),r=a(10),i=a(128),o=a.n(i),l=a(0),c=a.n(l),s=a(185),u=a(151),m=a(129),f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.active,f=e.disabled,d=e.className,p=e.variant,v=e.action,h=e.as,b=e.eventKey,y=e.onClick,N=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(m.b)(a,"list-group-item");var g=Object(l.useCallback)((function(e){if(f)return e.preventDefault(),void e.stopPropagation();y&&y(e)}),[f,y]);return c.a.createElement(s.a,Object(n.a)({ref:t},N,{eventKey:Object(u.b)(b,N.href),as:h||(v?N.href?"a":"button":"div"),onClick:g,className:o()(d,a,i&&"active",f&&"disabled",p&&a+"-"+p,v&&a+"-action")}))}));f.defaultProps={variant:null,active:!1,disabled:!1},f.displayName="ListGroupItem",t.a=f},179:function(e,t,a){e.exports=function(){"use strict";return function(e,t,a){e=e||{};var n=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,t,a,r){return n.fromToBase(e,t,a,r)}a.en.relativeTime=r,n.fromToBase=function(t,n,i,o,l){for(var c,s,u,m=i.$locale().relativeTime||r,f=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=f.length,p=0;p<d;p+=1){var v=f[p];v.d&&(c=o?a(t).diff(i,v.d,!0):i.diff(t,v.d,!0));var h=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,h<=v.r||!v.r){h<=1&&p>0&&(v=f[p-1]);var b=m[v.l];l&&(h=l(""+h)),s="string"==typeof b?b.replace("%d",h):b(h,n,v.l,u);break}}if(n)return s;var y=u?m.future:m.past;return"function"==typeof y?y(s):y.replace("%s",s)},n.to=function(e,t){return i(e,t,this,!0)},n.from=function(e,t){return i(e,t,this)};var o=function(e){return e.$u?a.utc():a()};n.toNow=function(e){return this.to(o(this),e)},n.fromNow=function(e){return this.from(o(this),e)}}}()},198:function(e,t,a){"use strict";var n=a(5),r=a(10),i=a(128),o=a.n(i),l=a(0),c=a.n(l),s=(a(138),a(145)),u=a(129),m=a(184),f=a(158),d=c.a.forwardRef((function(e,t){var a,i=Object(s.a)(e,{activeKey:"onSelect"}),l=i.className,f=i.bsPrefix,d=i.variant,p=i.horizontal,v=i.as,h=void 0===v?"div":v,b=Object(r.a)(i,["className","bsPrefix","variant","horizontal","as"]);return f=Object(u.b)(f,"list-group"),a=p?!0===p?"horizontal":"horizontal-"+p:null,c.a.createElement(m.a,Object(n.a)({ref:t},b,{as:h,className:o()(l,f,d&&f+"-"+d,a&&f+"-"+a)}))}));d.defaultProps={variant:null,horizontal:null},d.displayName="ListGroup",d.Item=f.a,t.a=d},682:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(49),r=a(149),i=a(0),o=a.n(i),l=a(198),c=a(158),s=a(139),u=a(22),m=a(25),f=a(179);function d(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e.notification}));return o.a.createElement("div",null,o.a.createElement("h4",null,"New Notification"),o.a.createElement("div",{className:"pl-2"},t.freshNoti.length<1?"No New Notification":t.freshNoti.map((function(t){switch(t.priority){case 1:return v("danger",o.a.createElement(s.t,null),t,e);case 2:return v("warning",o.a.createElement(s.s,null),t,e);default:return v("",o.a.createElement(s.r,null),t,e)}}))),o.a.createElement("h4",{className:"text-muted mt-5"},"All Notification"),t.notification.map((function(e,t){return o.a.createElement("p",{className:"text-muted mb-2 pl-2"},o.a.createElement("span",null,"".concat(t+1,". ").concat(e.description," ")),o.a.createElement("span",null,"(",r(e.startDate).fromNow(),")"))})))}r.extend(f);var p={fontSize:".8rem"};function v(e,t,a,i){return o.a.createElement("div",{className:"mb-2"},o.a.createElement(l.a,{horizontal:!0},o.a.createElement(l.a.Item,{className:"text-"+e},o.a.createElement("span",null,t)),o.a.createElement(l.a.Item,{variant:e},o.a.createElement("span",null,a.description+" "),o.a.createElement("span",{className:"text-muted",style:p},"(",r(a.startDate).fromNow(),")")),o.a.createElement(c.a,{onClick:function(){var e=JSON.parse(localStorage.getItem("noti")),t=new Date;e?t.getTime()>e.expiry?localStorage.setItem("noti",JSON.stringify({value:[a.id],expiry:t.getTime()+2592e5})):localStorage.setItem("noti",JSON.stringify({value:[a.id].concat(Object(n.a)(e.value)),expiry:e.expiry})):localStorage.setItem("noti",JSON.stringify({value:[a.id],expiry:t.getTime()+2592e5})),i(Object(m.b)())},style:{cursor:"pointer"}},o.a.createElement(s.cb,null))))}}}]);
//# sourceMappingURL=50.1013b5ce.chunk.js.map