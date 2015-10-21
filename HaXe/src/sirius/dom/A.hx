package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.dom.A")
class A extends Display{
	
	public static function get(q:String, ?h:IDisplay->Void):A {
		return cast Sirius.one(q,null,h);
	}
	
	public function new(?q:Dynamic) {
		if (q == null) q = Browser.document.createAnchorElement();
		super(q,null);
	}
	
	public function href(url:String):String {
		return attribute('href', url);
	}
	
}