// colt solution
function linearSearch(array,value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i
        }
    }
    return -1
}

linearSearch([34,56,1,2], 1)