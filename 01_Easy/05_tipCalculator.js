//readline sync to get bill and tip percentage
//multiply the bill x (percent/100)
//add bill to tip
let readlineSync = require('readline-sync');
const percentToDecimal = 100;

function calculateTip () {
  let bill = parseInt(readlineSync.question('What is the bill?: '));
  let tipPercentage = parseInt(readlineSync.question('What is the tip percentage?: '));
  
  let tip = bill * (15 / percentToDecimal);
  let total = bill + tip;
  
  console.log(`The tip is $${tip}.`);
  console.log(`The total is $${total}`);
}

calculateTip();