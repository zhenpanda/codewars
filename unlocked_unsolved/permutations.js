/*

In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.

*/
/*

p(n,r)= n!/(n-r)!

function printPermutations(array, k){
    var combinations = [];
    var indices = [];

    function run(level, start){
        for(var i=0; i < array.length; i++){
            if(!indices[i]){
                indices[i] = true;
                combinations[level] = array[i];
                if(level < k - 1){
                    run(level + 1, i + 1);
                } else {
                    print(combinations.join(" "));
                }
                indices[i] = false;
            }
        }
    }
    run(0, 0);
}

printPermutations([1, 2, 3, 4], 3);

*/

function permutations(s) {
  let combinations = [];
  let indices = [];
  let memo = {};
  let res = [];
  function run(level) {
    console.log("====== start at ",level, "=====");
    for(let i=0;i<s.length;i++) {
      console.log("begin looping with", i, s[i]);
      if(!indices[i]) {
        indices[i] = true;
        console.log(combinations[level], " is now ", s[i]);
        combinations[level] = s[i];
        console.log(combinations);
        if(level < s.length -1) {
          run(level+1);
        }else{
          console.log("max level >>>>>>>>>>>>>>>>>>>", combinations,indices)
          if(!memo.hasOwnProperty(combinations.join("")))
            memo[combinations.join("")] = '';
        }
        indices[i] = false;
      }
    }
  }
  run(0);
  for (let k in memo) {res.push(k)}
  return res;
};
permutations('ab');



function permutations(s) {
  let combinations = [];
  let indices = [];
  let memo = {};
  let res = [];
  function run(level) {
    for(let i=0;i<s.length;i++) {
      if(!indices[i]) {
        indices[i] = true;
        combinations[level] = s[i];
        console.log(combinations);
        if(level < s.length -1) {
          run(level+1);
        }else{
          if(!memo.hasOwnProperty(combinations.join("")))
            memo[combinations.join("")] = '';
        }
        indices[i] = false;
      }
    }
  }
  run(0);
  for (let k in memo) {res.push(k)}
  return res;
};
