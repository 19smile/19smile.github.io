"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[933],{4933:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:a(597)},on:{click:function(e){t.show=!0}}})]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v(t._s(t.selMonth))]),e("img",{attrs:{width:"24px",src:a(597)},on:{click:function(e){t.showMonth=!0}}})])])],1)],1),e("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:t.buLists},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{"min-date":t.minDate,type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(0),e("div",{staticClass:"content-items-title-right"},[e("span",{staticClass:"fs-20"},[t._v("Avg. "+t._s(t.average||0)+"%")])])]),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items",style:{height:35*Object.values(t.leaveStatStatItems)?.length+48+"px"}},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}},[t._v(" Leave By Bu. ")])],1),e("div",{staticClass:"recruit-bar",style:{height:35*Object.values(t.leaveStatStatItems)?.length+"px"},attrs:{id:"recruit"}})],1)])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"percentage-box pb-8"},[t._m(1),e("div",{staticClass:"percentage-box-content align-center text-white fs-14 fw-600 percentage-mini percentage-box-content-mini"},[e("div",{staticClass:"percentage-box-items text-center bg-yellow",style:{width:t.managelevel+"%"}},[e("span",[t._v(t._s(t.managelevel)+"%")])]),e("div",{staticClass:"percentage-box-items text-center bg-blue4",style:{width:t.otherlevel+"%"}},[e("span",[t._v(t._s(t.otherlevel)+"%")])])]),e("van-row",{staticClass:"fs-14 lh-32",attrs:{gutter:"16"}},[e("van-col",{staticClass:"text-yellow text-right",style:{width:t.managelevel+"%"}},[t._v("Management")]),e("van-col",{staticClass:"text-blue",style:{width:t.otherlevel+"%"}},[t._v("Non-Management")])],1)],1)])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Apply Number")]),e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(2,!0,!0).number))])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Total Leave Hours")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t.getParental(2,!0,!0).total)+"h")])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",{staticClass:"in-post-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(2,!0,!0).per)+"%")]),e("p",[t._v("Leave Usage")])])])])],1)],1)]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Apply Number")]),e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(1,!0,!0).number))])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Total Leave Hours")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t.getParental(1,!0,!0).total)+"h")])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",{staticClass:"in-post-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",{staticClass:"text-blue number"},[t._v(t._s(t.getParental(1,!0,!0).per)+"%")]),e("p",[t._v("Leave Usage")])])])])],1)],1)])],1)},n=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:a(7845)}}),e("span",[t._v("Annual Leave Usage")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Ratio")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:a(6212)}}),e("span",[t._v("Maternity Leaves")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:a(6212)}}),e("span",[t._v("Parental Leaves")])])])}],i=(a(4114),a(7349)),o=a(3011),r=a(7967),l=a(2407),c=a(8193),h={name:"welfare",components:{Row:i.A,Col:o.A,ActionSheet:r.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,minDate:new Date("1970-01-01"),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,selYear:(0,l.n7)(new Date,"year"),selMonth:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),leaveStatStat:[],average:0,leaveDTL:[],managelevel:0,otherlevel:0,selBu:"Overview",show:!1}},created(){this.$nextTick((()=>{this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.selBu="Overview",this.setEchars()}))},watch:{},computed:{leaveStatStatItems(){const t={};return this.leaveStatStat.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[];new Date(this.selMonthN).getMonth();t[e.bu_code].push(e)})),t},employeeList(){return this.hrEmployee.filter((t=>{const e=new Date((0,l.n7)(new Date(t.resign_date),"monthN")).getTime(),a=new Date((0,l.n7)(new Date(t.hire_date),"monthN")).getTime(),s=(0,l.n7)(new Date((new Date).setMonth(new Date(this.selMonthN).getMonth())),"monthN");if(e>new Date(s).getTime()&&a<=new Date(s).getTime()||!t.resign_date&&a<=new Date(s).getTime())return t}))}},methods:{async setEchars(t){await this.getLeaveStat(),await this.getLeaveDTL(),this.getRecruit(!0,t),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getRecruit(!0,!0):this.getRecruit(!1)}))})),this.observer.observe(document.getElementById("recruit"))},async getLeaveStat(){const t=await c.VD((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,l.n7)((new Date).setMonth(0),"monthN"),end_month:(0,l.n7)(new Date(this.selMonthN),"monthN")}));this.leaveStatStat=t.rows},async getLeaveDTL(){const t=await c.K3((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-01",end_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,l.y7)(this.selMonthN)}));this.leaveDTL=t.rows},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,this.selYear=(0,l.n7)(new Date(t),"year"),this.selMonth=(0,l.n7)(new Date(t),"month"),this.selMonthN=(0,l.n7)(new Date(t),"normalDay2"),this.setEchars(!0)},onSelect(t){this.show=!1,this.selBu=t.value,this.$nextTick((()=>{this.setEchars(!0)}))},getRecruit(t,e){const a=document.getElementById("recruit");if(!a)return!1;const s=this.$echarts.init(a,null,{devicePixelRatio:2});let n=[];for(let h in this.leaveStatStatItems)if(this.leaveStatStatItems.hasOwnProperty(h)){const t=this.leaveStatStatItems[h].filter((t=>"Annual Leave"===t.leave_code)),e=t.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0),a=t.map((t=>t.annualleave_should_used_days)).reduce(((t,e)=>t+e),0),s=e/a,i=s?Math.round(100*s):0;n.push({name:h,total:i,value:i.toFixed(2)})}const i=n.map((t=>t.total)).reduce(((t,e)=>t+e),0);this.average=(i/Object.values(this.leaveStatStatItems).length).toFixed(2);const o=this.leaveStatStat.filter((t=>"Annual Leave"===t.leave_code)),r=o.filter((t=>["B","C"].indexOf(t.emp_level)>-1)),l=o.filter((t=>["D","E","F"].indexOf(t.emp_level)>-1));let c;if(this.managelevel=(r.length/o.length*100).toFixed(2),this.otherlevel=(l.length/o.length*100).toFixed(2),n=[...n].sort(((t,e)=>t.total-e.total)),n.map(((t,e)=>{t.itemStyle=(e+1)%2===0?{color:"#A3CCF8"}:{color:"#5579ED"}})),c={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"16%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:n.map((t=>t.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:t?n:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},c&&"object"===typeof c&&s.setOption(c),window.addEventListener("resize",s.resize),!e)return!1;setTimeout((function(){s.resize()}),500)},getParental(t,e,a){const s=document.getElementById("parental"+t);if(!s&&!a)return!1;const n=2===t?["Paternity Leave Take","A19"]:["Maternity Leave Take","A06"],i=this.leaveDTL.filter((t=>n.indexOf(t.leave_code)>-1)),o=(0,l.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,l.y7)(this.selMonthN);let r=i.filter((t=>new Date(t.the_day).getTime()-new Date(o).getTime()>0)),c=i.filter((t=>new Date(t.the_day).getTime()-new Date(o).getTime()<=0&&new Date(o).getTime()-new Date(t.the_day).getTime()<=1e3*t.leave_days*60*60*24));const h=(r.length/this.employeeList.length*100).toFixed(2),u=(c.length/this.employeeList.length*100).toFixed(2);if(a)return{per:((r.length+c.length)/this.employeeList.length*100).toFixed(2),total:r.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0)+c.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0),number:r.length+c.length};const v=this.$echarts.init(s,null,{devicePixelRatio:2});let m;m={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"13%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:["On Leave","Leaving"],axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:e?[{value:h,itemStyle:{color:"#A3CCF8"}},{value:u,itemStyle:{color:"#5579ED"}}]:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},m&&"object"===typeof m&&v.setOption(m),window.addEventListener("resize",v.resize)}}},u=h,v=a(845),m=(0,v.A)(u,s,n,!1,null,"6cb842e8",null),d=m.exports},2407:function(t,e,a){a.d(e,{a5:function(){return r},n7:function(){return n},of:function(){return s},y7:function(){return i},zB:function(){return o}});a(4114);function s(t,e){const a=JSON.parse(JSON.stringify(t)),n=Object.keys(t);return n.forEach((n=>{-1!==[null,void 0,""].indexOf(a[n])?delete a[n]:e&&"object"===typeof t[n]&&!Array.isArray(t[n])&&(a[n]=s(a[n]))})),a}function n(t,e){if(!t)return"";const a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],n=new Date(t),i=n.getFullYear(),o=String(n.getMonth()+1).padStart(2,0),r=a[n.getMonth()],l=s[n.getMonth()],c=String(n.getDate()).padStart(2,0),h=String(n.getHours()).padStart(2,0),u=String(n.getMinutes()).padStart(2,0),v=String(n.getSeconds()).padStart(2,0);switch(e){case"slash":return`${i}/${o}/${c}`;case"year":return`${i}`;case"monthN":return`${i}-${o}`;case"monthLong":return`${i}-${l}`;case"month":return`${i}-${r}`;case"monthsh":return`${i}/${o}`;case"day":return`${c}-${o}-${i}`;case"timestamp":return`${i}${o}${c}${h}${u}`;case"obj":return{y:i,m:o,d:c,h:h,min:u,s:v};case"normal":return`${i}-${o}-${c} ${h}:${u}:${v}`;case"normalHours":return`${i}-${o}-${c} ${h}`;case"normalMin":return`${i}-${o}-${c} ${h}:${u}`;case"normalDay":return`${i}-${r}-${c}`;case"normalDay2":return`${i}-${o}-${c}`;case"normalDay3":return`${i}-${l}-${c}`;case"normalDay4":return`${i}/${l}/${c}`;default:return`${o}-${c}-${i} ${h}:${u}`}}const i=t=>{const e=new Date(t),a=e.getFullYear(),s=e.getMonth(),n=t=>t%4===0&&t%100!==0||t%400===0,i=[31,n(a)?29:28,31,30,31,30,31,31,30,31,30,31][s];return i},o=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},r=(t,e,a)=>{const s=a?new Date(a):new Date,n=s.getFullYear(),i=s.getMonth()-(e||0),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let c=5;c>=0;c--){const e=i-c<0?n-1:n,a=(i-c+12)%12,s=t?r[a]:o[a],h=`${e}-${s}`;l.push(h)}return l}},597:function(t,e,a){t.exports=a.p+"img/select.566d2950.svg"},7845:function(t,e,a){t.exports=a.p+"img/icon_4.66c1ca19.svg"},6212:function(t,e,a){t.exports=a.p+"img/icon_5.cfa11238.svg"}}]);