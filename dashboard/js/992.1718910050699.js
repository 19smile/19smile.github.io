"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[992],{5992:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"overview",staticClass:"content del"},[e("van-sticky",{attrs:{"offset-top":48,container:t.overview}},[e("van-row",{staticClass:"select-box select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"fs-20"},[t._v("Overview")])]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v("2024-Jun")]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.showMonth=!0}}}),e("van-action-sheet",{model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)])],1)],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("van-row",{staticClass:"gender-total",attrs:{gutter:"14"}},[e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(9367)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Female")]),e("p",{staticClass:"number fs-24 text-pink"},[t._v("547")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(4516)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Male")]),e("p",{staticClass:"number fs-24 text-blue3"},[t._v("868")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(2589)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Unisex")]),e("p",{staticClass:"number fs-24 text-success2"},[t._v("56")])])])])],1),t._m(1)],1)]),t._m(2),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("div",{staticClass:"card-list fs-14"},t._l(t.personList,(function(s,i){return e("van-row",{key:s.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[e("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[e("div",{staticClass:"card-list-left-content"},[e("div",{staticClass:"card-list-left-logo",style:{backgroundColor:t.colors[i]}},[t._v(" "+t._s(t.getName(s.name))+" ")]),e("div",{staticClass:"card-list-left-text"},[e("p",[t._v(t._s(s.name))]),e("p",{staticClass:"fs-12"},[t._v(t._s(s.dept))])])])]),e("van-col",{staticClass:"card-list-right text-right",attrs:{span:"6"}},[t._v(" "+t._s(s.remark)+" ")])],1)})),1)])])],1),e("div",{ref:"bybu",staticClass:"content del pt-0"},[e("van-sticky",{attrs:{"offset-top":48,container:t.bybu}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v("TKH ")]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.show=!0}}}),e("van-action-sheet",{attrs:{title:"Select BU",actions:t.actions,"close-on-click-action":"","cancel-text":"取消"},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)],1)],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(4),e("van-sticky",[e("div",{staticClass:"sel-month align-center"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v("2024-Jun")]),e("img",{staticClass:"mr-0",attrs:{width:"24px",src:s(597)},on:{click:function(e){t.showMonth=!0}}}),e("van-action-sheet",{model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)])],1),e("van-row",{staticClass:"gender-total",attrs:{gutter:"14"}},[e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(9367)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Female")]),e("p",{staticClass:"number fs-24 text-pink"},[t._v("547")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(4516)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Male")]),e("p",{staticClass:"number fs-24 text-blue3"},[t._v("868")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(2589)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Unisex")]),e("p",{staticClass:"number fs-24 text-success2"},[t._v("56")])])])])],1),t._m(5)],1)]),t._m(6),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(7),e("div",{staticClass:"card-list fs-14"},t._l(t.personList,(function(s,i){return e("van-row",{key:s.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[e("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[e("div",{staticClass:"card-list-left-content"},[e("div",{staticClass:"card-list-left-logo",style:{backgroundColor:t.colors[i]}},[t._v(" "+t._s(t.getName(s.name))+" ")]),e("div",{staticClass:"card-list-left-text"},[e("p",[t._v(t._s(s.name))]),e("p",{staticClass:"fs-12"},[t._v(t._s(s.dept))])])])]),e("van-col",{staticClass:"card-list-right text-right",attrs:{span:"6"}},[t._v(" "+t._s(s.remark)+" ")])],1)})),1)])])],1)])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(2024)}}),e("span",[t._v("Gender")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-content",attrs:{id:"genderPie"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(7563)}}),e("span",[t._v("Age Level")])]),e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-center justify-center align-center"},[e("div",[e("p",[t._v("Avg.")]),e("p",[t._v("33")])])]),e("div",{staticClass:"pie-content",attrs:{id:"ageLevel"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:s(5098)}}),e("span",[t._v("Long-term Service")])]),e("div",{staticClass:"content-items-title-right"},[t._v("8")])])},function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:s(2024)}}),e("span",[t._v("Gender by BU")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-content",attrs:{id:"genderPie2"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(7563)}}),e("span",[t._v("Age Level by BU")])]),e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-center justify-center align-center"},[e("div",[e("p",[t._v("Avg.")]),e("p",[t._v("33")])])]),e("div",{staticClass:"pie-content",attrs:{id:"ageLevel2"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:s(5098)}}),e("span",[t._v("Expiry of Labor Contract")])]),e("div",{staticClass:"content-items-title-right"},[t._v("8")])])}],a=s(7349),c=s(3011),r=s(5520),l=s(2407),o={name:"coreKPI",components:{Row:a.A,Col:c.A,Sticky:r.A},data(){return{personList:[{id:1,name:"Nellie Simpson",dept:"BU-Dept.",remark:"2nd Renew"},{id:2,name:"test",dept:"BU-Dept.",remark:"2nd Renew"},{id:3,name:"测试",dept:"BU-Dept.",remark:"2nd Renew"},{id:4,name:"Nellie Simpson",dept:"BU-Dept.",remark:"2nd Renew"},{id:5,name:"Nellie Simpson",dept:"BU-Dept.",remark:"2nd Renew"},{id:6,name:"Nellie Simpson",dept:"BU-Dept.",remark:"2nd Renew"}],colors:(0,l.zB)(),actions:[{name:"选项"},{name:"选项2"}],currentDate:new Date,showMonth:!1,show:!1,overview:null,bybu:null}},created(){this.$nextTick((()=>{this.getPenderPie(""),this.getPenderPie("2"),this.getAgeLevel(""),this.getAgeLevel("2"),this.overview=this.$refs.overview,this.bybu=this.$refs.bybu}))},watch:{},methods:{getName(t){return t.split(" ").map((t=>t[0])).join("")},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,console.log(t)},onSelect(t){console.log(t)},getPenderPie(t){const e=document.getElementById("genderPie"+t),s=this.$echarts.init(e,null,{devicePixelRatio:2});let i;i={color:["#DAA6C0","#72C8B3","#799AE9"],legend:{position:"center",bottom:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:18,textStyle:{fontSize:12,color:"#9D8F9B"}},series:[{name:"",type:"pie",center:["51%","44%"],radius:"60%",data:[{value:(547/1471*100).toFixed(2),name:"F"},{value:(56/1471*100).toFixed(2),name:"U"},{value:(868/1471*100).toFixed(2),name:"M"}],label:{formatter:"{b}: {c}%",lineHeight:10,fontSize:10.5,color:"#9D8F9B",distance:20},labelLine:{normal:{show:!0,length:7,length2:3}}}]},i&&"object"===typeof i&&s.setOption(i),window.addEventListener("resize",s.resize)},getAgeLevel(t){const e=document.getElementById("ageLevel"+t),s=this.$echarts.init(e,null,{devicePixelRatio:2});let i;i={color:["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65"],series:[{type:"pie",center:["51%","50%"],radius:[52,82],itemStyle:{borderColor:"#fff",borderWidth:1},label:{formatter:"{name|{b}}\n{time|{c}%}",lineHeight:14,rich:{name:{fontSize:12,color:"#999"},time:{fontSize:16,fontWeight:600,lineHeight:25,color:"#6B6B6B"}}},labelLine:{normal:{lineStyle:{color:"#E6E6E6"},show:!0,length:8,length2:18}},data:[{name:"30~40",value:30},{name:"40~50",value:20},{name:"20~30",value:15},{name:"50~55",value:10},{name:"55+",value:20}]}]},i&&"object"===typeof i&&s.setOption(i),window.addEventListener("resize",s.resize)}}},v=o,d=s(845),m=(0,d.A)(v,i,n,!1,null,"5631176e",null),p=m.exports},2407:function(t,e,s){s.d(e,{zB:function(){return i}});s(4114);const i=()=>{let t=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t}},597:function(t,e,s){t.exports=s.p+"img/select.566d2950.svg"},9367:function(t,e,s){t.exports=s.p+"img/female.7c80b5b2.svg"},2024:function(t,e,s){t.exports=s.p+"img/icon_1.7283ab4a.svg"},7563:function(t,e,s){t.exports=s.p+"img/icon_2.ee20bdf1.svg"},5098:function(t,e,s){t.exports=s.p+"img/icon_3.e7e0881f.svg"},4516:function(t,e,s){t.exports=s.p+"img/male.9dbc4324.svg"},2589:function(t,e,s){t.exports=s.p+"img/unisex.c0d83054.svg"}}]);