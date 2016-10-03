/*

Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

Example:

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr) //=> returns 3

*/

function highestRank(arr){
  let rank = {};
  let max = 0;
  arr.map((n)=>{
    if (n in rank){
      rank[n]++
      if (rank[n] > max) {
        max = rank[n]
      }
    }else{
      rank[n] = 1
    }
  });
  let biggest = [];
  for (let val in rank) {
    if (rank[val] == max) {
      biggest.push(parseInt(val));
    }
  }
  let out = 0;
  biggest.map((b)=>{
    if (b > out) {
      out = b;
    }
  })
  return out;
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])
