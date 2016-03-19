/*
Write a function makePalindrome that takes a string as the argument and then returns the shortest possible palindrome made from that string without modifying the original string. If more than one palindrome can be made, the function should return the solution where the given string appears at the beginning of the palindrome.

For example:

makePalindrome('a') --> 'a'
makePalindrome('ab') --> 'aba'
makePalindrome('abc') --> 'abcba'
makePalindrome('race') --> 'racecar'
makePalindrome('leveled') --> 'deleveled'
Only single word strings will be passed as arguments to the function.
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

// function makePalindrome(text) {
//   // ...
//   var checkUnique = function(str) {
//   	var arr = str.split("");
//   	var sorted = arr.sort();
//   	var unique = true;
//   	for (var i = 0; i < arr.length; i++) {
//   		//check if any two char are the same in array
//   		if (sorted[i+1]==sorted[i]) {
//   			unique = false;
//   		};
//   	};
//   	//return unique unless char semi palidrome
//   	if (unique) {return unique} else {}
//   };
//   if (checkUnique(text)) {
//   	//console.log("this string is unique, add itself to make palindrome~");
//   	//take last char off the string
//   	var sliced = text.slice(0, -1);
//   	var reversed = text.split("").reverse().join("");
//   	//console.log(sliced+reversed);
//   	return (sliced+reversed)
//   };
// }


/*
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

"rrarr".replace(/r/g, '')
*/

/*
var array = [2, 5, 9];
var index = array.indexOf(5);
Note: browser support for indexOf is limited; it is not supported in Internet Explorer 7 and 8.

Then remove it with splice:

if (index > -1) {
    array.splice(index, 1);
}

*/

function makePalindrome(text) {
	//console.log("test word is " + text);
	//check for sandwiched characters 
	var sanwhiched=false;
	var mySandwhich="";
	var sandwhichIndex;
	var checkSandwhich = function(str) {
		var newStr = str;
		var arr = newStr.split("");
	  	//check if a sandwhich set exists
	  	for (var i = 0; i < arr.length; i++) {
	  		//check if two chars are next to eachother
	  		if (arr[i+2] == arr[i]) { 
	  			mySandwhich = (arr[i+2]+arr[i+1]+arr[i]);
	  			//console.log("found the sandwhich " + mySandwhich);
	  			sanwhiched=true;
	  			sandwhichIndex=i;
	  			break;
	  		};
	  	};
	  	//extract out the sanwhiched;
	  	if (sanwhiched) {
			innerPalinedrome = mySandwhich
		  	//cut the sandwhich from arr
			arr.splice(sandwhichIndex, 1);
			arr.splice(sandwhichIndex, 1);
			arr.splice(sandwhichIndex, 1);
			//console.log("cut sandwhich picec " + arr.join(""))
			//recurse
			checkDouble(arr.join(""));
	  	}else{
	  		checkDouble(newStr);
	  	}
	};
	//check for char next to eachother that's the same
	var unique=true;
	var midIndex=null;
	var innerPalinedrome = "";
	var parts;
	var side;
	var checkDouble = function(str) {
		var newStr = str;
		var arr = newStr.split("");
	  	//check if any two char are the same in array
	  	for (var i = 0; i < arr.length; i++) {
	  		//check if two chars are next to eachother
	  		if (arr[i+1] == arr[i]) { 
	  			midIndex = i 
	  			unique = false;
	  			sanwhiched = false;
	  			checkSide(midIndex, newStr.length)
	  		};
	  	};
	  	//extract the dup chars out by adding it to a string
	  	if (midIndex!=null) {  	
			innerPalinedrome = arr[midIndex] + innerPalinedrome;
			innerPalinedrome = innerPalinedrome + arr[midIndex];	
		  	//cut the dups from arr
			arr.splice(midIndex, 1);
			arr.splice(midIndex, 1);
			midIndex=null;
			//recurse
			checkDouble(arr.join(""));
	  	}else{
	  		//console.log([arr.join(""), innerPalinedrome]);
	  		parts = [arr.join(""), innerPalinedrome]
	  		return 1;
	  	};
	};
	//check which side is going to be mirrored
	var checkSide = function(index, total) {		
		if (index*2 < total) { side = "R" }else{ side = "L" };
	};

    //check if str is already a palindrome
	if (text==text.split('').reverse().join('')) {
		return text;
	} else {
		//check for dups
		checkSandwhich(text);
		//checkDouble(text);
		//console.log(mySandwhich);
		//console.log(parts);
		//if dups create differently
		if (!unique) {		
			var reversed = parts[0].split("").reverse().join("");
			if (side == "R") {
				return (reversed+parts[1]+parts[0])
			}else if (side == "L") {
				return (parts[0]+parts[1]+reversed)
			};
		}else{		
			//unique char do mirror
			var sliced = text.slice(0, -1);
			var reversed = text.split("").reverse().join("");
			if (reversed[0]==reversed[1]) {
				reversed = reversed.slice(1);
			};
			return (sliced+reversed)
		}
	}
}

// makePalindrome("noontaxes");
// result: sexatnoontaxes
// makePalindrome("ispygypsiesrun");
// nurseispygypsiesrun

// nurseispygypsiesrun
// nurseisptruepsiesrun