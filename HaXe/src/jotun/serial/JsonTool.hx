﻿package jotun.serial;
import jotun.tools.Flag;

/**
 * ...
 * @author Rafael Moreira <rafael@gateofsirius.com>
 */
@:expose('J_Json')
class JsonTool {
	
	
	static public var customReplacer:Dynamic->Dynamic->Dynamic = function (a:Dynamic, b:Dynamic):Dynamic { 
		if (Std.is(a, String)) {
			if (a.substr(0, 1) == "_") return null;
		}
		if (Std.is(b, Flag)) return b.value;
		return (b == null) ? null : b; 
	};
	
	static public function stringify(o:Dynamic, ?replacer:Dynamic -> Dynamic -> Dynamic, ?space:String) : String {
		var printer = new JsonTool(replacer != null ? replacer : customReplacer, space);
		printer.write("", o);
		return printer.buf.toString();
	}

	var buf : #if flash flash.utils.ByteArray #else StringBuf #end;
	var replacer : Dynamic -> Dynamic -> Dynamic;
	var indent:String;
	var pretty:Bool;
	var nind:Int;

	function new(replacer:Dynamic -> Dynamic -> Dynamic, space:String) {
		this.replacer = replacer;
		this.indent = space;
		this.pretty = space != null;
		this.nind = 0;

		#if flash
		buf = new flash.utils.ByteArray();
		buf.endian = flash.utils.Endian.BIG_ENDIAN;
		buf.position = 0;
		#else
		buf = new StringBuf();
		#end
	}

	inline function ipad ():Void {
		if (pretty) add(StringTools.lpad('', indent, nind * indent.length));
	}

	inline function newl ():Void {
		if (pretty) addChar('\n'.code);
	}

	function write(k:Dynamic, v:Dynamic) {
		if (replacer != null) v = replacer(k, v);
		switch( Type.typeof(v) ) {
			case TUnknown:				objString(v);
			case TObject:				objString(v);
			case TInt:					add(v);
			case TFloat:				add(Math.isFinite(v) ? v : 'null');
			case TFunction:				add('"<fun>"');
			case TClass(c):
				if( c == String )
					quote(v);
				else if( c == Array ) {
					var v : Array<Dynamic> = v;
					addChar('['.code);
					var len = v.length;
					var last = len - 1;
					for (i in 0...len)
					{
						if (i > 0) addChar(','.code) else nind++;
						newl();
						ipad();
						write(i, v[i]);
						if (i == last)
						{
							nind--;
							newl();
							ipad();
						}
					}
					addChar(']'.code);
				} else if( c == haxe.ds.StringMap ) {
					var v : haxe.ds.StringMap<Dynamic> = v;
					var o = {};
					for( k in v.keys() )
						Reflect.setField(o,k,v.get(k));
					objString(o);
				} else if( c == Date ) {
					var v : Date = v;
					quote(v.toString());
				} else
					#if flash
					classString(v);
					#else
					objString(v);
					#end
			case TEnum(_):				var i : Dynamic = Type.enumIndex(v);
				add(i);
			case TBool:					add(#if php (v ? 'true' : 'false') #else v #end);
			case TNull:					add('null');
		}
	}

	@:extern inline function addChar(c:Int) {
		#if flash
		buf.writeByte(c);
		#else
		buf.addChar(c);
		#end
	}

	@:extern inline function add(v:String) {
		#if flash
		// argument is not always a string but will be automatically casted
		buf.writeUTFBytes(v);
		#else
		buf.add(v);
		#end
	}

	#if flash
	function classString ( v : Dynamic ) {
		fieldsString(v,Type.getInstanceFields(Type.getClass(v)));
	}
	#end

	inline function objString( v : Dynamic ) {
		fieldsString(v,Reflect.fields(v));
	}

	function fieldsString( v : Dynamic, fields : Array<String> ) {
		addChar('{'.code);
		var len = fields.length;
		var last = len - 1;
		var first = true;
		for( i in 0...len ) {
			var f = fields[i];
			var value = Reflect.field(v,f);
			if ( value == null ) continue;
			if ( Reflect.isFunction(value) ) continue;
			if ( Std.is(f, String) && f.substr(0, 1) == "_") continue;
			if( first ) { nind++; first = false; } else addChar(','.code);
			newl();
			ipad();
			quote(f);
			addChar(':'.code);
			if (pretty) addChar(' '.code);
			write(f, value);
			if (i == last)
			{
				nind--;
				newl();
				ipad();
			}
		}
		addChar('}'.code);
	}

	function quote( s : String ) {
		#if (neko || php || cpp)
		var us:UnicodeString = new UnicodeString(s);
		if( s.length != us.length ) {
			quoteUtf8(s);
			return;
		}
		#end
		addChar('"'.code);
		var i = 0;
		while( true ) {
			var c = StringTools.fastCodeAt(s, i++);
			if( StringTools.isEof(c) ) break;
			switch( c ) {
			case '"'.code: add('\\"');
			case '\\'.code: add('\\\\');
			case '\n'.code: add('\\n');
			case '\r'.code: add('\\r');
			case '\t'.code: add('\\t');
			case 8: add('\\b');
			case 12: add('\\f');
			default:
				#if flash
				if( c >= 128 ) add(String.fromCharCode(c)) else addChar(c);
				#else
				addChar(c);
				#end
			}
		}
		addChar('"'.code);
	}

	#if (neko || php || cpp)
	function quoteUtf8( s : String ) {
		var u:UnicodeString = new UnicodeString(s);
		buf.add('"');
		buf.add(u.toString());
		buf.add('"');
	}
	#end
}
