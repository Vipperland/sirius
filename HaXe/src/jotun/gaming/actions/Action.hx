package jotun.gaming.actions;
import jotun.objects.QueryGroup;
import jotun.gaming.actions.ActionQuery;
import jotun.gaming.actions.Requirement;
import jotun.tools.Key;
import jotun.tools.Utils;
import jotun.utils.Dice;

/**
 * ...
 * @author Rim Project
 */
@:expose("jtn.game.Action")
class Action extends Resolution {
	
	public static var commands:QueryGroup = new QueryGroup();
	
	public var requirements:Array<Requirement>;
	
	public var target:Int;
	
	public function new(type:String, data:Dynamic) {
		super(type, data);
		// Construct Requirement Objects
		requirements = [];
		var i:Int = 0;
		Dice.All(data.requirements, function(p:Dynamic, v:Dynamic){
			if (Std.is(v, Requirement)){
				requirements[i] = cast v;
			}else{
				requirements[i] = new Requirement(type + '[' + p + ']', v);
			}
			++i;
		});
		// Required condition resolution
		target = Utils.isValid(data.target) ? Std.int(data.target) : (requirements.length == 0 ? 0 : 1);
	}
	
	public function run(context:IEventContext):Bool {
		// Check requirements
		var resolution:Int = 0;
		++context.ident;
		Dice.Values(requirements, function(r:Requirement){
			var result:Bool = r.verify(context);
			if (result){
				++resolution;
				return r.cancelOnSuccess;
			}else{
				--resolution;
				return r.cancelOnFail;
			}
		});
		--context.ident;
		// resolution
		var success:Bool = (target == 0) || (target > 0 && resolution >= target) || (target < 0 && resolution <= target);
		if (context.debug){
			_log(this, context, success, resolution);
		}
		if (success){
			if(Utils.isValid(query)){
				commands.run(query);
			}
		}
		return resolve(success, context);
	}

	private static function _log(evt:Action, context:IEventContext, success:Bool, score:Int):Void {
		var s:String = "";
		while (s.length < context.ident){
			s += '	';
		}
		context.log.push(s + "↑ ACTION " + evt._type + " " + (success ? "SUCCESS" : "FAIL") + " score:" + score + '/' + evt.target);
	}
	
}