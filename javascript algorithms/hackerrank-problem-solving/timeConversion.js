function timeConversion(timeString){
    let timeOfDay = timeString.slice(timeString.length - 2);
    let newString = timeString.slice(0, timeString.length - 2);
    let timeStringSplit = newString.split(":");
    let hours = parseInt(timeStringSplit[0]);
    let minutes = timeStringSplit[1];
    let seconds = timeStringSplit[2];
    if(timeOfDay === "PM"){
        if(hours !== 12){
            hours += 12;
        }
    } else {
        if(hours === 12){
            hours -= 12;
        }
    }
    hours = hours.toString();
    if(hours.length < 2){
        hours = "0" + hours;
    }

    let reformattedString = hours + ":" + minutes + ":" + seconds;
    return(reformattedString)
}
let originalString = "12:45:54PM";
timeConversion(originalString)