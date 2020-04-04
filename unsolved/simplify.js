// Task
// Given a positive integer as input, return the output as a string in the following format:

// Each element, corresponding to a digit of the number, multiplied by a power of 10 in such a way that with the sum of these elements you can obtain the original number.

// Examples
// Input	Output
// 0	""
// 56	"5*10+6"
// 60	"6*10"
// 999	"9*100+9*10+9"
// 10004	"1*10000+4"
// Note: input >= 0

function simplify(number){
    //You can do this!
    let numStr = number+"";
    let output = "";
    for(let d=0; d<numStr.length; d++) {
        if(numStr[d] !== "0") {
            let zeros = "";
            for(let p=1; p<(numStr.length - d); p++) {
                zeros = zeros + "0";
            }
            let suffix = "";
            if(d !== numStr.length - 1) {
                
                suffix = ("1"+zeros) + "+";
            }
            output = output + numStr[d] + "*" + suffix;
            // console.log(output);
        }
    }

    return output;
}