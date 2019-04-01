// merge sort pseudocode

// break up the array into halves until you have arrays that are empty or have one element
// consider using slice

// once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back
// to the full length of the array
// once the array has been merged back, return the merged and sorted array

function merge(arr1, arr2){
    let results = []
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor((arr.length) / 2 );
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

let array = [10,24,76,73]

console.log(mergeSort(array))