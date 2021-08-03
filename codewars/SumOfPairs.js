/*  make new array to store pairs
    cycle through each element in ints
      cycle through the rest of the elements and compare the sum of them to the product
        if they add up to equal the product, store the two numbers as an array in the new array at the index of the last element compared
    cycle through the pairs array
      if it's empty return undefined
      otherwise return the pair contained in the first non-empty idx
*/

function sumPairs (ints, s) {
  let pairs = [];
  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        pairs.push([ints[i], ints[j], j]);
      }
    }
  }
  
  if (pairs.length === 0) {
    return undefined;
  } else if (pairs.length === 1) {
    return pairs[0].slice(0, 2);
  } else {
    let firstPair = pairs[0];
    for (let k = 1; k < pairs.length; k++) {
      if (pairs[k][2] < firstPair[2]) {
        firstPair = pairs[k];
      }
      return(firstPair.slice(0, 2));
    }
  }
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));