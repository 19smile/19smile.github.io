"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[623,410],{410:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("router-view")},r=[],s={name:"centerMain"},i=s,c=n(845),o=(0,c.A)(i,a,r,!1,null,null,null),u=o.exports},2623:function(t,e,n){n.r(e),n.d(e,{default:function(){return W}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-main"},[e("topHeader"),e("div",{staticClass:"app-main-content"},[e("centerMain"),t._t("default")],2),e("tabBar")],1)},r=[],s=function(){var t=this,e=t._self._c;return e("van-tabbar",{attrs:{route:""},model:{value:t.defaultActive,callback:function(e){t.defaultActive=e},expression:"defaultActive"}},[e("van-tabbar-item",{attrs:{to:"/headcount/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(1748):n(5543)}})}}])},[e("span",[t._v("Headcount")])]),e("van-tabbar-item",{attrs:{to:"/deL/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(7944):n(2667)}})}}])},[e("span",[t._v("DE&I")])]),e("van-tabbar-item",{attrs:{to:"/recruitment/index"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(5825):n(9094)}})}}])},[e("span",[t._v("Recruitment")])]),e("van-tabbar-item",{attrs:{to:"/training/index",icon:"setting-o"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(3201):n(7654)}})}}])},[e("span",[t._v("Training")])]),e("van-tabbar-item",{attrs:{to:"/attendance/index",icon:"setting-o"},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?n(6638):n(6813)}})}}])},[e("span",[t._v("Attendance")])])],1)},i=[],c={name:"tabBar",data(){return{defaultActive:""}},created(){},methods:{},computed:{}},o=c,u=n(845),A=(0,u.A)(o,s,i,!1,null,"87fd7e88",null),l=A.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("van-row",[e("van-col",{attrs:{span:"12"}},[e("div",{staticClass:"fs-12 date"},[t._v("27-May-2024")]),e("div",{staticClass:"fs-16 week"},[t._v("Monday")])]),e("van-col",{staticClass:"text-right",attrs:{span:"12"}},[e("img",{attrs:{width:"96px",src:n(8565)}})]),e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"title"},[t._v(t._s(t.$route.meta.key))])])],1)],1)},p=[],f=n(7349),d=n(3011),g={name:"topHeader",components:{Row:f.A,Col:d.A},data(){return{}},methods:{}},y=g,m=(0,u.A)(y,v,p,!1,null,"7911c38e",null),k=m.exports,b=n(410),J={name:"layout",components:{topHeader:k,centerMain:b["default"],tabBar:l},data(){return{}},created(){},watch:{},methods:{}},X=J,B=(0,u.A)(X,a,r,!1,null,"cb5ba2dc",null),W=B.exports},6813:function(t,e,n){t.exports=n.p+"img/attendance.cdad546e.svg"},6638:function(t,e,n){t.exports=n.p+"img/attendance_cur.92f4819e.svg"},2667:function(t,e,n){t.exports=n.p+"img/deL.767e7300.svg"},7944:function(t,e,n){t.exports=n.p+"img/deL_cur.735c8a66.svg"},5543:function(t,e,n){t.exports=n.p+"img/headcount.ff2dac4b.svg"},1748:function(t,e,n){t.exports=n.p+"img/headcount_cur.27fcbf24.svg"},9094:function(t,e,n){t.exports=n.p+"img/recruitment.99984cb9.svg"},5825:function(t,e,n){t.exports=n.p+"img/recruitment_cur.844d2722.svg"},7654:function(t,e,n){t.exports=n.p+"img/training.e4b5c1aa.svg"},3201:function(t,e,n){t.exports=n.p+"img/training_cur.11f19f30.svg"},8565:function(t){t.exports="data:image/png;base64,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"}}]);