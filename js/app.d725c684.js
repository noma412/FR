(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/follow_ranking_front/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0057":function(t,e,a){t.exports=a.p+"img/retweet.344e7b7d.svg"},"11b0":function(t,e,a){},"15bb":function(t,e,a){t.exports=a.p+"img/dogeza.1f1df2c8.png"},"1ef8":function(t,e,a){},"3f75":function(t,e,a){"use strict";a("1ef8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{attrs:{id:"app"}},[a("div",{staticClass:"loader-wrapper",class:{loading:t.loading}},[a("div",{staticClass:"loader"},[t._v("Loading...")])]),a("div",{staticClass:"error-modal-wrapper",class:{error:t.error},on:{click:function(e){t.error=!1}}},[a("div",{staticClass:"error-modal"},[a("p",{domProps:{innerHTML:t._s(t.errorText)}}),a("v-btn",{staticClass:"btn",attrs:{color:"#E3F2FD"}},[t._v("OK"),a("span",{staticStyle:{"padding-left":"1px"}},[t._v("!")])])],1)]),a("ranking",{on:{load:t.loadEvent,error:t.errorEvent}})],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"ranking"},[r("h1",[t._v(t._s(t.msg))]),r("section",{staticClass:"main_area"},[t.isLoading?r("content-loader",{staticClass:"main content_loader",attrs:{width:"400",height:"100"}},[r("rect",{attrs:{x:"48",y:"8",rx:"3",ry:"3",width:"340",height:"6"}}),r("rect",{attrs:{x:"48",y:"26",rx:"3",ry:"3",width:"80",height:"6"}}),r("rect",{attrs:{x:"47",y:"52",rx:"3",ry:"3",width:"342",height:"6"}}),r("rect",{attrs:{x:"47",y:"68",rx:"3",ry:"3",width:"342",height:"6"}}),r("rect",{attrs:{x:"47",y:"84",rx:"3",ry:"3",width:"120",height:"6"}}),r("circle",{attrs:{cx:"20",cy:"20",r:"20"}})]):t._l(t.tweets,(function(e,n){return r("a",{key:n,staticClass:"main",class:["main_"+n],attrs:{href:e.url,target:"_blank"}},[r("div",{staticClass:"number"}),r("div",{staticClass:"img_area"},[r("img",{attrs:{src:e.icon,alt:"",loading:"lazy"}})]),r("div",{staticClass:"contents_area"},[r("div",{staticClass:"title_area"},[r("div",[r("span",[t._v(t._s(e.name))]),r("span",[t._v("@"+t._s(e.screen_name))]),r("span",[t._v(t._s(e.time))])])]),r("div",{staticClass:"message_area"},[r("p",{domProps:{innerHTML:t._s(e.text)}}),e.img.length>0?r("div",{staticClass:"message_area_img"},t._l(e.img,(function(t,e){return r("img",{key:e,attrs:{src:t,alt:"",loading:"lazy"}})})),0):t._e(),e.quote?r("div",{staticClass:"quote"},[r("div",{staticClass:"quote_header"},[r("div",{staticClass:"quote_img"},[r("img",{attrs:{src:e.quote.icon,alt:"",loading:"lazy"}})]),r("div",{staticClass:"quote_title"},[r("span",{staticClass:"quote_name"},[t._v(t._s(e.quote.name))]),r("span",{staticClass:"quote_screen_name"},[t._v(" @"+t._s(e.quote.screen_name)+" ")]),r("span",{staticClass:"quote_tweet_time"},[t._v(" "+t._s(e.quote.time)+" ")])])]),r("div",{staticClass:"quote_message_area",domProps:{innerHTML:t._s(e.quote.text)}})]):t._e()]),r("div",{staticClass:"icon_area"},[r("div",[r("img",{attrs:{src:a("9c54"),alt:""}}),r("span",[t._v(t._s(e.retweet_count))])]),r("div",[r("img",{attrs:{src:a("0057"),alt:""}}),r("span",[t._v(t._s(e.retweet_count))])]),r("div",[r("img",{attrs:{src:a("7f6f"),alt:""}}),r("span",[t._v(t._s(e.favorite_count))])])])])])}))],2),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"dogeza"},[r("img",{attrs:{src:a("15bb"),alt:"",loading:"lazy"}})])]),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.scroll,expression:"scroll"}],staticClass:"scroll_top",on:{click:t.scrollTop}},[t._v("▲")])])],1)},i=[],c=a("1da1"),l=(a("96cf"),a("99af"),a("d3b7"),a("caad"),a("2532"),a("260b")),u=(a("000b"),a("ea7b"),a("2430")),d=a("e330"),p={name:"ranking",data:function(){var t=new Date;t.setDate(t.getDate()-1);var e=t.getMonth()+1,a=t.getDate();return{provider:"",tweets:"",msg:"".concat(e,"月").concat(a,"日のツイート"),ja:u["ja"],DatePickerFormat:"yyyy/MM/dd",disabledDates:{to:"",from:""},selectedDate:"",isLoading:!1,error:!1,scroll:!1}},components:{ContentLoader:d["a"]},created:function(){var t=this,e={apiKey:"AIzaSyCwTvt8OiqbxygXf7h0mTGw3SMC0oq1aqc",authDomain:"twitter-ff-ranking.firebaseapp.com",projectId:"twitter-ff-ranking",storageBucket:"twitter-ff-ranking.appspot.com",messagingSenderId:"92341152210",appId:"1:92341152210:web:45548cf3a97dbbdcd9c00b",measurementId:"G-G96JRJFNTS"};l["a"].initializeApp(e),l["a"].auth().onAuthStateChanged((function(e){if(e){var a=new Date,r=new Date;a.setDate(a.getDate()-8),r.setDate(r.getDate()-1),t.disabledDates.to=a,t.disabledDates.from=r,t.selectedDate=r,t.provider=e.providerData[0],t.updateRanking(!1),t.scrollEvent()}else{var n=new l["a"].auth.TwitterAuthProvider;l["a"].auth().signInWithRedirect(n)}}))},methods:{dateSelected:function(){this.isLoading=!0,this.updateRanking(!0)},updateRanking:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,n,s,o,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.error=!1,r=t?e.selectedDate:new Date,r){a.next=5;break}return e.isLoading=!1,a.abrupt("return");case 5:if(t||r.setDate(r.getDate()-1),n=r.getFullYear(),s=r.getMonth()+1,o=r.getDate(),!(null!==localStorage.getItem("tweets(".concat(n,"/").concat(s,"/").concat(o,")"))&&JSON.parse(localStorage.getItem("tweets(".concat(n,"/").concat(s,"/").concat(o,")"))).length>1)){a.next=15;break}e.tweets=JSON.parse(localStorage.getItem("tweets(".concat(n,"/").concat(s,"/").concat(o,")"))),setTimeout((function(){e.isLoading=!1}),200),setTimeout((function(){e.$emit("load",!1)}),400),a.next=24;break;case 15:return a.next=17,fetch("https://rly7n1jpug.execute-api.ap-northeast-1.amazonaws.com/default/FRB",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.provider.uid,date:r})});case 17:return i=a.sent,a.next=20,i.json();case 20:c=a.sent,e.isLoading=!1,setTimeout((function(){e.$emit("load",!1)}),400),c.error?(c.error.includes("invalid json")||c.error.includes("Rate limit")?e.$emit("error","APIが限界を迎えました！ごめんなさい！m(_ _)m<br>10分か15分後には復活しているはずです！！！"):e.$emit("error","何らかの理由で通信に失敗しました。。<br>ごめんなさいー！m(_ _)m"),e.selectedDate="",e.error=!0):(e.tweets=c,localStorage.setItem("tweets(".concat(n,"/").concat(s,"/").concat(o,")"),JSON.stringify(e.tweets)));case 24:case"end":return a.stop()}}),a)})))()},scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})},scrollEvent:function(){var t=10,e=this;window.addEventListener("scroll",(function(){var a=window.pageYOffset||document.documentElement.scrollTop;e.scroll=a>t}))}}},f=p,g=(a("3f75"),a("5759"),a("2877")),m=Object(g["a"])(f,o,i,!1,null,"c366c296",null),v=m.exports,h={name:"App",components:{ranking:v},data:function(){return{loading:!0,error:!1,errorText:""}},methods:{loadEvent:function(t){this.loading=t},errorEvent:function(t){this.errorText=t,this.error=!0}}},_=h,w=(a("5c0b"),a("8f26"),a("6544")),b=a.n(w),y=a("8336"),x=Object(g["a"])(_,n,s,!1,null,"e2858422",null),C=x.exports;b()(x,{VBtn:y["a"]});var k=a("f309");r["a"].use(k["a"]);var D=new k["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:D,render:function(t){return t(C)}}).$mount("#app")},5759:function(t,e,a){"use strict";a("11b0")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"7d94":function(t,e,a){},"7f6f":function(t,e,a){t.exports=a.p+"img/iine.a692ccb8.svg"},"8f26":function(t,e,a){"use strict";a("7d94")},"9c0c":function(t,e,a){},"9c54":function(t,e,a){t.exports=a.p+"img/comment.b3f5ae37.svg"}});
//# sourceMappingURL=app.d725c684.js.map