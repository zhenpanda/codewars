/*

Magic The Gathering is a collectible card game that features wizards battling against each other with spells and creature summons. The game itself can be quite complicated to learn. In this series of katas, we'll be solving some of the situations that arise during gameplay. You won't need any prior knowledge of the game to solve these contrived problems, as I will provide you with enough information.

In Magic, each spell you cast has a cost associated with it. Those costs are represented like so:

"B" -> One black mana
"G" -> One green mana
"R" -> One red mana
"U" -> One blue mana
"W" -> One white mana

"1" -> One colorless mana
"2" -> Two colorless mana
"3BBG" -> Three colorless mana, two black mana, one green mana
Your mana pool will be one string that contains all of your available mana like so:

"10WWWRRRRR" -> Means you have 10 colorless mana, 3 white mana and 5 red mana to work with.
The caveat is, any left over colored mana, can be used as colorless mana. So if you have a spell that costs "1B" and your mana pool has "UB" you can cast that spell, since the "U" can be used as a colorless mana.

With this knowlege, write a function canCast() that takes in a string for your mana pool and then any number of spells' casting costs. Return true if you have enough mana to cast the spell, false otherwise.

Examples:

canCast("BBRR","BR") -> true
canCast("BBRR","BR","BR") -> true
canCast("4R","3R") -> true
canCast("2", "R") -> false
canCast("RR", "2") -> true
canCast("BBRR","BR") # true
canCast("BBRR","BR","BR") # true
canCast("4R","3R") # true
canCast("2", "R") # false
canCast("RR", "2") # true

*/

// Don't forget the parameters
function canCast() {
  let cast = [ arguments[0], arguments[1] ];
  // test result that's wrong...
  // covert colorless
  for(let a=0;a<cast.length;a++) {
    if( Number.isInteger(parseInt(cast[a][0])) && Number.isInteger(parseInt(cast[a][1])) ) {
      let colorlessMana = parseInt( cast[a][0] + cast[a][1] );
      cast[a] = cast[a].substring(2);
      cast[a] = Array.prototype.slice.call(cast[a]).sort()
      for(let c=0;c<colorlessMana;c++) {
        cast[a].unshift("C");
      }
    }else if( Number.isInteger(parseInt(cast[a][0])) ){
      let colorlessMana = parseInt(cast[a][0]);
      cast[a] = Array.prototype.slice.call(cast[a]).sort()
      cast[a].shift();
      for(let c=0;c<colorlessMana;c++) {
        cast[a].unshift("C");
      }
    }else{
      cast[a] = Array.prototype.slice.call(cast[a]).sort()
    }
  }
  // check cmc
  if(cast[0].length < cast[1].length) {
    return false;
  }else{
    // check for colored mana
    let castSymbols = [
      { "W": 0, "U": 0, "B": 0, "R": 0, "G": 0, "C": 0, "T": 0},
      { "W": 0, "U": 0, "B": 0, "R": 0, "G": 0, "C": 0, "T": 0}
    ];
    for(let a=0;a<cast.length;a++) {
      cast[a].map((p)=>{
        switch (p) {
          case "W":castSymbols[a]["W"]++;break;
          case "U":castSymbols[a]["U"]++;break;
          case "B":castSymbols[a]["B"]++;break;
          case "R":castSymbols[a]["R"]++;break;
          case "G":castSymbols[a]["G"]++;break;
          case "C":castSymbols[a]["C"]++;break;
        }
      });
      castSymbols[a]["T"] = cast[a].length;
    }
    // check if mana matches
    for (let key in castSymbols[1]) {
      if(castSymbols[1][key] > castSymbols[0][key] && key != "C" && key != "T") {
        return false;
      }else if(castSymbols[0][key] > 0 && key != "C") {
        castSymbols[0]["T"]--;
      }else if(key == "C") {
        if(castSymbols[1]["C"] > castSymbols[0]["T"]) {
          return false;
        }
      }
    }
  }

  return true;
}

canCast("10","2R")
