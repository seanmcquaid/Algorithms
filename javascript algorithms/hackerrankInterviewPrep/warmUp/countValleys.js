let numberOfSteps = 10;
let path = "DDUDDUUDUU";

function countingValleys(num, string) {
    let valleyCount = 0; 
    let multipleDCount = 0;
    let stringArray =string.split("")
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] === "D"){
            multipleDCount++;
        } else if (stringArray[i] === "U"){
            if(multipleDCount > 1){
                multipleDCount = 0;
                valleyCount++;
            } else if (multipleDCount = 1){
                multipleDCount = 0;
            }
        }
    }
    console.log(valleyCount);
}

countingValleys(numberOfSteps, path);