package jotun.events;
import jotun.dom.IDisplay;
import jotun.dom.IDisplay3D;

/**
 * ...
 * @author Rafael Moreira <vipperland@live.com,rafael@gateofsirius.com>
 */
@:expose("jtn.events.Event")
class Event implements IEvent {
	
	/** Current Dispatcher */
	public var from:IDispatcher;
	
	/** Current Ticket */
	public var ticket:IEventGroup;
	
	/** Current Target */
	public var target:IDisplay;
	
	/** Current Target */
	public var target3d:IDisplay3D;
	
	/** Original object Event */
	public var event:js.html.Event;
	
	
	/**
	 * Create a custom EVT constroller
	 * @param	from
	 * @param	ticket
	 * @param	event
	 */
	public function new(from:IDispatcher, ticket:IEventGroup, event:js.html.Event) {
		this.event = event;
		this.ticket = ticket;
		this.from = from;
		this.target = from.target;
		this.target3d = Std.is(from.target, IDisplay3D) ? cast from.target : null;
	}
	
	public function cancel():Void {
		if (event != null) {
			event.stopPropagation();
			event.stopImmediatePropagation();
			event.preventDefault();
		}
	}
	
	public function description():String {
		return "[Event{name:" + ticket.name + ",target:" + from.target.typeOf() + "}]";
	}
	
}