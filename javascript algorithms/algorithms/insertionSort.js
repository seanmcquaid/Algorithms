let numList = [5,2,6,1,4,3];
let sorted = false;
for (let i = 0; i < unsorted.length; i++){
    let first = unsorted[i]
    let j = i - 1
    while (j >= 0 && unsorted[j] > first){
        unsorted[j + 1] = unsorted[j]
        j--
    }
    unsorted[j + 1] = first
    console.log(unsorted)
}