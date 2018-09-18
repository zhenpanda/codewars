
function hand(holeCards, communityCards) {
    let cards = holeCards.concat(communityCards);

    

}

hand(["A♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"])
// {type: "pair", ranks: ["A", "J", "10", "5"]}
hand(["A♠", "K♦"], ["J♥", "5♥", "10♥", "Q♥", "3♥"]) 
// {type: "flush", ranks: ["Q", "J", "10", "5", "3"]}
