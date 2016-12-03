/*

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an X, or 2 if it is an O, like so:

[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won, or 0 if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

*/

function isSolved(board) {
  // console.log(board);
  // check for any winner
    let winConditionPositions = [
      // rows
      [[0,0],[0,1],[0,2]],
      [[1,0],[1,1],[1,2]],
      [[2,0],[2,1],[2,2]],
      // columns
      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[2,2]],
      // cross
      [[0,0],[1,1],[2,2]],
      [[0,2],[1,1],[2,0]],
    ];
    // start with not solved
    let result;
    let allFilled = true;
    // loop board through winConditionPositions
    winConditionPositions.map((e,i,a)=>{
      let value = 0;
      let p1 = board[e[0][0]][e[0][1]];
      let p2 = board[e[1][0]][e[1][1]];
      let p3 = board[e[2][0]][e[2][1]];
      if (p1 === 0 || p2 === 0 || p3 === 0) { allFilled = false }
      value = p1+p2+p3;
      if (p1 === 1 && p2 === 1 && p3 === 1) {
        result=1;
      }else if (p1 === 2 && p2 === 2 && p3 === 2) {
        result=2;
      };
    });
  // check for draw
    if (!result && allFilled) {
      result = 0;
    }else if(!result && !allFilled){
      result = -1;
    }
    return result;
  // return unsolved
}

isSolved([[0,0,1],
          [0,1,2],
          [2,1,0]]) // -1
