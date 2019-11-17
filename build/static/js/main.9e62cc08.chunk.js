(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[4],{102:function(e,t,n){"use strict";t.a=function(e){return e.children}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"o",(function(){return a})),n.d(t,"q",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return i})),n.d(t,"k",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"n",(function(){return f})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"h",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"p",(function(){return E}));var r="ADD_INGREDIENTS",a="REMOVE_INGREDIENTS",o="SET_INGREDIENTS",c="FETCH_INGREDIENTS_FAILED",u="PURCHASE_BURGER_START",i="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="DISMISS_OPEN_SUC_MODAL",f="PURCHASE_INIT",d="FETCH_ORDERS_START",b="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",p="AUTH_START",g="AUTH_SUCCESS",h="AUTH_FAIL",O="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},201:function(e,t,n){e.exports=n(322)},210:function(e,t,n){},3:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(11);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},c=function(e,t){var n=!1,r=null;if(!t)return!0;if(t.required&&(n=""!==e.trim()),t.isnumeric){r=(n=/^\d+$/.test(e)&&n)?null:"Must contain numeric number"}return t.minLength&&(r=(n=e.length>=t.minLength&&n)?null:"Must contain letter greater six character"),console.log(r),n}},322:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(45),c=n.n(o),u=n(54),i=n(151),l=n(39),s=(n(210),n(34)),f=n(35),d=n(36),b=n(37),m=n(38),p=n(41),g=n(12),h=n(333),O=(n(211),n(75)),E=n(102),v=n(330),y=n(327),j=n(325),I=n(332),S=Object(l.b)((function(e){return{isUserAuthenticated:null!==e.auth.token}}))((function(e){var t=Object(r.useState)({visible:!1,activeItem:"burgerbuilder"}),n=Object(O.a)(t,2),o=n[0],c=n[1];function u(e){var t=e.target.name;c({activeItem:t,visible:!1})}return a.a.createElement(E.a,null,a.a.createElement(v.a,{fixed:"top",style:{backgroundColor:"#703B09"}},a.a.createElement(h.a,{as:y.a,minWidth:768},a.a.createElement(v.a.Menu,{position:"left"},a.a.createElement(v.a.Item,{as:"a",href:"/",style:{color:"#fff"},header:!0},"BurgerApp")),a.a.createElement(v.a.Menu,{position:"right"},a.a.createElement(v.a.Item,{active:"burgerbuilder"===o.activeItem,onClick:u,to:"/",exact:!0,as:g.b,name:"burgerbuilder",style:{color:"#fff"}},"Burger Builder"),a.a.createElement(v.a.Item,{active:"blog"===o.activeItem,onClick:u,to:"/blog",as:g.b,name:"blog",style:{color:"#fff"}},"Blog"),a.a.createElement(v.a.Item,{active:"counter"===o.activeItem,onClick:u,to:"/counter",as:g.b,name:"counter",style:{color:"#fff"}},"Counter"),e.isUserAuthenticated?a.a.createElement(v.a.Item,{active:"orders"===o.activeItem,onClick:u,to:"/orders",as:g.b,name:"orders",style:{color:"#fff"}},"Orders"):null,e.isUserAuthenticated?a.a.createElement(v.a.Item,{active:"logout"===o.activeItem,onClick:u,to:"/logout",as:g.b,name:"logout",style:{color:"#fff"}},"Logout"):a.a.createElement(v.a.Item,{active:"auth"===o.activeItem,onClick:u,to:"/auth",as:g.b,name:"auth",style:{color:"#fff"}},"Authenticate"))),a.a.createElement(h.a,Object.assign({as:y.a},h.a.onlyMobile),a.a.createElement(v.a.Menu,{position:"left"},a.a.createElement(v.a.Item,{onClick:function(){return c({visible:!0})},style:{color:"#fff"}},a.a.createElement(j.a,{name:"bars"})),a.a.createElement(v.a.Item,{to:"/",as:g.b,header:!0,style:{color:"#fff"}},"BurgerApp")))),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(I.a.Pushable,null,a.a.createElement(I.a,{as:v.a,animation:"overlay",direction:"left",vertical:!0,visible:o.visible,onHide:function(){return c({visible:!1})}},a.a.createElement(v.a.Item,{header:!0}),a.a.createElement(v.a.Item,{as:"a",href:"/",header:!0},"BurgerApp"),a.a.createElement(v.a.Item,{active:"burgerbuilder"===o.activeItem,onClick:u,to:"/",as:g.b,exact:!0,name:"burgerbuilder"},"Burger Builder"),a.a.createElement(v.a.Item,{active:"blog"===o.activeItem,onClick:u,to:"/blog",as:g.b,name:"blog"},"Blog"),a.a.createElement(v.a.Item,{active:"counter"===o.activeItem,onClick:u,to:"/counter",as:g.b,name:"counter"},"Counter"),e.isUserAuthenticated?a.a.createElement(v.a.Item,{active:"orders"===o.activeItem,onClick:u,to:"/orders",as:g.b,name:"orders"},"Orders"):null,e.isUserAuthenticated?a.a.createElement(v.a.Item,{active:"logout"===o.activeItem,onClick:u,to:"/logout",as:g.b,name:"logout"},"Logout"):a.a.createElement(v.a.Item,{active:"auth"===o.activeItem,onClick:u,to:"/auth",as:g.b,name:"auth"},"Authenticate")),a.a.createElement(I.a.Pusher,{dimmed:o.visible},a.a.createElement("br",null),a.a.createElement("div",null,e.children))))})),T=n(66),D=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(p.a,{to:"/"})}}]),t}(r.Component),A=Object(l.b)(null,(function(e){return{onLogout:function(){return e(T.g())}}}))(D),P=a.a.lazy((function(){return Promise.all([n.e(0),n.e(11),n.e(14)]).then(n.bind(null,503))})),k=a.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,498))})),w=a.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(7),n.e(8)]).then(n.bind(null,501))})),R=a.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(12)]).then(n.bind(null,506))})),C=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,502))})),_=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(13),n.e(16)]).then(n.bind(null,492))})),U=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(p.d,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading")},a.a.createElement(p.b,{path:"/auth",exact:!0,component:_}),a.a.createElement(p.b,{path:"/",exact:!0,component:w})),a.a.createElement(p.a,{to:"/"}));return this.props.isUserAuthenticatd&&(e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/logout",exact:!0,component:A}),a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading")},a.a.createElement(p.b,{path:"/checkout",component:C}),a.a.createElement(p.b,{path:"/orders",component:R}),a.a.createElement(p.b,{path:"/blog",component:P}),a.a.createElement(p.b,{path:"/counter",exact:!0,component:k}),a.a.createElement(p.b,{path:"/auth",exact:!0,component:_}),a.a.createElement(p.b,{path:"/",exact:!0,component:w})),a.a.createElement(p.a,{to:"/"}))),a.a.createElement(g.a,{basename:"/"},a.a.createElement(h.a,null,a.a.createElement(S,null,e)))}}]),t}(r.Component),N=Object(l.b)((function(e){return{isUserAuthenticatd:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(T.b())}}}))(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(46),M=n.n(L),B=n(40),H=n(3),x={counter:0},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.d:return Object(H.b)(e,{counter:e.counter+1});case B.b:return Object(H.b)(e,{counter:e.counter-1});case B.a:return Object(H.b)(e,{counter:e.counter+t.val});case B.f:return Object(H.b)(e,{counter:e.counter-t.val});default:return e}},G={results:[]},F=function(e,t){var n=e.results.filter((function(e){return e.id!==t.ID}));return Object(H.b)(e,{results:n})},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.e:return Object(H.b)(e,{results:e.results.concat({id:new Date,value:t.ctrvalue})});case B.c:return F(e,t);default:return e}},W=n(11),K=n(2);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Z={ingredients:null,totalPrice:4,error:!1,loading:!1,building:!1},$={salad:.5,cheese:.4,meat:1.3,bacon:.7},V=function(e){return Object.entries(e).sort().reverse().reduce((function(e,t){var n=Object(O.a)(t,2),r=n[0],a=n[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(W.a)({},r,a))}),{})},Q=function(e,t){var n=Object(W.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(H.b)(e.ingredients,n),totalPrice:e.totalPrice+$[t.ingredientName],building:!0};return Object(H.b)(e,r)},X=function(e,t){var n=Object(W.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(H.b)(e.ingredients,n),totalPrice:e.totalPrice-$[t.ingredientName],building:!0};return Object(H.b)(e,r)},Y=function(e,t){return Object(H.b)(e,{ingredients:V(t.ingredients),totalPrice:4,error:!1,loading:!1,building:!1})},ee=function(e,t){return Object(H.b)(e,{loading:!1,error:!0})},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.a:return Q(e,t);case K.o:return X(e,t);case K.q:return Y(e,t);case K.g:return ee(e);default:return e}};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var re={orders:[],loaded:!1,openSuc:!1,status:null,purchased:!1,error:!1,loading:!0},ae=function(e,t){return Object(H.b)(e,{purchased:!1})},oe=function(e,t){return Object(H.b)(e,{loaded:!0,openSuc:!1})},ce=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(W.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.orderData,{id:t.orderId});return Object(H.b)(e,{orders:e.orders.concat(n),loaded:!1,purchased:!0,openSuc:!0,status:200})},ue=function(e,t){return Object(H.b)(e,{purchased:!1})},ie=function(e,t){return Object(H.b)(e,{openSuc:!1})},le=function(e,t){return Object(H.b)(e,{loading:!0})},se=function(e,t){return Object(H.b)(e,{loading:!1,orders:t.orders})},fe=function(e,t){return Object(H.b)(e,{loading:!1,error:!0})},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.n:return ae(e);case K.l:return oe(e);case K.m:return ce(e,t);case K.k:return ue(e);case K.f:return ie(e);case K.i:return le(e);case K.j:return se(e,t);case K.h:return fe(e);default:return e}},be={loaded:!1,status:null,token:null,userId:null,error:null,message:null,authRedirectPath:"/"},me=function(e,t){return Object(H.b)(e,{error:null,loaded:!0,status:null})},pe=function(e,t){return Object(H.b)(e,{token:t.idToken,userId:t.userId,loaded:!1,status:200,error:null})},ge=function(e,t){return Object(H.b)(e,{loaded:!1,status:400,error:t.error})},he=function(e,t){return Object(H.b)(e,{token:null,userId:null,message:"Logout Successfully",status:null})},Oe=function(e,t){return Object(H.b)(e,{authRedirectPath:t.path})},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.d:return me(e);case K.e:return pe(e,t);case K.b:return ge(e,t);case K.c:return he(e);case K.p:return Oe(e,t);default:return e}};M.a.defaults.headers.common.Authorization="AUTH TOKEN",M.a.defaults.headers.post["Content-Type"]="application/json";console.log(null);var ve=Object(u.c)({burgerbuilder:te,order:de,ctr:z,res:q,auth:Ee}),ye=Object(u.d)(ve,Object(u.a)((function(e){return function(t){return function(n){console.log("[MIDDLEWARE] Dispatching",n);var r=t(n);return console.log("[MIDDLEWARE] next state",e.getState()),r}}}),i.a));c.a.render(a.a.createElement(l.a,{store:ye},a.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return i}));var r="INCREMENT",a="DECREMENT",o="ADD",c="SUBTRACT",u="STORE_RESULT",i="DELETE_RESULT"},57:function(e,t,n){"use strict";var r=n(46),a=n.n(r).a.create({baseURL:"https://react-my-burger-f5421.firebaseio.com"});a.defaults.headers.common.Authorization="AUTH TOKEN FROM INSTANCE",t.a=a},66:function(e,t,n){"use strict";var r=n(2),a=n(57),o=function(e){return{type:r.a,ingredientName:e}},c=function(e){return{type:r.o,ingredientName:e}},u=function(){return{type:r.g}},i=function(){return function(e){a.a.get("/ingredients.json").then((function(t){var n;e(t?(n=t.data,{type:r.q,ingredients:n}):u())})).catch((function(t){console.log(t,"Error DATA"),e(u())}))}},l=n(11);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(){return{type:r.f}},b=function(){return{type:r.n}},m=function(){return{type:r.k}},p=function(e,t){return function(n){n({type:r.l}),a.a.post("/orders.json?auth="+t,e).then((function(t){t&&(200===t.status?(console.log(t,"RESPONSE DATA"),n(function(e,t){return{type:r.m,orderId:e,orderData:t}}(t.data.name,e))):(console.log(t,"ERROR RESPONSE DATA"),n(m())))})).catch((function(e){console.log(e,"ERROR DATA"),n(m())}))}},g=function(e,t){return function(n){n({type:r.i});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){console.log(e,"INSID ACTION");var t,a=[];if(e.data)for(var o in e.data){var c=f({},e.data[o],{id:o});a.push(c)}n((t=a,{type:r.j,orders:t}))})).catch((function(e){console.log(e,"Error DATA"),n({type:r.h})}))}},h=n(46),O=n.n(h),E=function(e,t){return{type:r.e,idToken:e,userId:t}},v=function(){return localStorage.removeItem("token"),localStorage.removeItem("expDate"),localStorage.removeItem("userId"),{type:r.c}},y=function(e){return function(t){setTimeout((function(){t(v())}),1e3*e)}},j=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},c="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6ahT4Mm1B_GKGF2_ne4SaZsHgd8_MSzk";n||(c="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA6ahT4Mm1B_GKGF2_ne4SaZsHgd8_MSzk"),O.a.post(c,o).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expDate",t),localStorage.setItem("userId",e.data.localId),a(E(e.data.idToken,e.data.localId)),a(y(e.data.expiresIn))})).catch((function(e){var t;console.log(e),a((t=e,{type:r.b,error:t}))}))}},I=function(e){return{type:r.p,path:e}},S=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expDate"));if(n>new Date)e(v());else{var r=localStorage.getItem("userId");e(E(t,r)),e(y((n.getTime()-(new Date).getTime())/1e3))}}else e(v())}};n.d(t,"a",(function(){return o})),n.d(t,"j",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"i",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return j})),n.d(t,"k",(function(){return I})),n.d(t,"b",(function(){return S})),n.d(t,"g",(function(){return v}))}},[[201,5,6]]]);
//# sourceMappingURL=main.9e62cc08.chunk.js.map