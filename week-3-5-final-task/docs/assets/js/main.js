!function(e){function t(t){for(var r,u,a=t[0],i=t[1],c=t[2],f=0,s=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(p&&p(t);s.length;)s.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},l=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var p=i;l.push([122,1]),n()}({122:function(e,t,n){"use strict";n.r(t);n(123);var r=n(60),o=n.n(r);n(309);window.bootstrap=o.a;[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(e){return new o.a.Popover(e)})),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new o.a.Tooltip(e)}));var l=document.getElementById("sponsorBtn");function u(){window.pageYOffset>400&&window.pageYOffset<1500?l.classList.remove("d-none"):l.classList.add("d-none")}window.onload=u(),window.addEventListener("scroll",u)},309:function(e,t){}});