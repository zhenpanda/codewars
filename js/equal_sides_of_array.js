/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:

An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negaive.

Output:

The index N such as the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

*/

/*
var array = [2, 5, 9];
var index = array.indexOf(5);
if (index > -1) {
    array.splice(index, 1);
};
*/

// Array.prototype.heart = function(mid) {
// 	var lside = this[mid-1];
// 	var rside = this[mid+1];
// 	if (lside == rside) {};
// };

function findEvenIndex(arr) {
  //Code goes here!
  var mid;
  var midStart;
  var state;
  if (arr.length%2 == 0 ) {
  	mid = arr.length/2;
  	midStart = mid;
  	state = 0;
  }else{
	mid = ((arr.length-1)/2);
  	midStart = mid+1;
  	state = 1;
  };
  var left = 0;
  var right = 0;
  var out;
  	var find = function(input_ary) {
  	  //breakout of the loop
  	  if (mid < 2) { 
  	  	if (input_ary[0]==input_ary[1]) {
  	  		out = 1;
  	  	}else{
  	  		out = -1;
  	  	}
  	  	return 1;
  	  };
  	  //check for sum symmetry
	  for (var n = 0; n < mid; n++) {
	  	left = left + arr[n];
	  	right = right + arr[midStart+n];
	  	//console.log(mid, "<- is mid, ", left, right, "<-these are the sums~!");
	  };
  		//find until mirrored if any
		if (left==right) {
			//everything adds up
		  	out = mid;
		  }else{
			if (state==1) { 
				input_ary.splice(mid,1); 
				state = 0;
			};
			input_ary.splice(mid-1,1);
			input_ary.splice(mid-1,1);
			mid = (input_ary.length)/2;
			//reset everything
			midStart = mid;
			left = 0;
			right = 0;
			//console.log(mid,input_ary,"start of recurs!");
			//pass back into find recurs with care
			find(input_ary);
		};
	}  	
  	find(arr);

  return out;
}
//findEvenIndex([1,2,3,4,3,2,1]);
//findEvenIndex([1,100,50,-51,1,1]);
//findEvenIndex([1,2,3,4,5,6]);
//findEvenIndex([20,10,30,10,10,15,35]);
//findEvenIndex([10,10,-1,10,-2,10,10]);