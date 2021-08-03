function findNumber(array) {
  /*  sort the array by numerical order
      loop through each item in the array starting with the second number
        if the current numer is not the previous number incremented by one, then return the previous number + 1
  */
  let zooInOrder = array.sort((a, b) => {
    return a - b;
  });
  if (zooInOrder[0] !== 1) {
    return 1;
  } else {
    let missingAnimal = 'unknown';
    for (let i = 1; i < array.length; i++) {
      if ((zooInOrder[i] - 1) !== (zooInOrder[i - 1])) {
        missingAnimal = zooInOrder[i - 1] + 1;
      } else if (missingAnimal === 'unknown') {
        missingAnimal = array.length;
      }
    }
    return missingAnimal;
  }
}

console.log(findNumber([4, 2, 3]));

