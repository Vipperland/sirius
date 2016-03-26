package sirius.modules;
import sirius.errors.IError;
import sirius.errors.Error;
import sirius.net.HttpRequest;
import sirius.signals.ISignals;

#if js
	import sirius.dom.IDisplay;
#end

/**
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */

interface ILoader {
	
	/**
	 * Last error info
	 */
	public var lastError:IError;
	
	/**
	 * Total files in queue
	 */
	public var totalFiles:Int;
	
	/**
	 * Total of loaded files
	 */
	public var totalLoaded:Int;
	
	/**
	 * Loader signals
	 */
	public var signals:ISignals;
	
	/**
	 * Total Load Progress
	 * @return
	 */
	public function progress():Float;
	
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
		public function build (module:String, ?data:Dynamic = null, ?each:IDisplay->IDisplay = null) : IDisplay;
		
	#end
	
	/**
	 * Load a module not in queue
	 * @param	file
	 * @param	target *js only
	 * @param	data
	 * @param	handler
	 */
	public function async(file:String, #if js ?target:Dynamic, #end ?data:Dynamic, ?handler:String->String->Void):Void;
	
	/**
	 * Load a list of files
	 * @param	files
	 * @param	complete
	 * @param	error
	 * @return
	 */
	public function add (files:Array<String>):ILoader;
	
	/**
	 * Init Loader proccess
	 * @return
	 */
	public function start () : ILoader;
	
	/**
	 * Call a url
	 * @param	url
	 * @param	data
	 * @param	handler
	 * @param	method
	 */
	public function request(url:String, ?data:Dynamic, ?handler:IRequest->Void, ?method:String = 'POST'):Void;


}