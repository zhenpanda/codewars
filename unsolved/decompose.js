/*

Given a rational number n

- n >= 0, with denominator strictly positive -

as a string (example: "2/3" in Ruby, Python, Clojure, JS, CS) or as two strings (example: "2" "3" in Haskell, Java, CSharp, C++) decompose this number as a sum of rationals with numerators equal to one and without repetitions (2/3 = 1/2 + 1/6 is correct but not 2/3 = 1/3 + 1/3, 1/3 is repeated).

The algorithm must be "greedy", so at each stage the new rational obtained in the decomposition must have a denominator as small as possible. In this manner the sum of a few fractions in the decomposition gives a rather good approximation of the rational to decompose.

2/3 = 1/3 + 1/3 doesn't fit because of the repetition but also because the first 1/3 has a denominator bigger than the one in 1/2 in the decomposition 2/3 = 1/2 + 1/6.

Example:

decompose("21/23") or decompose "21" "23"
should return ["1/2", "1/3", "1/13", "1/359", "1/644046"] in Ruby, Python, Clojure, JS, CS, Haskell
and "[1/2, 1/3, 1/13, 1/359, 1/644046]" in Java, CSharp, C++.
The decomposition of 21/23 as

21/23 = 1/2 + 1/3 + 1/13 + 1/598 + 1/897
is exact but don't fulfill our requirement because 598 is bigger than 359. Same for

21/23 = 1/2 + 1/3 + 1/23 + 1/46 + 1/69 (23 is bigger than 13)
or
21/23 = 1/2 + 1/3 + 1/15 + 1/110 + 1/253 (15 is bigger than 13).
The rational given to decompose could be greater than one, in which case the first "fraction" will be an integer (with an implicit denominator of 1).

If the numerator parses to zero the function "decompose" returns [].
The number could also be a decimal which can be expressed as a rational (ex: "0.6" in Ruby, Python, Clojure, JS, CS or "66" "100" in Haskell, Java, CSharp, C++).

*/

//Egyptian fraction

function decompose(n) {
  // convert everything to fraction first
  let nDec;
  let nAry = n.split("").map((e)=>{
    if (e == "/") {
      nDec = n.split("/");
      nDec = eval(n);
    }else if (e == ".") {
      let f = n.split(".");
      // nDec = [parseInt(f[0]+f[1]), 100];
      nDec = parseFloat(n);
    }
  })
  // check for n zeros
  if (nDec == 0) {
    return []
  }else{
    //loop until can't separate anymore
    let c = 1;
    while (c++ < 11) {
      console.log((1+ "/" + c), parseFloat(1/c))
    }

    return nDec
  }
}

decompose('3/4');
// decompose('0.66');
