let string = "hello    sean rob";
let testCase = "camelcase";

function caseConvertor(string,testCase){
    var lowerString = string.toLowerCase()
    let newString = lowerString.replace(/\s+/g, " ");
    console.log(newString)
    if(testCase == "camelcase"){
        let empty =[];
        let upperCasedString = newString.replace(/\s./g, (firstLetter)=>((firstLetter.toUpperCase())));
        let camelString = upperCasedString.replace(/\s/g, "");
        console.log(camelString);
        // let camelString = stringArray.join(" ");
        // console.log(camelString);
    } else if(testCase == "snakecase"){
      let snakeString = newString.replace(/\s/g, "_");
      console.log(snakeString)
    }
    
}
caseConvertor(string, testCase);

