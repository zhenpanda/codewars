/*

In the following 6 digit number:

283910
91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

*/

function solution(digits){
  let largest = 0;
  let num = String(digits).split("");
  for(let f=0; f<num.length-4; f++) {
    let cur = parseInt(num[f]+num[f+1]+num[f+2]+num[f+3]+num[f+4]);
    if(cur > largest) largest = cur;
  }
  return largest;
}

solution(1234567898765); //98765
