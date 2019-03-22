const originalArray =  [[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]]

// output must be [0,1,2,3,4,5,6,7,8,9,19]

function flattenArr(array){
    const stack = [...array]
    console.log(stack)
    const resultArray = [];
    while(stack.length){
        const firstItem = stack.shift()
        if(Array.isArray(firstItem)){
            stack.push(...firstItem)
        } else {
            resultArray.push(firstItem)
        }
    }
    console.log(resultArray)
}

flattenArr(originalArray)