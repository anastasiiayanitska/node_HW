const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

function sendMessage(user, message, emitter) {
  emitter.emit("message", user, message);
}

chatEmitter.on("message", (user, message) => {
  console.log(`${user}: ${message}`);
});

sendMessage("Anastasiia", "Hallo!", chatEmitter);
sendMessage("Vadym", "Hallo world", chatEmitter);
sendMessage("Max", "Hi", chatEmitter);
