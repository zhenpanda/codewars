function revrot(str, sz) {
    // your code
    var out = "";
    //edge case check
    if (sz > str.length || sz <= 0 || !sz) {
    	return "";
    }else{

    	for (var i = 0; i < str.length-1; i=i+sz) {
	    	var res = str.substring(i, i+sz);
	    	//console.log(res);

	    	//math check
	    	var sum = 0;
	    	for (var n = 0; n < res.length; n++) {
	    		sum = sum + Math.pow(parseInt(res[n]), 3)
	    	};
	    	if (res.length == sz) {    		
		    	if((sum % 2) == 0) {
		    		//console.log("is even, reverse it.");
		    		out = out + (res.split("").reverse().join(""));
		    	}else{
		    		//console.log("is odd, rotate it.");
		    		var f = res[0];
		    		var n = res.slice(1);
		    		out = out + n + f;
		    	};
	    	};
    	};
    };
    return out;
}

// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""

/*
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"

733049910872815764, 5
330479108928157
*/