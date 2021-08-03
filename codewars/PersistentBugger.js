function persistence(num) {
   /*   declare a current multiplicitave and initialize to num
        declare multiplicative persistance variable and initialize to 0
        while the multiplicative is greater than 9
          declare digits variable and initialize to num converted to a string and split into digits
          reassing multiplicative to the value of multiplying each digit to the others
          add one to the multiplicitave persistance variable
        return current multiplicative persistance
  */
  let currentMult = num;
  let multPersistane = 0;
  while (currentMult > 9) {
    let digits = currentMult.toString().split('');
    currentMult = digits.reduce((a, b) => {
      return a * b;
    });
    multPersistane += 1;
  }
  return multPersistane;
}

console.log(persistence(39));