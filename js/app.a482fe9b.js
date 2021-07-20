(function(t){function e(e){for(var o,r,u=e[0],i=e[1],s=e[2],d=0,f=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a={app:0},c=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b3630":"bfe5f091","chunk-3413b9df":"1cdf4961","chunk-5edbc938":"e7b055d6","chunk-7baecf68":"8d749060"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-3413b9df":1,"chunk-5edbc938":1,"chunk-7baecf68":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-2d0b3630":"31d6cfe0","chunk-3413b9df":"f998d8e1","chunk-5edbc938":"2c4f7c21","chunk-7baecf68":"d73c0404"}[t]+".css",a=i.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===o||d===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],l.parentNode.removeChild(l),n(c)},l.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var f=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/evernote-online/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var l=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2889:function(t,e,n){},"29cf":function(t,e,n){"use strict";n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("4e82");var o=n("d2c7"),r=n("4dd6"),a={GET_ALL:"notes/from/:notebookId",ADD_NOTE:"notes/to/:notebookId",UPDATE:"notes/:noteId",DELETE:"notes/:noteId"};e["a"]={getAll:function(t){return new Promise((function(e,n){Object(o["a"])(a.GET_ALL.replace(":notebookId",t)).then((function(t){t.data.forEach((function(t){t.friendlyCreatedAt=Object(r["a"])(t.createdAt),t.friendlyUpdatedAt=Object(r["a"])(t.updatedAt)})),t.data.sort((function(t,e){return t.createdAt<e.createdAt?1:-1})),e(t.data)})).catch((function(t){n(t)}))}))},addNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(o["a"])(a.ADD_NOTE.replace(":notebookId",t),"POST",{title:e,content:n})},update:function(t,e,n){return Object(o["a"])(a.UPDATE.replace(":noteId",t),"PATCH",{title:e,content:n})},delete:function(t){return Object(o["a"])(a.DELETE.replace(":noteId",t),"DELETE")}}},"49c2":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var o=n("d2c7"),r="auth/register",a="auth/login",c="auth/logout",u="auth";function i(){return Object(o["a"])(u)}function s(t,e){return Object(o["a"])(r,"POST",{username:t,password:e})}function d(t,e){return Object(o["a"])(a,"POST",{username:t,password:e})}function f(){return Object(o["a"])(c)}},"4dd6":function(t,e,n){"use strict";function o(t){var e=Date.now(),n=new Date(t).getTime(),o=Math.abs(e-n)/1e3;switch(!0){case o<60:return"刚刚";case o<3600:return parseInt(o/60)+"分钟前";case o<86400:return parseInt(o/3600)+"小时前";default:return parseInt(o/86400)+"天前"}}n.d(e,"a",(function(){return o}))},"56d7":function(t,e,n){"use strict";n.r(e);n("0fb7");var o=n("f529"),r=n.n(o),a=(n("9e1f"),n("6ed5")),c=n.n(a),u=(n("bd49"),n("18ff")),i=n.n(u),s=(n("960d"),n("defb")),d=n.n(s),f=(n("cb70"),n("b370")),l=n.n(f),b=(n("10cb"),n("f3ad")),h=n.n(b),p=(n("1951"),n("eedf")),m=n.n(p),k=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Sidebar"),n("router-view")],1)},v=[],E=n("5530"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t._m(0),n("nav",[n("router-link",{attrs:{to:"/note"}},[n("i",{staticClass:"iconfont icon-note"})]),n("router-link",{attrs:{to:"/notebooks"}},[n("i",{staticClass:"iconfont icon-Note"})]),n("router-link",{attrs:{to:"/trash"}},[n("i",{staticClass:"iconfont icon-lajitong"})]),n("div",{staticClass:"logout",on:{click:t.logout}},[n("i",{staticClass:"iconfont icon-outcome"})])],1)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"iconfont icon-logo"})])])}],y=n("49c2"),w={methods:{logout:function(){var t=this;Object(y["c"])().then((function(e){t.$message.success({message:e.msg}),t.$router.push({path:"/login"})})).catch((function(e){return t.$message.error({message:e.msg})}))}}},T=w,N=(n("e5fe"),n("2877")),j=Object(N["a"])(T,A,O,!1,null,"62f52a42",null),I=j.exports,C=n("2f62"),P={components:{Sidebar:I},methods:Object(E["a"])({},Object(C["b"])(["getAllNotebooks"])),created:function(){var t=this;Object(y["a"])().then((function(e){e.isLogin?t.getAllNotebooks():t.$router.push({path:"/login"})})).catch((function(t){return console.log(t)}))}},D=P,L=(n("7faf"),Object(N["a"])(D,g,v,!1,null,null,null)),_=L.exports,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));k["default"].use(S["a"]);var x=[{path:"/",redirect:{name:"Notebooks"}},{path:"/login",name:"Login",component:function(){return n.e("chunk-7baecf68").then(n.bind(null,"a55b"))}},{path:"/notebooks",name:"Notebooks",component:function(){return n.e("chunk-5edbc938").then(n.bind(null,"04d1a"))}},{path:"/note",name:"NoteDetail",component:function(){return n.e("chunk-3413b9df").then(n.bind(null,"65b4"))}},{path:"/trash",name:"Trash",component:function(){return n.e("chunk-2d0b3630").then(n.bind(null,"27c8"))}}],B=new S["a"]({mode:"hash",base:"/evernote-online/",routes:x}),$=B,G=(n("7db0"),n("a434"),n("4e82"),n("159b"),n("ac1f"),n("5319"),n("d2c7")),M=n("4dd6"),U={GETALL:"notebooks",ADD:"notebooks",DELETE:"notebooks/:id",EDIT:"notebooks/:id"},H={getAll:function(){return new Promise((function(t,e){Object(G["a"])(U.GETALL).then((function(e){e.data.sort((function(t,e){return t.createdAt<e.createdAt?1:-1})),e.data.forEach((function(t){t.friendlyCreatedAt=Object(M["a"])(t.createdAt)})),t(e.data)})).catch((function(t){e(t)}))}))},add:function(t){return Object(G["a"])(U.ADD,"POST",{title:t})},del:function(t){return Object(G["a"])(U.DELETE.replace(":id",t),"DELETE")},edit:function(t,e){return Object(G["a"])(U.EDIT.replace(":id",t),"PATCH",{title:e})}},q={state:{notebooks:null,curBookId:null},getters:{notebooks:function(t){return t.notebooks||[]},curBook:function(t){if(null===t.notebooks||null===t.curBookId)return{};var e=t.notebooks.find((function(e){return e.id==t.curBookId}));return e},curBookId:function(t){return t.curBookId}},mutations:{setAllNotebooks:function(t,e){var n=e.notebooks;t.notebooks=n},setCurBook:function(t,e){var n=e.curBookId;t.curBookId=n},addNotebook:function(t,e){t.notebooks.unshift(e)},delNotebook:function(t,e){var n=e.index;t.notebooks.splice(n,1)},editNotebook:function(t,e){var n=e.notebookId,o=e.newTitle;t.notebooks.find((function(t){return t.id==n})).title=o}},actions:{getAllNotebooks:function(t){var e=t.commit;H.getAll().then((function(t){e("setAllNotebooks",{notebooks:t})}))},addNotebook:function(t,e){var n=t.commit;H.add(e).then((function(t){t.data.friendlyCreatedAt="刚刚",n("addNotebook",t.data)}))},delNotebook:function(t,e){var n=t.commit,o=e.index,r=e.id;return new Promise((function(t){H.del(r).then((function(){n("delNotebook",{index:o}),t({msg:"删除成功"})}))}))},editNotebook:function(t,e){var n=t.commit,o=e.notebookId,r=e.newTitle;return new Promise((function(t){H.edit(o,r).then((function(){n("editNotebook",{notebookId:o,newTitle:r}),t({msg:"修改成功"})}))}))}}},J=q,F=n("29cf"),K={state:{notes:null},getters:{notes:function(t){return t.notes||[]}},mutations:{setNotes:function(t,e){var n=e.notes;t.notes=n},addNote:function(t,e){var n=e.newNote;t.notes.unshift(n)}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;F["a"].getAll(o).then((function(t){n("setNotes",{notes:t})}))},addNote:function(t,e){var n=t.commit,o=e.curBookId,r=e.title;return new Promise((function(t){F["a"].addNote(o,r).then((function(e){e.data.friendlyCreatedAt="刚刚",n("addNote",{newNote:e.data}),t({msg:"添加成功"})}))}))}}},R=K;k["default"].use(C["a"]);var z=new C["a"].Store({modules:{notebooks:J,notes:R}});n("f270");k["default"].config.productionTip=!1,k["default"].use(m.a),k["default"].use(h.a),k["default"].use(l.a),k["default"].use(d.a),k["default"].use(i.a),k["default"].prototype.$msgbox=c.a,k["default"].prototype.$confirm=c.a.confirm,k["default"].prototype.$prompt=c.a.prompt,k["default"].prototype.$message=r.a,new k["default"]({router:$,store:z,render:function(t){return t(_)}}).$mount("#app1")},"7faf":function(t,e,n){"use strict";n("b8ff")},b8ff:function(t,e,n){},d2c7:function(t,e,n){"use strict";n("0fb7");var o=n("f529"),r=n.n(o),a=(n("d3b7"),n("bc3a")),c=n.n(a);c.a.defaults.baseURL="https://note-server.hunger-valley.com/",c.a.defaults.withCredentials=!0,e["a"]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o){var a={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400==t}};return"get"==e.toLowerCase()?a.params=n:a.data=n,c()(a).then((function(t){200==t.status?o(t.data):r.a.error({message:t.data.msg})})).catch((function(t){r.a.error({message:t})}))}))}},e5fe:function(t,e,n){"use strict";n("2889")},f270:function(t,e,n){}});
//# sourceMappingURL=app.a482fe9b.js.map