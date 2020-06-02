parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AlqV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.inIframe=void 0,exports.inIframe=function(){try{return window.self!==window.top}catch(e){return!0}};
},{}],"kXwH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateText=exports.updateStorage=exports.ready=void 0,exports.ready=function(t){"loading"!==document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",function(){"loading"!==document.readyState&&t()})},exports.updateStorage=function(){return localStorage.setItem("theme",document.documentElement.classList.contains("dark")?"dark":"light")},exports.updateText=function(t){t&&(t.setAttribute("aria-label",document.documentElement.classList.contains("dark")?"Change theme to light":"Change theme to dark"),t.setAttribute("title",document.documentElement.classList.contains("dark")?"Change theme to light":"Change theme to dark"))};
},{}],"ayC8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=["second","minute","hour","day","week","month","year"];function r(r,t){if(0===t)return["just now","right now"];var o=e[Math.floor(t/2)];return r>1&&(o+="s"),[r+" "+o+" ago","in "+r+" "+o]}
},{}],"NW4Q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=["秒","分钟","小时","天","周","个月","年"];function r(r,t){if(0===t)return["刚刚","片刻后"];var u=e[~~(t/2)];return[r+" "+u+"前",r+" "+u+"后"]}
},{}],"EmKO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLocale=exports.register=void 0;var e={},r=function(r,t){e[r]=t};exports.register=r;var t=function(r){return e[r]||e.en_US};exports.getLocale=t;
},{}],"MFRA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toDate=t,exports.formatDiff=r,exports.diffSec=a,exports.nextInterval=n;var e=[60,60,24,7,365/7/12,12];function t(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function r(t,r){for(var a=t<0?1:0,n=t=Math.abs(t),o=0;t>=e[o]&&o<e.length;o++)t/=e[o];return(t=Math.floor(t))>(0===(o*=2)?9:1)&&(o+=1),r(t,o,n)[a].replace("%s",t.toString())}function a(e,r){return(+(r?t(r):new Date)-+t(e))/1e3}function n(t){for(var r=1,a=0,n=Math.abs(t);t>=e[a]&&a<e.length;a++)t/=e[a],r*=e[a];return n=(n%=r)?r-n:r,Math.ceil(n)}
},{}],"tjpW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.format=void 0;var e=require("./utils/date"),r=require("./register"),t=function(t,i,o){var a=(0,e.diffSec)(t,o&&o.relativeDate);return(0,e.formatDiff)(a,(0,r.getLocale)(i))};exports.format=t;
},{"./utils/date":"MFRA","./register":"EmKO"}],"p2TJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDateAttribute=e,exports.setTimerId=r,exports.getTimerId=i;var t="timeago-id";function e(t){return t.getAttribute("datetime")}function r(e,r){e.setAttribute(t,r)}function i(e){return parseInt(e.getAttribute(t))}
},{}],"h27D":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cancel=o,exports.render=u;var e=require("./utils/dom"),t=require("./utils/date"),r=require("./register"),i={},n=function(e){clearTimeout(e),delete i[e]};function a(r,o,u,c){n((0,e.getTimerId)(r));var f=c.relativeDate,l=c.minInterval,s=(0,t.diffSec)(o,f);r.innerText=(0,t.formatDiff)(s,u);var d=setTimeout(function(){a(r,o,u,c)},Math.min(1e3*Math.max((0,t.nextInterval)(s),l||1),2147483647));i[d]=0,(0,e.setTimerId)(r,d)}function o(t){t?n((0,e.getTimerId)(t)):Object.keys(i).forEach(n)}function u(t,i,n){var o=t.length?t:[t];return o.forEach(function(t){a(t,(0,e.getDateAttribute)(t),(0,r.getLocale)(i),n||{})}),o}
},{"./utils/dom":"p2TJ","./utils/date":"MFRA","./register":"EmKO"}],"xlxX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"register",{enumerable:!0,get:function(){return t.register}}),Object.defineProperty(exports,"format",{enumerable:!0,get:function(){return n.format}}),Object.defineProperty(exports,"render",{enumerable:!0,get:function(){return u.render}}),Object.defineProperty(exports,"cancel",{enumerable:!0,get:function(){return u.cancel}});var e=i(require("./lang/en_US")),r=i(require("./lang/zh_CN")),t=require("./register"),n=require("./format"),u=require("./realtime");function i(e){return e&&e.__esModule?e:{default:e}}(0,t.register)("en_US",e.default),(0,t.register)("zh_CN",r.default);
},{"./lang/en_US":"ayC8","./lang/zh_CN":"NW4Q","./register":"EmKO","./format":"tjpW","./realtime":"h27D"}],"U0t1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return NodeList.prototype.isPrototypeOf(e)},n=function(e){return e&&1===e.nodeType},i=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},r=function(e){try{return Array.isArray(e)?e.filter(t):o(e)?[].slice.call(e).filter(t):n(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(i){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},d=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},a=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,m=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+m+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},m=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i},l=function t(o){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=window.Promise||function(e){function t(){}e(t,t)},u=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce(function(e,t){return[].concat(e,r(t))},[]);return n.filter(function(e){return-1===v.indexOf(e)}).forEach(function(e){v.push(e),e.classList.add("medium-zoom-image")}),g.forEach(function(e){var t=e.type,o=e.listener,i=e.options;n.forEach(function(e){e.addEventListener(t,o,i)})}),w},s=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target,o=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},o=void 0,r=void 0;if(y.container)if(y.container instanceof Object)o=(t=e({},t,y.container)).width-t.left-t.right-2*y.margin,r=t.height-t.top-t.bottom-2*y.margin;else{var d=(n(y.container)?y.container:document.querySelector(y.container)).getBoundingClientRect(),a=d.width,m=d.height,l=d.left,c=d.top;t=e({},t,{width:a,height:m,left:l,top:c})}o=o||t.width-2*y.margin,r=r||t.height-2*y.margin;var u=b.zoomedHd||b.original,s=i(u)?o:u.naturalWidth||o,f=i(u)?r:u.naturalHeight||r,p=u.getBoundingClientRect(),v=p.top,g=p.left,h=p.width,z=p.height,E=Math.min(s,o)/h,w=Math.min(f,r)/z,L=Math.min(E,w),H="scale("+L+") translate3d("+((o-h)/2-g+y.margin+t.left)/L+"px, "+((r-z)/2-v+y.margin+t.top)/L+"px, 0)";b.zoomed.style.transform=H,b.zoomedHd&&(b.zoomedHd.style.transform=H)};return new c(function(e){if(t&&-1===v.indexOf(t))e(w);else{if(b.zoomed)e(w);else{if(t)b.original=t;else{if(!(v.length>0))return void e(w);var i=v;b.original=i[0]}if(b.original.dispatchEvent(m("medium-zoom:open",{detail:{zoom:w}})),z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,h=!0,b.zoomed=a(b.original),document.body.appendChild(E),y.template){var r=n(y.template)?y.template:document.querySelector(y.template);b.template=document.createElement("div"),b.template.appendChild(r.content.cloneNode(!0)),document.body.appendChild(b.template)}if(document.body.appendChild(b.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),b.original.classList.add("medium-zoom-image--hidden"),b.zoomed.classList.add("medium-zoom-image--opened"),b.zoomed.addEventListener("click",f),b.zoomed.addEventListener("transitionend",function t(){h=!1,b.zoomed.removeEventListener("transitionend",t),b.original.dispatchEvent(m("medium-zoom:opened",{detail:{zoom:w}})),e(w)}),b.original.getAttribute("data-zoom-src")){b.zoomedHd=b.zoomed.cloneNode(),b.zoomedHd.removeAttribute("srcset"),b.zoomedHd.removeAttribute("sizes"),b.zoomedHd.src=b.zoomed.getAttribute("data-zoom-src"),b.zoomedHd.onerror=function(){clearInterval(d),console.warn("Unable to reach the zoom image target "+b.zoomedHd.src),b.zoomedHd=null,o()};var d=setInterval(function(){b.zoomedHd.complete&&(clearInterval(d),b.zoomedHd.classList.add("medium-zoom-image--opened"),b.zoomedHd.addEventListener("click",f),document.body.appendChild(b.zoomedHd),o())},10)}else if(b.original.hasAttribute("srcset")){b.zoomedHd=b.zoomed.cloneNode(),b.zoomedHd.removeAttribute("sizes");var l=b.zoomedHd.addEventListener("load",function(){b.zoomedHd.removeEventListener("load",l),b.zoomedHd.classList.add("medium-zoom-image--opened"),b.zoomedHd.addEventListener("click",f),document.body.appendChild(b.zoomedHd),o()})}else o()}}})},f=function(){return new c(function(e){if(!h&&b.original){h=!0,document.body.classList.remove("medium-zoom--opened"),b.zoomed.style.transform="",b.zoomedHd&&(b.zoomedHd.style.transform=""),b.template&&(b.template.style.transition="opacity 150ms",b.template.style.opacity=0),b.original.dispatchEvent(m("medium-zoom:close",{detail:{zoom:w}})),b.zoomed.addEventListener("transitionend",function t(){b.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(b.zoomed),b.zoomedHd&&document.body.removeChild(b.zoomedHd),document.body.removeChild(E),b.zoomed.classList.remove("medium-zoom-image--opened"),b.template&&document.body.removeChild(b.template),h=!1,b.zoomed.removeEventListener("transitionend",t),b.original.dispatchEvent(m("medium-zoom:closed",{detail:{zoom:w}})),b.original=null,b.zoomed=null,b.zoomedHd=null,b.template=null,e(w)})}else e(w)})},p=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target;return b.original?f():s({target:e})},v=[],g=[],h=!1,z=0,y=l,b={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(o)?y=o:(o||"string"==typeof o)&&u(o),y=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},y);var E=d(y.background);document.addEventListener("click",function(e){var t=e.target;t!==E?-1!==v.indexOf(t)&&p({target:t}):f()}),document.addEventListener("keyup",function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||f()}),document.addEventListener("scroll",function(){if(!h&&b.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(z-e)>y.scrollOffset&&setTimeout(f,150)}}),window.addEventListener("resize",f);var w={open:s,close:f,toggle:p,update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t;if(t.background&&(E.style.background=t.background),t.container&&t.container instanceof Object&&(o.container=e({},y.container,t.container)),t.template){var i=n(t.template)?t.template:document.querySelector(t.template);o.template=i}return y=e({},y,o),v.forEach(function(e){e.dispatchEvent(m("medium-zoom:update",{detail:{zoom:w}}))}),w},clone:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e({},y,o))},attach:u,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];b.zoomed&&f();var n=t.length>0?t.reduce(function(e,t){return[].concat(e,r(t))},[]):v;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(m("medium-zoom:detach",{detail:{zoom:w}}))}),v=v.filter(function(e){return-1===n.indexOf(e)}),w},on:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.forEach(function(n){n.addEventListener("medium-zoom:"+e,t,o)}),g.push({type:"medium-zoom:"+e,listener:t,options:o}),w},off:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return v.forEach(function(n){n.removeEventListener("medium-zoom:"+e,t,o)}),g=g.filter(function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())}),w},getOptions:function(){return y},getImages:function(){return v},getZoomedImage:function(){return b.original}};return w};function c(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var u=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";c(u);var s=l;exports.default=s;
},{}],"rYgw":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setupLinks=exports.setupToggle=void 0;var t=require("timeago.js"),r=e(require("medium-zoom")),n=require("./events");exports.setupToggle=function(){var e=document.querySelector(".theme-toggle");e&&(e.addEventListener("click",function(){document.documentElement.classList.toggle("dark"),n.updateStorage(),n.updateText(e)}),n.updateText(e))},exports.setupLinks=function(){for(var e,n=document.querySelectorAll("a"),o="utm_source=anandchowdhary.com&utm_medium=website&utm_campaign="+encodeURIComponent(document.body.className),i=0;n.length>i;i++){var a=n[i],u=a.getAttribute("href");e=void 0,2>(e=u.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/)).length||!("string"==typeof e[1]&&e[1].length>0&&e[1].toLowerCase()!==location.protocol||"string"==typeof e[2]&&e[2].length>0&&e[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host)||(-1===u.indexOf("utm_source")&&-1===u.indexOf("archive.org")&&(u.indexOf("?")>-1?a.setAttribute("href",u+"&"+o):a.setAttribute("href",u+"?"+o)),a.classList.add("external-link"),a.setAttribute("target","_blank"),a.setAttribute("rel","noopener noreferrer"),a.innerHTML=a.innerHTML+"<span class='sr-only'> (opens in new window)</span>")}var s=document.querySelectorAll("input[name='category']");for(i=0;i<s.length;i++)s[i].addEventListener("change",function(){for(var e="categoryOther",t=0;t<s.length;t++)s[t].checked&&(e=s[t].getAttribute("id"));for(var r=document.querySelectorAll(".response"),n=0;n<r.length;n++)r[n].setAttribute("hidden","hidden");document.querySelector(".response.response-"+e).removeAttribute("hidden")});var l=document.querySelector(".age"),c=new Date(1997,11,29).getTime();function d(){var e=(new Date).getTime();l&&(l.innerHTML=((e-c)/31556952e3).toFixed(10))}l&&(setInterval(function(){l&&d()},50),d());var g=document.querySelectorAll(".time-ago");g.length&&t.render(g);var m=document.querySelectorAll(".two-images img, .three-images img, .image img:not(.real-image)");m.length&&r.default(m)};
},{"timeago.js":"xlxX","medium-zoom":"U0t1","./events":"kXwH"}],"dLxY":[function(require,module,exports) {
function l(l,n,u){var e,t,o,a,r;function i(){var c=Date.now()-a;c<n&&c>=0?e=setTimeout(i,n-c):(e=null,u||(r=l.apply(o,t),o=t=null))}null==n&&(n=100);var c=function(){o=this,t=arguments,a=Date.now();var c=u&&!e;return e||(e=setTimeout(i,n)),c&&(r=l.apply(o,t),o=t=null),r};return c.clear=function(){e&&(clearTimeout(e),e=null)},c.flush=function(){e&&(r=l.apply(o,t),o=t=null,clearTimeout(e),e=null)},c}l.debounce=l,module.exports=l;
},{}],"bedq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addScrollers=void 0;var e=require("debounce");exports.addScrollers=function(){for(var t=document.querySelectorAll(".horizontal-scroller"),r=function(r){var n=t[r],o=t[r].querySelector("*");if(!o)return"break";var l="page_"+r,d='\n      <div class="scroll-buttons">\n        <button data-prev="'+l+'">\n          <span class="sr-only">Scroll left</span>\n        </button>\n        <button data-next="'+l+'">\n          <span class="sr-only">Scroll right</span>\n        </button>\n      </div>\n    ',c=o.getBoundingClientRect().width,i=document.createElement("div");i.innerHTML=d,n.appendChild(i);var s=document.querySelector('[data-next="'+l+'"]'),a=document.querySelector('[data-prev="'+l+'"]');function u(){s&&(o.scrollLeft+c>=o.scrollWidth?s.setAttribute("hidden","hidden"):s.removeAttribute("hidden")),a&&(0===o.scrollLeft?a.setAttribute("hidden","hidden"):a.removeAttribute("hidden"))}u(),o.addEventListener("scroll",e.debounce(function(){u()},250)),s&&s.addEventListener("click",function(){var e=o.scrollLeft+c;o.scrollTo({top:0,left:e,behavior:"smooth"})}),a&&a.addEventListener("click",function(){var e=o.scrollLeft-c;o.scrollTo({top:0,left:e,behavior:"smooth"})})},n=0;n<t.length;n++){if("break"===r(n))break}};
},{"debounce":"dLxY"}],"MxQT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeWebP=exports.checkWebP=exports.setupImages=void 0,exports.setupImages=function(){for(var e=document.querySelectorAll("img"),t=function(t){e[t].addEventListener("error",function(){var r=e[t].getAttribute("data-url");r&&e[t].setAttribute("src",r)})},r=0;r<e.length;r++)t(r)},exports.checkWebP=function(e){var t=new Image;t.addEventListener("load",function(){return t.width>0&&t.height>0?e(!0):e(!1)}),t.addEventListener("error",function(){return e(!1)}),t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"},exports.removeWebP=function(){for(var e=document.querySelectorAll("img"),t=0;t<e.length;t++){var r=e[t].getAttribute("src");r.includes("&output=webp")&&e[t].setAttribute("src",r.replace("&output=webp",""))}var o=document.querySelectorAll("[style*='background']");for(t=0;t<o.length;t++){var u=o[t].getAttribute("style");u.includes("&output=webp")&&o[t].setAttribute("style",u.replace("&output=webp",""))}},window.removeWebP=exports.removeWebP;
},{}],"IMXz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.infiniteScroll=void 0,exports.infiniteScroll=function(){if("IntersectionObserver"in window&&"fetch"in window&&"requestAnimationFrame"in window){var e=document.querySelector("a.pagination-item--next"),n=document.querySelector("main#content section article"),t=n?n.parentNode:void 0;if(e&&t){var i=!1;new IntersectionObserver(function(n){if(!i){var r=!1;if(n.forEach(function(e){e.isIntersecting&&(r=!0)}),r&&(i=!0),r){var o=e.querySelector("span");o&&(o.innerHTML="Loading more items..."),window.fetch(e.getAttribute("href")).then(function(e){return e.text()}).then(function(e){for(var n=(new DOMParser).parseFromString(e,"text/html"),i=n.querySelectorAll("main#content section article"),r=0;r<i.length;r++)t.appendChild(i[r]);var o=n.querySelector("main#content nav.pagination"),a=document.querySelector("main#content nav.pagination");if(a&&o){var c=n.querySelector("a.pagination-item--prev");c&&c.parentNode.removeChild(c),a.innerHTML=o.innerHTML,a.className=o.className,o.querySelectorAll("a.pagination-item--next").length||a.parentNode.removeChild(a)}window.requestAnimationFrame(exports.infiniteScroll)}).catch(function(){o&&(o.innerHTML="Next")})}}}).observe(e)}}};
},{}],"EVxB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./frame"),r=require("./events"),i=require("./links"),n=require("./scroller"),s=require("./images"),t=require("./pagination"),u=function(){i.setupToggle(),i.setupLinks(),s.setupImages(),n.addScrollers(),t.infiniteScroll(),s.checkWebP(function(e){e||s.removeWebP()})},o=function(){e.inIframe()&&document.body.classList.add("iframed")};r.ready(function(){o(),u()});
},{"./frame":"AlqV","./events":"kXwH","./links":"rYgw","./scroller":"bedq","./images":"MxQT","./pagination":"IMXz"}]},{},["EVxB"], null)
//# sourceMappingURL=/app.74543f28.js.map