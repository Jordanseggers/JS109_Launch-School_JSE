function solution(str){
/*    split the string into characters
      declare pairs array and initialize to empty array
      loop through the even idx characters
        push each even character and the following character as a string into the pairs array
        if no following character push the even and '-' to the pairs array
*/
let characters = str.split('');
let pairs = [];
for (let i = 1; i <= characters.length; i += 2) {
    if (characters[i + 1] === undefined) {
      pairs.push(`${characters[i]}_`);
    } else {
      pairs.push(`${characters[i]}${characters[i + 1]}`);
    }
  }
return pairs;
}

console.log(solution('abc'));