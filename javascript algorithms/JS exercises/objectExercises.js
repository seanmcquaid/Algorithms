// Given an array of student’s birth years, [1991, 1984, 1984, 1989], return the most common birth year
var array = [1991, 1984, 1984, 1989];

function commonYear(){
    var object =  {};
    for( i = 0; i < array.length; i++){
        var currentItem = array[i];
        if(!object[currentItem]){
            object[currentItem] = 0;
        }
        object[currentItem] += 1;
    }
    console.log(object);
}

commonYear(array);

// Given a string “This is a random string”, write a function that returns a count of each character in the string
// Given an array of olympic race results [{country: “usa”, time: 233}, {country: “poland”, time: 222}, … ], write a function that returns each country’s best time
// Given a list of numbers, [-1, 5, -25, -3, 99, 20], write a function that returns the count of positive numbers and negative numbers
