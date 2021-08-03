//-if number is positive check if there is not a remainder if divided by 2
// if negative turn into a positive number
//    add original num to num x 2
//    check if there is not a remainder if divided by 2

function isOdd (int) {
  if (int > 0) {
    return !(int % 2 === 0) ? true : false;
  } else if (int < 0) {
    let positiveInt = int + int * int;
    return !(int % 2 === 0) ? true : false;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true