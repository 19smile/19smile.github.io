"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[478],{478:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"fs-20"},[t._v("Overview")])]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v("2024-Jun")]),e("img",{attrs:{width:"24px",src:a(597)},on:{click:function(e){t.showMonth=!0}}})])])],1)],1),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items"},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}},[t._v(" Leave By Dept. ")])],1),e("div",{staticClass:"recruit-bar",attrs:{id:"recruit"}})],1)])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"percentage-box pb-8"},[t._m(1),e("div",{staticClass:"percentage-box-content align-center text-white fs-14 fw-600 percentage-mini percentage-box-content-mini"},[e("div",{staticClass:"percentage-box-items bg-gray",style:{width:"24%"}}),e("div",{staticClass:"percentage-box-items text-center bg-yellow",style:{width:"26%"}},[t._v("26%")]),e("div",{staticClass:"percentage-box-items text-center bg-blue4",style:{width:"40%"}},[t._v("40%")]),e("div",{staticClass:"percentage-box-items bg-gray",style:{width:"10%"}})]),e("van-row",{staticClass:"fs-14 lh-32",attrs:{gutter:"16"}},[e("van-col",{staticClass:"text-yellow text-right",attrs:{span:"12"}},[t._v("Management")]),e("van-col",{staticClass:"text-blue",attrs:{span:"12"}},[t._v("Non-Management")])],1)],1)])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("div",{staticClass:"recruit parental"},[e("div",{staticClass:"recruit-items"},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}},[t._v(" Maternity Leave ")])],1),e("div",{staticClass:"recruit-bar",attrs:{id:"parental"}})],1)]),e("div",{staticClass:"recruit parental mt-16"},[e("div",{staticClass:"recruit-items"},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}},[t._v(" Childcare Leave ")])],1),e("div",{staticClass:"recruit-bar",attrs:{id:"parental2"}})],1)])])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:a(7845)}}),e("span",[t._v("Annual Leave Usage")])]),e("div",{staticClass:"content-items-title-right"},[e("span",{staticClass:"fs-20"},[t._v("Avg. 20%")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Ratio")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("div",[e("img",{attrs:{width:"24px",src:a(6212)}}),e("span",[t._v("Parental Leave Usage")])])])}],n=a(7349),o=a(3011),r=a(7967),l={name:"welfare",components:{Row:n.A,Col:o.A,ActionSheet:r.A},data(){return{currentDate:new Date,showMonth:!1}},created(){this.$nextTick((()=>{this.getRecruit(),this.getParental(""),this.getParental("2")}))},watch:{},methods:{formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,console.log(t)},getRecruit(){const t=document.getElementById("recruit"),e=this.$echarts.init(t,null,{devicePixelRatio:2});let a;a={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"13%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:["BU.6","BU.5","BU.4","BU.3","BU.2","BU.1"],axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:[{value:8,itemStyle:{color:"#A3CCF8"}},{value:9,itemStyle:{color:"#5579ED"}},{value:9,itemStyle:{color:"#A3CCF8"}},{value:30,itemStyle:{color:"#5579ED"}},{value:32,itemStyle:{color:"#A3CCF8"}},{value:38,itemStyle:{color:"#5579ED"}}],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},a&&"object"===typeof a&&e.setOption(a),window.addEventListener("resize",e.resize)},getParental(t){const e=document.getElementById("parental"+t),a=this.$echarts.init(e,null,{devicePixelRatio:2});let s;s={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"13%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:["On Leave","Leaving"],axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:[{value:32,itemStyle:{color:"#A3CCF8"}},{value:38,itemStyle:{color:"#5579ED"}}],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},s&&"object"===typeof s&&a.setOption(s),window.addEventListener("resize",a.resize)}}},c=l,v=a(845),d=(0,v.A)(c,s,i,!1,null,"34399e94",null),u=d.exports},597:function(t,e,a){t.exports=a.p+"img/select.566d2950.svg"},7845:function(t,e,a){t.exports=a.p+"img/icon_4.66c1ca19.svg"},6212:function(t,e,a){t.exports=a.p+"img/icon_5.cfa11238.svg"}}]);