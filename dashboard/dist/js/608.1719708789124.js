"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[608],{1608:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:n(597)},on:{click:function(e){t.show=!0}}})]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v(t._s(t.selMonth))]),e("img",{attrs:{width:"24px",src:n(597)},on:{click:function(e){t.showMonth=!0}}})])])],1)],1),e("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:t.buLists},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("van-row",{staticClass:"calendar-content",attrs:{gutter:"16"}},t._l(t.leaveMonth,(function(n,a){return e("van-col",{key:a,staticClass:"calendar-list",attrs:{span:"6"}},[e("div",{class:[n.value>50?"danger":"success"]},[e("div",{staticClass:"calendar-text text-center"},[e("p",{staticClass:"fs-24"},[t._v(t._s(n.value||"-")+t._s(n.value?"%":""))]),e("p",{staticClass:"fs-14"},[t._v(t._s(t.getMonth(n.name)))])])])])})),1)],1),t._m(1)])],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(8640)}}),e("span",[t._v("Leave Apply Calendar")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-content mt-12"},[e("div",{staticClass:"content-items-title"},[e("span",[t._v("Annual Leave Apply")])]),e("div",{staticClass:"monthy"},[e("div",{staticClass:"monthy-bar",staticStyle:{height:"252px"},attrs:{id:"annualBar"}})])])}],o=(n(4114),n(7349)),r=n(3011),i=n(7691),l=n(9941),c=n(2407),h=n(8193),u={name:"leaveUsage",components:{Row:o.A,Col:r.A,Swipe:i.A,SwipeItem:l.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,selBu:"",selMonth:(0,c.n7)(new Date,"month"),selMonthN:(0,c.n7)(new Date,"normalDay2"),leaveDTL:[],leaveDTLMonth:[],show:!1,currentDate:new Date,showMonth:!1,colors:(0,c.zB)()}},computed:{leaveDTLItems(){return this.leaveDTLMonth.filter((t=>["Sick Leave","Annual Leave"].indexOf(t.leave_code)>-1))},leaveDTLMonthItems(){const t={};return this.leaveDTLItems.forEach((e=>{t[e.the_month]=t[e.the_month]||[],t[e.the_month].push(e)})),t},leaveMonth(){let t=[];for(let e in this.leaveDTLMonthItems)if(this.leaveDTLMonthItems.hasOwnProperty(e)){const n=this.leaveDTLMonthItems[e].map((t=>t.total_emp/t.leave_days)).reduce(((t,e)=>t+e),0),a=n?Math.round(n/this.leaveDTLMonthItems[e].length*100):0;t.push({name:e,value:a})}return t},leaveMonthYItems(){return this.leaveDTLMonthY.filter((t=>["Sick Leave","Annual Leave"].indexOf(t.leave_code)>-1))},leaveDTLMonthYItems(){const t={};return this.leaveMonthYItems.forEach((e=>{t[e.the_month]=t[e.the_month]||[],t[e.the_month].push(e)})),t}},created(){this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.$nextTick((()=>{this.selBu="Overview",this.setEchars()}))},watch:{},methods:{getDaysInCurrentMonth:c.y7,getEmployee(t){return this.hrEmployee.filter((e=>e.emp_id===t.emp_id))?.[0]},getMonth(t){return new Date(t).toLocaleDateString("en-US",{month:"short"})},async getLeaveByMonth(){const t=await h.VD((0,c.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,c.n7)(new Date(this.selMonthN),"year")+"-1",end_month:(0,c.n7)(new Date(this.selMonthN),"year")+"-12"}));this.leaveDTLMonth=t.rows;const e=new Date(this.selMonthN),n=new Date(e.setFullYear(e.getFullYear()-1)),a=await h.VD((0,c.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,c.n7)(new Date(n),"year")+"-1",end_month:(0,c.n7)(new Date(n),"year")+"-12"}));this.leaveDTLMonthY=a.rows},async setEchars(){await this.getLeaveByMonth(),this.getAnnualLeave(!0),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getAnnualLeave(!0):this.getAnnualLeave(!1)}))})),this.observer.observe(document.getElementById("annualBar"))},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,this.selMonth=(0,c.n7)(new Date(t),"month"),this.selMonthN=(0,c.n7)(new Date(t),"normalDay2"),this.setEchars()},onSelect(t){this.show=!1,this.selBu=t.value,this.setEchars()},getAnnualLeave(t){const e=document.getElementById("annualBar");if(!e)return!1;const n=this.$echarts.init(e,null,{devicePixelRatio:2});let a=[];for(let r in this.leaveDTLMonthYItems)if(this.leaveDTLMonthYItems.hasOwnProperty(r)){const t=this.leaveDTLMonthYItems[r].map((t=>t.total_emp/t.leave_days)).reduce(((t,e)=>t+e),0),e=t?Math.round(t/this.leaveDTLMonthYItems[r].length*100):0;a.push({name:this.getMonth(r),value:e})}let s,o=[];for(let r in this.leaveDTLMonthItems)if(this.leaveDTLMonthItems.hasOwnProperty(r)){const t=this.leaveDTLMonthItems[r].map((t=>t.total_emp/t.leave_days)).reduce(((t,e)=>t+e),0),e=t?Math.round(t/this.leaveDTLMonthItems[r].length*100):0;o.push({name:r,value:e})}s={colors:["#5579ED","#FF860F"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{top:"5%",left:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:24,textStyle:{fontSize:"12",color:"#333333"}},grid:{top:"17%",left:"3%",right:"5%",bottom:"6%",containLabel:!0},yAxis:{type:"value",splitNumber:1,axisLabel:{fontSize:"0",show:!1,color:"transparent"}},xAxis:{type:"category",data:a.map((t=>t.name)),axisTick:{alignWithLabel:!0,count:4},axisLabel:{color:"#666666",fontSize:"10"},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:(new Date).getFullYear(),type:"bar",data:t?o.map((t=>t.value)):[],barWidth:"16",barGap:"30%",itemStyle:{borderRadius:[3,3,3,3],color:"#5579ED"},label:{lineHeight:18,show:!0,formatter:"{c}%",position:"top",color:"#535353",fontSize:"11"}},{name:(new Date).getFullYear()-1,type:"bar",data:t?a.map((t=>t.value)):[],barWidth:"16",barGap:"30%",itemStyle:{borderRadius:[3,3,3,3],color:"#FF860F"},label:{lineHeight:18,show:!0,formatter:"{c}%",position:"top",color:"#535353",fontSize:"11"}}]},s&&"object"===typeof s&&n.setOption(s),window.addEventListener("resize",n.resize)}}},m=u,v=n(845),p=(0,v.A)(m,a,s,!1,null,"41c8f5b6",null),d=p.exports},2407:function(t,e,n){n.d(e,{n7:function(){return s},of:function(){return a},y7:function(){return o},zB:function(){return r}});n(4114);function a(t,e){const n=JSON.parse(JSON.stringify(t)),s=Object.keys(t);return s.forEach((s=>{-1!==[null,void 0,""].indexOf(n[s])?delete n[s]:e&&"object"===typeof t[s]&&!Array.isArray(t[s])&&(n[s]=a(n[s]))})),n}function s(t,e){if(!t)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=new Date(t),s=a.getFullYear(),o=String(a.getMonth()+1).padStart(2,0),r=n[a.getMonth()],i=String(a.getDate()).padStart(2,0),l=String(a.getHours()).padStart(2,0),c=String(a.getMinutes()).padStart(2,0),h=String(a.getSeconds()).padStart(2,0);switch(e){case"slash":return`${s}/${o}/${i}`;case"year":return`${s}`;case"monthN":return`${s}-${o}`;case"month":return`${s}-${r}`;case"monthsh":return`${s}/${o}`;case"day":return`${i}-${o}-${s}`;case"timestamp":return`${s}${o}${i}${l}${c}`;case"obj":return{y:s,m:o,d:i,h:l,min:c,s:h};case"normal":return`${s}-${o}-${i} ${l}:${c}:${h}`;case"normalHours":return`${s}-${o}-${i} ${l}`;case"normalMin":return`${s}-${o}-${i} ${l}:${c}`;case"normalDay":return`${s}-${r}-${i}`;case"normalDay2":return`${s}-${o}-${i}`;default:return`${o}-${i}-${s} ${l}:${c}`}}const o=t=>{const e=new Date(t),n=e.getFullYear(),a=e.getMonth(),s=t=>t%4===0&&t%100!==0||t%400===0,o=[31,s(n)?29:28,31,30,31,30,31,31,30,31,30,31][a];return o},r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t}},8640:function(t,e,n){t.exports=n.p+"img/icon_1.38a41e40.svg"},597:function(t,e,n){t.exports=n.p+"img/select.566d2950.svg"}}]);