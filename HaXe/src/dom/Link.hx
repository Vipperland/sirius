package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira
 */
@:expose("sru.dom.Link")
class Link extends Display{

	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createLinkElement();
		super(q,null,d);
	}
	
}