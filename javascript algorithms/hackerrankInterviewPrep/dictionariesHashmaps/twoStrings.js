let str1 = "hello";
let str2 = "world"

function twoStrings(s1, s2) {
    let substring = false;
    for(let i = 0; i < s1.length; i++){
        for(let j = 0; j < s2.length; j++){
            if(s1[i] == s2[j]){
                substring = true;
                return ("YES")
            }
        }
    }
    if(substring == false) {
        return("NO")
    }
}

twoStrings(str1,str2)