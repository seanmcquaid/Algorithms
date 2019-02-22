let string = "AAAA";

function alternatingCharacters(s) {
    let stringArray = s.split("");
    let deletionCount = 0;
    for(let i = stringArray.length; i > 0; i--){
        if(stringArray[i] == stringArray[i-1]){
            stringArray.splice(i-1, 1)
            deletionCount++;
        }
    }
    return(deletionCount)
}

console.log(alternatingCharacters(string))