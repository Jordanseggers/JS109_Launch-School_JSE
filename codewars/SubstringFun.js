/*  cycle through every substring in the array
    transform each word into just the character at the current index
    return the transformed array
*/

function nthChar(words){
 return words.map((word, idx) => {
   return word[idx];
 }).join('');
}

console.log(nthChar(['yoda', 'best', 'has']));