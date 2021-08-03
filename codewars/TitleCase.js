function titleCase(title, minorWords) {
  /*    convert the title to all lowercase and split into words
        transform all words in title to title case
          if word idx === 0
            return word with first letter capitalized
          else if minorWords includes word
            return word
          else 
            return word with first letter capitalized
        return the transformed word array joined with spaces
  */
  if (title === '') {
    return '';
  }
  let lowercaseWords = title.toLowerCase().split(' ');
  let lowercaseMinor;
  if (minorWords) {
    lowercaseMinor = minorWords.toLowerCase().split(' ');
  }
  
  let titlecaseWords = lowercaseWords.map((word, idx) => {
    if (idx === 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else if ((lowercaseMinor) && lowercaseMinor.includes(word)) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });
  return titlecaseWords.join(' ');
}

console.log(titleCase('the quick brown fox'));