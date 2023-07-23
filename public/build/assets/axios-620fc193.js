import{M as E,N as M,i as y}from"./app-e73b3323.js";var N={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(a,U){(function(t,i){a.exports=i()})(E,function(){var t={};t.version="0.2.0";var i=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};t.configure=function(e){var r,n;for(r in e)n=e[r],n!==void 0&&e.hasOwnProperty(r)&&(i[r]=n);return this},t.status=null,t.set=function(e){var r=t.isStarted();e=h(e,i.minimum,1),t.status=e===1?null:e;var n=t.render(!r),o=n.querySelector(i.barSelector),u=i.speed,l=i.easing;return n.offsetWidth,x(function(s){i.positionUsing===""&&(i.positionUsing=t.getPositioningCSS()),g(o,T(e,u,l)),e===1?(g(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){g(n,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){t.remove(),s()},u)},u)):setTimeout(s,u)}),this},t.isStarted=function(){return typeof t.status=="number"},t.start=function(){t.status||t.set(0);var e=function(){setTimeout(function(){t.status&&(t.trickle(),e())},i.trickleSpeed)};return i.trickle&&e(),this},t.done=function(e){return!e&&!t.status?this:t.inc(.3+.5*Math.random()).set(1)},t.inc=function(e){var r=t.status;return r?(typeof e!="number"&&(e=(1-r)*h(Math.random()*r,.1,.95)),r=h(r+e,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*i.trickleRate)},function(){var e=0,r=0;t.promise=function(n){return!n||n.state()==="resolved"?this:(r===0&&t.start(),e++,r++,n.always(function(){r--,r===0?(e=0,t.done()):t.set((e-r)/e)}),this)}}(),t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");P(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=i.template;var n=r.querySelector(i.barSelector),o=e?"-100":m(t.status||0),u=document.querySelector(i.parent),l;return g(n,{transition:"all 0 linear",transform:"translate3d("+o+"%,0,0)"}),i.showSpinner||(l=r.querySelector(i.spinnerSelector),l&&C(l)),u!=document.body&&P(u,"nprogress-custom-parent"),u.appendChild(r),r},t.remove=function(){k(document.documentElement,"nprogress-busy"),k(document.querySelector(i.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&C(e)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var e=document.body.style,r="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return r+"Perspective"in e?"translate3d":r+"Transform"in e?"translate":"margin"};function h(e,r,n){return e<r?r:e>n?n:e}function m(e){return(-1+e)*100}function T(e,r,n){var o;return i.positionUsing==="translate3d"?o={transform:"translate3d("+m(e)+"%,0,0)"}:i.positionUsing==="translate"?o={transform:"translate("+m(e)+"%,0)"}:o={"margin-left":m(e)+"%"},o.transition="all "+r+"ms "+n,o}var x=function(){var e=[];function r(){var n=e.shift();n&&n(r)}return function(n){e.push(n),e.length==1&&r()}}(),g=function(){var e=["Webkit","O","Moz","ms"],r={};function n(s){return s.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,f){return f.toUpperCase()})}function o(s){var c=document.body.style;if(s in c)return s;for(var f=e.length,p=s.charAt(0).toUpperCase()+s.slice(1),d;f--;)if(d=e[f]+p,d in c)return d;return s}function u(s){return s=n(s),r[s]||(r[s]=o(s))}function l(s,c,f){c=u(c),s.style[c]=f}return function(s,c){var f=arguments,p,d;if(f.length==2)for(p in c)d=c[p],d!==void 0&&c.hasOwnProperty(p)&&l(s,p,d);else l(s,f[1],f[2])}}();function b(e,r){var n=typeof e=="string"?e:S(e);return n.indexOf(" "+r+" ")>=0}function P(e,r){var n=S(e),o=n+r;b(n,r)||(e.className=o.substring(1))}function k(e,r){var n=S(e),o;b(e,r)&&(o=n.replace(" "+r+" "," "),e.className=o.substring(1,o.length-1))}function S(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function C(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return t})})(N);var q=N.exports;const v=M(q);y.defaults.withCredentials=!1;const w=localStorage.getItem("access_token");w&&(y.defaults.headers.common.Authorization=`Bearer ${w}`);y.interceptors.request.use(function(a){return v.start(),a},function(a){return v.done(),console.error(a),Promise.reject(a)});y.interceptors.response.use(function(a){return v.done(),a},function(a){return v.done(),console.error(a),Promise.reject(a)});
