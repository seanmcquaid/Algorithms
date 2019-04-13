function plusMinus(arr){
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positiveCount++;
        } else if (arr[i] === 0){
            zeroCount++;
        } else {
            negativeCount++;
        }
    }
    const negativePercentage = parseFloat((negativeCount / arr.length).toFixed(6))
    const positivePercentage = parseFloat((positiveCount / arr.length).toFixed(6))
    const zeroPercentage = parseFloat((zeroCount / arr.length).toFixed(6))
    console.log(positivePercentage)
    console.log(negativePercentage)
    console.log(zeroPercentage)
}

plusMinus([-4,3,-9,0,4,1])