/*

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

function maxSequence(arr){
  // edge-case check
  let smallestNum = Math.min(...arr);
  let largestNum = Math.max(...arr);
  if (arr.length == 0 || largestNum < 0) return 0;
  // only positive numbers
  if (smallestNum > -1) {
    return arr.reduce((p,c)=>{
      return p+c;
    })
  }else{
    // create subarray
    arr.map((e,i,a)=>{
      // must start with a positive num
      if (e > -1) {
        // add all numbers after starting number
        let sum = 0;
        for (let s = i; s < arr.length; s++) {
          // if that sum is bigger than biggest single number, return that
          sum+= a[s]
          if (sum > largestNum) {
            largestNum = sum;
          }
        }
      }
    })
    return largestNum;
  }
}
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //6


// cleaned up

function maxSequence(arr){
  let smallestNum = Math.min(...arr);
  let largestNum = Math.max(...arr);
  if (arr.length == 0 || largestNum < 0) return 0;
  if (smallestNum > -1) {
    return arr.reduce((p,c)=>{ return p+c })
  }else{
    arr.map((e,i,a)=>{
      if (e > -1) {
        let sum = 0;
        for (let s = i; s < arr.length; s++) {
          sum+= a[s]
          if (sum > largestNum) {
            largestNum = sum;
          }
        }
      }
    })
    return largestNum;
  }
}
