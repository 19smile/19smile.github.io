(function(){var e={8193:function(e,t,n){"use strict";n.d(t,{sc:function(){return g},pi:function(){return v},t$:function(){return y},VD:function(){return C},K3:function(){return w},M1:function(){return A},f1:function(){return K},V_:function(){return P},Hz:function(){return _},Oh:function(){return E},ew:function(){return S},LX:function(){return L},DN:function(){return T},bC:function(){return b},vc:function(){return k},UF:function(){return x},h0:function(){return I}});var r=n(2332),o=n.n(r),a=n(2455),i=n(4169),s=n(4873),c=n.n(s),u=n(8554),d=n.n(u);function l(e,t,n){const r="POST",o="application/json",a="application/x-www-form-urlencoded",i="",s=Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{}),u=d().stringify(s),l=`${r}\n${o}\n\n${a}\n${i}\n${e}?${u}`,h=c().HmacSHA256(l,n).toString(c().enc.Base64);return h}class h{constructor(){this.baseUrl={NODE_ENV:"production",BASE_URL:""}.VUE_APP_BASE_API,this.queue={}}getInsideConfig(){const e={baseURL:{NODE_ENV:"production",BASE_URL:""}.VUE_APP_BASE_API,baseURL:"https://bigdatauat.taikoohui.com",headers:{"X-Ca-Key":"204658722","X-Ca-Signature":"",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded","X-Ca-Signature-Method":"HmacSHA256"}};return e}getInsideConfig2(){const e={baseURL:"https://datafillinguat.taikoohui.com",headers:{"User-Agent":"Apifox/1.0.0 (https://apifox.com)","Content-Type":"application/json"}};return e}destroy(e){delete this.queue[e],Object.keys(this.queue).length||a.A.clear()}interceptors(e,t,n){e.interceptors.request.use((e=>{if(n){const t=l(e.url.split("?")?.[0],e.params,"nyTPyuL9sw19oFxq3MrlIUxzWqUIeC3n");e.headers["X-Ca-Signature"]=t}return Object.keys(this.queue).length||a.A.loading({duration:0,message:"加载中...",forbidClick:!0}),this.queue[t]=!0,e}),(e=>Promise.reject(e))),e.interceptors.response.use((async e=>(this.destroy(t),e=e.data,0==e.errCode||200==e.code?e.data:(i.A.alert({title:"提示",message:e.msg||e?.errMsg||"error"}),Promise.reject(e)))),(e=>(this.destroy(t),i.A.alert({title:"提示",message:e.msg||e.message||"error"}),Promise.reject(e))))}request(e){const t=o().create();e=Object.assign(this.getInsideConfig(),e);const n=Object.keys(e.params).map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(e.params[t])}`)),r=n.join("&");return e.url="/uat"+e.url,this.interceptors(t,e.url+"?"+r,!0),"post"===e.method&&(e.data=d().stringify(e.data)),t(e)}request2(e){const t=o().create();return e=Object.assign(this.getInsideConfig2(),e),this.interceptors(t,e.url),t(e)}}var m=h;const p=new m;var f=p;n(9558);const g=e=>f.request({url:"/tkh_hr_bu",method:"post",params:e}),y=e=>f.request({url:"/tkh_hr_employee",method:"post",params:e}),v=e=>f.request({url:"/tkh_hr_EmpVSHeadcount",method:"post",params:e}),b=e=>f.request({url:"/tkh_hr_TrainingStat",method:"post",params:e}),k=e=>f.request({url:"/tkh_hr_TrainingStat",method:"post",params:e}),w=e=>f.request({url:"/tkh_hr_LeaveDTL",method:"post",params:e}),L=e=>f.request({url:"/tkh_hr_RecruitStat",method:"post",params:e}),_=e=>f.request({url:"/tkh_hr_RecruitDTL",method:"post",params:e}),C=e=>f.request({url:"/tkh_hr_LeaveByMonth",method:"post",params:e}),I=e=>f.request2({url:"/dashboardapi/mpLogin",method:"post",data:e}),P=e=>f.request({url:"/tkh_hr_RecruitByJob",method:"post",params:e}),A=e=>f.request({url:"/tkh_hr_LeaveReturn",method:"post",params:e}),E=e=>f.request({url:"/tkh_hr_RecruitOnboard",method:"post",params:e}),x=e=>f.request({url:"/tkh_hr_TrainingYTD",method:"post",params:e}),T=e=>f.request({url:"/tkh_hr_TrainingEffectiveness",method:"post",params:e}),S=e=>f.request({url:"/tkh_hr_RecruitProcess",method:"post",params:e}),K=e=>f.request({url:"/tkh_hr_LeaveYTD",method:"post",params:e})},443:function(e,t,n){"use strict";var r=n(2856),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e.loading?e._e():t("router-view")],1)},a=[],i=n(8193),s=n(8554),c=n.n(s),u=n(1910),d={name:"App",data(){return{loading:!1,pageSize:2e3,scrollTop:0}},computed:{...(0,u.aH)({hrEmployee:e=>e.hrEmployee,buList:e=>e.buList}),isLogin(){return this.$store.getters["layout/isLogin"]}},async created(){this.hrEmployee=[],this.saveEmployee([]),this.buList=[],this.saveBuList([]),await this.getEmployee(1),await this.getBuList(1)},methods:{async getEmployee(e){if(this.loading)return!1;1===e&&(this.hrEmployee=[],this.saveEmployee([])),this.loading=!0;const t={pageNum:e,pageSize:this.pageSize,returnTotalNum:"true"},n=await i.t$(t);this.totalNum=n.totalNum,this.saveEmployee(this.hrEmployee.concat(n.rows||[])),n.totalNum>e*this.pageSize&&await this.getEmployee(e+1),this.loading=!1},async getBuList(e){this.loading=!0;const t={pageNum:e,pageSize:this.pageSize,returnTotalNum:"true"},n=await i.sc(t);this.saveBuList(n.rows||[]),this.loading=!1},...(0,u.PY)(["saveEmployee","saveBuList"])},watch:{async $route(e,t,n){const r=window.location.href,o=c().parse(r.split("?")[1]);o?.isLogin&&(this.$store.dispatch("layout/checkIsLogin","isLogin"),this.hrEmployee=[],this.saveEmployee([]),this.buList=[],this.saveBuList([]),await this.getEmployee(1),await this.getBuList(1));const a=window.pageYOffset||document.documentElement.scrollTop;this.scrollTop=!1,this.$nextTick((()=>{const e=document.getElementsByClassName("header")?.[0];if(a>=e?.offsetHeight-60&&(this.scrollTop=!0),o?.isLogin){const e=this.$route,t={name:e.name,path:e.path,params:e.params,query:{}};this.$router.replace(t)}}))},scrollTop(e){if(!e)return;const t=document.getElementsByClassName("header")?.[0];window.scrollTo(0,t.offsetHeight-48)}}},l=d,h=n(845),m=(0,h.A)(l,o,a,!1,null,null,null),p=m.exports,f=n(2544),g=n(5225),y=n(1594),v={home:()=>n.e(711).then(n.bind(n,3711)),layout:()=>n.e(410).then(n.bind(n,410)),noFound:()=>n.e(520).then(n.bind(n,520)),summary:()=>n.e(892).then(n.bind(n,4892))},b={headcount:()=>n.e(389).then(n.bind(n,3389)),headcountCoreKPI:()=>n.e(810).then(n.bind(n,7810)),headcountdetailByBu:()=>n.e(375).then(n.bind(n,2375)),headcountTurnover:()=>n.e(486).then(n.bind(n,4486))},k={deL:()=>n.e(126).then(n.bind(n,7126)),deLCoreKPI:()=>n.e(889).then(n.bind(n,2889)),deLWelfare:()=>n.e(184).then(n.bind(n,2803))},w=n(9558),L={training:()=>n.e(245).then(n.bind(n,9245)),trainingCoreKPI:()=>n.e(312).then(n.bind(n,5312)),trainingRanking:()=>n.e(189).then(n.bind(n,7189))},_={attendance:()=>n.e(729).then(n.bind(n,3729)),attendanceCoreKPI:()=>n.e(611).then(n.bind(n,611)),attendanceLeaveUsage:()=>n.e(48).then(n.bind(n,2048))},C={...v,...b,...k,...w.A,...L,..._},I=[{path:"/headcount",component:C.layout,name:"headcount",meta:{title:"Headcount"},children:[{path:"index",component:C.headcount,redirect:"/headcount/index/coreKPI",name:"headcount",meta:{title:"Core KPI",key:"Headcount"},children:[{path:"coreKPI",component:C.headcountCoreKPI,name:"headcountCoreKPI",meta:{title:"Core KPI",key:"Headcount",index:0}},{path:"detailByBu",component:C.headcountdetailByBu,name:"headcountdetailByBu",meta:{title:"Detail By Bu",key:"Headcount",index:1}},{path:"turnover",component:C.headcountTurnover,name:"headcountTurnover",meta:{title:"Turnover",key:"Headcount",index:2}}]}]}],P=[{path:"/deL",component:C.layout,name:"dei",meta:{title:"D & I"},children:[{path:"index",component:C.deL,redirect:"/deL/index/coreKPI",name:"dei",meta:{title:"Core KPI",key:"D & I"},children:[{path:"coreKPI",component:C.deLCoreKPI,name:"deLCoreKPI",meta:{title:"Core KPI",key:"D & I",index:0}},{path:"welfare",component:C.deLWelfare,name:"deLWelfare",meta:{title:"Welfare",key:"D & I",index:1}}]}]}],A=[{path:"/recruitment",component:C.layout,name:"recruitment",meta:{title:"Recruitment"},children:[{path:"index",component:C.recruitment,redirect:"/recruitment/index/coreKPI",name:"recruitment",meta:{title:"Core KPI",key:"Recruitment"},children:[{path:"coreKPI",component:C.recruitmentCoreKPI,name:"recruitmentCoreKPI",meta:{title:"Core KPI",key:"Recruitment",index:0}},{path:"efficiency",component:C.recruitmentEfficiency,name:"recruitmentEfficiency",meta:{title:"Efficiency",key:"Recruitment",index:1}}]}]}],E=[{path:"/training",component:C.layout,name:"training",meta:{title:"Training"},children:[{path:"index",component:C.training,redirect:"/training/index/coreKPI",name:"training",meta:{title:"Core KPI",key:"Training"},children:[{path:"coreKPI",component:C.trainingCoreKPI,name:"trainingCoreKPI",meta:{title:"Core KPI",key:"Training",index:0}},{path:"ranking",component:C.trainingRanking,name:"trainingRanking",meta:{title:"Ranking",key:"Training",index:1}}]}]}],x=[{path:"/attendance",component:C.layout,name:"attendance",meta:{title:"Attendance"},children:[{path:"index",component:C.attendance,redirect:"/attendance/index/coreKPI",name:"attendance",meta:{title:"Core KPI",key:"Attendance"},children:[{path:"coreKPI",component:C.attendanceCoreKPI,name:"attendanceCoreKPI",meta:{title:"Core KPI",key:"Attendance",index:0}},{path:"leaveUsage",component:C.attendanceLeaveUsage,name:"attendanceLeaveUsage",meta:{title:"Leave Usage",key:"Attendance",index:1}}]}]}];let T=[...I,...P,...A,...E,...x,{path:"/summary",name:"summary",component:C.summary,meta:{title:"",key:"Summary"}}],S=[{path:"/",component:C.home,redirect:"/summary",hidden:!0,children:T},{path:"/home",component:C.home,hidden:!0},{path:"/404",component:C.noFound,hidden:!0}];var K=[...S],q={hrEmployee:[],buList:[],key:""},B={},O={saveEmployee(e,t){e.hrEmployee=t,e.employeeInit=!0},saveBuList(e,t){e.buList=t.map((e=>({name:e.bu_code,value:e.bu_code,seq:e.seq}))).sort(((e,t)=>e.seq-t.seq))},saveKey(e,t){e.key=t}},j={},R=n(5462);let N={set(e,t){window.localStorage.setItem(e,t)},get(e){return window.localStorage.getItem(e)},remove(e){window.localStorage.removeItem(e)},clear(){window.localStorage.clear()}},$={set(e,t){R.A.set(e,t)},get(e){return R.A.get(e)},remove(e){R.A.remove(e)},clear(){var e=document.cookie.match(/[^ =;]+(?==)/g);if(e)for(var t=e.length;t--;)document.cookie=e[t]+"=0;expires="+new Date(0).toUTCString()+";max-age=0"}},U=window.localStorage?N:$;var H={namespaced:!0,modules:{},state:{token:""},getters:{token:e=>e.token},mutations:{setToken(e,t){U.set("token",t),e.token=t},clearToken(e){U.remove("token"),e.token=""}},actions:{}};const D={data:""},z={isLogin:e=>""!==e.data},F={set(e,t){console.log(t,1111111111),e.data=t}},M={checkIsLogin({commit:e},t){if(t)e("set",t);else{console.log("拉起授权",location.href);const e=encodeURIComponent("https://datafillinguat.taikoohui.com/dashboard/"),t="1000009",n="wwef6bdb038bd7df54",r="snsapi_privateinfo";window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?agentid=${t}&appid=${n}&redirect_uri=${e}&response_type=code&scope=${r}&state=#wechat_redirect`}},mpLogin({commit:e,dispatch:t,rootState:n},r){const o={code:r,agentId:"1000009"};return i.h0(o).then((t=>(console.log(t),e("set","isLogin"),Promise.resolve(t)))).catch((t=>(e("set",""),Promise.reject(t))))}};var V={namespaced:!0,state:D,actions:M,getters:z,mutations:F};r.Ay.use(u.Ay);var W=new u.Ay.Store({modules:{account:H,layout:V},state:q,getters:B,mutations:O,actions:j});r.Ay.use(W),r.Ay.use(y.Ay);const X=new y.Ay({mode:"hash",scrollBehavior:()=>({y:0}),base:"",routes:K,scrollBehavior(e,t,n){return n||{x:0,y:0}}});X.beforeEach((async(e,t,n)=>{document.title=e?.meta?.key+(e?.meta?.title?"-"+e?.meta?.title:"");const r=window.location.href,o=c().parse(r.split("?")[1]);o.code?W.dispatch("layout/mpLogin",o.code).then((e=>{let t;delete o.code,delete o.state,t=`${r.split("?")[0]}#/`,window.location.href=t+"?isLogin=isLogin"})):n()})),X.afterEach(((e,t)=>{}));const Y=y.Ay.prototype.push,J=y.Ay.prototype.replace;y.Ay.prototype.push=function(e){return Y.call(this,e).catch((e=>e))},y.Ay.prototype.replace=function(e){return J.call(this,e).catch((e=>e))};var G=X;n(7054);const Q={computed:{...(0,u.aH)({hrEmployee:e=>e.hrEmployee})}};var Z=Q;const ee={computed:{...(0,u.aH)({buList:e=>e.buList})}};var te=ee;n(2241);r.Ay.mixin(Z),r.Ay.mixin(te),r.Ay.use(f.Ay),r.Ay.config.productionTip=!1,r.Ay.prototype.$echarts=g,r.Ay.filter("formatNumber",(function(e){if(!e)return"0";const t=/\B(?=(\d{3})+(?!\d))/g;return e.toString().replace(t,",")})),new r.Ay({router:G,store:W,render:e=>e(p)}).$mount("#app")},9558:function(e,t,n){"use strict";t.A={recruitment:()=>n.e(921).then(n.bind(n,6921)),recruitmentCoreKPI:()=>n.e(938).then(n.bind(n,9938)),recruitmentEfficiency:()=>n.e(723).then(n.bind(n,6723))}},477:function(){},2634:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".1739295586690.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".1739295586690.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="HR-Dashboard:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=s,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,null,o,a)}))},o={524:0};n.f.miniCss=function(e,t){var n={48:1,184:1,189:1,312:1,375:1,486:1,520:1,611:1,711:1,723:1,810:1,889:1,892:1,938:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var d=c(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkHR_Dashboard"]=self["webpackChunkHR_Dashboard"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(443)}));r=n.O(r)})();