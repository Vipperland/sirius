package sirius.php.utils;
import haxe.Json;
import php.Lib;
import php.Web;
import sirius.utils.Criptog;

/**
 * ...
 * @author Rafael Moreira
 */
class Header {
	
	static public var HTML:String = 'text/html;charset=utf-8';
	
	static public var TEXT:String = 'text/plain;charset=utf-8';
	
	static public var JSON:String = 'application/json;charset=utf-8';
	
	static public var JSONP:String = 'application/javascript;charset=utf-8';
	
	static public var hasType:Bool = false;
	
	public function new() {
		
	}
	
	public function access(origin:String = '*', ?methods:String = 'GET,POST,OPTIONS', ?headers:String = 'Origin,Content-Type,Accept,Authorization,X-Request-With', ?credentials:Bool = true):Void {
		Web.setHeader('Access-Control-Allow-Origin', origin);
		Web.setHeader('Access-Control-Allow-Methods', methods);
		Web.setHeader('Access-Control-Allow-Headers', headers);
		Web.setHeader('Access-Control-Allow-Credentials', Std.string(credentials));
	}
	
	public function content(type:String):Void {
		if(!hasType){
			hasType = true;
			Web.setHeader('content-type:', type);
		}
	}
	
	public function setHTML():Void {
		content(HTML);
	}
	
	public function setJSON(?data:Dynamic, ?encode:Bool):Void {
		content(JSON);
		if (data != null) {
			var data:String = Json.stringify(data);
			if (encode) data = Criptog.encodeBase64(data);
			Lib.print(data);
		}
	}
	
	public function setTEXT():Void {
		content(TEXT);
	}
	
}