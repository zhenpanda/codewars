/*
It's Christmas! You had to wait the whole year for this moment. You can already see all the presents under the Christmas tree. But you have to wait for the next morning in order to unwrap them. You really want to know, what's inside those boxes. But as a clever child, you can do your assumptions already.

You know, you were a good child this year. So you may assume, that you'll only get things from your wishlist. You see those presents, you can lift them and you can shake them a bit. Now you can make you assumptions about what you'll get.

Your Task

You will be given a wishlist (array), containing all possible items. Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)

You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}

Your task is to create a list of all possible presents you might get.

Rules

Possible values for size: "small", "medium", "large"
Possible values for clatters: "no", "a bit", "yes"
Possible values for weight: "light", "medium", "heavy"
The return value must be an array of the names of items from your wishlist, e.g. ["Toy Car", "Card Game"]
Don't add any item more than once to the result
The order of names in the returned array doesn't matter
It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.
Example

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]
*/

// var x = {'key': 1};
// if('key' in x) { console.log('has') }

// var hege = ["Cecilie", "Lone"];
// var stale = ["Emil", "Tobias", "Linus"];
// var children = hege.concat(stale);

// function objectsAreSame(x, y) {
//    var similarity = 0;
//    for(var propertyName in x) {
//       if(x[propertyName] !== y[propertyName]) {
//          similarity++;
//          break;
//       }
//    }
//    return similarity;
// }

// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
// var total = [0, 1, 2, 3].reduce(function(a, b) {
//   return a + b;
// });
// // total == 6

// [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
// console.log(previousValue);
// console.log(currentValue);
// console.log(currentIndex);
// console.log(array);
//   return previousValue + currentValue;
// });

function guessGifts(wishlist, presents) {
  	// TODO
  	var out = [];
  	wishlist.map(function(currentValue, index, array) {
  		// console.log(currentValue);
  		// console.log(index);
  		// console.log(array);
  		presents.map(function(currentValueB, indexB, arrayB) {
  			// console.log(currentValueB);
  			// console.log(indexB);
  			// console.log(arrayB);
  			if (currentValue.size == currentValueB.size && currentValue.clatters == currentValueB.clatters && currentValue.weight == currentValueB.weight) {
  				if(currentValue in out) { 
  					console.log("dup");
  				} else {
  					out.push(currentValue.name);
  				};
  			};
  		});
  	});
  	return out;
}

// function isInArray(value, array) { return array.indexOf(value) > -1; }

// isInArray(1, [1,2,3]); // true

function guessGifts(wishlist, presents) {
  	// TODO
  	var out = [];
  	wishlist.map(function(currentValue, index, array) {
  		presents.map(function(currentValueB, indexB, arrayB) {
  			if (currentValue.size == currentValueB.size && currentValue.clatters == currentValueB.clatters && currentValue.weight == currentValueB.weight) {
  				function isInArray(value, array) { return array.indexOf(value) > -1; }
  				if (isInArray(currentValue.name, out) == false) { out.push(currentValue.name) };
  			};
  		});
  	});
  	return out;
}

// var obj = { name: 'myObj' };
// JSON.stringify(obj);

var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40

function guessGifts(wishlist, presents) {
  	// TODO\
	var input = "A string with 3 numbers in it... 42 and 88.";
	var number = /\b(\d+)\b/g;
	
	var match;
	while (match = JSON.stringify(presents).exec(JSON.stringify(wishlist)))
		console.log(match[1])
}