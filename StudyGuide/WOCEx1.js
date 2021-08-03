//convert the number into a string and then split it into an array by digits
//cycle through the array from right to left
//  if the current digit is more than the one on the right of it
//    swap them, stop going through the elements, return new number
//if nothing was swapped return -1

function nextBiggerNum (int) {
  let numArr = int.toString().split('');
  for (let i = numArr.length - 2; i >= 0; i--) {
    if (numArr[i] > numArr[i + 1]) {
      [numArr[i], numArr[i + 1]] = [numArr[i + 1], numArr[i]];
      return Number(numArr.join(''));
    }
  }
  return -1;
}

console.log(nextBiggerNum(513));