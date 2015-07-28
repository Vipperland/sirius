package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira
 */
@:expose("sru.dom.H2")
class H2 extends Display{

	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createElement("h2");
		super(q,null,d);
	}
	
}