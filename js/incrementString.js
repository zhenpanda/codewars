/*
Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function adder(strNum){
  let numbers = strNum.split("");
  var num = "";
  var inc = 1;
  for (let i=strNum.length-1; i>=0; i--) {
    if (inc) {
      if (parseInt(strNum[i]) == 9) {
        num = 0 + num;
        inc = 1;
      }else{
        num = (parseInt(strNum[i]) + 1) + num;
        inc = null;
      };
    }else{
      num = (parseInt(strNum[i])) + num;
    }
  };
  if (inc) {num = 1 + num};
  return num;
}
function incrementString (strng) {
  let strChars = strng.split("");
  // check if is number
  var str = "";
  var num = "";
  strChars.map((e)=>{
    if (Number.isInteger( parseInt(e) )) {
      num = num + e;
    }else{
      str = str + e;
    };
  });
  // base case
  if (num.length<1) {
    return strng+1;
  }else{
    let n = adder(num);
    return str+n;
  };
}

incrementString("foobar123");
