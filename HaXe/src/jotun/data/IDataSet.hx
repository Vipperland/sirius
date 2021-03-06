package jotun.data;

/**
 * @author Rafael Moreira
 */

interface IDataSet {
	
	/** Get property */
	public function get (p:Dynamic) : Dynamic;

	/** Set property */
	public function set (p:Dynamic, v:Dynamic) : IDataSet;
	
	/** Delete property */
	public function unset(p:Dynamic):IDataSet;

	/** Check if property exists */
	public function exists (p:Dynamic) : Bool;
	
	/** Remove all added properties */
	public function clear () : IDataSet;
	
	/** Find all properties with contains a value */
	public function find (v:Dynamic) : Array<Dynamic>;
	
	/** All indexes names */
	public function index () : Array<String>;

	/** A vector from all values */
	public function values () : Array<Dynamic>;
	
	/** Filter all values and create a new DataSet */
	public function filter(p:Dynamic,?handler:Dynamic) : IDataSet;
	
	/** Shortcut to Dice.All(thisDataSet,handler) */
	public function each(handler:Dynamic):Void;
	
	/** Inner data content */
	public function data():Dynamic;
	
}