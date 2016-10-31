/*

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

// console.log(ledger.hasOwnProperty('test'))
// console.log(delete ledger.test)
// console.log(ledger)
// return 0;

function findOdd(ary) {
  let ledger = {};
  ary.map((e)=>{
    if (ledger.hasOwnProperty(String(e)) == false) {
      ledger[e] = "odd";
    }else{
      delete ledger[e];
    }
  })
  let num = Object.keys(ledger);
  return (parseInt(num[0]));
}


function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
