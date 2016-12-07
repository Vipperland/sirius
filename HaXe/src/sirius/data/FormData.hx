package sirius.data;
import sirius.data.FormParam;
import sirius.data.IFormData;
import sirius.dom.IDisplay;
import sirius.net.IRequest;
import sirius.utils.Dice;
import sirius.utils.IDiceRoll;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose('sru.data.FormData')
class FormData implements IFormData {
	
	private var _form:IDisplay;
	
	public var params:Array<FormParam>;
	
	public var errors:Array<FormParam>;
	
	/**
	 * Create a new Instance of FormData
	 * form-data			Target param for form
	 * form-required			
	 * form-message			
	 * form-persistent		
	 * @param	target
	 */
	public function new(?target:Dynamic) {
		if (target != null) {
			if(Std.is(target, String))		scan(Sirius.one(target));
			if(Std.is(target, IDisplay))	scan(target);
		}
	}
	
	public function reset():IFormData {
		params = [];
		return this;
	}
	
	public function scan(?target:IDisplay):IFormData {
		reset();
		_form = target == null ? Sirius.document.body : target;
		target.all("[form-data]").each(function(el:IDisplay) { params[params.length] = new FormParam(el); });
		return this;
	}
	
	public function valueOf(p:String):FormParam {
		var res:IDiceRoll = Dice.Values(params, function(v:FormParam) {	return v.getName() == p; } );
		return cast res.value; 
	}
	
	public function isValid(?needAll:Bool):Bool {
		errors = [];
		Dice.Values(params, function(v:FormParam) {	if (!v.isValid(needAll)) errors[errors.length] = v; });
		return errors.length == 0;
	}
	
	public function getParam(p:String):FormParam {
		var res:IDiceRoll = Dice.Values(params, function(v:FormParam) {	return v.getName() == p; });
		return cast res.value;
	}
	
	public function getData(?append:Dynamic):Dynamic {
		var d:Dynamic = append == null ? {} : append;
		Dice.Values(params, function(v:FormParam) {	return Reflect.setField(d, v.getName(), v.getValue()); } );
		return d;
	}
	
	public function clear():IFormData {
		Dice.Values(params, function(v:FormParam) {	v.clear(); });
		return this;
	}
	
	public function send(url:String, ?handler:IRequest->Void, method:String = 'post'):Void {
		Sirius.request(url, getData(), handler, method);
	}
	
	public function match(a:String, b:String):Bool {
		return getParam(a).getValue() == getParam(b).getValue();
	}
	
}