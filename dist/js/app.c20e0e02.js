(function(e){function t(t){for(var n,c,l=t[0],u=t[1],i=t[2],b=0,d=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2b93fb52","chunk-0b8f94c8":"541237c5","chunk-2d0b8dd6":"45b19979","chunk-2d0e5e97":"e88cd8b4","chunk-2d0e8f6a":"6d4d97ed","chunk-2d0f04ad":"6cb41291","chunk-2d217c9a":"83e2075b","chunk-2d21e5d8":"55a97400","chunk-2d21e7c2":"1f12d368","chunk-2d22d242":"727714d2","chunk-4295dfc0":"f1913f66","chunk-97a8253c":"a31460b3","chunk-ba1b4452":"d2129a91","chunk-b244ec9c":"31629725","chunk-d5e9e484":"f03eeb7d"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var i=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(b);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}r[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/myvueprj/dist/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var b=0;b<u.length;b++)t(u[b]);var s=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3904:function(e,t,a){},"408a":function(e,t,a){"use strict";a("3904")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=a("bc3a"),o=a.n(r),c=a("130e"),l=a("7bb1"),u=a("3aa8"),i=a("cbdf"),b=a("9457"),s=(a("7b17"),a("8a14"));a("fe26");function d(e,t,a,r,o,c){var l=Object(n["I"])("router-view");return Object(n["y"])(),Object(n["g"])("div",null,[Object(n["k"])(l)])}var f={data:function(){return{name:"Production的家"}}},h=(a("61ef"),a("6b0d")),p=a.n(h);const v=p()(f,[["render",d]]);var j=v,m=(a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("466d"),a("6c02")),g=a("cf05"),O=a.n(g),k={class:"home"},y=Object(n["h"])("img",{alt:"Vue logo",src:O.a},null,-1),w={class:"mb-3"},_=Object(n["h"])("label",{for:"email",class:"form-label"},"Email",-1),P=["onClick"],T=Object(n["h"])("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function x(e,t,a,r,o,c){var l=Object(n["I"])("HelloWorld"),u=Object(n["I"])("Field"),i=Object(n["I"])("error-message"),b=Object(n["I"])("Form");return Object(n["y"])(),Object(n["g"])("div",k,[y,Object(n["k"])(l,{msg:"Welcome to Your Vue.js App"}),Object(n["k"])(b,{onSubmit:c.onSubmit},{default:Object(n["T"])((function(e){var a=e.errors,r=e.values,c=e.validate;return[Object(n["j"])(Object(n["L"])(a)+" "+Object(n["L"])(r)+" ",1),Object(n["h"])("div",w,[_,Object(n["k"])(u,{id:"email",name:"email",type:"email",class:Object(n["s"])(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user.email=e})},null,8,["class","modelValue"]),Object(n["k"])(i,{name:"email",class:"invalid-feedback"})]),Object(n["h"])("button",{class:"btn me-2 btn-outline-primary",type:"button",onClick:c},"驗證",8,P),T]})),_:1},8,["onSubmit"])])}var C={class:"hello"},I=Object(n["i"])('<p data-v-7fbfaaea> For a guide and recipes on how to configure / customize this project,<br data-v-7fbfaaea> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>vue-cli documentation</a>. </p><h3 data-v-7fbfaaea>Installed CLI Plugins</h3><ul data-v-7fbfaaea><li data-v-7fbfaaea><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-7fbfaaea>babel</a></li><li data-v-7fbfaaea><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-7fbfaaea>router</a></li><li data-v-7fbfaaea><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-7fbfaaea>eslint</a></li></ul><h3 data-v-7fbfaaea>Essential Links</h3><ul data-v-7fbfaaea><li data-v-7fbfaaea><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>Core Docs</a></li><li data-v-7fbfaaea><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>Forum</a></li><li data-v-7fbfaaea><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>Community Chat</a></li><li data-v-7fbfaaea><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-7fbfaaea>Twitter</a></li><li data-v-7fbfaaea><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>News</a></li></ul><h3 data-v-7fbfaaea>Ecosystem</h3><ul data-v-7fbfaaea><li data-v-7fbfaaea><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>vue-router</a></li><li data-v-7fbfaaea><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>vuex</a></li><li data-v-7fbfaaea><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-7fbfaaea>vue-devtools</a></li><li data-v-7fbfaaea><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-7fbfaaea>vue-loader</a></li><li data-v-7fbfaaea><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-7fbfaaea>awesome-vue</a></li></ul>',7);function S(e,t,a,r,o,c){return Object(n["y"])(),Object(n["g"])("div",C,[Object(n["h"])("h1",null,Object(n["L"])(a.msg),1),I])}var E={name:"HelloWorld",props:{msg:String}};a("b886");const L=p()(E,[["render",S],["__scopeId","data-v-7fbfaaea"]]);var M=L,F={name:"Home",data:function(){return{user:{}}},methods:{onSubmit:function(){console.log(this.user)}},created:function(){console.log("http://localhost:3000/","mars-api")},components:{HelloWorld:M}};const H=p()(F,[["render",x]]);var V=H,N={class:"navbar navbar-expand-lg navbar-light bg-light"},W={class:"container-fluid"},A=Object(n["h"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),D=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),q={class:"collapse navbar-collapse",id:"navbarNav"},z={class:"navbar-nav"},J={class:"nav-item"},R=Object(n["j"])("Home"),B={class:"nav-item"},$=Object(n["j"])("About"),U={class:"nav-item"},Y=Object(n["j"])("新增頁面 "),G={class:"nav-item"},K=Object(n["j"])("Stock Table"),Q={class:"nav-item"},X=Object(n["j"])("產品列表"),Z={class:"nav-item"};function ee(e,t,a,r,o,c){var l=Object(n["I"])("router-link"),u=Object(n["I"])("dashboard-content"),i=Object(n["I"])("content-footer");return Object(n["y"])(),Object(n["g"])("div",null,[Object(n["h"])("nav",N,[Object(n["h"])("div",W,[A,D,Object(n["h"])("div",q,[Object(n["h"])("ul",z,[Object(n["h"])("li",J,[Object(n["k"])(l,{to:"/home",class:"nav-link"},{default:Object(n["T"])((function(){return[R]})),_:1})]),Object(n["h"])("li",B,[Object(n["k"])(l,{to:"/about",class:"nav-link"},{default:Object(n["T"])((function(){return[$]})),_:1})]),Object(n["h"])("li",U,[Object(n["k"])(l,{to:{name:"新增頁面"},class:"nav-link"},{default:Object(n["T"])((function(){return[Y]})),_:1})]),Object(n["h"])("li",G,[Object(n["k"])(l,{to:"/stock",class:"nav-link"},{default:Object(n["T"])((function(){return[K]})),_:1})]),Object(n["h"])("li",Q,[Object(n["k"])(l,{to:"/dashboard/products",class:"nav-link"},{default:Object(n["T"])((function(){return[X]})),_:1})]),Object(n["h"])("li",Z,[Object(n["h"])("a",{class:"nav-link",href:"#",onClick:t[0]||(t[0]=Object(n["V"])((function(){return c.logout&&c.logout.apply(c,arguments)}),["prevent"]))},"登出")])])])])]),Object(n["k"])(u),Object(n["k"])(i)])}var te={class:"footer"},ae={class:"container-fluid d-flex flex-wrap justify-content-between"},ne=Object(n["j"])("Dashboard"),re=Object(n["h"])("div",{class:"copyright d-flex flex-wrap"},[Object(n["j"])(" © Coded with "),Object(n["h"])("i",{class:"fa fa-heart heart"}),Object(n["j"])(" by "),Object(n["h"])("a",{href:"https://github.com/cristijora",target:"_blank"},"   Cristi Jora."),Object(n["j"])("  Designed by "),Object(n["h"])("a",{href:"https://www.creative-tim.com/?ref=pdf-vuejs",target:"_blank"},"  Creative Tim.")],-1);function oe(e,t,a,r,o,c){var l=Object(n["I"])("router-link");return Object(n["y"])(),Object(n["g"])("footer",te,[Object(n["h"])("div",ae,[Object(n["h"])("nav",null,[Object(n["h"])("ul",null,[Object(n["h"])("li",null,[Object(n["k"])(l,{to:{path:"/admin"}},{default:Object(n["T"])((function(){return[ne]})),_:1})])])]),re])])}var ce={};const le=p()(ce,[["render",oe]]);var ue=le,ie={class:"content"},be={class:"container-fluid"};function se(e,t,a,r,o,c){var l=Object(n["I"])("router-view");return Object(n["y"])(),Object(n["g"])("div",ie,[Object(n["h"])("div",be,[Object(n["k"])(l)])])}var de={};a("408a");const fe=p()(de,[["render",se]]);var he=fe,pe={components:{ContentFooter:ue,DashboardContent:he},methods:{logout:function(){var e=this,t="".concat("http://localhost:3000/","logout");console.log(t),this.$http.post(t,this.user).then((function(t){t.data.success&&(console.log(t),e.$router.push("/login"))}))}}};const ve=p()(pe,[["render",ee]]);var je=ve,me=[{path:"/",component:je,redirect:"/dashboard",children:[{path:"/home",name:"Home",component:V},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"newpage",name:"新增頁面",component:function(){return a.e("chunk-2d0f04ad").then(a.bind(null,"9c6c"))},children:[{path:"a",component:function(){return a.e("chunk-2d0e8f6a").then(a.bind(null,"8c09"))}},{path:"b",component:function(){return a.e("chunk-2d21e5d8").then(a.bind(null,"d4f8"))}},{path:"dynamicRouter/:id",component:function(){return a.e("chunk-2d21e7c2").then(a.bind(null,"d682"))}},{path:"dynamicRouterByProps/:id",component:function(){return a.e("chunk-2d22d242").then(a.bind(null,"f5da"))},props:function(e){return console.log("route",e),{id:e.params.id}}},{path:"RouterNavigation/",component:function(){return a.e("chunk-0b8f94c8").then(a.bind(null,"7a8c"))}},{path:"namedView",component:function(){return a.e("chunk-2d217c9a").then(a.bind(null,"c7e5"))},children:[{path:"c2a",components:{left:function(){return a.e("chunk-2d0b8dd6").then(a.bind(null,"3102"))},right:function(){return a.e("chunk-2d0e8f6a").then(a.bind(null,"8c09"))}}},{path:"c2b",components:{left:function(){return a.e("chunk-2d0b8dd6").then(a.bind(null,"3102"))},right:function(){return a.e("chunk-2d21e5d8").then(a.bind(null,"d4f8"))}}}]}]},{path:"/stock",name:"Stock",component:function(){return Promise.all([a.e("chunk-ba1b4452"),a.e("chunk-b244ec9c")]).then(a.bind(null,"c6e6"))}},{path:"/login",component:function(){return a.e("chunk-97a8253c").then(a.bind(null,"a55b"))}},{path:"/dashboard",component:function(){return a.e("chunk-4295dfc0").then(a.bind(null,"7277"))},children:[{path:"products",component:function(){return Promise.all([a.e("chunk-ba1b4452"),a.e("chunk-d5e9e484")]).then(a.bind(null,"e6dc"))}}]}]},{path:"/:pathMatch(.*)*",component:function(){return a.e("chunk-2d0e5e97").then(a.bind(null,"9703"))}},{path:"/newPage/:pathMatch(.*)*",redirect:{name:"Home"}}],ge=Object(m["a"])({history:Object(m["b"])(),routes:me,linkActiveClass:"active",scrollBehavior:function(e,t,a){return console.log(e,t,a),e.fullPath.match("newPage")?{top:0}:{}}}),Oe=ge;Object(l["e"])("required",u["c"]),Object(l["e"])("email",u["a"]),Object(l["e"])("min",u["b"]),Object(l["d"])({generateMessage:Object(i["a"])({zh_TW:b}),validateOnInput:!0}),Object(i["b"])("zh_TW");var ke=Object(n["d"])(j).use(Oe);ke.use(c["a"],o.a),ke.component("Loading",s["a"]),ke.component("Form",l["c"]),ke.component("Field",l["b"]),ke.component("ErrorMessage",l["a"]),ke.mount("#app")},"61ef":function(e,t,a){"use strict";a("f90e")},b886:function(e,t,a){"use strict";a("d735")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d735:function(e,t,a){},f90e:function(e,t,a){}});
//# sourceMappingURL=app.c20e0e02.js.map