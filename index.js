const logevents = require('./logEvents')

const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logevents(msg);
});
myEmitter.emit('log', 'log event emitted');