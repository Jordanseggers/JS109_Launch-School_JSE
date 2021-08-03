function generateHashtag (str) {
/*  split the string into array of words
    create new hastag string
    cycle through each word
      if the word contains letters capitalize the first letter and concatenate to end of hastag string
    if hastag string is empty or has more than 140 characters return false
    else return hastag string
*/

  let words = str.split(' ');
  let hashtag = '#';
  
  words.forEach(word => {
    if (word !== ' ') {
      let capitalWord = word.slice(0, 1).toUpperCase() + word.slice(1);
      hashtag = hashtag.concat(capitalWord);
    }
  });
  if (hashtag === '#' || hashtag.length > 140) {
    return false;
  } else {
    return hashtag;
  }
}

console.log(generateHashtag('This   is string!'));