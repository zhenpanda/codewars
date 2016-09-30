/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
*/

function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}

// function doSomething() {}
// console.log(doSomething.name); // logs "doSomething"
// function foo() { console.log(arguments.callee.name) }

// function addContact(id, refreshCallback) {
//     refreshCallback();
//     // You can also pass arguments if you need to
//     // refreshCallback(id);
// }
// function refreshContactList() {
//     console.log('Hello World');
// }
// addContact(1, refreshContactList);


/*
var someList = [];
function test(input) {
	if (input == undefined) { return someList };
	someList.push(arguments.callee.name)
	console.log(someList);
}
*/

//eval("1+2")

/*
function foo(...args) {
  return arguments;
}
foo(1, 2, 3); // { "0": 1, "1": 2, "2": 3 }
*/

var mathOperations = []
function zero(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function one(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function two(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function three(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function four(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function five(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function six(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function seven(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function eight(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function nine(i) { 
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function plus(i) {
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function minus(i) {
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function times(i) {
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function dividedBy(i) {
	mathOperations.unshift(arguments.callee.name);
	return mathIt();
}
function mathIt() {
	var str = [];
	for (var c = 0; c < mathOperations.length; c++) {
		switch (mathOperations[c]) {
		    case "zero": str.push("0"); break; 
		    case "one": str.push("1"); break; 
		    case "two": str.push("2"); break;  
		    case "three": str.push("3"); break; 
		    case "four": str.push("4"); break; 
		    case "five":  str.push("5"); break;
		    case "six": str.push("6"); break; 
		    case "seven": str.push("7"); break; 
		    case "eight": str.push("8"); break; 
		    case "nine": str.push("9"); break;  
		    case "plus": str.push("+"); break; 
		    case "minus": str.push("-"); break; 
		    case "times": str.push("*"); break;  
		    case "dividedBy": str.push("/"); break;  
		}
	};
	var out = str.join("");
	console.log(out);
	if (out.length > 2) {
		mathOperations = [];
		return eval(out);
	};
};

//five(times(eight()));

/*
str.match(/.{1,3}/g)
"abcd".match(/.{1,3}/g); // ["abc", "d"]
*/

//other solution
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }