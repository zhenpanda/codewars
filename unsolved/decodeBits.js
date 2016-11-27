/*

In this kata you have to write a Morse code decoder for wired electrical telegraph.
Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).

When transmitting the Morse code, the international standard specifies that:

"Dot" – is 1 time unit long.
"Dash" – is 3 time units long.
Pause between dots and dashes in a character – is 1 time unit long.
Pause between characters inside a word – is 3 time units long.
Pause between words – is 7 time units long.
However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amature person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.

For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.

For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:

1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

That said, your task is to implement two functions:

Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.
Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.
The Morse code table is preloaded for you as MORSE_CODE dictionary (MorseCode class for Java), feel free to use it.

All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!

Good luck!



*/

// decoder key
// let key = {
//   '1': '.',
//   '111': '-',
//   '0': '',
//   '000': '',
//   '0000000': ' '
// };

// let bitsShrinked = [];
// // bits timing at 2 chars per unit long
// bits.split("").map((e,i,a)=>{
//   if (i%2===0) bitsShrinked.push(e);
// });
// console.log(bitsShrinked.join(""));

var decodeBits = function(bits){
    // learn pattern
    console.log(bits)
    function reader(str, currentChar=null, code='') {
      // console.log(str, str.length, ' <- str input');
      // find current char if missing
      let nextChar = "";
      if (currentChar == null) {
        currentChar = str[0];
        nextChar = str[1];
      }else {
        nextChar = str[1];
      };
      // break off the top piece of str
      let newStr = str.slice(1, str.length);
      // console.log(newStr, newStr.length, " + ", currentChar, " + ", code)

      // if there is difference btw currentChar's end next check the currentChar
      if (currentChar[currentChar.length-1] !== nextChar) {
        // read the character add to the code string
        switch (currentChar) {
          case '0000000':
            code = code + '   ';
            currentChar=null;
            break;
          case '000':
            code = code + ' ';
            currentChar=null;
            break;
          case '0':
            code = code + '';
            currentChar=null;
            break;
          case '111':
            code = code + '-';
            currentChar=null;
            break;
          case '1':
            code = code + '.';
            currentChar=null;
            break;
        };
      }else{
        currentChar = currentChar + nextChar;
      }

      // stop the recursion
      if (newStr.length == 0) return (code);

      // recursion
      return reader(newStr, currentChar, code)
    }
    return reader(bits);
}

decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011');
//"10101010001000111010111011100000001011101110111000101011100011101010001"

// reverse enginered function
//"101010100010001110101110111000000010111011101110001010111000111010100010"

function rev(input) {
  let nums = "";
  let arr = input.split("");
  console.log(arr);
  arr.map((e)=>{
    if ((e) == "·") {
      nums = nums + '1';
    }else if ((e) == "−") {
      nums = nums + '111';
    }else if ((e) == " ") {
      nums = nums + '0';
    };
    nums = nums + "0";
  });
  return nums;
}
rev('···· · −·−−   ·−−− ··− −·· ·');

// var decodeMorse = function(morseCode){
//     // ToDo: Accept dots, dashes and spaces, return human-readable message
//     return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
// }

decodeMorse = function(morseCode){
  // console.log(morseCode)
  let codeArr = morseCode.split(" ");
  let str = "";
  codeArr.map((e,i,a)=>{
    if (MORSE_CODE[e]) {
      str = str + MORSE_CODE[e];
    }else{
      if (!a[i] && !a[i+1]) {
        str = str + " ";
      }
    }
  });
  // trim the string of blank spaces from front and back
  function trimmer(someStr) {
    let newStr;
    if (someStr[0]==" ") {
      newStr = someStr.substring(1);
    }else if(someStr[someStr.length-1]==" ") {
      newStr = someStr.slice(0, -1);
    }else{
      // console.log(someStr);
      return someStr;
    }
    return trimmer(newStr);
  }
  return trimmer(str);
};
