"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[146],{8146:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"overview",staticClass:"content del"},[e("van-sticky",{attrs:{"offset-top":48,container:t.overview}},[e("van-row",{staticClass:"select-box select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"fs-20",on:{click:function(e){t.show=!0}}},[t._v("Overview")]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.show=!0}}})]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v("2024-Jun")]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.showMonth=!0}}})])])],1)],1),e("van-action-sheet",{attrs:{title:"Select",round:!1,actions:t.actions},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("van-row",{staticClass:"gender-total",attrs:{gutter:"14"}},[e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(9367)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Female")]),e("p",{staticClass:"number fs-24 text-pink"},[t._v("547")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(4516)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Male")]),e("p",{staticClass:"number fs-24 text-blue3"},[t._v("868")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(2589)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Unisex")]),e("p",{staticClass:"number fs-24 text-success2"},[t._v("56")])])])])],1),t._m(1)],1),e("div",{staticClass:"content-items-content mt-12"},[t._m(2),e("div",{staticClass:"percentage-box"},[t._m(3),e("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[e("div",{staticClass:"percentage-box-items bg-purple",style:{width:"26%"}},[t._v("26%")]),e("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:"74%"}},[t._v("74%")])])]),e("div",{staticClass:"percentage-box"},[t._m(4),e("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[e("div",{staticClass:"percentage-box-items bg-purple",style:{width:"26%"}},[t._v("26%")]),e("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:"74%"}},[t._v("74%")])])])])]),e("div",{staticClass:"content-items"},[t._m(5),e("div",{staticClass:"content-items-content mt-12"},[t._m(6),e("div",{staticClass:"percentage-box"},[t._m(7),e("div",{staticClass:"percentage-box-content align-center text-white fs-14 fw-600 percentage-mini"},[e("div",{staticClass:"percentage-box-items bg-red",style:{width:"30%"}},[t._v("30%")]),e("div",{staticClass:"percentage-box-items bg-warning",style:{width:"20%"}},[t._v("20%")]),e("div",{staticClass:"percentage-box-items bg-green",style:{width:"15%"}},[t._v("15%")]),e("div",{staticClass:"percentage-box-items bg-blue2",style:{width:"10%"}},[t._v("10%")]),e("div",{staticClass:"percentage-box-items bg-blue3 text-center",style:{width:"25%"}},[t._v("25%")])])]),e("div",{staticClass:"percentage-box"},[t._m(8),e("div",{staticClass:"percentage-box-content align-center text-white fs-14 fw-600 percentage-mini"},[e("div",{staticClass:"percentage-box-items bg-red",style:{width:"10%"}},[t._v("10%")]),e("div",{staticClass:"percentage-box-items bg-warning",style:{width:"20%"}},[t._v("20%")]),e("div",{staticClass:"percentage-box-items bg-green",style:{width:"15%"}},[t._v("15%")]),e("div",{staticClass:"percentage-box-items bg-blue2",style:{width:"10%"}},[t._v("10%")]),e("div",{staticClass:"percentage-box-items bg-blue3 text-center",style:{width:"45%"}},[t._v("45%")])])])])]),t._m(9),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(10),e("div",{staticClass:"card-list fs-14"},t._l(t.personList,(function(s,i){return e("van-row",{key:s.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[e("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[e("div",{staticClass:"card-list-left-content"},[e("div",{staticClass:"card-list-left-logo",style:{backgroundColor:t.colors[i]}},[t._v(" "+t._s(t.getName(s.name))+" ")]),e("div",{staticClass:"card-list-left-text"},[e("p",[t._v(t._s(s.name))]),e("p",{staticClass:"fs-12"},[t._v(t._s(s.dept))])])])]),e("van-col",{staticClass:"card-list-right text-right",attrs:{span:"6"}},[t._v(" "+t._s(s.remark)+" ")])],1)})),1)])])],1)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(2024)}}),e("span",[t._v("Gender")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-content",attrs:{id:"genderPie"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("span",[t._v("Gender Distribution by Grade")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Grade (B&C)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Other Grade (D/E/F)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(7563)}}),e("span",[t._v("Age Level")])]),e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-center justify-center align-center"},[e("div",[e("p",[t._v("Avg.")]),e("p",[t._v("33")])])]),e("div",{staticClass:"pie-content",attrs:{id:"ageLevel"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("span",[t._v("Age Distribution by Grade")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Grade (B&C)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Other Grade (D/E/F)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(5513)}}),e("span",[t._v("Training Hours Of Per Capita by BU")])]),e("div",{staticClass:"employee resignation"},[e("div",{staticClass:"employee-items resignation-items"},[e("div",{staticClass:"employee-bar",attrs:{id:"resignationList"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:s(5098)}}),e("span",[t._v("Long-term Service")])]),e("div",{staticClass:"content-items-title-right"},[t._v("8")])])}],n=s(7349),r=s(3011),c=s(5520),o=s(2407),l={name:"coreKPI",components:{Row:n.A,Col:r.A,Sticky:c.A},data(){return{personList:[{id:1,name:"Nellie Simpson",dept:"BU-Dept.",remark:"20 Years"},{id:2,name:"test",dept:"BU-Dept.",remark:"20 Years"},{id:3,name:"测试",dept:"BU-Dept.",remark:"20 Years"},{id:4,name:"Nellie Simpson",dept:"BU-Dept.",remark:"20 Years"},{id:5,name:"Nellie Simpson",dept:"BU-Dept.",remark:"10 Years"},{id:6,name:"Nellie Simpson",dept:"BU-Dept.",remark:"5 Years"}],colors:(0,o.zB)(),actions:[{name:"Overview"},{name:"TKH"},{name:"TKH"},{name:"TKH"},{name:"TKH"},{name:"TKH"},{name:"TKH"},{name:"TKH"}],currentDate:new Date,showMonth:!1,show:!1,overview:null,bybu:null,resignationList:[{id:1,date:"2024/01",total:280},{id:2,date:"2024/02",total:280},{id:3,date:"2024/03",total:280},{id:4,date:"2024/04",total:280},{id:5,date:"2024/05",total:280},{id:6,date:"2024/06",total:280}]}},created(){this.$nextTick((()=>{this.getPenderPie(""),this.getAgeLevel(""),this.overview=this.$refs.overview,this.bybu=this.$refs.bybu,this.getResignation()}))},watch:{},methods:{getName(t){return t.split(" ").map((t=>t[0])).join("")},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,console.log(t)},onSelect(t){console.log(t)},getPenderPie(t){const e=document.getElementById("genderPie"+t),s=this.$echarts.init(e,null,{devicePixelRatio:2});let i;i={color:["#DAA6C0","#72C8B3","#799AE9"],legend:{position:"center",bottom:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:18,textStyle:{fontSize:12,color:"#9D8F9B"}},series:[{name:"",type:"pie",center:["51%","44%"],radius:"60%",data:[{value:(547/1471*100).toFixed(2),name:"F"},{value:(56/1471*100).toFixed(2),name:"U"},{value:(868/1471*100).toFixed(2),name:"M"}],label:{formatter:"{b}: {c}%",lineHeight:10,fontSize:10.5,color:"#9D8F9B",distance:20},labelLine:{normal:{show:!0,length:7,length2:3}}}]},i&&"object"===typeof i&&s.setOption(i),window.addEventListener("resize",s.resize)},getAgeLevel(t){const e=document.getElementById("ageLevel"+t),s=this.$echarts.init(e,null,{devicePixelRatio:2});let i;i={color:["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65"],series:[{type:"pie",center:["51%","50%"],radius:[52,82],itemStyle:{borderColor:"#fff",borderWidth:1},label:{formatter:"{name|{b}}\n{time|{c}%}",lineHeight:14,rich:{name:{fontSize:12,color:"#999"},time:{fontSize:16,fontWeight:600,lineHeight:25,color:"#6B6B6B"}}},labelLine:{normal:{lineStyle:{color:"#E6E6E6"},show:!0,length:8,length2:18}},data:[{name:"30~40",value:30},{name:"40~50",value:20},{name:"20~30",value:15},{name:"50~55",value:10},{name:"55+",value:20}]}]},i&&"object"===typeof i&&s.setOption(i),window.addEventListener("resize",s.resize)},getResignation(){const t=document.getElementById("resignationList"),e=this.$echarts.init(t,null,{devicePixelRatio:2});let s;s={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:["#5579ED"],legend:{},grid:{top:"8.5%",left:"3.5%",right:"4%",bottom:"2%",containLabel:!0},yAxis:{type:"value",splitNumber:4,axisLabel:{fontSize:"10",margin:10,color:"#505E72",formatter:function(t){return t.toFixed(1)}}},xAxis:{type:"category",data:["SLT","TKH","HKRITKH","SPLC","TLX","SGS","CEO"],axisTick:{},axisLabel:{color:"#505E72",fontSize:"10",rotate:40},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:[7.8,6,4,2,2,2,1],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},markLine:{lineStyle:{type:"dashed",color:"#343C50"},label:{position:"start",color:"#FFFFFF",fontSize:10,padding:3,distance:[0,0],backgroundColor:"#343C50"},data:[{type:"average",name:""}],symbol:["diamond","none"],symbolSize:[16,16]}}]},s&&"object"===typeof s&&e.setOption(s),window.addEventListener("resize",e.resize)}}},d=l,v=s(845),m=(0,v.A)(d,i,a,!1,null,"1b5d5426",null),p=m.exports},2407:function(t,e,s){s.d(e,{zB:function(){return i}});s(4114);const i=()=>{let t=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t}},597:function(t,e,s){t.exports=s.p+"img/select.566d2950.svg"},9367:function(t,e,s){t.exports=s.p+"img/female.7c80b5b2.svg"},2024:function(t,e,s){t.exports=s.p+"img/icon_1.7283ab4a.svg"},7563:function(t,e,s){t.exports=s.p+"img/icon_2.ee20bdf1.svg"},5098:function(t,e,s){t.exports=s.p+"img/icon_3.e7e0881f.svg"},4516:function(t,e,s){t.exports=s.p+"img/male.9dbc4324.svg"},2589:function(t,e,s){t.exports=s.p+"img/unisex.c0d83054.svg"},5513:function(t,e,s){t.exports=s.p+"img/icon_5.ccb06ef0.svg"}}]);