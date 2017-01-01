/*

Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, return value must be 0.

Example:

"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0

*/

longestPalindrome = function(s){
  if (s==="") {
    return 0;
  }else if (s.length===1) {
    return 1;
  }else{
    s = s.toLowerCase();
    // return the longest found as a num
    var longlestPalindromeLen = 1;
    // check for palindrome on a word and return len if palindrome
    palindromeChecker = function(str){
      if (str.length>0){
        if (str[0]===str[str.length-1]) {
          return palindromeChecker(str.slice(1, -1));
        }else{
          // not a palindrome
          return 0;
        }
      }
      return true;
    }

    //loop through the string, check palindrome when 2 chars match
    for (var p=0; p<s.length; p++) {
      var counter = 0;
      var testLetter;
      while (counter<s.length) {
        counter++;
        testLetter=s[p+counter];
        if (testLetter==s[p]) {
          // console.log(s[p],testLetter, p, counter);
          var word = s.substring(p, counter+p+1)
          // palindrome like word
          // console.log(word);
          if (palindromeChecker(word)&&word.length>longlestPalindromeLen) {
            longlestPalindromeLen=word.length;
          }
        }
      }
    }
    return longlestPalindromeLen;
  }
}

// longestPalindrome("zzbaabcd")
// longestPalindrome("racecar")
longestPalindrome("abcdefghba")
