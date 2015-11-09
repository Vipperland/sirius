/**
 * ...
 * @author Rafael Moreira
 */

(function($exports) {
	$exports.sru = $exports.sru || {};
	$exports.sru.plugins = $exports.sru.plugins || {};
	$exports.sru.plugins.FXNav = function(selector){
		
		this.indexed = [];
		this.sections = {};
		this.current = null;
		
		this.display = function(name,data,handler){
			this.current = this.sections[name];
			Sirius.module(this.current.url,this.current.target,data,handler);
		}
		
		Sirius.all(selector).each(function(o){
			var id = o.attribute('section-name');
			var section = {
				id:id,
				uri:o.attribute('section-url'),
				color:o.attribute('section-color'),
				target:o.attribute('section-target'),
				data:o
			}
			this.sections[id] = section;
			this.indexed.push(section);
		});
		
		this.display(this.indexed[0].id);
		
	}
	if(Sirius != null) Sirius.updatePlugins();
})(typeof window != "undefined" ? window : exports);