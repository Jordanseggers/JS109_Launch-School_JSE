function duplicates(array){
/*  declare a variable to hold the count of pairs
    declare a copy of the original array to modify as we search for pairs (pair search)
    cycle through the original array
      for each integer in the array - compare it to the integers in the pair search array
      if a match is found, add one to the count
      replace both instances of the integer with the string 'paired' in the pair search array
    return the count
*/
  let count = 0;
  let pairSearch = array.slice();
  
  for (let i = 0; i < pairSearch.length; i++) {
    if (pairSearch[i] !== 'paired') {
      for (let j = i + 1; j < pairSearch.length; j++) {
        if (pairSearch[i] === pairSearch[j]) {
          count += 1;
          console.log(pairSearch[i]);
          pairSearch[i] = 'paired';
          pairSearch[j] = 'paired';
        }
      }
    }
  }
  return count;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]));