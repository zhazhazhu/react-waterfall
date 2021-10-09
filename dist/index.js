!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("core-js/modules/es.string.starts-with.js"),require("core-js/modules/es.array.from.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/es.array.fill.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/esnext.promise.all-settled.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.for-each.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.date.to-string.js"),require("core-js/modules/web.timers.js")):"function"==typeof define&&define.amd?define(["core-js/modules/es.string.starts-with.js","core-js/modules/es.array.from.js","core-js/modules/es.string.iterator.js","core-js/modules/es.array.fill.js","core-js/modules/es.array.concat.js","core-js/modules/es.array.iterator.js","core-js/modules/es.object.to-string.js","core-js/modules/es.promise.js","core-js/modules/esnext.promise.all-settled.js","core-js/modules/web.dom-collections.iterator.js","core-js/modules/es.array.map.js","core-js/modules/es.array.for-each.js","core-js/modules/web.dom-collections.for-each.js","core-js/modules/es.array.index-of.js","core-js/modules/es.date.to-string.js","core-js/modules/web.timers.js"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).bundle=t()}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{l(o.next(e))}catch(e){i(e)}}function a(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))}function t(e,t){var r,o,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(n=s.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function r(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return s}function o(e,t,r){if(r||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function n(e){return new Promise((function(t,r){var o=new Image;o.src=e,o.onload=function(){t(o)},o.onerror=function(e){r(e)}}))}var i=function(i){var s=this;this.items=[],this.itemHeight=[],this.store={},this.initDefaultValue=function(){var e=s.options,t=e.imgContainerClass,r=e.imgClass,o=e.bottomContainerClass;e.column||(s.options.column=2),t||(s.options.imgContainerClass="waterfall-img-container"),r||(s.options.imgClass="waterfall-img"),o||(s.options.bottomContainerClass="waterfall-bottom-container")},this.init=function(){return e(s,void 0,void 0,(function(){var e,r,o,n,i;return t(this,(function(t){if(e=this.options,r=e.resizable,o=void 0!==r&&r,n=e.initialData,i=e.column,"string"==typeof this.options.container){if(!this.options.container.startsWith(".")&&!this.options.container.startsWith("#"))throw Error("请按照标准的dom查询条件传入，如'.container'或'#container'");this.options.container=document.querySelector(this.options.container)}if(!this.options.container)throw Error("container实例不存在，请检查");return Array.from(this.options.container.children).length&&(console.warn("container中存在其它元素，使用时请确保container为空的容器。当前已为您清空该容器。"),this.options.container.innerHTML=""),this.itemHeight=new Array(i).fill(0),this.options.container.style.position="relative",o&&this.resize(),this.initImage(n),[2]}))}))},this.initImage=function(r){return e(s,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return[4,this.createContent(r)];case 1:return e=t.sent(),this.items=this.items.concat(e),this.computePosition(e),[2]}}))}))},this.createContent=function(o){return void 0===o&&(o=[]),e(s,void 0,void 0,(function(){var i,s,a,l,c,u,d,f,h,m,p,y,j,v,g,b,w,C,x,q,H=this;return t(this,(function(E){switch(E.label){case 0:return i=this.options,s=i.onClick,a=i.imgClass,l=i.imgContainerClass,c=i.bottomContainerClass,u=i.render,d=i.defaultImgUrl,f=void 0===d?"":d,[4,Promise.allSettled(o.map((function(e){return e.src&&n(e.src)})))];case 1:h=E.sent(),m=[],p=document.createDocumentFragment(),o.forEach((function(r,o){return e(H,void 0,void 0,(function(){return t(this,(function(e){return[2]}))}))})),y=function(e,r){var o,i,d,y;return t(this,(function(t){switch(t.label){case 0:if((o=document.createElement("div")).className=l,!r.src)return[3,5];if((i=document.createElement("img")).style.verticalAlign="bottom",i.src=r.src,"rejected"!==h[e].status)return[3,4];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,n(f)];case 2:return d=t.sent(),i.src=d.src,[3,4];case 3:return t.sent(),console.error("该默认图片加载失败："+f),[3,4];case 4:i.alt=(null==r?void 0:r.alt)||"image",i.className=a,o.appendChild(i),t.label=5;case 5:return u&&((y=document.createElement("div")).className=c,y.innerHTML=u(r),o.appendChild(y)),o.onclick=function(e){null==s||s(r,e)},m.push(o),p.appendChild(o),[2]}}))},E.label=2;case 2:E.trys.push([2,7,8,9]),j=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],o=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(o.entries()),v=j.next(),E.label=3;case 3:return v.done?[3,6]:(g=r(v.value,2),b=g[0],w=g[1],[5,y(b,w)]);case 4:E.sent(),E.label=5;case 5:return v=j.next(),[3,3];case 6:return[3,9];case 7:return C=E.sent(),x={error:C},[3,9];case 8:try{v&&!v.done&&(q=j.return)&&q.call(j)}finally{if(x)throw x.error}return[7];case 9:return this.options.container.append(p),[2,m]}}))}))},this.computePosition=function(e,t){void 0===t&&(t=!1),requestAnimationFrame((function(){var n=s.options,i=n.gapX,a=void 0===i?0:i,l=n.gapY,c=void 0===l?0:l,u=n.column,d=n.width,f=n.bottomContainerClass,h=n.render;d=d||s.options.container.clientWidth/u,t&&(s.itemHeight=new Array(u).fill(0)),e.forEach((function(e){e.style.opacity="0";var t,n=e.querySelector("img");if(n&&(n.style.width=d+"px"),e.style.width=d+"px",e.style.position="absolute",h){var i=e.querySelector("."+f);i.style.width=d+"px",t=n?((null==n?void 0:n.height)||30)+((null==i?void 0:i.clientHeight)||0):(null==i?void 0:i.clientHeight)||0}else t=(null==n?void 0:n.height)||0;var l=s.itemHeight.indexOf(Math.min.apply(Math,o([],r(s.itemHeight),!1)));e.style.left=l*(d+a)+"px",e.style.top=s.itemHeight[l]+"px",s.itemHeight[l]+=Math.round(t*d/d+c),e.style.transition="opacity 0.2s",e.style.opacity="1"})),s.refreshContainerHeight()}))},this.refreshContainerHeight=function(){s.options.container.style.height=Math.max.apply(Math,o([],r(s.itemHeight),!1))+"px"},this.resize=function(){window.addEventListener("resize",s.store.throttleResize=function(e,t){void 0===t&&(t=100);var r=+new Date;return function(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];+new Date-r>t&&(e.apply(this,o),r=+new Date)}}((function(){s.computePosition(s.items,!0)}),50))},this.onReachBottom=function(e){var t=s.options.bottomDistance,r=void 0===t?50:t;if(r<50)throw Error("bottomDistance，触底事件离底部触发的距离不能小于50");window.addEventListener("scroll",s.store.debounceScroll=function(e,t){void 0===t&&(t=100);var r=null;return function(){for(var o=this,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];r&&clearTimeout(r),r=setTimeout((function(){e.apply(o,n)}),t)}}((function(){var t=document.documentElement,o=t.clientHeight,n=t.scrollTop,i=t.scrollHeight;o+n+r>=i&&e()}),100))},this.loadMore=function(e){s.initImage(e)},this.destroy=function(){window.removeEventListener("resize",s.store.throttleResize),window.removeEventListener("scroll",s.store.debounceScroll)},this.options=i,this.initDefaultValue(),this.init()};return i}));
