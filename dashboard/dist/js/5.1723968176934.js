"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[5],{7005:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"summary-bg"},[e("img",{attrs:{width:"430px",src:s(7543)}}),e("div",{staticClass:"summary-line"}),e("div",{staticClass:"title"},[t._v(t._s(t.$route.meta.key))])]),e("div",{staticClass:"content"},[e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("In-post")]),e("p",{staticClass:"text-yellow number"},[t._v(t._s(t._f("formatNumber")(t.inpostAll)))])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Forecast YoY")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t._f("formatNumber")(t.forecastAll)))])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",[e("div",{staticStyle:{width:"232px",height:"232px"},attrs:{id:"occupation"}})])])],1)],1),e("div",{staticClass:"content-items-content mt-12"},[t._m(1),e("div",{staticClass:"leave-items-content"},[e("div",{ref:"inpost",staticClass:"leave-items",style:{height:60*t.inpostList.length+50+"px"}},[e("van-row",[e("van-col",{staticClass:"leave-items-date pb-0",attrs:{span:"12"}},[t._v(" "+t._s(t.inpostList[t.inpostShow-1]?.the_year||"-")+" ")])],1),e("div",{staticClass:"leave-bar",style:{height:60*t.inpostList.length+12+"px"},attrs:{id:"inpost"}})],1)])])]),e("van-row",{staticClass:"select-box mt-16",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("van-sticky",{attrs:{"offset-top":0}},[e("div",{staticClass:"select-box mb-0 justify-center"},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.show=!0}}})])])],1),e("van-col",{staticClass:"justify-end",attrs:{span:"12"}},[e("div",{staticClass:"sel-month"},[e("span",{on:{click:function(e){t.showMonth=!0}}},[t._v(t._s(t.selMonth))]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.showMonth=!0}}})])])],1),e("van-action-sheet",{attrs:{title:"Select",round:!1,actions:t.buLists},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("van-action-sheet",{attrs:{round:!1},model:{value:t.showMonth,callback:function(e){t.showMonth=e},expression:"showMonth"}},[e("van-datetime-picker",{attrs:{"min-date":t.minDate,type:"year-month",formatter:t.formatter},on:{confirm:t.confirm,cancel:function(e){t.showMonth=!1}},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),e("div",{staticClass:"content-items del"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("van-row",{staticClass:"gender-total",attrs:{gutter:"14"}},[e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(9367)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Female")]),e("p",{staticClass:"number fs-24 text-pink"},[t._v(t._s(t.genderF.length))])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(4516)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Male")]),e("p",{staticClass:"number fs-24 text-blue3"},[t._v(t._s(t.genderM.length))])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"gender-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(2589)}})]),e("p",{staticClass:"remark fs-14 text-gray"},[t._v("Unknow")]),e("p",{staticClass:"number fs-24 text-success2"},[t._v(t._s(t.genderU.length))])])])])],1),t._m(3)],1),e("div",{staticClass:"content-items-content mt-12"},[t._m(4),e("div",{staticClass:"percentage-box"},[t._m(5),e("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[e("div",{staticClass:"percentage-box-items bg-purple",style:{width:t.getPercentage(t.MgenderF.length,t.Mgender.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.MgenderF.length,t.Mgender.length))+"%")])]),e("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:t.getPercentage(t.MgenderM.length,t.Mgender.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.MgenderM.length,t.Mgender.length))+"%")])])])]),e("div",{staticClass:"percentage-box"},[t._m(6),e("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[e("div",{staticClass:"percentage-box-items bg-purple",style:{width:t.getPercentage(t.MgenderF2.length,t.Mgender2.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.MgenderF2.length,t.Mgender2.length))+"%")])]),e("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:t.getPercentage(t.MgenderM2.length,t.Mgender2.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.MgenderM2.length,t.Mgender2.length))+"%")])])])]),e("div",{staticClass:"percentage-box"},[t._m(7),e("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[e("div",{staticClass:"percentage-box-items bg-purple",style:{width:t.getPercentage(t.OtherGenderF.length,t.OtherGender.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.OtherGenderF.length,t.OtherGender.length))+"%")])]),e("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:t.getPercentage(t.OtherGenderM.length,t.OtherGender.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.OtherGenderM.length,t.OtherGender.length))+"%")])])])])]),e("div",{staticClass:"content-items-content mt-12"},[t._m(8),e("div",{staticClass:"percentage-box"},[t._m(9),e("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[e("div",{staticClass:"percentage-box-items bg-purple",style:{width:t.getPercentage(t.FLMgenderF.length,t.FLMgender.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.FLMgenderF.length,t.FLMgender.length))+"%")])]),e("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:t.getPercentage(t.FLMgenderM.length,t.FLMgender.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.FLMgenderM.length,t.FLMgender.length))+"%")])])])]),e("div",{staticClass:"percentage-box"},[t._m(10),e("div",{staticClass:"percentage-box-content align-center text-white fs-18 fw-600"},[e("div",{staticClass:"percentage-box-items bg-purple",style:{width:t.getPercentage(t.FLMgenderF2.length,t.FLMgender2.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.FLMgenderF2.length,t.FLMgender2.length))+"%")])]),e("div",{staticClass:"percentage-box-items text-right bg-blue",style:{width:t.getPercentage(t.FLMgenderM2.length,t.FLMgender2.length)+"%"}},[e("span",[t._v(t._s(t.getPercentage(t.FLMgenderM2.length,t.FLMgender2.length))+"%")])])])])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(11),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"12"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Total Positions")]),e("p",{staticClass:"text-yellow number"},[t._v(t._s(t.totalPositions))])])])]),e("van-col",{staticClass:"in-post-left",attrs:{span:"12"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Onboard")]),e("p",{staticClass:"text-blue number"},[t._v(t._s(t.onboard))])])])]),e("van-col",{staticClass:"in-post-left mt-16",attrs:{span:"12"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Current Vacancies")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t.currentVacancies))])])])]),e("van-col",{staticClass:"in-post-left mt-16",attrs:{span:"12"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("On Hold")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t.onHold))])])])])],1)],1)]),e("div",{staticClass:"content-items training"},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"fs-20"},[t._v("Training")])]),e("van-col",{attrs:{span:"12 justify-end"}},[e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])])],1),e("van-row",{staticClass:"training-total",attrs:{gutter:"14"}},[e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(1525)}})]),e("p",{staticClass:"number fs-24 text-yellow"},[t._v(t._s(t._f("formatNumber")(t.arrDistinct(t.trainingYTD,"emp_id").length)))]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Total"),e("br"),t._v("Participants")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(278)}})]),e("p",{staticClass:"number fs-24 text-blue"},[t._v(t._s(t.arrDistinct(t.trainingEmpStat,"project_id").length))]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Num Of"),e("br"),t._v("Course")])])])]),e("van-col",{attrs:{span:8}},[e("div",{staticClass:"training-total-items align-center justify-center"},[e("div",{staticClass:"text-center"},[e("p",[e("img",{attrs:{src:s(7399)}})]),e("p",{staticClass:"number fs-24 text-success"},[t._v(t._s(t._f("formatNumber")(t.perHours))+"h")]),e("p",{staticClass:"remark fs-12 text-gray"},[t._v("Training hours"),e("br"),t._v("Of Person")])])])])],1)],1),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(12),e("van-row",{staticClass:"calendar-content",attrs:{gutter:"16"}},t._l(t.leaveMonth,(function(s,n){return e("van-col",{key:n,staticClass:"calendar-list",attrs:{span:"6"}},[e("div",{class:[s.value>50?"danger":"success"]},[e("div",{staticClass:"calendar-text text-center"},[e("p",{staticClass:"fs-18"},[t._v(t._s(s.value||"-")+t._s(s.value?"%":""))]),e("p",{staticClass:"fs-14"},[t._v(t._s(t.getMonth(s.name)))])])])])})),1)],1)]),t._m(13)],1)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:s(3660)}}),e("span",[t._v("Overall In-post")])]),e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("span",[t._v("In-post Rate by BU")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(2024)}}),e("span",[t._v("Gender")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"gender-pie"},[e("div",{staticClass:"pie-content",attrs:{id:"genderPie"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("span",[t._v("Gender Distribution by Grade")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Grade (B)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Management Grade (C)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Other Grade (D/E/F)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("span",[t._v("Gender Distribution by FL VS. Office")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("FL")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Office")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:s(2024)}}),e("span",[t._v("Recruitment Process")])]),e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(8640)}}),e("span",[t._v("Annual Leaves Calender")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(5683)}}),e("span",[t._v("Sick Leave Trend")])]),e("div",{staticClass:"monthy"},[e("div",{staticClass:"monthy-bar",attrs:{id:"sickBar"}})])])])}],a=(s(4114),s(7349)),r=s(3011),o=s(5520),l=s(2407),c=s(8193),h={name:"coreKPI",components:{Row:a.A,Col:r.A,Sticky:o.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,minDate:new Date("1970-01-01"),colors:(0,l.zB)(),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,show:!1,overview:null,bybu:null,selBu:"",selMonth:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,l.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),buLists:[],inpostList:[],inpostShow:1,empVSHeadcount:[],buLists:[],genderF:0,genderM:0,genderU:0,MgenderF:0,MgenderM:0,MgenderF2:0,MgenderM2:0,OtherGenderF:0,OtherGenderM:0,Mgender:0,Mgender2:0,OtherGender:0,otherAgeByGradeTotal:[],MAgeByGradeTotal:[],showData:!1,ageLevelItems:{},FLMgenderF:0,FLMgenderM:0,FLMgenderF2:0,FLMgenderM2:0,FLMgender:0,FLMgender2:0,recruitStat:[],recruited:0,vacancy:0,remain:0,totalPositions:0,onHold:0,currentVacancies:0,onboard:0,trainingEmpStat:[],trainingYTD:[],perHours:0,leaveDTLMonth:[]}},computed:{inpostAll(){const t=this.empVSHeadcount.map((t=>t.emp_cnt));let e=t.reduce(((t,e)=>t+e),0);return e},forecastAll(){const t=this.empVSHeadcount.map((t=>t.forecast));let e=t.reduce(((t,e)=>t+e),0);return e},employee(){return this.hrEmployee.filter((t=>{const e=new Date((0,l.n7)(new Date(t.resign_date),"monthN")).getTime(),s=new Date((0,l.n7)(new Date(t.hire_date),"monthN")).getTime(),n=(0,l.n7)(new Date((new Date).setMonth(new Date(this.selMonthN).getMonth())),"monthN");if(e>new Date(n).getTime()&&s<=new Date(n).getTime()||!t.resign_date&&s<=new Date(n).getTime())return t}))},employeeItems(){const t={};return this.employee.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),t},MAgeByGrade(){this.MAgeByGradeTotal=[];let t=[];for(let e in this.ageLevelItems){let s=[];this.ageLevelItems.hasOwnProperty(e)&&(s=this.ageLevelItems[e].filter((t=>["B","C"].indexOf(t.emp_level)>-1)),t.push({sortby:parseInt(e.substring(0,2))||100,name:e,data:s}),this.MAgeByGradeTotal=this.MAgeByGradeTotal.concat(s))}return t=[...t].sort(((t,e)=>t.sortby-e.sortby)),t},otherAgeByGrade(){this.otherAgeByGradeTotal=[];let t=[];for(let e in this.ageLevelItems){let s=[];this.ageLevelItems.hasOwnProperty(e)&&(s=this.ageLevelItems[e].filter((t=>["D","E","F"].indexOf(t.emp_level)>-1)),t.push({sortby:parseInt(e.substring(0,2))||100,name:e,data:s}),this.otherAgeByGradeTotal=this.otherAgeByGradeTotal.concat(s))}return t=[...t].sort(((t,e)=>t.sortby-e.sortby)),t},trainingEmpStatItems(){const t={};return this.trainingEmpStat.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),t},leaveDTLItems(){return this.leaveDTLMonth.filter((t=>["Sick Leave","Annual Leave","J01","J02","J04","J05"].indexOf(t.leave_code)>-1))},leaveDTLMonthItems(){const t={};return this.leaveDTLItems.forEach((e=>{t[e.the_month]=t[e.the_month]||[],t[e.the_month].push(e)})),t},leaveMonth(){let t=[];for(let s in this.leaveDTLMonthItems)if(this.leaveDTLMonthItems.hasOwnProperty(s)){let e=s.split("-")?.[0],n=s.split("-")?.[1],i=new Date(s+"-01").getMonth()+1,a=this.getleaveMonth(e,n,"leaveDTLMonthItems"),r=this.leaveDTLItems;const o=a.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0),l=r.map((t=>t.sickleave_should_used_days)).reduce(((t,e)=>t+e),0),c=r.map((t=>t.annualleave_should_used_days)).reduce(((t,e)=>t+e),0),h=o/(l+c);let g=h?(100*h).toFixed(1):0;const d=new Date(this.selMonthN).getMonth()+1;i>d&&(g=0),t.push({id:i,name:s,value:g})}let e=[];for(let s=1;s<=12;s++){let n=[];n=t.filter((t=>t.id==s)),n.length||(n=[{id:s,name:this.selYear+"-"+s,value:0}]),e=e.concat(n)}return e},employeeItemsAll(){const t={};return this.hrEmployee.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),Object.values(t)},employeeList(){const t={};let e=new Date;for(let s in this.employeeItemsAll){let n=[];t[this.employeeItemsAll[s]?.[0].bu_code]=[];for(let i=0;i<6;i++)n=this.employeeItemsAll[s].filter((t=>{const s=new Date((0,l.n7)(new Date(t.resign_date),"monthN")).getTime(),n=new Date((0,l.n7)(new Date(t.hire_date),"monthN")).getTime(),a=new Date((0,l.n7)(new Date(e.setMonth((new Date).getMonth()-i)),"monthN"));if(s>new Date(a).getTime()&&n<=new Date(a).getTime()||!t.resign_date&&n<=new Date(a).getTime())return t})),t[this.employeeItemsAll[s]?.[0].bu_code].push({value:n.length,month:i,bu_code:this.employeeItems[s]?.[0].bu_code})}return Object.values(t)},trendBarList(){let t=[];for(let s in this.employeeList)t=t.concat(this.employeeList[s]||[]);let e={};return t.forEach((t=>{e[t.month]=e[t.month]||[],e[t.month].push(t)})),Object.values(e).reverse()}},async mounted(){this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.buEmployeeItems=this.employee,this.selBu="Overview",await this.getEmpVSHeadcount(),this.$nextTick((()=>{this.showData=!0,this.setEcharsDI(),this.setEcharsH(),this.setEcharsRec(),this.setEcharsTrain(),this.setEcharsAttend()}))},watch:{selBu(){this.setData()},showData(){this.setData()}},methods:{getLastSixMonths:l.a5,arrDistinct:l.CA,setEchartColor:l.zB,getleaveMonth(t,e,s){let n=[];for(let i=1;i<=e;i++){const e=t+"-"+String(i).padStart(2,0);n=n.concat(this[s][e])}return n},setData(){this.genderF=this.buEmployeeItems.filter((t=>"F"===t.gender)),this.genderM=this.buEmployeeItems.filter((t=>"M"===t.gender)),this.genderU=this.buEmployeeItems.filter((t=>"U"===t.gender)),this.Mgender=this.buEmployeeItems.filter((t=>["B"].indexOf(t.emp_level)>-1&&"U"!==t.gender)),this.Mgender2=this.buEmployeeItems.filter((t=>["C"].indexOf(t.emp_level)>-1&&"U"!==t.gender)),this.OtherGender=this.buEmployeeItems.filter((t=>["D","E","F"].indexOf(t.emp_level)>-1&&"U"!==t.gender)),this.MgenderF=this.buEmployeeItems.filter((t=>["B"].indexOf(t.emp_level)>-1&&"F"===t.gender)),this.MgenderF2=this.buEmployeeItems.filter((t=>["C"].indexOf(t.emp_level)>-1&&"F"===t.gender)),this.OtherGenderF=this.buEmployeeItems.filter((t=>["D","E","F"].indexOf(t.emp_level)>-1&&"F"===t.gender)),this.MgenderM=this.buEmployeeItems.filter((t=>["B"].indexOf(t.emp_level)>-1&&"M"===t.gender)),this.MgenderM2=this.buEmployeeItems.filter((t=>["C"].indexOf(t.emp_level)>-1&&"M"===t.gender)),this.OtherGenderM=this.buEmployeeItems.filter((t=>["D","E","F"].indexOf(t.emp_level)>-1&&"M"===t.gender)),this.FLMgender=this.buEmployeeItems.filter((t=>"Y"===t.is_frontline&&"U"!==t.gender)),this.FLMgender2=this.buEmployeeItems.filter((t=>"N"===t.is_frontline&&"U"!==t.gender)),this.FLMgenderF=this.buEmployeeItems.filter((t=>"Y"===t.is_frontline&&"F"===t.gender)),this.FLMgenderF2=this.buEmployeeItems.filter((t=>"N"===t.is_frontline&&"F"===t.gender)),this.FLMgenderM=this.buEmployeeItems.filter((t=>"Y"===t.is_frontline&&"M"===t.gender)),this.FLMgenderM2=this.buEmployeeItems.filter((t=>"N"===t.is_frontline&&"M"===t.gender)),this.$forceUpdate()},getPercentage(t,e,s){return 2===s?Math.round(t/e*100):(t/e*100).toFixed(2)},async setEcharsDI(){this.getPenderPie(!0),this.ageLevelItems={},this.buEmployeeItems.forEach((t=>{this.ageLevelItems[t.age_group]=this.ageLevelItems[t.age_group]||[],this.ageLevelItems[t.age_group].push(t)})),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getPenderPie(!0):this.getPenderPie(!1)}))})),this.observer.observe(document.getElementById("genderPie"))},async setEcharsH(){this.getOccupation(!0),this.inpostShow=1,this.getInpost(this.inpostList),this.observerH=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getOccupation(!0):this.getOccupation(!1)}))})),this.observerH.observe(document.getElementById("occupation")),this.observerH2=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getInpost(this.inpostList):this.getInpost([])}))})),this.observerH2.observe(document.getElementById("inpost"))},async getEmpVSHeadcount(){const t=await c.pi(this.$options.data().common);this.empVSHeadcount=t.rows,this.inpostList=t.rows},getOccupation(t){const e=document.getElementById("occupation");if(!e)return!1;const s=this.$echarts.init(e,null,{devicePixelRatio:2});let n;const i=[{value:(this.inpostAll/this.forecastAll*100).toFixed(2),name:"In-post / Forecast",title:{offsetCenter:["0%","13%"],fontSize:12},detail:{valueAnimation:!0,offsetCenter:["0%","-7%"],fontSize:20}}];n={color:["#5579ED"],series:[{type:"gauge",startAngle:90,endAngle:-270,pointer:{show:!1},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1},axisLine:{lineStyle:{width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:t?i:[],title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",formatter:"{value}%"}}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)},getInpost(t){const e=document.getElementById("inpost");if(!e)return!1;const s=this.$echarts.init(e,null,{devicePixelRatio:2});let n;t.map((t=>{t.value=(t.emp_cnt/t.forecast*100).toFixed(2)})),t=[...t].sort(((t,e)=>t.value-e.value)),n={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:"3%",right:"5%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:20,lineHeight:24,textStyle:{fontSize:"12",color:"#666666"}},grid:{top:"5%",left:"5%",right:"6.5%",bottom:"11%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:t.length?t.map((t=>t.bu_code)):[],axisTick:{show:!1},max:"100",axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"In-post / Forecast",type:"bar",showBackground:!0,barGap:"0.3",backgroundStyle:{color:"#EEF0F6"},data:t,barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}%",position:["85%","-14"],color:"#5579ED",fontSize:"12"}}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize),setTimeout((()=>{s.resize()}),500)},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showData=!1,this.showMonth=!1,this.selMonth=(0,l.n7)(new Date(t),"month"),this.selMonthN=(0,l.n7)(new Date(t),"normalDay2"),"Overview"===this.selBu?this.buEmployeeItems=this.employee||[]:this.buEmployeeItems=this.employeeItems[this.selBu]||[],this.buEmployeeItems=[...this.buEmployeeItems],this.$forceUpdate(),this.$nextTick((()=>{this.showData=!0,this.setEcharsDI()}))},onSelect(t){"Overview"===t.value?this.buEmployeeItems=this.employee||[]:this.buEmployeeItems=this.employeeItems[t.value]||[],this.$forceUpdate(),this.show=!1,this.selBu=t.value,this.$nextTick((()=>{this.showData=!0,this.setEcharsDI(),this.setEcharsRec(),this.setEcharsAttend()}))},getPenderPie(t){const e=document.getElementById("genderPie");if(!e)return!1;const s=this.$echarts.init(e,null,{devicePixelRatio:2});let n;n={tooltip:{alwaysShowContent:!1,trigger:"item",axisPointer:{type:"shadow"},formatter:function(t){return t?.data?.name+"\n"+t?.data?.data}},color:["#DAA6C0","#72C8B3","#799AE9"],legend:{position:"center",bottom:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:18,textStyle:{fontSize:12,color:"#9D8F9B"}},series:[{name:"",type:"pie",center:["51%","44%"],radius:"60%",data:t?[{data:this.genderF.length,value:(this.genderF.length/this.buEmployeeItems.length*100).toFixed(2),name:"F"},{data:this.genderU.length,value:(this.genderU.length/this.buEmployeeItems.length*100).toFixed(2),name:"U"},{data:this.genderM.length,value:(this.genderM.length/this.buEmployeeItems.length*100).toFixed(2),name:"M"}]:[],label:{formatter:"{b}: {c}%",lineHeight:10,fontSize:10.5,color:"#9D8F9B",distance:20},labelLine:{normal:{show:!0,length:7,length2:3}}}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)},async getRecruitStat(){const t=await c.LX((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBuRec?"":this.selBuRec,begin_month:(0,l.n7)((new Date).setMonth(0),"monthN"),end_month:(0,l.n7)(new Date,"monthN")}));this.recruitStat=t.rows,this.recruited=t.rows.map((t=>t.successful_onboarding)).reduce(((t,e)=>t+e),0),this.vacancy=t.rows.map((t=>t.recruited)).reduce(((t,e)=>t+e),0),this.remain=this.vacancy-this.recruited},async getRecruitOnboard(){const t=await c.Oh((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_day:(0,l.n7)(new Date,"monthN")+"-01",end_day:(0,l.n7)(new Date,"monthN")+"-"+(0,l.y7)(this.selMonthN)})),e=this.arrDistinct(t.rows,"jobs_id");this.onboard=e.length},async getRecruitByJob(){const t=await c.V_((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu}));this.recruitByJob=t.rows;const e=this.arrDistinct(t.rows,"jobs_id");this.totalPositions=e.length,this.currentVacancies=e.filter((t=>"招聘中"===t.recruitment_status)).length,this.onHold=e.filter((t=>"已暂停"===t.recruitment_status)).length},async setEcharsRec(){this.getRecruitOnboard(),this.getRecruitByJob(),await this.getRecruitStat()},async setEcharsTrain(){this.getTrainingEmpStat(),this.getTrainingYTD()},async getTrainingYTD(){const t=await c.UF({...this.$options.data().common,the_year:(0,l.n7)(new Date,"year")});this.trainingYTD=t.rows;const e=this.arrDistinct(t.rows,"emp_id"),s=e.map((t=>t.get_study_hours)).reduce(((t,e)=>t+e),0);this.perHours=(s/e.length||0).toFixed(1)},async getTrainingEmpStat(){const t=await c.bC({...this.$options.data().common,begin_month:(0,l.n7)((new Date).setMonth(0),"monthN"),end_month:(0,l.n7)(new Date,"monthN")});this.trainingEmpStat=t.rows},async setEcharsAttend(){await this.getLeaveByMonth(),this.getMonthyBar("sickBar",!0),this.observerAttend=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getMonthyBar("sickBar",!0):this.getMonthyBar("sickBar",!1)}))})),this.observerAttend.observe(document.getElementById("sickBar"))},getMonth(t){return new Date(t).toLocaleDateString("en-US",{month:"short"})},async getLeaveByMonth(){const t=await c.VD((0,l.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,l.n7)(new Date,"year")+"-01",end_month:(0,l.n7)(new Date,"year")+"-12"}));this.leaveDTLMonth=t.rows},getMonthyBar(t,e){const s=document.getElementById(t);if(!s)return!1;const n=this.$echarts.init(s,null,{devicePixelRatio:2});let i=[],a=0;for(let l in this.leaveDTLMonthItems){if(this.leaveDTLMonthItems.hasOwnProperty(l)){const e="sickBar"===t?["Sick Leave"]:["Annual Leave","J01","J02","J04","J05"],s=this.leaveDTLMonthItems[l].filter((t=>e.indexOf(t.leave_code)>-1)),n=this.getTrendBarTotal()[a],r=s.map((t=>t.leave_days)).reduce(((t,e)=>t+e),0),o=n?(r/n).toFixed(2):0;i.push({name:l,value:o})}a++}let r,o=[];"monthyBar"===t?o=["#5579ED"]:"sickBar"===t&&(o=["#FF860F"]),r={tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},color:o,legend:{},grid:{top:"10%",left:"3%",right:"5%",bottom:"6%",containLabel:!0},yAxis:{type:"value",splitNumber:3,show:!1,axisLabel:{fontSize:"0",show:!1,color:"transparent"}},xAxis:{type:"category",data:this.getLastSixMonths(),axisTick:{alignWithLabel:!0,count:4},axisLabel:{color:"#666666",fontSize:"8"},axisLine:{lineStyle:{color:"#DBDFE8"}}},series:[{name:"",type:"bar",data:e?i.map((t=>t.value)):[],barWidth:"20",itemStyle:{borderRadius:[3,3,3,3]},label:{lineHeight:16,show:!0,formatter:"{c}D",position:"top",color:"#535353",fontSize:"12"}}]},r&&"object"===typeof r&&n.setOption(r),window.addEventListener("resize",n.resize)},getTrendBarTotal(t){let e=[];for(let s=0;s<6;s++){const t=this.trendBarList[s].map((t=>t.value));let n=t.reduce(((t,e)=>t+e),0);e.push(n)}return e}}},g=h,d=s(845),m=(0,d.A)(g,n,i,!1,null,"6b3d88e7",null),u=m.exports},2407:function(t,e,s){s.d(e,{CA:function(){return l},a5:function(){return o},n7:function(){return i},of:function(){return n},y7:function(){return a},zB:function(){return r}});s(4114);function n(t,e){const s=JSON.parse(JSON.stringify(t)),i=Object.keys(t);return i.forEach((i=>{-1!==[null,void 0,""].indexOf(s[i])?delete s[i]:e&&"object"===typeof t[i]&&!Array.isArray(t[i])&&(s[i]=n(s[i]))})),s}function i(t,e){if(!t)return"";const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Date(t),a=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,0),o=s[i.getMonth()],l=n[i.getMonth()],c=String(i.getDate()).padStart(2,0),h=String(i.getHours()).padStart(2,0),g=String(i.getMinutes()).padStart(2,0),d=String(i.getSeconds()).padStart(2,0);switch(e){case"slash":return`${a}/${r}/${c}`;case"year":return`${a}`;case"monthN":return`${a}-${r}`;case"monthLong":return`${a}-${l}`;case"month":return`${a}-${o}`;case"monthsh":return`${a}/${r}`;case"day":return`${c}-${r}-${a}`;case"timestamp":return`${a}${r}${c}${h}${g}`;case"obj":return{y:a,m:r,d:c,h:h,min:g,s:d};case"normal":return`${a}-${r}-${c} ${h}:${g}:${d}`;case"normalHours":return`${a}-${r}-${c} ${h}`;case"normalMin":return`${a}-${r}-${c} ${h}:${g}`;case"normalDay":return`${a}-${o}-${c}`;case"normalDay2":return`${a}-${r}-${c}`;case"normalDay3":return`${a}-${l}-${c}`;case"normalDay4":return`${a}/${l}/${c}`;default:return`${r}-${c}-${a} ${h}:${g}`}}const a=t=>{const e=new Date(t),s=e.getFullYear(),n=e.getMonth(),i=t=>t%4===0&&t%100!==0||t%400===0,a=[31,i(s)?29:28,31,30,31,30,31,31,30,31,30,31][n];return a},r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},o=(t,e,s)=>{const n=s?new Date(s):new Date,i=n.getFullYear(),a=n.getMonth()-(e||0),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let c=5;c>=0;c--){const e=a-c<0?i-1:i,s=(a-c+12)%12,n=t?o[s]:r[s],h=`${e}-${n}`;l.push(h)}return l},l=(t,e)=>{let s=t.reduce(((t,s)=>{const n=t.find((t=>t[e]===s[e]));return n?t:t.concat([s])}),[]);return s}},8640:function(t,e,s){t.exports=s.p+"img/icon_1.38a41e40.svg"},5683:function(t,e,s){t.exports=s.p+"img/icon_2.1636ef31.svg"},597:function(t,e,s){t.exports=s.p+"img/select.566d2950.svg"},7543:function(t,e,s){t.exports=s.p+"img/summary_bg.f2a0fc2b.svg"},9367:function(t,e,s){t.exports=s.p+"img/female.7c80b5b2.svg"},2024:function(t,e,s){t.exports=s.p+"img/icon_1.7283ab4a.svg"},4516:function(t,e,s){t.exports=s.p+"img/male.9dbc4324.svg"},2589:function(t,e,s){t.exports=s.p+"img/unisex.af4a8add.svg"},3660:function(t,e,s){t.exports=s.p+"img/icon_1.ca2f156c.svg"},1525:function(t,e,s){t.exports=s.p+"img/icon_1.9a70e0a0.svg"},278:function(t,e,s){t.exports=s.p+"img/icon_2.7bf157dd.svg"},7399:function(t,e,s){t.exports=s.p+"img/icon_3.7dc01385.svg"}}]);