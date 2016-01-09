/*
function validateSequence(x) {
  if(x.length > 2) {
    //check array has minimum of 3 numbers in it
  	console.log("array of x is " + x.length);
    // check each number and the number before it for a repeatin pattern
    var pattern = null;
    for (var n = 0; n < x.length; n++) {
      console.log("this is the num " + x[n]);
      // find the difference between num in sequence
      if(!pattern) {
        pattern = x[n+1] - x[n];
        console.log("patter is " + pattern);
      };
      if(n < (x.length - 1)) {
        console.log(parseInt(x[n]) + parseInt(pattern));
        if (parseInt(x[n]) + parseInt(pattern) != x[n+1]) {
        	return false;
        };
      } else {
      	return true;
      }
    }
  }
}
*/

/*

// a variable, that returns a num
var arguments = 42;
var arr = () => arguments;

arr(); // 42

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]

let max = (a, b) => a > b ? a : b;

// if PI > 4 then "Yep" else "Nope"
var elvisLives = Math.PI > 4 ? "Yep" : "Nope";


var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

var myAge = 18;
var reps = [
    "You are younger than 18 years old",
    "You are older than 18 years old",
    "You are 18 years old"
];
var respond = myAge < 18 ? reps[0] : (myAge>18 ? reps[1] : reps[2]);
console.log(respond);

*/

/*
'use strict'
var ppl = [ { age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' } ]
;

var OrderPeople = function(people){
  return people.sort( (a, b) => a.age > b.age ? 1 : a.age < b.age ? -1 : 0); //complete this function
}
*/


/*
The numberOfOccurrences function must return the number of occurrences of an element in an array.

var arr = [0,1,2,2,3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;

var arr = [];
arr.methodName = function() { alert("Array method."); }
*/

/*
var arr = [1,1,2,3];
//arr.numberOfOccurrences
Array.prototype.numberOfOccurrences = function(num) {
  var count = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i] === num) {
      count = count + 1;
    };
  };
  return count;
}
*/

/*
You are given two arrays a1 and a2 of strings. 
Each string is composed with letters from a to z. 
Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 or a2 are empty return -1 in each language except in Haskell where you will return Nothing.

Example:

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(s1, s2) --> 13
*/

/*
function mxdiflg(a1, a2) {
  if (a1.length == 0 || a2.length == 0) {
    return -1;
  } else {
    var gap = 0;
    for (var i = 0; i < a1.length; i++) {
      for (var j = 0; j < a2.length; j++) {
        var dif = a1[i].length - a2[j].length;
        var abt = Math.abs(dif);
        if (abt > gap) {gap = abt;}
      };
    };
    return gap;
  };
}
*/

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") --> "A-Bb-Ccc-Dddd"
accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") --> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/

/*
function accum(s) {
  var l = s.split("");
  var msg = "";
  for (var e = 0; e < l.length; e++) {
    var addOn = "";
    for (var a = 0; a < e; a++) {
      addOn = addOn + l[e].toLowerCase();
    };
    msg = msg + l[e].toUpperCase() + addOn;
    if (e < l.length-1) { msg = msg + "-";};
  };
  return msg;
}
*/

/*
A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples

isSquare(-1) // => false
isSquare( 3) // => false
isSquare( 4) // => true
isSquare(25) // => true
isSquare(26) // => false
*/
/*
var isSquare = function(n) {
  if (Math.sqrt(n) % 1 == 0) {
    return true;
  } else {
    return false; // fix me
  }
}
*/
/*
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
*/

/*
binary: base 2
128 64 32 16 8 4 2 1

123 - 64 = 59
59 - 32 = 27
27 - 16 = 11
11 - 8 = 5
5 - 3 = 1
0
1

0 1 1 1 1 1 0 1

ascii
var res = String.fromCharCode(65);

*/
/*
function binaryToString(binary) {
  var base = [128,64,32,16,8,4,2,1]
  if (binary.length == 0) {
    return "";
  }else{
    var out = "";
    var charCount = binary.length / 8;
    for (var c = 0; c < charCount; c++) {
      var singleChar = 0;
      //console.log(c)
      //current 8 digits
      for (var d = 0; d < 8; d++) {
        var currentBin = (c * 8) + d;
        //console.log(binary[currentBin]);
        if (binary[currentBin] == 1) {
          //check if is 1 and add to covert to a num from bin
          //console.log(base[d])
          singleChar = singleChar + base[d];
        };
      };
      console.log(singleChar)
      out = out + String.fromCharCode(singleChar);
    };
    return out;
  }
}
*/

