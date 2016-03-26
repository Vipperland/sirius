package sirius.dom;
import js.Browser;
import js.html.OptionElement;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.dom.Option")
class Option extends Display{
	
	public static function get(q:String, ?h:IDisplay->Void):Option {
		return cast Sirius.one(q,null,h);
	}
	
	public var object:OptionElement;
	
	public function new(?q:Dynamic) {
		if (q == null) q = Browser.document.createOptionElement();
		super(q, null);
		object = cast element;
	}
	
	public function value():String {
		return object.value;
	}
	
}