let numList = [5,2,6,1,4,3];
let sorted = false;
for (let i = 1; i < numList.length; i++){
    let first = numList[i]
    let j = i - 1
    while (j >= 0 && numList[j] > first){
        numList[j + 1] = numList[j]
        j--
    }
    numList[j + 1] = first
}
console.log(numList)