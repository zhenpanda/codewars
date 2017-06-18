/*

Overlapping Intervals

List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

###Examples:

sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); //=> returns 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); //=> returns 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); //=> returns 19


JSON.parse('["item1", "item2", "item3"]');

let set = new Set();
let uniqSet = [];

intervals.map((e)=>{set.add(e.toString())});
set.forEach((v)=>{
let nums = v.split(",");
uniqSet.push([nums[0],nums[1]])
});

*/

function sumIntervals(intervals) {
  // find overlapping elements starting for first element
  function findOverlap(arr, sum) {
    let overlappers = [arr[0]];
    let leftovers = [];
    for(let e=1; e<arr.length; e++) {
      if( arr[e][0] <= arr[0][1] && arr[e][1] >= arr[0][1]) overlappers.push(arr[e]);
      else if(arr[0][0] <= arr[e][0] && arr[0][1] >= arr[e][1]) overlappers.push(arr[e]);
      else leftovers.push(arr[e]);
    };
    let largest = 0;
    let smallest;
    overlappers.map((o)=>{
      if(o[1] > largest) largest = o[1];
      if(!smallest) smallest = o[0];
      else if(o[1] < smallest) smallest = o[0];
    });
    sum+=largest-smallest;
    if (leftovers.length==0) return sum;
    else return findOverlap(leftovers, sum);
  };
  return findOverlap(intervals, 0);
}

sumIntervals([ [ 1, 20 ], [ 2, 19 ], [ 5, 15 ], [ 8, 12 ] ]);
