let numList = [5,2,6,1,4,3];
for (let i = 1; i < numList.length; i++){
    let firstNum = numList[i]
    let previousNumIndex = i - 1
    while (previousNumIndex >= 0 && numList[previousNumIndex] > firstNum){
        numList[previousNumIndex + 1] = numList[previousNumIndex];
        previousNumIndex--;
        console.log(numList);
    }
    numList[previousNumIndex + 1] = firstNum;
}
console.log(numList)