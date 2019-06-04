const ee = require("./eventer")

ee.on("event", () => {
  console.log('event callback');
});

ee.on("event", () => {
  console.log('another event callback');
});

ee.emit("event");
