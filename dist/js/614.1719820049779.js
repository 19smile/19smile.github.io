"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[614],{6614:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sec-menu"},[e("van-sticky",{attrs:{"offset-top":0}},[e("div",{staticClass:"top-tabs"},t._l(t.list,(function(a){return e("div",{staticClass:"top-tabs-item",class:[t.active===a.id?"am-active":""],on:{click:function(e){return t.changeTabs(a)}}},[t._v(" "+t._s(a.name)+" ")])})),0)]),e("router-view")],1)},s=[],i=(a(4114),a(162)),c=a(3882),r={name:"headcountIndex",components:{Tab:i.A,Tabs:c.A},data(){return{active:0,list:[{id:0,name:"Core KPI",path:"attendanceCoreKPI"},{id:1,name:"Leave Usage",path:"attendanceLeaveUsage"}]}},created(){this.active=this.$route.meta?.index||0},watch:{},methods:{changeTabs(t){this.active=t.id,this.$router.push({name:t.path})}}},u=r,o=a(845),l=(0,o.A)(u,n,s,!1,null,"3ecf1b8e",null),d=l.exports}}]);