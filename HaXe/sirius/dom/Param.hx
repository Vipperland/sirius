package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.dom.Param")
class Param extends Display{

	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createParamElement();
		super(q,null,d);
	}
	
}