/*
Write a generator sequence_gen ( sequenceGen in JavaScript) that, given the first terms of a sequence will generate a (potentially) infinite amount of terms, where each subsequent term is the sum of the previous x terms where x is the amount of initial arguments (examples of such sequences are the Fibonacci, Tribonacci and Lucas number sequences).

Examples

fib = sequenceGen(0, 1)
fib.next().value = 0 // first term (provided)
fib.next().value = 1 // second term (provided)
fib.next().value = 1 // third term (sum of first and second terms)
fib.next().value = 2 // fourth term (sum of second and third terms)
fib.next().value = 3 // fifth term (sum of third and fourth terms)
fib.next().value = 5 // sixth term (sum of fourth and fifth terms)
fib.next().value = 8 // seventh term (sum of fifth and sixth terms)

trib = sequenceGen(0,1,1)
trib.next().value = 0 // first term (provided)
trib.next().value = 1 // second term (provided)
trib.next().value = 1 // third term (provided)
trib.next().value = 2 // fourth term (sum of first, second and third terms)
trib.next().value = 4 // fifth term (sum of second, third and fourth terms)
trib.next().value = 7 // sixth term (sum of third, fourth and fifth terms)

lucas = sequenceGen(2,1);
arr = [];
for(i = 0;i < 10;i++){
  arr.push(lucas.next().value);
}
arr === [2, 1, 3, 4, 7, 11, 18, 29, 47, 76]
Note: You can assume you will get at least one argument and any arguments given will be valid (positive or negative integers) so no error checking is needed.

Note for Ruby users: sequence_gen should return an Enumerator object.

Any feedback/suggestions would much appreciated.
*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

/*
The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
You can also define generator functions using the GeneratorFunction constructor and a function* expression.

function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20

function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor"

The yield keyword is used to pause and resume a generator function (function* or legacy generator function).
*/
//Hemingway
function fib (size) {
	var first = 0,
		second = 1,
		next,
		count = 2,
		result = [first, second];
	if (size<2) {
		return 'no good'
	};
	while (count++ < size) {
		next = first + second;
		first = second;
		second = next;
		result.push(next);
	};
	return result;
};

var first = 0;
var second = 0;
function* sequenceGen(...args) {
  // Good Luck!
  	var index;
  	if (args.length == 2) {
  		first = args[0];
  		second = args[1];
  	};

  	// next = first + second;
  	// first = second;
  	// second = next;
  	yield index++;

}
//fib = sequenceGen(0, 1)
//console.log(fib.next().value);
