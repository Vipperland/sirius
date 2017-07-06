/**
 * ...
 * @author Rafael Moreira
 */
(function() {
	$exports.sru = $exports.sru || {};
	$exports.sru.plugins = $exports.sru.plugins || {};
	$exports.sru.plugins.LabelController = {
		onload:function(){
			var style = new sru.dom.Style();
			style.write(
				"#hourglass {display: block;background: #dad8d2;margin: 3em auto;width: 2em;height: 4em;box-shadow: inset #dad8d2 0 0 0 0, inset #f42b69 0 2em 0 0, inset #dad8d2 0 0 4em 0;-webkit-animation: hourglass 1s linear infinite;animation: hourglass 1s linear infinite;}" + 
				"#hourglass .outer {fill: #f42b69;}" + 
				"#hourglass .middle {fill: #dad8d2;}" + 
				"@-webkit-keyframes hourglass {0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); box-shadow: inset #dad8d2 0 0 0 0, inset #f42b69 0 2em 0 0, inset #dad8d2 0 4em 0 0, inset #f42b69 0 4em 0 0;},80% { -webkit-transform: rotate(0deg); transform: rotate(0deg); box-shadow: inset #dad8d2 0 2em 0 0, inset #f42b69 0 2em 0 0, inset #dad8d2 0 2em 0 0, inset #f42b69 0 4em 0 0;},100% {-webkit-transform: rotate(180deg);transform: rotate(180deg); box-shadow: inset #dad8d2 0 2em 0 0, inset #f42b69 0 2em 0 0, inset #dad8d2 0 2em 0 0, inset #f42b69 0 4em 0 0;}}" + 
				"@keyframes hourglass {0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); box-shadow: inset #dad8d2 0 0 0 0, inset #f42b69 0 2em 0 0, inset #dad8d2 0 4em 0 0, inset #f42b69 0 4em 0 0;},80% { -webkit-transform: rotate(0deg); transform: rotate(0deg); box-shadow: inset #dad8d2 0 2em 0 0, inset #f42b69 0 2em 0 0, inset #dad8d2 0 2em 0 0, inset #f42b69 0 4em 0 0;},100% {-webkit-transform: rotate(180deg);transform:rotate(180deg);box-shadow: inset #dad8d2 0 2em 0 0, inset #f42b69 0 2em 0 0, inset #dad8d2 0 2em 0 0, inset #f42b69 0 4em 0 0;}}"
			);
		}
	}
	if(Sirius != null) Sirius.updatePlugins();
})();