function mineLocation(field){
  /*    transform each inner array
          to the string 'no bomb' if it doesn't contain a one
          to the idx of the 1 if it does
        loop through transformed array
          if element is a number return an array containing the idx of the element and the number
  */
  
  let bomb = field.map(array => {
    if (array.includes(1)) {
      return array.findIndex(idx => idx === 1);
    } else {
      return 'no bomb'
    }
  });
  let location;
  bomb.forEach((possibleLocation, idx) => {
    if (typeof possibleLocation === "number") {
      location = [idx, possibleLocation];
    }
  });
  return location;
}

console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]));