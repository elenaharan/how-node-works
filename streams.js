const fs = require("fs");
//shortcut for creating a new server
const server = require("http").createServer();

server.on("request", (req, res) => {
  //*************************SOLUTION 1******************************************
  //This solution is ok on a local environment, but cannot be used in production
  //because the file is too big and if there are many requests to the server at once, it will crash
  //the code below will make the server download the entire file, then store it in memory before it can send it back to the client
  //but with multiple requests the server can very quickly run out of resources
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //**************************SOLUTION 2: STREAMS ****************************************/
  //In this solution we don't need to save the data into a variable and then send it back to the client
  //We can send the data to the server as a stream in chunks, using readable streams
  //and then send it to the client using writable streams
  // const readable = fs.createReadStream("test-file.txt");
  //each time there is a data available to consume, it will emit "data" event:
  // readable.on("data", (chunk) => {
  //this sends the available chunk of data to the client in a response
  //   res.write(chunk);
  // });
  //we also need to listen for an event when all data is read
  //without the res.end the solution wouldn't work because the response would never be sent to the client
  // readable.on("end", () => res.end());
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });
  //***************************SOLUTION 3: handling backpressure - best solution*/
  //backpressure occurs when the response cannot be sent as quickly as requests are received
  const readable = fs.createReadStream("test-file.txt");
  //readableStream.pipe(writableStream) - writable stream can also be a duplex or transform
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
