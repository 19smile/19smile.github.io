"use strict";(self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[]).push([[145],{8145:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("van-sticky",{attrs:{"offset-top":48}},[e("van-row",{staticClass:"select-box",attrs:{gutter:"6"}},[e("van-col",{attrs:{span:"12"}},[e("span",{on:{click:function(e){t.show=!0}}},[t._v("Select BU |")]),e("span",{staticClass:"ml-8",on:{click:function(e){t.show=!0}}},[t._v(t._s(t.selBu))]),e("img",{attrs:{width:"24px",src:n(597)},on:{click:function(e){t.show=!0}}})])],1)],1),e("van-action-sheet",{attrs:{title:"Select BU",round:!1,actions:t.buLists},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("van-row",{attrs:{gutter:"16"}},[e("van-col",{staticClass:"in-post-left",attrs:{span:"8"}},[e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Vacancy")]),e("p",{staticClass:"text-yellow number"},[t._v(t._s(t.vacancy))])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Recruited")]),e("p",{staticClass:"text-blue number"},[t._v(t._s(t.recruited))])])]),e("div",{staticClass:"in-post-items"},[e("div",{staticClass:"text-center"},[e("p",[t._v("Remain")]),e("p",{staticClass:"text-blue2 number"},[t._v(t._s(t.remain))])])])]),e("van-col",{staticClass:"in-post-right",attrs:{span:"16"}},[e("div",{staticClass:"recruitment-content"},[e("div",{staticClass:"justify-center"},[e("div",{attrs:{id:"recruitment"}})])])])],1)],1)]),t._m(1),t._m(2),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(3),e("van-row",{staticClass:"in-post-content",class:[t.isShow?"am-active":""],attrs:{gutter:"16"}},[t._l(t.inpostList,(function(n,s){return e("van-col",{key:n.id,staticClass:"in-post-list",attrs:{span:"12"}},[e("div",{staticClass:"in-post-pie"},[e("div",{staticClass:"in-post-title"},[t._v(t._s(n.title))]),e("div",{staticClass:"in-post-text"}),e("div",{staticClass:"in-post-pie-content",attrs:{id:"inpostList"+n.id}})])])})),e("van-col",{staticClass:"in-post-list",attrs:{span:"12"}})],2),e("div",{staticClass:"text-center"},[e("div",{staticClass:"show-more text-yellow fs-12",on:{click:function(e){return t.showMore("")}}},[e("img",{class:[t.isShow?"am-active":""],attrs:{width:"16px",src:n(2190)}}),t._v(" "+t._s(t.isShow?"Folded":"Show More")+" ")])])],1)])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:n(2024)}}),e("span",[t._v("Recruitment Process")])]),e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:n(711)}}),e("span",[t._v("Recruit by Channel")])]),e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])]),e("div",{staticClass:"channel-items-content"},[e("div",{staticClass:"channel-items"},[e("div",{staticClass:"channel-bar",attrs:{id:"channel"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[e("div",{staticClass:"content-items-title content-items-title-2"},[e("div",[e("img",{attrs:{width:"24px",src:n(711)}}),e("span",[t._v("Conversion")])]),e("div",{staticClass:"content-items-title-right"},[t._v("YTD")])]),e("div",{staticClass:"channel-items-content"},[e("div",{staticClass:"channel-items"},[e("div",{staticClass:"channel-bar",attrs:{id:"channelConversion"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:n(7592)}}),e("span",[t._v("Probation Pass Rate")])])}],a=(n(4114),n(8525)),o=n(7819),r=n(8437),c=n(3159),l=n(6647),h=n(1080),u=n(4175),d=n(5810),m={name:"recruitment",components:{Row:a.A,Col:o.A,Actionsheet:r.Actionsheet,Picker:c.A,[l.A.name]:l.A,Sticky:h.A},data(){const t={common:{pageNum:1,pageSize:2e3,returnTotalNum:"true"}};return{...t,selBu:"Overview",minDate:new Date("1970-01-01"),selMonth:(0,u.n7)(new Date((new Date).setMonth((new Date).getMonth())),"month"),selMonthN:(0,u.n7)(new Date((new Date).setMonth((new Date).getMonth())),"normalDay2"),show:!1,currentDate:new Date((new Date).setMonth((new Date).getMonth())),showMonth:!1,inpostList:[{id:1,title:"TKH",type:"normal"},{id:2,title:"SLT",type:"warning"},{id:3,title:"TLC",type:"danger"},{id:4,title:"TLQ"},{id:5,title:"HTK"},{id:6,title:"TKZY"},{id:7,title:"TKH"}],isShow:!1,recruitStat:[],recruitDTL:[],recruited:0,vacancy:0,remain:0,buLists:[]}},computed:{channelItems(){const t={};return this.recruitDTL.forEach((e=>{t[e.secondary_channel]=t[e.secondary_channel]||[],t[e.secondary_channel].push(e)})),t}},created(){this.$nextTick((()=>{this.buLists=[{name:"Overview",value:"Overview"}].concat(this.buList),this.selBu="Overview",this.setEchars()}))},watch:{},methods:{setEchartColor:u.zB,async getRecruitStat(){const t=await d.LX((0,u.of)({...this.$options.data().common,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,u.n7)((new Date).setMonth(0),"monthN"),end_month:(0,u.n7)(new Date,"monthN")}));this.recruitStat=t.rows,this.recruited=t.rows.map((t=>t.successful_onboarding)).reduce(((t,e)=>t+e),0),this.vacancy=t.rows.map((t=>t.recruited)).reduce(((t,e)=>t+e),0),this.remain=this.vacancy-this.recruited},async getRecruitDTL(t){const e=await d.Hz((0,u.of)({...this.$options.data().common,pageNum:t||1,bu_code:"Overview"===this.selBu?"":this.selBu,begin_month:(0,u.n7)((new Date).setMonth(0),"monthN"),end_month:(0,u.n7)(new Date,"monthN")}));this.recruitDTL=this.recruitDTL.concat(e.rows||[]),e.totalNum>t*this.common.pageSize&&await this.getRecruitDTL(t+1),this.loading=!1},async setEchars(t){await this.getRecruitStat(),await this.getRecruitDTL(1),this.getChannel(!0,t),this.getRecruitment(!0),this.getChannelConversion(!0,t);for(let e=0;e<this.inpostList.length;e++)this.getInpost(this.inpostList[e],!0);this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getChannel(!0,!0):this.getChannel(!1)}))})),this.observer.observe(document.getElementById("channel")),this.observer3=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getRecruitment(!0):this.getRecruitment(!1)}))})),this.observer3.observe(document.getElementById("recruitment"));for(let e=0;e<this.inpostList.length;e++)this["observer4"+(e+1)]=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getInpost(this.inpostList[e],!0):this.getInpost(this.inpostList[e],!1)}))})),this["observer4"+(e+1)].observe(document.getElementById("inpostList"+this.inpostList[e].id));this.observer5=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?this.getChannelConversion(!0,!0):this.getChannelConversion(!1)}))})),this.observer5.observe(document.getElementById("channelConversion"))},formatter(t,e){return"year"===t?`${e}年`:"month"===t?`${e}月`:e},confirm(t){this.showMonth=!1,this.selMonth=(0,u.n7)(new Date(t),"month"),this.selMonthN=(0,u.n7)(new Date(t),"normalDay2"),this.setEchars(!0)},onSelect(t){this.show=!1,this.selBu=t.value,this.$nextTick((()=>{this.setEchars(!0)}))},getRecruitment(t){const e=document.getElementById("recruitment");if(!e)return!1;const n=this.$echarts.init(e);let s,i=this.recruited?this.recruited/this.vacancy*100:0;const a=[{value:i.toFixed(2),name:"In-post / Forcast",title:{offsetCenter:["0%","13%"],fontSize:12},detail:{valueAnimation:!0,offsetCenter:["0%","-7%"],fontSize:24}}];s={color:["#5579ED"],series:[{type:"gauge",startAngle:90,endAngle:-270,center:["50%","50%"],pointer:{show:!1},progress:{show:i,overlap:!1,roundCap:!0,clip:!1},axisLine:{lineStyle:{width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:t?a:[],title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",formatter:"{value}%"}}]},s&&"object"===typeof s&&n.setOption(s),window.addEventListener("resize",n.resize)},getChannelJoin(t){let e=0;for(let n in this[t])if(this[t].hasOwnProperty(n)){const s=this[t][n].map((t=>t.job_onboarding_count)).reduce(((t,e)=>t+e),0);e+=s}return e},getChannel(t,e){const n=document.getElementById("channel");if(!n)return!1;const s=this.$echarts.init(n,null,{devicePixelRatio:2});let i,a=[];for(let o in this.channelItems)if(this.channelItems.hasOwnProperty(o)){const t=this.channelItems[o].map((t=>t.job_onboarding_count)).reduce(((t,e)=>t+e),0),e=t/this.getChannelJoin("channelItems");a.push({name:o,total:100*e,value:(100*e).toFixed(2)||0})}a=[...a].sort(((t,e)=>e.total-t.total)),a=a.filter((t=>t.total>=.01)),i={tooltip:{alwaysShowContent:!1,trigger:"item",axisPointer:{type:"shadow"},formatter:"{b}\n{c}%"},color:this.setEchartColor(),series:[{type:"pie",center:["50%","50%"],radius:[52,82],itemStyle:{borderColor:"#fff",borderWidth:1},label:{show:!0,formatter:function(t){return t.dataIndex<5?`{name|${t.data.name}}\n`+t.data.value+"%":""},lineHeight:12,rich:{name:{fontSize:10,color:"#999"},time:{fontSize:13,fontWeight:600,lineHeight:22,color:"#6B6B6B"}}},labelLine:{normal:{lineStyle:{color:"#E6E6E6"},show:!1,length:8,length2:10}},data:t?a:[]}]},i&&"object"===typeof i&&s.setOption(i),s.on("finished",(function(){let t=s.getOption().series[0],e=t.data;for(let n=0;n<e.length&&n<4;n++)e[n].labelLine={normal:{show:!0}};s.setOption({series:[t]})})),window.addEventListener("resize",s.resize)},getChannelConversion(t,e){const n=document.getElementById("channelConversion");if(!n)return!1;const s=this.$echarts.init(n,null,{devicePixelRatio:2});const i=this.recruitStat.map((t=>t.notificationed)).reduce(((t,e)=>t+e),0),a=this.recruitStat.map((t=>t.successful_interviews)).reduce(((t,e)=>t+e),0),o=this.recruitStat.map((t=>t.successful_onboarding)).reduce(((t,e)=>t+e),0);let r,c=["#99B8F1","#4379CE","#FADB37","#78CDED","#FFA748","#FD8602","#72B5EB"];r={color:c,tooltip:{trigger:"item",formatter:"{b} : {c}",alwaysShowContent:!1},legend:{bottom:"5%",left:"7%",icon:"circle",itemHeight:10,itemWidth:10,itemGap:20,textStyle:{fontSize:"12",color:"#333333"}},grid:{bottom:"2%",left:"7%",right:"16%",containLabel:!0},series:[{name:"",type:"funnel",left:"12.5%",top:16,bottom:45,width:"75%",min:0,minSize:"0%",maxSize:"100%",sort:"descending",label:{show:!0,color:"#FFF",position:"inside",fontSize:"12",formatter:"{c}"},labelLine:{length:10},itemStyle:{},data:t?[{value:i,name:"邀约面试数"},{value:a,name:"面试数"},{value:o,name:"入职数"}]:[]}]},r&&"object"===typeof r&&s.setOption(r),window.addEventListener("resize",s.resize)},showMore(t){this["isShow"+t]=!this["isShow"+t]},getInpost(t,e){const n=document.getElementById("inpostList"+t.id);if(!n)return!1;const s=this.$echarts.init(n);let i,a=["#5579ED"];"warning"===t?.type?a=["#B87B00"]:"danger"===t?.type&&(a=["#F25769"]);const o=[{value:82.22,name:"In-post / Forcast",title:{offsetCenter:["0%","13%"],fontSize:10},detail:{valueAnimation:!0,offsetCenter:["0%","-7%"],fontSize:16}}];i={color:a,series:[{type:"gauge",startAngle:90,endAngle:-270,center:["50%","37%"],pointer:{show:!1},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1},axisLine:{lineStyle:{width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:e?o:[],title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",formatter:"{value}%"}}]},i&&"object"===typeof i&&s.setOption(i),window.addEventListener("resize",s.resize)}}},v=m,p=n(845),g=(0,p.A)(v,s,i,!1,null,"646fbf6a",null),f=g.exports},4175:function(t,e,n){n.d(e,{a5:function(){return r},n7:function(){return i},of:function(){return s},y7:function(){return a},zB:function(){return o}});n(4114);function s(t,e){const n=JSON.parse(JSON.stringify(t)),i=Object.keys(t);return i.forEach((i=>{-1!==[null,void 0,""].indexOf(n[i])?delete n[i]:e&&"object"===typeof t[i]&&!Array.isArray(t[i])&&(n[i]=s(n[i]))})),n}function i(t,e){if(!t)return"";const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],i=new Date(t),a=i.getFullYear(),o=String(i.getMonth()+1).padStart(2,0),r=n[i.getMonth()],c=s[i.getMonth()],l=String(i.getDate()).padStart(2,0),h=String(i.getHours()).padStart(2,0),u=String(i.getMinutes()).padStart(2,0),d=String(i.getSeconds()).padStart(2,0);switch(e){case"slash":return`${a}/${o}/${l}`;case"year":return`${a}`;case"monthN":return`${a}-${o}`;case"monthLong":return`${a}-${c}`;case"month":return`${a}-${r}`;case"monthsh":return`${a}/${o}`;case"day":return`${l}-${o}-${a}`;case"timestamp":return`${a}${o}${l}${h}${u}`;case"obj":return{y:a,m:o,d:l,h:h,min:u,s:d};case"normal":return`${a}-${o}-${l} ${h}:${u}:${d}`;case"normalHours":return`${a}-${o}-${l} ${h}`;case"normalMin":return`${a}-${o}-${l} ${h}:${u}`;case"normalDay":return`${a}-${r}-${l}`;case"normalDay2":return`${a}-${o}-${l}`;default:return`${o}-${l}-${a} ${h}:${u}`}}const a=t=>{const e=new Date(t),n=e.getFullYear(),s=e.getMonth(),i=t=>t%4===0&&t%100!==0||t%400===0,a=[31,i(n)?29:28,31,30,31,30,31,31,30,31,30,31][s];return a},o=()=>{let t=["#73A0FA","#73DEB3","#7585A2","#F7C739","#EB7E65","#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t},r=(t,e)=>{const n=new Date,s=n.getFullYear(),i=n.getMonth()-(e||0),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=[];for(let c=5;c>=0;c--){const e=i-c<0?s-1:s,n=(i-c+12)%12,l=t?o[n]:a[n],h=`${e}-${l}`;r.push(h)}return r}},2190:function(t,e,n){t.exports=n.p+"img/more.7e30239b.svg"},597:function(t,e,n){t.exports=n.p+"img/select.b6d4fedc.svg"},2024:function(t,e,n){t.exports=n.p+"img/icon_1.4aee27f1.svg"},711:function(t,e,n){t.exports=n.p+"img/icon_1.6cb9d5d3.svg"},7592:function(t,e,n){t.exports=n.p+"img/icon_4.35916c48.svg"}}]);