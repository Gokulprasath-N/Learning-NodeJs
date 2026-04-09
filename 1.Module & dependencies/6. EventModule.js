// here we are creating a class
const EventEmitter = require('events');

// create an object of EventEmitter
const emitter = new EventEmitter();

 // register a listener
emitter.on('messageLogged', function() {
    console.log('Message logged');
});

// to raise an event
emitter.emit('messageLogged');


// to pass an argument
emitter.on('messageLogged', function(arg) {
    console.log('Message logged', arg);
});

// arrow function
emitter.on('messageLogged', (arg) => {
    console.log('Message logged', arg);
});

emitter.emit('messageLogged', { id: 1, url: 'http://mylogger.io/log' });