/*
Your task is to write a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))
*/

/*
//test functions
function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

//takes functions as inputs
function chained (functions) {
  var inputFunctions = functions;
  var inputFunctionsCount = functions.length;
  //out function
  return function out (input) {
    var myVar = null;
    for (var f = 0; f < inputFunctionsCount; f++) {
      if (myVar == null) {
        myVar = inputFunctions[0](input);
      }else {
        myVar = inputFunctions[f](myVar)
      } 
    };
    return (myVar);
  }
}

//chained([f1,f2,f3])(2.41);

//someone else's solution
function chained(functions) {
  return function(input){
    return functions.reduce(function(input, fn){ return fn(input) }, input);
  }
}*/

/*
You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

Let's say you start with this: 012345

The first thing you do is reverse it:543210
Then you will take the string from the 1st position and reverse it again:501234
Then you will take the string from the 2nd position and reverse it again:504321
Then you will take the string from the 3rd position and reverse it again:504123

Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:504132

Input:

A string of length 1 - 1000

Output:

A correctly reordered string.
*/

/*
//please do not capitalize a function that is not a constructor function, I will play along this time... 
function FlipNumber(n)
{
  //Code goes here!
  var reversed  = String(n).split("").reverse().join("");
  var holding = "";

  for (var l = 0; l < n.length; l++) {
    var switching = "";
    holding = holding + reversed .split("")[l];
    //console.log("holding " + holding);

    for (var r = l+1; r < n.length; r++) {
      switching = switching + reversed .split("")[r];
    };
    //console.log("reverseing " + switching.split("").reverse().join(""));
    reversed  = ( holding + switching.split("").reverse().join("") ); 
  };
  return reversed;
}
*/
/*
//please do not capitalize a function that is not a constructor function, I will play along this time... 
function FlipNumber(n)
{
  var firstReverse = n.split("").reverse().join("")
  var reversed = "";
  var find = function (input) {  
    //breakout the loop
    if (reversed.length == n.length) { return 1 };
    var holding = input.split("")[0];
    reversed = reversed + holding;
    //console.log(reversed);
    var count = input.length;
    var res = input.slice(1,count);
    var newInput = res.split("").reverse().join("");
    //console.log(newInput);
    find(newInput);
  }
  find(firstReverse);
  return reversed;
}
*/

/*
Complete the squareSum method so that it squares each number passed into it and then sums the results together.

For example:

squareSum([1, 2, 2]); // should return 9
*/

//one line for loop
//for (var i=2, r=[0,1]; i<10 || console.log(r); r.push(r[i-1] + r[i-2]), i++);

/*
function squareSum(numbers) {
  for (var i = 0, sum = 0; i < numbers.length; sum = sum + (numbers[i] * numbers[i]), i++);
  return sum;
}
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
*/

/*
Finish the function numberToOrdinal, which should take a number and return it as a string with the correct ordinal indicator suffix (in English). That is:

numberToOrdinal(1) ==> '1st'
numberToOrdinal(2) ==> '2nd'
numberToOrdinal(3) ==> '3rd'
numberToOrdinal(4) ==> '4th'
... and so on
For the purposes of this kata, you may assume that the function will always be passed a non-negative integer. If the function is given 0 as an argument, it should return '0' (as a string).

To help you get started, here is an excerpt from Wikipedia's page on Ordinal Indicators:

st is used with numbers ending in 1 (e.g. 1st, pronounced first)
nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
th is used for all other numbers (e.g. 9th, pronounced ninth).
*/
/*
function numberToOrdinal(n) {
  // Finish me
  if (n == 0) { return '0'};
  var strN = String(n);
  var size = strN.length;
  var suffix = "";

  if (size < 2) {
    switch (strN) {
      case "1": suffix = "st"; break;
      case "2": suffix = "nd"; break;
      case "3": suffix = "rd"; break;
      default: suffix = "th"; break;
    }
  } else {
    var tail = strN.slice(size-2, size);
    if (tail[0] == "1") {
      suffix = "th";
    } else {
      switch (tail[1]) {
        case "1": suffix = "st"; break;
        case "2": suffix = "nd"; break;
        case "3": suffix = "rd"; break;
        default: suffix = "th"; break;
      }
    }
  };

  return (n + suffix);
}
*/

