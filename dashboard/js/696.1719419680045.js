"use strict";(self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[]).push([[696],{5315:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(0),e("div",{staticClass:"contract-renewing-content"},[e("van-row",{staticClass:"contract-renewing-content-split text-center",attrs:{gutter:"16"}},[e("van-col",{attrs:{span:"12"}},[e("div",[e("p",{staticClass:"fs-14 text-gray lh-24"},[t._v("Resignation of B/C")]),e("p",{staticClass:"fs-24 text-yellow lh-40 fw-600"},[t._v("6")])])]),e("van-col",{attrs:{span:"12"}},[e("div",[e("p",{staticClass:"fs-14 text-gray lh-24"},[t._v("Total Resign")]),e("p",{staticClass:"fs-24 text-blue lh-40 fw-600"},[t._v("42")])])])],1)],1),e("div",{staticClass:"percentage-box pb-8 pt-0"},[e("div",{staticClass:"percentage-box-content percentage-box-content-mini align-center text-white fs-14"},[e("div",{staticClass:"percentage-box-items bg-yellow text-center",style:{width:"24%"}},[e("span",{staticClass:"fw-600"},[t._v("24%")])]),e("div",{staticClass:"percentage-box-items text-right bg-gray",style:{width:"74%"}},[e("span",{staticClass:"text-gray"},[t._v("Total Resign")])])]),e("van-row",{staticClass:"fs-14 lh-32"},[e("van-col",{staticClass:"text-yellow",attrs:{span:"12"}},[t._v("Management")])],1)],1)])]),e("div",{staticClass:"content-items"},[e("div",{staticClass:"content-items-content"},[t._m(1),e("div",{staticClass:"resign-reason-content"},[e("div",{ref:"resignReason"},t._l(t.resignReasonList,(function(s,n){return e("div",{key:n,style:s.style},[e("span",[t._v(t._s(s.text))])])})),0)])])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(586)}}),e("span",[t._v("Resignation of Management")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-items-title"},[e("img",{attrs:{width:"24px",src:s(2948)}}),e("span",[t._v("Resign Reason")])])}],i=(s(4114),s(2407)),o={name:"turnover",data(){return{colors:(0,i.zB)(),resignReason:[{name:"回家带孩子"},{name:"去另外城市"},{name:"个人创业"},{name:"结婚"},{name:"个人发展"},{name:"个人原因"},{name:"出国移民"},{name:"继承家业"},{name:"考公务员"}],resignReasonList:[]}},created(){this.$nextTick((()=>{this.generateRandomItems()}))},watch:{},methods:{generateRandomItems(){const t=[],e=this.$refs.resignReason.offsetWidth,s=this.$refs.resignReason.offsetHeight;for(let n=0;n<this.resignReason.length;n++){let a,i;do{a={fontSize:`${this.getRandomInt(14,24)}px`,color:this.colors[n],position:"absolute",left:`${this.getRandomInt(0,e-100)}px`,top:`${this.getRandomInt(0,s-50)}px`},i=t.some((t=>this.isOverlap(a,t.style)))}while(i);t.push({text:this.resignReason[n].name,style:a})}this.resignReasonList=t},getRandomInt(t,e){return Math.floor(Math.random()*(e-t))+t},isOverlap(t,e){const s={left:parseInt(t.left),top:parseInt(t.top),right:parseInt(t.left)+5*parseInt(t.fontSize),bottom:parseInt(t.top)+parseInt(t.fontSize)},n={left:parseInt(e.left),top:parseInt(e.top),right:parseInt(e.left)+5*parseInt(e.fontSize),bottom:parseInt(e.top)+parseInt(e.fontSize)};return!(s.right<n.left||s.left>n.right||s.bottom<n.top||s.top>n.bottom)}}},r=o,c=s(845),l=(0,c.A)(r,n,a,!1,null,"be9cf9ec",null),p=l.exports},2407:function(t,e,s){s.d(e,{zB:function(){return n}});s(4114);const n=()=>{let t=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc","#379392","#4F86C6","#4F86C6","#6C49B8","#67D5B5","#EE7785","#C89EC4","#84B1ED"];return t}},586:function(t,e,s){t.exports=s.p+"img/icon_10.58d1e580.svg"},2948:function(t,e,s){t.exports=s.p+"img/icon_9.744f614f.svg"}}]);