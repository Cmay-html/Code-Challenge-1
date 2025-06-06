//Define the function
function calculateChaiIngredients(numberOfCups) {
  const water = numberOfCups * 200;
  const milk = numberOfCups * 50;
  const teaLeaves = numberOfCups * 1;
  const sugar = numberOfCups * 2;

//Calculate chai ingredients 
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${teaLeaves} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`);
}

//ask the user for the number of cups of chai
const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
calculateChaiIngredients(Number(cupsInput));

// Convert the user input to a number
const numberOfCups = Number(userInput);

// Check if the input is a valid number
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    // Call the function to calculate ingredients
    calculatechaiingredients(numberOfCups);
}else {
// If the input is not valid, alert the user
console.log("Tafadhali ingiza nambari halali ya vikombe vya chai.");
}
 
