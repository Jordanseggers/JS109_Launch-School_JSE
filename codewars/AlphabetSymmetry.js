function solve(arr){  
/* P
    return array of numbers
    input is array of strings w/ uppper lowercase letters
   E
    all alphabet characters
   D
    arrays
   A
    create an alphabet array key that matches each letter of the alphabet to it's number as an idx
    create a numberOfLetters array to hold the final answer
    loop through every element input array
      create array of chars in the string
      create count of matches variable
      loop through the chars 
        if lowercase version of char matches the char at the current index in the key array add one to the count of matches
      push the count of matches to the numberOfLettersArray
    return numberOfLetters array
   C
   */
   
   let alphabetKey = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   let numberOfLetters = [];
   arr.forEach(string => {
     let characters = string.toLowerCase().split('');
     let matches = 0;
     characters.forEach((char, idx) => {
       if (char === alphabetKey[idx]) {
         matches += 1;
       }
     });
     numberOfLetters.push(matches);
   });
   return numberOfLetters;
};

console.log(solve(["abode","ABc","xyzD"]));