package jotun.php.db.tools;
import jotun.php.db.objects.IDataTable;
import jotun.php.db.tools.ICommand;

/**
 * @author Rafael Moreira
 */

interface IQueryBuilder {
	
	/**
	 * Add a new entry to the table
	 * @param	table
	 * @param	parameters
	 * @return
	 */
	public function add (table:String, ?parameters:Dynamic) : ICommand;

	/**
	 * Find any value in any table
	 * @param	fields
	 * @param	table
	 * @param	clause
	 * @param	order
	 * @param	limit
	 * @return
	 */
	public function find (fields:Dynamic, table:Dynamic, ?clause:Dynamic, ?order:Dynamic, ?limit:String) : IExtCommand;

	/**
	 * Update an entry
	 * @param	table
	 * @param	clause
	 * @param	parameters
	 * @param	order
	 * @param	limit
	 * @return
	 */
	public function update (table:String, ?clause:Dynamic, ?parameters:Dynamic, ?order:Dynamic, ?limit:String) : ICommand;

	/**
	 * Delete an entry
	 * @param	table
	 * @param	clause
	 * @param	order
	 * @param	limit
	 * @return
	 */
	public function delete (table:String, ?clause:Dynamic, ?order:Dynamic, ?limit:String) : ICommand;
	
	/**
	 * Duplicate an entry to same or another table
	 * @param	from
	 * @param	to
	 * @param	clause
	 * @param	filter
	 * @param	limit
	 * @return
	 */
	public function copy(from:String, to:String, ?clause:Dynamic, ?filter:Dynamic->Dynamic, ?limit:String):Array<Dynamic>;
	
	/**
	 * Create a Foreign Key
	 * @param	table
	 * @param	name
	 * @param	key
	 * @param	target
	 * @param	field
	 * @param	delete
	 * @param	update
	 * @return
	 */
	public function fKey(table:String, name:String, ?key:String, ?target:String, ?field:String, ?delete:String = 'RESTRICT', ?update:String = 'RESTRICT'):ICommand;
	
	/**
	 * Empty all table data
	 * @return
	 */
	public function truncate(table:String):ICommand;
	
	/**
	 * Rename table
	 * @param	name
	 * @param	to
	 */
	public function rename(name:String, to:String):ICommand;
	
	/**
	 * 
	 * @param	table
	 * @param	name
	 * @param	parameters
	 * @param	clause
	 * @return
	 */
	public function join(table:Dynamic, ?name:String, ?clause:Dynamic):String;
	
	/**
	 * 
	 * @param	table
	 * @param	name
	 * @param	clause
	 * @return
	 */
	public function leftJoin(table:Dynamic, ?name:String, ?clause:Dynamic):String;
	
	/**
	 * 
	 * @param	table
	 * @param	name
	 * @param	clause
	 * @return
	 */
	public function outerJoin(table:Dynamic, ?name:String, ?clause:Dynamic):String;
	
	/**
	 * 
	 * @param	table
	 * @param	name
	 * @param	clause
	 * @return
	 */
	public function leftOuterJoin(table:Dynamic, ?name:String, ?clause:Dynamic):String;
	
	/**
	 * 
	 * @param	table
	 * @param	name
	 * @param	clause
	 * @return
	 */
	public function rightOuterJoin(table:Dynamic, ?name:String, ?clause:Dynamic):String;
	
	/**
	 * 
	 * @param	table
	 * @param	name
	 * @param	clause
	 * @return
	 */
	public function fullOuterJoin(table:Dynamic, ?name:String, ?clause:Dynamic):String;
	
}
