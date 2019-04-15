function breakingTheRecord(scores){
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let breakHighCount = 0;
    let breakLowCount = 0;
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > highestScore){
            highestScore = scores[i];
            breakHighCount++;
        } else if (scores[i] < lowestScore){
            lowestScore = scores[i];
            breakLowCount++;
        }
    }
    return [breakHighCount, breakLowCount]
}

console.log(breakingTheRecord([10,5,20,20,4,5,2,25,1]))