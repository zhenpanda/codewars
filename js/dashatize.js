/*

Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'

*/

function dashatize(num) {
  if (Number.isInteger(num)) {
    let str = String(Math.abs(num)).split("").map((e, i, a)=>{
      if (parseInt(e)%2===0 && parseInt(a[i+1])%2===0) {
        return e;
      }else {
        // console.log(e,a[i+1]);
        return (e+"-");
      }
    }).join("");
    // console.log(str);
    if (str[str.length-1] == "-") {
      return str.slice(0, -1);
    }else {
      return str;
    }
  }else {
    return String(num);
  }
};

// dashatize(NaN);

// C N
// even even ...do noting
// even odd ...one dash after
// odd odd ...one dash after
// odd even ....one dash after

dashatize(974302);
// "9-7-4-3-02"
