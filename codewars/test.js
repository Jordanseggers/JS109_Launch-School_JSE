function deleteDigit (num) {
  /*      191 - 91
          190 - 90
          1002 - 102
          4518 - 518
          9378
          
          split the nubmer into digits
          loop through digits starting with the second digiti
            if the current digit is more than the previous digit
              remove the previous digit and return number
          if nothing is returned remove last digit and return number
  */
  
  let digits = num.toString().split('');
  let modifiedDigits = []
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i - 1]) {
      modifiedDigits.push(digits[i - 1]);
    } else {
      for (let j = i + 1; j < digits.length; j++) {
        modifiedDigits.push(digits[j]); 
      }
      break;
  }
  return digits;
}

console.log(deleteDigit(124));