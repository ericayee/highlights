// svg4everybody - https://github.com/jonathantneal/svg4everybody
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i);if(j){var k=h.getAttribute("xlink:href")||h.getAttribute("href");if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});

/*
 * smoothscroll polyfill - v0.3.4
 * https://iamdustan.github.io/smoothscroll
 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
 */
!function(t,o,e){"use strict"
function l(){function l(t,o){this.scrollLeft=t,this.scrollTop=o}function r(t){return.5*(1-Math.cos(Math.PI*t))}function s(t){if("object"!=typeof t||null===t||t.behavior===e||"auto"===t.behavior||"instant"===t.behavior)return!0
if("object"==typeof t&&"smooth"===t.behavior)return!1
throw new TypeError("behavior not valid")}function n(e){var l,r,s
do e=e.parentNode,l=e===o.body,r=e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth,s="visible"===t.getComputedStyle(e,null).overflow
while(!l&&(!r||s))
return l=r=s=null,e}function a(o){o.frame=t.requestAnimationFrame(a.bind(t,o))
var l,s,n,c=m(),i=(c-o.startTime)/u
return i=i>1?1:i,l=r(i),s=o.startX+(o.x-o.startX)*l,n=o.startY+(o.y-o.startY)*l,o.method.call(o.scrollable,s,n),s===o.x&&n===o.y?(t.cancelAnimationFrame(o.frame),e):e}function c(e,r,s){var n,c,i,u,p,h=m()
e===o.body?(n=t,c=t.scrollX||t.pageXOffset,i=t.scrollY||t.pageYOffset,u=f.scroll):(n=e,c=e.scrollLeft,i=e.scrollTop,u=l),p&&t.cancelAnimationFrame(p),a({scrollable:n,method:u,startTime:h,startX:c,startY:i,x:r,y:s,frame:p})}if(!("scrollBehavior"in o.documentElement.style)){var i=t.HTMLElement||t.Element,u=468,f={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elScroll:i.prototype.scroll||l,scrollIntoView:i.prototype.scrollIntoView},m=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now
t.scroll=t.scrollTo=function(){return s(arguments[0])?(f.scroll.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]),e):(c.call(t,o.body,~~arguments[0].left,~~arguments[0].top),e)},t.scrollBy=function(){return s(arguments[0])?(f.scrollBy.call(t,arguments[0].left||arguments[0],arguments[0].top||arguments[1]),e):(c.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)),e)},i.prototype.scroll=i.prototype.scrollTo=function(){return s(arguments[0])?(f.elScroll.call(this,arguments[0].left||arguments[0],arguments[0].top||arguments[1]),e):(c.call(this,this,arguments[0].left,arguments[0].top),e)},i.prototype.scrollBy=function(){var t=arguments[0]
"object"==typeof t?this.scroll({left:t.left+this.scrollLeft,top:t.top+this.scrollTop,behavior:t.behavior}):this.scroll(this.scrollLeft+t,this.scrollTop+arguments[1])},i.prototype.scrollIntoView=function(){if(s(arguments[0]))return f.scrollIntoView.call(this,arguments[0]||!0),e
var l=n(this),r=l.getBoundingClientRect(),a=this.getBoundingClientRect()
l!==o.body?(c.call(this,l,l.scrollLeft+a.left-r.left,l.scrollTop+a.top-r.top),t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}}}"object"==typeof exports?module.exports={polyfill:l}:l()}(window,document)