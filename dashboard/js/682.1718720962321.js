"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[682],{4682:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=function(){var t=this,e=t._self._c;return e("div",{},[e("van-tabs",{staticClass:"sec-menu",attrs:{sticky:"","line-width":"96px","line-height":"6px",color:"#FFC991","title-active-color":"#FFFFFF","title-inactive-color":"rgba(255,255,255,0.7)",swipeable:""},on:{change:t.changeTabs},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{title:"Core KPI"}},[e("router-view")],1),e("van-tab",{attrs:{title:"Detail by BU"}},[e("router-view")],1),e("van-tab",{attrs:{title:"Turnover"}},[e("router-view")],1)],1)],1)},r=[],c=(a(4114),a(9434)),i=a(1807),o={name:"headcountIndex",components:{Tab:c.A,Tabs:i.A},data(){return{active:0}},created(){},watch:{},methods:{changeTabs(t){const e=2===t?"headcountTurnover":1===t?"headcountdetailByBu":"headcountCoreKPI";this.$router.push({name:e})}}},s=o,l=a(845),u=(0,l.A)(s,n,r,!1,null,"1cb8e954",null),v=u.exports}}]);