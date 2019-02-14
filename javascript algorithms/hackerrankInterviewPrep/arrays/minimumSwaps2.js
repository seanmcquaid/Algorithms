let array = [4,3,1,2]

function minimumSwaps(arr) {
    let moveCount = 0;
    let unsorted = true;

    while(unsorted){
        let unsortedArray = arr;
        let sortedArray = arr.slice().sort();
        for(let i = 0; i < unsortedArray.length;i++){
            for(let j = 0; j < sortedArray.length;j++){
                if(unsortedArray[i] === sortedArray[j]){
                    let first = unsortedArray[i];
                    let second = unsortedArray[j];
                    unsortedArray[i] = second;
                    unsortedArray[j] = first
                    moveCount++;
                }
            }
        }
        if(unsortedArray == sortedArray){
            unsorted = false
        }
    }
    console.log(moveCount);
}

minimumSwaps(array);