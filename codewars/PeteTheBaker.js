function cakes(recipe, available) {
  /*  create a list of recipe ingredients
      create a list to hold the number of portions of each ingredient we have on hand
      cycle through each ingredient in the recipe
        add the amount we have on hand divided by the amount required to the portions list
      sort portions list in ascending order
      return the first item in the portion list
  */
  
  let recipeIngredients = Object.keys(recipe);
  let portionsOnHand = [];
  recipeIngredients.forEach(ingredient => {
    portionsOnHand.push(available[ingredient] / recipe[ingredient]);
  });
  portionsOnHand.sort((a, b) => {
    return a - b;
  });
  if (Number.isNaN(portionsOnHand[0])) {
    return 0;
  } else {
  return Math.floor(portionsOnHand[0]);
  }
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));