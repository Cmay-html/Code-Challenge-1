function calculateChaiIngredients(numberOfCups) {
  const water = numberOfCups * 200;
  const milk = numberOfCups * 50;
  const teaLeaves = numberOfCups * 1;
  const sugar = numberOfCups * 2;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${teaLeaves} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`);
}

const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
calculateChaiIngredients(Number(cupsInput));
