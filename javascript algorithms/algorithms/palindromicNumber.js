// A palindromic number reads the same both ways. The largest palindrome 
// made from the product of two 2-digit numbers is 9009 = 91 × 99.

let currentPalindrome = 0;
let largestPalindrome = 0;
for(let i = 100; i < 999; i++){
    for(let j = 100; j < 999; j++){
        let temp = i * j;
        let reversedTemp = temp.toString();
        findPalindrome(reversedTemp);
        if (currentPalindrome > largestPalindrome){
            largestPalindrome = currentPalindrome;
        }
    } 
}


function findPalindrome(product){
    let reversedProduct= product.split("").reverse().join("");
    if (product === reversedProduct){
        let numProduct = parseInt(product);
        currentPalindrome = numProduct;
        return currentPalindrome;
    }
}

console.log(largestPalindrome);