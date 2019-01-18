const students = ['Brandon','Khanh','Connor','Cody','Christopher','Sean','Katie','Jason','Michael','Gbinga','Greg','Bryan','Matt','Zac','Rob', 'Ron'];
let newStudents = [];

while(students.length > 0){
    for(let i = 0; i < 4; i++){
        let randIndex = Math.floor(Math.random() * students.length);
        const student = students.splice(randIndex, 1);
        newStudents.push(student[0]);
    }
}

console.log(newStudents);