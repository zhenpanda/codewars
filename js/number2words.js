function number2words(n){
  // works for numbers between 0 and 999999
  function singleNums(num) {
    switch (parseInt(num)) {
      case 0:return "zero";break;
      case 1:return "one";break;
      case 2:return "two";break;
      case 3:return "three";break;
      case 4:return "four";break;
      case 5:return "five";break;
      case 6:return "six";break;
      case 7:return "seven";break;
      case 8:return "eight";break;
      case 9:return "nine";break;
    }
  };
  function funnyNums(num) {
    switch (parseInt(num)) {
      case 11:return "eleven";break;
      case 12:return "twelve";break;
      case 13:return "thirteen";break;
      case 14:return "fourteen";break;
      case 15:return "fifteen";break;
      case 16:return "sixteen";break;
      case 17:return "seventeen";break;
      case 18:return "eighteen";break;
      case 19:return "nineteen";break;
    }
  };
  function tensNums(num) {
    switch (parseInt(String(num)[0])) {
      case 1:return "ten";break;
      case 2:return "twenty";break;
      case 3:return "thirty";break;
      case 4:return "forty";break;
      case 5:return "fifty";break;
      case 6:return "sixty";break;
      case 7:return "seventy";break;
      case 8:return "eighty";break;
      case 9:return "ninety";break;
    }
  };
  // number checkers by digits
  function twoDigitNums(num) {
    if (String(num)[1]=="0") {
      return tensNums(num);
    }else if (String(num)[0]=="1") {
      return funnyNums(num);
    }else{
      let firstPart = tensNums(num);
      let secondPart = singleNums(String(num)[1]);
      return (firstPart+"-"+secondPart);
    }
  };
  function threeDigitNums(num) {
    let firstPart = singleNums(String(num)[0]);
    if (String(num)[1]=="0" && String(num)[2]=="0") {
      return (firstPart+" hundred");
    }else if(String(num)[1]=="0"){
      let secondPart = singleNums(String(num)[2]);
      return (firstPart+" hundred "+secondPart);
    }else{
      let secondPart = twoDigitNums((String(num)[1]+String(num)[2]));
      return (firstPart+" hundred "+secondPart);
    }
  };
  function moreDigitNums(num) {
    // break down into two parts
    let firstPart, secondPart;
    if (numLength===4) {
      firstPart = String(num)[0];
      secondPart = String(num)[1]+String(num)[2]+String(num)[3];
    }else if (numLength===5) {
      firstPart = String(num)[0]+String(num)[1];
      secondPart = String(num)[2]+String(num)[3]+String(num)[4];
    }else if (numLength===6) {
      firstPart = String(num)[0]+String(num)[1]+String(num)[2];
      secondPart = String(num)[3]+String(num)[4]+String(num)[5];
    };
    // check thousand
    if (String(firstPart).length==1) {
      firstPart = singleNums(firstPart)+" thousand";
    }else if (String(firstPart).length==2) {
      firstPart = twoDigitNums(firstPart)+" thousand";
    }else if (String(firstPart).length==3) {
      firstPart = threeDigitNums(firstPart)+" thousand";
    }
    // check hundreds
    if (String(secondPart)[0]==0 && String(secondPart)[1]==0 && String(secondPart)[2]==0) {
      secondPart = "";
    }else if (String(secondPart)[0]==0 && String(secondPart)[1]==0) {
      secondPart = " " + singleNums(secondPart);
    }else if (String(secondPart)[0]==0) {
      secondPart = " " + twoDigitNums((String(secondPart)[1]+String(secondPart)[2]));
    }else if (String(secondPart)[0]!=0) {
      secondPart = " " + threeDigitNums(secondPart);
    }
    return (firstPart+secondPart);
  };
  // number checker by length
  function numPlace(length) {
    switch (length) {
      case 1:return singleNums(n);break;
      case 2:return twoDigitNums(n);break;
      case 3:return threeDigitNums(n);break;
      default:return moreDigitNums(n);break;
    }
  };
  let numLength = String(n).length;
  return numPlace(numLength);
}

number2words(8340);
