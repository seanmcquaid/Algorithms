
function fewestCoins(cents){
    let coinObject = {
        quarters : 0,
        dimes : 0,
        nickels : 0,
        pennies : 0
    }
    let centsLeft = cents;
    let numberOfQuarters = Math.floor(centsLeft/25);
    coinObject.quarters += numberOfQuarters
    centsLeft = centsLeft - (25 * numberOfQuarters);
    let numberOfDimes = Math.floor(centsLeft/10);
    coinObject.dimes += numberOfDimes;
    centsLeft = centsLeft - (10 * numberOfDimes);
    let numberOfNickels = Math.floor(centsLeft/5);
    coinObject.nickels += numberOfNickels;
    centsLeft = centsLeft - (5 * numberOfNickels);
    let numberOfPennies = (centsLeft/1);
    coinObject.pennies += numberOfPennies

    return(coinObject)
}

console.log(fewestCoins(24))