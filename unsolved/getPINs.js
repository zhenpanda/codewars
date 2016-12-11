/*

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we count on you!

*/

function getPINs(observed) {
  // creating an arr of arr to mimic key pad
  let keypad = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [ ,0, ]
  ];
  // find adj number on keypad
  function adjKeysFinder(keypadLayout,num) {
    // finding the num position on keypad
    let rowPos, colPos;
    // console.table(keypadLayout)
    keypadLayout.map((rowCur,rowInx,rowArr)=>{
      rowCur.map((colCur,colInx,colArr)=>{
        if (colCur===num) {rowPos = rowInx;colPos = colInx;}
      })
    })
    // console.log(rowPos,colPos)
    let adjKeys = [num];
    // top and bottom
    if (rowPos-1 > -1)
      if (Number.isInteger(keypadLayout[rowPos-1][colPos]))
      adjKeys.push(keypadLayout[rowPos-1][colPos])
    if (rowPos+1 <= 3)
      if (Number.isInteger(keypadLayout[rowPos+1][colPos]))
      adjKeys.push(keypadLayout[rowPos+1][colPos])
    // finding the keys to left and right
    if (colPos-1 > -1)
      if (Number.isInteger(keypadLayout[rowPos][colPos-1]))
      adjKeys.push(keypadLayout[rowPos][colPos-1])
    if (colPos+1 <= 2)
      if (Number.isInteger(keypadLayout[rowPos][colPos+1]))
      adjKeys.push(keypadLayout[rowPos][colPos+1])
    return adjKeys
  }
  // console.log(adjKeysFinder(keypad,8).map((n)=>{return String(n)}))
  let possibleKeys = [];
  String(observed).split("").map((n)=>{ possibleKeys.push(adjKeysFinder(keypad,parseInt(n))) })
  // recusion with call and do funcs, still need to grab all the indexs before the callback is called

  // callManyTimes takes in an array of indexes and runs a callback function
  function callManyTimes(maxIndices, func) {
    // callManyTimes exec the doCallManyTimes function
    doCallManyTimes(maxIndices, func, [], 0);
  }
  // doCallManyTimes takes an array of indexes and the callback function along with an empty arr with and a zero
  function doCallManyTimes(maxIndices, func, args, index) {
    // if maxIndices has noting in it exec the callback with the arr passed in
    if(maxIndices.length == 0) {
      // rest is passed in from recusive call
      // the callback is taking the current value and being exec
      func(args);
    }else{
      // rest is the first element of the arrIndexValues
      let rest = maxIndices.slice(1);
      // run a for loop with value of the rest as end of
      for(args[index] = 0; args[index] < maxIndices[0]; args[index]++) {
          // arg is the current level of arr, while index is the current index of that arr
          // holder.push(args[index])
          doCallManyTimes(rest, func, args, index + 1);
      }
    }
  };
  let arrIndexValues = []
  for (let i=0; i<possibleKeys.length; i++) {arrIndexValues.push(possibleKeys[i].length)}
  console.table(arrIndexValues)

  // exec callManyTimes
  let result = [];
  callManyTimes(arrIndexValues, (a)=>{
    // unwrap combo from possibleKeys arr
    console.log(a)
  });
  // return result;
}

// getPINs(8) // ["5", "7", "8", "9", "0"]
getPINs(11) // ["11", "22", "44", "12", "21", "14", "41", "24", "42"]
// getPINs(369) // 36 combos //["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
