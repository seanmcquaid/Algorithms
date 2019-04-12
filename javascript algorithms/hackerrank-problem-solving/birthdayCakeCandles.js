function birthdayCakeCandles(ar){
    let highest = 0;
    for(let i = 0; i < ar.length; i++){
        if(ar[i] > highest){
            highest = ar[i]
        }
    }
    let highestCount = 0;
    for(let j = 0; j < ar.length; j++){
        if(ar[j] === highest){
            highestCount++;
        }
    }
    return highestCount
}

console.log(birthdayCakeCandles([3,2,1,3]))