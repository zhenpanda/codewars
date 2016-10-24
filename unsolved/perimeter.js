/*

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Say that S(n) is the nth term of the above sum. So

S(0) = 1, S(1) = 1, S(2) = 2, ... , S(5) = 8

Could you give the sum S of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

S = S(0) + S(1) + ... + S(n) ?

Hint:

See Fibonacci sequence and beware of rather big n:-)

Ref:

http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

*/

function fib(n) {
  //return ary of fibs based on the input
  let out = [1,1];
  let c = 0;
  let i = 0;
  while (i++ < n-2) {
    c = out[i] + out[i-1]
    out.push(c);
  }
  return out;
};

function perimeter(n) {
  let s = fib(n+1);
  let o = s.reduce( (prev, curr) => prev + (curr) );
  return (o*4);
}

perimeter(5)
//80
