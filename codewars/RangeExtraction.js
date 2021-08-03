/*  create new array to hold ranges
    create a final response array
    cycle through the original array
      if current element is not equal to the previous element +1 then add it to the new ranges array as it's own array
      if the current element is equal to the previous element +1 then add it into the last array in the new ranges array
    cycle through the new ranges array
      if the current array has less than 3 elements, add each to the final response array
      if the current array has 3 or more elements, create a string that combines the first number with the symbol '-'  and the lat number
        add that string to the final response array
    return the final response array as a string with each element separated by a comma
*/

function solution (list) {
  let ranges = [];
  let finalResponse = [];
  
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== list[i - 1] + 1) {
      ranges.push([list[i]]);
    } if (list[i] === list[i - 1] + 1) {
      ranges[ranges.length - 1].push(list[i]);
    }
  }
  
  ranges.forEach(numGroup => {
    if (numGroup.length < 3) {
      numGroup.forEach(num => {
        finalResponse.push(num);
      });
    }
    else if (numGroup.length >= 3) {
      finalResponse.push(numGroup[0] + '-' + numGroup[numGroup.length - 1]);
    }
  });
  return(finalResponse.join(", "));
}

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);