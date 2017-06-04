/*

At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

so at any point the first letter of the s string will be the same as either p1 or p2
if not it's false

*/

function isMerge(s, part1, part2) {
  if (s.length !== (part1+part2).length) return false;

  function checker(s1,s2,s3) {
    let sameLetters = "";
    for (let l=0; l<s1.length; l++) {
      if (s1[l] === s2[l]) {
        sameLetters+=s1[l];
      }else{
        if (sameLetters[sameLetters.length-1] === s3[0] && sameLetters.length > 1 ) {
          sameLetters = sameLetters.slice(0, -1);
        }
        l=s1.length;
      }
    }
    return sameLetters;
  };

  while (s.length > 0) {
    let part1Check = checker(s, part1, part2);
    let part2Check = checker(s, part2, part1);
    if (part1Check.length === 0 && part2Check.length === 0) {
      return false;
    }else if (part1Check.length > part2Check.length) {
      part1 = part1.substr(part1Check.length)
      s = s.substr(part1Check.length)
    }else {
      part2 = part2.substr(part2Check.length)
      s = s.substr(part2Check.length);
    }
  };
  return true;
}
// isMerge("R  !cJe%%Hw&W","R!c%H&W","  Je%w");

function isMerge(s, part1, part2) {
  console.log(s,part1,part2);
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

isMerge("Bananas from Bahamas","Bahas","Bananas from am");
