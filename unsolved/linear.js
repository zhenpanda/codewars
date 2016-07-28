/*

Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:

Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.

Example:

dbl_linear(10) should return 22

Note:

Focus attention on efficiency

*/


function dbl_linear(n) {
	// return uniques
	function onlyUnique(value, index, self) { 
	    return self.indexOf(value) === index;
	}

	// n equal to n-th number in the u sequence
	var u = [1];
	if (n > 0) {
		var x = 1;
		var unique = [1];		
		while(unique.length < n+2) {	
			var y = 2 * x + 1;
			var z = 3 * x + 1;
			unique.push(y);
			unique.push(z);

			//unique = u.filter( onlyUnique ); 
			unique.sort(function(a, b){return a-b});
			console.log(unique);
			x++;
		}
		return unique;

	}else{
		return 1;
	}

};

