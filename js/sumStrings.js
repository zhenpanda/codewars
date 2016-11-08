/*

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


*/

function sumStrings(a,b) {
  let nums = [a,b];
  if (!a) {return b} else if (!b) {return a};

  let n1,n2;
  let padding = '0';
  let dif = Math.abs(a.length - b.length);
  if (a.length > b.length) {
    n1 = a;
    padding = padding.repeat(dif);
    n2 = padding+b;
  } else if (a.length < b.length) {
    n2 = b;
    padding = padding.repeat(dif);
    n1 = padding+a;
  } else {
    n1 = a;
    n2 = b;
  };

  let sum = '';
  let len = n1.length-1;
  let next = 0;

  if (n1.length == n2.length) {
    while (len+1 > 0) {
      let s = parseInt(n1[len]) + parseInt(n2[len]) + next;
      //reset next
      next = 0;
      if (s >= 10) {
        next = 1;
        sum = String(s)[1] + sum;
      }else {
        sum = s + sum;
      }
      if (len == 0 && s >= 10) {sum = "1" + sum}
      len--;
    }
  }
  //remove zeros
  while(sum.charAt(0) === '0')
  sum = sum.substr(1);
  return sum;
}

// sumStrings('123','456')
// sumStrings('','5')
// sumStrings('712569312664357328695151392','8100824045303269669937')
sumStrings('800', '9567')
