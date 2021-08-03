// check that they aren't both truthy  (opA && opB)
// check that they aren't both falsey (!(opA || opB))


function xor (opA, opB) {
  if (opA && opB) {
    return false;
  } else if (!(opA || opB)) {
    return false;
  } else {
    return true;
  }
}


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);