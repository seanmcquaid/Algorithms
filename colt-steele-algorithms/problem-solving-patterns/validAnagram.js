// given two strings, write a function to determine if the second string is an anagram of the first
// an anagram is a word, phrase or name formed by rearranging the letters of another
// ie. cinema = iceman
// return true or false

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let freq1 = {};
    let freq2 = {};
    for(let char of str1){
        freq1[char] = (freq1[char] || 0) + 1;
    }
    for(let char of str2){
        freq2[char] = (freq2[char] || 0) + 1;
    }

    for(let key in freq1){
        if(!(key in freq2)){
            return false
        }
        if(freq1[key] !== freq2[key]){
            return false
        }
    }
    return true
}

const string1 = "iceman";
const string2 = "cinema";

console.log(validAnagram(string1, string2))