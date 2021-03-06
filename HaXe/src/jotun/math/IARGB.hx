package jotun.math;
import jotun.math.ARGB;

/**
 * @author Rafael Moreira
 */

interface IARGB {
	public var a : Int;
	public var r : Int;
	public var g : Int;
	public var b : Int;

	/**
	 * ARGB Color format (4bytes/32bits)
	 * @return
	 */
	public function value32 () : Int;

	/**
	 * RGB Color format (3bytes/24bits)
	 * @return
	 */
	public function value () : Int;

	/**
	 * Invert each color channel
	 * @return
	 */
	public function invert () : IARGB;

	/**
	 * Multiply color channels with value
	 * @param	rate
	 * @param	alpha
	 * @return
	 */
	public function multiply(ammount:Float):IARGB;

	/**
	 * Adds an ammount to each channel at max of 0xFF
	 * @param	ammount
	 * @return
	 */
	public function shift (ammount:Int) : IARGB;

	/**
	 * Hexadecimal representation of the color
	 * Usefull for apply any color styles
	 * @return
	 */
	public function hex () : String;

	/**
	 * CSS string format [rgb(R,G,B,A)]
	 * @return
	 */
	public function css () : String;
}