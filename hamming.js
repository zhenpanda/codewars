/*
The hamming distance of two equal-length strings is the number of positions, in which the two string differ. In other words, the number of character substitutions required to transform one string into the other.

For this first Kata, you will write a function hamming_distance(a, b) with two equal-length strings containing only 0s and 1s as parameters. There is no need to test the parameters for validity (but you can, if you want).The function's output should be the hamming distance of the two strings as an integer.

Example:

hamming_distance('100101', '101001') == 2
hamming_distance('1010', '0101') == 4
*/

//'100101'
//'101001'

function hammingDistance(a,b){
  //your code here
  var out = 0;
  var compare = function(inputA,inputB) {
  	if (inputA.length==0) { return 1 };
  	//turn to arrays
  	var arrayA = inputA.split("");
  	var arrayB = inputB.split("");
  	//get the heads
  	var inputAHead = arrayA.shift();
  	var inputBHead = arrayB.shift();
  	//turn back into string
  	var newA = arrayA.join("");
  	var newB = arrayB.join("");
  	//compare them
  	if (inputAHead[0]!=inputBHead[0]) { out++ };
  	//console.log(inputAHead, inputBHead);
  	//console.log(newA, newB);
  	compare(newA,newB);
  };
  compare(a,b);
  return out;
}

//hammingDistance('100101', '101001');