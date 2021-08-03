function deleteDigit(n) {
 //move from left to right and check if the the number to the right of the current number is greater than the current number
 //if it is greater, delete the current number
 let numArr = n.toString().split('');
 for (let i = 1; i < numArr.length; i++) {
   if (numArr[i] > numArr[i - 1]) {
     numArr[i - 1] = '';
     break;
   } else {
     numArr[numArr.length] = '';
   }
 }
 return Number(numArr.join(''));
}

console.log(deleteDigit(152));