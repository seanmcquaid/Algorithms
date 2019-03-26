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

// count the number of simple operations to check efficiency

// Big O allows us to talk formally about how the runtime of an algorithm
// grows as the inputs grow

// we only care about the broad trends

// Definition of Big O

// an algorithm is O(f(n)) if the number of simple operations the computer
// has to do is eventually less than a constant times f(n) as n increases

// linear = f(n) = n = number of operations is always bounded by a multiple of n = O(n)

// quadatric = f(n) = n ^ 2 = nested loops = O(n * n) = 0(n^2)

// constant = f(n) = 1; - always a certain amount of operations so O(1)

// could be different but this is the most basic def


