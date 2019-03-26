// creating pointers or values that correspond to an index or position and move towards the beginning, 
// end or middle based on a certain condition

// very efficient for solviung problems with minimal space complexity as well

// write a function called sumZero that accepts a sorted array of integers
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to zero or undefined if a pair does not exist

// naive solution

// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

// refactored solution

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--;
        }else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,1,0,1,10]))