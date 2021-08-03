/* split the fulltext by the searchText
return one minus the number of remaining elements in the array
*/

function solution(fullText, searchText){
  let splits = fullText.split(searchText);
  return splits.length - 1;
}

console.log(solution('abcdeb','b'));