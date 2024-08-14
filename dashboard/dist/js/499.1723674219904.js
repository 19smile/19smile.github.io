"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[499],{6499:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[t._m(0),t._m(1),e("div",{staticClass:"pt-16"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:n(597)},on:{click:function(e){t.show=!0}}})]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v(t._s(t.selMonth))]),e("img",{attrs:{width:"24px",src:n(597)},on:{click:function(e){t.showMonth=!0}}})])])],1)],1),e("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:t.buList},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{"min-date":t.minDate,type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items",style:{height:35*t.leaveDTLSickItemsByDept.length+48+"px"}},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"24"}},[t._v(" Dept Sick Leave By Dept. ")])],1),e("div",{staticClass:"recruit-bar",style:{height:35*t.leaveDTLSickItemsByDept.length+"px"},attrs:{id:"leaveDTLSickItemsByDept"}})],1)])]),e("div",{staticClass:"content-items-content mt-16"},[t._m(3),e("div",{staticClass:"card-list fs-14"},[t._l(t.leaveDTLSickItems,(function(n,s){return[s<10?e("van-row",{key:n?.item?.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[e("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[e("div",{staticClass:"card-list-left-content"},[e("div",{staticClass:"card-list-left-logo"},[e("img",{attrs:{width:"100%",src:t.getEmployee(n?.item)?.img_url}})]),e("div",{staticClass:"card-list-left-text"},[e("p",[t._v(t._s(t.getEmployee(n?.item)?.name_en))]),e("p",{staticClass:"fs-12"},[t._v(t._s(t.getEmployee(n?.item)?.dept_code))])])])]),e("van-col",{staticClass:"card-list-right text-right fs-16 fw-600",class:["text-danger2"],attrs:{span:"6"}},[t._v(" "+t._s(n?.value)+"D/12D ")])],1):t._e()]}))],2)])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(5513)}}),e("span",[t._v("Monthy Leave Trend")])]),e("div",{staticClass:"monthy"},[e("div",{staticClass:"monthy-bar",attrs:{id:"monthyBar"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(5683)}}),e("span",[t._v("Sick Leave Trend")])]),e("div",{staticClass:"monthy"},[e("div",{staticClass:"monthy-bar",attrs:{id:"sickBar"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(5683)}}),e("span",[t._v("Dept Sick Leave Trend")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(1042)}}),e("span",[t._v("Sick Leave Detail")])])}],o=(n(4114),n(7349)),i=n(3011),r=n(7691),c=n(9941),l=n(7967),h=n(2407),m=n(8193),u={name:"attendanceCoreKPI",components:{Row:o.A,Col:i.A,Swipe:r.A,SwipeItem:c.A,ActionSheet:l.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,show:!1,minDate:new Date("1970-01-01"),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,colors:(0,h.zB)(),leaveDTLMonth:[],leaveDTL:[],selBu:"",selMonth:(0,h.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,h.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),leaveDTLSelMonth:[]}},computed:{employeeItems(){const t={};return this.hrEmployee.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),Object.values(t)},employeeList(){const t={};let e=new Date;for(let n in this.employeeItems){let s=[];t[this.employeeItems[n]?.[0].bu_code]=[];for(let a=0;a<6;a++)s=this.employeeItems[n].filter((t=>{const n=new Date((0,h.n7)(new Date(t.resign_date),"monthN")).getTime(),s=new Date((0,h.n7)(new Date(t.hire_date),"monthN")).getTime(),o=new Date((0,h.n7)(new Date(e.setMonth((new Date).getMonth()-a)),"monthN"));if(n>new Date(o).getTime()&&s<=new Date(o).getTime()||!t.resign_date&&s<=new Date(o).getTime())return t})),t[this.employeeItems[n]?.[0].bu_code].push({value:s.length,month:a,bu_code:this.employeeItems[n]?.[0].bu_code})}return Object.values(t)},employeeMonthList(){let t=[];for(let n in this.employeeList)t=t.concat(this.employeeList[n]||[]);let e={};return t.forEach((t=>{e[t.month]=e[t.month]||[],e[t.month].push(t)})),Object.values(e).reverse()},leaveDTLMonthItems(){const t={};return this.leaveDTLMonth.forEach((e=>{t[e.the_month]=t[e.the_month]||[],t[e.the_month].push(e)})),t},leaveDTLSick(){return this.leaveDTL.filter((t=>"Sick Leave"===t.leave_code))},leaveDTLSickItems(){const t={};this.leaveDTLSick.forEach((e=>{t[e.emp_id]=t[e.emp_id]||[],t[e.emp_id].push(e)}));const e=[];for(let n in t)if(t.hasOwnProperty(n)){const s=t[n].map((t=>t.leave_days)).reduce(((t,e)=>t+e),0);e.push({item:t[n]?.[0],name:n,value:s})}return e.sort(((t,e)=>t.value<e.value?1:-1))},leaveDTLSelMonthSick(){return this.leaveDTLSelMonth.filter((t=>"Sick Leave"===t.leave_code))},leaveDTLSickItemsByDept(){const t={};this.leaveDTLSelMonthSick.forEach((e=>{t[e.dept_code]=t[e.dept_code]||[],t[e.dept_code].push(e)}));const e=[];for(let n in t)if(t.hasOwnProperty(n)){const s=t[n].map((t=>t.leave_days)).reduce(((t,e)=>t+e),0),a=t[n].map((t=>t.total_emp)).reduce(((t,e)=>t+e),0);e.push({item:t[n]?.[0],name:n,value:(s/a).toFixed(2)})}return e.sort(((t,e)=>t.value-e.value))}},created(){this.$nextTick((()=>{this.selBu=this.buList?.[0]?.value,this.setEchars(!0)}))},watch:{},methods:{getLastSixMonths:h.a5,getDaysInCurrentMonth:h.y7,getEmployee(t){return this.hrEmployee.filter((e=>e.emp_id===t.emp_id))?.[0]},async setEchars(t){await this.getLeaveByMonth(),await this.getLeaveBySelMonth(),await this.getLeaveDTL(),this.getMonthyBar("monthyBar",t),this.getMonthyBar("sickBar",t),this.getSickBarByDept(!0,t),this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getMonthyBar("monthyBar",t):this.getMonthyBar("monthyBar",!1)}))})),this.observer.observe(document.getElementById("monthyBar")),this.observer2=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getMonthyBar("sickBar",t):this.getMonthyBar("sickBar",!1)}))})),this.observer2.observe(document.getElementById("sickBar")),this.observer3=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getMonthyBar(!0,t):this.getMonthyBar(!0,!1)}))})),this.observer3.observe(document.getElementById("leaveDTLSickItemsByDept"))},async getLeaveByMonth(){const t=await m.VD({...this.$options.data().common,begin_month:(0,h.n7)(new Date((new Date).setMonth((new Date).getMonth()-5)),"monthN"),end_month:(0,h.n7)(new Date((new Date).setMonth((new Date).getMonth())),"monthN")});this.leaveDTLMonth=t.rows},async getLeaveBySelMonth(){const t=await m.VD({...this.$options.data().common,bu_code:this.selBu,begin_month:(0,h.n7)(new Date(this.selMonthN),"monthN"),end_month:(0,h.n7)(new Date(this.selMonthN),"monthN")});this.leaveDTLSelMonth=t.rows},async getLeaveDTL(){this.leaveDTL=[];const t=await m.K3({...this.$options.data().common,bu_code:this.selBu,begin_day:(0,h.n7)(new Date(this.selMonthN),"monthN")+"-01",end_day:(0,h.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,h.y7)(this.selMonthN)});this.leaveDTL=t.rows},getName(t){return t.split(" ").map((t=>t[0])).join("")},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},async confirm(t){this.showMonth=!1,this.selMonth=(0,h.n7)(new Date(t),"month"),this.selMonthN=(0,h.n7)(new Date(t),"normalDay2"),await this.getLeaveDTL(),await this.getLeaveBySelMonth(),this.getSickBarByDept(!0,!0)},async onSelect(t){this.show=!1,this.selBu=t.value,await this.getLeaveDTL(),await this.getLeaveBySelMonth(),this.getSickBarByDept(!0,!0)},getMonthyBar(t,e){const n=document.getElementById(t);if(!n)return!1;const s=this.$echarts.init(n,null,{devicePixelRatio:2});let a=[];for(let r in this.leaveDTLMonthItems){if(this.leaveDTLMonthItems.hasOwnProperty(r)){const e="sickBar"===t?"Sick Leave":"Annual Leave",n=this.leaveDTLMonthItems[r].filter((t=>t.leave_code===e)),s=n.map((t=>t.total_emp)).reduce(((t,e)=>t+e),0),o=n.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0),i=s?(o/s).toFixed(2):0;a.push({name:r,value:i})}0}let o,i=[];"monthyBar"===t?i=["#5579ED"]:"sickBar"===t&&(i=["#FF860F"]),o={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:i,legend:{},grid:{top:"10%",left:"3%",right:"5%",bottom:"6%",containLabel:!0},yAxis:{type:"value",splitNumber:3,show:!1,axisLabel:{fontSize:"0",show:!1,color:"transparent"}},xAxis:{type:"category",data:this.getLastSixMonths(),axisTick:{alignWithLabel:!0,count:4},axisLabel:{color:"#666666",fontSize:"8"},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:e?a.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[3,3,3,3]},label:{lineHeight:16,show:!0,formatter:"{c}D",position:"top",color:"#535353",fontSize:"12"}}]},o&&"object"===typeof o&&s.setOption(o),window.addEventListener("resize",s.resize)},getSickBarByDept(t,e){const n=document.getElementById("leaveDTLSickItemsByDept");if(!n)return!1;const s=this.$echarts.init(n,null,{devicePixelRatio:2});let a,o=this.leaveDTLSickItemsByDept;if(o=[...o].sort(((t,e)=>t.value-e.value)),o.map(((t,e)=>{t.itemStyle=(e+1)%2===0?{color:"#A3CCF8"}:{color:"#5579ED"}})),a={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"16%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:o.map((t=>t.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:t?o:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}D",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},a&&"object"===typeof a&&s.setOption(a),window.addEventListener("resize",s.resize),!e)return!1;setTimeout((function(){s.resize()}),500)}}},d=u,p=n(845),v=(0,p.A)(d,s,a,!1,null,"694b1b9e",null),y=v.exports},2407:function(t,e,n){n.d(e,{a5:function(){return r},n7:function(){return a},of:function(){return s},y7:function(){return o},zB:function(){return i}});n(4114);function s(t,e){const n=JSON.parse(JSON.stringify(t)),a=Object.keys(t);return a.forEach((a=>{-1!==[null,void 0,""].indexOf(n[a])?delete n[a]:e&&"object"===typeof t[a]&&!Array.isArray(t[a])&&(n[a]=s(n[a]))})),n}function a(t,e){if(!t)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date(t),o=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,0),r=n[a.getMonth()],c=s[a.getMonth()],l=String(a.getDate()).padStart(2,0),h=String(a.getHours()).padStart(2,0),m=String(a.getMinutes()).padStart(2,0),u=String(a.getSeconds()).padStart(2,0);switch(e){case"slash":return`${o}/${i}/${l}`;case"year":return`${o}`;case"monthN":return`${o}-${i}`;case"monthLong":return`${o}-${c}`;case"month":return`${o}-${r}`;case"monthsh":return`${o}/${i}`;case"day":return`${l}-${i}-${o}`;case"timestamp":return`${o}${i}${l}${h}${m}`;case"obj":return{y:o,m:i,d:l,h:h,min:m,s:u};case"normal":return`${o}-${i}-${l} ${h}:${m}:${u}`;case"normalHours":return`${o}-${i}-${l} ${h}`;case"normalMin":return`${o}-${i}-${l} ${h}:${m}`;case"normalDay":return`${o}-${r}-${l}`;case"normalDay2":return`${o}-${i}-${l}`;case"normalDay3":return`${o}-${c}-${l}`;case"normalDay4":return`${o}/${c}/${l}`;default:return`${i}-${l}-${o} ${h}:${m}`}}const o=t=>{const e=new Date(t),n=e.getFullYear(),s=e.getMonth(),a=t=>t%4===0&&t%100!==0||t%400===0,o=[31,a(n)?29:28,31,30,31,30,31,31,30,31,30,31][s];return o},i=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},r=(t,e,n)=>{const s=n?new Date(n):new Date,a=s.getFullYear(),o=s.getMonth()-(e||0),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["January","February","March","April","May","June","July","August","September","October","November","December"];let c=[];for(let l=5;l>=0;l--){const e=o-l<0?a-1:a,n=(o-l+12)%12,s=t?r[n]:i[n],h=`${e}-${s}`;c.push(h)}return c}},5683:function(t,e,n){t.exports=n.p+"img/icon_2.1636ef31.svg"},1042:function(t,e,n){t.exports=n.p+"img/icon_3.bc5359b7.svg"},597:function(t,e,n){t.exports=n.p+"img/select.566d2950.svg"},5513:function(t,e,n){t.exports=n.p+"img/icon_5.ccb06ef0.svg"}}]);