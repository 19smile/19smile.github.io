"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[109],{9109:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{ref:"overview",staticClass:"content del"},[t("van-sticky",{attrs:{"offset-top":48,container:e.overview}},[t("van-row",{staticClass:"select-box select-box",attrs:{gutter:"6"}},[t("van-col",{attrs:{span:"12"}},[t("span",{staticClass:"fs-20",on:{click:function(t){e.show=!0}}},[e._v(e._s(e.selBu))]),t("img",{attrs:{width:"24px",src:n(597)},on:{click:function(t){e.show=!0}}})]),t("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[t("div",{staticClass:"sel-month"},[t("span",{on:{click:function(t){e.showMonth=!0}}},[e._v(e._s(e.selMonth))]),t("img",{attrs:{width:"24px",src:n(597)},on:{click:function(t){e.showMonth=!0}}})])])],1)],1),t("van-action-sheet",{attrs:{title:"Select",round:!1,actions:e.buLists},on:{select:e.onSelect},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),t("van-action-sheet",{attrs:{round:!1},model:{value:e.showMonth,callback:function(t){e.showMonth=t},expression:"showMonth"}},[t("van-datetime-picker",{attrs:{"min-date":e.minDate,type:"year-month",formatter:e.formatter},on:{confirm:e.confirm,cancel:function(t){e.showMonth=!1}},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[e._m(0),t("van-row",{staticClass:"gender-total",attrs:{gutter:"14"}},[t("van-col",{attrs:{span:8}},[t("div",{staticClass:"gender-total-items align-center justify-center"},[t("div",{staticClass:"text-center"},[t("p",[t("img",{attrs:{src:n(9367)}})]),t("p",{staticClass:"remark fs-14 text-gray"},[e._v("Female")]),t("p",{staticClass:"number fs-24 text-pink"},[e._v(e._s(e.genderF.length))])])])]),t("van-col",{attrs:{span:8}},[t("div",{staticClass:"gender-total-items align-center justify-center"},[t("div",{staticClass:"text-center"},[t("p",[t("img",{attrs:{src:n(4516)}})]),t("p",{staticClass:"remark fs-14 text-gray"},[e._v("Male")]),t("p",{staticClass:"number fs-24 text-blue3"},[e._v(e._s(e.genderM.length))])])])]),t("van-col",{attrs:{span:8}},[t("div",{staticClass:"gender-total-items align-center justify-center"},[t("div",{staticClass:"text-center"},[t("p",[t("img",{attrs:{src:n(2589)}})]),t("p",{staticClass:"remark fs-14 text-gray"},[e._v("Unknow")]),t("p",{staticClass:"number fs-24 text-success2"},[e._v(e._s(e.genderU.length))])])])])],1),e._m(1)],1),t("div",{staticClass:"content-items-content mt-12"},[e._m(2),t("div",{staticClass:"percentage-box"},[e._m(3),t("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[t("div",{staticClass:"percentage-box-items bg-purple",style:{width:e.getPercentage(e.MgenderF.length,e.Mgender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.MgenderF.length,e.Mgender.length))+"%")])]),t("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:e.getPercentage(e.MgenderM.length,e.Mgender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.MgenderM.length,e.Mgender.length))+"%")])])])]),t("div",{staticClass:"percentage-box"},[e._m(4),t("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[t("div",{staticClass:"percentage-box-items bg-purple",style:{width:e.getPercentage(e.MgenderF2.length,e.Mgender2.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.MgenderF2.length,e.Mgender2.length))+"%")])]),t("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:e.getPercentage(e.MgenderM2.length,e.Mgender2.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.MgenderM2.length,e.Mgender2.length))+"%")])])])]),t("div",{staticClass:"percentage-box"},[e._m(5),t("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[t("div",{staticClass:"percentage-box-items bg-purple",style:{width:e.getPercentage(e.OtherGenderF.length,e.OtherGender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.OtherGenderF.length,e.OtherGender.length))+"%")])]),t("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:e.getPercentage(e.OtherGenderM.length,e.OtherGender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.OtherGenderM.length,e.OtherGender.length))+"%")])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:"Overview"!==e.selBu,expression:"selBu!=='Overview'"}],staticClass:"content-items-content mt-12"},[e._m(6),t("div",{staticClass:"percentage-box"},[e._m(7),t("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[t("div",{staticClass:"percentage-box-items bg-purple",style:{width:e.getPercentage(e.FLMgenderF.length,e.FLMgender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.FLMgenderF.length,e.FLMgender.length))+"%")])]),t("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:e.getPercentage(e.FLMgenderM.length,e.FLMgender.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.FLMgenderM.length,e.FLMgender.length))+"%")])])])]),t("div",{staticClass:"percentage-box"},[e._m(8),t("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[t("div",{staticClass:"percentage-box-items bg-purple",style:{width:e.getPercentage(e.FLMgenderF2.length,e.FLMgender2.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.FLMgenderF2.length,e.FLMgender2.length))+"%")])]),t("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:e.getPercentage(e.FLMgenderM2.length,e.FLMgender2.length)+"%"}},[t("span",[e._v(e._s(e.getPercentage(e.FLMgenderM2.length,e.FLMgender2.length))+"%")])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:"Overview"!==e.selBu,expression:"selBu!=='Overview'"}],staticClass:"content-items-content mt-12"},[e._m(9),t("div",{staticClass:"employee"},[t("div",{staticClass:"employee-items",style:{height:e.deptHeight}},[t("div",{staticClass:"employee-bar",style:{height:e.deptHeight},attrs:{id:"departments"}})])])])]),t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[e._m(10),t("div",{staticClass:"gender-pie"},[t("div",{staticClass:"pie-center justify-center align-center"},[t("div",[t("p",[e._v("Avg.")]),t("p",[e._v(e._s(e.average))])])]),t("div",{staticClass:"pie-content",attrs:{id:"ageLevel"}})])]),t("div",{staticClass:"content-items-content mt-12"},[e._m(11),t("div",{staticClass:"percentage-box"},[e._m(12),t("div",{staticClass:"percentage-box-content align-center text-white fs-12 fw-600 percentage-mini"},e._l(e.MAgeByGrade,(function(n,s){return e.getPercentage(n.data.length,e.MAgeByGradeTotal.length)>0?t("div",{key:s,staticClass:"percentage-box-items",style:{width:e.getPercentage(n.data.length,e.MAgeByGradeTotal.length)+"%",backgroundColor:e.colors[s]}},[t("span",[e._v(" "+e._s(e.getPercentage(n.data.length,e.MAgeByGradeTotal.length))+"% ")])]):e._e()})),0)]),t("div",{staticClass:"percentage-box"},[e._m(13),t("div",{staticClass:"percentage-box-content align-center text-white fs-12 fw-600 percentage-mini"},e._l(e.otherAgeByGrade,(function(n,s){return e.getPercentage(n.data.length,e.otherAgeByGradeTotal.length)>0?t("div",{key:s,staticClass:"percentage-box-items",style:{width:e.getPercentage(n.data.length,e.otherAgeByGradeTotal.length)+"%",backgroundColor:e.colors[s]}},[t("span",[e._v(" "+e._s(e.getPercentage(n.data.length,e.otherAgeByGradeTotal.length))+"% ")])]):e._e()})),0)])])]),e._m(14)],1)])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(2024)}}),t("span",[e._v("Gender")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"gender-pie"},[t("div",{staticClass:"pie-content",attrs:{id:"genderPie"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("span",[e._v("Gender Distribution by Grade")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Management Grade (B)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Management Grade (C)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Other Grade (D/E/F)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("span",[e._v("Gender Distribution by FL VS. Office")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("FL")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Office")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("span",[e._v("Gender Distribution by Departments")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(7563)}}),t("span",[e._v("Age Level")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items-title"},[t("span",[e._v("Age Distribution by Grade")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Management Grade (B&C)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[t("span",[e._v("Other Grade (D/E/F)")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content-items"},[t("div",{staticClass:"content-items-content"},[t("div",{staticClass:"content-items-title"},[t("img",{attrs:{width:"24px",src:n(5513)}}),t("span",[e._v("Training Hours Of Per Capita by BU")])]),t("div",{staticClass:"employee resignation"},[t("div",{staticClass:"employee-items resignation-items"},[t("div",{staticClass:"employee-bar",attrs:{id:"resignationList"}})])])])])}],r=(n(4114),n(7349)),a=n(3011),o=n(5520),l=n(2407),g=n(8193),c={name:"coreKPI",components:{Row:r.A,Col:a.A,Sticky:o.A},data(){const e={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...e,minDate:new Date("1970-01-01"),colors:(0,l.zB)(),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,show:!1,overview:null,bybu:null,resignationList:[{id:1,date:"2024/01",total:280},{id:2,date:"2024/02",total:280},{id:3,date:"2024/03",total:280},{id:4,date:"2024/04",total:280},{id:5,date:"2024/05",total:280},{id:6,date:"2024/06",total:280}],selBu:"",selMonth:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),buLists:[],genderF:0,genderM:0,genderU:0,MgenderF:0,MgenderM:0,MgenderF2:0,MgenderM2:0,OtherGenderF:0,OtherGenderM:0,Mgender:0,Mgender2:0,OtherGender:0,otherAgeByGradeTotal:[],MAgeByGradeTotal:[],trainingStat:[],showData:!1,average:0,ageLevelItems:{},FLMgenderF:0,FLMgenderM:0,FLMgenderF2:0,FLMgenderM2:0,FLMgender:0,FLMgender2:0}},computed:{employee(){return this.hrEmployee.filter((e=>{const t=new Date((0,l.n7)(new Date(e.resign_date),"monthN")).getTime(),n=new Date((0,l.n7)(new Date(e.hire_date),"monthN")).getTime(),s=(0,l.n7)(new Date((new Date).setMonth(new Date(this.selMonthN).getMonth())),"monthN");if(t>new Date(s).getTime()&&n<=new Date(s).getTime()||!e.resign_date&&n<=new Date(s).getTime())return e}))},employeeItems(){const e={};return this.employee.forEach((t=>{e[t.bu_code]=e[t.bu_code]||[],e[t.bu_code].push(t)})),e},MAgeByGrade(){this.MAgeByGradeTotal=[];let e=[];for(let t in this.ageLevelItems){let n=[];this.ageLevelItems.hasOwnProperty(t)&&(n=this.ageLevelItems[t].filter((e=>["B","C"].indexOf(e.emp_level)>-1)),e.push({sortby:parseInt(t.substring(0,2))||100,name:t,data:n}),this.MAgeByGradeTotal=this.MAgeByGradeTotal.concat(n))}return e=[...e].sort(((e,t)=>e.sortby-t.sortby)),e},otherAgeByGrade(){this.otherAgeByGradeTotal=[];let e=[];for(let t in this.ageLevelItems){let n=[];this.ageLevelItems.hasOwnProperty(t)&&(n=this.ageLevelItems[t].filter((e=>["D","E","F"].indexOf(e.emp_level)>-1)),e.push({sortby:parseInt(t.substring(0,2))||100,name:t,data:n}),this.otherAgeByGradeTotal=this.otherAgeByGradeTotal.concat(n))}return e=[...e].sort(((e,t)=>e.sortby-t.sortby)),e},trainingItems(){const e={};return this.trainingStat.forEach((t=>{e[t.bu_code]=e[t.bu_code]||[],e[t.bu_code].push(t)})),e},deptItems(){const e={};return this.buEmployeeItems.forEach((t=>{e[t.dept_code]=e[t.dept_code]||[],e[t.dept_code].push(t)})),e},deptLen(){return Object.keys(this.deptItems).length},deptHeight(){return 45*this.deptLen+20+"px"}},created(){this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.buEmployeeItems=this.employee,this.selBu="Overview",this.$nextTick((()=>{this.setEchars()}))},watch:{selBu(){this.setData()},showData(){this.setData()}},methods:{setEchartColor:l.zB,setData(){this.genderF=this.buEmployeeItems.filter((e=>"F"===e.gender)),this.genderM=this.buEmployeeItems.filter((e=>"M"===e.gender)),this.genderU=this.buEmployeeItems.filter((e=>"U"===e.gender)),this.Mgender=this.buEmployeeItems.filter((e=>["B"].indexOf(e.emp_level)>-1&&"U"!==e.gender)),this.Mgender2=this.buEmployeeItems.filter((e=>["C"].indexOf(e.emp_level)>-1&&"U"!==e.gender)),this.OtherGender=this.buEmployeeItems.filter((e=>["D","E","F"].indexOf(e.emp_level)>-1&&"U"!==e.gender)),this.MgenderF=this.buEmployeeItems.filter((e=>["B"].indexOf(e.emp_level)>-1&&"F"===e.gender)),this.MgenderF2=this.buEmployeeItems.filter((e=>["C"].indexOf(e.emp_level)>-1&&"F"===e.gender)),this.OtherGenderF=this.buEmployeeItems.filter((e=>["D","E","F"].indexOf(e.emp_level)>-1&&"F"===e.gender)),this.MgenderM=this.buEmployeeItems.filter((e=>["B"].indexOf(e.emp_level)>-1&&"M"===e.gender)),this.MgenderM2=this.buEmployeeItems.filter((e=>["C"].indexOf(e.emp_level)>-1&&"M"===e.gender)),this.OtherGenderM=this.buEmployeeItems.filter((e=>["D","E","F"].indexOf(e.emp_level)>-1&&"M"===e.gender)),this.FLMgender=this.buEmployeeItems.filter((e=>"Y"===e.is_frontline&&"U"!==e.gender)),this.FLMgender2=this.buEmployeeItems.filter((e=>"N"===e.is_frontline&&"U"!==e.gender)),this.FLMgenderF=this.buEmployeeItems.filter((e=>"Y"===e.is_frontline&&"F"===e.gender)),this.FLMgenderF2=this.buEmployeeItems.filter((e=>"N"===e.is_frontline&&"F"===e.gender)),this.FLMgenderM=this.buEmployeeItems.filter((e=>"Y"===e.is_frontline&&"M"===e.gender)),this.FLMgenderM2=this.buEmployeeItems.filter((e=>"N"===e.is_frontline&&"M"===e.gender)),this.$forceUpdate()},getPercentage(e,t,n){return 2===n?Math.round(e/t*100):(e/t*100).toFixed(2)},async getTrainingStat(){const e=await g.vc((0,l.of)({...this.$options.data().common,begin_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-01",end_day:(0,l.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,l.y7)(this.selMonthN)}));this.trainingStat=e.rows},async setEchars(e){await this.getTrainingStat(),this.ageLevelItems={},this.buEmployeeItems.forEach((e=>{this.ageLevelItems[e.age_group]=this.ageLevelItems[e.age_group]||[],this.ageLevelItems[e.age_group].push(e)})),this.average=Math.round(this.buEmployeeItems.map((e=>e.age)).reduce(((e,t)=>e+t),0)/this.buEmployeeItems.length),this.getAgeLevel(!1),this.getPenderPie(!0),this.getAgeLevel(!0),this.overview=this.$refs.overview,this.bybu=this.$refs.bybu,this.getResignation(!0),this.getEmployee(!0,e),this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getPenderPie(!0):this.getPenderPie(!1)}))})),this.observer.observe(document.getElementById("genderPie")),this.observer2=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getAgeLevel(!0):this.getAgeLevel(!1)}))})),this.observer2.observe(document.getElementById("ageLevel")),this.observer3=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getResignation(!0):this.getResignation(!1)}))})),this.observer3.observe(document.getElementById("resignationList")),this.observer4=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getEmployee(!0,!0):this.getEmployee(!1)}))})),this.observer4.observe(document.getElementById("departments"))},getName(e){return e.split(" ").map((e=>e[0])).join("")},formatter(e,t){return"year"===e?`${t}年`:"month"===e?`${t}月`:t},confirm(e){this.showData=!1,this.showMonth=!1,this.selMonth=(0,l.n7)(new Date(e),"month"),this.selMonthN=(0,l.n7)(new Date(e),"normalDay2"),"Overview"===this.selBu?this.buEmployeeItems=this.employee||[]:this.buEmployeeItems=this.employeeItems[this.selBu]||[],this.buEmployeeItems=[...this.buEmployeeItems],this.$forceUpdate(),this.$nextTick((()=>{this.showData=!0,this.setEchars(!0)}))},onSelect(e){"Overview"===e.value?this.buEmployeeItems=this.employee||[]:this.buEmployeeItems=this.employeeItems[e.value]||[],this.$forceUpdate(),this.show=!1,this.selBu=e.value,this.$nextTick((()=>{this.setEchars(!0)}))},getPenderPie(e){const t=document.getElementById("genderPie");if(!t)return!1;const n=this.$echarts.init(t,null,{devicePixelRatio:2});let s;s={tooltip:{alwaysShowContent:!1,trigger:"item",axisPointer:{type:"shadow"},formatter:function(e){return e?.data?.name+"\n"+e?.data?.data}},color:["#DAA6C0","#72C8B3","#799AE9"],legend:{position:"center",bottom:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:18,textStyle:{fontSize:12,color:"#9D8F9B"}},series:[{name:"",type:"pie",center:["51%","44%"],radius:"60%",data:e?[{data:this.genderF.length,value:(this.genderF.length/this.buEmployeeItems.length*100).toFixed(2),name:"F"},{data:this.genderU.length,value:(this.genderU.length/this.buEmployeeItems.length*100).toFixed(2),name:"U"},{data:this.genderM.length,value:(this.genderM.length/this.buEmployeeItems.length*100).toFixed(2),name:"M"}]:[],label:{formatter:"{b}: {c}%",lineHeight:10,fontSize:10.5,color:"#9D8F9B",distance:20},labelLine:{normal:{show:!0,length:7,length2:3}}}]},s&&"object"===typeof s&&n.setOption(s),window.addEventListener("resize",n.resize)},getAgeLevel(e){const t=document.getElementById("ageLevel");if(!t)return!1;const n=this.$echarts.init(t,null,{devicePixelRatio:2});let s,i=[],r=0;for(let a in this.ageLevelItems)r+=this.ageLevelItems[a].length,this.ageLevelItems.hasOwnProperty(a)&&i.push({sortby:parseInt(a.substring(0,2))||100,name:a,data:this.ageLevelItems[a].length,value:(this.ageLevelItems[a].length/this.buEmployeeItems.length*100).toFixed(2)});i=[...i].sort(((e,t)=>e.sortby-t.sortby)),s={color:this.setEchartColor(),tooltip:{alwaysShowContent:!1,trigger:"item",axisPointer:{type:"shadow"},formatter:function(e){return e?.data?.name+"\n"+e?.data?.data}},series:[{type:"pie",center:["51%","50%"],radius:[52,82],itemStyle:{borderColor:"#fff",borderWidth:1},label:{formatter:"{name|{b}}\n{time|{c}%}",lineHeight:12,rich:{name:{fontSize:10,color:"#999"},time:{fontSize:13,fontWeight:600,lineHeight:22,color:"#6B6B6B"}}},labelLine:{normal:{lineStyle:{color:"#E6E6E6"},show:!0,length:8,length2:10}},data:e?i:[]}]},s&&"object"===typeof s&&n.setOption(s),window.addEventListener("resize",n.resize)},getResignation(e){const t=document.getElementById("resignationList");if(!t)return!1;const n=this.$echarts.init(t,null,{devicePixelRatio:2});let s,i=[];for(let r in this.trainingItems)if(this.trainingItems.hasOwnProperty(r)){const e=this.trainingItems[r].map((e=>e.get_study_hours)),t=e.reduce(((e,t)=>e+t),0);i.push({name:r,value:(t/this.employeeItems[r]?.length).toFixed(1)})}i=[...i].sort(((e,t)=>parseInt(t.value)-parseInt(e.value))),s={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:["#5579ED"],legend:{},grid:{top:"8.5%",left:"3.5%",right:"4%",bottom:"2%",containLabel:!0},yAxis:{type:"value",splitNumber:4,axisLabel:{fontSize:"10",margin:10,color:"#505E72",formatter:function(e){return e.toFixed(1)}}},xAxis:{type:"category",data:i.map((e=>e.name)),axisTick:{},axisLabel:{color:"#505E72",fontSize:"10",rotate:40},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:e?i.map((e=>e.value)):[],barWidth:"20",itemStyle:{borderRadius:[2,2,2,2]},markLine:{lineStyle:{type:"dashed",color:"#343C50"},label:{position:"start",color:"#FFFFFF",fontSize:10,padding:3,distance:[0,0],backgroundColor:"#343C50"},data:[{type:"average",name:""}],symbol:["diamond","none"],symbolSize:[16,16]}}]},s&&"object"===typeof s&&n.setOption(s),window.addEventListener("resize",n.resize)},getEmployee(e,t){let n=[];for(let a in this.deptItems)if(this.deptItems.hasOwnProperty(a)){const e=this.deptItems[a].filter((e=>"F"===e.gender||"M"===e.gender)),t=this.deptItems[a].filter((e=>"F"===e.gender)),s=this.deptItems[a].filter((e=>"M"===e.gender));n.push({name:a,value:this.deptItems[a].length,gradeF:(t.length/e.length*100).toFixed(1),gradeM:(s.length/e.length*100).toFixed(1)})}n=[...n].sort(((e,t)=>e.value-t.value));const s=document.getElementById("departments");if(!s)return!1;const i=this.$echarts.init(s,null,{devicePixelRatio:2});let r;if(r={color:["#C47AAC","#9AB2E7"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"4%",left:"5.5%",right:"13%",bottom:"3%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:"0",color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:n.map((e=>e.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",stack:"total",data:e?n.map((e=>e.gradeF)):[],barWidth:"18",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,position:[3,-12],formatter:function(e){return Number(e.data)>0?e.data+"%":""},color:"#7CA0CE",fontSize:"12"}},{name:"",type:"bar",stack:"total",data:e?n.map((e=>e.gradeM)):[],barWidth:"18",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,position:["100%",-12],formatter:function(e){return Number(e.data)>0?e.data+"%":""},color:"#7CA0CE",fontSize:"12"}}]},r&&"object"===typeof r&&i.setOption(r),window.addEventListener("resize",i.resize),!t)return!1;setTimeout((function(){i.resize()}),500)}}},h=c,d=n(845),m=(0,d.A)(h,s,i,!1,null,"2d4a6a02",null),u=m.exports},2407:function(e,t,n){n.d(t,{a5:function(){return o},n7:function(){return i},of:function(){return s},y7:function(){return r},zB:function(){return a}});n(4114);function s(e,t){const n=JSON.parse(JSON.stringify(e)),i=Object.keys(e);return i.forEach((i=>{-1!==[null,void 0,""].indexOf(n[i])?delete n[i]:t&&"object"===typeof e[i]&&!Array.isArray(e[i])&&(n[i]=s(n[i]))})),n}function i(e,t){if(!e)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Date(e),r=i.getFullYear(),a=String(i.getMonth()+1).padStart(2,0),o=n[i.getMonth()],l=s[i.getMonth()],g=String(i.getDate()).padStart(2,0),c=String(i.getHours()).padStart(2,0),h=String(i.getMinutes()).padStart(2,0),d=String(i.getSeconds()).padStart(2,0);switch(t){case"slash":return`${r}/${a}/${g}`;case"year":return`${r}`;case"monthN":return`${r}-${a}`;case"monthLong":return`${r}-${l}`;case"month":return`${r}-${o}`;case"monthsh":return`${r}/${a}`;case"day":return`${g}-${a}-${r}`;case"timestamp":return`${r}${a}${g}${c}${h}`;case"obj":return{y:r,m:a,d:g,h:c,min:h,s:d};case"normal":return`${r}-${a}-${g} ${c}:${h}:${d}`;case"normalHours":return`${r}-${a}-${g} ${c}`;case"normalMin":return`${r}-${a}-${g} ${c}:${h}`;case"normalDay":return`${r}-${o}-${g}`;case"normalDay2":return`${r}-${a}-${g}`;case"normalDay3":return`${r}-${l}-${g}`;case"normalDay4":return`${r}/${l}/${g}`;default:return`${a}-${g}-${r} ${c}:${h}`}}const r=e=>{const t=new Date(e),n=t.getFullYear(),s=t.getMonth(),i=e=>e%4===0&&e%100!==0||e%400===0,r=[31,i(n)?29:28,31,30,31,30,31,31,30,31,30,31][s];return r},a=()=>{let e=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return e},o=(e,t,n)=>{const s=n?new Date(n):new Date,i=s.getFullYear(),r=s.getMonth()-(t||0),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let g=5;g>=0;g--){const t=r-g<0?i-1:i,n=(r-g+12)%12,s=e?o[n]:a[n],c=`${t}-${s}`;l.push(c)}return l}},597:function(e,t,n){e.exports=n.p+"img/select.566d2950.svg"},9367:function(e,t,n){e.exports=n.p+"img/female.7c80b5b2.svg"},2024:function(e,t,n){e.exports=n.p+"img/icon_1.7283ab4a.svg"},7563:function(e,t,n){e.exports=n.p+"img/icon_2.ee20bdf1.svg"},4516:function(e,t,n){e.exports=n.p+"img/male.9dbc4324.svg"},2589:function(e,t,n){e.exports=n.p+"img/unisex.af4a8add.svg"},5513:function(e,t,n){e.exports=n.p+"img/icon_5.ccb06ef0.svg"}}]);