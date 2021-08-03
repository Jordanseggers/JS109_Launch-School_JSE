var isAnagram = function(test, original) {
/*    declare a variable for an object that contains the letters from text string in lowercase
      declare a variable for an object that contains the letters from original string in lowercase
      create a function to fill an ojbect with the letters from a string
        loop over each string letter
          if the object contains the letter as key then add one to the value
          if not then add key and make the value 1
      fill both objects with respective strings
      loop through the object keys from test object
        if a key doesn't exist or has a different value then return false
      return true
*/

  let testLetters = {};
  let originalLetters = {};
  
  function fillObj(str, obj) {
    str.split('').forEach(char => {
      if (obj[char] === undefined) {
        obj[char] = 1;
      } else {
        obj[char] += 1;
      }
    });
  }
  fillObj(test.toLowerCase(), testLetters);
  fillObj(original.toLowerCase(), originalLetters);
  
  let status = true;
  Object.keys(originalLetters).forEach(letter => {
    if (!Object.keys(testLetters).includes(letter)) {
      status = false;
    }
  });
  
  Object.keys(testLetters).forEach(letter => {
    if (originalLetters[letter] !== testLetters[letter]) {
      status = false;
    }
  });
  return status;
};

console.log(isAnagram("foefet", "toffee"));