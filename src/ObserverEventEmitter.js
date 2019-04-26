class EventEmitter {
	constructor () {
		this._events = {}
	}
	on (eventName, handler) {
		if(this._events[eventName]) {
			this._events[eventName].push(handler)
		} else {
			this._events[eventName] = [handler]
		}
		console.log(this._events)
	}
	emit (eventName) {
		let events = this._events[eventName];
		let args = Array.prototype.slice.call(arguments, 1)
		const that = this
		if(events) {
			events.forEach(handler => handler.apply(that, args))
		}
	}
	off (eventName, handler) {
		let events = this._events[eventName];
		if (events) {
			this._events[eventName] = events.filter(event => event != handler)
		}
	}
	once (eventName, handler) {
		let that = this
		let func = function () {
			var args = Array.prototype.slice.call(arguments);
			handler.apply(that, args);
			this.off(eventName, func)
		}
		this.on(eventName, func)
	}
}

var event = new EventEmitter();
function a (something) {
  console.log(something,'aa-aa');
}
function b (something) {
  console.log(something);
}
event.on('dosomething', b)
event.once('dosomething',a);
event.emit('dosomething', 'chifan');
event.off('dosomething', b)
event.emit('dosomething', 'chifan');