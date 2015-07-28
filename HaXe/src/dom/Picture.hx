package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira
 */
@:expose("sru.dom.Picture")
class Picture extends Display{

	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createPictureElement();
		super(q,null,d);
	}
	
}