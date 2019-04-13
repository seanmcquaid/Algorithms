function gamingArray(arr){
    // if moveCount is evenly divisible by 2, then Andy wins, else, bob wins
    let moveCount = 0;
    function recursiveSlicing(array){
        if(array.length === 0){
            return
        }
        let highestNum = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i]> highestNum){
                highestNum = array[i]
            }
        }
        let sliceIndex = array.indexOf(highestNum)
        let slicedArray = array.slice(0,sliceIndex)
        moveCount++;
        return recursiveSlicing(slicedArray);
    }
    recursiveSlicing(arr);
    if(moveCount % 2 === 0){
        return("ANDY")
    } else {
        return("BOB")
    }
}

const testArray = [5,2,6,3,4];

gamingArray(testArray)