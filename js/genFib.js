/*

Create a function generator genfib() that returns a function fib() which always returns the next fibonacci number on each invocation (and returns 0 when being called the first time).

Example:

var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2


*/

//generator
function* fibonacci(){
  var fn1 = 0;
  var fn2 = 1;
  while (true){
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset){
        fn1 = 0;
        fn2 = 1;
    }
  }
}
var sequence = fibonacci();
sequence.next().value



function genfib() {
  var fn1 = 0;
  var fn2 = 1;
  return function fib() {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    return current;
  }
}

var fib = genfib();
fib();
// -> returns 0
