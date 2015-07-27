package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira
 */
@:expose("sru.dom.Menu")
class Menu extends Display{

	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createMenuElement();
		super(q,null,d);
	}
	
}