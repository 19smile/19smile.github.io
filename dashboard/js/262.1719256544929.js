"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[262],{7262:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=function(){var t=this,e=t._self._c;return e("div",{},[e("van-tabs",{staticClass:"sec-menu",attrs:{sticky:"","line-width":"96px","line-height":"6px",color:"#FFC991","title-active-color":"#FFFFFF","title-inactive-color":"rgba(255,255,255,0.7)"},on:{change:t.changeTabs},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{title:"Core KPI"}},[0===t.active?e("router-view"):t._e()],1),e("van-tab",{attrs:{title:"Efficiency"}},[1===t.active?e("router-view"):t._e()],1)],1)],1)},i=[],c=(a(4114),a(9434)),r=a(1807),s={name:"headcountIndex",components:{Tab:c.A,Tabs:r.A},data(){return{active:0}},created(){this.active=this.$route.meta?.index||0},watch:{},methods:{changeTabs(t){const e=1===t?"recruitmentEfficiency":"recruitmentCoreKPI";this.$router.push({name:e})}}},o=s,l=a(845),u=(0,l.A)(o,n,i,!1,null,"370a6970",null),v=u.exports}}]);