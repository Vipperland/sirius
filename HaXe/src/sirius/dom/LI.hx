package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.dom.LI")
class LI extends Display{
	
	static public function get(q:String):LI {
		return cast Sirius.one(q);
	}
	
	public function new(?q:Dynamic) {
		if (q == null) q = Browser.document.createLIElement();
		super(q,null);
	}
	
}