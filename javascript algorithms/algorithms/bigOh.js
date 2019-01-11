// let numberList = [1,2,3,4,5];
// let number = Math.floor(Math.random() * numberList.length);
// console.log(`Number chosen is ${number}`);

// // for(let i = 0; i < numberList.length; i++){
// //     if (numberList[i] === number){
// //         console.log("found!", number);
// //         console.log(`It took ${i + 1} guesses to get the answer`)
// //     }
// // }

// // let found = false;
// // let counter = 0;
// // while(found === false){
// //     counter++;
// //     let randIndex = Math.floor(Math.random() * numberList.length);
// //     if(numberList[randIndex] === number){
// //         found = true;
// //         console.log("Hooray! Number was", number);
// //         console.log(`It took ${counter} guesses`);
// //     }
// // }

// // binary search

// let found = false;
// let index = Math.floor(numberList.length / 2);
// while(!found){
//     if(number === numberList[index]){
//         console.log(`Number was ${numberList[index]}`);
//         found = true;
//     } else if (number < numberList[index]){
//         // cut the top half by moving the index to the middle of the lower half;
//         index = Math.floor(index/2);
//         console.log("Number is lower");
//     } else {
//         // it's higher
//         index = Math.floor((index + numberList.length)/2);
//         console.log("Number is higher");
//     }
// }


function binarySearch(list, value){
    // we will set a range/bounds to check
    // this will get smaller as we guess
    // start bottom at 0;
    let bottomIndex = 0 ;
    // start top number;
    let topIndex = list.length -1;
    let middleIndex = Math.floor((topIndex+bottomIndex) / 2)
    let counter = 0;
    // we need a while loop. we need to keep looking until we find the correct number
    // and there isn't only one left 

    let found = false;
    while(!found){
        counter++;
        if(value < list[middleIndex]){
            topIndex = middleIndex - 1;
        } else if (value > list[middleIndex]){
            bottomIndex = middleIndex + 1;
        } else {
            found = true;
        }
        // recalculate the middle because we chan ged top or bottom;
        middleIndex = Math.floor((topIndex + bottomIndex)/2);
    }
    console.log(`It took ${counter} guesses`);
    return list[middleIndex];
}

let numbers = [];
for(let i = 0; i < 10000000; i++){
    numbers.push(i);
}

const index = binarySearch(numbers, 98);
console.log(index);
