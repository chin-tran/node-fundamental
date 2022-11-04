'use strict';
var EventEmitter = require('events');

class Dialog extends EventEmitter {
    constructor() {
        super();
        this.message = 'Hello dialog';
    }

    sayHello = function (name) {
        console.log(this.message, name);
        this.emit('sayHello', name);
    }
}

const dialogInstance = new Dialog();

dialogInstance.on('sayHello', (data) => {
    console.log(`New event fired : ${data}`);
})

dialogInstance.sayHello('chin');