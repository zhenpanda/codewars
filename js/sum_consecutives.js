/*
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]
*/

function sumConsecutives(s) {
    // your code
    //console.log(s);
    var out = [];
    var c = 0;
    var index = -1;
    var num = null;

    while (s.length > c) {
    	num = s[c];

		if (num == s[c-1]) {
			//console.log(num, s[c-1], "is a match");
			//if (!out[index]) { out[index] = num };
			out[index] = out[index] + num;
		}else {
			//console.log(num, s[c-1], "different num")
			index++;
			out[index] = num;
		}

    	c++;
    };
    return out;
}

//sumConsecutives([1,1,7,7,3]);
//sumConsecutives([3,3,3,3,1]);
//sumConsecutives([1,4,4,0,4,3,3,1]);
//[1,12,0,4,6,1]

// function sumConsecutives(s) {
//     // your code
//     var keep = [];
//     var out = [];
//     for (var n = 0; n < s.length; n++) {
//     	if (!keep.includes(s[n])) {
//     		keep.push(s[n]);
//     		out.push(s[n]);
//     	}else{
//     		var c = 0;
//     		var run = true; 
//     		while(run) {
//     			if (keep[c] == s[n]) {
//     				run = false;
//     			};
//     			c++;
//     		};
//     		out[c] = out[c] + s[n];
//     	}
//     };
//     return out;
// }