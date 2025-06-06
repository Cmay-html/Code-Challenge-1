//Define the function
function estimateTransactionFee(amountToSend) {
    let fee = amountToSend * 0.015;
    if(fee < 10) {
        fee = 10;
    }
    else if(fee > 70) {
        fee = 70
    }
    const total= amountToSend + fee;

//Calculate total amount to be send
console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${fee}
Total amount to be debited: KES ${total}

Send Money Securely!`);
}

//Ask user for the amount to be send 
const amountInput = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(amountInput));

// Convert the input to number
const amountToSend = Number(userInput);



