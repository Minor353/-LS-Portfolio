!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}({9:function(e,t,r){"use strict";var n,o,a,u,c;n=document.querySelector(".btn-autorization"),o=document.querySelector(".wrapper-greeting__rotate"),a=document.querySelector(".autorization__btn-main"),u=document.querySelector(".index-wrapper"),c=document.querySelector(".wrapper-greeting"),n.addEventListener("click",function(e){e.preventDefault(),o.classList.add("wrapper-greeting__rotate--active")}),a.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("wrapper-greeting__rotate--active")}),u.addEventListener("click",function(e){var t=e.target;t!=u&&t!=c||o.classList.remove("wrapper-greeting__rotate--active")});var i,s,d,l;i=document.querySelector("body"),s=document.querySelector(".index-img"),d=i.offsetWidth/2,l=i.offsetHeight/2,i.onmousemove=function(e){s.setAttribute("style","transform: translate3d("+Math.round((d-e.pageX)/40)+"px, "+Math.round((l-e.pageY)/40)+"px, 0);")}}});