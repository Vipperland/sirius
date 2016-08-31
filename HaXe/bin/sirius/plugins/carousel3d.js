/**
 * Carousel3D Plugin for Sirius API
 * ...
 * @author Rafael Moreira
 */
(function($exports) {
	$exports.sru = $exports.sru || {};
	$exports.sru.plugins = $exports.sru.plugins || {};
	$exports.sru.plugins.Carousel3D = function(selector, aperture, zoom, keyboard){
		var Display3D = sru.dom.Display3D;
		var Sprite3D = sru.dom.Sprite3D;
		var Div = sru.dom.Div;
        var body = Sirius.document.body;
		body.style( { 'overflow-x':'hidden' } );
		var o = {
			panels : [],
			points : [],
			extra : new Div(),
			carousel : new Sprite3D(),
			keyboard : keyboard == null ? true : keyboard,
			maxAperture : 0,
			maxPanels : 0,
			offsetZ : 0,
			offsetZFlex : 0,
			aperture : 180 - ((aperture) || 90),
			zoom : zoom || 0,
			easing : .3,
			snapping : 0,
			minSnapping : 2,
			maxSnapping : 16,
			snapEasing : .9,
			zoomEasing : .1,
			scroll : 0,
			axys : 'y',
			index : 0,
			focus : 0,
			enabled : true,
			focused : false,
			spacing : 0,
			direction : 1,
			addPanel : function(p){
				var panel = new Display3D().addTo(o.carousel.content);
				p.css('w-100pc h-100pc');
				panel.addChild(p);
				panel.mainFace = p;
				o.panels[o.panels.length] = panel;
			},
			update : function(){
				if(o.aperture < 10) o.aperture = 10;
				else if(o.aperture > 160) o.aperture = 160;
				o.maxAperture = o.aperture * o.panels.length;
				o.maxPanels = 360/o.aperture;
				o.points.splice(0, o.points.length);
				o.snapping = (o.aperture/180) * o.maxSnapping + o.minSnapping;
				if(o.snapping > o.maxSnapping) o.snapping = o.maxSnapping;
				var ap = o.aperture*1.50;
				var hp = o.aperture*.50;
				while(o.points.length < o.panels.length){
					var i = o.points.length * o.aperture;
					var cp = o.panels[o.points.length];
					cp.initData();
					var ctr = cp.data.control || {panel:cp,focus:false,pin:false,id:o.points.length};
					ctr.a = i-o.snapping;
					ctr.b = i+o.snapping;
					ctr.c = i;
					ctr.d = i-ap;
					ctr.e = i+ap;
					ctr.f = i-hp;
					ctr.g = i+hp;
					with(cp){
						doubleSided(false);
						css('pos-abs');
						style({y:0,top:0});
						width("100%");
						data.set('rotation', o.points.length * -o.aperture);
						setPerspective(null, '50% 50%');
						update();
						data.control = ctr;
					}
					o.points[o.points.length] = ctr;
				}
			},
			setAperture : function(x){
				o.aperture = 180-x;
				o.update();
			},
			setZoom : function(x){
				o.zoom = x;
			},
			toggleAxys : function(x){
				if(x != null) 	o.axys = x;
				else 			o.axys = o.axys == 'x' ? 'y' : 'x';
			},
			showPanel : function(i){
				Sirius.document.scroll(0,i*Utils.viewportHeight());
			},
			prevPanel : function(){
				if(o.index > 0) o.showPanel(o.index - 1);
			},
			nextPanel : function(){
				if(o.index < o.panels.length) o.showPanel(o.index + 1);
			},
			on : function(n,h,m){
				m = m ? -1 : 1;
				Dice.Values(o.panels, function(v){ v.on(n,h,m); });
			},
			onPinIn : function(h,m){
				o.on('carouselPinIn',h,m);
			},
			onPinOut : function(h,m){
				o.on('carouselPinOut',h,m);
			},
			onFocusIn : function(h,m){
				o.on('carouselFocusIn',h,m);
			},
			onFocusOut : function(h,m){
				o.on('carouselFocusOut',h,m);
			},
			onZoomIn : function(h,m){
				o.carousel.events.on('carouselZoomIn',h,m ? -1 : 1);
			},
			onZoomOut : function(h,m){
				o.carousel.events.on('carouselZoomOut',h,m ? -1 : 1);
			},
			render : function() {
				if(!o.enabled) return;
				var h = Utils.viewportHeight();
				var h2 = (o.axys == 'x' ? Utils.viewportWidth() : h) / 2;
				var tz = h2/Math.tan(Math.PI/o.maxPanels) + o.spacing;
				var y = Sirius.document.getScroll().y;
				var sy = y / (h * o.panels.length);
				sy = sy * o.maxAperture;
				o.offsetZ = o.zoom;
				for(j in o.points){
					var k = o.points[j];
					if(sy > k.f && sy < k.g){
						if(k.focus == false){
							k.focus = true;
							if(k.pin == true) {
								k.pin = false;
								k.panel.events.on('carouselPinOut').call();
							}
							k.panel.events.on('carouselFocusIn').call();
							o.focus = j * 1;
						}
					}else{
						if(k.focus == true){
							k.focus = false;
							k.panel.events.on('carouselFocusOut').call();
						}
					}
					if(k.focus){
						if(sy > k.a && sy < k.b){
							sy = k.c;
							o.offsetZ = 0;
							if(k.pin == false) {
								k.pin = true;
								k.panel.events.on('carouselPinIn').call();
								o.index = j * 1;
							}
						}else{
							if(k.pin == true) {
								k.pin = false;
								k.panel.events.on('carouselPinOut').call();
							}
						}
					}
				}
				if(!o.focused && o.offsetZ == 0){
					o.focused = true;
					o.carousel.events.on('carouselZoomIn').call();
				}else if(o.focused && o.offsetZ != 0){
					o.focused = false;
					o.carousel.events.on('carouselZoomOut').call();
				}
				o.offsetZFlex += (o.offsetZ - o.offsetZFlex) * .1;
				if (sy > o.maxAperture) {
					sy = o.maxAperture;
					o.carousel.style({y:0, top:-(y-Math.floor(h * 2)) + 'px'});
					o.scroll += (sy - o.scroll) * o.snapEasing;
				}else {
					o.carousel.style({y:0, top:0});
					o.scroll += (sy - o.scroll) * o.easing;
				}
				Dice.All(o.panels, function(p, e) {
					ctr = e.data.control;
					if(o.scroll < ctr.d || o.scroll > ctr.e){
						e.hide();
						return;
					}else{
						e.show();
					}
					e.height(h);
					e.locationZ(tz);
					if(o.axys == 'x'){
						e.rotationY(-(e.data.get('rotation') + o.scroll) * o.direction);
						e.rotationX(0);
					}else{
						e.rotationX(e.data.get('rotation') + o.scroll * o.direction);
						e.rotationY(0);
					}
					e.update();
				});
				var th = (h*o.panels.length)>>0;
				o.extra.style( { 'margin-top':th + 'px' } );
				with(o.carousel){
					content.locationZ( -tz - o.offsetZFlex);
					content.update();
					height(h);
				}
			},
			scrollEvent : function(e){
				if(Sirius.document.focus().is(['input','select','textarea'])) return;
				if(e.event.type == 'wheel')	{
					var delta = 0;
					if(Sirius.agent.firefox) 	delta = e.event.deltaY * -40;
					else						delta = e.event.wheelDelta;
					Sirius.document.addScroll(0, -delta);
				}else if(o.keyboard) {
					switch(e.event.keyCode){
						case 38 : {}
						case 33 : {
							o.prevPanel();
							break;
						}
						case 40 : {}
						case 34 : {
							o.nextPanel();
							break;
						}
					}
				}
			},
			
		}
		
		if(!Sirius.agent.mobile){
			body.style( { 'overflow-y':'hidden' } );
			with(Sirius.document.events){
				wheel(o.scrollEvent);
				keyDown(o.scrollEvent);
			}
		}
		
		with(o.carousel){
			content.fit(100, 100, true);
			overflow('hidden');
			css('pos-fix');
			width("100%");
			content.height("100%");
			addToBody();
			setPerspective(null, '50% 50%');
			update();
			content.height("100%");
			content.update();
		}
		with(o.extra){
			width("100%");
			style({top:0, height:0});
			addToBody();
		}
		Sirius.all(selector).each(o.addPanel);
		o.update();
		
		Automator.search(o.carousel);
		
		Ticker.add(o.render);
		Ticker.init();
		return o;
		
	}
	if(Sirius != null) Sirius.updatePlugins();
})(typeof window != "undefined" ? window : exports);