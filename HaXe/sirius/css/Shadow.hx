package sirius.css;
import haxe.Log;
import sirius.math.ARGB;
import sirius.utils.Dice;

/**
 * ...
 * @author Rafael Moreira <rafael@gateofsirius.com>
 */
@:expose("sru.css.Shadow")
class Shadow extends CSS {
	
	private static var _active:Bool = false;
	
	public function create(name:String, color:Dynamic):Void {
		var t:ARGB = (!Std.is(color, ARGB)) ? new ARGB(color) : color;
		var tbody:String = "0 1px 0 " + t.range(.8).html() + ",0 2px 0 " + t.range(.7).html() + ",0 3px 0 " + t.range(.5).html() + ",0 4px 0 " + t.range(.4).html() + ",0 5px 0 " + t.range(.3).html() + ",0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);";
		setSelector(".tshad-" + name, "text-shadow: " + tbody);
		setSelector(".bshad-" + name, "box-shadow: " + tbody);
	}
	
	public function new() {
		super(false);
		if (!_active) {
			_active = true;
			_parse();
		}
	}
	
	private function _parse():Void {
		Dice.All(Color.COLORS, function(p:String, v:Dynamic) {
			create(p, new ARGB(v.color));
		});
	}
	
}