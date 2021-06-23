import{S as t,i as e,s as l,e as a,a as s,t as n,c as o,b as c,d as r,f as i,g as h,h as f,j as d,k as u,l as p,n as m,m as v,o as g,p as $,r as E,q as w,u as x,v as L,w as _,x as A,y as C,z as b,A as q,B as S,C as F,D as I,E as O,F as j}from"./client.34d72bbf.js";function z(t){let e,l,a;return{c(){e=v("svg"),l=v("path"),a=v("path"),this.h()},l(t){e=o(t,"svg",{width:!0,height:!0,xmlns:!0},1);var s=c(e);l=o(s,"path",{d:!0,fill:!0},1),c(l).forEach(r),a=o(s,"path",{d:!0,fill:!0},1),c(a).forEach(r),s.forEach(r),this.h()},h(){f(l,"d","M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0z"),f(l,"fill","#F44336"),f(a,"d","M13.682 12.504a.833.833 0 11-1.178 1.178L10 11.178l-2.504 2.505a.83.83 0 01-1.179 0 .833.833 0 010-1.179L8.822 10 6.317 7.496a.833.833 0 111.179-1.179L10 8.822l2.504-2.505a.833.833 0 111.178 1.179L11.178 10l2.504 2.504z"),f(a,"fill","#FAFAFA"),f(e,"width","20"),f(e,"height","20"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(t,s){d(t,e,s),u(e,l),u(e,a)},d(t){t&&r(e)}}}function M(t){let e,l,a;return{c(){e=v("svg"),l=v("path"),a=v("path"),this.h()},l(t){e=o(t,"svg",{width:!0,height:!0,xmlns:!0},1);var s=c(e);l=o(s,"path",{d:!0,fill:!0},1),c(l).forEach(r),a=o(s,"path",{d:!0,fill:!0},1),c(a).forEach(r),s.forEach(r),this.h()},h(){f(l,"d","M10 19.993c5.523 0 10-4.474 10-9.993C20 4.48 15.523.007 10 .007S0 4.48 0 10c0 5.52 4.477 9.993 10 9.993z"),f(l,"fill","#32BEA6"),f(a,"d","M9.198 15.316L4.47 11.632l1.344-1.725 2.904 2.262 4.792-6.915L15.308 6.5l-6.11 8.816z"),f(a,"fill","#fff"),f(e,"width","20"),f(e,"height","20"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(t,s){d(t,e,s),u(e,l),u(e,a)},d(t){t&&r(e)}}}function N(t){let e,l,v,g,$,E,w=t[0].title+"";function x(t,e){return t[0].completed?M:z}let L=x(t),_=L(t);return{c(){e=a("li"),l=a("span"),_.c(),v=s(),g=a("span"),$=n(w),this.h()},l(t){e=o(t,"LI",{class:!0});var a=c(e);l=o(a,"SPAN",{class:!0});var s=c(l);_.l(s),s.forEach(r),v=i(a),g=o(a,"SPAN",{class:!0});var n=c(g);$=h(n,w),n.forEach(r),a.forEach(r),this.h()},h(){f(l,"class","status svelte-3q8tcb"),f(g,"class",E="title "+(t[0].completed?"completed":"")+" svelte-3q8tcb"),f(e,"class","svelte-3q8tcb")},m(t,a){d(t,e,a),u(e,l),_.m(l,null),u(e,v),u(e,g),u(g,$)},p(t,[e]){L!==(L=x(t))&&(_.d(1),_=L(t),_&&(_.c(),_.m(l,null))),1&e&&w!==(w=t[0].title+"")&&p($,w),1&e&&E!==(E="title "+(t[0].completed?"completed":"")+" svelte-3q8tcb")&&f(g,"class",E)},i:m,o:m,d(t){t&&r(e),_.d()}}}function P(t,e,l){let{data:a}=e;return t.$set=t=>{"data"in t&&l(0,a=t.data)},[a]}class T extends t{constructor(t){super(),e(this,t,P,N,l,{data:0})}}function y(t){let e,l,p,v,x,L,_,A,C,b,q,S;return{c(){e=a("div"),l=a("label"),p=n("Filter:"),v=s(),x=a("select"),L=a("option"),_=n("All"),A=a("option"),C=n("Incomplete"),b=a("option"),q=n("Complete"),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=c(e);l=o(a,"LABEL",{for:!0,class:!0});var s=c(l);p=h(s,"Filter:"),s.forEach(r),v=i(a),x=o(a,"SELECT",{id:!0,class:!0});var n=c(x);L=o(n,"OPTION",{value:!0});var f=c(L);_=h(f,"All"),f.forEach(r),A=o(n,"OPTION",{value:!0});var d=c(A);C=h(d,"Incomplete"),d.forEach(r),b=o(n,"OPTION",{value:!0});var u=c(b);q=h(u,"Complete"),u.forEach(r),n.forEach(r),a.forEach(r),this.h()},h(){f(l,"for","filter"),f(l,"class","svelte-nctxq8"),L.__value="all",L.value=L.__value,A.__value="incomplete",A.value=A.__value,b.__value="complete",b.value=b.__value,f(x,"id","filter"),f(x,"class","svelte-nctxq8"),void 0===t[0]&&g(()=>t[3].call(x)),f(e,"class","svelte-nctxq8")},m(a,s,n){d(a,e,s),u(e,l),u(l,p),u(e,v),u(e,x),u(x,L),u(L,_),u(x,A),u(A,C),u(x,b),u(b,q),$(x,t[0]),n&&E(S),S=[w(x,"change",t[3]),w(x,"change",t[1])]},p(t,[e]){1&e&&$(x,t[0])},i:m,o:m,d(t){t&&r(e),E(S)}}}function B(t,e,l){const a=x();let s="all";return[s,function(t){a("updatefilter",s)},a,function(){s=L(this),l(0,s)}]}class D extends t{constructor(t){super(),e(this,t,B,y,l,{})}}function k(t,e,l){const a=t.slice();return a[3]=e[l],a}function U(t){let e;const l=new T({props:{data:t[3]}});return{c(){_(l.$$.fragment)},l(t){A(l.$$.fragment,t)},m(t,a){C(l,t,a),e=!0},p(t,e){const a={};1&e&&(a.data=t[3]),l.$set(a)},i(t){e||(b(l.$$.fragment,t),e=!0)},o(t){q(l.$$.fragment,t),e=!1},d(t){S(l,t)}}}function V(t){let e,l,n;const h=new D({});h.$on("updatefilter",t[1]);let f=t[0],u=[];for(let e=0;e<f.length;e+=1)u[e]=U(k(t,f,e));const p=t=>q(u[t],1,1,()=>{u[t]=null});return{c(){_(h.$$.fragment),e=s(),l=a("ul");for(let t=0;t<u.length;t+=1)u[t].c()},l(t){A(h.$$.fragment,t),e=i(t),l=o(t,"UL",{});var a=c(l);for(let t=0;t<u.length;t+=1)u[t].l(a);a.forEach(r)},m(t,a){C(h,t,a),d(t,e,a),d(t,l,a);for(let t=0;t<u.length;t+=1)u[t].m(l,null);n=!0},p(t,[e]){if(1&e){let a;for(f=t[0],a=0;a<f.length;a+=1){const s=k(t,f,a);u[a]?(u[a].p(s,e),b(u[a],1)):(u[a]=U(s),u[a].c(),b(u[a],1),u[a].m(l,null))}for(F(),a=f.length;a<u.length;a+=1)p(a);I()}},i(t){if(!n){b(h.$$.fragment,t);for(let t=0;t<f.length;t+=1)b(u[t]);n=!0}},o(t){q(h.$$.fragment,t),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)q(u[t]);n=!1},d(t){S(h,t),t&&r(e),t&&r(l),O(u,t)}}}function G(t,e,l){let{todos:a}=e,{filteredContent:s=a}=e;return t.$set=t=>{"todos"in t&&l(2,a=t.todos),"filteredContent"in t&&l(0,s=t.filteredContent)},[s,function(t){"all"===t.detail?l(0,s=a):"complete"===t.detail?l(0,s=a.filter(t=>t.completed)):l(0,s=a.filter(t=>!t.completed))},a]}class H extends t{constructor(t){super(),e(this,t,G,V,l,{todos:2,filteredContent:0})}}function J(t){let e,l,n;const c=new H({props:{todos:t[0]}});return{c(){e=a("meta"),l=s(),_(c.$$.fragment),this.h()},l(t){const a=j('[data-svelte="svelte-1ghxs90"]',document.head);e=o(a,"META",{name:!0,content:!0}),a.forEach(r),l=i(t),A(c.$$.fragment,t),this.h()},h(){document.title="Listings | Sapper/Svelte Demo",f(e,"name","description"),f(e,"content","Dummy sapper/svelte project - listings")},m(t,a){u(document.head,e),d(t,l,a),C(c,t,a),n=!0},p(t,[e]){const l={};1&e&&(l.todos=t[0]),c.$set(l)},i(t){n||(b(c.$$.fragment,t),n=!0)},o(t){q(c.$$.fragment,t),n=!1},d(t){r(e),t&&r(l),S(c,t)}}}async function K(){const t=await this.fetch("https://jsonplaceholder.typicode.com/todos");return{data:await t.json()}}function Q(t,e,l){let{data:a}=e;return t.$set=t=>{"data"in t&&l(0,a=t.data)},[a]}export default class extends t{constructor(t){super(),e(this,t,Q,J,l,{data:0})}}export{K as preload};
