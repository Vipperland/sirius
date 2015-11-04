/**
 * ...
 * @author Rafael Moreira
 */
(function($exports) {
	$exports.sru = $exports.sru || {};
	$exports.sru.plugins = $exports.sru.plugins || {};
	function _validate(e){
		var target = e.target;
		var data = target.trigger.data.fields;
		var url = target.uri;
		if(data.isValid()){
			FormidableEvents.onStart(data);
			target.events.auto('formStart').call();
			data.send(url, function(r){ 
				target.data.FormData = r.object();
				target.events.auto('formSent').call();
			});
		}else{
			target.events.auto('formError').call();
		}
	}
	$exports.sru.plugins.Formidable = function(trigger){
		Sirius.all(trigger).each(function(trigger,container,uri){
			var params = container != null ? Sirius.one(container) : Sirius.document.body;
			if(params){
				trigger.data.uri = uri;
				trigger.data.fields = new sru.data.FormData(params).scan();
				trigger.events.click(_validate);
			}
		});
	}
	if(Sirius != null) Sirius.updatePlugins();
})(typeof window != "undefined" ? window : exports);