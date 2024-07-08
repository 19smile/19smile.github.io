"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[956],{8956:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",[t("div",{ref:"overview",staticClass:"content del"},[t("van-sticky",{attrs:{"offset-top":48,container:e.overview}},[t("van-row",{staticClass:"select-box select-box",attrs:{gutter:"6"}},[t("van-col",{attrs:{span:"12"}},[t("span",{staticClass:"fs-20",on:{click:function(t){e.show=!0}}},[e._v(e._s(e.selBu))]),t("img",{attrs:{width:"24px",src:s(597)},on:{click:function(t){e.show=!0}}})]),t("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[t("div",{staticClass:"sel-month"},[t("span",{on:{click:function(t){e.showMonth=!0}}},[e._v(e._s(e.selMonth))]),t("img",{attrs:{width:"24px",src:s(597)},on:{click:function(t){e.showMonth=!0}}})])])],1)],1),t("van-action-sheet",{attrs:{title:"Select",round:!1,actions:e.buLists},on:{select:e.onSelect},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),t("van-action-sheet",{attrs:{round:!1},model:{value:e.showMonth,callback:function(t){e.showMonth=t},expression:"showMonth"}},[t("van-datetime-picker",{attrs:{"min-date":e.minDate,type:"year-month",formatter:e.formatter},on:{confirm:e.confirm,cancel:function(t){e.showMonth=!1}},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[e._m(0),t("van-row",{staticClass:"gender-total",attrs:{gutter:"14"}},[t("van-col",{attrs:{span:8}},[t("div",{staticClass:"gender-total-items align-center justify-center"},[t("div",{staticClass:"text-center"},[t("p",[t("img",{attrs:{src:s(9367)}})]),t("p",{staticClass:"remark fs-14 text-gray"},[e._v("Female")]),t("p",{staticClass:"number fs-24 text-pink"},[e._v(e._s(e.genderF.length))])])])]),t("van-col",{attrs:{span:8}},[t("div",{staticClass:"gender-total-items align-center justify-center"},[t("div",{staticClass:"text-center"},[t("p",[t("img",{attrs:{src:s(4516)}})]),t("p",{staticClass:"remark fs-14 text-gray"},[e._v("Male")]),t("p",{staticClass:"number fs-24 text-blue3"},[e._v(e._s(e.genderM.length))])])])]),t("van-col",{attrs:{span:8}},[t("div",{staticClass:"gender-total-items align-center justify-center"},[t("div",{staticClass:"text-center"},[t("p",[t("img",{attrs:{src:s(2589)}})]),t("p",{staticClass:"remark fs-14 text-gray"},[e._v("Unisex")]),t("p",{staticClass:"number fs-24 text-success2"},[e._v(e._s(e.genderU.length))])])])])],1),e._m(1)],1),t("div",{staticClass:"content-items-content mt-12"},[e._m(2),t("div",{staticClass:"percentage-box"},[e._m(3),t("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[t("div",{staticClass:"percentage-box-items bg-purple",style:{width:e.getPercentage(e.MgenderF.length,e.Mgender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.MgenderF.length,e.Mgender.length))+"%")])]),t("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:e.getPercentage(e.MgenderM.length,e.Mgender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.MgenderM.length,e.Mgender.length))+"%")])])])]),t("div",{staticClass:"percentage-box"},[e._m(4),t("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[t("div",{staticClass:"percentage-box-items bg-purple",style:{width:e.getPercentage(e.OtherGenderF.length,e.OtherGender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.OtherGenderF.length,e.OtherGender.length))+"%")])]),t("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:e.getPercentage(e.OtherGenderM.length,e.OtherGender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.OtherGenderM.length,e.OtherGender.length))+"%")])])])])])]),t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[e._m(5),t("div",{staticClass:"gender-pie"},[t("div",{staticClass:"pie-center justify-center align-center"},[t("div",[t("p",[e._v("Avg.")]),t("p",[e._v(e._s(e.average))])])]),t("div",{staticClass:"pie-content",attrs:{id:"ageLevel"}})])]),t("div",{staticClass:"content-items-content mt-12"},[e._m(6),t("div",{staticClass:"percentage-box"},[e._m(7),t("div",{staticClass:"percentage-box-content align-center text-white fs-12 fw-600 percentage-mini"},e._l(e.MAgeByGrade,(function(s,n){return e.getPercentage(s.data.length,e.MAgeByGradeTotal.length)>0?t("div",{key:n,staticClass:"percentage-box-items",style:{width:e.getPercentage(s.data.length,e.MAgeByGradeTotal.length)+"%",backgroundColor:e.colors[n]}},[t("span",[e._v(" "+e._s(e.getPercentage(s.data.length,e.MAgeByGradeTotal.length))+"% ")])]):e._e()})),0)]),t("div",{staticClass:"percentage-box"},[e._m(8),t("div",{staticClass:"percentage-box-content align-center text-white fs-12 fw-600 percentage-mini"},e._l(e.otherAgeByGrade,(function(s,n){return e.getPercentage(s.data.length,e.otherAgeByGradeTotal.length)>0?t("div",{key:n,staticClass:"percentage-box-items",style:{width:e.getPercentage(s.data.length,e.otherAgeByGradeTotal.length)+"%",backgroundColor:e.colors[n]}},[t("span",[e._v(" "+e._s(e.getPercentage(s.data.length,e.otherAgeByGradeTotal.length))+"% ")])]):e._e()})),0)])])]),e._m(9),t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[t("div",{staticClass:"content-items-title content-items-title-2"},[e._m(10),t("div",{staticClass:"content-items-title-right"},[e._v(e._s(e.longterm.length))])]),t("div",{staticClass:"card-list fs-14"},e._l(e.longterm,(function(s,n){return t("van-row",{key:s.id,staticClass:"card-list-content",attrs:{gutter:"8"}},[t("van-col",{staticClass:"card-list-left",attrs:{span:"18"}},[t("div",{staticClass:"card-list-left-content"},[t("div",{staticClass:"card-list-left-logo"},[t("img",{attrs:{width:"100%",src:s.img_url}})]),t("div",{staticClass:"card-list-left-text"},[t("p",[e._v(e._s(s.name_en))]),t("p",{staticClass:"fs-12"},[e._v(e._s(s.dept_code))])])])]),t("van-col",{staticClass:"card-list-right text-right",attrs:{span:"6"}},[e._v(" "+e._s(s.hire_year_num)+" Years ")])],1)})),1)])])],1)])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:s(2024)}}),t("span",[e._v("Gender")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"gender-pie"},[t("div",{staticClass:"pie-content",attrs:{id:"genderPie"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("span",[e._v("Gender Distribution by Grade")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Management Grade (B&C)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Other Grade (D/E/F)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:s(7563)}}),t("span",[e._v("Age Level")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("span",[e._v("Age Distribution by Grade")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Management Grade (B&C)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Other Grade (D/E/F)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:s(5513)}}),t("span",[e._v("Training Hours Of Per Capita by BU")])]),t("div",{staticClass:"employee resignation"},[t("div",{staticClass:"employee-items resignation-items"},[t("div",{staticClass:"employee-bar",attrs:{id:"resignationList"}})])])])])},function(){var e=this,t=e._self._c;return t("div",[t("img",{attrs:{width:"24px",src:s(5098)}}),t("span",[e._v("Long-term Service")])])}],a=(s(4114),s(7349)),r=s(3011),o=s(5520),l=s(2407),c=s(8193),h={name:"coreKPI",components:{Row:a.A,Col:r.A,Sticky:o.A},data(){const e={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...e,minDate:new Date("1970-01-01"),colors:(0,l.zB)(),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,show:!1,overview:null,bybu:null,resignationList:[{id:1,date:"2024/01",total:280},{id:2,date:"2024/02",total:280},{id:3,date:"2024/03",total:280},{id:4,date:"2024/04",total:280},{id:5,date:"2024/05",total:280},{id:6,date:"2024/06",total:280}],selBu:"",selMonth:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),buLists:[],genderF:0,genderM:0,genderU:0,MgenderF:0,MgenderM:0,OtherGenderF:0,OtherGenderM:0,Mgender:0,OtherGender:0,otherAgeByGradeTotal:[],MAgeByGradeTotal:[],trainingStat:[],longterm:[],showData:!1,average:0,ageLevelItems:{}}},computed:{employee(){return this.hrEmployee.filter((e=>{const t=new Date((0,l.n7)(new Date(e.resign_date),"monthN")).getTime(),s=new Date((0,l.n7)(new Date(e.hire_date),"monthN")).getTime(),n=(0,l.n7)(new Date((new Date).setMonth(new Date(this.selMonthN).getMonth())),"monthN");if(t>new Date(n).getTime()&&s<=new Date(n).getTime()||!e.resign_date&&s<=new Date(n).getTime())return e}))},employeeItems(){const e={};return this.employee.forEach((t=>{e[t.bu_code]=e[t.bu_code]||[],e[t.bu_code].push(t)})),e},MAgeByGrade(){this.MAgeByGradeTotal=[];let e=[];for(let t in this.ageLevelItems){let s=[];this.ageLevelItems.hasOwnProperty(t)&&(s=this.ageLevelItems[t].filter((e=>["B","C"].indexOf(e.emp_level)>-1)),e.push({sortby:parseInt(t.substring(0,2))||100,name:t,data:s}),this.MAgeByGradeTotal=this.MAgeByGradeTotal.concat(s))}return e=[...e].sort(((e,t)=>e.sortby-t.sortby)),e},otherAgeByGrade(){this.otherAgeByGradeTotal=[];let e=[];for(let t in this.ageLevelItems){let s=[];this.ageLevelItems.hasOwnProperty(t)&&(s=this.ageLevelItems[t].filter((e=>["D","E","F"].indexOf(e.emp_level)>-1)),e.push({sortby:parseInt(t.substring(0,2))||100,name:t,data:s}),this.otherAgeByGradeTotal=this.otherAgeByGradeTotal.concat(s))}return e=[...e].sort(((e,t)=>e.sortby-t.sortby)),e},trainingItems(){const e={};return this.trainingStat.forEach((t=>{e[t.bu_code]=e[t.bu_code]||[],e[t.bu_code].push(t)})),e}},created(){this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.buEmployeeItems=this.employee,this.selBu="Overview",this.$nextTick((()=>{this.setEchars()}))},watch:{selBu(){this.setData()},showData(){this.setData()}},methods:{setEchartColor:l.zB,setData(){this.genderF=this.buEmployeeItems.filter((e=>"F"===e.gender)),this.genderM=this.buEmployeeItems.filter((e=>"M"===e.gender)),this.genderU=this.buEmployeeItems.filter((e=>"U"===e.gender)),this.Mgender=this.buEmployeeItems.filter((e=>["B","C"].indexOf(e.emp_level)>-1&&"U"!==e.gender)),this.OtherGender=this.buEmployeeItems.filter((e=>["D","E","F"].indexOf(e.emp_level)>-1&&"U"!==e.gender)),this.MgenderF=this.buEmployeeItems.filter((e=>["B","C"].indexOf(e.emp_level)>-1&&"F"===e.gender)),this.OtherGenderF=this.buEmployeeItems.filter((e=>["D","E","F"].indexOf(e.emp_level)>-1&&"F"===e.gender)),this.MgenderM=this.buEmployeeItems.filter((e=>["B","C"].indexOf(e.emp_level)>-1&&"M"===e.gender)),this.OtherGenderM=this.buEmployeeItems.filter((e=>["D","E","F"].indexOf(e.emp_level)>-1&&"M"===e.gender)),this.$forceUpdate()},getPercentage(e,t,s){return 2===s?Math.round(e/t*100):(e/t*100).toFixed(2)},async getTrainingStat(){const e=await c.vc((0,l.of)({...this.$options.data().common,begin_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-01",end_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,l.y7)(this.selMonthN)}));this.trainingStat=e.rows},async setEchars(){await this.getTrainingStat(),this.ageLevelItems={},this.buEmployeeItems.forEach((e=>{this.ageLevelItems[e.age_group]=this.ageLevelItems[e.age_group]||[],this.ageLevelItems[e.age_group].push(e)})),this.average=Math.round(this.buEmployeeItems.map((e=>e.age)).reduce(((e,t)=>e+t),0)/this.buEmployeeItems.length),this.getAgeLevel(!1),this.getPenderPie(!0),this.getAgeLevel(!0),this.overview=this.$refs.overview,this.bybu=this.$refs.bybu,this.getResignation(!0);const e=new Date(this.selMonthN).getMonth()+1,t=this.buEmployeeItems.filter((t=>"在职"===t.status&&10===t.hire_year_num&&new Date(t.hire_date).getMonth()+1-e===1)),s=this.buEmployeeItems.filter((t=>"在职"===t.status&&20===t.hire_year_num&&new Date(t.hire_date).getMonth()+1-e===1));this.longterm=s.concat(t),this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getPenderPie(!0):this.getPenderPie(!1)}))})),this.observer.observe(document.getElementById("genderPie")),this.observer2=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getAgeLevel(!0):this.getAgeLevel(!1)}))})),this.observer2.observe(document.getElementById("ageLevel")),this.observer3=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getResignation(!0):this.getResignation(!1)}))})),this.observer3.observe(document.getElementById("resignationList"))},getName(e){return e.split(" ").map((e=>e[0])).join("")},formatter(e,t){return"year"===e?`${t}年`:"month"===e?`${t}月`:t},confirm(e){this.showData=!1,this.showMonth=!1,this.selMonth=(0,l.n7)(new Date(e),"month"),this.selMonthN=(0,l.n7)(new Date(e),"normalDay2"),"Overview"===this.selBu?this.buEmployeeItems=this.employee||[]:this.buEmployeeItems=this.employeeItems[this.selBu]||[],this.buEmployeeItems=[...this.buEmployeeItems],this.$forceUpdate(),this.$nextTick((()=>{this.showData=!0,this.setEchars()}))},onSelect(e){"Overview"===e.value?this.buEmployeeItems=this.employee||[]:this.buEmployeeItems=this.employeeItems[e.value]||[],this.$forceUpdate(),this.show=!1,this.selBu=e.value,this.$nextTick((()=>{this.setEchars()}))},getPenderPie(e){const t=document.getElementById("genderPie");if(!t)return!1;const s=this.$echarts.init(t,null,{devicePixelRatio:2});let n;n={color:["#DAA6C0","#72C8B3","#799AE9"],legend:{position:"center",bottom:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:18,textStyle:{fontSize:12,color:"#9D8F9B"}},series:[{name:"",type:"pie",center:["51%","44%"],radius:"60%",data:e?[{value:(this.genderF.length/this.buEmployeeItems.length*100).toFixed(2),name:"F"},{value:(this.genderU.length/this.buEmployeeItems.length*100).toFixed(2),name:"U"},{value:(this.genderM.length/this.buEmployeeItems.length*100).toFixed(2),name:"M"}]:[],label:{formatter:"{b}: {c}%",lineHeight:10,fontSize:10.5,color:"#9D8F9B",distance:20},labelLine:{normal:{show:!0,length:7,length2:3}}}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)},getAgeLevel(e){const t=document.getElementById("ageLevel");if(!t)return!1;const s=this.$echarts.init(t,null,{devicePixelRatio:2});let n,i=[],a=0;for(let r in this.ageLevelItems)a+=this.ageLevelItems[r].length,this.ageLevelItems.hasOwnProperty(r)&&i.push({sortby:parseInt(r.substring(0,2))||100,name:r,value:(this.ageLevelItems[r].length/this.buEmployeeItems.length*100).toFixed(2)});i=[...i].sort(((e,t)=>e.sortby-t.sortby)),n={color:this.setEchartColor(),series:[{type:"pie",center:["51%","50%"],radius:[52,82],itemStyle:{borderColor:"#fff",borderWidth:1},label:{formatter:"{name|{b}}\n{time|{c}%}",lineHeight:12,rich:{name:{fontSize:10,color:"#999"},time:{fontSize:13,fontWeight:600,lineHeight:22,color:"#6B6B6B"}}},labelLine:{normal:{lineStyle:{color:"#E6E6E6"},show:!0,length:8,length2:10}},data:e?i:[]}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)},getResignation(e){const t=document.getElementById("resignationList");if(!t)return!1;const s=this.$echarts.init(t,null,{devicePixelRatio:2});let n,i=[];for(let a in this.trainingItems)if(this.trainingItems.hasOwnProperty(a)){const e=this.trainingItems[a].map((e=>e.get_study_hours)),t=e.reduce(((e,t)=>e+t),0);i.push({name:a,value:(t/this.employeeItems[a]?.length).toFixed(1)})}i=[...i].sort(((e,t)=>parseInt(t.value)-parseInt(e.value))),n={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:["#5579ED"],legend:{},grid:{top:"8.5%",left:"3.5%",right:"4%",bottom:"2%",containLabel:!0},yAxis:{type:"value",splitNumber:4,axisLabel:{fontSize:"10",margin:10,color:"#505E72",formatter:function(e){return e.toFixed(1)}}},xAxis:{type:"category",data:i.map((e=>e.name)),axisTick:{},axisLabel:{color:"#505E72",fontSize:"10",rotate:40},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:e?i.map((e=>e.value)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},markLine:{lineStyle:{type:"dashed",color:"#343C50"},label:{position:"start",color:"#FFFFFF",fontSize:10,padding:3,distance:[0,0],backgroundColor:"#343C50"},data:[{type:"average",name:""}],symbol:["diamond","none"],symbolSize:[16,16]}}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)}}},g=h,d=s(845),m=(0,d.A)(g,n,i,!1,null,"7e5e61de",null),u=m.exports},2407:function(e,t,s){s.d(t,{a5:function(){return o},n7:function(){return i},of:function(){return n},y7:function(){return a},zB:function(){return r}});s(4114);function n(e,t){const s=JSON.parse(JSON.stringify(e)),i=Object.keys(e);return i.forEach((i=>{-1!==[null,void 0,""].indexOf(s[i])?delete s[i]:t&&"object"===typeof e[i]&&!Array.isArray(e[i])&&(s[i]=n(s[i]))})),s}function i(e,t){if(!e)return"";const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Date(e),a=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,0),o=s[i.getMonth()],l=n[i.getMonth()],c=String(i.getDate()).padStart(2,0),h=String(i.getHours()).padStart(2,0),g=String(i.getMinutes()).padStart(2,0),d=String(i.getSeconds()).padStart(2,0);switch(t){case"slash":return`${a}/${r}/${c}`;case"year":return`${a}`;case"monthN":return`${a}-${r}`;case"monthLong":return`${a}-${l}`;case"month":return`${a}-${o}`;case"monthsh":return`${a}/${r}`;case"day":return`${c}-${r}-${a}`;case"timestamp":return`${a}${r}${c}${h}${g}`;case"obj":return{y:a,m:r,d:c,h:h,min:g,s:d};case"normal":return`${a}-${r}-${c} ${h}:${g}:${d}`;case"normalHours":return`${a}-${r}-${c} ${h}`;case"normalMin":return`${a}-${r}-${c} ${h}:${g}`;case"normalDay":return`${a}-${o}-${c}`;case"normalDay2":return`${a}-${r}-${c}`;default:return`${r}-${c}-${a} ${h}:${g}`}}const a=e=>{const t=new Date(e),s=t.getFullYear(),n=t.getMonth(),i=e=>e%4===0&&e%100!==0||e%400===0,a=[31,i(s)?29:28,31,30,31,30,31,31,30,31,30,31][n];return a},r=()=>{let e=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return e},o=(e,t,s)=>{const n=s?new Date(s):new Date,i=n.getFullYear(),a=n.getMonth()-(t||0),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let c=5;c>=0;c--){const t=a-c<0?i-1:i,s=(a-c+12)%12,n=e?o[s]:r[s],h=`${t}-${n}`;l.push(h)}return l}},597:function(e,t,s){e.exports=s.p+"img/select.566d2950.svg"},9367:function(e,t,s){e.exports=s.p+"img/female.7c80b5b2.svg"},2024:function(e,t,s){e.exports=s.p+"img/icon_1.7283ab4a.svg"},7563:function(e,t,s){e.exports=s.p+"img/icon_2.ee20bdf1.svg"},5098:function(e,t,s){e.exports=s.p+"img/icon_3.e7e0881f.svg"},4516:function(e,t,s){e.exports=s.p+"img/male.9dbc4324.svg"},2589:function(e,t,s){e.exports=s.p+"img/unisex.c0d83054.svg"},5513:function(e,t,s){e.exports=s.p+"img/icon_5.ccb06ef0.svg"}}]);