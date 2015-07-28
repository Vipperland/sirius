package sirius.dom;
import haxe.Log;
import js.Browser;
import js.html.FormElement;
import sirius.data.FormData;
import sirius.events.Dispatcher;
import sirius.utils.ITable;

/**
 * ...
 * @author Rafael Moreira
 */
@:expose("sru.dom.Form")
class Form extends Display {
	
	private var _submit:Input;
	
	public var object:FormElement;
	
	public var inputData:FormData;
	
	public function new(?q:Dynamic, ?d:String = null) {
		if (q == null) q = Browser.document.createFormElement();
		super(q, null, d);
		object = cast Self;
	}
	
	public function validate():Bool {
		checkSubmit().object.click();
		return object.checkValidity();
	}
	
	public function checkSubmit():Input {
		if(_submit == null) {
			var i:Input;
			if (!exists("input[type=submit]")) {
				i = new Input();
				i.type("submit");
				i.hide();
				this.addChild(i);
			}else {
				i = cast one("input[type=submit]");
			}
			_submit = i;
		}
		return _submit;
	}
	
	public function submit():Void {
		object.submit();
	}
	
	public function formData():FormData {
		if (inputData == null) inputData = new FormData(this);
		else inputData.from(this);
		return inputData;
	}
	
	public function getAsInput(i:Int, ?update:Bool):Input {
		if (children == null || update == true) children = all();
		return cast children.obj(i);
	}
	
}