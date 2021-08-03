function getParticipants(handshakes){
  /*5 total handshakes
    1 A - B
    2 B - C
    3 A - C
    4 A - D
    5 B - D
    6 C - D
    
  // to add a new person's possible handshake count, add one handshake for every person already at the beet convention
  
  set variable to number of participants
  set variable to numbeer of handshakes
  
  while number of handshakes < handshakes
    increment number of handshakes by the number of participants
    increment number of participants by 1
    
  return number of participants
  */
  
  let numberOfParticipants = 1;
  let numberOfHandshakes = 0;
  
  while (numberOfHandshakes < handshakes) {
    numberOfHandshakes += numberOfParticipants;
    console.log(`H: ${numberOfHandshakes}`);
    numberOfParticipants += 1;
    console.log(`P: ${numberOfParticipants}`);
  }
  
  return numberOfParticipants;
}

console.log(getParticipants(6));