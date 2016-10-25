/*

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450

*/

function score( dice ) {
  // console.log(dice)
  let points = 0;
  let c = {};
  // you can't have multiple 3s of one kind check that first-area-pic
  dice.map((e)=>{
    if (!c.hasOwnProperty(e)) {
      c[e] = 1;
    }else{
      c[e] = c[e] + 1;
    }
  })
  // remove element from an array function
  function removeNum(ary, num) {
    for (let i = 0; i < 3; i++) {
      let index = ary.indexOf(num);
      if (index > -1) { ary.splice(index, 1) }
    }
    return ary;
  }
  // check if there are any 3 of kind
  let triple;
  let newAry;
  for (let key in c) {
    if (c[key] > 2) {
      triple = key;
      // add point according to the table for triples
      switch (triple) {
        case "1":
        points = points + 1000;
        newAry = removeNum(dice, 1);
        break;
        case "2":
        points = points + 200;
        newAry = removeNum(dice, 2);
        break;
        case "3":
        points = points + 300;
        newAry = removeNum(dice, 3);
        break;
        case "4":
        points = points + 400;
        newAry = removeNum(dice, 4);
        break;
        case "5":
        points = points + 500;
        newAry = removeNum(dice, 5);
        break;
        case "6":
        points = points + 600;
        newAry = removeNum(dice, 6);
        break;
        default:
        break;
      }
    }
  }
  if (newAry == null) {
    newAry = dice;
  }
  newAry.map((n)=>{
    if (n == 1) {
      points = points + 100;
    }else if (n == 5) {
      points = points + 50;
    }
  })
  return points;
}

score( [2, 4, 4, 5, 4] )

// other people's solution

function score( dice ) {
  var score = [0, 0, 0, 0, 0, 0];

  dice.forEach(function(die) {
    ++score[die - 1];
  });

  return score.reduce(function(total, n, i) {
    switch (i + 1) {
      case 1:
        return total + (Math.floor(n / 3) * 1000) + ((n % 3) * 100);

      case 5:
        return total + (Math.floor(n / 3) * 500) + ((n % 3) * 50);

      default:
        return total + (Math.floor(n / 3) * (i + 1) * 100);
    }
  }, 0);
}
