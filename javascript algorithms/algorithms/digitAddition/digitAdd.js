const fs = require("fs");
const file = fs.readFileSync("numbers.txt", "utf-8");
const numberString = file.split("\n").join("");
const numberArray = numberString.split("");

let count = 0 ;

for(let i = 0; i < numberArray.length; i++){
    count += Number(numberArray[i]);
}

console.log(count);