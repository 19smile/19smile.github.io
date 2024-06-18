"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[343],{2343:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("In-post")]),e("p",{staticClass:"text-yellow number"},[t._v("2,156")])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Budget YoY")]),e("p",{staticClass:"text-blue number"},[t._v("2,324")])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Forecast YoY")]),e("p",{staticClass:"text-blue2 number"},[t._v("2,405")])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",[e("div",{staticClass:"in-post-text"},[e("div",{staticClass:"text-center fs-10"},[e("div",[e("p",{staticClass:"fs-16 text-blue"},[t._v("88.62%")]),e("p",[t._v("In-post / Budget")])]),e("div",[e("p",{staticClass:"fs-16 text-blue2"},[t._v("82.22%")]),e("p",[t._v("In-post / Forcast")])])])]),e("div",{staticStyle:{width:"184px",height:"184px"},attrs:{id:"occupation"}})])])],1)],1),e("div",{staticClass:"content-items-content mt-12"},[t._m(1),e("van-row",{staticClass:"in-post-content",class:[t.isShow?"am-active":""],attrs:{gutter:"16"}},[t._l(t.inpostList,(function(i,s){return e("van-col",{key:i.id,staticClass:"in-post-list",attrs:{span:"12"}},[e("div",{staticClass:"in-post-pie"},[e("div",{staticClass:"in-post-title"},[t._v(t._s(i.title))]),e("div",{staticClass:"in-post-text"},[e("div",{staticClass:"text-center fs-10"},[e("div",[e("p",{staticClass:"fs-13",class:["warning"===i?.type?"text-yellow2":"danger"===i?.type?"text-red":"text-blue"]},[t._v("88.62%")]),e("p",[t._v("In-post / Budget")])]),e("div",[e("p",{staticClass:"fs-13",class:["warning"===i?.type?"text-yellow":"danger"===i?.type?"text-red2":"text-blue2"]},[t._v("82.22%")]),e("p",[t._v("In-post / Forcast")])])])]),e("div",{staticClass:"in-post-pie-content",attrs:{id:"inpostList"+i.id}})])])})),e("van-col",{staticClass:"in-post-list",attrs:{span:"12"}})],2),e("div",{staticClass:"text-center"},[e("span",{staticClass:"show-more text-yellow fs-12",on:{click:t.showMore}},[t._v(t._s(t.isShow?"Folded":"Show More"))])])],1)]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("van-swipe",{staticClass:"employee",attrs:{"initial-swipe":"5","indicator-color":"#775200"}},t._l(t.employeeList,(function(i){return e("van-swipe-item",{key:i.id,staticClass:"employee-items"},[e("van-row",[e("van-col",{staticClass:"employee-items-date",attrs:{span:"12"}},[t._v(" "+t._s(i.date)+" ")]),e("van-col",{staticClass:"employee-items-total",attrs:{span:"12"}},[t._v(" "+t._s(t._f("formatNumber")(i.total))+" ")])],1),e("div",{staticClass:"employee-bar",attrs:{id:"employeeList"+i.id}})],1)})),1)],1),t._m(3)]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(4),e("div",{staticClass:"card-list fs-14"},t._l(t.personList,(function(i,s){return e("van-row",{key:i.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[e("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[e("div",{staticClass:"card-list-left-content"},[e("div",{staticClass:"card-list-left-logo",style:{backgroundColor:t.colors[s]}},[t._v(" "+t._s(t.getName(i.name))+" ")]),e("div",{staticClass:"card-list-left-text"},[e("p",[t._v(t._s(i.name))]),e("p",{staticClass:"fs-12"},[t._v(t._s(i.dept))])])])]),e("van-col",{staticClass:"card-list-right text-right",attrs:{span:"6"}},[t._v(" "+t._s(i.remark)+" ")])],1)})),1)])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(5),e("van-swipe",{staticClass:"employee resignation",attrs:{"initial-swipe":"5","indicator-color":"#775200"}},t._l(t.resignationList,(function(i){return e("van-swipe-item",{key:i.id,staticClass:"employee-items resignation-items"},[e("van-row",[e("van-col",{staticClass:"employee-items-date",attrs:{span:"12"}},[t._v(" "+t._s(i.date)+" ")]),e("van-col",{staticClass:"employee-items-total",attrs:{span:"12"}},[t._v(" "+t._s(t._f("formatNumber")(i.total))+" ")])],1),e("div",{staticClass:"employee-bar",attrs:{id:"resignationList"+i.id}})],1)})),1)],1),t._m(6)])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(3660)}}),e("span",[t._v("Overall In-post")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("span",[t._v("In-post Rate by BU")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(2687)}}),e("span",[t._v("Employee")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-content mt-12"},[e("div",{staticClass:"content-items-title"},[e("span",[t._v("Trend")])]),e("div",{staticClass:"trend-bar"},[e("div",{attrs:{id:"trendBar"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(8046)}}),e("span",[t._v("Expiry of Labor Contract")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(9601)}}),e("span",[t._v("Resignation")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-content mt-12"},[e("div",{staticClass:"content-items-title"},[e("span",[t._v("Trend")])]),e("div",{staticClass:"trend-bar"},[e("div",{attrs:{id:"resignationTrendBar"}})])])}],n=i(7349),o=i(3011),l=i(7691),r=i(9941),c=i(2407),d={name:"coreKPI",components:{Row:n.A,Col:o.A,Swipe:l.A,SwipeItem:r.A},data(){return{currentRate:0,inpostList:[{id:1,title:"TKH",type:"normal"},{id:2,title:"SLT",type:"warning"},{id:3,title:"TLC",type:"danger"},{id:4,title:"TLQ"},{id:5,title:"HTK"},{id:6,title:"TKZY"},{id:7,title:"TKH"}],employeeList:[{id:1,date:"2024/01",total:2156},{id:2,date:"2024/02",total:2156},{id:3,date:"2024/03",total:2156},{id:4,date:"2024/04",total:2156},{id:5,date:"2024/05",total:2156},{id:6,date:"2024/06",total:2156}],resignationList:[{id:1,date:"2024/01",total:280},{id:2,date:"2024/02",total:280},{id:3,date:"2024/03",total:280},{id:4,date:"2024/04",total:280},{id:5,date:"2024/05",total:280},{id:6,date:"2024/06",total:280}],colors:(0,c.zB)(),personList:[{id:1,name:"Nellie Simpson",dept:"BU-Dept.",remark:"2nd Renwe"},{id:2,name:"test",dept:"BU-Dept.",remark:"2nd Renwe"},{id:3,name:"测试",dept:"BU-Dept.",remark:"2nd Renwe"},{id:4,name:"Nellie Simpson",dept:"BU-Dept.",remark:"2nd Renwe"},{id:5,name:"Nellie Simpson",dept:"BU-Dept.",remark:"2nd Renwe"},{id:6,name:"Nellie Simpson",dept:"BU-Dept.",remark:"2nd Renwe"}],isShow:!1}},created(){this.$nextTick((()=>{this.getOccupation();for(let t=0;t<this.inpostList.length;t++)this.getInpost(this.inpostList[t]);for(let t=0;t<this.employeeList.length;t++)this.getEmployee(this.employeeList[t]);for(let t=0;t<this.resignationList.length;t++)this.getResignation(this.resignationList[t]);this.getTrendBar(),this.getResignationTrendBar()}))},watch:{},methods:{showMore(){this.isShow=!this.isShow},getName(t){return t.split(" ").map((t=>t[0])).join("")},getInpost(t){const e=document.getElementById("inpostList"+t.id),i=this.$echarts.init(e);let s,a=["#5579ED","#EEF0F6"],n=["#A3CCF8","#EEF0F6"];"warning"===t?.type?(a=["#B87B00","#EEF0F6"],n=["#FFBD73","#EEF0F6"]):"danger"===t?.type&&(a=["#FFB3D1","#EEF0F6"],n=["#F25769","#EEF0F6"]),s={color:a,series:[{name:"Access From",type:"pie",radius:["79.5%","90%"],label:{show:!1},labelLine:{show:!1},itemStyle:{borderRadius:10},data:[{value:39,name:"",itemStyle:{color:a[0]}},{value:61,name:"",itemStyle:{color:a[1]}}]},{name:"Access From",type:"pie",radius:["90.5%","100%"],label:{show:!1},labelLine:{show:!1},itemStyle:{borderRadius:10},data:[{value:20,name:"",itemStyle:{color:n[0]}},{value:80,name:"",itemStyle:{color:n[1]}}]}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize)},getOccupation(t){const e=document.getElementById("occupation"),i=this.$echarts.init(e);let s;s={color:["#5579ED","#EEF0F6"],series:[{name:"Access From",type:"pie",radius:["79.5%","90%"],label:{show:!1},labelLine:{show:!1},itemStyle:{borderRadius:10},data:[{value:39,name:"",itemStyle:{color:"#5579ED"}},{value:61,name:"",itemStyle:{color:"#EEF0F6"}}]},{name:"Access From",type:"pie",radius:["90.5%","100%"],label:{show:!1},labelLine:{show:!1},itemStyle:{borderRadius:10},data:[{value:20,name:"",itemStyle:{color:"#A3CCF8"}},{value:80,name:"",itemStyle:{color:"#EEF0F6"}}]}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize)},getEmployee(t){const e=document.getElementById("employeeList"+t.id),i=this.$echarts.init(e,null,{devicePixelRatio:2});let s;s={color:["#5579ED"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:0,left:"5.5%",right:"13%",bottom:"0%",containLabel:!0},xAxis:{type:"value",axisLabel:{fontSize:0,color:"transparent"}},yAxis:{type:"category",data:["GRO","SSM","SHKY","TLX","SLT","TKH"],axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:[86,93,95,312,345,380],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize)},getTrendBar(){const t=document.getElementById("trendBar"),e=this.$echarts.init(t,null,{devicePixelRatio:2});let i;i={color:["#FFB66F"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"15%",left:"4%",right:"6%",bottom:"12%",containLabel:!0},yAxis:{type:"value",splitNumber:.5,axisLabel:{fontSize:0,color:"transparent"}},xAxis:{type:"category",data:["2024-01","2024-02","2024-03","2024-04","2024-05","2024-06"],axisLabel:{color:"#535353",fontSize:"9.5"},axisLine:{lineStyle:{color:"#DBDFE8"}},axisTick:{alignWithLabel:!0,count:4}},series:[{name:"",type:"bar",data:[2305,2243,2232,2105,1901,2010],barWidth:"16",itemStyle:{borderRadius:[3,3,3,3]},label:{show:!0,formatter:function(t){var e=(t.value||0).toString(),i="";while(e.length>3)i=","+e.slice(-3)+i,e=e.slice(0,e.length-3);return e&&(i=e+i),i},position:"outside",color:"#535353",fontSize:"12"}}]},i&&"object"===typeof i&&e.setOption(i),window.addEventListener("resize",e.resize)},getResignation(t){const e=document.getElementById("resignationList"+t.id),i=this.$echarts.init(e,null,{devicePixelRatio:2});let s;s={color:["#5579ED"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"7%",left:"5%",right:"7%",bottom:"6%",containLabel:!0},yAxis:{type:"value",splitNumber:.5,max:"34",axisLabel:{fontSize:0,color:"transparent"}},xAxis:{type:"category",data:["SLT","TKH","HKRITKH","SPLC","TLX","SGS","CEO","SSM"],axisTick:{},axisLabel:{color:"#505E72",fontSize:"12",rotate:40},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:[34,33,19,6,6,1,1,1],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:"outside",color:"#505E72",fontSize:"10"}}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize)},getResignationTrendBar(){const t=document.getElementById("resignationTrendBar"),e=this.$echarts.init(t,null,{devicePixelRatio:2});let i;i={color:["#FFB66F"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"15%",left:"4%",right:"6%",bottom:"12%",containLabel:!0},yAxis:{type:"value",splitNumber:1,axisLabel:{fontSize:0,color:"transparent"}},xAxis:{type:"category",data:["2024-01","2024-02","2024-03","2024-04","2024-05","2024-06"],axisLabel:{color:"#666666",fontSize:"9.5"},axisLine:{lineStyle:{color:"#DBDFE8"}},axisTick:{alignWithLabel:!0,count:4}},series:[{name:"",type:"bar",data:[176,266,170,86,126,201],barWidth:"16",itemStyle:{borderRadius:[3,3,3,3]},label:{show:!0,formatter:function(t){var e=(t.value||0).toString(),i="";while(e.length>3)i=","+e.slice(-3)+i,e=e.slice(0,e.length-3);return e&&(i=e+i),i},position:"outside",color:"#535353",fontSize:"12"}}]},i&&"object"===typeof i&&e.setOption(i),window.addEventListener("resize",e.resize)}}},p=d,m=i(845),v=(0,m.A)(p,s,a,!1,null,"ff07eb40",null),u=v.exports},2407:function(t,e,i){i.d(e,{zB:function(){return s}});i(4114);const s=()=>{let t=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t}},3660:function(t,e,i){t.exports=i.p+"img/icon_1.ca2f156c.svg"},2687:function(t,e,i){t.exports=i.p+"img/icon_2.1a764baf.svg"},8046:function(t,e,i){t.exports=i.p+"img/icon_3.9e4b309f.svg"},9601:function(t,e,i){t.exports=i.p+"img/icon_4.9e01a2a9.svg"}}]);