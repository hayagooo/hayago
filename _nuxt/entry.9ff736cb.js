function sh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ce={},si=[],Jt=()=>{},S0=()=>!1,R0=/^on[^a-z]/,lo=t=>R0.test(t),ih=t=>t.startsWith("onUpdate:"),Fe=Object.assign,rh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k0=Object.prototype.hasOwnProperty,fe=(t,e)=>k0.call(t,e),G=Array.isArray,ii=t=>Di(t)==="[object Map]",xi=t=>Di(t)==="[object Set]",vd=t=>Di(t)==="[object Date]",A0=t=>Di(t)==="[object RegExp]",ee=t=>typeof t=="function",Ae=t=>typeof t=="string",Pr=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",km=t=>ve(t)&&ee(t.then)&&ee(t.catch),Am=Object.prototype.toString,Di=t=>Am.call(t),P0=t=>Di(t).slice(8,-1),Pm=t=>Di(t)==="[object Object]",oh=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pr=sh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},N0=/-(\w)/g,pn=tl(t=>t.replace(N0,(e,n)=>n?n.toUpperCase():"")),O0=/\B([A-Z])/g,Mi=tl(t=>t.replace(O0,"-$1").toLowerCase()),nl=tl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jl=tl(t=>t?`on${nl(t)}`:""),Nr=(t,e)=>!Object.is(t,e),ri=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},la=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ca=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Nm=t=>{const e=Ae(t)?Number(t):NaN;return isNaN(e)?t:e};let wd;const qc=()=>wd||(wd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ae(s)?L0(s):sl(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ae(t))return t;if(ve(t))return t}}const x0=/;(?![^(]*\))/g,D0=/:([^]+)/,M0=/\/\*[^]*?\*\//g;function L0(t){const e={};return t.replace(M0,"").split(x0).forEach(n=>{if(n){const s=n.split(D0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function il(t){let e="";if(Ae(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=il(t[n]);s&&(e+=s+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function RF(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ae(e)&&(t.class=il(e)),n&&(t.style=sl(n)),t}const F0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",U0=sh(F0);function Om(t){return!!t||t===""}function $0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ps(t[s],e[s]);return n}function Ps(t,e){if(t===e)return!0;let n=vd(t),s=vd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Pr(t),s=Pr(e),n||s)return t===e;if(n=G(t),s=G(e),n||s)return n&&s?$0(t,e):!1;if(n=ve(t),s=ve(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ps(t[o],e[o]))return!1}}return String(t)===String(e)}function ah(t,e){return t.findIndex(n=>Ps(n,e))}const kF=t=>Ae(t)?t:t==null?"":G(t)||ve(t)&&(t.toString===Am||!ee(t.toString))?JSON.stringify(t,xm,2):String(t),xm=(t,e)=>e&&e.__v_isRef?xm(t,e.value):ii(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:xi(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!G(e)&&!Pm(e)?String(e):e;let qt;class H0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function j0(t,e=qt){e&&e.active&&e.effects.push(t)}function B0(){return qt}const lh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Dm=t=>(t.w&ss)>0,Mm=t=>(t.n&ss)>0,W0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ss},V0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Dm(i)&&!Mm(i)?i.delete(t):e[n++]=i,i.w&=~ss,i.n&=~ss}e.length=n}},ua=new WeakMap;let ar=0,ss=1;const Kc=30;let Kt;const Is=Symbol(""),zc=Symbol("");class ch{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,j0(this,s)}run(){if(!this.active)return this.fn();let e=Kt,n=Jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,Jn=!0,ss=1<<++ar,ar<=Kc?W0(this):Ed(this),this.fn()}finally{ar<=Kc&&V0(this),ss=1<<--ar,Kt=this.parent,Jn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(Ed(this),this.onStop&&this.onStop(),this.active=!1)}}function Ed(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Jn=!0;const Lm=[];function Li(){Lm.push(Jn),Jn=!1}function Fi(){const t=Lm.pop();Jn=t===void 0?!0:t}function Rt(t,e,n){if(Jn&&Kt){let s=ua.get(t);s||ua.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=lh()),Fm(i)}}function Fm(t,e){let n=!1;ar<=Kc?Mm(t)||(t.n|=ss,n=!Dm(t)):n=!t.has(Kt),n&&(t.add(Kt),Kt.deps.push(t))}function Rn(t,e,n,s,i,r){const o=ua.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?oh(n)&&a.push(o.get("length")):(a.push(o.get(Is)),ii(t)&&a.push(o.get(zc)));break;case"delete":G(t)||(a.push(o.get(Is)),ii(t)&&a.push(o.get(zc)));break;case"set":ii(t)&&a.push(o.get(Is));break}if(a.length===1)a[0]&&Gc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Gc(lh(l))}}function Gc(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&bd(s);for(const s of n)s.computed||bd(s)}function bd(t,e){(t!==Kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function q0(t,e){var n;return(n=ua.get(t))==null?void 0:n.get(e)}const K0=sh("__proto__,__v_isRef,__isVue"),Um=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pr)),z0=uh(),G0=uh(!1,!0),Y0=uh(!0),Td=X0();function X0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=de(this);for(let r=0,o=this.length;r<o;r++)Rt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(de)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Li();const s=de(this)[e].apply(this,n);return Fi(),s}}),t}function J0(t){const e=de(this);return Rt(e,"has",t),e.hasOwnProperty(t)}function uh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?db:Wm:e?Bm:jm).get(s))return s;const o=G(s);if(!t){if(o&&fe(Td,i))return Reflect.get(Td,i,r);if(i==="hasOwnProperty")return J0}const a=Reflect.get(s,i,r);return(Pr(i)?Um.has(i):K0(i))||(t||Rt(s,"get",i),e)?a:je(a)?o&&oh(i)?a:a.value:ve(a)?t?qm(a):Ht(a):a}}const Q0=$m(),Z0=$m(!0);function $m(t=!1){return function(n,s,i,r){let o=n[s];if(Ns(o)&&je(o)&&!je(i))return!1;if(!t&&(!ha(i)&&!Ns(i)&&(o=de(o),i=de(i)),!G(n)&&je(o)&&!je(i)))return o.value=i,!0;const a=G(n)&&oh(s)?Number(s)<n.length:fe(n,s),l=Reflect.set(n,s,i,r);return n===de(r)&&(a?Nr(i,o)&&Rn(n,"set",s,i):Rn(n,"add",s,i)),l}}function eb(t,e){const n=fe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Rn(t,"delete",e,void 0),s}function tb(t,e){const n=Reflect.has(t,e);return(!Pr(e)||!Um.has(e))&&Rt(t,"has",e),n}function nb(t){return Rt(t,"iterate",G(t)?"length":Is),Reflect.ownKeys(t)}const Hm={get:z0,set:Q0,deleteProperty:eb,has:tb,ownKeys:nb},sb={get:Y0,set(t,e){return!0},deleteProperty(t,e){return!0}},ib=Fe({},Hm,{get:G0,set:Z0}),hh=t=>t,rl=t=>Reflect.getPrototypeOf(t);function Mo(t,e,n=!1,s=!1){t=t.__v_raw;const i=de(t),r=de(e);n||(e!==r&&Rt(i,"get",e),Rt(i,"get",r));const{has:o}=rl(i),a=s?hh:n?ph:Or;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Lo(t,e=!1){const n=this.__v_raw,s=de(n),i=de(t);return e||(t!==i&&Rt(s,"has",t),Rt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Fo(t,e=!1){return t=t.__v_raw,!e&&Rt(de(t),"iterate",Is),Reflect.get(t,"size",t)}function Id(t){t=de(t);const e=de(this);return rl(e).has.call(e,t)||(e.add(t),Rn(e,"add",t,t)),this}function Cd(t,e){e=de(e);const n=de(this),{has:s,get:i}=rl(n);let r=s.call(n,t);r||(t=de(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Nr(e,o)&&Rn(n,"set",t,e):Rn(n,"add",t,e),this}function Sd(t){const e=de(this),{has:n,get:s}=rl(e);let i=n.call(e,t);i||(t=de(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Rn(e,"delete",t,void 0),r}function Rd(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Rn(t,"clear",void 0,void 0),n}function Uo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=de(o),l=e?hh:t?ph:Or;return!t&&Rt(a,"iterate",Is),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function $o(t,e,n){return function(...s){const i=this.__v_raw,r=de(i),o=ii(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?hh:e?ph:Or;return!e&&Rt(r,"iterate",l?zc:Is),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Un(t){return function(...e){return t==="delete"?!1:this}}function rb(){const t={get(r){return Mo(this,r)},get size(){return Fo(this)},has:Lo,add:Id,set:Cd,delete:Sd,clear:Rd,forEach:Uo(!1,!1)},e={get(r){return Mo(this,r,!1,!0)},get size(){return Fo(this)},has:Lo,add:Id,set:Cd,delete:Sd,clear:Rd,forEach:Uo(!1,!0)},n={get(r){return Mo(this,r,!0)},get size(){return Fo(this,!0)},has(r){return Lo.call(this,r,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:Uo(!0,!1)},s={get(r){return Mo(this,r,!0,!0)},get size(){return Fo(this,!0)},has(r){return Lo.call(this,r,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:Uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=$o(r,!1,!1),n[r]=$o(r,!0,!1),e[r]=$o(r,!1,!0),s[r]=$o(r,!0,!0)}),[t,n,e,s]}const[ob,ab,lb,cb]=rb();function fh(t,e){const n=e?t?cb:lb:t?ab:ob;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(fe(n,i)&&i in s?n:s,i,r)}const ub={get:fh(!1,!1)},hb={get:fh(!1,!0)},fb={get:fh(!0,!1)},jm=new WeakMap,Bm=new WeakMap,Wm=new WeakMap,db=new WeakMap;function pb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gb(t){return t.__v_skip||!Object.isExtensible(t)?0:pb(P0(t))}function Ht(t){return Ns(t)?t:dh(t,!1,Hm,ub,jm)}function Vm(t){return dh(t,!1,ib,hb,Bm)}function qm(t){return dh(t,!0,sb,fb,Wm)}function dh(t,e,n,s,i){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=gb(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function oi(t){return Ns(t)?oi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ns(t){return!!(t&&t.__v_isReadonly)}function ha(t){return!!(t&&t.__v_isShallow)}function Km(t){return oi(t)||Ns(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function zm(t){return la(t,"__v_skip",!0),t}const Or=t=>ve(t)?Ht(t):t,ph=t=>ve(t)?qm(t):t;function Gm(t){Jn&&Kt&&(t=de(t),Fm(t.dep||(t.dep=lh())))}function Ym(t,e){t=de(t);const n=t.dep;n&&Gc(n)}function je(t){return!!(t&&t.__v_isRef===!0)}function qe(t){return Xm(t,!1)}function xr(t){return Xm(t,!0)}function Xm(t,e){return je(t)?t:new mb(t,e)}class mb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:Or(e)}get value(){return Gm(this),this._value}set value(e){const n=this.__v_isShallow||ha(e)||Ns(e);e=n?e:de(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Or(e),Ym(this))}}function $e(t){return je(t)?t.value:t}const _b={get:(t,e,n)=>$e(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Jm(t){return oi(t)?t:new Proxy(t,_b)}class yb{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return q0(de(this._object),this._key)}}class vb{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Qm(t,e,n){return je(t)?t:ee(t)?new vb(t):ve(t)&&arguments.length>1?wb(t,e,n):qe(t)}function wb(t,e,n){const s=t[e];return je(s)?s:new yb(t,e,n)}class Eb{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ch(e,()=>{this._dirty||(this._dirty=!0,Ym(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=de(this);return Gm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function bb(t,e,n=!1){let s,i;const r=ee(t);return r?(s=t,i=Jt):(s=t.get,i=t.set),new Eb(s,i,r||!i,n)}function Qn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ui(r,e,n)}return i}function $t(t,e,n,s){if(ee(t)){const r=Qn(t,e,n,s);return r&&km(r)&&r.catch(o=>{Ui(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push($t(t[r],e,n,s));return i}function Ui(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Qn(l,null,10,[t,o,a]);return}}Tb(t,n,i,s)}function Tb(t,e,n,s=!0){console.error(t)}let Dr=!1,Yc=!1;const st=[];let on=0;const ai=[];let yn=null,ms=0;const Zm=Promise.resolve();let gh=null;function js(t){const e=gh||Zm;return t?e.then(this?t.bind(this):t):e}function Ib(t){let e=on+1,n=st.length;for(;e<n;){const s=e+n>>>1;Mr(st[s])<t?e=s+1:n=s}return e}function ol(t){(!st.length||!st.includes(t,Dr&&t.allowRecurse?on+1:on))&&(t.id==null?st.push(t):st.splice(Ib(t.id),0,t),e_())}function e_(){!Dr&&!Yc&&(Yc=!0,gh=Zm.then(n_))}function Cb(t){const e=st.indexOf(t);e>on&&st.splice(e,1)}function t_(t){G(t)?ai.push(...t):(!yn||!yn.includes(t,t.allowRecurse?ms+1:ms))&&ai.push(t),e_()}function kd(t,e=Dr?on+1:0){for(;e<st.length;e++){const n=st[e];n&&n.pre&&(st.splice(e,1),e--,n())}}function fa(t){if(ai.length){const e=[...new Set(ai)];if(ai.length=0,yn){yn.push(...e);return}for(yn=e,yn.sort((n,s)=>Mr(n)-Mr(s)),ms=0;ms<yn.length;ms++)yn[ms]();yn=null,ms=0}}const Mr=t=>t.id==null?1/0:t.id,Sb=(t,e)=>{const n=Mr(t)-Mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function n_(t){Yc=!1,Dr=!0,st.sort(Sb);const e=Jt;try{for(on=0;on<st.length;on++){const n=st[on];n&&n.active!==!1&&Qn(n,null,14)}}finally{on=0,st.length=0,fa(),Dr=!1,gh=null,(st.length||ai.length)&&n_()}}function Rb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ce;f&&(i=n.map(d=>Ae(d)?d.trim():d)),h&&(i=n.map(ca))}let a,l=s[a=Jl(e)]||s[a=Jl(pn(e))];!l&&r&&(l=s[a=Jl(Mi(e))]),l&&$t(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(c,t,6,i)}}function s_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ee(t)){const l=c=>{const u=s_(c,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ve(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):Fe(o,r),ve(t)&&s.set(t,o),o)}function al(t,e){return!t||!lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Mi(e))||fe(t,e))}let wt=null,ll=null;function da(t){const e=wt;return wt=t,ll=t&&t.type.__scopeId||null,e}function AF(t){ll=t}function PF(){ll=null}function mh(t,e=wt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&jd(-1);const r=da(e);let o;try{o=t(...i)}finally{da(r),s._d&&jd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ql(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:E}=t;let T,y;const m=da(t);try{if(n.shapeFlag&4){const v=i||s;T=Lt(u.call(v,v,h,r,d,f,p)),y=l}else{const v=e;T=Lt(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),y=e.props?l:Ab(l)}}catch(v){_r.length=0,Ui(v,t,1),T=Re(It)}let b=T;if(y&&E!==!1){const v=Object.keys(y),{shapeFlag:k}=b;v.length&&k&7&&(o&&v.some(ih)&&(y=Pb(y,o)),b=kn(b,y))}return n.dirs&&(b=kn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),T=b,da(m),T}function kb(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Ur(s)){if(s.type!==It||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Ab=t=>{let e;for(const n in t)(n==="class"||n==="style"||lo(n))&&((e||(e={}))[n]=t[n]);return e},Pb=(t,e)=>{const n={};for(const s in t)(!ih(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Nb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ad(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!al(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ad(s,o,c):!0:!!o;return!1}function Ad(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!al(n,r))return!0}return!1}function _h({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const i_=t=>t.__isSuspense,Ob={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?xb(e,n,s,i,r,o,a,l,c):Db(t,e,n,s,i,o,a,l,c)},hydrate:Mb,create:yh,normalize:Lb},r_=Ob;function Lr(t,e){const n=t.props&&t.props[e];ee(n)&&n()}function xb(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=yh(t,i,s,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(Lr(t,"onPending"),Lr(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),li(f,t.ssFallback)):f.resolve(!1,!0)}function Db(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:E,isInFallback:T,isHydrating:y}=h;if(E)h.pendingBranch=f,zt(f,E)?(l(E,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():T&&(l(p,d,n,s,i,null,r,o,a),li(h,d))):(h.pendingId++,y?(h.isHydrating=!1,h.activeBranch=E):c(E,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),T?(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(l(p,d,n,s,i,null,r,o,a),li(h,d))):p&&zt(f,p)?(l(p,f,n,s,i,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(p&&zt(f,p))l(p,f,n,s,i,h,r,o,a),li(h,f);else if(Lr(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:m,pendingId:b}=h;m>0?setTimeout(()=>{h.pendingId===b&&h.fallback(d)},m):m===0&&h.fallback(d)}}function yh(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:E,remove:T}}=c;let y;const m=Fb(t);m&&e!=null&&e.pendingBranch&&(y=e.pendingId,e.deps++);const b=t.props?Nm(t.props.timeout):void 0,v={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof b=="number"?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(k=!1,N=!1){const{vnode:L,activeBranch:I,pendingBranch:$,pendingId:q,effects:x,parentComponent:S,container:j}=v;if(v.isHydrating)v.isHydrating=!1;else if(!k){const Q=I&&$.transition&&$.transition.mode==="out-in";Q&&(I.transition.afterLeave=()=>{q===v.pendingId&&f($,j,se,0)});let{anchor:se}=v;I&&(se=p(I),d(I,S,v,!0)),Q||f($,j,se,0)}li(v,$),v.pendingBranch=null,v.isInFallback=!1;let P=v.parent,le=!1;for(;P;){if(P.pendingBranch){P.effects.push(...x),le=!0;break}P=P.parent}le||t_(x),v.effects=[],m&&e&&e.pendingBranch&&y===e.pendingId&&(e.deps--,e.deps===0&&!N&&e.resolve()),Lr(L,"onResolve")},fallback(k){if(!v.pendingBranch)return;const{vnode:N,activeBranch:L,parentComponent:I,container:$,isSVG:q}=v;Lr(N,"onFallback");const x=p(L),S=()=>{v.isInFallback&&(h(null,k,$,x,I,null,q,a,l),li(v,k))},j=k.transition&&k.transition.mode==="out-in";j&&(L.transition.afterLeave=S),v.isInFallback=!0,d(L,I,null,!0),j||S()},move(k,N,L){v.activeBranch&&f(v.activeBranch,k,N,L),v.container=k},next(){return v.activeBranch&&p(v.activeBranch)},registerDep(k,N){const L=!!v.pendingBranch;L&&v.deps++;const I=k.vnode.el;k.asyncDep.catch($=>{Ui($,k,0)}).then($=>{if(k.isUnmounted||v.isUnmounted||v.pendingId!==k.suspenseId)return;k.asyncResolved=!0;const{vnode:q}=k;tu(k,$,!1),I&&(q.el=I);const x=!I&&k.subTree.el;N(k,q,E(I||k.subTree.el),I?null:p(k.subTree),v,o,l),x&&T(x),_h(k,q.el),L&&--v.deps===0&&v.resolve()})},unmount(k,N){v.isUnmounted=!0,v.activeBranch&&d(v.activeBranch,n,k,N),v.pendingBranch&&d(v.pendingBranch,n,k,N)}};return v}function Mb(t,e,n,s,i,r,o,a,l){const c=e.suspense=yh(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function Lb(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=Pd(s?n.default:n),t.ssFallback=s?Pd(n.fallback):Re(It)}function Pd(t){let e;if(ee(t)){const n=Ei&&t._c;n&&(t._d=!1,qn()),t=t(),n&&(t._d=!0,e=Ut,A_())}return G(t)&&(t=kb(t)),t=Lt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function o_(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):t_(t)}function li(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,_h(s,i))}function Fb(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function Ub(t,e){return vh(t,null,e)}const Ho={};function ci(t,e,n){return vh(t,e,n)}function vh(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ce){var a;const l=B0()===((a=Le)==null?void 0:a.scope)?Le:null;let c,u=!1,h=!1;if(je(t)?(c=()=>t.value,u=ha(t)):oi(t)?(c=()=>t,s=!0):G(t)?(h=!0,u=t.some(v=>oi(v)||ha(v)),c=()=>t.map(v=>{if(je(v))return v.value;if(oi(v))return ys(v);if(ee(v))return Qn(v,l,2)})):ee(t)?e?c=()=>Qn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),$t(t,l,3,[d])}:c=Jt,e&&s){const v=c;c=()=>ys(v())}let f,d=v=>{f=m.onStop=()=>{Qn(v,l,4)}},p;if(Ti)if(d=Jt,e?n&&$t(e,l,3,[c(),h?[]:void 0,d]):c(),i==="sync"){const v=PT();p=v.__watcherHandles||(v.__watcherHandles=[])}else return Jt;let E=h?new Array(t.length).fill(Ho):Ho;const T=()=>{if(m.active)if(e){const v=m.run();(s||u||(h?v.some((k,N)=>Nr(k,E[N])):Nr(v,E)))&&(f&&f(),$t(e,l,3,[v,E===Ho?void 0:h&&E[0]===Ho?[]:E,d]),E=v)}else m.run()};T.allowRecurse=!!e;let y;i==="sync"?y=T:i==="post"?y=()=>Xe(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),y=()=>ol(T));const m=new ch(c,y);e?n?T():E=m.run():i==="post"?Xe(m.run.bind(m),l&&l.suspense):m.run();const b=()=>{m.stop(),l&&l.scope&&rh(l.scope.effects,m)};return p&&p.push(b),b}function $b(t,e,n){const s=this.proxy,i=Ae(t)?t.includes(".")?a_(s,t):()=>s[t]:t.bind(s,s);let r;ee(e)?r=e:(r=e.handler,n=e);const o=Le;bi(this);const a=vh(i,r.bind(s),n);return o?bi(o):Cs(),a}function a_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function ys(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),je(t))ys(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)ys(t[n],e);else if(xi(t)||ii(t))t.forEach(n=>{ys(n,e)});else if(Pm(t))for(const n in t)ys(t[n],e);return t}function NF(t,e){const n=wt;if(n===null)return t;const s=fl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ce]=e[r];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&ys(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function rn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Li(),$t(l,n,8,[t.el,a,t,e]),Fi())}}function Hb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ul(()=>{t.isMounted=!0}),uo(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],l_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},jb={name:"BaseTransition",props:l_,setup(t,{slots:e}){const n=ho(),s=Hb();let i;return()=>{const r=e.default&&u_(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const E of r)if(E.type!==It){o=E;break}}const a=de(t),{mode:l}=a;if(s.isLeaving)return Zl(o);const c=Nd(o);if(!c)return Zl(o);const u=Xc(c,a,s,n);pa(c,u);const h=n.subTree,f=h&&Nd(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const E=p();i===void 0?i=E:E!==i&&(i=E,d=!0)}if(f&&f.type!==It&&(!zt(c,f)||d)){const E=Xc(f,a,s,n);if(pa(f,E),l==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Zl(o);l==="in-out"&&c.type!==It&&(E.delayLeave=(T,y,m)=>{const b=c_(s,f);b[String(f.key)]=f,T._leaveCb=()=>{y(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return o}}},Bb=jb;function c_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Xc(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:E,onAppear:T,onAfterAppear:y,onAppearCancelled:m}=e,b=String(t.key),v=c_(n,t),k=(I,$)=>{I&&$t(I,s,9,$)},N=(I,$)=>{const q=$[1];k(I,$),G(I)?I.every(x=>x.length<=1)&&q():I.length<=1&&q()},L={mode:r,persisted:o,beforeEnter(I){let $=a;if(!n.isMounted)if(i)$=E||a;else return;I._leaveCb&&I._leaveCb(!0);const q=v[b];q&&zt(t,q)&&q.el._leaveCb&&q.el._leaveCb(),k($,[I])},enter(I){let $=l,q=c,x=u;if(!n.isMounted)if(i)$=T||l,q=y||c,x=m||u;else return;let S=!1;const j=I._enterCb=P=>{S||(S=!0,P?k(x,[I]):k(q,[I]),L.delayedLeave&&L.delayedLeave(),I._enterCb=void 0)};$?N($,[I,j]):j()},leave(I,$){const q=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return $();k(h,[I]);let x=!1;const S=I._leaveCb=j=>{x||(x=!0,$(),j?k(p,[I]):k(d,[I]),I._leaveCb=void 0,v[q]===t&&delete v[q])};v[q]=t,f?N(f,[I,S]):S()},clone(I){return Xc(I,e,n,s)}};return L}function Zl(t){if(co(t))return t=kn(t),t.children=null,t}function Nd(t){return co(t)?t.children?t.children[0]:void 0:t}function pa(t,e){t.shapeFlag&6&&t.component?pa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function u_(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Mt?(o.patchFlag&128&&i++,s=s.concat(u_(o.children,e,a))):(e||o.type!==It)&&s.push(a!=null?kn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function mn(t,e){return ee(t)?(()=>Fe({name:t.name},e,{setup:t}))():t}const ui=t=>!!t.type.__asyncLoader;function Wb(t){ee(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((E,T)=>{a(p,()=>E(h()),()=>T(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return mn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=Le;if(c)return()=>ec(c,d);const p=m=>{l=null,Ui(m,d,13,!s)};if(o&&d.suspense||Ti)return f().then(m=>()=>ec(m,d)).catch(m=>(p(m),()=>s?Re(s,{error:m}):null));const E=qe(!1),T=qe(),y=qe(!!i);return i&&setTimeout(()=>{y.value=!1},i),r!=null&&setTimeout(()=>{if(!E.value&&!T.value){const m=new Error(`Async component timed out after ${r}ms.`);p(m),T.value=m}},r),f().then(()=>{E.value=!0,d.parent&&co(d.parent.vnode)&&ol(d.parent.update)}).catch(m=>{p(m),T.value=m}),()=>{if(E.value&&c)return ec(c,d);if(T.value&&s)return Re(s,{error:T.value});if(n&&!y.value)return Re(n)}}})}function ec(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=Re(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const co=t=>t.type.__isKeepAlive,Vb={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=ho(),s=n.ctx;if(!s.renderer)return()=>{const m=e.default&&e.default();return m&&m.length===1?m[0]:m};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(m,b,v,k,N)=>{const L=m.component;c(m,b,v,0,a),l(L.vnode,m,b,v,L,a,k,m.slotScopeIds,N),Xe(()=>{L.isDeactivated=!1,L.a&&ri(L.a);const I=m.props&&m.props.onVnodeMounted;I&&yt(I,L.parent,m)},a)},s.deactivate=m=>{const b=m.component;c(m,f,null,1,a),Xe(()=>{b.da&&ri(b.da);const v=m.props&&m.props.onVnodeUnmounted;v&&yt(v,b.parent,m),b.isDeactivated=!0},a)};function d(m){tc(m),u(m,n,a,!0)}function p(m){i.forEach((b,v)=>{const k=nu(b.type);k&&(!m||!m(k))&&E(v)})}function E(m){const b=i.get(m);!o||!zt(b,o)?d(b):o&&tc(o),i.delete(m),r.delete(m)}ci(()=>[t.include,t.exclude],([m,b])=>{m&&p(v=>lr(m,v)),b&&p(v=>!lr(b,v))},{flush:"post",deep:!0});let T=null;const y=()=>{T!=null&&i.set(T,nc(n.subTree))};return ul(y),p_(y),uo(()=>{i.forEach(m=>{const{subTree:b,suspense:v}=n,k=nc(b);if(m.type===k.type&&m.key===k.key){tc(k);const N=k.component.da;N&&Xe(N,v);return}d(m)})}),()=>{if(T=null,!e.default)return null;const m=e.default(),b=m[0];if(m.length>1)return o=null,m;if(!Ur(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let v=nc(b);const k=v.type,N=nu(ui(v)?v.type.__asyncResolved||{}:k),{include:L,exclude:I,max:$}=t;if(L&&(!N||!lr(L,N))||I&&N&&lr(I,N))return o=v,b;const q=v.key==null?k:v.key,x=i.get(q);return v.el&&(v=kn(v),b.shapeFlag&128&&(b.ssContent=v)),T=q,x?(v.el=x.el,v.component=x.component,v.transition&&pa(v,v.transition),v.shapeFlag|=512,r.delete(q),r.add(q)):(r.add(q),$&&r.size>parseInt($,10)&&E(r.values().next().value)),v.shapeFlag|=256,o=v,i_(b.type)?b:v}}},qb=Vb;function lr(t,e){return G(t)?t.some(n=>lr(n,e)):Ae(t)?t.split(",").includes(e):A0(t)?t.test(e):!1}function h_(t,e){d_(t,"a",e)}function f_(t,e){d_(t,"da",e)}function d_(t,e,n=Le){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(cl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)co(i.parent.vnode)&&Kb(s,e,n,i),i=i.parent}}function Kb(t,e,n,s){const i=cl(e,t,s,!0);g_(()=>{rh(s[e],i)},n)}function tc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function nc(t){return t.shapeFlag&128?t.ssContent:t}function cl(t,e,n=Le,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Li(),bi(n);const a=$t(e,n,t,o);return Cs(),Fi(),a});return s?i.unshift(r):i.push(r),r}}const xn=t=>(e,n=Le)=>(!Ti||t==="sp")&&cl(t,(...s)=>e(...s),n),zb=xn("bm"),ul=xn("m"),Gb=xn("bu"),p_=xn("u"),uo=xn("bum"),g_=xn("um"),Yb=xn("sp"),Xb=xn("rtg"),Jb=xn("rtc");function m_(t,e=Le){cl("ec",t,e)}const wh="components";function OF(t,e){return y_(wh,t,!0,e)||t}const __=Symbol.for("v-ndc");function Qb(t){return Ae(t)?y_(wh,t,!1)||t:t||__}function y_(t,e,n=!0,s=!1){const i=wt||Le;if(i){const r=i.type;if(t===wh){const a=nu(r,!1);if(a&&(a===e||a===pn(e)||a===nl(pn(e))))return r}const o=Od(i[t]||r[t],e)||Od(i.appContext[t],e);return!o&&s?r:o}}function Od(t,e){return t&&(t[e]||t[pn(e)]||t[nl(pn(e))])}function xF(t,e,n,s){let i;const r=n&&n[s];if(G(t)||Ae(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ve(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Jc=t=>t?D_(t)?fl(t)||t.proxy:Jc(t.parent):null,gr=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jc(t.parent),$root:t=>Jc(t.root),$emit:t=>t.emit,$options:t=>Eh(t),$forceUpdate:t=>t.f||(t.f=()=>ol(t.update)),$nextTick:t=>t.n||(t.n=js.bind(t.proxy)),$watch:t=>$b.bind(t)}),sc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&fe(t,e),Zb={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(sc(s,e))return o[e]=1,s[e];if(i!==Ce&&fe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&fe(c,e))return o[e]=3,r[e];if(n!==Ce&&fe(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const u=gr[e];let h,f;if(u)return e==="$attrs"&&Rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&fe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return sc(i,e)?(i[e]=n,!0):s!==Ce&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ce&&fe(t,o)||sc(e,o)||(a=r[0])&&fe(a,o)||fe(s,o)||fe(gr,o)||fe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xd(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qc=!0;function eT(t){const e=Eh(t),n=t.proxy,s=t.ctx;Qc=!1,e.beforeCreate&&Dd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:E,deactivated:T,beforeDestroy:y,beforeUnmount:m,destroyed:b,unmounted:v,render:k,renderTracked:N,renderTriggered:L,errorCaptured:I,serverPrefetch:$,expose:q,inheritAttrs:x,components:S,directives:j,filters:P}=e;if(c&&tT(c,s,null),o)for(const se in o){const re=o[se];ee(re)&&(s[se]=re.bind(n))}if(i){const se=i.call(n,n);ve(se)&&(t.data=Ht(se))}if(Qc=!0,r)for(const se in r){const re=r[se],Ge=ee(re)?re.bind(n,n):ee(re.get)?re.get.bind(n,n):Jt,At=!ee(re)&&ee(re.set)?re.set.bind(n):Jt,mt=it({get:Ge,set:At});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>mt.value,set:De=>mt.value=De})}if(a)for(const se in a)v_(a[se],s,n,se);if(l){const se=ee(l)?l.call(n):l;Reflect.ownKeys(se).forEach(re=>{hi(re,se[re])})}u&&Dd(u,t,"c");function Q(se,re){G(re)?re.forEach(Ge=>se(Ge.bind(n))):re&&se(re.bind(n))}if(Q(zb,h),Q(ul,f),Q(Gb,d),Q(p_,p),Q(h_,E),Q(f_,T),Q(m_,I),Q(Jb,N),Q(Xb,L),Q(uo,m),Q(g_,v),Q(Yb,$),G(q))if(q.length){const se=t.exposed||(t.exposed={});q.forEach(re=>{Object.defineProperty(se,re,{get:()=>n[re],set:Ge=>n[re]=Ge})})}else t.exposed||(t.exposed={});k&&t.render===Jt&&(t.render=k),x!=null&&(t.inheritAttrs=x),S&&(t.components=S),j&&(t.directives=j)}function tT(t,e,n=Jt){G(t)&&(t=Zc(t));for(const s in t){const i=t[s];let r;ve(i)?"default"in i?r=Tt(i.from||s,i.default,!0):r=Tt(i.from||s):r=Tt(i),je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Dd(t,e,n){$t(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function v_(t,e,n,s){const i=s.includes(".")?a_(n,s):()=>n[s];if(Ae(t)){const r=e[t];ee(r)&&ci(i,r)}else if(ee(t))ci(i,t.bind(n));else if(ve(t))if(G(t))t.forEach(r=>v_(r,e,n,s));else{const r=ee(t.handler)?t.handler.bind(n):e[t.handler];ee(r)&&ci(i,r,t)}}function Eh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>ga(l,c,o,!0)),ga(l,e,o)),ve(e)&&r.set(e,l),l}function ga(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ga(t,r,n,!0),i&&i.forEach(o=>ga(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=nT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nT={data:Md,props:Ld,emits:Ld,methods:cr,computed:cr,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:cr,directives:cr,watch:iT,provide:Md,inject:sT};function Md(t,e){return e?t?function(){return Fe(ee(t)?t.call(this,this):t,ee(e)?e.call(this,this):e)}:e:t}function sT(t,e){return cr(Zc(t),Zc(e))}function Zc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function cr(t,e){return t?Fe(Object.create(null),t,e):e}function Ld(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Fe(Object.create(null),xd(t),xd(e??{})):e}function iT(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=dt(t[s],e[s]);return n}function w_(){return{app:null,config:{isNativeTag:S0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rT=0;function oT(t,e){return function(s,i=null){ee(s)||(s=Fe({},s)),i!=null&&!ve(i)&&(i=null);const r=w_(),o=new Set;let a=!1;const l=r.app={_uid:rT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:L_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Re(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,fl(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Fr=l;try{return c()}finally{Fr=null}}};return l}}let Fr=null;function hi(t,e){if(Le){let n=Le.provides;const s=Le.parent&&Le.parent.provides;s===n&&(n=Le.provides=Object.create(s)),n[t]=e}}function Tt(t,e,n=!1){const s=Le||wt;if(s||Fr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Fr._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ee(e)?e.call(s&&s.proxy):e}}function E_(){return!!(Le||wt||Fr)}function aT(t,e,n,s=!1){const i={},r={};la(r,hl,1),t.propsDefaults=Object.create(null),b_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function lT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=de(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(al(t.emitsOptions,f))continue;const d=e[f];if(l)if(fe(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=pn(f);i[p]=eu(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{b_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=Mi(h))===h||!fe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=eu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!fe(e,h))&&(delete r[h],c=!0)}c&&Rn(t,"set","$attrs")}function b_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let u;i&&fe(i,u=pn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:al(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=de(n),c=a||Ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=eu(i,l,h,c[h],t,!fe(c,h))}}return o}function eu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(bi(i),s=c[n]=l.call(null,e),Cs())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Mi(n))&&(s=!0))}return s}function T_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ee(t)){const u=h=>{l=!0;const[f,d]=T_(h,e,!0);Fe(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ve(t)&&s.set(t,si),si;if(G(r))for(let u=0;u<r.length;u++){const h=pn(r[u]);Fd(h)&&(o[h]=Ce)}else if(r)for(const u in r){const h=pn(u);if(Fd(h)){const f=r[u],d=o[h]=G(f)||ee(f)?{type:f}:Fe({},f);if(d){const p=Hd(Boolean,d.type),E=Hd(String,d.type);d[0]=p>-1,d[1]=E<0||p<E,(p>-1||fe(d,"default"))&&a.push(h)}}}const c=[o,a];return ve(t)&&s.set(t,c),c}function Fd(t){return t[0]!=="$"}function Ud(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $d(t,e){return Ud(t)===Ud(e)}function Hd(t,e){return G(e)?e.findIndex(n=>$d(n,t)):ee(e)&&$d(e,t)?0:-1}const I_=t=>t[0]==="_"||t==="$stable",bh=t=>G(t)?t.map(Lt):[Lt(t)],cT=(t,e,n)=>{if(e._n)return e;const s=mh((...i)=>bh(e(...i)),n);return s._c=!1,s},C_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(I_(i))continue;const r=t[i];if(ee(r))e[i]=cT(i,r,s);else if(r!=null){const o=bh(r);e[i]=()=>o}}},S_=(t,e)=>{const n=bh(e);t.slots.default=()=>n},uT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),la(e,"_",n)):C_(e,t.slots={})}else t.slots={},e&&S_(t,e);la(t.slots,hl,1)},hT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Fe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,C_(e,i)),o=e}else e&&(S_(t,e),o={default:1});if(r)for(const a in i)!I_(a)&&!(a in o)&&delete i[a]};function ma(t,e,n,s,i=!1){if(G(t)){t.forEach((f,d)=>ma(f,e&&(G(e)?e[d]:e),n,s,i));return}if(ui(s)&&!i)return;const r=s.shapeFlag&4?fl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ae(c)?(u[c]=null,fe(h,c)&&(h[c]=null)):je(c)&&(c.value=null)),ee(l))Qn(l,a,12,[o,u]);else{const f=Ae(l),d=je(l);if(f||d){const p=()=>{if(t.f){const E=f?fe(h,l)?h[l]:u[l]:l.value;i?G(E)&&rh(E,r):G(E)?E.includes(r)||E.push(r):f?(u[l]=[r],fe(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,fe(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Xe(p,n)):p()}}}let $n=!1;const jo=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Bo=t=>t.nodeType===8;function fT(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(y,m)=>{if(!m.hasChildNodes()){n(null,y,m),fa(),m._vnode=y;return}$n=!1,h(m.firstChild,y,null,null,null),fa(),m._vnode=y,$n&&console.error("Hydration completed but contains mismatches.")},h=(y,m,b,v,k,N=!1)=>{const L=Bo(y)&&y.data==="[",I=()=>E(y,m,b,v,k,L),{type:$,ref:q,shapeFlag:x,patchFlag:S}=m;let j=y.nodeType;m.el=y,S===-2&&(N=!1,m.dynamicChildren=null);let P=null;switch($){case wi:j!==3?m.children===""?(l(m.el=i(""),o(y),y),P=y):P=I():(y.data!==m.children&&($n=!0,y.data=m.children),P=r(y));break;case It:j!==8||L?P=I():P=r(y);break;case mr:if(L&&(y=r(y),j=y.nodeType),j===1||j===3){P=y;const le=!m.children.length;for(let Q=0;Q<m.staticCount;Q++)le&&(m.children+=P.nodeType===1?P.outerHTML:P.data),Q===m.staticCount-1&&(m.anchor=P),P=r(P);return L?r(P):P}else I();break;case Mt:L?P=p(y,m,b,v,k,N):P=I();break;default:if(x&1)j!==1||m.type.toLowerCase()!==y.tagName.toLowerCase()?P=I():P=f(y,m,b,v,k,N);else if(x&6){m.slotScopeIds=k;const le=o(y);if(e(m,le,null,b,v,jo(le),N),P=L?T(y):r(y),P&&Bo(P)&&P.data==="teleport end"&&(P=r(P)),ui(m)){let Q;L?(Q=Re(Mt),Q.anchor=P?P.previousSibling:le.lastChild):Q=y.nodeType===3?x_(""):Re("div"),Q.el=y,m.component.subTree=Q}}else x&64?j!==8?P=I():P=m.type.hydrate(y,m,b,v,k,N,t,d):x&128&&(P=m.type.hydrate(y,m,b,v,jo(o(y)),k,N,t,h))}return q!=null&&ma(q,null,v,m),P},f=(y,m,b,v,k,N)=>{N=N||!!m.dynamicChildren;const{type:L,props:I,patchFlag:$,shapeFlag:q,dirs:x}=m,S=L==="input"&&x||L==="option";if(S||$!==-1){if(x&&rn(m,null,b,"created"),I)if(S||!N||$&48)for(const P in I)(S&&P.endsWith("value")||lo(P)&&!pr(P))&&s(y,P,null,I[P],!1,void 0,b);else I.onClick&&s(y,"onClick",null,I.onClick,!1,void 0,b);let j;if((j=I&&I.onVnodeBeforeMount)&&yt(j,b,m),x&&rn(m,null,b,"beforeMount"),((j=I&&I.onVnodeMounted)||x)&&o_(()=>{j&&yt(j,b,m),x&&rn(m,null,b,"mounted")},v),q&16&&!(I&&(I.innerHTML||I.textContent))){let P=d(y.firstChild,m,y,b,v,k,N);for(;P;){$n=!0;const le=P;P=P.nextSibling,a(le)}}else q&8&&y.textContent!==m.children&&($n=!0,y.textContent=m.children)}return y.nextSibling},d=(y,m,b,v,k,N,L)=>{L=L||!!m.dynamicChildren;const I=m.children,$=I.length;for(let q=0;q<$;q++){const x=L?I[q]:I[q]=Lt(I[q]);if(y)y=h(y,x,v,k,N,L);else{if(x.type===wi&&!x.children)continue;$n=!0,n(null,x,b,null,v,k,jo(b),N)}}return y},p=(y,m,b,v,k,N)=>{const{slotScopeIds:L}=m;L&&(k=k?k.concat(L):L);const I=o(y),$=d(r(y),m,I,b,v,k,N);return $&&Bo($)&&$.data==="]"?r(m.anchor=$):($n=!0,l(m.anchor=c("]"),I,$),$)},E=(y,m,b,v,k,N)=>{if($n=!0,m.el=null,N){const $=T(y);for(;;){const q=r(y);if(q&&q!==$)a(q);else break}}const L=r(y),I=o(y);return a(y),n(null,m,I,L,b,v,jo(I),k),L},T=y=>{let m=0;for(;y;)if(y=r(y),y&&Bo(y)&&(y.data==="["&&m++,y.data==="]")){if(m===0)return r(y);m--}return y};return[u,h]}const Xe=o_;function dT(t){return R_(t)}function pT(t){return R_(t,fT)}function R_(t,e){const n=qc();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Jt,insertStaticContent:p}=t,E=(g,_,w,C=null,A=null,O=null,V=!1,H=null,B=!!_.dynamicChildren)=>{if(g===_)return;g&&!zt(g,_)&&(C=R(g),De(g,A,O,!0),g=null),_.patchFlag===-2&&(B=!1,_.dynamicChildren=null);const{type:D,ref:Y,shapeFlag:z}=_;switch(D){case wi:T(g,_,w,C);break;case It:y(g,_,w,C);break;case mr:g==null&&m(_,w,C,V);break;case Mt:S(g,_,w,C,A,O,V,H,B);break;default:z&1?k(g,_,w,C,A,O,V,H,B):z&6?j(g,_,w,C,A,O,V,H,B):(z&64||z&128)&&D.process(g,_,w,C,A,O,V,H,B,M)}Y!=null&&A&&ma(Y,g&&g.ref,O,_||g,!_)},T=(g,_,w,C)=>{if(g==null)s(_.el=a(_.children),w,C);else{const A=_.el=g.el;_.children!==g.children&&c(A,_.children)}},y=(g,_,w,C)=>{g==null?s(_.el=l(_.children||""),w,C):_.el=g.el},m=(g,_,w,C)=>{[g.el,g.anchor]=p(g.children,_,w,C,g.el,g.anchor)},b=({el:g,anchor:_},w,C)=>{let A;for(;g&&g!==_;)A=f(g),s(g,w,C),g=A;s(_,w,C)},v=({el:g,anchor:_})=>{let w;for(;g&&g!==_;)w=f(g),i(g),g=w;i(_)},k=(g,_,w,C,A,O,V,H,B)=>{V=V||_.type==="svg",g==null?N(_,w,C,A,O,V,H,B):$(g,_,A,O,V,H,B)},N=(g,_,w,C,A,O,V,H)=>{let B,D;const{type:Y,props:z,shapeFlag:X,transition:ne,dirs:ue}=g;if(B=g.el=o(g.type,O,z&&z.is,z),X&8?u(B,g.children):X&16&&I(g.children,B,null,C,A,O&&Y!=="foreignObject",V,H),ue&&rn(g,null,C,"created"),L(B,g,g.scopeId,V,C),z){for(const ye in z)ye!=="value"&&!pr(ye)&&r(B,ye,null,z[ye],O,g.children,C,A,we);"value"in z&&r(B,"value",null,z.value),(D=z.onVnodeBeforeMount)&&yt(D,C,g)}ue&&rn(g,null,C,"beforeMount");const be=(!A||A&&!A.pendingBranch)&&ne&&!ne.persisted;be&&ne.beforeEnter(B),s(B,_,w),((D=z&&z.onVnodeMounted)||be||ue)&&Xe(()=>{D&&yt(D,C,g),be&&ne.enter(B),ue&&rn(g,null,C,"mounted")},A)},L=(g,_,w,C,A)=>{if(w&&d(g,w),C)for(let O=0;O<C.length;O++)d(g,C[O]);if(A){let O=A.subTree;if(_===O){const V=A.vnode;L(g,V,V.scopeId,V.slotScopeIds,A.parent)}}},I=(g,_,w,C,A,O,V,H,B=0)=>{for(let D=B;D<g.length;D++){const Y=g[D]=H?Wn(g[D]):Lt(g[D]);E(null,Y,_,w,C,A,O,V,H)}},$=(g,_,w,C,A,O,V)=>{const H=_.el=g.el;let{patchFlag:B,dynamicChildren:D,dirs:Y}=_;B|=g.patchFlag&16;const z=g.props||Ce,X=_.props||Ce;let ne;w&&hs(w,!1),(ne=X.onVnodeBeforeUpdate)&&yt(ne,w,_,g),Y&&rn(_,g,w,"beforeUpdate"),w&&hs(w,!0);const ue=A&&_.type!=="foreignObject";if(D?q(g.dynamicChildren,D,H,w,C,ue,O):V||re(g,_,H,null,w,C,ue,O,!1),B>0){if(B&16)x(H,_,z,X,w,C,A);else if(B&2&&z.class!==X.class&&r(H,"class",null,X.class,A),B&4&&r(H,"style",z.style,X.style,A),B&8){const be=_.dynamicProps;for(let ye=0;ye<be.length;ye++){const Me=be[ye],Vt=z[Me],qs=X[Me];(qs!==Vt||Me==="value")&&r(H,Me,Vt,qs,A,g.children,w,C,we)}}B&1&&g.children!==_.children&&u(H,_.children)}else!V&&D==null&&x(H,_,z,X,w,C,A);((ne=X.onVnodeUpdated)||Y)&&Xe(()=>{ne&&yt(ne,w,_,g),Y&&rn(_,g,w,"updated")},C)},q=(g,_,w,C,A,O,V)=>{for(let H=0;H<_.length;H++){const B=g[H],D=_[H],Y=B.el&&(B.type===Mt||!zt(B,D)||B.shapeFlag&70)?h(B.el):w;E(B,D,Y,null,C,A,O,V,!0)}},x=(g,_,w,C,A,O,V)=>{if(w!==C){if(w!==Ce)for(const H in w)!pr(H)&&!(H in C)&&r(g,H,w[H],null,V,_.children,A,O,we);for(const H in C){if(pr(H))continue;const B=C[H],D=w[H];B!==D&&H!=="value"&&r(g,H,D,B,V,_.children,A,O,we)}"value"in C&&r(g,"value",w.value,C.value)}},S=(g,_,w,C,A,O,V,H,B)=>{const D=_.el=g?g.el:a(""),Y=_.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:X,slotScopeIds:ne}=_;ne&&(H=H?H.concat(ne):ne),g==null?(s(D,w,C),s(Y,w,C),I(_.children,w,Y,A,O,V,H,B)):z>0&&z&64&&X&&g.dynamicChildren?(q(g.dynamicChildren,X,w,A,O,V,H),(_.key!=null||A&&_===A.subTree)&&k_(g,_,!0)):re(g,_,w,Y,A,O,V,H,B)},j=(g,_,w,C,A,O,V,H,B)=>{_.slotScopeIds=H,g==null?_.shapeFlag&512?A.ctx.activate(_,w,C,V,B):P(_,w,C,A,O,V,B):le(g,_,B)},P=(g,_,w,C,A,O,V)=>{const H=g.component=TT(g,C,A);if(co(g)&&(H.ctx.renderer=M),IT(H),H.asyncDep){if(A&&A.registerDep(H,Q),!g.el){const B=H.subTree=Re(It);y(null,B,_,w)}return}Q(H,g,_,w,A,O,V)},le=(g,_,w)=>{const C=_.component=g.component;if(Nb(g,_,w))if(C.asyncDep&&!C.asyncResolved){se(C,_,w);return}else C.next=_,Cb(C.update),C.update();else _.el=g.el,C.vnode=_},Q=(g,_,w,C,A,O,V)=>{const H=()=>{if(g.isMounted){let{next:Y,bu:z,u:X,parent:ne,vnode:ue}=g,be=Y,ye;hs(g,!1),Y?(Y.el=ue.el,se(g,Y,V)):Y=ue,z&&ri(z),(ye=Y.props&&Y.props.onVnodeBeforeUpdate)&&yt(ye,ne,Y,ue),hs(g,!0);const Me=Ql(g),Vt=g.subTree;g.subTree=Me,E(Vt,Me,h(Vt.el),R(Vt),g,A,O),Y.el=Me.el,be===null&&_h(g,Me.el),X&&Xe(X,A),(ye=Y.props&&Y.props.onVnodeUpdated)&&Xe(()=>yt(ye,ne,Y,ue),A)}else{let Y;const{el:z,props:X}=_,{bm:ne,m:ue,parent:be}=g,ye=ui(_);if(hs(g,!1),ne&&ri(ne),!ye&&(Y=X&&X.onVnodeBeforeMount)&&yt(Y,be,_),hs(g,!0),z&&ie){const Me=()=>{g.subTree=Ql(g),ie(z,g.subTree,g,A,null)};ye?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Me()):Me()}else{const Me=g.subTree=Ql(g);E(null,Me,w,C,g,A,O),_.el=Me.el}if(ue&&Xe(ue,A),!ye&&(Y=X&&X.onVnodeMounted)){const Me=_;Xe(()=>yt(Y,be,Me),A)}(_.shapeFlag&256||be&&ui(be.vnode)&&be.vnode.shapeFlag&256)&&g.a&&Xe(g.a,A),g.isMounted=!0,_=w=C=null}},B=g.effect=new ch(H,()=>ol(D),g.scope),D=g.update=()=>B.run();D.id=g.uid,hs(g,!0),D()},se=(g,_,w)=>{_.component=g;const C=g.vnode.props;g.vnode=_,g.next=null,lT(g,_.props,C,w),hT(g,_.children,w),Li(),kd(),Fi()},re=(g,_,w,C,A,O,V,H,B=!1)=>{const D=g&&g.children,Y=g?g.shapeFlag:0,z=_.children,{patchFlag:X,shapeFlag:ne}=_;if(X>0){if(X&128){At(D,z,w,C,A,O,V,H,B);return}else if(X&256){Ge(D,z,w,C,A,O,V,H,B);return}}ne&8?(Y&16&&we(D,A,O),z!==D&&u(w,z)):Y&16?ne&16?At(D,z,w,C,A,O,V,H,B):we(D,A,O,!0):(Y&8&&u(w,""),ne&16&&I(z,w,C,A,O,V,H,B))},Ge=(g,_,w,C,A,O,V,H,B)=>{g=g||si,_=_||si;const D=g.length,Y=_.length,z=Math.min(D,Y);let X;for(X=0;X<z;X++){const ne=_[X]=B?Wn(_[X]):Lt(_[X]);E(g[X],ne,w,null,A,O,V,H,B)}D>Y?we(g,A,O,!0,!1,z):I(_,w,C,A,O,V,H,B,z)},At=(g,_,w,C,A,O,V,H,B)=>{let D=0;const Y=_.length;let z=g.length-1,X=Y-1;for(;D<=z&&D<=X;){const ne=g[D],ue=_[D]=B?Wn(_[D]):Lt(_[D]);if(zt(ne,ue))E(ne,ue,w,null,A,O,V,H,B);else break;D++}for(;D<=z&&D<=X;){const ne=g[z],ue=_[X]=B?Wn(_[X]):Lt(_[X]);if(zt(ne,ue))E(ne,ue,w,null,A,O,V,H,B);else break;z--,X--}if(D>z){if(D<=X){const ne=X+1,ue=ne<Y?_[ne].el:C;for(;D<=X;)E(null,_[D]=B?Wn(_[D]):Lt(_[D]),w,ue,A,O,V,H,B),D++}}else if(D>X)for(;D<=z;)De(g[D],A,O,!0),D++;else{const ne=D,ue=D,be=new Map;for(D=ue;D<=X;D++){const Pt=_[D]=B?Wn(_[D]):Lt(_[D]);Pt.key!=null&&be.set(Pt.key,D)}let ye,Me=0;const Vt=X-ue+1;let qs=!1,md=0;const Xi=new Array(Vt);for(D=0;D<Vt;D++)Xi[D]=0;for(D=ne;D<=z;D++){const Pt=g[D];if(Me>=Vt){De(Pt,A,O,!0);continue}let nn;if(Pt.key!=null)nn=be.get(Pt.key);else for(ye=ue;ye<=X;ye++)if(Xi[ye-ue]===0&&zt(Pt,_[ye])){nn=ye;break}nn===void 0?De(Pt,A,O,!0):(Xi[nn-ue]=D+1,nn>=md?md=nn:qs=!0,E(Pt,_[nn],w,null,A,O,V,H,B),Me++)}const _d=qs?gT(Xi):si;for(ye=_d.length-1,D=Vt-1;D>=0;D--){const Pt=ue+D,nn=_[Pt],yd=Pt+1<Y?_[Pt+1].el:C;Xi[D]===0?E(null,nn,w,yd,A,O,V,H,B):qs&&(ye<0||D!==_d[ye]?mt(nn,w,yd,2):ye--)}}},mt=(g,_,w,C,A=null)=>{const{el:O,type:V,transition:H,children:B,shapeFlag:D}=g;if(D&6){mt(g.component.subTree,_,w,C);return}if(D&128){g.suspense.move(_,w,C);return}if(D&64){V.move(g,_,w,M);return}if(V===Mt){s(O,_,w);for(let z=0;z<B.length;z++)mt(B[z],_,w,C);s(g.anchor,_,w);return}if(V===mr){b(g,_,w);return}if(C!==2&&D&1&&H)if(C===0)H.beforeEnter(O),s(O,_,w),Xe(()=>H.enter(O),A);else{const{leave:z,delayLeave:X,afterLeave:ne}=H,ue=()=>s(O,_,w),be=()=>{z(O,()=>{ue(),ne&&ne()})};X?X(O,ue,be):be()}else s(O,_,w)},De=(g,_,w,C=!1,A=!1)=>{const{type:O,props:V,ref:H,children:B,dynamicChildren:D,shapeFlag:Y,patchFlag:z,dirs:X}=g;if(H!=null&&ma(H,null,w,g,!0),Y&256){_.ctx.deactivate(g);return}const ne=Y&1&&X,ue=!ui(g);let be;if(ue&&(be=V&&V.onVnodeBeforeUnmount)&&yt(be,_,g),Y&6)ht(g.component,w,C);else{if(Y&128){g.suspense.unmount(w,C);return}ne&&rn(g,null,_,"beforeUnmount"),Y&64?g.type.remove(g,_,w,A,M,C):D&&(O!==Mt||z>0&&z&64)?we(D,_,w,!1,!0):(O===Mt&&z&384||!A&&Y&16)&&we(B,_,w),C&&Ye(g)}(ue&&(be=V&&V.onVnodeUnmounted)||ne)&&Xe(()=>{be&&yt(be,_,g),ne&&rn(g,null,_,"unmounted")},w)},Ye=g=>{const{type:_,el:w,anchor:C,transition:A}=g;if(_===Mt){Ue(w,C);return}if(_===mr){v(g);return}const O=()=>{i(w),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(g.shapeFlag&1&&A&&!A.persisted){const{leave:V,delayLeave:H}=A,B=()=>V(w,O);H?H(g.el,O,B):B()}else O()},Ue=(g,_)=>{let w;for(;g!==_;)w=f(g),i(g),g=w;i(_)},ht=(g,_,w)=>{const{bum:C,scope:A,update:O,subTree:V,um:H}=g;C&&ri(C),A.stop(),O&&(O.active=!1,De(V,g,_,w)),H&&Xe(H,_),Xe(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},we=(g,_,w,C=!1,A=!1,O=0)=>{for(let V=O;V<g.length;V++)De(g[V],_,w,C,A)},R=g=>g.shapeFlag&6?R(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),F=(g,_,w)=>{g==null?_._vnode&&De(_._vnode,null,null,!0):E(_._vnode||null,g,_,null,null,null,w),kd(),fa(),_._vnode=g},M={p:E,um:De,m:mt,r:Ye,mt:P,mc:I,pc:re,pbc:q,n:R,o:t};let K,ie;return e&&([K,ie]=e(M)),{render:F,hydrate:K,createApp:oT(F,K)}}function hs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function k_(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Wn(i[r]),a.el=o.el),n||k_(o,a)),a.type===wi&&(a.el=o.el)}}function gT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const mT=t=>t.__isTeleport,Mt=Symbol.for("v-fgt"),wi=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),mr=Symbol.for("v-stc"),_r=[];let Ut=null;function qn(t=!1){_r.push(Ut=t?null:[])}function A_(){_r.pop(),Ut=_r[_r.length-1]||null}let Ei=1;function jd(t){Ei+=t}function P_(t){return t.dynamicChildren=Ei>0?Ut||si:null,A_(),Ei>0&&Ut&&Ut.push(t),t}function _T(t,e,n,s,i,r){return P_(O_(t,e,n,s,i,r,!0))}function Xs(t,e,n,s,i){return P_(Re(t,e,n,s,i,!0))}function Ur(t){return t?t.__v_isVNode===!0:!1}function zt(t,e){return t.type===e.type&&t.key===e.key}const hl="__vInternal",N_=({key:t})=>t??null,sa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ae(t)||je(t)||ee(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function O_(t,e=null,n=null,s=0,i=null,r=t===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&N_(e),ref:e&&sa(e),scopeId:ll,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:wt};return a?(Th(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),Ei>0&&!o&&Ut&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ut.push(l),l}const Re=yT;function yT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===__)&&(t=It),Ur(t)){const a=kn(t,e,!0);return n&&Th(a,n),Ei>0&&!r&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(kT(t)&&(t=t.__vccOpts),e){e=vT(e);let{class:a,style:l}=e;a&&!Ae(a)&&(e.class=il(a)),ve(l)&&(Km(l)&&!G(l)&&(l=Fe({},l)),e.style=sl(l))}const o=Ae(t)?1:i_(t)?128:mT(t)?64:ve(t)?4:ee(t)?2:0;return O_(t,e,n,s,i,o,r,!0)}function vT(t){return t?Km(t)||hl in t?Fe({},t):t:null}function kn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?wT(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&N_(a),ref:e&&e.ref?n&&i?G(i)?i.concat(sa(e)):[i,sa(e)]:sa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function x_(t=" ",e=0){return Re(wi,null,t,e)}function DF(t,e){const n=Re(mr,null,t);return n.staticCount=e,n}function MF(t="",e=!1){return e?(qn(),Xs(It,null,t)):Re(It,null,t)}function Lt(t){return t==null||typeof t=="boolean"?Re(It):G(t)?Re(Mt,null,t.slice()):typeof t=="object"?Wn(t):Re(wi,null,String(t))}function Wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function Th(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Th(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(hl in e)?e._ctx=wt:i===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ee(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),s&64?(n=16,e=[x_(e)]):n=8);t.children=e,t.shapeFlag|=n}function wT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=il([e.class,s.class]));else if(i==="style")e.style=sl([e.style,s.style]);else if(lo(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function yt(t,e,n,s=null){$t(t,e,7,[n,s])}const ET=w_();let bT=0;function TT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ET,r={uid:bT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new H0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:T_(s,i),emitsOptions:s_(s,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Rb.bind(null,r),t.ce&&t.ce(r),r}let Le=null;const ho=()=>Le||wt;let Ih,Ks,Bd="__VUE_INSTANCE_SETTERS__";(Ks=qc()[Bd])||(Ks=qc()[Bd]=[]),Ks.push(t=>Le=t),Ih=t=>{Ks.length>1?Ks.forEach(e=>e(t)):Ks[0](t)};const bi=t=>{Ih(t),t.scope.on()},Cs=()=>{Le&&Le.scope.off(),Ih(null)};function D_(t){return t.vnode.shapeFlag&4}let Ti=!1;function IT(t,e=!1){Ti=e;const{props:n,children:s}=t.vnode,i=D_(t);aT(t,n,i,e),uT(t,s);const r=i?CT(t,e):void 0;return Ti=!1,r}function CT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zm(new Proxy(t.ctx,Zb));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?RT(t):null;bi(t),Li();const r=Qn(s,t,0,[t.props,i]);if(Fi(),Cs(),km(r)){if(r.then(Cs,Cs),e)return r.then(o=>{tu(t,o,e)}).catch(o=>{Ui(o,t,0)});t.asyncDep=r}else tu(t,r,e)}else M_(t,e)}function tu(t,e,n){ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=Jm(e)),M_(t,n)}let Wd;function M_(t,e,n){const s=t.type;if(!t.render){if(!e&&Wd&&!s.render){const i=s.template||Eh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Fe(Fe({isCustomElement:r,delimiters:a},o),l);s.render=Wd(i,c)}}t.render=s.render||Jt}bi(t),Li(),eT(t),Fi(),Cs()}function ST(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Rt(t,"get","$attrs"),e[n]}}))}function RT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ST(t)},slots:t.slots,emit:t.emit,expose:e}}function fl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Jm(zm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gr)return gr[n](t)},has(e,n){return n in e||n in gr}}))}function nu(t,e=!0){return ee(t)?t.displayName||t.name:t.name||e&&t.__name}function kT(t){return ee(t)&&"__vccOpts"in t}const it=(t,e)=>bb(t,e,Ti);function Qt(t,e,n){const s=arguments.length;return s===2?ve(e)&&!G(e)?Ur(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ur(n)&&(n=[n]),Re(t,e,n))}const AT=Symbol.for("v-scx"),PT=()=>Tt(AT),L_="3.3.4",NT="http://www.w3.org/2000/svg",_s=typeof document<"u"?document:null,Vd=_s&&_s.createElement("template"),OT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?_s.createElementNS(NT,t):_s.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>_s.createTextNode(t),createComment:t=>_s.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_s.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Vd.innerHTML=s?`<svg>${t}</svg>`:t;const a=Vd.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function DT(t,e,n){const s=t.style,i=Ae(n);if(n&&!i){if(e&&!Ae(e))for(const r in e)n[r]==null&&su(s,r,"");for(const r in n)su(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const qd=/\s*!important$/;function su(t,e,n){if(G(n))n.forEach(s=>su(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=MT(t,e);qd.test(n)?t.setProperty(Mi(s),n.replace(qd,""),"important"):t[s]=n}}const Kd=["Webkit","Moz","ms"],ic={};function MT(t,e){const n=ic[e];if(n)return n;let s=pn(e);if(s!=="filter"&&s in t)return ic[e]=s;s=nl(s);for(let i=0;i<Kd.length;i++){const r=Kd[i]+s;if(r in t)return ic[e]=r}return e}const zd="http://www.w3.org/1999/xlink";function LT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zd,e.slice(6,e.length)):t.setAttributeNS(zd,e,n);else{const r=U0(e);n==null||r&&!Om(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function FT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Om(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wn(t,e,n,s){t.addEventListener(e,n,s)}function UT(t,e,n,s){t.removeEventListener(e,n,s)}function $T(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=HT(e);if(s){const c=r[e]=WT(s,i);wn(t,a,c,l)}else o&&(UT(t,a,o,l),r[e]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function HT(t){let e;if(Gd.test(t)){e={};let s;for(;s=t.match(Gd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mi(t.slice(2)),e]}let rc=0;const jT=Promise.resolve(),BT=()=>rc||(jT.then(()=>rc=0),rc=Date.now());function WT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(VT(s,n.value),e,5,[s])};return n.value=t,n.attached=BT(),n}function VT(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Yd=/^on[a-z]/,qT=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?xT(t,s,i):e==="style"?DT(t,n,s):lo(e)?ih(e)||$T(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KT(t,e,s,i))?FT(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),LT(t,e,s,i))};function KT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Yd.test(e)&&ee(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yd.test(e)&&Ae(n)?!1:e in t}const Hn="transition",Ji="animation",dl=(t,{slots:e})=>Qt(Bb,zT(t),e);dl.displayName="Transition";const F_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dl.props=Fe({},l_,F_);const fs=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xd=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function zT(t){const e={};for(const S in t)S in F_||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=GT(i),E=p&&p[0],T=p&&p[1],{onBeforeEnter:y,onEnter:m,onEnterCancelled:b,onLeave:v,onLeaveCancelled:k,onBeforeAppear:N=y,onAppear:L=m,onAppearCancelled:I=b}=e,$=(S,j,P)=>{ds(S,j?u:a),ds(S,j?c:o),P&&P()},q=(S,j)=>{S._isLeaving=!1,ds(S,h),ds(S,d),ds(S,f),j&&j()},x=S=>(j,P)=>{const le=S?L:m,Q=()=>$(j,S,P);fs(le,[j,Q]),Jd(()=>{ds(j,S?l:r),jn(j,S?u:a),Xd(le)||Qd(j,s,E,Q)})};return Fe(e,{onBeforeEnter(S){fs(y,[S]),jn(S,r),jn(S,o)},onBeforeAppear(S){fs(N,[S]),jn(S,l),jn(S,c)},onEnter:x(!1),onAppear:x(!0),onLeave(S,j){S._isLeaving=!0;const P=()=>q(S,j);jn(S,h),JT(),jn(S,f),Jd(()=>{S._isLeaving&&(ds(S,h),jn(S,d),Xd(v)||Qd(S,s,T,P))}),fs(v,[S,P])},onEnterCancelled(S){$(S,!1),fs(b,[S])},onAppearCancelled(S){$(S,!0),fs(I,[S])},onLeaveCancelled(S){q(S),fs(k,[S])}})}function GT(t){if(t==null)return null;if(ve(t))return[oc(t.enter),oc(t.leave)];{const e=oc(t);return[e,e]}}function oc(t){return Nm(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ds(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Jd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let YT=0;function Qd(t,e,n,s){const i=t._endId=++YT,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=XT(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),r()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function XT(t,e){const n=window.getComputedStyle(t),s=p=>(n[p]||"").split(", "),i=s(`${Hn}Delay`),r=s(`${Hn}Duration`),o=Zd(i,r),a=s(`${Ji}Delay`),l=s(`${Ji}Duration`),c=Zd(a,l);let u=null,h=0,f=0;e===Hn?o>0&&(u=Hn,h=o,f=r.length):e===Ji?c>0&&(u=Ji,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Hn:Ji:null,f=u?u===Hn?r.length:l.length:0);const d=u===Hn&&/\b(transform|all)(,|$)/.test(s(`${Hn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Zd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>ep(n)+ep(t[s])))}function ep(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function JT(){return document.body.offsetHeight}const is=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ri(e,n):e};function QT(t){t.target.composing=!0}function tp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const np={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=is(i);const r=s||i.props&&i.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ca(a)),t._assign(a)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",QT),wn(t,"compositionend",tp),wn(t,"change",tp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=is(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ca(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ZT={deep:!0,created(t,e,n){t._assign=is(n),wn(t,"change",()=>{const s=t._modelValue,i=Ii(t),r=t.checked,o=t._assign;if(G(s)){const a=ah(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(xi(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(U_(t,r))})},mounted:sp,beforeUpdate(t,e,n){t._assign=is(n),sp(t,e,n)}};function sp(t,{value:e,oldValue:n},s){t._modelValue=e,G(e)?t.checked=ah(e,s.props.value)>-1:xi(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Ps(e,U_(t,!0)))}const eI={created(t,{value:e},n){t.checked=Ps(e,n.props.value),t._assign=is(n),wn(t,"change",()=>{t._assign(Ii(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=is(s),e!==n&&(t.checked=Ps(e,s.props.value))}},tI={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=xi(e);wn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ca(Ii(o)):Ii(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=is(s)},mounted(t,{value:e}){ip(t,e)},beforeUpdate(t,e,n){t._assign=is(n)},updated(t,{value:e}){ip(t,e)}};function ip(t,e){const n=t.multiple;if(!(n&&!G(e)&&!xi(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Ii(r);if(n)G(e)?r.selected=ah(e,o)>-1:r.selected=e.has(o);else if(Ps(Ii(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ii(t){return"_value"in t?t._value:t.value}function U_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const LF={created(t,e,n){Wo(t,e,n,null,"created")},mounted(t,e,n){Wo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Wo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Wo(t,e,n,s,"updated")}};function nI(t,e){switch(t){case"SELECT":return tI;case"TEXTAREA":return np;default:switch(e){case"checkbox":return ZT;case"radio":return eI;default:return np}}}function Wo(t,e,n,s,i){const o=nI(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const sI=["ctrl","shift","alt","meta"],iI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>sI.some(n=>t[`${n}Key`]&&!e.includes(n))},FF=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=iI[e[i]];if(r&&r(n,e))return}return t(n,...s)},$_=Fe({patchProp:qT},OT);let yr,rp=!1;function rI(){return yr||(yr=dT($_))}function oI(){return yr=rp?yr:pT($_),rp=!0,yr}const aI=(...t)=>{const e=rI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=H_(s);if(!i)return;const r=e._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},lI=(...t)=>{const e=oI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=H_(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function H_(t){return Ae(t)?document.querySelector(t):t}const cI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,uI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,hI=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function fI(t,e){if(t!=="__proto__"&&!(t==="constructor"&&e&&typeof e=="object"&&"prototype"in e))return e}function dI(t,e={}){if(typeof t!="string")return t;const n=t.toLowerCase().trim();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!hI.test(t)){if(e.strict)throw new SyntaxError("Invalid JSON");return t}try{return cI.test(t)||uI.test(t)?JSON.parse(t,fI):JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}}const pI=/#/g,gI=/&/g,mI=/=/g,j_=/\+/g,_I=/%5e/gi,yI=/%60/gi,vI=/%7c/gi,wI=/%20/gi;function EI(t){return encodeURI(""+t).replace(vI,"|")}function iu(t){return EI(typeof t=="string"?t:JSON.stringify(t)).replace(j_,"%2B").replace(wI,"+").replace(pI,"%23").replace(gI,"%26").replace(yI,"`").replace(_I,"^")}function ac(t){return iu(t).replace(mI,"%3D")}function B_(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function bI(t){return B_(t.replace(j_," "))}function TI(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const i=B_(s[1]);if(i==="__proto__"||i==="constructor")continue;const r=bI(s[2]||"");typeof e[i]<"u"?Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]:e[i]=r}return e}function II(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ac(t)}=${iu(n)}`).join("&"):`${ac(t)}=${iu(e)}`:ac(t)}function CI(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>II(e,t[e])).join("&")}const SI=/^\w{2,}:([/\\]{1,2})/,RI=/^\w{2,}:([/\\]{2})?/,kI=/^([/\\]\s*){2,}[^/\\]/;function pl(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?SI.test(t):RI.test(t)||(e.acceptRelative?kI.test(t):!1)}const AI=/\/$|\/\?/;function ru(t="",e=!1){return e?AI.test(t):t.endsWith("/")}function W_(t="",e=!1){if(!e)return(ru(t)?t.slice(0,-1):t)||"/";if(!ru(t,!0))return t||"/";const[n,...s]=t.split("?");return(n.slice(0,-1)||"/")+(s.length>0?`?${s.join("?")}`:"")}function PI(t="",e=!1){if(!e)return t.endsWith("/")?t:t+"/";if(ru(t,!0))return t||"/";const[n,...s]=t.split("?");return n+"/"+(s.length>0?`?${s.join("?")}`:"")}function NI(t=""){return t.startsWith("/")}function OI(t=""){return(NI(t)?t.slice(1):t)||"/"}function xI(t,e){if(V_(e)||pl(t))return t;const n=W_(e);return t.startsWith(n)?t:gl(n,t)}function op(t,e){if(V_(e))return t;const n=W_(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function DI(t,e){const n=Ch(t),s={...TI(n.search),...e};return n.search=CI(s),LI(n)}function V_(t){return!t||t==="/"}function MI(t){return t&&t!=="/"}function gl(t,...e){let n=t||"";for(const s of e.filter(i=>MI(i)))n=n?PI(n)+OI(s):s;return n}function Ch(t="",e){if(!pl(t,{acceptRelative:!0}))return e?Ch(e+t):ap(t);const[n="",s,i=""]=(t.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[r="",o=""]=(i.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:l,hash:c}=ap(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:r,pathname:a,search:l,hash:c}}function ap(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function LI(t){const e=t.pathname+(t.search?(t.search.startsWith("?")?"":"?")+t.search:"")+t.hash;return t.protocol?t.protocol+"//"+(t.auth?t.auth+"@":"")+t.host+e:e}class FI extends Error{constructor(){super(...arguments),this.name="FetchError"}}function UI(t,e,n){let s="";e&&(s=e.message),t&&n?s=`${s} (${n.status} ${n.statusText} (${t.toString()}))`:t&&(s=`${s} (${t.toString()})`);const i=new FI(s);return Object.defineProperty(i,"request",{get(){return t}}),Object.defineProperty(i,"response",{get(){return n}}),Object.defineProperty(i,"data",{get(){return n&&n._data}}),Object.defineProperty(i,"status",{get(){return n&&n.status}}),Object.defineProperty(i,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(i,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(i,"statusMessage",{get(){return n&&n.statusText}}),i}const $I=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function lp(t="GET"){return $I.has(t.toUpperCase())}function HI(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const jI=new Set(["image/svg","application/xml","application/xhtml","application/html"]),BI=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function WI(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return BI.test(e)?"json":jI.has(e)||e.startsWith("text/")?"text":"blob"}const VI=new Set([408,409,425,429,500,502,503,504]);function q_(t){const{fetch:e,Headers:n}=t;function s(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){let c;typeof o.options.retry=="number"?c=o.options.retry:c=lp(o.options.method)?0:1;const u=o.response&&o.response.status||500;if(c>0&&VI.has(u))return i(o.request,{...o.options,retry:c-1})}const l=UI(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(l,i),l}const i=async function(a,l={}){const c={request:a,options:{...t.defaults,...l},response:void 0,error:void 0};c.options.onRequest&&await c.options.onRequest(c),typeof c.request=="string"&&(c.options.baseURL&&(c.request=xI(c.request,c.options.baseURL)),(c.options.query||c.options.params)&&(c.request=DI(c.request,{...c.options.params,...c.options.query})),c.options.body&&lp(c.options.method)&&HI(c.options.body)&&(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json"))),c.response=await e(c.request,c.options).catch(async h=>(c.error=h,c.options.onRequestError&&await c.options.onRequestError(c),s(c)));const u=(c.options.parseResponse?"json":c.options.responseType)||WI(c.response.headers.get("content-type")||"");if(u==="json"){const h=await c.response.text(),f=c.options.parseResponse||dI;c.response._data=f(h)}else u==="stream"?c.response._data=c.response.body:c.response._data=await c.response[u]();return c.options.onResponse&&await c.options.onResponse(c),c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await c.options.onResponseError(c),s(c)):c.response},r=function(a,l){return i(a,l).then(c=>c._data)};return r.raw=i,r.native=e,r.create=(o={})=>q_({...t,defaults:{...t.defaults,...o}}),r}const K_=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),qI=K_.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),KI=K_.Headers,zI=q_({fetch:qI,Headers:KI}),GI=zI,YI=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},_a=YI().app,XI=()=>_a.baseURL,JI=()=>_a.buildAssetsDir,QI=(...t)=>gl(z_(),JI(),...t),z_=(...t)=>{const e=_a.cdnURL||_a.baseURL;return t.length?gl(e,...t):e};globalThis.__buildAssetsURL=QI,globalThis.__publicAssetsURL=z_;function ou(t,e={},n){for(const s in t){const i=t[s],r=n?`${n}:${s}`:s;typeof i=="object"&&i!==null?ou(i,e,r):typeof i=="function"&&(e[r]=i)}return e}const ZI={run:t=>t()},eC=()=>ZI,G_=typeof console.createTask<"u"?console.createTask:eC;function tC(t,e){const n=e.shift(),s=G_(n);return t.reduce((i,r)=>i.then(()=>s.run(()=>r(...e))),Promise.resolve())}function nC(t,e){const n=e.shift(),s=G_(n);return Promise.all(t.map(i=>s.run(()=>i(...e))))}function lc(t,e){for(const n of[...t])n(e)}class sC{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const i=e;let r;for(;this._deprecatedHooks[e];)r=this._deprecatedHooks[e],e=r.to;if(r&&!s.allowDeprecated){let o=r.message;o||(o=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,i=(...r)=>(typeof s=="function"&&s(),s=void 0,i=void 0,n(...r));return s=this.hook(e,i),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const i of s)this.hook(e,i)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=ou(e),s=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of s.splice(0,s.length))i()}}removeHooks(e){const n=ou(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(tC,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(nC,e,...n)}callHookWith(e,n,...s){const i=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&lc(this._before,i);const r=e(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&i&&lc(this._after,i)}):(this._after&&i&&lc(this._after,i),r)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Y_(){return new sC}function iC(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let i;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?i=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const r=()=>{if(i&&e===void 0){const o=i.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=r();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>r(),set:(o,a)=>{a||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{s(o),e=o;try{return i?i.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;au.add(c);try{const u=i?i.run(o,a):a();return n||(e=void 0),await u}finally{au.delete(c)}}}}function rC(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=iC({...t,...s})),e[n],e[n]}}}const ya=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},cp="__unctx__",oC=ya[cp]||(ya[cp]=rC()),aC=(t,e={})=>oC.get(t,e),up="__unctx_async_handlers__",au=ya[up]||(ya[up]=new Set);function va(t){const e=[];for(const i of au){const r=i();r&&e.push(r)}const n=()=>{for(const i of e)i()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(i=>{throw n(),i})),[s,n]}const X_=aC("nuxt-app"),lC="__nuxt_plugin";function cC(t){let e=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.5.2"},get vue(){return n.vueApp.version}},payload:Ht({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:i=>dC(n,i),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=Y_(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,r)=>{const o="$"+i;Vo(n,o,r),Vo(n.vueApp.config.globalProperties,o,r)},Vo(n.vueApp,"$nuxt",n),Vo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",r=>{n.callHook("app:chunkError",{error:r.payload})});const i=n.hook("app:error",(...r)=>{console.error("[nuxt] error caught during app initialization",...r)});n.hook("app:mounted",i)}const s=Ht(n.payload.config);return n.provide("config",s),n}async function uC(t,e){if(typeof e!="function")return;const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}async function hC(t,e){var i;const n=[],s=[];for(const r of e){const o=uC(t,r);(i=r.meta)!=null&&i.parallel?n.push(o.catch(a=>s.push(a))):await o}if(await Promise.all(n),s.length)throw s[0]}function fC(t){const e=[];for(const n of t){if(typeof n!="function")continue;let s=n;n.length>1&&(s=i=>n(i,i.provide)),e.push(s)}return e.sort((n,s)=>{var i,r;return(((i=n.meta)==null?void 0:i.order)||wa.default)-(((r=s.meta)==null?void 0:r.order)||wa.default)}),e}const wa={pre:-20,default:0,post:20};function Dn(t,e){var s;if(typeof t=="function")return Dn({setup:t},e);const n=i=>{if(t.hooks&&i.hooks.addHooks(t.hooks),t.setup)return t.setup(i)};return n.meta={name:(e==null?void 0:e.name)||t.name||((s=t.setup)==null?void 0:s.name),parallel:t.parallel,order:(e==null?void 0:e.order)||t.order||wa[t.enforce||"default"]||wa.default},n[lC]=!0,n}function dC(t,e,n){const s=()=>n?e(...n):e();return X_.set(t),t.vueApp.runWithContext(s)}function et(){var e;let t;if(E_()&&(t=(e=ho())==null?void 0:e.appContext.app.$nuxt),t=t||X_.tryUse(),!t)throw new Error("[nuxt] instance unavailable");return t}function J_(){return et().$config}function Vo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}const pC="modulepreload",gC=function(t,e){return t.startsWith(".")?new URL(t,e).href:t},hp={},mC=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=gC(r,s),r in hp)return;hp[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":pC,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},vn=(...t)=>mC(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),_C=-1,yC=-2,vC=-3,wC=-4,EC=-5,bC=-6;function TC(t,e){return IC(JSON.parse(t),e)}function IC(t,e){if(typeof t=="number")return i(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function i(r,o=!1){if(r===_C)return;if(r===vC)return NaN;if(r===wC)return 1/0;if(r===EC)return-1/0;if(r===bC)return-0;if(o)throw new Error("Invalid input");if(r in s)return s[r];const a=n[r];if(!a||typeof a!="object")s[r]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return s[r]=c(i(a[1]));switch(l){case"Date":s[r]=new Date(a[1]);break;case"Set":const u=new Set;s[r]=u;for(let d=1;d<a.length;d+=1)u.add(i(a[d]));break;case"Map":const h=new Map;s[r]=h;for(let d=1;d<a.length;d+=2)h.set(i(a[d]),i(a[d+1]));break;case"RegExp":s[r]=new RegExp(a[1],a[2]);break;case"Object":s[r]=Object(a[1]);break;case"BigInt":s[r]=BigInt(a[1]);break;case"null":const f=Object.create(null);s[r]=f;for(let d=1;d<a.length;d+=2)f[a[d]]=i(a[d+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);s[r]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==yC&&(l[c]=i(u))}}else{const l={};s[r]=l;for(const c in a){const u=a[c];l[c]=i(u)}}return s[r]}return i(0)}function CC(t){return Array.isArray(t)?t:[t]}const Q_=["title","script","style","noscript"],Z_=["base","meta","link","style","script","noscript"],SC=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],RC=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],kC=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function ey(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function lu(t){return ey(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function AC(t){let e=9;for(const n of t)for(let s=0;s<n.length;)e=Math.imul(e^n.charCodeAt(s++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ty(t,e){const{props:n,tag:s}=t;if(RC.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];s==="meta"&&i.push("name","property","http-equiv");for(const r of i)if(typeof n[r]<"u"){const o=String(n[r]);return e&&!e(o)?!1:`${s}:${r}:${o}`}return!1}function fp(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function qo(t,e=!1,n){const{tag:s,$el:i}=t;i&&(Object.entries(s.props).forEach(([r,o])=>{o=String(o);const a=`attr:${r}`;if(r==="class"){if(!o)return;for(const l of o.split(" ")){const c=`${a}:${l}`;n&&n(t,c,()=>i.classList.remove(l)),i.classList.contains(l)||i.classList.add(l)}return}n&&!r.startsWith("data-h-")&&n(t,a,()=>i.removeAttribute(r)),(e||i.getAttribute(r)!==o)&&i.setAttribute(r,o)}),Q_.includes(s.tag)&&(s.textContent&&s.textContent!==i.textContent?i.textContent=s.textContent:s.innerHTML&&s.innerHTML!==i.innerHTML&&(i.innerHTML=s.innerHTML)))}let Qi=!1;async function PC(t,e={}){var f,d;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||t.resolvedOptions.document||window.document,i=(await t.resolveTags()).map(a);if(t.resolvedOptions.experimentalHashHydration&&(Qi=Qi||t._hash||!1,Qi)){const p=AC(i.map(E=>E.tag._h));if(Qi===p)return;Qi=p}const r=t._popSideEffectQueue();t.headEntries().map(p=>p._sde).forEach(p=>{Object.entries(p).forEach(([E,T])=>{r[E]=T})});const o=(p,E,T)=>{E=`${p.renderId}:${E}`,p.entry&&(p.entry._sde[E]=T),delete r[E]};function a(p){const E=t.headEntries().find(y=>y._i===p._e),T={renderId:p._d||lu(p),$el:null,shouldRender:!0,tag:p,entry:E,markSideEffect:(y,m)=>o(T,y,m)};return T}const l=[],c={body:[],head:[]},u=p=>{t._elMap[p.renderId]=p.$el,l.push(p),o(p,"el",()=>{var E;(E=p.$el)==null||E.remove(),delete t._elMap[p.renderId]})};for(const p of i){if(await t.hooks.callHook("dom:beforeRenderTag",p),!p.shouldRender)continue;const{tag:E}=p;if(E.tag==="title"){s.title=E.textContent||"",l.push(p);continue}if(E.tag==="htmlAttrs"||E.tag==="bodyAttrs"){p.$el=s[E.tag==="htmlAttrs"?"documentElement":"body"],qo(p,!1,o),l.push(p);continue}if(p.$el=t._elMap[p.renderId],!p.$el&&E.key&&(p.$el=s.querySelector(`${(f=E.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${E.tag}[data-h-${E._h}]`)),p.$el){p.tag._d&&qo(p),u(p);continue}c[(d=E.tagPosition)!=null&&d.startsWith("body")?"body":"head"].push(p)}const h={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(c).forEach(([p,E])=>{var y;if(!E.length)return;const T=(y=s==null?void 0:s[p])==null?void 0:y.children;if(T){for(const m of[...T].reverse()){const b=m.tagName.toLowerCase();if(!Z_.includes(b))continue;const v=m.getAttributeNames().reduce((I,$)=>({...I,[$]:m.getAttribute($)}),{}),k={tag:b,props:v};m.innerHTML&&(k.innerHTML=m.innerHTML);const N=lu(k);let L=E.findIndex(I=>(I==null?void 0:I.renderId)===N);if(L===-1){const I=ty(k);L=E.findIndex($=>($==null?void 0:$.tag._d)&&$.tag._d===I)}if(L!==-1){const I=E[L];I.$el=m,qo(I),u(I),delete E[L]}}E.forEach(m=>{const b=m.tag.tagPosition||"head";h[b]=h[b]||s.createDocumentFragment(),m.$el||(m.$el=s.createElement(m.tag.tag),qo(m,!0)),h[b].appendChild(m.$el),u(m)})}}),h.head&&s.head.appendChild(h.head),h.bodyOpen&&s.body.insertBefore(h.bodyOpen,s.body.firstChild),h.bodyClose&&s.body.appendChild(h.bodyClose);for(const p of l)await t.hooks.callHook("dom:renderTag",p);Object.values(r).forEach(p=>p())}let cc=null;async function NC(t,e={}){function n(){return cc=null,PC(t,e)}const s=e.delayFn||(i=>setTimeout(i,10));return cc=cc||new Promise(i=>s(()=>i(n())))}function OC(t){return{hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),NC(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})}}}}function xC(t){var e;return((e=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:e.getAttribute("content"))||!1}const dp={critical:2,high:9,low:12,base:-1,title:1,meta:10};function pp(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const e=t.tagPriority||t.tag;return e in dp?dp[e]:10}const DC=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function MC(){return{hooks:{"tags:resolve":t=>{const e=n=>{var s;return(s=t.tags.find(i=>i._d===n))==null?void 0:s._p};for(const{prefix:n,offset:s}of DC)for(const i of t.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(n))){const r=e(i.tagPriority.replace(n,""));typeof r<"u"&&(i._p=r+s)}t.tags.sort((n,s)=>n._p-s._p).sort((n,s)=>pp(n)-pp(s))}}}}function LC(){return{hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(i=>i.tag==="titleTemplate");const s=e.findIndex(i=>i.tag==="title");if(s!==-1&&n!==-1){const i=fp(e[n].textContent,e[s].textContent);i!==null?e[s].textContent=i||e[s].textContent:delete e[s]}else if(n!==-1){const i=fp(e[n].textContent);i!==null&&(e[n].textContent=i,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}}}function FC(){return{hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}}const UC=["link","style","script","noscript"];function $C(){return{hooks:{"tag:normalise":({tag:t,resolvedOptions:e})=>{e.experimentalHashHydration===!0&&(t._h=lu(t)),t.key&&UC.includes(t.tag)&&(t._h=ey(t.key),t.props[`data-h-${t._h}`]="")}}}}const gp=["script","link","bodyAttrs"];function HC(){const t=(e,n)=>{const s={},i={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?i[o]=a:s[o]=a});let r;return e==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof i.onload<"u"&&(r=s.src,delete s.src),{props:s,eventHandlers:i,delayedSrc:r}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(!gp.includes(n.tag)||!Object.entries(n.props).find(([s,i])=>s.startsWith("on")&&typeof i=="function")||(n.props=t("ssr",n).props),n))},"dom:beforeRenderTag":function(e){if(!gp.includes(e.tag.tag)||!Object.entries(e.tag.props).find(([r,o])=>r.startsWith("on")&&typeof o=="function"))return;const{props:n,eventHandlers:s,delayedSrc:i}=t("dom",e.tag);Object.keys(s).length&&(e.tag.props=n,e.tag._eventHandlers=s,e.tag._delayedSrc=i)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const s=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([i,r])=>{const o=`${e.tag._d||e.tag._p}:${i}`,a=i.slice(2).toLowerCase(),l=`data-h-${a}`;if(e.markSideEffect(o,()=>{}),n.hasAttribute(l))return;const c=r;n.setAttribute(l,""),s.addEventListener(a,c),e.entry&&(e.entry._sde[o]=()=>{s.removeEventListener(a,c),n.removeAttribute(l)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}}const jC=["templateParams","htmlAttrs","bodyAttrs"];function BC(){return{hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(s=>{t.props[s]&&(t.key=t.props[s],delete t.props[s])});const n=ty(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(s=>{const i=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,r=e[i];if(r){let a=s==null?void 0:s.tagDuplicateStrategy;if(!a&&jC.includes(s.tag)&&(a="merge"),a==="merge"){const l=r.props;["class","style"].forEach(c=>{s.props[c]&&l[c]&&(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),s.props[c]=`${l[c]} ${s.props[c]}`)}),e[i].props={...l,...s.props};return}else if(s._e===r._e){r._duped=r._duped||[],s._d=`${r._d}:${r._duped.length+1}`,r._duped.push(s);return}}const o=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(Z_.includes(s.tag)&&o===0){delete e[i];return}e[i]=s});const n=[];Object.values(e).forEach(s=>{const i=s._duped;delete s._duped,n.push(s),i&&n.push(...i)}),t.tags=n}}}}function Ko(t,e){function n(r){if(["s","pageTitle"].includes(r))return e.pageTitle;let o;return r.includes(".")?o=r.split(".").reduce((a,l)=>a&&a[l]||void 0,e):o=e[r],typeof o<"u"?o||"":!1}let s=t;try{s=decodeURI(t)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(r=>{const o=n(r.slice(1));typeof o=="string"&&(t=t.replace(new RegExp(`\\${r}(\\W|$)`,"g"),`${o}$1`).trim())}),e.separator&&(t.endsWith(e.separator)&&(t=t.slice(0,-e.separator.length).trim()),t.startsWith(e.separator)&&(t=t.slice(e.separator.length).trim()),t=t.replace(new RegExp(`\\${e.separator}\\s*\\${e.separator}`,"g"),e.separator)),t}function WC(){return{hooks:{"tags:resolve":t=>{var r;const{tags:e}=t,n=(r=e.find(o=>o.tag==="title"))==null?void 0:r.textContent,s=e.findIndex(o=>o.tag==="templateParams"),i=s!==-1?e[s].props:{};i.pageTitle=i.pageTitle||n||"";for(const o of e)if(["titleTemplate","title"].includes(o.tag)&&typeof o.textContent=="string")o.textContent=Ko(o.textContent,i);else if(o.tag==="meta"&&typeof o.props.content=="string")o.props.content=Ko(o.props.content,i);else if(o.tag==="link"&&typeof o.props.href=="string")o.props.href=Ko(o.props.href,i);else if(o.tag==="script"&&["application/json","application/ld+json"].includes(o.props.type)&&typeof o.innerHTML=="string")try{o.innerHTML=JSON.stringify(JSON.parse(o.innerHTML),(a,l)=>typeof l=="string"?Ko(l,i):l)}catch{}t.tags=e.filter(o=>o.tag!=="templateParams")}}}}const VC=typeof window<"u";let ny;function qC(t){return ny=t}function KC(){return ny}function cu(t,e){const n=[],s=e.resolveKeyData||(r=>r.key),i=e.resolveValueData||(r=>r.value);for(const[r,o]of Object.entries(t))n.push(...(Array.isArray(o)?o:[o]).map(a=>{const l={key:r,value:a},c=i(l);return typeof c=="object"?cu(c,e):Array.isArray(c)?c:{[typeof e.key=="function"?e.key(l):e.key]:s(l),[typeof e.value=="function"?e.value(l):e.value]:c}}).flat());return n}function sy(t,e){return Object.entries(t).map(([n,s])=>{if(typeof s=="object"&&(s=sy(s,e)),e.resolve){const i=e.resolve({key:n,value:s});if(i)return i}return typeof s=="number"&&(s=s.toString()),typeof s=="string"&&e.wrapValue&&(s=s.replace(new RegExp(e.wrapValue,"g"),`\\${e.wrapValue}`),s=`${e.wrapValue}${s}${e.wrapValue}`),`${n}${e.keyValueSeparator||""}${s}`}).join(e.entrySeparator||"")}const Sh={robots:{unpack:{keyValueSeparator:":"}},contentSecurityPolicy:{unpack:{keyValueSeparator:" ",entrySeparator:"; "},metaKey:"http-equiv"},fbAppId:{keyValue:"fb:app_id",metaKey:"property"},ogSiteName:{keyValue:"og:site_name"},msapplicationTileImage:{keyValue:"msapplication-TileImage"},msapplicationTileColor:{keyValue:"msapplication-TileColor"},msapplicationConfig:{keyValue:"msapplication-Config"},charset:{metaKey:"charset"},contentType:{metaKey:"http-equiv"},defaultStyle:{metaKey:"http-equiv"},xUaCompatible:{metaKey:"http-equiv"},refresh:{metaKey:"http-equiv"}},zC=["Image","Video","Audio"],GC=/^(og|twitter|fb)/,YC=/^(og|fb)/;function XC(t){var e;return YC.test(t)?"property":((e=Sh[t])==null?void 0:e.metaKey)||"name"}function JC(t){var e;return((e=Sh[t])==null?void 0:e.keyValue)||Rh(t)}function Rh(t){return t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),GC.test(t)&&(t=t.replace("secure-url","secure_url").replace(/-/g,":")),t}function uu(t){if(Array.isArray(t))return t.map(n=>uu(n));if(typeof t!="object"||Array.isArray(t))return t;const e={};for(const[n,s]of Object.entries(t))e[Rh(n)]=uu(s);return e}function UF(t){const e=[];zC.forEach(s=>{const i=`og:${s.toLowerCase()}`,r=`og${s}`,o=t[r];typeof o=="object"&&((Array.isArray(o)?o:[o]).forEach(a=>{if(!a)return;const l=cu(a,{key:"property",value:"content",resolveKeyData({key:c}){return Rh(`${i}${c!=="url"?`:${c}`:""}`)},resolveValueData({value:c}){return typeof c=="number"?c.toString():c}});e.push(...l.sort((c,u)=>c.property===i?-1:u.property===i?1:0))}),delete t[r])});const n=cu(t,{key({key:s}){return XC(s)},value({key:s}){return s==="charset"?"charset":"content"},resolveKeyData({key:s}){return JC(s)},resolveValueData({value:s,key:i}){return s===null?"_null":typeof s=="object"?QC(s,i):typeof s=="number"?s.toString():s}});return[...e,...n].filter(s=>typeof s.content>"u"||s.content!=="_null")}function QC(t,e){const n=Sh[e];return e==="refresh"?`${t.seconds};url=${t.url}`:sy(uu(t),{entrySeparator:", ",keyValueSeparator:"=",resolve({value:s,key:i}){if(s===null)return"";if(typeof s=="boolean")return`${i}`},...n==null?void 0:n.unpack})}async function ZC(t,e){const n={tag:t,props:{}};return t==="templateParams"?(n.props=e,n):["title","titleTemplate"].includes(t)?(n.textContent=e instanceof Promise?await e:e,n):typeof e=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(e)||e.startsWith("/"))?n.props.src=e:n.innerHTML=e,n):!1:(n.props=await tS(t,{...e}),n.props.children&&(n.props.innerHTML=n.props.children),delete n.props.children,Object.keys(n.props).filter(s=>kC.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||Q_.includes(n.tag))&&(n[s]=n.props[s]),delete n.props[s]}),["innerHTML","textContent"].forEach(s=>{if(n.tag==="script"&&typeof n[s]=="string"&&["application/ld+json","application/json"].includes(n.props.type))try{n[s]=JSON.parse(n[s])}catch{n[s]=""}typeof n[s]=="object"&&(n[s]=JSON.stringify(n[s]))}),n.props.class&&(n.props.class=eS(n.props.class)),n.props.content&&Array.isArray(n.props.content)?n.props.content.map(s=>({...n,props:{...n.props,content:s}})):n)}function eS(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function tS(t,e){for(const n of Object.keys(e)){const s=n.startsWith("data-");e[n]instanceof Promise&&(e[n]=await e[n]),String(e[n])==="true"?e[n]=s?"true":"":String(e[n])==="false"&&(s?e[n]="false":delete e[n])}return e}const nS=10;async function sS(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,s])=>typeof s<"u"&&SC.includes(n)).forEach(([n,s])=>{const i=CC(s);e.push(...i.map(r=>ZC(n,r)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,s)=>(n._e=t._i,n._p=(t._i<<nS)+s,n))}function iS(){return[BC(),MC(),WC(),LC(),$C(),HC(),FC()]}function rS(t={}){return[OC({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})]}function oS(t={}){const e=aS({...t,plugins:[...rS(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&e.resolvedOptions.document&&(e._hash=xC(e.resolvedOptions.document)),qC(e),e}function aS(t={}){let e=[],n={},s=0;const i=Y_();t!=null&&t.hooks&&i.addHooks(t.hooks),t.plugins=[...iS(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&i.addHooks(a.hooks)),t.document=t.document||(VC?document:void 0);const r=()=>i.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return i},use(a){a.hooks&&i.addHooks(a.hooks)},push(a,l){const c={_i:s++,input:a,_sde:{}};return l!=null&&l.mode&&(c._m=l==null?void 0:l.mode),l!=null&&l.transform&&(c._t=l==null?void 0:l.transform),e.push(c),r(),{dispose(){e=e.filter(u=>u._i!==c._i?!0:(n={...n,...u._sde||{}},u._sde={},r(),!1))},patch(u){e=e.map(h=>(h._i===c._i&&(c.input=h.input=u,r()),h))}}},async resolveTags(){const a={tags:[],entries:[...e]};await i.callHook("entries:resolve",a);for(const l of a.entries){const c=l._t||(u=>u);if(l.resolvedInput=c(l.resolvedInput||l.input),l.resolvedInput)for(const u of await sS(l)){const h={tag:u,entry:l,resolvedOptions:o.resolvedOptions};await i.callHook("tag:normalise",h),a.tags.push(h.tag)}}return await i.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return o.hooks.callHook("init",o),o}function lS(t){return typeof t=="function"?t():$e(t)}function Ea(t,e=""){if(t instanceof Promise)return t;const n=lS(t);return!t||!n?n:Array.isArray(n)?n.map(s=>Ea(s,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,i])=>s==="titleTemplate"||s.startsWith("on")?[s,$e(i)]:[s,Ea(i,s)])):n}const cS=L_.startsWith("3"),uS=typeof window<"u",iy="usehead";function kh(){return ho()&&Tt(iy)||KC()}function hS(t){return{install(n){cS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(iy,t))}}.install}function fS(t={}){const e=oS({...t,domDelayFn:n=>setTimeout(()=>js(()=>n()),10),plugins:[dS(),...(t==null?void 0:t.plugins)||[]]});return e.install=hS(e),e}function dS(){return{hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=Ea(e.input)}}}}function pS(t,e={}){const n=kh(),s=qe(!1),i=qe({});Ub(()=>{i.value=s.value?{}:Ea(t)});const r=n.push(i.value,e);return ci(i,a=>{r.patch(a)}),ho()&&(uo(()=>{r.dispose()}),f_(()=>{s.value=!0}),h_(()=>{s.value=!1})),r}function gS(t,e={}){return kh().push(t,e)}function mS(t,e={}){var s;const n=kh();if(n){const i=uS||!!((s=n.resolvedOptions)!=null&&s.document);return e.mode==="server"&&i||e.mode==="client"&&!i?void 0:i?pS(t,e):gS(t,e)}}const hu={name:"page",mode:"out-in"},_S={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},yS=!1,vS=!1,wS="__nuxt",ES=!0;async function bS(t){try{return ES?ry(await fetch(t).then(e=>e.text())):await vn(()=>import(t),[],import.meta.url).then(e=>e.default||e)}catch(e){console.warn("[nuxt] Cannot load payload ",t,e)}return null}let zo=null;async function TS(){if(zo)return zo;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=ry(t.textContent||""),n=t.dataset.src?await bS(t.dataset.src):void 0;return zo={...e,...n,...window.__NUXT__},zo}function ry(t){return TC(t,et()._payloadRevivers)}function IS(t,e){et()._payloadRevivers[t]=e}function uc(t){return t!==null&&typeof t=="object"}function fu(t,e,n=".",s){if(!uc(e))return fu(t,{},n,s);const i=Object.assign({},e);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const o=t[r];o!=null&&(s&&s(i,r,o,n)||(Array.isArray(o)&&Array.isArray(i[r])?i[r]=[...o,...i[r]]:uc(o)&&uc(i[r])?i[r]=fu(o,i[r],(n?`${n}.`:"")+r.toString(),s):i[r]=o))}return i}function CS(t){return(...e)=>e.reduce((n,s)=>fu(n,s,"",t),{})}const SS=CS();class du extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const e={message:this.message,statusCode:gu(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=oy(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}du.__h3_error__=!0;function pu(t){if(typeof t=="string")return new du(t);if(RS(t))return t;const e=new du(t.message??t.statusMessage,t.cause?{cause:t.cause}:void 0);if("stack"in t)try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=gu(t.statusCode,e.statusCode):t.status&&(e.statusCode=gu(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;oy(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function RS(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const kS=/[^\u0009\u0020-\u007E]/g;function oy(t=""){return t.replace(kS,"")}function gu(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}function AS(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,s]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const i="$s"+n,r=et(),o=Qm(r.payload.state,i);if(o.value===void 0&&s){const a=s();if(je(a))return r.payload.state[i]=a,a;o.value=a}return o}const fo=()=>{var t;return(t=et())==null?void 0:t.$router},ay=()=>E_()?Tt("_route",et()._route):et()._route,PS=t=>t,NS=()=>{try{if(et()._processingMiddleware)return!0}catch{return!0}return!1},$F=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:t.path||"/",s=(e==null?void 0:e.external)||pl(n,{acceptRelative:!0});if(s&&!(e!=null&&e.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(s&&Ch(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const i=NS();if(!s&&i)return t;const r=fo();return s?(e!=null&&e.replace?location.replace(n):location.href=n,Promise.resolve()):e!=null&&e.replace?r.replace(t):r.push(t)},ml=()=>Qm(et().payload,"error"),Qs=t=>{const e=Ah(t);try{const n=et(),s=ml();n.hooks.callHook("app:error",e),s.value=s.value||e}catch{throw e}return e},OS=async(t={})=>{const e=et(),n=ml();e.callHook("app:error:cleared",t),t.redirect&&await fo().replace(t.redirect),n.value=null},xS=t=>!!(t&&typeof t=="object"&&"__nuxt_error"in t),Ah=t=>{const e=pu(t);return e.__nuxt_error=!0,e},mp={NuxtError:t=>Ah(t),EmptyShallowRef:t=>xr(t==="_"?void 0:JSON.parse(t)),EmptyRef:t=>qe(t==="_"?void 0:JSON.parse(t)),ShallowRef:t=>xr(t),ShallowReactive:t=>Vm(t),Ref:t=>qe(t),Reactive:t=>Ht(t)},DS=Dn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const s in mp)IS(s,mp[s]);Object.assign(t.payload,([e,n]=va(()=>t.runWithContext(TS)),e=await e,n(),e)),window.__NUXT__=t.payload}},1),MS=Dn({name:"nuxt:global-components"}),LS=Dn({name:"nuxt:head",setup(t){const n=fS();n.push(_S),t.vueApp.use(n);{let s=!0;const i=()=>{s=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!s}),t.hooks.hook("page:start",()=>{s=!0}),t.hooks.hook("page:finish",i),t.hooks.hook("app:suspense:resolve",i)}}});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Js=typeof window<"u";function FS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function hc(t,e){const n={};for(const s in e){const i=e[s];n[s]=en(i)?i.map(t):t(i)}return n}const vr=()=>{},en=Array.isArray,US=/\/$/,$S=t=>t.replace(US,"");function fc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=WS(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function HS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _p(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jS(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ci(e.matched[s],n.matched[i])&&ly(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ci(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ly(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!BS(t[n],e[n]))return!1;return!0}function BS(t,e){return en(t)?yp(t,e):en(e)?yp(e,t):t===e}function yp(t,e){return en(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function WS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var $r;(function(t){t.pop="pop",t.push="push"})($r||($r={}));var wr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wr||(wr={}));function VS(t){if(!t)if(Js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$S(t)}const qS=/^[^#]+#/;function KS(t,e){return t.replace(qS,"#")+e}function zS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const _l=()=>({left:window.pageXOffset,top:window.pageYOffset});function GS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zS(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vp(t,e){return(history.state?history.state.position-e:-1)+t}const mu=new Map;function YS(t,e){mu.set(t,e)}function XS(t){const e=mu.get(t);return mu.delete(t),e}let JS=()=>location.protocol+"//"+location.host;function cy(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),_p(l,"")}return _p(n,t)+s+i}function QS(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const d=cy(t,location),p=n.value,E=e.value;let T=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}T=E?f.position-E.position:0}else s(d);i.forEach(y=>{y(n.value,p,{delta:T,type:$r.pop,direction:T?T>0?wr.forward:wr.back:wr.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const p=i.indexOf(f);p>-1&&i.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(me({},f.state,{scroll:_l()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function wp(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?_l():null}}function ZS(t){const{history:e,location:n}=window,s={value:cy(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:JS()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=me({},e.state,wp(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=me({},i.value,e.state,{forward:l,scroll:_l()});r(u.current,u,!0);const h=me({},wp(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function uy(t){t=VS(t);const e=ZS(t),n=QS(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=me({location:"",base:t,go:s,createHref:KS.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function eR(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),uy(t)}function tR(t){return typeof t=="string"||t&&typeof t=="object"}function hy(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fy=Symbol("");var Ep;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ep||(Ep={}));function Si(t,e){return me(new Error,{type:t,[fy]:!0},e)}function _n(t,e){return t instanceof Error&&fy in t&&(e==null||!!(t.type&e))}const bp="[^/]+?",nR={sensitive:!1,strict:!1,start:!0,end:!0},sR=/[.+*?^${}()[\]/\\]/g;function iR(t,e){const n=me({},nR,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(sR,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:E,optional:T,regexp:y}=f;r.push({name:p,repeatable:E,optional:T});const m=y||bp;if(m!==bp){d+=10;try{new RegExp(`(${m})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${p}" (${m}): `+v.message)}}let b=E?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;h||(b=T&&c.length<2?`(?:/${b})`:"/"+b),T&&(b+="?"),i+=b,d+=20,T&&(d+=-8),E&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:E,optional:T}=d,y=p in c?c[p]:"";if(en(y)&&!E)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const m=en(y)?y.join("/"):y;if(!m)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=m}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function rR(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function oR(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=rR(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Tp(s))return 1;if(Tp(i))return-1}return i.length-s.length}function Tp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aR={type:0,value:""},lR=/[a-zA-Z0-9_]/;function cR(t){if(!t)return[[]];if(t==="/")return[[aR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:lR.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function uR(t,e,n){const s=iR(cR(t.path),n),i=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function hR(t,e){const n=[],s=new Map;e=Sp({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const d=!f,p=fR(u);p.aliasOf=f&&f.record;const E=Sp(e,u),T=[p];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of b)T.push(me({},p,{components:f?f.record.components:p.components,path:v,aliasOf:f?f.record:p}))}let y,m;for(const b of T){const{path:v}=b;if(h&&v[0]!=="/"){const k=h.record.path,N=k[k.length-1]==="/"?"":"/";b.path=h.record.path+(v&&N+v)}if(y=uR(b,h,E),f?f.alias.push(y):(m=m||y,m!==y&&m.alias.push(y),d&&u.name&&!Cp(y)&&o(u.name)),p.children){const k=p.children;for(let N=0;N<k.length;N++)r(k[N],y,f&&f.children[N])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return m?()=>{o(m)}:vr}function o(u){if(hy(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&oR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!dy(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Cp(u)&&s.set(u.record.name,u)}function c(u,h){let f,d={},p,E;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Si(1,{location:u});E=f.record.name,d=me(Ip(h.params,f.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Ip(u.params,f.keys.map(m=>m.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(m=>m.re.test(p)),f&&(d=f.parse(p),E=f.record.name);else{if(f=h.name?s.get(h.name):n.find(m=>m.re.test(h.path)),!f)throw Si(1,{location:u,currentLocation:h});E=f.record.name,d=me({},h.params,u.params),p=f.stringify(d)}const T=[];let y=f;for(;y;)T.unshift(y.record),y=y.parent;return{name:E,path:p,params:d,matched:T,meta:pR(T)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ip(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function fR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function dR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Cp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pR(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Sp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function dy(t,e){return e.children.some(n=>n===t||dy(t,n))}const py=/#/g,gR=/&/g,mR=/\//g,_R=/=/g,yR=/\?/g,gy=/\+/g,vR=/%5B/g,wR=/%5D/g,my=/%5E/g,ER=/%60/g,_y=/%7B/g,bR=/%7C/g,yy=/%7D/g,TR=/%20/g;function Ph(t){return encodeURI(""+t).replace(bR,"|").replace(vR,"[").replace(wR,"]")}function IR(t){return Ph(t).replace(_y,"{").replace(yy,"}").replace(my,"^")}function _u(t){return Ph(t).replace(gy,"%2B").replace(TR,"+").replace(py,"%23").replace(gR,"%26").replace(ER,"`").replace(_y,"{").replace(yy,"}").replace(my,"^")}function CR(t){return _u(t).replace(_R,"%3D")}function SR(t){return Ph(t).replace(py,"%23").replace(yR,"%3F")}function RR(t){return t==null?"":SR(t).replace(mR,"%2F")}function ba(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function kR(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(gy," "),o=r.indexOf("="),a=ba(o<0?r:r.slice(0,o)),l=o<0?null:ba(r.slice(o+1));if(a in e){let c=e[a];en(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Rp(t){let e="";for(let n in t){const s=t[n];if(n=CR(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(s)?s.map(r=>r&&_u(r)):[s&&_u(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function AR(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=en(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const PR=Symbol(""),kp=Symbol(""),yl=Symbol(""),Nh=Symbol(""),yu=Symbol("");function Zi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Si(4,{from:n,to:e})):h instanceof Error?a(h):tR(h)?a(Si(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function dc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(NR(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Vn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=FS(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Vn(f,n,s,r,o)()}))}}return i}function NR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ap(t){const e=Tt(yl),n=Tt(Nh),s=it(()=>e.resolve($e(t.to))),i=it(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ci.bind(null,u));if(f>-1)return f;const d=Pp(l[c-2]);return c>1&&Pp(u)===d&&h[h.length-1].path!==d?h.findIndex(Ci.bind(null,l[c-2])):f}),r=it(()=>i.value>-1&&MR(n.params,s.value.params)),o=it(()=>i.value>-1&&i.value===n.matched.length-1&&ly(n.params,s.value.params));function a(l={}){return DR(l)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(vr):Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const OR=mn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ap,setup(t,{slots:e}){const n=Ht(Ap(t)),{options:s}=Tt(yl),i=it(()=>({[Np(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Np(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Qt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),xR=OR;function DR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function MR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!en(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Pp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Np=(t,e,n)=>t??e??n,LR=mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Tt(yu),i=it(()=>t.route||s.value),r=Tt(kp,0),o=it(()=>{let c=$e(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=it(()=>i.value.matched[o.value]);hi(kp,it(()=>o.value+1)),hi(PR,a),hi(yu,i);const l=qe();return ci(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ci(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Op(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,T=Qt(f,me({},p,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Op(n.default,{Component:T,route:c})||T}}});function Op(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vy=LR;function FR(t){const e=hR(t.routes,t),n=t.parseQuery||kR,s=t.stringifyQuery||Rp,i=t.history,r=Zi(),o=Zi(),a=Zi(),l=xr(sn);let c=sn;Js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hc.bind(null,R=>""+R),h=hc.bind(null,RR),f=hc.bind(null,ba);function d(R,F){let M,K;return hy(R)?(M=e.getRecordMatcher(R),K=F):K=R,e.addRoute(K,M)}function p(R){const F=e.getRecordMatcher(R);F&&e.removeRoute(F)}function E(){return e.getRoutes().map(R=>R.record)}function T(R){return!!e.getRecordMatcher(R)}function y(R,F){if(F=me({},F||l.value),typeof R=="string"){const w=fc(n,R,F.path),C=e.resolve({path:w.path},F),A=i.createHref(w.fullPath);return me(w,C,{params:f(C.params),hash:ba(w.hash),redirectedFrom:void 0,href:A})}let M;if("path"in R)M=me({},R,{path:fc(n,R.path,F.path).path});else{const w=me({},R.params);for(const C in w)w[C]==null&&delete w[C];M=me({},R,{params:h(w)}),F.params=h(F.params)}const K=e.resolve(M,F),ie=R.hash||"";K.params=u(f(K.params));const g=HS(s,me({},R,{hash:IR(ie),path:K.path})),_=i.createHref(g);return me({fullPath:g,hash:ie,query:s===Rp?AR(R.query):R.query||{}},K,{redirectedFrom:void 0,href:_})}function m(R){return typeof R=="string"?fc(n,R,l.value.path):me({},R)}function b(R,F){if(c!==R)return Si(8,{from:F,to:R})}function v(R){return L(R)}function k(R){return v(me(m(R),{replace:!0}))}function N(R){const F=R.matched[R.matched.length-1];if(F&&F.redirect){const{redirect:M}=F;let K=typeof M=="function"?M(R):M;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=m(K):{path:K},K.params={}),me({query:R.query,hash:R.hash,params:"path"in K?{}:R.params},K)}}function L(R,F){const M=c=y(R),K=l.value,ie=R.state,g=R.force,_=R.replace===!0,w=N(M);if(w)return L(me(m(w),{state:typeof w=="object"?me({},ie,w.state):ie,force:g,replace:_}),F||M);const C=M;C.redirectedFrom=F;let A;return!g&&jS(s,K,M)&&(A=Si(16,{to:C,from:K}),mt(K,K,!0,!1)),(A?Promise.resolve(A):q(C,K)).catch(O=>_n(O)?_n(O,2)?O:At(O):re(O,C,K)).then(O=>{if(O){if(_n(O,2))return L(me({replace:_},m(O.to),{state:typeof O.to=="object"?me({},ie,O.to.state):ie,force:g}),F||C)}else O=S(C,K,!0,_,ie);return x(C,K,O),O})}function I(R,F){const M=b(R,F);return M?Promise.reject(M):Promise.resolve()}function $(R){const F=Ue.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(R):R()}function q(R,F){let M;const[K,ie,g]=UR(R,F);M=dc(K.reverse(),"beforeRouteLeave",R,F);for(const w of K)w.leaveGuards.forEach(C=>{M.push(Vn(C,R,F))});const _=I.bind(null,R,F);return M.push(_),we(M).then(()=>{M=[];for(const w of r.list())M.push(Vn(w,R,F));return M.push(_),we(M)}).then(()=>{M=dc(ie,"beforeRouteUpdate",R,F);for(const w of ie)w.updateGuards.forEach(C=>{M.push(Vn(C,R,F))});return M.push(_),we(M)}).then(()=>{M=[];for(const w of R.matched)if(w.beforeEnter&&!F.matched.includes(w))if(en(w.beforeEnter))for(const C of w.beforeEnter)M.push(Vn(C,R,F));else M.push(Vn(w.beforeEnter,R,F));return M.push(_),we(M)}).then(()=>(R.matched.forEach(w=>w.enterCallbacks={}),M=dc(g,"beforeRouteEnter",R,F),M.push(_),we(M))).then(()=>{M=[];for(const w of o.list())M.push(Vn(w,R,F));return M.push(_),we(M)}).catch(w=>_n(w,8)?w:Promise.reject(w))}function x(R,F,M){for(const K of a.list())$(()=>K(R,F,M))}function S(R,F,M,K,ie){const g=b(R,F);if(g)return g;const _=F===sn,w=Js?history.state:{};M&&(K||_?i.replace(R.fullPath,me({scroll:_&&w&&w.scroll},ie)):i.push(R.fullPath,ie)),l.value=R,mt(R,F,M,_),At()}let j;function P(){j||(j=i.listen((R,F,M)=>{if(!ht.listening)return;const K=y(R),ie=N(K);if(ie){L(me(ie,{replace:!0}),K).catch(vr);return}c=K;const g=l.value;Js&&YS(vp(g.fullPath,M.delta),_l()),q(K,g).catch(_=>_n(_,12)?_:_n(_,2)?(L(_.to,K).then(w=>{_n(w,20)&&!M.delta&&M.type===$r.pop&&i.go(-1,!1)}).catch(vr),Promise.reject()):(M.delta&&i.go(-M.delta,!1),re(_,K,g))).then(_=>{_=_||S(K,g,!1),_&&(M.delta&&!_n(_,8)?i.go(-M.delta,!1):M.type===$r.pop&&_n(_,20)&&i.go(-1,!1)),x(K,g,_)}).catch(vr)}))}let le=Zi(),Q=Zi(),se;function re(R,F,M){At(R);const K=Q.list();return K.length?K.forEach(ie=>ie(R,F,M)):console.error(R),Promise.reject(R)}function Ge(){return se&&l.value!==sn?Promise.resolve():new Promise((R,F)=>{le.add([R,F])})}function At(R){return se||(se=!R,P(),le.list().forEach(([F,M])=>R?M(R):F()),le.reset()),R}function mt(R,F,M,K){const{scrollBehavior:ie}=t;if(!Js||!ie)return Promise.resolve();const g=!M&&XS(vp(R.fullPath,0))||(K||!M)&&history.state&&history.state.scroll||null;return js().then(()=>ie(R,F,g)).then(_=>_&&GS(_)).catch(_=>re(_,R,F))}const De=R=>i.go(R);let Ye;const Ue=new Set,ht={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:T,getRoutes:E,resolve:y,options:t,push:v,replace:k,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:Ge,install(R){const F=this;R.component("RouterLink",xR),R.component("RouterView",vy),R.config.globalProperties.$router=F,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(l)}),Js&&!Ye&&l.value===sn&&(Ye=!0,v(i.location).catch(ie=>{}));const M={};for(const ie in sn)M[ie]=it(()=>l.value[ie]);R.provide(yl,F),R.provide(Nh,Ht(M)),R.provide(yu,l);const K=R.unmount;Ue.add(R),R.unmount=function(){Ue.delete(R),Ue.size<1&&(c=sn,j&&j(),j=null,l.value=sn,Ye=!1,se=!1),K()}}};function we(R){return R.reduce((F,M)=>F.then(()=>$(M)),Promise.resolve())}return ht}function UR(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ci(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ci(c,l))||i.push(l))}return[n,s,i]}function HF(){return Tt(yl)}function $R(){return Tt(Nh)}const xp=[{name:"admin",path:"/admin",meta:{},alias:[],redirect:void 0,component:()=>vn(()=>import("./admin.8c82288e.js"),["./admin.8c82288e.js","./Loading.c9adccb2.js","./_plugin-vue_export-helper.c27b6911.js","./Loading.dfbf406d.css","./EmptyData.78cf7406.js","./iconify.55356581.js","./admin.b6c54360.css"],import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",meta:{},alias:[],redirect:void 0,component:()=>vn(()=>import("./index.7eb55331.js"),["./index.7eb55331.js","./FooterLayout.vue.30de2e27.js","./nuxt-link.75b5fa99.js","./Loading.c9adccb2.js","./_plugin-vue_export-helper.c27b6911.js","./Loading.dfbf406d.css","./iconify.55356581.js","./drone1.6dacb581.js","./index.f1cc4243.css"],import.meta.url).then(t=>t.default||t)},{name:"login",path:"/login",meta:{},alias:[],redirect:void 0,component:()=>vn(()=>import("./login.1553e3c5.js"),["./login.1553e3c5.js","./Loading.c9adccb2.js","./_plugin-vue_export-helper.c27b6911.js","./Loading.dfbf406d.css","./nuxt-link.75b5fa99.js","./drone1.6dacb581.js"],import.meta.url).then(t=>t.default||t)},{name:"progress",path:"/progress",meta:{},alias:[],redirect:void 0,component:()=>vn(()=>import("./progress.f75a733b.js"),["./progress.f75a733b.js","./FooterLayout.vue.30de2e27.js","./nuxt-link.75b5fa99.js","./Loading.c9adccb2.js","./_plugin-vue_export-helper.c27b6911.js","./Loading.dfbf406d.css","./iconify.55356581.js","./EmptyData.78cf7406.js"],import.meta.url).then(t=>t.default||t)},{name:"target",path:"/target",meta:{},alias:[],redirect:void 0,component:()=>vn(()=>import("./target.82a7dc25.js"),["./target.82a7dc25.js","./FooterLayout.vue.30de2e27.js","./nuxt-link.75b5fa99.js","./Loading.c9adccb2.js","./_plugin-vue_export-helper.c27b6911.js","./Loading.dfbf406d.css","./iconify.55356581.js"],import.meta.url).then(t=>t.default||t)},{name:"teams",path:"/teams",meta:{},alias:[],redirect:void 0,component:()=>vn(()=>import("./teams.a55f6376.js"),["./teams.a55f6376.js","./FooterLayout.vue.30de2e27.js","./nuxt-link.75b5fa99.js","./Loading.c9adccb2.js","./_plugin-vue_export-helper.c27b6911.js","./Loading.dfbf406d.css","./iconify.55356581.js","./teams.58861953.css"],import.meta.url).then(t=>t.default||t)}],HR={scrollBehavior(t,e,n){const s=et();let i=n||void 0;if(!i&&e&&t&&t.meta.scrollToTop!==!1&&jR(e,t)&&(i={left:0,top:0}),t.path===e.path){if(e.hash&&!t.hash)return{left:0,top:0};if(t.hash)return{el:t.hash,top:Dp(t.hash)}}const r=a=>!!(a.meta.pageTransition??hu),o=r(e)&&r(t)?"page:transition:finish":"page:finish";return new Promise(a=>{s.hooks.hookOnce(o,async()=>{await js(),t.hash&&(i={el:t.hash,top:Dp(t.hash)}),a(i)})})}};function Dp(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}function jR(t,e){const n=t.matched[0]===e.matched[0];return!!(!n||n&&JSON.stringify(t.params)!==JSON.stringify(e.params))}const BR={},_t={...BR,...HR},WR=PS(async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const s=et(),i=fo();if(([e,n]=va(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Ah({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`}),a=i.beforeResolve(c=>{if(a(),c===t){const u=i.afterEach(async()=>{u(),await s.runWithContext(()=>Qs(o)),window.history.pushState({},"",t.fullPath)});return!1}})}),VR=[WR],Er={};function qR(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){const a=i.includes(t.slice(r))?t.slice(r).length:1;let l=i.slice(a);return l[0]!=="/"&&(l="/"+l),op(l,"")}return op(n,t)+s+i}const KR=Dn({name:"nuxt:router",enforce:"pre",async setup(t){var E,T;let e,n,s=J_().app.baseURL;_t.hashMode&&!s.includes("#")&&(s+="#");const i=((E=_t.history)==null?void 0:E.call(_t,s))??(_t.hashMode?eR(s):uy(s)),r=((T=_t.routes)==null?void 0:T.call(_t,xp))??xp;let o;const a=qR(s,window.location),l=FR({..._t,scrollBehavior:(y,m,b)=>{var v;if(m===sn){o=b;return}return l.options.scrollBehavior=_t.scrollBehavior,(v=_t.scrollBehavior)==null?void 0:v.call(_t,y,sn,o||b)},history:i,routes:r});t.vueApp.use(l);const c=xr(l.currentRoute.value);l.afterEach((y,m)=>{c.value=m}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=xr(l.resolve(a)),h=()=>{u.value=l.currentRoute.value};t.hook("page:finish",h),l.afterEach((y,m)=>{var b,v,k,N;((v=(b=y.matched[0])==null?void 0:b.components)==null?void 0:v.default)===((N=(k=m.matched[0])==null?void 0:k.components)==null?void 0:N.default)&&h()});const f={};for(const y in u.value)f[y]=it(()=>u.value[y]);t._route=Ht(f),t._middleware=t._middleware||{global:[],named:{}};const d=ml();try{[e,n]=va(()=>l.isReady()),await e,n()}catch(y){[e,n]=va(()=>t.runWithContext(()=>Qs(y))),await e,n()}const p=AS("_layout");return l.beforeEach(async(y,m)=>{var b;y.meta=Ht(y.meta),t.isHydrating&&p.value&&!Ns(y.meta.layout)&&(y.meta.layout=p.value),t._processingMiddleware=!0;{const v=new Set([...VR,...t._middleware.global]);for(const k of y.matched){const N=k.meta.middleware;if(N)if(Array.isArray(N))for(const L of N)v.add(L);else v.add(N)}for(const k of v){const N=typeof k=="string"?t._middleware.named[k]||await((b=Er[k])==null?void 0:b.call(Er).then(I=>I.default||I)):k;if(!N)throw new Error(`Unknown route middleware: '${k}'.`);const L=await t.runWithContext(()=>N(y,m));if(!t.payload.serverRendered&&t.isHydrating&&(L===!1||L instanceof Error)){const I=L||pu({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>Qs(I)),!1}if(L||L===!1)return L}}}),l.onError(()=>{delete t._processingMiddleware}),l.afterEach(async(y,m,b)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(OS),y.matched.length===0&&await t.runWithContext(()=>Qs(pu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${y.fullPath}`})))}),t.hooks.hookOnce("app:created",async()=>{try{await l.replace({...l.resolve(a),name:void 0,force:!0}),l.options.scrollBehavior=_t.scrollBehavior}catch(y){await t.runWithContext(()=>Qs(y))}}),{provide:{router:l}}}},1),Zs={},zR=Dn({name:"nuxt:prefetch",setup(t){const e=fo();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var i;const s=(i=n==null?void 0:n.meta)==null?void 0:i.layout;s&&typeof Zs[s]=="function"&&await Zs[s]()})}),t.hooks.hook("link:prefetch",n=>{var o,a,l,c;if(pl(n))return;const s=e.resolve(n);if(!s)return;const i=(o=s==null?void 0:s.meta)==null?void 0:o.layout;let r=Array.isArray((a=s==null?void 0:s.meta)==null?void 0:a.middleware)?(l=s==null?void 0:s.meta)==null?void 0:l.middleware:[(c=s==null?void 0:s.meta)==null?void 0:c.middleware];r=r.filter(u=>typeof u=="string");for(const u of r)typeof Er[u]=="function"&&Er[u]();i&&typeof Zs[i]=="function"&&Zs[i]()})}});function GR(t={}){const e=t.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:et().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}function YR(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:i,onRegisteredSW:r,onRegisterError:o}=t;let a,l;const c=async(h=!0)=>{await l};async function u(){if("serviceWorker"in navigator){const{Workbox:h}=await vn(()=>import("./workbox-window.prod.es5.a7b12eab.js"),[],import.meta.url);a=new h("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),a.addEventListener("installed",f=>{f.isUpdate||s==null||s()}),a.register({immediate:e}).then(f=>{r?r("/sw.js",f):i==null||i(f)}).catch(f=>{o==null||o(f)})}}return l=u(),c}function XR(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:s,onRegistered:i,onRegisteredSW:r,onRegisterError:o}=t,a=qe(!1),l=qe(!1);return{updateServiceWorker:YR({immediate:e,onNeedRefresh(){a.value=!0,n==null||n()},onOfflineReady(){l.value=!0,s==null||s()},onRegistered:i,onRegisteredSW:r,onRegisterError:o}),offlineReady:l,needRefresh:a}}const pc={periodicSyncForUpdates:3600,installPrompt:"vite-pwa:hide-install"},JR=Dn(()=>{const t=qe(!1),e=qe(!1),n=qe(!1),s=qe(localStorage.getItem(pc.installPrompt)==="true"),i=navigator.userAgent,r=i.match(/iPhone|iPad|iPod/),a=!!(window.matchMedia("(display-mode: standalone)").matches||r&&!i.match(/Safari/));let l;const c=()=>l,u=(y,m,b)=>{setInterval(async()=>{if("connection"in navigator&&!navigator.onLine)return;const v=await fetch(y,{cache:"no-store",headers:{cache:"no-store","cache-control":"no-cache"}});(v==null?void 0:v.status)===200&&await m.update()},b)},{offlineReady:h,needRefresh:f,updateServiceWorker:d}=XR({immediate:!0,onRegisterError(){t.value=!0},onRegisteredSW(y,m){var v;l=m;const b=pc.periodicSyncForUpdates;((v=m==null?void 0:m.active)==null?void 0:v.state)==="activated"?(e.value=!0,u(y,m,b*1e3)):m!=null&&m.installing&&m.installing.addEventListener("statechange",k=>{const N=k.target;e.value=N.state==="activated",e.value&&u(y,m,b*1e3)})}}),p=async()=>{h.value=!1,f.value=!1};let E=()=>Promise.resolve(),T=()=>{};if(!s.value){let y;const m=b=>{b.preventDefault(),y=b,n.value=!0};window.addEventListener("beforeinstallprompt",m),window.addEventListener("appinstalled",()=>{y=void 0,n.value=!1}),T=()=>{y=void 0,n.value=!1,window.removeEventListener("beforeinstallprompt",m),s.value=!0,localStorage.setItem(pc.installPrompt,"true")},E=async()=>{if(!n.value||!y){n.value=!1;return}n.value=!1,await js(),y.prompt(),await y.userChoice}}return{provide:{pwa:Ht({isInstalled:a,showInstallPrompt:n,cancelInstall:T,install:E,swActivated:e,registrationError:t,offlineReady:h,needRefresh:f,updateServiceWorker:d,cancelPrompt:p,getSWRegistration:c})}}}),QR=Dn({name:"nuxt:chunk-reload",setup(t){const e=fo(),n=J_(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:i})=>{s.add(i)}),e.onError((i,r)=>{if(s.has(i)){const a="href"in r&&r.href.startsWith("#")?n.app.baseURL+r.href:gl(n.app.baseURL,r.fullPath);GR({path:a,persistState:!0})}})}});var ZR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ek(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wy={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(ZR,function(){return function(n){function s(r){if(i[r])return i[r].exports;var o=i[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}var i={};return s.m=n,s.c=i,s.p="dist/",s(0)}([function(n,s,i){function r(P){return P&&P.__esModule?P:{default:P}}var o=Object.assign||function(P){for(var le=1;le<arguments.length;le++){var Q=arguments[le];for(var se in Q)Object.prototype.hasOwnProperty.call(Q,se)&&(P[se]=Q[se])}return P},a=i(1),l=(r(a),i(6)),c=r(l),u=i(7),h=r(u),f=i(8),d=r(f),p=i(9),E=r(p),T=i(10),y=r(T),m=i(11),b=r(m),v=i(14),k=r(v),N=[],L=!1,I={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},$=function(){var P=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(P&&(L=!0),L)return N=(0,b.default)(N,I),(0,y.default)(N,I.once),N},q=function(){N=(0,k.default)(),$()},x=function(){N.forEach(function(P,le){P.node.removeAttribute("data-aos"),P.node.removeAttribute("data-aos-easing"),P.node.removeAttribute("data-aos-duration"),P.node.removeAttribute("data-aos-delay")})},S=function(P){return P===!0||P==="mobile"&&E.default.mobile()||P==="phone"&&E.default.phone()||P==="tablet"&&E.default.tablet()||typeof P=="function"&&P()===!0},j=function(P){I=o(I,P),N=(0,k.default)();var le=document.all&&!window.atob;return S(I.disable)||le?x():(I.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),I.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",I.easing),document.querySelector("body").setAttribute("data-aos-duration",I.duration),document.querySelector("body").setAttribute("data-aos-delay",I.delay),I.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?$(!0):I.startEvent==="load"?window.addEventListener(I.startEvent,function(){$(!0)}):document.addEventListener(I.startEvent,function(){$(!0)}),window.addEventListener("resize",(0,h.default)($,I.debounceDelay,!0)),window.addEventListener("orientationchange",(0,h.default)($,I.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,y.default)(N,I.once)},I.throttleDelay)),I.disableMutationObserver||d.default.ready("[data-aos]",q),N)};n.exports={init:j,refresh:$,refreshHard:q}},function(n,s){},,,,,function(n,s){(function(i){function r(S,j,P){function le(w){var C=Ue,A=ht;return Ue=ht=void 0,K=w,R=S.apply(A,C)}function Q(w){return K=w,F=setTimeout(Ge,j),ie?le(w):R}function se(w){var C=w-M,A=w-K,O=j-C;return g?q(O,we-A):O}function re(w){var C=w-M,A=w-K;return M===void 0||C>=j||C<0||g&&A>=we}function Ge(){var w=x();return re(w)?At(w):void(F=setTimeout(Ge,se(w)))}function At(w){return F=void 0,_&&Ue?le(w):(Ue=ht=void 0,R)}function mt(){F!==void 0&&clearTimeout(F),K=0,Ue=M=ht=F=void 0}function De(){return F===void 0?R:At(x())}function Ye(){var w=x(),C=re(w);if(Ue=arguments,ht=this,M=w,C){if(F===void 0)return Q(M);if(g)return F=setTimeout(Ge,j),le(M)}return F===void 0&&(F=setTimeout(Ge,j)),R}var Ue,ht,we,R,F,M,K=0,ie=!1,g=!1,_=!0;if(typeof S!="function")throw new TypeError(f);return j=u(j)||0,a(P)&&(ie=!!P.leading,g="maxWait"in P,we=g?$(u(P.maxWait)||0,j):we,_="trailing"in P?!!P.trailing:_),Ye.cancel=mt,Ye.flush=De,Ye}function o(S,j,P){var le=!0,Q=!0;if(typeof S!="function")throw new TypeError(f);return a(P)&&(le="leading"in P?!!P.leading:le,Q="trailing"in P?!!P.trailing:Q),r(S,j,{leading:le,maxWait:j,trailing:Q})}function a(S){var j=typeof S>"u"?"undefined":h(S);return!!S&&(j=="object"||j=="function")}function l(S){return!!S&&(typeof S>"u"?"undefined":h(S))=="object"}function c(S){return(typeof S>"u"?"undefined":h(S))=="symbol"||l(S)&&I.call(S)==p}function u(S){if(typeof S=="number")return S;if(c(S))return d;if(a(S)){var j=typeof S.valueOf=="function"?S.valueOf():S;S=a(j)?j+"":j}if(typeof S!="string")return S===0?S:+S;S=S.replace(E,"");var P=y.test(S);return P||m.test(S)?b(S.slice(2),P?2:8):T.test(S)?d:+S}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},f="Expected a function",d=NaN,p="[object Symbol]",E=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v=(typeof i>"u"?"undefined":h(i))=="object"&&i&&i.Object===Object&&i,k=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,N=v||k||Function("return this")(),L=Object.prototype,I=L.toString,$=Math.max,q=Math.min,x=function(){return N.Date.now()};n.exports=o}).call(s,function(){return this}())},function(n,s){(function(i){function r(x,S,j){function P(_){var w=Ye,C=Ue;return Ye=Ue=void 0,M=_,we=x.apply(C,w)}function le(_){return M=_,R=setTimeout(re,S),K?P(_):we}function Q(_){var w=_-F,C=_-M,A=S-w;return ie?$(A,ht-C):A}function se(_){var w=_-F,C=_-M;return F===void 0||w>=S||w<0||ie&&C>=ht}function re(){var _=q();return se(_)?Ge(_):void(R=setTimeout(re,Q(_)))}function Ge(_){return R=void 0,g&&Ye?P(_):(Ye=Ue=void 0,we)}function At(){R!==void 0&&clearTimeout(R),M=0,Ye=F=Ue=R=void 0}function mt(){return R===void 0?we:Ge(q())}function De(){var _=q(),w=se(_);if(Ye=arguments,Ue=this,F=_,w){if(R===void 0)return le(F);if(ie)return R=setTimeout(re,S),P(F)}return R===void 0&&(R=setTimeout(re,S)),we}var Ye,Ue,ht,we,R,F,M=0,K=!1,ie=!1,g=!0;if(typeof x!="function")throw new TypeError(h);return S=c(S)||0,o(j)&&(K=!!j.leading,ie="maxWait"in j,ht=ie?I(c(j.maxWait)||0,S):ht,g="trailing"in j?!!j.trailing:g),De.cancel=At,De.flush=mt,De}function o(x){var S=typeof x>"u"?"undefined":u(x);return!!x&&(S=="object"||S=="function")}function a(x){return!!x&&(typeof x>"u"?"undefined":u(x))=="object"}function l(x){return(typeof x>"u"?"undefined":u(x))=="symbol"||a(x)&&L.call(x)==d}function c(x){if(typeof x=="number")return x;if(l(x))return f;if(o(x)){var S=typeof x.valueOf=="function"?x.valueOf():x;x=o(S)?S+"":S}if(typeof x!="string")return x===0?x:+x;x=x.replace(p,"");var j=T.test(x);return j||y.test(x)?m(x.slice(2),j?2:8):E.test(x)?f:+x}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},h="Expected a function",f=NaN,d="[object Symbol]",p=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,y=/^0o[0-7]+$/i,m=parseInt,b=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,v=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,k=b||v||Function("return this")(),N=Object.prototype,L=N.toString,I=Math.max,$=Math.min,q=function(){return k.Date.now()};n.exports=r}).call(s,function(){return this}())},function(n,s){function i(u){var h=void 0,f=void 0;for(h=0;h<u.length;h+=1)if(f=u[h],f.dataset&&f.dataset.aos||f.children&&i(f.children))return!0;return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!r()}function a(u,h){var f=window.document,d=r(),p=new d(l);c=h,p.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(h){var f=Array.prototype.slice.call(h.addedNodes),d=Array.prototype.slice.call(h.removedNodes),p=f.concat(d);if(i(p))return c()})}Object.defineProperty(s,"__esModule",{value:!0});var c=function(){};s.default={isSupported:o,ready:a}},function(n,s){function i(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var o=function(){function f(d,p){for(var E=0;E<p.length;E++){var T=p[E];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(d,T.key,T)}}return function(d,p,E){return p&&f(d.prototype,p),E&&f(d,E),d}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=function(){function f(){i(this,f)}return o(f,[{key:"phone",value:function(){var d=r();return!(!a.test(d)&&!l.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=r();return!(!c.test(d)&&!u.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();s.default=new h},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var i=function(o,a,l){var c=o.node.getAttribute("data-aos-once");a>o.position?o.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&o.node.classList.remove("aos-animate")},r=function(o,a){var l=window.pageYOffset,c=window.innerHeight;o.forEach(function(u,h){i(u,c+l,a)})};s.default=r},function(n,s,i){function r(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(s,"__esModule",{value:!0});var o=i(12),a=r(o),l=function(c,u){return c.forEach(function(h,f){h.node.classList.add("aos-init"),h.position=(0,a.default)(h.node,u.offset)}),c};s.default=l},function(n,s,i){function r(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(s,"__esModule",{value:!0});var o=i(13),a=r(o),l=function(c,u){var h=0,f=0,d=window.innerHeight,p={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(p.offset&&!isNaN(p.offset)&&(f=parseInt(p.offset)),p.anchor&&document.querySelectorAll(p.anchor)&&(c=document.querySelectorAll(p.anchor)[0]),h=(0,a.default)(c).top,p.anchorPlacement){case"top-bottom":break;case"center-bottom":h+=c.offsetHeight/2;break;case"bottom-bottom":h+=c.offsetHeight;break;case"top-center":h+=d/2;break;case"bottom-center":h+=d/2+c.offsetHeight;break;case"center-center":h+=d/2+c.offsetHeight/2;break;case"top-top":h+=d;break;case"bottom-top":h+=c.offsetHeight+d;break;case"center-top":h+=c.offsetHeight/2+d}return p.anchorPlacement||p.offset||isNaN(u)||(f=u),h+f};s.default=l},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var i=function(r){for(var o=0,a=0;r&&!isNaN(r.offsetLeft)&&!isNaN(r.offsetTop);)o+=r.offsetLeft-(r.tagName!="BODY"?r.scrollLeft:0),a+=r.offsetTop-(r.tagName!="BODY"?r.scrollTop:0),r=r.offsetParent;return{top:a,left:o}};s.default=i},function(n,s){Object.defineProperty(s,"__esModule",{value:!0});var i=function(r){return r=r||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(r,function(o){return{node:o}})};s.default=i}])})})(wy);var tk=wy.exports;const nk=ek(tk);const sk=()=>{window.AOS=new nk.init};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(t,e){if(!t)throw $i(e)},$i=function(t){return new Error("Firebase Database ("+Ey.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ik=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(by(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ik(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new rk;const f=r<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ty=function(t){const e=by(t);return Oh.encodeByteArray(e,!0)},Ta=function(t){return Ty(t).replace(/\./g,"")},Ia=function(t){try{return Oh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){return Iy(void 0,t)}function Iy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ak(n)||(t[n]=Iy(t[n],e[n]));return t}function ak(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=()=>lk().__FIREBASE_DEFAULTS__,uk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ia(t[1]);return e&&JSON.parse(e)},vl=()=>{try{return ck()||uk()||hk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cy=t=>{var e,n;return(n=(e=vl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xh=t=>{const e=Cy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sy=()=>{var t;return(t=vl())===null||t===void 0?void 0:t.config},Ry=t=>{var e;return(e=vl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function fk(){var t;const e=(t=vl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function ky(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ay(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dk(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Py(){return Ey.NODE_ADMIN===!0}function Ny(){try{return typeof indexedDB=="object"}catch{return!1}}function Oy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function pk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="FirebaseError";class Wt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gk,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?mk(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,a,s)}}function mk(t,e){return t.replace(_k,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const _k=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Hr(Ia(r[0])||""),n=Hr(Ia(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},yk=function(t){const e=xy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vk=function(t){const e=xy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ca(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Mp(r)&&Mp(o)){if(!jr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Mp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ur(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function hr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ek(t,e){const n=new bk(t,e);return n.subscribe.bind(n)}class bk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Tk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=gc),i.error===void 0&&(i.error=gc),i.complete===void 0&&(i.complete=gc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gc(){}function Lh(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,U(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},El=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck=1e3,Sk=2,Rk=4*60*60*1e3,kk=.5;function Lp(t,e=Ck,n=Sk){const s=e*Math.pow(n,t),i=Math.round(kk*s*(Math.random()-.5)*2);return Math.min(Rk,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nk(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pk(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pk(t){return t===ps?void 0:t}function Nk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ak(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const xk={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Dk=pe.INFO,Mk={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Lk=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Mk[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class po{constructor(e){this.name=e,this._logLevel=Dk,this._logHandler=Lk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Fk=(t,e)=>e.some(n=>t instanceof n);let Fp,Up;function Uk(){return Fp||(Fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $k(){return Up||(Up=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dy=new WeakMap,wu=new WeakMap,My=new WeakMap,mc=new WeakMap,Fh=new WeakMap;function Hk(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Zn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dy.set(n,t)}).catch(()=>{}),Fh.set(e,t),e}function jk(t){if(wu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});wu.set(t,e)}let Eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||My.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bk(t){Eu=t(Eu)}function Wk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_c(this),e,...n);return My.set(s,e.sort?e.sort():[e]),Zn(s)}:$k().includes(t)?function(...e){return t.apply(_c(this),e),Zn(Dy.get(this))}:function(...e){return Zn(t.apply(_c(this),e))}}function Vk(t){return typeof t=="function"?Wk(t):(t instanceof IDBTransaction&&jk(t),Fk(t,Uk())?new Proxy(t,Eu):t)}function Zn(t){if(t instanceof IDBRequest)return Hk(t);if(mc.has(t))return mc.get(t);const e=Vk(t);return e!==t&&(mc.set(t,e),Fh.set(e,t)),e}const _c=t=>Fh.get(t);function qk(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Zn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Zn(o.result),l.oldVersion,l.newVersion,Zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Kk=["get","getKey","getAll","getAllKeys","count"],zk=["put","add","delete","clear"],yc=new Map;function $p(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=zk.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Kk.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return yc.set(e,r),r}Bk(t=>({...t,get:(e,n,s)=>$p(e,n)||t.get(e,n,s),has:(e,n)=>!!$p(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yk(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Yk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bu="@firebase/app",Hp="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new po("@firebase/app"),Xk="@firebase/app-compat",Jk="@firebase/analytics-compat",Qk="@firebase/analytics",Zk="@firebase/app-check-compat",eA="@firebase/app-check",tA="@firebase/auth",nA="@firebase/auth-compat",sA="@firebase/database",iA="@firebase/database-compat",rA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",cA="@firebase/messaging",uA="@firebase/messaging-compat",hA="@firebase/performance",fA="@firebase/performance-compat",dA="@firebase/remote-config",pA="@firebase/remote-config-compat",gA="@firebase/storage",mA="@firebase/storage-compat",_A="@firebase/firestore",yA="@firebase/firestore-compat",vA="firebase",wA="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="[DEFAULT]",EA={[bu]:"fire-core",[Xk]:"fire-core-compat",[Qk]:"fire-analytics",[Jk]:"fire-analytics-compat",[eA]:"fire-app-check",[Zk]:"fire-app-check-compat",[tA]:"fire-auth",[nA]:"fire-auth-compat",[sA]:"fire-rtdb",[iA]:"fire-rtdb-compat",[rA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[cA]:"fire-fcm",[uA]:"fire-fcm-compat",[hA]:"fire-perf",[fA]:"fire-perf-compat",[dA]:"fire-rc",[pA]:"fire-rc-compat",[gA]:"fire-gcs",[mA]:"fire-gcs-compat",[_A]:"fire-fst",[yA]:"fire-fst-compat","fire-js":"fire-js",[vA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Map,Iu=new Map;function bA(t,e){try{t.container.addComponent(e)}catch(n){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(Iu.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;Iu.set(e,t);for(const n of Sa.values())bA(n,t);return!0}function Ln(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},es=new Bs("app","Firebase",TA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=wA;function Ly(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Tu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw es.create("bad-app-name",{appName:String(i)});if(n||(n=Sy()),!n)throw es.create("no-options");const r=Sa.get(i);if(r){if(jr(n,r.options)&&jr(s,r.config))return r;throw es.create("duplicate-app",{appName:i})}const o=new Ok(i);for(const l of Iu.values())o.addComponent(l);const a=new IA(n,s,o);return Sa.set(i,a),a}function go(t=Tu){const e=Sa.get(t);if(!e&&t===Tu&&Sy())return Ly();if(!e)throw es.create("no-app",{appName:t});return e}function at(t,e,n){var s;let i=(s=EA[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(a.join(" "));return}jt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="firebase-heartbeat-database",SA=1,Br="firebase-heartbeat-store";let vc=null;function Fy(){return vc||(vc=qk(CA,SA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Br)}}}).catch(t=>{throw es.create("idb-open",{originalErrorMessage:t.message})})),vc}async function RA(t){try{return await(await Fy()).transaction(Br).objectStore(Br).get(Uy(t))}catch(e){if(e instanceof Wt)Os.warn(e.message);else{const n=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(n.message)}}}async function jp(t,e){try{const s=(await Fy()).transaction(Br,"readwrite");await s.objectStore(Br).put(e,Uy(t)),await s.done}catch(n){if(n instanceof Wt)Os.warn(n.message);else{const s=es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Os.warn(s.message)}}}function Uy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1024,AA=30*24*60*60*1e3;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=AA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bp(),{heartbeatsToSend:n,unsentEntries:s}=NA(this._heartbeatsCache.heartbeats),i=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bp(){return new Date().toISOString().substring(0,10)}function NA(t,e=kA){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class OA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ny()?Oy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wp(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){jt(new xt("platform-logger",e=>new Gk(e),"PRIVATE")),jt(new xt("heartbeat",e=>new PA(e),"PRIVATE")),at(bu,Hp,t),at(bu,Hp,"esm2017"),at("fire-js","")}xA("");var DA="firebase",MA="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(DA,MA,"app");function Uh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function $y(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LA=$y,Hy=new Bs("auth","Firebase",$y());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new po("@firebase/auth");function FA(t,...e){Ra.logLevel<=pe.WARN&&Ra.warn(`Auth (${as}): ${t}`,...e)}function ia(t,...e){Ra.logLevel<=pe.ERROR&&Ra.error(`Auth (${as}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw $h(t,...e)}function hn(t,...e){return $h(t,...e)}function UA(t,e,n){const s=Object.assign(Object.assign({},LA()),{[e]:n});return new Bs("auth","Firebase",s).create(e,{appName:t.name})}function $h(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Hy.create(t,...e)}function Z(t,e,...n){if(!t)throw $h(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ia(e),new Error(e)}function An(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $A(){return Vp()==="http:"||Vp()==="https:"}function Vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($A()||ky()||"connection"in navigator)?navigator.onLine:!0}function jA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=Mh()||Ay()}get(){return HA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new mo(3e4,6e4);function _o(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ji(t,e,n,s,i={}){return By(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Hi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),jy.fetch()(Wy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function By(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},BA),e);try{const i=new VA(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Go(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Go(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Go(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw UA(t,u,c);tn(t,u)}}catch(i){if(i instanceof Wt)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function bl(t,e,n,s,i={}){const r=await ji(t,e,n,s,i);return"mfaPendingCredential"in r&&tn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Wy(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Hh(t.config,i):`${t.config.apiScheme}://${i}`}class VA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(hn(this.auth,"network-request-failed")),WA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Go(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=hn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e){return ji(t,"POST","/v1/accounts:delete",e)}async function KA(t,e){return ji(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zA(t,e=!1){const n=Pe(t),s=await n.getIdToken(e),i=jh(s);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:br(wc(i.auth_time)),issuedAtTime:br(wc(i.iat)),expirationTime:br(wc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function wc(t){return Number(t)*1e3}function jh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ia(n);return i?JSON.parse(i):(ia("Failed to decode base64 JWT payload"),null)}catch(i){return ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function GA(t){const e=jh(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Wt&&YA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function YA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wr(t,KA(n,{idToken:s}));Z(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ZA(r.providerUserInfo):[],a=QA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Vy(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function JA(t){const e=Pe(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QA(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ZA(t){return t.map(e=>{var{providerId:n}=e,s=Uh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){const n=await By(t,{},async()=>{const s=Hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Wy(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await eP(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Vr;return s&&(Z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ss{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Uh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Vy(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zA(this,e)}reload(){return JA(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wr(this,qA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:v,isAnonymous:k,providerData:N,stsTokenManager:L}=n;Z(b&&L,e,"internal-error");const I=Vr.fromJSON(this.name,L);Z(typeof b=="string",e,"internal-error"),Bn(h,e.name),Bn(f,e.name),Z(typeof v=="boolean",e,"internal-error"),Z(typeof k=="boolean",e,"internal-error"),Bn(d,e.name),Bn(p,e.name),Bn(E,e.name),Bn(T,e.name),Bn(y,e.name),Bn(m,e.name);const $=new Ss({uid:b,auth:e,email:f,emailVerified:v,displayName:h,isAnonymous:k,photoURL:p,phoneNumber:d,tenantId:E,stsTokenManager:I,createdAt:y,lastLoginAt:m});return N&&Array.isArray(N)&&($.providerData=N.map(q=>Object.assign({},q))),T&&($._redirectEventId=T),$}static async _fromIdTokenResponse(e,n,s=!1){const i=new Vr;i.updateFromServerResponse(n);const r=new Ss({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ka(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=new Map;function Tn(t){An(t instanceof Function,"Expected a class definition");let e=qp.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qy.type="NONE";const Kp=qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ra(this.userKey,i.apiKey,r),this.fullPersistenceKey=ra("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fi(Tn(Kp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Tn(Kp);const o=ra(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ss._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ky(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Jy(e))return"Webos";if(Bh(e))return"Safari";if((e.includes("chrome/")||zy(e))&&!e.includes("edge/"))return"Chrome";if(Yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ky(t=ut()){return/firefox\//i.test(t)}function Bh(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zy(t=ut()){return/crios\//i.test(t)}function Gy(t=ut()){return/iemobile/i.test(t)}function Yy(t=ut()){return/android/i.test(t)}function Xy(t=ut()){return/blackberry/i.test(t)}function Jy(t=ut()){return/webos/i.test(t)}function Tl(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tP(t=ut()){var e;return Tl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nP(){return dk()&&document.documentMode===10}function Qy(t=ut()){return Tl(t)||Yy(t)||Jy(t)||Xy(t)||/windows phone/i.test(t)||Gy(t)}function sP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t,e=[]){let n;switch(t){case"Browser":n=zp(ut());break;case"Worker":n=`${zp(ut())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${s}`}async function ev(t,e){return ji(t,"GET","/v2/recaptchaConfig",_o(t,e))}function Gp(t){return t!==void 0&&t.enterprise!==void 0}class tv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=hn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",iP().appendChild(s)})}function rP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const oP="https://www.google.com/recaptcha/enterprise.js?render=",aP="recaptcha-enterprise",lP="NO_RECAPTCHA";class sv{constructor(e){this.type=aP,this.auth=yo(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ev(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new tv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Gp(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(lP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Gp(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nv(oP+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Yp(t,e,n,s=!1){const i=new sv(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xp(this),this.idTokenSubscription=new Xp(this),this.beforeStateQueue=new cP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}async initializeRecaptchaConfig(){const e=await ev(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new tv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new sv(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Z(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yo(t){return Pe(t)}class Xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ek(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t,e){const n=Ln(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(jr(r,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function fP(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function dP(t,e,n){const s=yo(t);Z(s._canInitEmulator,s,"emulator-config-failed"),Z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=iv(e),{host:o,port:a}=pP(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gP()}function iv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pP(t){const e=iv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Jp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Jp(o)}}}function Jp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function mP(t,e){return ji(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(t,e){return bl(t,"POST","/v1/accounts:signInWithPassword",_o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e){return bl(t,"POST","/v1/accounts:signInWithEmailLink",_o(t,e))}async function yP(t,e){return bl(t,"POST","/v1/accounts:signInWithEmailLink",_o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Wh{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new qr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Yp(e,s,"signInWithPassword");return Ec(e,i)}else return Ec(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Yp(e,s,"signInWithPassword");return Ec(e,r)}else return Promise.reject(i)});case"emailLink":return _P(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yP(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return bl(t,"POST","/v1/accounts:signInWithIdp",_o(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="http://localhost";class xs extends Wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Uh(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new xs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:vP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EP(t){const e=ur(hr(t)).link,n=e?ur(hr(e)).deep_link_id:null,s=ur(hr(t)).deep_link_id;return(s?ur(hr(s)).link:null)||s||n||e||t}class Vh{constructor(e){var n,s,i,r,o,a;const l=ur(hr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=wP((i=l.mode)!==null&&i!==void 0?i:null);Z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=EP(e);try{return new Vh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,n){return qr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vh.parseLink(n);return Z(s,"argument-error"),qr._fromEmailAndCode(e,s.code,s.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends vo{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return zn.credential(n,s)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends vo{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends vo{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ss._fromIdTokenResponse(e,s,i),o=Qp(s);return new ki({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Qp(s);return new ki({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Qp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Wt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Aa(e,n,s,i)}}function ov(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(t,r,e,s):r})}async function bP(t,e,n=!1){const s=await Wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Wr(t,ov(s,i,e,t),n);Z(r.idToken,s,"internal-error");const o=jh(r.idToken);Z(o,s,"internal-error");const{sub:a}=o;return Z(t.uid===a,s,"user-mismatch"),ki._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&tn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(t,e,n=!1){const s="signIn",i=await ov(t,s,e),r=await ki._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function IP(t,e){return av(yo(t),e)}function jF(t,e,n){return IP(Pe(t),Bi.credential(e,n))}function CP(t,e,n,s){return Pe(t).onIdTokenChanged(e,n,s)}function SP(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function BF(t,e,n,s){return Pe(t).onAuthStateChanged(e,n,s)}function WF(t){return Pe(t).signOut()}const Pa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pa,"1"),this.storage.removeItem(Pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){const t=ut();return Bh(t)||Tl(t)}const kP=1e3,AP=10;class cv extends lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=RP()&&sP(),this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);nP()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AP):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},kP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cv.type="LOCAL";const PP=cv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv extends lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uv.type="SESSION";const hv=uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Il(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await NP(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=qh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function xP(t){fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function DP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LP(){return fv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebaseLocalStorageDb",FP=1,Na="firebaseLocalStorage",pv="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cl(t,e){return t.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function UP(){const t=indexedDB.deleteDatabase(dv);return new wo(t).toPromise()}function Su(){const t=indexedDB.open(dv,FP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Na,{keyPath:pv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Na)?e(s):(s.close(),await UP(),e(await Su()))})})}async function Zp(t,e,n){const s=Cl(t,!0).put({[pv]:e,value:n});return new wo(s).toPromise()}async function $P(t,e){const n=Cl(t,!1).get(e),s=await new wo(n).toPromise();return s===void 0?null:s.value}function eg(t,e){const n=Cl(t,!0).delete(e);return new wo(n).toPromise()}const HP=800,jP=3;class gv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(LP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DP(),!this.activeServiceWorker)return;this.sender=new OP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Su();return await Zp(e,Pa,"1"),await eg(e,Pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$P(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Cl(i,!1).getAll();return new wo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gv.type="LOCAL";const BP=gv;new mo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e){return e?Tn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VP(t){return av(t.auth,new Kh(t),t.bypassAuthState)}function qP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),TP(n,new Kh(t),t.bypassAuthState)}async function KP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),bP(n,new Kh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VP;case"linkViaPopup":case"linkViaRedirect":return KP;case"reauthViaPopup":case"reauthViaRedirect":return qP;default:tn(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new mo(2e3,1e4);class ei extends mv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zP.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="pendingRedirect",oa=new Map;class YP extends mv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=oa.get(this.auth._key());if(!e){try{const s=await XP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}oa.set(this.auth._key(),e)}return this.bypassAuthState||oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XP(t,e){const n=ZP(e),s=QP(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function JP(t,e){oa.set(t._key(),e)}function QP(t){return Tn(t._redirectPersistence)}function ZP(t){return ra(GP,t.config.apiKey,t.name)}async function eN(t,e,n=!1){const s=yo(t),i=WP(s,e),o=await new YP(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=10*60*1e3;class nN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_v(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tN&&this.cachedEventUids.clear(),this.cachedEventUids.has(tg(e))}saveEventToCache(e){this.cachedEventUids.add(tg(e)),this.lastProcessedEventTime=Date.now()}}function tg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _v({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _v(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t,e={}){return ji(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oN=/^https?/;async function aN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iN(t);for(const n of e)try{if(lN(n))return}catch{}tn(t,"unauthorized-domain")}function lN(t){const e=Cu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!oN.test(n))return!1;if(rN.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=new mo(3e4,6e4);function ng(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uN(t){return new Promise((e,n)=>{var s,i,r;function o(){ng(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ng(),n(hn(t,"network-request-failed"))},timeout:cN.get()})}if(!((i=(s=fn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=fn().gapi)===null||r===void 0)&&r.load)o();else{const a=rP("iframefcb");return fn()[a]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},nv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw aa=null,e})}let aa=null;function hN(t){return aa=aa||uN(t),aa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new mo(5e3,15e3),dN="__/auth/iframe",pN="emulator/auth/iframe",gN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _N(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hh(e,pN):`https://${t.config.authDomain}/${dN}`,s={apiKey:e.apiKey,appName:t.name,v:as},i=mN.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Hi(s).slice(1)}`}async function yN(t){const e=await hN(t),n=fn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:_N(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gN,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),a=fn().setTimeout(()=>{r(o)},fN.get());function l(){fn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wN=500,EN=600,bN="_blank",TN="http://localhost";class sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IN(t,e,n,s=wN,i=EN){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vN),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ut().toLowerCase();n&&(a=zy(c)?bN:n),Ky(c)&&(e=e||TN,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(tP(c)&&a!=="_self")return CN(e||"",a),new sg(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new sg(h)}function CN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="__/auth/handler",RN="emulator/auth/handler",kN=encodeURIComponent("fac");async function ig(t,e,n,s,i,r){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:as,eventId:i};if(e instanceof rv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof vo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${kN}=${encodeURIComponent(l)}`:"";return`${AN(t)}?${Hi(a).slice(1)}${c}`}function AN({config:t}){return t.emulator?Hh(t,RN):`https://${t.authDomain}/${SN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="webStorageSupport";class PN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hv,this._completeRedirectFn=eN,this._overrideRedirectResult=JP}async _openPopup(e,n,s,i){var r;An((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ig(e,n,s,Cu(),i);return IN(e,o,qh())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ig(e,n,s,Cu(),i);return xP(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(An(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yN(e),s=new nN(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bc,{type:bc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[bc];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qy()||Bh()||Tl()}}const NN=PN;var rg="@firebase/auth",og="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DN(t){jt(new xt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zy(t)},c=new uP(s,i,r,l);return fP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),jt(new xt("auth-internal",e=>{const n=yo(e.getProvider("auth").getImmediate());return(s=>new ON(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(rg,og,xN(t)),at(rg,og,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=5*60,LN=Ry("authIdTokenMaxAge")||MN;let ag=null;const FN=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>LN)return;const i=n==null?void 0:n.token;ag!==i&&(ag=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function UN(t=go()){const e=Ln(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hP(t,{popupRedirectResolver:NN,persistence:[BP,PP,hv]}),s=Ry("authTokenSyncURL");if(s){const r=FN(s);SP(n,r,()=>r(n.currentUser)),CP(n,o=>r(o))}const i=Cy("auth");return i&&dP(n,`http://${i}`),n}DN("Browser");const lg="@firebase/database",cg="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yv="";function $N(t){yv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HN(e)}}catch{}return new jN},vs=vv("localStorage"),Ru=vv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new po("@firebase/database"),BN=function(){let t=1;return function(){return t++}}(),wv=function(t){const e=Ik(t),n=new wk;n.update(e);const s=n.digest();return Oh.encodeByteArray(s)},Eo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Eo.apply(null,s):typeof s=="object"?e+=Ve(s):e+=s,e+=" "}return e};let Rs=null,ug=!0;const WN=function(t,e){U(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(pi.logLevel=pe.VERBOSE,Rs=pi.log.bind(pi),e&&Ru.set("logging_enabled",!0)):typeof t=="function"?Rs=t:(Rs=null,Ru.remove("logging_enabled"))},nt=function(...t){if(ug===!0&&(ug=!1,Rs===null&&Ru.get("logging_enabled")===!0&&WN(!0)),Rs){const e=Eo.apply(null,t);Rs(e)}},bo=function(t){return function(...e){nt(t,...e)}},ku=function(...t){const e="FIREBASE INTERNAL ERROR: "+Eo(...t);pi.error(e)},Pn=function(...t){const e=`FIREBASE FATAL ERROR: ${Eo(...t)}`;throw pi.error(e),new Error(e)},Ct=function(...t){const e="FIREBASE WARNING: "+Eo(...t);pi.warn(e)},VN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ev=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ai="[MIN_NAME]",Ds="[MAX_NAME]",Wi=function(t,e){if(t===e)return 0;if(t===Ai||e===Ds)return-1;if(e===Ai||t===Ds)return 1;{const n=hg(t),s=hg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},KN=function(t,e){return t===e?0:t<e?-1:1},er=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},zh=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ve(e[s]),n+=":",n+=zh(t[e[s]]);return n+="}",n},bv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tv=function(t){U(!Ev(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},zN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function YN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const XN=new RegExp("^-?(0*)\\d{1,10}$"),JN=-2147483648,QN=2147483647,hg=function(t){if(XN.test(t)){const e=Number(t);if(e>=JN&&e<=QN)return e}return null},Vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ct(e)}}class gi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="5",Iv="v",Cv="s",Sv="r",Rv="f",kv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Av="ls",Pv="p",Au="ac",Nv="websocket",Ov="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function n1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dv(t,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===Nv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ov)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);n1(t)&&(n.ns=t.namespace);const i=[];return kt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.counters_={}}incrementCounter(e,n=1){Mn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ok(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc={},Ic={};function Yh(t){const e=t.toString();return Tc[e]||(Tc[e]=new s1),Tc[e]}function i1(t,e){const n=t.toString();return Ic[n]||(Ic[n]=e()),Ic[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Vi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="start",o1="close",a1="pLPCommand",l1="pRTLPCB",Mv="id",Lv="pw",Fv="ser",c1="cb",u1="seg",h1="ts",f1="d",d1="dframe",Uv=1870,$v=30,p1=Uv-$v,g1=25e3,m1=3e4;class ti{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bo(e),this.stats_=Yh(n),this.urlFn=l=>(this.appCheckToken&&(l[Au]=this.appCheckToken),Dv(n,Ov,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new r1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(m1)),qN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xh((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fg)this.id=a,this.password=l;else if(o===o1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[fg]="t",s[Fv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[c1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Iv]=Gh,this.transportSessionId&&(s[Cv]=this.transportSessionId),this.lastSessionId&&(s[Av]=this.lastSessionId),this.applicationId&&(s[Pv]=this.applicationId),this.appCheckToken&&(s[Au]=this.appCheckToken),typeof location<"u"&&location.hostname&&kv.test(location.hostname)&&(s[Sv]=Rv);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zN()&&!GN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ty(n),i=bv(s,p1);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[d1]="t",s[Mv]=e,s[Lv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xh{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=BN(),window[a1+this.uniqueCallbackIdentifier]=e,window[l1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){nt("frame writing exception"),a.stack&&nt(a.stack),nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mv]=this.myID,e[Lv]=this.myPW,e[Fv]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$v+s.length<=Uv;){const o=this.pendingSegs.shift();s=s+"&"+u1+i+"="+o.seg+"&"+h1+i+"="+o.ts+"&"+f1+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(g1)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=16384,y1=45e3;let Oa=null;typeof MozWebSocket<"u"?Oa=MozWebSocket:typeof WebSocket<"u"&&(Oa=WebSocket);class Gt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bo(this.connId),this.stats_=Yh(n),this.connURL=Gt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Iv]=Gh,typeof location<"u"&&location.hostname&&kv.test(location.hostname)&&(o[Sv]=Rv),n&&(o[Cv]=n),s&&(o[Av]=s),i&&(o[Au]=i),r&&(o[Pv]=r),Dv(e,Nv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vs.set("previous_websocket_failure",!0);try{let s;Py(),this.mySock=new Oa(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Oa!==null&&!Gt.forceDisallow_}static previouslyFailed(){return vs.isInMemoryStorage||vs.get("previous_websocket_failure")===!0}markConnectionHealthy(){vs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Hr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=bv(n,_1);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(y1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ti,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gt&&Gt.isAvailable();let s=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||Ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Gt];else{const i=this.transports_=[];for(const r of Kr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Kr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=6e4,w1=5e3,E1=10*1024,b1=100*1024,Cc="t",dg="d",T1="s",pg="r",I1="e",gg="o",mg="a",_g="n",yg="p",C1="h";class S1{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bo("c:"+this.id+":"),this.transportManager_=new Kr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Tr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>b1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>E1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cc in e){const n=e[Cc];n===mg?this.upgradeIfSecondaryHealthy_():n===pg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=er("t",e),s=er("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_g,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=er("t",e),s=er("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=er(Cc,e);if(dg in e){const s=e[dg];if(n===C1){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_g){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===T1?this.onConnectionShutdown_(s):n===pg?this.onReset_(s):n===I1?ku("Server Error: "+s):n===gg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ku("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gh!==s&&Ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Tr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(v1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(w1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends jv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xa}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=32,wg=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Ee("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rs(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function Bv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function R1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Wv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function He(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ee(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Et(t,e){const n=oe(t),s=oe(e);if(n===null)return e;if(n===s)return Et(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Jh(t,e){if(rs(t)!==rs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Yt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(rs(t)>rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class k1{constructor(e,n){this.errorPrefix_=n,this.parts_=Wv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=El(this.parts_[s]);qv(this)}}function A1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=El(e),qv(t)}function P1(t){const e=t.parts_.pop();t.byteLength_-=El(e),t.parts_.length>0&&(t.byteLength_-=1)}function qv(t){if(t.byteLength_>wg)throw new Error(t.errorPrefix_+"has a key path longer than "+wg+" bytes ("+t.byteLength_+").");if(t.parts_.length>vg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vg+") or object contains a cycle "+gs(t))}function gs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends jv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Qh}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=1e3,N1=60*5*1e3,Eg=30*1e3,O1=1.3,x1=3e4,D1="server_kill",bg=3;class Sn extends Hv{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Sn.nextPersistentConnectionId_++,this.log_=bo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=tr,this.maxReconnectDelay_=N1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Py())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ve(r)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new wl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Sn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mn(e,"w")){const s=Ri(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Eg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yk(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ku("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>x1&&(this.reconnectDelay_=tr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*O1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){U(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new S1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{Ct(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(D1)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ct(h),l())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vu(this.interruptReasons_)&&(this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>zh(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bg&&(this.reconnectDelay_=Eg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yv.replace(/\./g,"-")]=1,Mh()?e["framework.cordova"]=1:Ay()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xa.getInstance().currentlyOnline();return vu(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae(Ai,e),i=new ae(Ai,n);return this.compare(s,i)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;class Kv extends Sl{static get __EMPTY_NODE(){return Yo}static set __EMPTY_NODE(e){Yo=e}compare(e,n){return Wi(e.name,n.name)}isDefinedOn(e){throw $i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Ds,Yo)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Yo)}toString(){return".key"}}const mi=new Kv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??We.RED,this.left=i??bt.EMPTY_NODE,this.right=r??bt.EMPTY_NODE}copy(e,n,s,i,r){return new We(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return bt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class M1{copy(e,n,s,i,r){return this}insert(e,n,s){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xo(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new M1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e){return Wi(t.name,e.name)}function Zh(t,e){return Wi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu;function F1(t){Pu=t}const zv=function(t){return typeof t=="number"?"number:"+Tv(t):"string:"+t},Gv=function(t){if(t.isLeafNode()){const e=t.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mn(e,".sv"),"Priority must be a string or number.")}else U(t===Pu||t.isEmpty(),"priority of unexpected type.");U(t===Pu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tg;class Be{constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gv(this.priorityNode_)}static set __childrenNodeConstructor(e){Tg=e}static get __childrenNodeConstructor(){return Tg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:oe(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tv(this.value_):e+=this.value_,this.lazyHash_=wv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),r=Be.VALUE_TYPE_ORDER.indexOf(s);return U(i>=0,"Unknown leaf type: "+n),U(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yv,Xv;function U1(t){Yv=t}function $1(t){Xv=t}class H1 extends Sl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Wi(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Ds,new Be("[PRIORITY-POST]",Xv))}makePost(e,n){const s=Yv(e);return new ae(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Oe=new H1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=Math.log(2);class B1{constructor(e){const n=r=>parseInt(Math.log(r)/j1,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Da=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new We(f,h.node,We.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=i(l,d),E=i(d+1,c);return h=t[d],f=n?n(h):h,new We(f,h.node,We.BLACK,p,E)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,E){const T=h-p,y=h;h-=p;const m=i(T+1,y),b=t[T],v=n?n(b):b;d(new We(v,b.node,E,null,m))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const E=l.nextBitIsOne(),T=Math.pow(2,l.count-(p+1));E?f(T,We.BLACK):(f(T,We.BLACK),f(T,We.RED))}return u},o=new B1(t.length),a=r(o);return new bt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;const zs={};class In{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return U(zs&&Oe,"ChildrenNode.ts has not been loaded"),Sc=Sc||new In({".priority":zs},{".priority":Oe}),Sc}get(e){const n=Ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return Mn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ae.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Da(s,e.getCompare()):a=zs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new In(u,c)}addToIndexes(e,n){const s=Ca(this.indexes_,(i,r)=>{const o=Ri(this.indexSet_,r);if(U(o,"Missing index implementation for "+r),i===zs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Da(a,o.getCompare())}else return zs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new In(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ca(this.indexes_,i=>{if(i===zs)return i;{const r=n.get(e.name);return r?i.remove(new ae(e.name,r)):i}});return new In(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;class J{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Gv(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return nr||(nr=new J(new bt(Zh),null,In.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nr}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?nr:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?nr:this.priorityNode_;return new J(i,o,r)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{U(oe(e)!==".priority"||rs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),s++,r&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zv(this.getPriority().val())+":"),this.forEachChild(Oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ae(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===To?-1:0}withIndex(e){if(e===mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Oe),i=n.getIterator(Oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mi?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W1 extends J{constructor(){super(new bt(Zh),J.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const To=new W1;Object.defineProperties(ae,{MIN:{value:new ae(Ai,J.EMPTY_NODE)},MAX:{value:new ae(Ds,To)}});Kv.__EMPTY_NODE=J.EMPTY_NODE;Be.__childrenNodeConstructor=J;F1(To);$1(To);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=!0;function Je(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,Je(e))}if(!(t instanceof Array)&&V1){const n=[];let s=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Je(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return J.EMPTY_NODE;const r=Da(n,L1,o=>o.name,Zh);if(s){const o=Da(n,Oe.getCompare());return new J(r,Je(e),new In({".priority":o},{".priority":Oe}))}else return new J(r,Je(e),In.Default)}else{let n=J.EMPTY_NODE;return kt(t,(s,i)=>{if(Mn(t,s)&&s.substring(0,1)!=="."){const r=Je(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Je(e))}}U1(Je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1 extends Sl{constructor(e){super(),this.indexPath_=e,U(!ce(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Wi(e.name,n.name):r}makePost(e,n){const s=Je(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,To);return new ae(Ds,e)}toString(){return Wv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1 extends Sl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Wi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=Je(e);return new ae(n,s)}toString(){return".value"}}const z1=new K1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){return{type:"value",snapshotNode:t}}function Pi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Gr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function G1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(zr(n,a)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Pi(n,s)):o.trackChildChange(Gr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(zr(i,r))}),n.isLeafNode()||n.forEachChild(Oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Gr(i,r,o))}else s.trackChildChange(Pi(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.indexedFilter_=new ef(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Yr.getStartPost_(e),this.endPost_=Yr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ae(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const r=this;return n.forEachChild(Oe,(o,a)=>{r.matches(new ae(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Yr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ae(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const a=e;U(a.numChildren()===this.limit_,"");const l=new ae(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,l);if(u&&!s.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(Gr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(zr(n,h));const E=a.updateImmediateChild(n,J.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Pi(f.name,f.node)),E.updateImmediateChild(f.name,f.node)):E}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(zr(c.name,c.node)),r.trackChildChange(Pi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ai}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ds}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new tf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function X1(t){return t.loadsAllData()?new ef(t.getIndex()):t.hasLimit()?new Y1(t):new Yr(t)}function Ig(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===z1?n="$value":t.index_===mi?n="$key":(U(t.index_ instanceof q1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ve(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ve(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ve(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Hv{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=bo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ma.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ig(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ri(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ma.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ig(e._queryParams),s=e._path.toString(),i=new wl;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hr(a.responseText)}catch{Ct("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ct("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(){return{value:null,children:new Map}}function Qv(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=oe(e);t.children.has(s)||t.children.set(s,La());const i=t.children.get(s);e=Te(e),Qv(i,e,n)}}function Nu(t,e,n){t.value!==null?n(e,t.value):Q1(t,(s,i)=>{const r=new Ee(e.toString()+"/"+s);Nu(i,r,n)})}function Q1(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&kt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=10*1e3,eO=30*1e3,tO=5*60*1e3;class nO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Z1(e);const s=Sg+(eO-Sg)*Math.random();Tr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;kt(e,(i,r)=>{r>0&&Mn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Tr(this.reportStats_.bind(this),Math.floor(Math.random()*2*tO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function Zv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xt.ACK_USER_WRITE,this.source=Zv()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Fa(ge(),n,this.revert)}}else return U(oe(this.path)===e,"operationForChild called for unrelated child."),new Fa(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Xr(this.source,ge()):new Xr(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xt.OVERWRITE}operationForChild(e){return ce(this.path)?new Ms(this.source,ge(),this.snap.getImmediateChild(e)):new Ms(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xt.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Ms(this.source,ge(),n.value):new Jr(this.source,ge(),n)}else return U(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jr(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iO(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(G1(o.childName,o.snapshotNode))}),sr(t,i,"child_removed",e,s,n),sr(t,i,"child_added",e,s,n),sr(t,i,"child_moved",r,s,n),sr(t,i,"child_changed",e,s,n),sr(t,i,"value",e,s,n),i}function sr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>oO(t,a,l)),o.forEach(a=>{const l=rO(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function rO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function oO(t,e,n){if(e.childName==null||n.childName==null)throw $i("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),i=new ae(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t,e){return{eventCache:t,serverCache:e}}function Ir(t,e,n,s){return Rl(new Ls(e,n,s),t.serverCache)}function ew(t,e,n,s){return Rl(t.eventCache,new Ls(e,n,s))}function Ou(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc;const aO=()=>(Rc||(Rc=new bt(KN)),Rc);class Ie{constructor(e,n=aO()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return kt(e,(s,i)=>{n=n.set(new Ee(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(ce(e))return null;{const s=oe(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Te(e),n);return r!=null?{path:He(new Ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(Te(e)):new Ie(null)}}set(e,n){if(ce(e))return new Ie(n,this.children);{const s=oe(e),r=(this.children.get(s)||new Ie(null)).set(Te(e),n),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const i=s.remove(Te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(ce(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(Te(e)):null}}setTree(e,n){if(ce(e))return n;{const s=oe(e),r=(this.children.get(s)||new Ie(null)).setTree(Te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(He(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ce(e))return null;{const r=oe(e),o=this.children.get(r);return o?o.findOnPath_(Te(e),He(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,s){if(ce(e))return this;{this.value&&s(n,this.value);const i=oe(e),r=this.children.get(i);return r?r.foreachOnPath_(Te(e),He(n,i),s):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(He(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new Ie(null))}}function Cr(t,e,n){if(ce(e))return new Zt(new Ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Et(i,e);return r=r.updateChild(o,n),new Zt(t.writeTree_.set(i,r))}else{const i=new Ie(n),r=t.writeTree_.setTree(e,i);return new Zt(r)}}}function Rg(t,e,n){let s=t;return kt(n,(i,r)=>{s=Cr(s,He(e,i),r)}),s}function kg(t,e){if(ce(e))return Zt.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new Zt(n)}}function xu(t,e){return Ws(t,e)!=null}function Ws(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Et(n.path,e)):null}function Ag(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(s,i)=>{e.push(new ae(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ae(s,i.value))}),e}function ts(t,e){if(ce(e))return t;{const n=Ws(t,e);return n!=null?new Zt(new Ie(n)):new Zt(t.writeTree_.subtree(e))}}function Du(t){return t.writeTree_.isEmpty()}function Ni(t,e){return tw(ge(),t.writeTree_,e)}function tw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(U(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=tw(He(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(He(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t,e){return rw(e,t)}function lO(t,e,n,s,i){U(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Cr(t.visibleWrites,e,n)),t.lastWriteId=s}function cO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function uO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hO(a,s.path)?i=!1:Yt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return fO(t),!0;if(s.snap)t.visibleWrites=kg(t.visibleWrites,s.path);else{const a=s.children;kt(a,l=>{t.visibleWrites=kg(t.visibleWrites,He(s.path,l))})}return!0}else return!1}function hO(t,e){if(t.snap)return Yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Yt(He(t.path,n),e))return!0;return!1}function fO(t){t.visibleWrites=nw(t.allWrites,dO,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dO(t){return t.visible}function nw(t,e,n){let s=Zt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Yt(n,o)?(a=Et(n,o),s=Cr(s,a,r.snap)):Yt(o,n)&&(a=Et(o,n),s=Cr(s,ge(),r.snap.getChild(a)));else if(r.children){if(Yt(n,o))a=Et(n,o),s=Rg(s,a,r.children);else if(Yt(o,n))if(a=Et(o,n),ce(a))s=Rg(s,ge(),r.children);else{const l=Ri(r.children,oe(a));if(l){const c=l.getChild(Te(a));s=Cr(s,ge(),c)}}}else throw $i("WriteRecord should have .snap or .children")}}return s}function sw(t,e,n,s,i){if(!s&&!i){const r=Ws(t.visibleWrites,e);if(r!=null)return r;{const o=ts(t.visibleWrites,e);if(Du(o))return n;if(n==null&&!xu(o,ge()))return null;{const a=n||J.EMPTY_NODE;return Ni(o,a)}}}else{const r=ts(t.visibleWrites,e);if(!i&&Du(r))return n;if(!i&&n==null&&!xu(r,ge()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Yt(c.path,e)||Yt(e,c.path))},a=nw(t.allWrites,o,e),l=n||J.EMPTY_NODE;return Ni(a,l)}}}function pO(t,e,n){let s=J.EMPTY_NODE;const i=Ws(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ts(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const l=Ni(ts(r,new Ee(o)),a);s=s.updateImmediateChild(o,l)}),Ag(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ts(t.visibleWrites,e);return Ag(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function gO(t,e,n,s,i){U(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=He(e,n);if(xu(t.visibleWrites,r))return null;{const o=ts(t.visibleWrites,r);return Du(o)?i.getChild(n):Ni(o,i.getChild(n))}}function mO(t,e,n,s){const i=He(e,n),r=Ws(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ts(t.visibleWrites,i);return Ni(o,s.getNode().getImmediateChild(n))}else return null}function _O(t,e){return Ws(t.visibleWrites,e)}function yO(t,e,n,s,i,r,o){let a;const l=ts(t.visibleWrites,e),c=Ws(l,ge());if(c!=null)a=c;else if(n!=null)a=Ni(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function vO(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Ua(t,e,n,s){return sw(t.writeTree,t.treePath,e,n,s)}function of(t,e){return pO(t.writeTree,t.treePath,e)}function Pg(t,e,n,s){return gO(t.writeTree,t.treePath,e,n,s)}function $a(t,e){return _O(t.writeTree,He(t.treePath,e))}function wO(t,e,n,s,i,r){return yO(t.writeTree,t.treePath,e,n,s,i,r)}function af(t,e,n){return mO(t.writeTree,t.treePath,e,n)}function iw(t,e){return rw(He(t.treePath,e),t.writeTree)}function rw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Gr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,zr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Pi(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Gr(s,e.snapshotNode,i.oldSnap));else throw $i("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ow=new bO;class lf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ls(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return af(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fs(this.viewCache_),r=wO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){return{filter:t}}function IO(t,e){U(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function CO(t,e,n,s,i){const r=new EO;let o,a;if(n.type===Xt.OVERWRITE){const c=n;c.source.fromUser?o=Mu(t,e,c.path,c.snap,s,i,r):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=Ha(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Xt.MERGE){const c=n;c.source.fromUser?o=RO(t,e,c.path,c.children,s,i,r):(U(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Lu(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Xt.ACK_USER_WRITE){const c=n;c.revert?o=PO(t,e,c.path,s,i,r):o=kO(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Xt.LISTEN_COMPLETE)o=AO(t,e,n.path,s,r);else throw $i("Unknown operation type: "+n.type);const l=r.getChanges();return SO(e,o,l),{viewCache:o,changes:l}}function SO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ou(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Jv(Ou(e)))}}function aw(t,e,n,s,i,r){const o=e.eventCache;if($a(s,n)!=null)return e;{let a,l;if(ce(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fs(e),u=c instanceof J?c:J.EMPTY_NODE,h=of(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ua(s,Fs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=oe(n);if(c===".priority"){U(rs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Pg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Te(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Pg(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=af(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ir(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Ha(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=oe(n);if(!l.isCompleteForPath(n)&&rs(n)>1)return e;const p=Te(n),T=l.getNode().getImmediateChild(d).updateChild(p,s);d===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),d,T,p,ow,null)}const h=ew(e,c,l.isFullyInitialized()||ce(n),u.filtersNodes()),f=new lf(i,h,r);return aw(t,h,n,i,f,a)}function Mu(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new lf(i,e,r);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ir(e,c,!0,t.filter.filtersNodes());else{const h=oe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ir(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Te(n),d=a.getNode().getImmediateChild(h);let p;if(ce(f))p=s;else{const E=u.getCompleteChild(h);E!=null?Bv(f)===".priority"&&E.getChild(Vv(f)).isEmpty()?p=E:p=E.updateChild(f,s):p=J.EMPTY_NODE}if(d.equals(p))l=e;else{const E=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=Ir(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ng(t,e){return t.eventCache.isCompleteForChild(e)}function RO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=He(n,l);Ng(e,oe(u))&&(a=Mu(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=He(n,l);Ng(e,oe(u))||(a=Mu(t,a,u,c,i,r,o))}),a}function Og(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Lu(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=s:c=new Ie(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=Og(t,d,f);l=Ha(t,l,new Ee(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),E=Og(t,p,f);l=Ha(t,l,new Ee(h),E,i,r,o,a)}}),l}function kO(t,e,n,s,i,r,o){if($a(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ha(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ce(n)){let c=new Ie(null);return l.getNode().forEachChild(mi,(u,h)=>{c=c.set(new Ee(u),h)}),Lu(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ie(null);return s.foreach((u,h)=>{const f=He(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Lu(t,e,n,c,i,r,a,o)}}function AO(t,e,n,s,i){const r=e.serverCache,o=ew(e,r.getNode(),r.isFullyInitialized()||ce(n),r.isFiltered());return aw(t,o,n,s,ow,i)}function PO(t,e,n,s,i,r){let o;if($a(s,n)!=null)return e;{const a=new lf(s,e,i),l=e.eventCache.getNode();let c;if(ce(n)||oe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ua(s,Fs(e));else{const h=e.serverCache.getNode();U(h instanceof J,"serverChildren would be complete if leaf node"),u=of(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=oe(n);let h=af(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Te(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,J.EMPTY_NODE,Te(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ua(s,Fs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||$a(s,ge())!=null,Ir(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ef(s.getIndex()),r=X1(s);this.processor_=TO(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(J.EMPTY_NODE,a.getNode(),null),u=new Ls(l,o.isFullyInitialized(),i.filtersNodes()),h=new Ls(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Rl(h,u),this.eventGenerator_=new sO(this.query_)}get query(){return this.query_}}function OO(t){return t.viewCache_.serverCache.getNode()}function xO(t,e){const n=Fs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function xg(t){return t.eventRegistrations_.length===0}function DO(t,e){t.eventRegistrations_.push(e)}function Dg(t,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Mg(t,e,n,s){e.type===Xt.MERGE&&e.source.queryId!==null&&(U(Fs(t.viewCache_),"We should always have a full cache before handling merges"),U(Ou(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=CO(t.processor_,i,e,n,s);return IO(t.processor_,r.viewCache),U(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lw(t,r.changes,r.viewCache.eventCache.getNode(),null)}function MO(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(r,o)=>{s.push(Pi(r,o))}),n.isFullyInitialized()&&s.push(Jv(n.getNode())),lw(t,s,n.getNode(),e)}function lw(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return iO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja;class LO{constructor(){this.views=new Map}}function FO(t){U(!ja,"__referenceConstructor has already been defined"),ja=t}function UO(){return U(ja,"Reference.ts has not been loaded"),ja}function $O(t){return t.views.size===0}function cf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return U(r!=null,"SyncTree gave us an op for an invalid query."),Mg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Mg(o,e,n,s));return r}}function HO(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ua(n,i?s:null),l=!1;a?l=!0:s instanceof J?(a=of(n,s),l=!1):(a=J.EMPTY_NODE,l=!1);const c=Rl(new Ls(a,l,!1),new Ls(s,i,!1));return new NO(e,c)}return o}function jO(t,e,n,s,i,r){const o=HO(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),DO(o,n),MO(o,n)}function BO(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=os(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Dg(c,n,s)),xg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Dg(l,n,s)),xg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!os(t)&&r.push(new(UO())(e._repo,e._path)),{removed:r,events:o}}function cw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _i(t,e){let n=null;for(const s of t.views.values())n=n||xO(s,e);return n}function uw(t,e){if(e._queryParams.loadsAllData())return kl(t);{const s=e._queryIdentifier;return t.views.get(s)}}function hw(t,e){return uw(t,e)!=null}function os(t){return kl(t)!=null}function kl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;function WO(t){U(!Ba,"__referenceConstructor has already been defined"),Ba=t}function VO(){return U(Ba,"Reference.ts has not been loaded"),Ba}let qO=1;class Lg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=vO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fw(t,e,n,s,i){return lO(t.pendingWriteTree_,e,n,s,i),i?Io(t,new Ms(Zv(),e,n)):[]}function ws(t,e,n=!1){const s=cO(t.pendingWriteTree_,e);if(uO(t.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(ge(),!0):kt(s.children,o=>{r=r.set(new Ee(o),!0)}),Io(t,new Fa(s.path,r,n))}else return[]}function Al(t,e,n){return Io(t,new Ms(nf(),e,n))}function KO(t,e,n){const s=Ie.fromObject(n);return Io(t,new Jr(nf(),e,s))}function zO(t,e){return Io(t,new Xr(nf(),e))}function GO(t,e,n){const s=hf(t,n);if(s){const i=ff(s),r=i.path,o=i.queryId,a=Et(r,e),l=new Xr(sf(o),a);return df(t,r,l)}else return[]}function Fu(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||hw(o,e))){const l=BO(o,e,n,s);$O(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,d)=>os(d));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const d=JO(f);for(let p=0;p<d.length;++p){const E=d[p],T=E.query,y=gw(t,E);t.listenProvider_.startListening(Sr(T),Wa(t,T),y.hashFn,y.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Sr(e),null):c.forEach(f=>{const d=t.queryToTagMap.get(Pl(f));t.listenProvider_.stopListening(Sr(f),d)}))}QO(t,c)}return a}function YO(t,e,n,s){const i=hf(t,s);if(i!=null){const r=ff(i),o=r.path,a=r.queryId,l=Et(o,e),c=new Ms(sf(a),l,n);return df(t,o,c)}else return[]}function XO(t,e,n,s){const i=hf(t,s);if(i){const r=ff(i),o=r.path,a=r.queryId,l=Et(o,e),c=Ie.fromObject(n),u=new Jr(sf(a),l,c);return df(t,o,u)}else return[]}function Fg(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,d)=>{const p=Et(f,i);r=r||_i(d,p),o=o||os(d)});let a=t.syncPointTree_.get(i);a?(o=o||os(a),r=r||_i(a,ge())):(a=new LO,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((d,p)=>{const E=_i(p,ge());E&&(r=r.updateImmediateChild(d,E))}));const c=hw(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Pl(e);U(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const d=ZO();t.queryToTagMap.set(f,d),t.tagToQueryMap.set(d,f)}const u=rf(t.pendingWriteTree_,i);let h=jO(a,e,n,u,r,l);if(!c&&!o&&!s){const f=uw(a,e);h=h.concat(ex(t,e,f))}return h}function uf(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Et(o,e),c=_i(a,l);if(c)return c});return sw(i,e,r,n,!0)}function Io(t,e){return dw(e,t.syncPointTree_,null,rf(t.pendingWriteTree_,ge()))}function dw(t,e,n,s){if(ce(t.path))return pw(t,e,n,s);{const i=e.get(ge());n==null&&i!=null&&(n=_i(i,ge()));let r=[];const o=oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=iw(s,o);r=r.concat(dw(a,l,c,u))}return i&&(r=r.concat(cf(i,t,s,n))),r}}function pw(t,e,n,s){const i=e.get(ge());n==null&&i!=null&&(n=_i(i,ge()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=iw(s,o),u=t.operationForChild(o);u&&(r=r.concat(pw(u,a,l,c)))}),i&&(r=r.concat(cf(i,t,s,n))),r}function gw(t,e){const n=e.query,s=Wa(t,n);return{hashFn:()=>(OO(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?GO(t,n._path,s):zO(t,n._path);{const r=YN(i,n);return Fu(t,n,null,r)}}}}function Wa(t,e){const n=Pl(e);return t.queryToTagMap.get(n)}function Pl(t){return t._path.toString()+"$"+t._queryIdentifier}function hf(t,e){return t.tagToQueryMap.get(e)}function ff(t){const e=t.indexOf("$");return U(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function df(t,e,n){const s=t.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const i=rf(t.pendingWriteTree_,e);return cf(s,n,i,null)}function JO(t){return t.fold((e,n,s)=>{if(n&&os(n))return[kl(n)];{let i=[];return n&&(i=cw(n)),kt(s,(r,o)=>{i=i.concat(o)}),i}})}function Sr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(VO())(t._repo,t._path):t}function QO(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Pl(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ZO(){return qO++}function ex(t,e,n){const s=e._path,i=Wa(t,e),r=gw(t,n),o=t.listenProvider_.startListening(Sr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)U(!os(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ce(c)&&u&&os(u))return[kl(u).query];{let f=[];return u&&(f=f.concat(cw(u).map(d=>d.query))),kt(h,(d,p)=>{f=f.concat(p)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Sr(u),Wa(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pf(n)}node(){return this.node_}}class gf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new gf(this.syncTree_,n)}node(){return uf(this.syncTree_,this.path_)}}const tx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ug=function(t,e,n){if(!t||typeof t!="object")return t;if(U(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sx(t[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+t)}},sx=function(t,e,n){t.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const i=e.node();if(U(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ix=function(t,e,n,s){return mf(e,new gf(n,t),s)},mw=function(t,e,n){return mf(t,new pf(e),n)};function mf(t,e,n){const s=t.getPriority().val(),i=Ug(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ug(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,Je(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Be(i))),o.forEachChild(Oe,(a,l)=>{const c=mf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yf(t,e){let n=e instanceof Ee?e:new Ee(e),s=t,i=oe(n);for(;i!==null;){const r=Ri(s.node.children,i)||{children:{},childCount:0};s=new _f(i,s,r),n=Te(n),i=oe(n)}return s}function qi(t){return t.node.value}function _w(t,e){t.node.value=e,Uu(t)}function yw(t){return t.node.childCount>0}function rx(t){return qi(t)===void 0&&!yw(t)}function Nl(t,e){kt(t.node.children,(n,s)=>{e(new _f(n,t,s))})}function vw(t,e,n,s){n&&!s&&e(t),Nl(t,i=>{vw(i,e,!0,s)}),n&&s&&e(t)}function ox(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Co(t){return new Ee(t.parent===null?t.name:Co(t.parent)+"/"+t.name)}function Uu(t){t.parent!==null&&ax(t.parent,t.name,t)}function ax(t,e,n){const s=rx(n),i=Mn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Uu(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Uu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=/[\[\].#$\/\u0000-\u001F\u007F]/,cx=/[\[\].#$\u0000-\u001F\u007F]/,kc=10*1024*1024,ww=function(t){return typeof t=="string"&&t.length!==0&&!lx.test(t)},Ew=function(t){return typeof t=="string"&&t.length!==0&&!cx.test(t)},ux=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ew(t)},hx=function(t,e,n,s){s&&e===void 0||vf(Lh(t,"value"),e,n)},vf=function(t,e,n){const s=n instanceof Ee?new k1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+gs(s));if(typeof e=="function")throw new Error(t+"contains a function "+gs(s)+" with contents = "+e.toString());if(Ev(e))throw new Error(t+"contains "+e.toString()+" "+gs(s));if(typeof e=="string"&&e.length>kc/3&&El(e)>kc)throw new Error(t+"contains a string greater than "+kc+" utf8 bytes "+gs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ww(o)))throw new Error(t+" contains an invalid key ("+o+") "+gs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);A1(s,o),vf(t,a,s),P1(s)}),i&&r)throw new Error(t+' contains ".value" child '+gs(s)+" in addition to actual children.")}},bw=function(t,e,n,s){if(!(s&&n===void 0)&&!Ew(n))throw new Error(Lh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},fx=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bw(t,e,n,s)},dx=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},px=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ww(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ux(n))throw new Error(Lh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wf(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Jh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Tw(t,e,n){wf(t,n),Iw(t,s=>Jh(s,e))}function Nn(t,e,n){wf(t,n),Iw(t,s=>Yt(s,e)||Yt(e,s))}function Iw(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(mx(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Rs&&nt("event: "+n.toString()),Vi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="repo_interrupt",yx=25;class vx{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=La(),this.transactionQueueTree_=new _f,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wx(t,e,n){if(t.stats_=Yh(t.repoInfo_),t.forceRestClient_||ZN())t.server_=new Ma(t.repoInfo_,(s,i,r,o)=>{$g(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Sn(t.repoInfo_,e,(s,i,r,o)=>{$g(t,s,i,r,o)},s=>{Hg(t,s)},s=>{bx(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=i1(t.repoInfo_,()=>new nO(t.stats_,t.server_)),t.infoData_=new J1,t.infoSyncTree_=new Lg({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Al(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bf(t,"connected",!1),t.serverSyncTree_=new Lg({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Nn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ex(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ef(t){return tx({timestamp:Ex(t)})}function $g(t,e,n,s,i){t.dataUpdateCount++;const r=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ca(n,c=>Je(c));o=XO(t.serverSyncTree_,r,l,i)}else{const l=Je(n);o=YO(t.serverSyncTree_,r,l,i)}else if(s){const l=Ca(n,c=>Je(c));o=KO(t.serverSyncTree_,r,l)}else{const l=Je(n);o=Al(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ol(t,r)),Nn(t.eventQueue_,a,o)}function Hg(t,e){bf(t,"connected",e),e===!1&&Ix(t)}function bx(t,e){kt(e,(n,s)=>{bf(t,n,s)})}function bf(t,e,n){const s=new Ee("/.info/"+e),i=Je(n);t.infoData_.updateSnapshot(s,i);const r=Al(t.infoSyncTree_,s,i);Nn(t.eventQueue_,s,r)}function Cw(t){return t.nextWriteId_++}function Tx(t,e,n,s,i){Tf(t,"set",{path:e.toString(),value:n,priority:s});const r=Ef(t),o=Je(n,s),a=uf(t.serverSyncTree_,e),l=mw(o,a,r),c=Cw(t),u=fw(t.serverSyncTree_,e,l,c,!0);wf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,d)=>{const p=f==="ok";p||Ct("set at "+e+" failed: "+f);const E=ws(t.serverSyncTree_,c,!p);Nn(t.eventQueue_,e,E),Rx(t,i,f,d)});const h=Pw(t,e);Ol(t,h),Nn(t.eventQueue_,h,[])}function Ix(t){Tf(t,"onDisconnectEvents");const e=Ef(t),n=La();Nu(t.onDisconnect_,ge(),(i,r)=>{const o=ix(i,r,t.serverSyncTree_,e);Qv(n,i,o)});let s=[];Nu(n,ge(),(i,r)=>{s=s.concat(Al(t.serverSyncTree_,i,r));const o=Pw(t,i);Ol(t,o)}),t.onDisconnect_=La(),Nn(t.eventQueue_,ge(),s)}function Cx(t,e,n){let s;oe(e._path)===".info"?s=Fg(t.infoSyncTree_,e,n):s=Fg(t.serverSyncTree_,e,n),Tw(t.eventQueue_,e._path,s)}function jg(t,e,n){let s;oe(e._path)===".info"?s=Fu(t.infoSyncTree_,e,n):s=Fu(t.serverSyncTree_,e,n),Tw(t.eventQueue_,e._path,s)}function Sx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_x)}function Tf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),nt(n,...e)}function Rx(t,e,n,s){e&&Vi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Sw(t,e,n){return uf(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function If(t,e=t.transactionQueueTree_){if(e||xl(t,e),qi(e)){const n=kw(t,e);U(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&kx(t,Co(e),n)}else yw(e)&&Nl(e,n=>{If(t,n)})}function kx(t,e,n){const s=n.map(c=>c.currentWriteId),i=Sw(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];U(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Et(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Tf(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(ws(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();xl(t,yf(t.transactionQueueTree_,e)),If(t,t.transactionQueueTree_),Nn(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Vi(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ct("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ol(t,e)}},o)}function Ol(t,e){const n=Rw(t,e),s=Co(n),i=kw(t,n);return Ax(t,i,s),s}function Ax(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Et(n,l.path);let u=!1,h;if(U(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ws(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yx)u=!0,h="maxretry",i=i.concat(ws(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Sw(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){vf("transaction failed: Data returned ",d,l.path);let p=Je(d);typeof d=="object"&&d!=null&&Mn(d,".priority")||(p=p.updatePriority(f.getPriority()));const T=l.currentWriteId,y=Ef(t),m=mw(p,f,y);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=Cw(t),o.splice(o.indexOf(T),1),i=i.concat(fw(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(ws(t.serverSyncTree_,T,!0))}else u=!0,h="nodata",i=i.concat(ws(t.serverSyncTree_,l.currentWriteId,!0))}Nn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}xl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Vi(s[a]);If(t,t.transactionQueueTree_)}function Rw(t,e){let n,s=t.transactionQueueTree_;for(n=oe(e);n!==null&&qi(s)===void 0;)s=yf(s,n),e=Te(e),n=oe(e);return s}function kw(t,e){const n=[];return Aw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Aw(t,e,n){const s=qi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Nl(e,i=>{Aw(t,i,n)})}function xl(t,e){const n=qi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,_w(e,n.length>0?n:void 0)}Nl(e,s=>{xl(t,s)})}function Pw(t,e){const n=Co(Rw(t,e)),s=yf(t.transactionQueueTree_,e);return ox(s,i=>{Ac(t,i)}),Ac(t,s),vw(s,i=>{Ac(t,i)}),n}function Ac(t,e){const n=qi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(U(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(U(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ws(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_w(e,void 0):n.length=r+1,Nn(t.eventQueue_,Co(e),i);for(let o=0;o<s.length;o++)Vi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bg=function(t,e){const n=Ox(t),s=n.namespace;n.domain==="firebase.com"&&Pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xv(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ee(n.pathString)}},Ox=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Px(t.substring(u,h)));const f=Nx(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class Ow{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ce(this._path)?null:Bv(this._path)}get ref(){return new Fn(this._repo,this._path)}get _queryIdentifier(){const e=Cg(this._queryParams),n=zh(e);return n==="{}"?"default":n}get _queryObject(){return Cg(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof Cf))return!1;const n=this._repo===e._repo,s=Jh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+R1(this._path)}}class Fn extends Cf{constructor(e,n){super(e,n,new tf,!1)}get parent(){const e=Vv(this._path);return e===null?null:new Fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),s=Va(this.ref,e);return new Qr(this._node.getChild(n),s,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Qr(i,Va(this.ref,s),Oe)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function VF(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?Va(t._root,e):t._root}function Va(t,e){return t=Pe(t),oe(t._path)===null?fx("child","path",e,!1):bw("child","path",e,!1),new Fn(t._repo,He(t._path,e))}function qF(t,e){t=Pe(t),dx("set",t._path),hx("set",e,t._path,!1);const n=new wl;return Tx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Sf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Nw("value",this,new Qr(e.snapshotNode,new Fn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ow(this,e,n):null}matches(e){return e instanceof Sf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Rf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ow(this,e,n):null}createEvent(e,n){U(e.childName!=null,"Child events should have a childName.");const s=Va(new Fn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Nw(e.type,this,new Qr(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Rf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Dx(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{jg(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new xx(n,r||void 0),a=e==="value"?new Sf(o):new Rf(e,o);return Cx(t._repo,t,a),()=>jg(t._repo,t,a)}function KF(t,e,n,s){return Dx(t,"value",e,n,s)}FO(Fn);WO(Fn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="FIREBASE_DATABASE_EMULATOR_HOST",$u={};let Lx=!1;function Fx(t,e,n,s){t.repoInfo_=new xv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Ux(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Mx]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Bg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new gi(gi.OWNER):new t1(t.name,t.options,e);px("Invalid Firebase Database URL",o),ce(o.path)||Pn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Hx(a,t,u,new e1(t.name,n));return new jx(h,t)}function $x(t,e){const n=$u[e];(!n||n[t.key]!==t)&&Pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Sx(t),delete n[t.key]}function Hx(t,e,n,s){let i=$u[e.name];i||(i={},$u[e.name]=i);let r=i[t.toURLString()];return r&&Pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vx(t,Lx,n,s),i[t.toURLString()]=r,r}class jx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fn(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&($x(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pn("Cannot call "+e+" on a deleted database.")}}function Bx(t=go(),e){const n=Ln(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=xh("database");s&&Wx(n,...s)}return n}function Wx(t,e,n,s={}){t=Pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Pn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new gi(gi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Dh(s.mockUserToken,t.app.options.projectId);r=new gi(o)}Fx(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t){$N(as),jt(new xt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ux(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),at(lg,cg,t),at(lg,cg,"esm2017")}Sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Vx();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="firebasestorage.googleapis.com",Dw="storageBucket",qx=2*60*1e3,Kx=10*60*1e3,zx=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Wt{constructor(e,n,s=0){super(Pc(e),`Firebase Storage: ${n} (${Pc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function Pc(t){return"storage/"+t}function kf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(ke.UNKNOWN,t)}function Gx(t){return new Ne(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Yx(t){return new Ne(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Xx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(ke.UNAUTHENTICATED,t)}function Jx(){return new Ne(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Qx(t){return new Ne(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Mw(){return new Ne(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lw(){return new Ne(ke.CANCELED,"User canceled the upload/download.")}function Zx(t){return new Ne(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function eD(t){return new Ne(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function tD(){return new Ne(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Dw+"' property when initializing the app?")}function Fw(){return new Ne(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nD(){return new Ne(ke.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function sD(){return new Ne(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iD(t){return new Ne(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Hu(t){return new Ne(ke.INVALID_ARGUMENT,t)}function Uw(){return new Ne(ke.APP_DELETED,"The Firebase app was deleted.")}function rD(t){return new Ne(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rr(t,e){return new Ne(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ir(t){throw new Ne(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=pt.makeFromUrl(e,n)}catch{return new pt(e,"")}if(s.path==="")return s;throw eD(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(v){v.path_=decodeURIComponent(v.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},E=n===xw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",y=new RegExp(`^https?://${E}/${i}/${T}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let v=0;v<b.length;v++){const k=b[v],N=k.regex.exec(e);if(N){const L=N[k.indices.bucket];let I=N[k.indices.path];I||(I=""),s=new pt(L,I),k.postModify(s);break}}if(s==null)throw Zx(e);return s}}class oD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...T){c||(c=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(d,l())},T)}function f(){r&&clearTimeout(r)}function d(T,...y){if(c){f();return}if(T){f(),u.call(null,T,...y);return}if(l()||o){f(),u.call(null,T,...y);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let p=!1;function E(T){p||(p=!0,f(),!c&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,E(!0)},n),E}function lD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t){return t!==void 0}function uD(t){return typeof t=="function"}function hD(t){return typeof t=="object"&&!Array.isArray(t)}function Dl(t){return typeof t=="string"||t instanceof String}function Wg(t){return Af()&&t instanceof Blob}function Af(){return typeof Blob<"u"&&!fk()}function ju(t,e,n,s){if(s<e)throw Hu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Hu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function $w(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ks;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ks||(ks={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Jo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ks.NO_ERROR,l=r.getStatus();if(!a||Hw(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ks.ABORT;s(!1,new Jo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Jo(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());cD(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=kf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Uw():Lw();o(l)}else{const l=Mw();o(l)}};this.canceled_?n(!1,new Jo(!1,null,!0)):this.backoffId_=aD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function dD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _D(t,e,n,s,i,r,o=!0){const a=$w(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return gD(c,e),dD(c,n),pD(c,r),mD(c,s),new fD(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vD(...t){const e=yD();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Af())return new Blob(t);throw new Ne(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){if(typeof atob>"u")throw iD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nc{constructor(e,n){this.data=e,this.contentType=n||null}}function bD(t,e){switch(t){case ln.RAW:return new Nc(jw(e));case ln.BASE64:case ln.BASE64URL:return new Nc(Bw(t,e));case ln.DATA_URL:return new Nc(ID(e),CD(e))}throw kf()}function jw(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function TD(t){let e;try{e=decodeURIComponent(t)}catch{throw Rr(ln.DATA_URL,"Malformed data URL.")}return jw(e)}function Bw(t,e){switch(t){case ln.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Rr(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Rr(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ED(e)}catch(i){throw i.message.includes("polyfill")?i:Rr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Ww{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Rr(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=SD(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function ID(t){const e=new Ww(t);return e.base64?Bw(ln.BASE64,e.rest):TD(e.rest)}function CD(t){return new Ww(t).contentType}function SD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){let s=0,i="";Wg(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Wg(this.data_)){const s=this.data_,i=wD(s,e,n);return i===null?null:new Xn(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Xn(s,!0)}}static getBlob(...e){if(Af()){const n=e.map(s=>s instanceof Xn?s.data_:s);return new Xn(vD.apply(null,n))}else{const n=e.map(o=>Dl(o)?bD(ln.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Xn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){let e;try{e=JSON.parse(t)}catch{return null}return hD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kD(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Vw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e){return e}class ft{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||AD}}let Qo=null;function PD(t){return!Dl(t)||t.length<2?t:Vw(t)}function Nf(){if(Qo)return Qo;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(r,o){return PD(o)}const n=new ft("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new ft("size");return i.xform=s,t.push(i),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),Qo=t,Qo}function ND(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new pt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function OD(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return ND(s,t),s}function qw(t,e,n){const s=Pf(e);return s===null?null:OD(t,s,n)}function xD(t,e,n,s){const i=Pf(e);if(i===null||!Dl(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=Vs(f,n,s),p=$w({alt:"media",token:c});return d+p})[0]}function Kw(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="prefixes",qg="items";function DD(t,e,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Vg])for(const i of n[Vg]){const r=i.replace(/\/$/,""),o=t._makeStorageReference(new pt(e,r));s.prefixes.push(o)}if(n[qg])for(const i of n[qg]){const r=t._makeStorageReference(new pt(e,i.name));s.items.push(r)}return s}function MD(t,e,n){const s=Pf(n);return s===null?null:DD(t,e,s)}class ls{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){if(!t)throw kf()}function Of(t,e){function n(s,i){const r=qw(t,i,e);return dn(r!==null),r}return n}function LD(t,e){function n(s,i){const r=MD(t,e,i);return dn(r!==null),r}return n}function FD(t,e){function n(s,i){const r=qw(t,i,e);return dn(r!==null),xD(r,i,t.host,t._protocol)}return n}function Ki(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Jx():i=Xx():n.getStatus()===402?i=Yx(t.bucket):n.getStatus()===403?i=Qx(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function xf(t){const e=Ki(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=Gx(t.path)),r.serverResponse=i.serverResponse,r}return n}function zw(t,e,n){const s=e.fullServerUrl(),i=Vs(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new ls(i,r,Of(t,n),o);return a.errorHandler=xf(e),a}function UD(t,e,n,s,i){const r={};e.isRoot?r.prefix="":r.prefix=e.path+"/",n&&n.length>0&&(r.delimiter=n),s&&(r.pageToken=s),i&&(r.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Vs(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,u=new ls(a,l,LD(t,e.bucket),c);return u.urlParams=r,u.errorHandler=Ki(e),u}function $D(t,e,n){const s=e.fullServerUrl(),i=Vs(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new ls(i,r,FD(t,n),o);return a.errorHandler=xf(e),a}function HD(t,e){const n=e.fullServerUrl(),s=Vs(n,t.host,t._protocol),i="DELETE",r=t.maxOperationRetryTime;function o(l,c){}const a=new ls(s,i,o,r);return a.successCodes=[200,204],a.errorHandler=xf(e),a}function jD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Gw(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=jD(null,e)),s}function BD(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let v=0;v<2;v++)b=b+Math.random().toString().slice(2);return b}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Gw(e,s,i),u=Kw(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",d=Xn.getBlob(h,s,f);if(d===null)throw Fw();const p={name:c.fullPath},E=Vs(r,t.host,t._protocol),T="POST",y=t.maxUploadRetryTime,m=new ls(E,T,Of(t,n),y);return m.urlParams=p,m.headers=o,m.body=d.uploadData(),m.errorHandler=Ki(e),m}class qa{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function Df(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{dn(!1)}return dn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function WD(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=Gw(e,s,i),a={name:o.fullPath},l=Vs(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Kw(o,n),f=t.maxUploadRetryTime;function d(E){Df(E);let T;try{T=E.getResponseHeader("X-Goog-Upload-URL")}catch{dn(!1)}return dn(Dl(T)),T}const p=new ls(l,c,d,f);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=Ki(e),p}function VD(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(c){const u=Df(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{dn(!1)}h||dn(!1);const f=Number(h);return dn(!isNaN(f)),new qa(f,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ls(n,o,r,a);return l.headers=i,l.errorHandler=Ki(e),l}const Kg=256*1024;function qD(t,e,n,s,i,r,o,a){const l=new qa(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw nD();const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,f=h+u;let d="";u===0?d="finalize":c===u?d="upload, finalize":d="upload";const p={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${l.current}`},E=s.slice(h,f);if(E===null)throw Fw();function T(v,k){const N=Df(v,["active","final"]),L=l.current+u,I=s.size();let $;return N==="final"?$=Of(e,r)(v,k):$=null,new qa(L,I,N==="final",$)}const y="POST",m=e.maxUploadRetryTime,b=new ls(n,y,T,m);return b.headers=p,b.body=E.uploadData(),b.progressCallback=a||null,b.errorHandler=Ki(t),b}const vt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Oc(t){switch(t){case"running":case"pausing":case"canceling":return vt.RUNNING;case"paused":return vt.PAUSED;case"success":return vt.SUCCESS;case"canceled":return vt.CANCELED;case"error":return vt.ERROR;default:return vt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n,s){if(uD(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class zD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ks.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ks.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ks.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw ir("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ir("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ir("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ir("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ir("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GD extends zD{initXhr(){this.xhr_.responseType="text"}}function En(){return new GD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Nf(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ke.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(Hw(i.status,[]))if(r)i=Mw();else{this.sleepTime=Math.max(this.sleepTime*2,zx),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ke.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=WD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,En,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=VD(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,En,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Kg*this._chunkMultiplier,n=new qa(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=qD(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,En,i,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Kg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=zw(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,En,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=BD(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,En,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Lw(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Oc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new KD(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Oc(this._state)){case vt.SUCCESS:Gs(this._resolve.bind(null,this.snapshot))();break;case vt.CANCELED:case vt.ERROR:const n=this._reject;Gs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Oc(this._state)){case vt.RUNNING:case vt.PAUSED:e.next&&Gs(e.next.bind(e,this.snapshot))();break;case vt.SUCCESS:e.complete&&Gs(e.complete.bind(e))();break;case vt.CANCELED:case vt.ERROR:e.error&&Gs(e.error.bind(e,this._error))();break;default:e.error&&Gs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this._service=e,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Us(e,n)}get root(){const e=new pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vw(this._location.path)}get storage(){return this._service}get parent(){const e=RD(this._location.path);if(e===null)return null;const n=new pt(this._location.bucket,e);return new Us(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rD(e)}}function XD(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new YD(t,new Xn(e),n)}function JD(t){const e={prefixes:[],items:[]};return Yw(t,e).then(()=>e)}async function Yw(t,e,n){const i=await QD(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Yw(t,e,i.nextPageToken)}function QD(t,e){e!=null&&typeof e.maxResults=="number"&&ju("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=UD(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,En)}function ZD(t){t._throwIfRoot("getMetadata");const e=zw(t.storage,t._location,Nf());return t.storage.makeRequestWithTokens(e,En)}function eM(t){t._throwIfRoot("getDownloadURL");const e=$D(t.storage,t._location,Nf());return t.storage.makeRequestWithTokens(e,En).then(n=>{if(n===null)throw sD();return n})}function tM(t){t._throwIfRoot("deleteObject");const e=HD(t.storage,t._location);return t.storage.makeRequestWithTokens(e,En)}function nM(t,e){const n=kD(t._location.path,e),s=new pt(t._location.bucket,n);return new Us(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(t){return/^[A-Za-z]+:\/\//.test(t)}function iM(t,e){return new Us(t,e)}function Xw(t,e){if(t instanceof Mf){const n=t;if(n._bucket==null)throw tD();const s=new Us(n,n._bucket);return e!=null?Xw(s,e):s}else return e!==void 0?nM(t,e):t}function rM(t,e){if(e&&sM(e)){if(t instanceof Mf)return iM(t,e);throw Hu("To use ref(service, url), the first argument must be a Storage instance.")}else return Xw(t,e)}function zg(t,e){const n=e==null?void 0:e[Dw];return n==null?null:pt.makeFromBucketSpec(n,t)}function oM(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Dh(i,t.app.options.projectId))}class Mf{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=xw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qx,this._maxUploadRetryTime=Kx,this._requests=new Set,i!=null?this._bucket=pt.makeFromBucketSpec(i,this._host):this._bucket=zg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,e):this._bucket=zg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ju("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ju("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Us(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new oD(Uw());{const o=_D(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Gg="@firebase/storage",Yg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="storage";function zF(t,e,n){return t=Pe(t),XD(t,e,n)}function GF(t){return t=Pe(t),ZD(t)}function YF(t){return t=Pe(t),JD(t)}function XF(t){return t=Pe(t),eM(t)}function JF(t){return t=Pe(t),tM(t)}function QF(t,e){return t=Pe(t),rM(t,e)}function aM(t=go(),e){t=Pe(t);const s=Ln(t,Jw).getImmediate({identifier:e}),i=xh("storage");return i&&lM(s,...i),s}function lM(t,e,n,s={}){oM(t,e,n,s)}function cM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Mf(n,s,i,e,as)}function uM(){jt(new xt(Jw,cM,"PUBLIC").setMultipleInstances(!0)),at(Gg,Yg,""),at(Gg,Yg,"esm2017")}uM();var hM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W,Lf=Lf||{},te=hM||self;function Ml(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function So(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function fM(t){return Object.prototype.hasOwnProperty.call(t,xc)&&t[xc]||(t[xc]=++dM)}var xc="closure_uid_"+(1e9*Math.random()>>>0),dM=0;function pM(t,e,n){return t.call.apply(t.bind,arguments)}function gM(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=pM:lt=gM,lt.apply(null,arguments)}function Zo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function cs(){this.s=this.s,this.o=this.o}var mM=0;cs.prototype.s=!1;cs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),mM!=0)&&fM(this)};cs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ff(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Xg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ml(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var _M=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Zr(t){return/^[\s\xa0]*$/.test(t)}function Ll(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return Ll().indexOf(t)!=-1}function Uf(t){return Uf[" "](t),t}Uf[" "]=function(){};function yM(t,e){var n=hL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var vM=an("Opera"),eo=an("Trident")||an("MSIE"),Zw=an("Edge"),Bu=Zw||eo,eE=an("Gecko")&&!(Ll().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),wM=Ll().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function tE(){var t=te.document;return t?t.documentMode:void 0}e:{var Jg="",Dc=function(){var t=Ll();if(eE)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zw)return/Edge\/([\d\.]+)/.exec(t);if(eo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wM)return/WebKit\/(\S+)/.exec(t);if(vM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dc&&(Jg=Dc?Dc[1]:""),eo){var Qg=tE();if(Qg!=null&&Qg>parseFloat(Jg))break e}}te.document&&eo&&tE();function to(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eE){e:{try{Uf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:EM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&to.$.h.call(this)}}ze(to,ct);var EM={2:"touch",3:"pen",4:"mouse"};to.prototype.h=function(){to.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ro="closure_listenable_"+(1e6*Math.random()|0),bM=0;function TM(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++bM,this.fa=this.ia=!1}function Fl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $f(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function IM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nE(t){const e={};for(const n in t)e[n]=t[n];return e}const Zg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sE(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Zg.length;r++)n=Zg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ul(t){this.src=t,this.g={},this.h=0}Ul.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Vu(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new TM(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Wu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Qw(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Fl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Hf="closure_lm_"+(1e6*Math.random()|0),Mc={};function iE(t,e,n,s,i){if(s&&s.once)return oE(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)iE(t,e[r],n,s,i);return null}return n=Wf(n),t&&t[Ro]?t.O(e,n,So(s)?!!s.capture:!!s,i):rE(t,e,n,!1,s,i)}function rE(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=So(i)?!!i.capture:!!i,a=Bf(t);if(a||(t[Hf]=a=new Ul(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=CM(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)_M||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(lE(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CM(){function t(n){return e.call(t.src,t.listener,n)}const e=SM;return t}function oE(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)oE(t,e[r],n,s,i);return null}return n=Wf(n),t&&t[Ro]?t.P(e,n,So(s)?!!s.capture:!!s,i):rE(t,e,n,!0,s,i)}function aE(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)aE(t,e[r],n,s,i);else s=So(s)?!!s.capture:!!s,n=Wf(n),t&&t[Ro]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Vu(r,n,s,i),-1<n&&(Fl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vu(e,n,s,i)),(n=-1<t?e[t]:null)&&jf(n))}function jf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ro])Wu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(lE(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Bf(e))?(Wu(n,t),n.h==0&&(n.src=null,e[Hf]=null)):Fl(t)}}}function lE(t){return t in Mc?Mc[t]:Mc[t]="on"+t}function SM(t,e){if(t.fa)t=!0;else{e=new to(e,this);var n=t.listener,s=t.la||t.src;t.ia&&jf(t),t=n.call(s,e)}return t}function Bf(t){return t=t[Hf],t instanceof Ul?t:null}var Lc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wf(t){return typeof t=="function"?t:(t[Lc]||(t[Lc]=function(e){return t.handleEvent(e)}),t[Lc])}function Ke(){cs.call(this),this.i=new Ul(this),this.S=this,this.J=null}ze(Ke,cs);Ke.prototype[Ro]=!0;Ke.prototype.removeEventListener=function(t,e,n,s){aE(this,t,e,n,s)};function Ze(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var i=e;e=new ct(s,t),sE(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ea(o,s,!0,e)&&i}if(o=e.g=t,i=ea(o,s,!0,e)&&i,i=ea(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ea(o,s,!1,e)&&i}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Fl(n[s]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ke.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ea(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Wu(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Vf=te.JSON.stringify;class RM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function kM(){var t=qf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AM{constructor(){this.h=this.g=null}add(e,n){const s=cE.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var cE=new RM(()=>new PM,t=>t.reset());class PM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function OM(t){te.setTimeout(()=>{throw t},0)}let no,so=!1,qf=new AM,uE=()=>{const t=te.Promise.resolve(void 0);no=()=>{t.then(xM)}};var xM=()=>{for(var t;t=kM();){try{t.h.call(t.g)}catch(n){OM(n)}var e=cE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}so=!1};function $l(t,e){Ke.call(this),this.h=t||1,this.g=e||te,this.j=lt(this.qb,this),this.l=Date.now()}ze($l,Ke);W=$l.prototype;W.ga=!1;W.T=null;W.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(Kf(this),this.start()))}};W.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}W.N=function(){$l.$.N.call(this),Kf(this),delete this.g};function zf(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function hE(t){t.g=zf(()=>{t.g=null,t.i&&(t.i=!1,hE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DM extends cs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hE(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(t){cs.call(this),this.h=t,this.g={}}ze(io,cs);var em=[];function fE(t,e,n,s){Array.isArray(n)||(n&&(em[0]=n.toString()),n=em);for(var i=0;i<n.length;i++){var r=iE(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function dE(t){$f(t.g,function(e,n){this.g.hasOwnProperty(n)&&jf(e)},t),t.g={}}io.prototype.N=function(){io.$.N.call(this),dE(this)};io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hl(){this.g=!0}Hl.prototype.Ea=function(){this.g=!1};function MM(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function LM(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ni(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UM(t,n)+(s?" "+s:"")})}function FM(t,e){t.info(function(){return"TIMEOUT: "+e})}Hl.prototype.info=function(){};function UM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vf(n)}catch{return e}}var zi={},tm=null;function Gf(){return tm=tm||new Ke}zi.Ta="serverreachability";function pE(t){ct.call(this,zi.Ta,t)}ze(pE,ct);function ro(t){const e=Gf();Ze(e,new pE(e))}zi.STAT_EVENT="statevent";function gE(t,e){ct.call(this,zi.STAT_EVENT,t),this.stat=e}ze(gE,ct);function gt(t){const e=Gf();Ze(e,new gE(e,t))}zi.Ua="timingevent";function mE(t,e){ct.call(this,zi.Ua,t),this.size=e}ze(mE,ct);function ko(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Yf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},$M={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xf(){}Xf.prototype.h=null;function nm(t){return t.h||(t.h=t.i())}function HM(){}var Ao={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jf(){ct.call(this,"d")}ze(Jf,ct);function Qf(){ct.call(this,"c")}ze(Qf,ct);var qu;function jl(){}ze(jl,Xf);jl.prototype.g=function(){return new XMLHttpRequest};jl.prototype.i=function(){return{}};qu=new jl;function Po(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new io(this),this.P=jM,t=Bu?125:void 0,this.V=new $l(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _E}function _E(){this.i=null,this.g="",this.h=!1}var jM=45e3,Ku={},Ka={};W=Po.prototype;W.setTimeout=function(t){this.P=t};function zu(t,e,n){t.L=1,t.v=Wl(On(e)),t.s=n,t.S=!0,yE(t,null)}function yE(t,e){t.G=Date.now(),No(t),t.A=On(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),SE(n.i,"t",s),t.C=0,n=t.l.J,t.h=new _E,t.g=zE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new DM(lt(t.Pa,t,t.g),t.O)),fE(t.U,t.g,"readystatechange",t.nb),e=t.I?nE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ro(),MM(t.j,t.u,t.A,t.m,t.W,t.s)}W.nb=function(t){t=t.target;const e=this.M;e&&cn(t)==3?e.l():this.Pa(t)};W.Pa=function(t){try{if(t==this.g)e:{const u=cn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Bu||this.g&&(this.h.h||this.g.ja()||om(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ro(3):ro(2)),Bl(this);var n=this.g.da();this.ca=n;t:if(vE(this)){var s=om(this.g);t="";var i=s.length,r=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Es(this),kr(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,LM(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zr(a)){var c=a;break t}}c=null}if(n=c)ni(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gu(this,n);else{this.i=!1,this.o=3,gt(12),Es(this),kr(this);break e}}this.S?(wE(this,u,o),Bu&&this.i&&u==3&&(fE(this.U,this.V,"tick",this.mb),this.V.start())):(ni(this.j,this.m,o,null),Gu(this,o)),u==4&&Es(this),this.i&&!this.J&&(u==4?WE(this.l,this):(this.i=!1,No(this)))}else lL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),Es(this),kr(this)}}}catch{}finally{}};function vE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wE(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=BM(t,n),i==Ka){e==4&&(t.o=4,gt(14),s=!1),ni(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ku){t.o=4,gt(15),ni(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ni(t.j,t.m,i,null),Gu(t,i);vE(t)&&i!=Ka&&i!=Ku&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),id(e),e.M=!0,gt(11))):(ni(t.j,t.m,n,"[Invalid Chunked Response]"),Es(t),kr(t))}W.mb=function(){if(this.g){var t=cn(this.g),e=this.g.ja();this.C<e.length&&(Bl(this),wE(this,t,e),this.i&&t!=4&&No(this))}};function BM(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ka:(n=Number(e.substring(n,s)),isNaN(n)?Ku:(s+=1,s+n>e.length?Ka:(e=e.slice(s,s+n),t.C=s+n,e)))}W.cancel=function(){this.J=!0,Es(this)};function No(t){t.Y=Date.now()+t.P,EE(t,t.P)}function EE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ko(lt(t.lb,t),e)}function Bl(t){t.B&&(te.clearTimeout(t.B),t.B=null)}W.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(FM(this.j,this.A),this.L!=2&&(ro(),gt(17)),Es(this),this.o=2,kr(this)):EE(this,this.Y-t)};function kr(t){t.l.H==0||t.J||WE(t.l,t)}function Es(t){Bl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Kf(t.V),dE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Gu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Yu(n.i,t))){if(!t.K&&Yu(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ya(n),zl(n);else break e;sd(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ko(lt(n.ib,n),6e3));if(1>=AE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else bs(n,11)}else if((t.K||n.g==t)&&Ya(n),!Zr(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zf(r,r.h),r.h=null))}if(s.F){const E=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.Da=E,Se(s.I,s.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=KE(s,s.J?s.pa:null,s.Y),o.K){PE(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Bl(a),No(a)),s.g=o}else jE(s);0<n.j.length&&Gl(n)}else c[0]!="stop"&&c[0]!="close"||bs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?bs(n,7):nd(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ro(4)}catch{}}function WM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ml(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function VM(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ml(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function bE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ml(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=VM(t),s=WM(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var TE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function As(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof As){this.h=t.h,za(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l;var e=t.i,n=new oo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sm(this,n),this.o=t.o}else t&&(e=String(t).match(TE))?(this.h=!1,za(this,e[1]||"",!0),this.s=fr(e[2]||""),this.g=fr(e[3]||"",!0),Ga(this,e[4]),this.l=fr(e[5]||"",!0),sm(this,e[6]||"",!0),this.o=fr(e[7]||"")):(this.h=!1,this.i=new oo(null,this.h))}As.prototype.toString=function(){var t=[],e=this.j;e&&t.push(dr(e,im,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(dr(e,im,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(dr(n,n.charAt(0)=="/"?GM:zM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",dr(n,XM)),t.join("")};function On(t){return new As(t)}function za(t,e,n){t.j=n?fr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sm(t,e,n){e instanceof oo?(t.i=e,JM(t.i,t.h)):(n||(e=dr(e,YM)),t.i=new oo(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Wl(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var im=/[#\/\?@]/g,zM=/[#\?:]/g,GM=/[#\?]/g,YM=/[#\?@]/g,XM=/#/g;function oo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function us(t){t.g||(t.g=new Map,t.h=0,t.i&&qM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}W=oo.prototype;W.add=function(t,e){us(this),this.i=null,t=Gi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function IE(t,e){us(t),e=Gi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function CE(t,e){return us(t),e=Gi(t,e),t.g.has(e)}W.forEach=function(t,e){us(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};W.ta=function(){us(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};W.Z=function(t){us(this);let e=[];if(typeof t=="string")CE(this,t)&&(e=e.concat(this.g.get(Gi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};W.set=function(t,e){return us(this),this.i=null,t=Gi(this,t),CE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};W.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function SE(t,e,n){IE(t,e),0<n.length&&(t.i=null,t.g.set(Gi(t,e),Ff(n)),t.h+=n.length)}W.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Gi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JM(t,e){e&&!t.j&&(us(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(IE(this,s),SE(this,i,n))},t)),t.j=e}var QM=class{constructor(t,e){this.g=t,this.map=e}};function RE(t){this.l=t||ZM,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZM=10;function kE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function AE(t){return t.h?1:t.g?t.g.size:0}function Yu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zf(t,e){t.g?t.g.add(e):t.h=e}function PE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}RE.prototype.cancel=function(){if(this.i=NE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function NE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ff(t.i)}var eL=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function tL(){this.g=new eL}function nL(t,e,n){const s=n||"";try{bE(t,function(i,r){let o=i;So(i)&&(o=Vf(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function sL(t,e){const n=new Hl;if(te.Image){const s=new Image;s.onload=Zo(ta,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Zo(ta,n,s,"TestLoadImage: error",!1,e),s.onabort=Zo(ta,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Zo(ta,n,s,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ta(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Vl(t){this.l=t.fc||null,this.j=t.ob||!1}ze(Vl,Xf);Vl.prototype.g=function(){return new ql(this.l,this.j)};Vl.prototype.i=function(t){return function(){return t}}({});function ql(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ed,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(ql,Ke);var ed=0;W=ql.prototype;W.open=function(t,e){if(this.readyState!=ed)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ao(this)};W.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};W.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oo(this)),this.readyState=ed};W.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ao(this)),this.g&&(this.readyState=3,ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function OE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}W.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Oo(this):ao(this),this.readyState==3&&OE(this)}};W.Za=function(t){this.g&&(this.response=this.responseText=t,Oo(this))};W.Ya=function(t){this.g&&(this.response=t,Oo(this))};W.ka=function(){this.g&&Oo(this)};function Oo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ao(t)}W.setRequestHeader=function(t,e){this.v.append(t,e)};W.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};W.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iL=te.JSON.parse;function xe(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=xE,this.L=this.M=!1}ze(xe,Ke);var xE="",rL=/^https?$/i,oL=["POST","PUT"];W=xe.prototype;W.Oa=function(t){this.M=t};W.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qu.g(),this.C=this.u?nm(this.u):nm(qu),this.g.onreadystatechange=lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){rm(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=Qw(oL,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{LE(this),0<this.B&&((this.L=aL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.ua,this)):this.A=zf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){rm(this,r)}};function aL(t){return eo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}W.ua=function(){typeof Lf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function rm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,DE(t),Kl(t)}function DE(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}W.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),Kl(this))};W.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kl(this,!0)),xe.$.N.call(this)};W.La=function(){this.s||(this.G||this.v||this.l?ME(this):this.kb())};W.kb=function(){ME(this)};function ME(t){if(t.h&&typeof Lf<"u"&&(!t.C[1]||cn(t)!=4||t.da()!=2)){if(t.v&&cn(t)==4)zf(t.La,0,t);else if(Ze(t,"readystatechange"),cn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(TE)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),s=!rL.test(i?i.toLowerCase():"")}n=s}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var r=2<cn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",DE(t)}}finally{Kl(t)}}}}function Kl(t,e){if(t.g){LE(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function LE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}W.isActive=function(){return!!this.g};function cn(t){return t.g?t.g.readyState:0}W.da=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}};W.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};W.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iL(e)}};function om(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case xE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function lL(t){const e={};t=(t.g&&2<=cn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Zr(t[s]))continue;var n=NM(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}IM(e,function(s){return s.join(", ")})}W.Ia=function(){return this.m};W.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function FE(t){let e="";return $f(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function td(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=FE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function rr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function UE(t){this.Ga=0,this.j=[],this.l=new Hl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rr("baseRetryDelayMs",5e3,t),this.hb=rr("retryDelaySeedMs",1e4,t),this.eb=rr("forwardChannelMaxRetries",2,t),this.xa=rr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new RE(t&&t.concurrentRequestLimit),this.Ja=new tL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}W=UE.prototype;W.ra=8;W.H=1;function nd(t){if($E(t),t.H==3){var e=t.W++,n=On(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),xo(t,n),e=new Po(t,t.l,e),e.L=2,e.v=Wl(On(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=zE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),No(e)}qE(t)}function zl(t){t.g&&(id(t),t.g.cancel(),t.g=null)}function $E(t){zl(t),t.u&&(te.clearTimeout(t.u),t.u=null),Ya(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Gl(t){if(!kE(t.i)&&!t.m){t.m=!0;var e=t.Na;no||uE(),so||(no(),so=!0),qf.add(e,t),t.C=0}}function cL(t,e){return AE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ko(lt(t.Na,t,e),VE(t,t.C)),t.C++,!0)}W.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Po(this,this.l,t);let r=this.s;if(this.U&&(r?(r=nE(r),sE(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=HE(this,i,e),n=On(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),xo(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(FE(r)))+"&"+e:this.o&&td(n,this.o,r)),Zf(this.i,i),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),i.aa=!0,zu(i,n,null)):zu(i,n,e),this.H=2}}else this.H==3&&(t?am(this,t):this.j.length==0||kE(this.i)||am(this))};function am(t,e){var n;e?n=e.m:n=t.W++;const s=On(t.I);Se(s,"SID",t.K),Se(s,"RID",n),Se(s,"AID",t.V),xo(t,s),t.o&&t.s&&td(s,t.o,t.s),n=new Po(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=HE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Zf(t.i,n),zu(n,s,e)}function xo(t,e){t.na&&$f(t.na,function(n,s){Se(e,s,n)}),t.h&&bE({},function(n,s){Se(e,s,n)})}function HE(t,e,n){n=Math.min(t.j.length,n);var s=t.h?lt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{nL(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function jE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;no||uE(),so||(no(),so=!0),qf.add(e,t),t.A=0}}function sd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ko(lt(t.Ma,t),VE(t,t.A)),t.A++,!0)}W.Ma=function(){if(this.u=null,BE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ko(lt(this.jb,this),t)}};W.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),zl(this),BE(this))};function id(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function BE(t){t.g=new Po(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=On(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),xo(t,e),t.o&&t.s&&td(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Wl(On(e)),n.s=null,n.S=!0,yE(n,t)}W.ib=function(){this.v!=null&&(this.v=null,zl(this),sd(this),gt(19))};function Ya(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function WE(t,e){var n=null;if(t.g==e){Ya(t),id(t),t.g=null;var s=2}else if(Yu(t.i,e))n=e.F,PE(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Gf(),Ze(s,new mE(s,n)),Gl(t)}else jE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&cL(t,e)||s==2&&sd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:bs(t,5);break;case 4:bs(t,10);break;case 3:bs(t,6);break;default:bs(t,2)}}}function VE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function bs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=lt(t.pb,t);n||(n=new As("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||za(n,"https"),Wl(n)),sL(n.toString(),s)}else gt(2);t.H=0,t.h&&t.h.za(e),qE(t),$E(t)}W.pb=function(t){t?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function qE(t){if(t.H=0,t.ma=[],t.h){const e=NE(t.i);(e.length!=0||t.j.length!=0)&&(Xg(t.ma,e),Xg(t.ma,t.j),t.i.i.length=0,Ff(t.j),t.j.length=0),t.h.ya()}}function KE(t,e,n){var s=n instanceof As?On(n):new As(n);if(s.g!="")e&&(s.g=e+"."+s.g),Ga(s,s.m);else{var i=te.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new As(null);s&&za(r,s),e&&(r.g=e),i&&Ga(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Se(s,n,e),Se(s,"VER",t.ra),xo(t,s),s}function zE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xe(new Vl({ob:!0})):new xe(t.va),e.Oa(t.J),e}W.isActive=function(){return!!this.h&&this.h.isActive(this)};function GE(){}W=GE.prototype;W.Ba=function(){};W.Aa=function(){};W.za=function(){};W.ya=function(){};W.isActive=function(){return!0};W.Va=function(){};function Bt(t,e){Ke.call(this),this.g=new UE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Zr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yi(this)}ze(Bt,Ke);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=KE(t,null,t.Y),Gl(t)};Bt.prototype.close=function(){nd(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vf(t),t=n);e.j.push(new QM(e.fb++,t)),e.H==3&&Gl(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,nd(this.g),delete this.g,Bt.$.N.call(this)};function YE(t){Jf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(YE,Jf);function XE(){Qf.call(this),this.status=1}ze(XE,Qf);function Yi(t){this.g=t}ze(Yi,GE);Yi.prototype.Ba=function(){Ze(this.g,"a")};Yi.prototype.Aa=function(t){Ze(this.g,new YE(t))};Yi.prototype.za=function(t){Ze(this.g,new XE)};Yi.prototype.ya=function(){Ze(this.g,"b")};function uL(){this.blockSize=-1}function gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(gn,uL);gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Fc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}gn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Fc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Fc(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Fc(this,s),i=0;break}}this.h=i,this.i+=e};gn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function _e(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var hL={};function rd(t){return-128<=t&&128>t?yM(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function un(t){if(isNaN(t)||!isFinite(t))return yi;if(0>t)return Qe(un(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Xu;return new _e(e,0)}function JE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(JE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=un(Math.pow(e,8)),s=yi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=un(Math.pow(e,r)),s=s.R(r).add(un(o))):(s=s.R(n),s=s.add(un(o)))}return s}var Xu=4294967296,yi=rd(0),Ju=rd(1),lm=rd(16777216);W=_e.prototype;W.ea=function(){if(Ft(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Xu+s)*e,e*=Xu}return t};W.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Cn(this))return"0";if(Ft(this))return"-"+Qe(this).toString(t);for(var e=un(Math.pow(t,6)),n=this,s="";;){var i=Ja(n,e).g;n=Xa(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Cn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};W.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}W.X=function(t){return t=Xa(this,t),Ft(t)?-1:Cn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new _e(n,~t.h).add(Ju)}W.abs=function(){return Ft(this)?Qe(this):this};W.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function Xa(t,e){return t.add(Qe(e))}W.R=function(t){if(Cn(this)||Cn(t))return yi;if(Ft(this))return Ft(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(Ft(t))return Qe(this.R(Qe(t)));if(0>this.X(lm)&&0>t.X(lm))return un(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,na(n,2*s+2*i),n[2*s+2*i+1]+=r*l,na(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,na(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,na(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new _e(n,0)};function na(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function or(t,e){this.g=t,this.h=e}function Ja(t,e){if(Cn(e))throw Error("division by zero");if(Cn(t))return new or(yi,yi);if(Ft(t))return e=Ja(Qe(t),e),new or(Qe(e.g),Qe(e.h));if(Ft(e))return e=Ja(t,Qe(e)),new or(Qe(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ju,s=e;0>=s.X(t);)n=cm(n),s=cm(s);var i=Ys(n,1),r=Ys(s,1);for(s=Ys(s,2),n=Ys(n,2);!Cn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Ys(s,1),n=Ys(n,1)}return e=Xa(t,i.R(e)),new or(i,e)}for(i=yi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=un(n),o=r.R(e);Ft(o)||0<o.X(t);)n-=s,r=un(n),o=r.R(e);Cn(r)&&(r=Ju),i=i.add(r),t=Xa(t,o)}return new or(i,t)}W.gb=function(t){return Ja(this,t).h};W.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new _e(n,this.h&t.h)};W.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new _e(n,this.h|t.h)};W.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new _e(n,this.h^t.h)};function cm(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new _e(n,t.h)}function Ys(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new _e(i,t.h)}Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Yf.NO_ERROR=0;Yf.TIMEOUT=8;Yf.HTTP_ERROR=6;$M.COMPLETE="complete";HM.EventType=Ao;Ao.OPEN="a";Ao.CLOSE="b";Ao.ERROR="c";Ao.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;gn.prototype.digest=gn.prototype.l;gn.prototype.reset=gn.prototype.reset;gn.prototype.update=gn.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=un;_e.fromString=JE;var fL=_e;const um="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new po("@firebase/firestore");function Nt(t,...e){if(Oi.logLevel<=pe.DEBUG){const n=e.map(ad);Oi.debug(`Firestore (${Do}): ${t}`,...n)}}function od(t,...e){if(Oi.logLevel<=pe.ERROR){const n=e.map(ad);Oi.error(`Firestore (${Do}): ${t}`,...n)}}function dL(t,...e){if(Oi.logLevel<=pe.WARN){const n=e.map(ad);Oi.warn(`Firestore (${Do}): ${t}`,...n)}}function ad(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t="Unexpected state"){const e=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: `+t;throw od(e),new Error(e)}function Qu(t,e){t||ld()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ot extends Wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class gL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mL{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qu(typeof s.accessToken=="string"),new QE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Qu(e===null||typeof e=="string"),new tt(e)}}class _L{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yL{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new _L(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&Nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Nt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):Nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qu(typeof n.token=="string"),this.T=n.token,new vL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=EL(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ZE(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Qa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hm,he;(he=hm||(hm={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new fL([4294967295,4294967295],0);function Uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&Nt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new cd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ot(rt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function CL(t,e){if(od("AsyncQueue",`${e}: ${t}`),ZE(t))return new ot(rt.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=bL.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Nt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Nt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ot(rt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=CL(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new Map;function RL(t,e,n,s){if(e===!0&&s===!0)throw new ot(rt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kL(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ld()}function AL(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ot(rt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kL(t);throw new ot(rt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ot(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ot(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=e0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ot(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ot(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ot(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class t0{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ot(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ot(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pL;switch(n.type){case"firstParty":return new yL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ot(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=fm.get(e);n&&(Nt("ComponentProvider","Removing Datastore"),fm.delete(e),n.terminate())}(this),Promise.resolve()}}function PL(t,e,n,s={}){var i;const r=(t=AL(t,t0))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&dL("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=tt.MOCK_USER;else{o=Dh(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new ot(rt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(l)}t._authCredentials=new gL(new QE(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new IL(this,"async_queue_retry"),this.Xc=()=>{const n=Uc();n&&Nt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Uc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new vi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ZE(e))throw e;Nt("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw od("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=cd.createAndSchedule(this,e,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&ld()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class OL extends t0{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new NL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||DL(this),this._firestoreClient.terminate()}}function xL(t,e){const n=typeof t=="object"?t:go(),s=typeof t=="string"?t:e||"(default)",i=Ln(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=xh("firestore");r&&PL(i,...r)}return i}function DL(t){var e,n,s;const i=t._freezeSettings(),r=function(o,a,l,c){return new TL(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,e0(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new SL(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Do=n})(as),jt(new xt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new OL(new mL(n.getProvider("auth-internal")),new wL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ot(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),at(um,"3.12.1",t),at(um,"3.12.1","esm2017")})();const ML=(t,e)=>e.some(n=>t instanceof n);let pm,gm;function LL(){return pm||(pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FL(){return gm||(gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n0=new WeakMap,Zu=new WeakMap,s0=new WeakMap,$c=new WeakMap,ud=new WeakMap;function UL(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ns(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n0.set(n,t)}).catch(()=>{}),ud.set(e,t),e}function $L(t){if(Zu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||s0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ns(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HL(t){eh=t(eh)}function jL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Hc(this),e,...n);return s0.set(s,e.sort?e.sort():[e]),ns(s)}:FL().includes(t)?function(...e){return t.apply(Hc(this),e),ns(n0.get(this))}:function(...e){return ns(t.apply(Hc(this),e))}}function BL(t){return typeof t=="function"?jL(t):(t instanceof IDBTransaction&&$L(t),ML(t,LL())?new Proxy(t,eh):t)}function ns(t){if(t instanceof IDBRequest)return UL(t);if($c.has(t))return $c.get(t);const e=BL(t);return e!==t&&($c.set(t,e),ud.set(e,t)),e}const Hc=t=>ud.get(t);function WL(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ns(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ns(o.result),l.oldVersion,l.newVersion,ns(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const VL=["get","getKey","getAll","getAllKeys","count"],qL=["put","add","delete","clear"],jc=new Map;function mm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=qL.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||VL.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return jc.set(e,r),r}HL(t=>({...t,get:(e,n,s)=>mm(e,n)||t.get(e,n,s),has:(e,n)=>!!mm(e,n)||t.has(e,n)}));const i0="@firebase/installations",hd="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=1e4,o0=`w:${hd}`,a0="FIS_v2",KL="https://firebaseinstallations.googleapis.com/v1",zL=60*60*1e3,GL="installations",YL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},$s=new Bs(GL,YL,XL);function l0(t){return t instanceof Wt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0({projectId:t}){return`${KL}/projects/${t}/installations`}function u0(t){return{token:t.token,requestStatus:2,expiresIn:QL(t.expiresIn),creationTime:Date.now()}}async function h0(t,e){const s=(await e.json()).error;return $s.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function f0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function JL(t,{refreshToken:e}){const n=f0(t);return n.append("Authorization",ZL(e)),n}async function d0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function QL(t){return Number(t.replace("s","000"))}function ZL(t){return`${a0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=c0(t),i=f0(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:a0,appId:t.appId,sdkVersion:o0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await d0(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:u0(c.authToken)}}else throw await h0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=/^[cdef][\w-]{21}$/,th="";function s2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=i2(t);return n2.test(n)?n:th}catch{return th}}function i2(t){return t2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new Map;function m0(t,e){const n=Yl(t);_0(n,e),r2(n,e)}function _0(t,e){const n=g0.get(t);if(n)for(const s of n)s(e)}function r2(t,e){const n=o2();n&&n.postMessage({key:t,fid:e}),a2()}let Ts=null;function o2(){return!Ts&&"BroadcastChannel"in self&&(Ts=new BroadcastChannel("[Firebase] FID Change"),Ts.onmessage=t=>{_0(t.data.key,t.data.fid)}),Ts}function a2(){g0.size===0&&Ts&&(Ts.close(),Ts=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2="firebase-installations-database",c2=1,Hs="firebase-installations-store";let Bc=null;function fd(){return Bc||(Bc=WL(l2,c2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hs)}}})),Bc}async function Za(t,e){const n=Yl(t),i=(await fd()).transaction(Hs,"readwrite"),r=i.objectStore(Hs),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&m0(t,e.fid),e}async function y0(t){const e=Yl(t),s=(await fd()).transaction(Hs,"readwrite");await s.objectStore(Hs).delete(e),await s.done}async function Xl(t,e){const n=Yl(t),i=(await fd()).transaction(Hs,"readwrite"),r=i.objectStore(Hs),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&m0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(t){let e;const n=await Xl(t.appConfig,s=>{const i=u2(s),r=h2(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===th?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function u2(t){const e=t||{fid:s2(),registrationStatus:0};return v0(e)}function h2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($s.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=f2(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:d2(t)}:{installationEntry:e}}async function f2(t,e){try{const n=await e2(t,e);return Za(t.appConfig,n)}catch(n){throw l0(n)&&n.customData.serverCode===409?await y0(t.appConfig):await Za(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function d2(t){let e=await _m(t.appConfig);for(;e.registrationStatus===1;)await p0(100),e=await _m(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await dd(t);return s||n}return e}function _m(t){return Xl(t,e=>{if(!e)throw $s.create("installation-not-found");return v0(e)})}function v0(t){return p2(t)?{fid:t.fid,registrationStatus:0}:t}function p2(t){return t.registrationStatus===1&&t.registrationTime+r0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2({appConfig:t,heartbeatServiceProvider:e},n){const s=m2(t,n),i=JL(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:o0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await d0(()=>fetch(s,a));if(l.ok){const c=await l.json();return u0(c)}else throw await h0("Generate Auth Token",l)}function m2(t,{fid:e}){return`${c0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t,e=!1){let n;const s=await Xl(t.appConfig,r=>{if(!w0(r))throw $s.create("not-registered");const o=r.authToken;if(!e&&v2(o))return r;if(o.requestStatus===1)return n=_2(t,e),r;{if(!navigator.onLine)throw $s.create("app-offline");const a=E2(r);return n=y2(t,a),a}});return n?await n:s.authToken}async function _2(t,e){let n=await ym(t.appConfig);for(;n.authToken.requestStatus===1;)await p0(100),n=await ym(t.appConfig);const s=n.authToken;return s.requestStatus===0?pd(t,e):s}function ym(t){return Xl(t,e=>{if(!w0(e))throw $s.create("not-registered");const n=e.authToken;return b2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function y2(t,e){try{const n=await g2(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Za(t.appConfig,s),n}catch(n){if(l0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await y0(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Za(t.appConfig,s)}throw n}}function w0(t){return t!==void 0&&t.registrationStatus===2}function v2(t){return t.requestStatus===2&&!w2(t)}function w2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zL}function E2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function b2(t){return t.requestStatus===1&&t.requestTime+r0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(t){const e=t,{installationEntry:n,registrationPromise:s}=await dd(e);return s?s.catch(console.error):pd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(t,e=!1){const n=t;return await C2(n),(await pd(n,e)).token}async function C2(t){const{registrationPromise:e}=await dd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){if(!t||!t.options)throw Wc("App Configuration");if(!t.name)throw Wc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wc(t){return $s.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="installations",R2="installations-internal",k2=t=>{const e=t.getProvider("app").getImmediate(),n=S2(e),s=Ln(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},A2=t=>{const e=t.getProvider("app").getImmediate(),n=Ln(e,E0).getImmediate();return{getId:()=>T2(n),getToken:i=>I2(n,i)}};function P2(){jt(new xt(E0,k2,"PUBLIC")),jt(new xt(R2,A2,"PRIVATE"))}P2();at(i0,hd);at(i0,hd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="analytics",N2="firebase_id",O2="origin",x2=60*1e3,D2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new po("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new Bs("analytics","Analytics",M2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(t){if(!t.startsWith(gd)){const e=Ot.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function b0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function F2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function U2(t,e){const n=F2("firebase-js-sdk-policy",{createScriptURL:L2}),s=document.createElement("script"),i=`${gd}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function $2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function H2(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await b0(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){St.error(a)}t("config",i,r)}async function j2(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await b0(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){St.error(r)}}function B2(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await j2(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await H2(t,e,n,s,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){St.error(a)}}return i}function W2(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=B2(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function V2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gd)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=30,K2=1e3;class z2{constructor(e={},n=K2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const T0=new z2;function G2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Y2(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:G2(s)},r=D2.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function X2(t,e=T0,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Ot.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Ot.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Z2;return setTimeout(async()=>{a.abort()},n!==void 0?n:x2),I0({appId:s,apiKey:i,measurementId:r},o,a,e)}async function I0(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=T0){var r;const{appId:o,measurementId:a}=t;try{await J2(s,e)}catch(l){if(a)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Y2(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Q2(c)){if(i.deleteThrottleMetadata(o),a)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Lp(n,i.intervalMillis,q2):Lp(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),St.debug(`Calling attemptFetch again in ${u} millis`),I0(t,h,s,i)}}function J2(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Q2(t){if(!(t instanceof Wt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Z2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function eF(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tF(){if(Ny())try{await Oy()}catch(t){return St.warn(Ot.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nF(t,e,n,s,i,r,o){var a;const l=X2(t);l.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>St.error(d)),e.push(l);const c=tF().then(d=>{if(d)return s.getId()}),[u,h]=await Promise.all([l,c]);V2(r)||U2(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[O2]="firebase",f.update=!0,h!=null&&(f[N2]=h),i("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e){this.app=e}_delete(){return delete Ar[this.app.options.appId],Promise.resolve()}}let Ar={},vm=[];const wm={};let Vc="dataLayer",iF="gtag",Em,C0,bm=!1;function rF(){const t=[];if(ky()&&t.push("This is a browser extension environment."),pk()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Ot.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function oF(t,e,n){rF();const s=t.options.appId;if(!s)throw Ot.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(Ar[s]!=null)throw Ot.create("already-exists",{id:s});if(!bm){$2(Vc);const{wrappedGtag:r,gtagCore:o}=W2(Ar,vm,wm,Vc,iF);C0=r,Em=o,bm=!0}return Ar[s]=nF(t,vm,wm,e,Em,Vc,n),new sF(t)}function aF(t=go()){t=Pe(t);const e=Ln(t,el);return e.isInitialized()?e.getImmediate():lF(t)}function lF(t,e={}){const n=Ln(t,el);if(n.isInitialized()){const i=n.getImmediate();if(jr(e,n.getOptions()))return i;throw Ot.create("already-initialized")}return n.initialize({options:e})}function cF(t,e,n,s){t=Pe(t),eF(C0,Ar[t.app.options.appId],e,n,s).catch(i=>St.error(i))}const Tm="@firebase/analytics",Im="0.10.0";function uF(){jt(new xt(el,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return oF(s,i,n)},"PUBLIC")),jt(new xt("analytics-internal",t,"PRIVATE")),at(Tm,Im),at(Tm,Im,"esm2017");function t(e){try{const n=e.getProvider(el).getImmediate();return{logEvent:(s,i,r)=>cF(n,s,i,r)}}catch(n){throw Ot.create("interop-component-reg-failed",{reason:n})}}}uF();const hF=Dn(t=>{const n=Ly({apiKey:"AIzaSyBi8dJvahsGnlEJxt2XW9CbCVCZ_F8QbIA",authDomain:"eco-enzym.firebaseapp.com",databaseUrl:"https://aqualora-a7bea-default-rtdb.asia-southeast1.firebasedatabase.app/",projectId:"eco-enzym",storageBucket:"eco-enzym.appspot.com",messagingSenderId:"1090135367285",appId:"1:1090135367285:web:024ab437397e3ea199623c",measurementId:"G-57LTEMH91G"}),s=aF(n),i=UN(n),r=xL(n),o=aM(n),a=Bx(n);t.vueApp.provide("auth",i),t.provide("auth",i),t.vueApp.provide("firestore",r),t.provide("firestore",r),t.vueApp.provide("storage",o),t.provide("storage",o),t.vueApp.provide("database",a),t.provide("database",a),t.vueApp.provide("analytics",s),t.provide("analytics",s)}),fF=[DS,MS,LS,KR,zR,JR,QR,sk,hF],Cm={pwaInDevEnvironment:!1,webManifest:{href:"/manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="/manifest.webmanifest">'}},dF=mn({async setup(){if(Cm){const t=qe({link:[]});mS(t);const{webManifest:e}=Cm;if(e){const{href:n,useCredentials:s}=e;s?t.value.link.push({rel:"manifest",href:n,crossorigin:"use-credentials"}):t.value.link.push({rel:"manifest",href:n})}}return()=>null}}),pF=mn({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=gF({duration:t.duration,throttle:t.throttle}),s=et();return s.hook("page:start",n.start),s.hook("page:finish",n.finish),s.hook("vue:error",n.finish),uo(n.clear),()=>Qt("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:"auto",height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color||void 0,backgroundSize:`${100/n.progress.value*100}% auto`,transform:`scaleX(${n.progress.value}%)`,transformOrigin:"left",transition:"transform 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function gF(t){const e=qe(0),n=qe(!1),s=it(()=>1e4/t.duration);let i=null,r=null;function o(){l(),e.value=0,t.throttle?r=setTimeout(()=>{n.value=!0,h()},t.throttle):(n.value=!0,h())}function a(){e.value=100,u()}function l(){clearInterval(i),clearTimeout(r),i=null,r=null}function c(f){e.value=Math.min(100,e.value+f)}function u(){l(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function h(){i=setInterval(()=>{c(s.value)},100)}return{progress:e,isLoading:n,start:o,finish:a,clear:l}}const mF=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),_F=(t,e)=>{const n=t.route.matched.find(i=>{var r;return((r=i.components)==null?void 0:r.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&mF(t.route,n));return typeof s=="function"?s(t.route):s},yF=(t,e)=>({default:()=>t?Qt(qb,t===!0?{}:t,e):e}),nh=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var s;return e?Qt(t,e,n):(s=n.default)==null?void 0:s.call(n)}}),vF=mn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e}){const n=et();return()=>Qt(vy,{name:t.name,route:t.route,...e},{default:s=>{if(!s.Component)return;const i=_F(s,t.pageKey),r=n.deferHydration(),o=!!(t.transition??s.route.meta.pageTransition??hu),a=o&&EF([t.transition,s.route.meta.pageTransition,hu,{onAfterLeave:()=>{n.callHook("page:transition:finish",s.Component)}}].filter(Boolean));return nh(dl,o&&a,yF(t.keepalive??s.route.meta.keepalive??vS,Qt(r_,{suspensible:!0,onPending:()=>n.callHook("page:start",s.Component),onResolve:()=>{js(()=>n.callHook("page:finish",s.Component).finally(r))}},{default:()=>Qt(bF,{key:i,routeProps:s,pageKey:i,hasTransition:o})}))).default()}})}});function wF(t){return Array.isArray(t)?t:t?[t]:[]}function EF(t){const e=t.map(n=>({...n,onAfterLeave:wF(n.onAfterLeave)}));return SS(...e)}const bF=mn({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(t){const e=t.pageKey,n=t.routeProps.route,s={};for(const i in t.routeProps.route)s[i]=it(()=>e===t.pageKey?t.routeProps.route[i]:n[i]);return hi("_route",Ht(s)),()=>Qt(t.routeProps.Component)}}),TF=mn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(t,e){const n=await Zs[t.name]().then(s=>s.default||s);return()=>Qt(n,e.attrs,e.slots)}}),IF=mn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=Tt("_route"),s=n===ay()?$R():n,i=it(()=>$e(t.name)??s.meta.layout??"default");return()=>{const r=i.value&&i.value in Zs,o=s.meta.layoutTransition??yS;return nh(dl,r&&o,{default:()=>nh(TF,r&&{key:i.value,name:i.value,...e.attrs},e.slots).default()}).default()}}}),CF=mn({__name:"app",setup(t){return ul(()=>{document.documentElement.dataset.theme="light"}),(e,n)=>{const s=dF,i=pF,r=vF,o=IF;return qn(),_T("div",null,[Re(s),Re(i),Re(o,null,{default:mh(()=>[Re(r)]),_:1})])}}});const Sm={__name:"nuxt-root",setup(t){const e=Wb(()=>vn(()=>import("./error-component.cb634219.js"),[],import.meta.url).then(l=>l.default||l)),n=()=>null,s=et(),i=s.deferHydration(),r=!1;hi("_route",ay()),s.hooks.callHookWith(l=>l.map(c=>c()),"vue:setup");const o=ml();m_((l,c,u)=>{if(s.hooks.callHook("vue:error",l,c,u).catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),xS(l)&&(l.fatal||l.unhandled))return s.runWithContext(()=>Qs(l)),!1});const{islandContext:a}=!1;return(l,c)=>(qn(),Xs(r_,{onResolve:$e(i)},{default:mh(()=>[$e(o)?(qn(),Xs($e(e),{key:0,error:$e(o)},null,8,["error"])):$e(a)?(qn(),Xs($e(n),{key:1,context:$e(a)},null,8,["context"])):$e(r)?(qn(),Xs(Qb($e(r)),{key:2})):(qn(),Xs($e(CF),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=GI.create({baseURL:XI()}));let Rm;const SF=fC(fF);{let t;Rm=async function(){var r,o;if(t)return t;const s=!!((r=window.__NUXT__)!=null&&r.serverRendered||((o=document.getElementById("__NUXT_DATA__"))==null?void 0:o.dataset.ssr)==="true")?lI(Sm):aI(Sm),i=cC({vueApp:s});try{await hC(i,SF)}catch(a){await i.callHook("app:error",a),i.payload.error=i.payload.error||a}try{await i.hooks.callHook("app:created",s),await i.hooks.callHook("app:beforeMount",s),s.mount("#"+wS),await i.hooks.callHook("app:mounted",s),await js()}catch(a){await i.callHook("app:error",a),i.payload.error=i.payload.error||a}return s},t=Rm().catch(e=>{console.error("Error while mounting app:",e)})}export{AF as $,je as A,kF as B,xF as C,MF as D,ZT as E,Mt as F,sl as G,zF as H,qF as I,UN as J,WF as K,JF as L,it as M,nk as N,g_ as O,DF as P,mh as Q,FF as R,LF as S,jF as T,zb as U,Qt as V,Ub as W,mS as X,Ea as Y,UF as Z,vn as _,mn as a,PF as a0,fo as a1,pl as a2,OF as a3,Ch as a4,TI as a5,PI as a6,W_ as a7,$F as a8,HF as b,Xs as c,Wb as d,ul as e,VF as f,vT as g,KF as h,BF as i,uo as j,et as k,QF as l,YF as m,RF as n,qn as o,XF as p,GF as q,qe as r,_T as s,Re as t,$e as u,O_ as v,x_ as w,il as x,NF as y,np as z};
