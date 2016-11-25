/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder = function(iterable){
  function read(arr, current) {
    if (!current)
      current = arr[0]
    let newArr = [];
    for (let e = 1; e < arr.length; e++) {
      if (current !== arr[e]) {
        newArr.push(current);
        current = arr[e];
      }
    }
    if (newArr[newArr.length-1] !== arr[arr.length-1])
      newArr.push(arr[arr.length-1])
    return newArr;
  };
  if (Array.isArray(iterable)) {
    return (read(iterable));
  }else{
    return (read(iterable.split("")))
  }
};

uniqueInOrder('ABBCcAD')

var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}
