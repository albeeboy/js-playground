// function statement
function greet() {
	console.log('hi');
}
greet();

// functions are first class
function logGreeting(fn) {
	fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
	console.log('Hi Tony');
}
greetMe();

// it's first class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
	console.log('Hello Tony!');
});

// immediately invoked function expression
var firstname = 'Jane';
console.log(firstname);

(function (lastname) {
	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
}('Doe'));

/*
require is a function that you pass a 'path' into
module.exports is what the require function returns
this works because your code is actually wrapped in a function that is givne these things as function parameters
*/