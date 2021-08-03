/*    create a function that lists all of the 2 letter substrings in a word as an array
        declare a substring array variable
        loop through the letters in the word
          if the current letter in the cycle has a letter after it
            push the current letter and one after at as a string to the array
        return stubstring array
      declare substrings in string 1 variable
      declare substrings in string 2 variable
      
      declare substrinIncluded status variable and initialize to false
      loop through each element in the stubstrings in string one array
        if at any point the current substring is included in the string2 substrings array
          reassign substringIncluded to true;
          
      return substringIncludedStatus
*/

function subStringTest(stringA, stringB) {
  function findSubstrings (str) {
    let substringArray = [];
    let characters = str.toLowerCase().split('');
    for (let i = 0; i < characters.length - 1; i++) {
      substringArray.push(characters[i] + characters[i + 1]);
    }
    return substringArray;
  }
  let strASubs = findSubstrings(stringA);
  let strBSubs = findSubstrings(stringB);
  
  let substringIncluded = false;
  strASubs.forEach(sub => {
    if (strBSubs.includes(sub)) {
      substringIncluded = true;
    }
  });
  return substringIncluded;
}

console.log(subStringTest('Something', 'Fun'));
          