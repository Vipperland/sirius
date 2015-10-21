package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.dom.Link")
class Link extends Display{
	
	public static function get(q:String, ?h:IDisplay->Void):Link {
		return cast Sirius.one(q,null,h);
	}
	
	public function new(?q:Dynamic) {
		if (q == null) q = Browser.document.createLinkElement();
		super(q,null);
	}
	
}