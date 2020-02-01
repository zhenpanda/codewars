// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    let arr = str.split(" ");
    let capArr = arr.map((w) => {
        return w.charAt(0).toUpperCase() + w.slice(1);
    })
    let newStr = capArr.join("");
    if(newStr.length > 139 || newStr.length < 1) return false;
    else return ("#" + newStr);
}