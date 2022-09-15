/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/

// write code here

let recipe1 = {
  title: "spaghetti",
  servings: 2,
  ingredients: ["pasta", "tomatoes", "olives oil", "garlic"],
};

console.log(recipe1.title);
console.log("Serves: " + recipe1.servings);
console.log("Ingredients:");
recipe1.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe2 = {
  title: "pancakes",
  servings: 5,
  ingredients: ["eggs", "flour", "water", "milk"],
};

console.log(recipe2.title);
console.log("Serves: " + recipe2.servings);
console.log("Ingredients:");
recipe2.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe3 = {
  title: "pizza",
  servings: 1,
  ingredients: [
    "flour",
    "water",
    "eggs",
    "ham",
    "pepper",
    "tomatoes",
    "mashrooms",
    "onion",
  ],
};

console.log(recipe3.title);
console.log("Serves: " + recipe3.servings);
console.log("Ingredients:");
recipe3.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe4 = {
  title: "Nuggets",
  servings: 10,
  ingredients: ["chicken", "eggs", "cornflour"],
};

console.log(recipe4.title);
console.log("Serves: " + recipe4.servings);
console.log("Ingredients:");
recipe4.ingredients.forEach((ingredient) => console.log(ingredient));

let recipe5 = {
  title: "Paella",
  servings: 2,
  ingredients: ["rice", "chicken", "prawns", "pepper", "peas"],
};

console.log(recipe5.title);
console.log("Serves: " + recipe5.servings);
console.log("Ingredients:");
recipe5.ingredients.forEach((ingredient) => console.log(ingredient));
