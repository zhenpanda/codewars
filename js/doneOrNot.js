/*

Write a function done_or_not passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:



There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:



There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions



A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

Valid board example:



For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/

*/

function doneOrNot(board){
  // console.log(board)
  // cross check puzzle vertical and horizontally
  let answerNums = [1,2,3,4,5,6,7,8,9];
  let match = true;
  // row check
  board.map((row)=>{
    let testRow = row.slice();
    if (testRow.sort().toString()!=answerNums.sort().toString()) match = false;
  });
  // col check
  for (let c=0; c<board.length; c++) {
    let colNums = [];
    for (let n=0; n<board.length; n++) {
      colNums.push(board[n][c])
    }
    if (colNums.sort().toString()!=answerNums.sort().toString()) match = false;
  };
  // check box
  for (let br=0; br<board.length; br+=3) {
    for (let bc=0; bc<board.length; bc+=3) {
      let boxNums = [];
      // console.log("starting postion", br,bc)
      for (let bd=0; bd<3; bd++) {
        boxNums.push(board[br+bd][bc+0]);
        boxNums.push(board[br+bd][bc+1]);
        boxNums.push(board[br+bd][bc+2]);
      }
      if (boxNums.sort().toString()!=answerNums.sort().toString()) match = false;
    }
  }
  // console.table(board);
  if(match) {return "Finished!";}else{return "Try again!";};
}

// doneOrNot([
//            [5, 3, 4, 6, 7, 8, 9, 1, 2],
//            [6, 7, 2, 1, 9, 5, 3, 4, 8],
//            [1, 9, 8, 3, 4, 2, 5, 6, 7],
//            [8, 5, 9, 7, 6, 1, 4, 2, 3],
//            [4, 2, 6, 8, 5, 3, 7, 9, 1],
//            [7, 1, 3, 9, 2, 4, 8, 5, 6],
//            [9, 6, 1, 5, 3, 7, 2, 8, 4],
//            [2, 8, 7, 4, 1, 9, 6, 3, 5],
//            [3, 4, 5, 2, 8, 6, 1, 7, 9]
//          ]);
//"Finished!" "Try again!"

doneOrNot([
            [ 1, 3, 2, 5, 7, 9, 4, 6, 8 ],
            [ 4, 9, 8, 2, 6, 1, 3, 7, 5 ],
            [ 7, 5, 6, 3, 8, 4, 2, 1, 9 ],
            [ 6, 4, 3, 1, 5, 8, 7, 9, 2 ],
            [ 5, 2, 1, 7, 9, 3, 8, 4, 6 ],
            [ 9, 8, 7, 4, 2, 6, 5, 3, 1 ],
            [ 2, 1, 4, 9, 3, 5, 6, 8, 7 ],
            [ 3, 6, 5, 8, 1, 7, 9, 2, 4 ],
            [ 8, 7, 9, 6, 4, 2, 1, 3, 5 ]
        ]);
