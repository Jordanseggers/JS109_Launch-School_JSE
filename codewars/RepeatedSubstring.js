function f(s) {
  /*  declare array of string variable
      declare half of array variable
      declare current substring variable
      iterate over the elements in the first half of the array one by one
        for each element, add to the current substring variable
        check if current substring repeated to length of array is equal to array
          if equal return array of current substring and number of repetitions
      if halfway can't be repeated to equal string, return full string
  */
  let stringArr = s.split('');
  let halfLength = stringArr.length / 2;
  let currentSubstring = [];
  for (let i = 0; i < halfLength; i++) {
    currentSubstring.push(stringArr[i]);
    let substringRepeat = currentSubstring.join('');
    let count = 1;
    while (substringRepeat.length < stringArr.length) {
      substringRepeat = substringRepeat + currentSubstring.join('');
      count += 1;
    }
    if (substringRepeat === s) {
      return [currentSubstring.join(''), count];
    }
  }
  return [s, 1];
}

console.log(f("ababab"));