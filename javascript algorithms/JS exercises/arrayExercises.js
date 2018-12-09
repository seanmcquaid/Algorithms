// Given an array of people’s names [“Lachlan”, “Kim”, “Moira”], write a function that logs “Hi, [name]!” for each person.
var arr = ["Lachlan", "Kim", "Moira"];

function hello(){
    for(i = 0; i < arr.length; i++){
        var name = arr[i];
        console.log("Hello " + name + "!")
    }
};

hello(arr);

// Given an array of a first, middle, and last name [“Adam”, “Michael”, “Szaruga”], write a function that prints the person’s initials

var fullName = ["Adam", "Michael", "Szaruga"];

function initials(){
    for(i=0; i < fullName.length; i++){
        var fullInitials = fullName[i].charAt(0);
        console.log(fullInitials);
    }
}

initials(fullName);


// Given a list of 0’s and 1’s, [0, 1, 0, 1, 1, 1, 0, 0], write a function that returns the index of the last 1 in the array

var zeroOnes = [0, 1, 0, 1, 1, 1, 0, 0];

function lastOne(){
    var foundIndex;
    for (i = 0; i < zeroOnes.length; i++){
        var currentItem = zeroOnes[i];
        if(currentItem == 1){
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}

lastOne(zeroOnes);

// can also be accomplished with lastIndexOf method

// var lastOne = zeroOnes.lastIndexOf(1);

// console.log(lastOne);


// Given a list of positive numbers, [1, 5, 25, 3, 99, 20], write a function that returns the biggest number
var positiveNumbers = [1, 5, 25, 3, 99, 20];

function biggestNumber(){
    var largestNumber = 0;
    for (i = 0; i < positiveNumbers.length; i++){
        var currentItem = positiveNumbers[i];
        if (currentItem > largestNumber){
            largestNumber = currentItem;
        }
    }
    console.log(largestNumber);
}

biggestNumber(positiveNumbers);

// Can utilize sort method to get answer as well

// function biggestNumber(){
//     var sortedNumbers = positiveNumbers.sort()
//     console.log(sortedNumbers[(sortedNumbers.length)-1])
// }

// biggestNumber(positiveNumbers);