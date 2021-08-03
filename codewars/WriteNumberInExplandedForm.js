function expandedForm(num) {
  /*    convert the number into a string and then into an array
        declare expanded number variable and initialize to empty array
        declare a digits place variable and initialize to number array length - 1
        loop through that array
          coherce the element into a number and multiply by the digits place variable
          push that to expanded number
        return expanded number joined with ' + '
  */
  
  let numberArray = num.toString().split('');
  let expandedNumber = numberArray.map((num, idx) => {
    if (num === '0') {
      return '';
    } else {
      return Number(num) * (Math.pow(10, (numberArray.length - 1 - idx)));
    }
  });
  return expandedNumber.filter(element => element !== '').join(' + ');
}

console.log(expandedForm(42));