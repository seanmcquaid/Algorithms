function compareTriplets(arr1,arr2){
    let firstScore = 0;
    let secondScore = 0;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] > arr2[i]){
            firstScore++;
        } else if(arr1[i] < arr2[i]){
            secondScore++;
        }
    }
    return [firstScore,secondScore]
}

console.log(compareTriplets([5,6,7],[3,6,10]))