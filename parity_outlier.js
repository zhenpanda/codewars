/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The integers in the array are either entirely odd or entirely even except for a single integer N. 
Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160

[0,1,2]

*/

function findOutlier(integers) {
  //your code here
  //console.log(integers);
  var evenCount = 0;
  var oddCount = 0;
  var out;
  for (var i = 0; i < integers.length; i++) {
  	if (integers[i]%2==0) {
  		evenCount++;
  	}else{
  		oddCount++;
  	};
  	if (evenCount>0 && oddCount>0) {
  		if (evenCount>oddCount || evenCount<oddCount) {
  			out = integers[i];
  			return out;
  		//console.log("wait");
  		}else if (evenCount==oddCount) {
  			//check next if next is same set, last is outlier else self is outlier
  			if (integers[i+1]%2==0 && integers[i]%2==0) {
  				out = integers[i-1];
  				return out;
  			}else if (integers[i+1]%2!=0 && integers[i]%2!=0) {
  				out = integers[i-1];
  				return out;
  			}else{
  				out = integers[i];
  				return out;
  			}
  		};
  	};
  };
}

//findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
//findOutlier([160, 3, 1719, 19, 11, 13, -21])