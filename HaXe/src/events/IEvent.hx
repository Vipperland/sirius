package sirius.events;
import sirius.dom.IDisplay;
import sirius.dom.IDisplay3D;

/**
 * @author Rafael Moreira
 */

interface IEvent {
	
	/// Current Dispatcher (DISP)
	public var from : IDispatcher;

	/// Current Ticket (IDISPg)
	public var ticket : IEventGroup;
	
	// Current Target
	public var target : IDisplay;

	// Current Target
	public var target3d : IDisplay3D;

	/// Original object Event
	public var event : js.html.Event;
	
}