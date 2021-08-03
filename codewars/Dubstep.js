function songDecoder(song){
  /* Store the string in an array by splitting at each WUB
     filter the array to only elements that contain "words"
     join the filtered array with a space and return it
  */
  let words = song.split('WUB');
  return words.filter(word => word !== '').join(' ');
}



console.log(songDecoder("AWUBBWUBC"));