/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

"a".toUpperCase();
"A".toLowerCase();

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

*/
/*
function toWeirdCase(string) {
  //TODO
  var weirdStr = "";
  var words = string.split(" ");
  for (var w = 0; w < words.length; w++) {
    var outStr = "";
    var count = 0;
    var caseSwitch = function (input) {  
      //breakout the loop
      if (outStr.length == words[w].length) { return 1 };
      var currentLetter = input.split("")[0];
      if (count % 2 == 0) {
        outStr = outStr + currentLetter.toUpperCase();
      } else if (Math.abs(count % 2) == 1) {
        outStr = outStr + currentLetter.toLowerCase();
      };
      var size = input.length;
      var res = input.slice(1,size);
      count++;
      caseSwitch(res);
    }
    caseSwitch(words[w]);
    if (w == words.length - 1) {
      weirdStr = weirdStr + outStr;
    } else {
      weirdStr = weirdStr + outStr + " ";
    };
  };
  return weirdStr;
}*/

/*
Instructions
Output
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parenthese!
*/
/*
function createPhoneNumber(numbers) {
  var outStr = "";
  for (var n = 0; n < numbers.length; n++) {
    switch (n) {
      case 0: outStr = outStr + "(" + numbers[n]; break;
      case 2: outStr = outStr + numbers[n] + ") "; break;
      case 5: outStr = outStr + numbers[n] + "-"; break;
      default: outStr = outStr + "" + numbers[n]; break;
    }
  };
  return outStr;
}
//someone else's solution 

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
*/

/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
Input

A word (string) of length 0 < str < 1000
*/

/*
function getMiddle(s)
{
  //Code goes here!
  var midChar = "";
  var chop = function (input) {
    if (input.length <= 2) { 
      midChar = input;
      return 1; 
    };
    var chopHead = input.slice(1, input.length);
    var chopTail = chopHead.substring(0, chopHead.length - 1);
    chop(chopTail);
  };
  chop(s);
  return midChar;
}

//someone else's solution 
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
*/


/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
// This method extracts the characters in a string between "start" and "end", not including "end" itself.
// If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1,4) == str.substring(4,1).
// If either "start" or "stop" is less than 0, it is treated as if it were 0.
// Note: The substring() method does not change the original string.

/*
function spinWords(string) {
  //TODO Have fun :)
  var words = string.split(" ");
  var out = "";
  for (var w = 0; w < words.length; w++) {
    if (words[w].length > 4) {
      var revWord = words[w].split('').reverse().join('');
      out = out + revWord + " ";
    } else {
      out = out + words[w] + " ";
    }
  };
  out = out.substring(0, out.length - 1)
  return out;
}

//got to start using .map
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/

/*
Finish the solution so that it takes an input 'n' (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 1000000000

       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

// var numbers = [1, 4, 9];
// var roots = numbers.map(Math.sqrt);
// // roots is now [1, 2, 3], numbers is still [1, 4, 9]

// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(num) {
//   return num * 2;
// });
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]

// var stop = false, age = 16;
// age > 18 ? location.assign("continue.html") : stop = true;

// (((String(n).length)-i)%3==0)?r=String(n)[i-1]+","+r:r=String(n)[i-1]+r

function groupByCommas(n) {
  for (var i=String(n).length,r=""; i>0; (String(n).length-i==0)?console.log("skip"):(((String(n).length)-i)%3==0)?r=String(n)[i-1]+","+r:r=String(n)[i-1]+r, i--);
  return r+(String(n)[String(n).length-1])
}