/*

Function composition is a powerful technique. For example:

function sum(x, y) {
  return x + y;
}

function double(x) {
  return sum(x, x);
}

function minus (x, y) {
  return x - y;
}

function addOne(x) {
  return sum(x, 1);
}

double(sum(2, 3)); // 10
But in complex expressions, composition may be difficult to understand. For example:

double(double(addOne(sum(7, minus(sum(5, sum(4, 5)), 4))))); // 72
In this kata, we will implement a function that allows us to perform this by applying a fluid style:

c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute(); // 72
Your job is implement the chain function:

function chain(fns) {
}

var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});
As you can see, this function receives the methods to be chained and returns an object that allows you to call the chained methods. The result is obtained by calling the execute method.

Chained functions receive an arbitrary number of arguments. The first function in the chain receives all its arguments. In the other functions, the first argument is the result of the previous function and then it only receives the remainder arguments (second, third, etc.). The tests always pass the appropriate arguments and you do not have to worry about checking this.

Note that the chain can be reused (the internal state is not stored):

c.sum(3, 4).execute(); //7
c.sum(1, 2).execute(); //3
Other examples:

var c1 = c.sum(1, 2);
c1.execute(); // == fns.sum(1, 2) == 3
c1.double().execute(); // == fns.double(fns.sum(1, 2)) == 6
c1.addOne().execute(); // == fns.addOne(fns.sum(1, 2)) == 4
c1.execute(); // == fns.sum(1, 2) == 3

var c2 = c1.sum(5);
c2.addOne().execute(); // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
c2.sum(3).execute(); // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
c2.execute(); // == fns.sum(fns.sum(1, 2), 5) == 8

c1.execute(); // == fns.sum(1, 2) == 3

*/

// #1
var o = new Object();
o.method = function(){}

// #2
var o = new Object();
o.prototype.method = function(){}

// #3
function myObject() {
    this.method = function(){}
}
var o = new myObject();

// #4
function myObject() {}
myObject.prototype.method = function(){}
var o = new myObject();

// #5
var o = {
    method: function(){}
}

var newObj = {
    met1 : function () {
        alert('hello');
    }
}
newObj.met1();

// calcualtor example
var Calculator = function(start) {
    var that = this;

    this.add = function(x) {
        start = start + x;
        return that;
    };

    this.multiply = function(x) {
        start = start * x;
        return that;
    };

    this.equals = function(calback) {
        calback(start);
        return that;
    };
};

// $(document).ready(function() {
//
//     var resultDiv = document.getElementById('results');
//     new Calculator(0)
//         .add(1)
//         .add(2)
//         .multiply(3)
//         .equals(function(result) {
//             resultDiv.innerHTML = result;
//         });
// });

// Making self-replication explicit
function self_replicate(fn) {
    console.log("here i go!")
    return function x() {
        fn.apply(this, arguments);
        return x;
    };
}
function add(n) {
    function calc(x) {
      return n+=x, calc;
    }
    calc.valueOf = function() {
      return n;
    };
    return calc;
}


//method chainning
var obj = function() {
  var i = 0;
  var add = function(j){
    i+-j;
    return this;
  }
  return {add:add};
}
var x = obj();




// functions
function sum(x, y) {return x + y}
function double(x) {return sum(x, x)}
function minus (x, y) {return x - y}
function addOne(x) {return sum(x, 1)}
var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});

// chain function
function chain(fns) {

  let c = {i:0}
  for (let k in fns) {
    c[k] = function(f,s){
      switch (k) {
        case "sum":
          if (f&&s) {
            this.i=fns[k](f,s)+this.i;
          }else{
            this.i=fns[k](f,this.i)
          }
          break;
        case "double":
          this.i=fns[k](this.i)
          break;
        case "minus":
          this.i=fns[k](this.i,f);
          break;
        case "addOne":
          this.i=fns[k](this.i)
          break;
        default:
          break;
      }
      // console.log(k,this.i)
      return copy;
    }
  }
  c.execute = function() {
    return this.i;
  }
  return c;

};

console.log(c);

// console.log(c.sum(4, 5).sum(5).execute());

// c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute();
// 72

c1 = c.sum(4,5);
c2 = c1.sum(5);
c1.execute()


var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean();   // A new Boolean object
var x5 = new Array();     // A new Array object
var	x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object





function sum(x, y) {return x + y}
function double(x) {return sum(x, x)}
function minus (x, y) {return x - y}
function addOne(x) {return sum(x, 1)}
var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});

// saving result as an input, treating it as a variable
function chain(fns, result) {
  var ret = {
    execute: function() {
      return result;
    },
  };
  // looping through the fns obj
  for (let key of Object.keys(fns)) {
    ret[key] = function() {
      // create arguments that is new
      var args = Array.prototype.slice.call(arguments);
      console.log(args,result,ret)
      if (result !== undefined)
      // add result to front of the array
        args.unshift(result);
        // apply method calls a function with a given this value and arguments provided as an array
      return chain(fns, fns[key].apply(this, args));
    };
  }
  console.log(ret)
  return ret;
}
c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute();











//
