//declare wordArray and initialize to string split by spaces
//return wordArray[wordArray.length - 1];

function penultimate (theString) {
  let wordArray = theString.split(' ');
  return wordArray[wordArray.length - 2];
}

console.log(penultimate("last word"));// === "last"); // logs true
console.log(penultimate("Launch School is great!")); //=== "is"); // logs true