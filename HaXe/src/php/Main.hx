package sirius.php;

import haxe.Log;
import php.Lib;
import sirius.modules.ModLib;

/**
 * ...
 * @author Rafael Moreira
 */
class Main {

	static function main() {
		var t:Array<Dynamic> = [ { name:"Goddamn ", nick:"Foobar", extra:{message:"- Now with Sweet Potatos!"} }, { name:"Hello", nick:"World", extra:{message:null} } ];
		ModLib.prepare("modules/filler-test.html");
		ModLib.print("modules/filler-test.html", t, true);
	}

}