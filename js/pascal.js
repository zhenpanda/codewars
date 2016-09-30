/*

Here you will create the classic pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle upto that depth

The triangle should be returned as a nested array.

for example:

pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1"). eg

          [1]
        [1   1]
       [1  2  1]
      [1  3  3  1]
here you get the 3 by adding the 2 and 1 above it.

*/

function pascal(depth) {
  //code here
  var outArray = [[1]];
  var count = 0;

  function nextLevel(input) {
  	if (input == 1) { return 1};
  	
  	console.log(count + " is current building level");
  	var currentLevel = [];
  	//left edge
  	currentLevel.push(1);
  	//mid
  	for (var e = 0; e < outArray[count].length-1; e++) {
  		console.log(outArray[count]);
		console.log(e + " is above me")
		currentLevel.push( (outArray[count][e]) + (outArray[count][e+1]) );
  	};
  	//right edge
  	currentLevel.push(1);
  	//out array
  	outArray.push(currentLevel);

  	count++;
  	depth--;
  	nextLevel(depth);
  }
  nextLevel(depth);
  console.table(outArray);
}

function pascal(depth) {
  //code here
  var outArray = [[1]];
  var count = 0;

  function nextLevel(input) {
  	if (input == 1) { return 1};
  	var currentLevel = [];
  	currentLevel.push(1);
  	for (var e = 0; e < outArray[count].length-1; e++) { currentLevel.push( (outArray[count][e]) + (outArray[count][e+1]) ) };
  	currentLevel.push(1);
  	outArray.push(currentLevel);
  	count++;
  	depth--;
  	nextLevel(depth);
  }
  nextLevel(depth);
  return outArray;
}