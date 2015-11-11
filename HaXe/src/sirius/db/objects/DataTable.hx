package sirius.db.objects;
import sirius.db.tools.ICommand;
import sirius.utils.Dice;

/**
 * ...
 * @author Rafael Moreira
 */
class DataTable implements IDataTable {
	
	private var _name:String;
	
	private var _gate:IGate;
	
	private var _description:Dynamic;
	
	private var _fields:Dynamic;
	
	public var description(get, null):Array<Dynamic>;
	private function get_description():Array<Dynamic> {
		if (_description == null) {
			_description = { };
			var r:Array<Dynamic> = _gate.schemaOf(_name).execute().result;
			Dice.Values(r, function(v:Dynamic) { Reflect.setField(_description, v.COLUMN_NAME, new Column(v)); });
		}
		return _description;
	}
	
	public var name(get, null):String;
	private function get_name():String { return _name; }

	public function new(name:String, gate:IGate) {
		_gate = gate;
		_name = name;
		_fields = "*";
	}
	
	public function restrict(fields:Dynamic):IDataTable {
		_fields = fields;
		return this;
	}
	
	public function create (?parameters:Dynamic = null, ?clausule:Dynamic = null, ?order:Dynamic = null, ?limit:String = null) : IQueryResult {
		return new QueryResult(_gate.builder.create(_name, clausule, parameters, order, limit).execute().result);
	}

	public function findAll (?clausule:Dynamic=null, ?order:Dynamic=null, ?limit:String=null) : IQueryResult {
		return new QueryResult(_gate.builder.find(_fields, _name, clausule, order, limit).execute().result);
	}

	public function findOne (?clausule:Dynamic=null) : Dynamic {
		return new QueryResult(_gate.builder.find(_fields, _name, clausule, null, Limit.MAX(1)).execute().result).first();
	}

	public function update (?parameters:Dynamic=null, ?clausule:Dynamic=null, ?order:Dynamic=null, ?limit:String=null) : IQueryResult {
		return new QueryResult(_gate.builder.update(_name, clausule, parameters, order, limit).execute().result);
	}

	public function delete (?clausule:Dynamic=null, ?order:Dynamic=null, ?limit:String=null) : IQueryResult {
		return new QueryResult(_gate.builder.delete(_name, clausule, order, limit).execute().result);
	}
	
	public function getErrors():Dynamic {
		return _gate.errors;
	}
	
}