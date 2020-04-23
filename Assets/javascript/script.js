var timer = document.querySelector(".timer");

var seconds = 60;

function setTime(){
    var timerInterval = setInterval(function() {
        seconds--;
        timer.textContent = seconds + " seconds left.";

        if(seconds === 0) {
            clearInterval(timerInterval);
            alert("TIMES UP!");
        }
    }, 1000);
}

setTime();