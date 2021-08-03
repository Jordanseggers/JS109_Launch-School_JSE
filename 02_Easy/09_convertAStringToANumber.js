//declare a numberArray = [numbers]
//declare mult and initialize it to one
//declare finalNum = 0;
//for loop through the string in reverse
  //find that character in the numberArray and add the index multiplied by mult to finalNum
  //increment mult by 10
// return finalNum

function stringToInteger (string) {
  let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let mult = 1;
  let finalNum = 0;
  
  for (let i = string.length - 1; i >= 0; i--) {
    let value = numberArray.findIndex(char => char === string[i]);
    finalNum += value * mult;
    mult = mult * 10;
  }
  return finalNum;
}

console.log(stringToInteger("4321"))// === 4321); // logs true
console.log(stringToInteger("570"))// === 570); // logs true