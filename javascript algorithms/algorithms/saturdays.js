// January 1, 1701 was a Saturday. 
// How many Saturdays were on the first of the month between 1701 and 1800?
var startDate = new Date("January, 1, 1701");
var endDate = new Date("December, 31, 1800");
var startYear = startDate.getFullYear();
var endYear = endDate.getFullYear();
var startMonthIndex = startDate.getMonth();
var endMonthIndex = endDate.getMonth();
var firstDayOfMonth = startDate.getDate();
var lastDayOfMonth = endDate.getDate();
var dayOfWeek = startDate.getDay();

function saturdays(){
    var saturdayCount = 0;
    for(i = startYear; i < endYear; i++){
        for(i = startMonthIndex; i < endMonthIndex; i++){
            for(i = firstDayOfMonth; i < lastDayOfMonth; i++){
                if(firstDayOfMonth == 1){
                    if(dayOfWeek == 6){
                        saturdayCount += 1;
                    }
                }
            }
        } console.log(saturdayCount);
    }
}

saturdays();