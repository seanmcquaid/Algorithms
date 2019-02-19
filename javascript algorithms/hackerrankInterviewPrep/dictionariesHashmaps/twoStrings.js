let str1 = "hello";
let str2 = "world"

function twoStrings(s1, s2) {
    let substring = false;
    for(let i = 0; i < s1.length; i++){
        let regexCheck = RegExp(`[${str1[i]}]+`)
        let match = regexCheck.test(s2)
        if( match == true){
            substring = true;
            return("YES")
        }
        
    }
    if(substring == false) {
        return("NO")
    }
}

twoStrings(str1,str2)