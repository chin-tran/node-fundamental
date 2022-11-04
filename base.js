var person = {
    name: 'Name',
    age: 0,
    sayHello: function(param1, param2) {
        console.log(`My name is ${this.name}, ${this.age}. My info : ${param1} ${param2}`);
    }
}

person.sayHello();
person.sayHello('param1', 'param2');
person.sayHello.call({name: 'Chin', age: 12}, 'call1', 'call2');
person.sayHello.call('call1 df', 'call2 df');
person.sayHello.apply({name: 'Chin', age: 12}, ['apply 1', 'apply 2']);
person.sayHello.apply(['apply 1 df', 'apply 2 df']);