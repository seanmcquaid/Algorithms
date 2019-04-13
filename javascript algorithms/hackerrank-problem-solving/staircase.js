function staircase(n){
    let count = n;
    for(let i = 0; i < n; i++){
        let spacesNum = count - i - 1;
        let symbolNum = i + 1;
        let printStair = ""
        for(let j = 0; j < spacesNum; j++){
            printStair += " "
        }
        for(let k = 0; k < symbolNum; k++){
            printStair += "#"
        }
        console.log(printStair)
    }
}

staircase(40)