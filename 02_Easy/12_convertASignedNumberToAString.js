//if math sign called on startNum returns 1
  //return integerToString(startNum)
//if math sign called on startNum returns 0
  //return 0
//if math sign called on startNum returns -1
  // collect value of integerToString(math.abs(startNum))
  // return that value concatenated to the end of the string -
  
  function signedIntegerToString (startNum) {
    switch (Math.sign(startNum)) {
      case 1:
        return '+'.concat(integerToString(startNum));
      case 0:
        return '0';
      case -1:
        let numPortion = integerToString(Math.abs(startNum));
        return '-'.concat(numPortion);
    }
  }
  
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

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");