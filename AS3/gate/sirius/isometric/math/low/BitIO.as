package gate.sirius.isometric.math.low {
	
	
	/**
	 * ...
	 * @author asdasd
	 */
	public class BitIO {
		
		public static const OR:uint = 0;
		
		public static const NOT:uint = 1;
		
		public static const AND:uint = 2;
		
		public static const XOR:uint = 3;
		
		public static const TOGGLE:uint = 4;
		
		internal static const IO:Vector.<Function> = Vector.<Function>([or, not, and, xor, toggle]);
		
		
		public static function or(hash:uint, ... bits:Array):uint {
			for each (var bit:uint in bits)
				hash = hash | bit;
			return hash;
		}
		
		
		public static function not(hash:uint, ... bits:Array):uint {
			for each (var bit:uint in bits)
				hash = hash & ~bit;
			return hash;
		}
		
		
		public static function and(hash:uint, ... bits:Array):uint {
			for each (var bit:uint in bits)
				hash = hash & bit;
			return hash;
		}
		
		
		public static function xor(hash:uint, ... bits:Array):uint {
			for each (var bit:uint in bits)
				hash = hash ^ bit;
			return hash;
		}
		
		
		public static function toggle(hash:uint, ... bits:Array):uint {
			for each (var bit:uint in bits)
				hash = test(hash, bit) ? unwrite(hash, bit) : write(hash, bit);
			return hash;
		}
		
		
		public static function test(hash:uint, value:uint):Boolean {
			return (hash & value) == value;
		}
		
		
		public static function getString(hash:uint, size:uint = 32):String {
			var v:String = hash.toString(2);
			while (v.length < size)
				v = "0" + v;
			return v;
		}
		
		
		public static function get test_OR(hash:uint, ... bits:Array):Boolean {
			for each (var bit:uint in bits) {
				if (test(hash, bit))
					return true;
			}
			return false;
		}
		
		
		public static function get test_AND(hash:uint, ... bits:Array):Boolean {
			for each (var bit:uint in bits) {
				if (!test(hash, bit))
					return false;
			}
			return true;
		}
	
	}

}