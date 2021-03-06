package jotun.net;

#if js
	import js.Browser;
	import js.html.Location;
	import jotun.data.DataCache;
	import jotun.data.IDataCache;
	import jotun.dom.Display;
	import jotun.tools.Utils;
#elseif php
	import php.Lib;
	import php.NativeArray;
	import php.Web;
	import jotun.net.IDomainData;
#end

import haxe.Json;
import haxe.io.Bytes;
import jotun.data.Fragments;
import jotun.data.IFragments;
import jotun.utils.Dice;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
class Domain implements IDomain {
	
	public var host:String;
	
	public var port:String;
	
	public var url:IFragments;
	
	#if js
		
		public var hash:IFragments;
		
		public var data:IDataCache;
		
	#elseif php
		
		public var data:IDomainData;
		
		public var input:Dynamic;
		
		public var server:String;
		
		public var client:String;
		
	#end
	
	public var file:String;
	
	public var params:Dynamic;
	
	public function new() {
		_parseURI();
	}
	
	private function _parseURI():Void {
		
		#if js
		
			var l:Location = Browser.window.location;
			host = l.hostname;
			port = l.port;
			hash = new Fragments(l.hash.substr(1), "/");
			params = Utils.getQueryParams(l.href);
			url = new Fragments(l.pathname, "/");
		
		#elseif php
		
			data = cast Lib.objectOfAssociativeArray(php.Syntax.codeDeref("$_SERVER"));
			port = data.SERVER_PORT;
			server = Web.getCwd();
			host = Web.getHostName();
			client = Web.getClientIP();
			
			var boundary:String = _getMultipartKey();
			
			if (data.CONTENT_TYPE == 'application/json'){
				input = Json.parse(php.Syntax.codeDeref("file_get_contents('php://input')"));
			}
			params = _getParams();
			
			if (boundary != null) {
				Reflect.deleteField(params, boundary);
				boundary = boundary.split("\r\n")[0];
				_getRawData(boundary, params);
			}
			
			url = new Fragments(data.SCRIPT_NAME, "/");
			
		#end
		
	}
	
	public function getFQDN(?len:Int = 2):String {
		var h:Array<String> = host.split('.');
		return h.splice(h.length - len, len).join('.');
	}
	
	#if js
		
		public function allocate(?expire:UInt = 30):IDataCache {
			if(data == null)
				data = new DataCache(host, '/', 86400 * expire);
			return data;
		}
		
		public function reload(?force:Bool=false):Void {
			Browser.window.location.reload(force);
		}
		
	#elseif php
		
		public function getRequestMethod():String {
			return data.REQUEST_METHOD.toUpperCase();
		}
		
		public function isRequestMethod(q:String):Bool {
			return getRequestMethod() == q.toUpperCase();
		}
		
		public function require(params:Array<String>):Bool {
			var r:Bool = true;
			Dice.Values(params, function(v:String) {
				r = Reflect.hasField(this.params, v);
				return !r;
			});
			return r;
		}
		
		/**
		 * Merge POST and GET parameters as one string vector
		 * @return
		 */
		private function _getParams():Dynamic {
			var a : NativeArray = php.Syntax.codeDeref("array_merge($_GET, $_POST)");
			if (php.Syntax.codeDeref("get_magic_quotes_gpc()")){
				php.Syntax.codeDeref("reset($a); while(list($k, $v) = each($a)) $a[$k] = stripslashes((string)$v)");
			}
			#if force_std_separator
				var h = Lib.objectOfAssociativeArray(a);
				var params = Web.getParamsString();
				if( params == "" )
					return h;
				for( p in ~/[;&]/g.split(params) ) {
					var a = p.split("=");
					var n = a.shift();
					Reflect.setField(h, StringTools.urlDecode(n),StringTools.urlDecode(a.join("=")));
				}
				return h;
			#else
				return Lib.objectOfAssociativeArray(a);
			#end
		}
		
		/**
		 * Parse Multipart/FormData raw data (properties only)
		 * @param	boundary
		 * @param	data
		 * @return
		 */
		private function _getRawData(boundary:String, ?data:Dynamic):Dynamic {
			if (data == null) {
				data = {};
			}
			var input:String = php.Syntax.codeDeref("file_get_contents('php://input')");
			var result:Array<String> = input.split(boundary);
			Dice.Values(result, function(v:String) {
				if (v == null || v.length == 0) {
					return;
				}
				if(v.indexOf("Content-Disposition: form-data;") < 30){
					var point:Array<String> = v.split("Content-Disposition: form-data; name=")[1].split("\r\n\r\n");
					var param:String = point[0].split("\"").join("");
					if (param.indexOf("Content-Type:") == -1) {
						var value:String = point[1].split("\r\n")[0];
						if (param.length > 0 && value.length > 0 && value != "null") {
							if (param.indexOf("[]") == -1){
								Reflect.setField(data, param, value);
							} else {
								if (!Reflect.hasField(data, param)) {
									Reflect.setField(data, param, []);
								}
								Reflect.field(data, param).push(value);
							}
						}
					}
				}
			});
			
			return data;
			
		}
		
		private function _getMultipartKey():String {
			if(isRequestMethod('POST')){
				var a : NativeArray = php.Syntax.codeDeref("$_POST");
				if (php.Syntax.codeDeref("get_magic_quotes_gpc()")){
					php.Syntax.codeDeref("reset($a); while(list($k, $v) = each($a)) $a[$k] = stripslashes((string)$v)");
				}
				var post = Lib.hashOfAssociativeArray(a);
				for (key in post.keys()) {
					if (key.indexOf("Content-Disposition:_form-data;_name") != -1)
						return key;
				}
			}
			return null;
		}
		
		public function parseFiles( onPart : String -> String -> Void, onData : Bytes -> Int -> Int -> Void ) : Void {
			var files:Dynamic = php.Syntax.codeDeref("$_FILES");
			if (!php.Syntax.codeDeref("isset({0})", files)){
				return;
			}
			var keys:Dynamic = php.Syntax.codeDeref("array_keys({0})", files);
			var parts : Array<String> = Lib.toHaxeArray(keys);
			for(part in parts) {
				var info : Dynamic = php.Syntax.codeDeref("$_FILES[$part]");
				var tmp : String = untyped info['tmp_name'];
				var file : String = untyped info['name'];
				var err : Int = untyped info['error'];
				if(err > 0) {
					switch(err) {
						case 1: throw "The uploaded file exceeds the max size of " + php.Syntax.codeDeref('ini_get({0})', 'upload_max_filesize');
						case 2: throw "The uploaded file exceeds the max file size directive specified in the HTML form (max is" + php.Syntax.codeDeref('ini_get({0})', 'post_max_size') + ")";
						case 3: throw "The uploaded file was only partially uploaded";
						case 4: continue; // No file was uploaded
						case 6: throw "Missing a temporary folder";
						case 7: throw "Failed to write file to disk";
						case 8: throw "File upload stopped by extension";
					}
				}
				onPart(part, file);
				if ("" != file)	{
					var h = php.Syntax.codeDeref("fopen({0},{1})", tmp, "r");
					var bsize = 8192;
					while (!php.Syntax.codeDeref("feof({0})", h)) {
						var buf : String = php.Syntax.codeDeref("fread({0},{1})", h, bsize);
						var size : Int = php.Syntax.codeDeref("strlen({0})", buf);
						onData(Bytes.ofString(buf), 0, size);
					}
					php.Syntax.codeDeref("fclose({0})", h);
				}
			}
			
		}
		
	#end
	
}