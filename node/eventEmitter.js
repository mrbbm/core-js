var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler01 = () => {
    console.log('#1: Executing the myEventHandler01 function');
}

var myEventHandler02 = () => {
    console.log('#2: Executing the myEventHandler02 function');
}

eventEmitter.on('event1', myEventHandler01);
eventEmitter.on('event2', myEventHandler02);

eventEmitter.emit('event1');
eventEmitter.emit('event2');

// It won't trigger
var anotherEventEmitter = new events.EventEmitter();
anotherEventEmitter.emit('event1');