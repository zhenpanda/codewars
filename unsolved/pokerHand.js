/*

A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold'em also online. Can you help them by writing an algorithm that can rank poker hands?

Task:

Create a poker hand that has a method to compare itself to another poker hand:
    PokerHand.prototype.compareWith = function(hand){...};

A poker hand has a constructor that accepts a string containing 5 cards:
    var hand = new PokerHand("KS 2H 5C JD TD");

The characteristics of the string of cards are:
A space is used as card seperator
Each card consists of two characters
The first character is the value of the card, valid characters are:
2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
The second character represents the suit, valid characters are:
S(pades), H(earts), D(iamonds), C(lubs)

The result of your poker hand compare can be one of these 3 options:
var Result =
{
    "win": 1,
    "loss": 2,
    "tie": 3
}

Apply the Texas Hold'em rules for ranking the cards.
There is no ranking for the suits.

*/

// check for most winning hand first
/*
  straight flush  (order,suits matter) (1 - 9) * 900,000,000
  four of a kind  (number matter) rank (1 - 13) * 80,000,000
  full house      (number matter) rank (12 - 26) * 7,000,000
  flush           (suits matter) rank (1 - 13) * 600,000
  straight        (order, matter) rank (1 - 9) * 50,000
  three of a kind (number matter) rank (1 - 13) * 4000
  two pair        (number matter) rank (12 - 26) * 300
  pair            (number matter) rank (1 - 13) * 20

  *high card      (number matter) rank (1 - 13) * 1
*/

var Result = { "win": 1, "loss": 2, "tie": 3 }
class PokerHand {
  constructor(hand) {
    console.log(hand);
    this.cards = hand.split(" ");
    this.handValue = 0;
    this.matchNumbers();
  }
  // helper func check for higest number
  checkNumberValue(num) {
    let value = 0;
    switch (num) {
      case "A":
        value = 13;
        break;
      case "K":
        value = 12;
        break;
      case "Q":
        value = 11;
        break;
      case "J":
        value = 10;
        break;
      case "T":
        value = 9;
        break;
      default:
        value = parseInt(num) - 1;
        break;
    }
    return value;
  }
  // helper func check for flush
  checkFlushSuits() {
    let flushSuits = true;
    let suit = this.cards[0][1];
    this.cards.map((c) => {
      if(c[1] !== suit) flushSuits = false;
    })
    return flushSuits;
  }
  // helper func check for straights
  checkStraightNumbers() {
    let straight = true;
    let cardFaces = [];
    this.cards.map((e) => {
      switch (e[0]) {
        case "A":
          cardFaces.push(14);
          break;
        case "K":
          cardFaces.push(13);
          break;
        case "Q":
          cardFaces.push(12);
          break;
        case "J":
          cardFaces.push(11);
          break;
        case "T":
          cardFaces.push(10);
          break;
        default:
          cardFaces.push(parseInt(e[0]));
          break;
      }
    })
    cardFaces.sort(function(a, b) {return a - b});
    for (let i = 0; i < cardFaces.length-1; i++) {
      if(cardFaces[i]+1 !== cardFaces[i+1]) straight = false;
    }
    // console.log(cardFaces);
    return straight;
  }

  // main func - check for number matters first (4 of k, 3 of k, 2p, 1p)
  matchNumbers() {
    let matchingNumbers = {};
    this.cards.map((c)=>{
      if ( matchingNumbers[c[0]] ) matchingNumbers[c[0]]+= 1;
      else matchingNumbers[c[0]] = 1;
    });
    // console.log(matchingNumbers);
    let pattern = [];
    for (let key in matchingNumbers) {
      let numericValue = this.checkNumberValue(key);
      switch (matchingNumbers[key]) {
        case 4:
          pattern.push([numericValue, "x4"]);
          break;
        case 3:
          pattern.push([numericValue, "x3"]);
          break;
        case 2:
          pattern.push([numericValue, "x2"]);
          break;
        case 1:
          pattern.push([numericValue, "x1"]);
          break;
      }
    }
    // set numeric value keys in array
    // check for double pairs
    let pairCount = 0;
    let threeCount = 0;
    let extraValue = 0;
    pattern.map((e) => {
      if (e[1] == "x2") {
        pairCount++;
        extraValue += e[0];
      }else if (e[1] == "x3") {
        threeCount++;
        extraValue += e[0];
      }
    });
    if (pairCount === 2) {
      pattern.push([extraValue,'d2']);
    }else if (pairCount === 1 && threeCount === 1) {
      pattern.push([extraValue, 'fh']);
    }
    // debugger;
    pattern.map((p) => {
      let currentValue = p[0];
      // check for hand multiplier
      switch (p[1]) {
        case "x4":
          currentValue = currentValue * 70000000;
          break;
        case "fh":
          currentValue = currentValue * 6000000;
          break;
        case "x3":
          currentValue = currentValue * 3000;
          break;
        case "d2":
          currentValue = currentValue * 200
          break;
        case "x2":
          currentValue = currentValue * 10
          break;
        case "x1":
          currentValue = currentValue * 1
          break;
      }
      // console.log(currentValue);
      // set attr in number value assign to the class
      this.handValue+=currentValue;
    });
    // debugger;
    // check for flush
    let flushCheck = this.checkFlushSuits();
    let straightCheck = this.checkStraightNumbers();
    // console.log(flushCheck, " <- flush");
    // console.log(straightCheck, "<- straight");
    if (flushCheck && straightCheck) {
      this.handValue = this.handValue * 800000000;
    }else if (flushCheck && !straightCheck) {
      this.handValue = this.handValue * 500000
    }else if (!flushCheck && straightCheck) {
      this.handValue = this.handValue * 40000
    }
    // console.log(this.handValue);
  }
}

PokerHand.prototype.compareWith = function(hand){
    if (this.handValue === hand.handValue) {
      return Result.tie;
    }else if (this.handValue > hand.handValue) {
      return Result.win;
    }else if (this.handValue < hand.handValue) {
      return Result.loss;
    }
    return Result.win;
}

// exp 2 got 1
var p = new PokerHand("QC KH TS JS AH");
var o = new PokerHand("7C 7S 3S 7H 5S");
// p.matchNumbers();
p.compareWith(o);
