/*

In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them

*/

function parseInt(string) {
  // console.log(string);
  let res = 0;
  let n = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "thirty": 30,
    "forty": 40,
    "fifty": 50,
    "sixty": 60,
    "seventy": 70,
    "eighty": 80,
    "ninety": 90
  }
  let numParts = string.split(" ");
  let singleNum = 0;
  let hundredNum = 0;
  let thousandNum = 0;
  while(numParts.length > 0) {
    // check single or dash num
    if(numParts[0].includes("-")) {
      singleNum = 0;
      let dashNum = numParts[0].split("-");
      dashNum.map((c)=>{singleNum+=n[c]});
      numParts.shift();
    }else if(n[numParts[0]]) {
      singleNum = n[numParts[0]];
      numParts.shift();
    }else{
      // check for mulitplyer
      switch (numParts[0]) {
        case "hundred":
        hundredNum = singleNum*100;
        singleNum = 0;
        numParts.shift();
        break;

        case "thousand":
        thousandNum = (singleNum + hundredNum)*1000;
        res+=thousandNum;
        singleNum = 0;
        hundredNum = 0;
        numParts.shift();
        break;

        case "million":
        res+=singleNum*1000000;
        singleNum = 0;
        hundredNum = 0;
        thousandNum = 0;
        numParts.shift();
        break;

        default:
        numParts.shift();
        break;
      };
    }
    debugger;
    if (numParts.length == 0) {
      if(singleNum) res+=singleNum;
      if(hundredNum) res+=hundredNum;
    }
  };
  return res;
}

parseInt('eight hundred eighty-eight thousand eight hundred and eighty-eight');
