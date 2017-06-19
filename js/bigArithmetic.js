/*

Doing arithmetic with big numbers is impossible to do with regular numbers. In JavaScript, anything beyond 16 digits becomes less and less accurate. For example, the integer 12345678901234567890 becomes 12345678901234567000—off by 890!

For this reason, the only way of accurately representing such large integers is as strings. The string "123456789012345678901234567890" will always be "123456789012345678901234567890", no matter what. The problem is, there is no easy way of doing arithmetic with numbers on this scale. But it can be done!

You must write two functions, bigAdd and bigSub, which will both take two arguments. These two arguments will either be a valid representation of an integer as a string (negative or positive, no leading zeros), or a regular number. They will return the correct answer as a string, bigAdd summing the two values, and bigSub subtracting the second value from the first.

For example:

bigAdd(1, "123456789012345678901234567890") === "123456789012345678901234567891";
bigSub("123456789012345678901234567890", 1) === "123456789012345678901234567889";
Remember, the values could be negative, and so the calculations should be made accordingly.

bigAdd(-1, "123456789012345678901234567890") === "123456789012345678901234567889";
bigSub("123456789012345678901234567890", -1) === "123456789012345678901234567891";

*/

//
// function add(a, b) {
//   let longestNum, gap;
//   let res = '';
//   if (a.length - b.length > 0) {
//     gap = Math.abs(a.length - b.length);
//     for(let p=0 ;p<gap; p++) {b = "0"+b};
//   }else if (a.length - b.length < 0) {
//     gap = Math.abs(a.length - b.length);
//     for(let p=0 ;p<gap; p++) {a = "0"+a};
//   }
//   if(a.length == b.length ) {
//     let carryOver = false;
//     for(let n=a.length-1; n>-1 ; n--) {
//       let sum = parseInt(a[n]) + parseInt(b[n]);
//       if (carryOver) sum++;
//       if (sum >= 10) {
//         carryOver = true;
//         sum = String(sum).split("")[1];
//         res = sum + res;
//       }else{
//         carryOver = false;
//         res = String(sum) + res;
//       }
//     }
//     if(carryOver) res = "1" + res;
//   }
//   return (res);
// }

function add(a,b) {
  let longestNum, gap;
  let res = '';
  if (a.length - b.length > 0) {
    gap = Math.abs(a.length - b.length);
    for(let p=0 ;p<gap; p++) {b = "0"+b};
  }else if (a.length - b.length < 0) {
    gap = Math.abs(a.length - b.length);
    for(let p=0 ;p<gap; p++) {a = "0"+a};
  }
  if(a.length == b.length ) {
    let carryOver = false;
    for(let n=a.length-1; n>-1 ; n--) {
      let sum = parseInt(a[n]) + parseInt(b[n]);
      if (carryOver) sum++;
      if (sum >= 10) {
        carryOver = true;
        sum = String(sum).split("")[1];
        res = sum + res;
      }else{
        carryOver = false;
        res = String(sum) + res;
      }
    }
    if(carryOver) res = "1" + res;
  }
  return res;
}
function sub(a,b) {
  let res = '';
  let sign;
  if (a.length < b.length) sign = -1;
  else if(a.length > b.length) sign = 1;
  else sign = 0;
  let gap;
  let first;
  let second;
  if(sign == -1) {
    gap = Math.abs(a.length - b.length);
    for(let p=0 ;p<gap; p++) {a = "0"+a};
    first = b;
    second = a;
  }else if(sign == 1) {
    gap = Math.abs(b.length - a.length);
    for(let p=0 ;p<gap; p++) {b = "0"+b};
    first = a;
    second = b;
  }else if(sign == 0) {
    sign = 1;
    if (a === b) return "0";
    for (let d=0; d<a.length; d++) {
      if (a[d] < b[d] ) {
        first = b;
        second = a;
        sign = -1;
        break;
      }else {
        first = a;
        second = b;
        sign = 1;
        break;
      }
    }
  };
  let prevBorrow = false;
  for(let n=first.length-1; n>-1 ; n--) {
    let subtractor = parseInt(first[n]);
    let subtracted = parseInt(second[n]);
    if (subtractor < subtracted && !prevBorrow) {
      prevBorrow = true;
      subtractor = 10 + subtractor;
    }else if (prevBorrow && (subtractor-1) >= subtracted) {
      prevBorrow = false;
      subtractor--;
    }else if (prevBorrow && (subtractor-1) < subtracted) {
      prevBorrow = true;
      subtractor = 10 + subtractor - 1;
    }
    let dif = subtractor - subtracted;
    res = dif + res;
  };
  while(res.charAt(0) == '0') {res = res.substr(1) };
  if (sign > 0) return res;
  else return ("-"+res);
  if (res == '') { return '0' }
}

function bigAdd(a, b) {
  if (String(a)=="0" && String(b)=="0") return "0";
  let res;
  a = String(a);
  b = String(b);
  if (a[0] != "-" && b[0] == "-") {
    b = b.substr(1);
    res = sub(a, b);
  }else if (a[0] == "-" && b[0] != "-") {
    a = a.substr(1);
    res = sub(b, a);
  }else if (a[0] == "-" && b[0] == "-") {
    a = a.substr(1);
    b = b.substr(1);
    res = add(a, b);
    res = "-"+res;
  }else{
    res = add(a, b);
  };
  return res;
}
function bigSub(a, b) {
  if (String(a)=="0" && String(b)=="0") return "0";
  let res;
  a = String(a);
  b = String(b);
  if (a[0] != "-" && b[0] == "-") {
    b = b.substr(1);
    res = add(a, b);
  }else if (a[0] == "-" && b[0] != "-") {
    a = a.substr(1);
    res = add(a,b);
    res = "-"+res;
  }else if (a[0] == "-" && b[0] == "-") {
    b = b.substr(1);
    res = bigAdd(a, b);
  }else{
    res = sub(a, b);
  };
  return res;
};

bigSub(-2, "-1")
// 123456789012345678901234567891
