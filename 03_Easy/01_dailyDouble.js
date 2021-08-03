function longestConsec(strarr, k) {
   
  
  let longestFirstElem;
  let concatenatedElems = strarr.map((currentElem, currentIdx) => {
    let concated;
    for (let i = currentIdx; i <= k && i <= strarr.length; i++) {
      concated = concated + strarr[i];
    }
   return(concated);
  });
  console.log(concatenatedElems);
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
