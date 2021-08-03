//Magic the Gathering #1: Creatures

//make a surviving creatures object
//figure out which player has a longer list of characters
//set up a battle between characters for each character in the longer character lineup
//  if idx of character has no character, add the other player's character to the surviving creatures object
//  check if P1character deals enough damage to kill P2characer
//    if not add P2character info to P2 survivor list
//  check if P2character deals enough damage to kill P1character
//    if not add P1character info to P1 survivor list
//  return surviving creatures object

function battle(player1, player2) {
  let survivingCreatures = {
    player1: [],
    player2: [],
  };
  
  let maxFights = ((player1.length >= player2.length)? player1.length : player2.length);
  
  for (let i = 0; i < maxFights; i++) {
    if (!Array.isArray(player1[i])) {
      survivingCreatures['player2'].push(player2[i]);
    } else if (!Array.isArray(player2[i])) {
      survivingCreatures['player1'].push(player1[i]);
    } else if (Array.isArray(player1[i]) && Array.isArray(player2[i])) {
       if (player1[i][0] < player2[i][1]) {
         survivingCreatures['player2'].push(player2[i]);
       }
       
       if (player2[i][0] < player1[i][1]) {
         survivingCreatures['player1'].push(player1[i]);
       }
    }
  }
  return survivingCreatures;
}

//[power, toughness]

let player1 = [[1, 1], [2, 1], [2, 2], [5,5]];
let player2 = [[1, 2], [1, 2], [3, 3]];

battle(player1, player2);