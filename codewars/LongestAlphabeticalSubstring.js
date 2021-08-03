function longest(str) {
  /* create alphabet key
     create container to hold current longest substring
     create container to hold current in progress substring
     cycle through characters in string
      if current char is same as previous char or next char in alphabet, add to in progress substring
      if current char is not
        if in progress substring is longer than longest substring, move  to longest substring
        reasign in progress substring to current char
     return longest subsring
  */
  const ALPHABET_KEY = [undefined,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let longestSubstring;
  let currentSubstring;
  
  str.split('').forEach((char, idx) => {
    if (char === char[idx - 1] || (char === ALPHABET_KEY[(ALPHABET_KEY.findIndex(idx => idx === char[idx - 1])) + 1])) {
      currentSubstring = currentSubstring.concat(char);
    } else {
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }
      currentSubstring = char;
    }
  });
  return longestSubstring;
}

console.log(longest("asdfaaaabbbbcttavvfffffdf"));