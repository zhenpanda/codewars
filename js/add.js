/*

Write a function that returns the sum of the passed arguments. The input arguments may be Numbers and/or String representations of numbers. The function must return a String.

Example

add(123, "321") === "444";
add("1234567890.0987654321", "8765432109.9012345678") === "9999999999.9999999999";
add("1.2.3", 1.23); === NaN;
add(0.1, 0.0001) === "0.1001";
Notes

The input numbers may be very very big and/or very very small. Addition must be exact - no floating point errors. The numbers are all positive and base 10. Some arguments may not be numbers. In these cases, return NaN. Remove trailing zeros and decimal point if possible.

*/

// add("1.2.3", 1.23); === NaN;

function add() {
  // adding two things
  function sumTwo(inputA,inputB) {
    // console.log(inputA,inputB);
    if (Number(inputA) && Number(inputB)) {
      let a = String(inputA);
      let b = String(inputB);
      // remove zeros at front a number
      while(a.charAt(0) === '0')
      a = a.substr(1);
      while(b.charAt(0) === '0')
      b = b.substr(1);
      if (a.charAt(0) === '.') { a = '0'+a };
      if (b.charAt(0) === '.') { b = '0'+b };
      // normalize the len of both numbers
      let n1,n2;
      let padding = '0';
      let dif = Math.abs(a.length - b.length);
      if (a.length > b.length) {
        n1 = a;
        padding = padding.repeat(dif);
        if (b.indexOf('.') > -1) {
          n2 = b+padding;
        }else {
          n2 = padding+b;
        }
      } else if (a.length < b.length) {
        n2 = b;
        padding = padding.repeat(dif);
        if (a.indexOf('.') > -1) {
          n1 = a+padding;
        }else {
          n1 = padding+a;
        }
      } else {
        n1 = a;
        n2 = b;
      };
      // console.log(n1,n2)
      let sum = '';
      // num of times add should be the len of the strings
      let numOfAdditions = n1.length-1;
      let carryOne = 0;
      while(numOfAdditions > -1) {
        // console.log(n1[numOfAdditions],n2[numOfAdditions])
        if (n1[numOfAdditions]!=".") {
          let currentSum = parseInt(n1[numOfAdditions]) + parseInt(n2[numOfAdditions]) + carryOne;
          if (currentSum < 10) {
            sum = String(currentSum)+sum;
            carryOne = 0;
          }else {
            sum = String(currentSum)[1]+sum;
            carryOne = 1;
          }
        } else {
          sum = "."+sum;
        }
        numOfAdditions--;
      }
      if (carryOne == 1) { sum = "1"+sum }
      //removing zero at the end of a decimal number
      if (sum.indexOf('.') > -1) {
        while (sum[sum.length-1] === '0')
        sum = sum.slice(0, -1);
      }
      // console.log(sum);
      return sum;
    } else {
      return NaN;
    }
  }
  if (arguments.length < 2) {
    return arguments;
  }else{
    let args = [...arguments];
    return args.reduce((p, c)=> {
      // console.log(p,c);
      return (sumTwo(p,c))
    });
  }
};

// add(123, "321")
// add(0.1, 0.0001)
// add("1234567890.0987654321", "8765432109.90123456781")
add(10000.28, 10000.128); //'20000.408'
// add( 0.300000, '000000.103' )
// add(1,2,3,4,5)


//clever solution

function add(){
//implement
  var c = 1000000000;
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  for(var i = 0; i < args.length; i++) {
    sum += args[i] * c;
  }
  return (sum / c).toString();
}
