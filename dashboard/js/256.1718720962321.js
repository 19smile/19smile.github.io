"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[256],{6256:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var n=function(){var t=this,e=t._self._c;return e("div",{},[e("van-tabs",{staticClass:"sec-menu",attrs:{sticky:"","line-width":"96px","line-height":"6px",color:"#FFC991","title-active-color":"#FFFFFF","title-inactive-color":"rgba(255,255,255,0.7)",swipeable:""},on:{change:t.changeTabs},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{title:"Core KPI"}},[e("router-view")],1),e("van-tab",{attrs:{title:"Efficiency"}},[e("router-view")],1)],1)],1)},c=[],i=(a(4114),a(9434)),r=a(1807),s={name:"headcountIndex",components:{Tab:i.A,Tabs:r.A},data(){return{active:0}},created(){},watch:{},methods:{changeTabs(t){const e=1===t?"recruitmentEfficiency":"recruitmentCoreKPI";this.$router.push({name:e})}}},o=s,l=a(845),u=(0,l.A)(o,n,c,!1,null,"27b50927",null),h=u.exports}}]);