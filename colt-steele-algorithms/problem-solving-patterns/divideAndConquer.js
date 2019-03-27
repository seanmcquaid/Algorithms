// this pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data
// this pattern can greatly decrease time complexity

// given a sorted array of integers, write a function called search, 
// that accepts a value and returns the index where the value to the function is located.
// if the value is not found return -1

// naive solution

// function search(arr,val){
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] === val){
//             return i
//         }
//     }
//     return -1;
// }

// using binary search