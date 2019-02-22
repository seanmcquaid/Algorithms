let string1 = "snowman";
let string2 = "woman";

function makeAnagram(a, b) {
    let string1Obj = {};
    let string2Obj = {};
    let string1Arr = a.split("");
    let string2Arr = b.split("")
    for(let i = 0 ; i < string1Arr.length; i++){
        string1Obj[string1Arr[i]] = 1
    }
    for(let i = 0 ; i < string2Arr.length; i++){
        string2Obj[string2Arr[i]] = 1
    }
    let count = 0 ;
    for(let key in string1Obj){
        for(let key2 in string2Obj){
            if(key !== key2){
                console.log(key, key2)
            }
        }
    }
    // console.log(count)
}

makeAnagram(string1, string2)