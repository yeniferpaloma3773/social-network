!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).PNotifyMobile={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(){}function p(t){return t()}function y(){return Object.create(null)}function d(t){t.forEach(p)}function m(t){return"function"==typeof t}function h(t,n){return t!=t?n==n:t!==n||t&&"object"===e(t)||"function"==typeof t}function v(t){t.parentNode.removeChild(t)}function g(t){return Array.from(t.childNodes)}var _;function b(t){_=t}function $(){if(!_)throw new Error("Function called outside component initialization");return _}var w=[],P=[],x=[],O=[],j=Promise.resolve(),S=!1;function E(t){x.push(t)}var k=!1,A=new Set;function D(){if(!k){k=!0;do{for(var t=0;t<w.length;t+=1){var e=w[t];b(e),C(e.$$)}for(w.length=0;P.length;)P.pop()();for(var n=0;n<x.length;n+=1){var r=x[n];A.has(r)||(A.add(r),r())}x.length=0}while(w.length);for(;O.length;)O.pop()();S=!1,k=!1,A.clear()}}function C(t){if(null!==t.fragment){t.update(),d(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}var M=new Set;function R(t,e){t&&t.i&&(M.delete(t),t.i(e))}var W="undefined"!=typeof window?window:global;function q(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,f=r.on_destroy,c=r.after_update;o&&o.m(e,n),E((function(){var e=i.map(p).filter(m);f?f.push.apply(f,a(e)):d(e),t.$$.on_mount=[]})),c.forEach(E)}function I(t,e){-1===t.$$.dirty[0]&&(w.push(t),S||(S=!0,j.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}var L=function(){function t(){n(this,t)}var e,o,i;return e=t,(o=[{key:"$destroy",value:function(){var t,e;t=1,null!==(e=this.$$).fragment&&(d(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[]),this.$destroy=l}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}])&&r(e.prototype,o),i&&r(e,i),t}(),N=W.window;function T(t){var e;return{c:l,m:function(n,r,o){var i,f,c,u;o&&e(),i=N,f="resize",c=t[11],i.addEventListener(f,c,u),e=function(){return i.removeEventListener(f,c,u)}},p:l,i:l,o:l,d:function(t){e()}}}var z={swipeDismiss:!0};function X(t,e,n){var r,o=e.self,i=void 0===o?null:o,f=e.swipeDismiss,c=void 0===f?z.swipeDismiss:f,u=null,a=null,s=null,l=null,p="left",y="X",d="Width",m=window.innerWidth,h=[];r=function(){h=[i.on("touchstart",(function(t){if(c){var e=i.stack;if(e)switch(e.dir1){case"up":case"down":p="left",y="X",d="Width";break;case"left":case"right":p="top",y="Y",d="Height"}u=t.touches[0]["screen".concat(y)],s=i.refs.elem["scroll".concat(d)],l=window.getComputedStyle(i.refs.elem).opacity,n(1,i.refs.container.style[p]=0,i)}})),i.on("touchmove",(function(t){if(u&&c){var e=t.touches[0]["screen".concat(y)];a=e-u;var r=(1-Math.abs(a)/s)*l;n(1,i.refs.elem.style.opacity=r,i),n(1,i.refs.container.style[p]="".concat(a,"px"),i)}})),i.on("touchend",(function(){if(u&&c){if(i.refs.container.classList.add("pnotify-mobile-animate-left"),Math.abs(a)>40){var t=a<0?-2*s:2*s;n(1,i.refs.elem.style.opacity=0,i),n(1,i.refs.container.style[p]="".concat(t,"px"),i),i.close()}else i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty(p);u=null,a=null,s=null,l=null}})),i.on("touchcancel",(function(){u&&c&&(i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty(p),u=null,a=null,s=null,l=null)})),i.on("pnotify:afterClose",(function(){c&&(i.refs.elem.style.removeProperty("opacity"),i.refs.container.style.removeProperty("left"),i.refs.container.style.removeProperty("top"))}))]},$().$$.on_mount.push(r),function(t){$().$$.on_destroy.push(t)}((function(){h.forEach((function(t){return t()}))}));return t.$set=function(t){"self"in t&&n(1,i=t.self),"swipeDismiss"in t&&n(2,c=t.swipeDismiss)},t.$$.update=function(){if(3&t.$$.dirty){var e=i.stack;e&&(m<=480?"_m_spacing1"in e||(e._m_spacing1=e.spacing1,e._m_firstpos1=e.firstpos1,e._m_spacing2=e.spacing2,e._m_firstpos2=e.firstpos2,e.spacing1=0,e.firstpos1=0,e.spacing2=0,e.firstpos2=0,e.queuePosition()):"_m_spacing1"in e&&(e.spacing1=e._m_spacing1,delete e._m_spacing1,e.firstpos1=e._m_firstpos1,delete e._m_firstpos1,e.spacing2=e._m_spacing2,delete e._m_spacing2,e.firstpos2=e._m_firstpos2,delete e._m_firstpos2,e.queuePosition()))}},[m,i,c,u,a,s,l,p,y,d,h,function(){return n(0,m=window.innerWidth)}]}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(a,t);var e,r=(e=a,function(){var t,n=o(e);if(f()){var r=o(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return u(this,t)});function a(t){var e;return n(this,a),function(t,e,n,r,o,i){var f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=_;b(t);var u=e.props||{},a=t.$$={fragment:null,ctx:null,props:i,update:l,not_equal:o,bound:y(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:y(),dirty:f},s=!1;if(a.ctx=n?n(t,u,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return a.ctx&&o(a.ctx[e],a.ctx[e]=r)&&(a.bound[e]&&a.bound[e](r),s&&I(t,e)),n})):[],a.update(),s=!0,d(a.before_update),a.fragment=!!r&&r(a.ctx),e.target){if(e.hydrate){var p=g(e.target);a.fragment&&a.fragment.l(p),p.forEach(v)}else a.fragment&&a.fragment.c();e.intro&&R(t.$$.fragment),q(t,e.target,e.anchor),D()}b(c)}(c(e=r.call(this)),t,X,T,h,{self:1,swipeDismiss:2}),e}return a}(L);t.default=F,t.defaults=z,t.position="PrependContainer",Object.defineProperty(t,"__esModule",{value:!0})}));
