/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

let moveZeros = (arr) => {
  let notZero = [];
  let areZero = [];
  arr.map((e) => {
    if(Number.isInteger(e) && parseInt(e) === 0) {
      areZero.push(e);
    }else {
      notZero.push(e);
    }
  });
  return [...notZero, ...areZero]
}
moveZeros([false,1,0,1,2,0,1,3,"a"])
