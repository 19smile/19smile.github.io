"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[272],{4272:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("div",{staticClass:"rank text-center"},[e("div",{staticClass:"rank-content"},[t._l(t.trainingStatTypeItems,(function(s,i){return[i<10?e("van-row",{staticClass:"rank-list",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"3"}},[e("div",{staticClass:"number"},[e("span",[t._v(t._s(i<=2?"Top":"")+t._s(i+1))])])]),e("van-col",{attrs:{span:"13"}},[t._v(t._s(s.project_name))]),e("van-col",{attrs:{span:"8"}},[t._v(t._s(s.bu_code))])],1):t._e()]}))],2)])])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(1),t._m(2),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"percentage-box mt-16"},[t._m(3),e("div",{staticClass:"percentage-box-content align-center text-white fs-14 fw-600 percentage-box-content-mini"},[e("div",{staticClass:"percentage-box-items bg-yellow",style:{width:"26%"}},[e("span",{staticClass:"fw-600 pr-0"},[t._v("98")]),e("span",{staticClass:"p-0"},[t._v(" (26%)")])]),e("div",{staticClass:"percentage-box-items text-right bg-blue4",style:{width:"74%"}},[e("span",{staticClass:"fw-600 p-0"},[t._v("282")]),e("span",{staticClass:"pl-0"},[t._v(" (74%)")])])]),e("van-row",{staticClass:"fs-14 lh-32",attrs:{gutter:"16"}},[e("van-col",{staticClass:"text-yellow",attrs:{span:"12"}},[t._v("Offline")]),e("van-col",{staticClass:"text-blue text-right",attrs:{span:"12"}},[t._v("Online")])],1)],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(4),e("van-swipe",{staticClass:"in-post-content",attrs:{loop:!1,width:176,"indicator-color":"#775200"}},t._l(t.inpostList2,(function(s,i){return e("van-swipe-item",{key:s.id,staticClass:"in-post-list"},[e("div",{staticClass:"in-post-pie"},[e("div",{staticClass:"in-post-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"in-post-pie-content",attrs:{id:"inpostList2"+s.id}})])])})),1)],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(5),e("van-swipe",{staticClass:"in-post-content",attrs:{loop:!1,width:176,"indicator-color":"#775200"}},t._l(t.inpostList2,(function(s,i){return e("van-swipe-item",{key:s.id,staticClass:"in-post-list"},[e("div",{staticClass:"in-post-pie"},[e("div",{staticClass:"in-post-title"},[t._v(t._s(s.title))]),e("div",{staticClass:"in-post-pie-content",attrs:{id:"inpostList3"+s.id}})])])})),1)],1)])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("div",[e("img",{attrs:{width:"24px",src:s(1965)}}),e("span",[t._v("Rank Of Courses Participants")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("div",[e("img",{attrs:{width:"24px",src:s(2511)}}),e("span",[t._v("Distribution of Course Type")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"course-type"},[e("div",{staticClass:"course-type-treemap",attrs:{id:"courseTypeTreemap"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"percentage-box-title fs-14 text-yellow"},[e("span",[t._v("Online Vs Offline Ratio")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(2511)}}),e("span",[t._v("Pass Ratio")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(2511)}}),e("span",[t._v("Satisfaction")])])}],a=(s(4114),s(7349)),r=s(3011),o=s(7691),c=s(9941),l=s(2407),p=s(8193),u={name:"training",components:{Row:a.A,Col:r.A,Swipe:o.A,SwipeItem:c.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,inpostList2:[{id:1,title:"TKH"},{id:2,title:"SLT"},{id:3,title:"TLC"},{id:4,title:"TLQ"},{id:5,title:"HTK"},{id:6,title:"TKZY"},{id:7,title:"TKH"}],trainingStat:[],totalNum:0}},computed:{trainingStatTypeItems(){return this.trainingStat.sort(((t,e)=>t.total_emp<e.total_emp?1:-1))},trainingStatType(){const t={};return this.trainingStat.forEach((e=>{t[e.scene_name]=t[e.scene_name]||[],t[e.scene_name].push(e)})),t}},created(){this.$nextTick((()=>{this.setEchars()}))},watch:{},methods:{setEchartColor:l.zB,async getTrainingStat(t){const e=await p.vc({...this.$options.data().common,pageNum:t});this.trainingStat=this.trainingStat.concat(e.rows),this.totalNum=e.totalNum,e.totalNum>t*this.common.pageSize&&await this.getTrainingStat(t+1),this.loading=!1},async setEchars(){await this.getTrainingStat(1),console.log(this.trainingStatTypeItems),this.getCourseTypeTreemap(!0);for(let t=0;t<this.inpostList2.length;t++)this.getInpost(this.inpostList2[t],"2",!0),this.getInpost(this.inpostList2[t],"3",!0);this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getCourseTypeTreemap(!0):this.getCourseTypeTreemap(!1)}))})),this.observer.observe(document.getElementById("courseTypeTreemap"));for(let t=0;t<this.inpostList2.length;t++)this["observer2"+(t+1)]=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getInpost(this.inpostList2[t],"2",!0):this.getInpost(this.inpostList2[t],"2",!1)}))})),this["observer2"+(t+1)].observe(document.getElementById("inpostList2"+this.inpostList2[t].id)),this["observer3"+(t+1)]=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.getInpost(this.inpostList2[t],"3",!0):this.getInpost(this.inpostList2[t],"3",!1)}))})),this["observer3"+(t+1)].observe(document.getElementById("inpostList3"+this.inpostList2[t].id))},getCourseTypeTreemap(t){const e=document.getElementById("courseTypeTreemap");if(!e)return!1;const s=this.$echarts.init(e);let i=[],n=["#99B8F1","#4379CE","#FADB37","#78CDED","#FFA748","#FD8602","#72B5EB"];n=n.concat(this.setEchartColor());let a,r=0;for(let o in this.trainingStatType){if(this.trainingStatType.hasOwnProperty(o)){const t=this.trainingStatType[o].length/this.trainingStatTypeItems.length*100;i.push({name:o,value:t.toFixed(2),itemStyle:{color:n[r]}})}r++}a={tooltip:{trigger:"item",textStyle:{align:"left"},formatter:function(t){return t.name+" : "+t.value}},series:[{type:"treemap",label:{show:!0,lineHeight:14,formatter:"{b} \n{c}%"},breadcrumb:{show:!1},roam:!1,left:0,top:0,bottom:0,right:0,data:t?i:[]}]},a&&"object"===typeof a&&s.setOption(a),window.addEventListener("resize",s.resize)},getInpost(t,e,s){const i=document.getElementById("inpostList"+e+t.id);if(!i)return!1;const n=this.$echarts.init(i);let a,r=["#5579ED"];"warning"===t?.type?r=["#B87B00"]:"danger"===t?.type&&(r=["#F25769"]);const o=[{value:88.62,name:"",detail:{valueAnimation:!0,offsetCenter:["0%","0%"],fontSize:18}}];a={color:r,series:[{type:"gauge",startAngle:90,endAngle:-270,center:["50%","37%"],pointer:{show:!1},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1},axisLine:{lineStyle:{width:9}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:s?o:[],title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",formatter:"{value}%"}}]},a&&"object"===typeof a&&n.setOption(a),window.addEventListener("resize",n.resize)}}},h=u,d=s(845),m=(0,d.A)(h,i,n,!1,null,"111a70b3",null),g=m.exports},2407:function(t,e,s){s.d(e,{a5:function(){return o},n7:function(){return n},of:function(){return i},y7:function(){return a},zB:function(){return r}});s(4114);function i(t,e){const s=JSON.parse(JSON.stringify(t)),n=Object.keys(t);return n.forEach((n=>{-1!==[null,void 0,""].indexOf(s[n])?delete s[n]:e&&"object"===typeof t[n]&&!Array.isArray(t[n])&&(s[n]=i(s[n]))})),s}function n(t,e){if(!t)return"";const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=["January","February","March","April","May","June","July","August","September","October","November","December"],n=new Date(t),a=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,0),o=s[n.getMonth()],c=i[n.getMonth()],l=String(n.getDate()).padStart(2,0),p=String(n.getHours()).padStart(2,0),u=String(n.getMinutes()).padStart(2,0),h=String(n.getSeconds()).padStart(2,0);switch(e){case"slash":return`${a}/${r}/${l}`;case"year":return`${a}`;case"monthN":return`${a}-${r}`;case"monthLong":return`${a}-${c}`;case"month":return`${a}-${o}`;case"monthsh":return`${a}/${r}`;case"day":return`${l}-${r}-${a}`;case"timestamp":return`${a}${r}${l}${p}${u}`;case"obj":return{y:a,m:r,d:l,h:p,min:u,s:h};case"normal":return`${a}-${r}-${l} ${p}:${u}:${h}`;case"normalHours":return`${a}-${r}-${l} ${p}`;case"normalMin":return`${a}-${r}-${l} ${p}:${u}`;case"normalDay":return`${a}-${o}-${l}`;case"normalDay2":return`${a}-${r}-${l}`;default:return`${r}-${l}-${a} ${p}:${u}`}}const a=t=>{const e=new Date(t),s=e.getFullYear(),i=e.getMonth(),n=t=>t%4===0&&t%100!==0||t%400===0,a=[31,n(s)?29:28,31,30,31,30,31,31,30,31,30,31][i];return a},r=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},o=t=>{const e=new Date,s=e.getFullYear(),i=e.getMonth()-1,n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=[];for(let o=5;o>=0;o--){const e=i-o<0?s-1:s,c=(i-o+12)%12,l=t?a[c]:n[c],p=`${e}-${l}`;r.push(p)}return r}},2511:function(t,e,s){t.exports=s.p+"img/icon_10.8c0e4250.svg"},1965:function(t,e,s){t.exports=s.p+"img/icon_9.d8fe9e70.svg"}}]);