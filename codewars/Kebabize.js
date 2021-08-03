function kebabize(str) {
  /*    create an array to hold words
        create a word variable
        split the string into letters array
        loop through the letters array
          if the letter is lowercase then concatenate onto the word variable
          if the letter is uppercase
            push current word variable to array
            reasign word variable to empy string
            concatenated lowercase version of the letter to the word variable
        push last word to words array
        return words array joined with '-'
  */
  let words = [];
  let currentWord = '';
  let letters = str.split('');
  letters.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      currentWord = currentWord + char;
    } else if (char >= 'A' && char <= 'Z') { 
      if (currentWord !== '') {
        words.push(currentWord);
      }
      currentWord = '';
      currentWord = currentWord + char.toLowerCase();
    }
  });
  words.push(currentWord);
  return  words.join('-');
}

console.log(kebabize('myCamelCasedString'));