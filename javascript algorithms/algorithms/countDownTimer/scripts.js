let count = 3600;

let startButton = document.querySelector(".start-btn");
let stopButton = document.querySelector(".stop-btn");

startButton.addEventListener("click",()=>{
    let interval = setInterval(countDown, 1000);
    function countDown(){
    if(count == 0){
        return
    }
    count = count - 1;
    let seconds = count % 60;
    let minutes = Math.floor(count/ 60);
    let hour = Math.floor(minutes/60);
    console.log(count);
    document.querySelector(".hours").innerHTML = hour + ":";
    document.querySelector(".minutes").innerHTML = minutes + ":";
    document.querySelector(".seconds").innerHTML = seconds;
    stopButton.addEventListener("click", ()=>{
        interval = null;
    })
}
})
