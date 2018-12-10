// Given an array of student’s birth years, [1991, 1984, 1984, 1989], return the most common birth year
var array = [1991, 1984, 1984, 1989];

function commonYear(){
    var object =  {};
    var keyFrequency = 0;
    var mostCommonYear;
    for( i = 0; i < array.length; i++){
        var currentItem = array[i];
        if(!object[currentItem]){
            object[currentItem] = 0;
        }
        object[currentItem] += 1;
        if(object[currentItem] > keyFrequency){
            keyFrequency = object[currentItem];
            mostCommonYear = array[i];
        }
    }
    console.log(mostCommonYear);
}

commonYear(array);

// Given a string “This is a random string”, write a function that returns a count of each character in the string
var randomString = "This is a random string";

function letterFrequency(){
    var object = {};
    for(i = 0; i < randomString.length; i++){
        var currentItem = randomString[i];
        if(!object[currentItem]){
            object[currentItem] = 0;
        }
        object[currentItem] += 1;
    }
    console.log(object);
}

letterFrequency(randomString);
// Given an array of olympic race results [{country: “usa”, time: 233}, {country: “poland”, time: 222}, … ],
//  write a function that returns each country’s best time

var olympicResults = [
    {country: "usa", running: 200, swimming: 250, extremeUnderWaterBasketWeaving: 10}, 
    {country: "canada", running: 200, swimming: 250, extremeUnderWaterBasketWeaving: 10},
];

function bestTime(){
    
}

// Given a list of numbers, [-1, 5, -25, -3, 99, 20], write a function that returns 
// the count of positive numbers and negative numbers

var numbers = [-1, 5, -25, -3, 99, 20];

function numberCount(){
    var positiveCount = 0;
    var negativeCount = 0;
    for(i = 0; i < numbers.length; i++){
        var currentNumber = numbers[i];
        if (currentNumber > 0){
            positiveCount += 1;
        } else {
            negativeCount +=1;
        }
    } console.log("You have " + positiveCount + " positive numbers!");
    console.log("You have " + negativeCount + " negative numbers!");
}

numberCount(numbers);