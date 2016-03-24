/*
// In this case '(' opens a section, and ')' closes a section
isBalanced("(Sensei says yes!)", "()")       // => True
isBalanced("(Sensei says no!", "()")         // => False

// In this case '(' and '[' open a section, while ')' and ']' close a section
isBalanced("(Sensei [says] yes!)", "()[]")   // => True
isBalanced("(Sensei [says) no!]", "()[]")    // => False

// In this case a single quote (') both opens and closes a section
isBalanced("Sensei says 'yes'!", "''")       // => True
isBalanced("Sensei say's no!", "''")         // => False
*/

// regular expressions
/*

subject string: the string where looking for a match
regex: a set of characters that reperent rules for searching or matching text

/pattern start /pattern ened

*/

function isBalanced(s, caps) {
	var count = 0;
	var order = "";
	for(var e in s) {
		for(var c in caps) {
			if(s[e] == caps[c]) {
				order = order + caps[c];
			}
		}
	}
	console.log(order, "string order");
	return 'hi';
}