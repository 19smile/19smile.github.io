"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[336],{1336:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v("TKH")]),e("img",{attrs:{width:"24px",src:i(597)},on:{click:function(e){t.show=!0}}}),e("van-action-sheet",{attrs:{title:"Select BU",actions:t.actions,"close-on-click-action":"","cancel-text":"取消"},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v("2024-Jun")]),e("img",{attrs:{width:"24px",src:i(597)},on:{click:function(e){t.showMonth=!0}}}),e("van-action-sheet",{model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1)])],1)],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Vacancy")]),e("p",{staticClass:"text-yellow number"},[t._v("100")])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Recruited")]),e("p",{staticClass:"text-blue number"},[t._v("99")])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Remain")]),e("p",{staticClass:"text-blue2 number"},[t._v("2")])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",{staticClass:"recruitment-content"},[e("div",{staticClass:"justify-center"},[e("div",{attrs:{id:"recruitment"}})]),e("div",{staticClass:"yoy text-right"},[t._v("YoY: 20.45%")])])])],1)],1)]),t._m(1),t._m(2),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("van-row",{staticClass:"in-post-content",class:[t.isShow?"am-active":""],attrs:{gutter:"16"}},[t._l(t.inpostList,(function(i,s){return e("van-col",{key:i.id,staticClass:"in-post-list",attrs:{span:"12"}},[e("div",{staticClass:"in-post-pie"},[e("div",{staticClass:"in-post-title"},[t._v(t._s(i.title))]),e("div",{staticClass:"in-post-text"}),e("div",{staticClass:"in-post-pie-content",attrs:{id:"inpostList"+i.id}})])])})),e("van-col",{staticClass:"in-post-list",attrs:{span:"12"}})],2),e("div",{staticClass:"text-center"},[e("div",{staticClass:"show-more text-yellow fs-12",on:{click:function(e){return t.showMore("")}}},[e("img",{class:[t.isShow?"am-active":""],attrs:{width:"16px",src:i(2190)}}),t._v(" "+t._s(t.isShow?"Folded":"Show More")+" ")])])],1)])],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(2024)}}),e("span",[t._v("Recruitment Process")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(2024)}}),e("span",[t._v("Recruit Channel")])]),e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-content",attrs:{id:"ageLevel"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(711)}}),e("span",[t._v("Conversion by Channel")])]),e("div",{staticClass:"channel-items-content"},[e("div",{staticClass:"channel-items"},[e("div",{staticClass:"channel-bar",attrs:{id:"channel"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(7592)}}),e("span",[t._v("Probation Pass Rate")])])}],a=i(7349),o=i(3011),c=i(8296),l=i(6912),r=i(7967),d=i(5520),h={name:"recruitment",components:{Row:a.A,Col:o.A,Actionsheet:c.Actionsheet,Picker:l.A,[r.A.name]:r.A,Sticky:d.A},data(){return{show:!1,actions:[{name:"选项"},{name:"选项2"}],currentDate:new Date,showMonth:!1,inpostList:[{id:1,title:"TKH",type:"normal"},{id:2,title:"SLT",type:"warning"},{id:3,title:"TLC",type:"danger"},{id:4,title:"TLQ"},{id:5,title:"HTK"},{id:6,title:"TKZY"},{id:7,title:"TKH"}],isShow:!1}},created(){this.$nextTick((()=>{this.getChannel(),this.getAgeLevel(),this.getRecruitment();for(let t=0;t<this.inpostList.length;t++)this.getInpost(this.inpostList[t],"")}))},watch:{},methods:{formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,console.log(t)},onSelect(t){console.log(t)},getRecruitment(t){const e=document.getElementById("recruitment"),i=this.$echarts.init(e);let s;const n=[{value:82.22,name:"In-post / Forcast",title:{offsetCenter:["0%","13%"],fontSize:10},detail:{valueAnimation:!0,offsetCenter:["0%","-7%"],fontSize:16}}];s={color:["#5579ED"],series:[{type:"gauge",startAngle:90,endAngle:-270,center:["50%","47%"],pointer:{show:!1},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1},axisLine:{lineStyle:{width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:n,title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",formatter:"{value}%"}}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize)},getAgeLevel(){const t=document.getElementById("ageLevel"),e=this.$echarts.init(t,null,{devicePixelRatio:2});let i;i={color:["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65"],series:[{type:"pie",center:["51%","50%"],radius:[52,82],itemStyle:{borderColor:"#fff",borderWidth:1},label:{formatter:"{name|{b}}\n{time|{c}%}",lineHeight:14,rich:{name:{fontSize:12,color:"#999"},time:{fontSize:16,fontWeight:600,lineHeight:25,color:"#6B6B6B"}}},labelLine:{normal:{lineStyle:{color:"#E6E6E6"},show:!0,length:8,length2:18}},data:[{name:"30~40",value:30},{name:"40~50",value:20},{name:"20~30",value:15},{name:"50~55",value:10},{name:"55+",value:20}]}]},i&&"object"===typeof i&&e.setOption(i),window.addEventListener("resize",e.resize)},getChannel(t){const e=document.getElementById("channel"),i=this.$echarts.init(e,null,{devicePixelRatio:2});let s;s={color:["#FF860F","#5579ED"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:"5%",left:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:24,textStyle:{fontSize:"12",color:"#333333"}},grid:{top:"11%",left:"6%",right:"10%",bottom:"18%",containLabel:!0},xAxis:{type:"value",axisLabel:{fontSize:"0"},max:253,interval:parseInt(253/3)},yAxis:{type:"category",data:["...","社招","LinkIn","猎聘","前程无忧","51Job"],axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"入职数",type:"bar",stack:"total",barWidth:"16",itemStyle:{borderRadius:[2,0,0,2]},label:{show:!0,color:"#FFFFFF",fontSize:"11"},data:[23,45,18,43,23,23]},{name:"简历数",type:"bar",stack:"total",barWidth:"16",itemStyle:{borderRadius:[0,2,2,0]},label:{show:!0,color:"#FFFFFF",fontSize:"11"},data:[120,132,101,134,90,230]}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize)},showMore(t){this["isShow"+t]=!this["isShow"+t]},getInpost(t,e){const i=document.getElementById("inpostList"+e+t.id),s=this.$echarts.init(i);let n,a=["#A3CCF8","#5579ED"];"warning"===t?.type?a=["#FFBD73","#B87B00"]:"danger"===t?.type&&(a=["#FFB3D1","#F25769"]);const o=[{value:82.22,name:"In-post / Forcast",title:{offsetCenter:["0%","27%"],fontSize:8},detail:{valueAnimation:!0,offsetCenter:["0%","12%"],fontSize:14}},{value:88.62,name:"In-post / Budget",title:{offsetCenter:["0%","-10%"],fontSize:8},detail:{valueAnimation:!0,offsetCenter:["0%","-25%"],fontSize:14}}];n={color:a,series:[{type:"gauge",startAngle:90,endAngle:-270,center:["50%","37%"],pointer:{show:!1},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1},axisLine:{lineStyle:{width:14}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:o,title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",formatter:"{value}%"}}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)}}},p=h,v=i(845),m=(0,v.A)(p,s,n,!1,null,"24b80fcc",null),u=m.exports},2190:function(t,e,i){t.exports=i.p+"img/more.0e51bcf8.svg"},597:function(t,e,i){t.exports=i.p+"img/select.566d2950.svg"},2024:function(t,e,i){t.exports=i.p+"img/icon_1.7283ab4a.svg"},711:function(t,e,i){t.exports=i.p+"img/icon_1.b109c59a.svg"},7592:function(t,e,i){t.exports=i.p+"img/icon_4.e012cc7b.svg"}}]);