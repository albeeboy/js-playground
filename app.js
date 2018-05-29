////////// 36 /////////

var person = {
	firstname: '',
	lastname: '',
	greet: function () {
		return 'Hello, ' + this.firstname + ' ' + this.lastname
	}
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());

/*


var eventConfig = require('./config').events;
var Emitter = require('events');

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function () {
	console.log('Somewhere, someone says hello.');
});

emtr.on(eventConfig.GREET, function () {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);





var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function () {
	console.log('Somewhere, someone says hello.');
});

emtr.on('greet', function () {
	console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');





// object properties and menthods
var obj = {
	greet: 'Hello'
}
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];
arr.push(function () {
	console.log('Hello world 1');
});
arr.push(function () {
	console.log('Hello world 2');
});
arr.push(function () {
	console.log ('Hello world 3');
});

arr.forEach(function (item) {
	item();
});




// core module
var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);





var greet6 = require('./greet6');
var greet7 = require('./greet7')
greet7.greet();

var greet = require('./greet');
greet.english();
greet.spanish();

var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Hello earth!';

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();


*/
