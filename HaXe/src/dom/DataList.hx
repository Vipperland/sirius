package sirius.dom;
import js.Browser;

/**
 * ...
 * @author Rafael Moreira
 */
@:expose("sru.dom.DataList")
class DataList extends Display{

	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createDataListElement();
		super(q,null,d);
	}
	
}