package;

import sirius.gaming.dataform.DataCollection;
import sirius.gaming.dataform.DataIO;
import sirius.gaming.dataform.DataObject;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
class Test_JS{
	
	static public function main() {
		
		DataCollection.register(DataObject, 'test', ['name', 'email']);
		DataCollection.register(DataObject, 'info', ['color']);
		
		var t:String = [
			"test 000001 0:alpha|1:user@alpha.com",
			"@info 0:yellow",
			"@info 0:blue",
			"test 000002 0:beta|1:user@beta.com",
			"@info 0:gray",
			"test 000003 0:gama|1:user@gama.com",
			"@info 0:cyan",
			"test 000004 0:omega|1:user@omega.com",
		].join('\r');
		
		var colA:DataCollection = new DataCollection();
		var colB:DataCollection = new DataCollection();
		
		var cA:Int = colA.parse(t);
		var rA:String = colA.stringify();
		trace('colA data(' + cA + ') \r\n\t' + rA.split('\r').join('\r\n\t'));
		
		var cB:Int = colB.parse(t);
		var rB:String = colB.stringify();
		trace('colB data(' + cB + ') \r\n\t' + rB.split('\r').join('\r\n\t'));
		
		trace('Data Match? \r\n\t' + (t == rA && t == rB && rA == rB));
		
		
		
		
	}
	
} 
