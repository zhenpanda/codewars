/*

Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.

A player wins by connecting four of their discs horizontally, vertically or diagonally.

Given a multidimensional array representing a Connect Four board, your task is to create a function which can determine who won the game.

Your connectFour function will be passed an array matrix similar to this:

[['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','R','R','R','R'],
 ['-','-','-','Y','Y','R','Y'],
 ['-','-','-','Y','R','Y','Y'],
 ['-','-','Y','Y','R','R','R']];
'R' represents a red disc

'Y' represents a yellow disc

'-' represents an unoccupied space

In this example the red player won by making a horizontal line of 4 red discs.

If the red player won, your connectFour function should return 'R'. If the yellow player won, it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress it should return 'in progress'.

You can learn more about how Connect Four is played here:

*/

['3','4','5','6',   ,   ,   ]
['2','3','4','5','6',   ,   ]
['1','2','3','4','5','6',   ]
[   ,'1','2','3','4','5','6']
[   ,   ,'1','2','-','-','-']
[   ,   ,   ,'1','-','-','-']

[   ,   ,   ,'1','2','3','4']
[   ,   ,'1','2','3','4','5']
[   ,'1','2','3','4','5','6']
['1','2','3','4','5','6',   ]
['-','-','-','5','6',   ,   ]
['-','-','-','6',   ,   ,   ]


// board is 7 x 6

var board = [
  ['-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-'],
  ['-','-','-','-','Y','-','-'],
  ['-','-','-','Y','R','-','-'],
  ['-','R','Y','R','Y','-','-'],
  ['R','Y','R','Y','R','Y','R']
]

function connectFour(board) {
  // check values, rest p
  function valueChecker(...values) {
    // console.log(values);
    if (values[0]==='R' && values[1]==='R' && values[2]==='R' && values[3]==='R') {
      return 'R';
    }else if (values[0]==='Y' && values[1]==='Y' && values[2]==='Y' && values[3]==='Y') {
      return 'Y';
    }else{
      return false;
    }
  }

  // check each horizontal row for wins
  for (let h=0; h<board.length; h++) {
    // only check up to 4 space for 4 of a kind
    for (let k=0; k<4; k++) {
      let horizontalCheck = valueChecker(board[h][k],board[h][k+1],board[h][k+2],board[h][k+3]);
      if (horizontalCheck) return horizontalCheck;
    }
  }
  // check each vertical row for wins
  for (let v=0; v<7; v++) {
    // only check up to 3 space for 4 of a kind
    for (let k=0; k<3; k++) {
      let verticalCheck = valueChecker(board[k][v],board[k+1][v],board[k+2][v],board[k+3][v]);
      if (verticalCheck) return verticalCheck;
    }
  }
  // check crosses X
  let crossGap = [1,2,3,3,2,1];
  // check left cross for wins, 6 possible
  let leftCheckStartPoint = [[2,0],[1,0],[0,0],[0,1],[0,2],[0,3]];
  for (let l=0; l<crossGap.length; l++) {
    for (let k=0; k<crossGap[l]; k++) {
      let row = leftCheckStartPoint[l][0]+k;
      let col = leftCheckStartPoint[l][1]+k;
      let leftCrossCheck =  valueChecker(board[row][col],board[row+1][col+1],board[row+2][col+2],board[row+3][col+3]);
      if (leftCrossCheck) return leftCrossCheck;
    }
  }
  // check right cross for wins, 6 possible
  let rightCheckStartPoint = [[0,3],[0,4],[0,5],[0,6],[1,6],[2,6]];
  for (let r=0; r<crossGap.length; r++) {
    for (let k=0; k<crossGap[r]; k++) {
      let row = rightCheckStartPoint[r][0]+k;
      let col = rightCheckStartPoint[r][1]-k;
      let rightCrossCheck =  valueChecker(board[row][col],board[row+1][col-1],board[row+2][col-2],board[row+3][col-3]);
      if (rightCrossCheck) return rightCrossCheck;
    }
  }
  // check draw
  let draw = true;
  for (let d=0; d<board.length; d++) {
    if (board[d].includes('-')) {
      draw = false;
    }
  }
  if (draw) {
    return 'draw';
  }else{
    return 'in progress';
  }
}

connectFour(board);
