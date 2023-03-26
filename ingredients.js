const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// While loop that prints out each ingredient
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// For loop that prints out each ingredient
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// For loop that prints out each ingredient backwards
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}