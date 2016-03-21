/*
var sample  = "Lorem ipsum ipsum";
var counter = wordCounter(sample);
console.log(counter);

console.log(counter.count("Lorem")); // 1
console.log(counter.count("hey"));   // 0
*/

var wordCounter = function(text) {
    // TODO - Add your implementation here
    var obj = {
        input: text,
        count: function(word) {
            var self = this;
            var w = String(word) + "_";
			if(self.hasOwnProperty(w)){
			    return self[w];
			}else {
				return 0;
			}
        }
    };
    //regex juice
    var array = text.split(/[ ,.]+/);
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > 0) {
        	var s = String(array[i]) + "_";
            if (s in obj) {
                //console.log(obj[s]);
                obj[s] = obj[s] + 1;
            } else {
                //console.log(obj[s]);
                obj[s] = 1;
            }
        };
    };

    return obj;
};

/*

var c = wordCounter("Welcome to the function, constructor");
console.log(c);

*/
