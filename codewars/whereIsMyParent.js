function findChildren(dancingBrigade){
  let ordered = dancingBrigade.split('').sort();
  let firstChildLocation = ordered.findIndex(idx => (idx === ordered[0].toLowerCase()));
  let parents = ordered.slice(0, firstChildLocation);
  let children = ordered.slice(firstChildLocation);
  let parentsWithChildren = [];
  parents.forEach(mom => {
    parentsWithChildren.push(mom);
    parentsWithChildren.push(findKids(mom, children));
  });
  return parentsWithChildren.join('');
}

function findKids(mom, randomChildren) {
  let kids = [];
  randomChildren.forEach(kid => {
    if (kid === mom.toLowerCase()) {
      kids.push(kid);
    }
  });
  return kids.join('');
}

console.log(findChildren('ttTBbccCaA'));
