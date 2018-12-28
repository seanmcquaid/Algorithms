// 2 ^ 15  = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2 ^ 1000

let number = BigInt(Math.pow(2, 1000));
let sum = 0;
function sumOfDigits(number){ 
    let stringedNumber = number.toString();
    let digits = [];
    for(let i = 0; i < stringedNumber.length; i++){
        digits.push(stringedNumber[i]);
    }
    for(let i = 0; i < digits.length; i++){
        let digit = parseInt(digits[i]);
        if(digit > 0){
            sum += digit;
        }
    }
    console.log(sum);
}

sumOfDigits(number);