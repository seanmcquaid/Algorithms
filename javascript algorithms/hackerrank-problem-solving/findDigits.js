function findDigits(n){
    let splitNum = n.toString().split("")
    let divisbleFactorsCount = 0;
    for(let i = 0; i < splitNum.length; i++){
        let digitInt = parseInt(splitNum[i]);
        if(n % digitInt === 0){
            divisbleFactorsCount++;
        }
    }
    console.log(divisbleFactorsCount)
}

findDigits(1012)