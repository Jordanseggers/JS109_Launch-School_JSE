// take the input number and check if that number [0] === either + or -
// if + return stringToInteger on string
// if - get stringToInteger on string then subtract that multiplied by 2 from itself and return it

function stringToSignedInteger (string) {
  if (string[0] === '-' ) {
    let intVersion = stringToInteger(string.slice(1));
    let negativeInt = intVersion - (intVersion * 2);
    return negativeInt;
  } else if (string[0] === '+' ) {
    return stringToInteger(string.slice(1));
  } else{
    return stringToInteger(string);
  }
}

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

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570"))// === -570); // logs true
console.log(stringToSignedInteger("+100"))// === 100); // logs true