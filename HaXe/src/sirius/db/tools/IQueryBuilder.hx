package sirius.db.tools;
import sirius.db.tools.ICommand;

/**
 * @author Rafael Moreira
 */

interface IQueryBuilder {
	
	/**
	 * Add a new entry to the table
	 * @param	table
	 * @param	clause
	 * @param	parameters
	 * @param	order
	 * @param	limit
	 * @return
	 */
	public function add (table:String, ?clause:Dynamic, ?parameters:Dynamic, ?order:Dynamic, ?limit:String) : ICommand;

	/**
	 * Find any value in any table
	 * @param	fields
	 * @param	table
	 * @param	clause
	 * @param	order
	 * @param	limit
	 * @return
	 */
	public function find (fields:Dynamic, table:String, ?clause:Dynamic, ?order:Dynamic, ?limit:String) : ICommand;

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
	public function copy(from:String, to:String, ?clause:Dynamic, ?filter:Dynamic->Dynamic, ?limit:String):ICommand;
	
	/**
	 * Clear all table data
	 * @return
	 */
	public function truncate(table:String):ICommand;

}
