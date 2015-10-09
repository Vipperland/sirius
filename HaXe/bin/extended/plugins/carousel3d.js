/**
 * ...
 * @author Rafael Moreira
 */

(function($exports) {
	
	$exports.sru = $exports.sru || {};
	$exports.sru.plugins = $exports.sru.plugins || {};
	
	$exports.sru.plugins.Carousel3D = function(selector, aperture, easing, zoom, xAxys){
		
		var Display3D = sru.dom.Display3D;
		var Sprite3D = sru.dom.Sprite3D;
		var Div = sru.dom.Div;
		
		if (Sirius.agent.screen < 3 || (Sirius.agent.ie > 0 && Sirius.agent.ie < 12)) return;
		
        var body = Sirius.document.body;
        body.style( { 'overflow-x':'hidden' } );
		
        var cont = new Sprite3D();
        cont.content.fit(100, 100, true);
        cont.overflow('hidden');
        cont.pin();
		
		var panels = [];
		
		Sirius.all(selector).each(function(face){
			var panel = new Display3D().addTo(cont.content);
			panel.addChild(face);
			panels[panels.length] = panel;
		});
		
        cont.width(100, true);
        cont.content.height(100, true);
        cont.addToBody();
		
        var rest = new Div();
        rest.width(100, true);
        rest.style({top:0});
        rest.addToBody();
		
        cont.setPerspective(null, '50% 50%');
        cont.update();
		
        cont.content.height(100, true);
        cont.content.update();
		
        if(!aperture) aperture = 45;
		if(!zoom) zoom = 0;
		if(!easing) easing = 0;
		
		else if(easing < 0) easing = .01;
		else if(easing > 1) easing = 1;
		
        var maxAperture = 0;
        var halfAperture = 0;
        var maxPanels = 0;
		
        var offsetZ = 0;
        var offsetZFlex = 0;
		
        var snap = 5;
        var points = [];
		
		
		function getPoints(){
			
			if(aperture < 20) aperture = 20;
			else if(aperture > 160) aperture = 160;
			
			maxAperture = aperture * panels.length;
			halfAperture = aperture >> 1;
			maxPanels = 360/aperture;
			
			points.splice(0, points.length);
			while(points.length < panels.length){
				var i = points.length * aperture;
				var ctr = {a:i-snap,b:i+snap,c:i,d:i-aperture*1.5,e:i+aperture*1.5};
				var cp = panels[points.length];
				cp.doubleSided(false);
				cp.detach();
				cp.style({y:0,top:0});
				cp.width(100, true);
				cp.data.set('rotation', points.length * -aperture);
				cp.setPerspective(null, '50% 50%');
				cp.update();
				cp.data.control = ctr;
				points[points.length] = ctr;
			}
		}
		
        var csr = 0;
        var margt = 0;
			
        Ticker.add(function() {
			
            var h = Utils.viewportHeight();
            var h2 = (xAxys ? Utils.viewportWidth() : h) / 2;
			
            var tz = h2/Math.tan(Math.PI/maxPanels);
			
            var y = Sirius.document.getScroll().y;
            var sy = y / (h * panels.length);
            sy = sy * maxAperture;
			
            offsetZ = 0;
			
			for(j in points){
				var k = points[j];
				offsetZ = zoom;
				if(sy > k.a && sy < k.b){
					sy = k.c;
					offsetZ = 0;
					break;
				}
			}
			
            offsetZFlex += (offsetZ - offsetZFlex) * .1;
			
            if (sy > maxAperture) {
                sy = maxAperture;
                csr += (sy - csr) * .6;
                cont.style({y:0, top:-(y-Math.floor(h * 2)) + 'px'});
            }else {
                cont.style({y:0, top:0});
                csr += (sy - csr) * .3;
            }
			
            Dice.All(panels, function(p, e) {
                e.height(h);
                e.locationZ(tz);
				if(xAxys){
					e.rotationY(-(e.data.get('rotation') + csr));
					e.rotationX(0);
				}else{
					e.rotationX(e.data.get('rotation') + csr);
					e.rotationY(0);
				}
                e.update();
				ctr = e.data.control;
				if(sy < ctr.d || sy > ctr.e)	e.hide();
				else							e.show();
            });
			
            rest.style( { 'margin-top':((h*panels.length)>>0) + 'px' } );
			
            cont.content.locationZ( -tz - offsetZFlex);
            cont.content.update();
			
		});
		
		Sirius.document.events.keyDown(function(e){
			switch(e.event.keyCode){
				case 90 : {
					xAxys = !xAxys;
				}
				case 107 : {}
				case 187 : {
					aperture -= 10;
					getPoints();
					break
				}
				case 109 : {}
				case 189 : {
					aperture += 10;
					getPoints();
					break;
				}
			}
		});
		
		getPoints();
		Ticker.init();
		
		return cont;
		
	}
})(typeof window != "undefined" ? window : exports);