package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.dom.H5")
class H5 extends Display {

	static public function get(q:String):H5 {
		return cast Sirius.one(q);
	}
	
	public function new(?q:Dynamic) {
		if (q == null) q = Browser.document.createElement("h5");
		super(q,null);
	}
	
}