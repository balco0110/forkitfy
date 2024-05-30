var e,t,r,n,i,a,o,s,c,u,l,d,p,f,h,g,v=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},_={},b=function(e){return e&&e.Math===Math&&e};_=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof v&&v)||b("object"==typeof _&&_)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},$={};$=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;E=$?S.bind(S):function(){return S.apply(S,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;n=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},M={},x={},T=Function.prototype,F=T.call,I=$&&T.bind.bind(F,F),A={},H=(x=$?I:function(e){return function(){return F.apply(e,arguments)}})({}.toString),q=x("".slice);A=function(e){return q(H(e),8,-1)};var N=Object,C=x("".split);M=k(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?C(e,""):N(e)}:N;var R={},W={};W=function(e){return null==e};var D=TypeError;R=function(e){if(W(e))throw new D("Can't call method on "+e);return e},P=function(e){return M(R(e))};var G={},U={},z={},B={},Y="object"==typeof document&&document.all;B=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},z=function(e){return"object"==typeof e?null!==e:B(e)};var J={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=_[e],B(r)?r:void 0):_[e]&&_[e][t]};var V={};V=x({}.isPrototypeOf);var K={},X={},Z={},ee={};ee="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var et=_.process,er=_.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(a=(i=ei.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(a=+i[1]),Z=a;var ea=_.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eo=Object;J=K?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return B(t)&&V(t.prototype,eo(e))};var es={},ec={},eu={},el=String;eu=function(e){try{return el(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(B(e))return e;throw new ed(eu(e)+" is not a function")},es=function(e,t){var r=e[t];return W(r)?void 0:ec(r)};var ep={},ef=TypeError;ep=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!z(n=E(r,e))||B(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!z(n=E(r,e)))return n;throw new ef("Can't convert object to primitive value")};var eh={},eg={},ev={};ev=!1;var ey={},em=Object.defineProperty;ey=function(e,t){try{em(_,e,{value:t,configurable:!0,writable:!0})}catch(r){_[e]=t}return t};var e_="__core-js_shared__",eb=eg=_[e_]||ey(e_,{});(eb.versions||(eb.versions=[])).push({version:"3.36.0",mode:ev?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eh=function(e,t){return eg[e]||(eg[e]=t||{})};var ew={},ek={},eE=Object;ek=function(e){return eE(R(e))};var e$=x({}.hasOwnProperty);ew=Object.hasOwn||function(e,t){return e$(ek(e),t)};var eS={},ej=0,eO=Math.random(),eL=x(1..toString);eS=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++ej+eO,36)};var eP=_.Symbol,eM=eh("wks"),ex=K?eP.for||eP:eP&&eP.withoutSetter||eS,eT=TypeError,eF=(ew(eM,e="toPrimitive")||(eM[e]=X&&ew(eP,e)?eP[e]:ex("Symbol."+e)),eM[e]);U=function(e,t){if(!z(e)||J(e))return e;var r,n=es(e,eF);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||J(r))return r;throw new eT("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},G=function(e){var t=U(e,"string");return J(t)?t:t+""};var eI={},eA={},eH=_.document,eq=z(eH)&&z(eH.createElement);eA=function(e){return eq?eH.createElement(e):{}},eI=!w&&!k(function(){return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;r=w?eN:function(e,t){if(e=P(e),t=G(t),eI)try{return eN(e,t)}catch(e){}if(ew(e,t))return L(!E(n,e,t),e[t])};var eC={},eR={};eR=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eD=String,eG=TypeError;eW=function(e){if(z(e))return e;throw new eG(eD(e)+" is not an object")};var eU=TypeError,ez=Object.defineProperty,eB=Object.getOwnPropertyDescriptor,eY="enumerable",eJ="configurable",eQ="writable";o=w?eR?function(e,t,r){if(eW(e),t=G(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eQ in r&&!r[eQ]){var n=eB(e,t);n&&n[eQ]&&(e[t]=r.value,r={configurable:eJ in r?r[eJ]:n[eJ],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return ez(e,t,r)}:ez:function(e,t,r){if(eW(e),t=G(t),eW(r),eI)try{return ez(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eU("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=w?function(e,t,r){return o(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eV={},eK={},eX=Function.prototype,eZ=w&&Object.getOwnPropertyDescriptor,e0=ew(eX,"name")&&(!w||w&&eZ(eX,"name").configurable),e1={},e9=x(Function.toString);B(eg.inspectSource)||(eg.inspectSource=function(e){return e9(e)}),e1=eg.inspectSource;var e2={},e4={},e5=_.WeakMap;e4=B(e5)&&/native code/.test(String(e5));var e3={},e7=eh("keys");e3=function(e){return e7[e]||(e7[e]=eS(e))};var e8={};e8={};var e6="Object already initialized",te=_.TypeError,tt=_.WeakMap;if(e4||eg.state){var tr=eg.state||(eg.state=new tt);tr.get=tr.get,tr.has=tr.has,tr.set=tr.set,s=function(e,t){if(tr.has(e))throw new te(e6);return t.facade=e,tr.set(e,t),t},c=function(e){return tr.get(e)||{}},u=function(e){return tr.has(e)}}else{var tn=e3("state");e8[tn]=!0,s=function(e,t){if(ew(e,tn))throw new te(e6);return t.facade=e,eC(e,tn,t),t},c=function(e){return ew(e,tn)?e[tn]:{}},u=function(e){return ew(e,tn)}}var ti=(e2={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new te("Incompatible receiver, "+e+" required");return r}}}).enforce,ta=e2.get,to=String,ts=Object.defineProperty,tc=x("".slice),tu=x("".replace),tl=x([].join),td=w&&!k(function(){return 8!==ts(function(){},"length",{value:8}).length}),tp=String(String).split("String"),tf=eK=function(e,t,r){"Symbol("===tc(to(t),0,7)&&(t="["+tu(to(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ew(e,"name")||e0&&e.name!==t)&&(w?ts(e,"name",{value:t,configurable:!0}):e.name=t),td&&r&&ew(r,"arity")&&e.length!==r.arity&&ts(e,"length",{value:r.arity});try{r&&ew(r,"constructor")&&r.constructor?w&&ts(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ti(e);return ew(n,"source")||(n.source=tl(tp,"string"==typeof t?t:"")),e};Function.prototype.toString=tf(function(){return B(this)&&ta(this).source||e1(this)},"toString"),eV=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(B(r)&&eK(r,a,n),n.global)i?e[t]=r:ey(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var th={},tg={},tv={},ty={},tm={},t_={},tb=Math.ceil,tw=Math.floor;t_=Math.trunc||function(e){var t=+e;return(t>0?tw:tb)(t)},tm=function(e){var t=+e;return t!=t||0===t?0:t_(t)};var tk=Math.max,tE=Math.min;ty=function(e,t){var r=tm(e);return r<0?tk(r+t,0):tE(r,t)};var t$={},tS={},tj=Math.min;tS=function(e){var t=tm(e);return t>0?tj(t,9007199254740991):0},t$=function(e){return tS(e.length)};var tO=function(e){return function(t,r,n){var i,a=P(t),o=t$(a);if(0===o)return!e&&-1;var s=ty(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tL={includes:tO(!0),indexOf:tO(!1)}.indexOf,tP=x([].push);tv=function(e,t){var r,n=P(e),i=0,a=[];for(r in n)!ew(e8,r)&&ew(n,r)&&tP(a,r);for(;t.length>i;)ew(n,r=t[i++])&&(~tL(a,r)||tP(a,r));return a};var tM=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tv(e,tM)},d=Object.getOwnPropertySymbols;var tx=x([].concat);tg=Q("Reflect","ownKeys")||function(e){var t=l(eW(e));return d?tx(t,d(e)):t},th=function(e,t,n){for(var i=tg(t),a=0;a<i.length;a++){var s=i[a];ew(e,s)||n&&ew(n,s)||o(e,s,r(t,s))}};var tT={},tF=/#|\.prototype\./,tI=function(e,t){var r=tH[tA(e)];return r===tN||r!==tq&&(B(t)?k(t):!!t)},tA=tI.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tH=tI.data={},tq=tI.NATIVE="N",tN=tI.POLYFILL="P";tT=tI,m=function(e,t){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?_:l?_[c]||ey(c,{}):_[c]&&_[c].prototype)for(i in t){if(o=t[i],a=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tT(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;th(o,a)}(e.sham||a&&a.sham)&&eC(o,"sham",!0),eV(n,i,o,e)}};var tC={},tR={},tW=Function.prototype,tD=tW.apply,tG=tW.call;tR="object"==typeof Reflect&&Reflect.apply||($?tG.bind(tD):function(){return tG.apply(tD,arguments)});var tU={},tz={},tB=(tz=function(e){if("Function"===A(e))return x(e)})(tz.bind);tU=function(e,t){return ec(e),void 0===t?e:$?tB(e,t):function(){return e.apply(t,arguments)}};var tY={};tY=Q("document","documentElement");var tJ={};tJ=x([].slice);var tQ={},tV=TypeError;tQ=function(e,t){if(e<t)throw new tV("Not enough arguments");return e};var tK={};tK=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var tX={};tX="process"===A(_.process);var tZ=_.setImmediate,t0=_.clearImmediate,t1=_.process,t9=_.Dispatch,t2=_.Function,t4=_.MessageChannel,t5=_.String,t3=0,t7={},t8="onreadystatechange";k(function(){p=_.location});var t6=function(e){if(ew(t7,e)){var t=t7[e];delete t7[e],t()}},re=function(e){return function(){t6(e)}},rt=function(e){t6(e.data)},rr=function(e){_.postMessage(t5(e),p.protocol+"//"+p.host)};tZ&&t0||(tZ=function(e){tQ(arguments.length,1);var t=B(e)?e:t2(e),r=tJ(arguments,1);return t7[++t3]=function(){tR(t,void 0,r)},f(t3),t3},t0=function(e){delete t7[e]},tX?f=function(e){t1.nextTick(re(e))}:t9&&t9.now?f=function(e){t9.now(re(e))}:t4&&!tK?(g=(h=new t4).port2,h.port1.onmessage=rt,f=tU(g.postMessage,g)):_.addEventListener&&B(_.postMessage)&&!_.importScripts&&p&&"file:"!==p.protocol&&!k(rr)?(f=rr,_.addEventListener("message",rt,!1)):f=t8 in eA("script")?function(e){tY.appendChild(eA("script"))[t8]=function(){tY.removeChild(this),t6(e)}}:function(e){setTimeout(re(e),0)});var rn=(tC={set:tZ,clear:t0}).clear;m({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==rn},{clearImmediate:rn});var ri=tC.set,ra={},ro={};ro="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rs=_.Function,rc=/MSIE .\./.test(ee)||ro&&((t=_.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ra=function(e,t){var r=t?2:1;return rc?function(n,i){var a=tQ(arguments.length,1)>r,o=B(n)?n:rs(n),s=a?tJ(arguments,r):[],c=a?function(){tR(o,this,s)}:o;return t?e(c,i):e(c)}:e};var ru=_.setImmediate?ra(ri,!1):ri;m({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==ru},{setImmediate:ru});var rl=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(o=new O(a||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;var u=d(e,n,o);if("normal"===u.type){if(s=o.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=h,o.method="throw",o.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function y(){}function m(){}var _={};u(_,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(L([])));w&&w!==r&&n.call(w,o)&&(_=w);var k=m.prototype=v.prototype=Object.create(_);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E($.prototype),u($.prototype,s,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new $(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rl}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rl:Function("r","regeneratorRuntime = r")(rl)}const rd="https://forkify-api.herokuapp.com/api/v2/recipes/",rp="288745a4-7193-4005-9f09-925d2ea450f7",rf=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rh={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rg=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rv=async function(e){try{let t=await rf(`${rd}${e}?key=${rp}`);rh.recipe=rg(t),rh.bookmarks.some(t=>t.id===e)?rh.recipe.bookmarked=!0:rh.recipe.bookmarked=!1,console.log(rh.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},ry=async function(e){try{rh.search.query=e;let t=await rf(`${rd}?search=${e}&key=${rp}`);console.log(t),rh.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rh.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rm=function(e=rh.search.page){rh.search.page=e;let t=(e-1)*rh.search.resultsPerPage,r=e*rh.search.resultsPerPage;return rh.search.results.slice(t,r)},r_=function(e){rh.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rh.recipe.servings}),rh.recipe.servings=e},rb=function(){localStorage.setItem("bookmarks",JSON.stringify(rh.bookmarks))},rw=function(e){rh.bookmarks.push(e),e.id===rh.recipe.id&&(rh.recipe.bookmarked=!0),rb()},rk=function(e){let t=rh.bookmarks.findIndex(t=>t.id===e);rh.bookmarks.splice(t,1),e===rh.recipe.id&&(rh.recipe.bookmarked=!1),rb()};!function(){let e=localStorage.getItem("bookmarks");e&&(rh.bookmarks=JSON.parse(e))}();const rE=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rf(`${rd}?key=${rp}`,r);rh.recipe=rg(n),rw(rh.recipe)}catch(e){throw e}};var r$={};r$=new URL("icons.c14567a0.svg",import.meta.url).toString();class rS{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${y(r$)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${y(r$)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${y(r$)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rj={};function rO(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rj=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,rO(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=parseFloat(`0.${e}`),s=Math.pow(10,t.length);return rO(Math.round((o*s-o)*Math.pow(10,a)),(s-1)*Math.pow(10,a),n,i,!0)}(r,n,e,a,t)}};class rL extends rS{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(r$)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(r$)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${y(r$)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${y(r$)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${y(r$)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${y(r$)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${y(r$)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${y(r$)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?y(rj)(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `}}var rP=new rL;class rM{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rx=new rM,rT=new class extends rS{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${y(r$)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class rF extends rS{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rI=new rF;class rA extends rS{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${y(r$)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${y(r$)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${y(r$)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${y(r$)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var rH=new rA,rq=new class extends rS{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${y(r$)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `}};class rN extends rS{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rq.render(e,!1)).join("")}}var rC=new rN;class rR extends rS{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rW=new rR;const rD=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rP.renderSpinner(),rI.update(rm()),rC.update(rh.bookmarks),await rv(e),rP.render(rh.recipe)}catch(e){rP.renderError(),console.error(e)}},rG=async function(){try{rI.renderSpinner();let e=rx.getQuery();if(!e)return;await ry(e),rI.render(rm()),rH.render(rh.search)}catch(e){console.log(e)}},rU=async function(e){try{rW.renderSpinner(),await rE(e),console.log(rh.recipe),rP.render(rh.recipe),rW.renderMessage(),rC.render(rh.bookmarks),window.history.pushState(null,"",`#${rh.recipe.id}`),setTimeout(function(){rW.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),rW.renderError(e.message)}};rC.addHandlerRender(function(){rC.render(rh.bookmarks)}),rP.addHandlerRender(rD),rP.addHandlerUpdateServings(function(e){r_(e),rP.update(rh.recipe)}),rP.addHandlerAddBookmark(function(){rh.recipe.bookmarked?rk(rh.recipe.id):rw(rh.recipe),rP.update(rh.recipe),rC.render(rh.bookmarks)}),rx.addHandlerSearch(rG),rH.addHandlerClick(function(e){rI.render(rm(e)),rH.render(rh.search)}),rW.addHandlerUpload(rU);
//# sourceMappingURL=index.17e6092e.js.map
