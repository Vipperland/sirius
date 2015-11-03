package sirius.net;
import php.Lib;
import php.NativeArray;
import sirius.data.IFragments;
import sirius.net.IDomainData;
import sirius.utils.Dice;

/**
 * @author Rafael Moreira
 */

interface IDomain {
  
	public var host : String;
	
	public var port : String;
	
	public var url : IFragments;
	
	#if js
		
		public var hash : IFragments;
		
	#elseif php
		
		public var data:IDomainData;
		
		public var server:String;
		
		public var client:String;
		
	#end
	
	public var file:String;
	
	public var params:Dynamic;

	#if js
		
		public function reload (?force:Bool = false) : Void;
		
	#elseif php
		
		public function require(params:Array<String>) : Bool;
		
	#end
	
}