function gradingStudents(grades) {
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 40){
            console.log(grades[i])
        } else {
            let gradeSplit = grades[i].toString().split("")
            let secondDigit = gradeSplit[1];
            console.log(parseInt(secondDigit))
            // check diff from multiple of 5 and make sure it is less than 3 - if so, round up
            
        }
    }
}

gradingStudents([4,73,67,38,33])