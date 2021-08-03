//collects users number using readline-sync
//collet user choice
//if user chooses s call function sum on number
//if user chooses p call function product on number
let readlineSync = require('readline-sync');

function sumOrProduct () {
  let userInt = parseInt(readlineSync.question('Please enter an integer greater than 0 '));
  let userChoice = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ').toLowerCase();
  let inArray = [];
  
  for (let i = 1; i <= userInt; i++) {
    inArray.push(i);
  }
  
  if (userChoice === 's') {
    inArray = inArray.reduce((a, b) => {
      return a + b;
    });
    console.log(`The sum of the integers between 1 and ${userInt} is ${inArray}`);
  } else if (userChoice === 'p') {
    inArray = inArray.reduce((a, b) => {
      return a * b;
    });
    console.log(`The product of the integers between 1 and ${userInt} is ${inArray}`);
  }
}

sumOrProduct();