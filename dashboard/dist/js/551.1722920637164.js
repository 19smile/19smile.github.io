"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[551,410],{410:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("router-view")},r=[],s={name:"centerMain"},i=s,c=n(845),o=(0,c.A)(i,a,r,!1,null,null,null),u=o.exports},5551:function(t,e,n){n.r(e),n.d(e,{default:function(){return S}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-main"},[e("topHeader"),e("div",{staticClass:"app-main-content"},[e("centerMain"),t._t("default")],2),e("tabBar")],1)},r=[],s=function(){var t=this,e=t._self._c;return e("van-tabbar",{attrs:{route:""},model:{value:t.defaultActive,callback:function(e){t.defaultActive=e},expression:"defaultActive"}},[e("van-tabbar-item",{attrs:{to:"/headcount/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(1748):n(5543)}})}}])},[e("span",[t._v("Headcount")])]),e("van-tabbar-item",{attrs:{to:"/deL/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(7944):n(2667)}})}}])},[e("span",[t._v("D&I")])]),e("van-tabbar-item",{attrs:{to:"/recruitment/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(5825):n(9094)}})}}])},[e("span",[t._v("Recruitment")])]),e("van-tabbar-item",{attrs:{to:"/training/index",icon:"setting-o"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(3201):n(7654)}})}}])},[e("span",[t._v("Training")])]),e("van-tabbar-item",{attrs:{to:"/attendance/index",icon:"setting-o"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(6638):n(6813)}})}}])},[e("span",[t._v("Attendance")])])],1)},i=[],c={name:"tabBar",data(){return{defaultActive:""}},created(){},methods:{},computed:{}},o=c,u=n(845),d=(0,u.A)(o,s,i,!1,null,"5ac11189",null),l=d.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("van-row",[e("van-col",{staticClass:"date",class:[t.hideAnimation?"":t.showAnimation?"am-active":"am-hide"],attrs:{span:"12"}},[e("div",{staticClass:"fs-16 week"},[t._v(t._s(t.nowDate))]),e("div",{staticClass:"fs-16 week"},[t._v(t._s(t.getDayOfWeek()))])]),e("van-col",{staticClass:"text-right",attrs:{span:"12"}},[e("img",{staticClass:"logo",attrs:{width:"80px",src:n(7897)}})]),e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"title",class:[t.hideAnimation?"":t.showAnimation?"am-active":"am-hide"]},[t._v(t._s(t.$route.meta.key))])])],1)],1)},f=[],p=n(7349),g=n(3011),v=n(1910),h=n(2407),$={name:"topHeader",components:{Row:p.A,Col:g.A},data(){return{showAnimation:!0,hideAnimation:!1,nowDate:(0,h.n7)(new Date,"normalDay4")}},computed:{...(0,v.aH)({key:t=>t.key})},mounted(){this.$watch((()=>this.$route),((t,e)=>{t.meta?.key===this.key?this.hideAnimation=!0:(this.showAnimation=!1,this.$nextTick((()=>{this.showAnimation=!0}))),this.saveKey(t.meta?.key)}),{immediate:!0})},methods:{getDayOfWeek(){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=new Date,n=e.getDay();return t[n]},...(0,v.PY)(["saveKey"])},watch:{showAnimation(t){}}},y=$,b=(0,u.A)(y,m,f,!1,null,"34930261",null),A=b.exports,_=n(410),D={name:"layout",components:{topHeader:A,centerMain:_["default"],tabBar:l},data(){return{}},created(){},watch:{},methods:{}},w=D,x=(0,u.A)(w,a,r,!1,null,"cb5ba2dc",null),S=x.exports},2407:function(t,e,n){n.d(e,{a5:function(){return c},n7:function(){return r},of:function(){return a},y7:function(){return s},zB:function(){return i}});n(4114);function a(t,e){const n=JSON.parse(JSON.stringify(t)),r=Object.keys(t);return r.forEach((r=>{-1!==[null,void 0,""].indexOf(n[r])?delete n[r]:e&&"object"===typeof t[r]&&!Array.isArray(t[r])&&(n[r]=a(n[r]))})),n}function r(t,e){if(!t)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],r=new Date(t),s=r.getFullYear(),i=String(r.getMonth()+1).padStart(2,0),c=n[r.getMonth()],o=a[r.getMonth()],u=String(r.getDate()).padStart(2,0),d=String(r.getHours()).padStart(2,0),l=String(r.getMinutes()).padStart(2,0),m=String(r.getSeconds()).padStart(2,0);switch(e){case"slash":return`${s}/${i}/${u}`;case"year":return`${s}`;case"monthN":return`${s}-${i}`;case"monthLong":return`${s}-${o}`;case"month":return`${s}-${c}`;case"monthsh":return`${s}/${i}`;case"day":return`${u}-${i}-${s}`;case"timestamp":return`${s}${i}${u}${d}${l}`;case"obj":return{y:s,m:i,d:u,h:d,min:l,s:m};case"normal":return`${s}-${i}-${u} ${d}:${l}:${m}`;case"normalHours":return`${s}-${i}-${u} ${d}`;case"normalMin":return`${s}-${i}-${u} ${d}:${l}`;case"normalDay":return`${s}-${c}-${u}`;case"normalDay2":return`${s}-${i}-${u}`;case"normalDay3":return`${s}-${o}-${u}`;case"normalDay4":return`${s}/${o}/${u}`;default:return`${i}-${u}-${s} ${d}:${l}`}}const s=t=>{const e=new Date(t),n=e.getFullYear(),a=e.getMonth(),r=t=>t%4===0&&t%100!==0||t%400===0,s=[31,r(n)?29:28,31,30,31,30,31,31,30,31,30,31][a];return s},i=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},c=(t,e,n)=>{const a=n?new Date(n):new Date,r=a.getFullYear(),s=a.getMonth()-(e||0),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];let o=[];for(let u=5;u>=0;u--){const e=s-u<0?r-1:r,n=(s-u+12)%12,a=t?c[n]:i[n],d=`${e}-${a}`;o.push(d)}return o}},6813:function(t,e,n){t.exports=n.p+"img/attendance.cdad546e.svg"},6638:function(t,e,n){t.exports=n.p+"img/attendance_cur.92f4819e.svg"},2667:function(t,e,n){t.exports=n.p+"img/deL.767e7300.svg"},7944:function(t,e,n){t.exports=n.p+"img/deL_cur.735c8a66.svg"},5543:function(t,e,n){t.exports=n.p+"img/headcount.ff2dac4b.svg"},1748:function(t,e,n){t.exports=n.p+"img/headcount_cur.27fcbf24.svg"},9094:function(t,e,n){t.exports=n.p+"img/recruitment.99984cb9.svg"},5825:function(t,e,n){t.exports=n.p+"img/recruitment_cur.844d2722.svg"},7654:function(t,e,n){t.exports=n.p+"img/training.e4b5c1aa.svg"},3201:function(t,e,n){t.exports=n.p+"img/training_cur.11f19f30.svg"},7897:function(t,e,n){t.exports=n.p+"img/logo.17205e81.svg"}}]);