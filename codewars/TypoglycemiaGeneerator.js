function ScrambleWords (str){
  /*  declare  words variable to store words as array
      declare sortWords function
        split word into array of characters
        declare a puntuation location variable
        if word contains any of the punctuation characters
          assign the punctuation location variable to an array of the punctuation character and the idx
          remove the punctuation character from the array
        declare a variable that is a slice of the middle portion of the word, sorted alphabetically
        return first idx of word + sorted middle portion + last idx
      Transform each word with the sortWords function and return the result joined
  */
  let words = str.split(' ');
  sortWords('sort-it');
  function sortWords (word) {
    let characters = word.split('');
    let punctuationLocation;
    if (characters.includes('-')) {
      punctuationLocation = ['-', characters.findIndex(char => char === '-')];
      console.log(punctuationLocation[1]);
    }
    let middle = characters.slice(1, characters.length);
    console.log(middle);
    console.log(punctuationLocation);
  }
}

ScrambleWords('hey');