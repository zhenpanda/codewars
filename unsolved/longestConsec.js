/*

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

*/

function longestConsec(strarr, k) {
  let longestStr = "";
  if (strarr.length===0 || k>strarr.length || k <=0 ) return "";
  strarr.sort(function(a, b) { return a.length - b.length });
  let c = strarr.length-1;
  while (k>0) {
    longestStr=strarr[c]+longestStr;
    k--;
    c--;
  }
  return longestStr;
}

longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
// "oocccffuucccjjjkkkjyyyeehh"
