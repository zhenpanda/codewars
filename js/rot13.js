/* 

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Please note that using "encode" in Python is considered cheating.

*/

function rot13(message){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    return message.split("").map((e) => {

        let position = -1;
        let charLowerCased = false;
        if(e !== e.toLowerCase()) charLowerCased = true; 
        e = e.toLowerCase();

        for(let p=0;p<alphabet.length;p++) {
            if(alphabet[p] === e) {
                position = p; 
                break;
            } 
        }
        
        if(position === -1) return e;

        position+=13;
        position=position%26;

        if(charLowerCased) return alphabet[position].toUpperCase();
        else return alphabet[position];

    }).join("");
}

rot13("Ruby is cool!");

/*

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

*/