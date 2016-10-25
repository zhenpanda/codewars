/*

Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples:
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

*/

function validParentheses(parens) {
  let parensL = 0;
  let parensR = 0;
  parens.split("").map((e)=>{
    if (e == "(") {
      parensL++;
    }else if (e == ")") {
      parensR++;
    }
  });
  let c = parens.length - 1;
  if ( parens[0] == ")" ) {
    return false;
  }else if (parens[c] == "(") {
    return false;
  }else if (parensL != parensR) {
    return false;
  }
  return true;
};

validParentheses( "())" );
