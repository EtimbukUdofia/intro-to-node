const logEvents = require("./logEvents");

const EventEmitter = require("events");

//my extended emmiter object
class MyEmitter extends EventEmitter {}

//initialize object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //Emit event
  myEmitter.emit("log", "Log event Emitted!");
}, 2000);
