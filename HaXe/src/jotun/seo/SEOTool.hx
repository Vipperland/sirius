package jotun.seo;
import jotun.seo.Search;
import jotun.seo.Organization;
import jotun.seo.Person;
import jotun.tools.Flag;
import jotun.utils.Dice;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("SEO")
class SEOTool{
	
	static public var WEBSITE:UInt = 1 << 0;
	
	static public var BREADCRUMBS:UInt = 1 << 1;
	
	static public var PRODUCT:UInt = 1 << 2;
	
	static public var ORGANIZATION:UInt = 1 << 3;
	
	static public var PERSON:UInt = 1 << 4;
	
	static public var SEARCH:UInt = 1 << 5;
	
	public var website:WebSite;
	
	public var product:Product;
	
	public var breadcrumbs:Breadcrumbs;
	
	public var organization:Organization;
	
	public var person:Person;
	
	public var search:Search;
	
	private var _publish:Array<SEO>;
	
	private function _create(t:String, O:Dynamic):Void {
		if (Reflect.field(this, t) == null) {
			O = untyped __js__("new O()");
			Reflect.setField(this, t, O);
			_publish[_publish.length] = O;
		}
	}
	
	public function new() {
		_publish = [];
	}
	
	public function init(types:Int = 0):SEOTool {
		if ((types == 0 || Flag.FTest(types, WEBSITE))) _create('website', WebSite);
		if (Flag.FTest(types, BREADCRUMBS)) _create('breadcrumbs', Breadcrumbs);
		if (Flag.FTest(types, PRODUCT)) _create('product', Product);
		if (Flag.FTest(types, ORGANIZATION)) _create('organization', Organization);
		if (Flag.FTest(types, PERSON)) _create('person', Person);
		if (Flag.FTest(types, SEARCH)) _create('search', Search);
		return this;
	}
	
	public function publish():Void {
		Dice.Values(_publish, function(seo:SEO) {
			seo.publish();
		});
	}
	
}