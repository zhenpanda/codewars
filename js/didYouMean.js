/*

I'm sure, you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. In this kata we want to implement something similar.

You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). Your task is to find out, which word from the dictionary is most similar to the entered one. The similarity is described by the minimum number of letters you have to add, remove or replace in order to get from the entered word to one of the dictionary. The lower the number of required changes, the higher the similarity between each two words.

Same words are obviously the most similar ones. A word that needs one letter to be changed is more similar to another word that needs 2 (or more) letters to be changed. E.g. the mistyped term berr is more similar to beer (1 letter to be replaced) than to barrel (3 letters to be changed in total).

Extend the dictionary in a way, that it is able to return you the most similar word from the list of known words.

Code Examples:

fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
fruits.findMostSimilar('strawbery'); // must return "strawberry"
fruits.findMostSimilar('berry'); // must return "cherry"

things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
things.findMostSimilar('coddwars'); // must return "codewars"

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven'); // must return "java"
languages.findMostSimilar('javascript'); // must return "javascript" (same words are obviously the most similar ones)
I know, many of you would disagree that java is more similar to heaven than all the other ones, but in this kata it is ;)

Additional notes:

there is always exactly one possible solution

*/

/*
function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
https://en.wikipedia.org/wiki/Levenshtein_distance


function Compare(strA,strB){
    for(var result = 0, i = strA.length; i--;){
        if(typeof strB[i] == 'undefined' || strA[i] == strB[i]);
        else if(strA[i].toLowerCase() == strB[i].toLowerCase())
            result++;
        else
            result += 4;
    }
    return 1 - (result + 4*Math.abs(strA.length - strB.length))/(2*(strA.length+strB.length));
}
This weighs characters that are the same but different case 1 quarter as heavily as characters that are completely different or missing. It returns a number between 0 and 1, 1 meaning the strings are identical. 0 meaning they have no similarities. Examples:

*/

function Dictionary(words) {this.words = words};
Dictionary.prototype.findMostSimilar = function(term) {
  // compare to get letter difference between words
  let compare = (a, b) => {
    let r=0;
    for (i=a.length; i--;) {
      if(typeof a[i] == 'undefined' || a[i] == b[i]);
      else if(a[i] == b[i]) r++;
      else r+=4;
      if (i<0) break;
    }
    return 1 - (r+ 4*Math.abs(a.length-b.length))/(2*(a.length+b.length));
  };
  // matching letters of each word
  let match = (a, b) => {
    let matching = 0;
    for(let e=0; e<a.length; e++) {
      for(let p=0; p<b.length; p++) {
        if(a[e] == b[p]) matching++;
      }
    };
    // console.log(a,b, (Math.abs(a.length/b.length)*matching));
    return (Math.abs(a.length/b.length)*matching);
  };
  // finding similar
  let similarWord = [0,''];
  this.words.map((w)=>{
    let weight = compare(term,w);
    // console.log(w,term , weight);
    if (weight > similarWord[0]) {
      similarWord[0] = weight;
      similarWord[1] = w;
    }
  });
  // returning similar word
  if (similarWord[0] < 0.25) {
    let matchWord = [0,''];
    this.words.map((m)=>{
      let weight = match(term, m);
      // console.log(weight,m);
      if (weight > matchWord[0]) {
        matchWord[0] = weight;
        matchWord[1] = m;
      }
    });
    return matchWord[1];
  }else{
    return similarWord[1];
  };
}

let w = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
w.findMostSimilar('heaven');
