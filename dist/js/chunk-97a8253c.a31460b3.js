(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97a8253c"],{"0b42":function(t,r,n){var e=n("e8b5"),o=n("68ee"),c=n("861d"),s=n("b622"),a=s("species");t.exports=function(t){var r;return e(t)&&(r=t.constructor,o(r)&&(r===Array||e(r.prototype))?r=void 0:c(r)&&(r=r[a],null===r&&(r=void 0))),void 0===r?Array:r}},"1dde":function(t,r,n){var e=n("d039"),o=n("b622"),c=n("2d00"),s=o("species");t.exports=function(t){return c>=51||!e((function(){var r=[],n=r.constructor={};return n[s]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,n){var e=n("0b42");t.exports=function(t,r){return new(e(t))(0===r?0:r)}},8418:function(t,r,n){"use strict";var e=n("a04b"),o=n("9bf2"),c=n("5c6c");t.exports=function(t,r,n){var s=e(r);s in t?o.f(t,s,c(0,n)):t[s]=n}},"99af":function(t,r,n){"use strict";var e=n("23e7"),o=n("d039"),c=n("e8b5"),s=n("861d"),a=n("7b0b"),i=n("07fa"),u=n("8418"),d=n("65f0"),l=n("1dde"),f=n("b622"),b=n("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",v=b>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),w=l("concat"),y=function(t){if(!s(t))return!1;var r=t[p];return void 0!==r?!!r:c(t)},j=!v||!w;e({target:"Array",proto:!0,forced:j},{concat:function(t){var r,n,e,o,c,s=a(this),l=d(s,0),f=0;for(r=-1,e=arguments.length;r<e;r++)if(c=-1===r?s:arguments[r],y(c)){if(o=i(c),f+o>h)throw TypeError(m);for(n=0;n<o;n++,f++)n in c&&u(l,f,c[n])}else{if(f>=h)throw TypeError(m);u(l,f++,c)}return l.length=f,l}})},a55b:function(t,r,n){"use strict";n.r(r);var e=n("7a23"),o={class:"container mt-5"},c={class:"col-md-6"},s=Object(e["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請登入",-1),a={class:"mb-2"},i=Object(e["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),u={class:"mb-2"},d=Object(e["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),l=Object(e["h"])("div",{class:"text-end mt-4"},[Object(e["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function f(t,r,n,f,b,p){return Object(e["y"])(),Object(e["g"])("div",o,[Object(e["h"])("form",{class:"row justify-content-center",onSubmit:r[2]||(r[2]=Object(e["V"])((function(){return p.signIn&&p.signIn.apply(p,arguments)}),["prevent"]))},[Object(e["h"])("div",c,[s,Object(e["h"])("div",a,[i,Object(e["U"])(Object(e["h"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":r[0]||(r[0]=function(t){return b.user.username=t})},null,512),[[e["P"],b.user.username]])]),Object(e["h"])("div",u,[d,Object(e["U"])(Object(e["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"",autofocus:"","onUpdate:modelValue":r[1]||(r[1]=function(t){return b.user.password=t})},null,512),[[e["P"],b.user.password]])]),l])],32)])}n("99af");var b={data:function(){return{user:{username:"",password:""}}},methods:{signIn:function(){var t=this,r="".concat("http://localhost:3000/","admin/signin");this.$http.post(r,this.user).then((function(r){if(r.data.success){var n=r.data,e=n.token,o=n.expired;document.cookie="hexToken=".concat(e,"; expires=").concat(new Date(o)),t.$router.push("/dashboard/products")}}))}}},p=n("6b0d"),h=n.n(p);const m=h()(b,[["render",f]]);r["default"]=m},e8b5:function(t,r,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}}}]);
//# sourceMappingURL=chunk-97a8253c.a31460b3.js.map