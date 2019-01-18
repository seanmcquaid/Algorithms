const fs = require("file-system");


let names = fs.readFileSync("names.txt", "utf8");
let namesArray = names.split("\n");

for(let i = 0; i < namesArray.length; i++){
    let stringArr = namesArray[i].split("");
    let revStringArr = namesArray[i].split("").reverse();
    let count = 0;

    for(let j = 0; j < stringArr.length; j++){
        if(stringArr[j] == revStringArr[j]){
            count++;
            if(count == stringArr.length){
                console.log(namesArray[i]);
            }
        }
    }
}