(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[34],{143:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(10);function r(e,a){if(null==e)return{};var t,r,l=Object(n.a)(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}},154:function(e,a,t){"use strict";var n=t(5),r=t(10),l=t(128),o=t.n(l),c=t(0),i=t.n(c),s=t(183),m=t(146),u=t(129),d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.active,d=e.disabled,b=e.className,p=e.variant,E=e.action,f=e.as,h=e.eventKey,v=e.onClick,y=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.b)(t,"list-group-item");var g=Object(c.useCallback)((function(e){if(d)return e.preventDefault(),void e.stopPropagation();v&&v(e)}),[d,v]);return i.a.createElement(s.a,Object(n.a)({ref:a},y,{eventKey:Object(m.b)(h,y.href),as:f||(E?y.href?"a":"button":"div"),onClick:g,className:o()(b,t,l&&"active",d&&"disabled",p&&t+"-"+p,E&&t+"-action")}))}));d.defaultProps={variant:null,active:!1,disabled:!1},d.displayName="ListGroupItem",a.a=d},171:function(e,a,t){"use strict";var n=t(5),r=t(10),l=t(128),o=t.n(l),c=t(0),i=t.n(c),s=t(129),m=t(140),u=t(149),d=t(176),b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.variant,m=e.as,u=void 0===m?"img":m,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.b)(t,"card-img");return i.a.createElement(u,Object(n.a)({ref:a,className:o()(c?b+"-"+c:b,l)},d))}));b.displayName="CardImg",b.defaultProps={variant:null};var p=b,E=Object(u.a)("h5"),f=Object(u.a)("h6"),h=Object(m.a)("card-body"),v=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,m=e.bg,u=e.text,b=e.border,p=e.body,E=e.children,f=e.as,v=void 0===f?"div":f,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(s.b)(t,"card"),w=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return i.a.createElement(d.a.Provider,{value:w},i.a.createElement(v,Object(n.a)({ref:a},y,{className:o()(l,g,m&&"bg-"+m,u&&"text-"+u,b&&"border-"+b)}),p?i.a.createElement(h,null,E):E))}));v.displayName="Card",v.defaultProps={body:!1},v.Img=p,v.Title=Object(m.a)("card-title",{Component:E}),v.Subtitle=Object(m.a)("card-subtitle",{Component:f}),v.Body=h,v.Link=Object(m.a)("card-link",{Component:"a"}),v.Text=Object(m.a)("card-text",{Component:"p"}),v.Header=Object(m.a)("card-header"),v.Footer=Object(m.a)("card-footer"),v.ImgOverlay=Object(m.a)("card-img-overlay");a.a=v},184:function(e,a,t){"use strict";var n=t(5),r=t(10),l=t(128),o=t.n(l),c=t(0),i=t.n(c),s=t(142),m=t(150),u=t(140),d=t(149),b=t(129),p=t(148),E=t(164),f=t(152),h={show:!0,transition:p.a,closeLabel:"Close alert"},v={show:"onClose"},y=i.a.forwardRef((function(e,a){var t=Object(s.a)(e,v),l=t.bsPrefix,c=t.show,u=t.closeLabel,d=t.className,p=t.children,f=t.variant,h=t.onClose,y=t.dismissible,g=t.transition,w=Object(r.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),k=Object(b.b)(l,"alert"),O=Object(m.a)((function(e){h(!1,e)})),j=i.a.createElement("div",Object(n.a)({role:"alert"},g?w:void 0,{className:o()(d,k,f&&k+"-"+f,y&&k+"-dismissible")}),y&&i.a.createElement(E.a,{onClick:O,label:u}),p);return g?i.a.createElement(g,Object(n.a)({unmountOnExit:!0,ref:a},w,{in:c}),j):c?j:null})),g=Object(d.a)("h4");g.displayName="DivStyledAsH4",y.displayName="Alert",y.defaultProps=h,y.Link=Object(u.a)("alert-link",{Component:f.a}),y.Heading=Object(u.a)("alert-heading",{Component:g}),a.a=y},185:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=r.a.createContext(null)},194:function(e,a,t){"use strict";var n=t(5),r=t(10),l=t(128),o=t.n(l),c=t(0),i=t.n(c),s=(t(138),t(142)),m=t(129),u=t(182),d=t(154),b=i.a.forwardRef((function(e,a){var t,l=Object(s.a)(e,{activeKey:"onSelect"}),c=l.className,d=l.bsPrefix,b=l.variant,p=l.horizontal,E=l.as,f=void 0===E?"div":E,h=Object(r.a)(l,["className","bsPrefix","variant","horizontal","as"]);return d=Object(m.b)(d,"list-group"),t=p?!0===p?"horizontal":"horizontal-"+p:null,i.a.createElement(u.a,Object(n.a)({ref:a},h,{as:f,className:o()(c,d,b&&d+"-"+b,t&&d+"-"+t)}))}));b.defaultProps={variant:null,horizontal:null},b.displayName="ListGroup",b.Item=d.a,a.a=b},244:function(e,a,t){"use strict";t.d(a,"b",(function(){return s}));var n=t(5),r=t(10),l=t(0),o=t.n(l),c=t(146),i=t(185);function s(e,a){var t=Object(l.useContext)(i.a),n=Object(l.useContext)(c.a);return function(r){n(e===t?null:e,r),a&&a(r)}}var m=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"button":t,c=e.children,i=e.eventKey,m=e.onClick,u=Object(r.a)(e,["as","children","eventKey","onClick"]),d=s(i,m);return o.a.createElement(l,Object(n.a)({ref:a,onClick:d},u),c)}));a.a=m},284:function(e,a,t){"use strict";var n=t(5),r=t(10),l=t(128),o=t.n(l),c=t(0),i=t.n(c),s=t(142),m=t(129),u=t(244),d=t(146),b=t(256),p=t(185),E=i.a.forwardRef((function(e,a){var t=e.children,l=e.eventKey,o=Object(r.a)(e,["children","eventKey"]),s=Object(c.useContext)(p.a);return i.a.createElement(b.a,Object(n.a)({ref:a,in:s===l},o),i.a.createElement("div",null,i.a.Children.only(t)))}));E.displayName="AccordionCollapse";var f=E,h=i.a.forwardRef((function(e,a){var t=Object(s.a)(e,{activeKey:"onSelect"}),l=t.as,c=void 0===l?"div":l,u=t.activeKey,b=t.bsPrefix,E=t.children,f=t.className,h=t.onSelect,v=Object(r.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return b=Object(m.b)(b,"accordion"),i.a.createElement(p.a.Provider,{value:u},i.a.createElement(d.a.Provider,{value:h},i.a.createElement(c,Object(n.a)({ref:a},v,{className:o()(f,b)}),E)))}));h.Toggle=u.a,h.Collapse=f;a.a=h},301:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={mobile:"+8801521500642, +8801641622541",email:"contact@medionexam.com",location:"Sopura, Rajshahi",socials:{facebook:"https://www.facebook.com/medionexam/",twitter:"#",instagram:"#"},about:"MediOnExam (Medical Online Examination) team consists of technical, academic and advisory subteams. Members of Each subteams are dedicated to their work. Learn, Test and Success - is our motto."}},752:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(202),o=t(173),c=t(194),i=t(154),s=t(184),m=t(353),u=t(137),d=t(715),b=t(32),p=t(143),E=t(244),f=t(171),h=t(284),v=t(185);function y(e){var a=e.heading,t=e.eventKey,l=e.callback,o=Object(n.useContext)(v.a),c=Object(E.b)(t,(function(){return l&&l(t)})),i=o===t;return r.a.createElement(f.a.Header,{className:"d-flex justify-content-between px-2",onClick:c},r.a.createElement("span",null,a),r.a.createElement("span",null,i?r.a.createElement(u.b,{size:"1.4rem"}):r.a.createElement(u.a,{size:"1.4rem"})))}var g=function(e){var a=e.children,t=(e.key,Object(p.a)(e,["children","key"]));return(r.a.createElement(h.a,{props:t},a))},w=function(e){var a=e.children,t=e.heading,n=e.eventKey,l=Object(p.a)(e,["children","heading","eventKey"]);return(r.a.createElement(f.a,{props:l},r.a.createElement(y,{heading:t,eventKey:n}),r.a.createElement(h.a.Collapse,{eventKey:n},r.a.createElement(f.a.Body,null,a))))},k=t(301);function O(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(o.a,{lg:4,md:12,className:"mb-5"},r.a.createElement("h3",null,"Login and Credentials"),r.a.createElement("hr",null),r.a.createElement("div",{className:"px-2"},r.a.createElement("p",null,"For taking the full advantage of our online based exam app, you have to create an account at first. You can sign up by filling up a signup form or login with Facebook account."),r.a.createElement(g,null,r.a.createElement(w,{heading:"Steps in Signup form",eventKey:0},r.a.createElement(c.a,null,r.a.createElement(i.a,null,"Go to ",r.a.createElement(b.Link,{to:"/signup"},"signup")," page"),r.a.createElement(i.a,null,"Fill the form with first name, last name, username, email."),r.a.createElement(i.a,null,"Give a password (minimum 6 characters and contain at least one capital and lowercase alpha value and numeric value. E.g., 123abcDEF)"),r.a.createElement(i.a,null,"Retype the password again"),r.a.createElement(i.a,null,"Select your gender"),r.a.createElement(i.a,null,"Lastly check the agreement of terms and conditions.")),r.a.createElement("p",{className:"mt-2"},"So easy!! Click on Submit button to submit the form. After successful submission you will be redirected to login page. (For Facebook login, an automatic popup will be prompted or just click on it and allow this web app.)")),r.a.createElement(w,{heading:"Steps in Login form",eventKey:1},r.a.createElement(c.a,null,r.a.createElement(i.a,null,"Go to ",r.a.createElement(b.Link,{to:"/login"},"login")," page"),r.a.createElement(i.a,null,"In login form, type your email address and password and submit."),r.a.createElement(i.a,null,"You will be redirected to the dashboard page.")),r.a.createElement("p",{className:"mt-2"},"(For Facebook login, an automatic popup will be prompted or just click on it and allow this web app.)")),r.a.createElement(w,{heading:"Update Your Profile",eventKey:2},r.a.createElement("p",null,"For getting best user experience and your academic reports, Please update your profile."),r.a.createElement(c.a,null,r.a.createElement(i.a,null,"Go to ",r.a.createElement(b.Link,{to:"/profile"},"profile")," page"),r.a.createElement(i.a,null,"Click on edit icon ",r.a.createElement(m.a,{size:"1.6rem"}),". A modal window will open."),r.a.createElement(i.a,null,"Fill up all (at least mobile number, faculty, sub faculty, your academic institution)"),r.a.createElement(i.a,null,"Click on \u2018Save Changes\u2019 Button to save your data.")),r.a.createElement("p",{className:"mt-2"},"You can also change your avatar. Click the edit button"," ",r.a.createElement(m.a,{size:"1.6rem"})," right to your profile avatar. A modal window will open with some nice avatar. Choose from it and click on it. Then click on \u2018Save Changes\u2019 Button to save your data"))))),r.a.createElement(o.a,{lg:4,md:12,className:"mb-5"},r.a.createElement("h3",null,"Courses & Exams"),r.a.createElement("hr",null),r.a.createElement("div",{className:"px-2"},r.a.createElement("p",null,"For taking part in any exam. You have to enroll for a course. After successful enrollment, you will be able to take part in exam."),r.a.createElement(g,null,r.a.createElement(w,{heading:"How to enroll from a Course",eventKey:0},r.a.createElement(c.a,null,r.a.createElement(i.a,null,"Go to ",r.a.createElement(b.Link,{to:"/courses"},"Courses")," page"),r.a.createElement(i.a,null,"Click on \u2018Enroll\u2019 button."),r.a.createElement(s.a,{variant:"info",className:"m-3"},"if free course, you will be enrolled automatically. But at paid course, first you need to pay and then message us. After verification by admin, admin will approve you. Then you can enjoy the exams."))),r.a.createElement(w,{heading:"How to take part an exam ",eventKey:1},r.a.createElement(c.a,null,r.a.createElement(i.a,null,"Go to ",r.a.createElement(b.Link,{to:"/exams"},"Exams")," page"),r.a.createElement(i.a,null,"Then click on \u2018Go to Exams\u2019 button of your desired course."),r.a.createElement(i.a,null,"You will lists of exams under the course. Click on 'Start Exam' button to start an exam or 'Rank' button to see the exam rank."),r.a.createElement(i.a,null,"A modal window will show up with exam summary and rules."),r.a.createElement(i.a,null,"Click on proceed."),r.a.createElement(s.a,{variant:"info",className:"m-3"},"Give exam. Upon ending click on \u2018Submit\u2019 button to submit your answer sheet. Then you will get an automatically generated result.")))))),r.a.createElement(o.a,{lg:4,md:12},r.a.createElement("h3",{id:"payment"},"Payement Process"),r.a.createElement("p",null,"(For easily payement process with QR code scanning, go to"," ",r.a.createElement(b.Link,{to:"/payment"},"Payment Page"),")"),r.a.createElement("hr",null),r.a.createElement("div",{className:"px-2"},r.a.createElement(g,null,r.a.createElement(w,{heading:"Steps in bKash Payement Process",eventKey:0},r.a.createElement(c.a,null,r.a.createElement(i.a,null,"Go to your bKash Mobile Menu by dialing *247# or go to your mobile bKash app"),r.a.createElement(i.a,null,"Choose \u201cSend Money\u201d"),r.a.createElement(i.a,null,"Enter the bKash Account Number: 01737313915"),r.a.createElement(i.a,null,"Enter the amount you want to send (Payment Amount of The Course)"),r.a.createElement(i.a,null,"Enter a reference about the transaction.* (Enter Your User ID)",r.a.createElement(s.a,{variant:"warning"},"You will Get Your user id at Topbar with golden color text or your ",r.a.createElement(b.Link,{to:"/profile"},"Profile")," marked with golden background at the top section")),r.a.createElement(i.a,null,"Now enter your bKash Mobile Menu PIN to confirm the transaction"),r.a.createElement(i.a,null,r.a.createElement("p",{className:"mt-2"},"Now Message at 01737313915"),r.a.createElement(s.a,{variant:"info"},"Write - Your name <Space> Your User ID / Your Email <Space> The bKash Number (From which you send money)"),r.a.createElement(s.a,{variant:"warning"},"You will Get Your user id at Topbar with golden color text or your ",r.a.createElement(b.Link,{to:"/profile"},"Profile")," marked with golden background at the top section")),r.a.createElement(i.a,null,r.a.createElement("p",null,"Or message at Facebook messenger"),r.a.createElement(s.a,{variant:"primary"},"Write - Your name <Space> Your User ID / Your Email <Space> The bKash Number (From you send money)"),r.a.createElement(s.a,{variant:"warning"},"You will Get Your user id at Topbar with golden color text or your ",r.a.createElement(b.Link,{to:"/profile"},"Profile")," marked with golden background at the top section")),r.a.createElement(i.a,null,"You will be informed through message or mobile call within 8 hours.")),r.a.createElement("p",null,"*Do not use more than one word, avoid space or special characters")))))),r.a.createElement(l.a,{className:"my-3"},r.a.createElement(o.a,null),r.a.createElement(o.a,{md:4,className:"text-center"},r.a.createElement("h4",null,r.a.createElement(d.a,{id:"btn.contact",defaultMessage:"Contact Info"})),r.a.createElement("p",null,r.a.createElement(u.I,{size:"1.4rem",className:"mr-2"}),r.a.createElement("span",null,k.a.mobile),r.a.createElement("br",null),r.a.createElement(u.q,{size:"1.4rem",className:"mr-2"}),r.a.createElement("span",null,k.a.email),r.a.createElement("br",null),r.a.createElement(u.D,{size:"1.4rem",className:"mr-2"}),r.a.createElement("span",null,k.a.location)),r.a.createElement("a",{href:k.a.socials.facebook,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.u,{size:"2.6rem"})),r.a.createElement("a",{href:k.a.socials.twitter,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.db,{size:"2.6rem"})),r.a.createElement("a",{href:k.a.socials.instagram,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.B,{size:"2.6rem"}))),r.a.createElement(o.a,null)))}t.d(a,"default",(function(){return O}))}}]);
//# sourceMappingURL=34.8a3b1071.chunk.js.map