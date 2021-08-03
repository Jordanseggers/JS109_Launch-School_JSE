/*  create str1Object
    create str2Object
    cycle through string 1
      if current char is is a key in the string 1 object then increment the value by one
      otherwise make it a key initialized to one
    cycle through string 2
      if current char is is a key in the string 1 object then increment the value by one
      otherwise make it a key initialized to one
    get keys from object 2 as an array
      check the amount of each of these in obj2 vs obj1
        if obj 2 is greater than the amount in obj 1 or if obj 1 just doesn't have the key return false
    else return true
*/

function scramble (str1, str2) {
  let str1Obj = {};
  let str2Obj = {};
  
  for (let i = 0; i < str1.length; i++) {
    if (str1Obj.hasOwnProperty(str1[i])) {
      str1Obj[str1[i]] += 1;
    } else {
      str1Obj[str1[i]] = 1;
    }
  }
  
  for (let i = 0; i < str2.length; i++) {
    if (str2Obj.hasOwnProperty(str2[i])) {
      str2Obj[str2[i]] += 1;
    } else {
      str2Obj[str2[i]] = 1;
    }
  }
  
  let string2Chars = Object.keys(str2Obj);
  string2Chars.forEach(char => {
    if (str1Obj[char] < str2Obj[char]) {
      return false;
    }
  });
  return true;
}

console.log(scramble('heye', 'oh'));