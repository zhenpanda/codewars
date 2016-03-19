/*

Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) 
in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

*/
/*
l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

Test.describe("Testing For Sum of Pairs", function(){
Test.expect(sum_pairs(l1, 8)+"" == [1, 7]+"", "Basic: ["+l1+"] should return [1, 7] for sum = 8");
Test.expect(sum_pairs(l2, -6)+"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
Test.expect(sum_pairs(l3, -7) == undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
Test.expect(sum_pairs(l4, 2)+"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
Test.expect(sum_pairs(l5, 10)+"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
Test.expect(sum_pairs(l6, 8)+"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
Test.expect(sum_pairs(l7, 0)+"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
Test.expect(sum_pairs(l8, 10)+"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
});

*/
var sum_pairs = function(ints, s) {
    //your code here
    var leftNumAry = ints;
    var leftNum;
    var leftIndex = 0;
    //keep track of add recurse func
    var rightCount = null;
    var rightIndex = 0;

    var indexCheck = ints.length;
    var out = [];

    var checkSumLeft = function(main_ary) {
	    //set cache obj
	    if (!checkSumLeft.cache){ checkSumLeft.cache = {} };

	    //break out of the recursion
    	if (main_ary.length==0) { return 1 };
    	//reset at the start of function
    	leftNum = leftNumAry.shift();
    	//console.log(leftNum, "this is the left number~!");
		//console.log(leftNumAry, "this is the left ary");

		//nested second recursive function    	
    	var checkSumRight = function(input_ary) {
    		//setup rightCount to start counting
    		if (rightCount==null) { 
    			rightCount=0;
    			rightIndex=rightIndex+leftIndex; 
    		}
    		if(rightCount>=input_ary.length) {
    			//console.log("stop")
    			rightCount=null;
    			rightIndex=0;
    			return 1;
    		}    	
			//check cache if left num exist as key and right is a value of that key
			if (!checkSumLeft.cache.hasOwnProperty(leftNum) || checkSumLeft.cache[leftNum]!=input_ary[rightCount]){
	            checkSumLeft.cache[leftNum] = input_ary[rightCount];
	    		//console.log(checkSumLeft.cache);
	    		
	    		//console.log(input_ary[rightCount], "this is the right number~!")
	    		//check if it all adds up
	    		//console.log(leftNum, "+", input_ary[rightCount])
	    		if ((leftNum+input_ary[rightCount])==s) {
	    			//console.log(leftNum, ":", leftIndex, " <-index check-> ", input_ary[rightCount], ":", (rightIndex+1))
	    			if ((rightIndex+1)<indexCheck) {
	    				//check index
	    				indexCheck=rightIndex+1;
	    				out = [leftNum,input_ary[rightCount]];
	    			};
	    		};
	        };

    		rightCount++;
    		rightIndex++;
    		checkSumRight(input_ary);
    	}

    	//recurse to check sum
		checkSumRight(leftNumAry);
		//increase the index count
    	leftIndex++
    	//recurse to start with next index
    	checkSumLeft(leftNumAry);
    };
    checkSumLeft(ints);
    //edgecase
    if (out.length==0) { return undefined };
    return out;
}

//sum_pairs([11, 3, 7, 5], 10)
//sum_pairs([4, 3, 2, 3, 4], 6)
//sum_pairs([10, 5, 2, 3, 7, 5], 10)
//sum_pairs([1, 4, 8, 7, 3, 15], 8)

/* Memoization */
/*
Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. 
Because JavaScript objects behave like associative arrays, they are ideal candidates to act as caches. 
Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function.  
However, if the data is not cached, then the function is executed, and the result is added to the cache.
*/

// the cache object
function memfactorial(n) {
//take the input of n
	//if this function is not cached
    if (!memfactorial.cache){
    	//set cache
        memfactorial.cache = {
            "0": 1,
            "1": 1
        };
    }
    //if cache doesn't have property 
    if (!memfactorial.cache.hasOwnProperty(n)) {
    	//put stuff into the cache
        memfactorial.cache[n] = n * memfactorial(n-1);
    }
    //return the function
    return memfactorial.cache[n];
}

function memoize(fundamental, cache) {
	//cache is either cache or new empty cache
    cache = cache || {};

    //shell takes an input
    var shell = function(arg) {
    	//if cache doesn't have the input, put that into cache
        if (!cache.hasOwnProperty(arg)){
            cache[arg] = fundamental(arg);
        }
        return cache[arg];
    };
    //return the shell function
    return shell;
}

//fib
var fibonacci = (function() {
  //empty memo obj
  var memo = {};
  //takes in 2 inputs
  function f(x, n) {
  	//declare the value var
    var value;
    //check if input is already inside of memo obj
    memo[x] = memo[x] || {};

    if (x in memo && n in memo[x]) {
      value = memo[x][n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(x, n - 1) + f(x, n - 2);

      memo[x][n] = value;
    }

    return value;
  }

  return f;
})();


function memoize(func) {
  var memo = {};
  //create the slice method for arrays
  var slice = Array.prototype.slice;

  //create a function
  return function() {
  	//create args which is slice that takes in argument as this
    var args = slice.call(arguments);
    //if args exists in memo
    if (args in memo)
      //put args into memo as a key
      return memo[args];
    else
      //
      return (memo[args] = func.apply(this, args));

  }
}

// memoize solution 
var sum_pairs = function(ints, s) {
  //empty memo obj
  var out = [];
  var outInd = ints.length;

  for (var n = 0; n < ints.length; n++) {
  	var leftNum = ints.shift();
  	for (var r = 0; r < ints.length; r++) {
  		//f(ints[r],leftNum)
  		f(leftNum,ints[r])
  	};
  };

  //takes in 2 inputs
  function f(x, n) {
  	//declare the value var
  	if (!f.cache){ f.cache = {} };
	if (!f.cache.hasOwnProperty(n) || f.cache[n]!=x) {
        var key = String(n);
        f.cache[key] = x;
        if (x+n==s && r<outInd) {
        	outInd = r;
        	out = [parseInt(x),parseInt(n)];
        };
    }
  }
  if (out.length==0) { return undefined };
  console.log(f.cache);
  return out;
}
//sum_pairs([11, 3, 7, 5], 10)
//sum_pairs([4, 3, 2, 3, 4], 6)
//sum_pairs([10, 5, 2, 3, 7, 5], 10)
//sum_pairs([1, 4, 8, 7, 3, 15], 8)

//sum_pairs([3,7,5], 10)
//sum_pairs([13,-3],10)