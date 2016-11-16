/*

Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered

*/

function scramble(str1, str2) {
  let unique = {};
  // save str2 unique letters
  str2.split("").map((e)=>{
    if (!unique[e]) {
      unique[e] = 1
    }else {
      unique[e] = unique[e] + 1;
    }
  })
  // console.log(unique);
  str1.split("").map((e)=>{
    if (unique[e]) {
      unique[e] = unique[e] - 1;
      // delete unique[e]
    }
  })
  // console.log(unique);
  let state = true;
  for (let key in unique) {
    // console.log(key + " -> " + unique[key]);
    if (unique[key] !== 0) {
      state = false;
    }
  }
  return state;
}

scramble('rkqodlw','wworld');
