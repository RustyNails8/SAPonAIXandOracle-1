/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.3.0
 */
(function(){"use strict";function l(x){return typeof x==='function'||(typeof x==='object'&&x!==null);}function a(x){return typeof x==='function';}function b(x){return typeof x==='object'&&x!==null;}var d;if(!Array.isArray){d=function(x){return Object.prototype.toString.call(x)==='[object Array]';};}else{d=Array.isArray;}var f=d;var g=0;var h={}.toString;var j;var k;var m=function asap(c,e){B[g]=c;B[g+1]=e;g+=2;if(g===2){if(k){k(C);}else{E();}}};function n(c){k=c;}function o(c){m=c;}var p=(typeof window!=='undefined')?window:undefined;var q=p||{};var s=q.MutationObserver||q.WebKitMutationObserver;var t=typeof process!=='undefined'&&{}.toString.call(process)==='[object process]';var u=typeof Uint8ClampedArray!=='undefined'&&typeof importScripts!=='undefined'&&typeof MessageChannel!=='undefined';function v(){var c=process.nextTick;var e=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);if(Array.isArray(e)&&e[1]==='0'&&e[2]==='10'){c=setImmediate;}return function(){c(C);};}function w(){return function(){j(C);};}function y(){var i=0;var c=new s(C);var e=document.createTextNode('');c.observe(e,{characterData:true});return function(){e.data=(i=++i%2);};}function z(){var c=new MessageChannel();c.port1.onmessage=C;return function(){c.port2.postMessage(0);};}function A(){return function(){setTimeout(C,1);};}var B=new Array(1000);function C(){for(var i=0;i<g;i+=2){var c=B[i];var e=B[i+1];c(e);B[i]=undefined;B[i+1]=undefined;}g=0;}function D(){try{var r=require;var c=r('vertx');j=c.runOnLoop||c.runOnContext;return w();}catch(e){return A();}}var E;if(t){E=v();}else if(s){E=y();}else if(u){E=z();}else if(p===undefined&&typeof require==='function'){E=D();}else{E=A();}function F(){}var G=void 0;var H=1;var I=2;var J=new Y();function K(){return new TypeError("You cannot resolve a promise with itself");}function L(){return new TypeError('A promises callback cannot return that same promise.');}function M(c){try{return c.then;}catch(e){J.error=e;return J;}}function N(c,i,r,x){try{c.call(i,r,x);}catch(e){return e;}}function O(c,e,i){m(function(c){var r=false;var x=N(i,e,function(P){if(r){return;}r=true;if(e!==P){S(c,P);}else{U(c,P);}},function(P){if(r){return;}r=true;V(c,P);},'Settle: '+(c._label||' unknown promise'));if(!r&&x){r=true;V(c,x);}},c);}function Q(c,e){if(e._state===H){U(c,e._result);}else if(e._state===I){V(c,e._result);}else{W(e,undefined,function(i){S(c,i);},function(r){V(c,r);});}}function R(c,e){if(e.constructor===c.constructor){Q(c,e);}else{var i=M(e);if(i===J){V(c,J.error);}else if(i===undefined){U(c,e);}else if(a(i)){O(c,e,i);}else{U(c,e);}}}function S(c,e){if(c===e){V(c,K());}else if(l(e)){R(c,e);}else{U(c,e);}}function T(c){if(c._onerror){c._onerror(c._result);}X(c);}function U(c,e){if(c._state!==G){return;}c._result=e;c._state=H;if(c._subscribers.length!==0){m(X,c);}}function V(c,r){if(c._state!==G){return;}c._state=I;c._result=r;m(T,c);}function W(c,e,i,r){var x=c._subscribers;var P=x.length;c._onerror=null;x[P]=e;x[P+H]=i;x[P+I]=r;if(P===0&&c._state){m(X,c);}}function X(c){var e=c._subscribers;var r=c._state;if(e.length===0){return;}var x,P,t1=c._result;for(var i=0;i<e.length;i+=3){x=e[i];P=e[i+r];if(x){_(r,x,P,t1);}else{P(t1);}}c._subscribers.length=0;}function Y(){this.error=null;}var Z=new Y();function $(c,i){try{return c(i);}catch(e){Z.error=e;return Z;}}function _(c,e,i,r){var x=a(i),P,t1,u1,v1;if(x){P=$(i,r);if(P===Z){v1=true;t1=P.error;P=null;}else{u1=true;}if(e===P){V(e,L());return;}}else{P=r;u1=true;}if(e._state!==G){}else if(x&&u1){S(e,P);}else if(v1){V(e,t1);}else if(c===H){U(e,P);}else if(c===I){V(e,P);}}function a1(c,r){try{r(function resolvePromise(i){S(c,i);},function rejectPromise(i){V(c,i);});}catch(e){V(c,e);}}function b1(c,i){var e=this;e._instanceConstructor=c;e.promise=new c(F);if(e._validateInput(i)){e._input=i;e.length=i.length;e._remaining=i.length;e._init();if(e.length===0){U(e.promise,e._result);}else{e.length=e.length||0;e._enumerate();if(e._remaining===0){U(e.promise,e._result);}}}else{V(e.promise,e._validationError());}}b1.prototype._validateInput=function(i){return f(i);};b1.prototype._validationError=function(){return new Error('Array Methods must be provided an Array');};b1.prototype._init=function(){this._result=new Array(this.length);};var c1=b1;b1.prototype._enumerate=function(){var e=this;var c=e.length;var r=e.promise;var x=e._input;for(var i=0;r._state===G&&i<c;i++){e._eachEntry(x[i],i);}};b1.prototype._eachEntry=function(e,i){var r=this;var c=r._instanceConstructor;if(b(e)){if(e.constructor===c&&e._state!==G){e._onerror=null;r._settledAt(e._state,i,e._result);}else{r._willSettleAt(c.resolve(e),i);}}else{r._remaining--;r._result[i]=e;}};b1.prototype._settledAt=function(c,i,e){var r=this;var x=r.promise;if(x._state===G){r._remaining--;if(c===I){V(x,e);}else{r._result[i]=e;}}if(r._remaining===0){U(x,r._result);}};b1.prototype._willSettleAt=function(c,i){var e=this;W(c,undefined,function(r){e._settledAt(H,i,r);},function(r){e._settledAt(I,i,r);});};function d1(e){return new c1(this,e).promise;}var e1=d1;function f1(e){var c=this;var r=new c(F);if(!f(e)){V(r,new TypeError('You must pass an array to race.'));return r;}var x=e.length;function P(u1){S(r,u1);}function t1(u1){V(r,u1);}for(var i=0;r._state===G&&i<x;i++){W(c.resolve(e[i]),undefined,P,t1);}return r;}var g1=f1;function h1(c){var e=this;if(c&&typeof c==='object'&&c.constructor===e){return c;}var i=new e(F);S(i,c);return i;}var i1=h1;function j1(r){var c=this;var e=new c(F);V(e,r);return e;}var k1=j1;var l1=0;function m1(){throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');}function n1(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");}var o1=p1;function p1(r){this._id=l1++;this._state=undefined;this._result=undefined;this._subscribers=[];if(F!==r){if(!a(r)){m1();}if(!(this instanceof p1)){n1();}a1(this,r);}}p1.all=e1;p1.race=g1;p1.resolve=i1;p1.reject=k1;p1._setScheduler=n;p1._setAsap=o;p1._asap=m;p1.prototype={constructor:p1,then:function(c,e){var i=this;var r=i._state;if(r===H&&!c||r===I&&!e){return this;}var x=new this.constructor(F);var P=i._result;if(r){var t1=arguments[r-1];m(function(){_(r,x,t1,P);});}else{W(i,x,c,e);}return x;},'catch':function(c){return this.then(null,c);}};function q1(){var c;if(typeof global!=='undefined'){c=global;}else if(typeof self!=='undefined'){c=self;}else{try{c=Function('return this')();}catch(e){throw new Error('polyfill failed because global object is unavailable in this environment');}}var P=c.Promise;if(P&&Object.prototype.toString.call(P.resolve()).indexOf('[object ')===0){return;}c.Promise=o1;}var r1=q1;var s1={'Promise':o1,'polyfill':r1};if(typeof define==='function'&&define['amd']){define('sap/ui/thirdparty/es6-promise',function(){return s1;});}else if(typeof module!=='undefined'&&module['exports']){module['exports']=s1;}if(typeof this!=='undefined'){this['ES6Promise']=s1;}r1();}).call(this);
