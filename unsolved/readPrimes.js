/*

Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task

Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one being greater than the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97]
backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]

var a = [9923, 9931, 9941, 9967]
Test.assertEquals(backwardsPrime(9900, 10000), a)

Array(7).fill().map((_,i) => i*i);

Array(7).fill().map((_,i) => {
  if (i<3) {
    return i
  }
});

var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

*/

function backwardsPrime(start, stop) {
  return Array(stop - start + 1).fill().map((_, idx) => start + idx).map((i) => {
    let s = Math.floor(Math.sqrt(i));
    console.log(s)
    for (let c = 2; c <= s; c++) {if (i % c == 0) {return false}}
    if (String(i).length > 1) {return i}
  }).filter((e) => {return e}).map((d) => {
    let n = parseInt(String(d).split("").reverse().join(""))
    let r = Math.floor(Math.sqrt(n))
    for (let c = 2; c <= r; c++) {if (n % c == 0) {return false}return d}
  }).filter((e) => {return e}).map((c,i,a) => {
    for (let u = 0; u <= a.length; u++) {
      if (c == parseInt(String(a[u]).split("").reverse().join(""))) {
        if (c != parseInt(String(a[u]))) {return c}
      }
    }
  }).filter((e) => {return e})

}

backwardsPrime(9900, 10000)
