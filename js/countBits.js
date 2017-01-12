/*

Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

function countBits(n) {
  let bits = "";
  while (n > 0) {
    if (n%2===0) {
      bits+=0;
    }else{
      bits+=1;
    }
    n=Math.floor(n/2);
  }
  let binary = 0;
  bits.split("").map((b)=>{
    if (b=="1") binary++;
  })
  return binary;
};
countBits(1234)
