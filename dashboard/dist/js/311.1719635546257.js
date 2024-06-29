"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[311],{7311:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t._m(1),e("div",{staticClass:"pt-16"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v("TKH")]),e("img",{attrs:{width:"24px",src:n(597)},on:{click:function(e){t.show=!0}}})]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v("2024-Jun")]),e("img",{attrs:{width:"24px",src:n(597)},on:{click:function(e){t.showMonth=!0}}})])])],1)],1),e("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:t.buList},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("div",{staticClass:"card-list fs-14"},t._l(t.personList,(function(n,s){return e("van-row",{key:n.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[e("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[e("div",{staticClass:"card-list-left-content"},[e("div",{staticClass:"card-list-left-logo",style:{backgroundColor:t.colors[s]}},[t._v(" "+t._s(t.getName(n.name))+" ")]),e("div",{staticClass:"card-list-left-text"},[e("p",[t._v(t._s(n.name))]),e("p",{staticClass:"fs-12"},[t._v(t._s(n.dept))])])])]),e("van-col",{staticClass:"card-list-right text-right fs-16 fw-600",class:["text-"+n.type],attrs:{span:"6"}},[t._v(" "+t._s(n.remark)+" ")])],1)})),1)])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(5513)}}),e("span",[t._v("Monthy Leave")])]),e("div",{staticClass:"monthy"},[e("div",{staticClass:"monthy-bar",attrs:{id:"monthyBar"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(5683)}}),e("span",[t._v("Sick Leave")])]),e("div",{staticClass:"monthy"},[e("div",{staticClass:"monthy-bar",attrs:{id:"sickBar"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(1042)}}),e("span",[t._v("Abnormal Sick Leave")])])}],r=n(7349),i=n(3011),o=n(7691),c=n(9941),l=n(7967),m=n(2407),d={name:"attendanceCoreKPI",components:{Row:r.A,Col:i.A,Swipe:o.A,SwipeItem:c.A,ActionSheet:l.A},data(){return{show:!1,actions:[{name:"TKH"},{name:"TKH"},{name:"TKH"},{name:"TKH"},{name:"TKH"},{name:"TKH"},{name:"TKH"}],currentDate:new Date,showMonth:!1,colors:(0,m.zB)(),personList:[{id:1,name:"Nellie Simpson",dept:"BU-Dept.",remark:"12D/20D",type:"danger2"},{id:2,name:"test",dept:"BU-Dept.",remark:"12D/20D",type:"danger2"},{id:3,name:"测试",dept:"BU-Dept.",remark:"12D/20D",type:"danger2"},{id:4,name:"Nellie Simpson",dept:"BU-Dept.",remark:"12D/20D",type:"wanring"},{id:5,name:"Nellie Simpson",dept:"BU-Dept.",remark:"12D/20D",type:"wanring"},{id:6,name:"Nellie Simpson",dept:"BU-Dept.",remark:"12D/20D",type:"wanring"}]}},created(){this.$nextTick((()=>{this.getMonthyBar("monthyBar",!0),this.getMonthyBar("sickBar",!0),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getMonthyBar("monthyBar",!0):this.getMonthyBar("monthyBar",!1)}))})),this.observer.observe(document.getElementById("monthyBar")),this.observer2=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getMonthyBar("sickBar",!0):this.getMonthyBar("sickBar",!1)}))})),this.observer2.observe(document.getElementById("sickBar"))}))},watch:{},methods:{getName(t){return t.split(" ").map((t=>t[0])).join("")},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,console.log(t)},onSelect(t){console.log(t)},getMonthyBar(t,e){const n=document.getElementById(t);if(!n)return!1;const s=this.$echarts.init(n,null,{devicePixelRatio:2});let a,r=[];"monthyBar"===t?r=["#5579ED"]:"sickBar"===t&&(r=["#FF860F"]),a={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:r,legend:{},grid:{top:"7%",left:"3%",right:"5%",bottom:"6%",containLabel:!0},yAxis:{type:"value",splitNumber:3,axisLabel:{fontSize:"0",show:!1,color:"transparent"}},xAxis:{type:"category",data:["2024-01","2024-02","2024-03","2024-04","2024-05","2024-06"],axisTick:{alignWithLabel:!0,count:4},axisLabel:{color:"#666666",fontSize:"9.5"},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:e?[7.8,6,5,4,3,2,1]:[],barWidth:"20",itemStyle:{borderRadius:[3,3,3,3]},label:{lineHeight:20,show:!0,formatter:"{c}%",position:"outside",color:"#535353",fontSize:"12"}}]},a&&"object"===typeof a&&s.setOption(a),window.addEventListener("resize",s.resize)}}},h=d,u=n(845),p=(0,u.A)(h,s,a,!1,null,"5917bd28",null),f=p.exports},2407:function(t,e,n){n.d(e,{n7:function(){return a},of:function(){return s},zB:function(){return r}});n(4114);function s(t,e){const n=JSON.parse(JSON.stringify(t)),a=Object.keys(t);return a.forEach((a=>{-1!==[null,void 0,""].indexOf(n[a])?delete n[a]:e&&"object"===typeof t[a]&&!Array.isArray(t[a])&&(n[a]=s(n[a]))})),n}function a(t,e){if(!t)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=new Date(t),a=s.getFullYear(),r=String(s.getMonth()+1).padStart(2,0),i=n[s.getMonth()],o=String(s.getDate()).padStart(2,0),c=String(s.getHours()).padStart(2,0),l=String(s.getMinutes()).padStart(2,0),m=String(s.getSeconds()).padStart(2,0);switch(e){case"slash":return`${a}/${r}/${o}`;case"year":return`${a}`;case"month":return`${a}-${i}`;case"monthsh":return`${a}/${r}`;case"day":return`${o}-${r}-${a}`;case"timestamp":return`${a}${r}${o}${c}${l}`;case"obj":return{y:a,m:r,d:o,h:c,min:l,s:m};case"normal":return`${a}-${r}-${o} ${c}:${l}:${m}`;case"normalHours":return`${a}-${r}-${o} ${c}`;case"normalMin":return`${a}-${r}-${o} ${c}:${l}`;case"normalDay":return`${a}-${i}-${o}`;case"normalDay2":return`${a}-${r}-${o}`;default:return`${r}-${o}-${a} ${c}:${l}`}}const r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t}},5683:function(t,e,n){t.exports=n.p+"img/icon_2.1636ef31.svg"},1042:function(t,e,n){t.exports=n.p+"img/icon_3.bc5359b7.svg"},597:function(t,e,n){t.exports=n.p+"img/select.566d2950.svg"},5513:function(t,e,n){t.exports=n.p+"img/icon_5.ccb06ef0.svg"}}]);