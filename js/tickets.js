/*

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

*/

// === JavaScript ==
// let max = Math.max(...store);


function tickets(peopleInLine){
  function changeFinder(cash, inventory) {
    let changeBack;
    inventory.sort();
    switch (cash) {
      case 50:
        changeBack=25;
        let head = inventory.shift();
        if (changeBack-head===0) {
          return inventory;
        }else{
          return false}
        break;
      case 100:
        changeBack=75;
        let twobill = inventory[0]+inventory[inventory.length-1];
        let threebill = inventory[0]+inventory[1]+inventory[2];
        if (changeBack-twobill===0) {
          inventory.shift();
          inventory.pop();
          return inventory;
        }else if(changeBack-threebill===0){
          inventory.shift();
          inventory.shift();
          inventory.shift();
          return inventory;
        }else{
          return false}
        break;
    }
  }
  let store = [];
  for (let c=0; c<peopleInLine.length; c++) {
    if (peopleInLine[c]!==25) {
      let changeResult = changeFinder(peopleInLine[c], store);
      if (changeResult) {
        store = changeResult;
      }else{
        return "NO";
      }
    }
    if (peopleInLine[c]!==100) store.push(peopleInLine[c]);
  }
  return "YES";
};


tickets([25, 25, 50]) // => YES
tickets([25, 100])
// => NO. Vasya will not have enough money to give change to 100 dollars
