// in order to implement radix sort, it's helpful to build a few helper functions first
// getDigit(num, place) - returns digit in num and the given place value

// 12345 - 0 position = 5

// function getDigit(num, i){
//     return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
// }

function getDigit(num, i){
    let numString = num.toString().split("")
    let returnIndex = numString.length - i - 1;
    let number = parseInt(numString[returnIndex])
    return number
}

console.log(getDigit(7423,0))