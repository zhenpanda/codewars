/*

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

*/

function order(words){
  if (words === "") {
    return "";
  }else{
    let wordsAry = words.split(" ");
    let wordsSorted = [];
    for (let i = 0; i < wordsAry.length; i++) {
      let word = wordsAry[i].split("");
      for (let e = 0; e < word.length; e++) {
        if (Number.isInteger(parseInt(word[e]))) {
          wordsSorted[word[e]] = wordsAry[i]
        }
      }
    }
    return wordsSorted.join(" ").substring(1)
  }
};

order("is2 Thi1s T4est 3a");

// other solutions

function order(words){

  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    
