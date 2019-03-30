// a sorting algorithm where the largest values BUBBLE up to the top 
// example of the bubbling eff
[5,3,4,1,2]
[3,5,4,1,2]
[3,4,5,1,2]
[3,4,1,5,2]
[3,4,1,2,5]

// before we sort, we must swap!

// ES5
function swap(arr,idx1,idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES6
// this seems a little unclear to me but is clearly more concise
const swap = (arr,idx1,idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}


// pseudocode
// start looping from with a var called i at the end of the array towards the beginning
// start an inner loop called j from the beginning until i-1
// if arr[j] is greater than arr[j+1] , swap!
// return the sort array

function bubbleSort(array){
    
}