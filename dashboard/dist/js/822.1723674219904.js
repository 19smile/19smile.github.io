"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[822],{4822:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content training"},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"fs-20"})]),e("van-col",{attrs:{span:"12 justify-end"}},[e("div",{staticClass:"fs-20"},[t._v("YTD")])])],1),e("van-row",{staticClass:"training-total",attrs:{gutter:"14"}},[e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:i(1525)}})]),e("p",{staticClass:"number fs-24 text-yellow"},[t._v(t._s(t._f("formatNumber")(t.totalEmp)))]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Total"),e("br"),t._v("Participants")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:i(278)}})]),e("p",{staticClass:"number fs-24 text-blue"},[t._v(t._s(t.trainingEmpStatDistinctProject.length))]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Num Of"),e("br"),t._v("Course")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:i(7399)}})]),e("p",{staticClass:"number fs-24 text-success"},[t._v(t._s(t._f("formatNumber")(t.perHours))+"h")]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Training hours"),e("br"),t._v("Of Person")])])])])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("div",{staticClass:"leave-items-content",style:{height:60*Object.values(t.trainingEmpStatItems)?.length+24+"px"}},[e("div",{staticClass:"leave-items"},[e("van-row",[e("van-col",{staticClass:"leave-items-date",attrs:{span:"12"}})],1),e("div",{staticClass:"leave-bar",style:{height:60*Object.values(t.trainingEmpStatItems)?.length+"px"},attrs:{id:"leaveList"}})],1)])])]),t._m(1),e("van-row",{staticClass:"select-box mt-16",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:i(597)},on:{click:function(e){t.show=!0}}})])],1),e("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:t.buList},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("div",{staticClass:"leave-items-content",style:{height:50*Object.values(t.trainingEmpStatBuItems)?.length+48+"px"}},[e("div",{staticClass:"leave-items"},[e("van-row",[e("van-col",{staticClass:"leave-items-date",attrs:{span:"12"}},[t._v(" FL VS. Office ")])],1),e("div",{staticClass:"leave-bar",style:{height:50*Object.values(t.trainingEmpStatBuItems)?.length+"px"},attrs:{id:"course"}})],1)])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("div",{staticClass:"leave-items-content",style:{height:50*Object.values(t.trainingEmpStatBuItems)?.length+48+"px"}},[e("div",{staticClass:"leave-items"},[e("van-row",[e("van-col",{staticClass:"leave-items-date",attrs:{span:"12"}},[t._v(" FL VS. Office ")])],1),e("div",{staticClass:"leave-bar",style:{height:50*Object.values(t.trainingEmpStatBuItems)?.length+"px"},attrs:{id:"traningHours"}})],1)])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(4),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items",style:{height:35*Object.values(t.trainingListByDept)?.length+"px"}},[e("div",{staticClass:"employee-bar",style:{height:35*Object.values(t.trainingListByDept)?.length+"px"},attrs:{id:"trainingListByDept"}})])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(5),e("van-row",{staticClass:"in-post-content",class:[t.isShow2?"am-active":""],attrs:{gutter:"16"}},[t._l(t.inpostList2,(function(i,s){return e("van-col",{key:i.id,staticClass:"in-post-list",attrs:{span:"12"}},[e("div",{staticClass:"in-post-pie"},[e("div",{staticClass:"in-post-title"},[t._v(t._s(i.title))]),e("div",{staticClass:"in-post-pie-content",attrs:{id:"inpostList2"+i.id}})])])})),e("van-col",{staticClass:"in-post-list",attrs:{span:"12"}})],2),e("div",{staticClass:"text-center"},[e("div",{staticClass:"show-more text-yellow fs-12",on:{click:function(e){return t.showMore(2)}}},[e("img",{class:[t.isShow2?"am-active":""],attrs:{width:"16px",src:i(2190)}}),t._v(" "+t._s(t.isShow2?"Folded":"Show More")+" ")])])],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(6),e("div",{staticClass:"leave-items-content leave-items-more",class:[t.isShow3?"am-active":""]},t._l(t.leaveList2,(function(i){return e("div",{key:i.id,staticClass:"leave-items leave-items-more"},[e("van-row",[e("van-col",{staticClass:"leave-items-date",attrs:{span:"12"}},[t._v(" "+t._s(i.date)+" ")])],1),e("div",{staticClass:"leave-bar",attrs:{id:"leaveList2"+i.id}})],1)})),0),e("div",{staticClass:"text-center"},[e("div",{staticClass:"show-more text-yellow fs-12",on:{click:function(e){return t.showMore("3")}}},[e("img",{class:[t.isShow3?"am-active":""],attrs:{width:"16px",src:i(2190)}}),t._v(" "+t._s(t.isShow3?"Folded":"Show More")+" ")])])])])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(7592)}}),e("span",[t._v("Participation by BU")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(5513)}}),e("span",[t._v("Training Hours Of Person by BU")])]),e("div",{staticClass:"employee resignation"},[e("div",{staticClass:"employee-items resignation-items"},[e("div",{staticClass:"employee-bar",attrs:{id:"trainingList"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(7592)}}),e("span",[t._v("Participation by Course")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(7592)}}),e("span",[t._v("Total Training Hours")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(5513)}}),e("span",[t._v("Training Hours Of Person by Dept.")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(4762)}}),e("span",[t._v("Training Duration Completion")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:i(4762)}}),e("span",[t._v("Core Course Completion")])])}],n=(i(4114),i(7349)),r=i(3011),o=i(7691),l=i(9941),c=i(2407),p=i(8193),m={name:"coreKPI",components:{Row:n.A,Col:r.A,Swipe:o.A,SwipeItem:l.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,leaveList:[{id:1,date:"2024/01",total:2156},{id:2,date:"2024/02",total:2156},{id:3,date:"2024/03",total:2156},{id:4,date:"2024/04",total:2156},{id:5,date:"2024/05",total:2156},{id:6,date:"2024/06",total:2156}],isShow:!1,resignationList:[{id:1,date:"2024/01",total:280},{id:2,date:"2024/02",total:280},{id:3,date:"2024/03",total:280},{id:4,date:"2024/04",total:280},{id:5,date:"2024/05",total:280},{id:6,date:"2024/06",total:280}],colors:[],inpostList2:[{id:1,title:"TKH",type:"normal"},{id:2,title:"SLT",type:"warning"},{id:3,title:"TLC",type:"danger"},{id:4,title:"TLQ"},{id:5,title:"HTK"},{id:6,title:"TKZY"},{id:7,title:"TKH"}],leaveList2:[{id:1,date:"2024/01",total:2156},{id:2,date:"2024/02",total:2156},{id:3,date:"2024/03",total:2156},{id:4,date:"2024/04",total:2156},{id:5,date:"2024/05",total:2156},{id:6,date:"2024/06",total:2156}],isShow2:!1,isShow3:!1,trainingEmpStat:[],trainingEmpStatBu:[],perHours:0,selBu:"",show:!1}},computed:{trainingEmpStatItems(){const t={};return this.trainingEmpStat.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),t},trainingEmpStatBuItems(){const t={};return this.trainingEmpStatBu.forEach((e=>{t[e.scene_name]=t[e.scene_name]||[],t[e.scene_name].push(e)})),t},totalEmp(){return this.trainingEmpStat.map((t=>t.total_emp)).reduce(((t,e)=>t+e),0)},trainingEmpStatDistinctProject(){let t=this.trainingEmpStat.reduce(((t,e)=>{const i=t.find((t=>t.project_id===e.project_id));return i?t:t.concat([e])}),[]);return t},trainingListByDept(){let t={};return this.trainingEmpStatItems[this.selBu]?(this.trainingEmpStatItems[this.selBu].forEach((e=>{e.dept_code=e.dept_code||"",t[e.dept_code]=t[e.dept_code]||[],t[e.dept_code].push(e)})),t):[[]]}},created(){this.leaveList=this.leaveList.reverse(),this.leaveList2=this.leaveList2.reverse(),this.colors=(0,c.zB)(),this.$nextTick((async()=>{this.selBu=this.buList?.[0]?.value,await this.getTrainingEmpStat(),await this.getTrainingEmpStatBu(),this.getLeave(!0);for(let t=0;t<this.inpostList2.length;t++)this.getInpost(this.inpostList2[t],"2",!0);for(let t=0;t<this.leaveList2.length;t++)this.getLeave2(this.leaveList2[t],"2",!0);this.getTrainingListByDept(!0,!0),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getLeave(!0):this.getLeave(!1)}))})),this.getCourse(!0),this.getTraningHours(!0),this.observer.observe(document.getElementById("leaveList")),this.getTrainingList(!0),this.observer2=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getTrainingList(!0):this.getTrainingList(!1)}))})),this.observer2.observe(document.getElementById("trainingList"));for(let t=0;t<this.leaveList.length;t++)this["observer"+(t+1)]=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getLeave2(this.leaveList[t],"2",!0):this.getLeave2(this.leaveList[t],"2",!1)}))})),this["observer"+(t+1)].observe(document.getElementById("leaveList2"+this.leaveList[t].id));for(let t=0;t<this.inpostList2.length;t++)this["observer2"+(t+1)]=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getInpost(this.inpostList2[t],"2",!0):this.getInpost(this.inpostList2[t],"2",!1)}))})),this["observer2"+(t+1)].observe(document.getElementById("inpostList2"+this.inpostList2[t].id));for(let t=0;t<this.leaveList2.length;t++)this["observer3"+(t+1)]=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getTrainingListByDept(!0,!0):this.getTrainingListByDept(!0,!1)}))})),this["observer3"+(t+1)].observe(document.getElementById("trainingListByDept"));this.observer5=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getLeave(!0):this.getLeave(!1)}))})),this.observer5.observe(document.getElementById("leaveList"))}))},watch:{},methods:{onSelect(t){this.show=!1,this.selBu=t.value,this.$nextTick((async()=>{await this.getTrainingEmpStat(),await this.getTrainingEmpStatBu(),this.getTrainingListByDept(!0,!0),this.getCourse(!0,!0),this.getTraningHours(!0,!0)}))},async getTrainingEmpStat(){const t=await p.bC({...this.$options.data().common,begin_month:(0,c.n7)((new Date).setMonth(0),"monthN"),end_month:(0,c.n7)(new Date,"monthN")});this.trainingEmpStat=t.rows},async getTrainingEmpStatBu(){const t=await p.bC({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,c.n7)((new Date).setMonth(0),"monthN"),end_month:(0,c.n7)(new Date,"monthN")});this.trainingEmpStatBu=t.rows},showMore(t){this["isShow"+t]=!this["isShow"+t]},getInpost(t,e,i){const s=document.getElementById("inpostList"+e+t.id);if(!s)return!1;const a=this.$echarts.init(s);let n,r=["#5579ED"];"warning"===t?.type?r=["#B87B00"]:"danger"===t?.type&&(r=["#F25769"]);const o=[{value:82.22,name:"In-post / Forecast",title:{offsetCenter:["0%","13%"],fontSize:10},detail:{valueAnimation:!0,offsetCenter:["0%","-7%"],fontSize:16}}];n={color:r,series:[{type:"gauge",startAngle:90,endAngle:-270,center:["50%","37%"],pointer:{show:!1},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1},axisLine:{lineStyle:{width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:i?o:[],title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",formatter:"{value}%"}}]},n&&"object"===typeof n&&a.setOption(n),window.addEventListener("resize",a.resize)},getTrainingList(t){const e=document.getElementById("trainingList");if(!e)return!1;const i=this.$echarts.init(e,null,{devicePixelRatio:2});let s=[];for(let r in this.trainingEmpStatItems)if(this.trainingEmpStatItems.hasOwnProperty(r)){const t=this.trainingEmpStatItems[r].map((t=>t.project_tasks_hours)).reduce(((t,e)=>t+e),0),e=this.trainingEmpStatItems[r].map((t=>t.join_project_emp)).reduce(((t,e)=>t+e),0),i=t/e;s.push({name:r,total:i,value:i.toFixed(2)})}const a=s.map((t=>t.total)).reduce(((t,e)=>t+e),0);let n;this.perHours=(a/Object.values(this.trainingEmpStatItems).length).toFixed(1),s=[...s].sort(((t,e)=>e.total-t.total)),n={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:["#5579ED"],legend:{},grid:{top:"8.5%",left:"3.5%",right:"4%",bottom:"2%",containLabel:!0},yAxis:{type:"value",splitNumber:4,show:!1,axisLabel:{fontSize:"10",margin:10,color:"#505E72",formatter:function(t){}}},xAxis:{type:"category",data:s.map((t=>t.name)),axisTick:{},axisLabel:{color:"#505E72",fontSize:"10",rotate:40},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:t?s.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},markLine:{lineStyle:{type:"dashed",color:"#343C50"},label:{position:"start",color:"#FFFFFF",fontSize:10,padding:3,distance:[0,0],backgroundColor:"#343C50"},data:[{type:"average",name:""}],symbol:["diamond","none"],symbolSize:[16,16]}}]},n&&"object"===typeof n&&i.setOption(n),window.addEventListener("resize",i.resize)},getLeave(t){const e=document.getElementById("leaveList");if(!e)return!1;const i=this.$echarts.init(e,null,{devicePixelRatio:2});let s,a=[];for(let n in this.trainingEmpStatItems)if(this.trainingEmpStatItems.hasOwnProperty(n)){const t=this.trainingEmpStatItems[n].map((t=>t.join_project_emp)).reduce(((t,e)=>t+e),0),e=this.trainingEmpStatItems[n].map((t=>t.total_emp)).reduce(((t,e)=>t+e),0),i=t/e;a.push({name:n,value:(100*i).toFixed(2)})}a=[...a].sort(((t,e)=>parseInt(t.value)-parseInt(e.value))),s={color:["#5579ED","#A3CCF8"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"5%",right:"6.5%",bottom:"6%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:a.map((t=>t.name)),axisTick:{show:!1},max:"100",axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",showBackground:!0,barGap:"0.3",backgroundStyle:{color:"#EEF0F6"},data:t?a.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:["85%","-14"],color:"#5579ED",fontSize:"12"}}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize),setTimeout((()=>{i.resize()}),500)},getLeave2(t,e,i){const s=document.getElementById("leaveList"+e+t.id);if(!s)return!1;const a=this.$echarts.init(s,null,{devicePixelRatio:2});let n;n={color:["#5579ED","#A3CCF8"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"5%",right:"6.5%",bottom:"6%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:["GRO","SSM","SHKY","TLX","SLT","TKH"],axisTick:{show:!1},max:"100",axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",showBackground:!0,barGap:"0.3",backgroundStyle:{color:"#EEF0F6"},data:i?[{value:44,itemStyle:{color:"#5579ED"}},{value:55,itemStyle:{color:"#5579ED"}},{value:66,itemStyle:{color:"#5579ED"}},{value:77,itemStyle:{color:"#5579ED"}},{value:89,itemStyle:{color:"#5579ED"}},{value:100,itemStyle:{color:"#5579ED"}}]:[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:["85%","-14"],color:"#5579ED",fontSize:"12"}}]},n&&"object"===typeof n&&a.setOption(n),window.addEventListener("resize",a.resize)},getTrainingListByDept(t,e){const i=document.getElementById("trainingListByDept");if(!i)return!1;const s=this.$echarts.init(i);let a,n=[];for(let r in this.trainingListByDept)if(this.trainingListByDept.hasOwnProperty(r)){const t=this.trainingListByDept[r].map((t=>t.project_tasks_hours)).reduce(((t,e)=>t+e),0),e=this.trainingListByDept[r].map((t=>t.join_project_emp)).reduce(((t,e)=>t+e),0),i=t/e;n.push({name:r||"-",total:i,value:i.toFixed(2)})}if(n=[...n].sort(((t,e)=>e.total-t.total)),n.map(((t,e)=>{t.itemStyle=(e+1)%2===0?{color:"#A3CCF8"}:{color:"#5579ED"}})),a={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"9px",left:"7%",right:"16%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:n.map((t=>t.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:t?n:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},a&&"object"===typeof a&&s.setOption(a),window.addEventListener("resize",s.resize),!e)return!1;setTimeout((function(){s.resize()}),500)},getCourse(t){const e=document.getElementById("course");if(!e)return!1;const i=this.$echarts.init(e,null,{devicePixelRatio:2});let s,a=[];for(let n in this.trainingEmpStatBuItems)if(this.trainingEmpStatBuItems.hasOwnProperty(n)){const t=this.trainingEmpStatBuItems[n].filter((t=>"是"===t.is_frontline)),e=(this.trainingEmpStatBuItems[n].filter((t=>"否"===t.is_frontline)),t.length/this.trainingEmpStatBuItems[n].length);a.push({name:n,value:(100*e).toFixed(2)})}a=[...a].sort(((t,e)=>parseInt(t.value)-parseInt(e.value))),s={color:["#5579ED","#A3CCF8"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"5%",right:"6.5%",bottom:"6%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:a.map((t=>t.name)),axisTick:{show:!1},max:"100",axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",showBackground:!0,barGap:"0.3",backgroundStyle:{color:"#EEF0F6"},data:t?a.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:["85%","-14"],color:"#5579ED",fontSize:"12"}}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize),setTimeout((()=>{i.resize()}),500)},getTraningHours(t){const e=document.getElementById("traningHours");if(!e)return!1;const i=this.$echarts.init(e,null,{devicePixelRatio:2});let s,a=[];for(let n in this.trainingEmpStatBuItems)if(this.trainingEmpStatBuItems.hasOwnProperty(n)){const t=this.trainingEmpStatBuItems[n].filter((t=>"是"===t.is_frontline)).map((t=>t.project_tasks_hours)).reduce(((t,e)=>t+e),0),e=this.trainingEmpStatBuItems[n].filter((t=>"否"===t.is_frontline)).map((t=>t.project_tasks_hours)).reduce(((t,e)=>t+e),0);a.push({name:n,value:t,value2:e})}a=[...a].sort(((t,e)=>e.value-t.value)),s={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:["#5579ED","#FF860F"],legend:{top:"0%",left:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:24,textStyle:{fontSize:"12",color:"#333333"}},grid:{top:"8.5%",left:"3.5%",right:"4%",bottom:"2%",containLabel:!0},yAxis:{type:"value",splitNumber:4,show:!1,axisLabel:{fontSize:"10",margin:10,color:"#505E72",formatter:function(t){}}},xAxis:{type:"category",data:a.map((t=>t.name)),axisTick:{},axisLabel:{color:"#505E72",fontSize:"10",rotate:40},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"FL",type:"bar",data:t?a.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]}},{name:"Office",type:"bar",data:t?a.map((t=>t.value2)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]}}]},s&&"object"===typeof s&&i.setOption(s),window.addEventListener("resize",i.resize)}}},d=m,h=i(845),u=(0,h.A)(d,s,a,!1,null,"ae288644",null),g=u.exports},2407:function(t,e,i){i.d(e,{a5:function(){return o},n7:function(){return a},of:function(){return s},y7:function(){return n},zB:function(){return r}});i(4114);function s(t,e){const i=JSON.parse(JSON.stringify(t)),a=Object.keys(t);return a.forEach((a=>{-1!==[null,void 0,""].indexOf(i[a])?delete i[a]:e&&"object"===typeof t[a]&&!Array.isArray(t[a])&&(i[a]=s(i[a]))})),i}function a(t,e){if(!t)return"";const i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date(t),n=a.getFullYear(),r=String(a.getMonth()+1).padStart(2,0),o=i[a.getMonth()],l=s[a.getMonth()],c=String(a.getDate()).padStart(2,0),p=String(a.getHours()).padStart(2,0),m=String(a.getMinutes()).padStart(2,0),d=String(a.getSeconds()).padStart(2,0);switch(e){case"slash":return`${n}/${r}/${c}`;case"year":return`${n}`;case"monthN":return`${n}-${r}`;case"monthLong":return`${n}-${l}`;case"month":return`${n}-${o}`;case"monthsh":return`${n}/${r}`;case"day":return`${c}-${r}-${n}`;case"timestamp":return`${n}${r}${c}${p}${m}`;case"obj":return{y:n,m:r,d:c,h:p,min:m,s:d};case"normal":return`${n}-${r}-${c} ${p}:${m}:${d}`;case"normalHours":return`${n}-${r}-${c} ${p}`;case"normalMin":return`${n}-${r}-${c} ${p}:${m}`;case"normalDay":return`${n}-${o}-${c}`;case"normalDay2":return`${n}-${r}-${c}`;case"normalDay3":return`${n}-${l}-${c}`;case"normalDay4":return`${n}/${l}/${c}`;default:return`${r}-${c}-${n} ${p}:${m}`}}const n=t=>{const e=new Date(t),i=e.getFullYear(),s=e.getMonth(),a=t=>t%4===0&&t%100!==0||t%400===0,n=[31,a(i)?29:28,31,30,31,30,31,31,30,31,30,31][s];return n},r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},o=(t,e,i)=>{const s=i?new Date(i):new Date,a=s.getFullYear(),n=s.getMonth()-(e||0),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let c=5;c>=0;c--){const e=n-c<0?a-1:a,i=(n-c+12)%12,s=t?o[i]:r[i],p=`${e}-${s}`;l.push(p)}return l}},2190:function(t,e,i){t.exports=i.p+"img/more.0e51bcf8.svg"},597:function(t,e,i){t.exports=i.p+"img/select.566d2950.svg"},1525:function(t,e,i){t.exports=i.p+"img/icon_1.9a70e0a0.svg"},278:function(t,e,i){t.exports=i.p+"img/icon_2.7bf157dd.svg"},7399:function(t,e,i){t.exports=i.p+"img/icon_3.7dc01385.svg"},7592:function(t,e,i){t.exports=i.p+"img/icon_4.e012cc7b.svg"},5513:function(t,e,i){t.exports=i.p+"img/icon_5.ccb06ef0.svg"},4762:function(t,e,i){t.exports=i.p+"img/icon_6.e7519bcb.svg"}}]);