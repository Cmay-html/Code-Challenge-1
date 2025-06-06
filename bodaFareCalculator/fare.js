// Define the function
function calculateBodaFare(distanceInKm) {
   const baseFare = 50;
   const chargePerKm = 15;

//calculate totalfare
   const totalFare = baseFare + (distanceInKm * chargePerKm)

//print to the console
console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${distanceInKm * chargePerKm}
Total: KES ${totalFare}

Panda Pikipiki!`);
}
// Ask the user for the number of kilometers
const userInput = prompt("Unafika wapi msee? Kilometer ngapi?:");

// Convert the input to a number
const distanceInKm = Number(userInput);

// Validate input and call the function
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Please input valid kilometers");
}