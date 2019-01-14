let numList = [5,2,6,1,4,3];
while(sorted == false){
    let count = 0;
    for(let i = 0; i < numList.length; i++){
      let firstCompNumber = numList[i];
      let secondCompNumber = numList[i+1];
      if (secondCompNumber < firstCompNumber){
          secondCompNumber = firstCompNumber;
          firstCompNumber = secondCompNumber;
          count++;
      }
    }
    if (count == 0){
        sorted = true;
    }
}

console.log(numList);