function solution(string) {
    /*  split string into array of characters
        create array to hold new string characters
        cycle through array
          if character at current idx is lowercase then push it to new array
          else if character at current idx is uppercase then push space to new array then the current character
        return new array joined with nothing between elements
    */
    let characters = string.split('');
    let spacesAdded = [];
    characters.forEach(character => {
      if (character >= 'a' && character <= 'z') {
        spacesAdded.push(character);
      } else {
        spacesAdded.push(` ${character}`);
      }
    });
    return spacesAdded.join('');
}

console.log(solution('camelCasing'));