/*

Consider the following numbers (where n! is factorial(n)):

u1 = (1 / 1!) * (1!)

u2 = (1 / 2!) * (1! + 2!)

u3 = (1 / 3!) * (1! + 2! + 3!)

un = (1 / n!) * (1! + 2! + 3! + ... + n!)

Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?

Are these number going to 0 because of 1/n! or to infinity due to the sum of factorials?

Task:

Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n. Call this function "going(n)" where n is an integer greater or equal to 1.

To avoid discussions about rounding, if the result of the calculation is designed by "result", going(n) will return "result" truncated to 6 decimal places.

Examples:

1.0000989217538616 will be truncated to 1.000098

1.2125000000000001 will be truncated to 1.2125

Remark:

Keep in mind that factorials grow rather rapidly, and you can need to handle large inputs.

*/

function going(n) {
  // f(n) = (1/n!) * (1! + 2! + 3! ... + n!)
  // console.log(n)
  function factorial(num, res=1) {
    while(num > 0) {res = res * num--}
    return res
  };
  let head = 1 / factorial(n);
  let numArr = [];
  while (n > 0) {
    numArr.push(n)
    n--
  };
  let sum = numArr.reduce((acc,cur)=>{
    return (acc + factorial(cur));
  },0)
  console.log(head, sum);
  // return (sum*head).toFixed(6)*1;
}

// going(5) // 1.275
going(200) // 1.005025

// crazy math
function going(n) {
  // u(i) = (1 / i!) * (1! + 2! + 3! + ... + (i-1)! + i!) = u(i-1) / i + 1;
  var u = 1;
  for ( var i = 2; i <= n; i++)
    u = u / i + 1;
  return Math.floor( u * 1000000) / 1000000;
}

// for loop?
const getNum = (n, a) => {
  var sum = 1,
      i = 0;
  for( ; i < a; i++ ) {
    sum *= n;
    n--;
  }
  return sum;
}
function going(n) {
   var num = 1,
       count = 0,
       i = 1;
   for( ; i < n; i++ ) {
     num += 1 / getNum(n, i);
     count++;
     if(count > 220) return Math.floor(num * 1000000) / 1000000;
   }
   return Math.floor(num * 1000000) / 1000000;
}

// really short
function going(n) {
  var result = 1.0;
  var fraction = 1.0;

  while(n > 1) {
    fraction /= n--;
    result += fraction;
  }

  return Math.floor(result * 1000000) / 1000000;
}
