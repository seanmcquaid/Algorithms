// January 1, 1701 was a Saturday. 
// How many Saturdays were on the first of the month between 1701 and 1800?
var startDate = new Date("January, 1, 1701");
var endDate = new Date("December, 31, 1800");


function saturdays(startDate, endDate){
    var saturdayCount = 0;
    while (startDate < endDate){
       startDate.setDate((startDate.getDate()+ 1));
        if (startDate.getDate() === 1 && startDate.getDay() === 6){
            saturdayCount++;
        }
    } console.log(saturdayCount);
}

saturdays(startDate, endDate);