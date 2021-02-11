(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.fh(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cn(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={cc:function cc(){},
f7:function(a,b){var t=new H.aa(a,b.i("aa<0>"))
t.a3(a)
return t},
dn:function(a){var t,s=H.dm(a)
if(s!=null)return s
t="minified:"+a
return t},
e:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a4(a)
if(typeof t!="string")throw H.d(H.cm(a))
return t},
e_:function(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.i(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
dZ:function(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=C.b.Z(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
br:function(a){return H.dY(a)},
dY:function(a){var t,s,r
if(a instanceof P.h)return H.o(H.aA(a),null)
if(J.c_(a)===C.x||u.G.b(a)){t=C.j(a)
if(H.cH(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.cH(r))return r}}return H.o(H.aA(a),null)},
cH:function(a){var t=a!=="Object"&&a!==""
return t},
C:function(a){throw H.d(H.cm(a))},
i:function(a,b){if(a==null)J.c8(a)
throw H.d(H.be(a,b))},
be:function(a,b){var t,s,r="index"
if(!H.d4(b))return new P.A(!0,b,r,null)
t=H.bc(J.c8(a))
if(!(b<0)){if(typeof t!=="number")return H.C(t)
s=b>=t}else s=!0
if(s)return P.dQ(b,a,r,null,t)
return P.bs(b,r)},
cm:function(a){return new P.A(!0,a,null,null)},
da:function(a){if(typeof a!="number")throw H.d(H.cm(a))
return a},
d:function(a){var t,s
if(a==null)a=new P.aR()
t=new Error()
t.dartException=a
s=H.fi
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fi:function(){return J.a4(this.dartException)},
bf:function(a){throw H.d(a)},
dl:function(a){throw H.d(P.cB(a))},
E:function(a){var t,s,r,q,p,o
a=H.fe(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.I([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cM:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cG:function(a,b){return new H.aQ(a,b==null?null:b.method)},
cd:function(a,b){var t=b==null,s=t?null:b.method
return new H.aO(a,s,t?null:b.receiver)},
aC:function(a){if(a==null)return new H.bq(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.U(a,a.dartException)
return H.eP(a)},
U:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
eP:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.ac(s,16)&8191)===10)switch(r){case 438:return H.U(a,H.cd(H.e(t)+" (Error "+r+")",f))
case 445:case 5007:return H.U(a,H.cG(H.e(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.dq()
p=$.dr()
o=$.ds()
n=$.dt()
m=$.dw()
l=$.dx()
k=$.dv()
$.du()
j=$.dz()
i=$.dy()
h=q.k(t)
if(h!=null)return H.U(a,H.cd(H.ar(t),h))
else{h=p.k(t)
if(h!=null){h.method="call"
return H.U(a,H.cd(H.ar(t),h))}else{h=o.k(t)
if(h==null){h=n.k(t)
if(h==null){h=m.k(t)
if(h==null){h=l.k(t)
if(h==null){h=k.k(t)
if(h==null){h=n.k(t)
if(h==null){h=j.k(t)
if(h==null){h=i.k(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.U(a,H.cG(H.ar(t),h))}}return H.U(a,new H.b0(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.ag()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.U(a,new P.A(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.ag()
return a},
a3:function(a){var t
if(a==null)return new H.am(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.am(a)},
f8:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.bc(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.bD("Unsupported number of arguments for wrapped closure"))},
bd:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.f8)
a.$identity=t
return t},
dM:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.aV().constructor.prototype):Object.create(new H.a7(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.D
if(typeof s!=="number")return s.j()
$.D=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.cA(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.dI(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cA(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
dI:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.dd,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.dG:H.dF
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
dJ:function(a,b,c,d){var t=H.cz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cA:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.dL(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.dJ(s,!q,t,b)
if(s===0){q=$.D
if(typeof q!=="number")return q.j()
$.D=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.e(H.c9())+";return "+o+"."+H.e(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.D
if(typeof q!=="number")return q.j()
$.D=q+1
n+=q
return new Function("return function("+n+"){return this."+H.e(H.c9())+"."+H.e(t)+"("+n+");}")()},
dK:function(a,b,c,d){var t=H.cz,s=H.dH
switch(b?-1:a){case 0:throw H.d(new H.aT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
dL:function(a,b){var t,s,r,q,p,o,n=H.c9(),m=$.cx
if(m==null)m=$.cx=H.cw("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.dK(s,!q,t,b)
if(s===1){q="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+m+");"
p=$.D
if(typeof p!=="number")return p.j()
$.D=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+m+", "+o+");"
p=$.D
if(typeof p!=="number")return p.j()
$.D=p+1
return new Function(q+p+"}")()},
cn:function(a,b,c,d,e,f,g){return H.dM(a,b,c,d,!!e,!!f,g)},
dF:function(a,b){return H.bb(v.typeUniverse,H.aA(a.a),b)},
dG:function(a,b){return H.bb(v.typeUniverse,H.aA(a.c),b)},
cz:function(a){return a.a},
dH:function(a){return a.c},
c9:function(){var t=$.cy
return t==null?$.cy=H.cw("self"):t},
cw:function(a){var t,s,r,q=new H.a7("self","target","receiver","name"),p=J.cD(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.dE("Field name "+a+" not found."))},
eV:function(a){if(a==null)H.eR("boolean expression must not be null")
return a},
eR:function(a){throw H.d(new H.b2(a))},
fh:function(a){throw H.d(new P.aH(a))},
f2:function(a){return v.getIsolateTag(a)},
h0:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fa:function(a){var t,s,r,q,p,o=H.ar($.dc.$1(a)),n=$.bZ[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c4[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.ep($.d8.$2(a,o))
if(r!=null){n=$.bZ[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c4[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.c7(t)
$.bZ[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c4[o]=t
return t}if(q==="-"){p=H.c7(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.di(a,t)
if(q==="*")throw H.d(P.cN(o))
if(v.leafTags[o]===true){p=H.c7(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.di(a,t)},
di:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cq(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c7:function(a){return J.cq(a,!1,null,!!a.$ifs)},
fc:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.c7(t)
else return J.cq(t,c,null,null)},
f5:function(){if(!0===$.cp)return
$.cp=!0
H.f6()},
f6:function(){var t,s,r,q,p,o,n,m
$.bZ=Object.create(null)
$.c4=Object.create(null)
H.f4()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dj.$1(p)
if(o!=null){n=H.fc(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
f4:function(){var t,s,r,q,p,o,n=C.o()
n=H.a1(C.p,H.a1(C.q,H.a1(C.k,H.a1(C.k,H.a1(C.r,H.a1(C.t,H.a1(C.u(C.j),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dc=new H.c1(q)
$.d8=new H.c2(p)
$.dj=new H.c3(o)},
a1:function(a,b){return a(b)||b},
fe:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aL:function aL(){},
aa:function aa(a,b){this.a=a
this.$ti=b},
bv:function bv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aQ:function aQ(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a},
bq:function bq(a){this.a=a},
am:function am(a){this.a=a
this.b=null},
w:function w(){},
aY:function aY(){},
aV:function aV(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aT:function aT(a){this.a=a},
b2:function b2(a){this.a=a},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
c3:function c3(a){this.a=a},
e2:function(a,b){var t=b.c
return t==null?b.c=H.cj(a,b.z,!0):t},
cJ:function(a,b){var t=b.c
return t==null?b.c=H.ao(a,"a8",[b.z]):t},
cK:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cK(a.z)
return t===11||t===12},
e1:function(a){return a.cy},
az:function(a){return H.bV(v.typeUniverse,a,!1)},
df:function(a,b){var t,s,r,q,p
if(a==null)return null
t=b.Q
s=a.cx
if(s==null)s=a.cx=new Map()
r=b.cy
q=s.get(r)
if(q!=null)return q
p=H.F(v.typeUniverse,a.z,t,0)
s.set(r,p)
return p},
F:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.F(a,t,c,a0)
if(s===t)return b
return H.cY(a,s,!0)
case 7:t=b.z
s=H.F(a,t,c,a0)
if(s===t)return b
return H.cj(a,s,!0)
case 8:t=b.z
s=H.F(a,t,c,a0)
if(s===t)return b
return H.cX(a,s,!0)
case 9:r=b.Q
q=H.aw(a,r,c,a0)
if(q===r)return b
return H.ao(a,b.z,q)
case 10:p=b.z
o=H.F(a,p,c,a0)
n=b.Q
m=H.aw(a,n,c,a0)
if(o===p&&m===n)return b
return H.ch(a,o,m)
case 11:l=b.z
k=H.F(a,l,c,a0)
j=b.Q
i=H.eM(a,j,c,a0)
if(k===l&&i===j)return b
return H.cW(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.aw(a,h,c,a0)
p=b.z
o=H.F(a,p,c,a0)
if(g===h&&o===p)return b
return H.ci(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.bi("Attempted to substitute unexpected RTI kind "+d))}},
aw:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.F(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
eN:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.F(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
eM:function(a,b,c,d){var t,s=b.a,r=H.aw(a,s,c,d),q=b.b,p=H.aw(a,q,c,d),o=b.c,n=H.eN(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.b6()
t.a=r
t.b=p
t.c=n
return t},
I:function(a,b){a[v.arrayRti]=b
return a},
db:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.dd(t)
return a.$S()}return null},
de:function(a,b){var t
if(H.cK(b))if(a instanceof H.w){t=H.db(a)
if(t!=null)return t}return H.aA(a)},
aA:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.ck(a)}if(Array.isArray(a))return H.a_(a)
return H.ck(J.c_(a))},
a_:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
fV:function(a){var t=a.$ti
return t!=null?t:H.ck(a)},
ck:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.ex(a,t)},
ex:function(a,b){var t=a instanceof H.w?a.__proto__.__proto__.constructor:b,s=H.en(v.typeUniverse,t.name)
b.$ccache=s
return s},
dd:function(a){var t,s,r
H.bc(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.bV(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
eY:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.b9(a)
r=H.bV(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.b9(r):q},
ew:function(a){var t,s,r=this,q=u.K
if(r===q)return H.as(r,a,H.eA)
if(!H.H(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.as(r,a,H.eE)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.d4
else if(t===u.W||t===u.o)s=H.ez
else if(t===u.N)s=H.eB
else s=t===u.y?H.d2:null
if(s!=null)return H.as(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.f9)){r.r="$i"+q
return H.as(r,a,H.eC)}}else if(q===7)return H.as(r,a,H.eu)
return H.as(r,a,H.es)},
as:function(a,b,c){a.b=c
return a.b(b)},
ev:function(a){var t,s,r=this
if(!H.H(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.eq
else if(r===u.K)s=H.eo
else s=H.et
r.a=s
return r.a(a)},
eG:function(a){var t,s=a.y
if(!H.H(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
es:function(a){var t=this
if(a==null)return H.eG(t)
return H.k(v.typeUniverse,H.de(a,t),null,t,null)},
eu:function(a){if(a==null)return!0
return this.z.b(a)},
eC:function(a){var t=this,s=t.r
if(a instanceof P.h)return!!a[s]
return!!J.c_(a)[s]},
fU:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.d0(a,t)},
et:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.d0(a,t)},
d0:function(a,b){throw H.d(H.cV(H.cP(a,H.de(a,b),H.o(b,null))))},
eW:function(a,b,c,d){var t=null
if(H.k(v.typeUniverse,a,t,b,t))return a
throw H.d(H.cV("The type argument '"+H.e(H.o(a,t))+"' is not a subtype of the type variable bound '"+H.e(H.o(b,t))+"' of type variable '"+H.e(c)+"' in '"+H.e(d)+"'."))},
cP:function(a,b,c){var t=P.aI(a),s=H.o(b==null?H.aA(a):b,null)
return t+": type '"+H.e(s)+"' is not a subtype of type '"+H.e(c)+"'"},
cV:function(a){return new H.an("TypeError: "+a)},
q:function(a,b){return new H.an("TypeError: "+H.cP(a,null,b))},
eA:function(a){return a!=null},
eo:function(a){return a},
eE:function(a){return!0},
eq:function(a){return a},
d2:function(a){return!0===a||!1===a},
fI:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.q(a,"bool"))},
fK:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.q(a,"bool"))},
fJ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.q(a,"bool?"))},
fL:function(a){if(typeof a=="number")return a
throw H.d(H.q(a,"double"))},
fN:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.q(a,"double"))},
fM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.q(a,"double?"))},
d4:function(a){return typeof a=="number"&&Math.floor(a)===a},
fO:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.q(a,"int"))},
bc:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.q(a,"int"))},
fP:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.q(a,"int?"))},
ez:function(a){return typeof a=="number"},
fQ:function(a){if(typeof a=="number")return a
throw H.d(H.q(a,"num"))},
fS:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.q(a,"num"))},
fR:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.q(a,"num?"))},
eB:function(a){return typeof a=="string"},
fT:function(a){if(typeof a=="string")return a
throw H.d(H.q(a,"String"))},
ar:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.q(a,"String"))},
ep:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.q(a,"String?"))},
eJ:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.b.j(s,H.o(a[r],b))
return t},
d1:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.I([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.a.p(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.i(a5,j)
m=C.b.j(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.b.j(" extends ",H.o(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.o(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.b.j(a2,H.o(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.b.j(a2,H.o(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.cs(H.o(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.e(a0)},
o:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.o(a.z,b)
return t}if(m===7){s=a.z
t=H.o(s,b)
r=s.y
return J.cs(r===11||r===12?C.b.j("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.e(H.o(a.z,b))+">"
if(m===9){q=H.eO(a.z)
p=a.Q
return p.length!==0?q+("<"+H.eJ(p,b)+">"):q}if(m===11)return H.d1(a,b,null)
if(m===12)return H.d1(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.i(b,o)
return b[o]}return"?"},
eO:function(a){var t,s=H.dm(a)
if(s!=null)return s
t="minified:"+a
return t},
cZ:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
en:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.bV(a,b,!1)
else if(typeof n=="number"){t=n
s=H.ap(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.ao(a,b,r)
o[b]=p
return p}else return n},
el:function(a,b){return H.d_(a.tR,b)},
ek:function(a,b){return H.d_(a.eT,b)},
bV:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.cU(H.cS(a,null,b,c))
s.set(b,t)
return t},
bb:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.cU(H.cS(a,b,c,!0))
r.set(c,s)
return s},
em:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.ch(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
P:function(a,b){b.a=H.ev
b.b=H.ew
return b},
ap:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.z(null,null)
t.y=b
t.cy=c
s=H.P(a,t)
a.eC.set(c,s)
return s},
cY:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.ei(a,b,s,c)
a.eC.set(s,t)
return t},
ei:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.H(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.z(null,null)
r.y=6
r.z=b
r.cy=c
return H.P(a,r)},
cj:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.eh(a,b,s,c)
a.eC.set(s,t)
return t},
eh:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.H(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.c5(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.c5(r.z))return r
else return H.e2(a,b)}}q=new H.z(null,null)
q.y=7
q.z=b
q.cy=c
return H.P(a,q)},
cX:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.ef(a,b,s,c)
a.eC.set(s,t)
return t},
ef:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.H(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.ao(a,"a8",[b])
else if(b===u.P||b===u.T)return u.f}r=new H.z(null,null)
r.y=8
r.z=b
r.cy=c
return H.P(a,r)},
ej:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.z(null,null)
t.y=13
t.z=b
t.cy=r
s=H.P(a,t)
a.eC.set(r,s)
return s},
ba:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
ee:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
ao:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.ba(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.z(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.P(a,s)
a.eC.set(q,r)
return r},
ch:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.ba(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.z(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.P(a,p)
a.eC.set(r,o)
return o},
cW:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.ba(n)
if(k>0){t=m>0?",":""
s=H.ba(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.ee(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.z(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.P(a,p)
a.eC.set(r,s)
return s},
ci:function(a,b,c,d){var t,s=b.cy+("<"+H.ba(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.eg(a,b,c,s,d)
a.eC.set(s,t)
return t},
eg:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.F(a,b,s,0)
n=H.aw(a,c,s,0)
return H.ci(a,o,n,c!==n)}}m=new H.z(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.P(a,m)},
cS:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cU:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.e9(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.cT(a,s,h,g,!1)
else if(r===46)s=H.cT(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.O(a.u,a.e,g.pop()))
break
case 94:g.push(H.ej(a.u,g.pop()))
break
case 35:g.push(H.ap(a.u,5,"#"))
break
case 64:g.push(H.ap(a.u,2,"@"))
break
case 126:g.push(H.ap(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.cg(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.ao(q,o,p))
else{n=H.O(q,a.e,o)
switch(n.y){case 11:g.push(H.ci(q,n,p,a.n))
break
default:g.push(H.ch(q,n,p))
break}}break
case 38:H.ea(a,g)
break
case 42:m=a.u
g.push(H.cY(m,H.O(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.cj(m,H.O(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.cX(m,H.O(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.b6()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.cg(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.cW(q,H.O(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.cg(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.ec(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.O(a.u,a.e,i)},
e9:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cT:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.cZ(t,p.z)[q]
if(o==null)H.bf('No "'+q+'" in "'+H.e1(p)+'"')
d.push(H.bb(t,p,o))}else d.push(q)
return n},
ea:function(a,b){var t=b.pop()
if(0===t){b.push(H.ap(a.u,1,"0&"))
return}if(1===t){b.push(H.ap(a.u,4,"1&"))
return}throw H.d(P.bi("Unexpected extended operation "+H.e(t)))},
O:function(a,b,c){if(typeof c=="string")return H.ao(a,c,a.sEA)
else if(typeof c=="number")return H.eb(a,b,c)
else return c},
cg:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.O(a,b,c[t])},
ec:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.O(a,b,c[t])},
eb:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.bi("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.bi("Bad index "+c+" for "+b.h(0)))},
k:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.H(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.H(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.k(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.k(a,b.z,c,d,e)
if(q===6){t=d.z
return H.k(a,b,c,t,e)}if(s===8){if(!H.k(a,b.z,c,d,e))return!1
return H.k(a,H.cJ(a,b),c,d,e)}if(s===7){t=H.k(a,b.z,c,d,e)
return t}if(q===8){if(H.k(a,b,c,d.z,e))return!0
return H.k(a,b,c,H.cJ(a,d),e)}if(q===7){t=H.k(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.k(a,l,c,k,e)||!H.k(a,k,e,l,c))return!1}return H.d3(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.d3(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.ey(a,b,c,d,e)}return!1},
d3:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.k(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.k(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.k(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.k(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.k(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
ey:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.k(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.cZ(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.k(a,H.bb(a,b,m[q]),c,s[q],e))return!1
return!0},
c5:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.H(a))if(s!==7)if(!(s===6&&H.c5(a.z)))t=s===8&&H.c5(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f9:function(a){var t
if(!H.H(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
H:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
d_:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
z:function z(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
b6:function b6(){this.c=this.b=this.a=null},
b9:function b9(a){this.a=a},
b4:function b4(){},
an:function an(a){this.a=a},
dR:function(){return new P.ah("No element")},
dm:function(a){return v.mangledGlobalNames[a]}},J={
cq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
co:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.cp==null){H.f5()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.d(P.cN("Return interceptor for "+H.e(t(a,p))))}r=a.constructor
q=r==null?null:r[J.cF()]
if(q!=null)return q
q=H.fa(a)
if(q!=null)return q
if(typeof a=="function")return C.y
t=Object.getPrototypeOf(a)
if(t==null)return C.n
if(t===Object.prototype)return C.n
if(typeof r=="function"){Object.defineProperty(r,J.cF(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
cF:function(){var t=$.cR
return t==null?$.cR=v.getIsolateTag("_$dart_js"):t},
dS:function(a,b){if(a>4294967295)throw H.d(P.cI(a,0,4294967295,"length",null))
return J.cD(H.I(new Array(a),b.i("n<0>")),b)},
dT:function(a,b){return H.I(new Array(a),b.i("n<0>"))},
cD:function(a,b){a.fixed$length=Array
return a},
cE:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
dU:function(a,b){var t,s
for(t=a.length;b<t;){s=C.b.N(a,b)
if(s!==32&&s!==13&&!J.cE(s))break;++b}return b},
dV:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.b.U(a,t)
if(s!==32&&s!==13&&!J.cE(s))break}return b},
c_:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ab.prototype
return J.aN.prototype}if(typeof a=="string")return J.S.prototype
if(a==null)return J.ac.prototype
if(typeof a=="boolean")return J.aM.prototype
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.h)return a
return J.co(a)},
f_:function(a){if(typeof a=="string")return J.S.prototype
if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.h)return a
return J.co(a)},
f0:function(a){if(typeof a=="number")return J.ad.prototype
if(typeof a=="string")return J.S.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.Y.prototype
return a},
f1:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.L.prototype
return a}if(a instanceof P.h)return a
return J.co(a)},
cs:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.f0(a).j(a,b)},
c8:function(a){return J.f_(a).gl(a)},
bh:function(a,b){return J.f1(a).sat(a,b)},
a4:function(a){return J.c_(a).h(a)},
t:function t(){},
aM:function aM(){},
ac:function ac(){},
M:function M(){},
aS:function aS(){},
Y:function Y(){},
L:function L(){},
n:function n(a){this.$ti=a},
bp:function bp(a){this.$ti=a},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ad:function ad(){},
ab:function ab(){},
aN:function aN(){},
S:function S(){}},P={
e4:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.eS()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bd(new P.by(r),1)).observe(t,{childList:true})
return new P.bx(r,t,s)}else if(self.setImmediate!=null)return P.eT()
return P.eU()},
e5:function(a){self.scheduleImmediate(H.bd(new P.bz(u.M.a(a)),0))},
e6:function(a){self.setImmediate(H.bd(new P.bA(u.M.a(a)),0))},
e7:function(a){u.M.a(a)
P.ed(0,a)},
ed:function(a,b){var t=new P.bT()
t.a4(a,b)
return t},
e8:function(a,b){var t,s,r
b.a=1
try{a.Y(new P.bH(b),new P.bI(b),u.P)}catch(r){t=H.aC(r)
s=H.a3(r)
P.fg(new P.bJ(b,t,s))}},
cQ:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.v()
b.a=a.a
b.c=a.c
P.Z(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.R(r)}},
Z:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.bW(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.Z(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.bW(d,d,l.b,k.a,k.b)
return}g=$.j
if(g!==h)$.j=h
else g=d
b=b.c
if((b&15)===8)new P.bN(q,c,p).$0()
else if(j){if((b&1)!==0)new P.bM(q,k).$0()}else if((b&2)!==0)new P.bL(c,q).$0()
if(g!=null)$.j=g
b=q.c
if(r.b(b)){f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.w(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.cQ(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.w(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
eH:function(a,b){var t=u.Q
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.d(P.ct(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
eF:function(){var t,s
for(t=$.a0;t!=null;t=$.a0){$.au=null
s=t.b
$.a0=s
if(s==null)$.at=null
t.a.$0()}},
eL:function(){$.cl=!0
try{P.eF()}finally{$.au=null
$.cl=!1
if($.a0!=null)$.cr().$1(P.d9())}},
d7:function(a){var t=new P.b3(a),s=$.at
if(s==null){$.a0=$.at=t
if(!$.cl)$.cr().$1(P.d9())}else $.at=s.b=t},
eK:function(a){var t,s,r,q=$.a0
if(q==null){P.d7(a)
$.au=$.at
return}t=new P.b3(a)
s=$.au
if(s==null){t.b=q
$.a0=$.au=t}else{r=s.b
t.b=r
$.au=s.b=t
if(r==null)$.at=t}},
fg:function(a){var t=null,s=$.j
if(C.c===s){P.av(t,t,C.c,a)
return}P.av(t,t,s,u.M.a(s.T(a)))},
bj:function(a,b){var t=b==null?P.cv(a):b
P.cu(a,"error",u.K)
return new P.a6(a,t)},
cv:function(a){var t
if(u.C.b(a)){t=a.gA()
if(t!=null)return t}return C.w},
bW:function(a,b,c,d,e){P.eK(new P.bX(d,e))},
d5:function(a,b,c,d,e){var t,s=$.j
if(s===c)return d.$0()
$.j=c
t=s
try{s=d.$0()
return s}finally{$.j=t}},
d6:function(a,b,c,d,e,f,g){var t,s=$.j
if(s===c)return d.$1(e)
$.j=c
t=s
try{s=d.$1(e)
return s}finally{$.j=t}},
eI:function(a,b,c,d,e,f,g,h,i){var t,s=$.j
if(s===c)return d.$2(e,f)
$.j=c
t=s
try{s=d.$2(e,f)
return s}finally{$.j=t}},
av:function(a,b,c,d){var t
u.M.a(d)
t=C.c!==c
if(t)d=!(!t||!1)?c.T(d):c.ad(d,u.H)
P.d7(d)},
by:function by(a){this.a=a},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a){this.a=a},
bA:function bA(a){this.a=a},
bT:function bT(){},
bU:function bU(a,b){this.a=a
this.b=b},
ak:function ak(){},
aj:function aj(a,b){this.a=a
this.$ti=b},
al:function al(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bE:function bE(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a},
bI:function bI(a){this.a=a},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a){this.a=a},
bM:function bM(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
b3:function b3(a){this.a=a
this.b=null},
aW:function aW(){},
bt:function bt(a,b){this.a=a
this.b=b},
bu:function bu(a,b){this.a=a
this.b=b},
aX:function aX(){},
a6:function a6(a,b){this.a=a
this.b=b},
aq:function aq(){},
bX:function bX(a,b){this.a=a
this.b=b},
b7:function b7(){},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a,b){this.a=a
this.b=b},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function(a){if(a instanceof H.w)return a.h(0)
return"Instance of '"+H.e(H.br(a))+"'"},
dW:function(a,b,c){var t,s=J.dS(a,c)
if(a!==0&&!0)for(t=0;t<s.length;++t)s[t]=b
return s},
W:function(a,b){var t,s,r=H.I([],b.i("n<0>"))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.dl)(a),++s)C.a.p(r,b.a(a[s]))
return r},
dX:function(a,b,c){var t,s=J.dT(a,c)
for(t=0;t<a;++t)C.a.K(s,t,b.$1(t))
return s},
e3:function(a,b,c){var t=new J.aF(b,b.length,H.a_(b).i("aF<1>"))
if(!t.G())return a
if(c.length===0){do a+=H.e(t.d)
while(t.G())}else{a+=H.e(t.d)
for(;t.G();)a=a+c+H.e(t.d)}return a},
aI:function(a){if(typeof a=="number"||H.d2(a)||null==a)return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
return P.dN(a)},
bi:function(a){return new P.a5(a)},
dE:function(a){return new P.A(!1,null,null,a)},
ct:function(a,b,c){return new P.A(!0,a,b,c)},
cu:function(a,b,c){if(a==null)throw H.d(new P.A(!1,null,b,"Must not be null"))
return a},
e0:function(a){var t=null
return new P.X(t,t,!1,t,t,a)},
bs:function(a,b){return new P.X(null,null,!0,a,b,"Value not in range")},
cI:function(a,b,c,d,e){return new P.X(b,c,!0,a,d,"Invalid value")},
dQ:function(a,b,c,d,e){var t=H.bc(e==null?J.c8(b):e)
return new P.aK(t,!0,a,c,"Index out of range")},
ce:function(a){return new P.b1(a)},
cN:function(a){return new P.b_(a)},
cL:function(a){return new P.ah(a)},
cB:function(a){return new P.aG(a)},
f:function f(){},
a5:function a5(a){this.a=a},
aZ:function aZ(){},
aR:function aR(){},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aK:function aK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b1:function b1(a){this.a=a},
b_:function b_(a){this.a=a},
ah:function ah(a){this.a=a},
aG:function aG(a){this.a=a},
ag:function ag(){},
aH:function aH(a){this.a=a},
bD:function bD(a){this.a=a},
l:function l(){},
h:function h(){},
b8:function b8(){},
ai:function ai(a){this.a=a},
dh:function(a,b,c){H.eW(c,u.o,"T","max")
c.a(a)
c.a(b)
return Math.max(H.da(a),H.da(b))},
bP:function bP(){},
cC:function(a,b,c){var t,s
if(P.eD(a))return b+"..."+c
t=new P.ai(b)
C.a.p($.ax,a)
try{s=t
s.a=P.e3(s.a,a,", ")}finally{if(0>=$.ax.length)return H.i($.ax,-1)
$.ax.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eD:function(a){var t,s
for(t=$.ax.length,s=0;s<t;++s)if(a===$.ax[s])return!0
return!1}},W={
ay:function(){return document},
dO:function(a){return W.dP(a,null,null).I(new W.bn(),u.N)},
dP:function(a,b,c){var t,s,r,q=new P.v($.j,u.U),p=new P.aj(q,u.E),o=new XMLHttpRequest()
C.l.ao(o,"GET",a,!0)
t=u.u
s=t.a(new W.bo(o,p))
u.Y.a(null)
r=u.V
W.cf(o,"load",s,!1,r)
W.cf(o,"error",t.a(p.gaf()),!1,r)
o.send()
return q},
cf:function(a,b,c,d,e){var t=W.eQ(new W.bC(c),u.B),s=t!=null
if(s&&!0){u.D.a(t)
if(s)C.l.a5(a,b,t,!1)}return new W.b5(a,b,t,!1,e.i("b5<0>"))},
eQ:function(a,b){var t=$.j
if(t===C.c)return a
return t.ae(a,b)},
c:function c(){},
aD:function aD(){},
aE:function aE(){},
J:function J(){},
R:function R(){},
B:function B(){},
bm:function bm(){},
b:function b(){},
a:function a(){},
m:function m(){},
aJ:function aJ(){},
y:function y(){},
bn:function bn(){},
bo:function bo(a,b){this.a=a
this.b=b},
a9:function a9(){},
p:function p(){},
x:function x(){},
aU:function aU(){},
ca:function ca(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b5:function b5(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bC:function bC(a){this.a=a}},E={
bl:function(a,b,c,d){return b},
bk:function bk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=null},
af:function af(a){this.a=a},
ae:function ae(a,b){this.a=a
this.b=b}},U={
dk:function(a){var t,s=u.e,r=0
while(!0){t=C.a.ap(a,H.f7(P.fd(),s))
if(typeof t!=="number")return H.C(t)
if(!(r*6<t))break
r+=10}return r},
f3:function(a){var t,s,r,q,p,o,n=U.dk(a)
for(t=0;t<6;++t){s=$.bg()
s.beginPath()
r=$.Q().height
if(typeof r!=="number")return H.C(r)
s.moveTo(0,t*r/6)
r=a.length
q=$.Q().height
if(typeof q!=="number")return H.C(q)
s.lineTo(120*r+60,t*q/6)
s.stroke()
s.closePath()}for(t=0;t<=6;++t){s=$.bg()
s.beginPath()
r=C.h.h(n*t)
q=$.Q()
p=q.height
q=q.height
if(typeof q!=="number")return q.a_()
if(typeof p!=="number")return p.u()
s.fillText(r,10,p-t*(q/6))
s.closePath()}o=new U.c0()
s=$.bg()
s.beginPath()
s.moveTo(0,$.Q().height)
s.lineTo(120*a.length+60,$.Q().height)
s.stroke()
s.closePath()
for(t=0;t<a.length;++t){s=$.Q()
r=s.height
q=a[t]
p=s.height
if(typeof p!=="number")return p.a_()
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return r.u()
o.$4(t*120+40,r-q*(p/6)/n,60,s.height)}},
eX:function(a,b){var t,s,r,q,p,o=$.r().width
if(typeof o!=="number")return o.u()
t=(o-10)/a.length
for(s=0;s<=6;++s){o=$.V();(o&&C.d).sB(o,"grey")
o.beginPath()
r=$.r().height
if(typeof r!=="number")return H.C(r)
o.moveTo(0,s*r/6)
r=a.length
q=$.r().height
if(typeof q!=="number")return H.C(q)
o.lineTo(120*r+60,s*q/6)
o.stroke()
o.closePath()}o=$.V()
o.beginPath()
o.moveTo(0,$.r().height)
o.lineTo(120*a.length+60,$.r().height)
o.stroke()
o.closePath()
for(o=t/3,s=0;s<=b.length-1;++s){r=$.V();(r&&C.d).st(r,"black")
r.beginPath()
if(s>=b.length)return H.i(b,s)
q=J.a4(b[s])
p=$.r().height
if(typeof p!=="number")return p.u()
r.fillText(q,s*t+o+10,p-2)
r.closePath()}},
aB:function(a,b,c,d){var t,s,r,q,p,o,n,m=$.r().width
if(typeof m!=="number")return m.u()
t=(m-10)/a.length
for(m=t/2,s=0;s<=a.length-2;){r=$.V();(r&&C.d).sB(r,c)
r.beginPath()
q=m+s*t
p=b.height
if(s>=a.length)return H.i(a,s)
o=a[s]
if(typeof o!=="number")return o.q()
if(typeof p!=="number")return H.C(p)
r.moveTo(q,p-o*p/6/4000-20)
p=b.height;++s
if(s>=a.length)return H.i(a,s)
o=a[s]
if(typeof o!=="number")return o.q()
if(typeof p!=="number")return H.C(p)
r.lineTo(q+t,p-o*p/6/4000-20)
r.lineWidth=2
r.stroke()
r.closePath()}for(s=-1;s<=a.length-2;s=n){r=$.V();(r&&C.d).sB(r,"grey")
r.beginPath()
q=b.height
n=s+1
if(n>=a.length)return H.i(a,n)
p=a[n]
if(typeof p!=="number")return p.q()
if(typeof q!=="number")return H.C(q)
r.arc(m+s*t+t,q-p*q/6/4000-20,3.141592653589793,0,6.283185307179586,!1)
r.lineWidth=2
C.d.st(r,c)
r.fill()
r.closePath()}r=$.V();(r&&C.d).st(r,"black")
r.beginPath()
q=b.height
if(0>=a.length)return H.i(a,0)
p=a[0]
if(typeof p!=="number")return p.q()
if(typeof q!=="number")return H.C(q)
C.d.ai(r,d,10,q-p*q/6/4000-20)
r.closePath()
for(s=0;r=a.length,s<r;++s)if(s===r-1){r=$.V();(r&&C.d).st(r,"black")
r.beginPath()
q=b.height
if(s>=a.length)return H.i(a,s)
p=a[s]
if(typeof p!=="number")return p.q()
if(typeof q!=="number")return H.C(q)
r.fillText(d,m+s*t,q-p*q/6/4000-20)
r.closePath()}},
ff:function(a){var t,s,r,q,p,o,n,m,l
H.ar(a)
t=$.a2=K.er(H.I([a],u.i),!0,null,";",'"','"',"\r\n",!0,!0).ag(a)
if(0>=t.length)return H.i(t,0)
s=P.W(C.a.m(t[0],1),u.R)
t=$.a2
if(1>=t.length)return H.i(t,1)
r=u.e
q=P.W(C.a.m(t[1],1),r)
t=$.a2
if(2>=t.length)return H.i(t,2)
p=P.W(C.a.m(t[2],1),r)
t=$.a2
if(3>=t.length)return H.i(t,3)
o=P.W(C.a.m(t[3],1),r)
t=$.a2
if(4>=t.length)return H.i(t,4)
n=P.W(C.a.m(t[4],1),r)
t=$.a2
if(5>=t.length)return H.i(t,5)
m=P.W(C.a.m(t[5],1),r)
t=$.a2
if(6>=t.length)return H.i(t,6)
l=P.W(C.a.m(t[6],1),r)
U.eX(q,s)
U.aB(q,$.r(),"#BD0026","Italy")
U.aB(p,$.r(),"#F03B20","Spain")
U.aB(o,$.r(),"#FD8D3C","France")
U.aB(n,$.r(),"#FEB24C","Netherlands")
U.aB(m,$.r(),"#FED24C","Germany")
U.aB(l,$.r(),"#FFFFB2","Belgium")},
dg:function(){var t,s=P.dX(10,new U.c6(),u.e),r=U.dk(s)
W.dO("./data/datiCovid.csv").I(U.fb(),u.H)
t=$.Q();(t&&C.f).sak(t,500)
J.bh($.dD().firstChild,"Time Series (COVID-19 data) and Histogram (random data)")
J.bh($.dA(),"I dati visualizzati sono: "+P.cC(s,"[","]"))
J.bh($.dB(),"I dati mostrati sono stati generati in maniera aleatoria nel range [10, 1000]. \xc8 stato deciso di suddividere lo spazio in 6 intervalli di egual lunghezza ("+C.h.h(r)+") in modo da poter leggere le informazioni circa la altezza delle barre.")
J.bh($.dC(),"I dati sono relativi al numero di decessi mensili legati al COVID-19. I dati non sono cumulativi, cio\xe8 per ogni mese \xe8 mostrato il numero di nuovi deceduti. ")
U.f3(s)},
c0:function c0(){},
c6:function c6(){}},K={
er:function(a,b,c,d,e,f,g,h,i){var t=null,s=E.bl(!0,d,",",t),r=E.bl(!0,e,'"',t),q=E.bl(!0,f,'"',e),p=E.bl(!0,g,"\r\n",t)
s=new E.bk(s,r,q,p,!0,!0)
s.r=new P.ai("")
s.y=0
s.cx=s.ch=s.Q=!1
s.dy=s.dx=s.db=s.cy=0
s.fr=new P.ai("")
return s}}
var w=[C,H,J,P,W,E,U,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cc.prototype={}
J.t.prototype={
h:function(a){return"Instance of '"+H.e(H.br(a))+"'"}}
J.aM.prototype={
h:function(a){return String(a)},
$ibY:1}
J.ac.prototype={
h:function(a){return"null"},
$il:1}
J.M.prototype={
h:function(a){return String(a)}}
J.aS.prototype={}
J.Y.prototype={}
J.L.prototype={
h:function(a){var t=a[$.dp()]
if(t==null)return this.a2(a)
return"JavaScript function for "+H.e(J.a4(t))},
$iK:1}
J.n.prototype={
p:function(a,b){H.a_(a).c.a(b)
if(!!a.fixed$length)H.bf(P.ce("add"))
a.push(b)},
al:function(a,b){var t,s=P.dW(a.length,"",u.N)
for(t=0;t<a.length;++t)this.K(s,t,H.e(a[t]))
return s.join(b)},
ap:function(a,b){var t,s,r
H.a_(a).i("1(1,1)").a(b)
t=a.length
if(t===0)throw H.d(H.dR())
if(0>=t)return H.i(a,0)
s=a[0]
for(r=1;r<t;++r){s=b.$2(s,a[r])
if(t!==a.length)throw H.d(P.cB(a))}return s},
m:function(a,b){var t=a.length
if(b>t)throw H.d(P.cI(b,0,t,"start",null))
if(b===t)return H.I([],H.a_(a))
return H.I(a.slice(b,t),H.a_(a))},
h:function(a){return P.cC(a,"[","]")},
gl:function(a){return a.length},
K:function(a,b,c){H.a_(a).c.a(c)
if(!!a.immutable$list)H.bf(P.ce("indexed set"))
if(b>=a.length||!1)throw H.d(H.be(a,b))
a[b]=c},
$icb:1,
$iaP:1}
J.bp.prototype={}
J.aF.prototype={
G:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.dl(r))
t=s.c
if(t>=q){s.sP(null)
return!1}s.sP(r[t]);++s.c
return!0},
sP:function(a){this.d=this.$ti.i("1?").a(a)}}
J.ad.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ac:function(a,b){var t
if(a>0)t=this.ab(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ab:function(a,b){return b>31?0:a>>>b},
$iT:1}
J.ab.prototype={$iG:1}
J.aN.prototype={}
J.S.prototype={
U:function(a,b){if(b<0)throw H.d(H.be(a,b))
if(b>=a.length)H.bf(H.be(a,b))
return a.charCodeAt(b)},
N:function(a,b){if(b>=a.length)throw H.d(H.be(a,b))
return a.charCodeAt(b)},
j:function(a,b){if(typeof b!="string")throw H.d(P.ct(b,null,null))
return a+b},
a0:function(a,b,c){c=a.length
if(b<0)throw H.d(P.bs(b,null))
if(b>c)throw H.d(P.bs(b,null))
if(c>c)throw H.d(P.bs(c,null))
return a.substring(b,c)},
L:function(a,b){return this.a0(a,b,null)},
Z:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.N(q,0)===133){t=J.dU(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.U(q,s)===133?J.dV(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
h:function(a){return a},
gl:function(a){return a.length},
$iu:1}
H.aL.prototype={
a3:function(a){if(false)H.df(0,0)},
h:function(a){var t="<"+C.a.al([H.eY(this.$ti.c)],", ")+">"
return H.e(this.a)+" with "+t}}
H.aa.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.df(H.db(this.a),this.$ti)}}
H.bv.prototype={
k:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.aQ.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.aO.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.e(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.e(s.a)+")"
return r+q+"' on '"+t+"' ("+H.e(s.a)+")"}}
H.b0.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.bq.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.am.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iN:1}
H.w.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dn(s==null?"unknown":s)+"'"},
$iK:1,
gau:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aY.prototype={}
H.aV.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dn(t)+"'"}}
H.a7.prototype={
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.br(t))+"'")}}
H.aT.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.b2.prototype={
h:function(a){return"Assertion failed: "+P.aI(this.a)}}
H.c1.prototype={
$1:function(a){return this.a(a)},
$S:4}
H.c2.prototype={
$2:function(a,b){return this.a(a,b)},
$S:5}
H.c3.prototype={
$1:function(a){return this.a(H.ar(a))},
$S:6}
H.z.prototype={
i:function(a){return H.bb(v.typeUniverse,this,a)},
n:function(a){return H.em(v.typeUniverse,this,a)}}
H.b6.prototype={}
H.b9.prototype={
h:function(a){return H.o(this.a,null)}}
H.b4.prototype={
h:function(a){return this.a}}
H.an.prototype={}
P.by.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:3}
P.bx.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:7}
P.bz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bA.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bT.prototype={
a4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bd(new P.bU(this,b),0),a)
else throw H.d(P.ce("`setTimeout()` not found."))}}
P.bU.prototype={
$0:function(){this.b.$0()},
$S:1}
P.ak.prototype={
W:function(a,b){var t
P.cu(a,"error",u.K)
t=this.a
if(t.a!==0)throw H.d(P.cL("Future already completed"))
b=P.cv(a)
t.a8(a,b)},
V:function(a){return this.W(a,null)}}
P.aj.prototype={}
P.al.prototype={
am:function(a){if((this.c&15)!==6)return!0
return this.b.b.H(u.m.a(this.d),a.a,u.y,u.K)},
aj:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.Q.b(t))return q.a(p.aq(t,a.a,a.b,s,r,u.l))
else return q.a(p.H(u.v.a(t),a.a,s,r))}}
P.v.prototype={
Y:function(a,b,c){var t,s,r,q=this.$ti
q.n(c).i("1/(2)").a(a)
t=$.j
if(t!==C.c){c.i("@<0/>").n(q.c).i("1(2)").a(a)
if(b!=null)b=P.eH(b,t)}s=new P.v($.j,c.i("v<0>"))
r=b==null?1:3
this.M(new P.al(s,r,a,b,q.i("@<1>").n(c).i("al<1,2>")))
return s},
I:function(a,b){return this.Y(a,null,b)},
M:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.M(a)
return}s.a=r
s.c=t.c}P.av(null,null,s.b,u.M.a(new P.bE(s,a)))}},
R:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.R(a)
return}n.a=t
n.c=o.c}m.a=n.w(a)
P.av(null,null,n.b,u.M.a(new P.bK(m,n)))}},
v:function(){var t=u.F.a(this.c)
this.c=null
return this.w(t)},
w:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
O:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("a8<1>").b(a))if(r.b(a))P.cQ(a,s)
else P.e8(a,s)
else{t=s.v()
r.c.a(a)
s.a=4
s.c=a
P.Z(s,t)}},
C:function(a,b){var t,s,r=this
u.l.a(b)
t=r.v()
s=P.bj(a,b)
r.a=8
r.c=s
P.Z(r,t)},
a7:function(a){var t=this.$ti
t.i("1/").a(a)
this.a9(t.c.a(a))},
a9:function(a){var t=this
t.$ti.c.a(a)
t.a=1
P.av(null,null,t.b,u.M.a(new P.bG(t,a)))},
a8:function(a,b){this.a=1
P.av(null,null,this.b,u.M.a(new P.bF(this,a,b)))},
$ia8:1}
P.bE.prototype={
$0:function(){P.Z(this.a,this.b)},
$S:0}
P.bK.prototype={
$0:function(){P.Z(this.b,this.a.a)},
$S:0}
P.bH.prototype={
$1:function(a){var t=this.a
t.a=0
t.O(a)},
$S:3}
P.bI.prototype={
$2:function(a,b){this.a.C(a,u.l.a(b))},
$S:9}
P.bJ.prototype={
$0:function(){this.a.C(this.b,this.c)},
$S:0}
P.bG.prototype={
$0:function(){var t=this.a,s=t.$ti.c.a(this.b),r=t.v()
t.a=4
t.c=s
P.Z(t,r)},
$S:0}
P.bF.prototype={
$0:function(){this.a.C(this.b,this.c)},
$S:0}
P.bN.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.X(u.O.a(r.d),u.z)}catch(q){t=H.aC(q)
s=H.a3(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.bj(t,s)
p.b=!0
return}if(m instanceof P.v&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.I(new P.bO(o),u.z)
r.b=!1}},
$S:1}
P.bO.prototype={
$1:function(a){return this.a},
$S:10}
P.bM.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.H(p.i("2/(1)").a(q.d),n,p.i("2/"),o)}catch(m){t=H.aC(m)
s=H.a3(m)
r=this.a
r.c=P.bj(t,s)
r.b=!0}},
$S:1}
P.bL.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.eV(q.a.am(t))&&q.a.e!=null){q.c=q.a.aj(t)
q.b=!1}}catch(p){s=H.aC(p)
r=H.a3(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.bj(s,r)
m.b=!0}},
$S:1}
P.b3.prototype={}
P.aW.prototype={
gl:function(a){var t,s,r=this,q={},p=new P.v($.j,u.a)
q.a=0
t=r.$ti
s=t.i("~(1)?").a(new P.bt(q,r))
u.Y.a(new P.bu(q,p))
W.cf(r.a,r.b,s,!1,t.c)
return p}}
P.bt.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("l(1)")}}
P.bu.prototype={
$0:function(){this.b.O(this.a.a)},
$S:0}
P.aX.prototype={}
P.a6.prototype={
h:function(a){return H.e(this.a)},
$if:1,
gA:function(){return this.b}}
P.aq.prototype={$icO:1}
P.bX.prototype={
$0:function(){var t=H.d(this.a)
t.stack=J.a4(this.b)
throw t},
$S:0}
P.b7.prototype={
ar:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.c===$.j){a.$0()
return}P.d5(q,q,this,a,u.H)}catch(r){t=H.aC(r)
s=H.a3(r)
P.bW(q,q,this,t,u.l.a(s))}},
as:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.c===$.j){a.$1(b)
return}P.d6(q,q,this,a,b,u.H,c)}catch(r){t=H.aC(r)
s=H.a3(r)
P.bW(q,q,this,t,u.l.a(s))}},
ad:function(a,b){return new P.bR(this,b.i("0()").a(a),b)},
T:function(a){return new P.bQ(this,u.M.a(a))},
ae:function(a,b){return new P.bS(this,b.i("~(0)").a(a),b)},
X:function(a,b){b.i("0()").a(a)
if($.j===C.c)return a.$0()
return P.d5(null,null,this,a,b)},
H:function(a,b,c,d){c.i("@<0>").n(d).i("1(2)").a(a)
d.a(b)
if($.j===C.c)return a.$1(b)
return P.d6(null,null,this,a,b,c,d)},
aq:function(a,b,c,d,e,f){d.i("@<0>").n(e).n(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.j===C.c)return a.$2(b,c)
return P.eI(null,null,this,a,b,c,d,e,f)}}
P.bR.prototype={
$0:function(){return this.a.X(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.bQ.prototype={
$0:function(){return this.a.ar(this.b)},
$S:1}
P.bS.prototype={
$1:function(a){var t=this.c
return this.a.as(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.f.prototype={
gA:function(){return H.a3(this.$thrownJsError)}}
P.a5.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.aI(t)
return"Assertion failed"}}
P.aZ.prototype={}
P.aR.prototype={
h:function(a){return"Throw of null."}}
P.A.prototype={
gE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gD:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gE()+p+n
if(!r.a)return m
t=r.gD()
s=P.aI(r.b)
return m+t+": "+s}}
P.X.prototype={
gE:function(){return"RangeError"},
gD:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.e(r):""
else if(r==null)t=": Not greater than or equal to "+H.e(s)
else if(r>s)t=": Not in inclusive range "+H.e(s)+".."+H.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.e(s)
return t}}
P.aK.prototype={
gE:function(){return"RangeError"},
gD:function(){var t,s=H.bc(this.b)
if(typeof s!=="number")return s.av()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gl:function(a){return this.f}}
P.b1.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b_.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ah.prototype={
h:function(a){return"Bad state: "+this.a}}
P.aG.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aI(t)+"."}}
P.ag.prototype={
h:function(a){return"Stack Overflow"},
gA:function(){return null},
$if:1}
P.aH.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.bD.prototype={
h:function(a){return"Exception: "+this.a}}
P.l.prototype={
h:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
h:function(a){return"Instance of '"+H.e(H.br(this))+"'"},
toString:function(){return this.h(this)}}
P.b8.prototype={
h:function(a){return""},
$iN:1}
P.ai.prototype={
gl:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.aD.prototype={
h:function(a){return String(a)}}
W.aE.prototype={
h:function(a){return String(a)}}
W.J.prototype={
sak:function(a,b){a.height=b},
J:function(a,b){return a.getContext(b)},
$iJ:1}
W.R.prototype={
st:function(a,b){a.fillStyle=b},
sB:function(a,b){a.strokeStyle=b},
ai:function(a,b,c,d){a.fillText(b,c,d)},
$iR:1}
W.B.prototype={
gl:function(a){return a.length}}
W.bm.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.m.prototype={
a5:function(a,b,c,d){return a.addEventListener(b,H.bd(u.D.a(c),1),!1)},
$im:1}
W.aJ.prototype={
gl:function(a){return a.length}}
W.y.prototype={
ao:function(a,b,c,d){return a.open(b,c,!0)},
$iy:1}
W.bn.prototype={
$1:function(a){var t=u.r.a(a).responseText
t.toString
return t},
$S:11}
W.bo.prototype={
$1:function(a){var t,s,r,q,p
u.p.a(a)
t=this.a
s=t.status
s.toString
r=s>=200&&s<300
q=s>307&&s<400
s=r||s===0||s===304||q
p=this.b
if(s){s=p.$ti
s.i("1/?").a(t)
p=p.a
if(p.a!==0)H.bf(P.cL("Future already completed"))
p.a7(s.i("1/").a(t))}else p.V(a)},
$S:12}
W.a9.prototype={}
W.p.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.a1(a):t},
sat:function(a,b){a.textContent=b}}
W.x.prototype={$ix:1}
W.aU.prototype={
gl:function(a){return a.length}}
W.ca.prototype={}
W.bB.prototype={}
W.b5.prototype={}
W.bC.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:13}
P.bP.prototype={
an:function(a){if(a<=0||a>4294967296)throw H.d(P.e0("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
E.bk.prototype={
a6:function(a){var t=this
t.r.a+=H.e(a)
t.cx=!1
t.Q=!0
t.aa()},
aa:function(){var t=this
t.dy=t.cy=t.dx=t.db=0
t.fr.a=""},
S:function(){var t=this,s=t.fr.a,r=s.charCodeAt(0)==0?s:s
if(0>=r.length)return H.i(r,0)
t.a6(r[0])
t.z=C.b.L(r,1)
return t.F()},
F:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.z
if(a1!=null){t=a0.y
s=a0.x
a0.x=a1
a0.y=0
a0.z=null
r=a0.F()
q=a0.y
if(q<a1.length)a0.z=C.b.L(a1,q)
a0.y=t
a0.x=s
if(r.a!==C.e)return r}for(a1=a0.a,q=a0.d,p=a0.c,o=a0.b;n=a0.y,m=a0.x,l=m.length,n<l;){if(n<0)return H.i(m,n)
k=m[n];++n
a0.y=n
m=a0.dy
l=m>0
j=l||a0.cy>0||a0.db>0||a0.dx>0
i=a0.ch
h=i&&!a0.cx
if(!i)g=!j||a0.db>0
else g=!1
if(i)f=!j||a0.dx>0
else f=!1
i=!h
if(i)e=!j||a0.cy>0
else e=!1
if(i)d=!j||l
else d=!1
if(g){l=a0.db
if(l>=o.length)return H.i(o,l)
l=k===o[l]}else l=!1
if(l){l=++a0.db
c=!0}else{l=a0.db=0
c=!1}if(f){i=a0.dx
if(i>=p.length)return H.i(p,i)
i=k===p[i]}else i=!1
if(i){i=++a0.dx
c=!0}else{a0.dx=0
i=0}if(d){if(m>=q.length)return H.i(q,m)
b=k===q[m]}else b=!1
if(b){++m
a0.dy=m
c=!0}else{a0.dy=0
m=0}if(e){b=a0.cy
if(b>=a1.length)return H.i(a1,b)
b=k===a1[b]}else b=!1
if(b){b=++a0.cy
c=!0}else{a0.cy=0
b=0}if(c)a0.fr.a+=k
if(j&&!c){a0.y=n-1
r=a0.S()
if(r.a!==C.e)return r
continue}if(!c){a0.r.a+=k
a0.cx=!1
a0.Q=!0
a0.dy=a0.cy=a0.dx=a0.db=0
a0.fr.a=""
continue}if(l===o.length){a0.dy=a0.cy=a0.dx=a0.db=0
a0.fr.a=""
if(!a0.Q)a0.ch=a0.Q=!0
n=0
m=0
l=0}else{l=b
n=m
m=i}if(m===p.length){a0.dy=a0.cy=a0.dx=a0.db=0
a0.fr.a=""
if(a0.cx){a0.r.a+=H.e(p)
a0.cx=!1
a0.Q=!0
a0.dy=a0.cy=a0.dx=a0.db=0
a0.fr.a=""}else a0.cx=!0
n=0
m=0}else{m=n
n=l}if(m===q.length){a0.dy=a0.cy=a0.dx=a0.db=0
a0.fr.a=""
a0.ch=a0.Q=!1
a=a0.cx
a0.cx=!1
return new E.ae(C.m,a)}if(n===a1.length){a0.dy=a0.cy=a0.dx=a0.db=0
a0.fr.a=""
a0.ch=a0.Q=!1
a=a0.cx
a0.cx=!1
return new E.ae(C.z,a)}}return new E.ae(C.e,a0.cx)},
ah:function(a,b,c){var t,s,r,q,p,o=this,n=o.x
if(n==null){o.x=a==null?"":a
o.y=0}for(t=null;!0;){t=o.F()
s=t.a
while(!0){if(s===C.e)n=o.dy>0||o.cy>0||o.db>0||o.dx>0
else n=!1
if(!n)break
t=o.S()
s=t.a}n=o.r
r=n.a
q=r.charCodeAt(0)==0?r:r
n.a=""
n=s===C.e
if(n&&!t.b&&q.length===0&&b.length===0)break
if(t.b)C.a.p(b,q)
else{p=C.b.Z(q)
r=H.e_(p,null)
if(r==null)r=H.dZ(p)
C.a.p(b,r==null?q:r)}if(s===C.m)break
if(n)break}return t},
ag:function(a){var t,s,r=H.I([],u.t)
for(;!0;){t=[]
s=this.ah(a,t,!0)
if(t.length!==0)C.a.p(r,t)
if(s.a===C.e)break}return r}}
E.af.prototype={
h:function(a){return this.a}}
E.ae.prototype={}
U.c0.prototype={
$4:function(a,b,c,d){var t=$.bg()
t.beginPath()
t.rect(a,b,c,d)
C.d.st(t,"#001fd2")
t.fill()
t.closePath()},
$S:14}
U.c6.prototype={
$1:function(a){return 10+C.v.an(990)},
$S:15};(function aliases(){var t=J.t.prototype
t.a1=t.h
t=J.M.prototype
t.a2=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers.installStaticTearOff
t(P,"eS","e5",2)
t(P,"eT","e6",2)
t(P,"eU","e7",2)
s(P,"d9","eL",1)
r(P.ak.prototype,"gaf",0,1,null,["$2","$1"],["W","V"],8,0)
q(P,"fd",2,null,["$1$2","$2"],["dh",function(a,b){return P.dh(a,b,u.o)}],16,0)
t(U,"fb","ff",17)})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.h,null)
s(P.h,[H.cc,J.t,J.aF,H.w,H.bv,P.f,H.bq,H.am,H.z,H.b6,H.b9,P.bT,P.ak,P.al,P.v,P.b3,P.aW,P.aX,P.a6,P.aq,P.ag,P.bD,P.l,P.b8,P.ai,W.ca,P.bP,E.bk,E.af,E.ae])
s(J.t,[J.aM,J.ac,J.M,J.n,J.ad,J.S,W.m,W.R,W.bm,W.a])
s(J.M,[J.aS,J.Y,J.L])
t(J.bp,J.n)
s(J.ad,[J.ab,J.aN])
s(H.w,[H.aL,H.aY,H.c1,H.c2,H.c3,P.by,P.bx,P.bz,P.bA,P.bU,P.bE,P.bK,P.bH,P.bI,P.bJ,P.bG,P.bF,P.bN,P.bO,P.bM,P.bL,P.bt,P.bu,P.bX,P.bR,P.bQ,P.bS,W.bn,W.bo,W.bC,U.c0,U.c6])
t(H.aa,H.aL)
s(P.f,[P.aZ,H.aO,H.b0,H.aT,P.a5,H.b4,P.aR,P.A,P.b1,P.b_,P.ah,P.aG,P.aH])
t(H.aQ,P.aZ)
s(H.aY,[H.aV,H.a7])
t(H.b2,P.a5)
t(H.an,H.b4)
t(P.aj,P.ak)
t(P.b7,P.aq)
s(P.A,[P.X,P.aK])
s(W.m,[W.p,W.a9])
s(W.p,[W.b,W.B])
t(W.c,W.b)
s(W.c,[W.aD,W.aE,W.J,W.aJ,W.aU])
t(W.y,W.a9)
t(W.x,W.a)
t(W.bB,P.aW)
t(W.b5,P.aX)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{G:"int",eZ:"double",T:"num",u:"String",bY:"bool",l:"Null",aP:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["l()","~()","~(~())","l(@)","@(@)","@(@,u)","@(u)","l(~())","~(h[N?])","l(h,N)","v<@>(@)","u(y)","l(x)","@(a)","~(@,@,@,@)","G*(G*)","0^(0^,0^)<T>","~(u*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.el(v.typeUniverse,JSON.parse('{"L":"M","aS":"M","Y":"M","fk":"a","fp":"a","fj":"b","fq":"b","fu":"b","fH":"x","fl":"c","ft":"c","fr":"p","fo":"p","fm":"B","fv":"B","aM":{"bY":[]},"ac":{"l":[]},"M":{"K":[]},"n":{"aP":["1"],"cb":["1"]},"bp":{"n":["1"],"aP":["1"],"cb":["1"]},"ad":{"T":[]},"ab":{"G":[],"T":[]},"aN":{"T":[]},"S":{"u":[]},"aL":{"w":[],"K":[]},"aa":{"w":[],"K":[]},"aQ":{"f":[]},"aO":{"f":[]},"b0":{"f":[]},"am":{"N":[]},"w":{"K":[]},"aY":{"w":[],"K":[]},"aV":{"w":[],"K":[]},"a7":{"w":[],"K":[]},"aT":{"f":[]},"b2":{"f":[]},"b4":{"f":[]},"an":{"f":[]},"aj":{"ak":["1"]},"v":{"a8":["1"]},"a6":{"f":[]},"aq":{"cO":[]},"b7":{"aq":[],"cO":[]},"G":{"T":[]},"aP":{"cb":["1"]},"a5":{"f":[]},"aZ":{"f":[]},"aR":{"f":[]},"A":{"f":[]},"X":{"f":[]},"aK":{"f":[]},"b1":{"f":[]},"b_":{"f":[]},"ah":{"f":[]},"aG":{"f":[]},"ag":{"f":[]},"aH":{"f":[]},"b8":{"N":[]},"c":{"m":[]},"aD":{"m":[]},"aE":{"m":[]},"J":{"m":[]},"B":{"m":[]},"b":{"m":[]},"aJ":{"m":[]},"y":{"m":[]},"a9":{"m":[]},"p":{"m":[]},"x":{"a":[]},"aU":{"m":[]},"bB":{"aW":["1"]}}'))
H.ek(v.typeUniverse,JSON.parse('{"aX":1}'))
0
var u=(function rtii(){var t=H.az
return{n:t("a6"),C:t("f"),B:t("a"),Z:t("K"),d:t("a8<@>"),r:t("y"),s:t("n<u>"),b:t("n<@>"),t:t("n<aP<@>*>"),i:t("n<u*>"),T:t("ac"),g:t("L"),P:t("l"),K:t("h"),p:t("x"),l:t("N"),N:t("u"),G:t("Y"),E:t("aj<y>"),U:t("v<y>"),c:t("v<@>"),a:t("v<G>"),y:t("bY"),m:t("bY(h)"),W:t("eZ"),z:t("@"),O:t("@()"),v:t("@(h)"),Q:t("@(h,N)"),S:t("G"),A:t("0&*"),_:t("h*"),V:t("x*"),R:t("u*"),e:t("G*"),f:t("a8<l>?"),X:t("h?"),F:t("al<@,@>?"),D:t("@(a)?"),Y:t("~()?"),u:t("~(x*)?"),o:t("T"),H:t("~"),M:t("~()")}})();(function constants(){C.f=W.J.prototype
C.d=W.R.prototype
C.l=W.y.prototype
C.x=J.t.prototype
C.a=J.n.prototype
C.h=J.ab.prototype
C.b=J.S.prototype
C.y=J.L.prototype
C.n=J.aS.prototype
C.i=J.Y.prototype
C.j=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.o=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.u=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.p=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.q=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.t=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.r=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.k=function(hooks) { return hooks; }

C.v=new P.bP()
C.c=new P.b7()
C.w=new P.b8()
C.e=new E.af("EndOfString")
C.m=new E.af("Eol")
C.z=new E.af("FieldDelimiter")})();(function staticFields(){$.cR=null
$.D=0
$.cy=null
$.cx=null
$.dc=null
$.d8=null
$.dj=null
$.bZ=null
$.c4=null
$.cp=null
$.a0=null
$.at=null
$.au=null
$.cl=!1
$.j=C.c
$.ax=H.I([],H.az("n<h>"))
$.a2=null})();(function lazyInitializers(){var t=hunkHelpers.lazy,s=hunkHelpers.lazyOld
t($,"fn","dp",function(){return H.f2("_$dart_dartClosure")})
t($,"fw","dq",function(){return H.E(H.bw({
toString:function(){return"$receiver$"}}))})
t($,"fx","dr",function(){return H.E(H.bw({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fy","ds",function(){return H.E(H.bw(null))})
t($,"fz","dt",function(){return H.E(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fC","dw",function(){return H.E(H.bw(void 0))})
t($,"fD","dx",function(){return H.E(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fB","dv",function(){return H.E(H.cM(null))})
t($,"fA","du",function(){return H.E(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"fF","dz",function(){return H.E(H.cM(void 0))})
t($,"fE","dy",function(){return H.E(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"fG","cr",function(){return P.e4()})
s($,"fW","Q",function(){return H.az("J*").a(W.ay().querySelector("#cartesianPlane"))})
s($,"fY","bg",function(){var r=$.Q()
return H.az("R*").a((r&&C.f).J(r,"2d"))})
s($,"fX","r",function(){return H.az("J*").a(W.ay().querySelector("#TimeSeries"))})
s($,"fZ","V",function(){var r=$.r()
return H.az("R*").a((r&&C.f).J(r,"2d"))})
s($,"h3","dD",function(){return W.ay().querySelector("#title")})
s($,"h_","dA",function(){return W.ay().querySelector("#dati")})
s($,"h1","dB",function(){return W.ay().querySelector("#description")})
s($,"h2","dC",function(){return W.ay().querySelector("#descriptionSeries")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.t,MediaError:J.t,NavigatorUserMediaError:J.t,OverconstrainedError:J.t,PositionError:J.t,WebGLRenderingContext:J.t,WebGL2RenderingContext:J.t,SQLError:J.t,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aD,HTMLAreaElement:W.aE,HTMLCanvasElement:W.J,CanvasRenderingContext2D:W.R,CDATASection:W.B,CharacterData:W.B,Comment:W.B,ProcessingInstruction:W.B,Text:W.B,DOMException:W.bm,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,EventTarget:W.m,HTMLFormElement:W.aJ,XMLHttpRequest:W.y,XMLHttpRequestEventTarget:W.a9,Document:W.p,DocumentFragment:W.p,HTMLDocument:W.p,ShadowRoot:W.p,XMLDocument:W.p,Attr:W.p,DocumentType:W.p,Node:W.p,ProgressEvent:W.x,ResourceProgressEvent:W.x,HTMLSelectElement:W.aU})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.dg,[])
else U.dg([])})})()
//# sourceMappingURL=main_vis.dart.js.map
