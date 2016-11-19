/*

Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

Examples:
validBraces( "(){}[]" ) => returns true
validBraces( "(}" ) => returns false
validBraces( "[(])" ) => returns false
validBraces( "([{}])" ) => returns true


*/

function validBraces(braces){
  // check to see when a brace is opened
  let open = ["(","{","["];
  let close = [")","}","]"];
  // find the corrponding braces
  function pairing(head) {
    let typeIndex;
    for (let p = 0; p < open.length; p++) {
      if (head === open[p]) {
        typeIndex = p;
      }
    }
    return close[typeIndex];
  };

  // do the easy check
  function mirror(inputThing) {
    // find the other pair
    let tail = pairing(inputThing[0]);
    // stop recussion
    if (inputThing.length === 0) {
      return true
    };
    if (tail === inputThing[inputThing.length-1]) {
      let newThing = inputThing.slice(1, -1);
      return mirror(newThing);
    }else {
      // console.log("not too easy now");
      return breakOpen(inputThing);
    }
  }
  return mirror(braces);

  // function that breaks open the string into braces
  function breakOpen(inputStr, res) {
    // console.log("current state:", inputStr, res);

    // breakOpen recussive stop point
    if (inputStr.length%2 !== 0) {
      // console.log("this is odd")
      return false;
    }else if (inputStr.length === 0 && res !== null) {
      // if there are no more inside things, check the rest of the string
      // setup recussion again
      inputStr = res;
    }else if (inputStr.length === 0 && res === null) {
      // console.log("no more inside, no more leftovers");
      return true;
    };

    // setup
    let inside = "";
    // check what kind of braces we dealing with
    let tail = pairing(inputStr[0])
    let leftovers;
    // find where the closing point is, save the inside into a varibale
    for (let s = 1; s < inputStr.length; s++) {
      leftovers = s;
      if (inputStr[s] !== tail) {
        inside =  inside + inputStr[s];
      }else {
        break;
      }
    }
    // grab the rest of the inputStr
    var outside = inputStr.substring(leftovers+1, inputStr.length);

    // console.log("targeted braces ", inputStr[0], inputStr[tail]);
    // console.log("inside of target is", inside);

    // if there are any left over
    if (outside) {
      res = outside;
    }else{
      res = null;
    }
    // console.log("outside of target is", res);

    // run breakOpen again recussively
    return breakOpen(inside, res);
  }

}

validBraces("(){}[]")
// validBraces("(({{[[]]}}))")

// other solutions
function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
}
