// Create a moreZeros function which will receive a string for input, and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False

//         --> ['a','b','d']

// 'DIGEST'--> ['D','I','E','T']
// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

function moreZeros(s){
    let newArrays = [];
    let letters = s.split("");
    for (let i = 0; i < letters.length; i++) {
        let binary = letters[i].charCodeAt(0).toString(2) + " ";
        // console.log(binary);    
        let zeroCount = 0;
        let oneCount = 0;
        for(let b = 0; b < binary.length; b++) {
            // console.log(binary[b]);
            if(binary[b] == "0") {
                zeroCount = zeroCount + 1;
            }else if(binary[b] == "1"){
                oneCount =oneCount + 1;
            }
        }
        // console.log(zeroCount, oneCount)
        if(zeroCount > oneCount) newArrays.push(letters[i])
    }
    return [...new Set(newArrays)];
}
