"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[170],{7170:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content training"},[e("van-row",{staticClass:"training-total",attrs:{gutter:"14"}},[e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:i(1525)}})]),e("p",{staticClass:"number fs-24 text-yellow"},[t._v(t._s(t._f("formatNumber")(t.totalEmp)))]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Total"),e("br"),t._v("Participants")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:i(278)}})]),e("p",{staticClass:"number fs-24 text-blue"},[t._v(t._s(t.trainingEmpStat.length))]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Num Of"),e("br"),t._v("Course")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:i(7399)}})]),e("p",{staticClass:"number fs-24 text-success"},[t._v(t._s(t._f("formatNumber")(t.perHours))+"h")]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Training hours"),e("br"),t._v("Of Per Capita")])])])])],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("div",{staticClass:"leave-items-content",style:{height:60*Object.values(t.trainingEmpStatItems)?.length+24+"px"}},[e("div",{staticClass:"leave-items"},[e("van-row",[e("van-col",{staticClass:"leave-items-date",attrs:{span:"12"}})],1),e("div",{staticClass:"leave-bar",style:{height:60*Object.values(t.trainingEmpStatItems)?.length+"px"},attrs:{id:"leaveList"}})],1)])])]),t._m(1),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("van-row",{staticClass:"in-post-content",class:[t.isShow2?"am-active":""],attrs:{gutter:"16"}},[t._l(t.inpostList2,(function(i,s){return e("van-col",{key:i.id,staticClass:"in-post-list",attrs:{span:"12"}},[e("div",{staticClass:"in-post-pie"},[e("div",{staticClass:"in-post-title"},[t._v(t._s(i.title))]),e("div",{staticClass:"in-post-pie-content",attrs:{id:"inpostList2"+i.id}})])])})),e("van-col",{staticClass:"in-post-list",attrs:{span:"12"}})],2),e("div",{staticClass:"text-center"},[e("div",{staticClass:"show-more text-yellow fs-12",on:{click:function(e){return t.showMore(2)}}},[e("img",{class:[t.isShow2?"am-active":""],attrs:{width:"16px",src:i(2190)}}),t._v(" "+t._s(t.isShow2?"Folded":"Show More")+" ")])])],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("div",{staticClass:"leave-items-content leave-items-more",class:[t.isShow3?"am-active":""]},t._l(t.leaveList2,(function(i){return e("div",{key:i.id,staticClass:"leave-items leave-items-more"},[e("van-row",[e("van-col",{staticClass:"leave-items-date",attrs:{span:"12"}},[t._v(" "+t._s(i.date)+" ")])],1),e("div",{staticClass:"leave-bar",attrs:{id:"leaveList2"+i.id}})],1)})),0),e("div",{staticClass:"text-center"},[e("div",{staticClass:"show-more text-yellow fs-12",on:{click:function(e){return t.showMore("3")}}},[e("img",{class:[t.isShow3?"am-active":""],attrs:{width:"16px",src:i(2190)}}),t._v(" "+t._s(t.isShow3?"Folded":"Show More")+" ")])])])])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(7592)}}),e("span",[t._v("Engagement by BU")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(5513)}}),e("span",[t._v("Training Hours Of Per Capita by BU")])]),e("div",{staticClass:"employee resignation"},[e("div",{staticClass:"employee-items resignation-items"},[e("div",{staticClass:"employee-bar",attrs:{id:"trainingList"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(4762)}}),e("span",[t._v("Training Duration Completion")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(4762)}}),e("span",[t._v("Core Course Completion")])])}],n=(i(4114),i(7349)),r=i(3011),o=i(7691),l=i(9941),c=i(2407),d=i(8193),m={name:"coreKPI",components:{Row:n.A,Col:r.A,Swipe:o.A,SwipeItem:l.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,leaveList:[{id:1,date:"2024/01",total:2156},{id:2,date:"2024/02",total:2156},{id:3,date:"2024/03",total:2156},{id:4,date:"2024/04",total:2156},{id:5,date:"2024/05",total:2156},{id:6,date:"2024/06",total:2156}],isShow:!1,resignationList:[{id:1,date:"2024/01",total:280},{id:2,date:"2024/02",total:280},{id:3,date:"2024/03",total:280},{id:4,date:"2024/04",total:280},{id:5,date:"2024/05",total:280},{id:6,date:"2024/06",total:280}],colors:[],inpostList2:[{id:1,title:"TKH",type:"normal"},{id:2,title:"SLT",type:"warning"},{id:3,title:"TLC",type:"danger"},{id:4,title:"TLQ"},{id:5,title:"HTK"},{id:6,title:"TKZY"},{id:7,title:"TKH"}],leaveList2:[{id:1,date:"2024/01",total:2156},{id:2,date:"2024/02",total:2156},{id:3,date:"2024/03",total:2156},{id:4,date:"2024/04",total:2156},{id:5,date:"2024/05",total:2156},{id:6,date:"2024/06",total:2156}],isShow2:!1,isShow3:!1,trainingEmpStat:[],perHours:0}},computed:{trainingEmpStatItems(){const t={};return this.trainingEmpStat.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),t},totalEmp(){return this.trainingEmpStat.map((t=>t.total_emp)).reduce(((t,e)=>t+e),0)}},created(){this.leaveList=this.leaveList.reverse(),this.leaveList2=this.leaveList2.reverse(),this.colors=(0,c.zB)(),this.$nextTick((async()=>{await this.getTrainingEmpStat(),this.getLeave(!0);for(let t=0;t<this.inpostList2.length;t++)this.getInpost(this.inpostList2[t],"2",!0);for(let t=0;t<this.leaveList2.length;t++)this.getLeave2(this.leaveList2[t],"2",!0);this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getLeave(!0):this.getLeave(!1)}))})),this.observer.observe(document.getElementById("leaveList")),this.getTrainingList(!0),this.observer2=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getTrainingList(!0):this.getTrainingList(!1)}))})),this.observer2.observe(document.getElementById("trainingList"));for(let t=0;t<this.leaveList.length;t++)this["observer"+(t+1)]=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getLeave2(this.leaveList[t],"2",!0):this.getLeave2(this.leaveList[t],"2",!1)}))})),this["observer"+(t+1)].observe(document.getElementById("leaveList2"+this.leaveList[t].id));for(let t=0;t<this.inpostList2.length;t++)this["observer2"+(t+1)]=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getInpost(this.inpostList2[t],"2",!0):this.getInpost(this.inpostList2[t],"2",!1)}))})),this["observer2"+(t+1)].observe(document.getElementById("inpostList2"+this.inpostList2[t].id));for(let t=0;t<this.leaveList2.length;t++)this["observer3"+(t+1)]=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getLeave(this.leaveList2[t],"2",!0):this.getLeave(this.leaveList2[t],"2",!1)}))})),this["observer3"+(t+1)].observe(document.getElementById("leaveList2"+this.leaveList2[t].id))}))},watch:{},methods:{async getTrainingEmpStat(){const t=await d.bC(this.$options.data().common);this.trainingEmpStat=t.rows},showMore(t){this["isShow"+t]=!this["isShow"+t]},getInpost(t,e,i){const s=document.getElementById("inpostList"+e+t.id);if(!s)return!1;const a=this.$echarts.init(s);let n,r=["#5579ED"];"warning"===t?.type?r=["#B87B00"]:"danger"===t?.type&&(r=["#F25769"]);const o=[{value:82.22,name:"In-post / Forcast",title:{offsetCenter:["0%","13%"],fontSize:10},detail:{valueAnimation:!0,offsetCenter:["0%","-7%"],fontSize:16}}];n={color:r,series:[{type:"gauge",startAngle:90,endAngle:-270,center:["50%","37%"],pointer:{show:!1},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1},axisLine:{lineStyle:{width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:i?o:[],title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",formatter:"{value}%"}}]},n&&"object"===typeof n&&a.setOption(n),window.addEventListener("resize",a.resize)},getTrainingList(t){const e=document.getElementById("trainingList");if(!e)return!1;const i=this.$echarts.init(e,null,{devicePixelRatio:2});let s=[];for(let r in this.trainingEmpStatItems)if(this.trainingEmpStatItems.hasOwnProperty(r)){const t=this.trainingEmpStatItems[r].map((t=>t.project_tasks_hours)).reduce(((t,e)=>t+e),0),e=this.trainingEmpStatItems[r].map((t=>t.join_project_emp)).reduce(((t,e)=>t+e),0),i=t/e;s.push({name:r,total:i,value:i.toFixed(2)})}const a=s.map((t=>t.total)).reduce(((t,e)=>t+e),0);let n;this.perHours=(a/Object.values(this.trainingEmpStatItems).length).toFixed(1),s=[...s].sort(((t,e)=>e.total-t.total)),n={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:["#5579ED"],legend:{},grid:{top:"8.5%",left:"3.5%",right:"4%",bottom:"2%",containLabel:!0},yAxis:{type:"value",splitNumber:4,axisLabel:{fontSize:"10",margin:10,color:"#505E72",formatter:function(t){return t.toFixed(1)}}},xAxis:{type:"category",data:s.map((t=>t.name)),axisTick:{},axisLabel:{color:"#505E72",fontSize:"10",rotate:40},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:t?s.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},markLine:{lineStyle:{type:"dashed",color:"#343C50"},label:{position:"start",color:"#FFFFFF",fontSize:10,padding:3,distance:[0,0],backgroundColor:"#343C50"},data:[{type:"average",name:""}],symbol:["diamond","none"],symbolSize:[16,16]}}]},n&&"object"===typeof n&&i.setOption(n),window.addEventListener("resize",i.resize)},getLeave(t){const e=document.getElementById("leaveList");if(!e)return!1;const i=this.$echarts.init(e,null,{devicePixelRatio:2});let s,a=[];for(let n in this.trainingEmpStatItems)if(this.trainingEmpStatItems.hasOwnProperty(n)){const t=this.trainingEmpStatItems[n].map((t=>t.join_project_emp)).reduce(((t,e)=>t+e),0),e=this.trainingEmpStatItems[n].map((t=>t.total_emp)).reduce(((t,e)=>t+e),0),i=t/e;a.push({name:n,value:(100*i).toFixed(2)})}a=[...a].sort(((t,e)=>parseInt(t.value)-parseInt(e.value))),s={color:["#5579ED","#A3CCF8"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"5%",right:"6.5%",bottom:"6%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:a.map((t=>t.name)),axisTick:{show:!1},max:"100",axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",showBackground:!0,barGap:"0.3",backgroundStyle:{color:"#EEF0F6"},data:t?a.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:["85%","-14"],color:"#5579ED",fontSize:"12"}}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize),setTimeout((()=>{i.resize()}),500)},getLeave2(t,e,i){const s=document.getElementById("leaveList"+e+t.id);if(!s)return!1;const a=this.$echarts.init(s,null,{devicePixelRatio:2});let n;n={color:["#5579ED","#A3CCF8"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"5%",right:"6.5%",bottom:"6%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:["GRO","SSM","SHKY","TLX","SLT","TKH"],axisTick:{show:!1},max:"100",axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",showBackground:!0,barGap:"0.3",backgroundStyle:{color:"#EEF0F6"},data:i?[{value:44,itemStyle:{color:"#5579ED"}},{value:55,itemStyle:{color:"#5579ED"}},{value:66,itemStyle:{color:"#5579ED"}},{value:77,itemStyle:{color:"#5579ED"}},{value:89,itemStyle:{color:"#5579ED"}},{value:100,itemStyle:{color:"#5579ED"}}]:[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:["85%","-14"],color:"#5579ED",fontSize:"12"}}]},n&&"object"===typeof n&&a.setOption(n),window.addEventListener("resize",a.resize)}}},p=m,h=i(845),u=(0,h.A)(p,s,a,!1,null,"175d0326",null),v=u.exports},2407:function(t,e,i){i.d(e,{a5:function(){return o},n7:function(){return a},of:function(){return s},y7:function(){return n},zB:function(){return r}});i(4114);function s(t,e){const i=JSON.parse(JSON.stringify(t)),a=Object.keys(t);return a.forEach((a=>{-1!==[null,void 0,""].indexOf(i[a])?delete i[a]:e&&"object"===typeof t[a]&&!Array.isArray(t[a])&&(i[a]=s(i[a]))})),i}function a(t,e){if(!t)return"";const i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date(t),n=a.getFullYear(),r=String(a.getMonth()+1).padStart(2,0),o=i[a.getMonth()],l=s[a.getMonth()],c=String(a.getDate()).padStart(2,0),d=String(a.getHours()).padStart(2,0),m=String(a.getMinutes()).padStart(2,0),p=String(a.getSeconds()).padStart(2,0);switch(e){case"slash":return`${n}/${r}/${c}`;case"year":return`${n}`;case"monthN":return`${n}-${r}`;case"monthLong":return`${n}-${l}`;case"month":return`${n}-${o}`;case"monthsh":return`${n}/${r}`;case"day":return`${c}-${r}-${n}`;case"timestamp":return`${n}${r}${c}${d}${m}`;case"obj":return{y:n,m:r,d:c,h:d,min:m,s:p};case"normal":return`${n}-${r}-${c} ${d}:${m}:${p}`;case"normalHours":return`${n}-${r}-${c} ${d}`;case"normalMin":return`${n}-${r}-${c} ${d}:${m}`;case"normalDay":return`${n}-${o}-${c}`;case"normalDay2":return`${n}-${r}-${c}`;default:return`${r}-${c}-${n} ${d}:${m}`}}const n=t=>{const e=new Date(t),i=e.getFullYear(),s=e.getMonth(),a=t=>t%4===0&&t%100!==0||t%400===0,n=[31,a(i)?29:28,31,30,31,30,31,31,30,31,30,31][s];return n},r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},o=(t,e)=>{const i=new Date,s=i.getFullYear(),a=i.getMonth()-(e||0),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["January","February","March","April","May","June","July","August","September","October","November","December"];let o=[];for(let l=5;l>=0;l--){const e=a-l<0?s-1:s,i=(a-l+12)%12,c=t?r[i]:n[i],d=`${e}-${c}`;o.push(d)}return o}},2190:function(t,e,i){t.exports=i.p+"img/more.0e51bcf8.svg"},1525:function(t,e,i){t.exports=i.p+"img/icon_1.9a70e0a0.svg"},278:function(t,e,i){t.exports=i.p+"img/icon_2.7bf157dd.svg"},7399:function(t,e,i){t.exports=i.p+"img/icon_3.7dc01385.svg"},7592:function(t,e,i){t.exports=i.p+"img/icon_4.e012cc7b.svg"},5513:function(t,e,i){t.exports=i.p+"img/icon_5.ccb06ef0.svg"},4762:function(t,e,i){t.exports=i.p+"img/icon_6.e7519bcb.svg"}}]);