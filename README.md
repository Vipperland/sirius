#Sirius Framework
======
###The **Sirius** Main class for JavaScript & Haxe:

    .all(q:String):**ITable** of all elements (document.querySelectorAll(*selector*));
    .select(q:String):**IDisplay** of a single element (document.querySelector(*selector*));
    .elements(q:String):**Array<Elements>** (document.querySelectorAll(*selector*)); 
 	
 	Each **Element** in **ITable** will be converted to a **Display** object.
======
#####The ITable interface:

	.content:Array<**IDisplay**>;
	.elements:Array<*Element*>;
	.flush(handler:*Int|String*, ?complete:*Int|String*):**ITable**;
	.first():**IDisplay**;
	.last():**IDisplay**;
	.obj(i:*Int*):**IDisplay**;
	.css(styles:*String*):**ITable**;
	.each(handler:*Int|String*):**ITable**;
	.length ():*Int*;
	.call(method:*String*, ?args:*Array*):**ITable**;
	.on(name:*String*, handler:*Int|String*, ?mode:*String*):**ITable**;
	.merge(?tables:Array<**ITable**>):**ITable**;
	.onWheel (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onCopy (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onCut (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPaste (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onAbort (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onBlur (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onFocusIn (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onFocusOut (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onCanPlay (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onCanPlayThrough (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onChange (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onClick (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onContextMenu (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDblClick (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDrag (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDragEnd (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDragEnter (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDragLeave (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDragOver (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDragStart (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDrop (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onDurationChange (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onEmptied (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onEnded (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onInput (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onInvalid (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onKeyDown (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onKeyPress (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onKeyUp (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onLoad (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onLoadedData (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onLoadedMetadata (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onLoadStart (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onMouseDown (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onMouseEnter (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onMouseLeave (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onMouseMove (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onMouseOut (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onMouseOver (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onMouseUp (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPause (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPlay (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPlaying (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onProgress (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onRateChange (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onReset (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onScroll (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onSeeked (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onSeeking (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onSelect (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onShow (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onStalled (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onSubmit (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onSuspend (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onTimeUpdate (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onVolumeChange (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onWaiting (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerCancel (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerDown (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerUp (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerMove (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerOut (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerOver (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerEnter (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerLeave (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onGotPointerCapture (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onLostPointerCapture (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerLockChange (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onPointerLockError (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onError (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onTouchStart (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onTouchEnd (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onTouchMove (handler:*Function*, ?mode:*Int|String*) : **ITable**;
	.onTouchCancel (handler:*Function*, ?mode:*Int|String*) : **ITable**;
