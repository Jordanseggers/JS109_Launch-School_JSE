let readlineSync = require('readline-sync');
const SQUARE_FT_IN_METER = 10.7639;

//ask for lenght and collect
//ask for width and collect
//multiply length x width
//multiply by squareftinmeter

let lengthM = readlineSync.question('Enter the length of the room in meters: ');
let widthM = readlineSync.question('Enter the width of the room in meters: ');

let squareMeters = lengthM * widthM;
let squareFt = squareMeters * SQUARE_FT_IN_METER;

console.log(`The area of the room is ${squareMeters} square meters (${squareFt} square feet).`);