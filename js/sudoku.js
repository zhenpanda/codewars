/*

Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array(in Rust: Vec<Vec<u32>>) , ie:

[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
Rules for validation

Data structure dimension: NxN where N > 0 and √N == integer
Rows may only contain integers: 1..N (N included)
Columns may only contain integers: 1..N (N included)
'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)

*/

var Sudoku = function(data) {
  return {
    sudoku: data,
    isValid: function() {
      let validity = true;
      // check for full board
      let dimensionsX = 0;
      let dimensionsY = 0;
      let totalSum = 0;
      this.sudoku.map((c)=>{c.map((r)=>{
        if (dimensionsX == 0) dimensionsX = c.length;
        else if(c.length != dimensionsX) validity = false;
        })
      dimensionsY++;
      totalSum+=dimensionsY;
      });
      // find dimensions sum
      if (dimensionsX == dimensionsY) {
        // check if it adds up each row/col
        this.sudoku.map(
        (r)=>{
          if (r.reduce((prev,curr)=>{return prev+curr},0) !== totalSum) return false;
          r.map((n)=>{ if(Number.isInteger(n) == false) validity = false; });
        });
        for (let r=0;r<dimensionsX;r++) {
          let col=0;
          for (let c=0;c<dimensionsY;c++) {col+=this.sudoku[c][r]};
          if (col !==totalSum ) return false;
        };
        // check each region is the square root of the area
        let rootRange = Math.sqrt(Math.sqrt(dimensionsX*dimensionsY));
        let regionSeed = [];
        for(let s=0; s<rootRange; s++) {
          for (let r=0; r<rootRange; r++) {
            regionSeed.push([s*rootRange,r*rootRange]);
          }
        };
        regionSeed.map(
          (s)=>{
            let reg = [];
            for (let sr=s[0];sr<s[0]+rootRange;sr++) {
              for (let sc=s[1];sc<s[1]+rootRange;sc++) {
                reg.push(this.sudoku[sr][sc]);
              }
            };
          reg.sort().map((c,i,a)=>{if(c===a[i+1]) validity=false;});
          if (reg.reduce((p,c)=>{return p+c},0) !==totalSum ) validity=false;
        });
      };
      return validity;
    }
  };
};

var goodSudoku2 = new Sudoku([
  [true]
]);
goodSudoku2.isValid()

// var goodSudoku2 = new Sudoku([
//   [1,4, 2,3],
//   [3,2, 4,1],
//
//   [4,1, 3,2],
//   [2,3, 1,4]
// ]);
// goodSudoku2.isValid()

// var badSudoku2 = new Sudoku([
//   [1,2,3,4,5],
//   [1,2,3,4],
//   [1,2,3,4],
//   [1]
// ]);
// badSudoku2.isValid()

// var goodSudoku1 = new Sudoku([
//   [7,8,4, 1,5,9, 3,2,6],
//   [5,3,9, 6,7,2, 8,4,1],
//   [6,1,2, 4,3,8, 7,5,9],
//
//   [9,2,8, 7,1,5, 4,6,3],
//   [3,5,7, 8,4,6, 1,9,2],
//   [4,6,1, 9,2,3, 5,8,7],
//
//   [8,7,6, 3,9,4, 2,1,5],
//   [2,4,3, 5,6,1, 9,7,8],
//   [1,9,5, 2,8,7, 6,3,4]
// ]);
// goodSudoku1.isValid()

var badSudoku1 = new Sudoku([
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],

  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],

  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9],
  [1,2,3, 4,5,6, 7,8,9]
]);
badSudoku1.isValid()
