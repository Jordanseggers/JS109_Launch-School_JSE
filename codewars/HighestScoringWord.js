function high(x){
  /*  declare a strings variable to hold an array of words
      create a key that contains the alphabet in an array paired with indexes representing each letter's value
      declare a high score word variable - array [word, value]
      create a function to tally the score of a word
        convert the letters to their value
        add up the values
      for each word
        if the value is greater than the current high score value
          reassign to the current high score variable
      return the high score
  */
  let strings = x.split(' ');
  let key = 'abcdefghijklmnopqrstuvwxyz'.split('');
  key.unshift('placeholder');
  let highScore = ['unassigned', 0];
  
  function scoreTally (word) {
    let letters = word.split('');
    let characterScores = letters.map(char => {
      return key.findIndex(letter => letter === char);
    });
    return characterScores.reduce((a, b) => a + b);
  }
  
  strings.forEach(word => {
    if (scoreTally(word) > highScore[1]) {
      highScore = [word, scoreTally(word)];
    }
  });
  
  return highScore[0];
}

console.log(high('how are you?'));