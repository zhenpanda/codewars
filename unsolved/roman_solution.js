/*

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value

I	  1
II	2
III	3
IV	4
V	5
VI	6
VII	7
VIII	8
IX	9

X	10
XX	20
XXX	30
XL	40
L	50
LX	60
LXX	70
LXXX	80
XC	90

C	100
CC	200
CCC	300
  CD	400
  D	500
    DC	600
    DCC	700
    DCCC	800
      CM	900

M	  1000

Remember that there can't be more than 3 identical symbols in a row.

*/

function solution(number) {
  // seprate number into clunks
  function separateNumber(num, parts=[]) {
    let numLen = String(num).length;
    let digit = 0;
    while (digit < numLen) {
      parts.push(String(num)[digit] + '0'.repeat(numLen-digit-1))
      digit++;
    }
    return parts;
  }
  let romanNumerals = "";
  // console.log(numberParts);
  separateNumber(number).map((e)=>{
    let numPlaceKey = {
      "thousandths": ["M"], // 1000
      "hundredths": ["C","D","M"], // 100 - 900
      "tenths": ["X","L","C"], // 10 - 90
      "oneths": ["I","V","X"] // 1 - 9
    };
    let numHead = parseInt(e.slice(0,1));
    if (numHead!==0) {
    let numBody = e.slice(1,e.length);
    // set number places
    let place;
    switch (numBody.length) {
      case 3:place=numPlaceKey["thousandths"];break;
      case 2:place=numPlaceKey["hundredths"];break;
      case 1:place=numPlaceKey["tenths"];break;
      case 0:place=numPlaceKey["oneths"];break;
      default:break;
    }
    // console.log(numHead, numBody, place)
      // ranges
      if (numHead<4) {
        romanNumerals+= place[0].repeat(numHead);
      }else if (numHead===4) {
        romanNumerals+= place[0] + place[1];
      }else if (numHead===5) {
        romanNumerals+= place[1];
      }else if (numHead>5 && numHead<9) {
        romanNumerals+= place[1] + place[0].repeat(numHead-5);
      }else if (numHead===9) {
        romanNumerals+= place[0] + place[2];
      };
    }
  });
  return romanNumerals;
}

solution(1990) //MCMXC

function solution(number){
  var rom = {1000: 'M', 500: 'D', 100: 'C', 50: 'L', 10: 'X', 5: 'V', 1: 'I'};
  var roman = Object.keys(rom).reverse().reduce( (a,b) => {
    var n = a + rom[b].repeat(Math.floor(number/b));
    number %= b;
    return n;
  },'' )
  roman = roman.replace(/DCCCC/, 'CM').replace(/LXXXX/, 'XC').replace(/IIII/, 'IV').replace(/XXXX/, 'XL').replace(/CCCC/, 'CD');
  return roman;
}
