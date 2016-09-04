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

  //get the denominators



}
convertFrac([ [1, 2], [1, 3], [1, 4] ])

//find lcd
function lcd(){
  // get arguments into an array
  var args = [].slice.call(arguments);
  // find gcm of all nums in array
  var gcm = args.reduce((a,b)=>{return a*b})
  var m = 1
  var mAry = []
  // find all mulitples of the gcm
  while (m++ < gcm) {
    if (gcm % m === 0) {
      mAry.push(m)
    }
  }
  //console.log(mAry);
  // find all the numbers in the gcm array that is not a common mulitple in arguments ary
  var filtered =  mAry.filter((d)=>{
    for (let a in args) {
      if (d % args[a] !== 0) {
        //console.log(d);
        return d
      }
    }
  })
  // find all the numbers that can lcm
  var cm = mAry.filter((c)=>{
    return filtered.indexOf(c) == -1;
  })
  // return small common mulitple
  //console.log(cm)
  console.log( cm[0] )
}
lcd(2,3,4)
lcd(5,15,25)
