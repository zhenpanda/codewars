/*

Write a function that takes an integer and returns an Array [A, B, C] where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.

For example, solution(20) should return [5, 2, 1]

*/

function solution(number){
  let multiplesThree = [];
  let multiplesFive = [];
  let multiplesAll = [];
  while (number--) {
    if (number<1) {
      break;
    }
    if (number%3 == 0 && number%5 != 0) {
      multiplesThree.push(number)
    }
    if (number%3 != 0 && number%5 == 0) {
      multiplesFive.push(number)
    }
    if (number%3 == 0 && number%5 == 0) {
      multiplesAll.push(number)
    }
  }
  return [multiplesThree.length, multiplesFive.length, multiplesAll.length]
}

// solution(20)
