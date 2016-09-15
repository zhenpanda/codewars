/*

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

*/

function sortArray(array) {
	if (array.length === 0) { 
		return array; 
	}else{
		//find odd num, sort odd num ary
		let o = []
		array.forEach((e,i,a)=>{
			if (e%2 !== 0) { o.push(e) }
			if (i === array.length - 1) {	
				o.sort((a,b)=>{ return a - b })
			};
		})
		let c = 0
		array.forEach((e,i,a)=>{
			if (e%2 !== 0) {
				array[i] = o[c]
				c++
			}
		})
		return array
	}
};

// sortArray([]);
sortArray([5, 3, 2, 8, 1, 4]);


