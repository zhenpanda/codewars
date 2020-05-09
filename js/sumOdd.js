function rowSumOddNumbers(n) {
    let sum = 0;
    let num = 1;
    for(let i=0; i<n; i++) {
      for(let r=0; r<=i; r++) {
        if(i===n-1) {
  //         console.log(i, num, n, sum);
          sum = sum + num;
        }
        num = num + 2;
      }
    }
  //   console.log(sum);
    return sum;
  }