let string1 = "cde";
let string2 = "abc";

function makeAnagram(string1, string2) {
    let string1Obj = {};
    let string2Obj = {};
    let deletionCount = 0;
    for(let i = 0; i < string1.length; i++){
        let character = string1[i];
        string1Obj[character] = (string1Obj[character] || 0) + 1;
    }
    for(let i = 0; i < string2.length; i++){
        let character = string2[i];
        string2Obj[character] = (string2Obj[character] || 0) + 1;
    }

    let longerStringObj, smallerStringObj;
    if(string1.length > string2.length){
        longerStringObj = string1Obj;
        smallerStringObj = string2Obj;
    } else if(string1.length === string2.length){
        longerStringObj = string1Obj;
        smallerStringObj = string2Obj;
    } else {
        longerStringObj = string2Obj;
        smallerStringObj = string1Obj;
    }

    for(let keys in longerStringObj){
        if(longerStringObj[keys] !== smallerStringObj[keys]){
            if(smallerStringObj[keys] === undefined){
                deletionCount += longerStringObj[keys];
            } else if (longerStringObj[keys] === undefined){
                deletionCount += smallerStringObj[keys];
            } else if (longerStringObj[keys] > smallerStringObj[keys]){
                deletionCount += (longerStringObj[keys] - smallerStringObj[keys])
            } else if (longerStringObj[keys] < smallerStringObj[keys]){
                deletionCount += (smallerStringObj[keys] - longerStringObj[keys])
            }
        }
    }

    for(let keys in smallerStringObj){
        if(smallerStringObj[keys] !== longerStringObj[keys]){
            if(longerStringObj[keys] === undefined){
                deletionCount += smallerStringObj[keys];
            } else if (smallerStringObj[keys] === undefined){
                deletionCount += longerStringObj[keys];
            } else if (smallerStringObj[keys] > longerStringObj[keys]){
                deletionCount += (smallerStringObj[keys] - longerStringObj[keys])
            } else if (smallerStringObj[keys] < longerStringObj[keys]){
                deletionCount += (longerStringObj[keys] - smallerStringObj[keys])
            }
        }
    }
    return deletionCount
}

console.log(makeAnagram(string1, string2))