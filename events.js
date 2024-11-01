//to listen to events we need to require the events module
const EventEmitter = require('events');
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

//to create a new emitter, we need to create a new instance
const myEmitter = new Sales();

//we can set up multiple listeners for the same event
myEmitter.on("mySale", () => {
  console.log("There was a new sale");
});

myEmitter.on("mySale", () => {
  console.log("New customer - Elena");
});

myEmitter.on("mySale", (stock) =>
  console.log(`There are ${stock} items left in stock`)
);

//emitting mySale event - we only have to do that for custom events
//for built-in modules, we don't need to do that manually, we only need to listen to those events
myEmitter.emit("mySale", 9);

///////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url);
  console.log("Request received");
  res.end("Request received.");
});

server.on("request", (req, res) => {
  console.log("Another request 😁");
});

server.close("close", () => {
  console.log("Server closed.");
});

//start the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
