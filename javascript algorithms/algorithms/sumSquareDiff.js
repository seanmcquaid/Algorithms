// Project Euler - Problem 6

// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumSquareDiff(number){
    let sumOfSquares = 0;
    let sumOfNumbers = 0;
    let diffOfSquares = 0;

    for (let i = 0; i <= number; i++){
        sumOfSquares += Math.pow(i, 2);
        sumOfNumbers += i;
    }

    let squareOfSum = Math.pow(sumOfNumbers, 2);
    diffOfSquares = squareOfSum - sumOfSquares;
    console.log(diffOfSquares);
}


sumSquareDiff(100);