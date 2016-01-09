/*
A function that works sometimes

This kata is heavily influenced by the Once kata. It just adds a few extra steps to test fundamentals.

Implement a function sometimes that takes another funciton as an argument and returns a new version of that function that will behave as the following:

// Example function that will be passed as an argument to sometimes
function add (a, b) {
    return a + b;
}

var s = sometimes(add);

// The first 3 tmes we call s it returns add's expected output
s(4, 6) // returns 10
s(3, 6) // returns 9
s(2, 6) // returns 8

// But the 4th time it returns a default message 'hmm, I don't know!'
s(1, 6) // returns 'hmm, I don't know!'

// Each consecutive odd call returns add's expected output
s(1, 5) // returns 6

// Each consecutive even call doesn't work and returns 'hmm, I don't know!'
s(1, 4) // returns 'hmm, I don't know!'
*/

// function greet() {
//   var reply = [this.person, 'Is An Awesome', this.role].join(' ');
//   console.log(reply);
// }
// var i = {
//   person: 'Douglas Crockford', role: 'Javascript Developer'
// };

// greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer

// function list() {
//   return Array.prototype.slice.call(arguments);
// }

// var list1 = list(1, 2, 3); // [1, 2, 3]

// // Create a function with a preset leading argument
// var leadingThirtysevenList = list.bind(undefined, 37);

// var list2 = leadingThirtysevenList(); // [37]
// var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

// someFunction = function() {
//     alert("done");
// }

// someFunction = (function() {
//     var cached_function = someFunction;
//     return function() {
//         // your code
//         var result = cached_function.apply(this, arguments); // use .apply() to call it
//         // more of your code
//         return result;
//     };
// }) ();

/*
function add (a, b) {
  return a + b;
}

function sometimes(fn) {
  // your code goes here
  var counter = {count:0};
  return function() {
    // your code
    counter.count = counter.count + 1;
    var currentValue;
    if (counter.count % 2 == 0) {
      currentValue = "even";     
    } else {
      currentValue = "odd";
    }
    //resultFn is taking the "this" of sometimes and copying the inputed function from fn
    // more of your code
    if (counter.count < 4) {
      var resultFn = fn.apply(this, arguments); // use .apply() to call it
    } else if (counter.count == 4) {
      return ("hmm, I don't know!");
    } else if (counter.count > 4 && currentValue == "odd") {
      var resultFn = fn.apply(this, arguments); // use .apply() to call it
    } else if (counter.count > 4 && currentValue == "even") {
      return ("hmm, I don't know!");
    };
    return resultFn;
  };
}

var s = sometimes(add);

function sometimes(fn){
  var i = 0;
  return function(){
    return ++i && (i < 3 || i % 2) ? fn.apply(0, arguments) : "hmm, I don't know!";
  }
}
*/