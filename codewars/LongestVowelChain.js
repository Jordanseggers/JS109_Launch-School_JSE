/* take string and return a number
  
    declare a maxlength variable
    declare a current substring variable
    loop through each character in the string
      if char is a vowel add to the current substring
      if char is not a vowel check if the length of the current substring variable is longer than the maxlength value
        if so change maxlength to current substring length
        reset substring to nothing
    return maxlegnth variable
*/

function solve(s){
  let maxLength = 0;
  let currentSubstring = [];
  for(let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
      currentSubstring.push(s[i]);
    } else {
      if (currentSubstring.length > maxLength) {
        maxLength = currentSubstring.length;
      }
      currentSubstring = [];
    }
  }
  return maxLength;
}

console.log(solve("codewarriors"));