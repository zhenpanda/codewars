// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let shortest = 100;
    let arr = s.split(" ");
    arr.map((w) => {
        if(w.length < shortest) 
            shortest = w.length;
            return null
    })
    return shortest;
}