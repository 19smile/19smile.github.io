"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[448,197],{5197:function(t,n,a){a.r(n),a.d(n,{default:function(){return u}});var e=function(){var t=this,n=t._self._c;return n("router-view")},i=[],s={name:"centerMain"},r=s,c=a(845),o=(0,c.A)(r,e,i,!1,null,null,null),u=o.exports},448:function(t,n,a){a.r(n),a.d(n,{default:function(){return C}});var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"app-main"},[n("topHeader"),n("div",{staticClass:"app-main-content"},[n("centerMain"),t._t("default")],2),n("tabBar")],1)},i=[],s=function(){var t=this,n=t._self._c;return n("van-tabbar",{attrs:{route:""},model:{value:t.defaultActive,callback:function(n){t.defaultActive=n},expression:"defaultActive"}},[n("van-tabbar-item",{attrs:{to:"/headcount/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?a(1748):a(5543)}})}}])},[n("span",[t._v("Headcount")])]),n("van-tabbar-item",{attrs:{to:"/deL/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?a(7944):a(2667)}})}}])},[n("span",[t._v("DE&I")])]),n("van-tabbar-item",{attrs:{to:"/recruitment/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?a(5825):a(9094)}})}}])},[n("span",[t._v("Recruitment")])]),n("van-tabbar-item",{attrs:{to:"/training/index",icon:"setting-o"},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?a(3201):a(7654)}})}}])},[n("span",[t._v("Training")])]),n("van-tabbar-item",{attrs:{to:"/attendance/index",icon:"setting-o"},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?a(6638):a(6813)}})}}])},[n("span",[t._v("Attendance")])])],1)},r=[],c={name:"tabBar",data(){return{defaultActive:""}},created(){},methods:{},computed:{}},o=c,u=a(845),d=(0,u.A)(o,s,r,!1,null,"ad0f5d78",null),l=d.exports,p=function(){var t=this,n=t._self._c;return n("div",{staticClass:"header"},[n("van-row",[n("van-col",{staticClass:"date",class:[t.showAnimation?"am-active":"am-hide"],attrs:{span:"12"}},[n("div",{staticClass:"fs-12 date"},[t._v("19-Jun-2024")]),n("div",{staticClass:"fs-16 week"},[t._v("Wednesday")])]),n("van-col",{staticClass:"text-right",attrs:{span:"12"}},[n("img",{staticClass:"logo",attrs:{width:"96px",src:a(7897)}})]),n("van-col",{attrs:{span:"24"}},[n("div",{staticClass:"title",class:[t.showAnimation?"am-active":"am-hide"]},[t._v(t._s(t.$route.meta.key))])])],1)],1)},v=[],m=a(8525),f=a(7819),g={name:"topHeader",components:{Row:m.A,Col:f.A},data(){return{showAnimation:!0}},methods:{},watch:{$route(t,n,a){if(console.log(t,n),t.meta?.key===n.meta?.key)return!1;this.showAnimation=!1,this.$nextTick((()=>{this.showAnimation=!0}))},showAnimation(t){}}},_=g,h=(0,u.A)(_,p,v,!1,null,"f4a72764",null),b=h.exports,x=a(5197),A={name:"layout",components:{topHeader:b,centerMain:x["default"],tabBar:l},data(){return{}},created(){},watch:{},methods:{}},k=A,w=(0,u.A)(k,e,i,!1,null,"cb5ba2dc",null),C=w.exports},6813:function(t,n,a){t.exports=a.p+"img/attendance.d5851693.svg"},6638:function(t,n,a){t.exports=a.p+"img/attendance_cur.bec48d61.svg"},2667:function(t,n,a){t.exports=a.p+"img/deL.43f6b3db.svg"},7944:function(t,n,a){t.exports=a.p+"img/deL_cur.c52a3562.svg"},5543:function(t,n,a){t.exports=a.p+"img/headcount.7ac41e71.svg"},1748:function(t,n,a){t.exports=a.p+"img/headcount_cur.c2cde55c.svg"},9094:function(t,n,a){t.exports=a.p+"img/recruitment.da8521b8.svg"},5825:function(t,n,a){t.exports=a.p+"img/recruitment_cur.2f11a992.svg"},7654:function(t,n,a){t.exports=a.p+"img/training.503606a2.svg"},3201:function(t,n,a){t.exports=a.p+"img/training_cur.5dbda622.svg"},7897:function(t,n,a){t.exports=a.p+"img/logo.17205e81.svg"}}]);