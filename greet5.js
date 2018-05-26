var greeting = 'Hello world! (5)';

function greet () {
	console.log(greeting);
}

module.exports = {
	greet: greet
}

/*
Revealing module pattern:
Exposing only the properties and methods you want via a returned object
A very common and clean way to structure and protect code within modules
*/