/*

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

*/

function pigIt(str){
  return str.split(" ").map((e)=>{
    let f = e[0];
    let s = e.substring(1);
    return s + f + "ay";
  }).join(" ");
};

pigIt('Pig latin is cool');
// igPay atinlay siay oolcay
