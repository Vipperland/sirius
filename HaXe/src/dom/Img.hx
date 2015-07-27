package sirius.dom;
import js.Browser;
import js.html.ImageElement;

/**
 * ...
 * @author Rafael Moreira
 */
@:expose("sru.dom.Img")
class Img extends Display{
	
	public var object:ImageElement;
	
	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createImageElement();
		super(q, null, d);
		object = cast Self;
	}
	
	public function src(value:String):String {
		var a:ImageElement;
		if (value != null) object.src = value;
		return object.src;
	}
	
	public function alt(value:String):String {
		if (value != null) object.alt = value;
		return object.alt;
	}
	
}