function getSumOfDigits(integer) {
    var sum = 0;
    var digits = integer.toString();
    for(let ix = 0; ix < digits.length; ix++) {
  //     console.log(digits[ix]);
      sum = sum + parseInt(digits[ix]);
    }
    return sum;
  }

  function getSumOfDigits(integer) {
    return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
  }

//   +"0" converts string numbers to numbers