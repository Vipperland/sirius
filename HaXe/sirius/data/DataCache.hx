package sirius.data;
import haxe.Json;
import haxe.Log;
import js.Cookie;
import sirius.Sirius;

/**
 * ...
 * @author Rafael Moreira
 */
class DataCache{
	
	private var _DB:Dynamic;
	
	public var path:String;
	
	public var expire:Int;
	
	public var name:String;
	
	public function new(?name:String, ?expire:Int, ?path:String) {
		this.name = name;
		this.expire = expire;
		this.path = path;
		clear();
	}
	
	public function clear():DataCache {
		_DB = { };
		Cookie.remove(name, path);
		return this;
	}
	
	public function set(p:String, v:Dynamic):DataCache {
		Reflect.setField(_DB, p, v);
		return this;
	}
	
	public function get(?id:String):Dynamic {
		var d:Dynamic = id != null ? Reflect.field(_DB, id) : null;
		if (d == null) {
			d = { };
			set(id, d);
		}
		return d;
	}
	
	public function save(?expire:Int):DataCache {
		Cookie.set(name, Json.stringify(_DB), expire != null ? expire : this.expire, path);
		return this;
	}
	
	public function load():DataCache {
		if (Cookie.exists(name)) {
			var s:String = Cookie.get(name);
			_DB = (s != null && s.length > 1) ? Json.parse(s) : {};
		}
		return this;
	}
	
}