"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=t(function(p,v){v.exports={"1":1,jan:1,january:1,"2":1,feb:1,february:1,"3":1,mar:1,march:1,"4":2,apr:2,april:2,"5":2,may:2,"6":2,jun:2,june:2,"7":3,jul:3,july:3,"8":3,aug:3,august:3,"9":3,sep:3,september:3,"10":4,oct:4,october:4,"11":4,nov:4,november:4,"12":4,dec:4,december:4}});var o=t(function(q,s){
var g=require('@stdlib/assert-is-date-object/dist'),l=require('@stdlib/assert-is-string/dist').isPrimitive,u=require('@stdlib/assert-is-integer/dist').isPrimitive,c=require('@stdlib/string-lowercase/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist'),m=n();function f(r){var e,i;if(arguments.length)if(g(r))e=r.getMonth()+1;else if(l(r)||u(r))e=r;else throw new TypeError(a('1QTAd',r));else e=new Date().getMonth()+1;if(u(e)&&(e<1||e>12))throw new RangeError(a('1QTAa',e));if(e=c(e.toString()),i=m[e],i===void 0)throw new Error(a('1QTAb',r));return i}s.exports=f
});var b=o();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map