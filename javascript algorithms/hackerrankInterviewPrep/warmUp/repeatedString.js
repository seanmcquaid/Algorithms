let numberOfChar = 1000000000000;
let string ="a";

function repeatedString(s, n) {
    let stringSplit = string.split("");
    let charArray = [];
    let count = 0;

    while(charArray.length < numberOfChar){
        for(let i = 0; i < stringSplit.length; i++){
            charArray.push(stringSplit[i]);
            if(charArray.length === numberOfChar){
                break
            }
        }
    }

    for(let i = 0; i < charArray.length; i++){
        if(charArray[i] == "a"){
            count++;
        }
    }
    return count;
}

repeatedString(string, numberOfChar);