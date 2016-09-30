/*

Write a function called multiFilter which receives a variable number of filter functions. The function should return a function that receives one element (a compound filter function).

That is, if we have two functions:

function isEven(el){
  return el % 2 === 0;
}
and

function isGTten(el){
  return el > 10;
}
then

[1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten));
should return [12,20,22]

Additional Rules

multiFilter can't be implemented using loops like:

for
while
do while
WARNING: Using ES6 features may break these rules because Babel can introduce some for loops when transpiling your code. Please, open an issue if it happens.

*/

/*
var arr = [1,2,3];
arr.methodName = function() {
  console.log(this)
  alert("Array method.");
}
arr.methodName()
*/

function isEven(el){
  console.log("isEven",el)
  return el % 2 === 0;
}
function isGTten(el){
  console.log("isGTten",el)
  return el > 10;
}

// var multiFilter = function(){
//   var arg = [...arguments];
// 	return function(){
//     arg.forEach((e)=>{
//       e()
//     })
//   }();
// };

var Singleton = (function () {
  var instance;
  function createInstance(arg) {
    var a = arg;
    return function(input){
      a.forEach((f)=>{
        f(input)
      })
    }
  }
  return {
    getInstance: function (arg) {
      if (!instance) {instance = createInstance(arg)}
      return instance;
    }
  };
})();

var multiFilter = function() {
    var arg = [...arguments];
    var func = Singleton.getInstance(arg);
    func.bind(this)
}
multiFilter(isEven, isGTten)

// [1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten));


//solution

const multiFilter = (...funcs) => x => funcs.every(f => f(x));

var multiFilter = function(...predicates){
  return function(el) {
    return predicates.every(predicate => predicate(el));
  };
};

// predicate

function or(p1, p2) {
    return function(x) {
        return p1(x) || p2(x);
    }
}

// The function or consumes two predicates p1 and p2, and returns a new predicate. That returned predicate tests a value x and returns true if either p1(x) is true or p2(x) is true. Let's test it out with the two predicates negative and positive:

function negative(x) {
    return x < 0;
}
function positive(x) {
    return x > 0;
}
var nonzero = or(negative, positive);
alert(nonzero(-5));
alert(nonzero(0));
alert(nonzero(5));


// The spread syntax allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables  (for destructuring assignment) are expected.

myFunction(...iterableObj);
