var solution = function(firstArray, secondArray) {
  /*set squares array
    cycle through firstArray
      find the difference between current idx from first and second array
      square that value and add to squares array
    add up the numbers in the average array and divide by the amount of numbers in the array
    return that
  */
  
  let squares = [];
  for (let i = 0; i < firstArray.length; i++) {
    let difference = firstArray[i] - secondArray[i];
    let square = difference * difference;
    squares.push(square);
  }
  let average = squares.reduce((a, b) => a + b) / firstArray.length;
  return average;
}

console.log(solution([1, 2, 3], [4, 5, 6]));