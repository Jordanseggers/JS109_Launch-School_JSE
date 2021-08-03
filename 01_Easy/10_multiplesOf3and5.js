//declare an empty array to hold all numbers between 1 and input #
//for loop to fill the array above with elements that are divisible by 3 or 5
//reduce the array to the sum of all numbers and return that value

function multisum (topNum) {
  let numBetween = [];
  for (let i = 1; i <= topNum; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numBetween.push(i);
    } else {
      continue;
    }
  }
  return numBetween.reduce((accumulator, currentNum) => {
    return accumulator + currentNum;
  }); 
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168