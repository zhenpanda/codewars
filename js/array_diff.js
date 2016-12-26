/*

Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.

difference([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

difference([1,2,2,2,3],[2]) == [1,3]

*/

function array_diff(a, b) {
  let uniq = arr => [...new Set(arr)];
  b = uniq(b);
  let outArr = [];
  for (let i = 0; i < a.length; i++) {
    let check = a[i];
    for (let c = 0; c < b.length; c++) {
      if (a[i]===b[c]) {
        check = null;
        break;
      }
    }
    if (check) outArr.push(check)
  }
  return outArr;
}
array_diff([1,2,2,2,3],[2])
