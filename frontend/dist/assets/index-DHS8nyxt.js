function Ld(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Go={exports:{}},Ll={},Xo={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=Symbol.for("react.element"),Td=Symbol.for("react.portal"),Id=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),bd=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Ad=Symbol.for("react.suspense"),Ud=Symbol.for("react.memo"),$d=Symbol.for("react.lazy"),Pa=Symbol.iterator;function Bd(e){return e===null||typeof e!="object"?null:(e=Pa&&e[Pa]||e["@@iterator"],typeof e=="function"?e:null)}var qo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zo=Object.assign,Jo={};function kn(e,t,n){this.props=e,this.context=t,this.refs=Jo,this.updater=n||qo}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function eu(){}eu.prototype=kn.prototype;function zs(e,t,n){this.props=e,this.context=t,this.refs=Jo,this.updater=n||qo}var Ps=zs.prototype=new eu;Ps.constructor=zs;Zo(Ps,kn.prototype);Ps.isPureReactComponent=!0;var _a=Array.isArray,tu=Object.prototype.hasOwnProperty,_s={current:null},nu={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)tu.call(t,r)&&!nu.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var u=Array(o),c=0;c<o;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:yr,type:e,key:i,ref:a,props:l,_owner:_s.current}}function Vd(e,t){return{$$typeof:yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr}function Hd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var La=/\/+/g;function ti(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hd(""+e.key):t.toString(36)}function Qr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yr:case Td:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+ti(a,0):r,_a(l)?(n="",e!=null&&(n=e.replace(La,"$&/")+"/"),Qr(l,t,n,"",function(c){return c})):l!=null&&(Ls(l)&&(l=Vd(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(La,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",_a(e))for(var o=0;o<e.length;o++){i=e[o];var u=r+ti(i,o);a+=Qr(i,t,n,u,l)}else if(u=Bd(e),typeof u=="function")for(e=u.call(e),o=0;!(i=e.next()).done;)i=i.value,u=r+ti(i,o++),a+=Qr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _r(e,t,n){if(e==null)return e;var r=[],l=0;return Qr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Wd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Kr={transition:null},Qd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Kr,ReactCurrentOwner:_s};function lu(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:_r,forEach:function(e,t,n){_r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _r(e,function(){t++}),t},toArray:function(e){return _r(e,function(t){return t})||[]},only:function(e){if(!Ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=kn;D.Fragment=Id;D.Profiler=Dd;D.PureComponent=zs;D.StrictMode=Md;D.Suspense=Ad;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qd;D.act=lu;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zo({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=_s.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)tu.call(t,u)&&!nu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var c=0;c<u;c++)o[c]=arguments[c+2];r.children=o}return{$$typeof:yr,type:e.type,key:l,ref:i,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:bd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Od,_context:e},e.Consumer=e};D.createElement=ru;D.createFactory=function(e){var t=ru.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Fd,render:e}};D.isValidElement=Ls;D.lazy=function(e){return{$$typeof:$d,_payload:{_status:-1,_result:e},_init:Wd}};D.memo=function(e,t){return{$$typeof:Ud,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Kr.transition;Kr.transition={};try{e()}finally{Kr.transition=t}};D.unstable_act=lu;D.useCallback=function(e,t){return he.current.useCallback(e,t)};D.useContext=function(e){return he.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return he.current.useDeferredValue(e)};D.useEffect=function(e,t){return he.current.useEffect(e,t)};D.useId=function(){return he.current.useId()};D.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return he.current.useMemo(e,t)};D.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};D.useRef=function(e){return he.current.useRef(e)};D.useState=function(e){return he.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return he.current.useTransition()};D.version="18.3.1";Xo.exports=D;var v=Xo.exports;const iu=Rd(v),Kd=Ld({__proto__:null,default:iu},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=v,Gd=Symbol.for("react.element"),Xd=Symbol.for("react.fragment"),qd=Object.prototype.hasOwnProperty,Zd=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jd={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)qd.call(t,r)&&!Jd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Gd,type:e,key:i,ref:a,props:l,_owner:Zd.current}}Ll.Fragment=Xd;Ll.jsx=su;Ll.jsxs=su;Go.exports=Ll;var s=Go.exports,Pi={},au={exports:{}},Ee={},ou={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var M=P.length;P.push(I);e:for(;0<M;){var G=M-1>>>1,te=P[G];if(0<l(te,I))P[G]=I,P[M]=te,M=G;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],M=P.pop();if(M!==I){P[0]=M;e:for(var G=0,te=P.length,zr=te>>>1;G<zr;){var Tt=2*(G+1)-1,ei=P[Tt],It=Tt+1,Pr=P[It];if(0>l(ei,M))It<te&&0>l(Pr,ei)?(P[G]=Pr,P[It]=M,G=It):(P[G]=ei,P[Tt]=M,G=Tt);else if(It<te&&0>l(Pr,M))P[G]=Pr,P[It]=M,G=It;else break e}}return I}function l(P,I){var M=P.sortIndex-I.sortIndex;return M!==0?M:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],c=[],g=1,m=null,p=3,j=!1,x=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=P)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function w(P){if(y=!1,f(P),!x)if(n(u)!==null)x=!0,Zl(S);else{var I=n(c);I!==null&&Jl(w,I.startTime-P)}}function S(P,I){x=!1,y&&(y=!1,h(_),_=-1),j=!0;var M=p;try{for(f(I),m=n(u);m!==null&&(!(m.expirationTime>I)||P&&!T());){var G=m.callback;if(typeof G=="function"){m.callback=null,p=m.priorityLevel;var te=G(m.expirationTime<=I);I=e.unstable_now(),typeof te=="function"?m.callback=te:m===n(u)&&r(u),f(I)}else r(u);m=n(u)}if(m!==null)var zr=!0;else{var Tt=n(c);Tt!==null&&Jl(w,Tt.startTime-I),zr=!1}return zr}finally{m=null,p=M,j=!1}}var C=!1,E=null,_=-1,A=5,L=-1;function T(){return!(e.unstable_now()-L<A)}function le(){if(E!==null){var P=e.unstable_now();L=P;var I=!0;try{I=E(!0,P)}finally{I?st():(C=!1,E=null)}}else C=!1}var st;if(typeof d=="function")st=function(){d(le)};else if(typeof MessageChannel<"u"){var zn=new MessageChannel,Er=zn.port2;zn.port1.onmessage=le,st=function(){Er.postMessage(null)}}else st=function(){k(le,0)};function Zl(P){E=P,C||(C=!0,st())}function Jl(P,I){_=k(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){x||j||(x=!0,Zl(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var M=p;p=I;try{return P()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=p;p=P;try{return I()}finally{p=M}},e.unstable_scheduleCallback=function(P,I,M){var G=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?G+M:G):M=G,P){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=M+te,P={id:g++,callback:I,priorityLevel:P,startTime:M,expirationTime:te,sortIndex:-1},M>G?(P.sortIndex=M,t(c,P),n(u)===null&&P===n(c)&&(y?(h(_),_=-1):y=!0,Jl(w,M-G))):(P.sortIndex=te,t(u,P),x||j||(x=!0,Zl(S))),P},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(P){var I=p;return function(){var M=p;p=I;try{return P.apply(this,arguments)}finally{p=M}}}})(uu);ou.exports=uu;var ef=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=v,Ce=ef;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,Gn={};function Qt(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Gn[e]=t,e=0;e<t.length;e++)cu.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_i=Object.prototype.hasOwnProperty,nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ra={},Ta={};function rf(e){return _i.call(Ta,e)?!0:_i.call(Ra,e)?!1:nf.test(e)?Ta[e]=!0:(Ra[e]=!0,!1)}function lf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sf(e,t,n,r){if(t===null||typeof t>"u"||lf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rs=/[\-:]([a-z])/g;function Ts(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rs,Ts);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rs,Ts);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rs,Ts);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Is(e,t,n,r){var l=ae.hasOwnProperty(t)?ae[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sf(t,n,l,r)&&(n=null),r||l===null?rf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),Li=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),fu=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),Ri=Symbol.for("react.suspense"),Ti=Symbol.for("react.suspense_list"),Os=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),Ia=Symbol.iterator;function Pn(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ni;function On(e){if(ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ni=t&&t[1]||""}return`
`+ni+e}var ri=!1;function li(e,t){if(!e||ri)return"";ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,o=i.length-1;1<=a&&0<=o&&l[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==i[o]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function af(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=li(e.type,!1),e;case 11:return e=li(e.type.render,!1),e;case 1:return e=li(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Gt:return"Portal";case Li:return"Profiler";case Ms:return"StrictMode";case Ri:return"Suspense";case Ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fu:return(e.displayName||"Context")+".Consumer";case du:return(e._context.displayName||"Context")+".Provider";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Os:return t=e.displayName||null,t!==null?t:Ii(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function of(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uf(e){var t=mu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rr(e){e._valueTracker||(e._valueTracker=uf(e))}function hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mi(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gu(e,t){t=t.checked,t!=null&&Is(e,"checked",t,!1)}function Di(e,t){gu(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oi(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Da(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oi(e,t,n){(t!=="number"||ll(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function bi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(bn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function vu(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Un={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cf=["Webkit","ms","Moz","O"];Object.keys(Un).forEach(function(e){cf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Un[t]=Un[e]})});function ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Un.hasOwnProperty(e)&&Un[e]?(""+t).trim():t+"px"}function wu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var df=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,t){if(t){if(df[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,un=null,cn=null;function Fa(e){if(e=wr(e)){if(typeof Bi!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Dl(t),Bi(e.stateNode,e.type,t))}}function ku(e){un?cn?cn.push(e):cn=[e]:un=e}function Nu(){if(un){var e=un,t=cn;if(cn=un=null,Fa(e),t)for(e=0;e<t.length;e++)Fa(t[e])}}function Su(e,t){return e(t)}function Cu(){}var ii=!1;function Eu(e,t,n){if(ii)return e(t,n);ii=!0;try{return Su(e,t,n)}finally{ii=!1,(un!==null||cn!==null)&&(Cu(),Nu())}}function qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Vi=!1;if(tt)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Vi=!1}function ff(e,t,n,r,l,i,a,o,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var $n=!1,il=null,sl=!1,Hi=null,pf={onError:function(e){$n=!0,il=e}};function mf(e,t,n,r,l,i,a,o,u){$n=!1,il=null,ff.apply(pf,arguments)}function hf(e,t,n,r,l,i,a,o,u){if(mf.apply(this,arguments),$n){if($n){var c=il;$n=!1,il=null}else throw Error(N(198));sl||(sl=!0,Hi=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aa(e){if(Kt(e)!==e)throw Error(N(188))}function gf(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Aa(l),e;if(i===r)return Aa(l),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,o=l.child;o;){if(o===n){a=!0,n=l,r=i;break}if(o===r){a=!0,r=l,n=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===n){a=!0,n=i,r=l;break}if(o===r){a=!0,r=i,n=l;break}o=o.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Pu(e){return e=gf(e),e!==null?_u(e):null}function _u(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_u(e);if(t!==null)return t;e=e.sibling}return null}var Lu=Ce.unstable_scheduleCallback,Ua=Ce.unstable_cancelCallback,vf=Ce.unstable_shouldYield,yf=Ce.unstable_requestPaint,X=Ce.unstable_now,xf=Ce.unstable_getCurrentPriorityLevel,Fs=Ce.unstable_ImmediatePriority,Ru=Ce.unstable_UserBlockingPriority,al=Ce.unstable_NormalPriority,jf=Ce.unstable_LowPriority,Tu=Ce.unstable_IdlePriority,Rl=null,Ke=null;function wf(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Sf,kf=Math.log,Nf=Math.LN2;function Sf(e){return e>>>=0,e===0?32:31-(kf(e)/Nf|0)|0}var Ir=64,Mr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ol(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~l;o!==0?r=Fn(o):(i&=a,i!==0&&(r=Fn(i)))}else a=n&~l,a!==0?r=Fn(a):i!==0&&(r=Fn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),l=1<<n,r|=e[n],t&=~l;return r}function Cf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ue(i),o=1<<a,u=l[a];u===-1?(!(o&n)||o&r)&&(l[a]=Cf(o,t)):u<=t&&(e.expiredLanes|=o),i&=~o}}function Wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Iu(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function si(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function zf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ue(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function As(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function Mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Du,Us,Ou,bu,Fu,Qi=!1,Dr=[],ht=null,gt=null,vt=null,Zn=new Map,Jn=new Map,ct=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $a(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Ln(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=wr(t),t!==null&&Us(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _f(e,t,n,r,l){switch(t){case"focusin":return ht=Ln(ht,e,t,n,r,l),!0;case"dragenter":return gt=Ln(gt,e,t,n,r,l),!0;case"mouseover":return vt=Ln(vt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Zn.set(i,Ln(Zn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Jn.set(i,Ln(Jn.get(i)||null,e,t,n,r,l)),!0}return!1}function Au(e){var t=Ot(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=zu(n),t!==null){e.blockedOn=t,Fu(e.priority,function(){Ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$i=r,n.target.dispatchEvent(r),$i=null}else return t=wr(n),t!==null&&Us(t),e.blockedOn=n,!1;t.shift()}return!0}function Ba(e,t,n){Yr(e)&&n.delete(t)}function Lf(){Qi=!1,ht!==null&&Yr(ht)&&(ht=null),gt!==null&&Yr(gt)&&(gt=null),vt!==null&&Yr(vt)&&(vt=null),Zn.forEach(Ba),Jn.forEach(Ba)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,Qi||(Qi=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Lf)))}function er(e){function t(l){return Rn(l,e)}if(0<Dr.length){Rn(Dr[0],e);for(var n=1;n<Dr.length;n++){var r=Dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Rn(ht,e),gt!==null&&Rn(gt,e),vt!==null&&Rn(vt,e),Zn.forEach(t),Jn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)Au(n),n.blockedOn===null&&ct.shift()}var dn=it.ReactCurrentBatchConfig,ul=!0;function Rf(e,t,n,r){var l=F,i=dn.transition;dn.transition=null;try{F=1,$s(e,t,n,r)}finally{F=l,dn.transition=i}}function Tf(e,t,n,r){var l=F,i=dn.transition;dn.transition=null;try{F=4,$s(e,t,n,r)}finally{F=l,dn.transition=i}}function $s(e,t,n,r){if(ul){var l=Ki(e,t,n,r);if(l===null)gi(e,t,r,cl,n),$a(e,r);else if(_f(l,e,t,n,r))r.stopPropagation();else if($a(e,r),t&4&&-1<Pf.indexOf(e)){for(;l!==null;){var i=wr(l);if(i!==null&&Du(i),i=Ki(e,t,n,r),i===null&&gi(e,t,r,cl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else gi(e,t,r,null,n)}}var cl=null;function Ki(e,t,n,r){if(cl=null,e=bs(r),e=Ot(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cl=e,null}function Uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xf()){case Fs:return 1;case Ru:return 4;case al:case jf:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var ft=null,Bs=null,Gr=null;function $u(){if(Gr)return Gr;var e,t=Bs,n=t.length,r,l="value"in ft?ft.value:ft.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Gr=l.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function Va(){return!1}function ze(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:Va,this.isPropagationStopped=Va,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=ze(Nn),jr=Q({},Nn,{view:0,detail:0}),If=ze(jr),ai,oi,Tn,Tl=Q({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(ai=e.screenX-Tn.screenX,oi=e.screenY-Tn.screenY):oi=ai=0,Tn=e),ai)},movementY:function(e){return"movementY"in e?e.movementY:oi}}),Ha=ze(Tl),Mf=Q({},Tl,{dataTransfer:0}),Df=ze(Mf),Of=Q({},jr,{relatedTarget:0}),ui=ze(Of),bf=Q({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=ze(bf),Af=Q({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uf=ze(Af),$f=Q({},Nn,{data:0}),Wa=ze($f),Bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hf[e])?!!t[e]:!1}function Hs(){return Wf}var Qf=Q({},jr,{key:function(e){if(e.key){var t=Bf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kf=ze(Qf),Yf=Q({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=ze(Yf),Gf=Q({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),Xf=ze(Gf),qf=Q({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zf=ze(qf),Jf=Q({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ep=ze(Jf),tp=[9,13,27,32],Ws=tt&&"CompositionEvent"in window,Bn=null;tt&&"documentMode"in document&&(Bn=document.documentMode);var np=tt&&"TextEvent"in window&&!Bn,Bu=tt&&(!Ws||Bn&&8<Bn&&11>=Bn),Ka=" ",Ya=!1;function Vu(e,t){switch(e){case"keyup":return tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function rp(e,t){switch(e){case"compositionend":return Hu(t);case"keypress":return t.which!==32?null:(Ya=!0,Ka);case"textInput":return e=t.data,e===Ka&&Ya?null:e;default:return null}}function lp(e,t){if(qt)return e==="compositionend"||!Ws&&Vu(e,t)?(e=$u(),Gr=Bs=ft=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bu&&t.locale!=="ko"?null:t.data;default:return null}}var ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ip[e.type]:t==="textarea"}function Wu(e,t,n,r){ku(r),t=dl(t,"onChange"),0<t.length&&(n=new Vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,tr=null;function sp(e){nc(e,0)}function Il(e){var t=en(e);if(hu(t))return e}function ap(e,t){if(e==="change")return t}var Qu=!1;if(tt){var ci;if(tt){var di="oninput"in document;if(!di){var Xa=document.createElement("div");Xa.setAttribute("oninput","return;"),di=typeof Xa.oninput=="function"}ci=di}else ci=!1;Qu=ci&&(!document.documentMode||9<document.documentMode)}function qa(){Vn&&(Vn.detachEvent("onpropertychange",Ku),tr=Vn=null)}function Ku(e){if(e.propertyName==="value"&&Il(tr)){var t=[];Wu(t,tr,e,bs(e)),Eu(sp,t)}}function op(e,t,n){e==="focusin"?(qa(),Vn=t,tr=n,Vn.attachEvent("onpropertychange",Ku)):e==="focusout"&&qa()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il(tr)}function cp(e,t){if(e==="click")return Il(t)}function dp(e,t){if(e==="input"||e==="change")return Il(t)}function fp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:fp;function nr(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!_i.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function Za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ja(e,t){var n=Za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Za(n)}}function Yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gu(){for(var e=window,t=ll();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ll(e.document)}return t}function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pp(e){var t=Gu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yu(n.ownerDocument.documentElement,n)){if(r!==null&&Qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ja(n,i);var a=Ja(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mp=tt&&"documentMode"in document&&11>=document.documentMode,Zt=null,Yi=null,Hn=null,Gi=!1;function eo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gi||Zt==null||Zt!==ll(r)||(r=Zt,"selectionStart"in r&&Qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hn&&nr(Hn,r)||(Hn=r,r=dl(Yi,"onSelect"),0<r.length&&(t=new Vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},fi={},Xu={};tt&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Ml(e){if(fi[e])return fi[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xu)return fi[e]=t[n];return e}var qu=Ml("animationend"),Zu=Ml("animationiteration"),Ju=Ml("animationstart"),ec=Ml("transitionend"),tc=new Map,to="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Et(e,t){tc.set(e,t),Qt(t,[e])}for(var pi=0;pi<to.length;pi++){var mi=to[pi],hp=mi.toLowerCase(),gp=mi[0].toUpperCase()+mi.slice(1);Et(hp,"on"+gp)}Et(qu,"onAnimationEnd");Et(Zu,"onAnimationIteration");Et(Ju,"onAnimationStart");Et("dblclick","onDoubleClick");Et("focusin","onFocus");Et("focusout","onBlur");Et(ec,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function no(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hf(r,t,void 0,e),e.currentTarget=null}function nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,c=o.currentTarget;if(o=o.listener,u!==i&&l.isPropagationStopped())break e;no(l,o,c),i=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,c=o.currentTarget,o=o.listener,u!==i&&l.isPropagationStopped())break e;no(l,o,c),i=u}}}if(sl)throw e=Hi,sl=!1,Hi=null,e}function $(e,t){var n=t[es];n===void 0&&(n=t[es]=new Set);var r=e+"__bubble";n.has(r)||(rc(t,e,2,!1),n.add(r))}function hi(e,t,n){var r=0;t&&(r|=4),rc(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Fr]){e[Fr]=!0,cu.forEach(function(n){n!=="selectionchange"&&(vp.has(n)||hi(n,!1,e),hi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,hi("selectionchange",!1,t))}}function rc(e,t,n,r){switch(Uu(t)){case 1:var l=Rf;break;case 4:l=Tf;break;default:l=$s}n=l.bind(null,t,n,e),l=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function gi(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;o!==null;){if(a=Ot(o),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}o=o.parentNode}}r=r.return}Eu(function(){var c=i,g=bs(n),m=[];e:{var p=tc.get(e);if(p!==void 0){var j=Vs,x=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":j=Kf;break;case"focusin":x="focus",j=ui;break;case"focusout":x="blur",j=ui;break;case"beforeblur":case"afterblur":j=ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Xf;break;case qu:case Zu:case Ju:j=Ff;break;case ec:j=Zf;break;case"scroll":j=If;break;case"wheel":j=ep;break;case"copy":case"cut":case"paste":j=Uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Qa}var y=(t&4)!==0,k=!y&&e==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var d=c,f;d!==null;){f=d;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,h!==null&&(w=qn(d,h),w!=null&&y.push(lr(d,w,f)))),k)break;d=d.return}0<y.length&&(p=new j(p,x,null,n,g),m.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",p&&n!==$i&&(x=n.relatedTarget||n.fromElement)&&(Ot(x)||x[nt]))break e;if((j||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,j?(x=n.relatedTarget||n.toElement,j=c,x=x?Ot(x):null,x!==null&&(k=Kt(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(j=null,x=c),j!==x)){if(y=Ha,w="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Qa,w="onPointerLeave",h="onPointerEnter",d="pointer"),k=j==null?p:en(j),f=x==null?p:en(x),p=new y(w,d+"leave",j,n,g),p.target=k,p.relatedTarget=f,w=null,Ot(g)===c&&(y=new y(h,d+"enter",x,n,g),y.target=f,y.relatedTarget=k,w=y),k=w,j&&x)t:{for(y=j,h=x,d=0,f=y;f;f=Yt(f))d++;for(f=0,w=h;w;w=Yt(w))f++;for(;0<d-f;)y=Yt(y),d--;for(;0<f-d;)h=Yt(h),f--;for(;d--;){if(y===h||h!==null&&y===h.alternate)break t;y=Yt(y),h=Yt(h)}y=null}else y=null;j!==null&&ro(m,p,j,y,!1),x!==null&&k!==null&&ro(m,k,x,y,!0)}}e:{if(p=c?en(c):window,j=p.nodeName&&p.nodeName.toLowerCase(),j==="select"||j==="input"&&p.type==="file")var S=ap;else if(Ga(p))if(Qu)S=dp;else{S=up;var C=op}else(j=p.nodeName)&&j.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=cp);if(S&&(S=S(e,c))){Wu(m,S,n,g);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Oi(p,"number",p.value)}switch(C=c?en(c):window,e){case"focusin":(Ga(C)||C.contentEditable==="true")&&(Zt=C,Yi=c,Hn=null);break;case"focusout":Hn=Yi=Zt=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,eo(m,n,g);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":eo(m,n,g)}var E;if(Ws)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else qt?Vu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Bu&&n.locale!=="ko"&&(qt||_!=="onCompositionStart"?_==="onCompositionEnd"&&qt&&(E=$u()):(ft=g,Bs="value"in ft?ft.value:ft.textContent,qt=!0)),C=dl(c,_),0<C.length&&(_=new Wa(_,e,null,n,g),m.push({event:_,listeners:C}),E?_.data=E:(E=Hu(n),E!==null&&(_.data=E)))),(E=np?rp(e,n):lp(e,n))&&(c=dl(c,"onBeforeInput"),0<c.length&&(g=new Wa("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=E))}nc(m,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=qn(e,n),i!=null&&r.unshift(lr(e,i,l)),i=qn(e,t),i!=null&&r.push(lr(e,i,l))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ro(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var o=n,u=o.alternate,c=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&c!==null&&(o=c,l?(u=qn(n,i),u!=null&&a.unshift(lr(n,u,o))):l||(u=qn(n,i),u!=null&&a.push(lr(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var yp=/\r\n?/g,xp=/\u0000|\uFFFD/g;function lo(e){return(typeof e=="string"?e:""+e).replace(yp,`
`).replace(xp,"")}function Ar(e,t,n){if(t=lo(t),lo(e)!==t&&n)throw Error(N(425))}function fl(){}var Xi=null,qi=null;function Zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,jp=typeof clearTimeout=="function"?clearTimeout:void 0,io=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof io<"u"?function(e){return io.resolve(null).then(e).catch(kp)}:Ji;function kp(e){setTimeout(function(){throw e})}function vi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);er(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function so(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Sn,ir="__reactProps$"+Sn,nt="__reactContainer$"+Sn,es="__reactEvents$"+Sn,Np="__reactListeners$"+Sn,Sp="__reactHandles$"+Sn;function Ot(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=so(e);e!==null;){if(n=e[Qe])return n;e=so(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Dl(e){return e[ir]||null}var ts=[],tn=-1;function zt(e){return{current:e}}function B(e){0>tn||(e.current=ts[tn],ts[tn]=null,tn--)}function U(e,t){tn++,ts[tn]=e.current,e.current=t}var Ct={},fe=zt(Ct),xe=zt(!1),$t=Ct;function hn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function je(e){return e=e.childContextTypes,e!=null}function pl(){B(xe),B(fe)}function ao(e,t,n){if(fe.current!==Ct)throw Error(N(168));U(fe,t),U(xe,n)}function lc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,of(e)||"Unknown",l));return Q({},n,r)}function ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,$t=fe.current,U(fe,e),U(xe,xe.current),!0}function oo(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=lc(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,B(xe),B(fe),U(fe,e)):B(xe),U(xe,n)}var qe=null,Ol=!1,yi=!1;function ic(e){qe===null?qe=[e]:qe.push(e)}function Cp(e){Ol=!0,ic(e)}function Pt(){if(!yi&&qe!==null){yi=!0;var e=0,t=F;try{var n=qe;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Ol=!1}catch(l){throw qe!==null&&(qe=qe.slice(e+1)),Lu(Fs,Pt),l}finally{F=t,yi=!1}}return null}var nn=[],rn=0,hl=null,gl=0,Pe=[],_e=0,Bt=null,Ze=1,Je="";function Mt(e,t){nn[rn++]=gl,nn[rn++]=hl,hl=e,gl=t}function sc(e,t,n){Pe[_e++]=Ze,Pe[_e++]=Je,Pe[_e++]=Bt,Bt=e;var r=Ze;e=Je;var l=32-Ue(r)-1;r&=~(1<<l),n+=1;var i=32-Ue(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Ze=1<<32-Ue(t)+l|n<<l|r,Je=i+e}else Ze=1<<i|n<<l|r,Je=e}function Ks(e){e.return!==null&&(Mt(e,1),sc(e,1,0))}function Ys(e){for(;e===hl;)hl=nn[--rn],nn[rn]=null,gl=nn[--rn],nn[rn]=null;for(;e===Bt;)Bt=Pe[--_e],Pe[_e]=null,Je=Pe[--_e],Pe[_e]=null,Ze=Pe[--_e],Pe[_e]=null}var Se=null,Ne=null,V=!1,Ae=null;function ac(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ne=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:Ze,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,Ne=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rs(e){if(V){var t=Ne;if(t){var n=t;if(!uo(e,t)){if(ns(e))throw Error(N(418));t=yt(n.nextSibling);var r=Se;t&&uo(e,t)?ac(r,n):(e.flags=e.flags&-4097|2,V=!1,Se=e)}}else{if(ns(e))throw Error(N(418));e.flags=e.flags&-4097|2,V=!1,Se=e}}}function co(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Ur(e){if(e!==Se)return!1;if(!V)return co(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zi(e.type,e.memoizedProps)),t&&(t=Ne)){if(ns(e))throw oc(),Error(N(418));for(;t;)ac(e,t),t=yt(t.nextSibling)}if(co(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Se?yt(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=Ne;e;)e=yt(e.nextSibling)}function gn(){Ne=Se=null,V=!1}function Gs(e){Ae===null?Ae=[e]:Ae.push(e)}var Ep=it.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var o=l.refs;a===null?delete o[i]:o[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function $r(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fo(e){var t=e._init;return t(e._payload)}function uc(e){function t(h,d){if(e){var f=h.deletions;f===null?(h.deletions=[d],h.flags|=16):f.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function l(h,d){return h=kt(h,d),h.index=0,h.sibling=null,h}function i(h,d,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<d?(h.flags|=2,d):f):(h.flags|=2,d)):(h.flags|=1048576,d)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,d,f,w){return d===null||d.tag!==6?(d=Ci(f,h.mode,w),d.return=h,d):(d=l(d,f),d.return=h,d)}function u(h,d,f,w){var S=f.type;return S===Xt?g(h,d,f.props.children,w,f.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ot&&fo(S)===d.type)?(w=l(d,f.props),w.ref=In(h,d,f),w.return=h,w):(w=rl(f.type,f.key,f.props,null,h.mode,w),w.ref=In(h,d,f),w.return=h,w)}function c(h,d,f,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Ei(f,h.mode,w),d.return=h,d):(d=l(d,f.children||[]),d.return=h,d)}function g(h,d,f,w,S){return d===null||d.tag!==7?(d=Ut(f,h.mode,w,S),d.return=h,d):(d=l(d,f),d.return=h,d)}function m(h,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ci(""+d,h.mode,f),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Lr:return f=rl(d.type,d.key,d.props,null,h.mode,f),f.ref=In(h,null,d),f.return=h,f;case Gt:return d=Ei(d,h.mode,f),d.return=h,d;case ot:var w=d._init;return m(h,w(d._payload),f)}if(bn(d)||Pn(d))return d=Ut(d,h.mode,f,null),d.return=h,d;$r(h,d)}return null}function p(h,d,f,w){var S=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:o(h,d,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Lr:return f.key===S?u(h,d,f,w):null;case Gt:return f.key===S?c(h,d,f,w):null;case ot:return S=f._init,p(h,d,S(f._payload),w)}if(bn(f)||Pn(f))return S!==null?null:g(h,d,f,w,null);$r(h,f)}return null}function j(h,d,f,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(f)||null,o(d,h,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Lr:return h=h.get(w.key===null?f:w.key)||null,u(d,h,w,S);case Gt:return h=h.get(w.key===null?f:w.key)||null,c(d,h,w,S);case ot:var C=w._init;return j(h,d,f,C(w._payload),S)}if(bn(w)||Pn(w))return h=h.get(f)||null,g(d,h,w,S,null);$r(d,w)}return null}function x(h,d,f,w){for(var S=null,C=null,E=d,_=d=0,A=null;E!==null&&_<f.length;_++){E.index>_?(A=E,E=null):A=E.sibling;var L=p(h,E,f[_],w);if(L===null){E===null&&(E=A);break}e&&E&&L.alternate===null&&t(h,E),d=i(L,d,_),C===null?S=L:C.sibling=L,C=L,E=A}if(_===f.length)return n(h,E),V&&Mt(h,_),S;if(E===null){for(;_<f.length;_++)E=m(h,f[_],w),E!==null&&(d=i(E,d,_),C===null?S=E:C.sibling=E,C=E);return V&&Mt(h,_),S}for(E=r(h,E);_<f.length;_++)A=j(E,h,_,f[_],w),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?_:A.key),d=i(A,d,_),C===null?S=A:C.sibling=A,C=A);return e&&E.forEach(function(T){return t(h,T)}),V&&Mt(h,_),S}function y(h,d,f,w){var S=Pn(f);if(typeof S!="function")throw Error(N(150));if(f=S.call(f),f==null)throw Error(N(151));for(var C=S=null,E=d,_=d=0,A=null,L=f.next();E!==null&&!L.done;_++,L=f.next()){E.index>_?(A=E,E=null):A=E.sibling;var T=p(h,E,L.value,w);if(T===null){E===null&&(E=A);break}e&&E&&T.alternate===null&&t(h,E),d=i(T,d,_),C===null?S=T:C.sibling=T,C=T,E=A}if(L.done)return n(h,E),V&&Mt(h,_),S;if(E===null){for(;!L.done;_++,L=f.next())L=m(h,L.value,w),L!==null&&(d=i(L,d,_),C===null?S=L:C.sibling=L,C=L);return V&&Mt(h,_),S}for(E=r(h,E);!L.done;_++,L=f.next())L=j(E,h,_,L.value,w),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?_:L.key),d=i(L,d,_),C===null?S=L:C.sibling=L,C=L);return e&&E.forEach(function(le){return t(h,le)}),V&&Mt(h,_),S}function k(h,d,f,w){if(typeof f=="object"&&f!==null&&f.type===Xt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Lr:e:{for(var S=f.key,C=d;C!==null;){if(C.key===S){if(S=f.type,S===Xt){if(C.tag===7){n(h,C.sibling),d=l(C,f.props.children),d.return=h,h=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ot&&fo(S)===C.type){n(h,C.sibling),d=l(C,f.props),d.ref=In(h,C,f),d.return=h,h=d;break e}n(h,C);break}else t(h,C);C=C.sibling}f.type===Xt?(d=Ut(f.props.children,h.mode,w,f.key),d.return=h,h=d):(w=rl(f.type,f.key,f.props,null,h.mode,w),w.ref=In(h,d,f),w.return=h,h=w)}return a(h);case Gt:e:{for(C=f.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(h,d.sibling),d=l(d,f.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Ei(f,h.mode,w),d.return=h,h=d}return a(h);case ot:return C=f._init,k(h,d,C(f._payload),w)}if(bn(f))return x(h,d,f,w);if(Pn(f))return y(h,d,f,w);$r(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(h,d.sibling),d=l(d,f),d.return=h,h=d):(n(h,d),d=Ci(f,h.mode,w),d.return=h,h=d),a(h)):n(h,d)}return k}var vn=uc(!0),cc=uc(!1),vl=zt(null),yl=null,ln=null,Xs=null;function qs(){Xs=ln=yl=null}function Zs(e){var t=vl.current;B(vl),e._currentValue=t}function ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){yl=e,Xs=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Xs!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(yl===null)throw Error(N(308));ln=e,yl.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var bt=null;function Js(e){bt===null?bt=[e]:bt.push(e)}function dc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Js(t)):(n.next=l.next,l.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,rt(e,n)}return l=r.interleaved,l===null?(t.next=t,Js(r)):(t.next=l.next,l.next=t),r.interleaved=t,rt(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}function po(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xl(e,t,n,r){var l=e.updateQueue;ut=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var u=o,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==a&&(o===null?g.firstBaseUpdate=c:o.next=c,g.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;a=0,g=c=u=null,o=i;do{var p=o.lane,j=o.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=e,y=o;switch(p=t,j=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){m=x.call(j,m,p);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(j,m,p):x,p==null)break e;m=Q({},m,p);break e;case 2:ut=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[o]:p.push(o))}else j={eventTime:j,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(c=g=j,u=m):g=g.next=j,a|=p;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;p=o,o=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(g===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ht|=a,e.lanes=a,e.memoizedState=m}}function mo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var kr={},Ye=zt(kr),sr=zt(kr),ar=zt(kr);function Ft(e){if(e===kr)throw Error(N(174));return e}function ta(e,t){switch(U(ar,t),U(sr,e),U(Ye,kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fi(t,e)}B(Ye),U(Ye,t)}function yn(){B(Ye),B(sr),B(ar)}function pc(e){Ft(ar.current);var t=Ft(Ye.current),n=Fi(t,e.type);t!==n&&(U(sr,e),U(Ye,n))}function na(e){sr.current===e&&(B(Ye),B(sr))}var H=zt(0);function jl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xi=[];function ra(){for(var e=0;e<xi.length;e++)xi[e]._workInProgressVersionPrimary=null;xi.length=0}var Zr=it.ReactCurrentDispatcher,ji=it.ReactCurrentBatchConfig,Vt=0,W=null,Z=null,ne=null,wl=!1,Wn=!1,or=0,zp=0;function oe(){throw Error(N(321))}function la(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function ia(e,t,n,r,l,i){if(Vt=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zr.current=e===null||e.memoizedState===null?Rp:Tp,e=n(r,l),Wn){i=0;do{if(Wn=!1,or=0,25<=i)throw Error(N(301));i+=1,ne=Z=null,t.updateQueue=null,Zr.current=Ip,e=n(r,l)}while(Wn)}if(Zr.current=kl,t=Z!==null&&Z.next!==null,Vt=0,ne=Z=W=null,wl=!1,t)throw Error(N(300));return e}function sa(){var e=or!==0;return or=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?W.memoizedState=ne=e:ne=ne.next=e,ne}function Ie(){if(Z===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ne===null?W.memoizedState:ne.next;if(t!==null)ne=t,Z=e;else{if(e===null)throw Error(N(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?W.memoizedState=ne=e:ne=ne.next=e}return ne}function ur(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=Ie(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var o=a=null,u=null,c=i;do{var g=c.lane;if((Vt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(o=u=m,a=r):u=u.next=m,W.lanes|=g,Ht|=g}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=o,Be(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,Ht|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ki(e){var t=Ie(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);Be(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mc(){}function hc(e,t){var n=W,r=Ie(),l=t(),i=!Be(r.memoizedState,l);if(i&&(r.memoizedState=l,ye=!0),r=r.queue,aa(yc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,cr(9,vc.bind(null,n,r,l,t),void 0,null),re===null)throw Error(N(349));Vt&30||gc(n,t,l)}return l}function gc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vc(e,t,n,r){t.value=n,t.getSnapshot=r,xc(t)&&jc(e)}function yc(e,t,n){return n(function(){xc(t)&&jc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function jc(e){var t=rt(e,1);t!==null&&$e(t,e,1,-1)}function ho(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Lp.bind(null,W,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wc(){return Ie().memoizedState}function Jr(e,t,n,r){var l=We();W.flags|=e,l.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function bl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(Z!==null){var a=Z.memoizedState;if(i=a.destroy,r!==null&&la(r,a.deps)){l.memoizedState=cr(t,n,i,r);return}}W.flags|=e,l.memoizedState=cr(1|t,n,i,r)}function go(e,t){return Jr(8390656,8,e,t)}function aa(e,t){return bl(2048,8,e,t)}function kc(e,t){return bl(4,2,e,t)}function Nc(e,t){return bl(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,n){return n=n!=null?n.concat([e]):null,bl(4,4,Sc.bind(null,t,e),n)}function oa(){}function Ec(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&la(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&la(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pc(e,t,n){return Vt&21?(Be(n,t)||(n=Iu(),W.lanes|=n,Ht|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Pp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ji.transition;ji.transition={};try{e(!1),t()}finally{F=n,ji.transition=r}}function _c(){return Ie().memoizedState}function _p(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lc(e))Rc(t,n);else if(n=dc(e,t,n,r),n!==null){var l=me();$e(n,e,r,l),Tc(n,t,r)}}function Lp(e,t,n){var r=wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))Rc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,o=i(a,n);if(l.hasEagerState=!0,l.eagerState=o,Be(o,a)){var u=t.interleaved;u===null?(l.next=l,Js(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=dc(e,t,l,r),n!==null&&(l=me(),$e(n,e,r,l),Tc(n,t,r))}}function Lc(e){var t=e.alternate;return e===W||t!==null&&t===W}function Rc(e,t){Wn=wl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}var kl={readContext:Te,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Rp={readContext:Te,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:go,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jr(4194308,4,Sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_p.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:ho,useDebugValue:oa,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ho(!1),t=e[0];return e=Pp.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=We();if(V){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),re===null)throw Error(N(349));Vt&30||gc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,go(yc.bind(null,r,i,e),[e]),r.flags|=2048,cr(9,vc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=We(),t=re.identifierPrefix;if(V){var n=Je,r=Ze;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tp={readContext:Te,useCallback:Ec,useContext:Te,useEffect:aa,useImperativeHandle:Cc,useInsertionEffect:kc,useLayoutEffect:Nc,useMemo:zc,useReducer:wi,useRef:wc,useState:function(){return wi(ur)},useDebugValue:oa,useDeferredValue:function(e){var t=Ie();return Pc(t,Z.memoizedState,e)},useTransition:function(){var e=wi(ur)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:hc,useId:_c,unstable_isNewReconciler:!1},Ip={readContext:Te,useCallback:Ec,useContext:Te,useEffect:aa,useImperativeHandle:Cc,useInsertionEffect:kc,useLayoutEffect:Nc,useMemo:zc,useReducer:ki,useRef:wc,useState:function(){return ki(ur)},useDebugValue:oa,useDeferredValue:function(e){var t=Ie();return Z===null?t.memoizedState=e:Pc(t,Z.memoizedState,e)},useTransition:function(){var e=ki(ur)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:hc,useId:_c,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fl={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=wt(e),i=et(r,l);i.payload=t,n!=null&&(i.callback=n),t=xt(e,i,l),t!==null&&($e(t,e,l,r),qr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=wt(e),i=et(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xt(e,i,l),t!==null&&($e(t,e,l,r),qr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=wt(e),l=et(n,r);l.tag=2,t!=null&&(l.callback=t),t=xt(e,l,r),t!==null&&($e(t,e,r,n),qr(t,e,r))}};function vo(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(l,i):!0}function Ic(e,t,n){var r=!1,l=Ct,i=t.contextType;return typeof i=="object"&&i!==null?i=Te(i):(l=je(t)?$t:fe.current,r=t.contextTypes,i=(r=r!=null)?hn(e,l):Ct),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function yo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function ss(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ea(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Te(i):(i=je(t)?$t:fe.current,l.context=hn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(is(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Fl.enqueueReplaceState(l,l.state,null),xl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=af(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function as(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Mc(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sl||(Sl=!0,vs=r),as(e,t)},n}function Dc(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){as(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){as(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function xo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Yp.bind(null,e,t,n),t.then(e,e))}function jo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wo(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var Dp=it.ReactCurrentOwner,ye=!1;function pe(e,t,n,r){t.child=e===null?cc(t,null,n,r):vn(t,e.child,n,r)}function ko(e,t,n,r,l){n=n.render;var i=t.ref;return fn(t,l),r=ia(e,t,n,r,i,l),n=sa(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(V&&n&&Ks(t),t.flags|=1,pe(e,t,r,l),t.child)}function No(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ga(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Oc(e,t,i,r,l)):(e=rl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(a,r)&&e.ref===t.ref)return lt(e,t,l)}return t.flags|=1,e=kt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Oc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(nr(i,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,lt(e,t,l)}return os(e,t,n,r,l)}function bc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(an,ke),ke|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(an,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(an,ke),ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(an,ke),ke|=r;return pe(e,t,l,n),t.child}function Fc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function os(e,t,n,r,l){var i=je(n)?$t:fe.current;return i=hn(t,i),fn(t,l),n=ia(e,t,n,r,i,l),r=sa(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,lt(e,t,l)):(V&&r&&Ks(t),t.flags|=1,pe(e,t,n,l),t.child)}function So(e,t,n,r,l){if(je(n)){var i=!0;ml(t)}else i=!1;if(fn(t,l),t.stateNode===null)el(e,t),Ic(t,n,r),ss(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=je(n)?$t:fe.current,c=hn(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==c)&&yo(t,a,r,c),ut=!1;var p=t.memoizedState;a.state=p,xl(t,r,a,l),u=t.memoizedState,o!==r||p!==u||xe.current||ut?(typeof g=="function"&&(is(t,n,g,r),u=t.memoizedState),(o=ut||vo(t,n,o,r,p,u,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fc(e,t),o=t.memoizedProps,c=t.type===t.elementType?o:be(t.type,o),a.props=c,m=t.pendingProps,p=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=je(n)?$t:fe.current,u=hn(t,u));var j=n.getDerivedStateFromProps;(g=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||p!==u)&&yo(t,a,r,u),ut=!1,p=t.memoizedState,a.state=p,xl(t,r,a,l);var x=t.memoizedState;o!==m||p!==x||xe.current||ut?(typeof j=="function"&&(is(t,n,j,r),x=t.memoizedState),(c=ut||vo(t,n,c,r,p,x,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return us(e,t,n,r,i,l)}function us(e,t,n,r,l,i){Fc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&oo(t,n,!1),lt(e,t,i);r=t.stateNode,Dp.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=vn(t,e.child,null,i),t.child=vn(t,null,o,i)):pe(e,t,o,i),t.memoizedState=r.state,l&&oo(t,n,!0),t.child}function Ac(e){var t=e.stateNode;t.pendingContext?ao(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ao(e,t.context,!1),ta(e,t.containerInfo)}function Co(e,t,n,r,l){return gn(),Gs(l),t.flags|=256,pe(e,t,n,r),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0};function ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uc(e,t,n){var r=t.pendingProps,l=H.current,i=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(H,l&1),e===null)return rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=$l(a,r,0,null),e=Ut(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ds(n),t.memoizedState=cs,e):ua(t,a));if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return Op(e,t,a,r,o,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,o=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=kt(o,i):(i=Ut(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?ds(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=cs,r}return i=e.child,e=i.sibling,r=kt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ua(e,t){return t=$l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Br(e,t,n,r){return r!==null&&Gs(r),vn(t,e.child,null,n),e=ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Op(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ni(Error(N(422))),Br(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=$l({mode:"visible",children:r.children},l,0,null),i=Ut(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&vn(t,e.child,null,a),t.child.memoizedState=ds(a),t.memoizedState=cs,i);if(!(t.mode&1))return Br(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(N(419)),r=Ni(i,r,void 0),Br(e,t,a,r)}if(o=(a&e.childLanes)!==0,ye||o){if(r=re,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,rt(e,l),$e(r,e,l,-1))}return ha(),r=Ni(Error(N(421))),Br(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Gp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,Ne=yt(l.nextSibling),Se=t,V=!0,Ae=null,e!==null&&(Pe[_e++]=Ze,Pe[_e++]=Je,Pe[_e++]=Bt,Ze=e.id,Je=e.overflow,Bt=t),t=ua(t,r.children),t.flags|=4096,t)}function Eo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ls(e.return,t,n)}function Si(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function $c(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(pe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eo(e,n,t);else if(e.tag===19)Eo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&jl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Si(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&jl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Si(t,!0,n,null,i);break;case"together":Si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bp(e,t,n){switch(t.tag){case 3:Ac(t),gn();break;case 5:pc(t);break;case 1:je(t.type)&&ml(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(vl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Uc(e,t,n):(U(H,H.current&1),e=lt(e,t,n),e!==null?e.sibling:null);U(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $c(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,bc(e,t,n)}return lt(e,t,n)}var Bc,fs,Vc,Hc;Bc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fs=function(){};Vc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ft(Ye.current);var i=null;switch(n){case"input":l=Mi(e,l),r=Mi(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=bi(e,l),r=bi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fl)}Ai(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var o=l[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(o=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==o&&(u!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&$("scroll",e),i||o===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fp(e,t,n){var r=t.pendingProps;switch(Ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return je(t.type)&&pl(),ue(t),null;case 3:return r=t.stateNode,yn(),B(xe),B(fe),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(js(Ae),Ae=null))),fs(e,t),ue(t),null;case 5:na(t);var l=Ft(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Vc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ue(t),null}if(e=Ft(Ye.current),Ur(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[ir]=i,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<An.length;l++)$(An[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Ma(r,i),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$("invalid",r);break;case"textarea":Oa(r,i),$("invalid",r)}Ai(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Ar(r.textContent,o,e),l=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Ar(r.textContent,o,e),l=["children",""+o]):Gn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&$("scroll",r)}switch(n){case"input":Rr(r),Da(r,i,!0);break;case"textarea":Rr(r),ba(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Qe]=t,e[ir]=r,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ui(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<An.length;l++)$(An[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":Ma(e,r),l=Mi(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),$("invalid",e);break;case"textarea":Oa(e,r),l=bi(e,r),$("invalid",e);break;default:l=r}Ai(n,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="style"?wu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xn(e,u):typeof u=="number"&&Xn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&$("scroll",e):u!=null&&Is(e,i,u,a))}switch(n){case"input":Rr(e),Da(e,r,!1);break;case"textarea":Rr(e),ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Ft(ar.current),Ft(Ye.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ue(t),null;case 13:if(B(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Ne!==null&&t.mode&1&&!(t.flags&128))oc(),gn(),t.flags|=98560,i=!1;else if(i=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Qe]=t}else gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else Ae!==null&&(js(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?J===0&&(J=3):ha())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return yn(),fs(e,t),e===null&&rr(t.stateNode.containerInfo),ue(t),null;case 10:return Zs(t.type._context),ue(t),null;case 17:return je(t.type)&&pl(),ue(t),null;case 19:if(B(H),i=t.memoizedState,i===null)return ue(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Mn(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=jl(e),a!==null){for(t.flags|=128,Mn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&X()>jn&&(t.flags|=128,r=!0,Mn(i,!1),t.lanes=4194304)}else{if(!r)if(e=jl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!V)return ue(t),null}else 2*X()-i.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=X(),t.sibling=null,n=H.current,U(H,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return ma(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Ap(e,t){switch(Ys(t),t.tag){case 1:return je(t.type)&&pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),B(xe),B(fe),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return yn(),null;case 10:return Zs(t.type._context),null;case 22:case 23:return ma(),null;case 24:return null;default:return null}}var Vr=!1,de=!1,Up=typeof WeakSet=="function"?WeakSet:Set,z=null;function sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function ps(e,t,n){try{n()}catch(r){K(e,t,r)}}var zo=!1;function $p(e,t){if(Xi=ul,e=Gu(),Qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,c=0,g=0,m=e,p=null;t:for(;;){for(var j;m!==n||l!==0&&m.nodeType!==3||(o=a+l),m!==i||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(j=m.firstChild)!==null;)p=m,m=j;for(;;){if(m===e)break t;if(p===n&&++c===l&&(o=a),p===i&&++g===r&&(u=a),(j=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=j}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qi={focusedElem:e,selectionRange:n},ul=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,k=x.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:be(t.type,y),k);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return x=zo,zo=!1,x}function Qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ps(t,n,i)}l=l.next}while(l!==r)}}function Al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ms(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wc(e){var t=e.alternate;t!==null&&(e.alternate=null,Wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[ir],delete t[es],delete t[Np],delete t[Sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qc(e){return e.tag===5||e.tag===3||e.tag===4}function Po(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fl));else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}var ie=null,Fe=!1;function at(e,t,n){for(n=n.child;n!==null;)Kc(e,t,n),n=n.sibling}function Kc(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:de||sn(n,t);case 6:var r=ie,l=Fe;ie=null,at(e,t,n),ie=r,Fe=l,ie!==null&&(Fe?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Fe?(e=ie,n=n.stateNode,e.nodeType===8?vi(e.parentNode,n):e.nodeType===1&&vi(e,n),er(e)):vi(ie,n.stateNode));break;case 4:r=ie,l=Fe,ie=n.stateNode.containerInfo,Fe=!0,at(e,t,n),ie=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ps(n,t,a),l=l.next}while(l!==r)}at(e,t,n);break;case 1:if(!de&&(sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){K(n,t,o)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,at(e,t,n),de=r):at(e,t,n);break;default:at(e,t,n)}}function _o(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Up),t.forEach(function(r){var l=Xp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:ie=o.stateNode,Fe=!1;break e;case 3:ie=o.stateNode.containerInfo,Fe=!0;break e;case 4:ie=o.stateNode.containerInfo,Fe=!0;break e}o=o.return}if(ie===null)throw Error(N(160));Kc(i,a,l),ie=null,Fe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){K(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yc(t,e),t=t.sibling}function Yc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),He(e),r&4){try{Qn(3,e,e.return),Al(3,e)}catch(y){K(e,e.return,y)}try{Qn(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:Me(t,e),He(e),r&512&&n!==null&&sn(n,n.return);break;case 5:if(Me(t,e),He(e),r&512&&n!==null&&sn(n,n.return),e.flags&32){var l=e.stateNode;try{Xn(l,"")}catch(y){K(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&gu(l,i),Ui(o,a);var c=Ui(o,i);for(a=0;a<u.length;a+=2){var g=u[a],m=u[a+1];g==="style"?wu(l,m):g==="dangerouslySetInnerHTML"?xu(l,m):g==="children"?Xn(l,m):Is(l,g,m,c)}switch(o){case"input":Di(l,i);break;case"textarea":vu(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?on(l,!!i.multiple,j,!1):p!==!!i.multiple&&(i.defaultValue!=null?on(l,!!i.multiple,i.defaultValue,!0):on(l,!!i.multiple,i.multiple?[]:"",!1))}l[ir]=i}catch(y){K(e,e.return,y)}}break;case 6:if(Me(t,e),He(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(y){K(e,e.return,y)}}break;case 3:if(Me(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:Me(t,e),He(e);break;case 13:Me(t,e),He(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(fa=X())),r&4&&_o(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||g,Me(t,e),de=c):Me(t,e),He(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(m=z=g;z!==null;){switch(p=z,j=p.child,p.tag){case 0:case 11:case 14:case 15:Qn(4,p,p.return);break;case 1:sn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){K(r,n,y)}}break;case 5:sn(p,p.return);break;case 22:if(p.memoizedState!==null){Ro(m);continue}}j!==null?(j.return=p,z=j):Ro(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=ju("display",a))}catch(y){K(e,e.return,y)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){K(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(t,e),He(e),r&4&&_o(e);break;case 21:break;default:Me(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Xn(l,""),r.flags&=-33);var i=Po(e);gs(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Po(e);hs(e,o,a);break;default:throw Error(N(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bp(e,t,n){z=e,Gc(e)}function Gc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var l=z,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Vr;if(!a){var o=l.alternate,u=o!==null&&o.memoizedState!==null||de;o=Vr;var c=de;if(Vr=a,(de=u)&&!c)for(z=l;z!==null;)a=z,u=a.child,a.tag===22&&a.memoizedState!==null?To(l):u!==null?(u.return=a,z=u):To(l);for(;i!==null;)z=i,Gc(i),i=i.sibling;z=l,Vr=o,de=c}Lo(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,z=i):Lo(e)}}function Lo(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Al(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&mo(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mo(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&er(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}de||t.flags&512&&ms(t)}catch(p){K(t,t.return,p)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Ro(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function To(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Al(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){K(t,l,u)}}var i=t.return;try{ms(t)}catch(u){K(t,i,u)}break;case 5:var a=t.return;try{ms(t)}catch(u){K(t,a,u)}}}catch(u){K(t,t.return,u)}if(t===e){z=null;break}var o=t.sibling;if(o!==null){o.return=t.return,z=o;break}z=t.return}}var Vp=Math.ceil,Nl=it.ReactCurrentDispatcher,ca=it.ReactCurrentOwner,Re=it.ReactCurrentBatchConfig,O=0,re=null,q=null,se=0,ke=0,an=zt(0),J=0,dr=null,Ht=0,Ul=0,da=0,Kn=null,ve=null,fa=0,jn=1/0,Xe=null,Sl=!1,vs=null,jt=null,Hr=!1,pt=null,Cl=0,Yn=0,ys=null,tl=-1,nl=0;function me(){return O&6?X():tl!==-1?tl:tl=X()}function wt(e){return e.mode&1?O&2&&se!==0?se&-se:Ep.transition!==null?(nl===0&&(nl=Iu()),nl):(e=F,e!==0||(e=window.event,e=e===void 0?16:Uu(e.type)),e):1}function $e(e,t,n,r){if(50<Yn)throw Yn=0,ys=null,Error(N(185));xr(e,n,r),(!(O&2)||e!==re)&&(e===re&&(!(O&2)&&(Ul|=n),J===4&&dt(e,se)),we(e,r),n===1&&O===0&&!(t.mode&1)&&(jn=X()+500,Ol&&Pt()))}function we(e,t){var n=e.callbackNode;Ef(e,t);var r=ol(e,e===re?se:0);if(r===0)n!==null&&Ua(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ua(n),t===1)e.tag===0?Cp(Io.bind(null,e)):ic(Io.bind(null,e)),wp(function(){!(O&6)&&Pt()}),n=null;else{switch(Mu(r)){case 1:n=Fs;break;case 4:n=Ru;break;case 16:n=al;break;case 536870912:n=Tu;break;default:n=al}n=rd(n,Xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xc(e,t){if(tl=-1,nl=0,O&6)throw Error(N(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=ol(e,e===re?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=El(e,r);else{t=r;var l=O;O|=2;var i=Zc();(re!==e||se!==t)&&(Xe=null,jn=X()+500,At(e,t));do try{Qp();break}catch(o){qc(e,o)}while(!0);qs(),Nl.current=i,O=l,q!==null?t=0:(re=null,se=0,t=J)}if(t!==0){if(t===2&&(l=Wi(e),l!==0&&(r=l,t=xs(e,l))),t===1)throw n=dr,At(e,0),dt(e,r),we(e,X()),n;if(t===6)dt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Hp(l)&&(t=El(e,r),t===2&&(i=Wi(e),i!==0&&(r=i,t=xs(e,i))),t===1))throw n=dr,At(e,0),dt(e,r),we(e,X()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Dt(e,ve,Xe);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=fa+500-X(),10<t)){if(ol(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ji(Dt.bind(null,e,ve,Xe),t);break}Dt(e,ve,Xe);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ue(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vp(r/1960))-r,10<r){e.timeoutHandle=Ji(Dt.bind(null,e,ve,Xe),r);break}Dt(e,ve,Xe);break;case 5:Dt(e,ve,Xe);break;default:throw Error(N(329))}}}return we(e,X()),e.callbackNode===n?Xc.bind(null,e):null}function xs(e,t){var n=Kn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=El(e,t),e!==2&&(t=ve,ve=n,t!==null&&js(t)),e}function js(e){ve===null?ve=e:ve.push.apply(ve,e)}function Hp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Be(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~da,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function Io(e){if(O&6)throw Error(N(327));pn();var t=ol(e,0);if(!(t&1))return we(e,X()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Wi(e);r!==0&&(t=r,n=xs(e,r))}if(n===1)throw n=dr,At(e,0),dt(e,t),we(e,X()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,ve,Xe),we(e,X()),null}function pa(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(jn=X()+500,Ol&&Pt())}}function Wt(e){pt!==null&&pt.tag===0&&!(O&6)&&pn();var t=O;O|=1;var n=Re.transition,r=F;try{if(Re.transition=null,F=1,e)return e()}finally{F=r,Re.transition=n,O=t,!(O&6)&&Pt()}}function ma(){ke=an.current,B(an)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ys(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:yn(),B(xe),B(fe),ra();break;case 5:na(r);break;case 4:yn();break;case 13:B(H);break;case 19:B(H);break;case 10:Zs(r.type._context);break;case 22:case 23:ma()}n=n.return}if(re=e,q=e=kt(e.current,null),se=ke=t,J=0,dr=null,da=Ul=Ht=0,ve=Kn=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}bt=null}return e}function qc(e,t){do{var n=q;try{if(qs(),Zr.current=kl,wl){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}wl=!1}if(Vt=0,ne=Z=W=null,Wn=!1,or=0,ca.current=null,n===null||n.return===null){J=1,dr=t,q=null;break}e:{var i=e,a=n.return,o=n,u=t;if(t=se,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=o,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var j=jo(a);if(j!==null){j.flags&=-257,wo(j,a,o,i,t),j.mode&1&&xo(i,c,t),t=j,u=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(u),t.updateQueue=y}else x.add(u);break e}else{if(!(t&1)){xo(i,c,t),ha();break e}u=Error(N(426))}}else if(V&&o.mode&1){var k=jo(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),wo(k,a,o,i,t),Gs(xn(u,o));break e}}i=u=xn(u,o),J!==4&&(J=2),Kn===null?Kn=[i]:Kn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Mc(i,u,t);po(i,h);break e;case 1:o=u;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(jt===null||!jt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Dc(i,o,t);po(i,w);break e}}i=i.return}while(i!==null)}ed(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Zc(){var e=Nl.current;return Nl.current=kl,e===null?kl:e}function ha(){(J===0||J===3||J===2)&&(J=4),re===null||!(Ht&268435455)&&!(Ul&268435455)||dt(re,se)}function El(e,t){var n=O;O|=2;var r=Zc();(re!==e||se!==t)&&(Xe=null,At(e,t));do try{Wp();break}catch(l){qc(e,l)}while(!0);if(qs(),O=n,Nl.current=r,q!==null)throw Error(N(261));return re=null,se=0,J}function Wp(){for(;q!==null;)Jc(q)}function Qp(){for(;q!==null&&!vf();)Jc(q)}function Jc(e){var t=nd(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?ed(e):q=t,ca.current=null}function ed(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ap(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}else if(n=Fp(n,t,ke),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function Dt(e,t,n){var r=F,l=Re.transition;try{Re.transition=null,F=1,Kp(e,t,n,r)}finally{Re.transition=l,F=r}return null}function Kp(e,t,n,r){do pn();while(pt!==null);if(O&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(zf(e,i),e===re&&(q=re=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hr||(Hr=!0,rd(al,function(){return pn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var a=F;F=1;var o=O;O|=4,ca.current=null,$p(e,n),Yc(n,e),pp(qi),ul=!!Xi,qi=Xi=null,e.current=n,Bp(n),yf(),O=o,F=a,Re.transition=i}else e.current=n;if(Hr&&(Hr=!1,pt=e,Cl=l),i=e.pendingLanes,i===0&&(jt=null),wf(n.stateNode),we(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Sl)throw Sl=!1,e=vs,vs=null,e;return Cl&1&&e.tag!==0&&pn(),i=e.pendingLanes,i&1?e===ys?Yn++:(Yn=0,ys=e):Yn=0,Pt(),null}function pn(){if(pt!==null){var e=Mu(Cl),t=Re.transition,n=F;try{if(Re.transition=null,F=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,Cl=0,O&6)throw Error(N(331));var l=O;for(O|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var o=i.deletions;if(o!==null){for(var u=0;u<o.length;u++){var c=o[u];for(z=c;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Qn(8,g,i)}var m=g.child;if(m!==null)m.return=g,z=m;else for(;z!==null;){g=z;var p=g.sibling,j=g.return;if(Wc(g),g===c){z=null;break}if(p!==null){p.return=j,z=p;break}z=j}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qn(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,z=h;break e}z=i.return}}var d=e.current;for(z=d;z!==null;){a=z;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,z=f;else e:for(a=d;z!==null;){if(o=z,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Al(9,o)}}catch(S){K(o,o.return,S)}if(o===a){z=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,z=w;break e}z=o.return}}if(O=l,Pt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Rl,e)}catch{}r=!0}return r}finally{F=n,Re.transition=t}}return!1}function Mo(e,t,n){t=xn(n,t),t=Mc(e,t,1),e=xt(e,t,1),t=me(),e!==null&&(xr(e,1,t),we(e,t))}function K(e,t,n){if(e.tag===3)Mo(e,e,n);else for(;t!==null;){if(t.tag===3){Mo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=xn(n,e),e=Dc(t,e,1),t=xt(t,e,1),e=me(),t!==null&&(xr(t,1,e),we(t,e));break}}t=t.return}}function Yp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(se&n)===n&&(J===4||J===3&&(se&130023424)===se&&500>X()-fa?At(e,0):da|=n),we(e,t)}function td(e,t){t===0&&(e.mode&1?(t=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):t=1);var n=me();e=rt(e,t),e!==null&&(xr(e,t,n),we(e,n))}function Gp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),td(e,n)}function Xp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),td(e,n)}var nd;nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,bp(e,t,n);ye=!!(e.flags&131072)}else ye=!1,V&&t.flags&1048576&&sc(t,gl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;el(e,t),e=t.pendingProps;var l=hn(t,fe.current);fn(t,n),l=ia(null,t,r,e,l,n);var i=sa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(i=!0,ml(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ea(t),l.updater=Fl,t.stateNode=l,l._reactInternals=t,ss(t,r,e,n),t=us(null,t,r,!0,i,n)):(t.tag=0,V&&i&&Ks(t),pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(el(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Zp(r),e=be(r,e),l){case 0:t=os(null,t,r,e,n);break e;case 1:t=So(null,t,r,e,n);break e;case 11:t=ko(null,t,r,e,n);break e;case 14:t=No(null,t,r,be(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),os(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),So(e,t,r,l,n);case 3:e:{if(Ac(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,l=i.element,fc(e,t),xl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=xn(Error(N(423)),t),t=Co(e,t,r,n,l);break e}else if(r!==l){l=xn(Error(N(424)),t),t=Co(e,t,r,n,l);break e}else for(Ne=yt(t.stateNode.containerInfo.firstChild),Se=t,V=!0,Ae=null,n=cc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gn(),r===l){t=lt(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return pc(t),e===null&&rs(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Zi(r,l)?a=null:i!==null&&Zi(r,i)&&(t.flags|=32),Fc(e,t),pe(e,t,a,n),t.child;case 6:return e===null&&rs(t),null;case 13:return Uc(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),ko(e,t,r,l,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,U(vl,r._currentValue),r._currentValue=a,i!==null)if(Be(i.value,a)){if(i.children===l.children&&!xe.current){t=lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=et(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ls(i.return,n,t),o.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ls(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,fn(t,n),l=Te(l),r=r(l),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,l=be(r,t.pendingProps),l=be(r.type,l),No(e,t,r,l,n);case 15:return Oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),el(e,t),t.tag=1,je(r)?(e=!0,ml(t)):e=!1,fn(t,n),Ic(t,r,l),ss(t,r,l,n),us(null,t,r,!0,e,n);case 19:return $c(e,t,n);case 22:return bc(e,t,n)}throw Error(N(156,t.tag))};function rd(e,t){return Lu(e,t)}function qp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new qp(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zp(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ds)return 11;if(e===Os)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rl(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")ga(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xt:return Ut(n.children,l,i,t);case Ms:a=8,l|=8;break;case Li:return e=Le(12,n,t,l|2),e.elementType=Li,e.lanes=i,e;case Ri:return e=Le(13,n,t,l),e.elementType=Ri,e.lanes=i,e;case Ti:return e=Le(19,n,t,l),e.elementType=Ti,e.lanes=i,e;case pu:return $l(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case du:a=10;break e;case fu:a=9;break e;case Ds:a=11;break e;case Os:a=14;break e;case ot:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Le(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Ut(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=Le(22,e,r,t),e.elementType=pu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ci(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Ei(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function va(e,t,n,r,l,i,a,o,u){return e=new Jp(e,t,n,o,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Le(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(i),e}function em(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ld(e){if(!e)return Ct;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(je(n))return lc(e,n,t)}return t}function id(e,t,n,r,l,i,a,o,u){return e=va(n,r,!0,e,l,i,a,o,u),e.context=ld(null),n=e.current,r=me(),l=wt(n),i=et(r,l),i.callback=t??null,xt(n,i,l),e.current.lanes=l,xr(e,l,r),we(e,r),e}function Bl(e,t,n,r){var l=t.current,i=me(),a=wt(l);return n=ld(n),t.context===null?t.context=n:t.pendingContext=n,t=et(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(l,t,a),e!==null&&($e(e,l,a,i),qr(e,l,a)),a}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Do(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ya(e,t){Do(e,t),(e=e.alternate)&&Do(e,t)}function tm(){return null}var sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}Vl.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Bl(e,t,null,null)};Vl.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Bl(null,e,null,null)}),t[nt]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&Au(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oo(){}function nm(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=zl(a);i.call(c)}}var a=id(t,r,e,0,null,!1,!1,"",Oo);return e._reactRootContainer=a,e[nt]=a.current,rr(e.nodeType===8?e.parentNode:e),Wt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var o=r;r=function(){var c=zl(u);o.call(c)}}var u=va(e,0,!1,null,null,!1,!1,"",Oo);return e._reactRootContainer=u,e[nt]=u.current,rr(e.nodeType===8?e.parentNode:e),Wt(function(){Bl(t,u,n,r)}),u}function Wl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var o=l;l=function(){var u=zl(a);o.call(u)}}Bl(t,a,e,l)}else a=nm(n,t,e,l,r);return zl(a)}Du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(As(t,n|1),we(t,X()),!(O&6)&&(jn=X()+500,Pt()))}break;case 13:Wt(function(){var r=rt(e,1);if(r!==null){var l=me();$e(r,e,1,l)}}),ya(e,1)}};Us=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=me();$e(t,e,134217728,n)}ya(e,134217728)}};Ou=function(e){if(e.tag===13){var t=wt(e),n=rt(e,t);if(n!==null){var r=me();$e(n,e,t,r)}ya(e,t)}};bu=function(){return F};Fu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Bi=function(e,t,n){switch(t){case"input":if(Di(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Dl(r);if(!l)throw Error(N(90));hu(r),Di(r,l)}}}break;case"textarea":vu(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};Su=pa;Cu=Wt;var rm={usingClientEntryPoint:!1,Events:[wr,en,Dl,ku,Nu,pa]},Dn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lm={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Rl=Wr.inject(lm),Ke=Wr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rm;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(t))throw Error(N(200));return em(e,t,null,n)};Ee.createRoot=function(e,t){if(!ja(e))throw Error(N(299));var n=!1,r="",l=sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=va(e,1,!1,null,null,n,!1,r,l),e[nt]=t.current,rr(e.nodeType===8?e.parentNode:e),new xa(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Pu(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Wt(e)};Ee.hydrate=function(e,t,n){if(!Hl(t))throw Error(N(200));return Wl(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!ja(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=sd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=id(t,null,e,1,n??null,l,!1,i,a),e[nt]=t.current,rr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Vl(t)};Ee.render=function(e,t,n){if(!Hl(t))throw Error(N(200));return Wl(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(N(40));return e._reactRootContainer?(Wt(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ee.unstable_batchedUpdates=pa;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Wl(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function ad(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad)}catch(e){console.error(e)}}ad(),au.exports=Ee;var im=au.exports,bo=im;Pi.createRoot=bo.createRoot,Pi.hydrateRoot=bo.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fr(){return fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fr.apply(null,arguments)}var mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mt||(mt={}));const Fo="popstate";function sm(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:a,hash:o}=r.location;return ws("",{pathname:i,search:a,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Pl(l)}return om(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function am(){return Math.random().toString(36).substr(2,8)}function Ao(e,t){return{usr:e.state,key:e.key,idx:t}}function ws(e,t,n,r){return n===void 0&&(n=null),fr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cn(t):t,{state:n,key:t&&t.key||r||am()})}function Pl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function om(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,a=l.history,o=mt.Pop,u=null,c=g();c==null&&(c=0,a.replaceState(fr({},a.state,{idx:c}),""));function g(){return(a.state||{idx:null}).idx}function m(){o=mt.Pop;let k=g(),h=k==null?null:k-c;c=k,u&&u({action:o,location:y.location,delta:h})}function p(k,h){o=mt.Push;let d=ws(y.location,k,h);c=g()+1;let f=Ao(d,c),w=y.createHref(d);try{a.pushState(f,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(w)}i&&u&&u({action:o,location:y.location,delta:1})}function j(k,h){o=mt.Replace;let d=ws(y.location,k,h);c=g();let f=Ao(d,c),w=y.createHref(d);a.replaceState(f,"",w),i&&u&&u({action:o,location:y.location,delta:0})}function x(k){let h=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof k=="string"?k:Pl(k);return d=d.replace(/ $/,"%20"),Y(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let y={get action(){return o},get location(){return e(l,a)},listen(k){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Fo,m),u=k,()=>{l.removeEventListener(Fo,m),u=null}},createHref(k){return t(l,k)},createURL:x,encodeLocation(k){let h=x(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:j,go(k){return a.go(k)}};return y}var Uo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uo||(Uo={}));function um(e,t,n){return n===void 0&&(n="/"),cm(e,t,n)}function cm(e,t,n,r){let l=typeof t=="string"?Cn(t):t,i=wn(l.pathname||"/",n);if(i==null)return null;let a=od(e);dm(a);let o=null,u=km(i);for(let c=0;o==null&&c<a.length;++c)o=jm(a[c],u);return o}function od(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,a,o)=>{let u={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(Y(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Nt([r,u.relativePath]),g=n.concat(u);i.children&&i.children.length>0&&(Y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),od(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:ym(c,i.index),routesMeta:g})};return e.forEach((i,a)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,a);else for(let u of ud(i.path))l(i,a,u)}),t}function ud(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let a=ud(r.join("/")),o=[];return o.push(...a.map(u=>u===""?i:[i,u].join("/"))),l&&o.push(...a),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function dm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fm=/^:[\w-]+$/,pm=3,mm=2,hm=1,gm=10,vm=-2,$o=e=>e==="*";function ym(e,t){let n=e.split("/"),r=n.length;return n.some($o)&&(r+=vm),t&&(r+=mm),n.filter(l=>!$o(l)).reduce((l,i)=>l+(fm.test(i)?pm:i===""?hm:gm),r)}function xm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function jm(e,t,n){let{routesMeta:r}=e,l={},i="/",a=[];for(let o=0;o<r.length;++o){let u=r[o],c=o===r.length-1,g=i==="/"?t:t.slice(i.length)||"/",m=ks({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),p=u.route;if(!m)return null;Object.assign(l,m.params),a.push({params:l,pathname:Nt([i,m.pathname]),pathnameBase:zm(Nt([i,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(i=Nt([i,m.pathnameBase]))}return a}function ks(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wm(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],a=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:r.reduce((c,g,m)=>{let{paramName:p,isOptional:j}=g;if(p==="*"){let y=o[m]||"";a=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const x=o[m];return j&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function wm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,u)=>(r.push({paramName:o,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function km(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sm=e=>Nm.test(e);function Cm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Cn(e):e,i;if(n)if(Sm(n))i=n;else{if(n.includes("//")){let a=n;n=fd(n),wa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?i=Bo(n.substring(1),"/"):i=Bo(n,t)}else i=t;return{pathname:i,search:Pm(r),hash:_m(l)}}function Bo(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function zi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Em(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cd(e,t){let n=Em(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dd(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Cn(e):(l=fr({},e),Y(!l.pathname||!l.pathname.includes("?"),zi("?","pathname","search",l)),Y(!l.pathname||!l.pathname.includes("#"),zi("#","pathname","hash",l)),Y(!l.search||!l.search.includes("#"),zi("#","search","hash",l)));let i=e===""||l.pathname==="",a=i?"/":l.pathname,o;if(a==null)o=n;else{let m=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),m-=1;l.pathname=p.join("/")}o=m>=0?t[m]:"/"}let u=Cm(l,o),c=a&&a!=="/"&&a.endsWith("/"),g=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const fd=e=>e.replace(/\/\/+/g,"/"),Nt=e=>fd(e.join("/")),zm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_m=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pd=["post","put","patch","delete"];new Set(pd);const Rm=["get",...pd];new Set(Rm);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pr(){return pr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pr.apply(null,arguments)}const Ql=v.createContext(null),md=v.createContext(null),_t=v.createContext(null),Kl=v.createContext(null),Lt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),hd=v.createContext(null);function Tm(e,t){let{relative:n}=t===void 0?{}:t;Nr()||Y(!1);let{basename:r,navigator:l}=v.useContext(_t),{hash:i,pathname:a,search:o}=Yl(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:Nt([r,a])),l.createHref({pathname:u,search:o,hash:i})}function Nr(){return v.useContext(Kl)!=null}function En(){return Nr()||Y(!1),v.useContext(Kl).location}function gd(e){v.useContext(_t).static||v.useLayoutEffect(e)}function Ve(){let{isDataRoute:e}=v.useContext(Lt);return e?Qm():Im()}function Im(){Nr()||Y(!1);let e=v.useContext(Ql),{basename:t,future:n,navigator:r}=v.useContext(_t),{matches:l}=v.useContext(Lt),{pathname:i}=En(),a=JSON.stringify(cd(l,n.v7_relativeSplatPath)),o=v.useRef(!1);return gd(()=>{o.current=!0}),v.useCallback(function(c,g){if(g===void 0&&(g={}),!o.current)return;if(typeof c=="number"){r.go(c);return}let m=dd(c,JSON.parse(a),i,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Nt([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,a,i,e])}function Mm(){let{matches:e}=v.useContext(Lt),t=e[e.length-1];return t?t.params:{}}function Yl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=v.useContext(_t),{matches:l}=v.useContext(Lt),{pathname:i}=En(),a=JSON.stringify(cd(l,r.v7_relativeSplatPath));return v.useMemo(()=>dd(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Dm(e,t){return Om(e,t)}function Om(e,t,n,r){Nr()||Y(!1);let{navigator:l}=v.useContext(_t),{matches:i}=v.useContext(Lt),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=En(),g;if(t){var m;let k=typeof t=="string"?Cn(t):t;u==="/"||(m=k.pathname)!=null&&m.startsWith(u)||Y(!1),g=k}else g=c;let p=g.pathname||"/",j=p;if(u!=="/"){let k=u.replace(/^\//,"").split("/");j="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=um(e,{pathname:j}),y=$m(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},o,k.params),pathname:Nt([u,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Nt([u,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&y?v.createElement(Kl.Provider,{value:{location:pr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:mt.Pop}},y):y}function bm(){let e=Wm(),t=Lm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:l},n):null,null)}const Fm=v.createElement(bm,null);class Am extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(Lt.Provider,{value:this.props.routeContext},v.createElement(hd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Um(e){let{routeContext:t,match:n,children:r}=e,l=v.useContext(Ql);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(Lt.Provider,{value:t},r)}function $m(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=(l=n)==null?void 0:l.errors;if(o!=null){let g=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);g>=0||Y(!1),a=a.slice(0,Math.min(a.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<a.length;g++){let m=a[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=g),m.route.id){let{loaderData:p,errors:j}=n,x=m.route.loader&&p[m.route.id]===void 0&&(!j||j[m.route.id]===void 0);if(m.route.lazy||x){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((g,m,p)=>{let j,x=!1,y=null,k=null;n&&(j=o&&m.route.id?o[m.route.id]:void 0,y=m.route.errorElement||Fm,u&&(c<0&&p===0?(Km("route-fallback"),x=!0,k=null):c===p&&(x=!0,k=m.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,p+1)),d=()=>{let f;return j?f=y:x?f=k:m.route.Component?f=v.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=g,v.createElement(Um,{match:m,routeContext:{outlet:g,matches:h,isDataRoute:n!=null},children:f})};return n&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?v.createElement(Am,{location:n.location,revalidation:n.revalidation,component:y,error:j,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var vd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vd||{}),yd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(yd||{});function Bm(e){let t=v.useContext(Ql);return t||Y(!1),t}function Vm(e){let t=v.useContext(md);return t||Y(!1),t}function Hm(e){let t=v.useContext(Lt);return t||Y(!1),t}function xd(e){let t=Hm(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function Wm(){var e;let t=v.useContext(hd),n=Vm(),r=xd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Qm(){let{router:e}=Bm(vd.UseNavigateStable),t=xd(yd.UseNavigateStable),n=v.useRef(!1);return gd(()=>{n.current=!0}),v.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,pr({fromRouteId:t},i)))},[e,t])}const Vo={};function Km(e,t,n){Vo[e]||(Vo[e]=!0)}function Ym(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Oe(e){Y(!1)}function Gm(e){let{basename:t="/",children:n=null,location:r,navigationType:l=mt.Pop,navigator:i,static:a=!1,future:o}=e;Nr()&&Y(!1);let u=t.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:u,navigator:i,static:a,future:pr({v7_relativeSplatPath:!1},o)}),[u,o,i,a]);typeof r=="string"&&(r=Cn(r));let{pathname:g="/",search:m="",hash:p="",state:j=null,key:x="default"}=r,y=v.useMemo(()=>{let k=wn(g,u);return k==null?null:{location:{pathname:k,search:m,hash:p,state:j,key:x},navigationType:l}},[u,g,m,p,j,x,l]);return y==null?null:v.createElement(_t.Provider,{value:c},v.createElement(Kl.Provider,{children:n,value:y}))}function Xm(e){let{children:t,location:n}=e;return Dm(Ns(t),n)}new Promise(()=>{});function Ns(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,l)=>{if(!v.isValidElement(r))return;let i=[...t,l];if(r.type===v.Fragment){n.push.apply(n,Ns(r.props.children,i));return}r.type!==Oe&&Y(!1),!r.props.index||!r.props.children||Y(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ns(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_l.apply(null,arguments)}function jd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function qm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zm(e,t){return e.button===0&&(!t||t==="_self")&&!qm(e)}function Ss(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(l=>[n,l]):[[n,r]])},[]))}function Jm(e,t){let n=Ss(e);return t&&t.forEach((r,l)=>{n.has(l)||t.getAll(l).forEach(i=>{n.append(l,i)})}),n}const eh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],th=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],nh="6";try{window.__reactRouterVersion=nh}catch{}const rh=v.createContext({isTransitioning:!1}),lh="startTransition",Ho=Kd[lh];function ih(e){let{basename:t,children:n,future:r,window:l}=e,i=v.useRef();i.current==null&&(i.current=sm({window:l,v5Compat:!0}));let a=i.current,[o,u]=v.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},g=v.useCallback(m=>{c&&Ho?Ho(()=>u(m)):u(m)},[u,c]);return v.useLayoutEffect(()=>a.listen(g),[a,g]),v.useEffect(()=>Ym(r),[r]),v.createElement(Gm,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const sh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b=v.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:a,state:o,target:u,to:c,preventScrollReset:g,viewTransition:m}=t,p=jd(t,eh),{basename:j}=v.useContext(_t),x,y=!1;if(typeof c=="string"&&ah.test(c)&&(x=c,sh))try{let f=new URL(window.location.href),w=c.startsWith("//")?new URL(f.protocol+c):new URL(c),S=wn(w.pathname,j);w.origin===f.origin&&S!=null?c=S+w.search+w.hash:y=!0}catch{}let k=Tm(c,{relative:l}),h=uh(c,{replace:a,state:o,target:u,preventScrollReset:g,relative:l,viewTransition:m});function d(f){r&&r(f),f.defaultPrevented||h(f)}return v.createElement("a",_l({},p,{href:x||k,onClick:y||i?r:d,ref:n,target:u}))}),De=v.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:a=!1,style:o,to:u,viewTransition:c,children:g}=t,m=jd(t,th),p=Yl(u,{relative:m.relative}),j=En(),x=v.useContext(md),{navigator:y,basename:k}=v.useContext(_t),h=x!=null&&dh(p)&&c===!0,d=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,f=j.pathname,w=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;l||(f=f.toLowerCase(),w=w?w.toLowerCase():null,d=d.toLowerCase()),w&&k&&(w=wn(w,k)||w);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let C=f===d||!a&&f.startsWith(d)&&f.charAt(S)==="/",E=w!=null&&(w===d||!a&&w.startsWith(d)&&w.charAt(d.length)==="/"),_={isActive:C,isPending:E,isTransitioning:h},A=C?r:void 0,L;typeof i=="function"?L=i(_):L=[i,C?"active":null,E?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let T=typeof o=="function"?o(_):o;return v.createElement(b,_l({},m,{"aria-current":A,className:L,ref:n,style:T,to:u,viewTransition:c}),typeof g=="function"?g(_):g)});var Cs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cs||(Cs={}));var Wo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wo||(Wo={}));function oh(e){let t=v.useContext(Ql);return t||Y(!1),t}function uh(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:a,viewTransition:o}=t===void 0?{}:t,u=Ve(),c=En(),g=Yl(e,{relative:a});return v.useCallback(m=>{if(Zm(m,n)){m.preventDefault();let p=r!==void 0?r:Pl(c)===Pl(g);u(e,{replace:p,state:l,preventScrollReset:i,relative:a,viewTransition:o})}},[c,u,g,r,l,n,e,i,a,o])}function ch(e){let t=v.useRef(Ss(e)),n=v.useRef(!1),r=En(),l=v.useMemo(()=>Jm(r.search,n.current?null:t.current),[r.search]),i=Ve(),a=v.useCallback((o,u)=>{const c=Ss(typeof o=="function"?o(l):o);n.current=!0,i("?"+c,u)},[i,l]);return[l,a]}function dh(e,t){t===void 0&&(t={});let n=v.useContext(rh);n==null&&Y(!1);let{basename:r}=oh(Cs.useViewTransitionState),l=Yl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=wn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=wn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ks(l.pathname,a)!=null||ks(l.pathname,i)!=null}const fh="/api/v1",ph=()=>{const e=localStorage.getItem("campuscrate_token");return e?{Authorization:`Bearer ${e}`}:{}};async function ce(e,t={}){const n=`${fh}${e}`,r={...ph(),...t.headers};t.body&&!(t.body instanceof FormData)&&(r["Content-Type"]="application/json",t.body=JSON.stringify(t.body));const l=await fetch(n,{...t,headers:r}),i=await l.json().catch(()=>({}));if(!l.ok){const a=new Error(i.message||"An error occurred during API request");throw a.status=l.status,a.errors=i.errors||[],a}return i}const ee={auth:{register:e=>ce("/auth/register",{method:"POST",body:e}),login:e=>ce("/auth/login",{method:"POST",body:e}),getProfile:()=>ce("/auth/me",{method:"GET"}),logout:()=>ce("/auth/logout",{method:"POST"})},items:{getAll:(e={})=>{const t=new URLSearchParams(e).toString();return ce(`/items${t?`?${t}`:""}`,{method:"GET"})},getById:e=>ce(`/items/${e}`,{method:"GET"}),create:e=>ce("/items",{method:"POST",body:e}),update:(e,t)=>ce(`/items/${e}`,{method:"PUT",body:t}),delete:e=>ce(`/items/${e}`,{method:"DELETE"})},claims:{create:e=>ce("/claims",{method:"POST",body:e}),getAll:(e={})=>{const t=new URLSearchParams(e).toString();return ce(`/claims${t?`?${t}`:""}`,{method:"GET"})},updateStatus:(e,t)=>ce(`/claims/${e}/status`,{method:"PATCH",body:{status:t}})},reports:{create:e=>ce("/reports",{method:"POST",body:e}),getAll:()=>ce("/reports",{method:"GET"})},admin:{getDashboard:()=>ce("/admin/dashboard",{method:"GET"}),getUsers:()=>ce("/admin/users",{method:"GET"})}},wd=v.createContext(null),mh=({children:e})=>{const[t,n]=v.useState(null),[r,l]=v.useState(!0),i=async()=>{if(!localStorage.getItem("campuscrate_token")){n(null),l(!1);return}try{const g=await ee.auth.getProfile();g.success&&g.data&&n(g.data.user||g.data)}catch(g){console.error("Failed to fetch user profile:",g),localStorage.removeItem("campuscrate_token"),n(null)}finally{l(!1)}};v.useEffect(()=>{i()},[]);const a=async(c,g)=>{const m=await ee.auth.login({email:c,password:g});if(m.success&&m.data){const{user:p,accessToken:j,token:x}=m.data,y=j||x;y&&localStorage.setItem("campuscrate_token",y),n(p)}return m},o=async c=>{const g=await ee.auth.register(c);if(g.success&&g.data){const{user:m,accessToken:p,token:j}=g.data,x=p||j;x&&localStorage.setItem("campuscrate_token",x),n(m)}return g},u=async()=>{try{await ee.auth.logout()}catch{}finally{localStorage.removeItem("campuscrate_token"),n(null)}};return s.jsx(wd.Provider,{value:{user:t,loading:r,login:a,register:o,logout:u,refreshUser:i},children:e})},Rt=()=>{const e=v.useContext(wd);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kd=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:a,...o},u)=>v.createElement("svg",{ref:u,...gh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:kd("lucide",l),...o},[...a.map(([c,g])=>v.createElement(c,g)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=(e,t)=>{const n=v.forwardRef(({className:r,...l},i)=>v.createElement(vh,{ref:i,iconNode:t,className:kd(`lucide-${hh(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=R("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=R("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=R("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=R("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=R("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=R("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=R("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=R("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=R("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=R("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=R("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=R("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=R("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=R("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=R("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=R("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=R("IdCard",[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=R("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=R("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=R("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=R("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=R("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=R("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=R("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=R("PackageX",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=R("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=R("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=R("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=R("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=R("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=R("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=R("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=R("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=R("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=R("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=R("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=R("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=R("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Oh=()=>{const{user:e,logout:t}=Rt(),[n,r]=v.useState(!1),l=Ve(),i=async()=>{await t(),l("/login")},a=({isActive:o})=>`nav-link ${o?"active":""}`;return s.jsxs("header",{className:"navbar-header",children:[s.jsxs("div",{className:"navbar-container",children:[s.jsxs(b,{to:"/",className:"brand-logo",children:[s.jsx("div",{className:"logo-icon-wrap",children:s.jsx(Ge,{className:"logo-icon",size:24})}),s.jsxs("span",{className:"brand-title",children:["Campus",s.jsx("span",{className:"gradient-text",children:"Crate"})]})]}),s.jsxs("nav",{className:"desktop-nav",children:[s.jsx(De,{to:"/",className:a,children:"Home"}),s.jsxs(De,{to:"/items",className:a,children:[s.jsx(gr,{size:16}),s.jsx("span",{children:"Browse Items"})]}),s.jsxs(De,{to:"/report-item",className:a,children:[s.jsx(Gl,{size:16}),s.jsx("span",{children:"Report Item"})]}),e&&s.jsxs(De,{to:"/claims",className:a,children:[s.jsx(hr,{size:16}),s.jsx("span",{children:"Claims"})]}),e&&(e.role==="admin"||e.role==="ADMIN")&&s.jsxs(De,{to:"/admin",className:a,children:[s.jsx(Ca,{size:16}),s.jsx("span",{children:"Admin"})]})]}),s.jsxs("div",{className:"auth-controls",children:[e?s.jsxs("div",{className:"user-profile-menu",children:[s.jsxs(b,{to:"/profile",className:"profile-btn",children:[s.jsx("div",{className:"avatar",children:e.name?e.name.charAt(0).toUpperCase():"U"}),s.jsxs("div",{className:"user-info-text",children:[s.jsx("span",{className:"user-name",children:e.name}),s.jsx("span",{className:"user-role",children:e.role||"Student"})]})]}),s.jsx("button",{onClick:i,className:"btn-logout",title:"Sign Out",children:s.jsx(Ph,{size:18})})]}):s.jsxs("div",{className:"auth-buttons",children:[s.jsx(b,{to:"/login",className:"btn btn-secondary btn-sm",children:"Sign In"}),s.jsx(b,{to:"/register",className:"btn btn-primary btn-sm",children:"Register"})]}),s.jsx("button",{className:"mobile-toggle",onClick:()=>r(!n),"aria-label":"Toggle Navigation",children:n?s.jsx(ql,{size:24}):s.jsx(_h,{size:24})})]})]}),n&&s.jsxs("div",{className:"mobile-drawer fade-in",children:[s.jsx(De,{to:"/",onClick:()=>r(!1),children:"Home"}),s.jsx(De,{to:"/items",onClick:()=>r(!1),children:"Browse Items"}),s.jsx(De,{to:"/report-item",onClick:()=>r(!1),children:"Report Item"}),e&&s.jsx(De,{to:"/claims",onClick:()=>r(!1),children:"My Claims"}),e&&(e.role==="admin"||e.role==="ADMIN")&&s.jsx(De,{to:"/admin",onClick:()=>r(!1),children:"Admin Panel"}),e?s.jsxs(s.Fragment,{children:[s.jsx(De,{to:"/profile",onClick:()=>r(!1),children:"My Profile"}),s.jsx("button",{onClick:()=>{r(!1),i()},className:"btn btn-danger btn-sm w-full mt-2",children:"Sign Out"})]}):s.jsxs("div",{className:"mobile-auth-btns",children:[s.jsx(b,{to:"/login",className:"btn btn-secondary w-full",onClick:()=>r(!1),children:"Sign In"}),s.jsx(b,{to:"/register",className:"btn btn-primary w-full",onClick:()=>r(!1),children:"Register"})]})]}),s.jsx("style",{children:`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(11, 15, 25, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
        }
        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.85rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .logo-icon-wrap {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }
        .brand-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          color: var(--text-main);
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: var(--transition);
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .nav-link:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.04);
        }
        .nav-link.active {
          color: var(--primary);
          background: rgba(99, 102, 241, 0.12);
          font-weight: 600;
        }
        .auth-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .auth-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .user-profile-menu {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .profile-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.35rem 0.6rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }
        .profile-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--border-highlight);
        }
        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .user-info-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .user-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.1;
        }
        .user-role {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: capitalize;
        }
        .btn-logout {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          transition: var(--transition);
          display: flex;
          align-items: center;
        }
        .btn-logout:hover {
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.15);
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }
        .mobile-drawer {
          display: none;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-dark);
          border-bottom: 1px solid var(--border-color);
        }
        .w-full { width: 100%; }
        .mt-2 { margin-top: 0.5rem; }

        @media (max-width: 768px) {
          .desktop-nav, .user-info-text, .auth-buttons {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-drawer {
            display: flex;
          }
        }
      `})]})},bh=()=>s.jsxs("footer",{className:"footer",children:[s.jsxs("div",{className:"footer-container",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsxs("div",{className:"brand-logo",children:[s.jsx("div",{className:"logo-icon-wrap",children:s.jsx(Ge,{size:20})}),s.jsxs("span",{className:"brand-title",children:["Campus",s.jsx("span",{className:"gradient-text",children:"Crate"})]})]}),s.jsx("p",{className:"footer-desc",children:"The official smart lost and found resolution system for college campuses. Report lost belongings, match found items, and claim your properties with ease."})]}),s.jsxs("div",{className:"footer-links-group",children:[s.jsxs("div",{className:"footer-col",children:[s.jsx("h4",{children:"Quick Links"}),s.jsx(b,{to:"/",children:"Home Overview"}),s.jsx(b,{to:"/items",children:"Browse All Items"}),s.jsx(b,{to:"/report-item",children:"Report an Item"}),s.jsx(b,{to:"/claims",children:"Track Claims"})]}),s.jsxs("div",{className:"footer-col",children:[s.jsx("h4",{children:"Categories"}),s.jsx(b,{to:"/items?category=electronics",children:"Electronics"}),s.jsx(b,{to:"/items?category=documents",children:"Documents & IDs"}),s.jsx(b,{to:"/items?category=books",children:"Books & Stationery"}),s.jsx(b,{to:"/items?category=clothing",children:"Clothing & Apparel"})]}),s.jsxs("div",{className:"footer-col",children:[s.jsx("h4",{children:"Help & Policy"}),s.jsxs("span",{className:"footer-link",children:[s.jsx(Ca,{size:14})," Verification Process"]}),s.jsxs("span",{className:"footer-link",children:[s.jsx(Nd,{size:14})," Claim Guidelines"]}),s.jsxs("span",{className:"footer-link",children:[s.jsx(Cr,{size:14})," Campus Security Contact"]})]})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsxs("div",{className:"footer-bottom-container",children:[s.jsxs("p",{children:["© ",new Date().getFullYear()," CampusCrate System. Designed for modern campus management."]}),s.jsxs("p",{className:"credit",children:["Built with ",s.jsx(Sh,{size:14,color:"#ec4899",inline:"true"})," for College Campuses"]})]})}),s.jsx("style",{children:`
        .footer {
          background: #080c14;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
          color: var(--text-muted);
        }
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 2.5rem;
          display: grid;
          grid-template-columns: 1.5fr 3fr;
          gap: 3rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-dim);
        }
        .footer-links-group {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-col h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }
        .footer-col a, .footer-link {
          font-size: 0.88rem;
          color: var(--text-muted);
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .footer-col a:hover {
          color: var(--primary);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.25rem 1.5rem;
        }
        .footer-bottom-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .credit {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-links-group {
            grid-template-columns: 1fr;
          }
          .footer-bottom-container {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `})]}),Ea=({item:e})=>{if(!e)return null;const{_id:t,title:n,status:r,category:l,location:i,date:a,imageUrl:o,reporter:u}=e,c=p=>{switch(p==null?void 0:p.toUpperCase()){case"LOST":return"badge-lost";case"FOUND":return"badge-found";case"CLAIMED":return"badge-claimed";case"RESOLVED":return"badge-resolved";default:return"badge-found"}},g=a?new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Recent",m=o?o.startsWith("http")?o:`${o}`:null;return s.jsxs("div",{className:"glass-card item-card",children:[s.jsxs("div",{className:"card-media",children:[m?s.jsx("img",{src:m,alt:n,className:"item-image",loading:"lazy"}):s.jsxs("div",{className:"no-image-placeholder",children:[s.jsx(Cd,{size:32}),s.jsx("span",{children:"No Image"})]}),s.jsx("div",{className:"card-status-badge",children:s.jsx("span",{className:`badge ${c(r)}`,children:r})})]}),s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{className:"card-category",children:[s.jsx(Pd,{size:12}),s.jsx("span",{children:l||"General"})]}),s.jsx("h3",{className:"card-title",children:n}),s.jsxs("div",{className:"card-meta",children:[s.jsxs("div",{className:"meta-item",children:[s.jsx(Sa,{size:14}),s.jsx("span",{children:i||"Campus"})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx(ka,{size:14}),s.jsx("span",{children:g})]})]}),u&&s.jsx("div",{className:"card-reporter",children:s.jsxs("span",{children:["Posted by ",s.jsx("strong",{children:u.name||"Anonymous User"})]})}),s.jsx("div",{className:"card-actions",children:s.jsxs(b,{to:`/items/${t}`,className:"btn btn-secondary btn-sm w-full",children:[s.jsx("span",{children:"View Details"}),s.jsx(mr,{size:14})]})})]}),s.jsx("style",{children:`
        .item-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
          position: relative;
        }
        .item-card:hover .item-image {
          transform: scale(1.05);
        }
        .card-media {
          position: relative;
          height: 180px;
          width: 100%;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.9);
        }
        .item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .no-image-placeholder {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          gap: 0.5rem;
          font-size: 0.85rem;
        }
        .card-status-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          z-index: 2;
        }
        .card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0.75rem;
        }
        .card-category {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 600;
          text-transform: capitalize;
        }
        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-meta {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: auto;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .card-reporter {
          font-size: 0.78rem;
          color: var(--text-dim);
          border-top: 1px solid var(--border-color);
          padding-top: 0.5rem;
        }
        .card-actions {
          margin-top: 0.5rem;
        }
      `})]})},Fh=()=>{const[e,t]=v.useState(""),[n,r]=v.useState([]),[l,i]=v.useState({totalItems:0,lostCount:0,foundCount:0,resolvedCount:0}),[a,o]=v.useState(!0),u=Ve();v.useEffect(()=>{(async()=>{var p;try{const j=await ee.items.getAll({limit:6});if(j.success&&j.data){const x=j.data.items||j.data;r(Array.isArray(x)?x:[]);const y=x.filter(d=>d.status==="LOST").length,k=x.filter(d=>d.status==="FOUND").length,h=x.filter(d=>d.status==="RESOLVED"||d.status==="CLAIMED").length;i({totalItems:((p=j.data.pagination)==null?void 0:p.totalItems)||x.length,lostCount:y||12,foundCount:k||18,resolvedCount:h||25})}}catch(j){console.error("Failed to load home feed data:",j)}finally{o(!1)}})()},[]);const c=m=>{m.preventDefault(),e.trim()?u(`/items?search=${encodeURIComponent(e.trim())}`):u("/items")},g=[{name:"Electronics",icon:s.jsx(Ih,{size:20}),value:"electronics"},{name:"Documents & IDs",icon:s.jsx(kh,{size:20}),value:"documents"},{name:"Books & Notes",icon:s.jsx(xh,{size:20}),value:"books"},{name:"Clothing",icon:s.jsx(Th,{size:20}),value:"clothing"},{name:"Keys",icon:s.jsx(zh,{size:20}),value:"keys"},{name:"Other",icon:s.jsx(Nd,{size:20}),value:"other"}];return s.jsxs("div",{className:"home-page fade-in",children:[s.jsxs("section",{className:"hero-section",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(Es,{size:14}),s.jsx("span",{children:"Smart College Lost & Found System"})]}),s.jsxs("h1",{className:"hero-title",children:["Lost Something on Campus? ",s.jsx("br",{}),s.jsx("span",{className:"gradient-text",children:"We'll Help You Crate It Back."})]}),s.jsx("p",{className:"hero-subtitle",children:"CampusCrate connects students, faculty, and security staff to report, track, and reunite lost possessions across campus buildings in real-time."}),s.jsxs("form",{onSubmit:c,className:"hero-search-box glass-card",children:[s.jsx(gr,{size:22,className:"search-icon"}),s.jsx("input",{type:"text",placeholder:"Search lost laptop, wallet, ID card, keys, room number...",value:e,onChange:m=>t(m.target.value),className:"hero-search-input"}),s.jsxs("button",{type:"submit",className:"btn btn-primary btn-lg",children:[s.jsx("span",{children:"Find Item"}),s.jsx(mr,{size:18})]})]}),s.jsxs("div",{className:"hero-cta-buttons",children:[s.jsxs(b,{to:"/items",className:"btn btn-secondary",children:[s.jsx(gr,{size:18}),s.jsx("span",{children:"Browse All Listings"})]}),s.jsxs(b,{to:"/report-item",className:"btn btn-primary",children:[s.jsx(Gl,{size:18}),s.jsx("span",{children:"Report Lost / Found Item"})]})]})]}),s.jsxs("section",{className:"stats-section grid-cards",children:[s.jsxs("div",{className:"glass-card stat-card",children:[s.jsx("div",{className:"stat-icon lost-icon",children:s.jsx(Ge,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-number",children:l.lostCount}),s.jsx("span",{className:"stat-label",children:"Active Lost Items"})]})]}),s.jsxs("div",{className:"glass-card stat-card",children:[s.jsx("div",{className:"stat-icon found-icon",children:s.jsx(Xl,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-number",children:l.foundCount}),s.jsx("span",{className:"stat-label",children:"Found Belongings"})]})]}),s.jsxs("div",{className:"glass-card stat-card",children:[s.jsx("div",{className:"stat-icon resolved-icon",children:s.jsx(Es,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsxs("span",{className:"stat-number",children:[l.resolvedCount,"+"]}),s.jsx("span",{className:"stat-label",children:"Reunited Owners"})]})]})]}),s.jsxs("section",{className:"category-section",children:[s.jsx("h2",{className:"section-title",children:"Explore by Category"}),s.jsx("div",{className:"category-grid",children:g.map(m=>s.jsxs(b,{to:`/items?category=${m.value}`,className:"glass-card category-card",children:[s.jsx("div",{className:"cat-icon",children:m.icon}),s.jsx("span",{className:"cat-name",children:m.name})]},m.value))})]}),s.jsxs("section",{className:"recent-items-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-title",children:"Recently Reported Items"}),s.jsx("p",{className:"section-sub",children:"Check if someone found your item or reported something you lost."})]}),s.jsxs(b,{to:"/items",className:"btn btn-secondary btn-sm",children:[s.jsx("span",{children:"View All"}),s.jsx(mr,{size:14})]})]}),a?s.jsx("div",{className:"flex-center py-12",children:s.jsx("div",{className:"spinner"})}):n.length>0?s.jsx("div",{className:"grid-cards",children:n.map(m=>s.jsx(Ea,{item:m},m._id))}):s.jsxs("div",{className:"glass-card empty-state",children:[s.jsx(Ge,{size:48,className:"text-muted mb-2"}),s.jsx("h3",{children:"No Items Reported Yet"}),s.jsx("p",{children:"Be the first to post a lost or found item on CampusCrate."}),s.jsx(b,{to:"/report-item",className:"btn btn-primary mt-4",children:"Report Item Now"})]})]}),s.jsxs("section",{className:"how-it-works-section glass-card",children:[s.jsx("h2",{className:"section-title text-center",children:"How CampusCrate Works"}),s.jsxs("div",{className:"steps-grid",children:[s.jsxs("div",{className:"step-card",children:[s.jsx("div",{className:"step-num",children:"1"}),s.jsx("h3",{children:"Report Belonging"}),s.jsx("p",{children:"Post details, location, and photos of a lost or found item on campus."})]}),s.jsxs("div",{className:"step-card",children:[s.jsx("div",{className:"step-num",children:"2"}),s.jsx("h3",{children:"Verify Ownership"}),s.jsx("p",{children:"Submit proof of ownership or unique identifiers to request verification."})]}),s.jsxs("div",{className:"step-card",children:[s.jsx("div",{className:"step-num",children:"3"}),s.jsx("h3",{children:"Safe Handover"}),s.jsx("p",{children:"Coordinate securely through campus administration or direct verification."})]})]})]}),s.jsx("style",{children:`
        .home-page {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3rem 1rem 1rem;
          max-width: 850px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid var(--border-highlight);
          border-radius: 50px;
          color: var(--primary);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 1.25rem;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 680px;
          margin-bottom: 2.25rem;
        }
        .hero-search-box {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0.5rem 0.5rem 0.5rem 1.25rem;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          border-radius: var(--radius-xl);
        }
        .search-icon {
          color: var(--text-dim);
        }
        .hero-search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 1.05rem;
        }
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .stats-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .stat-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lost-icon { background: rgba(239, 68, 68, 0.15); color: #fca5a5; }
        .found-icon { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; }
        .resolved-icon { background: rgba(139, 92, 246, 0.15); color: #c4b5fd; }
        
        .stat-content {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }
        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 1.75rem;
        }
        .section-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .section-sub {
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .category-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          margin-top: 1.25rem;
        }
        .category-card {
          padding: 1.25rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
        }
        .category-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
        }
        .cat-icon {
          color: var(--primary);
        }
        .cat-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .how-it-works-section {
          padding: 3rem 2rem;
        }
        .text-center { text-align: center; }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2.5rem;
        }
        .step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
        }
        .step-num {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          font-weight: 800;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .empty-state {
          padding: 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }

        @media (max-width: 900px) {
          .hero-title { font-size: 2.2rem; }
          .stats-section { grid-template-columns: 1fr; }
          .category-grid { grid-template-columns: repeat(3, 1fr); }
          .steps-grid { grid-template-columns: 1fr; }
        }
      `})]})},Ah=()=>{const[e,t]=ch(),[n,r]=v.useState(e.get("search")||""),[l,i]=v.useState(e.get("status")||""),[a,o]=v.useState(e.get("category")||""),[u,c]=v.useState(e.get("location")||""),[g,m]=v.useState([]),[p,j]=v.useState(!0),[x,y]=v.useState({page:1,totalPages:1,totalItems:0}),k=async(f=1)=>{j(!0);try{const w={page:f,limit:12};n&&(w.search=n),l&&(w.status=l),a&&(w.category=a),u&&(w.location=u);const S=await ee.items.getAll(w);S.success&&S.data&&(m(S.data.items||S.data||[]),S.data.pagination&&y(S.data.pagination))}catch(w){console.error("Error fetching items:",w)}finally{j(!1)}};v.useEffect(()=>{k(1)},[e]);const h=f=>{f.preventDefault();const w={};n&&(w.search=n),l&&(w.status=l),a&&(w.category=a),u&&(w.location=u),t(w)},d=()=>{r(""),i(""),o(""),c(""),t({})};return s.jsxs("div",{className:"items-feed-page fade-in",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{className:"page-title",children:"Campus Belongings Directory"}),s.jsx("p",{className:"page-sub",children:"Filter and search lost and found listings posted by campus members."})]}),s.jsxs("form",{onSubmit:h,className:"glass-card filter-card",children:[s.jsxs("div",{className:"filter-grid",children:[s.jsxs("div",{className:"filter-input-wrap",children:[s.jsx(gr,{size:18,className:"icon"}),s.jsx("input",{type:"text",placeholder:"Search title or description...",className:"form-input filter-input",value:n,onChange:f=>r(f.target.value)})]}),s.jsx("div",{className:"filter-select-wrap",children:s.jsxs("select",{className:"form-select",value:l,onChange:f=>i(f.target.value),children:[s.jsx("option",{value:"",children:"All Statuses"}),s.jsx("option",{value:"LOST",children:"LOST"}),s.jsx("option",{value:"FOUND",children:"FOUND"}),s.jsx("option",{value:"CLAIMED",children:"CLAIMED"}),s.jsx("option",{value:"RESOLVED",children:"RESOLVED"})]})}),s.jsx("div",{className:"filter-select-wrap",children:s.jsxs("select",{className:"form-select",value:a,onChange:f=>o(f.target.value),children:[s.jsx("option",{value:"",children:"All Categories"}),s.jsx("option",{value:"electronics",children:"Electronics"}),s.jsx("option",{value:"documents",children:"Documents & IDs"}),s.jsx("option",{value:"books",children:"Books & Stationery"}),s.jsx("option",{value:"clothing",children:"Clothing & Accessories"}),s.jsx("option",{value:"keys",children:"Keys & Badges"}),s.jsx("option",{value:"other",children:"Other"})]})}),s.jsxs("div",{className:"filter-input-wrap",children:[s.jsx(Sa,{size:18,className:"icon"}),s.jsx("input",{type:"text",placeholder:"Filter by building / area...",className:"form-input filter-input",value:u,onChange:f=>c(f.target.value)})]})]}),s.jsxs("div",{className:"filter-actions",children:[s.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:d,children:[s.jsx(Rh,{size:14}),s.jsx("span",{children:"Reset Filters"})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary btn-sm",children:[s.jsx(Nh,{size:14}),s.jsx("span",{children:"Apply Filters"})]})]})]}),p?s.jsx("div",{className:"flex-center py-16",children:s.jsx("div",{className:"spinner"})}):g.length>0?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"grid-cards mt-6",children:g.map(f=>s.jsx(Ea,{item:f},f._id))}),x.totalPages>1&&s.jsxs("div",{className:"pagination-bar",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",disabled:x.page<=1,onClick:()=>k(x.page-1),children:"Previous"}),s.jsxs("span",{className:"pagination-info",children:["Page ",x.page," of ",x.totalPages]}),s.jsx("button",{className:"btn btn-secondary btn-sm",disabled:x.page>=x.totalPages,onClick:()=>k(x.page+1),children:"Next"})]})]}):s.jsxs("div",{className:"glass-card empty-state my-8",children:[s.jsx(Ge,{size:52,className:"text-muted mb-3"}),s.jsx("h3",{children:"No Matching Belongings Found"}),s.jsx("p",{children:"Try adjusting your search keywords or clearing filter parameters."}),s.jsx("button",{onClick:d,className:"btn btn-secondary mt-4",children:"Clear All Filters"})]}),s.jsx("style",{children:`
        .items-feed-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .page-header {
          margin-bottom: 0.5rem;
        }
        .page-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-main);
        }
        .page-sub {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .filter-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .filter-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 1rem;
        }
        .filter-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .filter-input-wrap .icon {
          position: absolute;
          left: 0.85rem;
          color: var(--text-dim);
          pointer-events: none;
        }
        .filter-input {
          padding-left: 2.5rem !important;
        }
        .filter-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 0.85rem;
        }
        .mt-6 { margin-top: 1.5rem; }
        .my-8 { margin-top: 2rem; margin-bottom: 2rem; }
        .pagination-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        .pagination-info {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .filter-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Uh=({item:e,onClose:t,onSuccess:n})=>{const[r,l]=v.useState(""),[i,a]=v.useState(""),[o,u]=v.useState(!1),[c,g]=v.useState(null),m=async p=>{if(p.preventDefault(),!r.trim()){g("Please provide a detailed description to verify your claim.");return}u(!0),g(null);try{(await ee.claims.create({itemId:e._id,proofDescription:r,proofImageUrl:i.trim()||void 0})).success&&(n("Claim submitted successfully! The item owner will review your verification proof."),t())}catch(j){g(j.message||"Failed to submit claim. Please try again.")}finally{u(!1)}};return s.jsx("div",{className:"modal-overlay",onClick:t,children:s.jsxs("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-wrap",children:[s.jsx(Xl,{className:"title-icon",size:24}),s.jsx("h3",{children:"Claim Item Verification"})]}),s.jsx("button",{className:"close-btn",onClick:t,children:s.jsx(ql,{size:20})})]}),s.jsx("div",{className:"item-summary-pill",children:s.jsxs("span",{className:"item-summary-title",children:["Claiming: ",s.jsx("strong",{children:e==null?void 0:e.title})]})}),c&&s.jsxs("div",{className:"error-alert",children:[s.jsx(Sr,{size:16}),s.jsx("span",{children:c})]}),s.jsxs("form",{onSubmit:m,className:"modal-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Proof of Ownership / Identifiers *"}),s.jsx("textarea",{className:"form-textarea",placeholder:"Describe unique marks, serial numbers, passcode hints, exact date/time lost, or specific contents inside to verify ownership...",value:r,onChange:p=>l(p.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Proof Image URL (Optional)"}),s.jsx("input",{type:"url",className:"form-input",placeholder:"https://example.com/receipt-or-photo.jpg",value:i,onChange:p=>a(p.target.value)}),s.jsx("span",{className:"form-help",children:"Link to purchase receipt, previous photo with item, or ID matching item."})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,disabled:o,children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-primary",disabled:o,children:o?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"spinner"}),s.jsx("span",{children:"Submitting..."})]}):s.jsxs(s.Fragment,{children:[s.jsx(Na,{size:16}),s.jsx("span",{children:"Submit Verification Claim"})]})})]})]}),s.jsx("style",{children:`
          .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
          }
          .modal-title-wrap {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            color: var(--text-main);
          }
          .title-icon {
            color: var(--primary);
          }
          .close-btn {
            background: transparent;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            padding: 0.35rem;
            border-radius: var(--radius-sm);
            transition: var(--transition);
          }
          .close-btn:hover {
            color: var(--text-main);
            background: rgba(255, 255, 255, 0.1);
          }
          .item-summary-pill {
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid var(--border-highlight);
            padding: 0.6rem 1rem;
            border-radius: var(--radius-md);
            margin-bottom: 1.25rem;
            font-size: 0.9rem;
            color: var(--text-main);
          }
          .error-alert {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(239, 68, 68, 0.15);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #fca5a5;
            padding: 0.75rem;
            border-radius: var(--radius-md);
            margin-bottom: 1rem;
            font-size: 0.88rem;
          }
          .form-help {
            font-size: 0.78rem;
            color: var(--text-dim);
            margin-top: 0.25rem;
          }
          .modal-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.75rem;
            margin-top: 1.5rem;
          }
        `})]})})},$h=({item:e,onClose:t,onSuccess:n})=>{const[r,l]=v.useState("SPAM"),[i,a]=v.useState(""),[o,u]=v.useState(!1),[c,g]=v.useState(null),m=async p=>{if(p.preventDefault(),!i.trim()){g("Please provide details explaining why you are flagging this item.");return}u(!0),g(null);try{(await ee.reports.create({targetType:"Item",targetId:e._id,reason:r,description:i})).success&&(n("Abuse report submitted. Campus administrators will review this listing."),t())}catch(j){g(j.message||"Failed to submit report. Please try again.")}finally{u(!1)}};return s.jsx("div",{className:"modal-overlay",onClick:t,children:s.jsxs("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title-wrap text-danger",children:[s.jsx(vr,{size:24}),s.jsx("h3",{children:"Report Listing / Fraud"})]}),s.jsx("button",{className:"close-btn",onClick:t,children:s.jsx(ql,{size:20})})]}),c&&s.jsx("div",{className:"error-alert",children:s.jsx("span",{children:c})}),s.jsxs("form",{onSubmit:m,className:"modal-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Reason for Report *"}),s.jsxs("select",{className:"form-select",value:r,onChange:p=>l(p.target.value),children:[s.jsx("option",{value:"SPAM",children:"Spam or Irrelevant Listing"}),s.jsx("option",{value:"FRAUD",children:"Fraudulent or Suspicious Claim"}),s.jsx("option",{value:"INAPPROPRIATE",children:"Inappropriate Content/Language"}),s.jsx("option",{value:"OTHER",children:"Other Issue"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Detailed Explanation *"}),s.jsx("textarea",{className:"form-textarea",placeholder:"Describe the violation or suspicious activity...",value:i,onChange:p=>a(p.target.value),required:!0})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,disabled:o,children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-danger",disabled:o,children:o?"Submitting...":"Submit Report"})]})]}),s.jsx("style",{children:`
          .text-danger { color: #fca5a5; }
          .modal-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.75rem;
            margin-top: 1.5rem;
          }
        `})]})})},za=({message:e,type:t="success",onClose:n,duration:r=4e3})=>{if(v.useEffect(()=>{if(!e)return;const i=setTimeout(()=>{n()},r);return()=>clearTimeout(i)},[e,r,n]),!e)return null;const l=()=>{switch(t){case"success":return s.jsx(Na,{size:18,color:"#6ee7b7"});case"error":return s.jsx(Sr,{size:18,color:"#fca5a5"});default:return s.jsx(Eh,{size:18,color:"#93c5fd"})}};return s.jsxs("div",{className:`toast toast-${t} fade-in`,children:[s.jsx("div",{className:"toast-icon",children:l()}),s.jsx("span",{className:"toast-message",children:e}),s.jsx("button",{className:"toast-close",onClick:n,children:s.jsx(ql,{size:16})}),s.jsx("style",{children:`
        .toast {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 2000;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-md);
          background: #1e293b;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          color: var(--text-main);
          font-size: 0.9rem;
          max-width: 420px;
        }
        .toast-success {
          border-color: rgba(16, 185, 129, 0.4);
        }
        .toast-error {
          border-color: rgba(239, 68, 68, 0.4);
        }
        .toast-info {
          border-color: rgba(59, 130, 246, 0.4);
        }
        .toast-message {
          flex: 1;
        }
        .toast-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.2rem;
          display: flex;
          align-items: center;
        }
        .toast-close:hover {
          color: var(--text-main);
        }
      `})]})},Bh=()=>{var _,A,L;const{id:e}=Mm(),{user:t}=Rt(),n=Ve(),[r,l]=v.useState(null),[i,a]=v.useState(!0),[o,u]=v.useState(null),[c,g]=v.useState(!1),[m,p]=v.useState(!1),[j,x]=v.useState({message:"",type:"success"}),[y,k]=v.useState(!1),h=async()=>{a(!0),u(null);try{const T=await ee.items.getById(e);T.success&&T.data?l(T.data.item||T.data):u("Item details not found.")}catch(T){u(T.message||"Failed to load item details.")}finally{a(!1)}};v.useEffect(()=>{h()},[e]);const d=async()=>{if(window.confirm("Mark this item listing as RESOLVED?")){k(!0);try{(await ee.items.update(e,{status:"RESOLVED"})).success&&(x({message:"Item marked as resolved successfully!",type:"success"}),h())}catch(T){x({message:T.message||"Failed to update status.",type:"error"})}finally{k(!1)}}},f=async()=>{if(window.confirm("Are you sure you want to permanently delete this listing?")){k(!0);try{(await ee.items.delete(e)).success&&n("/items")}catch(T){x({message:T.message||"Failed to delete item.",type:"error"}),k(!1)}}};if(i)return s.jsx("div",{className:"flex-center py-20",children:s.jsx("div",{className:"spinner"})});if(o||!r)return s.jsxs("div",{className:"glass-card empty-state my-12 fade-in",children:[s.jsx(vr,{size:48,className:"text-danger mb-3"}),s.jsx("h2",{children:"Item Not Found"}),s.jsx("p",{children:o||"The requested lost/found item listing does not exist or was removed."}),s.jsx(b,{to:"/items",className:"btn btn-primary mt-4",children:"Back to Belongings Directory"})]});const w=t&&(t._id===((_=r.reporter)==null?void 0:_._id)||t._id===r.reporter),S=t&&(t.role==="admin"||t.role==="ADMIN"),C=T=>{switch(T==null?void 0:T.toUpperCase()){case"LOST":return"badge-lost";case"FOUND":return"badge-found";case"CLAIMED":return"badge-claimed";case"RESOLVED":return"badge-resolved";default:return"badge-found"}},E=r.imageUrl?r.imageUrl.startsWith("http")?r.imageUrl:`${r.imageUrl}`:null;return s.jsxs("div",{className:"item-detail-page fade-in",children:[s.jsx(za,{message:j.message,type:j.type,onClose:()=>x({message:"",type:"success"})}),s.jsxs(b,{to:"/items",className:"back-link",children:[s.jsx(yh,{size:16}),s.jsx("span",{children:"Back to All Listings"})]}),s.jsxs("div",{className:"detail-grid",children:[s.jsx("div",{className:"glass-card detail-media-card",children:E?s.jsx("img",{src:E,alt:r.title,className:"detail-image"}):s.jsxs("div",{className:"detail-no-image",children:[s.jsx(Cd,{size:48}),s.jsx("span",{children:"No Image Available for this Listing"})]})}),s.jsxs("div",{className:"glass-card detail-info-card",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:`badge ${C(r.status)}`,children:r.status}),s.jsxs("span",{className:"category-pill",children:[s.jsx(Pd,{size:14})," ",r.category||"General"]})]}),s.jsx("h1",{className:"detail-title",children:r.title}),s.jsxs("div",{className:"meta-row",children:[s.jsxs("div",{className:"meta-chip",children:[s.jsx(Sa,{size:16,className:"text-primary"}),s.jsxs("span",{children:["Location: ",s.jsx("strong",{children:r.location||"Campus"})]})]}),s.jsxs("div",{className:"meta-chip",children:[s.jsx(ka,{size:16,className:"text-primary"}),s.jsxs("span",{children:["Date: ",s.jsx("strong",{children:new Date(r.date||r.createdAt).toLocaleDateString()})]})]})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h3",{children:"Description"}),s.jsx("p",{className:"description-text",children:r.description})]}),s.jsxs("div",{className:"reporter-box",children:[s.jsx("div",{className:"reporter-avatar",children:s.jsx(_d,{size:20})}),s.jsxs("div",{className:"reporter-info",children:[s.jsx("span",{className:"reporter-name",children:((A=r.reporter)==null?void 0:A.name)||"Campus Student / Staff"}),s.jsxs("span",{className:"reporter-email",children:[s.jsx(Cr,{size:12})," ",((L=r.reporter)==null?void 0:L.email)||"Contact via verification"]})]})]}),s.jsxs("div",{className:"detail-actions",children:[!w&&s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"btn btn-primary btn-lg flex-1",onClick:()=>{t?g(!0):n("/login")},disabled:r.status==="RESOLVED"||r.status==="CLAIMED",children:[s.jsx(Xl,{size:18}),s.jsx("span",{children:"Claim Ownership"})]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{t?p(!0):n("/login")},title:"Report Fraud or Violation",children:[s.jsx(vr,{size:16,className:"text-danger"}),s.jsx("span",{children:"Report"})]})]}),(w||S)&&s.jsxs("div",{className:"owner-actions-wrap",children:[r.status!=="RESOLVED"&&s.jsxs("button",{className:"btn btn-success",onClick:d,disabled:y,children:[s.jsx(Na,{size:16}),s.jsx("span",{children:"Mark as Resolved"})]}),s.jsxs("button",{className:"btn btn-danger",onClick:f,disabled:y,children:[s.jsx(Mh,{size:16}),s.jsx("span",{children:"Delete Listing"})]})]})]})]})]}),c&&s.jsx(Uh,{item:r,onClose:()=>g(!1),onSuccess:T=>x({message:T,type:"success"})}),m&&s.jsx($h,{item:r,onClose:()=>p(!1),onSuccess:T=>x({message:T,type:"success"})}),s.jsx("style",{children:`
        .item-detail-page {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .back-link:hover {
          color: var(--primary);
        }
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .detail-media-card {
          padding: 1rem;
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .detail-image {
          width: 100%;
          height: 100%;
          max-height: 480px;
          object-fit: cover;
          border-radius: var(--radius-md);
        }
        .detail-no-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-dim);
        }
        .detail-info-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .detail-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .category-pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          text-transform: capitalize;
        }
        .detail-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.25;
        }
        .meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .meta-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          background: rgba(15, 23, 42, 0.5);
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .detail-section h3 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        .description-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          white-space: pre-line;
        }
        .reporter-box {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .reporter-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .reporter-info {
          display: flex;
          flex-direction: column;
        }
        .reporter-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .reporter-email {
          font-size: 0.8rem;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .detail-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          padding-top: 1rem;
        }
        .flex-1 { flex: 1; }
        .owner-actions-wrap {
          display: flex;
          gap: 0.75rem;
          width: 100%;
        }

        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr; }
        }
      `})]})},Vh=()=>{const{user:e}=Rt(),t=Ve(),[n,r]=v.useState("LOST"),[l,i]=v.useState(""),[a,o]=v.useState("electronics"),[u,c]=v.useState(""),[g,m]=v.useState(new Date().toISOString().split("T")[0]),[p,j]=v.useState(""),[x,y]=v.useState(null),[k,h]=v.useState(""),[d,f]=v.useState(!1),[w,S]=v.useState(null),[C,E]=v.useState({message:"",type:"success"}),_=L=>{L.target.files&&L.target.files[0]&&y(L.target.files[0])},A=async L=>{if(L.preventDefault(),!e){t("/login");return}if(!l.trim()||!p.trim()||!u.trim()){S("Please fill in all required fields.");return}f(!0),S(null);try{let T;if(x){const le=new FormData;le.append("title",l),le.append("status",n),le.append("category",a),le.append("location",u),le.append("date",g),le.append("description",p),le.append("image",x),T=await ee.items.create(le)}else T=await ee.items.create({title:l,status:n,category:a,location:u,date:g,description:p,imageUrl:k.trim()||void 0});T.success&&(E({message:"Item listing created successfully!",type:"success"}),setTimeout(()=>{var st,zn,Er;const le=((zn=(st=T.data)==null?void 0:st.item)==null?void 0:zn._id)||((Er=T.data)==null?void 0:Er._id);t(le?`/items/${le}`:"/items")},1200))}catch(T){S(T.message||"Failed to create item listing.")}finally{f(!1)}};return s.jsxs("div",{className:"report-item-page fade-in",children:[s.jsx(za,{message:C.message,type:C.type,onClose:()=>E({message:"",type:"success"})}),s.jsxs("div",{className:"form-header text-center",children:[s.jsx("h1",{className:"page-title",children:"Report a Belonging"}),s.jsx("p",{className:"page-sub",children:"Post details about a lost or found item to notify the campus community."})]}),s.jsxs("div",{className:"glass-card report-form-card",children:[s.jsxs("div",{className:"status-tabs",children:[s.jsx("button",{type:"button",className:`tab-btn ${n==="LOST"?"active tab-lost":""}`,onClick:()=>r("LOST"),children:"Report Lost Item"}),s.jsx("button",{type:"button",className:`tab-btn ${n==="FOUND"?"active tab-found":""}`,onClick:()=>r("FOUND"),children:"Report Found Item"})]}),w&&s.jsxs("div",{className:"error-alert my-4",children:[s.jsx(Sr,{size:16}),s.jsx("span",{children:w})]}),s.jsxs("form",{onSubmit:A,className:"report-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Item Title *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. Blue Hydroflask, Apple AirPods Pro, Black Leather Wallet...",value:l,onChange:L=>i(L.target.value),required:!0})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group flex-1",children:[s.jsx("label",{className:"form-label",children:"Category *"}),s.jsxs("select",{className:"form-select",value:a,onChange:L=>o(L.target.value),children:[s.jsx("option",{value:"electronics",children:"Electronics & Tech"}),s.jsx("option",{value:"documents",children:"Documents & ID Cards"}),s.jsx("option",{value:"books",children:"Books, Notebooks & Stationery"}),s.jsx("option",{value:"clothing",children:"Clothing, Apparel & Bags"}),s.jsx("option",{value:"keys",children:"Keys, Lanyards & Badges"}),s.jsx("option",{value:"other",children:"Other / Miscellaneous"})]})]}),s.jsxs("div",{className:"form-group flex-1",children:[s.jsx("label",{className:"form-label",children:"Date Lost / Found *"}),s.jsx("input",{type:"date",className:"form-input",value:g,onChange:L=>m(L.target.value),required:!0})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Campus Location *"}),s.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. Science Block 2nd Floor, Central Library, Student Canteen...",value:u,onChange:L=>c(L.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Detailed Description *"}),s.jsx("textarea",{className:"form-textarea",placeholder:"Describe color, brand, distinct marks, stickers, room numbers, or contents...",value:p,onChange:L=>j(L.target.value),required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Photo Attachment (Optional)"}),s.jsxs("div",{className:"image-upload-options",children:[s.jsxs("label",{className:"file-upload-btn",children:[s.jsx(Dh,{size:18}),s.jsx("span",{children:x?x.name:"Choose File Image"}),s.jsx("input",{type:"file",accept:"image/*",onChange:_,style:{display:"none"}})]}),s.jsx("span",{className:"or-divider",children:"or"}),s.jsx("input",{type:"url",className:"form-input flex-1",placeholder:"Paste Image Web URL (https://...)",value:k,onChange:L=>h(L.target.value),disabled:!!x})]})]}),s.jsx("div",{className:"form-actions",children:s.jsx("button",{type:"submit",className:"btn btn-primary btn-lg w-full",disabled:d,children:d?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"spinner"}),s.jsx("span",{children:"Publishing Listing..."})]}):s.jsxs(s.Fragment,{children:[s.jsx(Gl,{size:20}),s.jsxs("span",{children:["Publish ",n," Item"]})]})})})]})]}),s.jsx("style",{children:`
        .report-item-page {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .report-form-card {
          padding: 2.25rem;
        }
        .status-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
          background: rgba(15, 23, 42, 0.6);
          padding: 0.4rem;
          border-radius: var(--radius-md);
        }
        .tab-btn {
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .tab-btn.active.tab-lost {
          background: var(--status-lost-bg);
          color: var(--status-lost-text);
          border: 1px solid var(--status-lost-border);
        }
        .tab-btn.active.tab-found {
          background: var(--status-found-bg);
          color: var(--status-found-text);
          border: 1px solid var(--status-found-border);
        }
        .form-row {
          display: flex;
          gap: 1rem;
        }
        .image-upload-options {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .file-upload-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
        }
        .file-upload-btn:hover {
          border-color: var(--primary);
        }
        .or-divider {
          font-size: 0.82rem;
          color: var(--text-dim);
        }
        .form-actions {
          margin-top: 1rem;
        }
        .my-4 { margin-top: 1rem; margin-bottom: 1rem; }

        @media (max-width: 640px) {
          .form-row, .image-upload-options {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `})]})},Hh=()=>{const{user:e}=Rt(),t=Ve(),[n,r]=v.useState("received"),[l,i]=v.useState([]),[a,o]=v.useState(!0),[u,c]=v.useState({message:"",type:"success"}),[g,m]=v.useState(null);v.useEffect(()=>{if(!e){t("/login");return}(async()=>{o(!0);try{const k=await ee.claims.getAll();if(k.success&&k.data){const h=Array.isArray(k.data)?k.data:k.data.claims||[];i(h)}}catch(k){console.error("Failed to load claims:",k)}finally{o(!1)}})()},[e,n]);const p=async(y,k)=>{m(y);try{(await ee.claims.updateStatus(y,k)).success&&(c({message:`Claim status updated to ${k}`,type:"success"}),i(d=>d.map(f=>f._id===y?{...f,status:k}:f)))}catch(h){c({message:h.message||"Failed to update claim status.",type:"error"})}finally{m(null)}},j=l.filter(y=>{var k,h,d,f;return n==="sent"?((k=y.claimant)==null?void 0:k._id)===(e==null?void 0:e._id)||y.claimant===(e==null?void 0:e._id):((h=y.item)==null?void 0:h.reporter)===(e==null?void 0:e._id)||((f=(d=y.item)==null?void 0:d.reporter)==null?void 0:f._id)===(e==null?void 0:e._id)}),x=y=>{switch(y==null?void 0:y.toUpperCase()){case"APPROVED":return s.jsxs("span",{className:"badge badge-found",children:[s.jsx(Qo,{size:12})," Approved"]});case"REJECTED":return s.jsxs("span",{className:"badge badge-lost",children:[s.jsx(Ko,{size:12})," Rejected"]});default:return s.jsxs("span",{className:"badge badge-claimed",children:[s.jsx(jh,{size:12})," Pending Review"]})}};return s.jsxs("div",{className:"claims-manager-page fade-in",children:[s.jsx(za,{message:u.message,type:u.type,onClose:()=>c({message:"",type:"success"})}),s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{className:"page-title",children:"Ownership Verification Claims"}),s.jsx("p",{className:"page-sub",children:"Review claims submitted to prove ownership of lost and found belongings."})]}),s.jsxs("div",{className:"glass-card tab-bar",children:[s.jsxs("button",{className:`tab-item ${n==="received"?"active":""}`,onClick:()=>r("received"),children:[s.jsx(hr,{size:18}),s.jsx("span",{children:"Claims on My Reported Items"})]}),s.jsxs("button",{className:`tab-item ${n==="sent"?"active":""}`,onClick:()=>r("sent"),children:[s.jsx(Xl,{size:18}),s.jsx("span",{children:"Claims I Submitted"})]})]}),a?s.jsx("div",{className:"flex-center py-16",children:s.jsx("div",{className:"spinner"})}):j.length>0?s.jsx("div",{className:"claims-grid",children:j.map(y=>{var k,h,d,f;return s.jsxs("div",{className:"glass-card claim-card",children:[s.jsxs("div",{className:"claim-header",children:[s.jsxs("div",{className:"claim-item-title-wrap",children:[s.jsx(Ge,{size:18,className:"text-primary"}),s.jsx(b,{to:`/items/${((k=y.item)==null?void 0:k._id)||y.item}`,className:"claim-item-link",children:((h=y.item)==null?void 0:h.title)||"Belonging Listing"})]}),s.jsx("div",{className:"claim-status",children:x(y.status)})]}),s.jsxs("div",{className:"claim-body",children:[s.jsxs("div",{className:"proof-section",children:[s.jsx("span",{className:"section-label",children:"Submitted Proof of Ownership:"}),s.jsx("p",{className:"proof-text",children:y.proofDescription||"No description provided."})]}),y.proofImageUrl&&s.jsx("div",{className:"proof-image-link",children:s.jsxs("a",{href:y.proofImageUrl,target:"_blank",rel:"noreferrer",className:"btn btn-secondary btn-sm",children:[s.jsx("span",{children:"View Proof Image"}),s.jsx(wh,{size:14})]})}),s.jsxs("div",{className:"claimant-meta",children:[s.jsxs("span",{children:["Claimant: ",s.jsx("strong",{children:((d=y.claimant)==null?void 0:d.name)||"Student/User"})," (",((f=y.claimant)==null?void 0:f.email)||"N/A",")"]}),s.jsxs("span",{className:"claim-date",children:["Date: ",new Date(y.createdAt).toLocaleDateString()]})]})]}),n==="received"&&y.status==="PENDING"&&s.jsxs("div",{className:"claim-actions",children:[s.jsxs("button",{className:"btn btn-danger btn-sm",onClick:()=>p(y._id,"REJECTED"),disabled:g===y._id,children:[s.jsx(Ko,{size:14}),s.jsx("span",{children:"Reject Proof"})]}),s.jsxs("button",{className:"btn btn-success btn-sm",onClick:()=>p(y._id,"APPROVED"),disabled:g===y._id,children:[s.jsx(Qo,{size:14}),s.jsx("span",{children:"Approve Ownership"})]})]})]},y._id)})}):s.jsxs("div",{className:"glass-card empty-state my-8",children:[s.jsx(hr,{size:48,className:"text-muted mb-3"}),s.jsx("h3",{children:"No Verification Claims"}),s.jsxs("p",{children:["You have no ",n==="sent"?"submitted":"received"," ownership claims to review."]}),s.jsx(b,{to:"/items",className:"btn btn-secondary mt-4",children:"Browse Belongings Directory"})]}),s.jsx("style",{children:`
        .claims-manager-page {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .tab-bar {
          display: flex;
          padding: 0.4rem;
          gap: 0.5rem;
        }
        .tab-item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem;
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
        }
        .tab-item.active {
          background: rgba(99, 102, 241, 0.15);
          color: var(--primary);
          border: 1px solid var(--border-highlight);
        }
        .claims-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .claim-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .claim-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.85rem;
        }
        .claim-item-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .claim-item-link {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
        }
        .claim-item-link:hover {
          color: var(--primary);
        }
        .claim-body {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .section-label {
          font-size: 0.82rem;
          color: var(--text-dim);
          font-weight: 600;
        }
        .proof-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .claimant-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
        }
        .claim-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }
      `})]})},Wh=()=>{const{login:e}=Rt(),t=Ve(),[n,r]=v.useState(""),[l,i]=v.useState(""),[a,o]=v.useState(!1),[u,c]=v.useState(null),g=async p=>{if(p.preventDefault(),!n.trim()||!l.trim()){c("Please enter both email and password.");return}o(!0),c(null);try{await e(n,l),t("/")}catch(j){c(j.message||"Login failed. Please check your credentials.")}finally{o(!1)}},m=p=>{p==="admin"?(r("admin@campuscrate.edu"),i("AdminPass123!")):(r("student@campuscrate.edu"),i("StudentPass123!"))};return s.jsxs("div",{className:"auth-page fade-in",children:[s.jsxs("div",{className:"glass-card auth-card",children:[s.jsxs("div",{className:"auth-header text-center",children:[s.jsx("div",{className:"auth-logo-icon",children:s.jsx(Ge,{size:28})}),s.jsx("h2",{children:"Welcome Back"}),s.jsx("p",{className:"auth-sub",children:"Sign in to report lost items or track your verification claims."})]}),u&&s.jsxs("div",{className:"error-alert my-4",children:[s.jsx(Sr,{size:16}),s.jsx("span",{children:u})]}),s.jsxs("form",{onSubmit:g,className:"auth-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Campus Email Address *"}),s.jsxs("div",{className:"input-with-icon",children:[s.jsx(Cr,{size:18,className:"input-icon"}),s.jsx("input",{type:"email",className:"form-input icon-padded",placeholder:"your.name@college.edu",value:n,onChange:p=>r(p.target.value),required:!0})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Password *"}),s.jsxs("div",{className:"input-with-icon",children:[s.jsx(Ed,{size:18,className:"input-icon"}),s.jsx("input",{type:"password",className:"form-input icon-padded",placeholder:"••••••••••••",value:l,onChange:p=>i(p.target.value),required:!0})]})]}),s.jsx("button",{type:"submit",className:"btn btn-primary btn-lg w-full mt-2",disabled:a,children:a?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"spinner"}),s.jsx("span",{children:"Authenticating..."})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"Sign In to Account"}),s.jsx(mr,{size:18})]})})]}),s.jsxs("div",{className:"demo-credentials-box",children:[s.jsxs("div",{className:"demo-title",children:[s.jsx(Es,{size:14}),s.jsx("span",{children:"Quick Demo Credentials"})]}),s.jsxs("div",{className:"demo-btns",children:[s.jsx("button",{type:"button",className:"btn btn-secondary btn-sm flex-1",onClick:()=>m("student"),children:"Fill Student Demo"}),s.jsx("button",{type:"button",className:"btn btn-secondary btn-sm flex-1",onClick:()=>m("admin"),children:"Fill Admin Demo"})]})]}),s.jsxs("div",{className:"auth-footer text-center",children:[s.jsx("p",{children:"Don't have a CampusCrate account yet?"}),s.jsx(b,{to:"/register",className:"auth-link",children:"Create an Account Now"})]})]}),s.jsx("style",{children:`
        .auth-page {
          max-width: 440px;
          margin: 2rem auto;
        }
        .auth-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .auth-logo-icon {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: var(--gradient-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .auth-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }
        .auth-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 0.85rem;
          color: var(--text-dim);
          pointer-events: none;
        }
        .icon-padded {
          padding-left: 2.5rem !important;
        }
        .demo-credentials-box {
          background: rgba(99, 102, 241, 0.08);
          border: 1px dashed var(--border-highlight);
          border-radius: var(--radius-md);
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .demo-title {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--primary);
        }
        .demo-btns {
          display: flex;
          gap: 0.5rem;
        }
        .auth-footer {
          font-size: 0.88rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }
        .auth-link {
          color: var(--primary);
          font-weight: 600;
          margin-top: 0.25rem;
          display: inline-block;
        }
        .auth-link:hover {
          text-decoration: underline;
        }
      `})]})},Qh=()=>{const{register:e}=Rt(),t=Ve(),[n,r]=v.useState(""),[l,i]=v.useState(""),[a,o]=v.useState(""),[u,c]=v.useState("student"),[g,m]=v.useState(""),[p,j]=v.useState(""),[x,y]=v.useState(!1),[k,h]=v.useState(null),d=async f=>{if(f.preventDefault(),!n.trim()||!l.trim()||!a.trim()){h("Please fill in all required fields.");return}y(!0),h(null);try{await e({name:n,email:l,password:a,role:u,studentId:g.trim()||void 0,phone:p.trim()||void 0}),t("/")}catch(w){h(w.message||"Registration failed. Please check your information.")}finally{y(!1)}};return s.jsxs("div",{className:"auth-page fade-in",children:[s.jsxs("div",{className:"glass-card auth-card",children:[s.jsxs("div",{className:"auth-header text-center",children:[s.jsx("div",{className:"auth-logo-icon",children:s.jsx(Ge,{size:28})}),s.jsx("h2",{children:"Join CampusCrate"}),s.jsx("p",{className:"auth-sub",children:"Create your account to start managing lost & found items."})]}),k&&s.jsxs("div",{className:"error-alert my-4",children:[s.jsx(Sr,{size:16}),s.jsx("span",{children:k})]}),s.jsxs("form",{onSubmit:d,className:"auth-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Full Name *"}),s.jsxs("div",{className:"input-with-icon",children:[s.jsx(_d,{size:18,className:"input-icon"}),s.jsx("input",{type:"text",className:"form-input icon-padded",placeholder:"Alex Johnson",value:n,onChange:f=>r(f.target.value),required:!0})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Campus Email Address *"}),s.jsxs("div",{className:"input-with-icon",children:[s.jsx(Cr,{size:18,className:"input-icon"}),s.jsx("input",{type:"email",className:"form-input icon-padded",placeholder:"alex.j@college.edu",value:l,onChange:f=>i(f.target.value),required:!0})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Password *"}),s.jsxs("div",{className:"input-with-icon",children:[s.jsx(Ed,{size:18,className:"input-icon"}),s.jsx("input",{type:"password",className:"form-input icon-padded",placeholder:"••••••••••••",value:a,onChange:f=>o(f.target.value),required:!0})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Campus Role *"}),s.jsxs("select",{className:"form-select",value:u,onChange:f=>c(f.target.value),children:[s.jsx("option",{value:"student",children:"Student"}),s.jsx("option",{value:"staff",children:"Staff / Faculty"}),s.jsx("option",{value:"admin",children:"Administrator / Security"})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group flex-1",children:[s.jsx("label",{className:"form-label",children:"Student / Staff ID"}),s.jsxs("div",{className:"input-with-icon",children:[s.jsx(Sd,{size:18,className:"input-icon"}),s.jsx("input",{type:"text",className:"form-input icon-padded",placeholder:"STU-8823",value:g,onChange:f=>m(f.target.value)})]})]}),s.jsxs("div",{className:"form-group flex-1",children:[s.jsx("label",{className:"form-label",children:"Phone Number"}),s.jsxs("div",{className:"input-with-icon",children:[s.jsx(zd,{size:18,className:"input-icon"}),s.jsx("input",{type:"tel",className:"form-input icon-padded",placeholder:"+1 555-0192",value:p,onChange:f=>j(f.target.value)})]})]})]}),s.jsx("button",{type:"submit",className:"btn btn-primary btn-lg w-full mt-2",disabled:x,children:x?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"spinner"}),s.jsx("span",{children:"Creating Account..."})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"Create CampusCrate Account"}),s.jsx(mr,{size:18})]})})]}),s.jsxs("div",{className:"auth-footer text-center",children:[s.jsx("p",{children:"Already have an account?"}),s.jsx(b,{to:"/login",className:"auth-link",children:"Sign In Here"})]})]}),s.jsx("style",{children:`
        .auth-page {
          max-width: 480px;
          margin: 2rem auto;
        }
        .auth-card {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
      `})]})},Kh=()=>{const{user:e}=Rt(),t=Ve(),[n,r]=v.useState([]),[l,i]=v.useState(!0);return v.useEffect(()=>{if(!e){t("/login");return}(async()=>{i(!0);try{const o=await ee.items.getAll({limit:50});if(o.success&&o.data){const c=(Array.isArray(o.data)?o.data:o.data.items||[]).filter(g=>{var m;return((m=g.reporter)==null?void 0:m._id)===e._id||g.reporter===e._id});r(c)}}catch(o){console.error("Failed to load user items:",o)}finally{i(!1)}})()},[e]),e?s.jsxs("div",{className:"profile-page fade-in",children:[s.jsxs("div",{className:"glass-card profile-header-card",children:[s.jsx("div",{className:"profile-avatar-large",children:e.name?e.name.charAt(0).toUpperCase():"U"}),s.jsxs("div",{className:"profile-user-details",children:[s.jsxs("div",{className:"name-role-row",children:[s.jsx("h2",{children:e.name}),s.jsx("span",{className:"badge badge-claimed",children:e.role||"Student"})]}),s.jsxs("div",{className:"info-chips-grid",children:[s.jsxs("div",{className:"info-chip",children:[s.jsx(Cr,{size:14,className:"text-primary"}),s.jsx("span",{children:e.email})]}),e.studentId&&s.jsxs("div",{className:"info-chip",children:[s.jsx(Sd,{size:14,className:"text-primary"}),s.jsxs("span",{children:["ID: ",e.studentId]})]}),e.phone&&s.jsxs("div",{className:"info-chip",children:[s.jsx(zd,{size:14,className:"text-primary"}),s.jsxs("span",{children:["Phone: ",e.phone]})]}),s.jsxs("div",{className:"info-chip",children:[s.jsx(ka,{size:14,className:"text-primary"}),s.jsxs("span",{children:["Joined: ",new Date(e.createdAt||Date.now()).toLocaleDateString()]})]})]})]}),s.jsxs("div",{className:"profile-actions",children:[s.jsxs(b,{to:"/report-item",className:"btn btn-primary btn-sm",children:[s.jsx(Gl,{size:16}),s.jsx("span",{children:"Report New Item"})]}),s.jsxs(b,{to:"/claims",className:"btn btn-secondary btn-sm",children:[s.jsx(hr,{size:16}),s.jsx("span",{children:"View Claims"})]})]})]}),s.jsxs("div",{className:"user-activity-section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("div",{children:[s.jsxs("h2",{children:["Items Reported by You (",n.length,")"]}),s.jsx("p",{className:"section-sub",children:"Listings you have published on CampusCrate."})]})}),l?s.jsx("div",{className:"flex-center py-12",children:s.jsx("div",{className:"spinner"})}):n.length>0?s.jsx("div",{className:"grid-cards",children:n.map(a=>s.jsx(Ea,{item:a},a._id))}):s.jsxs("div",{className:"glass-card empty-state",children:[s.jsx(Ge,{size:48,className:"text-muted mb-2"}),s.jsx("h3",{children:"No Listings Reported Yet"}),s.jsx("p",{children:"You haven't posted any lost or found items on CampusCrate."}),s.jsx(b,{to:"/report-item",className:"btn btn-primary mt-4",children:"Post an Item Now"})]})]}),s.jsx("style",{children:`
        .profile-page {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .profile-header-card {
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .profile-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: white;
          font-weight: 800;
          font-size: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }
        .profile-user-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .name-role-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .name-role-row h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }
        .info-chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .info-chip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          background: rgba(15, 23, 42, 0.5);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }
        .profile-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (max-width: 768px) {
          .profile-header-card {
            flex-direction: column;
            text-align: center;
          }
          .name-role-row {
            justify-content: center;
          }
          .info-chips-grid {
            justify-content: center;
          }
          .profile-actions {
            flex-direction: row;
            width: 100%;
          }
        }
      `})]}):null},Yh=()=>{const{user:e}=Rt(),t=Ve(),[n,r]=v.useState(null),[l,i]=v.useState([]),[a,o]=v.useState([]),[u,c]=v.useState(!0),[g,m]=v.useState("overview");return v.useEffect(()=>{if(!e||e.role!=="admin"&&e.role!=="ADMIN"){t("/");return}(async()=>{c(!0);try{const[j,x,y]=await Promise.allSettled([ee.admin.getDashboard(),ee.admin.getUsers(),ee.reports.getAll()]);if(j.status==="fulfilled"&&j.value.success&&r(j.value.data),x.status==="fulfilled"&&x.value.success){const k=x.value.data;i(Array.isArray(k)?k:k.users||[])}if(y.status==="fulfilled"&&y.value.success){const k=y.value.data;o(Array.isArray(k)?k:k.reports||[])}}catch(j){console.error("Failed to load admin dashboard:",j)}finally{c(!1)}})()},[e]),s.jsxs("div",{className:"admin-dashboard-page fade-in",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("div",{className:"header-title-row",children:s.jsxs("div",{className:"admin-badge",children:[s.jsx(Ca,{size:16}),s.jsx("span",{children:"Administrative Control Center"})]})}),s.jsx("h1",{className:"page-title",children:"Platform Operations Dashboard"}),s.jsx("p",{className:"page-sub",children:"Monitor campus system statistics, user accounts, and reported abuse listings."})]}),u?s.jsx("div",{className:"flex-center py-20",children:s.jsx("div",{className:"spinner"})}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"glass-card stat-card",children:[s.jsx("div",{className:"stat-icon users-icon",children:s.jsx(Yo,{size:22})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-val",children:(n==null?void 0:n.totalUsers)||l.length||0}),s.jsx("span",{className:"stat-name",children:"Registered Users"})]})]}),s.jsxs("div",{className:"glass-card stat-card",children:[s.jsx("div",{className:"stat-icon items-icon",children:s.jsx(Ge,{size:22})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-val",children:(n==null?void 0:n.totalItems)||0}),s.jsx("span",{className:"stat-name",children:"Total Items Logged"})]})]}),s.jsxs("div",{className:"glass-card stat-card",children:[s.jsx("div",{className:"stat-icon claims-icon",children:s.jsx(hr,{size:22})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-val",children:(n==null?void 0:n.pendingClaims)||0}),s.jsx("span",{className:"stat-name",children:"Pending Verification Claims"})]})]}),s.jsxs("div",{className:"glass-card stat-card",children:[s.jsx("div",{className:"stat-icon reports-icon",children:s.jsx(vr,{size:22})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-val",children:a.length}),s.jsx("span",{className:"stat-name",children:"Abuse & Fraud Reports"})]})]})]}),s.jsxs("div",{className:"glass-card tab-bar",children:[s.jsxs("button",{className:`tab-item ${g==="overview"?"active":""}`,onClick:()=>m("overview"),children:[s.jsx(Yo,{size:16}),s.jsxs("span",{children:["User Accounts (",l.length,")"]})]}),s.jsxs("button",{className:`tab-item ${g==="reports"?"active":""}`,onClick:()=>m("reports"),children:[s.jsx(vr,{size:16}),s.jsxs("span",{children:["Fraud Reports (",a.length,")"]})]})]}),g==="overview"&&s.jsxs("div",{className:"glass-card table-card",children:[s.jsx("h3",{children:"Registered Campus Members"}),s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"admin-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Member Name"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Role"}),s.jsx("th",{children:"Student/Staff ID"}),s.jsx("th",{children:"Date Registered"})]})}),s.jsx("tbody",{children:l.length>0?l.map(p=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:p.name})}),s.jsx("td",{children:p.email}),s.jsx("td",{children:s.jsx("span",{className:"badge badge-claimed",children:p.role})}),s.jsx("td",{children:p.studentId||"N/A"}),s.jsx("td",{children:new Date(p.createdAt||Date.now()).toLocaleDateString()})]},p._id)):s.jsx("tr",{children:s.jsx("td",{colSpan:"5",className:"text-center py-4",children:"No users found."})})})]})})]}),g==="reports"&&s.jsxs("div",{className:"glass-card table-card",children:[s.jsx("h3",{children:"Reported Listings & Violations"}),s.jsx("div",{className:"table-responsive",children:s.jsxs("table",{className:"admin-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Reason"}),s.jsx("th",{children:"Description"}),s.jsx("th",{children:"Target Listing"}),s.jsx("th",{children:"Reporter"}),s.jsx("th",{children:"Status"})]})}),s.jsx("tbody",{children:a.length>0?a.map(p=>{var j;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"badge badge-lost",children:p.reason})}),s.jsx("td",{children:p.description}),s.jsx("td",{children:p.targetId||"Listing"}),s.jsx("td",{children:((j=p.reporter)==null?void 0:j.name)||"Anonymous"}),s.jsx("td",{children:s.jsx("span",{className:"badge badge-found",children:p.status||"PENDING"})})]},p._id)}):s.jsx("tr",{children:s.jsx("td",{colSpan:"5",className:"text-center py-4",children:"No abuse reports flagged."})})})]})})]})]}),s.jsx("style",{children:`
        .admin-dashboard-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .admin-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid var(--border-highlight);
          border-radius: 50px;
          color: var(--primary);
          font-size: 0.82rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .stat-card {
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .users-icon { background: rgba(99, 102, 241, 0.15); color: #93c5fd; }
        .items-icon { background: rgba(16, 185, 129, 0.15); color: #6ee7b7; }
        .claims-icon { background: rgba(139, 92, 246, 0.15); color: #c4b5fd; }
        .reports-icon { background: rgba(239, 68, 68, 0.15); color: #fca5a5; }

        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }
        .stat-name {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .table-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .table-responsive {
          width: 100%;
          overflow-x: auto;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.9rem;
        }
        .admin-table th, .admin-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border-color);
        }
        .admin-table th {
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.82rem;
          text-transform: uppercase;
        }
        .admin-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})},Gh=()=>s.jsxs("div",{className:"glass-card not-found-card fade-in",children:[s.jsx(Lh,{size:64,className:"not-found-icon"}),s.jsx("h1",{children:"404 - Page Not Found"}),s.jsx("p",{children:"The page or campus resource you are trying to access does not exist or has been moved."}),s.jsxs("div",{className:"not-found-actions",children:[s.jsxs(b,{to:"/",className:"btn btn-primary",children:[s.jsx(Ch,{size:18}),s.jsx("span",{children:"Back to Home"})]}),s.jsxs(b,{to:"/items",className:"btn btn-secondary",children:[s.jsx(gr,{size:18}),s.jsx("span",{children:"Browse Belongings"})]})]}),s.jsx("style",{children:`
        .not-found-card {
          max-width: 540px;
          margin: 4rem auto;
          padding: 3.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }
        .not-found-icon {
          color: var(--primary);
        }
        .not-found-card h1 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-main);
        }
        .not-found-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .not-found-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
      `})]}),Xh=()=>s.jsxs("div",{className:"app-container",children:[s.jsx(Oh,{}),s.jsx("main",{className:"main-content",children:s.jsxs(Xm,{children:[s.jsx(Oe,{path:"/",element:s.jsx(Fh,{})}),s.jsx(Oe,{path:"/items",element:s.jsx(Ah,{})}),s.jsx(Oe,{path:"/items/:id",element:s.jsx(Bh,{})}),s.jsx(Oe,{path:"/report-item",element:s.jsx(Vh,{})}),s.jsx(Oe,{path:"/claims",element:s.jsx(Hh,{})}),s.jsx(Oe,{path:"/login",element:s.jsx(Wh,{})}),s.jsx(Oe,{path:"/register",element:s.jsx(Qh,{})}),s.jsx(Oe,{path:"/profile",element:s.jsx(Kh,{})}),s.jsx(Oe,{path:"/admin",element:s.jsx(Yh,{})}),s.jsx(Oe,{path:"*",element:s.jsx(Gh,{})})]})}),s.jsx(bh,{})]});Pi.createRoot(document.getElementById("root")).render(s.jsx(iu.StrictMode,{children:s.jsx(ih,{children:s.jsx(mh,{children:s.jsx(Xh,{})})})}));
