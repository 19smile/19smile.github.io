"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[674],{4674:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("van-sticky",{attrs:{"offset-top":48}},[t("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[t("van-col",{attrs:{span:"12"}},[t("span",{on:{click:function(t){e.show=!0}}},[e._v("Select BU |")]),t("span",{staticClass:"ml-8",on:{click:function(t){e.show=!0}}},[e._v(e._s(e.selBu))]),t("img",{attrs:{width:"24px",src:n(597)},on:{click:function(t){e.show=!0}}})]),t("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[t("div",{staticClass:"sel-month"},[t("span",{on:{click:function(t){e.showMonth=!0}}},[e._v(e._s(e.selMonth))]),t("img",{attrs:{width:"24px",src:n(597)},on:{click:function(t){e.showMonth=!0}}})])])],1)],1),t("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:e.buLists},on:{select:e.onSelect},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),t("van-action-sheet",{attrs:{round:!1},model:{value:e.showMonth,callback:function(t){e.showMonth=t},expression:"showMonth"}},[t("van-datetime-picker",{attrs:{"min-date":e.minDate,type:"year-month",formatter:e.formatter},on:{confirm:e.confirm,cancel:function(t){e.showMonth=!1}},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[e._m(0),t("van-row",{staticClass:"calendar-content",attrs:{gutter:"16"}},e._l(e.leaveMonth,(function(n,a){return t("van-col",{key:a,staticClass:"calendar-list",attrs:{span:"6"}},[t("div",{class:[n.value>50?"danger":"success"]},[t("div",{staticClass:"calendar-text text-center"},[t("p",{staticClass:"fs-18"},[e._v(e._s(n.value||"-")+e._s(n.value?"%":""))]),t("p",{staticClass:"fs-14"},[e._v(e._s(e.getMonth(n.name)))])])])])})),1)],1),e._m(1)])],1)},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(8640)}}),t("span",[e._v("Leave Apply Calendar")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-content mt-12"},[t("div",{staticClass:"content-items-title"},[t("span",[e._v("Leave Apply Trend")])]),t("div",{staticClass:"monthy"},[t("div",{staticClass:"monthy-bar",staticStyle:{height:"252px"},attrs:{id:"annualBar"}})])])}],o=(n(4114),n(8525)),r=n(7819),i=n(7235),l=n(6749),c=n(4175),h=n(5810),u={name:"leaveUsage",components:{Row:o.A,Col:r.A,Swipe:i.A,SwipeItem:l.A},data(){const e={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...e,selBu:"",selYear:(0,c.n7)(new Date,"year"),selMonth:(0,c.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,c.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),leaveDTL:[],leaveDTLMonth:[],show:!1,currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,colors:(0,c.zB)(),minDate:new Date("1970-01-01")}},computed:{leaveDTLItems(){return this.leaveDTLMonth.filter((e=>["Sick Leave","Annual Leave"].indexOf(e.leave_code)>-1))},leaveDTLMonthItems(){const e={};return this.leaveDTLItems.forEach((t=>{e[t.the_month]=e[t.the_month]||[],e[t.the_month].push(t)})),e},leaveMonth(){let e=[];for(let n in this.leaveDTLMonthItems)if(this.leaveDTLMonthItems.hasOwnProperty(n)){let t=n.split("-")?.[0],a=n.split("-")?.[1],s=new Date(n+"-01").getMonth()+1,o=this.getleaveMonth(t,a,"leaveDTLMonthItems");const r=o.map((e=>e.leave_days)).reduce(((e,t)=>e+t),0),i=o.map((e=>e.sickleave_should_used_days)).reduce(((e,t)=>e+t),0),l=o.map((e=>e.annualleave_should_used_days)).reduce(((e,t)=>e+t),0),c=r/(i+l);let h=c?(100*c).toFixed(1):0;const u=new Date(this.selMonthN).getMonth()+1;s>u&&(h=0),e.push({id:s,name:n,value:h})}let t=[];for(let n=1;n<=12;n++){let a=[];a=e.filter((e=>e.id==n)),a.length||(a=[{id:n,name:this.selYear+"-"+n,value:0}]),t=t.concat(a)}return t},leaveMonthYItems(){return this.leaveDTLMonthY.filter((e=>["Sick Leave","Annual Leave"].indexOf(e.leave_code)>-1))},leaveDTLMonthYItems(){const e={};return this.leaveMonthYItems.forEach((t=>{e[t.the_month]=e[t.the_month]||[],e[t.the_month].push(t)})),e}},created(){this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.$nextTick((()=>{this.selBu="Overview",this.selYear=(0,c.n7)(new Date,"year"),this.setEchars()}))},watch:{},methods:{getDaysInCurrentMonth:c.y7,getleaveMonth(e,t,n){let a=[];for(let s=1;s<=t;s++){const t=e+"-"+String(s).padStart(2,0);a=a.concat(this[n][t])}return a},getEmployee(e){return this.hrEmployee.filter((t=>t.emp_id===e.emp_id))?.[0]},getMonth(e){return new Date(e).toLocaleDateString("en-US",{month:"short"})},async getLeaveByMonth(){const e=await h.VD((0,c.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,c.n7)(new Date(this.selMonthN),"year")+"-01",end_month:(0,c.n7)(new Date(this.selMonthN),"year")+"-12"}));this.leaveDTLMonth=e.rows;const t=new Date(this.selMonthN),n=new Date(t.setFullYear(t.getFullYear()-1)),a=await h.VD((0,c.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,c.n7)(new Date(n),"year")+"-01",end_month:(0,c.n7)(new Date(n),"year")+"-12"}));this.leaveDTLMonthY=a.rows},async setEchars(){await this.getLeaveByMonth(),this.getAnnualLeave(!0),this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getAnnualLeave(!0):this.getAnnualLeave(!1)}))})),this.observer.observe(document.getElementById("annualBar"))},formatter(e,t){return"year"===e?`${t}年`:"month"===e?`${t}月`:t},confirm(e){if(this.showMonth=!1,this.selMonth=(0,c.n7)(new Date(e),"month"),this.selMonthN=(0,c.n7)(new Date(e),"normalDay2"),this.selYear===(0,c.n7)(new Date(e),"year"))return this.getAnnualLeave(!0),!1;this.selYear=(0,c.n7)(new Date(e),"year"),this.setEchars()},onSelect(e){this.show=!1,this.selBu=e.value,this.setEchars()},getAnnualLeave(e){const t=document.getElementById("annualBar");if(!t)return!1;const n=this.$echarts.init(t,null,{devicePixelRatio:2});let a=[];for(let h in this.leaveDTLMonthYItems)if(this.leaveDTLMonthYItems.hasOwnProperty(h)){let e=h.split("-")?.[0],t=h.split("-")?.[1],n=new Date(h+"-01").getMonth()+1,s=this.getleaveMonth(e,t,"leaveDTLMonthYItems");const o=s.map((e=>e.leave_days)).reduce(((e,t)=>e+t),0),r=s.map((e=>e.sickleave_should_used_days)).reduce(((e,t)=>e+t),0),i=s.map((e=>e.annualleave_should_used_days)).reduce(((e,t)=>e+t),0),l=o/(r+i),c=l?(100*l).toFixed(1):0;a.push({id:n,name:this.getMonth(h),value:c})}let s=[];for(let h in this.leaveDTLMonthItems)if(this.leaveDTLMonthItems.hasOwnProperty(h)){let e=h.split("-")?.[0],t=h.split("-")?.[1],n=new Date(h+"-01").getMonth()+1,a=this.getleaveMonth(e,t,"leaveDTLMonthItems");const o=a.map((e=>e.leave_days)).reduce(((e,t)=>e+t),0),r=a.map((e=>e.sickleave_should_used_days)).reduce(((e,t)=>e+t),0),i=a.map((e=>e.annualleave_should_used_days)).reduce(((e,t)=>e+t),0),l=o/(r+i),c=l?(100*l).toFixed(1):0;s.push({id:n,name:this.getMonth(h),value:c})}let o=[],r=[];for(let h=1;h<=12;h++){let e=[],t=[];e=a.filter((e=>e.id==String(h).padStart(2,0))),t=s.filter((e=>e.id==String(h).padStart(2,0))),e.length||(e=[{id:String(h).padStart(2,0),name:this.getMonth(this.selYear+"-"+h),value:0}]),t.length||(t=[{id:String(h).padStart(2,0),name:this.getMonth(this.selYear+"-"+h),value:0}]),o=o.concat(e),r=r.concat(t)}let i,l=new Date(this.selMonthN).getMonth()+1,c=6;l<6&&(c=l),o=o.slice(l-c,l),r=r.slice(l-c,l),i={colors:["#5579ED","#FF860F"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{top:"5%",left:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:24,textStyle:{fontSize:"12",color:"#333333"}},grid:{top:"21%",left:"3%",right:"5%",bottom:"6%",containLabel:!0},yAxis:{type:"value",splitNumber:1,show:!1,axisLabel:{fontSize:"0",show:!1,color:"transparent"}},xAxis:{type:"category",data:o.map((e=>e.name)),axisTick:{alignWithLabel:!0,count:4},axisLabel:{color:"#666666",fontSize:"10"},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:new Date(this.selYear).getFullYear(),type:"bar",data:e?r.map((e=>e.value)):[],barWidth:"16",barGap:"30%",itemStyle:{borderRadius:[3,3,3,3],color:"#5579ED"},label:{lineHeight:9,show:!0,formatter:"{c}%",position:"top",color:"#535353",fontSize:"9"}},{name:new Date(this.selYear).getFullYear()-1,type:"bar",data:e?o.map((e=>e.value)):[],barWidth:"16",barGap:"30%",itemStyle:{borderRadius:[3,3,3,3],color:"#FF860F"},label:{lineHeight:20,show:!0,formatter:"{c}%",position:"top",color:"#535353",fontSize:"9"}}]},i&&"object"===typeof i&&n.setOption(i),window.addEventListener("resize",n.resize)}}},m=u,d=n(845),v=(0,d.A)(m,a,s,!1,null,"af48c13c",null),p=v.exports},4175:function(e,t,n){n.d(t,{a5:function(){return i},n7:function(){return s},of:function(){return a},y7:function(){return o},zB:function(){return r}});n(4114);function a(e,t){const n=JSON.parse(JSON.stringify(e)),s=Object.keys(e);return s.forEach((s=>{-1!==[null,void 0,""].indexOf(n[s])?delete n[s]:t&&"object"===typeof e[s]&&!Array.isArray(e[s])&&(n[s]=a(n[s]))})),n}function s(e,t){if(!e)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],s=new Date(e),o=s.getFullYear(),r=String(s.getMonth()+1).padStart(2,0),i=n[s.getMonth()],l=a[s.getMonth()],c=String(s.getDate()).padStart(2,0),h=String(s.getHours()).padStart(2,0),u=String(s.getMinutes()).padStart(2,0),m=String(s.getSeconds()).padStart(2,0);switch(t){case"slash":return`${o}/${r}/${c}`;case"year":return`${o}`;case"monthN":return`${o}-${r}`;case"monthLong":return`${o}-${l}`;case"month":return`${o}-${i}`;case"monthsh":return`${o}/${r}`;case"day":return`${c}-${r}-${o}`;case"timestamp":return`${o}${r}${c}${h}${u}`;case"obj":return{y:o,m:r,d:c,h:h,min:u,s:m};case"normal":return`${o}-${r}-${c} ${h}:${u}:${m}`;case"normalHours":return`${o}-${r}-${c} ${h}`;case"normalMin":return`${o}-${r}-${c} ${h}:${u}`;case"normalDay":return`${o}-${i}-${c}`;case"normalDay2":return`${o}-${r}-${c}`;case"normalDay3":return`${o}-${l}-${c}`;case"normalDay4":return`${o}/${l}/${c}`;default:return`${r}-${c}-${o} ${h}:${u}`}}const o=e=>{const t=new Date(e),n=t.getFullYear(),a=t.getMonth(),s=e=>e%4===0&&e%100!==0||e%400===0,o=[31,s(n)?29:28,31,30,31,30,31,31,30,31,30,31][a];return o},r=()=>{let e=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return e},i=(e,t,n)=>{const a=n?new Date(n):new Date,s=a.getFullYear(),o=a.getMonth()-(t||0),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let c=5;c>=0;c--){const t=o-c<0?s-1:s,n=(o-c+12)%12,a=e?i[n]:r[n],h=`${t}-${a}`;l.push(h)}return l}},8640:function(e,t,n){e.exports=n.p+"img/icon_1.8112b469.svg"},597:function(e,t,n){e.exports=n.p+"img/select.b6d4fedc.svg"}}]);