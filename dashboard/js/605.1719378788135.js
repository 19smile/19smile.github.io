"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[605],{5986:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=function(){var e=this,t=e._self._c;return t("div",{},[t("van-tabs",{staticClass:"sec-menu",attrs:{sticky:"","line-width":"96px","line-height":"6px",color:"#FFC991","title-active-color":"#FFFFFF","title-inactive-color":"rgba(255,255,255,0.7)","lazy-render":!1},on:{change:e.changeTabs},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[t("van-tab",{attrs:{title:"Core KPI"}},[0===e.active?t("router-view"):e._e()],1),t("van-tab",{attrs:{title:"Leave Usage"}},[1===e.active?t("router-view"):e._e()],1)],1)],1)},c=[],i=(a(4114),a(162)),r=a(3882),s={name:"headcountIndex",components:{Tab:i.A,Tabs:r.A},data(){return{active:0}},created(){this.active=this.$route.meta?.index||0},watch:{},methods:{changeTabs(e){const t=1===e?"attendanceLeaveUsage":"attendanceCoreKPI";this.$router.push({name:t})}}},o=s,l=a(845),u=(0,l.A)(o,n,c,!1,null,"52f3c6b2",null),v=u.exports}}]);