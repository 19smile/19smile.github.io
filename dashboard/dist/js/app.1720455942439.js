(function(){var e={8193:function(e,t,n){"use strict";n.d(t,{sc:function(){return g},pi:function(){return v},t$:function(){return y},VD:function(){return I},K3:function(){return w},V_:function(){return A},Hz:function(){return L},LX:function(){return C},bC:function(){return b},vc:function(){return k},h0:function(){return P}});var o=n(2332),r=n.n(o),i=n(2455),a=n(4169),c=n(4873),s=n.n(c),u=n(8554),d=n.n(u);function l(e,t,n){const o="POST",r="application/json",i="application/x-www-form-urlencoded",a="",c=Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{}),u=d().stringify(c),l=`${o}\n${r}\n\n${i}\n${a}\n${e}?${u}`,h=s().HmacSHA256(l,n).toString(s().enc.Base64);return h}class h{constructor(){this.baseUrl={NODE_ENV:"production",BASE_URL:""}.VUE_APP_BASE_API,this.queue={}}getInsideConfig(){const e={baseURL:"https://bigdata.taikoohui.com",headers:{"X-Ca-Key":"204641149","X-Ca-Signature":"",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded","X-Ca-Signature-Method":"HmacSHA256"}};return e}getInsideConfig2(){const e={baseURL:"https://datafilling.taikoohui.com",headers:{"User-Agent":"Apifox/1.0.0 (https://apifox.com)","Content-Type":"application/json"}};return e}destroy(e){delete this.queue[e],Object.keys(this.queue).length||i.A.clear()}interceptors(e,t,n){e.interceptors.request.use((e=>{if(n){const t=l(e.url.split("?")?.[0],e.params,"D0pVG8hX5otukHBd4vphiH5ZDpyRhPzg");e.headers["X-Ca-Signature"]=t}return Object.keys(this.queue).length||i.A.loading({duration:0,message:"加载中...",forbidClick:!0}),this.queue[t]=!0,e}),(e=>Promise.reject(e))),e.interceptors.response.use((async e=>(this.destroy(t),e=e.data,0==e.errCode||200==e.code?e.data:(a.A.alert({title:"提示",message:e.msg||e?.errMsg||"error"}),Promise.reject(e)))),(e=>(this.destroy(t),a.A.alert({title:"提示",message:e.msg||e.message||"error"}),Promise.reject(e))))}request(e){const t=r().create();e=Object.assign(this.getInsideConfig(),e);const n=Object.keys(e.params).map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(e.params[t])}`)),o=n.join("&");return this.interceptors(t,e.url+"?"+o,!0),"post"===e.method&&(e.data=d().stringify(e.data)),t(e)}request2(e){const t=r().create();return e=Object.assign(this.getInsideConfig2(),e),this.interceptors(t,e.url),t(e)}}var m=h;const p=new m;var f=p;const g=e=>f.request({url:"/tkh_hr_bu",method:"post",params:e}),y=e=>f.request({url:"/tkh_hr_employee",method:"post",params:e}),v=e=>f.request({url:"/tkh_hr_EmpVSHeadcount",method:"post",params:e}),b=e=>f.request({url:"/tkh_hr_TrainingStat",method:"post",params:e}),k=e=>f.request({url:"/tkh_hr_TrainingStat",method:"post",params:e}),w=e=>f.request({url:"/tkh_hr_LeaveDTL",method:"post",params:e}),C=e=>f.request({url:"/tkh_hr_RecruitStat",method:"post",params:e}),L=e=>f.request({url:"/tkh_hr_RecruitDTL",method:"post",params:e}),I=e=>f.request({url:"/tkh_hr_LeaveByMonth",method:"post",params:e}),P=e=>f.request2({url:"/dashboardapi/mpLogin",method:"post",data:e}),A=e=>f.request({url:"/tkh_hr_RecruitByJob",method:"post",params:e})},9318:function(e,t,n){"use strict";var o=n(2856),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.loading?e._e():t("router-view")],1)},i=[],a=n(8193),c=n(8554),s=n.n(c),u=n(1910),d={name:"App",data(){return{loading:!1,pageSize:2e3,scrollTop:0}},computed:{...(0,u.aH)({hrEmployee:e=>e.hrEmployee,buList:e=>e.buList}),isLogin(){return this.$store.getters["layout/isLogin"]}},async created(){this.hrEmployee=[],this.saveEmployee([]),this.buList=[],this.saveBuList([]),await this.getEmployee(1),await this.getBuList(1)},methods:{async getEmployee(e){if(this.loading)return!1;1===e&&(this.hrEmployee=[],this.saveEmployee([])),this.loading=!0;const t={pageNum:e,pageSize:this.pageSize,returnTotalNum:"true"},n=await a.t$(t);this.totalNum=n.totalNum,this.saveEmployee(this.hrEmployee.concat(n.rows||[])),n.totalNum>e*this.pageSize&&await this.getEmployee(e+1),this.loading=!1},async getBuList(e){const t={pageNum:e,pageSize:this.pageSize,returnTotalNum:"true"},n=await a.sc(t);this.saveBuList(n.rows||[])},...(0,u.PY)(["saveEmployee","saveBuList"])},watch:{async $route(e,t,n){const o=window.location.href,r=s().parse(o.split("?")[1]);r?.isLogin&&(this.hrEmployee=[],this.saveEmployee([]),this.buList=[],this.saveBuList([]),await this.getEmployee(1),await this.getBuList(1));const i=window.pageYOffset||document.documentElement.scrollTop;this.scrollTop=!1,this.$nextTick((()=>{const e=document.getElementsByClassName("header")?.[0];if(i>=e?.offsetHeight-60&&(this.scrollTop=!0),r?.isLogin){const e=this.$route,t={name:e.name,path:e.path,params:e.params,query:{}};this.$router.replace(t)}}))},scrollTop(e){if(!e)return;const t=document.getElementsByClassName("header")?.[0];window.scrollTo(0,t.offsetHeight-48)}}},l=d,h=n(845),m=(0,h.A)(l,r,i,!1,null,null,null),p=m.exports,f=n(2544),g=n(5225),y=n(1594),v={home:()=>n.e(196).then(n.bind(n,6196)),layout:()=>n.e(410).then(n.bind(n,410)),noFound:()=>n.e(520).then(n.bind(n,520))},b={headcount:()=>n.e(389).then(n.bind(n,3389)),headcountCoreKPI:()=>n.e(782).then(n.bind(n,5782)),headcountdetailByBu:()=>n.e(325).then(n.bind(n,7325)),headcountTurnover:()=>n.e(258).then(n.bind(n,258))},k={deL:()=>n.e(126).then(n.bind(n,7126)),deLCoreKPI:()=>n.e(956).then(n.bind(n,8956)),deLWelfare:()=>n.e(770).then(n.bind(n,3770))},w={recruitment:()=>n.e(921).then(n.bind(n,6921)),recruitmentCoreKPI:()=>n.e(457).then(n.bind(n,4457)),recruitmentEfficiency:()=>n.e(723).then(n.bind(n,6723))},C={training:()=>n.e(245).then(n.bind(n,9245)),trainingCoreKPI:()=>n.e(877).then(n.bind(n,2258)),trainingRanking:()=>n.e(716).then(n.bind(n,6716))},L={attendance:()=>n.e(729).then(n.bind(n,3729)),attendanceCoreKPI:()=>n.e(375).then(n.bind(n,375)),attendanceLeaveUsage:()=>n.e(898).then(n.bind(n,1898))},I={...v,...b,...k,...w,...C,...L},P=[{path:"/headcount",component:I.layout,name:"headcount",meta:{title:"Headcount"},children:[{path:"index",component:I.headcount,redirect:"/headcount/index/coreKPI",name:"headcount",meta:{title:"Core KPI",key:"Headcount"},children:[{path:"coreKPI",component:I.headcountCoreKPI,name:"headcountCoreKPI",meta:{title:"Core KPI",key:"Headcount",index:0}},{path:"detailByBu",component:I.headcountdetailByBu,name:"headcountdetailByBu",meta:{title:"Detail By Bu",key:"Headcount",index:1}},{path:"turnover",component:I.headcountTurnover,name:"headcountTurnover",meta:{title:"Turnover",key:"Headcount",index:2}}]}]}],A=[{path:"/deL",component:I.layout,name:"dei",meta:{title:"De & I"},children:[{path:"index",component:I.deL,redirect:"/deL/index/coreKPI",name:"dei",meta:{title:"Core KPI",key:"De & I"},children:[{path:"coreKPI",component:I.deLCoreKPI,name:"deLCoreKPI",meta:{title:"Core KPI",key:"De & I",index:0}},{path:"welfare",component:I.deLWelfare,name:"deLWelfare",meta:{title:"Welfare",key:"De & I",index:1}}]}]}],E=[{path:"/recruitment",component:I.layout,name:"recruitment",meta:{title:"Recruitment"},children:[{path:"index",component:I.recruitment,redirect:"/recruitment/index/coreKPI",name:"recruitment",meta:{title:"Core KPI",key:"Recruitment"},children:[{path:"coreKPI",component:I.recruitmentCoreKPI,name:"recruitmentCoreKPI",meta:{title:"Core KPI",key:"Recruitment",index:0}},{path:"efficiency",component:I.recruitmentEfficiency,name:"recruitmentEfficiency",meta:{title:"Efficiency",key:"Recruitment",index:1}}]}]}],_=[{path:"/training",component:I.layout,name:"training",meta:{title:"Training"},children:[{path:"index",component:I.training,redirect:"/training/index/coreKPI",name:"training",meta:{title:"Core KPI",key:"Training"},children:[{path:"coreKPI",component:I.trainingCoreKPI,name:"trainingCoreKPI",meta:{title:"Core KPI",key:"Training",index:0}},{path:"ranking",component:I.trainingRanking,name:"trainingRanking",meta:{title:"Ranking",key:"Training",index:1}}]}]}],x=[{path:"/attendance",component:I.layout,name:"attendance",meta:{title:"Attendance"},children:[{path:"index",component:I.attendance,redirect:"/attendance/index/coreKPI",name:"attendance",meta:{title:"Core KPI",key:"Attendance"},children:[{path:"coreKPI",component:I.attendanceCoreKPI,name:"attendanceCoreKPI",meta:{title:"Core KPI",key:"Attendance",index:0}},{path:"leaveUsage",component:I.attendanceLeaveUsage,name:"attendanceLeaveUsage",meta:{title:"Leave Usage",key:"Attendance",index:1}}]}]}];let K=[...P,...A,...E,..._,...x],S=[{path:"/",component:I.home,redirect:"/headcount/index",hidden:!0,children:K},{path:"/home",component:I.home,hidden:!0},{path:"/404",component:I.noFound,hidden:!0}];var T=[...S],B={hrEmployee:[],buList:[],key:""},q={},j={saveEmployee(e,t){e.hrEmployee=t,e.employeeInit=!0},saveBuList(e,t){e.buList=t.map((e=>({name:e.bu_code,value:e.bu_code,seq:e.seq}))).sort(((e,t)=>e.seq-t.seq))},saveKey(e,t){e.key=t}},O={},H=n(5462);let $={set(e,t){window.localStorage.setItem(e,t)},get(e){return window.localStorage.getItem(e)},remove(e){window.localStorage.removeItem(e)},clear(){window.localStorage.clear()}},N={set(e,t){H.A.set(e,t)},get(e){return H.A.get(e)},remove(e){H.A.remove(e)},clear(){var e=document.cookie.match(/[^ =;]+(?==)/g);if(e)for(var t=e.length;t--;)document.cookie=e[t]+"=0;expires="+new Date(0).toUTCString()+";max-age=0"}},R=window.localStorage?$:N;var D={namespaced:!0,modules:{},state:{token:""},getters:{token:e=>e.token},mutations:{setToken(e,t){R.set("token",t),e.token=t},clearToken(e){R.remove("token"),e.token=""}},actions:{}};const U={data:""},z={isLogin:e=>""!==e.data},F={set(e,t){console.log(t,1111111111),e.data=t}},M={checkIsLogin({commit:e},t){if(t)e("set",t);else{const e=encodeURIComponent("https://datafilling.taikoohui.com/dashboard"),t="ww5f50f12a65852431",n="1000157",o="snsapi_privateinfo";window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?agentid=${n}&appid=${t}&redirect_uri=${e}&response_type=code&scope=${o}&state=#wechat_redirect`}},mpLogin({commit:e,dispatch:t,rootState:n},o){const r={code:o,agentId:"1000157"};return a.h0(r).then((t=>(console.log(t),e("set","isLogin"),Promise.resolve(t)))).catch((t=>(e("set",""),console.log(t),Promise.reject(t))))}};var V={namespaced:!0,state:U,actions:M,getters:z,mutations:F};o.Ay.use(u.Ay);var X=new u.Ay.Store({modules:{account:D,layout:V},state:B,getters:q,mutations:j,actions:O});o.Ay.use(X),o.Ay.use(y.Ay);const W=new y.Ay({mode:"hash",scrollBehavior:()=>({y:0}),base:"",routes:T,scrollBehavior(e,t,n){return n||{x:0,y:0}}});W.beforeEach((async(e,t,n)=>{document.title=e?.meta?.key+"-"+e?.meta?.title;const o=window.location.href,r=s().parse(o.split("?")[1]);r.code?X.dispatch("layout/mpLogin",r.code).then((e=>{let t;delete r.code,delete r.state,t=`${o.split("?")[0]}#/`,window.location.href=t+"?isLogin=isLogin"})):n()})),W.afterEach(((e,t)=>{}));const Y=y.Ay.prototype.push,G=y.Ay.prototype.replace;y.Ay.prototype.push=function(e){return Y.call(this,e).catch((e=>e))},y.Ay.prototype.replace=function(e){return G.call(this,e).catch((e=>e))};var J=W;n(7054);const Z={computed:{...(0,u.aH)({hrEmployee:e=>e.hrEmployee})}};var Q=Z;const ee={computed:{...(0,u.aH)({buList:e=>e.buList})}};var te=ee;n(2241);o.Ay.mixin(Q),o.Ay.mixin(te),o.Ay.use(f.Ay),o.Ay.config.productionTip=!1,o.Ay.prototype.$echarts=g,o.Ay.filter("formatNumber",(function(e){if(!e)return"0";const t=/\B(?=(\d{3})+(?!\d))/g;return e.toString().replace(t,",")})),new o.Ay({router:J,store:X,render:e=>e(p)}).$mount("#app")},477:function(){},2634:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".1720455942439.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".1720455942439.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="HR-Dashboard:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[r];var h=function(t,n){c.onerror=c.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var c=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var o=n&&n.type,c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=c,a.parentNode&&a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=c,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),c=n.p+a;if(t(a,c))return r();e(o,c,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={196:1,258:1,325:1,375:1,457:1,520:1,716:1,723:1,770:1,782:1,877:1,898:1,956:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),c=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var d=s(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9318)}));o=n.O(o)})();