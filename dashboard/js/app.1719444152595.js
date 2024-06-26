(function(){var e={6448:function(e,t,n){"use strict";var o=n(2856),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]})],1)},a=[],i=n(2332),c=n.n(i),u=n(2455),l=n(4169),d=n(1594),s={home:()=>n.e(849).then(n.bind(n,8849)),layout:()=>n.e(410).then(n.bind(n,410)),noFound:()=>n.e(520).then(n.bind(n,520))},m={headcount:()=>n.e(337).then(n.bind(n,2337)),headcountCoreKPI:()=>n.e(286).then(n.bind(n,6905)),headcountdetailByBu:()=>n.e(815).then(n.bind(n,815)),headcountTurnover:()=>n.e(696).then(n.bind(n,5315))},p={deL:()=>n.e(866).then(n.bind(n,4866)),deLCoreKPI:()=>n.e(230).then(n.bind(n,6230)),deLWelfare:()=>n.e(90).then(n.bind(n,8090))},h={recruitment:()=>n.e(463).then(n.bind(n,9463)),recruitmentCoreKPI:()=>n.e(891).then(n.bind(n,1891)),recruitmentEfficiency:()=>n.e(545).then(n.bind(n,7545))},f={training:()=>n.e(885).then(n.bind(n,1885)),trainingCoreKPI:()=>n.e(770).then(n.bind(n,6770)),trainingRanking:()=>n.e(992).then(n.bind(n,3992))},g={attendance:()=>n.e(619).then(n.bind(n,5619)),attendanceCoreKPI:()=>n.e(247).then(n.bind(n,7247)),attendanceLeaveUsage:()=>n.e(649).then(n.bind(n,8649))},y={...s,...m,...p,...h,...f,...g},v=[{path:"/headcount",component:y.layout,name:"headcount",meta:{title:"headcount"},children:[{path:"index",component:y.headcount,redirect:"/headcount/index/coreKPI",name:"headcount",meta:{title:"Core KPI",key:"headcount"},children:[{path:"coreKPI",component:y.headcountCoreKPI,name:"headcountCoreKPI",meta:{title:"Core KPI",key:"headcount",index:0}},{path:"detailByBu",component:y.headcountdetailByBu,name:"headcountdetailByBu",meta:{title:"Detail By Bu",key:"headcount",index:1}},{path:"turnover",component:y.headcountTurnover,name:"headcountTurnover",meta:{title:"Turnover",key:"headcount",index:2}}]}]}],b=[{path:"/deL",component:y.layout,name:"deL",meta:{title:"De & L"},children:[{path:"index",component:y.deL,redirect:"/deL/index/coreKPI",name:"deL",meta:{title:"Core KPI",key:"De & L"},children:[{path:"coreKPI",component:y.deLCoreKPI,name:"deLCoreKPI",meta:{title:"Core KPI",key:"De & L",index:0}},{path:"welfare",component:y.deLWelfare,name:"deLWelfare",meta:{title:"Welfare",key:"De & L",index:1}}]}]}],C=[{path:"/recruitment",component:y.layout,name:"recruitment",meta:{title:"recruitment"},children:[{path:"index",component:y.recruitment,redirect:"/recruitment/index/coreKPI",name:"recruitment",meta:{title:"Core KPI",key:"recruitment"},children:[{path:"coreKPI",component:y.recruitmentCoreKPI,name:"recruitmentCoreKPI",meta:{title:"Core KPI",key:"recruitment",index:0}},{path:"efficiency",component:y.recruitmentEfficiency,name:"recruitmentEfficiency",meta:{title:"Efficiency",key:"recruitment",index:1}}]}]}],k=[{path:"/training",component:y.layout,name:"training",meta:{title:"training"},children:[{path:"index",component:y.training,redirect:"/training/index/coreKPI",name:"training",meta:{title:"Core KPI",key:"training"},children:[{path:"coreKPI",component:y.trainingCoreKPI,name:"trainingCoreKPI",meta:{title:"Core KPI",key:"training",index:0}},{path:"ranking",component:y.trainingRanking,name:"trainingRanking",meta:{title:"Ranking",key:"training",index:1}}]}]}],P=[{path:"/attendance",component:y.layout,name:"attendance",meta:{title:"attendance"},children:[{path:"index",component:y.attendance,redirect:"/attendance/index/coreKPI",name:"attendance",meta:{title:"Core KPI",key:"attendance"},children:[{path:"coreKPI",component:y.attendanceCoreKPI,name:"attendanceCoreKPI",meta:{title:"Core KPI",key:"attendance",index:0}},{path:"leaveUsage",component:y.attendanceLeaveUsage,name:"attendanceLeaveUsage",meta:{title:"Leave Usage",key:"attendance",index:1}}]}]}];let w=[...v,...b,...C,...k,...P],I=[{path:"/",component:y.home,redirect:"/headcount/index",hidden:!0,children:w},{path:"/home",component:y.home,hidden:!0},{path:"/404",component:y.noFound,hidden:!0}];var A=[...I];o.Ay.use(d.Ay);const E=new d.Ay({mode:"hash",scrollBehavior:()=>({y:0}),base:"",routes:A,scrollBehavior(e,t,n){return n||{x:0,y:0}}});E.beforeEach((async(e,t,n)=>{document.title=e?.meta?.key+"-"+e?.meta?.title,n()})),E.afterEach(((e,t)=>{}));const x=d.Ay.prototype.push,K=d.Ay.prototype.replace;d.Ay.prototype.push=function(e){return x.call(this,e).catch((e=>e))},d.Ay.prototype.replace=function(e){return K.call(this,e).catch((e=>e))};var S=E,L=n(4873),T=n.n(L),j=n(8554),B=n.n(j);function O(e,t,n){const o="POST",r="application/json",a="application/x-www-form-urlencoded",i="",c=Object.keys(t).sort().reduce(((e,n)=>(e[n]=t[n],e)),{}),u=B().stringify(c),l=`${o}\n${r}\n\n${a}\n${i}\n${e}?${u}`,d=T().HmacSHA256(l,n).toString(T().enc.Base64);return d}class N{constructor(){this.baseUrl={NODE_ENV:"production",BASE_URL:""}.VUE_APP_BASE_API,this.queue={}}getInsideConfig(){const e={baseURL:"https://bigdata.taikoohui.com",headers:{"X-Ca-Key":"204641149","X-Ca-Signature":"",Accept:"application/json","Content-Type":"application/x-www-form-urlencoded","X-Ca-Signature-Method":"HmacSHA256"}};return e}destroy(e){delete this.queue[e],Object.keys(this.queue).length||u.A.clear()}interceptors(e,t){e.interceptors.request.use((e=>{const n=O(e.url.split("?")?.[0],e.params,"D0pVG8hX5otukHBd4vphiH5ZDpyRhPzg");return e.headers["X-Ca-Signature"]=n,Object.keys(this.queue).length||u.A.loading({duration:0,message:"加载中...",forbidClick:!0}),this.queue[t]=!0,e}),(e=>Promise.reject(e))),e.interceptors.response.use((async e=>(console.log(e.data),this.destroy(t),e=e.data,0==e.errCode?e.data:(l.A.alert({title:"提示",message:e.errMsg||"error"}),Promise.reject(e)))),(e=>(this.destroy(t),l.A.alert({title:"提示",message:e.msg||e.message}),Promise.reject(e))))}request(e){const t=c().create();e=Object.assign(this.getInsideConfig(),e),console.log(e);const n=Object.keys(e.params).map((t=>`${encodeURIComponent(t)}=${encodeURIComponent(e.params[t])}`)),o=n.join("&");return this.interceptors(t,e.url+"?"+o),"post"===e.method&&(e.data=B().stringify(e.data)),t(e)}}var _=N;const U=new _;var $=U;const D=e=>$.request({url:"/tkh_hr_employee",method:"post",params:e});var q=n(1910),H={name:"App",data(){return{loading:!1,pageSize:2e3,scrollTop:0}},computed:{...(0,q.aH)({hrEmployee:e=>e.hrEmployee})},created(){this.hrEmployee=[],this.saveEmployee([]),this.getEmployee(1)},methods:{async getEmployee(e){const t={pageNum:e,pageSize:this.pageSize,returnTotalNum:"true"},n=await D(t);this.totalNum=n.totalNum,this.saveEmployee(this.hrEmployee.concat(n.rows||[])),n.totalNum>e*this.pageSize&&this.getEmployee(e+1)},...(0,q.PY)(["saveEmployee"])},watch:{$route(e,t,n){const o=window.pageYOffset||document.documentElement.scrollTop;this.scrollTop=!1,this.$nextTick((()=>{const e=document.getElementsByClassName("header")?.[0];o>=e.offsetHeight-60&&(this.scrollTop=!0)}))},scrollTop(e){if(!e)return;const t=document.getElementsByClassName("header")?.[0];window.scrollTo(0,t.offsetHeight-48)}}},R=H,F=n(845),z=(0,F.A)(R,r,a,!1,null,null,null),M=z.exports,X=n(2544),W=n(5225),V={hrEmployee:[]},Y={},G={saveEmployee(e,t){e.hrEmployee=t,e.employeeInit=!0}},Z={},J=n(5462);let Q={set(e,t){window.localStorage.setItem(e,t)},get(e){return window.localStorage.getItem(e)},remove(e){window.localStorage.removeItem(e)},clear(){window.localStorage.clear()}},ee={set(e,t){J.A.set(e,t)},get(e){return J.A.get(e)},remove(e){J.A.remove(e)},clear(){var e=document.cookie.match(/[^ =;]+(?==)/g);if(e)for(var t=e.length;t--;)document.cookie=e[t]+"=0;expires="+new Date(0).toUTCString()+";max-age=0"}},te=window.localStorage?Q:ee;var ne={namespaced:!0,modules:{},state:{token:""},getters:{token:e=>e.token},mutations:{setToken(e,t){te.set("token",t),e.token=t},clearToken(e){te.remove("token"),e.token=""}},actions:{}},oe={namespaced:!0,modules:{},state:{isCollapse:!1,router:[]},getters:{isCollapse:e=>e.isCollapse,routes:e=>e.router.filter((e=>!e.hidden))},mutations:{toggleCollapse(e,t){let n="undefined"===typeof t?!e.isCollapse:t;e.isCollapse=n},setRouter(e,t){e.router=t}},actions:{toggleCollapse({commit:e},t){e("toggleCollapse",t)}}};o.Ay.use(q.Ay);var re=new q.Ay.Store({modules:{account:ne,layout:oe},state:V,getters:Y,mutations:G,actions:Z});n(7054),n(2241);o.Ay.use(X.Ay),o.Ay.config.productionTip=!1,o.Ay.prototype.$echarts=W,o.Ay.filter("formatNumber",(function(e){if(!e)return"0";const t=/\B(?=(\d{3})+(?!\d))/g;return e.toString().replace(t,",")})),new o.Ay({router:S,store:re,render:e=>e(M)}).$mount("#app")},477:function(){},2634:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".1719444152595.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".1719444152595.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tenant-portal:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var s=l[d];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==t+a){c=s;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[r];var m=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var c=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&n.type,c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=c,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=c,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return r();e(o,c,null,r,a)}))},r={524:0};n.f.miniCss=function(e,t){var n={90:1,230:1,247:1,286:1,520:1,545:1,649:1,696:1,770:1,815:1,849:1,891:1,992:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),c=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],u=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var d=u(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunktenant_portal"]=self["webpackChunktenant_portal"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(6448)}));o=n.O(o)})();