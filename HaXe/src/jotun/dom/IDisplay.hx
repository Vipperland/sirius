package jotun.dom;

import haxe.ds.Either;
import jotun.dom.IDisplay;
import jotun.events.IDispatcher;
import jotun.math.IPoint;
import jotun.net.IProgress;
import jotun.net.IRequest;
import jotun.objects.IQuery;
import jotun.objects.IResolve;
import jotun.utils.ITable;
import js.html.CSSStyleDeclaration;
import js.html.DOMRect;
import js.html.Element;
import js.html.File;
import js.html.FileList;

/**
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */

interface IDisplay extends IQuery {
	
	/**
	 * Default target element
	 */
	public var element : Element;
	
	/**
	 * Custom Event Dispatcher
	 */
	public var events : IDispatcher;
	
	/**
	 * Check if a selector exists
	 * @return
	 */
	public function exists(q:String):Bool;
	
	/**
	 * Query select on children
	 * @param	q
	 * @return
	 */
	public function all(q:String):ITable;
	
	/**
	 * Get first child element
	 * @param	q
	 * @return
	 */
	public function one(q:String):IDisplay;
	
	/**
	 * Get all child elements
	 * @return
	 */
	public function children():ITable;
	
	/**
	 * Enable Interactions
	 */
	public function enable():Void;
	
	/**
	 * Disable Interactions
	 */
	public function disable():Void;
	
	/**
	 * Add custom classes from string
	 * @param	styles
	 * @return
	 */
	public function css(?styles:String):String;
	
	/**
	 * 
	 * @param	name
	 * @return
	 */
	public function hasCss(name:String):Bool;
	
	/**
	 * 
	 * @param	styles
	 * @return
	 */
	public function toggle(styles:String):IDisplay;
	
	/**
	 * Current child index or -1 if not added
	 * @return
	 */
	public function index():Int;
	
	/**
	 * Change Child Index
	 * @param	i
	 * @return
	 */
	public function setIndex(i:UInt):IDisplay;
	
	/**
	 * Jotun ID
	 * @return
	 */
	public function id():UInt;
	
	/**
	 * DOM ID
	 * @return
	 */
	public function ref(?value:String):String;
	
	/**
	 * Get the element index in DOM
	 * @param	q
	 * @return
	 */
	public function indexOf(q:IDisplay):Int;
	
	/**
	 * Append a child to display list
	 * @param	q
	 * @return
	 */
	public function addChild(q:IDisplay, ?at:Int = -1):IDisplay;
	
	/**
	 * Append a list of children
	 */
	public function addChildren(q:ITable, ?at:Int = -1):IDisplay;
	
	/**
	 * Add a text content to element
	 * @param	q
	 * @return
	 */
	public function addTextElement(q:String):IDisplay;
	
	/**
	 * Remove child from container
	 * @param	q
	 * @return
	 */
	public function removeChild(q:IDisplay):IDisplay;
	
	/**
	 * Remove from parent container
	 * @return
	 */
	public function remove():IDisplay;
	
	public function rotateX(x:Float):IDisplay;
	
	public function rotateY(x:Float):IDisplay;
	
	public function rotateZ(x:Float):IDisplay;
	
	public function rotate(x:Float, y:Float, z:Float):IDisplay;
	
	public function translate(x:Float, y:Float, z:Float):IDisplay;
	
	public function scale(x:Float, y:Float, z:Float):IDisplay;
	
	public function transform():IDisplay;
	
	/**
	 * Parent container, can go up to any available level until reach document element
	 * @param	levels
	 * @return
	 */
	public function parent(levels:UInt = 0):IDisplay;
	
	public function parentQuery(q:String):IDisplay;
	
	public function matches(q:String):Bool;
	
	public function focus():IDisplay;
	
	/**
	 * Get child by index
	 * @param	i
	 * @param	update
	 * @return
	 */
	public function getChild(i:Int, ?update:Bool):IDisplay;
	
	
	public function getScroll(?o:IPoint = null):IPoint;
	
	public function setScroll(x:Int, y:Int):Void;
	
	public function addScroll(x:Int, y:Int):Void;
	
	/**
	 * Current element scroll offset
	 * @param	o
	 * @return
	 */
	public function rect():Dynamic;
	
	/**
	 * Children count
	 * @return
	 */
	public function length():Int;
	
	/**
	 * Remove hidden attribute from element
	 */
	public function show():Void;
	
	/**
	 * Add hidden attribute to element
	 */
	public function hide():Void;
	
	/**
	 * Check if element have an attribute
	 * @param	name
	 * @return
	 */
	public function hasAttribute(name:String):Bool;
	
	/**
	 * Get and/or set an element attribute
	 * @param	name
	 * @param	value
	 * @return
	 */
	public function attribute(name:String, ?value:Dynamic):Dynamic;
	
	/**
	 * Write a list of attributes to object and return a data copy
	 * @param	values
	 * @return
	 */
	public function attributes(?values:Dynamic):Dynamic;
	
	/**
	 * Crop an attribute from element and return it
	 * @param	name
	 * @return
	 */
	public function clearAttribute(name:String):Dynamic;
	
	/**
	 * Get the current value of the element (input.value(), textarea.value() or dom.attribute('value'))
	 * @param	q
	 * @return
	 */
	@:overload(function(?q:Int):File{})
	@:overload(function():FileList{})
	@:overload(function(?q:String):String{})
	public function value(?q:Dynamic):Dynamic;
	
