webpackJsonp([5],{"02im":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],a={render:o,staticRenderFns:s};n.a=a},M93x:function(e,n,t){"use strict";function o(e){t("Xvs/")}var s=t("xJD8"),a=t("02im"),c=t("VU/8"),i=o,r=c(s.a,a.a,i,null,null);n.a=r.exports},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),s=(t("NYxO"),t("M93x")),a=t("YaEn"),c=t("YtJ0"),i=t("nrAE"),r=(t.n(i),t("Au9i")),u=t.n(r),l=t("d8/S");t.n(l);o.default.use(u.a),o.default.config.productionTip=!1,window.setTimeout(function(){console.log(c.a),c.a.dispatch("init")},1e3),new o.default({el:"#app",router:a.a,store:c.a,template:"<App/>",components:{App:s.a}})},UkNq:function(e,n,t){"use strict";function o(e){var n=s("BBlY_5OeDkp2zl_Hx9jFxymKyK4kQKZdzoCoe0L5RqpiV2eK0t4zx-d3JPHlISZ0P1nQdSZsxuA5SRlDB0MZWLw");e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n}).then(function(e){console.log(c()(e))}).catch(function(e){console.log("订阅失败: ",e)})}function s(e){for(var n="=".repeat((4-e.length%4)%4),t=(e+n).replace(/\-/g,"+").replace(/_/g,"/"),o=window.atob(t),s=new Uint8Array(o.length),a=0;a<o.length;++a)s[a]=o.charCodeAt(a);return s}var a=t("mvHQ"),c=t.n(a),i={indexMsg:"",categoryMsg:"",carMsg:"",userMsg:"",allMsg:""},r={changeIndex:function(e,n){e.indexMsg=n},changeCategory:function(e,n){e.categoryMsg=n},changeCar:function(e,n){e.carMsg=n},changeUser:function(e,n){e.userMsg=n},changeAll:function(e,n){e.allMsg=n}},u={onMessage:function(e,n){var t=(e.state,e.commit);"category"==n.to&&(console.log("category收到消息"+n),t("changeCategory",n.message)),"all"==n.to&&t("changeAll",n.message)},init:function(e){var n=(e.state,e.dispatch);if("serviceWorker"in navigator){navigator.serviceWorker.register("../sw.js").then(function(e){e.pushManager.getSubscription().then(function(n){n?console.log(c()(n)):(console.log("没有订阅"),o(e))})}),navigator.serviceWorker.addEventListener("message",function(e){e.ports[0].postMessage("all 给出回应"),n("onMessage",e.data)})}}};n.a={state:i,mutations:r,actions:u}},"Xvs/":function(e,n){},YaEn:function(e,n,t){"use strict";var o=t("7+uW"),s=t("/ocq");o.default.use(s.a);var a=function(e){return t.e(0).then(function(){var n=[t("mlqX")];e.apply(null,n)}.bind(this)).catch(t.oe)},c=function(e){return t.e(1).then(function(){var n=[t("fXvj")];e.apply(null,n)}.bind(this)).catch(t.oe)},i=function(e){return t.e(2).then(function(){var n=[t("SeH+")];e.apply(null,n)}.bind(this)).catch(t.oe)},r=function(e){return t.e(3).then(function(){var n=[t("i/Eh")];e.apply(null,n)}.bind(this)).catch(t.oe)};n.a=new s.a({routes:[{path:"/",name:"首页",component:a},{path:"/category",name:"分类页",component:c},{path:"/car",name:"购物车页",component:i},{path:"/user",name:"用户页",component:r,meta:{requireAuth:!0}}]})},YtJ0:function(e,n,t){"use strict";var o=t("7+uW"),s=t("NYxO"),a=t("UkNq");o.default.use(s.a),n.a=new s.a.Store({modules:{sw:a.a},state:{},getters:{},mutations:{},actions:{}})},"d8/S":function(e,n){},xJD8:function(e,n,t){"use strict";var o=t("mvHQ"),s=t.n(o);n.a={data:function(){return{websock:null}},created:function(){},destroyed:function(){},computed:{fetchLoading:function(){return this.$store.state.detail.fetchLoading}},methods:{initWebSocket:function(){this.websock=new WebSocket("ws://127.0.0.1:1322"),this.websock.onmessage=this.websocketonmessage,this.websock.onopen=this.websocketonopen,this.websock.onerror=this.websocketonerror,this.websock.onclose=this.websocketclose},websocketonopen:function(){var e=this,n={test:"12345"};setTimeout(function(){e.websocketsend(s()(n))},500)},websocketonerror:function(){},websocketonmessage:function(e){JSON.parse(e.data)},websocketsend:function(e){this.websock.send(e)},websocketclose:function(e){console.log("断开连接",e)}}}}},["NHnr"]);
//# sourceMappingURL=app.564f5553c76b235e79cf.js.map