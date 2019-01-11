let numList = [5,4,11,2,6];
let sorted = false;
while (sorted === false){
    let count = 0;
    for(let i = 0; i < numList.length-1; i++){
        let currentNum = i;
        let nextNum= i+1;
        if(numList[currentNum] > numList[nextNum]){
            let stashNumber = numList[currentNum];
            numList[currentNum] = numList[nextNum];
            numList[nextNum] = stashNumber;
            count++;
        }
    }
    if(count == 0){
        sorted = true;
    }
}



console.log(numList);