/*

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1

*/

function nextBigger(n) {
  // covert num into string array
  let arr = String(n).split("").reverse();
  // check order
  arr.map((c,i,a)=>{
    if (a[i+1]) {
      // console.log(c,a[i+1])
      if (c > a[i+1]) {
        console.log(a[i+1], c, a)
      }
    }
  })
  // console.log(arr);
}

nextBigger(2017);
// 2071

// nextBigger(12345678498765432);
