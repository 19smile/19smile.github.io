"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[143],{2143:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"fs-20",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.show=!0}}})]),e("van-col",{attrs:{span:"12 justify-end"}},[e("div",{staticClass:"fs-20"},[t._v("YTD")])])],1)],1),e("van-action-sheet",{attrs:{title:"Select",round:!1,actions:t.buLists},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(0),e("div",{staticClass:"text-yellow"},[t._v(t._s(t.buEmployeeItems?.length||0))])]),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items",style:{height:35*Object.values(t.deptItems)?.length+36+"px"}},[e("van-row",[e("van-col",{staticClass:"recruit-items-title",attrs:{span:"12"}})],1),e("div",{staticClass:"employee-bar",style:{height:35*Object.values(t.deptItems)?.length+"px"},attrs:{id:"distributionPE"}})],1)])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(1),e("div",{staticClass:"contract-renewing-content"},[e("van-row",{staticClass:"contract-renewing-content-split text-center",attrs:{gutter:"16"}},[e("van-col",{attrs:{span:"12"}},[e("van-row",{staticClass:"p-0"},[e("van-col",{attrs:{span:"24"}},[e("div",[e("p",{staticClass:"fs-14 text-gray lh-24"},[t._v("Resignation of B")]),e("p",{staticClass:"fs-24 lh-40 fw-600",class:[t.mResignationB.length?"text-yellow":"text-gray"]},[t._v(t._s(t.mResignationB.length))])])]),e("van-col",{attrs:{span:"24"}},[e("div",[e("p",{staticClass:"fs-14 text-gray lh-24"},[t._v("Resignation of C")]),e("p",{staticClass:"fs-24 lh-40 fw-600",class:[t.mResignationC.length?"text-yellow":"text-gray"]},[t._v(t._s(t.mResignationC.length))])])])],1)],1),e("van-col",{staticClass:"contract-renewing-content-right",attrs:{span:"12"}},[e("div",[e("div",[e("p",{staticClass:"fs-14 text-gray lh-24"},[t._v("Total Resign")]),e("p",{staticClass:"fs-24 lh-40 fw-600",class:[t.buResignationItems.length?"text-blue":"text-gray"]},[t._v(t._s(t.buResignationItems.length))])])])])],1)],1),e("div",{staticClass:"percentage-box pb-8 pt-0"},[e("div",{staticClass:"percentage-box-content percentage-box-content-mini align-center text-white fs-14"},[e("div",{staticClass:"percentage-box-items bg-yellow text-center",style:{width:t.mResignationPercentage+"%"}},[e("span",{staticClass:"fw-600"},[t._v(t._s(t.mResignationPercentage)+"%")])]),e("div",{staticClass:"percentage-box-items text-right bg-gray",style:{width:100-t.mResignationPercentage+"%"}},[e("span",{staticClass:"text-gray"},[t._v("Total Resign")])])]),e("van-row",{staticClass:"fs-14 lh-32"},[e("van-col",{staticClass:"text-yellow",attrs:{span:"12"}},[t._v("Management")])],1)],1)])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(2),e("div",{staticClass:"contract-renewing-content"},[e("van-row",{staticClass:"contract-renewing-content-split text-center",attrs:{gutter:"16"}},[e("van-col",{attrs:{span:"12"}},[e("div",[e("p",{staticClass:"fs-14 text-gray lh-24"},[t._v("Resignation of"),e("br"),t._v("Frontline")]),e("p",{staticClass:"fs-24 lh-40 fw-600",class:[t.frontlineResignation.length?"text-yellow":"text-gray"]},[t._v(t._s(t.frontlineResignation.length))])])]),e("van-col",{attrs:{span:"12"}},[e("div",[e("p",{staticClass:"fs-14 text-gray lh-24"},[t._v("Resignation of"),e("br"),t._v("Office")]),e("p",{staticClass:"fs-24 lh-40 fw-600",class:[t.officeResignation.length?"text-blue":"text-gray"]},[t._v(t._s(t.officeResignation.length))])])])],1)],1),e("div",{staticClass:"percentage-box pb-8 pt-0"},[e("div",{staticClass:"percentage-box-content percentage-box-content-mini text-white fs-14"},[e("div",{staticClass:"bg-gray align-center"},[e("div",{staticClass:"percentage-box-items bg-yellow text-center",style:{width:t.frontlineResignationPercentage+"%"}},[e("span",{staticClass:"fw-600"},[t._v(t._s(t.frontlineResignationPercentage)+"%")])]),e("div",{staticClass:"percentage-box-items text-right bg-blue2",style:{width:(t.buResignationItems.length?100-t.frontlineResignationPercentage:0)+"%"}},[e("span",{staticClass:"fw-600"},[t._v(t._s(t.buResignationItems.length?100-t.frontlineResignationPercentage:0)+"%")])])])]),e("div",{staticClass:"fs-14 lh-32 align-center"},[e("div",{staticClass:"text-yellow",style:{width:t.frontlineResignationPercentage+"%"}},[t._v("Frontline")]),e("div",{staticClass:"text-yellow text-right",style:{width:(t.buResignationItems.length?100-t.frontlineResignationPercentage:0)+"%"}},[t._v("Office")])])])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("div",{staticClass:"resign-reason-content"},[e("div",{ref:"resignReason"},t._l(t.resignReasonList,(function(s,n){return e("div",{key:n,style:s.style},[e("span",[t._v(t._s(s.text))])])})),0)])])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:s(2687)}}),e("span",[t._v("Resignation of Dept")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(586)}}),e("span",[t._v("Resignation of Management")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(586)}}),e("span",[t._v("Resignation of Frontline/Office")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(2948)}}),e("span",[t._v("Resign Reason")])])}],a=(s(4114),s(2407)),r={name:"turnover",data(){return{colors:(0,a.zB)(),resignReasonList:[],buLists:[],show:!1,selBu:"Overview",buResignationItems:[]}},computed:{resignation(){return this.hrEmployee.filter((t=>{const e=new Date((0,a.n7)(new Date(t.resign_date),"monthN")).getTime(),s=(new Date((0,a.n7)(new Date(t.hire_date),"monthN")).getTime(),new Date((0,a.n7)(new Date((new Date).setMonth((new Date).getMonth())),"monthN"))),n=new Date((0,a.n7)(new Date((new Date).setMonth(0)),"monthN"));if(t.resign_date&&e<=new Date(s).getTime()&&e>=new Date(n).getTime())return t}))},resignationItems(){const t={};return this.resignation.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],t[e.bu_code].push(e)})),t},mResignation(){return this.buResignationItems.filter((t=>"B"===t.emp_level||"C"===t.emp_level))},mResignationB(){return this.buResignationItems.filter((t=>"B"===t.emp_level))},mResignationC(){return this.buResignationItems.filter((t=>"C"===t.emp_level))},mResignationPercentage(){return(this.mResignation.length/this.buResignationItems.length*100).toFixed(2)},frontlineResignation(){return this.buResignationItems.filter((t=>"Y"===t.is_frontline))},officeResignation(){return this.buResignationItems.filter((t=>"N"===t.is_frontline))},frontlineResignationPercentage(){return this.buResignationItems.length?(this.frontlineResignation.length/this.buResignationItems.length*100).toFixed(2):0},resignReason(){const t=this.buResignationItems.filter((t=>"离职"===t.status&&t.resign_reason)),e=t.map((t=>t.resign_reason)),s=e.filter(((t,e,s)=>s.indexOf(t)===e));return s},deptItems(){const t={};"Overview"==this.selBu?this.resignationItems:this.resignationItems[this.selBu];return this.buEmployeeItems.forEach((e=>{t[e.dept_code]=t[e.dept_code]||[],t[e.dept_code].push(e)})),t}},created(){this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.selBu="Overview",this.buEmployeeItems=this.resignation||[],this.buResignationItems=this.resignation,this.$nextTick((()=>{this.setEchart()}))},watch:{},methods:{setEchart(t){this.generateRandomItems(),this.getDistributionPE(!0,t),this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getDistributionPE(!0,t):this.getDistributionPE(!1)}))})),this.observer.observe(document.getElementById("distributionPE"))},onSelect(t){"Overview"===t.value?(this.buResignationItems=this.resignation||[],this.buEmployeeItems=this.resignation||[]):(this.buResignationItems=this.resignationItems[t.value]||[],this.buEmployeeItems=this.resignationItems[t.value]||[]),this.buEmployeeItems=[...this.buEmployeeItems],this.$forceUpdate(),this.show=!1,this.selBu=t.value,this.$nextTick((()=>{this.setEchart(!0)}))},generateRandomItems(){const t=[],e=this.$refs.resignReason.offsetWidth,s=this.$refs.resignReason.offsetHeight,n=this.resignReason.length>50?50:this.resignReason.length;for(let i=0;i<n;i++){let n,a;do{n={fontSize:`${this.getRandomInt(12,20)}px`,color:this.colors[i],position:"absolute",left:`${this.getRandomInt(0,e-100)}px`,top:`${this.getRandomInt(0,s-50)}px`},a=t.some((t=>this.isOverlap(n,t.style)))}while(a);t.push({text:this.resignReason[i],style:n})}this.resignReasonList=t},getRandomInt(t,e){return Math.floor(Math.random()*(e-t))+t},isOverlap(t,e){const s={left:parseInt(t.left),top:parseInt(t.top),right:parseInt(t.left)+5*parseInt(t.fontSize),bottom:parseInt(t.top)+parseInt(t.fontSize)},n={left:parseInt(e.left),top:parseInt(e.top),right:parseInt(e.left)+5*parseInt(e.fontSize),bottom:parseInt(e.top)+parseInt(e.fontSize)};return!(s.right<n.left||s.left>n.right||s.bottom<n.top||s.top>n.bottom)},getDistributionPE(t,e){const s=document.getElementById("distributionPE");if(!s)return!1;const n=this.$echarts.init(s,null,{devicePixelRatio:2});let i,a=[];for(let r in this.deptItems)this.deptItems.hasOwnProperty(r)&&a.push({name:r,value:this.deptItems[r].length,data:{value:this.deptItems[r].length}});if(a=[...a].sort(((t,e)=>t.data.value-e.data.value)),a.map(((t,e)=>{t.data.itemStyle=(e+1)%2===0?{color:"#A3CCF8"}:{color:"#5579ED"}})),i={color:["#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"0%",left:"7%",right:"16%",bottom:"9px",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!1,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:a.map((t=>t.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:t?a:[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},i&&"object"===typeof i&&n.setOption(i),window.addEventListener("resize",n.resize),!e)return!1;setTimeout((function(){n.resize()}),500)}}},o=r,l=s(845),c=(0,l.A)(o,n,i,!1,null,"336bc056",null),g=c.exports},2407:function(t,e,s){s.d(e,{CA:function(){return l},a5:function(){return o},n7:function(){return i},of:function(){return n},y7:function(){return a},zB:function(){return r}});s(4114);function n(t,e){const s=JSON.parse(JSON.stringify(t)),i=Object.keys(t);return i.forEach((i=>{-1!==[null,void 0,""].indexOf(s[i])?delete s[i]:e&&"object"===typeof t[i]&&!Array.isArray(t[i])&&(s[i]=n(s[i]))})),s}function i(t,e){if(!t)return"";const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Date(t),a=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,0),o=s[i.getMonth()],l=n[i.getMonth()],c=String(i.getDate()).padStart(2,0),g=String(i.getHours()).padStart(2,0),h=String(i.getMinutes()).padStart(2,0),u=String(i.getSeconds()).padStart(2,0);switch(e){case"slash":return`${a}/${r}/${c}`;case"year":return`${a}`;case"monthN":return`${a}-${r}`;case"monthLong":return`${a}-${l}`;case"month":return`${a}-${o}`;case"monthsh":return`${a}/${r}`;case"day":return`${c}-${r}-${a}`;case"timestamp":return`${a}${r}${c}${g}${h}`;case"obj":return{y:a,m:r,d:c,h:g,min:h,s:u};case"normal":return`${a}-${r}-${c} ${g}:${h}:${u}`;case"normalHours":return`${a}-${r}-${c} ${g}`;case"normalMin":return`${a}-${r}-${c} ${g}:${h}`;case"normalDay":return`${a}-${o}-${c}`;case"normalDay2":return`${a}-${r}-${c}`;case"normalDay3":return`${a}-${l}-${c}`;case"normalDay4":return`${a}/${l}/${c}`;default:return`${r}-${c}-${a} ${g}:${h}`}}const a=t=>{const e=new Date(t),s=e.getFullYear(),n=e.getMonth(),i=t=>t%4===0&&t%100!==0||t%400===0,a=[31,i(s)?29:28,31,30,31,30,31,31,30,31,30,31][n];return a},r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},o=(t,e,s)=>{const n=s?new Date(s):new Date,i=n.getFullYear(),a=n.getMonth()-(e||0),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"];let l=[];for(let c=5;c>=0;c--){const e=a-c<0?i-1:i,s=(a-c+12)%12,n=t?o[s]:r[s],g=`${e}-${n}`;l.push(g)}return l},l=(t,e)=>{let s=t.reduce(((t,s)=>{const n=t.find((t=>t[e]===s[e]));return n?t:t.concat([s])}),[]);return s}},597:function(t,e,s){t.exports=s.p+"img/select.566d2950.svg"},586:function(t,e,s){t.exports=s.p+"img/icon_10.58d1e580.svg"},2687:function(t,e,s){t.exports=s.p+"img/icon_2.1a764baf.svg"},2948:function(t,e,s){t.exports=s.p+"img/icon_9.744f614f.svg"}}]);