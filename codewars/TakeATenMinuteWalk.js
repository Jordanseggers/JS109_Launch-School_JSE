function isValidWalk(walk) {
  /*  create a direction count object
      check that there are exactly 10 directions given and return false if not
      loop through the walk array
        if direction is a key in the walk object add one to the value
        if not, add the key and set the value to 1
      if value of N/S keys in the object is equal and E/W values are equal return true
      otherwise return false
  */
  let directionCounts = {};
  if (walk.length !== 10) {
    return false;
  }
  walk.forEach(direction => {
    if(directionCounts[direction]) {
      directionCounts[direction] += 1;
    } else {
      directionCounts[direction] = 1;
    }
  });
  if (directionCounts['n'] === directionCounts['s'] && directionCounts['e'] === directionCounts['w']) {
    return true;
  }
  return false;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));