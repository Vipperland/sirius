package sirius.modules;
import haxe.Json;
import haxe.Log;
import sirius.utils.Dice;
import sirius.utils.Filler;

#if js
	import sirius.dom.IDisplay;
	import sirius.dom.Display;
	import sirius.Sirius;
#elseif php
	import php.Lib;
	import sys.FileSystem;
	import sys.io.File;
	import sirius.php.Sirius;
#end

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
class ModLib {
	
	private static var CACHE:Dynamic = { };
	
	static public function exists(module:String):Bool {
		return Reflect.hasField(CACHE, module);
	}
	
	static public function register(file:String, content:String):Void {
		content = content.split("[module:{").join("[!MOD!]");
		content = content.split("[Module:{").join("[!MOD!]");
		var sur:Array<String> = content.split("[!MOD!]");
		if(sur.length > 1){
			Dice.All(sur, function(p:Int, v:String) {
				if(p > 0){
					var i:Int = v.indexOf("}]");
					if (i != -1) {
						var mod:IMod = Json.parse("{" + v.substr(0, i) + "}");
						if (mod.name == null) mod.name = file;
						Sirius.log("Sirius->ModLib.build[ " + mod.name + " ]", 10, 1);
						var end:Int = v.indexOf(";;;");
						content = v.substring(i + 2, end == -1 ? v.length : end);
						if (mod.require != null) {
							var dependencies:Array<String> = mod.require.split(";");
							Sirius.log("	Sirius->ModLib::dependencies [ FOR " + mod.name + " ]", 10, 1);
							Dice.Values(dependencies, function(v:String) {
								var set:String = Reflect.field(CACHE, v);
								if (set == null) {
									Sirius.log("		Sirius->ModLib::dependency[ MISSING " + v + " ]", 10, 2);
								}else {
									Sirius.log("		Sirius->ModLib::dependency[ OK " + v + " ]", 10, 1);
									content = content.split("<import " + v + "/>").join(set);
								}
							});
						}
						#if js
							// ============================= JS ONLY =============================
							if (mod.target != null) {
								var t:IDisplay = Sirius.one(mod.target);
								if (t != null) {
									t.addChild(build(mod.name));
								}
							}
							// ***
						#end
						Reflect.setField(CACHE, mod.name, content);
					}else {
						Sirius.log("	Sirius->ModLib::status [ MISSING MODULE END IN " + file + "("  + v.substr(0, 15) + "...) ]", 10, 3);
					}
			}
			});
		}else {
			Reflect.setField(CACHE, file, content);
		}
	}
	
	static public function get(name:String, ?data:Dynamic):String {
		if (!ModLib.exists(name)) return "<span style='color:#ff0000;font-weight:bold;'>Undefined Module::" + name + "</span><br/>";
		var content:String = Reflect.field(CACHE, name);
		return (data != null) ? Filler.to(content, data) : content;

	}
	
	static public function fill(module:String, data:Dynamic, ?sufix:String = null):String {
		return Filler.to(get(module), data, sufix);
	}
	
	#if php
	
		// ============================= PHP ONLY =============================
		static public function prepare(file:String):Bool {
			if (file != null && FileSystem.exists(file)) {
				ModLib.register(file, File.getContent(file));
				return true;
			}
			return false;
		}
		
		static public function print(name:String, ?data:Dynamic, ?repeat:Bool, ?sufix:String = null):Void {
			if (repeat) {
				var module:String = get(name);
				Dice.Values(data, function(v:Dynamic) {
					Lib.print(Filler.to(module, v, sufix));
				});
			}else {
				Lib.print(get(name, data));
			}
		}
		
	#elseif js
		
		// ============================= JS ONLY =============================
		static public function build(module:String, ?data:Dynamic):IDisplay {
			return new Display().build(get(module, data));
		}
		
		// ***
		
	#end;
	
}