"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[336],{1336:function(t,a,e){e.r(a),e.d(a,{default:function(){return d}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"sec-menu"},[a("van-sticky",{attrs:{"offset-top":0}},[a("div",{staticClass:"top-tabs"},t._l(t.list,(function(e){return a("div",{staticClass:"top-tabs-item",class:[t.active===e.id?"am-active":""],on:{click:function(a){return t.changeTabs(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0)]),a("router-view")],1)},n=[],i=(e(4114),e(162)),c=e(3882),r={name:"headcountIndex",components:{Tab:i.A,Tabs:c.A},data(){return{active:0,list:[{id:0,name:"Core KPI",path:"recruitmentCoreKPI"}]}},created(){this.active=this.$route.meta?.index||0},watch:{},methods:{changeTabs(t){this.active=t.id,this.$router.push({name:t.path})}}},u=r,o=e(845),h=(0,o.A)(u,s,n,!1,null,"751d190a",null),d=h.exports}}]);