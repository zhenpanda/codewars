/*

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example

add("123", "321"); -> "444"
add("11", "99"); -> "110"
Notes

The input numbers are big.
The input is a string of only digits
The numbers are positives

*/

function add(a, b) {
  let longestNum, gap;
  let res = '';
  if (a.length - b.length > 0) {
    gap = Math.abs(a.length - b.length);
    for(let p=0 ;p<gap; p++) {b = "0"+b};
  }else if (a.length - b.length < 0) {
    gap = Math.abs(a.length - b.length);
    for(let p=0 ;p<gap; p++) {a = "0"+a};
  }
  if(a.length == b.length ) {
    let carryOver = false;
    for(let n=a.length-1; n>-1 ; n--) {
      // console.log(a[n],b[n]);
      let sum = parseInt(a[n]) + parseInt(b[n]);
      if (carryOver) sum++;
      if (sum >= 10) {
        carryOver = true;
        sum = String(sum).split("")[1];
        res = sum + res;
      }else{
        carryOver = false;
        res = String(sum) + res;
      }
    }
    if(carryOver) res = "1" + res;
  }
  return (res);
}

add("999999999","1");
