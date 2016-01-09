/*
In this finite version of Conway's Game of Life (here is an excerpt of the rules) ...

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one)

...implement your own method which will take the initial state as an NxM array of 0's (dead cell) and 1's (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead. Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).
N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks respectively. You can take advantage of the 'htmlize' function to get a text representation of the universe:
eg:
*/
/*
 
[ 1, 1 ]
[ 1, 1 ]

[ 0, 1, 0 ]
[ 0, 1, 0 ]
[ 0, 1, 0 ]

[ 0, 0, 0 ]
[ 1, 1, 1 ]
[ 0, 0, 0 ]

[ 00, 01, 02 ]
[ 10, 11, 12 ]
[ 20, 21, 22 ]


*/


function nextGen(cells) {
  // Uncomment next row to have an example
  //copy array but dont' mutate
  var nextGenCells = cells.map(function(arr) {
    return arr.slice();
  });
  var seach = function(ary) {
  	for (var r = 0; r < ary.length; r++) {
		for (var c = 0; c < ary.length; c++) {
			//check state function
			var check = function(row, col, state) {
				var count = 0;
				//checking if there is a neigbor		
				var neighbourPlace = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
				for (var n = 0; n < 8; n++) {
					var x = neighbourPlace[n][0]+r;
					var y = neighbourPlace[n][1]+c;
					if (x>=0 && y>=0 && x<ary.length && y<ary.length) {
						//console.log(r,c, "is target", x,y, "this is next to target it is a", ary[x][y]);
						if (ary[x][y] == 1) { 
							//console.log(x,y, "this is a living 1");
							count++;	
						};
					};
				};
				//console.log(count);
				//checking a living cell
				if (state==1) {
					if (count>=2 && count<=3) {
						//console.log(r,c, "lives on.");
						nextGenCells[r][c] = 1;
					};
					if(count < 2 || count > 3) {
						nextGenCells[r][c] = 0;
					};
				//checking an empyt cell
				}else if(state==0) {
					if (count==3) {
						nextGenCells[r][c] = 1;
					};
				};
			};
			//check neighbours
			//search each living thing
			if (ary[r][c] == 1 ) { 
				check([r],[c],1); 
			}else{
				check([r],[c],0);
			};
		};
  	};
  };
  seach(cells);
  return(nextGenCells);
}
//nextGen([[ 1, 1 ],[ 1, 1 ]]);
//nextGen([ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ] ]);
//console.table(nextGen([ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ] ]))