// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
    let highestWord = "";
    let words = x.split(" ");
    words.map((w) => {
        let letters = w.split(""); 
        console.log(w);
        letters.map((l) => {
            let value = (l).charCodeAt(0);
            console.log(value);
            return null;
        })
        return null;
    });
}

high('man i need a taxi up to ubud');