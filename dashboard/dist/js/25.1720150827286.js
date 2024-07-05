"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[25],{25:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"fs-20"},[t._v("Overview")])]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v(t._s(t.selMonth))]),e("img",{attrs:{width:"24px",src:a(597)},on:{click:function(e){t.showMonth=!0}}})])])],1)],1),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{"min-date":t.minDate,type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(0),e("div",{staticClass:"content-items-title-right"},[e("span",{staticClass:"fs-20"},[t._v("Avg. "+t._s(t.average||0)+"%")])])]),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items",style:{height:35*Object.values(t.leaveStatStatItems)?.length+48+"px"}},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}},[t._v(" Leave By Bu. ")])],1),e("div",{staticClass:"recruit-bar",style:{height:35*Object.values(t.leaveStatStatItems)?.length+"px"},attrs:{id:"recruit"}})],1)])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"percentage-box pb-8"},[t._m(1),e("div",{staticClass:"percentage-box-content align-center text-white fs-14 fw-600 percentage-mini percentage-box-content-mini"},[e("div",{staticClass:"percentage-box-items text-center bg-yellow",style:{width:t.managelevel+"%"}},[e("span",[t._v(t._s(t.managelevel)+"%")])]),e("div",{staticClass:"percentage-box-items text-center bg-blue4",style:{width:t.otherlevel+"%"}},[e("span",[t._v(t._s(t.otherlevel)+"%")])])]),e("van-row",{staticClass:"fs-14 lh-32",attrs:{gutter:"16"}},[e("van-col",{staticClass:"text-yellow text-right",style:{width:t.managelevel+"%"}},[t._v("Management")]),e("van-col",{staticClass:"text-blue",style:{width:t.otherlevel+"%"}},[t._v("Non-Management")])],1)],1)])]),e("div",{directives:[{name:"show",rawName:"v-show"}],staticClass:"content-items",attrs:{false:""}},[e("div",{staticClass:"content-items-content"},[t._m(2),e("div",{staticClass:"recruit parental"},[e("div",{staticClass:"recruit-items"},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}},[t._v(" Maternity Leave ")])],1),e("div",{staticClass:"recruit-bar",attrs:{id:"parental"}})],1)]),e("div",{staticClass:"recruit parental mt-16"},[e("div",{staticClass:"recruit-items"},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}},[t._v(" Childcare Leave ")])],1),e("div",{staticClass:"recruit-bar",attrs:{id:"parental2"}})],1)])])])],1)},s=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:a(7845)}}),e("span",[t._v("Annual Leave Usage")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Ratio")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("div",[e("img",{attrs:{width:"24px",src:a(6212)}}),e("span",[t._v("Parental Leave Usage")])])])}],i=(a(4114),a(8525)),r=a(7819),o=a(6647),l=a(4175),c=a(5810),h={name:"welfare",components:{Row:i.A,Col:r.A,ActionSheet:o.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,minDate:new Date("1970-01-01"),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,selYear:(0,l.n7)(new Date,"year"),selMonth:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),leaveStatStat:[],average:0,leaveDTL:[],managelevel:0,otherlevel:0}},created(){this.$nextTick((()=>{this.setEchars()}))},watch:{},computed:{leaveStatStatItems(){const t={};return this.leaveStatStat.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[];new Date(this.selMonthN).getMonth();t[e.bu_code].push(e)})),t},employeeList(){return this.hrEmployee.filter((t=>{const e=new Date((0,l.n7)(new Date(t.resign_date),"monthN")).getTime(),a=new Date((0,l.n7)(new Date(t.hire_date),"monthN")).getTime(),n=(0,l.n7)(new Date((new Date).setMonth(new Date(this.selMonthN).getMonth())),"monthN");if(e>new Date(n).getTime()&&a<=new Date(n).getTime()||!t.resign_date&&a<=new Date(n).getTime())return t}))}},methods:{async setEchars(t){await this.getLeaveStat(),await this.getLeaveDTL(),this.getRecruit(!0,t),this.getParental("",!0),this.getParental("2",!0),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getRecruit(!0,!0):this.getRecruit(!1)}))})),this.observer.observe(document.getElementById("recruit")),this.observer2=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getParental("",!0):this.getParental("",!1)}))})),this.observer2.observe(document.getElementById("parental")),this.observer3=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getParental("2",!0):this.getParental("2",!1)}))})),this.observer3.observe(document.getElementById("parental2"))},async getLeaveStat(){const t=await c.VD((0,l.of)({...this.$options.data().common,bu_code:this.selBu,begin_month:(0,l.n7)(new Date(this.selMonthN),"monthN"),end_month:(0,l.n7)(new Date(this.selMonthN),"monthN")}));this.leaveStatStat=t.rows},async getLeaveDTL(){const t=await c.K3((0,l.of)({...this.$options.data().common,begin_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-01",end_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,l.y7)(this.selMonthN)}));this.leaveDTL=t.rows},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,this.selYear=(0,l.n7)(new Date(t),"year"),this.selMonth=(0,l.n7)(new Date(t),"month"),this.selMonthN=(0,l.n7)(new Date(t),"normalDay2"),this.setEchars(!0)},getRecruit(t,e){const a=document.getElementById("recruit");if(!a)return!1;const n=this.$echarts.init(a,null,{devicePixelRatio:2});let s=[];for(let h in this.leaveStatStatItems)if(this.leaveStatStatItems.hasOwnProperty(h)){const t=this.leaveStatStatItems[h].filter((t=>"Annual Leave"===t.leave_code)),e=t.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0),a=t.map((t=>t.annualleave_should_used_days)).reduce(((t,e)=>t+e),0),n=e/a,i=n?Math.round(100*n):0;s.push({name:h,total:i,value:i.toFixed(2)})}const i=s.map((t=>t.total)).reduce(((t,e)=>t+e),0);this.average=(i/Object.values(this.leaveStatStatItems).length).toFixed(2);const r=this.leaveStatStat.filter((t=>"Annual Leave"===t.leave_code)),o=r.filter((t=>["B","C"].indexOf(t.emp_level)>-1)),l=r.filter((t=>["D","E","F"].indexOf(t.emp_level)>-1));let c;if(this.managelevel=(o.length/r.length*100).toFixed(2),this.otherlevel=(l.length/r.length*100).toFixed(2),s=[...s].sort(((t,e)=>t.total-e.total)),s.map(((t,e)=>{t.itemStyle=(e+1)%2===0?{color:"#A3CCF8"}:{color:"#5579ED"}})),c={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"16%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:s.map((t=>t.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:t?s:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},c&&"object"===typeof c&&n.setOption(c),window.addEventListener("resize",n.resize),!e)return!1;setTimeout((function(){n.resize()}),500)},getParental(t,e){const a=document.getElementById("parental"+t);if(!a)return!1;const n=this.$echarts.init(a,null,{devicePixelRatio:2}),s=2===t?["Paternity Leave Take","A19"]:["Maternity Leave Take","A06"],i=this.leaveDTL.filter((t=>s.indexOf(t.leave_code)>-1)),r=(0,l.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,l.y7)(this.selMonthN),o=i.filter((t=>new Date(t.the_day).getTime()-new Date(r).getTime()>0));console.log(o);const c=i.filter((t=>new Date(t.the_day).getTime()-new Date(r).getTime()<=0&&new Date(r).getTime()-new Date(t.the_day).getTime()<=1e3*t.leave_days*60*60*24)),h=(o.length/this.employeeList.length*100).toFixed(2),u=(c.length/this.employeeList.length*100).toFixed(2);let m;m={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"13%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:["On Leave","Leaving"],axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:e?[{value:h,itemStyle:{color:"#A3CCF8"}},{value:u,itemStyle:{color:"#5579ED"}}]:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},m&&"object"===typeof m&&n.setOption(m),window.addEventListener("resize",n.resize)}}},u=h,m=a(845),v=(0,m.A)(u,n,s,!1,null,"618b6aca",null),d=v.exports},4175:function(t,e,a){a.d(e,{a5:function(){return o},n7:function(){return s},of:function(){return n},y7:function(){return i},zB:function(){return r}});a(4114);function n(t,e){const a=JSON.parse(JSON.stringify(t)),s=Object.keys(t);return s.forEach((s=>{-1!==[null,void 0,""].indexOf(a[s])?delete a[s]:e&&"object"===typeof t[s]&&!Array.isArray(t[s])&&(a[s]=n(a[s]))})),a}function s(t,e){if(!t)return"";const a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],s=new Date(t),i=s.getFullYear(),r=String(s.getMonth()+1).padStart(2,0),o=a[s.getMonth()],l=n[s.getMonth()],c=String(s.getDate()).padStart(2,0),h=String(s.getHours()).padStart(2,0),u=String(s.getMinutes()).padStart(2,0),m=String(s.getSeconds()).padStart(2,0);switch(e){case"slash":return`${i}/${r}/${c}`;case"year":return`${i}`;case"monthN":return`${i}-${r}`;case"monthLong":return`${i}-${l}`;case"month":return`${i}-${o}`;case"monthsh":return`${i}/${r}`;case"day":return`${c}-${r}-${i}`;case"timestamp":return`${i}${r}${c}${h}${u}`;case"obj":return{y:i,m:r,d:c,h:h,min:u,s:m};case"normal":return`${i}-${r}-${c} ${h}:${u}:${m}`;case"normalHours":return`${i}-${r}-${c} ${h}`;case"normalMin":return`${i}-${r}-${c} ${h}:${u}`;case"normalDay":return`${i}-${o}-${c}`;case"normalDay2":return`${i}-${r}-${c}`;default:return`${r}-${c}-${i} ${h}:${u}`}}const i=t=>{const e=new Date(t),a=e.getFullYear(),n=e.getMonth(),s=t=>t%4===0&&t%100!==0||t%400===0,i=[31,s(a)?29:28,31,30,31,30,31,31,30,31,30,31][n];return i},r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},o=(t,e)=>{const a=new Date,n=a.getFullYear(),s=a.getMonth()-(e||0),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["January","February","March","April","May","June","July","August","September","October","November","December"];let o=[];for(let l=5;l>=0;l--){const e=s-l<0?n-1:n,a=(s-l+12)%12,c=t?r[a]:i[a],h=`${e}-${c}`;o.push(h)}return o}},597:function(t,e,a){t.exports=a.p+"img/select.b6d4fedc.svg"},7845:function(t,e,a){t.exports=a.p+"img/icon_4.9f78d5e5.svg"},6212:function(t,e,a){t.exports=a.p+"img/icon_5.432ddc1f.svg"}}]);