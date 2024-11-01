//to listen to events we need to require the events module
const EventEmitter = require('events');

class Sales extends EventEmitter {
	constructor() {
		super();
	}
}

//to create a new emitter, we need to create a new instance
const myEmitter = new Sales();

//we can set up multiple listeners for the same event
myEmitter.on("mySale", () => {
	console.log('There was a new sale');
})

myEmitter.on("mySale", () => {
	console.log('New customer - Elena');
})

myEmitter.on("mySale", stock => console.log(`There are ${stock} items left in stock`))

//emitting mySale event
myEmitter.emit("mySale", 9);

///////////////////////////////
