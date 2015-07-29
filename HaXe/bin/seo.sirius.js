(function ($hx_exports) { "use strict";
$hx_exports.sru = $hx_exports.sru || {};
$hx_exports.sru.seo = $hx_exports.sru.seo || {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var js_Boot = function() { };
js_Boot.__name__ = true;
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
var STool = $hx_exports.SEO = function() {};
STool.__name__ = true;
STool.prototype = {
	init: function(types) {
		if(types == null) types = 0;
		if((types == 0 || BitIO.test(types,STool.WEBSITE)) && this.website == null) this.website = new WebSite();
		if(BitIO.test(types,STool.BREADCRUMBS) && this.breadcrumbs == null) this.breadcrumbs = new Breadcrumbs();
		if(BitIO.test(types,STool.PRODUCT) && this.product == null) this.product = new Product();
		return this;
	}
	,publish: function() {
		if(this.website != null) this.website.publish();
		if(this.product != null) this.product.publish();
		if(this.breadcrumbs != null) this.breadcrumbs.publish();
	}
};
var sirius_SEO_$Sirius = $hx_exports.Sirius = function() { };
sirius_SEO_$Sirius.__name__ = true;
var BitIO = $hx_exports.BitIO = function() { };
BitIO.__name__ = true;
BitIO.write = function(hash,bit) {
	return hash | bit;
};
BitIO.unwrite = function(hash,bit) {
	return hash & ~bit;
};
BitIO.toggle = function(hash,bit) {
	if(BitIO.test(hash,bit)) return BitIO.unwrite(hash,bit); else return BitIO.write(hash,bit);
};
BitIO.test = function(hash,value) {
	return (hash & value) == value;
};
BitIO.getString = function(hash,size) {
	if(size == null) size = 32;
	var v = hash.toString(2);
	while(v.length < size) v = "0" + v;
	return v;
};
var SEO = function(type) {
	this.data = { };
	this.data["@context"] = "http://schema.org/";
	this.data["@type"] = type;
	var _this = window.document;
	this.object = _this.createElement("script");
	this.object.type = "application/ld+json";
};
SEO.__name__ = true;
SEO.prototype = {
	publish: function() {
		this.object.innerHTML = JSON.stringify(this.data);
		if(this.object.parentElement == null) window.document.head.appendChild(this.object);
	}
	,typeOf: function() {
		return Reflect.field(this.data,"@type");
	}
};
var Breadcrumbs = function() {
	SEO.call(this,"BreadcrumbList");
	this._setup();
};
Breadcrumbs.__name__ = true;
Breadcrumbs.__super__ = SEO;
Breadcrumbs.prototype = $extend(SEO.prototype,{
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
});
var Product = $hx_exports.sru.seo.Product = function() {
	SEO.call(this,"Product");
};
Product.__name__ = true;
Product.__super__ = SEO;
Product.prototype = $extend(SEO.prototype,{
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
});
var WebSite = function() {
	SEO.call(this,"WebSite");
	this._d = this.data;
};
WebSite.__name__ = true;
WebSite.__super__ = SEO;
WebSite.prototype = $extend(SEO.prototype,{
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
});
String.__name__ = true;
Array.__name__ = true;
STool.WEBSITE = 1;
STool.BREADCRUMBS = 2;
STool.PRODUCT = 4;
sirius_SEO_$Sirius.seo = new STool();
BitIO.IO = [BitIO.unwrite,BitIO.write,BitIO.toggle];
})(typeof window != "undefined" ? window : exports);
