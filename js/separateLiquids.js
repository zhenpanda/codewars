/*

Don't Drink the Water

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

[                            [
 ['H', 'H', 'W', 'O'],        ['O','O','O','O']
 ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
 ['H', 'H', 'O', 'O']         ['H','H','H','H']
 ]                           ]
The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

*/

function separateLiquids(glass) {
  let liquidHolderObj = {'O':[],'W':[],'A':[],'H':[]};
  glass.map((g)=>{
    if (g===[]) {
      return g;
    }else{
      g.map((l)=>{
        switch (l) {
          case 'O':liquidHolderObj['O'].push('O');break;
          case 'W':liquidHolderObj['W'].push('W');break;
          case 'A':liquidHolderObj['A'].push('A');break;
          case 'H':liquidHolderObj['H'].push('H');break;
        }
      })
    }
  })
  // replace in correct order
  for (let c=0; c<glass.length; c++) {
    for (let g=0; g<glass[c].length; g++) {
      if (liquidHolderObj['O'][0]) {
        glass[c][g] = 'O';
        liquidHolderObj['O'].shift();
      }else if (liquidHolderObj['A'][0]) {
        glass[c][g] = 'A';
        liquidHolderObj['A'].shift();
      }else if (liquidHolderObj['W'][0]) {
        glass[c][g] = 'W';
        liquidHolderObj['W'].shift();
      }else if (liquidHolderObj['H'][0]) {
        glass[c][g] = 'H';
        liquidHolderObj['H'].shift();
      }
    }
  }
  return glass;
}
separateLiquids([['A'],['H'],['W'],['O']])
