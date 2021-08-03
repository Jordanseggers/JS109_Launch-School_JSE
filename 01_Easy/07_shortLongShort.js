//declare longerString;
//declare shorterSring
//if lenght of string1 is greater than length of string2 then assign 1 to longerString and 2 to shorterString
//same for the opposite case
//string intepolation to return that pattern

function shortLongShort (string1, string2) {
  let longerString;
  let shorterString;
  
  if (string1.length > string2.length) {
    longerString = string1;
    shorterString = string2;
  } else if (string1.length < string2.length) {
    longerString = string2;
    shorterString = string1;
  }
  console.log(`${shorterString}${longerString}${shorterString}`);
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"