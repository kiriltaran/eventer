class Eventer {
  constructor() {
    this.callbacks = {};
  }

  on(eventName, cb) {
    this.callbacks[eventName] = cb;
  }

  emit(eventName) {
    if (this.callbacks[eventName] && typeof this.callbacks[eventName] === 'function') {
      this.callbacks[eventName]();
    }
  }
}

module.exports = new Eventer()