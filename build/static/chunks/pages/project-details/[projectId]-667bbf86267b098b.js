(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{5097:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-details/[projectId]",function(){return n(3215)}])},8180:function(e,s,n){"use strict";var r=n(9669),a=n.n(r)().create({baseURL:"https://api-fcms.unicode.edu.vn/api/v1"});s.Z=a},4848:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var r=n(5893),a=n(7294),t=(n(2175),n(1664)),c=n(2806),l=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")},i=function(e){var s=e.lr,n=e.nr,i=e.theme;return a.useEffect((function(){}),[]),(0,r.jsx)("nav",{ref:n,className:"navbar navbar-expand-lg change ".concat("themeL"===i?"light":""),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(t.default,{href:"/",children:(0,r.jsx)("a",{className:"logo",children:i&&"themeL"===i?(0,r.jsx)("img",{ref:s,src:"".concat(c.Q1),alt:"logo"}):(0,r.jsx)("img",{ref:s,src:"".concat(c.E8),alt:"logo"})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button",onClick:l,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"icon-bar",children:(0,r.jsx)("i",{className:"fas fa-bars"})})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"})]})})}},2623:function(e,s,n){"use strict";var r=n(5893);n(7294);s.Z=function(){return(0,r.jsx)("footer",{className:"footer-half sub-bg",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"copyrights text-center mt-0",children:(0,r.jsx)("p",{children:"Design by FPT"})})})})}},371:function(e,s,n){"use strict";var r=n(5893),a=n(7294),t=n(9008);s.Z=function(e){var s=e.children;return e.bdOn&&a.useEffect((function(){return document.querySelector("body").classList.add("bd-dark"),function(){document.querySelector("body").classList.remove("bd-dark")}})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"/css/light.css"})}),s]})}},3215:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return m}});var r=n(5893),a=n(7294),t=n(371),c=n(4848),l=n(1664);n(1239),n(2157);var i=n(2623),o=n(1163),d=n(8180),u=n(5313),h=n(8420),f=function(e){var s,n=(void 0===e?{}:e).project;return(0,r.jsx)("section",{className:"page-header proj-det bg-img parallaxie valign",style:{backgroundImage:"url(/img/portfolio/project2/bg.jpg)"},"data-overlay-dark":"4",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"software"}),(0,r.jsx)("h2",{children:null===n||void 0===n||null===(s=n.topic)||void 0===s?void 0:s.name})]})})}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-3",children:(0,r.jsxs)("div",{className:"item mt-30",children:[(0,r.jsx)("h6",{children:"Team"}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:"#0",children:n.topic.code})})]})}),(0,r.jsx)("div",{className:"col-lg-3",children:(0,r.jsxs)("div",{className:"item mt-30",children:[(0,r.jsx)("h6",{children:"Date"}),(0,r.jsx)("p",{children:(0,u.Z)((0,h.Z)(n.createAt),"PPP")})]})}),(0,r.jsx)("div",{className:"col-lg-3",children:(0,r.jsxs)("div",{className:"item mt-30",children:[(0,r.jsx)("h6",{children:"Mentor"}),(0,r.jsx)("p",{children:n.mainMentor.name})]})}),(0,r.jsx)("div",{className:"col-lg-3",children:(0,r.jsxs)("div",{className:"item mt-30",children:[(0,r.jsx)("h6",{children:"Tags"}),(0,r.jsxs)("p",{children:[(0,r.jsx)(l.default,{href:"/works/works-dark",children:"Minimal"})," ,",(0,r.jsx)(l.default,{href:"/works/works-dark",children:"Modern"})," ,",(0,r.jsx)(l.default,{href:"/works/works-dark",children:"Design"})]})]})})]})]})})},m=function(){var e=(0,o.useRouter)().query.projectId,s=(0,a.useState)(),n=s[0],l=s[1];a.useEffect((function(){e&&d.Z.get("/projects/".concat(e)).then((function(e){return l(e.data)}))}),[e]);var u=a.useRef(null),h=a.useRef(null);return a.useEffect((function(){var e=u.current;h.current;window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll")}))}),[u]),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(c.Z,{nr:u,lr:h,theme:"themeL"}),n&&(0,r.jsx)(f,{project:n}),n&&(0,r.jsx)("div",{className:"container mx-auto text-center py-5",children:(0,r.jsx)("embed",{src:n.topic.attachment,type:"application/pdf",frameBorder:"0",scrolling:"auto",height:"800px",width:"100%"})}),(0,r.jsx)(i.Z,{})]})}}},function(e){e.O(0,[6468,4104,9669,3894,9774,2888,179],(function(){return s=5097,e(e.s=s);var s}));var s=e.O();_N_E=s}]);