/*  if tortA is faster than tortB then return null
    else 
      convert tortA velocity to seconds
      convert tortB velocity to seconds
      set timeInSeconds = 0;
      set variable for location of tortA to g
      set variable for location of tortB to 0
      while tortA location > tortB location
        time += 1;
        locationTortA += tortAV
        locationTortB ++ tortBV
      convert timeInSeconds to hour min sec
        let hours = math.min(seconds / 3600)
        let min = math.min((seconds % 3600) * 60)
        let sec = math.min(((seconds % 3600) * 60) % min)
*/

const SEC_PER_HOUR = 3600

function race(v1, v2, g) {
  if (v1 > v2) {
    return null;
  } else if (v1 === v2 && g > 0) {
    return null;
  } else {
    let v1Sec = Math.floor(v1 / SEC_PER_HOUR);
    let v2Sec = Math.floor(v2 / SEC_PER_HOUR);
    let timeInSeconds = 0;
    let locationTortA = g;
    let locationTortB = 0;
    
   // while (locationTortA > locationTortB) {
   //   timeInSeconds += 1;
   //   locationTortA += v1Sec;
   //   locationTortB += v2Sec;
   // }
    
    //let hours = Math.floor(timeInSeconds / SEC_PER_HOUR);
    //let min = Math.floor((timeInSeconds % SEC_PER_HOUR) * 60);
    //let sec = Math.floor(((timeInSeconds % SEC_PER_HOUR) * 60) % min);
    
    return [v1Sec, v2Sec, timeInSeconds];
    //return [hours, min, sec];
  }
}
  

console.log(race(720, 850, 70));