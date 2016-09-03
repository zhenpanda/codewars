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

// 20 14 - 14*14


function sqInRect(lng, wdth) {
  var r;
  function mathIt(longer,shorter) {
    var chop = function(area, max, ary) {
      if (area <= 0) {
        r = ary;
        return;
      }else {
        var newArea = area - (max * max);
        ary.push(max);
        var newMax = Math.floor(Math.sqrt(newArea));
        if (newMax > longer - shorter) {
          newMax = longer - shorter;
        }
        chop(newArea, newMax, ary);
      }
    };
    chop(longer*shorter, shorter, []);
  };
  if (lng != wdth) {
    if (lng > wdth) {
      mathIt(lng, wdth);
    }else{
      mathIt(wdth, lng);
    }
  }else{
    return null;
  }
  return r;
}

sqInRect(5, 3);
sqInRect(20, 14);
