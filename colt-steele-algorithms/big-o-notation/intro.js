// Big O notation

// used to determine "best" solution to an algorithm

// suppose we want to write a function that calculates the sum of all numbers from 1 up to n

// function addUpTo(n){
//     let total = 0;
//     for(let i =0; i <=n; i++){
//         total+= i;
//     }
//     return total
// }

function addUpTo(n){
    return n * (n+1) /2;
}

// which is better?

// Faster?
// Less memory intensive?
// More readable?

// can use performance.now() before and after function to time results
// speed is not always precise