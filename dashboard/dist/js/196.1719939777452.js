"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[196,410],{410:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("router-view")},i=[],s={name:"centerMain"},o=s,r=n(845),c=(0,r.A)(o,a,i,!1,null,null,null),u=c.exports},6196:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-main"},[e("topHeader"),e("div",{staticClass:"app-main-content"},[e("centerMain"),t._t("default")],2),e("tabBar")],1)},i=[],s=function(){var t=this,e=t._self._c;return e("van-tabbar",{attrs:{route:""},model:{value:t.defaultActive,callback:function(e){t.defaultActive=e},expression:"defaultActive"}},[e("van-tabbar-item",{attrs:{to:"/headcount/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(1748):n(5543)}})}}])},[e("span",[t._v("Headcount")])]),e("van-tabbar-item",{attrs:{to:"/deL/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(7944):n(2667)}})}}])},[e("span",[t._v("DE&I")])]),e("van-tabbar-item",{attrs:{to:"/recruitment/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(5825):n(9094)}})}}])},[e("span",[t._v("Recruitment")])]),e("van-tabbar-item",{attrs:{to:"/training/index",icon:"setting-o"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(3201):n(7654)}})}}])},[e("span",[t._v("Training")])]),e("van-tabbar-item",{attrs:{to:"/attendance/index",icon:"setting-o"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(6638):n(6813)}})}}])},[e("span",[t._v("Attendance")])])],1)},o=[],r={name:"tabBar",data(){return{defaultActive:""}},created(){},methods:{},computed:{}},c=r,u=n(845),d=(0,u.A)(c,s,o,!1,null,"ad0f5d78",null),l=d.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("van-row",[e("van-col",{staticClass:"date",class:[t.hideAnimation?"":t.showAnimation?"am-active":"am-hide"],attrs:{span:"12"}},[e("div",{staticClass:"fs-16 week"},[t._v(t._s(t.getDayOfWeek()))])]),e("van-col",{staticClass:"text-right",attrs:{span:"12"}},[e("img",{staticClass:"logo",attrs:{width:"80px",src:n(7897)}})]),e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"title",class:[t.hideAnimation?"":t.showAnimation?"am-active":"am-hide"]},[t._v(t._s(t.$route.meta.key))])])],1)],1)},p=[],f=n(7349),v=n(3011),g=n(1910),h={name:"topHeader",components:{Row:f.A,Col:v.A},data(){return{showAnimation:!0,hideAnimation:!1}},computed:{...(0,g.aH)({key:t=>t.key})},mounted(){this.$watch((()=>this.$route),((t,e)=>{console.log(t.meta?.key===this.key),t.meta?.key===this.key?this.hideAnimation=!0:(this.showAnimation=!1,this.$nextTick((()=>{this.showAnimation=!0}))),this.saveKey(t.meta?.key)}),{immediate:!0})},methods:{getDayOfWeek(){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=new Date,n=e.getDay();return t[n]},...(0,g.PY)(["saveKey"])},watch:{showAnimation(t){}}},_=h,y=(0,u.A)(_,m,p,!1,null,"1c08701e",null),b=y.exports,x=n(410),k={name:"layout",components:{topHeader:b,centerMain:x["default"],tabBar:l},data(){return{}},created(){},watch:{},methods:{}},A=k,w=(0,u.A)(A,a,i,!1,null,"cb5ba2dc",null),C=w.exports},6813:function(t,e,n){t.exports=n.p+"img/attendance.cdad546e.svg"},6638:function(t,e,n){t.exports=n.p+"img/attendance_cur.92f4819e.svg"},2667:function(t,e,n){t.exports=n.p+"img/deL.767e7300.svg"},7944:function(t,e,n){t.exports=n.p+"img/deL_cur.735c8a66.svg"},5543:function(t,e,n){t.exports=n.p+"img/headcount.ff2dac4b.svg"},1748:function(t,e,n){t.exports=n.p+"img/headcount_cur.27fcbf24.svg"},9094:function(t,e,n){t.exports=n.p+"img/recruitment.99984cb9.svg"},5825:function(t,e,n){t.exports=n.p+"img/recruitment_cur.844d2722.svg"},7654:function(t,e,n){t.exports=n.p+"img/training.e4b5c1aa.svg"},3201:function(t,e,n){t.exports=n.p+"img/training_cur.11f19f30.svg"},7897:function(t,e,n){t.exports=n.p+"img/logo.17205e81.svg"}}]);