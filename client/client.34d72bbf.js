function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?d(e):h(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function w(t){return x(t," ")}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function A(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function L(t,e=document.body){return Array.from(e.querySelectorAll(t))}let R;function P(t){R=t}function C(){if(!R)throw new Error("Function called outside component initialization");return R}function N(){const t=C();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const q=[],j=[],k=[],U=[],O=Promise.resolve();let D=!1;function I(t){k.push(t)}let H=!1;const B=new Set;function M(){if(!H){H=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];P(e),T(e.$$)}for(q.length=0;j.length;)j.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];B.has(e)||(B.add(e),e())}k.length=0}while(q.length);for(;U.length;)U.pop()();D=!1,H=!1,B.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const V=new Set;let z;function J(){z={r:0,c:[],p:z}}function K(){z.r||o(z.c),z=z.p}function F(t,e){t&&t.i&&(V.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),z.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function W(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),I(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(I)}function tt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(q.push(t),D||(D=!0,O.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,s,a,c,i,l=[-1]){const u=R;P(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&et(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=b(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&F(e.$$.fragment),Z(e,n.target,n.anchor),M()}P(u)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ot=[];function st(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ot.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const at={},ct=()=>({});function it(e){let n,r,o,s,a,c,p,$,v,S,_,A,L,R,P,C,N,q,j;return{c(){n=h("div"),r=h("header"),o=d("svg"),s=d("path"),a=g(),c=h("h1"),p=m("Sapper Demo"),$=g(),v=h("nav"),S=h("ul"),_=h("li"),A=h("a"),L=m("Listings"),P=g(),C=h("li"),N=h("a"),q=m("About"),this.h()},l(t){n=E(t,"DIV",{class:!0});var e=b(n);r=E(e,"HEADER",{});var i=b(r);o=E(i,"svg",{width:!0,height:!0,xmlns:!0},1);var l=b(o);s=E(l,"path",{d:!0},1),b(s).forEach(f),l.forEach(f),a=w(i),c=E(i,"H1",{class:!0});var u=b(c);p=x(u,"Sapper Demo"),u.forEach(f),i.forEach(f),$=w(e),v=E(e,"NAV",{});var h=b(v);S=E(h,"UL",{class:!0});var d=b(S);_=E(d,"LI",{class:!0});var m=b(_);A=E(m,"A",{href:!0,class:!0});var g=b(A);L=x(g,"Listings"),g.forEach(f),m.forEach(f),P=w(d),C=E(d,"LI",{class:!0});var y=b(C);N=E(y,"A",{href:!0,class:!0});var R=b(N);q=x(R,"About"),R.forEach(f),y.forEach(f),d.forEach(f),h.forEach(f),e.forEach(f),this.h()},h(){y(s,"d","M49.493 10.155a1.26 1.26 0 00-1.53.005l-13.16 10.045L26.164.69c-.41-.92-1.916-.92-2.326 0L15.1 20.433 2.054 10.172a1.269 1.269 0 00-1.968 1.457L9.15 35.044a1.268 1.268 0 001.183.81h29.335a1.263 1.263 0 001.184-.81l9.062-23.415a1.268 1.268 0 00-.421-1.474zM38.798 33.314H11.204L4.126 15.032l10.69 8.404c.308.244.707.327 1.092.238a1.278 1.278 0 00.856-.721l8.238-18.61 8.129 18.363a1.275 1.275 0 001.936.497l10.859-8.291-7.128 18.402z"),y(o,"width","50"),y(o,"height","36"),y(o,"xmlns","http://www.w3.org/2000/svg"),y(c,"class","svelte-ximol3"),y(A,"href","/"),y(A,"class",R=i(void 0===e[0]?"current":"")+" svelte-ximol3"),y(_,"class","svelte-ximol3"),y(N,"href","about"),y(N,"class",j=i("about"===e[0]?"current":"")+" svelte-ximol3"),y(C,"class","svelte-ximol3"),y(S,"class","svelte-ximol3"),y(n,"class","svelte-ximol3")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(r,a),l(r,c),l(c,p),l(n,$),l(n,v),l(v,S),l(S,_),l(_,A),l(A,L),l(S,P),l(S,C),l(C,N),l(N,q)},p(t,[e]){1&e&&R!==(R=i(void 0===t[0]?"current":"")+" svelte-ximol3")&&y(A,"class",R),1&e&&j!==(j=i("about"===t[0]?"current":"")+" svelte-ximol3")&&y(N,"class",j)},i:t,o:t,d(t){t&&f(n)}}}function lt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ut extends rt{constructor(t){super(),nt(this,t,lt,it,a,{segment:0})}}function ft(t){let e,n,r;const o=new ut({props:{segment:t[0]}}),s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){Y(o.$$.fragment),e=g(),n=h("main"),a&&a.c(),this.h()},l(t){Q(o.$$.fragment,t),e=w(t),n=E(t,"MAIN",{class:!0});var r=b(n);a&&a.l(r),r.forEach(f),this.h()},h(){y(n,"class","svelte-1uhnsl8")},m(t,s){Z(o,t,s),u(t,e,s),u(t,n,s),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),a&&a.p&&2&e&&a.p(c(s,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(s,t[1],e,null))},i(t){r||(F(o.$$.fragment,t),F(a,t),r=!0)},o(t){G(o.$$.fragment,t),G(a,t),r=!1},d(t){tt(o,t),t&&f(e),t&&f(n),a&&a.d(t)}}}function pt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ht extends rt{constructor(t){super(),nt(this,t,pt,ft,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=E(t,"PRE",{});var o=b(e);n=x(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&f(e)}}}function mt(e){let n,r,o,s,a,c,i,p,d,v=e[1].message+"";document.title=n=e[0];let _=e[2]&&e[1].stack&&dt(e);return{c(){r=g(),o=h("h1"),s=m(e[0]),a=g(),c=h("p"),i=m(v),p=g(),_&&_.c(),d=$(),this.h()},l(t){L('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=w(t),o=E(t,"H1",{class:!0});var n=b(o);s=x(n,e[0]),n.forEach(f),a=w(t),c=E(t,"P",{class:!0});var l=b(c);i=x(l,v),l.forEach(f),p=w(t),_&&_.l(t),d=$(),this.h()},h(){y(o,"class","svelte-8od9u6"),y(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),_&&_.m(t,e),u(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&v!==(v=t[1].message+"")&&S(i,v),t[2]&&t[1].stack?_?_.p(t,e):(_=dt(t),_.c(),_.m(d.parentNode,d)):_&&(_.d(1),_=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(p),_&&_.d(t),t&&f(d)}}}function gt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class $t extends rt{constructor(t){super(),nt(this,t,gt,mt,a,{status:0,error:1})}}function vt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&Y(c.$$.fragment),n=$()},l(t){c&&Q(c.$$.fragment,t),n=$()},m(t,e){c&&Z(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?W(o,[X(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){J();const t=c;G(t.$$.fragment,1,0,()=>{tt(t,1)}),K()}s?(Y((c=new s(a())).$$.fragment),F(c.$$.fragment,1),Z(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&F(c.$$.fragment,t),r=!0)},o(t){c&&G(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&tt(c,t)}}}function yt(t){let e;const n=new $t({props:{error:t[0],status:t[1]}});return{c(){Y(n.$$.fragment)},l(t){Q(n.$$.fragment,t)},m(t,r){Z(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){G(n.$$.fragment,t),e=!1},d(t){tt(n,t)}}}function bt(t){let e,n,r,o;const s=[yt,vt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(J(),G(a[i],1,1,()=>{a[i]=null}),K(),n=a[e],n||(n=a[e]=s[e](t),n.c()),F(n,1),n.m(r.parentNode,r))},i(t){o||(F(n),o=!0)},o(t){G(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function Et(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new ht({props:o});return{c(){Y(s.$$.fragment)},l(t){Q(s.$$.fragment,t)},m(t,e){Z(s,t,e),n=!0},p(t,[e]){const n=12&e?W(r,[4&e&&{segment:t[2][0]},8&e&&X(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){G(s.$$.fragment,t),n=!1},d(t){tt(s,t)}}}function xt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=at,u=r,C().$$.context.set(l,u),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[o,s,a,c,i,r]}class wt extends rt{constructor(t){super(),nt(this,t,xt,Et,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const St=[],_t=[{js:()=>import("./index.a499562d.js"),css:["index.a499562d.css","client.34d72bbf.css"]},{js:()=>import("./about.165beccb.js"),css:["client.34d72bbf.css"]}],At=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]}];const Lt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,Pt,Ct,Nt=!1,qt=[],jt="{}";const kt={page:st({}),preloading:st(null),session:st(Lt&&Lt.session)};let Ut,Ot;kt.session.subscribe(async t=>{if(Ut=t,!Nt)return;Ot=!0;const e=zt(new URL(location.href)),n=Pt={},{redirect:r,props:o,branch:s}=await Gt(e);n===Pt&&await Ft(r,s,o,e.page)});let Dt,It=null;let Ht,Bt=1;const Mt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Tt={};function Vt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Lt.baseUrl))return null;let e=t.pathname.slice(Lt.baseUrl.length);if(""===e&&(e="/"),!St.some(t=>t.test(e)))for(let n=0;n<At.length;n+=1){const r=At[n],o=r.pattern.exec(e);if(o){const n=Vt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Jt(){return{x:pageXOffset,y:pageYOffset}}async function Kt(t,e,n,r){if(e)Ht=e;else{const t=Jt();Tt[Ht]=t,e=Ht=++Bt,Tt[Ht]=n?t:{x:0,y:0}}Ht=e,Rt&&kt.preloading.set(!0);const o=It&&It.href===t.href?It.promise:Gt(t);It=null;const s=Pt={},{redirect:a,props:c,branch:i}=await o;if(s===Pt&&(await Ft(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Tt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Tt[Ht]=t,t&&scrollTo(t.x,t.y)}}async function Ft(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=zt(new URL(t,document.baseURI));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Ht},"",t),Kt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(kt.page.set(r),kt.preloading.set(!1),Rt)Rt.$set(n);else{n.stores={page:{subscribe:kt.page.subscribe},preloading:{subscribe:kt.preloading.subscribe},session:kt.session},n.level0={props:await Ct};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Xt(t.nextSibling);Xt(t),Xt(e)}Rt=new wt({target:Dt,props:n,hydrate:!0})}qt=e,jt=JSON.stringify(r.query),Nt=!0,Ot=!1}async function Gt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Ct||(Ct=Lt.preloaded[0]||ct.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ut));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==jt)return!0;const o=qt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ot&&!u&&qt[c]&&qt[c].part===e.i)return qt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Wt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let m;return m=Nt||!Lt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ut):{}:Lt.preloaded[c+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Wt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Xt(t){t.parentNode.removeChild(t)}function Yt(t){const e=zt(new URL(t,document.baseURI));if(e)return It&&t===It.href||function(t,e){It={href:t,promise:e}}(t,Gt(e)),It.promise}let Qt;function Zt(t){clearTimeout(Qt),Qt=setTimeout(()=>{te(t)},20)}function te(t){const e=ne(t.target);e&&"prefetch"===e.rel&&Yt(e.href)}function ee(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ne(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=zt(o);if(s){Kt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Mt.pushState({id:Ht},"",o.href)}}function ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function re(t){if(Tt[Ht]=Jt(),t.state){const e=zt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Ht=t}(Bt),Mt.replaceState({id:Ht},"",location.href)}var oe;oe={target:document.querySelector("#sapper")},"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),function(t){Dt=t}(oe.target),addEventListener("click",ee),addEventListener("popstate",re),addEventListener("touchstart",te),addEventListener("mousemove",Zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Mt.replaceState({id:Bt},"",e);const n=new URL(location.href);if(Lt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Lt;Ct||(Ct=s&&s[0]),Ft(null,[],{error:c,status:a,session:o,level0:{props:Ct},level1:{props:{status:a,error:c},component:$t},segments:s},{host:e,path:n,query:Vt(r),params:{}})}();const r=zt(n);return r?Kt(r,Bt,!0,t):void 0});export{G as A,tt as B,J as C,K as D,p as E,L as F,rt as S,g as a,b,E as c,f as d,h as e,w as f,x as g,y as h,nt as i,u as j,l as k,S as l,d as m,t as n,I as o,_ as p,v as q,o as r,a as s,m as t,N as u,A as v,Y as w,Q as x,Z as y,F as z};
