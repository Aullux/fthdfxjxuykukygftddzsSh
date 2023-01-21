var eixGlobal;(()=>{"use strict";var e={6651:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(8694),a=function(){return r.Z}},8066:(e,t,n)=>{n.d(t,{Jf:()=>s});var r=n(5671),a=n(3144),o=n(8361),i="exglobalFloatLayer",c="ok-global-float-layer-box";function u(e,t){if((0,o.y)())return null;var n=document.createElement("div");return n.id=e,n.setAttribute("class",t),n}var s=new(function(){function e(){(0,r.Z)(this,e),this.isHideLayer=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!(0,o.y)()){var t=document.querySelector("#exglobalFloatLayer"),n="ok-global-float-layer-hide-all";if(!t)return;var r=t.classList.contains(n);e?!r&&t.classList.add(n):r&&t.classList.remove(n)}},this.count=0,this.hasInsertContainer=!1,(0,o.y)()||(this.container=document.getElementById(i)||u(i,"ok-global-float-layer"),document.getElementById(i)?this.hasInsertContainer=!0:document.body&&(document.body.appendChild(this.container),this.hasInsertContainer=!0))}return(0,a.Z)(e,[{key:"setContainer",value:function(){var e=document.getElementById(i);!this.hasInsertContainer&&e?(this.container=e,this.hasInsertContainer=!0):this.hasInsertContainer||e||(this.container=u(i,"ok-global-float-layer"),document.body.appendChild(this.container),this.hasInsertContainer=!0)}},{key:"createFirstBox",value:function(e){if(!(0,o.y)()){var t;this.setContainer();var n=null===(t=document.getElementById(i))||void 0===t?void 0:t.getElementsByClassName(c)[0];if(n){var r="".concat(i,"Box").concat(this.count);this.count++;var a=u(r,c);this.container.insertBefore(a,n),e({dom:a,id:r})}else this.createLastBox(e)}}},{key:"createLastBox",value:function(e){if(!(0,o.y)()){this.setContainer();var t="".concat(i,"Box").concat(this.count);this.count++;var n=u(t,c);this.container.appendChild(n),e({dom:n,id:t})}}}]),e}())},2199:(e,t,n)=>{n.d(t,{eixGlobal:()=>xe}),n(6920);var r=n(8361),a=n(1232),o=(n(4125),n(2972),n(6953),n(4329),n(4557),n(9512));var i=n(8066),c={showAppDownloadFloat:function(e){return(0,r.y)()?null:Promise.all([n.e(736),n.e(254)]).then(n.bind(n,5254)).then((function(t){(0,t.default)(e)}))},setNav:function(e){if(!(0,r.y)()){var t=e.nav,n=e.transparent,a=e.hideFooter,i=document.querySelector("#headerContainer"),c=document.querySelector("#footerContainer");void 0!==t&&document.body.setAttribute("data-nav",e.nav),void 0!==n&&(i&&i.setAttribute("data-transparent",String(!!n)),window.addEventListener("scroll",(0,o.Z)((function(){var e,t,n=document.body;if("fixed"!==(null==n||null===(e=n.style)||void 0===e?void 0:e.position)||"100%"!==(null==n||null===(t=n.style)||void 0===t?void 0:t.width)){var r=0;document.documentElement&&document.documentElement.scrollTop?r=document.documentElement.scrollTop:document.body&&(r=document.body.scrollTop),i&&i.setAttribute("data-scroll",String(r>48))}}),50))),void 0!==a&&c&&c.setAttribute("data-hide",a)}},setLanguageList:function(){return null},floatLayer:{createFirstBox:function(e){return(0,r.y)()?null:i.Jf.createFirstBox(e)},createLastBox:function(e){return(0,r.y)()?null:i.Jf.createLastBox(e)},isHideLayer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,r.y)()?null:i.Jf.isHideLayer(e)}},hideBanner:function(e){return(0,r.y)()?null:i.Jf.isHideLayer(e)},showUpgradeBrowserDialog:function(){},setResponsive:function(){}};const u=c;var s=n(4165),l=n(1413),d=n(5861),g=(n(3727),n(7120),n(4834)),h=(n(4886),(!(0,r.y)()&&window.utils||{}).ont);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e||{},n=t.data;return n&&0===Number(n.code)?Promise.resolve(n):Promise.reject(n||{})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e||{},n=t.status,r=void 0===n?"":n,a=t.message,o=e.response||{},i=o.data,c=void 0===i?{}:i,u={status:r,code:r,msg:c.msg||"",message:a};return Promise.reject(u)}var w=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(h,n).then(f,v)}},p=(0,l.Z)((0,l.Z)({},h),{},{post:w(h&&h.post),delete:w(h&&h.delete)});(0,r.y)()||(p&&p.get&&(p.get=function(e,t){return h.get(e,{params:t}).catch(v).then(f)}),p.getAsync=function(){var e=(0,d.Z)((0,s.Z)().mark((function e(t,n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get(t,n);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),p.getWithCache=function(e,t){return h.getWithCache(e,t).catch(v).then(f)});const y=(0,r.y)()?{}:p,m="/v3/users/support/common/check-country-limit",b="/v3/users/common/globalConfig/community/getAll",C="/v3/users/security/profile",Z="/v3/users/support/refresh",k="/v3/users/local-config/get-charge-unit",S="/v3/users/local-config/renewal-charge-unit",L="/v3/users/broker/open/lang",_="/v3/users/common/list/currencies",I="/v2/support/home/web-config/info",x="/v3/users/local-config/settings";var P=function(){var e=(0,d.Z)((0,s.Z)().mark((function e(t,n){var r,a,o,i,c,u,d,h,f,v,w,p,m,b,Z,k,S;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.token,a=n._tk,o=n.pastDue,(i=n.account||localStorage.getItem("loginName"))&&localStorage.setItem("loginName",i),e.prev=3,window.utils.ont.saveLoginState({token:r,expireTime:o}),e.next=7,y.getAsync(C);case 7:0===(c=e.sent).code&&(u=c.data,d=u.realEmail,h=u.phone,f=u.nickName,v=u.currentIsSub,w=u.brokerAdmin,p=u.email,m=u.vipLevel,b=v?f:d||h,Z=i||b,k=f,v||(k=Z.includes("@")?p:h),S=(0,l.Z)((0,l.Z)({},u),{},{nickName:k,loginName:Z}),g.Z.g.set("profile",S),localStorage.setItem("currentIsSub",v?"1":"0"),localStorage.setItem("isBrokerAdmin",w?"1":"0"),localStorage.setItem("vipLevel",m||0),Z&&localStorage.setItem("nickName",k),Z&&localStorage.setItem("loginName",Z),localStorage.setItem("_tk",a),t(S)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),localStorage.setItem("_tk",a);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,n){return e.apply(this,arguments)}}();n(5836),n(965);var E=function(e){var t=a.Z.langPath;return"".concat(t).concat(e)},U=function(e){var t=e.forwardUrl,n=e.url,r=e.query;if(t){var a=document.querySelectorAll(r),o="".concat(n).concat(t);a.forEach((function(e){e.setAttribute("href",o)}))}};var T=n(5564),A=n.n(T);function N(e){return e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.text,n=e.size,r=void 0===n?100:n;if(!t)return"";var a=A()(t),o=document.createElement("canvas"),i=o.getContext("2d"),c=a.modules,u=r/c.length,s=r/c.length,l=(window&&window.devicePixelRatio||1)/N(i);return o.height=r*l,o.width=r*l,i.scale(l,l),c.forEach((function(e,t){e.forEach((function(e,n){i&&(i.fillStyle=e?"#000":"#fff");var r=Math.ceil((n+1)*u)-Math.floor(n*u),a=Math.ceil((t+1)*s)-Math.floor(t*s);i&&i.fillRect(Math.round(n*u),Math.round(t*s),r,a)}))})),o.toDataURL()}var j=function(e,t){e&&R&&e(R(t))},B=function(e,t){j(e,t)};n(8924),n(6603),n(8466),n(7052);var D="",z="5.2.0",O=["zh_CN","zh_HK","zh_TW"],M="customer/service",q={err_code:"error_404"},F=function(){};function W(e,t){if(e===t)return!0;for(var n=e.toString().split("."),r=t.toString().split("."),a=Math.min(n.length,r.length),o=0,i=0,c=!1;o<a;){if(0!=(i=parseInt(n[o],10)-parseInt(r[o],10))){if(i>0){c=!0;break}c=!1;break}o++}return c}function H(){return a.Z.isApp}var G={config:{preload:!1,targetSelector:"",dom:null},qyLoaded:!1,qyList:["zh_cn"],zeList:["en_us"],zEInit:function(e,t,n){var r=document.querySelector(e)||t;D=r.innerText?r.innerText:"",G.switchCSLoading(n,!0)},init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F,r=e.targetSelector,o=e.dom,i=void 0===o?{}:o,c=e.unusualDevice,u=void 0!==c&&c,s=a.Z.locale;if(O.includes(s)){if(H()||(window.customerZd?window.zdChatToggle?(window.zdChatToggle(u),t()):n(q):(G.insertQiYu(e),t())),H()){var l=window&&window.jsbridge,d=l.navigation;d.nav({location:M}).catch((function(e){})),t()}}else{if(H()){var g=window&&window.jsbridge&&window.jsbridge.getAppVersion()||"";if(W(g,z)){var h=window&&window.jsbridge,f=h.navigation;f.nav({location:M}).catch((function(e){}))}else!window.zE&&this.zEInit(r,i,e);t()}H()||(window.adaEmbed&&window.adaEmbed.toggle?(window.adaEmbed.toggle(),t()):n(q))}},insertQiYu:function(){var e,t,n,r;G.qyLoaded?window.ysf&&window.ysf("open"):(e=window,t=document,e[n="ysf"]=e[n]||function(){(e[n].a=e[n].a||[]).push(arguments)},(r=t.createElement("script")).async=!0,r.src="https://qiyukf.com/script/88224cc190c988590e6593955fe49120.js",r.addEventListener("load",(function(){window.ysf("onready",(function(){window.ysf("open"),G.qyLoaded=!0}))})),t.body.appendChild(r))},switchCSLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.config,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.targetSelector,r=e.dom,a=document.querySelector(n)||r;t?a&&(a.innerHTML="...",a.classList.add("click-disable")):a&&(a.innerHTML=D,a.classList.remove("click-disable"))}};n(3409);var K=n(2838),V=n.n(K),J=n(2324),Q=n.n(J);var $=n(3465),Y=864e5,X=0,ee=function e(){return new Promise((function(t,n){(window&&window.raphael()).initToken((function(r,a){if(a)n(a);else{var o=Date.now()+Y;!function(e,t,n){var r=t.toLocaleLowerCase();r.includes("script")||r.includes("javascript")||Q().set("dv_token",t,n)}(0,r,{expires:new Date(o)}),t(r),setTimeout((function(){e()}),Y)}}))}))},te=function e(t,n){var r=function(r){X<3?(X++,e(t,n)):n(r)},o="".concat(a.Z.cdnBaseUrl,"/cdn/assets/okfe/libs/dv/zhengdao-v4.0.11.min.js");(0,$.f)({url:o}).then((function(){try{var e=window&&window.raphael(),n=e.setAccessKey("com.okinc.okex-PtLwJihCtkoDPgWQR"),a=e.setEnv("https://picasso.eix-dv.net");"success"===n&&"success"===a?ee().then((function(e){X=0,t(e)})).catch(r):r({flagKey:n,flagEnv:a})}catch(e){r(e)}})).catch(r)};const ne={loadDV:function(){return!(0,r.y)()&&new Promise((function(e,t){!function(e,t){var n="".concat(a.Z.cdnBaseUrl,"/cdn/assets/okfe/libs/dv/zhengdao-v4.0.11.min.js");(0,$.f)({url:n}).then(e).catch(t)}(e,t)}))},postManualEvent:function(e,t){return!(0,r.y)()&&new Promise((function(n,r){!function(e,t,n,r){var o="".concat(a.Z.cdnBaseUrl,"/cdn/assets/okfe/libs/dv/zhengdao-v4.0.11.min.js");(0,$.f)({url:o}).then((function(){var a=(window&&window.raphael()).setZdEnv("https://zd.eix-dv.net");"success"===a?(window&&window.dvZhengdao.postManualEvent(n,r),e(window&&window.dvZhengdao)):t({flagZdEnv:a})})).catch(t)}(n,r,e,t)}))},setToken:function(){return!(0,r.y)()&&new Promise((function(e,t){te(e,t)}))}},re={then:function(e){!(0,r.y)()&&y.get(m).then((function(t){var n=t.data,r=n.cefi,a=void 0===r?{}:r,o=n.web3,i=void 0===o?{}:o,c=n.register,u=void 0===c?{}:c,s=a.limit,d=void 0!==s&&s,g=a.kycLevel;if(d||u.limit){var h=!(!window.utils.ont||!window.utils.ont.isLogin())&&g<2,f=d&&i.limit;e((0,l.Z)((0,l.Z)({},a),{},{kycRequired:h,allLimit:f,registerLimit:u.limit}))}})).catch((function(){e({country:"",displayCountryName:"",kycLevel:0,limit:!1,politStatus:0,province:"",provinceCode:"",kycRequired:!1,allLimit:!1,registerLimit:!1})}))}};var ae=n(6651),oe=n(885),ie=(n(8218),n(2790),n(2596),{zh_CN:{langPath:"cn",icon:"",language:"zh_CN",text:"简体中文"},en_US:{langPath:"en",icon:"",language:"en_US",text:"English"},zh_HK:{langPath:"hk",icon:"",language:"zh_HK",text:"繁體中文"},zh_TW:{langPath:"tw",icon:"",language:"zh_TW",text:"繁體中文"},fr_FR:{langPath:"fr",icon:"",language:"fr_FR",text:"Français"},ru_RU:{langPath:"ru",icon:"",language:"ru_RU",text:"Русский"},th_TH:{langPath:"th",icon:"",language:"th_TH",text:"ไทย"},vi_VN:{langPath:"vi",icon:"",language:"vi_VN",text:"Tiếng Việt"},in_ID:{langPath:"id",icon:"",language:"in_ID",text:"Bahasa Indonesia"},tr_TR:{langPath:"tr",icon:"",language:"tr_TR",text:"Türkçe"},ko_KR:{langPath:"ko",icon:"",language:"ko_KR",text:"한국어"},de_DE:{langPath:"de",icon:"",language:"de_DE",text:"Deutsch"},it_IT:{langPath:"it",icon:"",language:"it_IT",text:"Italiano"},pl_PL:{langPath:"pl",icon:"",language:"pl_PL",text:"Polski"},en_IN:{langPath:"en-IN",icon:"",language:"en_IN",text:"English (India)"},pt_BR:{langPath:"pt-br",icon:"",language:"pt_BR",text:"Português (Brasil)"},pt_PT:{langPath:"pt-pt",icon:"",language:"pt_PT",text:"Português (Portugal)"},es_ES:{langPath:"es-es",icon:"",language:"es_ES",text:"Español (España)"},es_419:{langPath:"es-la",icon:"",language:"es_419",text:"Español (Latinoamérica)"},cs_CZ:{langPath:"cs",icon:"",language:"cs_CZ",text:"Čeština"},ro_RO:{langPath:"ro",icon:"",language:"ro_RO",text:"Română"},uk_UA:{langPath:"uk-ua",icon:"",language:"uk_UA",text:"Українська"}}),ce=[{language:"zh_CN",href:"/learn"},{language:"en_US",href:"/learn"},{language:"th_TH",href:"/th/learn"},{language:"tr_TR",href:"/tr/learn"},{language:"in_ID",href:"/id/learn"},{language:"es_ES",href:"/es-es/learn"},{language:"ru_RU",href:"/ru/learn"},{language:"vi_VN",href:"/vi/learn"},{language:"pt_BR",href:"/pt-br/learn"}],ue=function(e){return function(e,t){var n=a.Z.localeMap,r={},o={};"object"==typeof e?e.forEach((function(e){var t=e.language,n=e.href;r[t.toLowerCase()]={href:n}})):Object.entries(n).forEach((function(e){var t=(0,oe.Z)(e,2),n=t[0],a=t[1];r[n]={langPath:a}})),o=Object.keys(r);var i={};return 0===o.length?t:(Object.entries(t).forEach((function(e){var t=(0,oe.Z)(e,2),n=t[0],a=t[1],c=n.toLowerCase(),u=r[c]||{};o.includes(c)&&(i[n]=(0,l.Z)((0,l.Z)({},a),u))})),i)}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=a.Z.langPath;return e.toLowerCase().startsWith("".concat(t,"/learn"))}(e)&&ce,ie)},se=n(5671),le=n(3144),de={currencyId:0,displayName:"USD",isDefault:1,isoCode:"USD",precision:2,symbol:"$",usdToThisRate:1},ge=function(){function e(){(0,se.Z)(this,e),this.getting=!1,this.got=!1,this.data={nowCurrencyUnit:de,allCurrencyUnit:[(0,l.Z)({},de)]},this.cbList=[]}return(0,le.Z)(e,[{key:"executeCbList",value:function(){var e=this;this.cbList.forEach((function(t){t&&t(e.data)}))}},{key:"getCurrency",value:function(){var e=this,t=g.Z.g.get("nowCurrencyUnit")||{},n=g.Z.g.get("allCurrencyUnit")||[(0,l.Z)({},de)];if(Object.keys(t).length&&(this.data=(0,l.Z)((0,l.Z)({},this.data),{},{nowCurrencyUnit:t,allCurrencyUnit:n})),this.got)this.executeCbList();else if(!this.getting){this.getting=!0;var r=a.Z.locale,o="?locale=".concat(void 0===r?"en_US":r);y.getWithCache(_+o,{cacheSeconds:60}).then((function(t){var n=t.data,r=void 0===n?[]:n;e.data=(0,l.Z)((0,l.Z)({},e.data),{},{allCurrencyUnit:r}),g.Z.g.set("allCurrencyUnit",r),e.got=!0,e.getting=!1,e.getNowCurrency()})).catch((function(){g.Z.g.set("allCurrencyUnit",e.data.allCurrencyUnit),e.getNowCurrency(),e.getting=!1}))}}},{key:"postRenewalCharge",value:function(e){var t={currencyId:e.currencyId};return y.post(S,t).then((function(){sessionStorage.removeItem("willReportCurrencyId")}))}},{key:"getNowCurrency",value:function(){var e=this,t=localStorage.getItem("token"),n=this.data.allCurrencyUnit,r=de;if(t){var a=sessionStorage.getItem("willReportCurrencyId");a?(a=Number(a),n.forEach((function(e){var t=e.currencyId;a===(void 0===t?0:t)&&(r=e)})),g.Z.g.set("nowCurrencyUnit",r),this.postRenewalCharge(r),this.data=(0,l.Z)((0,l.Z)({},this.data),{},{nowCurrencyUnit:r}),this.executeCbList()):y.get(k).then((function(t){var a=t.data,o=(void 0===a?{}:a).currencyId||0;g.Z.g.set("legalCurrencyId",o),n.forEach((function(e){var t=e.currencyId;o===(void 0===t?0:t)&&(r=e)})),g.Z.g.set("nowCurrencyUnit",r),e.data=(0,l.Z)((0,l.Z)({},e.data),{},{nowCurrencyUnit:r}),e.executeCbList()})).catch((function(){g.Z.g.set("nowCurrencyUnit",r),e.data=(0,l.Z)((0,l.Z)({},e.data),{},{nowCurrencyUnit:r}),e.executeCbList()}))}else{var o=g.Z.g.get("nowCurrencyUnit")||{},i=Object.keys(o).length>0;n.forEach((function(e){var t=e.isoCode,n=void 0===t?"USD":t,a=e.currencyId,c=void 0===a?0:a;i?o.currencyId===c&&(r=e):"USD"===n.toUpperCase()&&(r=e)})),g.Z.g.set("legalCurrencyId",r.currencyId),g.Z.g.set("nowCurrencyUnit",r),this.data=(0,l.Z)((0,l.Z)({},this.data),{},{nowCurrencyUnit:r}),this.executeCbList()}}},{key:"then",value:function(e){this.cbList.push(e),this.getCurrency()}}]),e}(),he=(n(472),n(5413),n(2706)),fe=function(){function e(){(0,se.Z)(this,e),this.allCurrencyUnit=[],this.nowLang={},this.nowCurrency={},this.languageMap={}}return(0,le.Z)(e,[{key:"getLanguage",value:function(e){var t=a.Z.locale;this.languageMap=e,this.nowLang=this.languageMap[t]||{}}},{key:"setLanguage",value:function(e){var t=a.Z.locale;if(e!==(void 0===t?"en_US":t)){var n=this.languageMap[e]||{};this.nowLang=n,sessionStorage.setItem("reportedLanguage","1"),Q().set("locale",n.language,{path:"/",expires:18250});var r=a.Z.langPath,o=""===r,i=this.isSpecialLang(n.language),c=window&&window.location,u=c.hash,s=c.pathname.toLowerCase().startsWith("".concat(r,"/learn"));if(o&&i&&u&&!s)window.location.reload();else{var l=this.getNewUrl(e);window&&window.location.replace(l)}}}},{key:"getNewUrl",value:function(e){var t=a.Z.langPath,n=this.languageMap[e]||{},r=window&&window.location,o=r.pathname,i=r.search,c=r.hash,u="".concat(o).concat(i).concat(c),s=n.langPath?"/".concat(n.langPath):"/";if(n.href)return V()(n.href);if("/"===o||o===t)return V()("".concat(s).concat(i).concat(c));var l="";return l=t.length?u.replace(t,s):"".concat(s).concat(u),V()(l.replace("//","/"))}},{key:"isSpecialLang",value:function(e){return!(this.languageMap[e]||{}).langPath}},{key:"postRenewalCharge",value:function(e){var t=window&&window.utils.ont,n={currencyId:e.currencyId};return t.post(S,n)}},{key:"setCurrency",value:function(e,t){return this.getNowCurrency(e,t)}},{key:"getNowCurrency",value:function(e,t){var n=window&&window.utils.ont.isLogin(),r=g.Z.g.get("nowCurrencyUnit")||{},a=g.Z.g.get("allCurrencyUnit")||[];0===this.allCurrencyUnit.length&&(this.allCurrencyUnit=a);var o=r;return this.allCurrencyUnit.forEach((function(t){e===t.currencyId&&(o=t)})),n?t?sessionStorage.setItem("willReportCurrencyId",e):(g.Z.g.set("nowCurrencyUnit",o),this.postRenewalCharge(o)):g.Z.g.set("nowCurrencyUnit",o),t&&window.location.reload(),this.nowCurrency=o,he.Z.trigger("global_updated_currency",o),o}}]),e}(),ve=n(8103);var we=function(e,t){var n=a.Z.localeMap,r=void 0===n?{}:n,o={},i={};"object"==typeof e?e.forEach((function(e){var t=e.language,n=e.href;o[t.toLowerCase()]={href:n}})):Object.entries(r).forEach((function(e){var t=(0,oe.Z)(e,2),n=t[0],r=t[1];o[n]={langPath:r}})),i=Object.keys(o);var c={};return 0===i.length?t:(Object.entries(t).forEach((function(e){var t=(0,oe.Z)(e,2),n=t[0],r=t[1],a=n.toLowerCase(),u=o[a]||{};i.includes(a)&&(c[n]=(0,l.Z)((0,l.Z)({},r),u))})),c)},pe=function(){return y.getWithCache(L,{cacheSeconds:300})};const ye=function(){function e(){(0,se.Z)(this,e)}return(0,le.Z)(e,[{key:"init",value:function(){var e=a.Z.broker;if((void 0===e?{}:e).is){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof e)throw new Error("cb should be function");var n=t.delay,r=void 0===n?300:n,a=t.times||3;return new Promise((function(t,n){!function o(){e().then(t).catch((function(e){0===a?n(e):(a--,window&&window.setTimeout(o,r))}))}()}))}(pe,{times:3,delay:100}),n={};return t.then((function(e){return 0===e.code?(e.data.forEach((function(e){var t={language:e.lang,text:e.name,icon:e.icon};n[t.language]=t})),we("",n)):{}}))}var r=function(){var e=(window&&window.location).pathname,t=a.Z.langPath;return e.toLowerCase().startsWith("".concat(t,"/learn"))}();return we(r&&ce,ie)}}]),e}();var me=function(e){var t,n=g.Z.g.get("preference")||{},r=n.upDownColor,o=void 0===r?0:r,i=n.upDownTimeZone,c=(0,ve.mZ)(!!o),u=(a.Z||{}).locale,s=void 0===u?"en_US":u;void 0===i?(t="zh_CN"===s||"zh_HK"===s||"zh_TW"===s?2:1,g.Z.g.set("preference",(0,l.Z)((0,l.Z)({},n),{},{chgSetInfo:c,upDownTimeZone:t}))):t=i,e&&e((0,l.Z)((0,l.Z)({},n),{},{chgSetInfo:c,upDownTimeZone:t,upDownColor:o}))};var be=n(4942),Ce=g.Z.g.get("preference")||{};var Ze={langCurrency:new fe,getUnit:function(e){if(!(0,r.y)()){var t=new ge;if(!e)return new Promise((function(e){t.then(e)}));t.then(e)}return null},setUnit:function(e){var t=e.currencyId,n=e.refresh,a=void 0!==n&&n,o=e.callback;if(!(0,r.y)()){var i=Ze.langCurrency.setCurrency(t,a);if(!o)return new Promise((function(e){e(i)}));o&&o(i)}return null},getChgSet:function(e){return!(0,r.y)()&&function(e){var t=(g.Z.g.get("preference")||{}).upDownColor,n=void 0===t?0:t,r=(0,ve.mZ)(!!n);e&&e(r)}(e)},setChg:function(e){return!(0,r.y)()&&function(e){var t=g.Z.g.get("preference")||{};g.Z.g.set("chgSetIsRedUp",e),g.Z.g.set("preference",(0,l.Z)((0,l.Z)({},t),{},{upDownColor:e?1:0}))}(e)},getLanguageList:function(){var e=(0,d.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,r.y)()){e.next=9;break}return n=new ye,e.next=4,n.init();case 4:if(a=e.sent,Ze.langCurrency.getLanguage(a),t){e.next=8;break}return e.abrupt("return",new Promise((function(e){e(a)})));case 8:t&&t(a);case 9:return e.abrupt("return",{});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setLanguage:function(e){var t=e.nowLocale;Ze.langCurrency.setLanguage(t)},get:function(){return!(0,r.y)()&&new Promise((function(e){!function(e){var t=!(0,r.y)()&&window.utils.ont;if(t&&t.isLogin&&t.isLogin()){var n=g.Z.g.get("profile").uuid||"",a="".concat(x,"?uuid=").concat(n);y.getWithCache(a,{cacheSeconds:10}).then((function(t){var n=t.data,r=void 0===n?{}:n,a=!!r.upDownColor,o=(0,ve.mZ)(a);g.Z.g.set("chgSetIsRedUp",a),g.Z.g.set("preference",(0,l.Z)((0,l.Z)({},r),{},{chgSetInfo:o})),e&&e((0,l.Z)((0,l.Z)({},r),{},{chgSetInfo:o}))})).catch((function(){me(e)}))}else me(e)}(e)}))},set:function(e){return!(0,r.y)()&&new Promise((function(t){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).forEach((function(e){g.Z.g.set("preference",(0,l.Z)((0,l.Z)({},Ce),{},(0,be.Z)({},e,t[e])))})),e&&e()}(t,e)}))}},ke={then:function(e){Ze.getUnit(e)}},Se=new(function(){function e(){(0,se.Z)(this,e),this.getting={},this.got={},this.data={},this.cbList={}}return(0,le.Z)(e,[{key:"getMedia",value:function(e){var t=this,n=a.Z.locale,r=void 0===n?"en_US":n,o=e?"&type=".concat(e):"",i="".concat(b,"?locale=").concat(r).concat(o);this.getting[e]||this.got[e]||(this.getting[e]=!0,y.getWithCache(i,{cacheSeconds:300}).then((function(n){t.data[e]=n.data,t.got[e]=!0,t.getting[e]=!1,t.cbList[e].forEach((function(n){return n(t.data[e])}))})).catch((function(){t.data[e]={},t.getting[e]=!1,t.cbList[e].forEach((function(n){return n(t.data[e])}))})))}},{key:"then",value:function(e){var t=e.fn,n=e.type,r=void 0===n?0:n;this.got[r]?t&&t(this.data[r]):(this.getMedia(r),this.cbList[r]||(this.cbList[r]=[]),this.cbList[r].push(t))}}]),e}()),Le={then:function(e,t){!(0,r.y)()&&Se.then({fn:e,type:t})}},_e=function(){return window.utils.ont.isLogin()},Ie=function(e,t,n,r){var o="".concat(a.Z.langPath,"/trade");if(e?(localStorage.setItem("simulatedTrading","1"),Q().set("simulatedTrading","1",{expires:365})):(localStorage.removeItem("simulatedTrading"),Q().set("simulatedTrading","1",{expires:-1})),r&&localStorage.setItem("simulatedTradingNotice",e),!n){var i=window.location,c=t||i.href;e&&(c=t||o),c===i.href?i.reload():i.href=c}};const xe=(0,r.y)()?{getSeoLanguageList:ue}:{ui:u,DVInstance:ne,preference:Ze,getCheckIpInfo:re,allAssociation:Le,allCurrencyUnit:ke,getSeoLanguageList:ue,setCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Ze.setUnit({currencyId:e,refresh:t})},getTradeSystemStatus:function(){var e=a.Z.simulatedStatus;return new Promise((function(t){t&&t({canUnified:!0,canTrade:!1,canSimulate:"0"!==e,demoApi:2,realApi:2})}))},showNav:function(e){c.setNav({nav:e})},getHomeActivityInfo:function(){return(0,r.y)()?{}:new Promise((function(e){var t=a.Z.locale,n="".concat(I,"?locale=").concat(t);y.getWithCache(n,{cacheSeconds:300}).then((function(t){var n=t.data;e(n)})).catch((function(){e({})}))}))},showCS:function(e){if(!(0,r.y)()){var t=(e||{}).needFallback;if(void 0!==t&&t)return new Promise((function(t,n){G.init(e,t,n)}));G.init(e)}return null},getQrCode:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var i="object"==typeof e?e:(0,l.Z)({text:e,size:t},a);return!(0,r.y)()&&new Promise((function(e){B((function(t){e(t)}),i)}))},setForward:function(e){var t=e.loginForward,n=void 0===t?"":t,a=e.registerForward,o=void 0===a?"":a;(0,r.y)()||(function(e){var t=E("/account/login?forward=");U({forwardUrl:e,url:t,query:".header-container .user-login-btn"})}(n),function(e){var t=E("/account/register?action=header_register_btn&forward=");U({forwardUrl:e,url:t,query:".header-container .user-register-btn"})}(o))},saveUserInfo:function(e){return!(0,r.y)()&&new Promise((function(t){P(t,e)}))},linkToLangUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a.Z.langPath+e;(0,r.y)()||(t?window.open(n):window.location.href=n)},setSchemaScript:function(e,t){(0,r.y)()||function(e){var t=e.id,n=e.schemaStr,a=!(0,r.y)()&&document.body,o="".concat(t,"Schema"),i=!(0,r.y)()&&document.getElementById(o);if(i)i.innerText=n;else{var c=!(0,r.y)()&&document.createElement("script");c.type="application/ld+json",c.id=o,c.innerText=n,a.appendChild(c)}}({id:e,schemaStr:t})},getDownloadQrCode:function(e){return!(0,r.y)()&&new Promise((function(t){!function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=Q().get("first_ref"),i=/^http(s)?:\/\/(.*?)\//,c=(o=o?decodeURIComponent(o):"").match(i),u=c?c[2]:"",s=V()(window&&(null===(t=window.utils.monitor)||void 0===t||null===(n=t.getChannelId)||void 0===n?void 0:n.call(t))),l=/Electron/.test(navigator.userAgent),d="";l||(d=u&&s?"?first_ref=".concat(u,"&channelId=").concat(s):u?"?first_ref=".concat(u):s?"?channelId=".concat(s):"");var g="".concat(a.Z.mainDomain,"/download").concat(d);j(e,{text:g,size:r})}((function(e){t(e)}),e)}))},getSimulatedTrading:function(e){if(!(0,r.y)()){var t=(g.Z.g.get("profile")||{}).openSimulate;t=void 0===t?1:t,e({isSimulated:a.Z.simulatedTrading,isShow:!!_e()&&t})}},setSimulatedTrading:function(e,t){if(!(0,r.y)()){if(!_e())return void Ie(e,t,!1,!0);Ie(e,t,!0,!1);var n={onUpdateTokenDone:function(){Ie(e,t,!1,!0)},switchingDemoTrading:!0};y.post(Z,{},n).then().catch((function(){}))}},checkSubAccountPermission:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!(0,r.y)()){var t=g.Z.g.get("profile")||{},n=t.currentIsSub,a=t.subUserAuth,o={isAllowLogin:!0,isAllowDeposit:!n,isAllowWithdraw:!n,isAllowTransfer:!0,isAllowTrading:!0,isAllowCreateApi:!0,isAllowOAuth:!0,isAllowUseFinancial:!0,isAllowUseAsset:!0,isAllowInquireTrading:!0,isAllowInquireAsset:!0},i=a||o;if(0===e.length)return i;var c={};return e.forEach((function(e){c[e]=i[e]})),c}return null},getWatcher:ae.W};(0,r.y)()||(a.Z.isRenderByNode&&(window.exglobal=window.exglobal?window.exglobal:{}),Object.assign(window.exglobal,xe))}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){for(var[r,a,o]=e[l],c=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"common/"+e+".f19832f2.js",n.miniCssF=e=>"common/"+e+".1d57c26c.css",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="eix-nav:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){c=d;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+o),c.src=r),e[r]=[a];var g=(t,n)=>{c.onerror=c.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(n))),t)return t(n)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=g.bind(null,c.onerror),c.onload=g.bind(null,c.onload),u&&document.head.appendChild(c)}}})(),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=416,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"})(),(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,r)=>{var a=n.miniCssF(e),o=n.p+a;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var i;if((a=(i=o[r]).getAttribute("data-href"))===e||a===t)return i}})(a,o))return t();((e,t,n,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),a(u)}},o.href=t,document.head.appendChild(o)})(e,o,0,t,r)})),t={416:0};n.f.miniCss=(n,r)=>{t[n]?r.push(t[n]):0!==t[n]&&{254:1}[n]&&r.push(t[n]=e(n).then((()=>{t[n]=0}),(e=>{throw delete t[n],e})))}}})(),(()=>{var e={416:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),c=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,a[1](c)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,c,u]=r,s=0;if(i.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(u)var l=u(n)}for(t&&t(r);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self.webpackChunkeix_nav=self.webpackChunkeix_nav||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(2199)));r=n.O(r),eixGlobal=r.eixGlobal})();