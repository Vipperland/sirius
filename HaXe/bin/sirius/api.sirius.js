(function (console, $hx_exports, $global) { "use strict";
$hx_exports.utils = $hx_exports.utils || {};
$hx_exports.sru = $hx_exports.sru || {};
$hx_exports.sru.utils = $hx_exports.sru.utils || {};
;$hx_exports.sru.tools = $hx_exports.sru.tools || {};
;$hx_exports.sru.seo = $hx_exports.sru.seo || {};
;$hx_exports.sru.math = $hx_exports.sru.math || {};
;$hx_exports.sru.data = $hx_exports.sru.data || {};
;$hx_exports.sru.css = $hx_exports.sru.css || {};
;$hx_exports.sru.signals = $hx_exports.sru.signals || {};
;$hx_exports.sru.modules = $hx_exports.sru.modules || {};
;$hx_exports.sru.events = $hx_exports.sru.events || {};
;$hx_exports.sru.dom = $hx_exports.sru.dom || {};
;$hx_exports.sru.flow = $hx_exports.sru.flow || {};
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var DateTools = function() { };
DateTools.__name__ = ["DateTools"];
DateTools.delta = function(d,t) {
	var t1 = d.getTime() + t;
	var d1 = new Date();
	d1.setTime(t1);
	return d1;
};
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.__name__ = ["Lambda"];
Lambda.exists = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
};
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
};
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
};
var List = function() {
	this.length = 0;
};
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
_$List_ListIterator.__name__ = ["_List","ListIterator"];
_$List_ListIterator.prototype = {
	hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		this.val = this.head[0];
		this.head = this.head[1];
		return this.val;
	}
	,__class__: _$List_ListIterator
};
Math.__name__ = ["Math"];
var Reflect = function() { };
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var ValueType = { __ename__ : true, __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null; else return js_Boot.getClass(o);
};
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js_Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
Type.enumIndex = function(e) {
	return e[1];
};
var _$UInt_UInt_$Impl_$ = {};
_$UInt_UInt_$Impl_$.__name__ = ["_UInt","UInt_Impl_"];
_$UInt_UInt_$Impl_$.gt = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) return aNeg; else return a > b;
};
_$UInt_UInt_$Impl_$.gte = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) return aNeg; else return a >= b;
};
_$UInt_UInt_$Impl_$.toFloat = function(this1) {
	var $int = this1;
	if($int < 0) return 4294967296.0 + $int; else return $int + 0.0;
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = ["haxe","IMap"];
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = ["haxe","_Int64","___Int64"];
haxe__$Int64__$_$_$Int64.prototype = {
	__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Log = function() { };
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
haxe_Log.clear = function() {
	js_Boot.__clear_trace();
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = ["haxe","Timer"];
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
haxe_io_Bytes.ofString = function(s) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_crypto_Base64 = function() { };
haxe_crypto_Base64.__name__ = ["haxe","crypto","Base64"];
haxe_crypto_Base64.encode = function(bytes,complement) {
	if(complement == null) complement = true;
	var str = new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).encodeBytes(bytes).toString();
	if(complement) {
		var _g = bytes.length % 3;
		switch(_g) {
		case 1:
			str += "==";
			break;
		case 2:
			str += "=";
			break;
		default:
		}
	}
	return str;
};
haxe_crypto_Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).decodeBytes(haxe_io_Bytes.ofString(str));
};
var haxe_crypto_BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw new js__$Boot_HaxeError("BaseCode : base length must be a power of two.");
	this.base = base;
	this.nbits = nbits;
};
haxe_crypto_BaseCode.__name__ = ["haxe","crypto","BaseCode"];
haxe_crypto_BaseCode.prototype = {
	encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = haxe_io_Bytes.alloc(size + (b.length * 8 % nbits == 0?0:1));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.get(pin++);
			}
			curbits -= nbits;
			out.set(pout++,base.b[buf >> curbits & mask]);
		}
		if(curbits > 0) out.set(pout++,base.b[buf << nbits - curbits & mask]);
		return out;
	}
	,initTable: function() {
		var tbl = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = haxe_io_Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw new js__$Boot_HaxeError("BaseCode : invalid encoded char");
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe_crypto_BaseCode
};
var haxe_crypto_Md5 = function() {
};
haxe_crypto_Md5.__name__ = ["haxe","crypto","Md5"];
haxe_crypto_Md5.encode = function(s) {
	var m = new haxe_crypto_Md5();
	var h = m.doEncode(haxe_crypto_Md5.str2blks(s));
	return m.hex(h);
};
haxe_crypto_Md5.str2blks = function(str) {
	var nblk = (str.length + 8 >> 6) + 1;
	var blks = [];
	var blksSize = nblk * 16;
	var _g = 0;
	while(_g < blksSize) {
		var i1 = _g++;
		blks[i1] = 0;
	}
	var i = 0;
	while(i < str.length) {
		blks[i >> 2] |= HxOverrides.cca(str,i) << (str.length * 8 + i) % 4 * 8;
		i++;
	}
	blks[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
	var l = str.length * 8;
	var k = nblk * 16 - 2;
	blks[k] = l & 255;
	blks[k] |= (l >>> 8 & 255) << 8;
	blks[k] |= (l >>> 16 & 255) << 16;
	blks[k] |= (l >>> 24 & 255) << 24;
	return blks;
};
haxe_crypto_Md5.prototype = {
	bitOR: function(a,b) {
		var lsb = a & 1 | b & 1;
		var msb31 = a >>> 1 | b >>> 1;
		return msb31 << 1 | lsb;
	}
	,bitXOR: function(a,b) {
		var lsb = a & 1 ^ b & 1;
		var msb31 = a >>> 1 ^ b >>> 1;
		return msb31 << 1 | lsb;
	}
	,bitAND: function(a,b) {
		var lsb = a & 1 & (b & 1);
		var msb31 = a >>> 1 & b >>> 1;
		return msb31 << 1 | lsb;
	}
	,addme: function(x,y) {
		var lsw = (x & 65535) + (y & 65535);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return msw << 16 | lsw & 65535;
	}
	,hex: function(a) {
		var str = "";
		var hex_chr = "0123456789abcdef";
		var _g = 0;
		while(_g < a.length) {
			var num = a[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < 4) {
				var j = _g1++;
				str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
			}
		}
		return str;
	}
	,rol: function(num,cnt) {
		return num << cnt | num >>> 32 - cnt;
	}
	,cmn: function(q,a,b,x,s,t) {
		return this.addme(this.rol(this.addme(this.addme(a,q),this.addme(x,t)),s),b);
	}
	,ff: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitOR(this.bitAND(b,c),this.bitAND(~b,d)),a,b,x,s,t);
	}
	,gg: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitOR(this.bitAND(b,d),this.bitAND(c,~d)),a,b,x,s,t);
	}
	,hh: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitXOR(this.bitXOR(b,c),d),a,b,x,s,t);
	}
	,ii: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitXOR(c,this.bitOR(b,~d)),a,b,x,s,t);
	}
	,doEncode: function(x) {
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		var step;
		var i = 0;
		while(i < x.length) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;
			step = 0;
			a = this.ff(a,b,c,d,x[i],7,-680876936);
			d = this.ff(d,a,b,c,x[i + 1],12,-389564586);
			c = this.ff(c,d,a,b,x[i + 2],17,606105819);
			b = this.ff(b,c,d,a,x[i + 3],22,-1044525330);
			a = this.ff(a,b,c,d,x[i + 4],7,-176418897);
			d = this.ff(d,a,b,c,x[i + 5],12,1200080426);
			c = this.ff(c,d,a,b,x[i + 6],17,-1473231341);
			b = this.ff(b,c,d,a,x[i + 7],22,-45705983);
			a = this.ff(a,b,c,d,x[i + 8],7,1770035416);
			d = this.ff(d,a,b,c,x[i + 9],12,-1958414417);
			c = this.ff(c,d,a,b,x[i + 10],17,-42063);
			b = this.ff(b,c,d,a,x[i + 11],22,-1990404162);
			a = this.ff(a,b,c,d,x[i + 12],7,1804603682);
			d = this.ff(d,a,b,c,x[i + 13],12,-40341101);
			c = this.ff(c,d,a,b,x[i + 14],17,-1502002290);
			b = this.ff(b,c,d,a,x[i + 15],22,1236535329);
			a = this.gg(a,b,c,d,x[i + 1],5,-165796510);
			d = this.gg(d,a,b,c,x[i + 6],9,-1069501632);
			c = this.gg(c,d,a,b,x[i + 11],14,643717713);
			b = this.gg(b,c,d,a,x[i],20,-373897302);
			a = this.gg(a,b,c,d,x[i + 5],5,-701558691);
			d = this.gg(d,a,b,c,x[i + 10],9,38016083);
			c = this.gg(c,d,a,b,x[i + 15],14,-660478335);
			b = this.gg(b,c,d,a,x[i + 4],20,-405537848);
			a = this.gg(a,b,c,d,x[i + 9],5,568446438);
			d = this.gg(d,a,b,c,x[i + 14],9,-1019803690);
			c = this.gg(c,d,a,b,x[i + 3],14,-187363961);
			b = this.gg(b,c,d,a,x[i + 8],20,1163531501);
			a = this.gg(a,b,c,d,x[i + 13],5,-1444681467);
			d = this.gg(d,a,b,c,x[i + 2],9,-51403784);
			c = this.gg(c,d,a,b,x[i + 7],14,1735328473);
			b = this.gg(b,c,d,a,x[i + 12],20,-1926607734);
			a = this.hh(a,b,c,d,x[i + 5],4,-378558);
			d = this.hh(d,a,b,c,x[i + 8],11,-2022574463);
			c = this.hh(c,d,a,b,x[i + 11],16,1839030562);
			b = this.hh(b,c,d,a,x[i + 14],23,-35309556);
			a = this.hh(a,b,c,d,x[i + 1],4,-1530992060);
			d = this.hh(d,a,b,c,x[i + 4],11,1272893353);
			c = this.hh(c,d,a,b,x[i + 7],16,-155497632);
			b = this.hh(b,c,d,a,x[i + 10],23,-1094730640);
			a = this.hh(a,b,c,d,x[i + 13],4,681279174);
			d = this.hh(d,a,b,c,x[i],11,-358537222);
			c = this.hh(c,d,a,b,x[i + 3],16,-722521979);
			b = this.hh(b,c,d,a,x[i + 6],23,76029189);
			a = this.hh(a,b,c,d,x[i + 9],4,-640364487);
			d = this.hh(d,a,b,c,x[i + 12],11,-421815835);
			c = this.hh(c,d,a,b,x[i + 15],16,530742520);
			b = this.hh(b,c,d,a,x[i + 2],23,-995338651);
			a = this.ii(a,b,c,d,x[i],6,-198630844);
			d = this.ii(d,a,b,c,x[i + 7],10,1126891415);
			c = this.ii(c,d,a,b,x[i + 14],15,-1416354905);
			b = this.ii(b,c,d,a,x[i + 5],21,-57434055);
			a = this.ii(a,b,c,d,x[i + 12],6,1700485571);
			d = this.ii(d,a,b,c,x[i + 3],10,-1894986606);
			c = this.ii(c,d,a,b,x[i + 10],15,-1051523);
			b = this.ii(b,c,d,a,x[i + 1],21,-2054922799);
			a = this.ii(a,b,c,d,x[i + 8],6,1873313359);
			d = this.ii(d,a,b,c,x[i + 15],10,-30611744);
			c = this.ii(c,d,a,b,x[i + 6],15,-1560198380);
			b = this.ii(b,c,d,a,x[i + 13],21,1309151649);
			a = this.ii(a,b,c,d,x[i + 4],6,-145523070);
			d = this.ii(d,a,b,c,x[i + 11],10,-1120210379);
			c = this.ii(c,d,a,b,x[i + 2],15,718787259);
			b = this.ii(b,c,d,a,x[i + 9],21,-343485551);
			a = this.addme(a,olda);
			b = this.addme(b,oldb);
			c = this.addme(c,oldc);
			d = this.addme(d,oldd);
			i += 16;
		}
		return [a,b,c,d];
	}
	,__class__: haxe_crypto_Md5
};
var haxe_ds_ArraySort = function() { };
haxe_ds_ArraySort.__name__ = ["haxe","ds","ArraySort"];
haxe_ds_ArraySort.sort = function(a,cmp) {
	haxe_ds_ArraySort.rec(a,cmp,0,a.length);
};
haxe_ds_ArraySort.rec = function(a,cmp,from,to) {
	var middle = from + to >> 1;
	if(to - from < 12) {
		if(to <= from) return;
		var _g = from + 1;
		while(_g < to) {
			var i = _g++;
			var j = i;
			while(j > from) {
				if(cmp(a[j],a[j - 1]) < 0) haxe_ds_ArraySort.swap(a,j - 1,j); else break;
				j--;
			}
		}
		return;
	}
	haxe_ds_ArraySort.rec(a,cmp,from,middle);
	haxe_ds_ArraySort.rec(a,cmp,middle,to);
	haxe_ds_ArraySort.doMerge(a,cmp,from,middle,to,middle - from,to - middle);
};
haxe_ds_ArraySort.doMerge = function(a,cmp,from,pivot,to,len1,len2) {
	var first_cut;
	var second_cut;
	var len11;
	var len22;
	var new_mid;
	if(len1 == 0 || len2 == 0) return;
	if(len1 + len2 == 2) {
		if(cmp(a[pivot],a[from]) < 0) haxe_ds_ArraySort.swap(a,pivot,from);
		return;
	}
	if(len1 > len2) {
		len11 = len1 >> 1;
		first_cut = from + len11;
		second_cut = haxe_ds_ArraySort.lower(a,cmp,pivot,to,first_cut);
		len22 = second_cut - pivot;
	} else {
		len22 = len2 >> 1;
		second_cut = pivot + len22;
		first_cut = haxe_ds_ArraySort.upper(a,cmp,from,pivot,second_cut);
		len11 = first_cut - from;
	}
	haxe_ds_ArraySort.rotate(a,cmp,first_cut,pivot,second_cut);
	new_mid = first_cut + len22;
	haxe_ds_ArraySort.doMerge(a,cmp,from,first_cut,new_mid,len11,len22);
	haxe_ds_ArraySort.doMerge(a,cmp,new_mid,second_cut,to,len1 - len11,len2 - len22);
};
haxe_ds_ArraySort.rotate = function(a,cmp,from,mid,to) {
	var n;
	if(from == mid || mid == to) return;
	n = haxe_ds_ArraySort.gcd(to - from,mid - from);
	while(n-- != 0) {
		var val = a[from + n];
		var shift = mid - from;
		var p1 = from + n;
		var p2 = from + n + shift;
		while(p2 != from + n) {
			a[p1] = a[p2];
			p1 = p2;
			if(to - p2 > shift) p2 += shift; else p2 = from + (shift - (to - p2));
		}
		a[p1] = val;
	}
};
haxe_ds_ArraySort.gcd = function(m,n) {
	while(n != 0) {
		var t = m % n;
		m = n;
		n = t;
	}
	return m;
};
haxe_ds_ArraySort.upper = function(a,cmp,from,to,val) {
	var len = to - from;
	var half;
	var mid;
	while(len > 0) {
		half = len >> 1;
		mid = from + half;
		if(cmp(a[val],a[mid]) < 0) len = half; else {
			from = mid + 1;
			len = len - half - 1;
		}
	}
	return from;
};
haxe_ds_ArraySort.lower = function(a,cmp,from,to,val) {
	var len = to - from;
	var half;
	var mid;
	while(len > 0) {
		half = len >> 1;
		mid = from + half;
		if(cmp(a[mid],a[val]) < 0) {
			from = mid + 1;
			len = len - half - 1;
		} else len = half;
	}
	return from;
};
haxe_ds_ArraySort.swap = function(a,i,j) {
	var tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;
};
var haxe_ds_Either = { __ename__ : true, __constructs__ : ["Left","Right"] };
haxe_ds_Either.Left = function(v) { var $x = ["Left",0,v]; $x.__enum__ = haxe_ds_Either; $x.toString = $estr; return $x; };
haxe_ds_Either.Right = function(v) { var $x = ["Right",1,v]; $x.__enum__ = haxe_ds_Either; $x.toString = $estr; return $x; };
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Error = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var haxe_io_FPHelper = function() { };
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var sign = 1 - (i >>> 31 << 1);
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) return 0.0;
	return sign * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) return 0;
	var af;
	if(f < 0) af = -f; else af = f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) exp = -127; else if(exp > 128) exp = 128;
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608) & 8388607;
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
haxe_io_FPHelper.i64ToDouble = function(low,high) {
	var sign = 1 - (high >>> 31 << 1);
	var exp = (high >> 20 & 2047) - 1023;
	var sig = (high & 1048575) * 4294967296. + (low >>> 31) * 2147483648. + (low & 2147483647);
	if(sig == 0 && exp == -1023) return 0.0;
	return sign * (1.0 + Math.pow(2,-52) * sig) * Math.pow(2,exp);
};
haxe_io_FPHelper.doubleToI64 = function(v) {
	var i64 = haxe_io_FPHelper.i64tmp;
	if(v == 0) {
		i64.low = 0;
		i64.high = 0;
	} else {
		var av;
		if(v < 0) av = -v; else av = v;
		var exp = Math.floor(Math.log(av) / 0.6931471805599453);
		var sig;
		var v1 = (av / Math.pow(2,exp) - 1) * 4503599627370496.;
		sig = Math.round(v1);
		var sig_l = sig | 0;
		var sig_h = sig / 4294967296.0 | 0;
		i64.low = sig_l;
		i64.high = (v < 0?-2147483648:0) | exp + 1023 << 20 | sig_h;
	}
	return i64;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_Browser = function() { };
js_Browser.__name__ = ["js","Browser"];
js_Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	if(typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	throw new js__$Boot_HaxeError("Unable to create XMLHttpRequest object.");
};
var js_Cookie = function() { };
js_Cookie.__name__ = ["js","Cookie"];
js_Cookie.set = function(name,value,expireDelay,path,domain) {
	var s = name + "=" + encodeURIComponent(value);
	if(expireDelay != null) {
		var d = DateTools.delta(new Date(),expireDelay * 1000);
		s += ";expires=" + d.toGMTString();
	}
	if(path != null) s += ";path=" + path;
	if(domain != null) s += ";domain=" + domain;
	window.document.cookie = s;
};
js_Cookie.all = function() {
	var h = new haxe_ds_StringMap();
	var a = window.document.cookie.split(";");
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		e = StringTools.ltrim(e);
		var t = e.split("=");
		if(t.length < 2) continue;
		h.set(t[0],decodeURIComponent(t[1].split("+").join(" ")));
	}
	return h;
};
js_Cookie.get = function(name) {
	return js_Cookie.all().get(name);
};
js_Cookie.exists = function(name) {
	return js_Cookie.all().exists(name);
};
js_Cookie.remove = function(name,path,domain) {
	js_Cookie.set(name,"",-10,path,domain);
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_DataView = function(buffer,byteOffset,byteLength) {
	this.buf = buffer;
	if(byteOffset == null) this.offset = 0; else this.offset = byteOffset;
	if(byteLength == null) this.length = buffer.byteLength - this.offset; else this.length = byteLength;
	if(this.offset < 0 || this.length < 0 || this.offset + this.length > buffer.byteLength) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
};
js_html_compat_DataView.__name__ = ["js","html","compat","DataView"];
js_html_compat_DataView.prototype = {
	getInt8: function(byteOffset) {
		var v = this.buf.a[this.offset + byteOffset];
		if(v >= 128) return v - 256; else return v;
	}
	,getUint8: function(byteOffset) {
		return this.buf.a[this.offset + byteOffset];
	}
	,getInt16: function(byteOffset,littleEndian) {
		var v = this.getUint16(byteOffset,littleEndian);
		if(v >= 32768) return v - 65536; else return v;
	}
	,getUint16: function(byteOffset,littleEndian) {
		if(littleEndian) return this.buf.a[this.offset + byteOffset] | this.buf.a[this.offset + byteOffset + 1] << 8; else return this.buf.a[this.offset + byteOffset] << 8 | this.buf.a[this.offset + byteOffset + 1];
	}
	,getInt32: function(byteOffset,littleEndian) {
		var p = this.offset + byteOffset;
		var a = this.buf.a[p++];
		var b = this.buf.a[p++];
		var c = this.buf.a[p++];
		var d = this.buf.a[p++];
		if(littleEndian) return a | b << 8 | c << 16 | d << 24; else return d | c << 8 | b << 16 | a << 24;
	}
	,getUint32: function(byteOffset,littleEndian) {
		var v = this.getInt32(byteOffset,littleEndian);
		if(v < 0) return v + 4294967296.; else return v;
	}
	,getFloat32: function(byteOffset,littleEndian) {
		return haxe_io_FPHelper.i32ToFloat(this.getInt32(byteOffset,littleEndian));
	}
	,getFloat64: function(byteOffset,littleEndian) {
		var a = this.getInt32(byteOffset,littleEndian);
		var b = this.getInt32(byteOffset + 4,littleEndian);
		return haxe_io_FPHelper.i64ToDouble(littleEndian?a:b,littleEndian?b:a);
	}
	,setInt8: function(byteOffset,value) {
		if(value < 0) this.buf.a[byteOffset + this.offset] = value + 128 & 255; else this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setUint8: function(byteOffset,value) {
		this.buf.a[byteOffset + this.offset] = value & 255;
	}
	,setInt16: function(byteOffset,value,littleEndian) {
		this.setUint16(byteOffset,value < 0?value + 65536:value,littleEndian);
	}
	,setUint16: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
		} else {
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p] = value & 255;
		}
	}
	,setInt32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,value,littleEndian);
	}
	,setUint32: function(byteOffset,value,littleEndian) {
		var p = byteOffset + this.offset;
		if(littleEndian) {
			this.buf.a[p++] = value & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >>> 24;
		} else {
			this.buf.a[p++] = value >>> 24;
			this.buf.a[p++] = value >> 16 & 255;
			this.buf.a[p++] = value >> 8 & 255;
			this.buf.a[p++] = value & 255;
		}
	}
	,setFloat32: function(byteOffset,value,littleEndian) {
		this.setUint32(byteOffset,haxe_io_FPHelper.floatToI32(value),littleEndian);
	}
	,setFloat64: function(byteOffset,value,littleEndian) {
		var i64 = haxe_io_FPHelper.doubleToI64(value);
		if(littleEndian) {
			this.setUint32(byteOffset,i64.low);
			this.setUint32(byteOffset,i64.high);
		} else {
			this.setUint32(byteOffset,i64.high);
			this.setUint32(byteOffset,i64.low);
		}
	}
	,__class__: js_html_compat_DataView
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g = 0;
		while(_g < arg1) {
			var i = _g++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) offset = 0;
		if(length == null) length = buffer.byteLength - offset;
		if(offset == 0) arr = buffer.a; else arr = buffer.a.slice(offset,offset + length);
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	var t = this;
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			t[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > t.byteLength) throw new js__$Boot_HaxeError("set() outside of range");
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			t[i1 + offset] = a1[i1];
		}
	} else throw new js__$Boot_HaxeError("TODO");
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var t = this;
	var a = js_html_compat_Uint8Array._new(t.slice(start,end));
	a.byteOffset = start;
	return a;
};
var sirius_flow_IPush = function() { };
sirius_flow_IPush.__name__ = ["sirius","flow","IPush"];
sirius_flow_IPush.prototype = {
	__class__: sirius_flow_IPush
};
var sirius_flow_Push = $hx_exports.sru.flow.Push = function() {
	this._log = [];
};
sirius_flow_Push.__name__ = ["sirius","flow","Push"];
sirius_flow_Push.__interfaces__ = [sirius_flow_IPush];
sirius_flow_Push.prototype = {
	log: function() {
		return this._log;
	}
	,flush: function() {
		this._log = [];
		this._now = [];
	}
	,proc: function(data) {
		this._buffer = { };
		this._now = null;
		this._batchExec(data);
		return this._buffer;
	}
	,_batchExec: function(data) {
		sirius_utils_Dice.Values((data instanceof Array) && data.__enum__ == null?data:data.split("\r"),$bind(this,this._exec));
	}
	,_exec: function(q) {
		var o = null;
		var _g = HxOverrides.substr(q,0,1);
		switch(_g) {
		case "@":
			var _g1 = HxOverrides.substr(q,1,1);
			switch(_g1) {
			case "!":
				this._now = null;
				break;
			default:
				var prop = HxOverrides.substr(q,1,q.length - 1);
				if(!Object.prototype.hasOwnProperty.call(this._buffer,prop)) {
					this._now = [];
					this._buffer[prop] = this._now;
				} else this._now = Reflect.field(this._buffer,prop);
			}
			break;
		default:
			q = q.split("\t").join(" ");
			while(q.indexOf("  ") != -1) q = q.split("  ").join(" ");
			var tk = q.split(" ");
			var method = tk.shift();
			var isMethod = true;
			o = Reflect.getProperty(this,method);
			isMethod = Reflect.isFunction(o);
			if(o != null && isMethod) {
				this._log[this._log.length] = q;
				if(isMethod) {
					o = Reflect.callMethod(this,o,tk);
					if(o != null && typeof(o) == "string") {
						this._batchExec(o);
						o = null;
					}
				} else {
					o = tk[0];
					this[method] = o;
				}
			}
			if(o != null && this._now != null) this._now[this._now.length] = o;
		}
	}
	,__class__: sirius_flow_Push
};
var sirius_dom_IDisplay = function() { };
sirius_dom_IDisplay.__name__ = ["sirius","dom","IDisplay"];
sirius_dom_IDisplay.__interfaces__ = [sirius_flow_IPush];
sirius_dom_IDisplay.prototype = {
	__class__: sirius_dom_IDisplay
};
var sirius_dom_Display = $hx_exports.sru.dom.Display = function(q,t) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("div");
	}
	if(Object.prototype.hasOwnProperty.call(q,"element")) this.element = q.element; else this.element = q;
	if(this.element != window.document) {
		this._getattr = ($_=this.element,$bind($_,$_.getAttribute)) != null;
		this._setattr = ($_=this.element,$bind($_,$_.setAttribute)) != null;
		if(this.hasAttribute("sru-id")) this._uid = this.attribute("sru-id"); else this._uid = this.attribute("sru-id",sirius_dom_Display._CNT++);
		sirius_dom_Display._DATA[this._uid] = this;
	}
	this.events = new sirius_events_Dispatcher(this);
	sirius_flow_Push.call(this);
};
sirius_dom_Display.__name__ = ["sirius","dom","Display"];
sirius_dom_Display.__interfaces__ = [sirius_dom_IDisplay];
sirius_dom_Display.ofKind = function(q) {
	return sirius_tools_Utils.displayFrom(window.document.createElement(q));
};
sirius_dom_Display.fromGC = function(id) {
	if(sirius_dom_Display._DATA[id] != null) return sirius_dom_Display._DATA[id];
	return null;
};
sirius_dom_Display.gc = function(force) {
	if(force) sirius_dom_Display._DATA = []; else sirius_utils_Dice.Values(sirius_dom_Display._DATA,function(v) {
		var id = v.id();
		if(sirius_Sirius.one("[sru-id=" + Std.string(_$UInt_UInt_$Impl_$.toFloat(id)) + "]") == null) {
			sirius_Sirius.log("Disposing object {" + Std.string(_$UInt_UInt_$Impl_$.toFloat(id)) + "}...");
			Reflect.deleteField(sirius_dom_Display._DATA,Std.string(_$UInt_UInt_$Impl_$.toFloat(id)) + "");
		}
	});
};
sirius_dom_Display.getPosition = function(target) {
	var a = sirius_Sirius.document.body.getBounds();
	var b = target.getBoundingClientRect();
	return new sirius_math_Point(b.left - a.left,b.top - a.top);
};
sirius_dom_Display.__super__ = sirius_flow_Push;
sirius_dom_Display.prototype = $extend(sirius_flow_Push.prototype,{
	enablePerspective: function() {
		this.style({ perspective : "1000px", transformOrigin : "50% 50% 0"});
	}
	,dispose: function() {
		if(this._uid != -1 && this.element != null) {
			Reflect.deleteField(sirius_dom_Display._DATA,Std.string(_$UInt_UInt_$Impl_$.toFloat(this._uid)) + "");
			if(this._children != null) this._children.dispose();
			if(this.events != null) this.events.dispose();
			this.all("[sru-id]").dispose();
			this.remove();
			this.element = null;
			this._uid = -1;
		}
	}
	,exists: function(q) {
		return this.element != null && this.element.querySelector(q) != null;
	}
	,disable: function() {
		this.style({ pointerEvents : "none"});
		return this;
	}
	,click: function() {
		this.element.click();
		return this;
	}
	,all: function(q) {
		return sirius_Sirius.all(q,this.element);
	}
	,one: function(q) {
		return sirius_Sirius.one(q,this.element);
	}
	,children: function() {
		this._children = sirius_Sirius.all("*",this.element);
		return this._children;
	}
	,getScroll: function(o) {
		if(o == null) o = new sirius_math_Point(this.element.scrollWidth,this.element.scrollHeight); else {
			o.x = this.element.scrollWidth;
			o.y = this.element.scrollHeight;
		}
		return o;
	}
	,setScroll: function(y,x) {
		if(y != null) if(_$UInt_UInt_$Impl_$.gt(0,y)) this.element.scrollTop = 0; else this.element.scrollTop = this.element.scrollHeight;
		if(x != null) if(_$UInt_UInt_$Impl_$.gt(0,x)) this.element.scrollLeft = 0; else this.element.scrollLeft = this.element.scrollWidth;
	}
	,rect: function() {
		return { left : this.element.scrollLeft, top : this.element.scrollTop, offsetX : this.element.offsetLeft, offsetY : this.element.offsetTop, x : this.element.offsetLeft - window.scrollX, y : this.element.offsetTop - window.scrollY};
	}
	,getChild: function(i,update) {
		if(this._children == null || update == true) this._children = this.children();
		return this._children.obj(i);
	}
	,length: function() {
		return this.element.childNodes.length;
	}
	,index: function() {
		if(this.parent() != null) return this._parent.indexOf(this); else return -1;
	}
	,setIndex: function(i) {
		if(this.parent() != null) this._parent.addChild(this,i);
		return this;
	}
	,indexOf: function(q) {
		var chd = this.element.childNodes;
		var len = chd.length;
		var cnt = 0;
		while(cnt < len) {
			if(chd.item(cnt) == q.element) break;
			++cnt;
		}
		if(cnt == len) return -1; else return cnt;
	}
	,addChild: function(q,at) {
		if(at == null) at = -1;
		q._parent = this;
		this._children = null;
		if(at != -1) {
			var sw = this.element.childNodes.item(at);
			this.element.insertBefore(q.element,sw);
		} else this.element.appendChild(q.element);
		return q;
	}
	,addChildren: function(q,at) {
		if(at == null) at = -1;
		var _g = this;
		var l = null;
		if(at == -1) q.each($bind(this,this.addChild)); else q.each(function(o) {
			_g.addChild(o,at++);
		});
		return q.obj(q.length() - 1);
	}
	,addTextElement: function(q) {
		var t = new sirius_dom_Text(q);
		this.addChild(t);
		return t;
	}
	,removeChild: function(q) {
		if(q.element.parentElement == this.element) {
			this._children = null;
			q.remove();
		}
		return q;
	}
	,removeChildren: function(min) {
		if(min == null) min = 0;
		var t = this.children().length();
		while(_$UInt_UInt_$Impl_$.gt(t,min)) this.removeChild(this.getChild(--t));
		return this;
	}
	,remove: function() {
		this._parent = null;
		if(this.element != null && this.element.parentElement != null) this.element.parentElement.removeChild(this.element);
		return this;
	}
	,rotateX: function(x) {
		this.__changed = true;
		this.__rotationX = sirius_math_Matrix3D.rotateX(x);
		return this;
	}
	,rotateY: function(x) {
		this.__changed = true;
		this.__rotationY = sirius_math_Matrix3D.rotateY(x);
		return this;
	}
	,rotateZ: function(x) {
		this.__changed = true;
		this.__rotationZ = sirius_math_Matrix3D.rotateZ(x);
		return this;
	}
	,rotate: function(x,y,z) {
		if(x != null) this.rotateX(x);
		if(y != null) this.rotateY(y);
		if(z != null) this.rotateZ(z);
		return this;
	}
	,translate: function(x,y,z) {
		this.__changed = true;
		this.__translation = sirius_math_Matrix3D.translate(x,y,z);
		return this;
	}
	,scale: function(x,y,z) {
		this.__changed = true;
		this.__scale = sirius_math_Matrix3D.scale(x,y,z);
		return this;
	}
	,backface: function(visible) {
		this.style("backfaceVisibility",visible?"visible":"hidden");
	}
	,transform: function() {
		if(this.__changed) {
			if(this.__transform == null) {
				this.__transform = [];
				this.style("transformStyle","preserve-3d");
				this.css("element3d");
			}
			this.__changed = false;
			this.__transform[0] = this.__rotationX;
			this.__transform[1] = this.__rotationY;
			this.__transform[2] = this.__rotationZ;
			this.__transform[3] = this.__scale;
			this.__transform[4] = this.__translation;
			this.style("transform","matrix3d(" + sirius_math_Matrix3D.transform(this.__transform).join(",") + ")");
		}
		return this;
	}
	,css: function(styles) {
		if(styles != null) {
			var s = styles.split(" ");
			var cl = this.element.classList;
			sirius_utils_Dice.Values(s,function(v) {
				if(v != null && v.length > 0) {
					var c = HxOverrides.substr(v,0,1);
					if(c == "*") {
						v = HxOverrides.substr(v,1,v.length - 1);
						if(cl.contains(v)) cl.remove(v); else if(!cl.contains(v)) cl.add(v);
					} else if(c == "/") {
						v = HxOverrides.substr(v,1,v.length - 1);
						if(cl.contains(v)) cl.remove(v);
					} else if(!cl.contains(v)) cl.add(v);
				}
			});
		}
		return this.element.className;
	}
	,hasCss: function(name) {
		return (" " + this.css() + " ").indexOf(" " + name + " ") != -1;
	}
	,toggle: function(styles) {
		var _g = this;
		sirius_utils_Dice.Values(styles.split(" "),function(v) {
			_g.css((_g.hasCss(v)?"/":"") + v);
		});
		return this;
	}
	,show: function() {
		this.element.hidden = false;
		this.element.style.display = null;
		this.css("/hidden");
	}
	,hide: function() {
		this.element.hidden = true;
		this.element.style.display = "none";
		this.css("hidden");
	}
	,hasAttribute: function(name) {
		return this._getattr && this.element.hasAttribute(name) || Object.prototype.hasOwnProperty.call(this.element,name);
	}
	,attribute: function(name,value) {
		if(name != null) {
			var t = Reflect.field(this.element,name);
			if(t != null) {
				if(value != null) this.element[name] = value;
				return Reflect.field(this.element,name);
			}
			if(value != null) {
				if(this._setattr) this.element.setAttribute(name,value);
				return value;
			}
			if(this._getattr) return this.element.getAttribute(name);
		}
		return null;
	}
	,clearAttribute: function(name) {
		var value = null;
		if(this.hasAttribute(name)) {
			if(Object.prototype.hasOwnProperty.call(this.element,name)) Reflect.deleteField(this.element,name); else {
				value = this.attribute(name);
				this.element.removeAttribute(name);
			}
		}
		return value;
	}
	,attributes: function(values) {
		if(values != null) {
			sirius_utils_Dice.All(values,$bind(this,this.attribute));
			return null;
		} else return sirius_tools_Utils.getAttributes(this);
	}
	,writeText: function(q) {
		this.empty(false);
		this.element.innerText = q;
		return this;
	}
	,appendText: function(q) {
		this.element.innerText += Std.string(q);
		return this;
	}
	,writeHtml: function(q) {
		this.empty(false);
		this.element.innerHTML = q;
		return this;
	}
	,appendHtml: function(q) {
		this.element.innerHTML = this.element.innerHTML + Std.string(q);
		return this;
	}
	,style: function(p,v) {
		var _g = this;
		if(p != null) {
			if(typeof(p) == "string") {
				if(v != null) Reflect.setField(this.element.style,p,js_Boot.__instanceof(v,sirius_math_IARGB)?v.css():Std.string(v));
				v = Reflect.field(this.trueStyle(),p);
				if(p.toLowerCase().indexOf("color") > 0) v = new sirius_math_ARGB(v);
				return v;
			} else sirius_utils_Dice.All(p,function(p1,v1) {
				_g.style(p1,v1);
			});
		}
		return this.trueStyle();
	}
	,trueStyle: function() {
		if(window.document.defaultView.opener != null) return window.document.defaultView.getComputedStyle(this.element); else return window.getComputedStyle(this.element);
	}
	,mount: function(q,data,at) {
		if(at == null) at = -1;
		if(sirius_Sirius.resources.exists(q)) return this.addChildren(sirius_Sirius.resources.build(q,data).children(),at); else return this.addChildren(new sirius_dom_Display().writeHtml(q).children(),at);
	}
	,empty: function(fast) {
		if(fast) this.element.innerHTML = ""; else {
			var i = this.element.childNodes.length;
			while(i-- > 0) this.element.removeChild(this.element.childNodes.item(i));
		}
		return this;
	}
	,on: function(type,handler,mode) {
		this.events.on(type,handler,mode);
		return this;
	}
	,parent: function(levels) {
		if(levels == null) levels = 0;
		if(this._parent == null && this.element.parentElement != null) this._parent = sirius_tools_Utils.displayFrom(this.element.parentElement);
		if(_$UInt_UInt_$Impl_$.gt(levels,0)) return this._parent.parent(--levels); else return this._parent;
	}
	,activate: function(handler) {
		sirius_tools_Ticker.add(handler);
		return this;
	}
	,deactivate: function(handler) {
		sirius_tools_Ticker.remove(handler);
		return this;
	}
	,x: function(value) {
		if(value != null) if(typeof(value) == "string") this.element.style.left = value; else this.element.style.left = Std.string(value) + "px";
		return Std.parseInt(this.element.style.left);
	}
	,y: function(value) {
		if(value != null) if(typeof(value) == "string") this.element.style.top = value; else this.element.style.top = Std.string(value) + "px";
		return Std.parseInt(this.element.style.top);
	}
	,width: function(value) {
		if(value != null) if(typeof(value) == "string") this.element.style.width = value; else this.element.style.width = Std.string(value) + "px";
		return this.element.clientWidth;
	}
	,height: function(value) {
		if(value != null) if(typeof(value) == "string") this.element.style.height = value; else this.element.style.height = Std.string(value) + "px";
		return this.element.clientHeight;
	}
	,alpha: function(value) {
		if(value != null) {
			value = 1 - value;
			this.element.style.opacity = "" + (1 - value);
			return value;
		} else return 1 - parseFloat(this.element.style.opacity);
	}
	,isFullyVisible: function() {
		return this._visibility == 2;
	}
	,isVisible: function() {
		return this._visibility > 0;
	}
	,getVisibility: function(offsetY,offsetX) {
		if(offsetX == null) offsetX = 0;
		if(offsetY == null) offsetY = 0;
		var rect = this.element.getBoundingClientRect();
		var current = 0;
		if(rect.top + offsetY >= 0 && rect.left + offsetX >= 0 && rect.bottom - offsetY <= sirius_tools_Utils.viewportHeight() && rect.right - offsetX <= sirius_tools_Utils.viewportWidth()) current = 2; else if(rect.bottom >= 0 && rect.right >= 0 && rect.top <= sirius_tools_Utils.viewportHeight() && rect.left <= sirius_tools_Utils.viewportWidth()) current = 1;
		if(current != this._visibility) {
			this._visibility = current;
			this.events.visibility().call();
		}
		return this._visibility;
	}
	,getBounds: function() {
		return this.element.getBoundingClientRect();
	}
	,typeOf: function() {
		if(this.hasAttribute("sru-dom")) return this.attribute("sru-dom"); else return this.element.tagName;
	}
	,'is': function(tag) {
		var _g = this;
		if(!((tag instanceof Array) && tag.__enum__ == null)) tag = [tag];
		var r = sirius_utils_Dice.Values(tag,function(v) {
			v = v.toUpperCase();
			return v == _g.element.tagName || v == _g.attribute("sru-dom");
		});
		return !r.completed;
	}
	,addTo: function(target) {
		var _g = this;
		if(target != null) target.addChild(this); else if(sirius_Sirius.document != null) sirius_Sirius.document.body.addChild(this); else sirius_Sirius.run(function() {
			_g.addTo(target);
		});
		return this;
	}
	,addToBody: function() {
		if(sirius_Sirius.document != null) sirius_Sirius.document.body.addChild(this);
		return this;
	}
	,position: function() {
		return sirius_dom_Display.getPosition(this.element);
	}
	,pin: function(align) {
		var v = null;
		var h = null;
		if(align != null) switch(align) {
		case "t":
			v = -1;
			h = 0;
			break;
		case "tl":case "lt":
			v = -1;
			h = -1;
			break;
		case "l":
			v = 0;
			h = -1;
			break;
		case "bl":case "lb":
			v = 1;
			h = -1;
			break;
		case "b":
			v = 1;
			h = 0;
			break;
		case "br":case "rb":
			v = 1;
			h = 1;
			break;
		case "r":
			v = 0;
			h = 1;
			break;
		case "tr":case "rt":
			v = -1;
			h = 1;
			break;
		case "c":
			v = 0;
			h = 0;
			break;
		}
		var o = { position : "fixed"};
		if(v != null) {
			if(v < 0) o.top = 0; else if(v > 0) o.bottom = 0; else o.top = "calc(50vh - " + (this.height() >> 1) + "px)";
		}
		if(v != null) {
			if(v < 0) o.left = 0; else if(v > 0) o.right = 0; else o.left = "calc(50vw - " + (this.width() >> 1) + "px)";
		}
		this.style(o);
		return this;
	}
	,unpin: function() {
		this.style({ position : "", left : "", right : "", bottom : "", top : ""});
		return this;
	}
	,fit: function(width,height) {
		this.width(width);
		this.height(height);
		return this;
	}
	,id: function() {
		return this._uid;
	}
	,interactive: function(value) {
		if(value != null) {
			if(value) this.style({ pointerEvents : null}); else this.style({ pointerEvents : "none"});
			return value;
		} else return this.style().pointerEvents != "none";
	}
	,load: function(url,module,data,handler,headers,progress) {
		var _g = this;
		sirius_Sirius.request(url,data,null,function(r) {
			if(r.success) _g.mount(module);
			if(handler != null) handler(r);
		},headers,progress);
	}
	,lookAt: function(time,ease,x,y) {
		sirius_Sirius.document.scrollTo(this,time,ease,x,y);
		return this;
	}
	,autoInject: function() {
		var _g = this;
		this.all("script").each(function(o) {
			o.remove();
			var u = o.attribute("src");
			if(u != "") {
				_g.all("script[src=\"" + u + "\"]").remove();
				var s = new sirius_dom_Script();
				s.src(u);
				_g.addChild(s);
			}
		});
		return this;
	}
	,autoLoad: function(progress) {
		this.all("[sru-load]").each(function(o) {
			var f = o.attribute("sru-load");
			var d = f.split("#");
			o.clearAttribute("sru-load");
			o.load(d[0],d.length == 1?d[0]:d[1],null,null,null,progress);
		});
	}
	,toString: function() {
		var v = this.element != null && ($_=this.element,$bind($_,$_.getBoundingClientRect)) != null;
		var data = { id : this.element.id, 'sru-id' : $bind(this,this.id), 'class' : this.element.className, index : this.index(), length : this.length(), attributes : sirius_tools_Utils.getAttributes(this)};
		if(v) {
			var r = this.element.getBoundingClientRect();
			data.visibility = this.getVisibility();
			data.rect = { width : r.width, height : r.height, x1 : r.left, y1 : r.top, x2 : r.right, y2 : r.bottom};
		}
		return JSON.stringify(data);
	}
	,__class__: sirius_dom_Display
});
var sirius_dom_Document = $hx_exports.sru.dom.Document = function() {
	this.__cursor__ = { x : 0, y : 0};
	this.__scroll__ = { x : 0, y : 0};
	if(sirius_dom_Document.__doc__ == null) {
		sirius_dom_Display.call(this,window.document);
		this.element = window.document.documentElement;
		this.head = new sirius_dom_Head(window.document.head);
		this.events = new sirius_events_Dispatcher(this);
		sirius_dom_Document.__doc__ = this;
		this.__init__();
	} else throw new Error("Document is a singleton, use Document.ME() instead of new");
};
sirius_dom_Document.__name__ = ["sirius","dom","Document"];
sirius_dom_Document.ME = function() {
	if(sirius_dom_Document.__doc__ == null) return new sirius_dom_Document(); else return sirius_dom_Document.__doc__;
};
sirius_dom_Document.__super__ = sirius_dom_Display;
sirius_dom_Document.prototype = $extend(sirius_dom_Display.prototype,{
	_applyScroll: function() {
		window.scroll(this.__scroll__.x,this.__scroll__.y);
	}
	,__init__: function() {
		this.events.wheel($bind(this,this.stopScroll),true);
		window.addEventListener("scroll",$bind(this,this._hookScroll));
	}
	,checkBody: function() {
		this.body = new sirius_dom_Body(document.body);
		if(this.body.hasAttribute("automator")) sirius_css_Automator.reset();
	}
	,_hookScroll: function(e) {
		this.events.scroll().call();
	}
	,scroll: function(x,y) {
		window.scroll(x,y);
	}
	,addScroll: function(x,y) {
		var current = this.getScroll();
		window.scroll(current.x + x,current.y + y);
	}
	,getScrollRange: function(o,pct) {
		if(pct == null) pct = false;
		var current = this.getScroll(o);
		if(this.body != null) {
			current.x /= this.body.maxScrollX();
			current.y /= this.body.maxScrollY();
			if(pct) {
				current.x *= 100;
				current.y *= 100;
			}
		} else current.reset();
		return current;
	}
	,getScroll: function(o) {
		if(o == null) o = new sirius_math_Point(0,0);
		if(window.pageXOffset != null) {
			o.x = window.pageXOffset;
			o.y = window.pageYOffset;
		} else if(this.body != null) {
			o.x = this.body.element.scrollLeft;
			o.y = this.body.element.scrollTop;
		} else {
			o.x = this.element.scrollLeft;
			o.y = this.element.scrollTop;
		}
		return o;
	}
	,easeScroll: function(x,y,time,ease) {
		if(time == null) time = 1;
		this.stopScroll();
		this.getScroll(this.__scroll__);
		sirius_transitions_Animator.to(this.__scroll__,time,{ x : x, y : y, ease : ease, onUpdate : $bind(this,this._applyScroll)});
	}
	,stopScroll: function(e) {
		sirius_transitions_Animator.stop(this.__scroll__);
	}
	,scrollTo: function(target,time,ease,offX,offY) {
		if(offY == null) offY = 0;
		if(offX == null) offX = 0;
		if(time == null) time = 1;
		if(typeof(target) == "string") target = sirius_Sirius.one(target).element;
		if(js_Boot.__instanceof(target,sirius_dom_IDisplay)) target = target.element;
		var pos = sirius_dom_Display.getPosition(target);
		if(sirius_transitions_Animator.available()) this.easeScroll(pos.x - offX,pos.y - offY,time,ease); else this.scroll(pos.x - offX,pos.y - offY);
	}
	,trackCursor: function() {
		var _g = this;
		if(this.__cursor__.enabled) return;
		this.__cursor__.enabled = true;
		window.addEventListener("mousemove",function(e) {
			_g.__cursor__.x = e.clientX;
			_g.__cursor__.y = e.clientY;
		});
	}
	,cursorX: function() {
		return this.__cursor__.x;
	}
	,cursorY: function() {
		return this.__cursor__.y;
	}
	,focus: function(target) {
		if(target != null) target.element.focus();
		return sirius_tools_Utils.displayFrom(window.document.activeElement);
	}
	,print: function(selector,exclude) {
		if(exclude == null) exclude = "button, img, .no-print";
		var i = this.body.children();
		var success = false;
		if(i.length() > 0) {
			i.hide();
			var content = "";
			i.each(function(d) {
				if(!d["is"](["script","style"])) {
					content += d.element.outerHTML;
					d.hide();
				}
			});
			if(content.length > 0) {
				var r = new sirius_dom_Div();
				r.mount(content);
				r.all(exclude).remove();
				this.body.addChild(r);
				try {
					window.print();
					success = true;
				} catch( e ) {
					if (e instanceof js__$Boot_HaxeError) e = e.val;
					if( js_Boot.__instanceof(e,Error) ) {
						success = false;
					} else throw(e);
				}
				this.body.removeChild(r);
			}
			i.show();
		}
		return success;
	}
	,__class__: sirius_dom_Document
});
var sirius_dom_Head = $hx_exports.sru.dom.Head = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("head");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Head.__name__ = ["sirius","dom","Head"];
sirius_dom_Head.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Head.__super__ = sirius_dom_Display;
sirius_dom_Head.prototype = $extend(sirius_dom_Display.prototype,{
	bind: function(content,type,id) {
		if(content != null) {
			var s;
			if(content.length > 1) {
				switch(type) {
				case "css":case "style":
					s = new sirius_dom_Style();
					content = content.split("<style>").join("").split("</style>").join("");
					break;
				case "javascript":case "script":
					s = new sirius_dom_Script();
					content = content.split("<script>").join("").split("</script>").join("");
					break;
				default:
					s = null;
				}
				if(s != null) {
					s.attribute("module-id",sirius_tools_Utils.isValid(id)?id:"");
					s.writeHtml(content);
					this.addChild(s);
					return s;
				}
			}
		}
		return null;
	}
	,__class__: sirius_dom_Head
});
var sirius_events_IDispatcher = function() { };
sirius_events_IDispatcher.__name__ = ["sirius","events","IDispatcher"];
sirius_events_IDispatcher.prototype = {
	__class__: sirius_events_IDispatcher
};
var sirius_events_Dispatcher = $hx_exports.sru.events.Dispatcher = function(q) {
	this._b = { };
	this._e = { };
	this._i = { };
	this.target = q;
};
sirius_events_Dispatcher.__name__ = ["sirius","events","Dispatcher"];
sirius_events_Dispatcher.__interfaces__ = [sirius_events_IDispatcher];
sirius_events_Dispatcher.PREVENT_DEFAULT = function(e) {
	e.event.preventDefault();
};
sirius_events_Dispatcher.prototype = {
	event: function(name) {
		var dis = null;
		if(!this.hasEvent(name)) {
			dis = new sirius_events_EventGroup(this,name);
			dis.prepare(this.target);
			this._e[name] = dis;
		} else dis = Reflect.field(this._e,name);
		return dis;
	}
	,hasEvent: function(name) {
		return Object.prototype.hasOwnProperty.call(this._e,name);
	}
	,apply: function() {
		var _g = this;
		sirius_utils_Dice.Values(this._e,function(v) {
			v.prepare(_g.target);
		});
	}
	,on: function(type,handler,mode,noDefault,capture) {
		var ie = this.event(type);
		if(noDefault) ie.noDefault();
		if(handler == true) ie.call(); else if(handler != null) {
			if(mode < 0) ie.remove(handler); else if(mode > 0) ie.addOnce(handler,capture); else ie.add(handler,capture);
		}
		return ie;
	}
	,focusOverall: function(handler,mode,noDefault,capture) {
		return { 'over' : this.mouseOver(handler,mode), 'out' : this.mouseOut(handler,mode), 'click' : this.click(handler,mode)};
	}
	,added: function(handler,mode,noDefault,capture) {
		return this.on("DOMNodeInserted",handler,mode,noDefault,capture);
	}
	,removed: function(handler,mode,noDefault,capture) {
		return this.on("DOMNodeRemoved",handler,mode,noDefault,capture);
	}
	,wheel: function(handler,mode,noDefault,capture) {
		return this.on("wheel",handler,mode,noDefault,capture);
	}
	,copy: function(handler,mode,noDefault,capture) {
		return this.on("copy",handler,mode,noDefault,capture);
	}
	,cut: function(handler,mode,noDefault,capture) {
		return this.on("cut",handler,mode,noDefault,capture);
	}
	,paste: function(handler,mode,noDefault,capture) {
		return this.on("paste",handler,mode,noDefault,capture);
	}
	,abort: function(handler,mode,noDefault,capture) {
		return this.on("abort",handler,mode,noDefault,capture);
	}
	,blur: function(handler,mode,noDefault,capture) {
		return this.on("blur",handler,mode,noDefault,capture);
	}
	,focusIn: function(handler,mode,noDefault,capture) {
		return this.on("focusin",handler,mode,noDefault,capture);
	}
	,focusOut: function(handler,mode,noDefault,capture) {
		return this.on("focusout",handler,mode,noDefault,capture);
	}
	,canPlay: function(handler,mode,noDefault,capture) {
		return this.on("canplay",handler,mode,noDefault,capture);
	}
	,canPlayThrough: function(handler,mode,noDefault,capture) {
		return this.on("canplaythrough",handler,mode,noDefault,capture);
	}
	,change: function(handler,mode,noDefault,capture) {
		return this.on("change",handler,mode,noDefault,capture);
	}
	,click: function(handler,mode,noDefault,capture) {
		return this.on("click",handler,mode,noDefault,capture);
	}
	,contextMenu: function(handler,mode,noDefault,capture) {
		return this.on("contextmenu",handler,mode,noDefault,capture);
	}
	,dblClick: function(handler,mode,noDefault,capture) {
		return this.on("dblclick",handler,mode,noDefault,capture);
	}
	,drag: function(handler,mode,noDefault,capture) {
		return this.on("drag",handler,mode,noDefault,capture);
	}
	,dragEnd: function(handler,mode,noDefault,capture) {
		return this.on("dragend",handler,mode,noDefault,capture);
	}
	,dragEnter: function(handler,mode,noDefault,capture) {
		return this.on("dragenter",handler,mode,noDefault,capture);
	}
	,dragLeave: function(handler,mode,noDefault,capture) {
		return this.on("dragleave",handler,mode,noDefault,capture);
	}
	,dragOver: function(handler,mode,noDefault,capture) {
		return this.on("dragover",handler,mode,noDefault,capture);
	}
	,dragStart: function(handler,mode,noDefault,capture) {
		return this.on("dragstart",handler,mode,noDefault,capture);
	}
	,drop: function(handler,mode,noDefault,capture) {
		return this.on("drop",handler,mode,noDefault,capture);
	}
	,durationChange: function(handler,mode,noDefault,capture) {
		return this.on("durationchange",handler,mode,noDefault,capture);
	}
	,emptied: function(handler,mode,noDefault,capture) {
		return this.on("emptied",handler,mode,noDefault,capture);
	}
	,ended: function(handler,mode,noDefault,capture) {
		return this.on("ended",handler,mode,noDefault,capture);
	}
	,input: function(handler,mode,noDefault,capture) {
		return this.on("input",handler,mode,noDefault,capture);
	}
	,invalid: function(handler,mode,noDefault,capture) {
		return this.on("invalid",handler,mode,noDefault,capture);
	}
	,keyDown: function(handler,mode,noDefault,capture) {
		return this.on("keydown",handler,mode,noDefault,capture);
	}
	,keyPress: function(handler,mode,noDefault,capture) {
		return this.on("keypress",handler,mode,noDefault,capture);
	}
	,keyUp: function(handler,mode,noDefault,capture) {
		return this.on("keyup",handler,mode,noDefault,capture);
	}
	,load: function(handler,mode,noDefault,capture) {
		return this.on("load",handler,mode,noDefault,capture);
	}
	,loadedData: function(handler,mode,noDefault,capture) {
		return this.on("loadeddata",handler,mode,noDefault,capture);
	}
	,loadedMetadata: function(handler,mode,noDefault,capture) {
		return this.on("loadedmetadata",handler,mode,noDefault,capture);
	}
	,loadStart: function(handler,mode,noDefault,capture) {
		return this.on("loadstart",handler,mode,noDefault,capture);
	}
	,mouseDown: function(handler,mode,noDefault,capture) {
		return this.on("mousedown",handler,mode,noDefault,capture);
	}
	,mouseEnter: function(handler,mode,noDefault,capture) {
		return this.on("mouseenter",handler,mode,noDefault,capture);
	}
	,mouseLeave: function(handler,mode,noDefault,capture) {
		return this.on("mouseleave",handler,mode,noDefault,capture);
	}
	,mouseMove: function(handler,mode,noDefault,capture) {
		return this.on("mousemove",handler,mode,noDefault,capture);
	}
	,mouseOut: function(handler,mode,noDefault,capture) {
		return this.on("mouseout",handler,mode,noDefault,capture);
	}
	,mouseOver: function(handler,mode,noDefault,capture) {
		return this.on("mouseover",handler,mode,noDefault,capture);
	}
	,mouseUp: function(handler,mode,noDefault,capture) {
		return this.on("mouseup",handler,mode,noDefault,capture);
	}
	,pause: function(handler,mode,noDefault,capture) {
		return this.on("pause",handler,mode,noDefault,capture);
	}
	,play: function(handler,mode,noDefault,capture) {
		return this.on("play",handler,mode,noDefault,capture);
	}
	,playing: function(handler,mode,noDefault,capture) {
		return this.on("playing",handler,mode,noDefault,capture);
	}
	,progress: function(handler,mode,noDefault,capture) {
		return this.on("progress",handler,mode,noDefault,capture);
	}
	,rateChange: function(handler,mode,noDefault,capture) {
		return this.on("ratechange",handler,mode,noDefault,capture);
	}
	,reset: function(handler,mode,noDefault,capture) {
		return this.on("reset",handler,mode,noDefault,capture);
	}
	,scroll: function(handler,mode,noDefault,capture) {
		return this.on("scroll",handler,mode,noDefault,capture);
	}
	,seeked: function(handler,mode,noDefault,capture) {
		return this.on("seeked",handler,mode,noDefault,capture);
	}
	,seeking: function(handler,mode,noDefault,capture) {
		return this.on("seeking",handler,mode,noDefault,capture);
	}
	,select: function(handler,mode,noDefault,capture) {
		return this.on("select",handler,mode,noDefault,capture);
	}
	,show: function(handler,mode,noDefault,capture) {
		return this.on("show",handler,mode,noDefault,capture);
	}
	,stalled: function(handler,mode,noDefault,capture) {
		return this.on("stalled",handler,mode,noDefault,capture);
	}
	,submit: function(handler,mode,noDefault,capture) {
		return this.on("submit",handler,mode,noDefault,capture);
	}
	,suspEnd: function(handler,mode,noDefault,capture) {
		return this.on("suspend",handler,mode,noDefault,capture);
	}
	,timeUpdate: function(handler,mode,noDefault,capture) {
		return this.on("timeupdate",handler,mode,noDefault,capture);
	}
	,volumeChange: function(handler,mode,noDefault,capture) {
		return this.on("volumechange",handler,mode,noDefault,capture);
	}
	,waiting: function(handler,mode,noDefault,capture) {
		return this.on("waiting",handler,mode,noDefault,capture);
	}
	,pointerCancel: function(handler,mode,noDefault,capture) {
		return this.on("pointercancel",handler,mode,noDefault,capture);
	}
	,pointerDown: function(handler,mode,noDefault,capture) {
		return this.on("pointerdown",handler,mode,noDefault,capture);
	}
	,pointerUp: function(handler,mode,noDefault,capture) {
		return this.on("pointerup",handler,mode,noDefault,capture);
	}
	,pointerMove: function(handler,mode,noDefault,capture) {
		return this.on("pointermove",handler,mode,noDefault,capture);
	}
	,pointerOut: function(handler,mode,noDefault,capture) {
		return this.on("pointerout",handler,mode,noDefault,capture);
	}
	,pointerOver: function(handler,mode,noDefault,capture) {
		return this.on("pointerover",handler,mode,noDefault,capture);
	}
	,pointerEnter: function(handler,mode,noDefault,capture) {
		return this.on("pointerenter",handler,mode,noDefault,capture);
	}
	,pointerLeave: function(handler,mode,noDefault,capture) {
		return this.on("pointerleave",handler,mode,noDefault,capture);
	}
	,gotPointerCapture: function(handler,mode,noDefault,capture) {
		return this.on("gotpointercapture",handler,mode,noDefault,capture);
	}
	,lostPointerCapture: function(handler,mode,noDefault,capture) {
		return this.on("lostpointercapture",handler,mode,noDefault,capture);
	}
	,pointerLockChange: function(handler,mode,noDefault,capture) {
		return this.on("pointerlockchange",handler,mode,noDefault,capture);
	}
	,pointerLockError: function(handler,mode,noDefault,capture) {
		return this.on("pointerlockerror",handler,mode,noDefault,capture);
	}
	,error: function(handler,mode,noDefault,capture) {
		return this.on("error",handler,mode,noDefault,capture);
	}
	,touchStart: function(handler,mode,noDefault,capture) {
		return this.on("touchstart",handler,mode,noDefault,capture);
	}
	,touchEnd: function(handler,mode,noDefault,capture) {
		return this.on("touchend",handler,mode,noDefault,capture);
	}
	,touchMove: function(handler,mode,noDefault,capture) {
		return this.on("touchmove",handler,mode,noDefault,capture);
	}
	,touchCancel: function(handler,mode,noDefault,capture) {
		return this.on("touchcancel",handler,mode,noDefault,capture);
	}
	,readyState: function(handler,mode,noDefault,capture) {
		return this.on("readystatechange",handler,mode,noDefault,capture);
	}
	,visibility: function(handler,mode,noDefault,capture) {
		return this.on("visibility",handler,mode,noDefault,capture);
	}
	,resize: function(handler,mode,noDefault,capture) {
		return this.on("resize",handler,mode,noDefault,capture);
	}
	,dispose: function() {
		var _g = this;
		sirius_utils_Dice.Values(this._e,function(v) {
			v.dispose(_g.target);
		});
	}
	,__class__: sirius_events_Dispatcher
};
var sirius_tools_IAgent = function() { };
sirius_tools_IAgent.__name__ = ["sirius","tools","IAgent"];
sirius_tools_IAgent.prototype = {
	__class__: sirius_tools_IAgent
};
var sirius_tools_Agent = function() {
};
sirius_tools_Agent.__name__ = ["sirius","tools","Agent"];
sirius_tools_Agent.__interfaces__ = [sirius_tools_IAgent];
sirius_tools_Agent.prototype = {
	update: function() {
		var ua = window.navigator.userAgent;
		var ie;
		if(new EReg("MSIE","i").match(ua)) ie = 8; else ie = 0;
		if(new EReg("MSIE 9","i").match(ua)) ie = 9; else ie = ie;
		if(new EReg("MSIE 10","i").match(ua)) ie = 10; else ie = ie;
		if(new EReg("rv:11.","i").match(ua)) ie = 11; else ie = ie;
		if(new EReg("Edge","i").match(ua)) ie = 12; else ie = ie;
		var opera = new EReg("OPR","i").match(ua);
		var safari = new EReg("Safari","i").match(ua);
		var firefox = new EReg("Firefox","i").match(ua);
		var chrome = new EReg("Chrome","i").match(ua);
		var chromium = new EReg("Chromium","i").match(ua);
		this.ie = ie > 0;
		this.edge = ie > 11;
		this.opera = opera;
		this.firefox = firefox;
		this.safari = safari && !chrome && !chromium;
		this.chrome = (chrome || chromium) && !opera;
		this.mobile = new EReg("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini","i").match(ua);
		if(sirius_tools_Utils.matchMedia(sirius_css_CSSGroup.MEDIA_XS)) {
			this.xs = true;
			this.screen = 1;
		} else if(sirius_tools_Utils.matchMedia(sirius_css_CSSGroup.MEDIA_SM)) {
			this.sm = true;
			this.screen = 2;
		} else if(sirius_tools_Utils.matchMedia(sirius_css_CSSGroup.MEDIA_MD)) {
			this.md = true;
			this.screen = 3;
		} else if(sirius_tools_Utils.matchMedia(sirius_css_CSSGroup.MEDIA_LG)) {
			this.lg = true;
			this.screen = 4;
		} else this.screen = 0;
		this.cookies = window.navigator.cookieEnabled == true;
		if(!this.cookies) {
			window.document.cookie = "#validating#";
			this.cookies = window.document.cookie.indexOf("#validating#") != -1;
		}
		this.jQuery = Reflect.hasField(window,"$") || Reflect.hasField(window,"jQuery");
		this.animator = sirius_transitions_Animator.available();
		this.display = sirius_tools_Utils.screenOrientation();
		var platform = window.navigator.platform.toLowerCase();
		if(HxOverrides.indexOf(["macintosh","macintel","macppc","mac68k"],platform,0) != -1) this.os = "MAC"; else if(HxOverrides.indexOf(["iphone","ipad","ipod"],platform,0) != -1) this.os = "IOS"; else if(HxOverrides.indexOf(["win32","win64","windows","wince"],platform,0) != -1) this.os = "WINDOWS"; else if(new EReg("Android","i").match(ua)) this.os = "ANDROID"; else if(new EReg("linux","i").match(platform)) this.os = "LINUX"; else this.os = "CUSTOM";
		return this;
	}
	,value: function() {
		return "OS:" + window.navigator.oscpu + "/Browser:" + window.navigator.userAgent + "/Mobile:" + Std.string(this.mobile);
	}
	,__class__: sirius_tools_Agent
};
var sirius_transitions_Ease = $hx_exports.Ease = function() { };
sirius_transitions_Ease.__name__ = ["sirius","transitions","Ease"];
sirius_transitions_Ease._F = function(n) {
	n = window[n];;
	return n != null?{ x : n.easeNone, I : n.easeIn, O : n.easeOut, IO : n.easeInOut, OI : n.easeOutIn}:{ };
};
sirius_transitions_Ease.update = function() {
	sirius_transitions_Ease.LINEAR = sirius_transitions_Ease._F("Linear");
	sirius_transitions_Ease.CIRC = sirius_transitions_Ease._F("Circ");
	sirius_transitions_Ease.CUBIC = sirius_transitions_Ease._F("Cubic");
	sirius_transitions_Ease.QUAD = sirius_transitions_Ease._F("Quad");
	sirius_transitions_Ease.EXPO = sirius_transitions_Ease._F("Expo");
	sirius_transitions_Ease.BACK = sirius_transitions_Ease._F("Back");
	sirius_transitions_Ease.ELASTIC = sirius_transitions_Ease._F("Elastic");
	sirius_transitions_Ease.QUART = sirius_transitions_Ease._F("Quart");
	sirius_transitions_Ease.QUINT = sirius_transitions_Ease._F("Quint");
};
sirius_transitions_Ease.fromString = function(q) {
	var q1 = [];
	var C = Reflect.field(sirius_transitions_Ease,q1[0]);
	var e = null;
	if(C != null) {
		if(q1.length > 1) e = Reflect.field(C,q1[1]);
		if(e == null) e = C.X;
		return e;
	}
	return sirius_transitions_Ease.LINEAR.X;
};
var sirius_utils_Dice = $hx_exports.Dice = function() { };
sirius_utils_Dice.__name__ = ["sirius","utils","Dice"];
sirius_utils_Dice.All = function(q,each,complete) {
	var v = null;
	var p = null;
	var i = true;
	var k = 0;
	if(q != null) {
		var _g = 0;
		var _g1 = Reflect.fields(q);
		while(_g < _g1.length) {
			var p1 = _g1[_g];
			++_g;
			v = Reflect.field(q,p1);
			if(each(p1,v) == true) {
				i = false;
				break;
			} else {
				++k;
				p1 = null;
				v = null;
			}
		}
	}
	var r = { param : p, value : v, completed : i, object : q, keys : k};
	if(complete != null) complete(r);
	return r;
};
sirius_utils_Dice.Params = function(q,each,complete) {
	return sirius_utils_Dice.All(q,function(p,v) {
		return each(p);
	},complete);
};
sirius_utils_Dice.Values = function(q,each,complete) {
	return sirius_utils_Dice.All(q,function(p,v) {
		return each(v);
	},complete);
};
sirius_utils_Dice.Call = function(q,method,args) {
	if(args == null) args = [];
	return sirius_utils_Dice.All(q,function(p,v) {
		v[method].apply(q,args);
	},null);
};
sirius_utils_Dice.Count = function(from,to,each,complete,increment) {
	if(increment == null) increment = 1;
	var a = Math.min(from,to);
	var b = Math.max(from,to);
	if(increment == null || _$UInt_UInt_$Impl_$.gt(1,increment)) increment = 1;
	while(a < b) if(each(a,b,(a = _$UInt_UInt_$Impl_$.toFloat(increment) + a) == b) == true) break;
	var c = a == b;
	var r = { from : from, to : b, completed : c, value : a - _$UInt_UInt_$Impl_$.toFloat(increment)};
	if(complete != null) complete(r);
	return r;
};
sirius_utils_Dice.One = function(from,alt) {
	if((from instanceof Array) && from.__enum__ == null) sirius_utils_Dice.Values(from,function(v) {
		from = v;
		return from == null;
	});
	return { value : sirius_tools_Utils.isValid(from)?from:alt, object : from};
};
sirius_utils_Dice.Match = function(table,values,limit) {
	if(limit == null) limit = 0;
	if(!((values instanceof Array) && values.__enum__ == null)) values = [values];
	var r = 0;
	sirius_utils_Dice.Values(values,function(v) {
		if(Lambda.indexOf(table,v) != -1) ++r;
		if(_$UInt_UInt_$Impl_$.gt(limit,0)) {
			var a = --limit;
			return a == 0;
		}
		return false;
	});
	return r;
};
sirius_utils_Dice.Remove = function(table,values) {
	if(!((values instanceof Array) && values.__enum__ == null)) values = [values];
	sirius_utils_Dice.Values(values,function(v) {
		var i = Lambda.indexOf(table,v);
		if(i != -1) {
			var x = v;
			HxOverrides.remove(table,x);
		}
	});
};
sirius_utils_Dice.Mix = function(data) {
	var r = [];
	sirius_utils_Dice.Values(data,function(v) {
		r = r.concat(v);
	});
	return r;
};
sirius_utils_Dice.Table = function(data,key,numeric,copy) {
	if(copy == null) copy = false;
	if(numeric == null) numeric = false;
	var r;
	if(copy == true) r = [].concat(data); else r = data;
	if(numeric) {
		if(key != null) haxe_ds_ArraySort.sort(r,function(a,b) {
			if(Reflect.field(a,key) < Reflect.field(b,key)) return -1; else return 1;
		}); else haxe_ds_ArraySort.sort(r,function(a1,b1) {
			if(a1 < b1) return -1; else return 1;
		});
	} else if(key != null) haxe_ds_ArraySort.sort(r,function(a2,b2) {
		return Reflect.compare(sirius_utils_SearchTag.convert(Reflect.field(a2,key)),sirius_utils_SearchTag.convert(Reflect.field(b2,key)));
	}); else haxe_ds_ArraySort.sort(r,function(a3,b3) {
		return Reflect.compare(sirius_utils_SearchTag.convert(a3),sirius_utils_SearchTag.convert(b3));
	});
	return r;
};
sirius_utils_Dice.List = function(data,a,b) {
	if(a == null) a = 0;
	var copy = [];
	var len = data.length;
	if(b == null) b = data.length;
	if(_$UInt_UInt_$Impl_$.gt(b,a)) while(_$UInt_UInt_$Impl_$.gt(b,a)) {
		if(_$UInt_UInt_$Impl_$.gte(a,len)) break;
		copy[copy.length] = data[a];
		++a;
	} else if(_$UInt_UInt_$Impl_$.gt(a,b)) while(_$UInt_UInt_$Impl_$.gt(a,b)) {
		if(_$UInt_UInt_$Impl_$.gt(len,a)) copy[copy.length] = data[a];
		--a;
	}
	return copy;
};
sirius_utils_Dice.Children = function(of,each,complete) {
	var r = { children : []};
	var l = 0;
	var c;
	if(of != null) {
		if(js_Boot.__instanceof(of,sirius_dom_IDisplay)) of = of.element;
		sirius_utils_Dice.Count(0,of.childNodes.length,function(i,j,k) {
			c = of.childNodes.item(i);
			r.children[l] = c;
			return each(c,i);
		},complete);
	}
	return r;
};
var sirius_data_Logger = function() {
	this._events = [];
	this._events[0] = $bind(this,this.query);
};
sirius_data_Logger.__name__ = ["sirius","data","Logger"];
sirius_data_Logger.prototype = {
	clear: function() {
		haxe_Log.clear();
	}
	,mute: function() {
		if(Lambda.indexOf(this._events,$bind(this,this.query)) != -1) this._events.splice(0,1);
	}
	,unmute: function() {
		if(Lambda.indexOf(this._events,$bind(this,this.query)) == -1) this._events.unshift($bind(this,this.query));
	}
	,listen: function(handler) {
		this._events[this._events.length] = handler;
	}
	,push: function(q,type) {
		sirius_utils_Dice.Values(this._events,function(v) {
			v(q,type);
		});
	}
	,query: function(q,type) {
		var t;
		switch(type) {
		case 0:
			t = "[MESSAGE] ";
			break;
		case 1:
			t = "[>SYSTEM] ";
			break;
		case 2:
			t = "[WARNING] ";
			break;
		case 3:
			t = "[!ERROR!] ";
			break;
		case 4:
			t = "[//TODO:] ";
			break;
		default:
			t = "";
		}
		console.log(t + Std.string(q));
	}
	,__class__: sirius_data_Logger
};
var sirius_net_IDomain = function() { };
sirius_net_IDomain.__name__ = ["sirius","net","IDomain"];
sirius_net_IDomain.prototype = {
	__class__: sirius_net_IDomain
};
var sirius_net_Domain = function() {
	this._parseURI();
};
sirius_net_Domain.__name__ = ["sirius","net","Domain"];
sirius_net_Domain.__interfaces__ = [sirius_net_IDomain];
sirius_net_Domain.prototype = {
	_parseURI: function() {
		var l = window.location;
		var p = l.pathname;
		this.host = l.hostname;
		this.port = l.port;
		this.hash = new sirius_data_Fragments(HxOverrides.substr(l.hash,1,null),"/");
		this.params = sirius_tools_Utils.getQueryParams(l.href);
		this.url = new sirius_data_Fragments(p,"/");
	}
	,allocate: function(expire) {
		if(expire == null) expire = 30;
		if(this.data == null) this.data = new sirius_data_DataCache(this.host,"/",86400 * expire);
		return this.data;
	}
	,reload: function(force) {
		if(force == null) force = false;
		window.location.reload(force);
	}
	,__class__: sirius_net_Domain
};
var sirius_net_ILoader = function() { };
sirius_net_ILoader.__name__ = ["sirius","net","ILoader"];
sirius_net_ILoader.prototype = {
	__class__: sirius_net_ILoader
};
var sirius_net_Loader = $hx_exports.sru.modules.Loader = function(noCache) {
	if(noCache == null) noCache = false;
	this._toload = [];
	this._noCache = noCache;
	this.signals = new sirius_signals_Signals(this);
	this.totalLoaded = 0;
	this.totalFiles = 0;
	this._fileProgress = 0;
};
sirius_net_Loader.__name__ = ["sirius","net","Loader"];
sirius_net_Loader.__interfaces__ = [sirius_net_ILoader];
sirius_net_Loader.prototype = {
	_getReq: function(u) {
		return new sirius_net_HttpRequest(u);
	}
	,progress: function() {
		return (this.totalLoaded + (this._fileProgress < 1?this._fileProgress:0)) / this.totalFiles;
	}
	,add: function(files) {
		if(files != null && files.length > 0) {
			this._toload = this._toload.concat(files);
			this.totalFiles += files.length;
		}
		return this;
	}
	,start: function() {
		if(!this._isBusy) {
			this._isBusy = true;
			this._loadNext();
		}
		return this;
	}
	,_changed: function(file,status,data,request) {
		this.signals.call(status,{ file : file, data : data, request : request});
	}
	,_loadNext: function() {
		var _g = this;
		if(this._toload.length > 0) {
			var f = this._toload.shift();
			var r = this._getReq(f);
			this._changed(f,"started",null,r);
			r.async = true;
			r.onError = function(e) {
				_g._changed(f,"error",e,r);
				++_g.totalLoaded;
				_g._loadNext();
			};
			r.onData = function(d) {
				_g._changed(f,"loaded",d,r);
				++_g.totalLoaded;
				sirius_Sirius.resources.register(f,d);
				_g._loadNext();
			};
			r.request("GET",null,$bind(this,this._onLoadProgress));
		} else {
			this._isBusy = false;
			this._complete();
		}
	}
	,_onLoadProgress: function(file,loaded,total) {
		this._fileProgress = loaded / total;
		this.signals.call("progress",{ file : file, loaded : loaded, total : total, progress : this._fileProgress});
	}
	,_error: function(e) {
		if(typeof(e) == "string") this.lastError = new sirius_errors_Error(-1,e,this); else this.lastError = new sirius_errors_Error(-1,"Unknow",{ content : e, loader : this});
		this.signals.call("error",this.lastError);
	}
	,_complete: function() {
		this.signals.call("completed");
	}
	,build: function(module,data,each) {
		return sirius_Sirius.resources.build(module,data,each);
	}
	,async: function(file,target,data,handler,progress) {
		var _g = this;
		var h;
		if(file.indexOf("#") != -1) h = file.split("#"); else h = [file];
		var r = this._getReq(h[0]);
		r.async = true;
		this._changed(file,"started",data,r);
		r.onData = function(d) {
			_g._changed(file,"loaded",d,r);
			sirius_Sirius.resources.register(file,d);
			if(target != null) {
				if(typeof(target) == "string") {
					var e = sirius_Sirius.one(target,null);
					if(e != null) {
						if(!((data instanceof Array) && data.__enum__ == null)) data = [data];
						e.addChild(_g.build(file,data));
					}
				} else try {
					_g.build(file,data,target);
				} catch( e1 ) {
					if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
					sirius_Sirius.log(e1,3);
				}
			}
			if(handler != null) handler(new sirius_net_Request(true,d,null,file));
		};
		r.onError = function(d1) {
			_g._changed(file,"error",d1,r);
			if(handler != null) handler(new sirius_net_Request(false,null,new sirius_errors_Error(-1,d1),file));
		};
		if(progress == null) r.request("GET",null); else {
			var pro = { loaded : 0, total : 0, file : file};
			r.request("GET",null,function(u,a,b) {
				pro.loaded = a;
				pro.total = b;
				pro.file = u;
				progress(pro);
			});
		}
	}
	,request: function(url,data,method,handler,headers,progress,options) {
		if(method == null) method = "POST";
		var _g = this;
		if(method == null || method == "") method = "POST"; else method = method.toUpperCase();
		var is_post = method == "POST";
		var is_get = method == "GET";
		var is_data = typeof(data) == "string";
		if(method == "GET") {
			var ps = url.split("?");
			if(ps.length == 1 || ps[1].length == 0) ps[1] = sirius_tools_Utils.paramsOf(data); else ps[1] += "&" + sirius_tools_Utils.paramsOf(data);
			url = ps.join("?");
		}
		var r = this._getReq(url);
		this._changed(url,"started",data,r);
		r.async = true;
		if(!is_data && data != null) sirius_utils_Dice.All(data,$bind(r,r.addParameter));
		if(headers != null) sirius_utils_Dice.All(headers,function(p,v) {
			r.setHeader(p,v);
		});
		r.onData = function(d) {
			if(handler != null) {
				if(options != null) {
					if(options.responseType == "blob") {
						var f = new FileReader();
						f.onloadend = function(e) {
							_g._changed(url,"loaded",d,r);
							handler(new sirius_net_Request(true,e.target.result,null,url));
						};
						f.readAsDataURL(d);
						return;
					}
				}
				_g._changed(url,"loaded",d,r);
				handler(new sirius_net_Request(true,d,null));
			}
		};
		r.onError = function(d1) {
			_g._changed(url,"error",d1,r);
			if(handler != null) handler(new sirius_net_Request(false,null,new sirius_errors_Error(-1,d1)));
		};
		var pro = { loaded : 0, total : 0, file : url};
		r.request(method,data,progress != null?function(u,a,b) {
			pro.loaded = a;
			pro.total = b;
			pro.file = u;
			progress(pro);
		}:null,options);
	}
	,get: function(module,data) {
		return sirius_Sirius.resources.get(module,data);
	}
	,__class__: sirius_net_Loader
};
var sirius_signals_ISignals = function() { };
sirius_signals_ISignals.__name__ = ["sirius","signals","ISignals"];
sirius_signals_ISignals.prototype = {
	__class__: sirius_signals_ISignals
};
var sirius_signals_Signals = $hx_exports.sru.signals.Signal = function(to) {
	this.object = to;
	this.reset();
};
sirius_signals_Signals.__name__ = ["sirius","signals","Signals"];
sirius_signals_Signals.__interfaces__ = [sirius_signals_ISignals];
sirius_signals_Signals.prototype = {
	_c: function(n) {
		if(!this.has(n)) Reflect.setField(this._l,n,new sirius_signals_Pipe(n,this));
		return Reflect.field(this._l,n);
	}
	,has: function(name) {
		return Object.prototype.hasOwnProperty.call(this._l,name);
	}
	,get: function(name) {
		return this._c(name);
	}
	,remove: function(name,handler) {
		return this._c(name).remove(handler);
	}
	,add: function(name,handler) {
		return this._c(name).add(handler);
	}
	,call: function(name,data) {
		if(this.has(name)) this.get(name).call(data);
		return this;
	}
	,reset: function(name) {
		if(name != null) {
			if(this.has(name)) this.get(name).reset();
		} else this._l = [];
	}
	,__class__: sirius_signals_Signals
};
var sirius_modules_ModLib = $hx_exports.sru.modules.ModLib = function() {
	this._predata = [];
};
sirius_modules_ModLib.__name__ = ["sirius","modules","ModLib"];
sirius_modules_ModLib.prototype = {
	_sanitize: function(name,data) {
		sirius_utils_Dice.Values(this._predata,function(v) {
			data = v(name,data);
		});
		return data;
	}
	,onModuleRequest: function(handler) {
		if(Lambda.indexOf(this._predata,handler) == -1) this._predata[this._predata.length] = handler;
	}
	,exists: function(module) {
		module = module.toLowerCase();
		return Object.prototype.hasOwnProperty.call(sirius_modules_ModLib.CACHE,module);
	}
	,remove: function(module) {
		if(this.exists(module)) Reflect.deleteField(sirius_modules_ModLib.CACHE,module);
	}
	,register: function(file,content) {
		var _g = this;
		content = content.split("[module:{").join("[!MOD!]");
		content = content.split("[Module:{").join("[!MOD!]");
		var sur = content.split("[!MOD!]");
		if(sur.length > 1) {
			sirius_Sirius.log("ModLib => PARSING " + file,1);
			sirius_utils_Dice.All(sur,function(p,v) {
				if(p > 0) {
					var i = v.indexOf("}]");
					if(i != -1) {
						var mod = JSON.parse("{" + HxOverrides.substr(v,0,i) + "}");
						var path = file;
						if(mod.name == null) mod.name = file; else {
							path += "#" + mod.name;
							sirius_Sirius.log("\t\tModLib => NAME " + path,1);
						}
						if(_g.exists(mod.name)) sirius_Sirius.log("\tModLib => OVERRIDE " + path,2);
						var end = v.indexOf("/EOF;");
						content = v.substring(i + 2,end == -1?v.length:end);
						if(mod.type == null || mod.type == "null" || mod.type == "html") {
							content = content.split("\r\n").join("\r").split("\n").join("\r");
							while(HxOverrides.substr(content,0,1) == "\r") content = content.substring(1,content.length);
							while(HxOverrides.substr(content,-1,null) == "\r") content = content.substring(0,content.length - 1);
						}
						if(mod.require != null) {
							var dependencies = mod.require.split(";");
							sirius_Sirius.log("\tModLib => " + path + " VERIFYING...",1);
							sirius_utils_Dice.Values(dependencies,function(v1) {
								var set = Reflect.field(sirius_modules_ModLib.CACHE,v1.toLowerCase());
								if(set == null) sirius_Sirius.log("\t\tModLib => REQUIRED " + v1,2); else content = content.split("{{@include:" + v1 + "}}").join(set);
							});
						}
						if(mod.data != null) content = sirius_utils_Filler.to(content,mod.data);
						if(mod.wrap != null) content = content.split("\r\n").join(mod.wrap).split("\n").join(mod.wrap).split("\r").join(mod.wrap);
						if(mod.type != null) {
							if(mod.type == "cssx") {
								sirius_css_Automator.build(content);
								content = "";
							} else if(mod.type == "style" || mod.type == "css" || mod.type == "script" || mod.type == "javascript") {
								sirius_Sirius.document.head.bind(content,mod.type,mod.id);
								content = "";
							}
						}
						if(mod.target != null) {
							var t = sirius_Sirius.one(mod.target);
							if(t != null) t.addChild(_g.build(mod.name));
						}
						var n = mod.name.toLowerCase();
						sirius_modules_ModLib.CACHE[n] = content;
						sirius_modules_ModLib.CACHE["@" + n] = path;
					} else sirius_Sirius.log("\tModLib => CONFIG ERROR " + file + "(" + HxOverrides.substr(v,0,15) + "...)",3);
				}
			});
		} else Reflect.setField(sirius_modules_ModLib.CACHE,file.toLowerCase(),content);
	}
	,get: function(name,data) {
		name = name.toLowerCase();
		if(!this.exists(name)) return "<span style='color:#ff0000;font-weight:bold;'>Undefined [Module:" + name + "]</span><br/>";
		var content = Reflect.field(sirius_modules_ModLib.CACHE,name);
		data = this._sanitize(name,data);
		if(data != null) return sirius_utils_Filler.to(content,data); else return content;
	}
	,getObj: function(name,data) {
		var val = this.get(name,data);
		if(val != null) try {
			return JSON.parse(val);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			haxe_Log.trace("Parsing error for MOD:[" + name + "]",{ fileName : "ModLib.hx", lineNumber : 166, className : "sirius.modules.ModLib", methodName : "getObj"});
		}
		return null;
	}
	,fill: function(module,data,sufix) {
		return sirius_utils_Filler.to(this.get(module),data,sufix);
	}
	,build: function(module,data,each) {
		var _g = this;
		var d = null;
		var signature = Reflect.field(sirius_modules_ModLib.CACHE,"@" + module.toLowerCase());
		if(each != null && ((data instanceof Array) && data.__enum__ == null)) {
			d = new sirius_dom_Div();
			sirius_utils_Dice.Values(data,function(v) {
				v = new sirius_dom_Display().writeHtml(_g.get(module,v));
				v = each(v);
				if(v != null && js_Boot.__instanceof(v,sirius_dom_IDisplay)) {
					d.attribute("sru-mod",signature);
					d.addChild(v);
				}
			});
		} else {
			d = new sirius_dom_Display().writeHtml(this.get(module,data));
			d.children().attribute("sru-mod",signature);
		}
		return d;
	}
	,buildIn: function(module,target,data,each) {
		var display = sirius_Sirius.one(target);
		if(display != null) display.addChild(this.build(module,data,each));
		return display;
	}
	,__class__: sirius_modules_ModLib
};
var sirius_seo_SEOTool = $hx_exports.SEO = function() {
	this._publish = [];
};
sirius_seo_SEOTool.__name__ = ["sirius","seo","SEOTool"];
sirius_seo_SEOTool.prototype = {
	_create: function(t,O) {
		if(Reflect.field(this,t) == null) {
			O = new O();
			this[t] = O;
			this._publish[this._publish.length] = O;
		}
	}
	,init: function(types) {
		if(types == null) types = 0;
		if(types == 0 || sirius_tools_Flag.FTest(types,sirius_seo_SEOTool.WEBSITE)) this._create("website",sirius_seo_WebSite);
		if(sirius_tools_Flag.FTest(types,sirius_seo_SEOTool.BREADCRUMBS)) this._create("breadcrumbs",sirius_seo_Breadcrumbs);
		if(sirius_tools_Flag.FTest(types,sirius_seo_SEOTool.PRODUCT)) this._create("product",sirius_seo_Product);
		if(sirius_tools_Flag.FTest(types,sirius_seo_SEOTool.ORGANIZATION)) this._create("organization",sirius_seo_Organization);
		if(sirius_tools_Flag.FTest(types,sirius_seo_SEOTool.PERSON)) this._create("person",sirius_seo_Person);
		if(sirius_tools_Flag.FTest(types,sirius_seo_SEOTool.SEARCH)) this._create("search",sirius_seo_Search);
		return this;
	}
	,publish: function() {
		sirius_utils_Dice.Values(this._publish,function(seo) {
			seo.publish();
		});
	}
	,__class__: sirius_seo_SEOTool
};
var sirius_Sirius = $hx_exports.Sirius = function() { };
sirius_Sirius.__name__ = ["sirius","Sirius"];
sirius_Sirius.main = function() {
	return sirius_Sirius._initialized || sirius_Sirius._preInit();
};
sirius_Sirius._loadController = function(e) {
	if(!sirius_Sirius._loaded) {
		sirius_Sirius._loaded = true;
		sirius_Sirius.document.checkBody();
		sirius_Sirius.agent.update();
		sirius_transitions_Ease.update();
		sirius_utils_Dice.Values(sirius_Sirius._loadPool,function(v) {
			if(v != null) v();
		});
		sirius_Sirius._loadPool = null;
		sirius_Sirius.updatePlugins();
		sirius_Sirius.log("Sirius => READY",1);
		window.document.removeEventListener("DOMContentLoaded",sirius_Sirius._loadController);
		Reflect.deleteField(sirius_Sirius,"_loadController");
		Reflect.deleteField(sirius_Sirius,"_loadPool");
		sirius_Sirius.document.body.autoLoad();
	}
};
sirius_Sirius._preInit = function() {
	if(!sirius_Sirius._initialized) {
		window.trace = console.log;
		sirius_Sirius._initialized = true;
		sirius_Sirius._loadPool = [];
		sirius_Sirius.document = sirius_dom_Document.ME();
		window.document.addEventListener("DOMContentLoaded",sirius_Sirius._loadController);
		sirius_Sirius.log("Sirius => LOADING...",1);
		Reflect.deleteField(sirius_Sirius,"_preInit");
		if(window.document.readyState == "complete") sirius_Sirius._loadController(null);
	}
	return true;
};
sirius_Sirius.updatePlugins = function() {
	if(sirius_Sirius._loaded) {
		var plist = window.sru ? window.sru.plugins : null;
		sirius_utils_Dice.All(plist,function(p,v) {
			sirius_Sirius.plugins[p] = v;
			Reflect.deleteField(plist,p);
			if(Object.prototype.hasOwnProperty.call(v,"onload")) {
				v.onload();
				sirius_Sirius.log("Plugin => " + p + "::onload()",1);
			} else sirius_Sirius.log("Plugin => " + p + " ADDED",1);
		});
	}
};
sirius_Sirius.one = function(q,t) {
	if(q == null) q = "*";
	if(t == null) t = window.document.querySelector(q); else t = t.querySelector(q);
	if(t != null) t = sirius_tools_Utils.displayFrom(t); else sirius_Sirius.log("Find => No result on selector (" + q + ")",2);
	return t;
};
sirius_Sirius.all = function(q,t) {
	if(q == null) q = "*";
	return sirius_utils_Table.recycle(q,t);
};
sirius_Sirius.jQuery = function(q) {
	if(q == null) q = "*";
	return $(q);;
};
sirius_Sirius.run = function(handler) {
	if(handler != null) {
		if(!sirius_Sirius._loaded && sirius_Sirius._loadPool != null) sirius_Sirius._loadPool[sirius_Sirius._loadPool.length] = handler; else handler();
	}
};
sirius_Sirius.inject = function(url,handler) {
	if(!((url instanceof Array) && url.__enum__ == null)) url = [url];
	sirius_dom_Script.require(url,handler);
};
sirius_Sirius.stylish = function(url,handler) {
	if(!((url instanceof Array) && url.__enum__ == null)) url = [url];
};
sirius_Sirius.status = function() {
	sirius_Sirius.log("Sirius => STATUS " + (sirius_Sirius._initialized?"READY ":"") + sirius_tools_Utils.toString(sirius_Sirius.agent,true),1);
	return sirius_Sirius.agent;
};
sirius_Sirius.module = function(file,target,content,handler,progress) {
	sirius_Sirius.run(function() {
		sirius_Sirius.loader.async(file,target,content,handler,progress);
	});
};
sirius_Sirius.request = function(url,data,method,handler,headers,progress,options) {
	if(method == null) method = "POST";
	sirius_Sirius.run(function() {
		sirius_Sirius.loader.request(url,data,method,handler,headers,progress,options);
	});
};
sirius_Sirius.log = function(q,type) {
	if(type == null) type = -1;
	sirius_Sirius.logger.push(q,type);
};
var sirius_css_CSSGroup = $hx_exports.sru.css.CSSGroup = function() {
	this.reset();
	if(this.container == null) {
		this.container = new sirius_dom_Style();
		this.CM = sirius_css_CSSGroup._style("**");
		this.XS = sirius_css_CSSGroup._style("xs");
		this.SM = sirius_css_CSSGroup._style("sm");
		this.MD = sirius_css_CSSGroup._style("md");
		this.LG = sirius_css_CSSGroup._style("lg");
		this.PR = sirius_css_CSSGroup._style("pr");
		window.document.head.appendChild(this.container.element);
	}
};
sirius_css_CSSGroup.__name__ = ["sirius","css","CSSGroup"];
sirius_css_CSSGroup._style = function(media) {
	var e;
	var _this = window.document;
	e = _this.createElement("style");
	e.setAttribute("media-type",media);
	e.type = "text/css";
	e.innerHTML = "";
	return e;
};
sirius_css_CSSGroup.prototype = {
	_checkSelector: function(value,content,current) {
		var iof = content.indexOf(value);
		var r = false;
		if(iof != -1) {
			r = true;
			if(current != null) {
				var eof = content.indexOf("}",iof);
				content = content.substring(iof,eof);
				r = current == content;
			}
		}
		return r;
	}
	,_add: function(id,style) {
		return id + "{" + (style != null?style:"/*<NULL>*/") + "}";
	}
	,_write: function(e,v,h) {
		if(v.length > 0) {
			if(h != "") e.innerHTML = (e.innerHTML.length > 0?h + e.innerHTML.split(h).join("").split(sirius_css_CSSGroup.EOF).join("") + v:h + v) + sirius_css_CSSGroup.EOF; else e.innerHTML = e.innerHTML + v;
			if(e.parentElement == null) this.container.element.appendChild(e);
		}
	}
	,getMode: function(id) {
		var r = id.split("-");
		if(r.length > 1) {
			id = r.pop();
			if(id.length == 2) return id.toUpperCase();
		}
		return "";
	}
	,exists: function(id,content,mode) {
		var k;
		if(mode != null) k = mode.toUpperCase(); else k = this.getMode(id);
		id = (HxOverrides.substr(id,0,1) == "."?"":".") + id + "{";
		return this._checkSelector(id,this[k||'CM'].innerHTML + this['style'+k],content);
	}
	,add: function(css,mode) {
		this['style'+(mode?mode.toUpperCase():'')] += css;
	}
	,set: function(id,style,mode) {
		this['style'+(mode?mode.toUpperCase():'')] += this._add(id, style);
	}
	,build: function() {
		this._write(this.CM,this.style,"");
		this._write(this.XS,this.styleXS,sirius_css_CSSGroup.SOF + sirius_css_CSSGroup.MEDIA_XS + "{");
		this._write(this.SM,this.styleSM,sirius_css_CSSGroup.SOF + sirius_css_CSSGroup.MEDIA_SM + "{");
		this._write(this.MD,this.styleMD,sirius_css_CSSGroup.SOF + sirius_css_CSSGroup.MEDIA_MD + "{");
		this._write(this.LG,this.styleLG,sirius_css_CSSGroup.SOF + sirius_css_CSSGroup.MEDIA_LG + "{");
		this._write(this.PR,this.stylePR,sirius_css_CSSGroup.SOF + sirius_css_CSSGroup.MEDIA_PR + "{");
		this.reset();
	}
	,reset: function() {
		this.style = this.styleXS = this.styleSM = this.styleMD = this.styleLG = this.stylePR = "";
	}
	,__class__: sirius_css_CSSGroup
};
var sirius_dom_Style = $hx_exports.sru.dom.Style = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("style");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
	this.object.type = "text/css";
};
sirius_dom_Style.__name__ = ["sirius","dom","Style"];
sirius_dom_Style.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Style.require = function(url,handler) {
	if(url.length > 0) {
		var file = url.shift();
		if(file != null) {
			var s = new sirius_dom_Link();
			s.href(file,function(e) {
				sirius_dom_Style.require(url,handler);
			});
			sirius_Sirius.document.head.addChild(s);
		}
	} else if(handler != null) handler();
};
sirius_dom_Style.__super__ = sirius_dom_Display;
sirius_dom_Style.prototype = $extend(sirius_dom_Display.prototype,{
	publish: function() {
		window.document.head.appendChild(this.element);
	}
	,mount: function(q,data,at) {
		if(at == null) at = -1;
		if(sirius_Sirius.resources.exists(q)) this.writeHtml(sirius_Sirius.resources.get(q,data)); else this.writeHtml("/* <!> mod:" + q + " not found */");
		return this;
	}
	,__class__: sirius_dom_Style
});
var sirius_css_Automator = $hx_exports.Automator = function() { };
sirius_css_Automator.__name__ = ["sirius","css","Automator"];
sirius_css_Automator._createGrid = function() {
	if(!sirius_css_Automator._inits.grid) {
		sirius_css_Automator.omnibuild("display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;",".shelf,.hack,.drawer");
		sirius_css_Automator.omnibuild("-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;",".shelf");
		sirius_css_Automator.omnibuild("-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;",".hack,.drawer");
		sirius_css_Automator.omnibuild("-webkit-box-direction:column;-ms-flex-direction:column;flex-direction:column;",".drawer");
		sirius_css_Automator.omnibuild("-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%;",".cel");
		sirius_css_Automator.omnibuild("-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start;",".o-left");
		sirius_css_Automator.omnibuild("-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end;",".o-right");
		sirius_css_Automator.omnibuild("-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;",".o-top");
		sirius_css_Automator.omnibuild("-webkit-box-align:center;-ms-flex-align:center;align-items:center;",".o-middle");
		sirius_css_Automator.omnibuild("-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;",".o-bottom");
		sirius_css_Automator.omnibuild("-ms-flex-pack:distribute;justify-content: space-around;",".o-sort");
		sirius_css_Automator.omnibuild("-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content: space-between;",".o-organize");
		sirius_css_Automator.omnibuild("-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;",".shelf.o-reverse,.hack.o-reverse");
		sirius_css_Automator.omnibuild("-webkit-box-direction:column;-ms-flex-direction:column-reverse;flex-direction:column-reverse;",".drawer.o-stack");
		sirius_css_Automator.omnibuild("-webkit-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;",".hack.o-stack");
		var i = 1;
		sirius_utils_Dice.Count(0,12,function(a,b,c) {
			if(a > 0) sirius_css_Automator.omnibuild("-webkit-box-ordinal-group:-" + a + ";-ms-flex-order:-" + a + ";order:-" + a + ";",".index-" + a + "n");
			sirius_css_Automator.omnibuild("-webkit-box-ordinal-group:" + a + ";-ms-flex-order:" + a + ";order:" + a + ";",".index-" + a);
			++a;
			var m = a / b * 100 - .001;
			var t = m.toFixed(5) + "%";
			var s = "flex-basis:" + t + ";max-width:" + t;
			sirius_css_Automator.omnibuild(s,".cel-" + a);
			if(a < b) sirius_css_Automator.omnibuild("margin-left:" + t,".rcel-" + a);
			return null;
		});
		sirius_css_Automator._inits.grid = true;
	}
};
sirius_css_Automator._screen = function(args) {
	if(sirius_css_Automator._scx.indexOf("#" + args[args.length - 1] + "#") != -1) return args.pop(); else return null;
};
sirius_css_Automator._parse = function(args) {
	var r = [];
	var i = false;
	if(args[args.length - 1] == "i") {
		i = true;
		args.pop();
	}
	sirius_utils_Dice.All(args,function(p,v) {
		if(v.length > 0) {
			var val = sirius_css_AutomatorRules.get(v);
			var v2;
			if(val != null) v2 = val.value; else v2 = null;
			r[p] = { index : p, key : v, entry : val, position : sirius_css_Automator.getPosition(v2,v), measure : sirius_css_Automator.getMeasure(v2,v), color : sirius_css_Automator.getColor(v2,v)};
		}
	});
	return new sirius_css_Entry(r,sirius_css_AutomatorRules.keys(),i);
};
sirius_css_Automator.reset = function() {
	if(!sirius_css_Automator._inits.reset) {
		sirius_css_Automator._inits.reset = true;
		sirius_css_Automator.css.add("html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}article,aside,footer,header,nav,section{display:block;}h1{font-size:2em;margin:0.67em 0;}figcaption,figure,main{display:block;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent;-webkit-text-decoration-skip:objects;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:inherit;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}dfn{font-style:italic;}mark{background-color:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}audio,video{display:inline-block;}audio:not([controls]){display:none;height:0;}img{border-style:none;}svg:not(:root){overflow:hidden;}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0;border:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{display:inline-block;vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details,menu{display:block;}summary{display:list-item;}canvas{display:inline-block;}template{display:none;}[hidden]{display:none;}*{box-sizing:border-box;}");
		sirius_css_Automator.css.add("@media(max-width:768px){.hidden-xs{display:none;}}@media(max-width:992px) and (min-width:768px){.hidden-sm{display:none;}}@media(max-width:1200px) and (min-width:992px){.hidden-md{display:none;}}@media(min-width:1201px){.hidden-lg{display:none;}}","");
		sirius_css_Automator._createGrid();
		sirius_css_Automator.css.build();
		sirius_Sirius.run(sirius_css_Automator.scan);
	}
};
sirius_css_Automator.unmute = function() {
	sirius_css_Automator._dev = true;
};
sirius_css_Automator.mute = function() {
	sirius_css_Automator._dev = false;
};
sirius_css_Automator.shadowConfig = function(data) {
	sirius_utils_Dice.All(data,function(p,v) {
		sirius_css_AutomatorRules.shadowConfig[p] = v;
	});
};
sirius_css_Automator.scan = function() {
	sirius_Sirius.all("noscript[automator]").each(function(o) {
		sirius_css_Automator.parse(o.element.innerText,o.attribute("automator").toLowerCase() == "all");
		o.dispose();
	});
	sirius_css_Automator.css.build();
};
sirius_css_Automator.search = function(t) {
	if(t == null) return;
	if(!(typeof(t) == "string")) {
		if(js_Boot.__instanceof(t,sirius_dom_IDisplay)) t = t.element.outerHTML; else if(js_Boot.__instanceof(t,HTMLElement)) t = t.outerHTML; else t = Std.string(t);
	}
	var t1 = t.split("class=");
	if(t1.length > 0) t1.shift();
	sirius_utils_Dice.Values(t1,function(v) {
		var i = HxOverrides.substr(v,0,1);
		var j = v.indexOf(i,1);
		if(j > 1) {
			v = v.substring(1,j);
			if(v.length > 0) sirius_css_Automator.build(v,null,true);
		}
	});
	sirius_css_Automator.css.build();
};
sirius_css_Automator.style = function(group,value) {
	sirius_css_Automator.css.add(group + "{" + value + "}");
};
sirius_css_Automator.apply = function() {
	sirius_css_Automator.css.build();
};
sirius_css_Automator.omnibuild = function(query,group) {
	var g = group != null && group.length > 0;
	if(query.indexOf(":") == -1) query = sirius_css_Automator.build(query,group,true).style; else if(g) sirius_css_Automator.css.add(group + "{" + query + "}",null);
	if(g) {
		sirius_css_Automator.css.styleXS += group.split(",").join("-xs,") + "-xs" + "{" + query + "}";
		sirius_css_Automator.css.styleSM += group.split(",").join("-sm,") + "-sm" + "{" + query + "}";
		sirius_css_Automator.css.styleMD += group.split(",").join("-md,") + "-md" + "{" + query + "}";
		sirius_css_Automator.css.styleLG += group.split(",").join("-lg,") + "-lg" + "{" + query + "}";
		sirius_css_Automator.css.stylePR += group.split(",").join("-pr,") + "-pr" + "{" + query + "}";
	}
};
sirius_css_Automator.build = function(query,group,silent) {
	if(query == null || query == "") {
		sirius_css_Automator.css.build();
		return null;
	}
	var c = query.split(" ");
	var m = null;
	var s;
	var g = sirius_tools_Utils.isValid(group);
	var r = "";
	var e = "";
	if(g && group.length > 0) m = sirius_css_Automator._screen(group.split("-"));
	sirius_utils_Dice.Values(c,function(v) {
		if(v.length > 1) {
			v = v.split("\r").join(" ").split("\n").join(" ").split("\t").join(" ");
			c = v.split("-");
			if(c.length > 0) {
				if(c[0] == "ref") return;
				if(g) {
					sirius_css_Automator._screen(c);
					var en = sirius_css_Automator._parse(c);
					s = en.build();
					if(sirius_tools_Utils.isValid(s)) r += s + ";"; else if(sirius_css_Automator._dev == true) sirius_Sirius.log("Automator => ERROR (" + Std.string(en) + ")");
				} else {
					m = sirius_css_Automator._screen(c);
					if(!sirius_css_Automator.css.exists(v,m)) {
						s = sirius_css_Automator._parse(c).build();
						if(sirius_tools_Utils.isValid(s)) {
							if(sirius_css_Automator._dev == true) sirius_Sirius.log("Automator => ." + v + " {" + s + ";}",1);
							sirius_css_Automator.css.set("." + v,s,m);
							r += s + ";";
						}
					}
				}
			}
		}
	});
	if(g && sirius_tools_Utils.isValid(r)) {
		if(sirius_css_Automator._dev == true) sirius_Sirius.log("Automator => " + group + " {" + r + "}",1);
		sirius_css_Automator.css.set(group,r,m);
	}
	if(silent == null || silent == false) sirius_css_Automator.css.build();
	return { style : r, group : group, media : m};
};
sirius_css_Automator.parse = function(data,omni) {
	sirius_utils_Dice.Values(data.split(";"),function(v) {
		var set = v.split("\r\n").join(" ").split("\r").join(" ").split("\n").join(" ").split("=");
		if(set.length == 2) {
			if(omni) sirius_css_Automator.omnibuild(set[1],set[0]); else sirius_css_Automator.build(set[1],set[0],true);
		} else if(set.length == 1) {
			if(omni) sirius_css_Automator.omnibuild(set[0],null); else sirius_css_Automator.build(set[0],null,true);
		}
	});
};
sirius_css_Automator.getPosition = function(r,x) {
	return "tblrcm".indexOf(x) != -1 || "#top#bottom#left#right#center#middle#".indexOf(x) != -1;
};
sirius_css_Automator.getColor = function(r,x) {
	var argb = x.length == 9;
	if(HxOverrides.substr(x,0,1) == "x" && (x.length == 4 || x.length == 7 || argb)) {
		x = "#" + x.substring(1,x.length);
		if(argb) return new sirius_math_ARGB(x).css(); else return x;
	} else if(sirius_tools_Utils.isValid(r) && HxOverrides.substr(r,0,1) == "#") return r;
	return null;
};
sirius_css_Automator.getMeasure = function(r,x) {
	if(r == null) {
		var l = x.length;
		if(HxOverrides.substr(x,l - 2,2) == "pc") r = x.split("d").join(".").split("pc").join("%"); else if(HxOverrides.substr(x,l - 1,1) == "n" && Std.parseInt(HxOverrides.substr(x,0,2)) != null) r = "-" + x.split("n").join("") + "px"; else {
			var n = Std.parseInt(x);
			if(n != null) r = n + (n > 0?"px":"");
		}
		return r;
	} else return null;
};
var sirius_math_IARGB = function() { };
sirius_math_IARGB.__name__ = ["sirius","math","IARGB"];
sirius_math_IARGB.prototype = {
	__class__: sirius_math_IARGB
};
var sirius_math_ARGB = $hx_exports.ARGB = function(q,g,b,a) {
	var s = typeof(q) == "string" && (q.substr(0,3) == "rgb" || q.substr(0,2) == "0x" || q.substr(0,1) == "#");
	if(s && q.substr(0,3) == "rgb") {
		s = false;
		q = q.split(q.substr(0,4) == "rgba"?"rgba":"rgb")[1].split("(").join("").split(")").join("").split(" ").join("");
		q = q.split(",");
		if(q.length == 4) a = Std.parseInt(q[3]);
		b = Std.parseInt(q[2]);
		g = Std.parseInt(q[1]);
		q = Std.parseInt(q[0]);
	}
	if(!s && q <= 255 && g != null) {
		if(a <= 255) {
			if(a < 0) this.a = 0; else this.a = a;
		} else this.a = 255;
		if(q <= 255) {
			if(q < 0) this.r = 0; else this.r = q;
		} else this.r = 255;
		if(g <= 255) {
			if(g < 0) this.g = 0; else this.g = g;
		} else this.g = 255;
		if(b <= 255) {
			if(b < 0) this.b = 0; else this.b = b;
		} else this.b = 255;
	} else {
		var x;
		if(s) {
			q = q.split("#").join("0x");
			x = Std.parseInt(q);
			if(q.length < 10) x = x | -16777216;
		} else x = q;
		this.a = x >> 24 & 255;
		this.r = x >> 16 & 255;
		this.g = x >> 8 & 255;
		this.b = x & 255;
	}
};
sirius_math_ARGB.__name__ = ["sirius","math","ARGB"];
sirius_math_ARGB.__interfaces__ = [sirius_math_IARGB];
sirius_math_ARGB.from = function(q,g,b,a) {
	return new sirius_math_ARGB(q,g,b,a);
};
sirius_math_ARGB.prototype = {
	_v16: function(v) {
		var a = v.toString(16);
		if(a.length == 1) return "0" + a; else return a;
	}
	,value32: function() {
		return this.a << 24 | this.r << 16 | this.g << 8 | this.b;
	}
	,value: function() {
		return this.r << 16 | this.g << 8 | this.b;
	}
	,invert: function() {
		return new sirius_math_ARGB(255 - this.r,255 - this.g,255 - this.b,this.a);
	}
	,range: function(rate,alpha) {
		if(alpha == null) alpha = 0;
		if(rate < .01) rate = .01;
		var r2 = this.r * rate | 0;
		var g2 = this.g * rate | 0;
		var b2 = this.b * rate | 0;
		return new sirius_math_ARGB(r2 > 255?255:r2,g2 > 255?255:g2,b2 > 255?255:b2,alpha == 0?this.a:alpha * this.a | 0);
	}
	,change: function(ammount) {
		var r2 = this.r + ammount;
		var g2 = this.g + ammount;
		var b2 = this.b + ammount;
		return new sirius_math_ARGB(r2 > 255?255:r2,g2 > 255?255:g2,b2 > 255?255:b2,this.a);
	}
	,hex: function() {
		var r = this.value().toString(16);
		while(r.length < 6) r = "0" + r;
		return "#" + r;
	}
	,css: function() {
		if(this.a == 255 || this.a == null) return "rgb(" + this.r + "," + this.g + "," + this.b + ")"; else return "rgba(" + this.r + "," + this.g + "," + this.b + "," + (this.a / 255).toFixed(2) + ")";
	}
	,xcss: function() {
		return "x" + this._v16(this.a) + this._v16(this.r) + this._v16(this.g) + this._v16(this.b);
	}
	,__class__: sirius_math_ARGB
};
var sirius_css_AutomatorRules = $hx_exports.AutomatorRules = function() { };
sirius_css_AutomatorRules.__name__ = ["sirius","css","AutomatorRules"];
sirius_css_AutomatorRules.numericKey = function(d,k,n) {
	var v = k.entry.value;
	if(n != null) {
		if(!n.position) {
			if(n.color != null) return v + "-color:";
			if(d.head.key == "bord") return sirius_css_AutomatorRules.borderFix(v,d,k,n);
			if(n.measure != null) return v + ":";
			return v + ":";
		} else return v + "-";
	}
	return v + (k.index == 0?"-":"");
};
sirius_css_AutomatorRules.borderFix = function(v,d,k,n) {
	if(n.measure != null) return v + "-width:";
	return v + (d.hasKey("rad",1)?"-":"-style:");
};
sirius_css_AutomatorRules.shiftKey = function(d,k,n) {
	return "-" + k.entry.value;
};
sirius_css_AutomatorRules.commonKey = function(d,k,n) {
	return k.entry.value + (n != null?":":"");
};
sirius_css_AutomatorRules.commonArray = function(d,k,n) {
	d.cancel();
	return k.entry.value + ":" + d.compile(1).join(" ").split("_").join("-");
};
sirius_css_AutomatorRules.colorKey = function(d,k,n) {
	if(n != null && n.measure != null) {
		n.skip = true;
		var v = Std.parseInt(n.measure) / 100 * 255;
		return new sirius_math_ARGB("0x" + k.entry.value.split("#").join((v >> 0).toString(16))).css();
	}
	return k.entry.value;
};
sirius_css_AutomatorRules.positionKey = function(d,k,n) {
	return (k.index == 0?"position:":"") + sirius_css_AutomatorRules.commonKey(d,k,n);
};
sirius_css_AutomatorRules.pushKey = function(d,k,n) {
	return k.entry.value + "-";
};
sirius_css_AutomatorRules.valueKey = function(d,k,n) {
	return k.entry.value + ":";
};
sirius_css_AutomatorRules.alphaKey = function(d,k,n) {
	if(d.head == k) {
		d.cancel();
		var o = Std.parseInt(n.key);
		if(o > 100) o = 100; else if(o < 0) o = 0;
		return k.entry.value + ":" + (o/100).toFixed(2);
	} else return sirius_css_AutomatorRules.valueKey(d,k,n);
};
sirius_css_AutomatorRules.appendKey = function(d,k,n) {
	return k.entry.value + (n != null?"-":"");
};
sirius_css_AutomatorRules.displayKey = function(d,k,n) {
	if(d.head == k) return "display:" + (k.key == "hidden"?"none":"block"); else return k.entry.value;
};
sirius_css_AutomatorRules.indexKey = function(d,k,n) {
	if(d.head == k) {
		d.cancel();
		return "z-index:" + n.key;
	}
	return k.key;
};
sirius_css_AutomatorRules.scrollKey = function(d,k,n) {
	var v = k.entry.value;
	if(d.head.key == "scroll") {
		if(n != null && n.key == "none") {
			d.cancel();
			return "overflow:hidden";
		}
		if(k.index == 0) return "";
		return "overflow" + (v == "x"?"-x":"-y") + ":scroll;overflow" + (v == "x"?"-y":"-x") + ":hidden";
	}
	return sirius_css_AutomatorRules.commonKey(d,k,n);
};
sirius_css_AutomatorRules.strokeKey = function(d,k,n) {
	if(d.head == k) {
		d.cancel();
		var c = new sirius_math_ARGB(d.keys[1].color).hex();
		n = d.get(2);
		var l;
		if(n != null) l = Std.parseInt(n.measure); else l = 1;
		var x = l;
		var s = [];
		var xs;
		xs = x + (x == 0?"":"px");
		s[s.length] = "-" + xs + " 0 1px " + c;
		s[s.length] = "0 " + xs + " 1px " + c;
		s[s.length] = "" + xs + " 0 1px " + c;
		s[s.length] = "0 -" + xs + " 1px " + c;
		return "text-shadow:" + s.join(",");
	}
	return sirius_css_AutomatorRules.commonKey(d,k,n);
};
sirius_css_AutomatorRules.shadowKey = function(d,k,n) {
	if(d.head == k) {
		d.cancel();
		var i = d.tail.key == "i";
		var s = n.key == "txt";
		var t = new sirius_math_ARGB(d.keys[s?2:1].color);
		var x = d.compile(s?3:2);
		var y = 0;
		var z;
		if(x[0] == null) z = sirius_css_AutomatorRules.shadowConfig.distance; else z = Std.parseInt(x[0]);
		var a;
		if(x[1] == null) a = sirius_css_AutomatorRules.shadowConfig.direction; else a = Std.parseInt(x[1]);
		var w;
		if(x[2] == null) w = sirius_css_AutomatorRules.shadowConfig.draws; else w = Std.parseInt(x[2]);
		var u;
		if(x[3] == null) u = sirius_css_AutomatorRules.shadowConfig.strength; else u = Std.parseInt(x[3]);
		var c = sirius_css_AutomatorRules.shadowConfig.flex;
		var cos = Math.cos(.017453 * a);
		var sin = Math.sin(.017453 * a);
		var r = [];
		var tx = 0;
		var ty = 0;
		if(a % 90 == 0) w = z;
		w = Math.floor(z / w);
		if(w <= 0) w = 1;
		while(y < z) {
			y += w;
			if(y > z) y = z;
			tx = cos * y;
			ty = sin * y;
			r[r.length] = (tx == 0?"0":Math.round(tx) + "px") + " " + (ty == 0?"0":Math.round(ty) + "px") + " 0 " + t.range(.8 - y / z * c).hex();
		}
		y = 0;
		var oX = cos * z;
		var oY = sin * z;
		while(y < u) {
			++y;
			tx = cos * y + oX;
			ty = sin * y + oY;
			r[r.length] = (tx == 0?"0":Math.round(tx) + "px") + " " + (ty == 0?"0":Math.round(ty) + "px") + " 0 rgba(0,0,0,.1)";
		}
		return (s?"text-shadow":"box-shadow") + ":" + r.join(",") + (i?" !important":"");
	}
	return "shadow";
};
sirius_css_AutomatorRules.textKey = function(d,k,n) {
	if(k.index == 0) {
		if(n != null && !n.position) {
			if(n.measure != null) return "font-size:"; else if(n.key != "j") return "color:";
		}
		if(n.key != "dec") return "text-align:";
	}
	return "text-";
};
sirius_css_AutomatorRules.set = function(rule,value) {
	if((rule instanceof Array) && rule.__enum__ == null) sirius_utils_Dice.All(rule,function(p,v) {
		sirius_css_AutomatorRules._KEYS[p] = v;
	}); else if(value != null) Reflect.setField(sirius_css_AutomatorRules._KEYS,rule,value);
};
sirius_css_AutomatorRules.get = function(name) {
	var e = Reflect.field(sirius_css_AutomatorRules._KEYS,name);
	return e;
};
sirius_css_AutomatorRules.blank = function(name) {
	var e = { value : name, verifier : sirius_css_AutomatorRules.commonKey};
	sirius_css_AutomatorRules._KEYS[name] = e;
	return e;
};
sirius_css_AutomatorRules.keys = function() {
	return sirius_css_AutomatorRules._KEYS;
};
var sirius_css_Entry = function(keys,dict,i) {
	this.important = i;
	this.keys = keys;
	this.head = keys[0];
	this.tail = keys[keys.length - 1];
	this.missing = 0;
	this.canceled = false;
};
sirius_css_Entry.__name__ = ["sirius","css","Entry"];
sirius_css_Entry.prototype = {
	build: function() {
		var _g = this;
		var r = null;
		if(this.head != null) {
			r = "";
			var c = 0;
			var t = this.keys.length;
			sirius_utils_Dice.Values(this.keys,function(v) {
				if(!v.skip) {
					_g.next = _g.keys[++c];
					if(v.entry != null) r += v.entry.verifier(_g,v,_g.next); else r += _g._valueOf(v,t,c);
				}
				return _g.canceled;
			});
		}
		return r + (this.important?" !important":"");
	}
	,cancel: function() {
		this.canceled = true;
	}
	,_valueOf: function(v,t,c) {
		if(v.color != null) return v.color;
		if(v.measure != null) return v.measure;
		++this.missing;
		return v.key + (t == c?"":t - 1 == c?":":"-");
	}
	,get: function(i) {
		if(i < this.keys.length) return this.keys[i]; else return null;
	}
	,hasKey: function(s,i,e) {
		var _g = this;
		if(e == null) e = this.keys.length;
		return !sirius_utils_Dice.Count(i,e,function(a,b,c) {
			return _g.keys[a].key == s;
		}).completed;
	}
	,compile: function(s,e) {
		var _g = this;
		var r = [];
		if(e == null) e = this.keys.length;
		sirius_utils_Dice.Count(s,e,function(a,b,c) {
			r[r.length] = _g.keys[a].key;
			return false;
		});
		return r;
	}
	,__class__: sirius_css_Entry
};
var sirius_css_IEntry = function() { };
sirius_css_IEntry.__name__ = ["sirius","css","IEntry"];
sirius_css_IEntry.prototype = {
	__class__: sirius_css_IEntry
};
var sirius_css_IKey = function() { };
sirius_css_IKey.__name__ = ["sirius","css","IKey"];
sirius_css_IKey.prototype = {
	__class__: sirius_css_IKey
};
var sirius_css_XCSS = $hx_exports.XCSS = function(data) {
	this.reset();
	if(data != null) this.flush(data);
};
sirius_css_XCSS.__name__ = ["sirius","css","XCSS"];
sirius_css_XCSS.create = function(target,data) {
	return new sirius_css_XCSS(data).apply(target);
};
sirius_css_XCSS.prototype = {
	flush: function(data) {
		sirius_utils_Dice.All(data,$bind(this,this.write));
	}
	,write: function(param,value) {
		if(sirius_css_XCSS.enabled == true) {
			var cx = HxOverrides.substr(param,0,1).toUpperCase() + HxOverrides.substr(param,1,param.length - 1);
			this.data["webkit" + cx] = value;
			this.data["Moz" + cx] = value;
			this.data["ms" + cx] = value;
			this.data["O" + cx] = value;
		}
		this.data[param] = value;
	}
	,apply: function(target) {
		target.style(this.data);
		return this;
	}
	,reset: function() {
		this.data = { };
		return this;
	}
	,__class__: sirius_css_XCSS
};
var sirius_data_IDataCache = function() { };
sirius_data_IDataCache.__name__ = ["sirius","data","IDataCache"];
sirius_data_IDataCache.prototype = {
	__class__: sirius_data_IDataCache
	,__properties__: {get_data:"get_data"}
};
var sirius_data_DataCache = $hx_exports.sru.data.DataCache = function(name,path,expire,base64) {
	if(expire == null) expire = 0;
	this._name = name;
	this._path = path;
	this._expire = expire;
	this._base64 = base64;
	this.clear();
};
sirius_data_DataCache.__name__ = ["sirius","data","DataCache"];
sirius_data_DataCache.__interfaces__ = [sirius_data_IDataCache];
sirius_data_DataCache.prototype = {
	get_data: function() {
		return this._DB;
	}
	,_now: function() {
		return new Date().getTime();
	}
	,clear: function(p) {
		if(p != null) {
			if(p != "__time__") Reflect.deleteField(this._DB,p);
		} else {
			this._DB = { };
			if(this._expire > 0) this._DB.__time__ = this._now();
			js_Cookie.remove(this._name,this._path);
		}
		return this;
	}
	,set: function(p,v) {
		this._DB[p] = v;
		return this;
	}
	,merge: function(p,v) {
		if((v instanceof Array) && v.__enum__ == null && Object.prototype.hasOwnProperty.call(this._DB,this._name)) {
			var t = this.get(p);
			if((t instanceof Array) && t.__enum__ == null) return this.set(p,t.concat(v));
		}
		this._DB[p] = v;
		return this;
	}
	,get: function(id) {
		var d;
		if(id != null) d = Reflect.field(this._DB,id); else d = null;
		if(d == null) {
			d = { };
			this.set(id,d);
		}
		return d;
	}
	,exists: function(name) {
		if(name != null) return Object.prototype.hasOwnProperty.call(this._DB,name); else return this._loaded;
	}
	,save: function() {
		var data = sirius_serial_IOTools.encodeBase64(this._DB);
		js_Cookie.set(this._name,data,this._expire > 0?this._expire:2592000,this._path);
		return this;
	}
	,_sign: function(add) {
		if(add) this._DB.__time__ = this._now(); else {
			if(this._expire > 0) this.__time__ = this._DB.__time__; else this.__time__ = 0;
			Reflect.deleteField(this._DB,"__time__");
		}
	}
	,load: function() {
		this._DB = null;
		if(js_Cookie.exists(this._name)) {
			var a = haxe_crypto_Base64.decode(js_Cookie.get(this._name));
			haxe_Log.trace(a,{ fileName : "DataCache.hx", lineNumber : 182, className : "sirius.data.DataCache", methodName : "load"});
			this._DB = sirius_serial_IOTools.decodeBase64(js_Cookie.get(this._name),true);
			haxe_Log.trace(this._DB,{ fileName : "DataCache.hx", lineNumber : 184, className : "sirius.data.DataCache", methodName : "load"});
		}
		if(this._DB == null || this._expire != 0 && (this._DB.__time__ == null || this._now() - this._DB.__time__ >= this._expire)) {
			this._DB = { };
			this._loaded = false;
		} else {
			this._sign(false);
			this._loaded = true;
		}
		return this._loaded;
	}
	,refresh: function() {
		this.__time__ = this._now();
		return this;
	}
	,json: function(print) {
		var result = sirius_serial_JsonTool.stringfy(this._DB,null," ");
		if(print) {
			if(print) haxe_Log.trace(result,{ fileName : "DataCache.hx", lineNumber : 210, className : "sirius.data.DataCache", methodName : "json"});
		}
		return result;
	}
	,base64: function(print) {
		var result = sirius_serial_IOTools.encodeBase64(this._DB);
		if(print) {
			if(print) haxe_Log.trace(result,{ fileName : "DataCache.hx", lineNumber : 216, className : "sirius.data.DataCache", methodName : "base64"});
		}
		return result;
	}
	,__class__: sirius_data_DataCache
	,__properties__: {get_data:"get_data"}
};
var sirius_data_IDataSet = function() { };
sirius_data_IDataSet.__name__ = ["sirius","data","IDataSet"];
sirius_data_IDataSet.prototype = {
	__class__: sirius_data_IDataSet
};
var sirius_data_DataSet = function(q) {
	if(q != null) this._content = q; else this._content = { };
};
sirius_data_DataSet.__name__ = ["sirius","data","DataSet"];
sirius_data_DataSet.__interfaces__ = [sirius_data_IDataSet];
sirius_data_DataSet.prototype = {
	get: function(p) {
		return Reflect.field(this._content,p);
	}
	,set: function(p,v) {
		Reflect.setField(this._content,p,v);
		return this;
	}
	,unset: function(p) {
		Reflect.deleteField(this._content,p);
		return this;
	}
	,exists: function(p) {
		return Reflect.hasField(this._content,p);
	}
	,clear: function() {
		this._content = { };
		return this;
	}
	,find: function(v) {
		var r = [];
		sirius_utils_Dice.All(this._content,function(p,x) {
			if(typeof(x) == "string" && x.indexOf(v) != -1) r[r.length] = p; else if(x == v) r[r.length] = p;
		});
		return r;
	}
	,index: function() {
		var r = [];
		sirius_utils_Dice.Params(this._content,$arrayPushClosure(r));
		return r;
	}
	,values: function() {
		var r = [];
		sirius_utils_Dice.Values(this._content,$arrayPushClosure(r));
		return r;
	}
	,filter: function(p,handler) {
		var r = new sirius_data_DataSet();
		var h = handler != null;
		sirius_utils_Dice.All(this._content,function(p2,v) {
			if(js_Boot.__instanceof(v,sirius_data_IDataSet)) {
				if(v.exists(p)) r.set(p2,h?handler(v):v.get(p));
			} else if(Reflect.hasField(v,p)) r.set(p2,h?handler(v):Reflect.field(v,p));
		});
		return r;
	}
	,each: function(handler) {
		sirius_utils_Dice.All(this._content,handler);
	}
	,data: function() {
		return this._content;
	}
	,__class__: sirius_data_DataSet
};
var sirius_data_IFormData = function() { };
sirius_data_IFormData.__name__ = ["sirius","data","IFormData"];
sirius_data_IFormData.prototype = {
	__class__: sirius_data_IFormData
};
var sirius_data_FormData = $hx_exports.sru.data.FormData = function(target) {
	if(target != null) {
		if(typeof(target) == "string") this.scan(sirius_Sirius.one(target));
		if(js_Boot.__instanceof(target,sirius_dom_IDisplay)) this.scan(target);
	}
};
sirius_data_FormData.__name__ = ["sirius","data","FormData"];
sirius_data_FormData.__interfaces__ = [sirius_data_IFormData];
sirius_data_FormData.prototype = {
	reset: function() {
		this.params = [];
		return this;
	}
	,scan: function(target) {
		var _g = this;
		this.reset();
		if(target == null) this._form = sirius_Sirius.document.body; else this._form = target;
		target.all("[form-data]").each(function(o) {
			_g.params[_g.params.length] = new sirius_data_FormParam(o);
		});
		return this;
	}
	,valueOf: function(p) {
		var res = sirius_utils_Dice.Values(this.params,function(v) {
			return v.getName() == p;
		});
		return res.value;
	}
	,isValid: function(needAll) {
		var _g = this;
		this.errors = [];
		sirius_utils_Dice.Values(this.params,function(v) {
			if(!v.isValid(needAll)) _g.errors[_g.errors.length] = v;
		});
		return this.errors.length == 0;
	}
	,getParam: function(p) {
		var res = sirius_utils_Dice.Values(this.params,function(v) {
			return v.getName() == p;
		});
		return res.value;
	}
	,getData: function(append) {
		var d;
		if(append == null) d = { }; else d = append;
		sirius_utils_Dice.Values(this.params,function(v) {
			Reflect.setField(d,v.getName(),v.getValue());
			return;
		});
		return d;
	}
	,clear: function() {
		sirius_utils_Dice.Values(this.params,function(v) {
			v.clear();
		});
		return this;
	}
	,send: function(url,handler,method) {
		if(method == null) method = "post";
		sirius_Sirius.request(url,this.getData(),null,handler,method);
	}
	,match: function(a,b) {
		return this.getParam(a).getValue() == this.getParam(b).getValue();
	}
	,__class__: sirius_data_FormData
};
var sirius_data_FormParam = function(e) {
	this._e = e;
};
sirius_data_FormParam.__name__ = ["sirius","data","FormParam"];
sirius_data_FormParam.prototype = {
	getName: function() {
		return this._e.attribute("form-data");
	}
	,getValidator: function() {
		return this._e.attribute("form-validate");
	}
	,isRequired: function() {
		return this._e.hasAttribute("form-required") && sirius_utils_Dice.Match(["1","true","yes"],this._e.attribute("form-required")) > 0;
	}
	,getMessage: function() {
		return this._e.attribute("form-message");
	}
	,getValue: function() {
		if(js_Boot.__instanceof(this._e,sirius_dom_Select)) {
			var e = this._e;
			if(!e.hasValue()) return null;
		}
		return this._e.attribute("value");
	}
	,isValid: function(require) {
		return !require && !this.isRequired() || sirius_tools_Utils.isValid(this.getValue());
	}
	,clear: function() {
		if(sirius_utils_Dice.Match(["1","true","yes"],this._e.attribute("form-persistent")) == 0) this._e.attribute("value","");
	}
	,getCell: function() {
		return this._e;
	}
	,__class__: sirius_data_FormParam
};
var sirius_data_IFragments = function() { };
sirius_data_IFragments.__name__ = ["sirius","data","IFragments"];
sirius_data_IFragments.prototype = {
	__class__: sirius_data_IFragments
};
var sirius_data_Fragments = function(value,separator) {
	if(value == null) this.value = ""; else this.value = value;
	if(separator != null && separator.length > 0) this.split(separator); else this.clear();
};
sirius_data_Fragments.__name__ = ["sirius","data","Fragments"];
sirius_data_Fragments.__interfaces__ = [sirius_data_IFragments];
sirius_data_Fragments.prototype = {
	_sel: function(i,e) {
		var r = [];
		while(i != e) {
			var p = this.pieces[i++];
			if(p != null && p != "") r[r.length] = p;
		}
		return "/" + r.join("/") + "/";
	}
	,split: function(separator) {
		this.pieces = sirius_tools_Utils.clearArray(this.value.split(separator));
		if(this.pieces.length == 0) this.pieces[0] = "";
		this.first = this.pieces[0];
		this.last = this.pieces[this.pieces.length - 1];
		this.glue(separator);
		return this;
	}
	,find: function(value) {
		return Lambda.indexOf(this.pieces,value) != -1;
	}
	,glue: function(value) {
		this.value = this.pieces.join(value);
		return this;
	}
	,addPiece: function(value,at) {
		if(at == null) at = -1;
		if(at == 0) this.pieces.unshift(value); else if(at == -1 || at >= this.pieces.length) this.pieces.push(value); else {
			var tail = this.pieces.splice(at,this.pieces.length - at);
			this.pieces.push(value);
			this.pieces = this.pieces.concat(tail);
		}
		return this;
	}
	,get: function(i,e) {
		if(e == null || e <= i) {
			if(i < this.pieces.length) return this.pieces[i]; else return "";
		} else return this._sel(i,e);
	}
	,set: function(i,val) {
		if(i > this.pieces.length) i = this.pieces.length;
		if(val != null) this.pieces[i] = val;
		return this;
	}
	,clear: function() {
		this.pieces = [];
		this.first = "";
		this.last = "";
		return this;
	}
	,__class__: sirius_data_Fragments
};
var sirius_dom_A = $hx_exports.sru.dom.A = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("a");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_A.__name__ = ["sirius","dom","A"];
sirius_dom_A.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_A.__super__ = sirius_dom_Display;
sirius_dom_A.prototype = $extend(sirius_dom_Display.prototype,{
	href: function(url) {
		if(url != null) this.attribute("href",url);
		return this.attribute("href");
	}
	,target: function(q) {
		if(q != null) this.attribute("target",q);
		return this.attribute("target");
	}
	,__class__: sirius_dom_A
});
var sirius_dom_Area = $hx_exports.sru.dom.Area = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("area");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Area.__name__ = ["sirius","dom","Area"];
sirius_dom_Area.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Area.__super__ = sirius_dom_Display;
sirius_dom_Area.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Area
});
var sirius_dom_Audio = $hx_exports.sru.dom.Audio = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("audio");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Audio.__name__ = ["sirius","dom","Audio"];
sirius_dom_Audio.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Audio.__super__ = sirius_dom_Display;
sirius_dom_Audio.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Audio
});
var sirius_dom_B = $hx_exports.sru.dom.B = function(q) {
	if(q == null) q = window.document.createElement("B");
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_B.__name__ = ["sirius","dom","B"];
sirius_dom_B.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_B.__super__ = sirius_dom_Display;
sirius_dom_B.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_B
});
var sirius_dom_BR = $hx_exports.sru.dom.BR = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("br");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_BR.__name__ = ["sirius","dom","BR"];
sirius_dom_BR.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_BR.__super__ = sirius_dom_Display;
sirius_dom_BR.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_BR
});
var sirius_dom_Base = $hx_exports.sru.dom.Base = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("base");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Base.__name__ = ["sirius","dom","Base"];
sirius_dom_Base.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Base.__super__ = sirius_dom_Display;
sirius_dom_Base.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Base
});
var sirius_dom_Body = $hx_exports.sru.dom.Body = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("body");
	}
	sirius_dom_Display.call(this,q,null);
	this._body = this.element;
	window.addEventListener("resize",$bind(this,this._wResize));
};
sirius_dom_Body.__name__ = ["sirius","dom","Body"];
sirius_dom_Body.__super__ = sirius_dom_Display;
sirius_dom_Body.prototype = $extend(sirius_dom_Display.prototype,{
	_wResize: function(e) {
		this.events.resize().call();
	}
	,maxScrollX: function() {
		return this._body.scrollWidth - sirius_tools_Utils.viewportWidth();
	}
	,maxScrollY: function() {
		return this._body.scrollHeight - sirius_tools_Utils.viewportHeight();
	}
	,__class__: sirius_dom_Body
});
var sirius_dom_Div = $hx_exports.sru.dom.Div = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("div");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Div.__name__ = ["sirius","dom","Div"];
sirius_dom_Div.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Div.__super__ = sirius_dom_Display;
sirius_dom_Div.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Div
});
var sirius_dom_Button = function(q) {
	sirius_dom_Div.call(this,q);
	this.style("cursor","pointer");
};
sirius_dom_Button.__name__ = ["sirius","dom","Button"];
sirius_dom_Button.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Button.__super__ = sirius_dom_Div;
sirius_dom_Button.prototype = $extend(sirius_dom_Div.prototype,{
	__class__: sirius_dom_Button
});
var sirius_dom_Canvas = $hx_exports.sru.dom.Canvas = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("canvas");
	}
	sirius_dom_Display.call(this,q,null);
	this.paper = this.element;
};
sirius_dom_Canvas.__name__ = ["sirius","dom","Canvas"];
sirius_dom_Canvas.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Canvas.__super__ = sirius_dom_Display;
sirius_dom_Canvas.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Canvas
});
var sirius_dom_Caption = $hx_exports.sru.dom.Caption = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("caption");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Caption.__name__ = ["sirius","dom","Caption"];
sirius_dom_Caption.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Caption.__super__ = sirius_dom_Display;
sirius_dom_Caption.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Caption
});
var sirius_dom_Col = $hx_exports.sru.dom.Col = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("col");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Col.__name__ = ["sirius","dom","Col"];
sirius_dom_Col.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Col.__super__ = sirius_dom_Display;
sirius_dom_Col.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Col
});
var sirius_dom_Content = $hx_exports.sru.dom.Content = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("content");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Content.__name__ = ["sirius","dom","Content"];
sirius_dom_Content.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Content.__super__ = sirius_dom_Display;
sirius_dom_Content.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Content
});
var sirius_dom_DL = $hx_exports.sru.dom.DL = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("dl");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_DL.__name__ = ["sirius","dom","DL"];
sirius_dom_DL.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_DL.__super__ = sirius_dom_Display;
sirius_dom_DL.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_DL
});
var sirius_dom_DataList = $hx_exports.sru.dom.DataList = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("datalist");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_DataList.__name__ = ["sirius","dom","DataList"];
sirius_dom_DataList.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_DataList.__super__ = sirius_dom_Display;
sirius_dom_DataList.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_DataList
});
var sirius_dom_IDisplay3D = function() { };
sirius_dom_IDisplay3D.__name__ = ["sirius","dom","IDisplay3D"];
sirius_dom_IDisplay3D.__interfaces__ = [sirius_dom_IDisplay];
sirius_dom_IDisplay3D.prototype = {
	__class__: sirius_dom_IDisplay3D
};
var sirius_dom_Display3D = $hx_exports.sru.dom.Display3D = function(q) {
	sirius_dom_Display.call(this,q);
	sirius_dom_Display3D._backface_fix();
	this.xcss = new sirius_css_XCSS();
	this.transformData = new sirius_math_Transform3D();
	if(q == null) this.attribute("sru-dom","display3d");
	this.update();
};
sirius_dom_Display3D.__name__ = ["sirius","dom","Display3D"];
sirius_dom_Display3D.__interfaces__ = [sirius_dom_IDisplay3D];
sirius_dom_Display3D.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Display3D._backface_fix = function() {
	if(!sirius_dom_Display3D._fixed) {
		sirius_dom_Display3D._fixed = true;
		sirius_css_Automator.style("[sru-dom=\"display3d\"]","transform-style:inherit;backface-visibility:inherit;");
		sirius_css_Automator.apply();
	}
};
sirius_dom_Display3D.__super__ = sirius_dom_Display;
sirius_dom_Display3D.prototype = $extend(sirius_dom_Display.prototype,{
	preserve3d: function() {
		this.transformData.transformStyle = "preserve-3d";
		return this;
	}
	,setPerspective: function(value,origin) {
		if(value != null) this.transformData.perspective = value;
		if(origin != null) this.transformData.transformOrigin = origin;
		return this;
	}
	,rotateAll: function(x,y,z,add) {
		this.rotationX(x,add);
		this.rotationY(y,add);
		if(z != null) this.rotationZ(z,add);
		return this;
	}
	,rotationX: function(value,add) {
		if(value != null) {
			if(add) this.transformData.rotation.x += value; else this.transformData.rotation.x = value;
		}
		return this.transformData.rotation.x;
	}
	,rotationY: function(value,add) {
		if(value != null) {
			if(add) this.transformData.rotation.y += value; else this.transformData.rotation.y = value;
		}
		return this.transformData.rotation.y;
	}
	,rotationZ: function(value,add) {
		if(value != null) {
			if(add) this.transformData.rotation.z += value; else this.transformData.rotation.z = value;
		}
		return this.transformData.rotation.z;
	}
	,moveTo: function(x,y,z,add) {
		this.locationX(x,add);
		this.locationY(y,add);
		if(z != null) this.locationZ(z,add);
		return this;
	}
	,locationX: function(value,add) {
		if(value != null) {
			if(add) this.transformData.location.x += value; else this.transformData.location.x = value;
		}
		return this.transformData.location.x;
	}
	,locationY: function(value,add) {
		if(value != null) {
			if(add) this.transformData.location.y += value; else this.transformData.location.y = value;
		}
		return this.transformData.location.y;
	}
	,locationZ: function(value,add) {
		if(value != null) {
			if(add) this.transformData.location.z += value; else this.transformData.location.z = value;
		}
		return this.transformData.location.z;
	}
	,scaleAll: function(x,y,z,add) {
		this.scaleX(x,add);
		this.scaleY(y,add);
		if(z != null) this.scaleZ(z,add);
		return this;
	}
	,transform2D: function(x,y,x1,y1,w,h) {
		return this.moveTo(x,y,null).rotateAll(x1,y1,null).scaleAll(w,h,null);
	}
	,transform3D: function(x,y,z,x1,y1,z1,w,h,d) {
		return this.moveTo(x,y,z).rotateAll(x1,y1,z1).scaleAll(w,h,d);
	}
	,scaleX: function(value,add) {
		if(value != null) {
			if(add) this.transformData.scale.x += value; else this.transformData.scale.x = value;
		}
		return this.transformData.scale.x;
	}
	,scaleY: function(value,add) {
		if(value != null) {
			if(add) this.transformData.scale.y += value; else this.transformData.scale.y = value;
		}
		return this.transformData.scale.y;
	}
	,scaleZ: function(value,add) {
		if(value != null) {
			if(add) this.transformData.scale.z += value; else this.transformData.scale.z = value;
		}
		return this.transformData.scale.z;
	}
	,update: function() {
		if(this.transformData.perspective != null) this.xcss.write("perspective",this.transformData.perspective);
		if(this.transformData.transformOrigin != null) this.xcss.write("transformOrigin",this.transformData.transformOrigin);
		if(this.transformData.transformStyle != null) this.xcss.write("transformStyle",this.transformData.transformStyle);
		if(this.transformData.backFace != null) this.xcss.write("backfaceVisibility",this.transformData.backFace);
		this.xcss.write("transform","rotateX(" + this.transformData.rotation.x + "deg) rotateY(" + this.transformData.rotation.y + "deg) rotateZ(" + this.transformData.rotation.z + "deg) translate3d(" + this.transformData.location.x + "px," + this.transformData.location.y + "px," + this.transformData.location.z + "px) scale3d(" + this.transformData.scale.x + "," + this.transformData.scale.y + "," + this.transformData.scale.z + ")");
		this.xcss.apply(this);
		return this;
	}
	,doubleSided: function(value) {
		if(value) this.transformData.backFace = "visible"; else this.transformData.backFace = "hidden";
		return this;
	}
	,flipHorizontal: function() {
		this.rotationY(180,true);
		return this;
	}
	,flipVertical: function() {
		this.rotationX(180,true);
		return this;
	}
	,__class__: sirius_dom_Display3D
});
var sirius_dom_Embed = $hx_exports.sru.dom.Embed = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("embed");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Embed.__name__ = ["sirius","dom","Embed"];
sirius_dom_Embed.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Embed.__super__ = sirius_dom_Display;
sirius_dom_Embed.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Embed
});
var sirius_dom_FieldSet = $hx_exports.sru.dom.FieldSet = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("fieldset");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_FieldSet.__name__ = ["sirius","dom","FieldSet"];
sirius_dom_FieldSet.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_FieldSet.__super__ = sirius_dom_Display;
sirius_dom_FieldSet.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_FieldSet
});
var sirius_dom_Form = $hx_exports.sru.dom.Form = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("form");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_Form.__name__ = ["sirius","dom","Form"];
sirius_dom_Form.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Form.__super__ = sirius_dom_Display;
sirius_dom_Form.prototype = $extend(sirius_dom_Display.prototype,{
	validate: function() {
		this.checkSubmit().object.click();
		return this.object.checkValidity();
	}
	,checkSubmit: function() {
		if(this._submit == null) {
			var i;
			if(!this.exists("input[type=submit]")) {
				i = new sirius_dom_Input();
				i.type("submit");
				i.hide();
				this.addChild(i);
			} else i = this.one("input[type=submit]");
			this._submit = i;
		}
		return this._submit;
	}
	,submit: function() {
		this.object.submit();
	}
	,formData: function() {
		if(this.inputData == null) this.inputData = new sirius_data_FormData(this); else this.inputData.scan(this);
		return this.inputData;
	}
	,getAsInput: function(i,update) {
		if(this._children == null || update == true) this._children = this.children();
		return this._children.obj(i);
	}
	,__class__: sirius_dom_Form
});
var sirius_dom_H1 = $hx_exports.sru.dom.H1 = function(q) {
	if(q == null) q = window.document.createElement("h1");
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_H1.__name__ = ["sirius","dom","H1"];
sirius_dom_H1.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_H1.__super__ = sirius_dom_Display;
sirius_dom_H1.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H1
});
var sirius_dom_H2 = $hx_exports.sru.dom.H2 = function(q) {
	if(q == null) q = window.document.createElement("h2");
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_H2.__name__ = ["sirius","dom","H2"];
sirius_dom_H2.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_H2.__super__ = sirius_dom_Display;
sirius_dom_H2.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H2
});
var sirius_dom_H3 = $hx_exports.sru.dom.H3 = function(q) {
	if(q == null) q = window.document.createElement("h3");
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_H3.__name__ = ["sirius","dom","H3"];
sirius_dom_H3.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_H3.__super__ = sirius_dom_Display;
sirius_dom_H3.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H3
});
var sirius_dom_H4 = $hx_exports.sru.dom.H4 = function(q) {
	if(q == null) q = window.document.createElement("h4");
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_H4.__name__ = ["sirius","dom","H4"];
sirius_dom_H4.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_H4.__super__ = sirius_dom_Display;
sirius_dom_H4.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H4
});
var sirius_dom_H5 = $hx_exports.sru.dom.H5 = function(q) {
	if(q == null) q = window.document.createElement("h5");
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_H5.__name__ = ["sirius","dom","H5"];
sirius_dom_H5.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_H5.__super__ = sirius_dom_Display;
sirius_dom_H5.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H5
});
var sirius_dom_H6 = $hx_exports.sru.dom.H6 = function(q) {
	if(q == null) q = window.document.createElement("h6");
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_H6.__name__ = ["sirius","dom","H6"];
sirius_dom_H6.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_H6.__super__ = sirius_dom_Display;
sirius_dom_H6.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H6
});
var sirius_dom_HR = $hx_exports.sru.dom.HR = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("hr");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_HR.__name__ = ["sirius","dom","HR"];
sirius_dom_HR.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_HR.__super__ = sirius_dom_Display;
sirius_dom_HR.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_HR
});
var sirius_dom_Html = $hx_exports.sru.dom.Html = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("html");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Html.__name__ = ["sirius","dom","Html"];
sirius_dom_Html.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Html.__super__ = sirius_dom_Display;
sirius_dom_Html.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Html
});
var sirius_dom_I = $hx_exports.sru.dom.I = function(q) {
	if(q == null) q = window.document.createElement("I");
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_I.__name__ = ["sirius","dom","I"];
sirius_dom_I.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_I.__super__ = sirius_dom_Display;
sirius_dom_I.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_I
});
var sirius_dom_IFrame = $hx_exports.sru.dom.IFrame = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("iframe");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_IFrame.__name__ = ["sirius","dom","IFrame"];
sirius_dom_IFrame.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_IFrame.__super__ = sirius_dom_Display;
sirius_dom_IFrame.prototype = $extend(sirius_dom_Display.prototype,{
	src: function(url) {
		this.object.src = url;
	}
	,enableScroll: function(mode) {
		if(mode) this.object.scrolling = "yes"; else this.object.scrolling = "no";
	}
	,__class__: sirius_dom_IFrame
});
var sirius_dom_Img = $hx_exports.sru.dom.Img = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("img");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_Img.__name__ = ["sirius","dom","Img"];
sirius_dom_Img.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Img.__super__ = sirius_dom_Display;
sirius_dom_Img.prototype = $extend(sirius_dom_Display.prototype,{
	src: function(value) {
		var a;
		if(value != null) this.object.src = value;
		return this.object.src;
	}
	,alt: function(value) {
		if(value != null) this.object.alt = value;
		return this.object.alt;
	}
	,__class__: sirius_dom_Img
});
var sirius_dom_Input = $hx_exports.sru.dom.Input = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("input");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_Input.__name__ = ["sirius","dom","Input"];
sirius_dom_Input.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Input.__super__ = sirius_dom_Display;
sirius_dom_Input.prototype = $extend(sirius_dom_Display.prototype,{
	_onFileSelected: function(e) {
		var ftype;
		var _this = this.file(0).type;
		ftype = HxOverrides.substr(_this,0,5);
		if(ftype == "image") {
			if(this.fillTarget != null) {
				if(this.fillTarget.typeOf() == "IMG") {
					var img = this.fillTarget;
					img.src(this.readFile(0));
				} else {
					sirius_dom_Input.fixer.backgroundImage = "url(" + this.readFile(0) + ")";
					this.fillTarget.style(sirius_dom_Input.fixer);
					Reflect.deleteField(sirius_dom_Input.fixer,"backgroundImage");
				}
			}
			if(this._ioHandler != null) this._ioHandler(this);
		} else {
			var bg;
			if(Object.prototype.hasOwnProperty.call(sirius_dom_Input.icons,ftype)) bg = Reflect.field(sirius_dom_Input.icons,ftype); else bg = sirius_dom_Input.icons.common;
			if(bg != null && this.fillTarget != null) this.fillTarget.style({ backgroundImage : "url(" + bg + ")"});
			if(this._ioHandler != null) this._ioHandler(this);
		}
	}
	,type: function(q) {
		if(q != null) this.object.type = q;
		return this.object.type;
	}
	,required: function(q) {
		if(q != null) this.object.required = q;
		return this.object.required;
	}
	,pattern: function(q) {
		if(q != null) this.object.pattern = q;
		return this.object.pattern;
	}
	,placeholder: function(q) {
		if(q != null) this.object.placeholder = q;
		return this.object.placeholder;
	}
	,validateCardExp: function() {
		this._rgx = new EReg("\\d{2}/\\d{2,4}","");
	}
	,validateDate: function() {
		this._rgx = new EReg("\\d{1,2}/\\d{1,2}/\\d{4}","");
	}
	,validateURL: function() {
		this._rgx = new EReg("https?://.+","");
	}
	,validateIPv4: function() {
		this._rgx = new EReg("^\\d{1,3}d{1,3}.\\d{1,3}.\\d{1,3}","");
	}
	,validateCurrency: function() {
		this._rgx = new EReg("\\d+(.\\d{2})?","");
	}
	,validateEmail: function() {
		this._rgx = new EReg("^[a-z0-9!'#$%&*+/=?^_`{|}~-]+(?:\\.[a-z0-9!'#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-zA-Z]{2,}$","giu");
	}
	,validateNumbers: function() {
		this._rgx = new EReg("^\\d{1,}$","");
		this._flt = " ";
	}
	,validatePhone: function() {
		this._rgx = new EReg("^(\\d{10,11})|(\\(\\d{2}\\) \\d{4,5}-\\d{4})$","");
		this._flt = "()- ";
	}
	,validateDoc: function() {
		this._rgx = new EReg("^(\\d{3}.\\d{3}.\\d{3}-\\d{2})|(\\d{2}.\\d{3}.\\d{3}/\\d{4}-\\d{2})$","");
		this._flt = "-./";
	}
	,validateZipcode: function() {
		this._rgx = new EReg("^(\\d{5}-\\d{3})|(\\d{8})$","");
		this._flt = "- ";
	}
	,validateLetters: function() {
		this._rgx = new EReg("^[a-zA-Z]{3,}$","");
	}
	,validateUsr: function() {
		this._rgx = new EReg("^[A-Za-z0-9._-]{6,24}$","");
	}
	,validateMd5: function() {
		this._rgx = new EReg("^[A-Za-z0-9._-]{35}$","");
	}
	,validateCard: function() {
		this._rgx = new EReg("\\d{4}-\\d{4}-\\d{4}-\\d{4}$","");
	}
	,restrict: function(q,filter) {
		this._rgx = q;
		this._flt = filter;
	}
	,value: function(q) {
		if(q != null) this.object.value = q; else {
			q = this.object.value;
			if(this.object.maxLength != null && this.object.maxLength > 0) q = HxOverrides.substr(q,0,this.object.maxLength);
			if(this._flt != null) {
				var k = this._flt.split("");
				sirius_utils_Dice.Values(k,function(v1) {
					q = q.split(v1).join("");
				});
			}
		}
		return q;
	}
	,clear: function(background) {
		this.value("");
		if(this.fillTarget != null) this.fillTarget.style("backgroundImage",background);
	}
	,isValid: function() {
		var v = this.object.value;
		if(v.length == 0) return false; else if(this._rgx != null) return this._rgx.match(v); else return true;
	}
	,isEmpty: function() {
		return this.value() == "";
	}
	,hasFile: function() {
		return this.files().length > 0;
	}
	,files: function() {
		return this.object.files;
	}
	,file: function(id) {
		if(id == null) id = 0;
		return this.files().item(id);
	}
	,readFile: function(id) {
		if(id == null) id = 0;
		return window.URL.createObjectURL(this.file());
	}
	,control: function(handler,target) {
		this._ioHandler = handler;
		this.fillTarget = target;
		if(this.attribute("sr-control") != "ready") {
			this.type("file");
			this.attribute("sr-control","ready");
			this.events.change($bind(this,this._onFileSelected));
		}
	}
	,check: function(toggle) {
		if(toggle == null) toggle = true;
		if(toggle == null) this.object.checked = !this.object.checked; else this.object.checked = toggle == true || toggle == 1;
	}
	,isChecked: function() {
		return this.object.checked;
	}
	,__class__: sirius_dom_Input
});
var sirius_dom_LI = $hx_exports.sru.dom.LI = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("li");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_LI.__name__ = ["sirius","dom","LI"];
sirius_dom_LI.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_LI.__super__ = sirius_dom_Display;
sirius_dom_LI.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_LI
});
var sirius_dom_Label = $hx_exports.sru.dom.Label = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("label");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Label.__name__ = ["sirius","dom","Label"];
sirius_dom_Label.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Label.__super__ = sirius_dom_Display;
sirius_dom_Label.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Label
});
var sirius_dom_Legend = $hx_exports.sru.dom.Legend = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("legend");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Legend.__name__ = ["sirius","dom","Legend"];
sirius_dom_Legend.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Legend.__super__ = sirius_dom_Display;
sirius_dom_Legend.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Legend
});
var sirius_dom_Link = $hx_exports.sru.dom.Link = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("link");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_Link.__name__ = ["sirius","dom","Link"];
sirius_dom_Link.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Link.__super__ = sirius_dom_Display;
sirius_dom_Link.prototype = $extend(sirius_dom_Display.prototype,{
	href: function(url,handler) {
		this.object.href = url;
		if(handler != null) this.events.load(handler,1);
	}
	,__class__: sirius_dom_Link
});
var sirius_dom_Map = $hx_exports.sru.dom.Map = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("map");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Map.__name__ = ["sirius","dom","Map"];
sirius_dom_Map.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Map.__super__ = sirius_dom_Display;
sirius_dom_Map.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Map
});
var sirius_dom_Media = $hx_exports.sru.dom.Media = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("media");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Media.__name__ = ["sirius","dom","Media"];
sirius_dom_Media.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Media.__super__ = sirius_dom_Display;
sirius_dom_Media.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Media
});
var sirius_dom_Meta = $hx_exports.sru.dom.Meta = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("meta");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Meta.__name__ = ["sirius","dom","Meta"];
sirius_dom_Meta.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Meta.__super__ = sirius_dom_Display;
sirius_dom_Meta.prototype = $extend(sirius_dom_Display.prototype,{
	set: function(name,content) {
		this.attribute("name",name);
		this.attribute("content",content);
	}
	,charset: function(q,vr) {
		if(vr == null) vr = 5;
		if(vr >= 5) this.attribute("charset",q); else if(vr < 5) {
			this.attribute("http-equiv","content-type");
			this.attribute("charset","text/html; charset=UTF-8");
		}
	}
	,__class__: sirius_dom_Meta
});
var sirius_dom_Meter = $hx_exports.sru.dom.Meter = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("meter");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Meter.__name__ = ["sirius","dom","Meter"];
sirius_dom_Meter.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Meter.__super__ = sirius_dom_Display;
sirius_dom_Meter.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Meter
});
var sirius_dom_Mod = $hx_exports.sru.dom.Mod = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("mod");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Mod.__name__ = ["sirius","dom","Mod"];
sirius_dom_Mod.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Mod.__super__ = sirius_dom_Display;
sirius_dom_Mod.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Mod
});
var sirius_dom_OL = $hx_exports.sru.dom.OL = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("ol");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_OL.__name__ = ["sirius","dom","OL"];
sirius_dom_OL.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_OL.__super__ = sirius_dom_Display;
sirius_dom_OL.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_OL
});
var sirius_dom_Object = $hx_exports.sru.dom.Object = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("object");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Object.__name__ = ["sirius","dom","Object"];
sirius_dom_Object.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Object.__super__ = sirius_dom_Display;
sirius_dom_Object.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Object
});
var sirius_dom_OptGroup = $hx_exports.sru.dom.OptGroup = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("optgroup");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_OptGroup.__name__ = ["sirius","dom","OptGroup"];
sirius_dom_OptGroup.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_OptGroup.__super__ = sirius_dom_Display;
sirius_dom_OptGroup.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_OptGroup
});
var sirius_dom_Option = $hx_exports.sru.dom.Option = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("option");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_Option.__name__ = ["sirius","dom","Option"];
sirius_dom_Option.__super__ = sirius_dom_Display;
sirius_dom_Option.prototype = $extend(sirius_dom_Display.prototype,{
	value: function() {
		return this.object.value;
	}
	,label: function() {
		return this.object.innerText;
	}
	,__class__: sirius_dom_Option
});
var sirius_dom_Output = $hx_exports.sru.dom.Output = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("output");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Output.__name__ = ["sirius","dom","Output"];
sirius_dom_Output.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Output.__super__ = sirius_dom_Display;
sirius_dom_Output.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Output
});
var sirius_dom_P = $hx_exports.sru.dom.P = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("p");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_P.__name__ = ["sirius","dom","P"];
sirius_dom_P.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_P.__super__ = sirius_dom_Display;
sirius_dom_P.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_P
});
var sirius_dom_Param = $hx_exports.sru.dom.Param = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("param");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Param.__name__ = ["sirius","dom","Param"];
sirius_dom_Param.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Param.__super__ = sirius_dom_Display;
sirius_dom_Param.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Param
});
var sirius_dom_Picture = $hx_exports.sru.dom.Picture = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("picture");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Picture.__name__ = ["sirius","dom","Picture"];
sirius_dom_Picture.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Picture.__super__ = sirius_dom_Display;
sirius_dom_Picture.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Picture
});
var sirius_dom_Pre = $hx_exports.sru.dom.Pre = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("pre");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Pre.__name__ = ["sirius","dom","Pre"];
sirius_dom_Pre.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Pre.__super__ = sirius_dom_Display;
sirius_dom_Pre.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Pre
});
var sirius_dom_Progress = $hx_exports.sru.dom.Progress = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("progress");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Progress.__name__ = ["sirius","dom","Progress"];
sirius_dom_Progress.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Progress.__super__ = sirius_dom_Display;
sirius_dom_Progress.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Progress
});
var sirius_dom_Quote = $hx_exports.sru.dom.Quote = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("quote");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Quote.__name__ = ["sirius","dom","Quote"];
sirius_dom_Quote.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Quote.__super__ = sirius_dom_Display;
sirius_dom_Quote.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Quote
});
var sirius_dom_Script = $hx_exports.sru.dom.Script = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("script");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_Script.__name__ = ["sirius","dom","Script"];
sirius_dom_Script.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Script.require = function(url,handler) {
	if(url.length > 0) {
		var file = url.shift();
		if(file != null) {
			var s = new sirius_dom_Script();
			sirius_Sirius.document.head.addChild(s);
			s.src(file,function(e) {
				sirius_dom_Script.require(url,handler);
			});
		}
	} else if(handler != null) handler();
};
sirius_dom_Script.__super__ = sirius_dom_Display;
sirius_dom_Script.prototype = $extend(sirius_dom_Display.prototype,{
	src: function(url,handler) {
		this.object.src = url;
		if(handler != null) this.events.load(handler,1);
	}
	,async: function() {
		this.object.async = true;
	}
	,__class__: sirius_dom_Script
});
var sirius_dom_Select = $hx_exports.sru.dom.Select = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("select");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_Select.__name__ = ["sirius","dom","Select"];
sirius_dom_Select.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Select.__super__ = sirius_dom_Display;
sirius_dom_Select.prototype = $extend(sirius_dom_Display.prototype,{
	getAllSelected: function() {
		return this.all("option:checked");
	}
	,getSelected: function() {
		return this.one("option:checked");
	}
	,setValue: function(i) {
		this.object.selectedIndex = i;
		this.events.change().call(true,true);
	}
	,clearSelected: function() {
		this.getAllSelected().each(function(o) {
			o.object.selected = false;
		});
	}
	,selectValue: function(value) {
		value = Std.string(value);
		this.all("option").each(function(o) {
			o.object.selected = o.value() == value;
		});
		this.events.change().call(true,true);
	}
	,value: function() {
		var t = this.getAllSelected();
		var r = [];
		if(t != null && t.length() > 0) t.each(function(v) {
			var o = v;
			r[r.length] = o.value();
		});
		return r.join(";");
	}
	,hasValue: function() {
		var i = 0;
		if(this.object.selectedOptions != null) while(_$UInt_UInt_$Impl_$.gt(this.object.selectedOptions.length,i)) {
			var o = this.object.selectedOptions.item(i++);
			if(!o.disabled) return true;
		} else while(_$UInt_UInt_$Impl_$.gt(this.object.options.length,i)) {
			var o1 = this.object.options[i++];
			if(o1.selected && !o1.disabled) return true;
		}
		return false;
	}
	,hasChanged: function() {
		if(!this.hasValue()) return false;
		var v = this.value();
		if(this.attribute("tmp-data") == v) return false;
		this.attribute("tmp-data",v);
		return true;
	}
	,addOption: function(label,value,selected,disabled) {
		this.writeHtml("<option value=\"" + Std.string(value) + "\"" + (disabled == true?" disabled":"") + (selected == true?" selected":"") + ">" + label + "</options>");
		if(selected) {
			this.attribute("sru-option",this.value());
			this.selectValue(value);
		}
		return this;
	}
	,makeDefault: function() {
		this._default = this.element.innerHTML;
		return this;
	}
	,resetToDefault: function() {
		this.element.innerHTML = this._default;
		this.events.change().call();
		return this;
	}
	,_refreshIO: function(e) {
		var c = "" + this.value();
		if(c != this.attribute("sru-option")) {
			this.attribute("sru-option",c);
			this._ioHandler(e);
		}
	}
	,baseIO: function(handler) {
		this._ioHandler = handler;
		this.attribute("sru-option",this.value());
		this.events.click($bind(this,this._refreshIO));
		this.events.keyPress($bind(this,this._refreshIO));
		this.events.change($bind(this,this._refreshIO));
	}
	,__class__: sirius_dom_Select
});
var sirius_dom_Shadow = $hx_exports.sru.dom.Shadow = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("shadow");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Shadow.__name__ = ["sirius","dom","Shadow"];
sirius_dom_Shadow.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Shadow.__super__ = sirius_dom_Display;
sirius_dom_Shadow.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Shadow
});
var sirius_dom_Source = $hx_exports.sru.dom.Source = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("source");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Source.__name__ = ["sirius","dom","Source"];
sirius_dom_Source.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Source.__super__ = sirius_dom_Display;
sirius_dom_Source.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Source
});
var sirius_dom_Span = $hx_exports.sru.dom.Span = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("span");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Span.__name__ = ["sirius","dom","Span"];
sirius_dom_Span.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Span.__super__ = sirius_dom_Display;
sirius_dom_Span.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Span
});
var sirius_dom_Text = function(q) {
	q = window.document.createTextNode(q);
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Text.__name__ = ["sirius","dom","Text"];
sirius_dom_Text.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Text.__super__ = sirius_dom_Display;
sirius_dom_Text.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Text
});
var sirius_dom_TextArea = $hx_exports.sru.dom.TextArea = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("textarea");
	}
	sirius_dom_Input.call(this,q);
};
sirius_dom_TextArea.__name__ = ["sirius","dom","TextArea"];
sirius_dom_TextArea.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_TextArea.__super__ = sirius_dom_Input;
sirius_dom_TextArea.prototype = $extend(sirius_dom_Input.prototype,{
	__class__: sirius_dom_TextArea
});
var sirius_dom_Thead = $hx_exports.sru.dom.Thead = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("thead");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Thead.__name__ = ["sirius","dom","Thead"];
sirius_dom_Thead.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Thead.__super__ = sirius_dom_Display;
sirius_dom_Thead.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Thead
});
var sirius_dom_Title = $hx_exports.sru.dom.Title = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("title");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Title.__name__ = ["sirius","dom","Title"];
sirius_dom_Title.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Title.__super__ = sirius_dom_Display;
sirius_dom_Title.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Title
});
var sirius_dom_Track = $hx_exports.sru.dom.Track = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("track");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_Track.__name__ = ["sirius","dom","Track"];
sirius_dom_Track.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Track.__super__ = sirius_dom_Display;
sirius_dom_Track.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Track
});
var sirius_dom_UL = $hx_exports.sru.dom.UL = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("ul");
	}
	sirius_dom_Display.call(this,q,null);
};
sirius_dom_UL.__name__ = ["sirius","dom","UL"];
sirius_dom_UL.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_UL.__super__ = sirius_dom_Display;
sirius_dom_UL.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_UL
});
var sirius_dom_Video = $hx_exports.sru.dom.Video = function(q) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("video");
	}
	sirius_dom_Display.call(this,q,null);
	this.object = this.element;
};
sirius_dom_Video.__name__ = ["sirius","dom","Video"];
sirius_dom_Video.get = function(q) {
	return sirius_Sirius.one(q);
};
sirius_dom_Video.__super__ = sirius_dom_Display;
sirius_dom_Video.prototype = $extend(sirius_dom_Display.prototype,{
	play: function() {
		this.object.play();
	}
	,pause: function() {
		this.object.pause();
	}
	,togglePause: function() {
		if(this.object.paused) this.play(); else this.pause();
	}
	,__class__: sirius_dom_Video
});
var sirius_errors_IError = function() { };
sirius_errors_IError.__name__ = ["sirius","errors","IError"];
sirius_errors_IError.prototype = {
	__class__: sirius_errors_IError
};
var sirius_errors_Error = function(code,message,object) {
	this.object = object;
	this.message = message;
	this.code = code;
};
sirius_errors_Error.__name__ = ["sirius","errors","Error"];
sirius_errors_Error.__interfaces__ = [sirius_errors_IError];
sirius_errors_Error.prototype = {
	__class__: sirius_errors_Error
};
var sirius_events_IEvent = function() { };
sirius_events_IEvent.__name__ = ["sirius","events","IEvent"];
sirius_events_IEvent.prototype = {
	__class__: sirius_events_IEvent
};
var sirius_events_Event = $hx_exports.sru.events.Event = function(from,ticket,event) {
	this.event = event;
	this.ticket = ticket;
	this.from = from;
	this.target = from.target;
	if(js_Boot.__instanceof(from.target,sirius_dom_IDisplay3D)) this.target3d = from.target; else this.target3d = null;
};
sirius_events_Event.__name__ = ["sirius","events","Event"];
sirius_events_Event.__interfaces__ = [sirius_events_IEvent];
sirius_events_Event.prototype = {
	cancel: function() {
		if(this.event != null) {
			this.event.stopPropagation();
			this.event.stopImmediatePropagation();
			this.event.preventDefault();
		}
	}
	,description: function() {
		return "[Event{name:" + this.ticket.name + ",target:" + this.from.target.typeOf() + "}]";
	}
	,__class__: sirius_events_Event
};
var sirius_events_IEventGroup = function() { };
sirius_events_IEventGroup.__name__ = ["sirius","events","IEventGroup"];
sirius_events_IEventGroup.prototype = {
	__class__: sirius_events_IEventGroup
};
var sirius_events_EventGroup = $hx_exports.sru.events.EventGroup = function(dispatcher,name) {
	this.dispatcher = dispatcher;
	this.name = name;
	this.enabled = true;
	this.events = [];
};
sirius_events_EventGroup.__name__ = ["sirius","events","EventGroup"];
sirius_events_EventGroup.__interfaces__ = [sirius_events_IEventGroup];
sirius_events_EventGroup.prototype = {
	add: function(handler,capture) {
		if(capture != null) this.capture = capture;
		if(handler != null) this.events.push(handler);
		return this;
	}
	,addOnce: function(handler,capture) {
		if(!this.exists(handler)) this.add(handler,capture);
		return this;
	}
	,exists: function(handler) {
		return HxOverrides.indexOf(this.events,handler,0) != -1;
	}
	,remove: function(handler) {
		var iof = Lambda.indexOf(this.events,handler);
		if(iof != -1) this.events.splice(iof,1);
		return this;
	}
	,prepare: function(t) {
		t.element.removeEventListener(this.name,$bind(this,this._runner),this.capture);
		t.element.addEventListener(this.name,$bind(this,this._runner),this.capture);
		return this;
	}
	,dispose: function(t) {
		t.element.removeEventListener(this.name,$bind(this,this._runner),this.capture);
	}
	,cancel: function() {
		this.propagation = false;
		return this;
	}
	,noDefault: function() {
		this._pd = true;
		return this;
	}
	,reset: function() {
		this.events = [];
		return this;
	}
	,_runner: function(e) {
		var _g = this;
		if(!this.enabled) return;
		var evt = new sirius_events_Event(this.dispatcher,this,e);
		sirius_utils_Dice.Values(this.events,function(v) {
			if(v != null) v(evt);
			return !_g.propagation;
		});
		if(this._pd && e != null) {
			evt.event.preventDefault();
			evt.event.stopPropagation();
		}
		this.propagation = true;
	}
	,call: function(bubbles,cancelable,data) {
		if(cancelable == null) cancelable = true;
		if(bubbles == null) bubbles = false;
		this.data = data;
		if(sirius_Sirius.agent.ie) {
			var e = window.document.createEvent("CustomEvent");
			e.initCustomEvent(this.name,bubbles,cancelable,{ });
			this.dispatcher.target.element.dispatchEvent(e);
		} else if(($_=window.document,$bind($_,$_.createEvent)) != null) {
			var e1 = new CustomEvent(this.name);
			e1.initEvent(this.name,bubbles,cancelable);
			this.dispatcher.target.element.dispatchEvent(e1);
		} else this._runner(null);
		this.data = null;
		return this;
	}
	,__class__: sirius_events_EventGroup
};
var sirius_gaming_actions_Resolution = function(type,data) {
	this._type = type;
	if((data.query instanceof Array) && data.query.__enum__ == null) this.query = data.query; else if(sirius_tools_Utils.isValid(data.query)) this.query = [data.query];
	if(this.query != null) this.query.unshift("@result");
	if(data.onSuccess != null) this.onSuccess = new sirius_gaming_actions_Events(this._type + ".onSuccess",data.onSuccess);
	if(data.onFail != null) this.onFail = new sirius_gaming_actions_Events(this._type + ".onFail",data.onFail);
};
sirius_gaming_actions_Resolution.__name__ = ["sirius","gaming","actions","Resolution"];
sirius_gaming_actions_Resolution.prototype = {
	resolve: function(result,context) {
		++context.ident;
		if(result) {
			if(this.onSuccess != null) this.onSuccess.run(context);
		} else if(this.onFail != null) this.onFail.run(context);
		--context.ident;
		return result;
	}
	,__class__: sirius_gaming_actions_Resolution
};
var sirius_gaming_actions_ActionQuery = function() {
	sirius_flow_Push.call(this);
};
sirius_gaming_actions_ActionQuery.__name__ = ["sirius","gaming","actions","ActionQuery"];
sirius_gaming_actions_ActionQuery._resolve = function(a,r,v) {
	if(r == null) r = "=";
	switch(r) {
	case "=":
		return v;
	case "++":
		return a + v;
	case "+":
		return ++a;
	case "--":
		return --a;
	case "-":
		return a - v;
	case "*":
		return a * v;
	case "/":
		return a / v;
	case "%":
		return a % v;
	case "<":
		return sirius_tools_Flag.FPut(a,1 << v);
	case ">":
		return sirius_tools_Flag.FDrop(a,1 << v);
	case "|":
		return a | v;
	case "&":
		return a & v;
	case "^":
		return Math.pow(a,v);
	}
	return a == v;
};
sirius_gaming_actions_ActionQuery.__super__ = sirius_flow_Push;
sirius_gaming_actions_ActionQuery.prototype = $extend(sirius_flow_Push.prototype,{
	_isempty: function(value) {
		return value == null || value == "";
	}
	,_getint: function(value) {
		var o = Std.parseInt(value);
		if(o != null) return o; else return 0;
	}
	,__class__: sirius_gaming_actions_ActionQuery
});
var sirius_gaming_actions_Action = function(type,data) {
	var _g = this;
	sirius_gaming_actions_Resolution.call(this,type,data);
	this.requirements = [];
	sirius_utils_Dice.All(data.requirements,function(p,v) {
		_g.requirements[_g.requirements.length] = new sirius_gaming_actions_Requirement(type + "[" + Std.string(p) + "]",v);
	});
	if(sirius_tools_Utils.isValid(data.target)) this.target = Std["int"](data.target); else if(this.requirements.length == 0) this.target = 0; else this.target = 1;
};
sirius_gaming_actions_Action.__name__ = ["sirius","gaming","actions","Action"];
sirius_gaming_actions_Action._log = function(evt,context,success,score) {
	var s = "";
	while(s.length < context.ident) s += "\t";
	context.log.push(s + "↑ ACTION " + evt._type + " " + (success?"SUCCESS":"FAIL") + " score:" + score + "/" + evt.target);
};
sirius_gaming_actions_Action.__super__ = sirius_gaming_actions_Resolution;
sirius_gaming_actions_Action.prototype = $extend(sirius_gaming_actions_Resolution.prototype,{
	run: function(context) {
		var resolution = 0;
		++context.ident;
		sirius_utils_Dice.Values(this.requirements,function(r) {
			var result = r.verify(context);
			if(result) {
				++resolution;
				return r.cancelOnSuccess;
			} else {
				--resolution;
				return r.cancelOnFail;
			}
		});
		--context.ident;
		var success = this.target == 0 || this.target > 0 && resolution >= this.target || this.target < 0 && resolution <= this.target;
		sirius_gaming_actions_Action._log(this,context,success,resolution);
		if(success) {
			if(sirius_tools_Utils.isValid(this.query)) {
				sirius_gaming_actions_Action.commands.proc(this.query);
				sirius_gaming_actions_Action.commands.flush();
			}
		}
		return this.resolve(success,context);
	}
	,__class__: sirius_gaming_actions_Action
});
var sirius_gaming_actions_EventController = function(data) {
	var _g = this;
	this.events = sirius_Sirius.resources.getObj("core.data.Events");
	sirius_utils_Dice.All(this.events,function(p,v) {
		sirius_gaming_actions_Events.patch(_g);
	});
};
sirius_gaming_actions_EventController.__name__ = ["sirius","gaming","actions","EventController"];
sirius_gaming_actions_EventController.CONTEXT = function(data) {
	return { log : [], ident : 0, ticks : 0, origin : data};
};
sirius_gaming_actions_EventController.prototype = {
	call: function(name,data) {
		if(Object.prototype.hasOwnProperty.call(this.events,name)) Reflect.field(this.events,name).run(sirius_gaming_actions_EventController.CONTEXT(data)); else {
		}
	}
	,__class__: sirius_gaming_actions_EventController
};
var sirius_gaming_actions_Events = function(type,data) {
	this._type = type;
	this._init(data);
};
sirius_gaming_actions_Events.__name__ = ["sirius","gaming","actions","Events"];
sirius_gaming_actions_Events.patch = function(data,run,origin) {
	if(data.events != null) {
		if(!data.events.patched) {
			data.events.patched = true;
			sirius_utils_Dice.All(data.events,function(p,v) {
				data.events[p] = new sirius_gaming_actions_Events(p,v);
			});
		}
	}
	if(run != null) {
		if(Object.prototype.hasOwnProperty.call(data.events,run)) {
			var events = Reflect.field(data.events,run);
			events.run(sirius_gaming_actions_EventController.CONTEXT(data));
		}
	}
};
sirius_gaming_actions_Events._log = function(evt,context) {
	var s = "";
	while(s.length < context.ident) s += "\t";
	var a = evt._data.length;
	context.log.push(s + "≈ EVENT " + evt._type + (a == 0?" <!>EMPTY":" @" + a));
};
sirius_gaming_actions_Events.prototype = {
	_init: function(data) {
		var _g = this;
		this._data = [];
		var i = 0;
		sirius_utils_Dice.All(data,function(p,v) {
			_g._data[i] = new sirius_gaming_actions_Action(_g._type + "[" + p + "]",v);
			++i;
		});
	}
	,run: function(context) {
		var l = context.log.length;
		++context.ident;
		sirius_utils_Dice.Values(this._data,function(a) {
			return !a.run(context);
		});
		--context.ident;
		sirius_gaming_actions_Events._log(this,context);
		if(context.ident == 0) {
			context.log.reverse();
			sirius_Sirius.log(context.log.join("\r\n\t\t\t\t|"));
		}
	}
	,__class__: sirius_gaming_actions_Events
};
var sirius_gaming_actions_IEventContext = function() { };
sirius_gaming_actions_IEventContext.__name__ = ["sirius","gaming","actions","IEventContext"];
sirius_gaming_actions_IEventContext.prototype = {
	__class__: sirius_gaming_actions_IEventContext
};
var sirius_gaming_actions_RequirementQuery = function() {
	sirius_flow_Push.call(this);
};
sirius_gaming_actions_RequirementQuery.__name__ = ["sirius","gaming","actions","RequirementQuery"];
sirius_gaming_actions_RequirementQuery.__super__ = sirius_flow_Push;
sirius_gaming_actions_RequirementQuery.prototype = $extend(sirius_flow_Push.prototype,{
	_isempty: function(value) {
		return value == null || value == "";
	}
	,_getint: function(value) {
		var o = Std.parseInt(value);
		if(o != null) return o; else return 0;
	}
	,_resolve: function(a,r,v) {
		if(r == null) r = ">=";
		switch(r) {
		case "<":
			return a < v;
		case "<=":
			return a <= v;
		case ">":
			return a > v;
		case ">=":
			return a >= v;
		case "!=":
			return a != v;
		case "*=":
			return a.indexOf(v) != -1;
		case "~=":
			return v.indexOf(a) != -1;
		}
		return a == v;
	}
	,__class__: sirius_gaming_actions_RequirementQuery
});
var sirius_gaming_actions_Requirement = function(type,data) {
	sirius_gaming_actions_Resolution.call(this,type,data);
	this.cancelOnSuccess = data.cancelOnSuccess == true;
	this.cancelOnFail = data.cancelOnFail == true;
	this.reverse = data.reverse == true;
	if(sirius_tools_Utils.isValid(data.target)) this.target = Std["int"](data.target); else if(this.query != null) this.target = this.query.length - 1; else this.target = 0;
};
sirius_gaming_actions_Requirement.__name__ = ["sirius","gaming","actions","Requirement"];
sirius_gaming_actions_Requirement._log = function(evt,context,success,score,reversed) {
	var s = "";
	while(s.length < context.ident) s += "\t";
	context.log.push(s + "↓ REQUIREMENT " + evt._type + " @" + (success?"SUCCESS":"FAIL") + (reversed?" REVERSED":"") + " score:" + score + "/" + evt.target);
};
sirius_gaming_actions_Requirement.__super__ = sirius_gaming_actions_Resolution;
sirius_gaming_actions_Requirement.prototype = $extend(sirius_gaming_actions_Resolution.prototype,{
	verify: function(context) {
		var res = true;
		var score = 0;
		if(sirius_tools_Utils.isValid(this.query)) {
			var sec = sirius_gaming_actions_Requirement.commands.proc(this.query).result;
			if(sec != null) sirius_utils_Dice.Values(sec,function(v) {
				if(sirius_tools_Utils["boolean"](v)) ++score;
			});
			sirius_gaming_actions_Requirement.commands.flush();
			res = _$UInt_UInt_$Impl_$.gte(score,this.target);
			if(this.reverse) res = !res;
		}
		this.resolve(res,context);
		sirius_gaming_actions_Requirement._log(this,context,res,score,this.reverse);
		return res;
	}
	,__class__: sirius_gaming_actions_Requirement
});
var sirius_math_IPoint = function() { };
sirius_math_IPoint.__name__ = ["sirius","math","IPoint"];
sirius_math_IPoint.prototype = {
	__class__: sirius_math_IPoint
};
var sirius_math_IPoint3D = function() { };
sirius_math_IPoint3D.__name__ = ["sirius","math","IPoint3D"];
sirius_math_IPoint3D.prototype = {
	__class__: sirius_math_IPoint3D
};
var sirius_math_ITransform3D = function() { };
sirius_math_ITransform3D.__name__ = ["sirius","math","ITransform3D"];
sirius_math_ITransform3D.prototype = {
	__class__: sirius_math_ITransform3D
};
var sirius_math_Matrix3D = function() { };
sirius_math_Matrix3D.__name__ = ["sirius","math","Matrix3D"];
sirius_math_Matrix3D.rotateX = function(r) {
	r = r * .017453292519943295;
	return [1,0,0,0,0,Math.cos(r),-Math.sin(r),0,0,Math.sin(r),Math.cos(r),0,0,0,0,1];
};
sirius_math_Matrix3D.rotateY = function(r) {
	r = r * .017453292519943295;
	return [Math.cos(r),0,Math.sin(r),0,0,1,0,0,-Math.sin(r),0,Math.cos(r),0,0,0,0,1];
};
sirius_math_Matrix3D.rotateZ = function(r) {
	r = r * .017453292519943295;
	return [Math.cos(r),-Math.sin(r),0,0,Math.sin(r),Math.cos(r),0,0,0,0,1,0,0,0,0,1];
};
sirius_math_Matrix3D.scale = function(x,y,z) {
	return [x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1];
};
sirius_math_Matrix3D.translate = function(x,y,z) {
	return [1,0,0,0,0,1,0,0,0,0,1,0,x,y,z,1];
};
sirius_math_Matrix3D._multiply = function(a,b) {
	var result = [];
	var a00 = a[0];
	var a10 = a[1];
	var a20 = a[2];
	var a30 = a[3];
	var a01 = a[4];
	var a11 = a[5];
	var a21 = a[6];
	var a31 = a[7];
	var a02 = a[8];
	var a12 = a[9];
	var a22 = a[10];
	var a32 = a[11];
	var a03 = a[12];
	var a13 = a[13];
	var a23 = a[14];
	var a33 = a[15];
	var b0 = b[0];
	var b1 = b[1];
	var b2 = b[2];
	var b3 = b[3];
	result[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	result[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	result[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	result[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[4];
	b1 = b[5];
	b2 = b[6];
	b3 = b[7];
	result[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	result[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	result[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	result[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[8];
	b1 = b[9];
	b2 = b[10];
	b3 = b[11];
	result[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	result[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	result[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	result[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[12];
	b1 = b[13];
	b2 = b[14];
	b3 = b[15];
	result[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	result[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	result[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	result[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	return result;
};
sirius_math_Matrix3D.transform = function(data) {
	var res = null;
	var idx = 0;
	var len = data.length;
	var mx;
	while(idx < len) {
		mx = data[idx];
		if(mx != null) {
			if(res == null) res = mx; else res = sirius_math_Matrix3D._multiply(res,mx);
		}
		++idx;
	}
	return res;
};
sirius_math_Matrix3D.toCss = function(matrix) {
	return "matrix3d(" + matrix.join(",") + ")";
};
var sirius_math_Point = $hx_exports.sru.math.point = function(x,y) {
	this.x = x;
	this.y = y;
};
sirius_math_Point.__name__ = ["sirius","math","Point"];
sirius_math_Point.__interfaces__ = [sirius_math_IPoint];
sirius_math_Point.prototype = {
	reset: function() {
		this.x = this.y = 0;
	}
	,match: function(o,round) {
		if(round) return Math.round(o.x) == Math.round(this.x) && Math.round(o.y) == Math.round(this.y); else return o.x == this.x && o.y == this.y;
	}
	,add: function(q) {
		this.x += q.x;
		this.y += q.y;
		return this;
	}
	,__class__: sirius_math_Point
};
var sirius_math_Point3D = function(x,y,z) {
	this.update(x,y,z);
};
sirius_math_Point3D.__name__ = ["sirius","math","Point3D"];
sirius_math_Point3D.__interfaces__ = [sirius_math_IPoint3D];
sirius_math_Point3D.prototype = {
	reset: function() {
		this.x = this.y = this.z = 0;
	}
	,match: function(o,round) {
		if(round) return Math.round(o.x) == Math.round(this.x) && Math.round(o.y) == Math.round(this.y) && Math.round(o.z) == Math.round(this.z); else return o.x == this.x && o.y == this.y && o.z == this.z;
	}
	,update: function(x,y,z) {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}
	,__class__: sirius_math_Point3D
};
var sirius_math_Transform3D = function() {
	this.rotation = new sirius_math_Point3D(0,0,0);
	this.location = new sirius_math_Point3D(0,0,0);
	this.scale = new sirius_math_Point3D(1,1,1);
	this.transformStyle = "preserve-3d";
	this.transformOrigin = "50% 50%";
	this.backFace = "hidden";
	this.perspective = "";
};
sirius_math_Transform3D.__name__ = ["sirius","math","Transform3D"];
sirius_math_Transform3D.__interfaces__ = [sirius_math_ITransform3D];
sirius_math_Transform3D.prototype = {
	__class__: sirius_math_Transform3D
};
var sirius_modules_IMod = function() { };
sirius_modules_IMod.__name__ = ["sirius","modules","IMod"];
sirius_modules_IMod.prototype = {
	__class__: sirius_modules_IMod
};
var sirius_net_HttpRequest = function(url) {
	this.url = url;
	this.headers = new List();
	this.params = new List();
	this.async = true;
};
sirius_net_HttpRequest.__name__ = ["sirius","net","HttpRequest"];
sirius_net_HttpRequest.requestUrl = function(url) {
	var h = new sirius_net_HttpRequest(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	};
	h.onError = function(e) {
		throw new js__$Boot_HaxeError(e);
	};
	h.request("GET");
	return r;
};
sirius_net_HttpRequest.prototype = {
	setHeader: function(header,value) {
		this.headers = Lambda.filter(this.headers,function(h) {
			return h.header != header;
		});
		this.headers.push({ header : header, value : value});
		return this;
	}
	,addHeader: function(header,value) {
		this.headers.push({ header : header, value : value});
		return this;
	}
	,addParameter: function(param,value) {
		if(this.data == null) this.data = new FormData();
		this.data.append(param,value);
		return this;
	}
	,setData: function(data) {
		this.data = data;
		return this;
	}
	,setOptions: function(data) {
		var _g = this;
		if(data != null) sirius_utils_Dice.All(data,function(p,v) {
			_g.req[p] = v;
		});
	}
	,cancel: function() {
		if(this.req == null) return;
		this.req.abort();
	}
	,_getData: function(r) {
		if(r.responseType == "" || r.responseType == "text") return r.responseText; else return r.response;
	}
	,request: function(method,data,progress,options) {
		var _g = this;
		var me = this;
		me.responseData = null;
		var r = this.req = js_Browser.createXMLHttpRequest();
		this.setOptions(options);
		var onreadystatechange = function(_) {
			if(r.readyState != 4) return;
			var s;
			try {
				s = r.status;
			} catch( e ) {
				if (e instanceof js__$Boot_HaxeError) e = e.val;
				s = null;
			}
			if(s != null) {
				var protocol = window.location.protocol.toLowerCase();
				var rlocalProtocol = new EReg("^(?:about|app|app-storage|.+-extension|file|res|widget):$","");
				var isLocal = rlocalProtocol.match(protocol);
				if(isLocal) if(_g._getData(r) != null) s = 200; else s = 404;
			}
			if(s == undefined) s = null;
			if(s != null) me.onStatus(s);
			if(s != null && s >= 200 && s < 400) {
				me.req = null;
				me.onData(me.responseData = _g._getData(r));
			} else if(s == null) {
				me.req = null;
				me.onError("Failed to connect or resolve host");
			} else switch(s) {
			case 12029:
				me.req = null;
				me.onError("Failed to connect to host");
				break;
			case 12007:
				me.req = null;
				me.onError("Unknown host");
				break;
			default:
				me.req = null;
				me.responseData = _g._getData(r);
				me.onError("Http Error #" + r.status);
			}
		};
		if(this.async) r.onreadystatechange = onreadystatechange;
		var uri = null;
		try {
			if(progress != null) {
				r.onprogress = function(e1) {
					if(e1.lengthComputable) progress(_g.url,e1.loaded,e1.total); else progress(_g.url,e1.loaded,0);
				};
				r.onloadend = r.onloadstart = function(e2) {
					progress(_g.url,0,0);
				};
			}
			r.open(method,this.url,this.async);
		} catch( e3 ) {
			if (e3 instanceof js__$Boot_HaxeError) e3 = e3.val;
			me.req = null;
			this.onError(e3.toString());
			return;
		}
		var is_json = typeof(data) == "string";
		if(!Lambda.exists(this.headers,function(h) {
			return h.header == "Content-Type";
		})) r.setRequestHeader("Content-Type",is_json?"application/json":"application/x-www-form-urlencoded");
		var _g_head = this.headers.h;
		var _g_val = null;
		while(_g_head != null) {
			var h1;
			h1 = (function($this) {
				var $r;
				_g_val = _g_head[0];
				_g_head = _g_head[1];
				$r = _g_val;
				return $r;
			}(this));
			r.setRequestHeader(h1.header,h1.value);
		}
		if(is_json) r.send(data); else r.send(this.data);
		if(!this.async) onreadystatechange(null);
	}
	,onData: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
	,__class__: sirius_net_HttpRequest
};
var sirius_net_IDomainData = function() { };
sirius_net_IDomainData.__name__ = ["sirius","net","IDomainData"];
sirius_net_IDomainData.prototype = {
	__class__: sirius_net_IDomainData
};
var sirius_net_IProgress = function() { };
sirius_net_IProgress.__name__ = ["sirius","net","IProgress"];
sirius_net_IProgress.prototype = {
	__class__: sirius_net_IProgress
};
var sirius_net_IRequest = function() { };
sirius_net_IRequest.__name__ = ["sirius","net","IRequest"];
sirius_net_IRequest.prototype = {
	__class__: sirius_net_IRequest
};
var sirius_net_Request = function(success,data,error,url) {
	this.url = url;
	this.error = error;
	this.data = data;
	this.success = success;
};
sirius_net_Request.__name__ = ["sirius","net","Request"];
sirius_net_Request.__interfaces__ = [sirius_net_IRequest];
sirius_net_Request.prototype = {
	object: function() {
		if(this.data != null && this.data.length > 1) return JSON.parse(this.data); else return null;
	}
	,__class__: sirius_net_Request
};
var sirius_seo_SEO = function(type) {
	this.data = { };
	this.data["@context"] = "http://schema.org/";
	this.data["@type"] = type;
	var _this = window.document;
	this.object = _this.createElement("script");
	this.object.type = "application/ld+json";
};
sirius_seo_SEO.__name__ = ["sirius","seo","SEO"];
sirius_seo_SEO.sign = function(o,type,context) {
	if(context == null) context = true;
	if(context) o["@context"] = "http://schema.org";
	o["@type"] = type;
	return o;
};
sirius_seo_SEO.prototype = {
	publish: function() {
		this.object.innerHTML = JSON.stringify(this.data);
		if(this.object.parentElement == null) window.document.head.appendChild(this.object);
	}
	,typeOf: function() {
		return Reflect.field(this.data,"@type");
	}
	,__class__: sirius_seo_SEO
};
var sirius_seo_Breadcrumbs = function() {
	sirius_seo_SEO.call(this,"BreadcrumbList");
	this._setup();
};
sirius_seo_Breadcrumbs.__name__ = ["sirius","seo","Breadcrumbs"];
sirius_seo_Breadcrumbs.__super__ = sirius_seo_SEO;
sirius_seo_Breadcrumbs.prototype = $extend(sirius_seo_SEO.prototype,{
	_setup: function() {
		this.elements = [];
		this.data.itemListElement = this.elements;
	}
	,add: function(name,url) {
		this.elements[this.elements.length] = { '@type' : "ListItem", position : this.elements.length, item : { '@id' : url, name : name}};
	}
	,reset: function() {
		this.elements.splice(0,this.elements.length);
		return this;
	}
	,__class__: sirius_seo_Breadcrumbs
});
var sirius_seo_Descriptor = function(q) {
	sirius_seo_SEO.call(this,q);
	this._d = this.data;
};
sirius_seo_Descriptor.__name__ = ["sirius","seo","Descriptor"];
sirius_seo_Descriptor.__super__ = sirius_seo_SEO;
sirius_seo_Descriptor.prototype = $extend(sirius_seo_SEO.prototype,{
	name: function(q) {
		if(q != null) this._d.name = q;
		return this._d.name;
	}
	,url: function(q) {
		if(q != null) this._d.url = q;
		return this._d.url;
	}
	,logo: function(q) {
		if(q != null) this._d.logo = q;
		return this._d.logo;
	}
	,email: function(v) {
		if(v != null) this._d.email = v;
		return this._d.email;
	}
	,address: function(country,state,city,street,code) {
		if(this._d.address == null) this._d.address = sirius_seo_SEO.sign({ },"PostalAddress",false);
		if(country != null) this._d.address.addressCountry = country;
		if(state != null) this._d.address.addressRegion = state;
		if(city != null) this._d.address.addressLocality = city;
		if(street != null) this._d.address.streetAddress = street;
		if(code != null) this._d.address.postalCode = code;
		return this._d.address;
	}
	,social: function(q) {
		var _g = this;
		if(q != null) {
			if(this._d.sameAs == null) this._d.sameAs = [];
			sirius_utils_Dice.Values(q,function(v) {
				if(HxOverrides.indexOf(_g._d.sameAs,v,0) == -1) _g._d.sameAs[_g._d.sameAs.length] = v;
			});
		}
		return this._d.sameAs;
	}
	,__class__: sirius_seo_Descriptor
});
var sirius_seo_IAddress = function() { };
sirius_seo_IAddress.__name__ = ["sirius","seo","IAddress"];
sirius_seo_IAddress.prototype = {
	__class__: sirius_seo_IAddress
};
var sirius_seo_IBrand = function() { };
sirius_seo_IBrand.__name__ = ["sirius","seo","IBrand"];
sirius_seo_IBrand.prototype = {
	__class__: sirius_seo_IBrand
};
var sirius_seo_IContact = function() { };
sirius_seo_IContact.__name__ = ["sirius","seo","IContact"];
sirius_seo_IContact.prototype = {
	__class__: sirius_seo_IContact
};
var sirius_seo_IDescriptor = function() { };
sirius_seo_IDescriptor.__name__ = ["sirius","seo","IDescriptor"];
sirius_seo_IDescriptor.prototype = {
	__class__: sirius_seo_IDescriptor
};
var sirius_seo_IItem = function() { };
sirius_seo_IItem.__name__ = ["sirius","seo","IItem"];
sirius_seo_IItem.prototype = {
	__class__: sirius_seo_IItem
};
var sirius_seo_IOffer = function() { };
sirius_seo_IOffer.__name__ = ["sirius","seo","IOffer"];
sirius_seo_IOffer.prototype = {
	__class__: sirius_seo_IOffer
};
var sirius_seo_IOrgDescriptor = function() { };
sirius_seo_IOrgDescriptor.__name__ = ["sirius","seo","IOrgDescriptor"];
sirius_seo_IOrgDescriptor.__interfaces__ = [sirius_seo_IDescriptor];
sirius_seo_IOrgDescriptor.prototype = {
	__class__: sirius_seo_IOrgDescriptor
};
var sirius_seo_IReview = function() { };
sirius_seo_IReview.__name__ = ["sirius","seo","IReview"];
sirius_seo_IReview.prototype = {
	__class__: sirius_seo_IReview
};
var sirius_seo_ISearchBox = function() { };
sirius_seo_ISearchBox.__name__ = ["sirius","seo","ISearchBox"];
sirius_seo_ISearchBox.prototype = {
	__class__: sirius_seo_ISearchBox
};
var sirius_seo_IWebSite = function() { };
sirius_seo_IWebSite.__name__ = ["sirius","seo","IWebSite"];
sirius_seo_IWebSite.prototype = {
	__class__: sirius_seo_IWebSite
};
var sirius_seo_Organization = function() {
	sirius_seo_Descriptor.call(this,"Organization");
	this._e = this.data;
};
sirius_seo_Organization.__name__ = ["sirius","seo","Organization"];
sirius_seo_Organization.__super__ = sirius_seo_Descriptor;
sirius_seo_Organization.prototype = $extend(sirius_seo_Descriptor.prototype,{
	build: function(name,url,logo,email,social) {
		this.name(name);
		this.url(url);
		this.logo(logo);
		this.email(email);
		this.social(social);
	}
	,contact: function(phone,type,area,language,options) {
		if(this._e.contactPoint == null) this._e.contactPoint = [];
		var c = sirius_seo_SEO.sign({ },"ContactPoint",false);
		if(phone != null) c.telephone = phone;
		if(type != null) c.contactType = type;
		if(area != null) c.areaServed = area;
		if(language != null) c.availableLanguage = language;
		if(options != null) c.contactOption = options;
		this._e.contactPoint[this._e.contactPoint.length] = c;
		return this;
	}
	,__class__: sirius_seo_Organization
});
var sirius_seo_Person = function() {
	sirius_seo_Descriptor.call(this,"Person");
};
sirius_seo_Person.__name__ = ["sirius","seo","Person"];
sirius_seo_Person.__super__ = sirius_seo_Descriptor;
sirius_seo_Person.prototype = $extend(sirius_seo_Descriptor.prototype,{
	build: function(name,social) {
		this.name(name);
		this.social(social);
	}
	,__class__: sirius_seo_Person
});
var sirius_seo_Product = $hx_exports.sru.seo.Product = function() {
	sirius_seo_SEO.call(this,"Product");
};
sirius_seo_Product.__name__ = ["sirius","seo","Product"];
sirius_seo_Product.__super__ = sirius_seo_SEO;
sirius_seo_Product.prototype = $extend(sirius_seo_SEO.prototype,{
	name: function(q) {
		if(q != null) this.data.name = q;
		return Reflect.field(this.data,"name");
	}
	,image: function(q) {
		if(q != null) this.data.image = q;
		return Reflect.field(this.data,"image");
	}
	,description: function(q) {
		if(q != null) this.data.description = q;
		return Reflect.field(this.data,"description");
	}
	,mpn: function(q) {
		if(q != null) this.data.mpn = Std.string(q);
		return Reflect.field(this.data,"mpn");
	}
	,review: function(value,reviews) {
		if(this.reviewOf == null) {
			this.reviewOf = { '@type' : "AggregateRating", ratingValue : "0,0", reviewCount : 0};
			this.data.aggregateRating = this.reviewOf;
		}
		if(value != null) this.reviewOf.ratingValue = value.toFixed(1).split('.').join(',');
		if(reviews != null) if(reviews == null) this.reviewOf.reviewCount = "null"; else this.reviewOf.reviewCount = "" + reviews;
		return this.reviewOf;
	}
	,brand: function(name,image,url) {
		if(this.brandOf == null) {
			this.brandOf = { '@type' : "Thing", name : ""};
			this.data.brand = this.brandOf;
		}
		if(name != null) this.brandOf.name = name;
		if(image != null) this.brandOf.image = image;
		if(url != null) this.brandOf.url = url;
		return this.brandOf;
	}
	,offer: function(currency,availability,from,to) {
		if(this.offerOf == null) {
			this.offerOf = { '@type' : "AggregateOffer", name : ""};
			this.data.offers = this.offerOf;
		}
		if(currency != null) this.offerOf.priceCurrency = currency.toUpperCase();
		if(availability != null) this.offerOf.availability = "http://schema.org/" + availability;
		if(from != null) {
			if(to != null) {
				this.offerOf.lowPrice = from;
				this.offerOf.highPrice = to;
			} else this.offerOf.price = from;
		}
		return this.offerOf;
	}
	,build: function(name,image,description,mpn) {
		this.name(name);
		this.image(image);
		this.description(description);
		this.mpn(mpn);
		return this;
	}
	,__class__: sirius_seo_Product
});
var sirius_seo_Search = function() {
	sirius_seo_SEO.call(this,"WebSite");
	this._d = this.data;
};
sirius_seo_Search.__name__ = ["sirius","seo","Search"];
sirius_seo_Search.__super__ = sirius_seo_SEO;
sirius_seo_Search.prototype = $extend(sirius_seo_SEO.prototype,{
	url: function(q) {
		if(q != null) this._d.url = q;
		return this._d.url;
	}
	,action: function(target,prop) {
		if(this._d != null) this._d.potentialAction = { '@type' : "SearchAction", target : target, 'query-input' : "required name=" + prop};
		return this._d;
	}
	,build: function(q,target,prop) {
		this.url(q);
		this.action(target,prop);
		return this;
	}
	,__class__: sirius_seo_Search
});
var sirius_seo_WebSite = function() {
	sirius_seo_SEO.call(this,"WebSite");
	this._d = this.data;
};
sirius_seo_WebSite.__name__ = ["sirius","seo","WebSite"];
sirius_seo_WebSite.__super__ = sirius_seo_SEO;
sirius_seo_WebSite.prototype = $extend(sirius_seo_SEO.prototype,{
	name: function(q) {
		if(q != null) this._d.name = q;
		return this._d.name;
	}
	,alt: function(q) {
		if(q != null) this._d.alternateName = q;
		return this._d.alternateName;
	}
	,url: function(q) {
		if(q != null) this._d.url = q;
		return this._d.url;
	}
	,build: function(name,url,alt) {
		this.name(name);
		this.url(url);
		this.alt(alt);
		return this._d;
	}
	,__class__: sirius_seo_WebSite
});
var sirius_serial_IOTools = $hx_exports.IOTools = function() { };
sirius_serial_IOTools.__name__ = ["sirius","serial","IOTools"];
sirius_serial_IOTools.encodeBase64 = function(q) {
	if(!(typeof(q) == "string")) q = sirius_serial_IOTools.jsonEncode(q);
	return haxe_crypto_Base64.encode(haxe_io_Bytes.ofString(q));
};
sirius_serial_IOTools.decodeBase64 = function(q,json) {
	var r = null;
	try {
		r = haxe_crypto_Base64.decode(q).toString();
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
	}
	if(r != null) {
		if(json && r.length > 1) return sirius_serial_IOTools.jsonDecode(r); else return r;
	} else return null;
};
sirius_serial_IOTools.jsonEncode = function(o,rep,space) {
	return sirius_serial_JsonTool.stringfy(o,rep,space);
};
sirius_serial_IOTools.jsonDecode = function(q) {
	return JSON.parse(q);
};
sirius_serial_IOTools.md5Encode = function(o,base64) {
	if(typeof(o) == "string") return haxe_crypto_Md5.encode(o); else return haxe_crypto_Md5.encode(base64?sirius_serial_IOTools.encodeBase64(o):sirius_serial_IOTools.jsonEncode(o));
};
var sirius_serial_JsonTool = $hx_exports.JsonTool = function(replacer,space) {
	this.replacer = replacer;
	this.indent = space;
	this.pretty = space != null;
	this.nind = 0;
	this.buf = new StringBuf();
};
sirius_serial_JsonTool.__name__ = ["sirius","serial","JsonTool"];
sirius_serial_JsonTool.supressNull = function() {
	sirius_serial_JsonTool.customReplacer = function(a,b) {
		if(typeof(a) == "string") {
			if(a.substr(0,1) == "_") return null;
		}
		if(js_Boot.__instanceof(b,sirius_tools_Flag)) return b.value;
		if(b == null) return null; else return b;
	};
};
sirius_serial_JsonTool.stringfy = function(o,replacer,space) {
	var printer = new sirius_serial_JsonTool(replacer != null?replacer:sirius_serial_JsonTool.customReplacer,space);
	printer.write("",o);
	return printer.buf.b;
};
sirius_serial_JsonTool.prototype = {
	ipad: function() {
		if(this.pretty) {
			var v = StringTools.lpad("",this.indent,this.nind * this.indent.length);
			if(v == null) this.buf.b += "null"; else this.buf.b += "" + v;
		}
	}
	,newl: function() {
		if(this.pretty) this.buf.b += "\n";
	}
	,write: function(k,v) {
		if(this.replacer != null) v = this.replacer(k,v);
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 8:
				this.fieldsString(v,Reflect.fields(v));
				break;
			case 4:
				this.fieldsString(v,Reflect.fields(v));
				break;
			case 1:
				var v1 = v;
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2;
				if((function($this) {
					var $r;
					var f = v;
					$r = isFinite(f);
					return $r;
				}(this))) v2 = v; else v2 = "null";
				if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				break;
			case 5:
				this.buf.b += "\"<fun>\"";
				break;
			case 6:
				var c = _g[2];
				if(c == String) this.quote(v); else if(c == Array) {
					var v3 = v;
					this.buf.b += "[";
					var len = v3.length;
					var last = len - 1;
					var _g1 = 0;
					while(_g1 < len) {
						var i = _g1++;
						if(i > 0) this.buf.b += ","; else this.nind++;
						if(this.pretty) this.buf.b += "\n";
						this.ipad();
						this.write(i,v3[i]);
						if(i == last) {
							this.nind--;
							if(this.pretty) this.buf.b += "\n";
							this.ipad();
						}
					}
					this.buf.b += "]";
				} else if(c == haxe_ds_StringMap) {
					var v4 = v;
					var o = { };
					var $it0 = v4.keys();
					while( $it0.hasNext() ) {
						var k1 = $it0.next();
						Reflect.setField(o,k1,__map_reserved[k1] != null?v4.getReserved(k1):v4.h[k1]);
					}
					this.fieldsString(o,Reflect.fields(o));
				} else if(c == Date) {
					var v5 = v;
					this.quote(HxOverrides.dateStr(v5));
				} else this.fieldsString(v,Reflect.fields(v));
				break;
			case 7:
				var i1 = Type.enumIndex(v);
				var v6 = i1;
				if(v6 == null) this.buf.b += "null"; else this.buf.b += "" + v6;
				break;
			case 3:
				var v7 = v;
				if(v7 == null) this.buf.b += "null"; else this.buf.b += "" + v7;
				break;
			case 0:
				this.buf.b += "null";
				break;
			}
		}
	}
	,objString: function(v) {
		this.fieldsString(v,Reflect.fields(v));
	}
	,fieldsString: function(v,fields) {
		this.buf.b += "{";
		var len = fields.length;
		var last = len - 1;
		var first = true;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			var f = fields[i];
			var value = Reflect.field(v,f);
			if(value == null) continue;
			if(Reflect.isFunction(value)) continue;
			if(typeof(f) == "string" && HxOverrides.substr(f,0,1) == "_") continue;
			if(first) {
				this.nind++;
				first = false;
			} else this.buf.b += ",";
			if(this.pretty) this.buf.b += "\n";
			this.ipad();
			this.quote(f);
			this.buf.b += ":";
			if(this.pretty) this.buf.b += " ";
			this.write(f,value);
			if(i == last) {
				this.nind--;
				if(this.pretty) this.buf.b += "\n";
				this.ipad();
			}
		}
		this.buf.b += "}";
	}
	,quote: function(s) {
		this.buf.b += "\"";
		var i = 0;
		while(true) {
			var c = StringTools.fastCodeAt(s,i++);
			if(c != c) break;
			switch(c) {
			case 34:
				this.buf.b += "\\\"";
				break;
			case 92:
				this.buf.b += "\\\\";
				break;
			case 10:
				this.buf.b += "\\n";
				break;
			case 13:
				this.buf.b += "\\r";
				break;
			case 9:
				this.buf.b += "\\t";
				break;
			case 8:
				this.buf.b += "\\b";
				break;
			case 12:
				this.buf.b += "\\f";
				break;
			default:
				this.buf.b += String.fromCharCode(c);
			}
		}
		this.buf.b += "\"";
	}
	,__class__: sirius_serial_JsonTool
};
var sirius_signals_IFlow = function() { };
sirius_signals_IFlow.__name__ = ["sirius","signals","IFlow"];
sirius_signals_IFlow.prototype = {
	__class__: sirius_signals_IFlow
};
var sirius_signals_Flow = function(pipe,data) {
	this.data = data;
	this.pipe = pipe;
};
sirius_signals_Flow.__name__ = ["sirius","signals","Flow"];
sirius_signals_Flow.__interfaces__ = [sirius_signals_IFlow];
sirius_signals_Flow.prototype = {
	__class__: sirius_signals_Flow
};
var sirius_signals_IPipe = function() { };
sirius_signals_IPipe.__name__ = ["sirius","signals","IPipe"];
sirius_signals_IPipe.prototype = {
	__class__: sirius_signals_IPipe
};
var sirius_signals_Pipe = function(name,host) {
	this.calls = 0;
	this.enabled = true;
	this.transfer = true;
	this.name = name;
	this.reset();
};
sirius_signals_Pipe.__name__ = ["sirius","signals","Pipe"];
sirius_signals_Pipe.__interfaces__ = [sirius_signals_IPipe];
sirius_signals_Pipe.prototype = {
	add: function(handler) {
		if(Lambda.indexOf(this._l,handler) == -1) this._l.push(handler);
		return this;
	}
	,remove: function(handler) {
		var i = Lambda.indexOf(this._l,handler);
		if(i != -1) this._l.splice(i,1);
		return this;
	}
	,call: function(data) {
		var _g = this;
		if(this.enabled) {
			++this.calls;
			this.current = new sirius_signals_Flow(this,data);
			this.transfer = true;
			sirius_utils_Dice.Values(this._l,function(v) {
				v(_g.current);
				return !_g.transfer;
			});
		}
		this.current = null;
		return this;
	}
	,stop: function() {
		this.transfer = false;
	}
	,reset: function() {
		this._l = [];
	}
	,__class__: sirius_signals_Pipe
};
var sirius_tools_Delayer = $hx_exports.sru.tools.Delayer = function(handler,time,args,thisObj) {
	this._this = thisObj;
	this._handler = handler;
	this._time = time * 1000 | 0;
	this._args = args;
	this._cnt = 0;
	this._rpt = 1;
};
sirius_tools_Delayer.__name__ = ["sirius","tools","Delayer"];
sirius_tools_Delayer.create = function(handler,time,args,thisObj) {
	return new sirius_tools_Delayer(handler,time,args,thisObj);
};
sirius_tools_Delayer.prototype = {
	start: function(repeats) {
		if(repeats != null) this._rpt = repeats;
		if(this._id == null) {
			this._id = "t" + sirius_tools_Key.COUNTER();
			sirius_tools_Delayer._tks[Std.string(this._id)] = this;
		}
		this._tid = haxe_Timer.delay($bind(this,this._tick),this._time);
		this._tid.run();
		return this;
	}
	,stop: function() {
		this._cnt = 0;
		if(this._tid != null) {
			this._tid.stop();
			this._tid = null;
		}
		return this;
	}
	,_tick: function() {
		if(this._handler != null) {
			this._tid = null;
			Reflect.callMethod(this._this,this._handler,this._args);
			if(this._rpt == 0 || ++this._cnt < this._rpt) this.start(); else this._cnt = 0;
		}
	}
	,__class__: sirius_tools_Delayer
};
var sirius_tools_Flag = $hx_exports.Flag = function(value) {
	if(!(typeof(value) == "number") && ((value | 0) === value)) value = Std.parseInt(value);
	this.value = value >>> 0;
};
sirius_tools_Flag.__name__ = ["sirius","tools","Flag"];
sirius_tools_Flag.from = function(hash) {
	if(typeof(hash) == "string") hash = Std.parseInt(hash);
	return new sirius_tools_Flag(hash);
};
sirius_tools_Flag.FPut = function(hash,bit) {
	return hash | bit;
};
sirius_tools_Flag.FDrop = function(hash,bit) {
	return hash & ~bit;
};
sirius_tools_Flag.FToggle = function(hash,bit) {
	if(sirius_tools_Flag.FTest(hash,bit)) return sirius_tools_Flag.FDrop(hash,bit); else return sirius_tools_Flag.FPut(hash,bit);
};
sirius_tools_Flag.FTest = function(hash,value) {
	return (hash & value) == value;
};
sirius_tools_Flag.FValue = function(hash,skip) {
	if(skip == null) skip = 0;
	var v = hash.toString(2);
	var i = v.length;
	while(_$UInt_UInt_$Impl_$.gt(32,i)) {
		v = "0" + v;
		++i;
	}
	i = Std["int"](_$UInt_UInt_$Impl_$.toFloat(skip) % _$UInt_UInt_$Impl_$.toFloat(8));
	var r = "";
	while(_$UInt_UInt_$Impl_$.gt(8,i)) r += HxOverrides.substr(v,i * 4,4) + ((function($this) {
		var $r;
		var a = ++i;
		$r = _$UInt_UInt_$Impl_$.gt(8,a);
		return $r;
	}(this))?" ":"");
	return r;
};
sirius_tools_Flag.FLength = function(hash) {
	var count = 0;
	while(_$UInt_UInt_$Impl_$.gt(hash,0)) {
		hash = hash & hash - 1;
		++count;
	}
	return count;
};
sirius_tools_Flag.prototype = {
	toggle: function(bit) {
		this.value = sirius_tools_Flag.FToggle(this.value,bit);
		return this;
	}
	,put: function(bit) {
		this.value = sirius_tools_Flag.FPut(this.value,1 << bit);
		return this;
	}
	,drop: function(bit) {
		this.value = sirius_tools_Flag.FDrop(this.value,1 << bit);
		return this;
	}
	,test: function(bit) {
		return sirius_tools_Flag.FTest(this.value,1 << bit);
	}
	,putAll: function(bits) {
		var _g = this;
		sirius_utils_Dice.Values(bits,function(v) {
			_g.put(1 << v);
		});
		return this;
	}
	,dropAll: function(bits) {
		var _g = this;
		sirius_utils_Dice.Values(bits,function(v) {
			_g.drop(1 << v);
		});
		return this;
	}
	,testAll: function(bits) {
		var _g = this;
		return sirius_utils_Dice.Values(bits,function(v) {
			return !_g.test(v);
		}).completed;
	}
	,testAny: function(bits,min) {
		if(min == null) min = 1;
		var _g = this;
		return !sirius_utils_Dice.Values(bits,function(v) {
			if(_g.test(v)) --min;
			return min == 0;
		}).completed;
	}
	,length: function() {
		return sirius_tools_Flag.FLength(this.value);
	}
	,toString: function(skip) {
		if(skip == null) skip = 0;
		return sirius_tools_Flag.FValue(this.value,skip);
	}
	,__class__: sirius_tools_Flag
};
var sirius_tools_Key = $hx_exports.sru.tools.Key = function() { };
sirius_tools_Key.__name__ = ["sirius","tools","Key"];
sirius_tools_Key.COUNTER = function(id) {
	if(id == null) id = "global";
	var v = 0;
	if(!Object.prototype.hasOwnProperty.call(sirius_tools_Key._cts,id)) sirius_tools_Key._cts[id] = 0; else {
		v = Reflect.field(sirius_tools_Key._cts,id);
		sirius_tools_Key._cts[id] = v + 1;
	}
	return v;
};
sirius_tools_Key.GEN = function(size,table,mixCase) {
	if(mixCase == null) mixCase = true;
	if(size == null) size = 9;
	var s = "";
	if(table == null) table = sirius_tools_Key.TABLE;
	var l = table.length;
	var c = null;
	while(_$UInt_UInt_$Impl_$.gt(size,s.length)) {
		var pos = Std.random(l);
		c = HxOverrides.substr(table,pos,1);
		if(mixCase) {
			if(Math.random() < .5) c = c.toUpperCase(); else c = c.toLowerCase();
		}
		s += c;
	}
	return s;
};
var sirius_tools_Ticker = $hx_exports.Ticker = function() { };
sirius_tools_Ticker.__name__ = ["sirius","tools","Ticker"];
sirius_tools_Ticker._tickAll = function() {
	sirius_utils_Dice.All(sirius_tools_Ticker._pool,function(p,v) {
		if(v != null) v();
	});
};
sirius_tools_Ticker.start = function() {
	sirius_tools_Ticker.stop();
	var t = sirius_tools_Ticker._tickAll;
	sirius_tools_Ticker._uid = setInterval(t,33);
};
sirius_tools_Ticker.stop = function() {
	var uid = sirius_tools_Ticker._uid;
	clearInterval(uid);
};
sirius_tools_Ticker.add = function(handler) {
	if(handler == null) return;
	var iof;
	var x = handler;
	iof = HxOverrides.indexOf(sirius_tools_Ticker._pool,x,0);
	if(iof == -1) sirius_tools_Ticker._pool[sirius_tools_Ticker._pool.length] = handler;
};
sirius_tools_Ticker.remove = function(handler) {
	if(handler == null) return;
	var iof;
	var x = handler;
	iof = HxOverrides.indexOf(sirius_tools_Ticker._pool,x,0);
	if(iof != -1) sirius_tools_Ticker._pool.splice(iof,1);
};
sirius_tools_Ticker.delay = function(handler,time,args) {
	return sirius_tools_Delayer.create(handler,time,args);
};
var sirius_tools_Utils = $hx_exports.Utils = function() { };
sirius_tools_Utils.__name__ = ["sirius","tools","Utils"];
sirius_tools_Utils.matchMedia = function(value) {
	return window.matchMedia(value).matches;
};
sirius_tools_Utils.screenOrientation = function() {
	if(sirius_tools_Utils.matchMedia("(orientation: portrait)")) return "portrait"; else return "landscape";
};
sirius_tools_Utils.viewportWidth = function() {
	return window.innerWidth || document.documentElement.clientWidth;
};
sirius_tools_Utils.viewportHeight = function() {
	return window.innerHeight || document.documentElement.clientHeight;
};
sirius_tools_Utils.mathLocation = function(uri) {
	return window.location.href.indexOf(uri) != -1;
};
sirius_tools_Utils.screenInfo = function() {
	return sirius_tools_Utils.screenOrientation() + "(" + sirius_tools_Utils.viewportWidth() + "x" + sirius_tools_Utils.viewportHeight() + ")";
};
sirius_tools_Utils.displayFrom = function(t) {
	var id = null;
	var type = null;
	if($bind(t,t.hasAttribute) != null) {
		id = t.getAttribute("sru-id");
		if(id == null) {
			type = t.getAttribute("sru-dom");
			if(type == null) {
				type = t.tagName.toUpperCase();
				t.setAttribute("sru-dom",type);
			} else type = type.toUpperCase();
		} else return sirius_dom_Display.fromGC(id);
	}
	var OC = Reflect.field(sirius_tools_Utils._typeOf,type);
	if(OC == null) return new sirius_dom_Display(t); else return new OC(t);
};
sirius_tools_Utils.getDisplay = function(t) {
	var id;
	if($bind(t,t.hasAttribute) != null && t.hasAttribute("sru-id")) id = Std.parseInt(t.getAttribute("sru-id")); else id = null;
	if(id != null) return sirius_dom_Display.fromGC(id);
	return new sirius_dom_Display(t);
};
sirius_tools_Utils.intToString = function(value,rad) {
	if(typeof(value) == "string") value = Std.parseInt(value);
	value = value;
	return Reflect.callMethod(value,value.toString,rad != null?[rad]:[]);
};
sirius_tools_Utils.getAttributes = function(display) {
	var attr = display.element.attributes;
	var data = { };
	if(attr != null) {
		var i = 0;
		var len = attr.length;
		while(_$UInt_UInt_$Impl_$.gt(len,i)) {
			var a = attr.item(i);
			data[a.name] = a.value;
			++i;
		}
	}
	return data;
};
sirius_tools_Utils.getMin = function(values,filter) {
	var r = null;
	sirius_utils_Dice.Values(values,function(i) {
		if(filter == null || filter(i)) {
			if(i < r || r == null) r = i;
		}
	});
	return r;
};
sirius_tools_Utils.getMax = function(values,filter) {
	var r = null;
	sirius_utils_Dice.Values(values,function(i) {
		if(filter == null || filter(i)) {
			if(i > r || r == null) r = i;
		}
	});
	return r;
};
sirius_tools_Utils.getQueryParams = function(value) {
	var params = { };
	if(value.indexOf("?") > 0) value = value.split("+").join(" ").split("?")[1]; else return params;
	sirius_utils_Dice.Values(value.split("&"),function(v) {
		var data = v.split("=");
		if(data.length > 1) Reflect.setField(params,StringTools.urlDecode(data[0]),StringTools.urlDecode(data[1]));
	});
	return params;
};
sirius_tools_Utils.clearArray = function(path,filter) {
	var copy = [];
	sirius_utils_Dice.Values(path,function(v) {
		if(v != null && v != "" && (filter == null || filter(v))) copy[copy.length] = v;
	});
	return copy;
};
sirius_tools_Utils.toString = function(o,json) {
	if(json == true) return JSON.stringify(o); else return Std.string(o);
};
sirius_tools_Utils.sruString = function(o) {
	return sirius_tools_Utils._sruFy(o,"","");
};
sirius_tools_Utils._sruFy = function(o,i,b) {
	i = i + "  ";
	sirius_utils_Dice.All(o,function(p,v) {
		if(v == null) b += i + p + ":* = NULL\r"; else if(typeof(v) == "string") b += i + p + ":String = " + Std.string(v) + "\r"; else if(typeof(v) == "boolean") b += i + p + ":Bool = " + Std.string(v) + "\r"; else if(((v | 0) === v) || typeof(v) == "number") b += i + p + ":Number = " + Std.string(v) + "\r"; else if((v instanceof Array) && v.__enum__ == null) b += i + p + ":Array[" + Std.string(v.length) + "]:[\r" + sirius_tools_Utils._sruFy(v,i,"") + i + "]\r"; else b += i + p + ":Object {\r" + sirius_tools_Utils._sruFy(v,i,"") + i + "}\r";
	});
	return b;
};
sirius_tools_Utils.isValid = function(o) {
	if(o != null && o != "") {
		if(o != "null" && Object.prototype.hasOwnProperty.call(o,"length")) return o.length > 0; else return o != 0 && o != false;
	}
	return false;
};
sirius_tools_Utils.getValidOne = function(o,alt) {
	if(sirius_tools_Utils.isValid(o)) return o; else return alt;
};
sirius_tools_Utils["typeof"] = function(o) {
	var name;
	if(o != null) {
		try {
			return o.__proto__.__class__.__name__.join(".");
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
		}
		try {
			return Type.getClassName(Type.getClass(o));
		} catch( e1 ) {
			if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
		}
	}
	return null;
};
sirius_tools_Utils["boolean"] = function(q) {
	return q == true || q == 1 || q == "1" || q == "true" || q == "yes" || q == "accept" || q == "ok";
};
sirius_tools_Utils.money = function(val,s,a,b) {
	if(b == null) b = ".";
	if(a == null) a = ",";
	if(s == null) s = "$";
	var r = "";
	val *= 100;
	if(val > 99) {
		val = "" + Std["int"](val);
		var i = val.length;
		var c = 0;
		while(i-- > 0) {
			r = Std.string(val.substr(i,1)) + r;
			if(i > 0) {
				if(c == 1) r = b + r; else if(c > 1 && (c + 2) % 3 == 0) r = a + r;
			} else if(c < 3) r = "0" + (c == 1?".":"") + r;
			++c;
		}
	} else r = "0" + b + (val < 10?"0":"") + Std.string(val);
	return s + r;
};
sirius_tools_Utils.stdClone = function(q) {
	return JSON.parse(JSON.stringify(q));
};
sirius_tools_Utils.paramsOf = function(o) {
	var r = [];
	sirius_utils_Dice.All(o,function(p,v) {
		v = JSON.stringify(v);
		r[r.length] = p + "=" + StringTools.urlEncode(v.substr(1,v.length - 2));
	});
	return r.join("&");
};
var sirius_transitions_Animator = $hx_exports.Animator = function() { };
sirius_transitions_Animator.__name__ = ["sirius","transitions","Animator"];
sirius_transitions_Animator.available = function() {
	if(sirius_transitions_Animator.tweenObject == null && window.Tween != null || window.TweenMax != null || window.TweenLite != null) sirius_transitions_Animator.tweenObject = window.Tween || window.TweenMax || window.TweenLite;
	return sirius_transitions_Animator.tweenObject != null;
};
sirius_transitions_Animator.get = function(o) {
	if(o != null && js_Boot.__instanceof(o,sirius_dom_IDisplay)) return o.element; else return o;
};
sirius_transitions_Animator.call = function(time,handler,params,scope,frame) {
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.delayedCall(time,handler,params,scope,frame); else return null;
};
sirius_transitions_Animator.all = function(o,act) {
	if(act == null) act = false;
	if(o == null) o = true;
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available()) {
		if(o == true) return sirius_transitions_Animator.tweenObject.getAllTweens(act); else if(o != null) return sirius_transitions_Animator.tweenObject.getTweensOf(o,act); else return [];
	} else return [];
};
sirius_transitions_Animator.stop = function(o,child) {
	if(child == null) child = false;
	if(o == null) o = true;
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available()) {
		if(o == true) return sirius_transitions_Animator.tweenObject.killAll(); else if(o != null) {
			if(child) return sirius_transitions_Animator.tweenObject.killChildTweensOf(o); else return sirius_transitions_Animator.tweenObject.killTweensOf(o);
		} else return null;
	} else return null;
};
sirius_transitions_Animator.pause = function() {
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.pauseAll(); else return null;
};
sirius_transitions_Animator.resume = function() {
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.resumeAll(); else return null;
};
sirius_transitions_Animator.isActive = function(o) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.isTweening(o); else return false;
};
sirius_transitions_Animator.to = function(o,time,transform) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.to(o,time,transform); else return null;
};
sirius_transitions_Animator.from = function(o,time,transform) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.from(o,time,transform); else return null;
};
sirius_transitions_Animator.fromTo = function(o,time,transformFrom,transformTo) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.from(o,time,transformFrom,transformTo); else return null;
};
sirius_transitions_Animator.stagTo = function(o,time,transform,stagger,complete,args,scope) {
	sirius_utils_Dice.All(o,function(p,v) {
		o[p] = sirius_transitions_Animator.get(v);
	});
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.staggerTo(o,time,transform,stagger,complete,args,scope); else return null;
};
sirius_transitions_Animator.stagFrom = function(o,time,transform,stagger,complete,args,scope) {
	sirius_utils_Dice.All(o,function(p,v) {
		o[p] = sirius_transitions_Animator.get(v);
	});
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.staggerFrom(o,time,transform,stagger,complete,args,scope); else return null;
};
sirius_transitions_Animator.stagFromTo = function(o,time,transformFrom,transformTo,stagger,complete,args,scope) {
	sirius_utils_Dice.All(o,function(p,v) {
		o[p] = sirius_transitions_Animator.get(v);
	});
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.staggerFromTo(o,time,transformFrom,transformTo,stagger,complete,args,scope); else return null;
};
sirius_transitions_Animator.timeScale = function(o) {
	if(sirius_transitions_Animator.available()) return sirius_transitions_Animator.tweenObject.globalTimeScale(o); else return 0;
};
sirius_transitions_Animator.set = function(o,transform) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available() && o != null) return sirius_transitions_Animator.tweenObject.set(o,transform); else return null;
};
var sirius_transitions_IEasing = function() { };
sirius_transitions_IEasing.__name__ = ["sirius","transitions","IEasing"];
sirius_transitions_IEasing.prototype = {
	__class__: sirius_transitions_IEasing
};
var sirius_transitions_ITween = function() { };
sirius_transitions_ITween.__name__ = ["sirius","transitions","ITween"];
sirius_transitions_ITween.prototype = {
	__class__: sirius_transitions_ITween
};
var sirius_utils_Filler = $hx_exports.sru.utils.Filler = function() { };
sirius_utils_Filler.__name__ = ["sirius","utils","Filler"];
sirius_utils_Filler._apply = function(path,content,data) {
	if(data == null) content = content.split("{{" + path + "}}").join(""); else if(typeof(data) == "number" || typeof(data) == "string" || typeof(data) == "boolean" || ((data | 0) === data)) content = content.split("{{" + path + "}}").join(data); else {
		if(path != null && path != "") path = path + "."; else path = "";
		sirius_utils_Dice.All(data,function(p,v) {
			content = sirius_utils_Filler._apply(path + p,content,v);
		});
	}
	return content;
};
sirius_utils_Filler.to = function(value,data,sufix) {
	var r = "";
	if((data instanceof Array) && data.__enum__ == null) sirius_utils_Dice.All(data,function(p,v) {
		v["%0"] = p;
		r += sirius_utils_Filler._apply(sufix,value,v);
		Reflect.deleteField(v,"%0");
	}); else r = sirius_utils_Filler._apply(sufix,value,data);
	return r;
};
sirius_utils_Filler.extractNumber = function(value) {
	var s = "";
	var i = 0;
	while(_$UInt_UInt_$Impl_$.gt(value.length,i)) {
		var j = Std.parseInt(HxOverrides.substr(value,i,1));
		++i;
		if(j != null) s += Std.string(_$UInt_UInt_$Impl_$.toFloat(j)) + "";
	}
	i = Std.parseInt(s);
	if(i == null) return 0; else return i;
};
var sirius_utils_IDiceRoll = function() { };
sirius_utils_IDiceRoll.__name__ = ["sirius","utils","IDiceRoll"];
sirius_utils_IDiceRoll.prototype = {
	__class__: sirius_utils_IDiceRoll
};
var sirius_utils_ITable = function() { };
sirius_utils_ITable.__name__ = ["sirius","utils","ITable"];
sirius_utils_ITable.prototype = {
	__class__: sirius_utils_ITable
};
var sirius_utils_Pixel = $hx_exports.utils.Pixel = function() { };
sirius_utils_Pixel.__name__ = ["sirius","utils","Pixel"];
sirius_utils_Pixel.isAvailable = function() {
	return window.extended != null ? window.extended.CreatePixel != null : false;
};
sirius_utils_Pixel.Create = function(color,opacity) {
	var img = new sirius_dom_Img();
	if(sirius_utils_Pixel.isAvailable()) {
		var f = window.extended.CreatePixel;
		img.fit(1,1);
		img.src(f(color,opacity));
	}
	return img;
};
var sirius_utils_SearchTag = $hx_exports.SearchTag = function(tags) {
	tags = [];
	this.add(tags);
};
sirius_utils_SearchTag.__name__ = ["sirius","utils","SearchTag"];
sirius_utils_SearchTag.from = function(value) {
	if(!js_Boot.__instanceof(value,sirius_utils_SearchTag)) value = new sirius_utils_SearchTag(value);
	return value;
};
sirius_utils_SearchTag.convert = function(data) {
	data = Std.string(data).toLowerCase().split(" ").join("");
	data = Std.string(data.substr(0,1)) + sirius_utils_SearchTag._E.replace(data,"");
	return data;
};
sirius_utils_SearchTag.prototype = {
	_tag: function() {
		return "|" + this.tags.join("|") + "|";
	}
	,add: function(values) {
		var _g = this;
		if((values instanceof Array) && values.__enum__ == null) values = values; else values = [values];
		sirius_utils_Dice.Values(values,function(v) {
			v = sirius_utils_SearchTag.convert(v);
			var iof = Lambda.indexOf(_g.tags,v);
			if(iof == -1) _g.tags[_g.tags.length] = v;
		});
	}
	,remove: function(values) {
		var _g = this;
		values = sirius_utils_SearchTag.from(values).tags;
		sirius_utils_Dice.Values(values,function(v) {
			var iof = Lambda.indexOf(_g.tags,v);
			if(iof != -1) _g.tags.splice(iof,1);
		});
	}
	,compare: function(values,equality) {
		if(equality == null) equality = false;
		var tag = this._tag();
		values = sirius_utils_SearchTag.from(values).tags;
		var total = values.length;
		var count = sirius_utils_Dice.Values(values,function(v) {
			if(equality) return tag.indexOf("|" + v + "|") == -1; else return tag.indexOf(v) != -1;
		}).keys;
		return _$UInt_UInt_$Impl_$.toFloat(count) / _$UInt_UInt_$Impl_$.toFloat(total) * 100;
	}
	,equal: function(values) {
		var tag = this._tag();
		values = sirius_utils_SearchTag.from(values).tags;
		return sirius_utils_Dice.Values(values,function(v) {
			return tag.indexOf("|" + v + "|") == -1;
		}).completed;
	}
	,contains: function(values) {
		var tag = this._tag();
		values = sirius_utils_SearchTag.from(values).tags;
		return !sirius_utils_Dice.Values(values,function(v) {
			return tag.indexOf(v) != -1;
		}).completed;
	}
	,__class__: sirius_utils_SearchTag
};
var sirius_utils_Table = $hx_exports.sru.utils.Table = function() {
};
sirius_utils_Table.__name__ = ["sirius","utils","Table"];
sirius_utils_Table.__interfaces__ = [sirius_utils_ITable];
sirius_utils_Table.recycle = function(q,t) {
	var r = null;
	if(sirius_utils_Table._trash.length > 0) r = sirius_utils_Table._trash.pop(); else r = new sirius_utils_Table();
	return r.scan(q,t);
};
sirius_utils_Table.empty = function() {
	return new sirius_utils_Table().reset();
};
sirius_utils_Table.prototype = {
	reset: function() {
		this.content = [];
		this.elements = [];
		return this;
	}
	,scan: function(q,t) {
		this.reset();
		if(q == null) q = "*";
		var is3D = false;
		if(t == null) t = window.document.body;
		var result;
		if(q != "*") result = t.querySelectorAll(q); else result = t.childNodes;
		var element = null;
		var obj = null;
		var len = result.length;
		if(_$UInt_UInt_$Impl_$.gt(len,0)) {
			var ind = 0;
			while(_$UInt_UInt_$Impl_$.gt(len,ind)) {
				element = result.item(ind);
				if(element.tagName != null) {
					obj = sirius_tools_Utils.displayFrom(element);
					this.content[ind] = obj;
					this.elements[ind] = element;
				}
				++ind;
			}
		}
		return this;
	}
	,contains: function(q) {
		var t = sirius_utils_Table.empty();
		var i = 0;
		this.each(function(v) {
			if(v.element.innerHTML.indexOf(q) != -1) {
				t.content[i] = v;
				t.elements[i] = v.element;
				++i;
			}
		});
		return t;
	}
	,flush: function(handler,complete) {
		sirius_utils_Dice.Values(this.content,handler,complete);
		return this;
	}
	,first: function() {
		return this.content[0];
	}
	,last: function() {
		return this.content[this.content.length - 1];
	}
	,obj: function(i) {
		return this.content[i];
	}
	,css: function(styles) {
		this.each(function(v) {
			v.css(styles);
		});
		return this;
	}
	,attribute: function(name,value) {
		this.each(function(v) {
			v.attribute(name,value);
		});
		return this;
	}
	,attributes: function(values) {
		this.each(function(v) {
			v.attributes(values);
		});
		return this;
	}
	,show: function() {
		return this.each(function(v) {
			v.show();
		});
	}
	,hide: function() {
		return this.each(function(v) {
			v.hide();
		});
	}
	,remove: function() {
		return this.each(function(v) {
			v.remove();
		});
	}
	,cursor: function(value) {
		return this.each(function(v) {
			v.cursor(value);
		});
	}
	,clear: function(fast) {
		return this.each(function(v) {
			v.empty(fast);
		});
	}
	,addTo: function(target) {
		return this.each(function(v) {
			v.addTo(target);
		});
	}
	,addToBody: function() {
		return this.each(function(v) {
			v.addToBody();
		});
	}
	,length: function() {
		return this.content.length;
	}
	,each: function(handler) {
		sirius_utils_Dice.Values(this.content,handler);
		return this;
	}
	,call: function(method,args) {
		sirius_utils_Dice.Call(this.content,method,args);
		return this;
	}
	,on: function(name,handler,mode) {
		return this.each(function(v) {
			v.events.on(name,handler,mode);
		});
	}
	,merge: function(tables) {
		var t = sirius_utils_Table.empty();
		if(tables == null) tables = [];
		tables[tables.length] = this;
		sirius_utils_Dice.Values(tables,function(v) {
			t.content = t.content.concat(v.content);
			t.elements = t.elements.concat(v.elements);
		});
		return t;
	}
	,dispose: function() {
		this.each(function(o) {
			o.dispose();
		});
		this.content = null;
		this.elements = null;
		sirius_utils_Table._trash[sirius_utils_Table._trash.length] = this;
	}
	,onWheel: function(handler,mode) {
		return this.on("wheel",handler,mode);
	}
	,onCopy: function(handler,mode) {
		return this.on("copy",handler,mode);
	}
	,onCut: function(handler,mode) {
		return this.on("cut",handler,mode);
	}
	,onPaste: function(handler,mode) {
		return this.on("paste",handler,mode);
	}
	,onAbort: function(handler,mode) {
		return this.on("abort",handler,mode);
	}
	,onBlur: function(handler,mode) {
		return this.on("blur",handler,mode);
	}
	,onFocusIn: function(handler,mode) {
		return this.on("focusin",handler,mode);
	}
	,onFocusOut: function(handler,mode) {
		return this.on("focusout",handler,mode);
	}
	,onCanPlay: function(handler,mode) {
		return this.on("canplay",handler,mode);
	}
	,onCanPlayThrough: function(handler,mode) {
		return this.on("canplaythrough",handler,mode);
	}
	,onChange: function(handler,mode) {
		return this.on("change",handler,mode);
	}
	,onClick: function(handler,mode) {
		return this.on("click",handler,mode);
	}
	,onContextMenu: function(handler,mode) {
		return this.on("contextmenu",handler,mode);
	}
	,onDblClick: function(handler,mode) {
		return this.on("dblclick",handler,mode);
	}
	,onDrag: function(handler,mode) {
		return this.on("drag",handler,mode);
	}
	,onDragEnd: function(handler,mode) {
		return this.on("dragend",handler,mode);
	}
	,onDragEnter: function(handler,mode) {
		return this.on("dragenter",handler,mode);
	}
	,onDragLeave: function(handler,mode) {
		return this.on("dragleave",handler,mode);
	}
	,onDragOver: function(handler,mode) {
		return this.on("dragover",handler,mode);
	}
	,onDragStart: function(handler,mode) {
		return this.on("dragstart",handler,mode);
	}
	,onDrop: function(handler,mode) {
		return this.on("drop",handler,mode);
	}
	,onDurationChange: function(handler,mode) {
		return this.on("durationchange",handler,mode);
	}
	,onEmptied: function(handler,mode) {
		return this.on("emptied",handler,mode);
	}
	,onEnded: function(handler,mode) {
		return this.on("ended",handler,mode);
	}
	,onInput: function(handler,mode) {
		return this.on("input",handler,mode);
	}
	,onInvalid: function(handler,mode) {
		return this.on("invalid",handler,mode);
	}
	,onKeyDown: function(handler,mode) {
		return this.on("keydown",handler,mode);
	}
	,onKeyPress: function(handler,mode) {
		return this.on("keypress",handler,mode);
	}
	,onKeyUp: function(handler,mode) {
		return this.on("keyup",handler,mode);
	}
	,onLoad: function(handler,mode) {
		return this.on("load",handler,mode);
	}
	,onLoadedData: function(handler,mode) {
		return this.on("loadeddata",handler,mode);
	}
	,onLoadedMetadata: function(handler,mode) {
		return this.on("loadedmetadata",handler,mode);
	}
	,onLoadStart: function(handler,mode) {
		return this.on("loadstart",handler,mode);
	}
	,onMouseDown: function(handler,mode) {
		return this.on("mousedown",handler,mode);
	}
	,onMouseEnter: function(handler,mode) {
		return this.on("mouseenter",handler,mode);
	}
	,onMouseLeave: function(handler,mode) {
		return this.on("mouseleave",handler,mode);
	}
	,onMouseMove: function(handler,mode) {
		return this.on("mousemove",handler,mode);
	}
	,onMouseOut: function(handler,mode) {
		return this.on("mouseout",handler,mode);
	}
	,onMouseOver: function(handler,mode) {
		return this.on("mouseover",handler,mode);
	}
	,onMouseUp: function(handler,mode) {
		return this.on("mouseup",handler,mode);
	}
	,onPause: function(handler,mode) {
		return this.on("pause",handler,mode);
	}
	,onPlay: function(handler,mode) {
		return this.on("play",handler,mode);
	}
	,onPlaying: function(handler,mode) {
		return this.on("playing",handler,mode);
	}
	,onProgress: function(handler,mode) {
		return this.on("progress",handler,mode);
	}
	,onRateChange: function(handler,mode) {
		return this.on("ratechange",handler,mode);
	}
	,onReset: function(handler,mode) {
		return this.on("reset",handler,mode);
	}
	,onScroll: function(handler,mode) {
		return this.on("scroll",handler,mode);
	}
	,onSeeked: function(handler,mode) {
		return this.on("seeked",handler,mode);
	}
	,onSeeking: function(handler,mode) {
		return this.on("seeking",handler,mode);
	}
	,onSelect: function(handler,mode) {
		return this.on("select",handler,mode);
	}
	,onShow: function(handler,mode) {
		return this.on("show",handler,mode);
	}
	,onStalled: function(handler,mode) {
		return this.on("stalled",handler,mode);
	}
	,onSubmit: function(handler,mode) {
		return this.on("submit",handler,mode);
	}
	,onSuspend: function(handler,mode) {
		return this.on("suspend",handler,mode);
	}
	,onTimeUpdate: function(handler,mode) {
		return this.on("timeupdate",handler,mode);
	}
	,onVolumeChange: function(handler,mode) {
		return this.on("volumechange",handler,mode);
	}
	,onWaiting: function(handler,mode) {
		return this.on("waiting",handler,mode);
	}
	,onPointerCancel: function(handler,mode) {
		return this.on("pointercancel",handler,mode);
	}
	,onPointerDown: function(handler,mode) {
		return this.on("pointerdown",handler,mode);
	}
	,onPointerUp: function(handler,mode) {
		return this.on("pointerup",handler,mode);
	}
	,onPointerMove: function(handler,mode) {
		return this.on("pointermove",handler,mode);
	}
	,onPointerOut: function(handler,mode) {
		return this.on("pointerout",handler,mode);
	}
	,onPointerOver: function(handler,mode) {
		return this.on("pointerover",handler,mode);
	}
	,onPointerEnter: function(handler,mode) {
		return this.on("pointerenter",handler,mode);
	}
	,onPointerLeave: function(handler,mode) {
		return this.on("pointerleave",handler,mode);
	}
	,onGotPointerCapture: function(handler,mode) {
		return this.on("gotpointercapture",handler,mode);
	}
	,onLostPointerCapture: function(handler,mode) {
		return this.on("lostpointercapture",handler,mode);
	}
	,onPointerLockChange: function(handler,mode) {
		return this.on("pointerlockchange",handler,mode);
	}
	,onPointerLockError: function(handler,mode) {
		return this.on("pointerlockerror",handler,mode);
	}
	,onError: function(handler,mode) {
		return this.on("error",handler,mode);
	}
	,onTouchStart: function(handler,mode) {
		return this.on("touchstart",handler,mode);
	}
	,onTouchEnd: function(handler,mode) {
		return this.on("touchend",handler,mode);
	}
	,onTouchMove: function(handler,mode) {
		return this.on("touchmove",handler,mode);
	}
	,onTouchCancel: function(handler,mode) {
		return this.on("touchcancel",handler,mode);
	}
	,onVisibility: function(handler,mode) {
		return this.on("visibility",handler,mode);
	}
	,focusOverall: function(handler,mode) {
		return this.each(function(o) {
			o.events.focusOverall(handler,mode);
		});
	}
	,__class__: sirius_utils_Table
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
function $arrayPushClosure(a) { return function(x) { a.push(x); }; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.__name__ = ["Array"];
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
var DataView = $global.DataView || js_html_compat_DataView;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_crypto_Base64.BYTES = haxe_io_Bytes.ofString(haxe_crypto_Base64.CHARS);
haxe_io_FPHelper.i64tmp = (function($this) {
	var $r;
	var x = new haxe__$Int64__$_$_$Int64(0,0);
	$r = x;
	return $r;
}(this));
js_Boot.__toStr = {}.toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
sirius_dom_Display._CNT = 0;
sirius_dom_Display._DATA = [];
sirius_net_Loader.FILES = { };
sirius_modules_ModLib.CACHE = { };
sirius_seo_SEOTool.WEBSITE = 1;
sirius_seo_SEOTool.BREADCRUMBS = 2;
sirius_seo_SEOTool.PRODUCT = 4;
sirius_seo_SEOTool.ORGANIZATION = 8;
sirius_seo_SEOTool.PERSON = 16;
sirius_seo_SEOTool.SEARCH = 32;
sirius_Sirius._loaded = false;
sirius_Sirius.resources = new sirius_modules_ModLib();
sirius_Sirius.domain = new sirius_net_Domain();
sirius_Sirius.logger = new sirius_data_Logger();
sirius_Sirius._initialized = sirius_Sirius.main();
sirius_Sirius.loader = new sirius_net_Loader();
sirius_Sirius.agent = new sirius_tools_Agent();
sirius_Sirius.seo = new sirius_seo_SEOTool();
sirius_Sirius.plugins = { };
sirius_css_CSSGroup.SOF = "/*SOF*/@media";
sirius_css_CSSGroup.EOF = "}/*EOF*/";
sirius_css_CSSGroup.MEDIA_PR = "print";
sirius_css_CSSGroup.MEDIA_XS = "(min-width:1px)";
sirius_css_CSSGroup.MEDIA_SM = "(min-width:768px)";
sirius_css_CSSGroup.MEDIA_MD = "(min-width:992px)";
sirius_css_CSSGroup.MEDIA_LG = "(min-width:1200px)";
sirius_css_Automator._scx = "#xs#sm#md#lg#pr#";
sirius_css_Automator.css = new sirius_css_CSSGroup();
sirius_css_Automator._dev = false;
sirius_css_Automator._inits = { reset : false, grid : false};
sirius_css_AutomatorRules.shadowConfig = { distance : 1, direction : 45, flex : .1, draws : 1, strength : 3};
sirius_css_AutomatorRules._KEYS = { 'void' : { value : "\"\"", verifier : sirius_css_AutomatorRules.commonKey}, glass : { value : "background-color:transparent", verifier : sirius_css_AutomatorRules.colorKey}, b : { value : "bottom", verifier : sirius_css_AutomatorRules.numericKey}, t : { value : "top", verifier : sirius_css_AutomatorRules.numericKey}, l : { value : "left", verifier : sirius_css_AutomatorRules.numericKey}, r : { value : "right", verifier : sirius_css_AutomatorRules.numericKey}, m : { value : "middle", verifier : sirius_css_AutomatorRules.commonKey}, j : { value : "justify", verifier : sirius_css_AutomatorRules.commonKey}, c : { value : "center", verifier : sirius_css_AutomatorRules.commonKey}, n : { value : "none", verifier : sirius_css_AutomatorRules.commonKey}, line : { value : "line", verifier : sirius_css_AutomatorRules.pushKey}, marg : { value : "margin", verifier : sirius_css_AutomatorRules.numericKey}, padd : { value : "padding", verifier : sirius_css_AutomatorRules.numericKey}, bord : { value : "border", verifier : sirius_css_AutomatorRules.numericKey}, w : { value : "width", verifier : sirius_css_AutomatorRules.valueKey}, h : { value : "height", verifier : sirius_css_AutomatorRules.valueKey}, o : { value : "outline", verifier : sirius_css_AutomatorRules.valueKey}, disp : { value : "display", verifier : sirius_css_AutomatorRules.valueKey}, vert : { value : "vertical-align", verifier : sirius_css_AutomatorRules.valueKey}, blk : { value : "block", verifier : sirius_css_AutomatorRules.commonKey}, 'inline' : { value : "inline", verifier : sirius_css_AutomatorRules.appendKey}, bg : { value : "background", verifier : sirius_css_AutomatorRules.numericKey}, txt : { value : "", verifier : sirius_css_AutomatorRules.textKey}, dec : { value : "", verifier : sirius_css_AutomatorRules.valueKey}, sub : { value : "sub", verifier : sirius_css_AutomatorRules.commonKey}, sup : { value : "super", verifier : sirius_css_AutomatorRules.commonKey}, pos : { value : "position", verifier : sirius_css_AutomatorRules.valueKey}, abs : { value : "absolute", verifier : sirius_css_AutomatorRules.positionKey}, rel : { value : "relative", verifier : sirius_css_AutomatorRules.positionKey}, fix : { value : "fixed", verifier : sirius_css_AutomatorRules.positionKey}, pull : { value : "float", verifier : sirius_css_AutomatorRules.valueKey}, 'float' : { value : "float", verifier : sirius_css_AutomatorRules.valueKey}, over : { value : "overflow", verifier : sirius_css_AutomatorRules.valueKey}, hide : { value : "display:none", verifier : sirius_css_AutomatorRules.commonKey}, scroll : { value : "scroll", verifier : sirius_css_AutomatorRules.scrollKey}, crop : { value : "overflow:hidden", verifier : sirius_css_AutomatorRules.commonKey}, x : { value : "x", verifier : sirius_css_AutomatorRules.scrollKey}, y : { value : "y", verifier : sirius_css_AutomatorRules.scrollKey}, z : { value : "z-index", verifier : sirius_css_AutomatorRules.indexKey}, bold : { value : "font-weight:bold", verifier : sirius_css_AutomatorRules.commonKey}, regular : { value : "font-weight:regular", verifier : sirius_css_AutomatorRules.commonKey}, underline : { value : "font-weight:underline", verifier : sirius_css_AutomatorRules.commonKey}, italic : { value : "font-weight:italic", verifier : sirius_css_AutomatorRules.commonKey}, thin : { value : "font-weight:100", verifier : sirius_css_AutomatorRules.commonKey}, upcase : { value : "font-transform:uppercase", verifier : sirius_css_AutomatorRules.commonKey}, locase : { value : "font-transform:lowercase", verifier : sirius_css_AutomatorRules.commonKey}, cursor : { value : "cursor", verifier : sirius_css_AutomatorRules.valueKey}, load : { value : "loading", verifier : sirius_css_AutomatorRules.valueKey}, arial : { value : "font-family:arial", verifier : sirius_css_AutomatorRules.commonKey}, verdana : { value : "font-family:verdana", verifier : sirius_css_AutomatorRules.commonKey}, tahoma : { value : "font-family:tahoma", verifier : sirius_css_AutomatorRules.commonKey}, lucida : { value : "font-family:lucida console", verifier : sirius_css_AutomatorRules.commonKey}, georgia : { value : "font-family:georgia", verifier : sirius_css_AutomatorRules.commonKey}, trebuchet : { value : "font-family:trebuchet", verifier : sirius_css_AutomatorRules.commonKey}, table : { value : "table", verifier : sirius_css_AutomatorRules.appendKey}, rad : { value : "radius", verifier : sirius_css_AutomatorRules.valueKey}, solid : { value : "solid", verifier : sirius_css_AutomatorRules.commonKey}, dashed : { value : "dashed", verifier : sirius_css_AutomatorRules.commonKey}, 'double' : { value : "double", verifier : sirius_css_AutomatorRules.commonKey}, dotted : { value : "dotted", verifier : sirius_css_AutomatorRules.commonKey}, alpha : { value : "opacity", verifier : sirius_css_AutomatorRules.alphaKey}, hidden : { value : "", verifier : sirius_css_AutomatorRules.displayKey}, shadow : { value : "", verifier : sirius_css_AutomatorRules.shadowKey}, stroke : { value : "", verifier : sirius_css_AutomatorRules.strokeKey}, cell : { value : "cell", verifier : sirius_css_AutomatorRules.commonKey}, mouse : { value : "pointer-events", verifier : sirius_css_AutomatorRules.commonKey}, btn : { value : "cursor:pointer", verifier : sirius_css_AutomatorRules.commonKey}, ease : { value : "transition", verifier : sirius_css_AutomatorRules.commonArray}};
sirius_css_XCSS.enabled = false;
sirius_dom_Display3D._fixed = false;
sirius_dom_Input.fixer = { backgroundSize : "cover", backgroundPosition : "center center"};
sirius_dom_Input.icons = { };
sirius_gaming_actions_Action.commands = new sirius_gaming_actions_ActionQuery();
sirius_gaming_actions_Requirement.commands = new sirius_gaming_actions_RequirementQuery();
sirius_tools_Delayer.setTimeout = setTimeout;
sirius_tools_Delayer.clearTimeout = clearTimeout;
sirius_tools_Delayer.setInterval = setInterval;
sirius_tools_Delayer.clearInterval = clearInterval;
sirius_tools_Delayer._tks = { };
sirius_tools_Key._cts = { 'global' : 0};
sirius_tools_Key.TABLE = "abcdefghijklmnopqrstuvwxyz0123456789";
sirius_tools_Ticker._pool = [];
sirius_tools_Utils._typeOf = { A : sirius_dom_A, AREA : sirius_dom_Area, AUDIO : sirius_dom_Audio, B : sirius_dom_B, BASE : sirius_dom_Base, BODY : sirius_dom_Body, BR : sirius_dom_BR, BUTTON : sirius_dom_Button, CANVAS : sirius_dom_Canvas, CAPTION : sirius_dom_Caption, COL : sirius_dom_Col, CONTENT : sirius_dom_Content, DATALIST : sirius_dom_DataList, DIV : sirius_dom_Div, DISPLAY : sirius_dom_Display, DISPLAY3D : sirius_dom_Display3D, DL : sirius_dom_DL, DOCUMENT : sirius_dom_Document, EMBED : sirius_dom_Embed, FIELDSET : sirius_dom_FieldSet, FORM : sirius_dom_Form, H1 : sirius_dom_H1, H2 : sirius_dom_H2, H3 : sirius_dom_H3, H4 : sirius_dom_H4, H5 : sirius_dom_H5, H6 : sirius_dom_H6, HEAD : sirius_dom_Head, HR : sirius_dom_HR, HTML : sirius_dom_Html, I : sirius_dom_I, IFRAME : sirius_dom_IFrame, IMG : sirius_dom_Img, INPUT : sirius_dom_Input, LABEL : sirius_dom_Label, LEGEND : sirius_dom_Legend, LI : sirius_dom_LI, LINK : sirius_dom_Link, MAP : sirius_dom_Map, MEDIA : sirius_dom_Media, META : sirius_dom_Meta, METER : sirius_dom_Meter, MOD : sirius_dom_Mod, OBJECT : sirius_dom_Object, OL : sirius_dom_OL, OPTGROUP : sirius_dom_OptGroup, OPTION : sirius_dom_Option, OUTPUT : sirius_dom_Output, P : sirius_dom_P, PARAM : sirius_dom_Param, PICTURE : sirius_dom_Picture, PRE : sirius_dom_Pre, PROGRESS : sirius_dom_Progress, QUOTE : sirius_dom_Quote, SCRIPT : sirius_dom_Script, SELECT : sirius_dom_Select, SHADOW : sirius_dom_Shadow, SOURCE : sirius_dom_Source, SPAN : sirius_dom_Span, STYLE : sirius_dom_Style, TEXT : sirius_dom_Text, TEXTAREA : sirius_dom_TextArea, THEAD : sirius_dom_Thead, TITLE : sirius_dom_Title, TRACK : sirius_dom_Track, UL : sirius_dom_UL, VIDEO : sirius_dom_Video};
sirius_utils_SearchTag._M = [["á","a"],["ã","a"],["â","a"],["à","a"],["ê","e"],["é","e"],["è","e"],["î","i"],["í","i"],["ì","i"],["õ","o"],["ô","o"],["ó","o"],["ò","o"],["ú","u"],["ù","u"],["û","u"],["ç","c"]];
sirius_utils_SearchTag._E = new EReg("^[a-z0-9]","g");
sirius_utils_Table._trash = [];
sirius_Sirius.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
