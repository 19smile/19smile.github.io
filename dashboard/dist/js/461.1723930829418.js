"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[461],{3461:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[e._m(0),e._m(1),t("div",{staticClass:"pt-16"},[t("van-sticky",{attrs:{"offset-top":48}},[t("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[t("van-col",{attrs:{span:"12"}},[t("span",{on:{click:function(t){e.show=!0}}},[e._v("Select BU |")]),t("span",{staticClass:"ml-8",on:{click:function(t){e.show=!0}}},[e._v(e._s(e.selBu))]),t("img",{attrs:{width:"24px",src:n(597)},on:{click:function(t){e.show=!0}}})]),t("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[t("div",{staticClass:"sel-month"},[t("span",{on:{click:function(t){e.showMonth=!0}}},[e._v(e._s(e.selMonth))]),t("img",{attrs:{width:"24px",src:n(597)},on:{click:function(t){e.showMonth=!0}}})])])],1)],1),t("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:e.buList},on:{select:e.onSelect},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),t("van-action-sheet",{attrs:{round:!1},model:{value:e.showMonth,callback:function(t){e.showMonth=t},expression:"showMonth"}},[t("van-datetime-picker",{attrs:{"min-date":e.minDate,type:"year-month",formatter:e.formatter},on:{confirm:e.confirm,cancel:function(t){e.showMonth=!1}},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1)],1),t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[e._m(2),t("div",{staticClass:"recruit"},[t("div",{staticClass:"recruit-items",style:{height:35*e.leaveDTLSickItemsByDept.length+48+"px"}},[t("van-row",[t("van-col",{staticClass:"recruit-items-title",attrs:{span:"24"}},[e._v(" Dept Sick Leave By Dept. ")])],1),t("div",{staticClass:"recruit-bar",style:{height:35*e.leaveDTLSickItemsByDept.length+"px"},attrs:{id:"leaveDTLSickItemsByDept"}})],1)])]),t("div",{staticClass:"content-items-content mt-16"},[e._m(3),t("div",{staticClass:"card-list fs-14"},[e._l(e.leaveDTLSickItems,(function(n,s){return[s<10?t("van-row",{key:n?.item?.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[t("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[t("div",{staticClass:"card-list-left-content"},[t("div",{staticClass:"card-list-left-logo"},[t("img",{attrs:{width:"100%",src:e.getEmployee(n?.item)?.img_url}})]),t("div",{staticClass:"card-list-left-text"},[t("p",[e._v(e._s(e.getEmployee(n?.item)?.name_en))]),t("p",{staticClass:"fs-12"},[e._v(e._s(e.getEmployee(n?.item)?.dept_code))])])])]),t("van-col",{staticClass:"card-list-right text-right fs-16 fw-600",class:["text-danger2"],attrs:{span:"6"}},[e._v(" "+e._s(n?.value)+"D/"+e._s(new Date(e.selMonthN).getMonth()+1)+"D ")])],1):e._e()]}))],2)])])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(5513)}}),t("span",[e._v("Monthy Leave Trend")])]),t("div",{staticClass:"monthy"},[t("div",{staticClass:"monthy-bar",attrs:{id:"monthyBar"}})])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(5683)}}),t("span",[e._v("Sick Leave Trend")])]),t("div",{staticClass:"monthy"},[t("div",{staticClass:"monthy-bar",attrs:{id:"sickBar"}})])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(5683)}}),t("span",[e._v("Dept Sick Leave Trend")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(1042)}}),t("span",[e._v("Sick Leave Detail")])])}],o=(n(4114),n(7349)),i=n(3011),r=n(7691),c=n(9941),l=n(7967),h=n(2407),m=n(8193),u={name:"attendanceCoreKPI",components:{Row:o.A,Col:i.A,Swipe:r.A,SwipeItem:c.A,ActionSheet:l.A},data(){const e={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...e,show:!1,minDate:new Date("1970-01-01"),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,colors:(0,h.zB)(),leaveDTLMonth:[],leaveDTL:[],selBu:"",selMonth:(0,h.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,h.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),leaveDTLSelMonth:[]}},computed:{employeeItems(){const e={};return this.hrEmployee.forEach((t=>{e[t.bu_code]=e[t.bu_code]||[],e[t.bu_code].push(t)})),Object.values(e)},employeeList(){const e={};let t=new Date;for(let n in this.employeeItems){let s=[];e[this.employeeItems[n]?.[0].bu_code]=[];for(let a=0;a<6;a++)s=this.employeeItems[n].filter((e=>{const n=new Date((0,h.n7)(new Date(e.resign_date),"monthN")).getTime(),s=new Date((0,h.n7)(new Date(e.hire_date),"monthN")).getTime(),o=new Date((0,h.n7)(new Date(t.setMonth((new Date).getMonth()-a)),"monthN"));if(n>new Date(o).getTime()&&s<=new Date(o).getTime()||!e.resign_date&&s<=new Date(o).getTime())return e})),e[this.employeeItems[n]?.[0].bu_code].push({value:s.length,month:a,bu_code:this.employeeItems[n]?.[0].bu_code})}return Object.values(e)},employeeMonthList(){let e=[];for(let n in this.employeeList)e=e.concat(this.employeeList[n]||[]);let t={};return e.forEach((e=>{t[e.month]=t[e.month]||[],t[e.month].push(e)})),Object.values(t).reverse()},leaveDTLMonthItems(){const e={};return this.leaveDTLMonth.forEach((t=>{e[t.the_month]=e[t.the_month]||[],e[t.the_month].push(t)})),e},leaveDTLSick(){return this.leaveDTL.filter((e=>"Sick Leave"===e.leave_code))},leaveDTLSickItems(){const e={};this.leaveDTLSick.forEach((t=>{e[t.emp_id]=e[t.emp_id]||[],e[t.emp_id].push(t)}));const t=[];for(let n in e)if(e.hasOwnProperty(n)){const s=e[n].map((e=>e.leave_days)).reduce(((e,t)=>e+t),0);t.push({item:e[n]?.[0],name:n,value:s})}return t.sort(((e,t)=>e.value<t.value?1:-1))},leaveDTLSelMonthSick(){return this.leaveDTLSelMonth.filter((e=>"Sick Leave"===e.leave_code))},leaveDTLSickItemsByDept(){const e={};this.leaveDTLSelMonthSick.forEach((t=>{e[t.dept_code]=e[t.dept_code]||[],e[t.dept_code].push(t)}));const t=[];for(let n in e)if(e.hasOwnProperty(n)){const s=e[n].map((e=>e.leave_days)).reduce(((e,t)=>e+t),0),a=e[n].map((e=>e.total_emp)).reduce(((e,t)=>e+t),0);t.push({item:e[n]?.[0],name:n,value:(s/a).toFixed(2)})}return t.sort(((e,t)=>e.value-t.value))},employeeItems(){const e={};return this.hrEmployee.forEach((t=>{e[t.bu_code]=e[t.bu_code]||[],e[t.bu_code].push(t)})),Object.values(e)},employeeList(){const e={};let t=new Date;for(let n in this.employeeItems){let s=[];e[this.employeeItems[n]?.[0].bu_code]=[];for(let a=0;a<6;a++)s=this.employeeItems[n].filter((e=>{const n=new Date((0,h.n7)(new Date(e.resign_date),"monthN")).getTime(),s=new Date((0,h.n7)(new Date(e.hire_date),"monthN")).getTime(),o=new Date((0,h.n7)(new Date(t.setMonth((new Date).getMonth()-a)),"monthN"));if(n>new Date(o).getTime()&&s<=new Date(o).getTime()||!e.resign_date&&s<=new Date(o).getTime())return e})),e[this.employeeItems[n]?.[0].bu_code].push({value:s.length,month:a,bu_code:this.employeeItems[n]?.[0].bu_code})}return Object.values(e)},trendBarList(){let e=[];for(let n in this.employeeList)e=e.concat(this.employeeList[n]||[]);let t={};return e.forEach((e=>{t[e.month]=t[e.month]||[],t[e.month].push(e)})),Object.values(t).reverse()}},created(){this.$nextTick((()=>{this.selBu=this.buList?.[0]?.value,this.setEchars(!0)}))},watch:{},methods:{getLastSixMonths:h.a5,getDaysInCurrentMonth:h.y7,getEmployee(e){return this.hrEmployee.filter((t=>t.emp_id===e.emp_id))?.[0]},async setEchars(e){await this.getLeaveByMonth(),await this.getLeaveBySelMonth(),await this.getLeaveDTL(),this.getMonthyBar("monthyBar",e),this.getMonthyBar("sickBar",e),this.getSickBarByDept(!0,e),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getMonthyBar("monthyBar",e):this.getMonthyBar("monthyBar",!1)}))})),this.observer.observe(document.getElementById("monthyBar")),this.observer2=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getMonthyBar("sickBar",e):this.getMonthyBar("sickBar",!1)}))})),this.observer2.observe(document.getElementById("sickBar")),this.observer3=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getMonthyBar(!0,e):this.getMonthyBar(!0,!1)}))})),this.observer3.observe(document.getElementById("leaveDTLSickItemsByDept"))},async getLeaveByMonth(){const e=await m.VD({...this.$options.data().common,begin_month:(0,h.n7)(new Date((new Date).setMonth((new Date).getMonth()-5)),"monthN"),end_month:(0,h.n7)(new Date((new Date).setMonth((new Date).getMonth())),"monthN")});this.leaveDTLMonth=e.rows},async getLeaveBySelMonth(){const e=await m.VD({...this.$options.data().common,bu_code:this.selBu,begin_month:(0,h.n7)(new Date(this.selMonthN),"monthN"),end_month:(0,h.n7)(new Date(this.selMonthN),"monthN")});this.leaveDTLSelMonth=e.rows},async getLeaveDTL(){this.leaveDTL=[];const e=await m.K3({...this.$options.data().common,bu_code:this.selBu,begin_day:(0,h.n7)(new Date(this.selMonthN),"monthN")+"-01",end_day:(0,h.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,h.y7)(this.selMonthN)});this.leaveDTL=e.rows},getName(e){return e.split(" ").map((e=>e[0])).join("")},formatter(e,t){return"year"===e?`${t}年`:"month"===e?`${t}月`:t},async confirm(e){this.showMonth=!1,this.selMonth=(0,h.n7)(new Date(e),"month"),this.selMonthN=(0,h.n7)(new Date(e),"normalDay2"),await this.getLeaveDTL(),await this.getLeaveBySelMonth(),this.getSickBarByDept(!0,!0)},async onSelect(e){this.show=!1,this.selBu=e.value,await this.getLeaveDTL(),await this.getLeaveBySelMonth(),this.getSickBarByDept(!0,!0)},getMonthyBar(e,t){const n=document.getElementById(e);if(!n)return!1;const s=this.$echarts.init(n,null,{devicePixelRatio:2});let a=[],o=0;for(let c in this.leaveDTLMonthItems){if(this.leaveDTLMonthItems.hasOwnProperty(c)){const t="sickBar"===e?["Sick Leave"]:["Annual Leave","J01","J02","J04","J05"],n=this.leaveDTLMonthItems[c].filter((e=>t.indexOf(e.leave_code)>-1)),s=this.getTrendBarTotal()[o],i=n.map((e=>e.leave_days)).reduce(((e,t)=>e+t),0),r=s?(i/s).toFixed(2):0;a.push({name:c,value:r})}o++}let i,r=[];"monthyBar"===e?r=["#5579ED"]:"sickBar"===e&&(r=["#FF860F"]),i={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:r,legend:{},grid:{top:"10%",left:"3%",right:"5%",bottom:"6%",containLabel:!0},yAxis:{type:"value",splitNumber:3,show:!1,axisLabel:{fontSize:"0",show:!1,color:"transparent"}},xAxis:{type:"category",data:this.getLastSixMonths(),axisTick:{alignWithLabel:!0,count:4},axisLabel:{color:"#666666",fontSize:"8"},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:t?a.map((e=>e.value)):[],barWidth:"20",itemStyle:{borderRadius:[3,3,3,3]},label:{lineHeight:16,show:!0,formatter:"{c}D",position:"top",color:"#535353",fontSize:"12"}}]},i&&"object"===typeof i&&s.setOption(i),window.addEventListener("resize",s.resize)},getSickBarByDept(e,t){const n=document.getElementById("leaveDTLSickItemsByDept");if(!n)return!1;const s=this.$echarts.init(n,null,{devicePixelRatio:2});let a,o=this.leaveDTLSickItemsByDept;if(o=[...o].sort(((e,t)=>e.value-t.value)),o.map(((e,t)=>{e.itemStyle=(t+1)%2===0?{color:"#A3CCF8"}:{color:"#5579ED"}})),a={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"16%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:o.map((e=>e.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:e?o:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}D",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},a&&"object"===typeof a&&s.setOption(a),window.addEventListener("resize",s.resize),!t)return!1;setTimeout((function(){s.resize()}),500)},getTrendBarTotal(e){let t=[];for(let n=0;n<6;n++){const e=this.trendBarList[n].map((e=>e.value));let s=e.reduce(((e,t)=>e+t),0);t.push(s)}return t}}},d=u,p=n(845),v=(0,p.A)(d,s,a,!1,null,"5365c221",null),y=v.exports},2407:function(e,t,n){n.d(t,{CA:function(){return c},a5:function(){return r},n7:function(){return a},of:function(){return s},y7:function(){return o},zB:function(){return i}});n(4114);function s(e,t){const n=JSON.parse(JSON.stringify(e)),a=Object.keys(e);return a.forEach((a=>{-1!==[null,void 0,""].indexOf(n[a])?delete n[a]:t&&"object"===typeof e[a]&&!Array.isArray(e[a])&&(n[a]=s(n[a]))})),n}function a(e,t){if(!e)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],a=new Date(e),o=a.getFullYear(),i=String(a.getMonth()+1).padStart(2,0),r=n[a.getMonth()],c=s[a.getMonth()],l=String(a.getDate()).padStart(2,0),h=String(a.getHours()).padStart(2,0),m=String(a.getMinutes()).padStart(2,0),u=String(a.getSeconds()).padStart(2,0);switch(t){case"slash":return`${o}/${i}/${l}`;case"year":return`${o}`;case"monthN":return`${o}-${i}`;case"monthLong":return`${o}-${c}`;case"month":return`${o}-${r}`;case"monthsh":return`${o}/${i}`;case"day":return`${l}-${i}-${o}`;case"timestamp":return`${o}${i}${l}${h}${m}`;case"obj":return{y:o,m:i,d:l,h:h,min:m,s:u};case"normal":return`${o}-${i}-${l} ${h}:${m}:${u}`;case"normalHours":return`${o}-${i}-${l} ${h}`;case"normalMin":return`${o}-${i}-${l} ${h}:${m}`;case"normalDay":return`${o}-${r}-${l}`;case"normalDay2":return`${o}-${i}-${l}`;case"normalDay3":return`${o}-${c}-${l}`;case"normalDay4":return`${o}/${c}/${l}`;default:return`${i}-${l}-${o} ${h}:${m}`}}const o=e=>{const t=new Date(e),n=t.getFullYear(),s=t.getMonth(),a=e=>e%4===0&&e%100!==0||e%400===0,o=[31,a(n)?29:28,31,30,31,30,31,31,30,31,30,31][s];return o},i=()=>{let e=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return e},r=(e,t,n)=>{const s=n?new Date(n):new Date,a=s.getFullYear(),o=s.getMonth()-(t||0),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["January","February","March","April","May","June","July","August","September","October","November","December"];let c=[];for(let l=5;l>=0;l--){const t=o-l<0?a-1:a,n=(o-l+12)%12,s=e?r[n]:i[n],h=`${t}-${s}`;c.push(h)}return c},c=(e,t)=>{let n=e.reduce(((e,n)=>{const s=e.find((e=>e[t]===n[t]));return s?e:e.concat([n])}),[]);return n}},5683:function(e,t,n){e.exports=n.p+"img/icon_2.1636ef31.svg"},1042:function(e,t,n){e.exports=n.p+"img/icon_3.bc5359b7.svg"},597:function(e,t,n){e.exports=n.p+"img/select.566d2950.svg"},5513:function(e,t,n){e.exports=n.p+"img/icon_5.ccb06ef0.svg"}}]);