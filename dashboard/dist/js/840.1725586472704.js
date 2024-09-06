"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[840],{2840:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.show=!0}}})]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v(t._s(t.selMonth))]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.showMonth=!0}}})])])],1)],1),e("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:t.buLists},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{"min-date":t.minDate,type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(0),e("div",{staticClass:"content-items-title-right"},[e("span",{staticClass:"fs-20"},[t._v("Avg. "+t._s(t.average||0)+"D")])])]),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items",style:{height:35*Object.values(t.leaveStatStatItems)?.length+48+"px"}},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}},[t._v(" Leave By Bu. (This Month) ")])],1),e("div",{staticClass:"recruit-bar",style:{height:35*Object.values(t.leaveStatStatItems)?.length+"px"},attrs:{id:"recruit"}})],1)])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"percentage-box pb-8"},[t._m(1),e("div",{staticClass:"percentage-box-content align-center text-white fs-14 fw-600 percentage-mini percentage-box-content-mini"},[e("div",{staticClass:"percentage-box-items text-center bg-yellow",style:{width:t.managelevel+"%"}},[e("span",[t._v(t._s(t.managelevel)+"%")])]),e("div",{staticClass:"percentage-box-items text-center bg-blue4",style:{width:t.otherlevel+"%"}},[e("span",[t._v(t._s(t.otherlevel)+"%")])])]),e("van-row",{staticClass:"fs-14 lh-32",attrs:{gutter:"16"}},[e("van-col",{staticClass:"text-yellow text-right",style:{width:t.managelevel+"%"}},[t._v("Management")]),e("van-col",{staticClass:"text-blue",style:{width:t.otherlevel+"%"}},[t._v("Non-Management")])],1)],1)])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Apply Number")]),e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(2,!0,!0).number))])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Total Leave Hours")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t.getParental(2,!0,!0).total)+"h")])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",{staticClass:"in-post-items align-center justify-center"},[e("div",{staticClass:"text-center inpost-dec"},[e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(2,!0,!0).per)+"%")]),e("p",[t._v("of female employees have taken maternity leave")])])])])],1)],1)]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Apply Number")]),e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(1,!0,!0).number))])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Total Leave Hours")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t.getParental(1,!0,!0).total)+"h")])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",{staticClass:"in-post-items align-center justify-center"},[e("div",{staticClass:"text-center inpost-dec"},[e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(1,!0,!0).per)+"%")]),e("p",[t._v("of employees have taken parental leave")])])])])],1)],1)]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(4),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Apply Number")]),e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(3,!0,!0).number))])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Total Leave Hours")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t.getParental(3,!0,!0).total)+"h")])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",{staticClass:"in-post-items align-center justify-center"},[e("div",{staticClass:"text-center inpost-dec"},[e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(3,!0,!0).per)+"%")]),e("p",[t._v("of male employees have taken paternity leave")])])])])],1)],1)])],1)},n=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:s(7845)}}),e("span",[t._v("Annual Leave Usage")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Ratio")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:s(6212)}}),e("span",[t._v("Maternity Leaves")])]),e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:s(6212)}}),e("span",[t._v("Parental Leaves")])]),e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:s(6212)}}),e("span",[t._v("Paternity Leaves")])]),e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])])}],i=(s(4114),s(7349)),r=s(3011),o=s(7967),l=s(2407),c=s(8193),h={name:"welfare",components:{Row:i.A,Col:r.A,ActionSheet:o.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,minDate:new Date("1970-01-01"),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,selYear:(0,l.n7)(new Date,"year"),selMonth:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),leaveStatStat:[],average:0,leaveDTL:[],managelevel:0,otherlevel:0,selBu:"Overview",show:!1,buLists:[],returnToWorkPer:0,leaveStatYTD:[]}},created(){this.$nextTick((()=>{this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.selBu="Overview",this.setEchars()}))},watch:{},computed:{leaveStatStatItems(){const t={};return this.leaveStatStat.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[];new Date(this.selMonthN).getMonth();t[e.bu_code].push(e)})),t},employeeList(){return this.hrEmployee.filter((t=>{const e=new Date((0,l.n7)(new Date(t.resign_date),"monthN")).getTime(),s=new Date((0,l.n7)(new Date(t.hire_date),"monthN")).getTime(),a=(0,l.n7)(new Date((new Date).setMonth(new Date(this.selMonthN).getMonth())),"monthN");if(e>new Date(a).getTime()&&s<=new Date(a).getTime()||!t.resign_date&&s<=new Date(a).getTime())return t}))},employee(){return this.hrEmployee.filter((t=>{const e=new Date((0,l.n7)(new Date(t.resign_date),"monthN")).getTime(),s=new Date((0,l.n7)(new Date(t.hire_date),"monthN")).getTime(),a=(0,l.n7)(new Date((new Date).setMonth(new Date(this.selMonthN).getMonth())),"monthN");if(e>new Date(a).getTime()&&s<=new Date(a).getTime()||!t.resign_date&&s<=new Date(a).getTime())return t}))},employeeItemsNow(){const t={};return this.employee.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),t},employeeItems(){const t={};return this.employee.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),Object.values(t)}},methods:{arrDistinct:l.CA,async setEchars(t){this.buEmployeeItems=this.employee,this.getLeaveReturnToWork(),this.getLeaveStatYTD(),await this.getLeaveStat(),await this.getLeaveDTL(),this.getRecruit(!0,t),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getRecruit(!0,!0):this.getRecruit(!1)}))})),this.observer.observe(document.getElementById("recruit"))},async getLeaveReturnToWork(){const t=await c.M1((0,l.of)({...this.$options.data().common}));this.returnToWork=t.rows,this.setReturnToWork()},setReturnToWork(){const t="Overview"===this.selBu?this.returnToWork.filter((t=>t.the_year===this.selYear)):this.returnToWork.filter((t=>t.the_year===this.selYear&&t.bu_code===this.selBu)),e=this.arrDistinct(t,"emp_id"),s=e.filter((t=>"Y"===t.is_return_to_work));this.returnToWorkPer=Math.floor(s.length/e.length*100)||0},async getLeaveStat(){const t=await c.VD((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,l.n7)(new Date(this.selMonthN),"monthN"),end_month:(0,l.n7)(new Date(this.selMonthN),"monthN")}));this.leaveStatStat=t.rows},async getLeaveDTL(){const t=await c.K3((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-01",end_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,l.y7)(this.selMonthN)}));this.leaveDTL=t.rows},async getLeaveStatYTD(){const t=await c.VD((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,l.n7)(new Date(this.selMonthN),"year")+"-01",end_month:(0,l.n7)(new Date(this.selMonthN),"monthN")}));this.leaveStatYTD=t.rows},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,this.selYear=(0,l.n7)(new Date(t),"year"),this.selMonth=(0,l.n7)(new Date(t),"month"),this.selMonthN=(0,l.n7)(new Date(t),"normalDay2"),"Overview"===this.selBu?this.buEmployeeItems=this.employee||[]:this.buEmployeeItems=this.employeeItemsNow[this.selBu]||[],this.buEmployeeItems=[...this.buEmployeeItems],this.setReturnToWork(),this.setEchars(!0)},onSelect(t){this.show=!1,this.selBu=t.value,"Overview"===this.selBu?this.buEmployeeItems=this.employee||[]:this.buEmployeeItems=this.employeeItemsNow[this.selBu]||[],this.buEmployeeItems=[...this.buEmployeeItems],this.setReturnToWork(),this.$nextTick((()=>{this.setEchars(!0)}))},getRecruit(t,e){const s=document.getElementById("recruit");if(!s)return!1;this.myChartRecruit&&this.myChartRecruit.dispose(),this.myChartRecruit=this.$echarts.init(s,null,{devicePixelRatio:2});let a=[];for(let c in this.leaveStatStatItems)if(this.leaveStatStatItems.hasOwnProperty(c)){const t=this.leaveStatStatItems[c].filter((t=>["Annual Leave","J01","J02","J04","J05"].indexOf(t.leave_code)>-1)),e=t.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0),s=e/this.buEmployeeItems.length,n=s||0;a.push({name:c,total:n,value:n.toFixed(2)})}const n=a.map((t=>t.total)).reduce(((t,e)=>t+e),0);this.average=(n/Object.values(this.leaveStatStatItems).length).toFixed(2);const i=this.leaveStatStat.filter((t=>["Annual Leave","J01","J02","J04","J05"].indexOf(t.leave_code)>-1)),r=i.filter((t=>["B","C"].indexOf(t.emp_level)>-1)),o=i.filter((t=>["D","E","F"].indexOf(t.emp_level)>-1));let l;this.managelevel=(r.length/i.length*100).toFixed(2),this.otherlevel=(o.length/i.length*100).toFixed(2),a=[...a].sort(((t,e)=>t.total-e.total)),a.map(((t,e)=>{t.itemStyle=(e+1)%2===0?{color:"#A3CCF8"}:{color:"#5579ED"}})),l={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"16%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:a.map((t=>t.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:t?a:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}D",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},l&&"object"===typeof l&&this.myChartRecruit.setOption(l),window.addEventListener("resize",this.myChartRecruit.resize)},getParental(t,e,s){const a=document.getElementById("parental"+t);if(!a&&!s)return!1;this.myChartParental&&this.myChartParental.dispose();const n=2===t?["Maternity Leave Take","A06"]:3===t?["K001"]:["Paternity Leave Take","A19"],i=this.leaveStatYTD.filter((t=>n.indexOf(t.leave_code)>-1)),r=i.map((t=>t.leave_days)),o=i.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0);if(s)return{per:(r.length/this.employeeList.length*100).toFixed(2),total:o,number:r.length};let l;this.myChartParental=this.$echarts.init(a,null,{devicePixelRatio:2}),l={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"13%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:["On Leave","Leaving"],axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:e?[{value:leaving,itemStyle:{color:"#A3CCF8"}},{value:onLeave,itemStyle:{color:"#5579ED"}}]:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},l&&"object"===typeof l&&this.myChartParental.setOption(l),window.addEventListener("resize",this.myChartParental.resize)}}},u=h,m=s(845),v=(0,m.A)(u,a,n,!1,null,"74bbc905",null),p=v.exports},2407:function(t,e,s){s.d(e,{CA:function(){return l},a5:function(){return o},n7:function(){return n},of:function(){return a},y7:function(){return i},zB:function(){return r}});s(4114);function a(t,e){const s=JSON.parse(JSON.stringify(t)),n=Object.keys(t);return n.forEach((n=>{-1!==[null,void 0,""].indexOf(s[n])?delete s[n]:e&&"object"===typeof t[n]&&!Array.isArray(t[n])&&(s[n]=a(s[n]))})),s}function n(t,e){if(!t)return"";const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],n=new Date(t),i=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,0),o=s[n.getMonth()],l=a[n.getMonth()],c=String(n.getDate()).padStart(2,0),h=String(n.getHours()).padStart(2,0),u=String(n.getMinutes()).padStart(2,0),m=String(n.getSeconds()).padStart(2,0);switch(e){case"slash":return`${i}/${r}/${c}`;case"year":return`${i}`;case"monthN":return`${i}-${r}`;case"monthLong":return`${i}-${l}`;case"month":return`${i}-${o}`;case"monthsh":return`${i}/${r}`;case"day":return`${c}-${r}-${i}`;case"timestamp":return`${i}${r}${c}${h}${u}`;case"obj":return{y:i,m:r,d:c,h:h,min:u,s:m};case"normal":return`${i}-${r}-${c} ${h}:${u}:${m}`;case"normalHours":return`${i}-${r}-${c} ${h}`;case"normalMin":return`${i}-${r}-${c} ${h}:${u}`;case"normalDay":return`${i}-${o}-${c}`;case"normalDay2":return`${i}-${r}-${c}`;case"normalDay3":return`${i}-${l}-${c}`;case"normalDay4":return`${i}/${l}/${c}`;default:return`${r}-${c}-${i} ${h}:${u}`}}const i=t=>{const e=new Date(t),s=e.getFullYear(),a=e.getMonth(),n=t=>t%4===0&&t%100!==0||t%400===0,i=[31,n(s)?29:28,31,30,31,30,31,31,30,31,30,31][a];return i},r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},o=(t,e,s)=>{const a=s?new Date(s):new Date,n=a.getFullYear(),i=a.getMonth()-(e||0),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let c=5;c>=0;c--){const e=i-c<0?n-1:n,s=(i-c+12)%12,a=t?o[s]:r[s],h=`${e}-${a}`;l.push(h)}return l},l=(t,e)=>{let s=t.reduce(((t,s)=>{const a=t.find((t=>t[e]===s[e]));return a?t:t.concat([s])}),[]);return s}},597:function(t,e,s){t.exports=s.p+"img/select.566d2950.svg"},7845:function(t,e,s){t.exports=s.p+"img/icon_4.66c1ca19.svg"},6212:function(t,e,s){t.exports=s.p+"img/icon_5.cfa11238.svg"}}]);