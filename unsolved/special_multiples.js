/*

Some numbers have the property to be divisible by 2 and 3. Other smaller subset of numbers have the property to be divisible by 2, 3 and 5. Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7. These numbers have something in common: their prime factors are contiguous primes.

Create a function count_specMult() that finds the amount of numbers that have the first n primes as factors bellow a given value, maxVal

Let's see some cases:

count_specMult(3, 200) -------> 6 

/// the first 3 primes are 2, 3 and 5

and the found numbers bellow 200 are 30 < 60 < 90 < 120 < 150 < 180 < 200 (6 numbers)

2*3*5 = 30
2*(2(3(5))) = 60
3*(2(3(5))) = 90

*/

function countSpecMult(n, mxval) {
	// your code
	function isPrime (n)
	{
	    if (n < 2) return false;
	    /**
	     * An integer is prime if it is not divisible by any prime less than or equal to its square root
	     **/
	    var q = Math.floor(Math.sqrt(n));
	    for (var i = 2; i <= q; i++)
	    {
	        if (n % i == 0)
	        {
	            return false;
	        }
	    }
	    return true;
	};
	//generate the primes
	var num = 2;
	var primeAry = [];
	while(primeAry.length < n) {
		//console.log(num);
		if (isPrime(num) == true) {
			primeAry.push(num);
		}
		num++;
	};
	//console.log("primes r", primeAry);
	var specMultList = [];
	var smallestMult = 1;
	for (var p = 0; p < primeAry.length; p++) {
		smallestMult = smallestMult * primeAry[p];
	};
	//console.log(smallestMult);
	if (mxval < smallestMult) {
		return 0;
	}else {
		//check for dups
		function isInArray(array, search)
		{
		    return array.indexOf(search) >= 0;
		};

		for (var i = smallestMult; i < mxval; i=i+smallestMult) {
			if (i%smallestMult == 0) {
				if (isInArray(specMultList,i) == false) {
					specMultList.push(i);
				};
			}
		}
	};
	//console.log(specMultList);
	return specMultList.length;
}






















