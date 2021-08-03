function anagramDifference(w1,w2){
   /*   declare w1Letters object
        declare w2Letters object
        declare totalLetters variable and set equal to the length of both words
        create function to fill both objects with letters and number of letters
        fill both
        go through the values of w1Letters object and add up the amount of letters that match w2Letters object
        return the amount of matching letters subtracted from the amount of total letters
    */
  let w1Letters = {};
  let w2Letters = {};
  let totalLetters = w1.length + w2.length;
  
  if (w1 === '') {
    return w2.length;
  }
  if (w2 === '') {
    return w1.length;
  }
  
  function fillLetters(w, obj) {
    w.split('').forEach(char => {
      if (obj[char] === undefined) {
        obj[char] = 1;
      } else {
        obj[char] += 1;
      }
    });
  }
  fillLetters(w1, w1Letters);
  fillLetters(w2, w2Letters);
  
  let tally = Object.keys(w1Letters).map(key => {
    if (w2Letters[key] === undefined) {
      return 0;
    } else if (w2Letters[key] >= w1Letters[key]) {
      return w1Letters[key];
    } else if (w1Letters[key] > w2Letters[key]) {
      return w2Letters[key];
    }
  });
  return totalLetters - (tally.reduce((a, b) => a + b) * 2) ;
}

console.log(anagramDifference("a","aab"));