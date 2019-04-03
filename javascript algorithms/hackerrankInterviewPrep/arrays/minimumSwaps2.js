let array = [4,3,1,2]

function minimumSwaps(arr) {
    swap = (arr,index1, index2)=>{
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }
    for (let i = 0; i < arr.length; i++){
        let lowestValue = Infinity;
        for(let j = 1; j < arr.length; j++){
            if(arr[i] < lowestValue){
                lowestValue = arr[i];
            }
        }
        console.log(i)
        console.log(swap(arr, i, lowestValue))
    }
    console.log(arr)
}

minimumSwaps(array);