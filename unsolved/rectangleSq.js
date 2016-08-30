/*
The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array with the size of each of the squares.

Examples

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
Note: lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. See kata, Square into Squares. Protect trees!.

When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing/{} with C++.

  sqInRect(5, 5) should return null
*/

/*
var recursive = function(n) {
    if (n < 1) {
        return n;
    } else {
        return recursive(n - 1);
    }
};

recursive(1);
*/

// (3*5) - 3^2 = 6
// (6) - 2^2 = 2
// (2) - 1^1 = 1
// (1) - 1^1 = 0
function sqInRect(lng, wdth) {
  //your code here
  if (lng != wdth) {
    function mathIt(longer,shorter) {
      // subtract until zero area
      var chop = function(n, ary) {
          if (n <= 0) {
            return ary;
          } else {
            if (n > 1) {
              var x = 1;
              while (Math.pow(x, 2) < n && x <= shorter) {
                x++;
              }
              console.log(n,Math.pow(x-1, 2));
              ary.push(x-1);
              return chop(n - Math.pow(x-1, 2), ary);
            }else{
              ary.push(1);
              return chop((n - 1), ary);
            }
          }
      };
      console.log(chop((longer * shorter),[]));
      return (chop((longer * shorter),[]));
    };
    lng > wdth ? (mathIt(lng, wdth)) : (mathIt(wdth,lng));
  }else{
    return null;
  }
}
sqInRect(5, 3);
sqInRect(20, 14);
