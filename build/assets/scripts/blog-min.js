!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";t.exports=function(t){$(".arrow-btn").on("click",function(e){e.preventDefault();var n=$(this).attr("href"),o=$(n).offset().top;$("body,html").animate({scrollTop:o-t},1200)})}},function(t,e,n){"use strict";t.exports=function(){var t=document.querySelector(".burger"),e=document.querySelector(".burger__btn"),n=document.querySelector(".nav-panel"),o=document.querySelector(".nav-panel__items-wrapper"),i=document.body;t.addEventListener("click",function(t){t.preventDefault(),e.classList.toggle("burger__btn--active"),n.classList.toggle("nav-panel--active"),o.classList.toggle("nav-animate"),i.classList.toggle("body-modal-open")})}},function(t,e,n){"use strict";t.exports=function(){var t=document.querySelector(".blog__title-open"),e=document.querySelector(".blog__section-left");t.addEventListener("click",function(){e.classList.toggle("blog__section-left--open"),console.log("click")})}},function(t,e,n){"use strict";t.exports=function(){var t=window,e=document,n=$(".blog__article-item"),o=n.toArray(),i=$("#blog__article-list"),r=$("#blog__article-titles"),c=null;function l(e){var n=e.getBoundingClientRect();return{top:n.top+t.pageYOffset,left:n.left+t.pageXOffset}}function s(){function n(t){t.dataset.idtitle!==c&&($(".blog__title-item").removeClass("blog__title-item--active"),$("#"+t.dataset.idtitle).addClass("blog__title-item--active"),c=t.dataset.idtitle)}t.pageYOffset<l(o[0]).top?n(o[0]):t.pageYOffset+t.innerHeight===e.body.offsetHeight?n(o[o.length-1]):o.forEach(function(e){var o=l(e).top;t.pageYOffset>o-150&&n(e)})}function u(){var e=l(r[0]);t.pageYOffset>=e.top-30?i.css({position:"fixed",top:"30px"}):i.css({position:"static"})}i.length&&n.length&&(i.css({width:i.outerWidth()}),$(t).scroll(function(){u(),s()}),u(),s(),$(t).resize(function(){i.css({width:i.outerWidth()})}))}},function(t,e,n){"use strict";n(1)(),n(3)(),n(2)(),n(0)(35)}]);