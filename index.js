const ee = require("./eventer")

ee.on("event", () => {
  console.log('success');
});

ee.emit("event");
