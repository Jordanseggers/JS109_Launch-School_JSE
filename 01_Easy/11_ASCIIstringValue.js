//declare an empty array
//for loop through each character in the string and push the charCode to the array
//reduce the charChode array and return the sum value

function asciiValue (string) {
  let charCodeArr = [];
  
  for (let i = 0; i < string.length; i++) {
    charCodeArr.push(string.charCodeAt(i));
  }
  
  if (charCodeArr.length === 0) {
    return 0;
  } else {
    return charCodeArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  }
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0console.log()