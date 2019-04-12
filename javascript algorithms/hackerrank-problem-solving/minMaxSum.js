const minMaxSum = (array)=>{
    let lowest = Infinity;
    let highest = 0;
    let totalSum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < lowest){
            lowest = array[i]
        } else if (array[i] > highest){
            highest = array[i]
        }
    }
    for(let j = 0; j < array.length; j++){
        totalSum += array[j]
    }
    let minSum = totalSum - highest;
    let maxSum = totalSum - lowest;
    console.log(minSum,maxSum)
}

(minMaxSum([1,2,3,4,5]))