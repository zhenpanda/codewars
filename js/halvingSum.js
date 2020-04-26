function halvingSum(n) {
    let result = 0;
    let num = n;
    let divider = 2;
    
    while(num > 0) {
//       console.log(num, result);
      result = result + num;
      num = Math.floor(num / divider);
    }
    return result;
}
