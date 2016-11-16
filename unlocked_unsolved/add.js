/*

We want to create a function that will add numbers together when called in succession.

add(1)(2);
// returns 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
and so on.

A single call should return the number passed in.

add(1) // 1
and we should be able to store the result and reuse it.

var addTwo = add(2);
addTwo // 2
addTwo + 5 // 7
addTwo(3) // 5
addTwo(3)(5) // 10

*/

//Module Pattern Javascript: Recall function (IIFE)

//declare a function that takes one argument
var recall = function (word) {
	//declare a private variable that's a string because of closure my function will be able to access this variable
	var sentense = '';
	//declare a function that takes two arguments, a string and a callback
	var chatter = function(newWord, callback) {
		//if newWord is not an empty input add it to sentence, then return the callback function
	    if (typeof newWord !== "undefined") {
	    	sentense += newWord + ' ';
	    	//returning the callback starts the recursion
	        return callback;
	    //else return back the sentence
	    } else {
			return sentense;
	    }
	}
	//runs chatter passing it word, create a callback function call it repeatRecall
	return chatter(word, function repeatRecall(word) {
		//and the repeatRecall callback function returns the chatter function again to create a recursion
		// recall(word) -> chatter(word, callback){} -> callback(word) -> chatter(word, repeatRecall)
		return chatter(word, repeatRecall)
	});
	//things that are reused because of closure
	//var sentense
	//function expression chatter
	//callback function repeatRecall
};

//recall('okay');
recall('Sorry,')('Your')('whole')('life')('is')('just')('a')('dream.')('I')('have')('been')('trying')('to')('tell')('you,')('someone')('has')('erased')('your')('memory.')();


var add = function(n) {
  var sum = 0;
  // just declaring noting is happening yet bro
  var plus = function(i, cb) {
    // adding the numbers
    sum=sum+i;
    console.log(i, sum, " running plus", cb)

    // Return a reference to the function cb().
    return cb;
  }
  // return a function that is going to take an input, and a callback
  return plus(n, function addThem(num) {
    // console.log(num, sum, " running addThem");
    return plus(num, addThem);
    // the callback returns a the plus function that was declared with the a callback passed in
  })
}

function add(n){
  var fn = function(x) {
    return add(n + x);
  };

  fn.valueOf = function() {
    return n;
  };

  return fn;
}

function add(n){
  var fn = function(x){ return add(n+x); }
  fn.toString = function(){ return n; }
  return fn;
}


Function.prototype.sum = 0;
Function.prototype.valueOf = function(){
  return this.sum;
}
function add(n){
  var f = function(num){
    f.sum += num;
    return f;
  }
  return f(n);
}
add(1)(2)(3)(4)(5);



// function curry(fx) {
//   var arity = fx.length;
//
//   return function f1() {
//     var args = Array.prototype.slice.call(arguments, 0);
//     if (args.length >= arity) {
//       return fx.apply(null, args);
//     }
//     else {
//       return function f2() {
//         var args2 = Array.prototype.slice.call(arguments, 0);
//         return f1.apply(null, args.concat(args2));
//       }
//     }
//   };
//
// }
// var sumFour = curry(function(w, x, y, z) {
//   return w + x + y + z;
// });
// console.log(sumFour(1)(2)(3)(4));
