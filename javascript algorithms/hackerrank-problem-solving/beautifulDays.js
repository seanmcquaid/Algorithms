function beautifulDays(i, j, k) {
    let beautifulDayCount = 0;
    for(let date = i; date <= j; date++){
        let reverseDate = parseInt(date.toString().split("").reverse().join(""))
        let difference = Math.abs(date - reverseDate)
        if(difference % k === 0){
            beautifulDayCount++;
        }
    }
    return(beautifulDayCount)
}

beautifulDays(20,23,6);