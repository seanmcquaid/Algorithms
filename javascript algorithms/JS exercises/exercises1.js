// Exercises:

// 1.Given a number between 0 and 6 representing the days of the week, 
// print "Go to work." if it's a work day and "Sleep in." if it's a weekend day. 
// You can set up an array for the days of the week, or for extra credit, you can check out the JS Date object here).

var number = parseInt(prompt("Type in a number between 0 and 6!"));
var daysOfWeek = [0,1,2,3,4,5,6];

if (daysOfWeek[number] == 5 || daysOfWeek[number] == 6){
    console.log("Sleep in.")
} else {
    console.log("Go to work!")
}

// 2. Given a month number, between 1 and 12, and a year, 
// print the number of days in that month - accounting for leap years.

var monthNum = parseInt(prompt("Type in a month number between 1 and 12!"));
var yearNum = parseInt(prompt("Type in a year!"));

function numOfDays () {
    if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11){
        console.log("30 Days")
    } else if (monthNum == 2){
        if (yearNum % 4 == 0 && yearNum % 100 != 0|| yearNum % 100 == 0 && yearNum % 400 == 0){
            console.log("29 Days")
        } else if(yearNum % 100 == 0) {
            console.log("28 Days")
        } else {
            console.log("28 Days")
        }
    } else {
        console.log("31 Days")
    }
}

numOfDays(monthNum, yearNum)
 
// 3. Given the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", 
// print the total bill with the tip included. The amount of tip given for each level of service is defined by:

// "good" -> 20%

// "fail" -> 15%

// "bad"  -> 10%

// Extra: Add to "Tip Calculator"...you are also given the number of people to divide the total into. 
// Print the amount for each person to pay.

// Convert it to a function splitAmount that takes the bill amount and the level of service, 
// and the number of people to split the bill between. Return the final amount for each person.

function tipCalc(total, service, amountOfPeople){
    var tipAmount;
    var newTotal;
    if (service == "good"){
        tipAmount = Math.floor((total * 0.2) * 100) / 100;
        newTotal = total + tipAmount;
        costPerPerson = newTotal / amountOfPeople;
        console.log ("Cost Per Person: $" + costPerPerson)
    } else if (service == "fair"){
        tipAmount = Math.floor((total * 0.15) * 100) / 100;
        newTotal = total + tipAmount;
        costPerPerson = newTotal / amountOfPeople;
        console.log ("Cost Per Person: $" + costPerPerson)
    } else {
        tipAmount = Math.floor((total * 0.10) * 100) / 100;
        newTotal = total + tipAmount;
        costPerPerson = newTotal / amountOfPeople;
        console.log ("Cost Per Person: $" + costPerPerson)
    }
}

tipCalc(100,"good", 2)