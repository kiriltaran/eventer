class Eventer {
  constructor() {
    this.callbacks = {};
  }

  on(eventName, cb) {
    if(!this.callbacks[eventName]) {
      this.callbacks[eventName] = []
    }
    this.callbacks[eventName].push(cb)
  }

  emit(eventName) {
    this.callbacks[eventName].forEach(cb => {
      if (typeof cb === 'function') {
        cb();
      }
    });
  }
}

module.exports = new Eventer()