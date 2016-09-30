/*
In this Kata, you will implement The Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

If there are an even number of digits, double every other digit starting with the first, and if there are an odd number of digits, double every other digit starting with the second. Another way to think about it is, from the right to left, double every other digit starting with the second to last digit.

1714 => [1*, 7, 1*, 4] => [2, 7, 2, 4]
12345 => [1, 2*, 3, 4*, 5] => [1, 4, 3, 8, 5]
891 => [8, 9*, 1] => [8, 18, 1]

If a resulting doubled number is greater than 9, replace it with either the sum of it's own digits, or 9 subtracted from it.
[8, 18*, 1] => [8, (1+8), 1] => [8, 9, 1]
(or)
[8, 18*, 1] => [8, (18-9), 1] => [8, 9, 1]

Sum all of the final digits
[8, 9, 1] => 8+9+1 => 18

Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
 18 (modulus) 10 => 8.  
 8 does not equal 0, so 891 is not a valid credit card number.
*/

/*
var s = "Hello world";
var index = 3;
s = s.substr(0, index) + 'x' + s.substr(index + 1);

var str = 'abcdefghij';
console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'

String.prototype.replaceAt=function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
   }

str.replaceAt(1,"_");
str.replaceAt(2,"_");

*/
String.prototype.replaceAt=function(index, character){ 
	return this.substr(0, index) + character + this.substr(index+character.length); 
};
function validate(n) {
	//if n is even double every other digit starting with the first
	var numStr = String(n);
	var startIndex = 1;
	if (numStr.length%2==0)
		startIndex = 0

	for (var d=startIndex; d < numStr.length; d=d+2) {
		var doubleIt = String(parseInt(numStr[d]) * 2);
		if (parseInt(doubleIt)>9)
			doubleIt = String(parseInt(doubleIt)-9);
		numStr = numStr.replaceAt(d,doubleIt);
	};
	var sum = 0;
	for (var i = 0; i < numStr.length; i++) {
		sum = sum + parseInt(numStr[i]);
	};
	if (sum%10==0) {
		return true;
	}else{
		return false;
	}
	//console.log(startIndex, numStr);
}
//validate(1234)