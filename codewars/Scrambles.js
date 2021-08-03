function scramble(str1, str2) {
 /*   declare str1Letters object
      declare str2Letters object
      loop through the letters in string one and add the letters as object keys and the number of letters as the values
      same for string2
      check each key in the str2 object and see if the value is greater than the value for the same key in the str1ojbect
        if so return false
      return true
  */
  let str1Letters = {};
  let str2Letters = {};
  
  function fillLetters (str, obj) {
    str.split('').forEach(letter => {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    });
  }
  
  fillLetters(str1, str1Letters);
  fillLetters(str2, str2Letters);
  
  console.log(str1Letters);
  console.log(str2Letters);
  console.log(str1Letters['e']);
  
  let lettersRequired = Object.keys(str2Letters);
  let trueOrFalse = true;
  lettersRequired.forEach(letter => {
   if (str1Letters[letter] === undefined || str2Letters[letter] > str1Letters[letter]) {
     trueOrFalse = false;
   } 
  });
  return trueOrFalse;
}

console.log(scramble('katas','steak'));