/*

Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite ammount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0

*/

let countChange = function(money, coins) {
  // sort the coins from largest to smallest
  coins.sort((a,b)=>{return (b-a)});
  // recursion func
  let breakChange = (denoms, ind, arr)=>{
    // debugger;
    console.log(denoms,ind,arr);

  }
  // loop with each loop removing first element of arr
  let res = 0;
  for(let n=0; n<coins.length;) {
    // break change from each denomination in arr
    breakChange([coins[n]], n, coins);
    // while( denoms.reduce((p,c)=>{return p+c},0) < money ) {
    //   // denoms + itself + more of next denoms
    //   denoms.push(coins[e]);
    //   if( denoms.reduce((p,c)=>{return p+c},0) == money) {
    //     console.log(denoms);
    //     count++;
    //   }else if(denoms.reduce((p,c)=>{return p+c},0)<money) {
    //     console.log(denoms);
    //     debugger;
    //     breakChange
    //   }
    // }
    coins.shift();
  };
}

countChange(10, [3,2]); //4
/*
3 + 3 + 3
3 + 3 + 2 + 2
3 + 2 + 2 + 2
*/

countChange(98 [ 3, 14, 8 ]); //19
