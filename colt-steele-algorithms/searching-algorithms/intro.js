// linear search algorithm

// given an array, the simplest way to search for a value is to look at every element in the array
// and check to see if it's the value we want

// javascript has search!

// many different search methods for an array : 
// indexOf
// includes
// find
// findIndex

// but how do these functions work? - they each check every element, one at a time

// linear search

// let's search for 12

let array = [5,8,1,100,12,3,12];

// linear search pseudo code
// function accepts an array and a value
// loop through the array to see if they current value is equal to the value passed in
// if it is, return the index at which the element is found
// if the value is never found, return -1

function linearSearch(array,value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i
        }
    }
    return -1
}

console.log(linearSearch(array,12))