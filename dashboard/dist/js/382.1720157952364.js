"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[382],{3382:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(0),e("div",{staticClass:"content-items-title-right"},[e("span",{staticClass:"fs-20"},[t._v("Avg. "+t._s(t.avg||0)+" days")])])]),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items",style:{height:44*Object.values(t.recruitDTLBu)?.length+"px"}},[e("div",{staticClass:"recruit-bar",style:{height:44*Object.values(t.recruitDTLBu)?.length+"px"},attrs:{id:"recruit"}})])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[t._m(1),e("div",{staticClass:"content-items-title-right"},[e("span",{staticClass:"fs-20"},[t._v("Avg. "+t._s(t.avgRequest||0)+" days")])])]),e("div",{staticClass:"recruit"},[e("div",{staticClass:"recruit-items",style:{height:44*Object.values(t.recruitDTLBu)?.length+"px"}},[e("div",{staticClass:"recruit-bar",style:{height:44*Object.values(t.recruitDTLBu)?.length+"px"},attrs:{id:"recruitRequest"}})])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[t._m(2)]),e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"24"}},[e("span",{staticClass:"fs-20",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:s(597)},on:{click:function(e){t.show=!0}}})])],1)],1),e("van-action-sheet",{attrs:{title:"Select",round:!1,actions:t.buList},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("div",{staticClass:"rank text-center"},[e("div",{staticClass:"rank-content"},[t._l(t.sortRecruitByJob,(function(s,n){return[n<10?e("van-row",{key:n,staticClass:"rank-list",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"3"}},[e("div",{staticClass:"number"},[e("span",[t._v(t._s(n<=2?"Top":"")+t._s(n+1))])])]),e("van-col",{attrs:{span:"13"}},[t._v(t._s(s.jobs))]),e("van-col",{attrs:{span:"8"}},[t._v(t._s(s.bu_code))])],1):t._e()]}))],2)])])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:s(6116)}}),e("span",[t._v("Days of Recruit")])])},function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{width:"24px",src:s(6116)}}),e("span",[t._v("Days of Request")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(4133)}}),e("span",[t._v("Interviewee by Channel")])]),e("div",{staticClass:"channel-items-content"},[e("div",{staticClass:"channel-items"},[e("div",{staticClass:"channel-bar",attrs:{id:"channel2"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("div",[e("img",{attrs:{width:"24px",src:s(1965)}}),e("span",[t._v("Recruitment In Progress")])])])}],r=(s(4114),s(8525)),a=s(7819),o=s(6647),c=s(4175),u=s(5810),l={name:"recruitment",components:{Row:r.A,Col:a.A,ActionSheet:o.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,minDate:new Date("1970-01-01"),currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,selMonth:(0,c.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,c.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),recruitDTL:[],avg:0,avgRequest:0,recruitByJob:[],show:!1,selBu:"Overview"}},computed:{recruitDTLBu(){const t={};return this.recruitDTL.forEach((e=>{t[e.bu_code]=t[e.bu_code]||[],"已关闭"===e.recruitment_status&&t[e.bu_code].push(e)})),t},sortRecruitByJob(){const t=this.recruitByJob.filter((t=>"招聘中"==t.recruitment_status&&t.recruited>t.successful_onboarding));return t.sort(((t,e)=>new Date(t.recruitment_begin_date).getTime()<new Date(e.recruitment_begin_date).getTime()?1:-1))}},created(){this.$nextTick((()=>{this.selBu=this.buList?.[0]?.value,this.setEchars()}))},watch:{},methods:{onSelect(t){this.show=!1,this.selBu=t.value,this.getRecruitByJob()},daysDifference(t,e){const s=new Date(t),n=new Date(e),i=Math.abs(n-s);return Math.ceil(i/864e5)},async getRecruitDTL(){const t=await u.Hz((0,c.of)({...this.$options.data().common,begin_day:(0,c.n7)(new Date(this.selMonthN),"monthN")+"-01",end_day:(0,c.n7)(new Date(this.selMonthN),"monthN")+"-"+(0,c.y7)(this.selMonthN)}));this.recruitDTL=t.rows},async getRecruitByJob(){const t=await u.V_((0,c.of)({...this.$options.data().common,bu_code:this.selBu}));this.recruitByJob=t.rows},async setEchars(t){await this.getRecruitByJob(),this.getRecruit(!0,"recruit",t),this.getRecruit(!0,"recruitRequest",t),this.getChannel(!0,t),this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getRecruit(!0,"recruit",!0):this.getRecruit(!1,"recruit")}))})),this.observer.observe(document.getElementById("recruit")),this.observer2=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getRecruit(!0,"recruitRequest",!0):this.getRecruit(!1,"recruitRequest")}))})),this.observer2.observe(document.getElementById("recruitRequest")),this.observer3=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getChannel(!0,!0):this.getChannel(!1)}))})),this.observer3.observe(document.getElementById("channel2"))},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,this.selMonth=(0,c.n7)(new Date(t),"month"),this.selMonthN=(0,c.n7)(new Date(t),"normalDay2"),this.setEchars(!0)},getRecruit(t,e,s){const n=document.getElementById(e);if(!n)return!1;const i=this.$echarts.init(n,null,{devicePixelRatio:2});let r,a=[];for(let c in this.recruitDTLBu)if(this.recruitDTLBu.hasOwnProperty(c)){const t=this.recruitDTLBu[c].map((t=>({value:this.daysDifference("recruitRequest"===e?t.application_date:t.recruitment_begin_date,t.entry_date)}))),s=t.map((t=>t.value)).reduce(((t,e)=>t+e),0),n=this.recruitDTLBu[c].length&&s?s/this.recruitDTLBu[c].length:0;a.push({name:c,total:n,value:Math.round(n)})}const o=a.map((t=>t.total)).reduce(((t,e)=>t+e),0);if("recruitRequest"===e?this.avgRequest=Math.round(o/Object.values(this.recruitDTLBu).length):this.avg=Math.round(o/Object.values(this.recruitDTLBu).length),r={color:["#5579ED"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{top:"8%",left:"7%",right:"13%",bottom:"8%",containLabel:!0},xAxis:{type:"value",axisLabel:{show:!1,fontSize:0,color:"transparent"},splitLine:{show:!0,lineStyle:{color:"#EEEEEE"}}},yAxis:{type:"category",data:a.map((t=>t.name)),axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"",type:"bar",data:t?a.map((t=>t.value)):[],barWidth:"16",itemStyle:{borderRadius:[2,2,2,2]},label:{show:!0,formatter:"{c}",position:"outside",color:"#7CA0CE",fontSize:"12"}}]},r&&"object"===typeof r&&i.setOption(r),window.addEventListener("resize",i.resize),!s)return!1;setTimeout((()=>{i.resize()}),500)},getChannel(t){const e=document.getElementById("channel2");if(!e)return!1;const s=this.$echarts.init(e,null,{devicePixelRatio:2});let n;n={color:["#FF860F","#5579ED"],tooltip:{alwaysShowContent:!1,trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:"5%",left:"7%",icon:"circle",itemHeight:8,itemWidth:8,itemGap:24,textStyle:{fontSize:"12",color:"#333333"}},grid:{top:"11%",left:"6%",right:"10%",bottom:"18%",containLabel:!0},xAxis:{type:"value",axisLabel:{fontSize:"0",show:!1},max:253,interval:parseInt(253/3)},yAxis:{type:"category",data:["...","社招","LinkIn","猎聘","前程无忧","51Job"],axisTick:{show:!1},axisLabel:{color:"#333333",fontSize:"12"},axisLine:{lineStyle:{color:"#EEEEEE"}}},series:[{name:"候选人",type:"bar",stack:"total",barWidth:"16",itemStyle:{borderRadius:[2,0,0,2]},label:{show:!0,color:"#FFFFFF",fontSize:"11"},data:t?[23,45,18,43,23,23]:[]},{name:"面试邀约",type:"bar",stack:"total",barWidth:"16",itemStyle:{borderRadius:[0,2,2,0]},label:{show:!0,color:"#FFFFFF",fontSize:"11"},data:t?[120,132,101,134,90,230]:[]}]},n&&"object"===typeof n&&s.setOption(n),window.addEventListener("resize",s.resize)}}},h=l,d=s(845),m=(0,d.A)(h,n,i,!1,null,"4e486ea8",null),v=m.exports},4175:function(t,e,s){s.d(e,{a5:function(){return o},n7:function(){return i},of:function(){return n},y7:function(){return r},zB:function(){return a}});s(4114);function n(t,e){const s=JSON.parse(JSON.stringify(t)),i=Object.keys(t);return i.forEach((i=>{-1!==[null,void 0,""].indexOf(s[i])?delete s[i]:e&&"object"===typeof t[i]&&!Array.isArray(t[i])&&(s[i]=n(s[i]))})),s}function i(t,e){if(!t)return"";const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Date(t),r=i.getFullYear(),a=String(i.getMonth()+1).padStart(2,0),o=s[i.getMonth()],c=n[i.getMonth()],u=String(i.getDate()).padStart(2,0),l=String(i.getHours()).padStart(2,0),h=String(i.getMinutes()).padStart(2,0),d=String(i.getSeconds()).padStart(2,0);switch(e){case"slash":return`${r}/${a}/${u}`;case"year":return`${r}`;case"monthN":return`${r}-${a}`;case"monthLong":return`${r}-${c}`;case"month":return`${r}-${o}`;case"monthsh":return`${r}/${a}`;case"day":return`${u}-${a}-${r}`;case"timestamp":return`${r}${a}${u}${l}${h}`;case"obj":return{y:r,m:a,d:u,h:l,min:h,s:d};case"normal":return`${r}-${a}-${u} ${l}:${h}:${d}`;case"normalHours":return`${r}-${a}-${u} ${l}`;case"normalMin":return`${r}-${a}-${u} ${l}:${h}`;case"normalDay":return`${r}-${o}-${u}`;case"normalDay2":return`${r}-${a}-${u}`;default:return`${a}-${u}-${r} ${l}:${h}`}}const r=t=>{const e=new Date(t),s=e.getFullYear(),n=e.getMonth(),i=t=>t%4===0&&t%100!==0||t%400===0,r=[31,i(s)?29:28,31,30,31,30,31,31,30,31,30,31][n];return r},a=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},o=(t,e)=>{const s=new Date,n=s.getFullYear(),i=s.getMonth()-(e||0),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["January","February","March","April","May","June","July","August","September","October","November","December"];let o=[];for(let c=5;c>=0;c--){const e=i-c<0?n-1:n,s=(i-c+12)%12,u=t?a[s]:r[s],l=`${e}-${u}`;o.push(l)}return o}},597:function(t,e,s){t.exports=s.p+"img/select.b6d4fedc.svg"},6116:function(t,e,s){t.exports=s.p+"img/icon_2.452504a0.svg"},4133:function(t,e,s){t.exports=s.p+"img/icon_3.d388e849.svg"},1965:function(t,e,s){t.exports=s.p+"img/icon_9.5b405b72.svg"}}]);