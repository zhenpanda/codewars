/*

Define a function

var lastDigit = function(str1, str2){
  // see JavaScript remarks below
}
that takes in two numbers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6.

The inputs to your function will always be non-negative integers.

Examples

lastDigit("4", "1")           //       4 => 4
lastDigit("4", "2")           //      16 => 6
lastDigit("9", "7")           // 4782969 => 9
lastDigit("10","10000000000") //=> 0
Remarks

JavaScript

Since JavaScript doesn't have native arbitrary large integers, your arguments are going to be strings representing non-negative integers, e.g.

lastDigit("10", "10000000000");
The kata is still as hard as the variants for Haskell or Python, don't worry.


*/

//     table
//
// 1   2 3 4
// 0   0 0 0
// 1   1 1 1
// 2   4 8 6
// 3   9 7 1
// 4   6 4 6
// 5   5 5 5
// 6   6 6 6
// 7   9 3 1
// 8   4 2 6
// 9   1 9 1

//Finding the last digit of a positive integer is the same as finding the remainder of that number when divided by 10

/*

if a Congruent b (mod N)
and
c Congruent d (mod N)
then
ab Congruent bd (mod N)

a - b = multiple of N
c - d = mulitple of N

if a Congruent b (mod N)
a^k Congruent b^k (mod N)

so 17^17

  17^17 Congruent 7^17 cause mod 10 takes 10 alway
  7^2 * 7^8 * 7^1 =  7^17


*/

var lastDigit = function(str1, str2) {
  // convert str to numbers
  let numOne = parseInt(str1);
  let numTwo = parseInt(str2);

  // numOne could be reduced to last digit
  

  return "Output";
}

lastDigit("455", "1");
