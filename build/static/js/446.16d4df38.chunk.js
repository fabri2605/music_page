/*! For license information please see 446.16d4df38.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmusic=self.webpackChunkmusic||[]).push([[446],{446:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(E){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}t.wrap=l;var h={};function d(){}function p(){}function m(){}var v={};u(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(N([])));y&&y!==e&&r.call(y,i)&&(v=y);var x=m.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(a,i,c,s){var u=f(t[a],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=m,u(x,"constructor",m),u(m,"constructor",p),p.displayName=u(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),u(x,s,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}r.r(e),r.d(e,{default:function(){return D}});var a=r(192);function i(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=(0,a.Z)(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw i}}}}function c(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,s,"next",t)}function s(t){c(a,n,o,i,s,"throw",t)}i(void 0)}))}}var u=r(885),l=r(791),f="SongComp_general__wjVbG",h="SongComp_filter__-JK76",d="SongComp_loading__b2ZSz",p="SongComp_cartel__P1eF9",m="SongComp_title__yjnaV",v="SongComp_artist__195oR",g="SongComp_spol__Jt-MV",y="SongComp_nav__PBDPn",x="SongComp_user__3juGt",b="SongComp_logout__J39L+",_="SongComp_fetchbutton__7Wivw",j="SongComp_myform__i22jP",w=r(822),S=r(184),L=function(t){var e=document.getElementsByClassName("player"),r=l.useState(!1),n=(0,u.Z)(r,2),o=n[0],a=n[1];return(0,S.jsxs)("div",{className:p,children:[(0,S.jsx)("p",{children:function(t){var e=Math.floor(t/60%60),r=t%60;return(e=e<10?"0"+e:e)+":"+(r=r<10?"0"+Math.floor(r):Math.floor(r))}(t.song.duration)}),(0,S.jsx)("img",{onClick:function(r){var n,o=i(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;a.id===t.song.name?a.play():a.pause()}}catch(c){o.e(c)}finally{o.f()}},alt:t.song.name,src:t.song.img}),o&&(0,S.jsx)(w.Z,{}),(0,S.jsx)("h3",{className:m,children:t.song.name}),(0,S.jsx)("a",{href:t.song.authorUrl,children:(0,S.jsx)("h5",{className:v,children:t.song.author})}),(0,S.jsx)("div",{className:g,children:(0,S.jsx)("a",{href:t.song.url.spotify,children:"Listen it on Spoltify!"})}),(0,S.jsx)("audio",{onPause:function(e){a(!document.getElementById(t.song.name).paused)},id:t.song.name,className:"player",onPlay:function(r){a(!document.getElementById(t.song.name).paused);var n,o=i(e);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.volume=.1,c.id===t.song.name?c.setAttribute("controls",""):(c.pause(),c.removeAttribute("controls"))}}catch(s){o.e(s)}finally{o.f()}},children:(0,S.jsx)("source",{src:t.song.preview,type:"audio/mpeg"})})]})},N=function(t){var e=l.useState(""),r=(0,u.Z)(e,2),n=r[0],a=r[1],i=l.useState(""),c=(0,u.Z)(i,2),f=c[0],h=c[1],d=l.useState(!1),p=(0,u.Z)(d,2),m=p[0],v=p[1],g=l.useState(!1),y=(0,u.Z)(g,2),x=y[0],b=y[1],_=l.useState(!1),w=(0,u.Z)(_,2),L=w[0],N=w[1],k=function(){var e=s(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(!0),r.preventDefault(),!E||!C){e.next=5;break}return e.next=5,fetch("https://react-http-467cc-default-rtdb.firebaseio.com/users.json").then((function(t){return t.json()})).then((function(e){var r=!1;for(var o in e)if(e[o].Name===n){if(e[o].Password!==f)return N(!0),null;t.submitionHandler(n,f,!0),r=!0}L||!1!==r||t.submitionHandler(n,f,!1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n.length>3,C=f.length>3;return(0,S.jsxs)("form",{onSubmit:k,className:j,children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{children:"Username:"}),(0,S.jsx)("input",{type:"text",onBlur:function(){v(!0)},onChange:function(t){a(t.target.value.trim())},value:n})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{children:"Password:"}),(0,S.jsx)("input",{type:"password",onBlur:function(){b(!0)},onChange:function(t){h(t.target.value.trim())},value:f})]}),(0,S.jsx)("button",{type:"submit",children:"Register"}),!E&&m&&(0,S.jsx)("p",{children:"Invalid username!"}),!C&&E&&x&&(0,S.jsx)("p",{children:"Invalid password!"}),L&&(0,S.jsx)("p",{children:"User already in use || incorrect password!"})]})},k="myLoader_myBody__9fNXq",E="myLoader_middle__b0gCT",C="myLoader_bar__ENqeG",I="myLoader_bar1__5Hc6j",P="myLoader_bar2__HbDyy",Z="myLoader_bar3__Gwfb7",F="myLoader_bar4__COqIT",O="myLoader_bar5__j2FjX",A="myLoader_bar6__-mZDr",G="myLoader_bar7__lWZYv",T="myLoader_bar8__lt-jC",H=function(){return(0,S.jsx)("div",{className:k,children:(0,S.jsxs)("div",{className:E,children:[(0,S.jsx)("div",{className:"".concat(C," ").concat(I)}),(0,S.jsx)("div",{className:"".concat(C," ").concat(P)}),(0,S.jsx)("div",{className:"".concat(C," ").concat(Z)}),(0,S.jsx)("div",{className:"".concat(C," ").concat(F)}),(0,S.jsx)("div",{className:"".concat(C," ").concat(O)}),(0,S.jsx)("div",{className:"".concat(C," ").concat(A)}),(0,S.jsx)("div",{className:"".concat(C," ").concat(G)}),(0,S.jsx)("div",{className:"".concat(C," ").concat(T)})]})})},B=function(t){var e=l.createRef();return(0,S.jsxs)("nav",{className:t.loading?d+" "+y:y,children:[(0,S.jsx)("p",{ref:e,children:"French Drillin"}),(0,S.jsx)("button",{className:_,onClick:t.fetching,children:"Fetch Songs"}),t.user?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("button",{className:x,disabled:!0,children:t.user}),(0,S.jsx)("button",{onClick:t.logoutHandler,className:b,children:"Log Out"})]}):(0,S.jsx)("button",{onClick:t.showForm,className:_,children:"Register / Login"})]})},D=function(){var t=l.useState(!1),e=(0,u.Z)(t,2),r=e[0],n=e[1],a=l.useState(localStorage.getItem("isLogged")),c=(0,u.Z)(a,2),p=c[0],m=c[1],v=l.useState([]),g=(0,u.Z)(v,2),y=g[0],x=g[1],b=l.useState([]),_=(0,u.Z)(b,2),j=_[0],w=_[1],k=l.useState([]),E=(0,u.Z)(k,2),C=E[0],I=E[1],P=l.useState(!1),Z=(0,u.Z)(P,2),F=Z[0],O=Z[1],A=l.useState(""),G=(0,u.Z)(A,2),T=G[0],D=G[1],R=localStorage.getItem("isLogged"),M=localStorage.getItem("filtred"),X=l.useCallback(s(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n(!1),R){t.next=8;break}return w(""),localStorage.setItem("filtred",""),D("You need to register first!"),t.abrupt("return",null);case 8:if(!(y.length>0&&0===j.length)){t.next=13;break}return w(y),t.abrupt("return",null);case 13:if(!(j.length>0&&y.length>0)){t.next=16;break}return w(M?y.filter((function(t){return t.author===M})):y),t.abrupt("return",null);case 16:return n(!1),O(!0),e={method:"GET",headers:{"X-RapidAPI-Key":"684f76f0f3msh78c59f0291915e8p1bc6c9jsn6b37b43baa62","X-RapidAPI-Host":"spotify23.p.rapidapi.com"}},t.next=21,fetch("https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100",e).then((function(t){return t.json()})).then((function(t){console.log(t);var e=[],r=[];for(var n in t)if("items"===n){var o,a=i(t[n]);try{for(a.s();!(o=a.n()).done;){var c=o.value;e.push({id:c.track.id,name:c.track.name,authorUrl:c.track.artists[0].uri,author:c.track.artists[0].name,preview:c.track.preview_url,img:c.track.album.images[0].url,url:c.track.external_urls,duration:.001*c.track.duration_ms}),r.push(c.track.artists[0].name)}}catch(u){a.e(u)}finally{a.f()}}var s=[];r.sort(),r.forEach((function(t){s.indexOf(t)<0&&s.push(t)})),I(s),x(e),"All"!==M&&M?w(e.filter((function(t){return t.author===M}))):(console.log('localFilter == All || ""'),w(e))})).catch((function(t){console.error(t.message),D(t.message)}));case 21:O(!1);case 22:case"end":return t.stop()}}),t)}))),[p,M,y]);function J(){return(J=s(o().mark((function t(e,r,a){var i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n(!1),O(!0),D(""),a){t.next=15;break}return i={Name:e,Password:r},t.prev=5,t.next=8,fetch("https://react-http-467cc-default-rtdb.firebaseio.com/users.json",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(5),console.log(t.t0.message);case 13:t.next=16;break;case 15:alert("Welcome back "+e);case 16:m(e),localStorage.setItem("isLogged",e),O(!1);case 19:case"end":return t.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}l.useEffect((function(){R===!!p&&m(R),M&&X()}),[]);return(0,S.jsxs)(l.Fragment,{children:[(0,S.jsx)(B,{loading:F,fetching:X,showForm:function(){n(!0)},logoutHandler:function(){m(""),w([]),localStorage.setItem("isLogged",""),localStorage.setItem("filtred","")},user:p}),r?(0,S.jsx)(N,{submitionHandler:function(t,e,r){return J.apply(this,arguments)}}):(0,S.jsxs)("div",{className:F?d:"",children:[j.length>0&&p&&(0,S.jsxs)("div",{className:h,children:[(0,S.jsx)("label",{children:"Filter by artist:"}),(0,S.jsxs)("select",{onChange:function(t){if("All"===t.target.value)w(y),localStorage.setItem("filtred","");else{var e=y.filter((function(e){return e.author===t.target.value}));w(e),localStorage.setItem("filtred",t.target.value)}},children:[(0,S.jsx)("option",{value:"All",children:"All"},"All"),C.map((function(t){return(0,S.jsx)("option",{value:t,children:t},t)}))]})]}),F&&!T&&(0,S.jsx)("div",{children:(0,S.jsx)(H,{})}),(0,S.jsxs)("div",{className:f,children:[!T&&0===j.length&&!F&&!r&&(0,S.jsx)("p",{id:"nonFetchMsg",children:"Songs list is empty, fetch to see some music!"}),T&&(0,S.jsx)("p",{children:T}),!F&&!r&&j.length>0&&p&&j.map((function(t){return(0,S.jsx)(L,{song:t},t.id)}))]})]})]})}}}]);
//# sourceMappingURL=446.16d4df38.chunk.js.map