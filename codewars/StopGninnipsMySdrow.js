function spinWords(string){
  /*  split the string into words
      loop through all words
      if the word length is greater than or equal to 5 transform it into the reversed word
        declare a reversed word variable set equal to empty array
        loop through word backwards and push each character to the empty array
      return the transformed array joined with spaces
  */
  
  let words = string.split(' ');
  let reversedWords = words.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
  return reversedWords.join(' ');
}

console.log(spinWords('does it wooooork'));