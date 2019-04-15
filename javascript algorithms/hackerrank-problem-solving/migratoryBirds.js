function migratoryBirds(arr) {
    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]] = (counter[arr[i]] || 0) + 1;
    }
    let highest = 0;
    let highestKey = 0;
    for (let keys in counter) {
        if (counter[keys] > highest) {
            highest = counter[keys]
            highestKey = keys
        }
    }
    return(parseInt(highestKey))
}

migratoryBirds([1,4,4,4,5,3])