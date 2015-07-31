package sirius.modules;

#if js
	import sirius.dom.IDisplay;
#end

/**
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */

interface ILoader {
	
	/**
	 * Read the content of an loaded module
	 */
	public function get (module:String, ?data:Dynamic = null) : String;
	
	#if js
	
		/**
		 * Draws a module in a DOMElement
		 * @param	module
		 * @param	data
		 * @return
		 */
		public function build (module:String, ?data:Dynamic = null) : IDisplay;
	
	#end
	
	/**
	 * Load a list of files
	 * @param	files
	 * @param	complete
	 * @param	error
	 * @return
	 */
	public function add (files:Array<String>, ?complete:Dynamic, ?error:Dynamic):ILoader;
	
	/**
	 * Init Loader proccess
	 * @return
	 */
	public function start():ILoader;

}