// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",a=r()?function(e){var r,a,o,c,s;if(null==e)return t.call(e);a=e[i],s=i,r=null!=(c=e)&&n.call(c,s);try{e[i]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[i]=a:delete e[i],o}:function(e){return t.call(e)},o=Date.prototype.getDay,c=r();function s(e){return"object"==typeof e&&(e instanceof Date||(c?function(e){try{return o.call(e),!0}catch(e){return!1}}(e):"[object Date]"===a(e)))}var u="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty,p=Object.prototype,f=p.toString,g=p.__defineGetter__,d=p.__defineSetter__,h=p.__lookupGetter__,b=p.__lookupSetter__,y=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?l:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(h.call(e,r)||b.call(e,r)?(n=e.__proto__,e.__proto__=p,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&g&&g.call(e,r,t.get),o&&d&&d.call(e,r,t.set),e};function v(e,r,t){y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function w(e){return"string"==typeof e}var m=String.prototype.valueOf,_=r();function j(e){return"object"==typeof e&&(e instanceof String||(_?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object String]"===a(e)))}function S(e){return w(e)||j(e)}function E(e){return"number"==typeof e}v(S,"isPrimitive",w),v(S,"isObject",j);var x=Number,k=x.prototype.toString,I=r();function T(e){return"object"==typeof e&&(e instanceof x||(I?function(e){try{return k.call(e),!0}catch(e){return!1}}(e):"[object Number]"===a(e)))}function V(e){return E(e)||T(e)}v(V,"isPrimitive",E),v(V,"isObject",T);var O=Number.POSITIVE_INFINITY,F=x.NEGATIVE_INFINITY,A=Math.floor;function N(e){return e<O&&e>F&&A(r=e)===r;var r}function P(e){return E(e)&&N(e)}function $(e){return T(e)&&N(e.valueOf())}function C(e){return P(e)||$(e)}function R(e){return"number"==typeof e}function D(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function M(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+D(i):D(i)+e,n&&(e="-"+e)),e}v(C,"isPrimitive",P),v(C,"isObject",$);var G=String.prototype.toLowerCase,Z=String.prototype.toUpperCase;function L(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!R(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=M(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=M(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Z.call(e.specifier)?Z.call(t):G.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function W(e){return"string"==typeof e}var U=Math.abs,Y=String.prototype.toLowerCase,X=String.prototype.toUpperCase,q=String.prototype.replace,z=/e\+(\d)$/,B=/e-(\d)$/,J=/^(\d+)$/,H=/^(\d+)e/,K=/\.0$/,Q=/\.0*e/,ee=/(\..*[^0])0*e/;function re(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!R(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":U(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=q.call(t,ee,"$1e"),t=q.call(t,Q,"e"),t=q.call(t,K,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=q.call(t,z,"e+0$1"),t=q.call(t,B,"e-0$1"),e.alternate&&(t=q.call(t,J,"$1."),t=q.call(t,H,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===X.call(e.specifier)?X.call(t):Y.call(t)}function te(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ne(e,r,t){var n=r-e.length;return n<0?e:e=t?e+te(n):te(n)+e}var ie=String.fromCharCode,ae=isNaN,oe=Array.isArray;function ce(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function se(e){var r,t,n,i,a,o,c,s,u;if(!oe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(W(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=ce(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ae(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ae(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=L(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ae(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ae(a)?String(n.arg):ie(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=re(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=M(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ne(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var ue=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function le(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function pe(e){var r,t,n,i;for(t=[],i=0,n=ue.exec(e);n;)(r=e.slice(i,ue.lastIndex-n[0].length)).length&&t.push(r),t.push(le(n)),i=ue.lastIndex,n=ue.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function fe(e){return"string"==typeof e}function ge(e){var r,t,n;if(!fe(e))throw new TypeError(ge("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=pe(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return se.apply(null,t)}function de(e){if(!w(e))throw new TypeError(ge("invalid argument. Must provide a string. Value: `%s`.",e));return e.toLowerCase()}function he(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var be={1:1,2:1,3:1,4:2,5:2,6:2,7:3,8:3,9:3,10:4,11:4,12:4,jan:1,january:1,feb:1,february:1,mar:1,march:1,apr:2,april:2,may:2,jun:2,june:2,jul:3,july:3,aug:3,august:3,sep:3,september:3,oct:4,october:4,nov:4,november:4,dec:4,december:4};return function(e){var r,t;if(arguments.length)if(s(e))r=e.getMonth()+1;else{if(!w(e)&&!P(e))throw new TypeError(he("invalid argument. Must provide either a string, integer, or Date object. Value: `%s`.",e));r=e}else r=(new Date).getMonth()+1;if(P(r)&&(r<1||r>12))throw new RangeError(he("invalid argument. An integer month value must be on the interval: [1, 12]. Value: `%s`.",r));if(r=de(r.toString()),void 0===(t=be[r]))throw new Error(he("0i5BJ",e));return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).quarterOfYear=r();
//# sourceMappingURL=browser.js.map
