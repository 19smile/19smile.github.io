"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[149],{1149:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("van-sticky",{attrs:{"offset-top":48}},[t("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[t("van-col",{attrs:{span:"12"}},[t("span",{on:{click:function(t){e.show=!0}}},[e._v("Select BU |")]),t("span",{staticClass:"ml-8",on:{click:function(t){e.show=!0}}},[e._v(e._s(e.selBu))]),t("img",{attrs:{width:"24px",src:n(597)},on:{click:function(t){e.show=!0}}})]),t("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[t("div",{staticClass:"sel-month"},[t("span",{on:{click:function(t){e.showMonth=!0}}},[e._v(e._s(e.selYear))]),t("img",{attrs:{width:"24px",src:n(597)},on:{click:function(t){e.showMonth=!0}}})])])],1)],1),t("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:e.buLists},on:{select:e.onSelect},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),t("van-action-sheet",{attrs:{round:!1},model:{value:e.showMonth,callback:function(t){e.showMonth=t},expression:"showMonth"}},[t("van-datetime-picker",{attrs:{"min-date":e.minDate,type:"year-month",formatter:e.formatter},on:{confirm:e.confirm,cancel:function(t){e.showMonth=!1}},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[e._m(0),t("van-row",{staticClass:"calendar-content",attrs:{gutter:"16"}},e._l(e.leaveMonth,(function(n,a){return t("van-col",{key:a,staticClass:"calendar-list",attrs:{span:"6"}},[t("div",{class:[n.value>50?"danger":"success"]},[t("div",{staticClass:"calendar-text text-center"},[t("p",{staticClass:"fs-24"},[e._v(e._s(n.value||"-")+e._s(n.value?"%":""))]),t("p",{staticClass:"fs-14"},[e._v(e._s(e.getMonth(n.name)))])])])])})),1)],1),e._m(1)])],1)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(8640)}}),t("span",[e._v("Leave Apply Calendar")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-content mt-12"},[t("div",{staticClass:"content-items-title"},[t("span",[e._v("Annual Leave Apply")])]),t("div",{staticClass:"monthy"},[t("div",{staticClass:"monthy-bar",staticStyle:{height:"252px"},attrs:{id:"annualBar"}})])])}],o=(n(4114),n(7349)),r=n(3011),i=n(7691),l=n(9941),c=n(2407),h=n(8193),u={name:"leaveUsage",components:{Row:o.A,Col:r.A,Swipe:i.A,SwipeItem:l.A},data(){const e={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...e,selBu:"",selYear:(0,c.n7)(new Date,"year"),selMonth:(0,c.n7)(new Date,"month"),selMonthN:(0,c.n7)(new Date,"normalDay2"),leaveDTL:[],leaveDTLMonth:[],show:!1,currentDate:new Date,showMonth:!1,colors:(0,c.zB)(),minDate:new Date("1970-01-01")}},computed:{leaveDTLItems(){return this.leaveDTLMonth.filter((e=>["Sick Leave","Annual Leave"].indexOf(e.leave_code)>-1))},leaveDTLMonthItems(){const e={};return this.leaveDTLItems.forEach((t=>{e[t.the_month]=e[t.the_month]||[],e[t.the_month].push(t)})),e},leaveMonth(){let e=[];for(let t in this.leaveDTLMonthItems)if(this.leaveDTLMonthItems.hasOwnProperty(t)){const n=this.leaveDTLMonthItems[t].filter((e=>e.sickleave_should_used_days||e.annualleave_should_used_days)),a=n.map((e=>(e.leave_days||0)/(e.sickleave_should_used_days||0+e.annualleave_should_used_days||0))).reduce(((e,t)=>e+t),0),s=a?Math.round(a/this.leaveDTLMonthItems[t].length*100):0;e.push({name:t,value:s})}return e},leaveMonthYItems(){return this.leaveDTLMonthY.filter((e=>["Sick Leave","Annual Leave"].indexOf(e.leave_code)>-1))},leaveDTLMonthYItems(){const e={};return this.leaveMonthYItems.forEach((t=>{e[t.the_month]=e[t.the_month]||[],e[t.the_month].push(t)})),e}},created(){this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.$nextTick((()=>{this.selBu="Overview",this.selYear=(0,c.n7)(new Date,"year"),this.setEchars()}))},watch:{},methods:{getDaysInCurrentMonth:c.y7,getEmployee(e){return this.hrEmployee.filter((t=>t.emp_id===e.emp_id))?.[0]},getMonth(e){return new Date(e).toLocaleDateString("en-US",{month:"short"})},async getLeaveByMonth(){const e=await h.VD((0,c.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,c.n7)(new Date(this.selMonthN),"year")+"-1",end_month:(0,c.n7)(new Date(this.selMonthN),"year")+"-12"}));this.leaveDTLMonth=e.rows;const t=new Date(this.selMonthN),n=new Date(t.setFullYear(t.getFullYear()-1)),a=await h.VD((0,c.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,c.n7)(new Date(n),"year")+"-1",end_month:(0,c.n7)(new Date(n),"year")+"-12"}));this.leaveDTLMonthY=a.rows},async setEchars(){await this.getLeaveByMonth(),this.getAnnualLeave(!0),this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getAnnualLeave(!0):this.getAnnualLeave(!1)}))})),this.observer.observe(document.getElementById("annualBar"))},formatter(e,t){return"year"===e?`${t}年`:"month"===e?"":t},confirm(e){this.showMonth=!1,this.selYear=(0,c.n7)(new Date(e),"year"),this.selMonth=(0,c.n7)(new Date(e),"month"),this.selMonthN=(0,c.n7)(new Date(e),"normalDay2"),this.setEchars()},onSelect(e){this.show=!1,this.selBu=e.value,this.setEchars()},getAnnualLeave(e){const t=document.getElementById("annualBar");if(!t)return!1;const n=this.$echarts.init(t,null,{devicePixelRatio:2});let a=[];for(let r in this.leaveDTLMonthYItems)if(this.leaveDTLMonthYItems.hasOwnProperty(r)){const e=this.leaveDTLMonthYItems[r].filter((e=>e.sickleave_should_used_days||e.annualleave_should_used_days)),t=e.map((e=>(e.leave_days||0)/(e.sickleave_should_used_days||0+e.annualleave_should_used_days||0))).reduce(((e,t)=>e+t),0),n=t?Math.round(t/this.leaveDTLMonthYItems[r].length*100):0;a.push({name:this.getMonth(r),value:n})}let s,o=[];for(let r in this.leaveDTLMonthItems)if(this.leaveDTLMonthItems.hasOwnProperty(r)){const e=this.leaveDTLMonthItems[r].filter((e=>e.sickleave_should_used_days||e.annualleave_should_used_days)),t=e.map((e=>(e.leave_days||0)/(e.sickleave_should_used_days||0+e.annualleave_should_used_days||0))).reduce(((e,t)=>e+t),0),n=t?Math.round(t/this.leaveDTLMonthItems[r].length*100):0;o.push({name:r,value:n})}s={colors:["#5579ED","#FF860F"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{top:"5%",left:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:24,textStyle:{fontSize:"12",color:"#333333"}},grid:{top:"17%",left:"3%",right:"5%",bottom:"6%",containLabel:!0},yAxis:{type:"value",splitNumber:1,axisLabel:{fontSize:"0",show:!1,color:"transparent"}},xAxis:{type:"category",data:a.map((e=>e.name)),axisTick:{alignWithLabel:!0,count:4},axisLabel:{color:"#666666",fontSize:"10"},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:new Date(this.selYear).getFullYear(),type:"bar",data:e?o.map((e=>e.value)):[],barWidth:"16",barGap:"30%",itemStyle:{borderRadius:[3,3,3,3],color:"#5579ED"},label:{lineHeight:18,show:!0,formatter:"{c}%",position:"top",color:"#535353",fontSize:"11"}},{name:new Date(this.selYear).getFullYear()-1,type:"bar",data:e?a.map((e=>e.value)):[],barWidth:"16",barGap:"30%",itemStyle:{borderRadius:[3,3,3,3],color:"#FF860F"},label:{lineHeight:18,show:!0,formatter:"{c}%",position:"top",color:"#535353",fontSize:"11"}}]},s&&"object"===typeof s&&n.setOption(s),window.addEventListener("resize",n.resize)}}},d=u,m=n(845),v=(0,m.A)(d,a,s,!1,null,"33f459b2",null),p=v.exports},2407:function(e,t,n){n.d(t,{a5:function(){return i},n7:function(){return s},of:function(){return a},y7:function(){return o},zB:function(){return r}});n(4114);function a(e,t){const n=JSON.parse(JSON.stringify(e)),s=Object.keys(e);return s.forEach((s=>{-1!==[null,void 0,""].indexOf(n[s])?delete n[s]:t&&"object"===typeof e[s]&&!Array.isArray(e[s])&&(n[s]=a(n[s]))})),n}function s(e,t){if(!e)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=new Date(e),s=a.getFullYear(),o=String(a.getMonth()+1).padStart(2,0),r=n[a.getMonth()],i=String(a.getDate()).padStart(2,0),l=String(a.getHours()).padStart(2,0),c=String(a.getMinutes()).padStart(2,0),h=String(a.getSeconds()).padStart(2,0);switch(t){case"slash":return`${s}/${o}/${i}`;case"year":return`${s}`;case"monthN":return`${s}-${o}`;case"month":return`${s}-${r}`;case"monthsh":return`${s}/${o}`;case"day":return`${i}-${o}-${s}`;case"timestamp":return`${s}${o}${i}${l}${c}`;case"obj":return{y:s,m:o,d:i,h:l,min:c,s:h};case"normal":return`${s}-${o}-${i} ${l}:${c}:${h}`;case"normalHours":return`${s}-${o}-${i} ${l}`;case"normalMin":return`${s}-${o}-${i} ${l}:${c}`;case"normalDay":return`${s}-${r}-${i}`;case"normalDay2":return`${s}-${o}-${i}`;default:return`${o}-${i}-${s} ${l}:${c}`}}const o=e=>{const t=new Date(e),n=t.getFullYear(),a=t.getMonth(),s=e=>e%4===0&&e%100!==0||e%400===0,o=[31,s(n)?29:28,31,30,31,30,31,31,30,31,30,31][a];return o},r=()=>{let e=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return e},i=e=>{const t=new Date,n=t.getFullYear(),a=t.getMonth(),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=[];for(let i=5;i>=0;i--){const t=a-i<0?n-1:n,l=(a-i+12)%12,c=e?o[l]:s[l],h=`${t}-${c}`;r.push(h)}return r}},8640:function(e,t,n){e.exports=n.p+"img/icon_1.38a41e40.svg"},597:function(e,t,n){e.exports=n.p+"img/select.566d2950.svg"}}]);