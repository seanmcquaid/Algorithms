const diagonolDiff = (arr)=>{
    let firstDiag = 0;
    let secondDiag = 0;
    for(let i = 0, j = arr.length - 1; i < arr.length; i++, j--){
        firstDiag += arr[i][i];
        secondDiag += arr[i][j];
        // console.log(firstDiag,secondDiag)
    }
    const diff = Math.abs(firstDiag - secondDiag)
    return diff
}

let array = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
]

console.log(diagonolDiff(array))