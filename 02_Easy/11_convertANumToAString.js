//declare and initialize number array
//declare div = 10
//declare stringNumArr
//while loop to work through number 
  //declare rem and initialize to the remainder of the number when divided by 10
  //push stringNumArr[rem] to stringNumArr
  //assign div to itself * 10
  //reasign number to math.floor(number/div);
//reverse stringNumArr and return the join

function integerToString (num) {
  let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let div = 10;
  let stringNumArr = [];
  
  if (num === 0) {
    return '0';
  } else {
    while (num > 0) {
      let rem = num % 10;
      stringNumArr.push(numberArray[rem]);
      num = Math.floor(num / div);
      //console.log(`num is ${num}`);
    }
    return stringNumArr.reverse().join('');
  }
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"