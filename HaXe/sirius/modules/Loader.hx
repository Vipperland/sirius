package sirius.modules;
import haxe.Http;
import sirius.modules.ModLib;

#if js
	import sirius.dom.IDisplay;
#end

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.modules.Loader")
class Loader implements ILoader {
	
	private static var FILES:Dynamic = { };
	
	private var _toload:Array<String> = [];
	private var _complete:Dynamic;
	private var _isBusy:Bool;
	private var _error:Dynamic;
	private var _noCache:Bool;
	
	public function new(?noCache:Bool = false){
		_noCache = noCache;
	}
	
	public function add(files:Array<String>, ?complete:Dynamic, ?error:Dynamic):ILoader {
		if(_error != null) _error = error;
		if (complete != null) _complete = complete;
		if (files != null && files.length > 0) _toload = _toload.concat(files);
		return this;
	}
	
	public function start():ILoader {
		if (!_isBusy) {
			_isBusy = true;
			_loadNext();
		}
		return this;
	}
	
	private function _loadNext():Void {
		if (_toload.length > 0) {
			var f:String = _toload.shift();
			var r:Http = new Http(f + (_noCache ? "" : "?t=" + Date.now().getTime()));
			#if js
				r.async = true;
			#end
			r.onError = function(e) {
				if (_error != null) {
					_error(e);
				}
				_loadNext();
			}
			r.onData = function(d) {
				ModLib.register(f, d);
				_loadNext();
			}
			r.request(false);
		}else {
			_isBusy = false;
			if (_complete != null) {
				_complete(this);
			}
		}
	}
	
	#if js
	
		public function build(module:String, ?data:Dynamic):IDisplay {
			return ModLib.build(module, data);
		}
		
	#end
	
	public function get(module:String, ?data:Dynamic):String {
		return ModLib.get(module, data);
	}
	
}


/*
	[Module:{
		"name"		:"testModule",				// Unique module identifier
		"target"		:"selector",					// Auto append module in target selector
		"require"	:"modA;modB;...;modN",			// Dependencies that will be writed in module
		"filler"		:"myFunctionName",			// Call this function and write returned data in module
		"repeat"		: true | false				// Repeat module structure for each property in filler result
	}]
*/