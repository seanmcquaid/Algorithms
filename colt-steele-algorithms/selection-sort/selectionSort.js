// attempted solution

function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let lowest = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = array[i];
            array[i] = array[lowest];
            array[lowest] = temp;
        }
    }
    return array
}

let array = [34,22,10,19,17]

console.log(selectionSort(array));