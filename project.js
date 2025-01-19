//1. deposite some money.
//2. determin no of lines to bet
//3. Collect bet amount.
//4. spin the slot mac.
//5. CHeck if user wins
//6. give user winning
//7. play aagin.

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
        const depositAmt = prompt("Enter a deposit amount: ");
        const numberDepositAmt = parseFloat(depositAmt); 

        if(isNaN(numberDepositAmt) || numberDepositAmt <= 0){
            console.log("Invalid Deposit Amount! Try Agaim:)")
        } else {
            return numberDepositAmt;
        }
    }
};


const getNumLines = () => {
    while(true){
        const lines  = prompt("Enter the number of lines to bet on(1-3): ");
        const numLines = parseFloat(lines); 

        if(isNaN(numLines) || numLines <= 0 || numLines > 3){
            console.log("Invalid Lines! Try Agaim:)")
        } else {
            return numLines;
        }
    }
};

const getBet = (balance) => {
    while(true){
        const bet  = prompt("Enter the total bet: ");
        const numBet = parseFloat(bet); 

        if(isNaN(numBet) || numBet <= 0 || numBet > balance){
            console.log("Invalid Bet! Try Agaim:)")
        } else {
            return numBet;
        }
    }
}

let balance = deposit();
const numLines = getNumLines();
const bet = getBet();

console.log(depositAmt);
console.log(numLines);
console.log(numBet)

