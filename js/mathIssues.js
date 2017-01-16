/*

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

*/

function decimalNumberHelper(inputNum, action) {
  if (inputNum===0) {return 0;}
  let numStr = String(inputNum);
  let numParts = numStr.split(".");
  let nextDigit = 0;
  if (numParts[1]) {
    for (let d=numParts[1].length-1; d>-1; d--) {
      let currentNum = parseInt(numParts[1][d])+nextDigit;
      switch (action) {
        case 'round':
          if (d===0 && currentNum>=5) {return (parseInt(numParts[0])+1)
          }else if(d===0 && currentNum<5) {return parseFloat(numParts[0])};
          break;
        case 'ceil':
          if (currentNum>0) {nextDigit = 1;} else {nextDigit = 0;};
          if (d==0 && nextDigit==1) {return (parseInt(numParts[0])+1)
          }else if(d===0 && nextDigit===0) {return parseFloat(numParts[0])};
          break;
        case 'floor':
          return parseFloat(numParts[0]);
          break;
      };
    }
  }else{
    return inputNum;
  }

};

Math.round = function(number) {return decimalNumberHelper(number, 'round')};
Math.ceil = function(number) {return decimalNumberHelper(number, 'ceil')};
Math.floor = function(number) {return decimalNumberHelper(number, 'floor')};

Math.round(19.9999)


// other people's solutions
Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};
Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};
Math.floor = function(number) {
  return parseInt(number);
};


Math.floor = function(n) {
  // this is floor, fucking cool
  return ~~n;
};
Math.frac = function(n){
  return n - Math.floor(n);
};
Math.round = function(n) {
  return Math.floor(n) + (Math.frac(n) >= 0.5)
};
Math.ceil = function(n) {
  return Math.floor(n) + !!(Math.frac(n))
};
