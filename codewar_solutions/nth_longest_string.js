
/*

Implement the function longest(array,n) where you will be given an array of strings and then return the nth longest string in that array. e.g. 

arr = ['Hello','World','Codewars','Katas'] n = 3; 

should return 'World' because 'Codewars' length = 8 , 'Hello' length = 5, so that is the 2nd longest word and then 'World' (although also word length of 5, 'World' is after 'Hello' in the array). 

When words have the same lengths, treat them in the order in which they exist in the array. Array will never be empty and n > 0 always.

*/

function longest(arr, n) {
//code me
	var ordered = [];
	var count = 0;
	//check each string's length, put them in some order
	for (var i = 0; i < arr.length; i++) {
		var c = [arr[i],  arr[i].length];
		ordered.push(c);
		count++;
	};
	//order within arr matters
	if (count == arr.length) {

	}else{
		ordered.sort(function(a, b) {
		    return a[1] - b[1];
		});
	}

	//find the nth in ordered arr
	ordered.unshift([null],[null]);
	var out;
	if (n == 1) { 
		out = ordered[2];
	}else{
		out = ordered[n]
	};

	console.log(n, ordered);
	return out[0];
}

//longest(['Hello','World','Codewars','Katas'],3);
//longest(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'],1);


