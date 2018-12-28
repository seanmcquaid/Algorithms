// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

let testNumber = 100;
let result = 1;
let testArray = [];
let digitSum = 0;

function factorialDigitSum(testNumber){
    for(let i = testNumber; i > 0; i--){
        result *= i;
    }
    let stringedResult = BigInt(result).toString();
    for(let i = 0; i < stringedResult.length; i++){
        testArray.push(stringedResult[i]);
    }
    for (let i = 0; i < testArray.length; i++){
        let digit = parseInt(testArray[i]);
        if(digit > 0){
            digitSum += digit;
        }
    }
    console.log(digitSum);
}

factorialDigitSum(testNumber);

// this should work, not sure why this is not displaying correctly?