/*
Common denominators

You will have a list of rationals in the form

 [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
where all numbers are positive ints.

You have to produce a result in the form

 (N_1, D) ... (N_n, D)
in which D is as small as possible and

 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

 [ [1, 2], [1, 3], [1, 4] ] produces the string (6,12)(4,12)(3,12)

*/

function convertFrac(lst){
  // find lcd
  function lcd(inputAry){
    // var args = [].slice.call(this, arguments);
    var gcm = inputAry.reduce((a,b)=>{return a*b})
    var m = 1
    var mAry = []
    // find all mulitples of the gcm
    while (m++ < gcm) {
      if (gcm % m === 0) {
        mAry.push(m)
      }
    }
    // console.log(mAry)
    // find all the numbers in the gcm array that is not a common mulitple in arguments ary
    var l = []
    for (let d = 0; d < mAry.length; d++){
      // console.log(mAry[d])
      let c = 0
      for (let a = 0; a < inputAry.length; a++) {
        // console.log(inputAry[a],"%",mAry[d],inputAry[a] % mAry[d])
        if (mAry[d] % inputAry[a] === 0) {
          // console.log(mAry[d],"%",inputAry[a], mAry[d] % inputAry[a])
          c++
        }
        if (c === inputAry.length) {
          l.push(mAry[d])
        }
      }
    }
    return l[0]
  }
  // get denominators
  var denom = []
  for (let e = 0; e < lst.length; e++) {
    denom.push(lst[e][1])
  }
  var d = lcd(denom)
  var str = ""
  for (let s = 0; s < lst.length; s++) {
    str += "(" + (d/lst[s][1]) + "," + d + ")"
  }
  return str
}
convertFrac([ [1, 2], [1, 3], [1, 4] ])
// convertFrac([ [ 69, 130 ], [ 87, 1310 ], [ 3, 4 ] ])
