function gradingStudents(grades) {
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 38){
            console.log(grades[i])
        } else {
            let gradeSplit = grades[i].toString().split("")
            let firstDigit = parseInt(gradeSplit[0]);
            let secondDigit = parseInt(gradeSplit[1]);
            if(secondDigit <= 5){
                if(5 - secondDigit < 3){
                    let roundedNumber = (firstDigit * 10) + 5
                    console.log(roundedNumber)
                }else{
                    console.log(grades[i])
                }
            }else{
                if(10 - secondDigit < 3){
                    let roundedNumber2 = (firstDigit + 1) * 10
                    console.log(roundedNumber2)
                }else{
                    console.log(grades[i])
                }
            }
        }
    }
}

gradingStudents([73,67,38,33])