	/**
	 * Write or get style of the element
	 * @param	p
	 * @param	v	Can accept ARGB
	 * @return	Return IARGB if is a color property
	 */
	public function style(?p:Dynamic, ?v:Dynamic):Dynamic;
	
	/**
	 * Get computed style
	 * @return
	 */
	public function trueStyle():CSSStyleDeclaration;
	
	/**
	 * Write a html content or a module
	 * @param	q
	 * @return
	 */
	public function mount(q:String, ?data:Dynamic, ?at:Int = -1):IDisplay;
	
	/**
	 * Clear innerText and write new text
	 * @param	q
	 * @return
	 */
	public function writeText(q:Dynamic):IDisplay;
	
	/**
	 * Add text do innerText
	 * @param	q
	 * @return
	 */
	public function appendText(q:Dynamic):IDisplay;
	
	/**
	 * Clear all innerHTML and set a new innerHTML value
	 * @param	q
	 * @return
	 */
	public function writeHtml(q:Dynamic):IDisplay;
	
	/**
	 * Add html text to innerHTML
	 * @param	q
	 * @return
	 */
	public function appendHtml(q:Dynamic):IDisplay;
	
	/**
	 * Map and Iterate object arans and values and write to this displa and it's children
	 * @param	data
	 */
	public function react(data:Dynamic):Void;
	
	/**
	 * Remove all elements or set innerHTML to empty
	 * @param	fast		Use innerHtml='' instead of remove each element
	 * @return
	 */
	public function empty(?fast:Bool):IDisplay;
	
	/**
	 * Add an Event type
	 * @param	type
	 * @param	handler
	 * @param	mode
	 * @return
	 */
	public function on(type:String, handler:Dynamic, ?mode:Dynamic):IDisplay;
	
	/**
	 * 
	 * @param	value
	 * @return
	 */
	public function x(?value:Dynamic):Int;
	
	/**
	 * 
	 * @param	value
	 * @return
	 */
	public function y(?value:Dynamic):Int;
	
	/**
	 * Change WIDTH of Element
	 * @param		value
	 * @return		Client width
	 */
	public function width(?value:Dynamic):Int;
	
	/**
	 * Change HEIGHT of Element
	 * @param		value
	 * @return		Client height
	 */
	public function height(?value:Dynamic):Int;
	
	/**
	 * Set opacity
	 * @param	value
	 * @return
	 */
	public function alpha(?value:Float):Float;
	
	/**
	 * Check if all element bounds fit into viewport
	 * @return
	 */
	public function isFullyVisible():Bool;
	
	/**
	 * Check if element is partially visible into viewport
	 * @return
	 */
	public function getVisibility(?offsetY:Int = 0, ?offsetX:Int = 0):UInt;
	
	/**
	 * Type of element
	 * @return
	 */
	public function typeOf():String;
	
	/**
	 * If Type match a Tag Name or Class Name
	 * @param	tag
	 * @return
	 */
	public function is(tag:Dynamic):Bool;
	
	/**
	 * Add this to a target element or Body if target is null
	 * @param	target
	 * @return
	 */
	public function addTo(?target:IDisplay):IDisplay;
	
	/**
	 * Add this to Body element
	 * @return
	 */
	public function addToBody():IDisplay;
	
	/**
	 * True position in DOM
	 * @return
	 */
	public function position():IPoint;
	
	/**
	 * Fix the element in screen using global positions
	 * @param	align
	 * @return
	 */
	public function pin(?align:String):IDisplay;
	
	/**
	 * Unpin the element form screen
	 * @return
	 */
	public function unpin():IDisplay;
	
	/**
	 * Change the width and height properties
	 * @param	width
	 * @param	height
	 * @return
	 */
	public function fit(width:Dynamic, height:Dynamic):IDisplay;
	
	/**
	 * Get area and position
	 * @return
	 */
	public function getBounds():DOMRect;
	
	/**
	 * Apply a SVG color transform
	 * @param	r
	 * @param	g
	 * @param	b
	 * @param	a
	 * @return
	 */
	public function colorTransform(r:UInt, g:UInt, b:UInt, ?a:UInt = 255):IDisplay;
	
	/**
	 * Apply a SVG displacement filter to element
	 * @param	freq
	 * @param	octaves
	 * @param	scale
	 * @param	seed
	 * @return
	 */
	public function displacement(freq:Float, octaves:Int, scale:Int, ?seed:Int = 0):IDisplay;
	
	/**
	 * Apply advanced SVG filters
	 * @param	name
	 */
	public function filters(name:Dynamic):Void;
	
	/**
	 * Clear all object data
	 */
	public function dispose():Void;
	
	/**
	 * Load and write a module in target
	 * @param	url
	 * @param	module
	 * @param	data
	 * @param	handler
	 */
	public function load(url:String, module:String, ?data:Dynamic, ?handler:IRequest->Void, ?progress:IProgress->Void):Void;
	
	/**
	 * Scroll document for display visibility
	 * @param	time
	 * @param	ease
	 * @param	offset x
	 * @param	offset y
	 * @return
	 */
	public function lookAt(?y:Int, ?x:Int):IDisplay;
	
	/**
	 * Reload all external loaded <script> tags
	 */
	public function reloadScripts():IDisplay;
	
	/**
	 * Load and build external modules spefified by the attribute 'sru-load'
	 * @param	progress
	 */
	public function autoLoad(?progress:IProgress->Void):Void;
	
	/**
	 * Display info in Sirius style
	 * @return
	 */
	public function toString():String;
	
	/**
	 * Common data holder
	 */
	public var data:Dynamic;
	
}