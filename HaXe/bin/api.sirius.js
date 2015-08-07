(function (console, $hx_exports) { "use strict";
$hx_exports.sru = $hx_exports.sru || {};
$hx_exports.sru.utils = $hx_exports.sru.utils || {};
;$hx_exports.sru.tools = $hx_exports.sru.tools || {};
;$hx_exports.sru.seo = $hx_exports.sru.seo || {};
;$hx_exports.sru.plugins = $hx_exports.sru.plugins || {};
;$hx_exports.sru.events = $hx_exports.sru.events || {};
;$hx_exports.sru.dom = $hx_exports.sru.dom || {};
;$hx_exports.sru.css = $hx_exports.sru.css || {};
;$hx_exports.sru.modules = $hx_exports.sru.modules || {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = true;
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
HxOverrides.__name__ = true;
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
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.exists = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
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
List.__name__ = true;
List.prototype = {
	iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
_$List_ListIterator.__name__ = true;
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
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
};
Main._init = function() {
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
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
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
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
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var _$UInt_UInt_$Impl_$ = {};
_$UInt_UInt_$Impl_$.__name__ = true;
_$UInt_UInt_$Impl_$.gt = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) return aNeg; else return a > b;
};
_$UInt_UInt_$Impl_$.toFloat = function(this1) {
	var $int = this1;
	if($int < 0) return 4294967296.0 + $int; else return $int + 0.0;
};
var css_CSSGroup = function() {
	this.reset();
	if(this.ALL == null) {
		this.ALL = css_CSSGroup._style();
		this.XS = css_CSSGroup._style();
		this.SM = css_CSSGroup._style();
		this.MD = css_CSSGroup._style();
		this.LG = css_CSSGroup._style();
	}
};
css_CSSGroup.__name__ = true;
css_CSSGroup._style = function() {
	var e = new sirius_dom_Style().object;
	e.type = "text/css";
	e.innerHTML = "";
	return e;
};
css_CSSGroup.prototype = {
	hasSelector: function(id,mode) {
		var k;
		if(mode != null) k = mode; else k = HxOverrides.substr(id,-2,2);
		if(k == "xs") return this.XS.innerHTML.indexOf(id) != -1;
		if(k == "sm") return this.SM.innerHTML.indexOf(id) != -1;
		if(k == "md") return this.MD.innerHTML.indexOf(id) != -1;
		if(k == "lg") return this.LG.innerHTML.indexOf(id) != -1;
		return this.ALL.innerHTML.indexOf(id) != -1;
	}
	,setSelector: function(id,style,mode) {
		if(!this.hasSelector(id,mode)) {
			if(mode == "xs") this.styleXS += this._add(id + "-xs",style); else if(mode == "sm") this.styleSM += this._add(id + "-sm",style); else if(mode == "md") this.styleMD += this._add(id + "-md",style); else if(mode == "lg") this.styleLG += this._add(id + "-lg",style); else this.style += this._add(id,style);
		}
	}
	,distribute: function(id,style) {
		this.styleXS += this._add(id + "-xs",style);
		this.styleSM += this._add(id + "-sm",style);
		this.styleMD += this._add(id + "-md",style);
		this.styleLG += this._add(id + "-lg",style);
		this.style += this._add(id,style);
	}
	,_add: function(id,style) {
		return id + "{" + style + "}";
	}
	,build: function() {
		if(this.style.length > 0) this.ALL.innerHTML += this.style;
		if(this.styleXS.length > 0) this.XS.innerHTML += "@media (max-width: 767px) {" + this.styleXS + "}";
		if(this.styleSM.length > 0) this.SM.innerHTML += "@media (min-width: 768px) and (max-width: 1000px) {" + this.styleSM + "}";
		if(this.styleMD.length > 0) this.MD.innerHTML += "@media (min-width: 1001px) and (max-width: 1169px) {" + this.styleMD + "}";
		if(this.styleLG.length > 0) this.LG.innerHTML += "@media (min-width: 1170px) {" + this.styleLG + "}";
		this.reset();
		if(this.ALL.parentElement == null) window.document.head.appendChild(this.ALL);
		if(this.XS.parentElement == null) window.document.head.appendChild(this.XS);
		if(this.SM.parentElement == null) window.document.head.appendChild(this.SM);
		if(this.MD.parentElement == null) window.document.head.appendChild(this.MD);
		if(this.LG.parentElement == null) window.document.head.appendChild(this.LG);
	}
	,reset: function() {
		this.style = this.styleXS = this.styleSM = this.styleMD = this.styleLG = "";
	}
	,__class__: css_CSSGroup
};
var data_IFormData = function() { };
data_IFormData.__name__ = true;
data_IFormData.prototype = {
	__class__: data_IFormData
};
var haxe_Http = function(url) {
	this.url = url;
	this.headers = new List();
	this.params = new List();
	this.async = true;
};
haxe_Http.__name__ = true;
haxe_Http.prototype = {
	request: function(post) {
		var me = this;
		me.responseData = null;
		var r = this.req = js_Browser.createXMLHttpRequest();
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
				if(isLocal) if(r.responseText != null) s = 200; else s = 404;
			}
			if(s == undefined) s = null;
			if(s != null) me.onStatus(s);
			if(s != null && s >= 200 && s < 400) {
				me.req = null;
				me.onData(me.responseData = r.responseText);
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
				me.responseData = r.responseText;
				me.onError("Http Error #" + r.status);
			}
		};
		if(this.async) r.onreadystatechange = onreadystatechange;
		var uri = this.postData;
		if(uri != null) post = true; else {
			var _g_head = this.params.h;
			var _g_val = null;
			while(_g_head != null) {
				var p;
				p = (function($this) {
					var $r;
					_g_val = _g_head[0];
					_g_head = _g_head[1];
					$r = _g_val;
					return $r;
				}(this));
				if(uri == null) uri = ""; else uri += "&";
				uri += encodeURIComponent(p.param) + "=" + encodeURIComponent(p.value);
			}
		}
		try {
			if(post) r.open("POST",this.url,this.async); else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question?"?":"&") + uri,this.async);
				uri = null;
			} else r.open("GET",this.url,this.async);
		} catch( e1 ) {
			if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
			me.req = null;
			this.onError(e1.toString());
			return;
		}
		if(!Lambda.exists(this.headers,function(h) {
			return h.header == "Content-Type";
		}) && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var _g_head1 = this.headers.h;
		var _g_val1 = null;
		while(_g_head1 != null) {
			var h1;
			h1 = (function($this) {
				var $r;
				_g_val1 = _g_head1[0];
				_g_head1 = _g_head1[1];
				$r = _g_val1;
				return $r;
			}(this));
			r.setRequestHeader(h1.header,h1.value);
		}
		r.send(uri);
		if(!this.async) onreadystatechange(null);
	}
	,onData: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
	,__class__: haxe_Http
};
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
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
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	if(typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	throw new js__$Boot_HaxeError("Unable to create XMLHttpRequest object.");
};
var math_IARGB = function() { };
math_IARGB.__name__ = true;
math_IARGB.prototype = {
	__class__: math_IARGB
};
var math_IPoint = function() { };
math_IPoint.__name__ = true;
math_IPoint.prototype = {
	__class__: math_IPoint
};
var math_IPoint3D = function() { };
math_IPoint3D.__name__ = true;
math_IPoint3D.__interfaces__ = [math_IPoint];
math_IPoint3D.prototype = {
	__class__: math_IPoint3D
};
var sirius_net_Domain = function() {
	this._parseURI();
};
sirius_net_Domain.__name__ = true;
sirius_net_Domain.prototype = {
	_parseURI: function() {
		var l = window.location;
		this.host = l.hostname;
		this.port = l.port;
		this.fragments = sirius_tools_Utils.fixArray(l.pathname.split("/"));
		this.firstFragment = this.fragment(0,"");
		this.lastFragment = this.fragment(this.fragments.length - 1,this.firstFragment);
		this.extension = this.lastFragment.split(".").pop();
		this.hash = HxOverrides.substr(l.hash,1,null);
	}
	,fragment: function(i,a) {
		if(i >= 0 && i < this.fragments.length) return this.fragments[i]; else return a;
	}
	,reload: function(force) {
		if(force == null) force = false;
		window.location.reload(force);
	}
	,__class__: sirius_net_Domain
};
var sirius_modules_ILoader = function() { };
sirius_modules_ILoader.__name__ = true;
sirius_modules_ILoader.prototype = {
	__class__: sirius_modules_ILoader
};
var sirius_modules_Loader = $hx_exports.sru.modules.Loader = function(noCache) {
	if(noCache == null) noCache = false;
	this._toload = [];
	this._noCache = noCache;
	this._onComplete = [];
	this._onError = [];
};
sirius_modules_Loader.__name__ = true;
sirius_modules_Loader.__interfaces__ = [sirius_modules_ILoader];
sirius_modules_Loader.prototype = {
	listen: function(complete,error) {
		if(error != null && Lambda.indexOf(this._onError,error) == -1) this._onError[this._onError.length] = error;
		if(complete != null && Lambda.indexOf(this._onComplete,complete) == -1) this._onComplete[this._onComplete.length] = complete;
		return this;
	}
	,add: function(files,complete,error) {
		this.listen(complete,error);
		if(files != null && files.length > 0) this._toload = this._toload.concat(files);
		return this;
	}
	,start: function(complete,error) {
		if(!this._isBusy) {
			this.listen(complete,error);
			this._isBusy = true;
			this._loadNext();
		}
		return this;
	}
	,_loadNext: function() {
		var _g = this;
		if(this._toload.length > 0) {
			var f = this._toload.shift();
			var r = new haxe_Http(f + (this._noCache?"":"?t=" + new Date().getTime()));
			r.async = true;
			r.onError = function(e) {
				if($bind(_g,_g._error) != null) _g._error(e);
				_g._loadNext();
			};
			r.onData = function(d) {
				sirius_modules_ModLib.register(f,d);
				_g._loadNext();
			};
			r.request(false);
		} else {
			this._isBusy = false;
			this._complete();
		}
	}
	,_error: function(e) {
		var _g = this;
		this.lastError = e;
		sirius_utils_Dice.Values(this._onError,function(v) {
			if(v != null) v(_g);
		});
	}
	,_complete: function() {
		var _g = this;
		sirius_utils_Dice.Values(this._onComplete,function(v) {
			if(v != null) v(_g);
		});
		this._onComplete = [];
		this._onError = [];
	}
	,build: function(module,data) {
		return sirius_modules_ModLib.build(module,data);
	}
	,get: function(module,data) {
		return sirius_modules_ModLib.get(module,data);
	}
	,__class__: sirius_modules_Loader
};
var sirius_seo_SEOTool = $hx_exports.SEO = function() {
};
sirius_seo_SEOTool.__name__ = true;
sirius_seo_SEOTool.prototype = {
	init: function(types) {
		if(types == null) types = 0;
		if((types == 0 || sirius_bit_BitIO.test(types,sirius_seo_SEOTool.WEBSITE)) && this.website == null) this.website = new sirius_seo_WebSite();
		if(sirius_bit_BitIO.test(types,sirius_seo_SEOTool.BREADCRUMBS) && this.breadcrumbs == null) this.breadcrumbs = new sirius_seo_Breadcrumbs();
		if(sirius_bit_BitIO.test(types,sirius_seo_SEOTool.PRODUCT) && this.product == null) this.product = new sirius_seo_Product();
		return this;
	}
	,publish: function() {
		if(this.website != null) this.website.publish();
		if(this.product != null) this.product.publish();
		if(this.breadcrumbs != null) this.breadcrumbs.publish();
	}
	,__class__: sirius_seo_SEOTool
};
var sirius_Sirius = $hx_exports.Sirius = function() { };
sirius_Sirius.__name__ = true;
sirius_Sirius.__properties__ = {get_agent:"get_agent"}
sirius_Sirius.select = function(q,t) {
	if(q == null) q = "*";
	t = (t == null?window.document:t).querySelector(q);
	if(t != null) return sirius_tools_Utils.displayFrom(t); else {
		sirius_Sirius.log("[WARNING] ON QUERY_SELECTOR(" + q + ") : NULL TARGET",10);
		return null;
	}
};
sirius_Sirius.all = function(q,t) {
	if(q == null) q = "*";
	return new sirius_utils_Table(q,t);
};
sirius_Sirius.elements = function(q,t) {
	if(q == null) q = "*";
	return sirius_Sirius.all(q,t).elements;
};
sirius_Sirius.jQuery = function(q) {
	if(q == null) q = "*";
	return $(q);;
};
sirius_Sirius.onLoad = function(handler) {
	if(handler != null) {
		if(window.document.readyState == "complete") handler(); else window.document.addEventListener("DOMContentLoaded",handler);
	}
};
sirius_Sirius.init = function(handler,files) {
	sirius_Sirius.resources.add(files,handler,sirius_Sirius._fileError);
	if(!sirius_Sirius._initialized) {
		sirius_Sirius._initialized = true;
		sirius_Sirius.log("Sirius::init() > INITIALIZED // " + sirius_tools_Utils.toString(sirius_Sirius.get_agent(),true),10,1);
		sirius_Sirius.onLoad(sirius_Sirius._onLoaded);
	} else sirius_Sirius.log("Sirius::init() > Alread initialized" + (sirius_Sirius.body == null?" // Waiting for DOM Loading Event...":" // DOM is LOADED"),10,2);
};
sirius_Sirius._onLoaded = function() {
	sirius_Sirius.log("Sirius::init() > RESOURCES LOADED",10,1);
	sirius_Sirius.body = new sirius_dom_Body(window.document.body);
	sirius_Sirius.document = new sirius_dom_Document();
	sirius_Sirius.resources.start();
};
sirius_Sirius._fileError = function(error) {
	sirius_Sirius.log("Sirius::init(/GET_RESOURCE/) > " + error,10,3);
};
sirius_Sirius.get_agent = function() {
	if(sirius_Sirius.agent == null) {
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
		sirius_Sirius.agent = { ie : ie > 0, ieVr : ie, opera : opera, firefox : firefox, safari : new EReg("Safari","i").match(ua) && !chrome && !chromium, chrome : new EReg("Chrome","i").match(ua) && !chromium && !opera, mobile : new EReg("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini","i").match(ua), jQuery : Reflect.hasField(window,"$") || Reflect.hasField(window,"jQuery"), animator : sirius_transitions_Animator.available, display : sirius_tools_Utils.screenInfo()};
	}
	return sirius_Sirius.agent;
};
sirius_Sirius.log = function(q,level,type) {
	if(type == null) type = -1;
	if(level == null) level = 10;
	if(_$UInt_UInt_$Impl_$.gt(sirius_Sirius._loglevel,level)) {
		var t;
		switch(type) {
		case -1:
			t = "";
			break;
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
		default:
			t = "";
		}
		haxe_Log.trace(t + Std.string(q),{ fileName : "Sirius.hx", lineNumber : 158, className : "sirius.Sirius", methodName : "log"});
	}
};
sirius_Sirius.logLevel = function(q) {
	sirius_Sirius._loglevel = q;
};
sirius_Sirius.clearDB = function() {
	sirius_dom_Display.DATA = { };
};
var sirius_bit_BitIO = function() { };
sirius_bit_BitIO.__name__ = true;
sirius_bit_BitIO.write = function(hash,bit) {
	return hash | bit;
};
sirius_bit_BitIO.unwrite = function(hash,bit) {
	return hash & ~bit;
};
sirius_bit_BitIO.toggle = function(hash,bit) {
	if(sirius_bit_BitIO.test(hash,bit)) return sirius_bit_BitIO.unwrite(hash,bit); else return sirius_bit_BitIO.write(hash,bit);
};
sirius_bit_BitIO.test = function(hash,value) {
	return (hash & value) == value;
};
sirius_bit_BitIO.getString = function(hash,size) {
	if(size == null) size = 32;
	var v = hash.toString(2);
	while(v.length < size) v = "0" + v;
	return v;
};
var sirius_css_Automator = $hx_exports.CSSAutomator = function() { };
sirius_css_Automator.__name__ = true;
sirius_css_Automator.scan = function(force) {
	if(force == null) force = false;
	if(sirius_css_Automator.css == null) {
		sirius_utils_Dice.Values([new sirius_css_Decoration(),new sirius_css_Color()],function(v) {
			v.build();
		});
		sirius_css_Automator.css = new css_CSSGroup();
	}
	if(force) sirius_css_Automator._scanBody(); else sirius_Sirius.init(sirius_css_Automator._scanBody);
};
sirius_css_Automator._scanBody = function() {
	var s;
	var t = sirius_Sirius.document.element.outerHTML.split("class=");
	t.shift();
	sirius_utils_Dice.Values(t,function(v) {
		var i = HxOverrides.substr(v,0,1);
		var j = v.indexOf(i,1);
		if(j > 1) {
			v = v.substring(1,j);
			var c = v.split(" ");
			sirius_utils_Dice.Values(c,function(v1) {
				c = v1.split("-");
				s = sirius_css_Automator._parse(c,0);
				if(s != null && s.indexOf("null") == -1) sirius_css_Automator.css.setSelector("." + v1,s,c.pop());
			});
		}
	});
	sirius_css_Automator.css.build();
};
sirius_css_Automator._parse = function(c,level) {
	var v = c[level];
	var r = Reflect.field(sirius_css_Automator._NS,c[level]);
	if(r == null && level > 0) {
		var l = v.length;
		if(HxOverrides.substr(v,l - 2,2) == "pc") r = v.split("d").join(".").split("pc").join("%"); else if(HxOverrides.substr(v,l - 1,1) == "n") r = "-" + v.split("n").join("") + "px"; else {
			var x = Std.parseInt(v);
			if(x != null) r = x + "px"; else return null;
		}
	} else if(r == null && level == 0) return null;
	if(++level == c.length) return r + ";"; else return r + (level == 1?":":"") + sirius_css_Automator._parse(c,level);
};
var sirius_css_ICSS = function() { };
sirius_css_ICSS.__name__ = true;
sirius_css_ICSS.prototype = {
	__class__: sirius_css_ICSS
};
var sirius_css_CSS = $hx_exports.sru.css.CSS = function() {
	if(sirius_css_CSS.ALL == null) sirius_css_CSS.ALL = new css_CSSGroup();
};
sirius_css_CSS.__name__ = true;
sirius_css_CSS.__interfaces__ = [sirius_css_ICSS];
sirius_css_CSS.prototype = {
	add: function(a,b) {
	}
	,setSelector: function(id,style,mode) {
		sirius_css_CSS.ALL.setSelector(id,style,mode);
	}
	,distribute: function(id,style) {
		sirius_css_CSS.ALL.distribute(id,style);
	}
	,_add: function(id,style,important) {
		return id + "{" + style + "}" + (important?id + "-i {" + style.split(";").join(" !important;") + "}":"");
	}
	,build: function() {
		sirius_css_CSS.ALL.build();
	}
	,__class__: sirius_css_CSS
};
var sirius_css_Color = $hx_exports.sru.css.Color = function() {
	sirius_css_CSS.call(this);
	if(!sirius_css_Color._active) {
		this.distribute(".bg-transparent","background-color:transparent;");
		sirius_css_Color._active = true;
		this._parse();
	}
};
sirius_css_Color.__name__ = true;
sirius_css_Color.rnd = function(flatOnly) {
	if(flatOnly == null) flatOnly = false;
	if(sirius_css_Color.ALL.length == 0) sirius_utils_Dice.All(sirius_css_Color.COLORS,function(p,v1) {
		v1.name = p;
		sirius_css_Color.ALL[sirius_css_Color.ALL.length] = v1;
	});
	var v;
	if(flatOnly) v = sirius_css_Color.FLAT; else v = sirius_css_Color.ALL;
	return v[Std.random(v.length)];
};
sirius_css_Color.byName = function(name) {
	return Reflect.field(sirius_css_Color.COLORS,name);
};
sirius_css_Color.__super__ = sirius_css_CSS;
sirius_css_Color.prototype = $extend(sirius_css_CSS.prototype,{
	_parse: function() {
		var _g = this;
		sirius_utils_Dice.All(sirius_css_Color.COLORS,function(p,v) {
			v.name = p;
			_g.distribute(".bg-" + p,"background-color:" + Std.string(v.color) + ";");
			_g.distribute(".txt-" + p,"color:" + Std.string(v.color) + ";");
			_g.distribute(".bord-" + p,"border-color:" + Std.string(v.color) + ";");
		});
	}
	,__class__: sirius_css_Color
});
var sirius_css_Decoration = $hx_exports.sru.css.Decoration = function() {
	sirius_css_CSS.call(this);
	this.distribute(".disp-none","display:none;");
	this.distribute(".disp-block","display:block;");
	this.distribute(".disp-inline","display:inline;");
	this.distribute(".disp-inline-block","display:inline-block;");
	this.distribute(".vert-baseline","vertical-align:baseline;");
	this.distribute(".vert-t","vertical-align:top;");
	this.distribute(".vert-m","vertical-align:middle;");
	this.distribute(".vert-b","vertical-align:bottom;");
	this.distribute(".vert-txt-t","vertical-align:text-top;");
	this.distribute(".vert-txt-b","vertical-align:text-bottom;");
	this.distribute(".vert-sub","vertical-align:sub;");
	this.distribute(".vert-sup","vertical-align:super;");
	this.distribute(".pos-abs","position:absolute;");
	this.distribute(".pos-rel","position:relative;");
	this.distribute(".pos-fix","position:fixed;");
	this.distribute(".pull-r","float:right;");
	this.distribute(".pull-l","float:left;");
	this.distribute(".pull-n","float:none;");
	this.distribute(".over-hid","overflow:hidden;");
	this.distribute(".over-scroll","overflow:scroll;");
	this.distribute(".scroll-x","overflow-x:scroll;overflow-y:hidden;");
	this.distribute(".scroll-y","overflow-y:scroll;overflow-x:hidden;");
	this.distribute(".txt-l","text-align:left;");
	this.distribute(".txt-r","text-align:right;");
	this.distribute(".txt-c","text-align:center;");
	this.distribute(".txt-j","text-align:justify;");
	this.distribute(".bold","font-weight:bold;");
	this.distribute(".regular","font-weight:normal;");
	this.distribute(".underline","font-weight:underline;");
	this.distribute(".italic","font-weight:italic;");
	this.distribute(".thin","font-weight:100;");
	this.distribute(".up-case","font-transform:uppercase");
	this.distribute(".lo-case","font-transform:lowercase");
	this.distribute(".curs-pointer","cursor:pointer");
	this.distribute(".curs-loading","cursor:loading");
	this.distribute(".curs-default","cursor:default");
	this.distribute(".arial","font-family:arial;");
	this.distribute(".verdana","font-family:verdana;");
	this.distribute(".tahoma","font-family:tahoma;");
	this.distribute(".lucida","font-family:lucida console;");
	this.distribute(".georgia","font-family:georgia;");
	this.distribute(".trebuchet","font-family:trebuchet ms;");
	this.distribute(".segoe","font-family:segoe ui;");
	this.distribute(".disp-tab","display:table;");
	this.distribute(".disp-tab-cell","display:table-cell");
	this.distribute(".bord-solid","border-style:solid");
	this.distribute(".bord-dashed","border-style:dashed");
	this.distribute(".bord-double","border-style:double");
	this.distribute(".bord-dotted","border-style:dotted");
};
sirius_css_Decoration.__name__ = true;
sirius_css_Decoration.__super__ = sirius_css_CSS;
sirius_css_Decoration.prototype = $extend(sirius_css_CSS.prototype,{
	__class__: sirius_css_Decoration
});
var sirius_css_Shadow = $hx_exports.sru.css.Shadow = function() {
	sirius_css_CSS.call(this);
	if(!sirius_css_Shadow._active) {
		sirius_css_Shadow._active = true;
		this._parse();
	}
};
sirius_css_Shadow.__name__ = true;
sirius_css_Shadow.__super__ = sirius_css_CSS;
sirius_css_Shadow.prototype = $extend(sirius_css_CSS.prototype,{
	create: function(name,color) {
		var t;
		if(!js_Boot.__instanceof(color,sirius_math_ARGB)) t = new sirius_math_ARGB(color); else t = color;
		var tbody = "0 1px 0 " + t.range(.8).hex() + ",0 2px 0 " + t.range(.7).hex() + ",0 3px 0 " + t.range(.5).hex() + ",0 4px 0 " + t.range(.4).hex() + ",0 5px 0 " + t.range(.3).hex() + ",0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);";
		this.setSelector(".txt-shad-" + name,"text-shadow: " + tbody);
		this.setSelector(".box-shad-" + name,"box-shadow: " + tbody);
	}
	,_parse: function() {
		var _g = this;
		sirius_utils_Dice.All(sirius_css_Color.COLORS,function(p,v) {
			_g.create(p,new sirius_math_ARGB(v.color));
		});
	}
	,__class__: sirius_css_Shadow
});
var sirius_css_XCSS = $hx_exports.XCSS = function(data) {
	this.reset();
	if(data != null) this.flush(data);
};
sirius_css_XCSS.__name__ = true;
sirius_css_XCSS.create = function(target,data) {
	return new sirius_css_XCSS(data).apply(target);
};
sirius_css_XCSS.prototype = {
	flush: function(data) {
		sirius_utils_Dice.All(data,$bind(this,this.write));
	}
	,write: function(param,value) {
		var cx = HxOverrides.substr(param,0,1).toUpperCase() + HxOverrides.substr(param,1,param.length - 1);
		this.data["webkit" + cx] = value;
		this.data["Moz" + cx] = value;
		this.data["ms" + cx] = value;
		this.data["O" + cx] = value;
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
var sirius_data_FormData = function(target) {
	if(target != null) this.from(target);
};
sirius_data_FormData.__name__ = true;
sirius_data_FormData.__interfaces__ = [data_IFormData];
sirius_data_FormData.prototype = {
	reset: function() {
		this.fields = [];
		this.invalid = [];
		this.values = { };
		this.valid = { };
		this.messages = { };
	}
	,from: function(target) {
		var _g = this;
		this.reset();
		this._form = target;
		target.select("[form-data]").each(function(el) {
			var n = el.attribute("form-data");
			var r = el.attribute("form-option").toLowerCase();
			var v = el.attribute("value");
			var m = el.attribute("form-message");
			if(n != null && n.length > 0) {
				if(Lambda.indexOf(_g.fields,n) == -1) _g.fields[_g.fields.length] = n;
				var rq = r.indexOf("required") != -1;
				_g.values[n] = v;
				_g.messages[n] = m;
				var i = !rq || v != null && v.length > 0;
				_g.valid[n] = i;
				if(!i) _g.invalid[_g.invalid.length] = n;
			}
		});
	}
	,valueOf: function(field) {
		return Reflect.field(this.values,field);
	}
	,isValid: function() {
		return this.invalid != null && this.invalid.length == 0;
	}
	,clear: function() {
		this._form.select("[form-data]").each(function(el) {
			el.attribute("value","");
		});
	}
	,__class__: sirius_data_FormData
};
var sirius_dom_IDisplay = function() { };
sirius_dom_IDisplay.__name__ = true;
sirius_dom_IDisplay.prototype = {
	__class__: sirius_dom_IDisplay
};
var sirius_dom_Display = $hx_exports.sru.dom.Display = function(q,t,d) {
	if(typeof(q) == "string") q = sirius_Sirius.select(q,t);
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("div");
	}
	this.element = q;
	this.events = new sirius_events_Dispatcher(this);
	if(d != null) this.css(d);
	this.body = sirius_Sirius.body;
	this.buildParent();
	if(this.hasAttribute("sirius-uid")) {
		this._uid = this.attribute("sirius-uid");
		this.data = Reflect.field(sirius_dom_Display.DATA,this._uid);
		this._data = this.data.__data__;
	} else {
		this._uid = this.attribute("sirius-uid",sirius_tools_Key.GEN());
		this.data = { __data__ : { }};
		this._data = this.data.__data__;
		sirius_dom_Display.DATA[this._uid] = this.data;
	}
};
sirius_dom_Display.__name__ = true;
sirius_dom_Display.__interfaces__ = [sirius_dom_IDisplay];
sirius_dom_Display.ofKind = function(q) {
	return new sirius_dom_Display(window.document.createElement(q));
};
sirius_dom_Display.create = function(q) {
	return new sirius_dom_Display(q);
};
sirius_dom_Display.prototype = {
	exists: function(q) {
		return this.element != null && this.element.querySelector(q) != null;
	}
	,enable: function(q) {
		var d = this.events;
		sirius_utils_Dice.Values(q,function(v) {
			if(!((v instanceof Array) && v.__enum__ == null)) v = [v,false];
			var o = v[0];
			var c = v[1];
			new o(d, c);
		});
		return this;
	}
	,select: function(q) {
		return sirius_Sirius.all(q,this.element);
	}
	,one: function(q) {
		return sirius_Sirius.select(q,this.element);
	}
	,all: function() {
		return sirius_Sirius.all("*",this.element);
	}
	,getScroll: function(o) {
		if(o == null) o = { };
		o.scrollX = this.element.scrollLeft;
		o.scrollY = this.element.scrollTop;
		o.x = this.element.offsetLeft;
		o.y = this.element.offsetTop;
		o.viewX = o.x - window.scrollX;
		o.viewY = o.y - window.scrollY;
		return o;
	}
	,getChild: function(i,update) {
		if(this.children == null || update == true) this.children = this.all();
		return this.children.obj(i);
	}
	,length: function() {
		return this.element.children.length;
	}
	,index: function() {
		if(this.parent != null) return this.parent.indexOf(this); else return null;
	}
	,indexOf: function(q) {
		var r = -1;
		sirius_utils_Dice.Children(this.element,function(c,i) {
			return c == q.element;
		},function(i1,f) {
			if(f) r = i1; else r = -1;
		});
		return r;
	}
	,addChild: function(q,at) {
		if(at == null) at = -1;
		q.events.apply();
		q.parent = this;
		if(at != -1 && at < this.length()) {
			var sw = this.element.childNodes.item(at);
			this.element.insertBefore(q.element,sw);
		} else this.element.appendChild(q.element);
		return this;
	}
	,addChildren: function(q) {
		q.each($bind(this,this.addChild));
		return this;
	}
	,addText: function(q) {
		this.addChild(new sirius_dom_Text(q));
		return this;
	}
	,removeChild: function(q) {
		q.remove();
		return this;
	}
	,remove: function() {
		this.parent = null;
		if(this.element.parentElement != null) this.element.parentElement.removeChild(this.element);
		return this;
	}
	,css: function(styles) {
		var s = styles.split(" ");
		var cl = this.element.classList;
		sirius_utils_Dice.Values(s,function(v) {
			if(v != null && v.length > 0) {
				if(HxOverrides.substr(v,0,1) == "/") {
					v = HxOverrides.substr(v,1,v.length - 1);
					if(cl.contains(v)) cl.remove(v);
				} else if(!cl.contains(v)) cl.add(v);
			}
		});
		return this;
	}
	,cursor: function(value) {
		if(value != null) this.element.style.cursor = value;
		return this.element.style.cursor;
	}
	,detach: function() {
		this.element.style.position = "absolute";
	}
	,attach: function() {
		this.element.style.position = "relative";
	}
	,show: function() {
		this.element.hidden = false;
	}
	,hide: function() {
		this.element.hidden = true;
	}
	,hasAttribute: function(name) {
		return Reflect.getProperty(this.element,name) != null || ($_=this.element,$bind($_,$_.getAttribute)) != null && this.element.getAttribute(name) != null;
	}
	,attribute: function(name,value) {
		if(Reflect.getProperty(this.element,name) != null) {
			if(value != null) Reflect.setProperty(this.element,name,value);
			return Reflect.getProperty(this.element,name);
		}
		if(($_=this.element,$bind($_,$_.setAttribute)) != null) {
			if(value != null) this.element.setAttribute(name,value);
			return this.element.getAttribute(name);
		}
		return null;
	}
	,build: function(q,plainText) {
		if(plainText == null) plainText = false;
		if(plainText) this.element.innerText = q; else this.element.innerHTML = q;
		return this;
	}
	,style: function(p,v) {
		var _g = this;
		if(p != null) {
			if(typeof(p) == "string") {
				if(v != null) Reflect.setField(this.element.style,p,Std.string(v));
				v = Reflect.field(this.element.style,p);
				if(p.toLowerCase().indexOf("color") > 0) v = new sirius_math_ARGB(v);
				return v;
			} else sirius_utils_Dice.All(p,function(p1,v1) {
				if(v1 == null) _g.element.style[p1] = "null"; else _g.element.style[p1] = "" + v1;
			});
		}
		return this;
	}
	,prepare: function() {
		this.events.apply();
		return this;
	}
	,write: function(q) {
		var i = new sirius_dom_Display().build(q);
		i.all().each($bind(this,this.addChild));
		return this;
	}
	,clear: function(fast) {
		if(fast) this.element.innerHTML = ""; else {
			var i = this.element.children.length;
			while(i-- > 0) this.element.removeChild(this.element.childNodes.item(i));
		}
		return this;
	}
	,on: function(type,handler,mode) {
		this.events.auto(type,handler,mode);
		return this;
	}
	,fadeTo: function(value,time) {
		if(time == null) time = 1;
		this.tweenTo(time,{ opacity : value});
		return this;
	}
	,tweenTo: function(time,target,ease,complete) {
		if(time == null) time = 1;
		if(complete != null) target.onComplete = complete;
		if(ease != null) target.ease = ease;
		if(this.element != null) {
			sirius_transitions_Animator.stop(this.element);
			sirius_transitions_Animator.to(this.element,time,target);
		}
		return this;
	}
	,tweenFrom: function(time,target,ease,complete) {
		if(time == null) time = 1;
		if(complete != null) target.onComplete = complete;
		if(ease != null) target.ease = ease;
		if(this.element != null) {
			sirius_transitions_Animator.stop(this.element);
			sirius_transitions_Animator.from(this.element,time,target);
		}
		return this;
	}
	,tweenFromTo: function(time,from,to,ease,complete) {
		if(time == null) time = 1;
		if(complete != null) from.onComplete = complete;
		if(ease != null) from.ease = ease;
		if(this.element != null) {
			sirius_transitions_Animator.stop(this.element);
			sirius_transitions_Animator.fromTo(this.element,time,from,to);
		}
		return this;
	}
	,buildParent: function() {
		if(this.element.parentElement != null && this.parent == null) this.parent = sirius_tools_Utils.displayFrom(this.element.parentElement);
		return this;
	}
	,activate: function(handler) {
		sirius_tools_Ticker.add(handler);
		return this;
	}
	,deactivate: function(handler) {
		sirius_tools_Ticker.remove(handler);
		return this;
	}
	,width: function(value,pct) {
		if(value != null) this.element.style.width = value + (pct?"%":"px");
		return this.element.clientWidth;
	}
	,height: function(value,pct) {
		if(value != null) this.element.style.height = value + (pct?"%":"px");
		return this.element.clientHeight;
	}
	,fit: function(width,height,pct) {
		this.width(width,pct);
		this.height(height,pct);
		return this;
	}
	,overflow: function(mode) {
		if(mode != null) this.element.style.overflow = mode;
		return this.element.style.overflow;
	}
	,isFullyVisible: function() {
		var rect = this.element.getBoundingClientRect();
		return rect.top >= 0 && rect.left >= 0 && rect.bottom <= sirius_tools_Utils.viewportHeight() && rect.right <= sirius_tools_Utils.viewportWidth();
	}
	,isVisible: function() {
		var rect = this.element.getBoundingClientRect();
		return rect.bottom >= 0 && rect.right >= 0 && rect.top <= sirius_tools_Utils.viewportHeight() && rect.left <= sirius_tools_Utils.viewportWidth();
	}
	,isHidden: function() {
		return this.element == null || this.element.hidden;
	}
	,jQuery: function() {
		return sirius_Sirius.jQuery(this.element);
	}
	,__class__: sirius_dom_Display
};
var sirius_dom_A = $hx_exports.sru.dom.A = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("a");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_A.__name__ = true;
sirius_dom_A.__super__ = sirius_dom_Display;
sirius_dom_A.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_A
});
var sirius_dom_Applet = $hx_exports.sru.dom.Applet = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("applet");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Applet.__name__ = true;
sirius_dom_Applet.__super__ = sirius_dom_Display;
sirius_dom_Applet.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Applet
});
var sirius_dom_Area = $hx_exports.sru.dom.Area = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("area");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Area.__name__ = true;
sirius_dom_Area.__super__ = sirius_dom_Display;
sirius_dom_Area.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Area
});
var sirius_dom_Audio = $hx_exports.sru.dom.Audio = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("audio");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Audio.__name__ = true;
sirius_dom_Audio.__super__ = sirius_dom_Display;
sirius_dom_Audio.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Audio
});
var sirius_dom_B = $hx_exports.sru.dom.B = function(q,d) {
	if(q == null) q = window.document.createElement("B");
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_B.__name__ = true;
sirius_dom_B.__super__ = sirius_dom_Display;
sirius_dom_B.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_B
});
var sirius_dom_BR = $hx_exports.sru.dom.BR = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("br");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_BR.__name__ = true;
sirius_dom_BR.__super__ = sirius_dom_Display;
sirius_dom_BR.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_BR
});
var sirius_dom_Base = $hx_exports.sru.dom.Base = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("base");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Base.__name__ = true;
sirius_dom_Base.__super__ = sirius_dom_Display;
sirius_dom_Base.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Base
});
var sirius_dom_Body = $hx_exports.sru.dom.Body = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("body");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Body.__name__ = true;
sirius_dom_Body.__super__ = sirius_dom_Display;
sirius_dom_Body.prototype = $extend(sirius_dom_Display.prototype,{
	enlarge: function(scroll) {
		if(scroll == null) scroll = "over-hid";
		this.css("wh-100pc" + (scroll != null?" " + scroll:"") + " padd-0 marg-0 pos-abs");
		return this;
	}
	,__class__: sirius_dom_Body
});
var sirius_dom_IDiv = function() { };
sirius_dom_IDiv.__name__ = true;
sirius_dom_IDiv.__interfaces__ = [sirius_dom_IDisplay];
sirius_dom_IDiv.prototype = {
	__class__: sirius_dom_IDiv
};
var sirius_dom_Div = $hx_exports.sru.dom.Div = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("div");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Div.__name__ = true;
sirius_dom_Div.__interfaces__ = [sirius_dom_IDiv];
sirius_dom_Div.__super__ = sirius_dom_Display;
sirius_dom_Div.prototype = $extend(sirius_dom_Display.prototype,{
	alignCenter: function() {
		this.css("centered /float-l /float-r");
	}
	,alignLeft: function() {
		this.css("float-l /centered /float-r");
	}
	,alignRight: function() {
		this.css("float-r /centered /float-l");
	}
	,background: function(value,repeat,position,attachment) {
		if(value != null) {
			var c;
			if(value.indexOf("#") == 0) c = value; else c = "url(" + value + ")";
			var r;
			if(repeat != null && repeat.length > 0) r = repeat; else r = "center center";
			var p;
			if(position != null && repeat.length > 0) p = position; else p = "no-repeat";
			this.element.style.background = c + " " + r + " " + p;
			haxe_Log.trace(c + " " + r + " " + p,{ fileName : "Div.hx", lineNumber : 36, className : "sirius.dom.Div", methodName : "background"});
			if(attachment != null && attachment.length > 0) this.element.style.backgroundAttachment = attachment;
		}
		return this.element.style.background;
	}
	,__class__: sirius_dom_Div
});
var sirius_dom_Button = function(q,d) {
	sirius_dom_Div.call(this,q,d);
	this.element.style.textAlign = "center";
	this.cursor("pointer");
};
sirius_dom_Button.__name__ = true;
sirius_dom_Button.__super__ = sirius_dom_Div;
sirius_dom_Button.prototype = $extend(sirius_dom_Div.prototype,{
	__class__: sirius_dom_Button
});
var sirius_dom_Canvas = $hx_exports.sru.dom.Canvas = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("canvas");
	}
	sirius_dom_Display.call(this,q,null,d);
	this.paper = this.element;
};
sirius_dom_Canvas.__name__ = true;
sirius_dom_Canvas.__super__ = sirius_dom_Display;
sirius_dom_Canvas.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Canvas
});
var sirius_dom_Caption = $hx_exports.sru.dom.Caption = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("caption");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Caption.__name__ = true;
sirius_dom_Caption.__super__ = sirius_dom_Display;
sirius_dom_Caption.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Caption
});
var sirius_dom_Col = $hx_exports.sru.dom.Col = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("col");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Col.__name__ = true;
sirius_dom_Col.__super__ = sirius_dom_Display;
sirius_dom_Col.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Col
});
var sirius_dom_Content = $hx_exports.sru.dom.Content = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("content");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Content.__name__ = true;
sirius_dom_Content.__super__ = sirius_dom_Display;
sirius_dom_Content.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Content
});
var sirius_dom_DL = $hx_exports.sru.dom.DL = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("dl");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_DL.__name__ = true;
sirius_dom_DL.__super__ = sirius_dom_Display;
sirius_dom_DL.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_DL
});
var sirius_dom_DataList = $hx_exports.sru.dom.DataList = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("datalist");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_DataList.__name__ = true;
sirius_dom_DataList.__super__ = sirius_dom_Display;
sirius_dom_DataList.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_DataList
});
var sirius_dom_Dir = $hx_exports.sru.dom.Dir = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("dir");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Dir.__name__ = true;
sirius_dom_Dir.__super__ = sirius_dom_Display;
sirius_dom_Dir.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Dir
});
var sirius_dom_IDisplay3D = function() { };
sirius_dom_IDisplay3D.__name__ = true;
sirius_dom_IDisplay3D.__interfaces__ = [sirius_dom_IDisplay];
sirius_dom_IDisplay3D.prototype = {
	__class__: sirius_dom_IDisplay3D
};
var sirius_dom_Display3D = $hx_exports.sru.dom.Display3D = function(q,d) {
	sirius_dom_Div.call(this,q,d);
	this.rotation = new sirius_math_Point3D(0,0,0);
	this.location = new sirius_math_Point3D(0,0,0);
	this.scale = new sirius_math_Point3D(1,1,1);
	this.xcss = new sirius_css_XCSS();
	this.backFace = "visible";
	this.preserve3d().update();
};
sirius_dom_Display3D.__name__ = true;
sirius_dom_Display3D.__interfaces__ = [sirius_dom_IDisplay3D];
sirius_dom_Display3D.__super__ = sirius_dom_Div;
sirius_dom_Display3D.prototype = $extend(sirius_dom_Div.prototype,{
	preserve3d: function() {
		this.transformStyle = "preserve-3d";
		return this;
	}
	,setPerspective: function(value,origin) {
		if(value != null) this.perspective = value;
		if(origin != null) this.transformOrigin = origin;
		return this;
	}
	,rotateAll: function(x,y,z,add) {
		this.rotationX(x,add);
		this.rotationY(y,add);
		this.rotationZ(z,add);
		return this;
	}
	,rotationX: function(value,add) {
		if(value != null) {
			if(add) this.rotation.x += value; else this.rotation.x = value;
			if(this.rotation.x < -180) this.rotation.x += 360; else if(this.rotation.x > 180) this.rotation.x -= 360;
		}
		return this.rotation.x;
	}
	,rotationY: function(value,add) {
		if(value != null) {
			if(add) this.rotation.y += value; else this.rotation.y = value;
			if(this.rotation.y < -180) this.rotation.y += 360; else if(this.rotation.y > 180) this.rotation.y -= 360;
		}
		return this.rotation.y;
	}
	,rotationZ: function(value,add) {
		if(value != null) {
			if(add) this.rotation.z += value; else this.rotation.z = value;
			if(this.rotation.z < -180) this.rotation.z += 360; else if(this.rotation.z > 180) this.rotation.z -= 360;
		}
		return this.rotation.z;
	}
	,moveTo: function(x,y,z,add) {
		this.locationX(x,add);
		this.locationY(y,add);
		this.locationZ(z,add);
		return this;
	}
	,locationX: function(value,add) {
		if(value != null) {
			if(add) this.location.x += value; else this.location.x = value;
		}
		return this.location.x;
	}
	,locationY: function(value,add) {
		if(value != null) {
			if(add) this.location.y += value; else this.location.y = value;
		}
		return this.location.y;
	}
	,locationZ: function(value,add) {
		if(value != null) {
			if(add) this.location.z += value; else this.location.z = value;
		}
		return this.location.z;
	}
	,scaleAll: function(x,y,z,add) {
		this.scaleX(x,add);
		this.scaleY(y,add);
		this.scaleZ(z,add);
		return this;
	}
	,transform: function(x,y,z,x1,y1,z1,w,h,d) {
		return this.moveTo(x,y,z).rotateAll(x1,y1,z1).scaleAll(w,h,d);
	}
	,scaleX: function(value,add) {
		if(value != null) {
			if(add) this.scale.x += value; else this.scale.x = value;
		}
		return this.scale.x;
	}
	,scaleY: function(value,add) {
		if(value != null) {
			if(add) this.scale.y += value; else this.scale.y = value;
		}
		return this.scale.y;
	}
	,scaleZ: function(value,add) {
		if(value != null) {
			if(add) this.scale.z += value; else this.scale.z = value;
		}
		return this.scale.z;
	}
	,update: function() {
		if(this.perspective != null) this.xcss.write("perspective",this.perspective);
		if(this.transformOrigin != null) this.xcss.write("transformOrigin",this.transformOrigin);
		if(this.transformStyle != null) this.xcss.write("transformStyle",this.transformStyle);
		if(this.backFace != null) this.xcss.write("backfaceVisibility",this.backFace);
		this.xcss.write("transform","rotateX(" + this.rotation.x + "deg) rotateY(" + this.rotation.y + "deg) rotateZ(" + this.rotation.z + "deg) translate3d(" + this.location.x + "px," + this.location.y + "px," + this.location.z + "px) scale3d(" + this.scale.x + "," + this.scale.y + "," + this.scale.z + ")");
		this.xcss.apply(this);
		return this;
	}
	,doubleSided: function(value) {
		if(value) this.backFace = "visible"; else this.backFace = "hidden";
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
var sirius_dom_Document = $hx_exports.sru.dom.Document = function() {
	sirius_dom_Display.call(this,window.document);
	this.element = window.document.documentElement;
	this.events.wheel($bind(this,this.stopScroll),true);
	this.prepare();
};
sirius_dom_Document.__name__ = true;
sirius_dom_Document._applyScroll = function() {
	window.scroll(sirius_dom_Document.__scroll__.x,sirius_dom_Document.__scroll__.y);
};
sirius_dom_Document.__super__ = sirius_dom_Display;
sirius_dom_Document.prototype = $extend(sirius_dom_Display.prototype,{
	scroll: function(x,y) {
		window.scroll(x,y);
	}
	,getScroll: function(o) {
		if(o == null) o = { x : 0, y : 0};
		if(window.pageXOffset != null) {
			o.x = window.pageXOffset;
			o.y = window.pageYOffset;
		} else if(sirius_Sirius.body.element.scrollTop != 0) {
			o.x = sirius_Sirius.body.element.scrollLeft;
			o.y = sirius_Sirius.body.element.scrollTop;
		} else {
			o.x = this.element.scrollLeft;
			o.y = this.element.scrollTop;
		}
		return o;
	}
	,easeScroll: function(x,y,time,ease) {
		if(time == null) time = 1;
		this.stopScroll();
		this.getScroll(sirius_dom_Document.__scroll__);
		sirius_transitions_Animator.to(sirius_dom_Document.__scroll__,time,{ x : x, y : y, ease : ease, onUpdate : sirius_dom_Document._applyScroll});
	}
	,stopScroll: function() {
		sirius_transitions_Animator.stop(sirius_dom_Document.__scroll__);
	}
	,scrollTo: function(target,time,ease,offX,offY) {
		if(offY == null) offY = 0;
		if(offX == null) offX = 0;
		if(time == null) time = 1;
		if(typeof(target) == "string") target = sirius_Sirius.select(target);
		if(Object.prototype.hasOwnProperty.call(target,"element")) target = target.Self;
		this.easeScroll(target.offsetLeft - offX,target.offsetTop - offY,time,ease);
	}
	,trackCursor: function() {
		if(sirius_dom_Document.__cursor__.enabled) return;
		sirius_dom_Document.__cursor__.enabled = true;
		this.events.mouseMove(function(e) {
			var me = e.event;
			sirius_dom_Document.__cursor__.x = me.clientX;
			sirius_dom_Document.__cursor__.y = me.clientY;
		},true);
	}
	,cursorX: function() {
		return sirius_dom_Document.__cursor__.x;
	}
	,cursorY: function() {
		return sirius_dom_Document.__cursor__.y;
	}
	,__class__: sirius_dom_Document
});
var sirius_dom_Embed = $hx_exports.sru.dom.Embed = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("embed");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Embed.__name__ = true;
sirius_dom_Embed.__super__ = sirius_dom_Display;
sirius_dom_Embed.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Embed
});
var sirius_dom_FieldSet = $hx_exports.sru.dom.FieldSet = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("fieldset");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_FieldSet.__name__ = true;
sirius_dom_FieldSet.__super__ = sirius_dom_Display;
sirius_dom_FieldSet.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_FieldSet
});
var sirius_dom_Font = $hx_exports.sru.dom.Font = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("font");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Font.__name__ = true;
sirius_dom_Font.__super__ = sirius_dom_Display;
sirius_dom_Font.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Font
});
var sirius_dom_Form = $hx_exports.sru.dom.Form = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("form");
	}
	sirius_dom_Display.call(this,q,null,d);
	this.object = this.element;
};
sirius_dom_Form.__name__ = true;
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
		if(this.inputData == null) this.inputData = new sirius_data_FormData(this); else this.inputData.from(this);
		return this.inputData;
	}
	,getAsInput: function(i,update) {
		if(this.children == null || update == true) this.children = this.all();
		return this.children.obj(i);
	}
	,__class__: sirius_dom_Form
});
var sirius_dom_Frame = $hx_exports.sru.dom.Frame = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("frame");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Frame.__name__ = true;
sirius_dom_Frame.__super__ = sirius_dom_Display;
sirius_dom_Frame.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Frame
});
var sirius_dom_FrameSet = $hx_exports.sru.dom.FrameSet = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("frameset");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_FrameSet.__name__ = true;
sirius_dom_FrameSet.__super__ = sirius_dom_Display;
sirius_dom_FrameSet.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_FrameSet
});
var sirius_dom_H1 = $hx_exports.sru.dom.H1 = function(q,d) {
	if(q == null) q = window.document.createElement("h1");
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_H1.__name__ = true;
sirius_dom_H1.__super__ = sirius_dom_Display;
sirius_dom_H1.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H1
});
var sirius_dom_H2 = $hx_exports.sru.dom.H2 = function(q,d) {
	if(q == null) q = window.document.createElement("h2");
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_H2.__name__ = true;
sirius_dom_H2.__super__ = sirius_dom_Display;
sirius_dom_H2.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H2
});
var sirius_dom_H3 = $hx_exports.sru.dom.H3 = function(q,d) {
	if(q == null) q = window.document.createElement("h3");
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_H3.__name__ = true;
sirius_dom_H3.__super__ = sirius_dom_Display;
sirius_dom_H3.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H3
});
var sirius_dom_H4 = $hx_exports.sru.dom.H4 = function(q,d) {
	if(q == null) q = window.document.createElement("h4");
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_H4.__name__ = true;
sirius_dom_H4.__super__ = sirius_dom_Display;
sirius_dom_H4.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H4
});
var sirius_dom_H5 = $hx_exports.sru.dom.H5 = function(q,d) {
	if(q == null) q = window.document.createElement("h5");
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_H5.__name__ = true;
sirius_dom_H5.__super__ = sirius_dom_Display;
sirius_dom_H5.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H5
});
var sirius_dom_H6 = $hx_exports.sru.dom.H6 = function(q,d) {
	if(q == null) q = window.document.createElement("h6");
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_H6.__name__ = true;
sirius_dom_H6.__super__ = sirius_dom_Display;
sirius_dom_H6.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_H6
});
var sirius_dom_HR = $hx_exports.sru.dom.HR = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("hr");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_HR.__name__ = true;
sirius_dom_HR.__super__ = sirius_dom_Display;
sirius_dom_HR.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_HR
});
var sirius_dom_Head = $hx_exports.sru.dom.Head = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("head");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Head.__name__ = true;
sirius_dom_Head.__super__ = sirius_dom_Display;
sirius_dom_Head.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Head
});
var sirius_dom_Html = $hx_exports.sru.dom.Html = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("html");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Html.__name__ = true;
sirius_dom_Html.__super__ = sirius_dom_Display;
sirius_dom_Html.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Html
});
var sirius_dom_I = $hx_exports.sru.dom.I = function(q,d) {
	if(q == null) q = window.document.createElement("I");
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_I.__name__ = true;
sirius_dom_I.__super__ = sirius_dom_Display;
sirius_dom_I.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_I
});
var sirius_dom_IFrame = $hx_exports.sru.dom.IFrame = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("iframe");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_IFrame.__name__ = true;
sirius_dom_IFrame.__super__ = sirius_dom_Display;
sirius_dom_IFrame.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_IFrame
});
var sirius_dom_Img = $hx_exports.sru.dom.Img = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("img");
	}
	sirius_dom_Display.call(this,q,null,d);
	this.object = this.element;
};
sirius_dom_Img.__name__ = true;
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
var sirius_dom_Input = $hx_exports.sru.dom.Input = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("input");
	}
	sirius_dom_Display.call(this,q,null,d);
	this.object = this.element;
};
sirius_dom_Input.__name__ = true;
sirius_dom_Input.__super__ = sirius_dom_Display;
sirius_dom_Input.prototype = $extend(sirius_dom_Display.prototype,{
	_update: function(e) {
		if(this._rtc.match(this.object.value)) {
			var s = this.object.selectionStart - 1;
			this.object.value = this._rtc.replace(this.object.value,"");
			this.object.setSelectionRange(s,s);
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
	,validateDate: function() {
		this.pattern("\\d{1,2}/\\d{1,2}/\\d{4}");
	}
	,validateURL: function() {
		this.pattern("https?://.+");
	}
	,validateIPv4: function() {
		this.pattern("\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}");
	}
	,validateCurrency: function() {
		this.pattern("\\d+(\\.\\d{2})?");
	}
	,validateEmail: function() {
		this.pattern("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/");
	}
	,restrict: function(q) {
		if(this._rtc == null && q != null) {
			this.events.keyDown($bind(this,this._update),0);
			this.events.keyUp($bind(this,this._update),0);
			this.events.focusOut($bind(this,this._update),0);
		} else if(q == null) {
			this.events.keyDown($bind(this,this._update),-1);
			this.events.keyUp($bind(this,this._update),-1);
			this.events.focusOut($bind(this,this._update),-1);
		}
		this._rtc = q;
	}
	,restrictNumbers: function() {
		this.restrict(new EReg("[^0-9]","gi"));
	}
	,restrictLetters: function() {
		this.restrict(new EReg("[^A-Za-z]","giu"));
	}
	,value: function(q) {
		if(q != null) this.object.value = q;
		return this.object.value;
	}
	,isValid: function() {
		return this.object.value.length > 0;
	}
	,__class__: sirius_dom_Input
});
var sirius_dom_LI = $hx_exports.sru.dom.LI = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("li");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_LI.__name__ = true;
sirius_dom_LI.__super__ = sirius_dom_Display;
sirius_dom_LI.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_LI
});
var sirius_dom_Label = $hx_exports.sru.dom.Label = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("label");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Label.__name__ = true;
sirius_dom_Label.__super__ = sirius_dom_Display;
sirius_dom_Label.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Label
});
var sirius_dom_Legend = $hx_exports.sru.dom.Legend = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("legend");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Legend.__name__ = true;
sirius_dom_Legend.__super__ = sirius_dom_Display;
sirius_dom_Legend.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Legend
});
var sirius_dom_Link = $hx_exports.sru.dom.Link = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("link");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Link.__name__ = true;
sirius_dom_Link.__super__ = sirius_dom_Display;
sirius_dom_Link.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Link
});
var sirius_dom_Map = $hx_exports.sru.dom.Map = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("map");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Map.__name__ = true;
sirius_dom_Map.__super__ = sirius_dom_Display;
sirius_dom_Map.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Map
});
var sirius_dom_Media = $hx_exports.sru.dom.Media = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("media");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Media.__name__ = true;
sirius_dom_Media.__super__ = sirius_dom_Display;
sirius_dom_Media.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Media
});
var sirius_dom_Menu = $hx_exports.sru.dom.Menu = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("menu");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Menu.__name__ = true;
sirius_dom_Menu.__super__ = sirius_dom_Display;
sirius_dom_Menu.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Menu
});
var sirius_dom_Meta = $hx_exports.sru.dom.Meta = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("meta");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Meta.__name__ = true;
sirius_dom_Meta.__super__ = sirius_dom_Display;
sirius_dom_Meta.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Meta
});
var sirius_dom_Meter = $hx_exports.sru.dom.Meter = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("meter");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Meter.__name__ = true;
sirius_dom_Meter.__super__ = sirius_dom_Display;
sirius_dom_Meter.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Meter
});
var sirius_dom_Mod = $hx_exports.sru.dom.Mod = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("mod");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Mod.__name__ = true;
sirius_dom_Mod.__super__ = sirius_dom_Display;
sirius_dom_Mod.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Mod
});
var sirius_dom_OL = $hx_exports.sru.dom.OL = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("ol");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_OL.__name__ = true;
sirius_dom_OL.__super__ = sirius_dom_Display;
sirius_dom_OL.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_OL
});
var sirius_dom_Object = $hx_exports.sru.dom.Object = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("object");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Object.__name__ = true;
sirius_dom_Object.__super__ = sirius_dom_Display;
sirius_dom_Object.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Object
});
var sirius_dom_OptGroup = $hx_exports.sru.dom.OptGroup = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("optgroup");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_OptGroup.__name__ = true;
sirius_dom_OptGroup.__super__ = sirius_dom_Display;
sirius_dom_OptGroup.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_OptGroup
});
var sirius_dom_Option = $hx_exports.sru.dom.Option = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("option");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Option.__name__ = true;
sirius_dom_Option.__super__ = sirius_dom_Display;
sirius_dom_Option.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Option
});
var sirius_dom_Output = $hx_exports.sru.dom.Output = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("output");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Output.__name__ = true;
sirius_dom_Output.__super__ = sirius_dom_Display;
sirius_dom_Output.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Output
});
var sirius_dom_P = $hx_exports.sru.dom.P = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("p");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_P.__name__ = true;
sirius_dom_P.__super__ = sirius_dom_Display;
sirius_dom_P.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_P
});
var sirius_dom_Param = $hx_exports.sru.dom.Param = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("param");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Param.__name__ = true;
sirius_dom_Param.__super__ = sirius_dom_Display;
sirius_dom_Param.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Param
});
var sirius_dom_Picture = $hx_exports.sru.dom.Picture = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("picture");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Picture.__name__ = true;
sirius_dom_Picture.__super__ = sirius_dom_Display;
sirius_dom_Picture.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Picture
});
var sirius_dom_Pre = $hx_exports.sru.dom.Pre = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("pre");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Pre.__name__ = true;
sirius_dom_Pre.__super__ = sirius_dom_Display;
sirius_dom_Pre.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Pre
});
var sirius_dom_Progress = $hx_exports.sru.dom.Progress = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("progress");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Progress.__name__ = true;
sirius_dom_Progress.__super__ = sirius_dom_Display;
sirius_dom_Progress.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Progress
});
var sirius_dom_Quote = $hx_exports.sru.dom.Quote = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("quote");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Quote.__name__ = true;
sirius_dom_Quote.__super__ = sirius_dom_Display;
sirius_dom_Quote.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Quote
});
var sirius_dom_Script = $hx_exports.sru.dom.Script = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("script");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Script.__name__ = true;
sirius_dom_Script.__super__ = sirius_dom_Display;
sirius_dom_Script.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Script
});
var sirius_dom_Select = $hx_exports.sru.dom.Select = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("select");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Select.__name__ = true;
sirius_dom_Select.__super__ = sirius_dom_Display;
sirius_dom_Select.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Select
});
var sirius_dom_Shadow = $hx_exports.sru.dom.Shadow = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("shadow");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Shadow.__name__ = true;
sirius_dom_Shadow.__super__ = sirius_dom_Display;
sirius_dom_Shadow.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Shadow
});
var sirius_dom_Source = $hx_exports.sru.dom.Source = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("source");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Source.__name__ = true;
sirius_dom_Source.__super__ = sirius_dom_Display;
sirius_dom_Source.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Source
});
var sirius_dom_Span = $hx_exports.sru.dom.Span = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("span");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Span.__name__ = true;
sirius_dom_Span.__super__ = sirius_dom_Display;
sirius_dom_Span.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Span
});
var sirius_dom_Sprite = $hx_exports.sru.dom.Sprite = function(q,d) {
	if(d == null) d = "wh-100pc disp-tab abs";
	sirius_dom_Div.call(this,null,d);
	this.content = new sirius_dom_Div(q,"disp-tab-cell vert-m txt-c");
	this.addChild(this.content);
};
sirius_dom_Sprite.__name__ = true;
sirius_dom_Sprite.__super__ = sirius_dom_Div;
sirius_dom_Sprite.prototype = $extend(sirius_dom_Div.prototype,{
	__class__: sirius_dom_Sprite
});
var sirius_dom_Sprite3D = $hx_exports.sru.dom.Sprite3D = function(q,d) {
	if(d == null) d = "wh-100p center abs";
	sirius_dom_Display3D.call(this,null,d);
	this.setPerspective("1000px");
	this.content = new sirius_dom_Display3D();
	this.content.preserve3d().update();
	this.addChild(this.content);
	this.update();
};
sirius_dom_Sprite3D.__name__ = true;
sirius_dom_Sprite3D.__super__ = sirius_dom_Display3D;
sirius_dom_Sprite3D.prototype = $extend(sirius_dom_Display3D.prototype,{
	__class__: sirius_dom_Sprite3D
});
var sirius_dom_Style = $hx_exports.sru.dom.Style = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("style");
	}
	sirius_dom_Display.call(this,q,null,d);
	this.object = this.element;
	this.object.type = "text/css";
};
sirius_dom_Style.__name__ = true;
sirius_dom_Style.__super__ = sirius_dom_Display;
sirius_dom_Style.prototype = $extend(sirius_dom_Display.prototype,{
	publish: function() {
		window.document.head.appendChild(this.element);
	}
	,__class__: sirius_dom_Style
});
var sirius_dom_TD = $hx_exports.sru.dom.TD = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("td");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_TD.__name__ = true;
sirius_dom_TD.__super__ = sirius_dom_Display;
sirius_dom_TD.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_TD
});
var sirius_dom_TR = $hx_exports.sru.dom.TR = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("tr");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_TR.__name__ = true;
sirius_dom_TR.__super__ = sirius_dom_Display;
sirius_dom_TR.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_TR
});
var sirius_dom_Table = $hx_exports.sru.dom.Table = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("table");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Table.__name__ = true;
sirius_dom_Table.__super__ = sirius_dom_Display;
sirius_dom_Table.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Table
});
var sirius_dom_Text = function(q,d) {
	q = window.document.createTextNode(q);
	sirius_dom_Display.call(this,q,null,d);
	this.node = q;
};
sirius_dom_Text.__name__ = true;
sirius_dom_Text.__super__ = sirius_dom_Display;
sirius_dom_Text.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Text
});
var sirius_dom_TextArea = $hx_exports.sru.dom.TextArea = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("textarea");
	}
	sirius_dom_Input.call(this,q,d);
};
sirius_dom_TextArea.__name__ = true;
sirius_dom_TextArea.__super__ = sirius_dom_Input;
sirius_dom_TextArea.prototype = $extend(sirius_dom_Input.prototype,{
	__class__: sirius_dom_TextArea
});
var sirius_dom_Thead = $hx_exports.sru.dom.Thead = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("thead");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Thead.__name__ = true;
sirius_dom_Thead.__super__ = sirius_dom_Display;
sirius_dom_Thead.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Thead
});
var sirius_dom_Title = $hx_exports.sru.dom.Title = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("title");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Title.__name__ = true;
sirius_dom_Title.__super__ = sirius_dom_Display;
sirius_dom_Title.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Title
});
var sirius_dom_Track = $hx_exports.sru.dom.Track = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("track");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Track.__name__ = true;
sirius_dom_Track.__super__ = sirius_dom_Display;
sirius_dom_Track.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Track
});
var sirius_dom_UL = $hx_exports.sru.dom.UL = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("ul");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_UL.__name__ = true;
sirius_dom_UL.__super__ = sirius_dom_Display;
sirius_dom_UL.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_UL
});
var sirius_dom_Video = $hx_exports.sru.dom.Video = function(q,d) {
	if(q == null) {
		var _this = window.document;
		q = _this.createElement("video");
	}
	sirius_dom_Display.call(this,q,null,d);
};
sirius_dom_Video.__name__ = true;
sirius_dom_Video.__super__ = sirius_dom_Display;
sirius_dom_Video.prototype = $extend(sirius_dom_Display.prototype,{
	__class__: sirius_dom_Video
});
var sirius_events_IDispatcher = function() { };
sirius_events_IDispatcher.__name__ = true;
sirius_events_IDispatcher.prototype = {
	__class__: sirius_events_IDispatcher
};
var sirius_events_Dispatcher = $hx_exports.sru.events.Dispatcher = function(q) {
	this._b = { };
	this._e = { };
	this._i = { };
	this.target = q;
};
sirius_events_Dispatcher.__name__ = true;
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
	,auto: function(type,handler,mode) {
		var ie = this.event(type);
		if(mode != null) switch(mode) {
		case 1:case true:case "capture":
			return ie.add(handler,true);
		case 0:case false:
			return ie.add(handler,false);
		case -1:case "remove":
			return ie.remove(handler);
		default:
			return ie;
		} else return ie;
	}
	,wheel: function(handler,mode) {
		return this.auto("wheel",handler,mode);
	}
	,copy: function(handler,mode) {
		return this.auto("copy",handler,mode);
	}
	,cut: function(handler,mode) {
		return this.auto("cut",handler,mode);
	}
	,paste: function(handler,mode) {
		return this.auto("paste",handler,mode);
	}
	,abort: function(handler,mode) {
		return this.auto("abort",handler,mode);
	}
	,blur: function(handler,mode) {
		return this.auto("blur",handler,mode);
	}
	,focusIn: function(handler,mode) {
		return this.auto("focusin",handler,mode);
	}
	,focusOut: function(handler,mode) {
		return this.auto("focusout",handler,mode);
	}
	,canPlay: function(handler,mode) {
		return this.auto("canplay",handler,mode);
	}
	,canPlayThrough: function(handler,mode) {
		return this.auto("canplaythrough",handler,mode);
	}
	,change: function(handler,mode) {
		return this.auto("change",handler,mode);
	}
	,click: function(handler,mode) {
		return this.auto("click",handler,mode);
	}
	,contextMenu: function(handler,mode) {
		return this.auto("contextmenu",handler,mode);
	}
	,dblClick: function(handler,mode) {
		return this.auto("dblclick",handler,mode);
	}
	,drag: function(handler,mode) {
		return this.auto("drag",handler,mode);
	}
	,dragEnd: function(handler,mode) {
		return this.auto("dragend",handler,mode);
	}
	,dragEnter: function(handler,mode) {
		return this.auto("dragenter",handler,mode);
	}
	,dragLeave: function(handler,mode) {
		return this.auto("dragleave",handler,mode);
	}
	,dragOver: function(handler,mode) {
		return this.auto("dragover",handler,mode);
	}
	,dragStart: function(handler,mode) {
		return this.auto("dragstart",handler,mode);
	}
	,drop: function(handler,mode) {
		return this.auto("drop",handler,mode);
	}
	,durationChange: function(handler,mode) {
		return this.auto("durationchange",handler,mode);
	}
	,emptied: function(handler,mode) {
		return this.auto("emptied",handler,mode);
	}
	,ended: function(handler,mode) {
		return this.auto("ended",handler,mode);
	}
	,input: function(handler,mode) {
		return this.auto("input",handler,mode);
	}
	,invalid: function(handler,mode) {
		return this.auto("invalid",handler,mode);
	}
	,keyDown: function(handler,mode) {
		return this.auto("keydown",handler,mode);
	}
	,keyPress: function(handler,mode) {
		return this.auto("keypress",handler,mode);
	}
	,keyUp: function(handler,mode) {
		return this.auto("keyup",handler,mode);
	}
	,load: function(handler,mode) {
		return this.auto("load",handler,mode);
	}
	,loadedData: function(handler,mode) {
		return this.auto("loadeddata",handler,mode);
	}
	,loadedMetadata: function(handler,mode) {
		return this.auto("loadedmetadata",handler,mode);
	}
	,loadStart: function(handler,mode) {
		return this.auto("loadstart",handler,mode);
	}
	,mouseDown: function(handler,mode) {
		return this.auto("mousedown",handler,mode);
	}
	,mouseEnter: function(handler,mode) {
		return this.auto("mouseenter",handler,mode);
	}
	,mouseLeave: function(handler,mode) {
		return this.auto("mouseleave",handler,mode);
	}
	,mouseMove: function(handler,mode) {
		return this.auto("mousemove",handler,mode);
	}
	,mouseOut: function(handler,mode) {
		return this.auto("mouseout",handler,mode);
	}
	,mouseOver: function(handler,mode) {
		return this.auto("mouseover",handler,mode);
	}
	,mouseUp: function(handler,mode) {
		return this.auto("mouseup",handler,mode);
	}
	,pause: function(handler,mode) {
		return this.auto("pause",handler,mode);
	}
	,play: function(handler,mode) {
		return this.auto("play",handler,mode);
	}
	,playing: function(handler,mode) {
		return this.auto("playing",handler,mode);
	}
	,progress: function(handler,mode) {
		return this.auto("progress",handler,mode);
	}
	,rateChange: function(handler,mode) {
		return this.auto("ratechange",handler,mode);
	}
	,reset: function(handler,mode) {
		return this.auto("reset",handler,mode);
	}
	,scroll: function(handler,mode) {
		return this.auto("scroll",handler,mode);
	}
	,seeked: function(handler,mode) {
		return this.auto("seeked",handler,mode);
	}
	,seeking: function(handler,mode) {
		return this.auto("seeking",handler,mode);
	}
	,select: function(handler,mode) {
		return this.auto("select",handler,mode);
	}
	,show: function(handler,mode) {
		return this.auto("show",handler,mode);
	}
	,stalled: function(handler,mode) {
		return this.auto("stalled",handler,mode);
	}
	,submit: function(handler,mode) {
		return this.auto("submit",handler,mode);
	}
	,suspEnd: function(handler,mode) {
		return this.auto("suspend",handler,mode);
	}
	,timeUpdate: function(handler,mode) {
		return this.auto("timeupdate",handler,mode);
	}
	,volumeChange: function(handler,mode) {
		return this.auto("volumechange",handler,mode);
	}
	,waiting: function(handler,mode) {
		return this.auto("waiting",handler,mode);
	}
	,pointerCancel: function(handler,mode) {
		return this.auto("pointercancel",handler,mode);
	}
	,pointerDown: function(handler,mode) {
		return this.auto("pointerdown",handler,mode);
	}
	,pointerUp: function(handler,mode) {
		return this.auto("pointerup",handler,mode);
	}
	,pointerMove: function(handler,mode) {
		return this.auto("pointermove",handler,mode);
	}
	,pointerOut: function(handler,mode) {
		return this.auto("pointerout",handler,mode);
	}
	,pointerOver: function(handler,mode) {
		return this.auto("pointerover",handler,mode);
	}
	,pointerEnter: function(handler,mode) {
		return this.auto("pointerenter",handler,mode);
	}
	,pointerLeave: function(handler,mode) {
		return this.auto("pointerleave",handler,mode);
	}
	,gotPointerCapture: function(handler,mode) {
		return this.auto("gotpointercapture",handler,mode);
	}
	,lostPointerCapture: function(handler,mode) {
		return this.auto("lostpointercapture",handler,mode);
	}
	,pointerLockChange: function(handler,mode) {
		return this.auto("pointerlockchange",handler,mode);
	}
	,pointerLockError: function(handler,mode) {
		return this.auto("pointerlockerror",handler,mode);
	}
	,error: function(handler,mode) {
		return this.auto("error",handler,mode);
	}
	,touchStart: function(handler,mode) {
		return this.auto("touchstart",handler,mode);
	}
	,touchEnd: function(handler,mode) {
		return this.auto("touchend",handler,mode);
	}
	,touchMove: function(handler,mode) {
		return this.auto("touchmove",handler,mode);
	}
	,touchCancel: function(handler,mode) {
		return this.auto("touchcancel",handler,mode);
	}
	,__class__: sirius_events_Dispatcher
};
var sirius_events_IEvent = function() { };
sirius_events_IEvent.__name__ = true;
sirius_events_IEvent.prototype = {
	__class__: sirius_events_IEvent
};
var sirius_events_Event = $hx_exports.sru.events.Event = function(from,ticket,event) {
	this.event = event;
	this.ticket = ticket;
	this.from = from;
	this.target = from.target;
	this.target3d = from.target;
};
sirius_events_Event.__name__ = true;
sirius_events_Event.__interfaces__ = [sirius_events_IEvent];
sirius_events_Event.prototype = {
	__class__: sirius_events_Event
};
var sirius_events_IEventGroup = function() { };
sirius_events_IEventGroup.__name__ = true;
sirius_events_IEventGroup.prototype = {
	__class__: sirius_events_IEventGroup
};
var sirius_events_EventGroup = $hx_exports.sru.events.EventGroup = function(dispatcher,name) {
	this.dispatcher = dispatcher;
	this.name = name;
	this.enabled = true;
	this.events = [];
};
sirius_events_EventGroup.__name__ = true;
sirius_events_EventGroup.__interfaces__ = [sirius_events_IEventGroup];
sirius_events_EventGroup.prototype = {
	add: function(handler,capture) {
		if(capture != null) this.capture = capture;
		if(handler != null) this.events.push(handler);
		return this;
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
	,cancel: function() {
		this.propagation = false;
		return this;
	}
	,preventDefault: function() {
		this._pd = true;
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
		if(this._pd && e != null) evt.event.preventDefault();
		this.propagation = true;
	}
	,call: function() {
		this._runner(null);
		return this;
	}
	,__class__: sirius_events_EventGroup
};
var sirius_math_ARGB = function(q,g,b,a) {
	var s = typeof(q) == "string" && (q.substr(0,3) == "rgb" || q.substr(0,2) == "0x" || q.substr(0,1) == "#");
	if(s && q.substr(0,3) == "rgb") {
		s = false;
		q = q.split("rgb").join("").split("(").join("").split(")").join("").split(" ").join("");
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
		if(s) x = Std.parseInt(q.split("#").join("0x")); else x = q;
		this.a = x >> 24 & 255;
		this.r = x >> 16 & 255;
		this.g = x >> 8 & 255;
		this.b = x & 255;
	}
	if(a == null) a = 255;
};
sirius_math_ARGB.__name__ = true;
sirius_math_ARGB.__interfaces__ = [math_IARGB];
sirius_math_ARGB.prototype = {
	value32: function() {
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
		var r2;
		r2 = (this.r == 0?1:this.r) * rate | 0;
		var g2;
		g2 = (this.g == 0?1:this.g) * rate | 0;
		var b2;
		b2 = (this.b == 0?1:this.b) * rate | 0;
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
		return "rgb(" + this.r + "," + this.g + "," + this.b + "," + (this.a / 255).toFixed() + ")";
	}
	,__class__: sirius_math_ARGB
};
var sirius_math_Point3D = function(x,y,z) {
	this.x = x;
	this.y = y;
	this.z = z;
};
sirius_math_Point3D.__name__ = true;
sirius_math_Point3D.__interfaces__ = [math_IPoint3D];
sirius_math_Point3D.prototype = {
	__class__: sirius_math_Point3D
};
var sirius_modules_IMod = function() { };
sirius_modules_IMod.__name__ = true;
sirius_modules_IMod.prototype = {
	__class__: sirius_modules_IMod
};
var sirius_modules_ModLib = function() { };
sirius_modules_ModLib.__name__ = true;
sirius_modules_ModLib.exists = function(module) {
	return Object.prototype.hasOwnProperty.call(sirius_modules_ModLib.CACHE,module);
};
sirius_modules_ModLib.register = function(file,content) {
	content = content.split("[module:{").join("[!MOD!]");
	content = content.split("[Module:{").join("[!MOD!]");
	var sur = content.split("[!MOD!]");
	if(sur.length > 1) sirius_utils_Dice.All(sur,function(p,v) {
		if(p > 0) {
			var i = v.indexOf("}]");
			if(i != -1) {
				var mod = JSON.parse("{" + HxOverrides.substr(v,0,i) + "}");
				if(mod.name == null) mod.name = file;
				sirius_Sirius.log("Building Module [" + mod.name + "]",10,1);
				var end = v.indexOf(";;;");
				content = v.substring(i + 2,end == -1?v.length:end);
				if(mod.require != null) {
					var dependencies = mod.require.split(";");
					sirius_Sirius.log("\tValidating dependencies...",10,1);
					sirius_utils_Dice.Values(dependencies,function(v1) {
						var set = Reflect.field(sirius_modules_ModLib.CACHE,v1);
						if(set == null) sirius_Sirius.log("MODULE(" + v1 + ") : MISSING",10,2); else {
							sirius_Sirius.log("\t\t[" + v1 + "] OK!",10,1);
							content = content.split("<import " + v1 + "/>").join(set);
						}
					});
				}
				if(mod.target != null) {
					var t = sirius_Sirius.select(mod.target);
					if(t != null) t.addChild(sirius_modules_ModLib.build(mod.name));
				}
				sirius_modules_ModLib.CACHE[mod.name] = content;
			} else sirius_Sirius.log("\t(" + HxOverrides.substr(v,0,15) + "...) Missing or Invalid MODULE tag in [" + file + "]",10,3);
		}
	}); else sirius_modules_ModLib.CACHE[file] = content;
};
sirius_modules_ModLib.get = function(name,data) {
	if(!sirius_modules_ModLib.exists(name)) return "<span style='color:#ff0000;font-weight:bold;'>Undefined Module::" + name + "</span><br/>";
	var content = Reflect.field(sirius_modules_ModLib.CACHE,name);
	if(data != null) return sirius_utils_Filler.to(content,data); else return content;
};
sirius_modules_ModLib.fill = function(module,data,sufix) {
	return sirius_utils_Filler.to(sirius_modules_ModLib.get(module),data,sufix);
};
sirius_modules_ModLib.build = function(module,data) {
	return new sirius_dom_Display().build(sirius_modules_ModLib.get(module,data));
};
var sirius_plugins_Anchor = $hx_exports.sru.plugins.Anchor = function() {
	sirius_Sirius.all("[plugin~=anchor]").onClick($bind(this,this._scroll));
};
sirius_plugins_Anchor.__name__ = true;
sirius_plugins_Anchor.init = function() {
	return new sirius_plugins_Anchor();
};
sirius_plugins_Anchor.prototype = {
	_scroll: function(e) {
		var d = e.target.attribute("scroll-target");
		if(d != null) {
			var time = Std.parseFloat(sirius_utils_Dice.One(e.target.attribute("scroll-time"),1).value);
			var obj = sirius_Sirius.select(d);
			var x = Std.parseInt(sirius_utils_Dice.One(e.target.attribute("scroll-offx"),0).value);
			var y = Std.parseInt(sirius_utils_Dice.One(e.target.attribute("scroll-offy"),100).value);
			if(obj != null) {
				var ease = sirius_transitions_Ease.fromString(sirius_utils_Dice.One(e.target.attribute("scroll-ease"),"LINEAR.X").value);
				sirius_Sirius.document.scrollTo(obj,time,ease,x,y);
			} else sirius_Sirius.log("Anchor: Missing scroll-target='id:?' for Anchor plugin.",10,3);
		}
	}
	,__class__: sirius_plugins_Anchor
};
var sirius_seo_SEO = function(type) {
	this.data = { };
	this.data["@context"] = "http://schema.org/";
	this.data["@type"] = type;
	var _this = window.document;
	this.object = _this.createElement("script");
	this.object.type = "application/ld+json";
};
sirius_seo_SEO.__name__ = true;
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
sirius_seo_Breadcrumbs.__name__ = true;
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
var sirius_seo_IBrand = function() { };
sirius_seo_IBrand.__name__ = true;
sirius_seo_IBrand.prototype = {
	__class__: sirius_seo_IBrand
};
var sirius_seo_IItem = function() { };
sirius_seo_IItem.__name__ = true;
sirius_seo_IItem.prototype = {
	__class__: sirius_seo_IItem
};
var sirius_seo_IOffer = function() { };
sirius_seo_IOffer.__name__ = true;
sirius_seo_IOffer.prototype = {
	__class__: sirius_seo_IOffer
};
var sirius_seo_IReview = function() { };
sirius_seo_IReview.__name__ = true;
sirius_seo_IReview.prototype = {
	__class__: sirius_seo_IReview
};
var sirius_seo_IWebSite = function() { };
sirius_seo_IWebSite.__name__ = true;
sirius_seo_IWebSite.prototype = {
	__class__: sirius_seo_IWebSite
};
var sirius_seo_Product = $hx_exports.sru.seo.Product = function() {
	sirius_seo_SEO.call(this,"Product");
};
sirius_seo_Product.__name__ = true;
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
			this.reviewOf = { '@type' : "AggregateRating", ratingValue : 0, reviewCount : 0};
			this.data.aggregateRating = this.reviewOf;
		}
		if(value != null) if(value == null) this.reviewOf.ratingValue = "null"; else this.reviewOf.ratingValue = "" + value;
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
var sirius_seo_WebSite = function() {
	sirius_seo_SEO.call(this,"WebSite");
	this._d = this.data;
};
sirius_seo_WebSite.__name__ = true;
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
var sirius_tools_IAgent = function() { };
sirius_tools_IAgent.__name__ = true;
sirius_tools_IAgent.prototype = {
	__class__: sirius_tools_IAgent
};
var sirius_tools_Key = $hx_exports.sru.tools.Key = function() { };
sirius_tools_Key.__name__ = true;
sirius_tools_Key.COUNTER = function() {
	return sirius_tools_Key._counter++;
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
sirius_tools_Ticker.__name__ = true;
sirius_tools_Ticker._tickAll = function() {
	var order = 0;
	sirius_utils_Dice.All(sirius_tools_Ticker._pool,function(p,v) {
		if(v != null) {
			v();
			if(order < p) sirius_tools_Ticker._pool[order] = v;
			++order;
		}
	});
};
sirius_tools_Ticker.init = function() {
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
	if(iof != -1) sirius_tools_Ticker._pool[iof] = null;
};
var sirius_tools_Utils = $hx_exports.sru.tools.Utils = function() { };
sirius_tools_Utils.__name__ = true;
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
sirius_tools_Utils.fixArray = function(path) {
	var copy = [];
	sirius_utils_Dice.Values(path,function(v) {
		if(v != null && v != "") copy[copy.length] = v;
	});
	return copy;
};
sirius_tools_Utils.screenInfo = function() {
	return sirius_tools_Utils.screenOrientation() + "(" + sirius_tools_Utils.viewportWidth() + "x" + sirius_tools_Utils.viewportHeight() + ")";
};
sirius_tools_Utils.displayFrom = function(t) {
	if(t.nodeType != 1) return new sirius_dom_Display(t);
	var OC = Reflect.field(sirius_tools_Utils.typeOf,t.tagName.toLowerCase());
	if(OC == null) return new sirius_dom_Display(t); else {
		return new OC(t);
	}
};
sirius_tools_Utils.toString = function(o,json) {
	if(json == true) return JSON.stringify(o); else return Std.string(o);
};
var sirius_transitions_Animator = $hx_exports.Animator = function() { };
sirius_transitions_Animator.__name__ = true;
sirius_transitions_Animator.get = function(o) {
	if(o != null && js_Boot.__instanceof(o,sirius_dom_IDisplay)) return o.element; else return o;
};
sirius_transitions_Animator.call = function(time,handler,params,scope,frame) {
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.delayedCall(time,handler,params,scope,frame); else return null;
};
sirius_transitions_Animator.all = function(o,act) {
	if(act == null) act = false;
	if(o == null) o = true;
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available) {
		if(o == true) return sirius_transitions_Animator.tweenObject.getAllTweens(act); else if(o != null) return sirius_transitions_Animator.tweenObject.getTweensOf(o,act); else return [];
	} else return [];
};
sirius_transitions_Animator.stop = function(o,child) {
	if(child == null) child = false;
	if(o == null) o = true;
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available) {
		if(o == true) return sirius_transitions_Animator.tweenObject.killAll(); else if(o != null) {
			if(child) return sirius_transitions_Animator.tweenObject.killChildTweensOf(o); else return sirius_transitions_Animator.tweenObject.killTweensOf(o);
		} else return null;
	} else return null;
};
sirius_transitions_Animator.pause = function() {
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.pauseAll(); else return null;
};
sirius_transitions_Animator.resume = function() {
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.resumeAll(); else return null;
};
sirius_transitions_Animator.isActive = function(o) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.isTweening(o); else return false;
};
sirius_transitions_Animator.to = function(o,time,transform) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.to(o,time,transform); else return null;
};
sirius_transitions_Animator.from = function(o,time,transform) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.from(o,time,transform); else return null;
};
sirius_transitions_Animator.fromTo = function(o,time,transformFrom,transformTo) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.from(o,time,transformFrom,transformTo); else return null;
};
sirius_transitions_Animator.stagTo = function(o,time,transform,stagger,complete,args,scope) {
	sirius_utils_Dice.All(o,function(p,v) {
		o[p] = sirius_transitions_Animator.get(v);
	});
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.staggerTo(o,time,transform,stagger,complete,args,scope); else return null;
};
sirius_transitions_Animator.stagFrom = function(o,time,transform,stagger,complete,args,scope) {
	sirius_utils_Dice.All(o,function(p,v) {
		o[p] = sirius_transitions_Animator.get(v);
	});
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.staggerFrom(o,time,transform,stagger,complete,args,scope); else return null;
};
sirius_transitions_Animator.stagFromTo = function(o,time,transformFrom,transformTo,stagger,complete,args,scope) {
	sirius_utils_Dice.All(o,function(p,v) {
		o[p] = sirius_transitions_Animator.get(v);
	});
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.staggerFromTo(o,time,transformFrom,transformTo,stagger,complete,args,scope); else return null;
};
sirius_transitions_Animator.timeScale = function(o) {
	if(sirius_transitions_Animator.available) return sirius_transitions_Animator.tweenObject.globalTimeScale(o); else return 0;
};
sirius_transitions_Animator.set = function(o,transform) {
	o = sirius_transitions_Animator.get(o);
	if(sirius_transitions_Animator.available && o != null) return sirius_transitions_Animator.tweenObject.set(o,transform); else return null;
};
var sirius_transitions_Ease = $hx_exports.Ease = function() { };
sirius_transitions_Ease.__name__ = true;
sirius_transitions_Ease._F = function(n) {
	n = window[n];;
	return n != null?{ x : n.easeNone, I : n.easeIn, O : n.easeOut, IO : n.easeInOut, OI : n.easeOutIn}:{ };
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
var sirius_transitions_IEasing = function() { };
sirius_transitions_IEasing.__name__ = true;
sirius_transitions_IEasing.prototype = {
	__class__: sirius_transitions_IEasing
};
var sirius_utils_Dice = $hx_exports.sru.utils.Dice = function() { };
sirius_utils_Dice.__name__ = true;
sirius_utils_Dice.All = function(q,each,complete) {
	var v = null;
	var p = null;
	var c = complete != null;
	var i = true;
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
				p1 = null;
				v = null;
			}
		}
		if(c) complete(p,v,i);
	}
	return { param : p, value : v, completed : i};
};
sirius_utils_Dice.Params = function(q,each,complete) {
	return sirius_utils_Dice.All(q,function(p,v) {
		return each(p);
	},complete != null?function(p1,v1,i) {
		complete(p1,i);
	}:null);
};
sirius_utils_Dice.Values = function(q,each,complete) {
	return sirius_utils_Dice.All(q,function(p,v) {
		return each(v);
	},complete != null?function(p1,v1,i) {
		complete(v1,i);
	}:null);
};
sirius_utils_Dice.Call = function(q,method,args) {
	if(args == null) args = [];
	return sirius_utils_Dice.All(q,function(p,v) {
		Reflect.callMethod(v,Reflect.field(v,method),args);
	},null);
};
sirius_utils_Dice.Count = function(from,to,each,complete,increment) {
	if(increment == null) increment = 1;
	var a = Math.min(from,to);
	var b = Math.max(from,to);
	if(increment == null || _$UInt_UInt_$Impl_$.gt(1,increment)) increment = 1;
	while(a < b) if(each(a,b,(a = _$UInt_UInt_$Impl_$.toFloat(increment) + a) == b) == true) break;
	var c = a == b;
	if(complete != null) complete(a,b,c);
	return { from : from, to : b, completed : c, value : a};
};
sirius_utils_Dice.One = function(from,alt) {
	if((from instanceof Array) && from.__enum__ == null) sirius_utils_Dice.Values(from,function(v) {
		from = v;
		return from == null;
	});
	return { value : from == null || from == ""?alt:from};
};
sirius_utils_Dice.Children = function(of,each,complete) {
	var r = { Children : []};
	var l = 0;
	var c;
	sirius_utils_Dice.Count(0,of.childNodes.length,function(i) {
		c = of.childNodes.item(i);
		r.children[l] = c;
		return each(c,i);
	},complete);
	return r;
};
var sirius_utils_Filler = $hx_exports.sru.utils.Filler = function() { };
sirius_utils_Filler.__name__ = true;
sirius_utils_Filler._apply = function(path,content,data) {
	if(data == null) content = content.split("%" + path + "%").join(""); else if(typeof(data) == "number" || typeof(data) == "string" || typeof(data) == "boolean" || ((data | 0) === data)) content = content.split("%" + path + "%").join(data); else {
		if(path != null && path != "") path = path + "."; else path = "";
		sirius_utils_Dice.All(data,function(p,v) {
			content = sirius_utils_Filler._apply(path + p,content,v);
		});
	}
	return content;
};
sirius_utils_Filler.to = function(value,data,sufix) {
	return sirius_utils_Filler._apply(sufix,value,data);
};
var sirius_utils_ITable = function() { };
sirius_utils_ITable.__name__ = true;
sirius_utils_ITable.prototype = {
	__class__: sirius_utils_ITable
};
var sirius_utils_Table = $hx_exports.sru.utils.Table = function(q,t) {
	if(q == null) q = "*";
	var _g = this;
	this.content = [];
	this.elements = [];
	if(q != "NULL_TABLE") {
		if(q != null) {
			if(t == null) t = window.document;
			var result = t.querySelectorAll(q);
			var element = null;
			if(result.length > 0) sirius_utils_Dice.Count(0,result.length,function(i) {
				element = result.item(i);
				_g.content[_g.content.length] = sirius_tools_Utils.displayFrom(element);
				_g.elements[_g.elements.length] = element;
			}); else sirius_Sirius.log("TABLE(" + q + ") : NO RESULT",10,2);
		} else sirius_Sirius.log("TABLE(QUERY,TARGET) : NULL QUERY_SELECTOR",10,3);
	}
};
sirius_utils_Table.__name__ = true;
sirius_utils_Table.__interfaces__ = [sirius_utils_ITable];
sirius_utils_Table.empty = function() {
	return new sirius_utils_Table("NULL_TABLE");
};
sirius_utils_Table.prototype = {
	contains: function(q) {
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
		sirius_utils_Dice.Call(this.content,"css",[styles]);
		return this;
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
		this.each(function(v) {
			v.events.auto(name,handler,mode);
		});
		return this;
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
	,__class__: sirius_utils_Table
};
var transitions_ITween = function() { };
transitions_ITween.__name__ = true;
transitions_ITween.prototype = {
	__class__: transitions_ITween
};
var utils_IDice = function() { };
utils_IDice.__name__ = true;
utils_IDice.prototype = {
	__class__: utils_IDice
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
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
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
js_Boot.__toStr = {}.toString;
sirius_modules_Loader.FILES = { };
sirius_seo_SEOTool.WEBSITE = 1;
sirius_seo_SEOTool.BREADCRUMBS = 2;
sirius_seo_SEOTool.PRODUCT = 4;
sirius_Sirius.resources = new sirius_modules_Loader();
sirius_Sirius.domain = new sirius_net_Domain();
sirius_Sirius.seo = new sirius_seo_SEOTool();
sirius_Sirius._loglevel = 100;
sirius_Sirius._initialized = false;
sirius_bit_BitIO.P01 = 1;
sirius_bit_BitIO.P02 = 2;
sirius_bit_BitIO.P03 = 4;
sirius_bit_BitIO.P04 = 8;
sirius_bit_BitIO.P05 = 16;
sirius_bit_BitIO.P06 = 32;
sirius_bit_BitIO.P07 = 64;
sirius_bit_BitIO.P08 = 128;
sirius_bit_BitIO.P09 = 256;
sirius_bit_BitIO.P10 = 512;
sirius_bit_BitIO.P11 = 1024;
sirius_bit_BitIO.P12 = 2048;
sirius_bit_BitIO.P13 = 4096;
sirius_bit_BitIO.P14 = 8192;
sirius_bit_BitIO.P15 = 16384;
sirius_bit_BitIO.P16 = 32768;
sirius_bit_BitIO.P17 = 65536;
sirius_bit_BitIO.P18 = 131072;
sirius_bit_BitIO.P19 = 262144;
sirius_bit_BitIO.P20 = 524288;
sirius_bit_BitIO.P21 = 1048576;
sirius_bit_BitIO.P22 = 2097152;
sirius_bit_BitIO.P23 = 4194304;
sirius_bit_BitIO.P24 = 8388608;
sirius_bit_BitIO.P25 = 16777216;
sirius_bit_BitIO.P26 = 33554432;
sirius_bit_BitIO.P27 = 67108864;
sirius_bit_BitIO.P28 = 134217728;
sirius_bit_BitIO.P29 = 268435456;
sirius_bit_BitIO.P30 = 536870912;
sirius_bit_BitIO.P31 = 1073741824;
sirius_bit_BitIO.P32 = -2147483648;
sirius_bit_BitIO.X = [sirius_bit_BitIO.unwrite,sirius_bit_BitIO.write,sirius_bit_BitIO.toggle];
sirius_css_Automator._NS = { t : "top", b : "botton", l : "left", r : "right", pc : "%", i : " !important", bord : "border", marg : "margin", padd : "padding", line : "line", w : "width", h : "height", o : "outline", wh : ["width","height"], rad : "radius", a : "auto", txt : "font-size", xs : "", sm : "", md : "", lg : ""};
sirius_css_Color.COLORS = { aliceblue : { color : "#f0f8ff"}, antiquewhite : { color : "#faebd7"}, aqua : { color : "#00ffff"}, aquamarine : { color : "#7fffd4"}, azure : { color : "#f0ffff"}, beige : { color : "#f5f5dc"}, bisque : { color : "#ffe4c4"}, black : { color : "#000000"}, blanchedalmond : { color : "#ffebcd"}, blue : { color : "#0000ff"}, blueviolet : { color : "#8a2be2"}, brown : { color : "#a52a2a"}, burlywood : { color : "#deb887"}, cadetblue : { color : "#5f9ea0"}, chartreuse : { color : "#7fff00"}, chocolate : { color : "#d2691e"}, coral : { color : "#ff7f50"}, cornflowerblue : { color : "#6495ed"}, cornsilk : { color : "#fff8dc"}, crimson : { color : "#dc143c"}, cyan : { color : "#00ffff"}, darkblue : { color : "#00008b"}, darkcyan : { color : "#008b8b"}, darkgoldenrod : { color : "#b8860b"}, darkgray : { color : "#a9a9a9"}, darkgreen : { color : "#006400"}, darkkhaki : { color : "#bdb76b"}, darkmagenta : { color : "#8b008b"}, darkolivegreen : { color : "#556b2f"}, darkorange : { color : "#ff8c00"}, darkorchid : { color : "#9932cc"}, darkred : { color : "#8b0000"}, darksalmon : { color : "#e9967a"}, darkseagreen : { color : "#8fbc8f"}, darkslateblue : { color : "#483d8b"}, darkslategray : { color : "#2f4f4f"}, darkturquoise : { color : "#00ced1"}, darkviolet : { color : "#9400d3"}, deeppink : { color : "#ff1493"}, deepskyblue : { color : "#00bfff"}, dimgray : { color : "#696969"}, dodgerblue : { color : "#1e90ff"}, firebrick : { color : "#b22222"}, floralwhite : { color : "#fffaf0"}, forestgreen : { color : "#228b22"}, fuchsia : { color : "#ff00ff"}, gainsboro : { color : "#dcdcdc"}, ghostwhite : { color : "#f8f8ff"}, gold : { color : "#ffd700"}, goldenrod : { color : "#daa520"}, gray : { color : "#808080"}, green : { color : "#008000"}, greenyellow : { color : "#adff2f"}, honeydew : { color : "#f0fff0"}, hotpink : { color : "#ff69b4"}, indianred : { color : "#cd5c5c"}, indigo : { color : "#4b0082"}, ivory : { color : "#fffff0"}, khaki : { color : "#f0e68c"}, lavender : { color : "#e6e6fa"}, lavenderblush : { color : "#fff0f5"}, lawngreen : { color : "#7cfc00"}, lemonchiffon : { color : "#fffacd"}, lightblue : { color : "#add8e6"}, lightcoral : { color : "#f08080"}, lightcyan : { color : "#e0ffff"}, lightgoldenrodyellow : { color : "#fafad2"}, lightgray : { color : "#d3d3d3"}, lightgreen : { color : "#90ee90"}, lightpink : { color : "#ffb6c1"}, lightsalmon : { color : "#ffa07a"}, lightseagreen : { color : "#20b2aa"}, lightskyblue : { color : "#87cefa"}, lightslategray : { color : "#778899"}, lightsteelblue : { color : "#b0c4de"}, lightyellow : { color : "#ffffe0"}, lime : { color : "#00ff00"}, limegreen : { color : "#32cd32"}, linen : { color : "#faf0e6"}, magenta : { color : "#ff00ff"}, maroon : { color : "#800000"}, mediumaquamarine : { color : "#66cdaa"}, mediumblue : { color : "#0000cd"}, mediumorchid : { color : "#ba55d3"}, mediumpurple : { color : "#9370db"}, mediumseagreen : { color : "#3cb371"}, mediumslateblue : { color : "#7b68ee"}, mediumspringgreen : { color : "#00fa9a"}, mediumturquoise : { color : "#48d1cc"}, mediumvioletred : { color : "#c71585"}, midnightblue : { color : "#191970"}, mintcream : { color : "#f5fffa"}, mistyrose : { color : "#ffe4e1"}, moccasin : { color : "#ffe4b5"}, navajowhite : { color : "#ffdead"}, navy : { color : "#000080"}, oldlace : { color : "#fdf5e6"}, olive : { color : "#808000"}, olivedrab : { color : "#6b8e23"}, orange : { color : "#ffa500"}, orangered : { color : "#ff4500"}, orchid : { color : "#da70d6"}, palegoldenrod : { color : "#eee8aa"}, palegreen : { color : "#98fb98"}, paleturquoise : { color : "#afeeee"}, palevioletred : { color : "#db7093"}, papayawhip : { color : "#ffefd5"}, peachpuff : { color : "#ffdab9"}, peru : { color : "#cd853f"}, pink : { color : "#ffc0cb"}, plum : { color : "#dda0dd"}, powderblue : { color : "#b0e0e6"}, purple : { color : "#800080"}, rebeccapurple : { color : "#663399"}, red : { color : "#ff0000"}, rosybrown : { color : "#bc8f8f"}, royalblue : { color : "#4169e1"}, saddlebrown : { color : "#8b4513"}, salmon : { color : "#fa8072"}, sandybrown : { color : "#f4a460"}, seagreen : { color : "#2e8b57"}, seashell : { color : "#fff5ee"}, sienna : { color : "#a0522d"}, silver : { color : "#c0c0c0"}, skyblue : { color : "#87ceeb"}, slateblue : { color : "#6a5acd"}, slategray : { color : "#708090"}, snow : { color : "#fffafa"}, springgreen : { color : "#00ff7f"}, steelblue : { color : "#4682b4"}, tan : { color : "#d2b48c"}, teal : { color : "#008080"}, thistle : { color : "#d8bfd8"}, tomato : { color : "#ff6347"}, turquoise : { color : "#40e0d0"}, violet : { color : "#ee82ee"}, wheat : { color : "#f5deb3"}, white : { color : "#ffffff"}, whitesmoke : { color : "#f5f5f5"}, yellow : { color : "#ffff00"}, yellowgreen : { color : "#9acd32"}};
sirius_css_Color.FLAT = [];
sirius_css_Color.ALL = [];
sirius_css_Color._active = false;
sirius_css_Shadow._active = false;
sirius_dom_Display.DATA = { };
sirius_dom_Document.__scroll__ = { x : 0, y : 0};
sirius_dom_Document.__cursor__ = { x : 0, y : 0};
sirius_modules_ModLib.CACHE = { };
sirius_tools_Key._counter = 0;
sirius_tools_Key.TABLE = "abcdefghijklmnopqrstuvwxyz0123456789";
sirius_tools_Ticker._pool = [];
sirius_tools_Utils.typeOf = { a : sirius_dom_A, applet : sirius_dom_Applet, area : sirius_dom_Area, audio : sirius_dom_Audio, b : sirius_dom_B, base : sirius_dom_Base, body : sirius_dom_Body, br : sirius_dom_BR, button : sirius_dom_Button, canvas : sirius_dom_Canvas, caption : sirius_dom_Caption, col : sirius_dom_Col, content : sirius_dom_Content, datalist : sirius_dom_DataList, dir : sirius_dom_Dir, div : sirius_dom_Div, display : sirius_dom_Display, display3d : sirius_dom_Display3D, dl : sirius_dom_DL, document : sirius_dom_Document, embed : sirius_dom_Embed, fieldset : sirius_dom_FieldSet, font : sirius_dom_Font, form : sirius_dom_Form, frame : sirius_dom_Frame, frameset : sirius_dom_FrameSet, h1 : sirius_dom_H1, h2 : sirius_dom_H2, h3 : sirius_dom_H3, h4 : sirius_dom_H4, h5 : sirius_dom_H5, h6 : sirius_dom_H6, head : sirius_dom_Head, hr : sirius_dom_HR, html : sirius_dom_Html, i : sirius_dom_I, iframe : sirius_dom_IFrame, img : sirius_dom_Img, input : sirius_dom_Input, label : sirius_dom_Label, legend : sirius_dom_Legend, li : sirius_dom_LI, link : sirius_dom_Link, map : sirius_dom_Map, media : sirius_dom_Media, menu : sirius_dom_Menu, meta : sirius_dom_Meta, meter : sirius_dom_Meter, mod : sirius_dom_Mod, object : sirius_dom_Object, ol : sirius_dom_OL, optgroup : sirius_dom_OptGroup, option : sirius_dom_Option, output : sirius_dom_Output, p : sirius_dom_P, param : sirius_dom_Param, picture : sirius_dom_Picture, pre : sirius_dom_Pre, progress : sirius_dom_Progress, quote : sirius_dom_Quote, script : sirius_dom_Script, select : sirius_dom_Select, shadow : sirius_dom_Shadow, source : sirius_dom_Source, span : sirius_dom_Span, sprite : sirius_dom_Sprite, sprite3d : sirius_dom_Sprite3D, style : sirius_dom_Style, table : sirius_dom_Table, td : sirius_dom_TD, text : sirius_dom_Text, textarea : sirius_dom_TextArea, thead : sirius_dom_Thead, title : sirius_dom_Title, tr : sirius_dom_TR, track : sirius_dom_Track, ul : sirius_dom_UL, video : sirius_dom_Video};
sirius_transitions_Animator.available = window.Tween != null || window.TweenMax != null || window.TweenLite != null;
sirius_transitions_Animator.tweenObject = window.Tween || window.TweenMax || window.TweenLite;
sirius_transitions_Ease.LINEAR = sirius_transitions_Ease._F("Linear");
sirius_transitions_Ease.CIRC = sirius_transitions_Ease._F("Circ");
sirius_transitions_Ease.CUBIC = sirius_transitions_Ease._F("Cubic");
sirius_transitions_Ease.QUAD = sirius_transitions_Ease._F("Quad");
sirius_transitions_Ease.EXPO = sirius_transitions_Ease._F("Expo");
sirius_transitions_Ease.BACK = sirius_transitions_Ease._F("Back");
sirius_transitions_Ease.ELASTIC = sirius_transitions_Ease._F("Elastic");
sirius_transitions_Ease.QUART = sirius_transitions_Ease._F("Quart");
sirius_transitions_Ease.QUINT = sirius_transitions_Ease._F("Quint");
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);
