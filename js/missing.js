// In this Kata, you will be given a string of numbers in sequence and your task will be to return the missing number. If there is no number missing or there is an error in the sequence, return -1.

// For example:

// missing("123567") = 4 
// missing("899091939495") = 92
// missing("9899101102") = 100
// missing("599600601602") = -1 -- no number missing
// missing("8990919395") = -1 -- error in sequence. Both 92 and 94 missing.
// The sequence will always be in ascending order.

// More examples in the test cases.

// Good luck!

function missing(s) {

    function breakString(size) {        
        let nums = [];
        while(s.length > 0) {
            let m = s[0];
            nums.push(parseInt(m));
            s = s.substring(1);
        };
        return nums;    
    }
    
    function findPattern(stringArr) {
        let missings = [];
        for(let n=0; n < stringArr.length; n++) {
            if(stringArr[n]+1 == stringArr[n+1]) {
            }else if(n!= stringArr.length-1){
                missings.push(stringArr[n]+1)
            }
        }
        return missings;
    }
    
    let arr = breakString(s);
    let pattern = findPattern(arr);
    if(pattern.length == 1) return pattern[0];
    
    return -1;
}
missing("123567");