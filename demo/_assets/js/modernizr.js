/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransforms-opacity-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var f in g)if(g.hasOwnProperty(f)){if(e=[],n=g[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),w.push((r?"":"no-")+a.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function f(e,t,o,r){var s,f,l,u,c="modernizr",d=i("div"),p=a();if(parseInt(o,10))for(;o--;)l=i("div"),l.id=r?r[o]:c+(o+1),d.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),f=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=u,_.offsetHeight):d.parentNode.removeChild(d),!!f}function l(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+u(n[r])+":"+o+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,r,s){function a(){u&&(delete j.style,delete j.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var f=c(e,r);if(!o(f,"undefined"))return f}for(var u,p,m,h,v,y=["modernizr","tspan"];!j.style;)u=!0,j.modElem=i(y.shift()),j.style=j.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],v=j.style[h],l(h,"-")&&(h=d(h)),j.style[h]!==t){if(s||o(r,"undefined"))return a(),"pfx"==n?h:!0;try{j.style[h]=r}catch(g){}if(j.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function h(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?m(r,t||n):r);return!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?p(a,n,r,s):(a=(e+" "+E.join(i+" ")+i).split(" "),h(a,n,t))}function y(e,n,o){return v(e,t,t,n,o)}var g=[],C={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w=[],_=n.documentElement,x="svg"===_.nodeName.toLowerCase(),S=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=S;var b=C.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");b(o,function(e){t=9===e.offsetTop})}return t}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var T="Moz O ms Webkit",z=C._config.usePrefixes?T.split(" "):[];C._cssomPrefixes=z;var P={elem:i("modernizr")};Modernizr._q.push(function(){delete P.elem});var j={style:P.elem.style};Modernizr._q.unshift(function(){delete j.style});var E=C._config.usePrefixes?T.toLowerCase().split(" "):[];C._domPrefixes=E,C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),r(),s(w),delete C.addTest,delete C.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);