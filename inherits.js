const EventEmitter = require('events');
const util = require('util');

function Dialog() {
    this.message = 'Hello dialog';
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function (name) {
    console.log(this.message, name);
    this.emit('sayHello', name);
}

const dialogInstance = new Dialog();

dialogInstance.on('sayHello', (data) => {
    console.log(`New event fired : ${data}`);
})

dialogInstance.sayHello('chin');

function Person() {
    Dialog.call(this);
    this.name = 'Name default ';
}


util.inherits(Person, Dialog);

var person = new Person();
person.sayHello('John');