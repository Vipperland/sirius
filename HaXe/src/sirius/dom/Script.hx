package sirius.dom;
import js.Browser;
import js.html.ScriptElement;
import sirius.dom.IDisplay;
import sirius.events.IEvent;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("sru.dom.Script")
class Script extends Display {
	
	static public function get(q:String):Script {
		return cast Sirius.one(q);
	}
	
	/**
	 * Load a list of Script elements and append its to document.head
	 * @param	url
	 * @param	handler
	 */
	static public function require(url:Dynamic, ?handler:Void->Void) {
		if (!Std.is(url, Array)){
			url = [url];
		}
		if (url.length > 0) {
			var file:String = url.shift();
			if (file != null) {
				var s:Script = new Script();
				Sirius.document.head.addChild(s);
				s.src(file, function(e:IEvent) {
					Script.require(url, handler);
				});
			}
		}else if(handler != null){
			handler();
		}
	}
	
	public var object:ScriptElement;
	
	public function new(?q:Dynamic) {
		if (q == null) q = Browser.document.createScriptElement();
		super(q, null);
		object = cast element;
	}
	
	public function type(q:String):IDisplay {
		object.type = q;
		return this;
	}
	
	public function src(url:String, ?handler:IEvent->Void):Void {
		object.src = url;
		if (handler != null) {
			events.load(handler, 1);
		}
	}
	
	public function async():Void {
		object.async = true;
	}
	
	override public function writeText(q:Dynamic):IDisplay {
		this.object.text = q;
		return this;
	}
	
	override public function appendText(q:Dynamic):IDisplay {
		this.object.text = this.object.text + q;
		return this;
	}
	
	override public function writeHtml(q:Dynamic):IDisplay {
		this.object.text = q;
		return this;
	}
	
	override public function appendHtml(q:Dynamic):IDisplay {
		this.object.text = this.object.text + q;
		return this;
	}
	
}