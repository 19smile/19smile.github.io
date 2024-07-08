"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[325],{7325:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.show=!0}}})])],1)],1),e("van-action-sheet",{attrs:{round:!1,title:"Select BU",actions:t.buList},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(0),e("div",{staticClass:"content-items-title-right"},[t._v(t._s(t.buEmployeeItems.length))])]),e("div",{staticClass:"employee"},[e("div",{staticClass:"employee-items",style:{height:t.deptHeight}},[e("van-row",[e("van-col",{staticClass:"employee-items-date",attrs:{span:"12"}},[t._v(" Employee By Dept. ")])],1),e("div",{staticClass:"employee-bar",style:{height:t.deptBarHeight},attrs:{id:"employeeList2"}})],1)])]),e("div",{staticClass:"content-items-content mt-12"},[e("div",{staticClass:"percentage-box pb-8"},[t._m(1),e("div",{staticClass:"percentage-box-content percentage-box-content-mini align-center text-white fs-14 percentage-mini"},[e("div",{staticClass:"percentage-box-items bg-yellow",style:{width:"26%"}},[e("span",[e("span",{staticClass:"fw-600"},[t._v(t._s(t.managementTotal))]),e("span",[t._v(" ("+t._s(t.getPercentage(t.buEmployeeItems.length,t.managementTotal))+"%)")])])]),e("div",{staticClass:"percentage-box-items text-right bg-blue4",style:{width:"74%"}},[e("span",[e("span",{staticClass:"fw-600"},[t._v(t._s(t.deptLevel))]),e("span",[t._v(" ("+t._s(t.getPercentage(t.buEmployeeItems.length,t.deptLevel))+"%)")])])])]),e("van-row",{staticClass:"fs-14 lh-32"},[e("van-col",{staticClass:"text-yellow",attrs:{span:"12"}},[t._v("Management")]),e("van-col",{staticClass:"text-blue text-right",attrs:{span:"12"}},[t._v("Non-Management")])],1)],1)])]),t._m(2),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-center justify-center align-center"},[e("div",[e("p",[t._v("Avg.")]),e("p",[t._v(t._s(t.average))])])]),e("div",{staticClass:"pie-content",attrs:{id:"ageLevel"}})])])]),e("div",{staticClass:"content-items"},[t._m(4),e("div",{staticClass:"leave-items-content"},[e("div",{staticClass:"leave-items"},[e("van-row",[e("van-col",{staticClass:"leave-items-date",attrs:{span:"24"}},[t._v(" Seniority In Swire Group ")])],1),e("div",{staticClass:"leave-bar",attrs:{id:"seniority"}})],1)])]),e("van-row",{staticClass:"select-box mt-16",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"fs-20"})]),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v(t._s(t.selMonth))]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.showMonth=!0}}})])])],1),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{"min-date":t.minDate,type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(5),e("div",{staticClass:"content-items-title-right"},[t._v(t._s(t.renewList.length))])]),e("div",{staticClass:"card-list fs-14"},t._l(t.renewList,(function(s,n){return e("van-row",{key:s.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[e("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[e("div",{staticClass:"card-list-left-content"},[e("div",{staticClass:"card-list-left-logo"},[e("img",{attrs:{width:"100%",src:s.img_url}})]),e("div",{staticClass:"card-list-left-text"},[e("p",[t._v(t._s(s.name_en))]),e("p",{staticClass:"fs-12"},[t._v(t._s(s.dept_code))])])])]),e("van-col",{staticClass:"card-list-right text-right",attrs:{span:"6"}},[t._v(" "+t._s(s.hire_year_num)+" Years ")])],1)})),1)])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:s(2687)}}),e("span",[t._v("Employee")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Ratio")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(6227)}}),e("span",[t._v("Education Level")])]),e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-content pie-content2",attrs:{id:"educationLevel"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(2498)}}),e("span",[t._v("Age Level")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(197)}}),e("span",[t._v("Seniority")])])])},function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:s(8046)}}),e("span",[t._v("Contract Renew List")])])}],a=(s(4114),s(7349)),o=s(3011),r=s(2544),l=s(6912),c=s(7967),h=s(5520),m=s(2407),u={name:"detailByBu",components:{Row:a.A,Col:o.A,Actionsheet:r.Actionsheet,Picker:l.A,[c.A.name]:c.A,Sticky:h.A},data(){return{show:!1,buEmployeeItems:[],selBu:"",selMonth:(0,m.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,m.n7)(new Date((new Date).setMonth((new Date).getMonth())),"monthN"),showMonth:!1,minDate:new Date("1970-01-01"),currentDate:new Date((new Date).setMonth((new Date).getMonth()))}},computed:{employee(){return this.hrEmployee.filter((t=>{const e=new Date((0,m.n7)(new Date(t.resign_date),"monthN")).getTime(),s=new Date((0,m.n7)(new Date(t.hire_date),"monthN")).getTime(),n=(0,m.n7)(new Date((new Date).setMonth((new Date).getMonth())),"monthN");if(e>new Date(n).getTime()&&s<=new Date(n).getTime()||!t.resign_date&&s<=new Date(n).getTime())return t}))},employeeItems(){const t={};return this.employee.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),t},deptItems(){const t={};return this.buEmployeeItems.forEach((e=>{t[e.dept_name]=t[e.dept_name]||[],t[e.dept_name].push(e)})),t},deptLen(){return this.deptTotal=this.deptItems,Object.keys(this.deptItems).length},managementTotal(){return this.buEmployeeItems.filter((t=>"B"===t.emp_level||"C"===t.emp_level)).length},deptLevel(){return this.buEmployeeItems.length-this.managementTotal},deptHeight(){return 35*this.deptLen+48+"px"},deptBarHeight(){return 35*this.deptLen+"px"},educationItems(){const t={};return this.buEmployeeItems.forEach((e=>{t[e.education]=t[e.education]||[],t[e.education].push(e)})),t},ageLevelItems(){const t={};return this.buEmployeeItems.forEach((e=>{t[e.age_group]=t[e.age_group]||[],t[e.age_group].push(e)})),t},seniorityList(){const t={};new Date;t["1-3"]=[],t["3-6"]=[],t["6-10"]=[],t["10-15"]=[],t["15-20"]=[],t["20+"]=[];for(let e in this.buEmployeeItems){const s=this.buEmployeeItems[e].hire_year_num;s<=3?t["1-3"].push(this.buEmployeeItems[e]):s<=6?t["3-6"].push(this.buEmployeeItems[e]):s<=10?t["6-10"].push(this.buEmployeeItems[e]):s<=15?t["10-15"].push(this.buEmployeeItems[e]):s<=20?t["15-20"].push(this.buEmployeeItems[e]):s>20&&t["20+"].push(this.buEmployeeItems[e])}return t},average(){const t=this.buEmployeeItems.map((t=>t.age)),e=t.reduce(((t,e)=>t+e),0)/this.buEmployeeItems.length;return Math.round(e)},renewList(){const t=this.hrEmployee.filter((t=>{const e=(0,m.n7)(t.contract_enddate,"monthN"),s=(0,m.n7)(new Date((new Date).setMonth(new Date(this.selMonthN).getMonth())),"monthN");if(e==s&&!t.resign_date)return t}));return t}},mounted(){this.buEmployeeItems=this.employeeItems[this.buList?.[0]?.value]||[],this.selBu=this.buList?.[0]?.value,this.$nextTick((()=>{this.setEchars()}))},watch:{},methods:{parseReqTime:m.n7,formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,this.selMonth=(0,m.n7)(new Date(t),"month"),this.selMonthN=(0,m.n7)(new Date(t),"monthN")},daysFromSpecificDate(t,e){const s=new Date(t).getTime(),n=new Date(e).getTime(),i=n-s;return i/864e5},setEchars(t){this.getEmployee(!0,t),this.getAgeLevel(!0),this.getEducationLevel(!0),this.getSeniority(!0),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getEmployee(!0,!0):this.getEmployee(!1)}))})),this.observer.observe(document.getElementById("employeeList2")),this.observer2=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getAgeLevel(!0):this.getAgeLevel(!1)}))})),this.observer2.observe(document.getElementById("ageLevel")),this.observer3=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getEducationLevel(!0):this.getEducationLevel(!1)}))})),this.observer3.observe(document.getElementById("educationLevel")),this.observer4=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getSeniority(!0):this.getSeniority(!1)}))})),this.observer4.observe(document.getElementById("seniority"))},getPercentage(t,e){return Math.round(e/t*100)},onSelect(t){this.buEmployeeItems=this.employeeItems[t.value]||[],this.show=!1,this.deptHeight=35*this.deptLen+48+"px",this.deptBarHeight=35*this.deptLen+"px",this.selBu=t.value,this.$forceUpdate(),this.setEchars(!0)},getEmployee(t,e){let s=[];for(let o in this.deptItems)this.deptItems.hasOwnProperty(o)&&s.push({name:o,data:{value:this.deptItems[o].length}});s=[...s].sort(((t,e)=>t.data.value-e.data.value)),s.map(((t,e)=>{t.data.itemStyle=(e+1)%2===0?{color:"#A3CCF8"}:{color:"#5579ED"}}));const n=document.getElementById("employeeList2");if(!n)return!1;const i=this.$echarts.init(n,null,{devicePixelRatio:2});let a;if(a={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:0,left:"5.5%",right:"13%",bottom:"3%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:"0",color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:s.map((t=>t.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:t?s.map((t=>t.data)):[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},a&&"object"===typeof a&&i.setOption(a),window.addEventListener("resize",i.resize),!e)return!1;setTimeout((function(){i.resize()}),500)},getAgeLevel(t){const e=document.getElementById("ageLevel");if(!e)return!1;const s=this.$echarts.init(e,null,{devicePixelRatio:2});let n,i=[];for(let a in this.ageLevelItems)this.ageLevelItems.hasOwnProperty(a)&&i.push({name:a,value:(this.ageLevelItems[a].length/this.buEmployeeItems.length*100).toFixed(2)});n={color:(0,m.zB)(),series:[{type:"pie",center:["51%","50%"],radius:[52,82],itemStyle:{borderColor:"#fff",borderWidth:1},label:{formatter:"{name|{b}}\n{time|{c}%}",lineHeight:12,rich:{name:{fontSize:10,color:"#999"},time:{fontSize:13,fontWeight:600,lineHeight:22,color:"#6B6B6B"}}},labelLine:{normal:{lineStyle:{color:"#E6E6E6"},show:!0,length:8,length2:10}},data:t?i:[]}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)},getEducationLevel(t){const e=document.getElementById("educationLevel");if(!e)return!1;const s=this.$echarts.init(e,null,{devicePixelRatio:2});let n,i=[];for(let a in this.educationItems)this.educationItems.hasOwnProperty(a)&&i.push({name:a,value:this.educationItems[a].length});n={color:(0,m.zB)(),tooltip:{alwaysShowContent:!1,trigger:"item"},legend:{left:"5%",top:"9.5%",height:"80%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:12,textStyle:{fontSize:"12",color:"#333333"},orient:"vertical"},series:[{type:"pie",center:["68%","50%"],radius:[60,90],itemStyle:{borderColor:"#fff",borderWidth:1},label:{formatter:"{c}",lineHeight:24,position:"inside",color:"#FFF"},data:t?i:[]}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize),setTimeout((function(){s.resize()}),500)},getSeniority(t){const e=document.getElementById("seniority");if(!e)return!1;const s=this.$echarts.init(e,null,{devicePixelRatio:2});let n,i=[];for(let a in this.seniorityList)this.seniorityList.hasOwnProperty(a)&&i.push({name:a,value:(this.seniorityList[a].length/this.buEmployeeItems.length*100).toFixed(2)});n={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:["#5579ED"],legend:{},grid:{top:"0%",left:"3%",right:"5%",bottom:"7%",containLabel:!0},yAxis:{type:"value",splitNumber:3,axisLabel:{fontSize:"0",show:!1}},xAxis:{type:"category",data:i.map((t=>t.name)),axisTick:{alignWithLabel:!0,count:4},axisLabel:{color:"#535353",fontSize:"12"},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:t?i.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[3,3,3,3]},label:{lineHeight:20,show:!0,formatter:"{c}%",position:"top",color:"#666666",fontSize:"12"}}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)}}},p=u,d=s(845),g=(0,d.A)(p,n,i,!1,null,"eb4ea5ae",null),v=g.exports},2407:function(t,e,s){s.d(e,{a5:function(){return r},n7:function(){return i},of:function(){return n},y7:function(){return a},zB:function(){return o}});s(4114);function n(t,e){const s=JSON.parse(JSON.stringify(t)),i=Object.keys(t);return i.forEach((i=>{-1!==[null,void 0,""].indexOf(s[i])?delete s[i]:e&&"object"===typeof t[i]&&!Array.isArray(t[i])&&(s[i]=n(s[i]))})),s}function i(t,e){if(!t)return"";const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Date(t),a=i.getFullYear(),o=String(i.getMonth()+1).padStart(2,0),r=s[i.getMonth()],l=n[i.getMonth()],c=String(i.getDate()).padStart(2,0),h=String(i.getHours()).padStart(2,0),m=String(i.getMinutes()).padStart(2,0),u=String(i.getSeconds()).padStart(2,0);switch(e){case"slash":return`${a}/${o}/${c}`;case"year":return`${a}`;case"monthN":return`${a}-${o}`;case"monthLong":return`${a}-${l}`;case"month":return`${a}-${r}`;case"monthsh":return`${a}/${o}`;case"day":return`${c}-${o}-${a}`;case"timestamp":return`${a}${o}${c}${h}${m}`;case"obj":return{y:a,m:o,d:c,h:h,min:m,s:u};case"normal":return`${a}-${o}-${c} ${h}:${m}:${u}`;case"normalHours":return`${a}-${o}-${c} ${h}`;case"normalMin":return`${a}-${o}-${c} ${h}:${m}`;case"normalDay":return`${a}-${r}-${c}`;case"normalDay2":return`${a}-${o}-${c}`;default:return`${o}-${c}-${a} ${h}:${m}`}}const a=t=>{const e=new Date(t),s=e.getFullYear(),n=e.getMonth(),i=t=>t%4===0&&t%100!==0||t%400===0,a=[31,i(s)?29:28,31,30,31,30,31,31,30,31,30,31][n];return a},o=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},r=(t,e,s)=>{const n=s?new Date(s):new Date,i=n.getFullYear(),a=n.getMonth()-(e||0),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let c=5;c>=0;c--){const e=a-c<0?i-1:i,s=(a-c+12)%12,n=t?r[s]:o[s],h=`${e}-${n}`;l.push(h)}return l}},597:function(t,e,s){t.exports=s.p+"img/select.566d2950.svg"},2687:function(t,e,s){t.exports=s.p+"img/icon_2.1a764baf.svg"},8046:function(t,e,s){t.exports=s.p+"img/icon_3.9e4b309f.svg"},6227:function(t,e,s){t.exports=s.p+"img/icon_6.ffd37528.svg"},2498:function(t,e,s){t.exports=s.p+"img/icon_7.0a915d25.svg"},197:function(t,e,s){t.exports=s.p+"img/icon_8.557a1628.svg"}}]);