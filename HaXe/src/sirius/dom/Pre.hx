package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.dom.Pre")
class Pre extends Display{
	
	public static function get(q:String, ?h:IDisplay->Void):Pre {
		return cast Sirius.one(q,null,h);
	}
	
	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createPreElement();
		super(q,null,d);
	}
	
}