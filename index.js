let display = document.querySelector('.display');
let playPauseBtn = document.getElementById('playpauseBtn');
let countInterval;
let sec = 0;
let min = 0;
let hrs = 0;
let resetBtn = document.querySelector(".reset")


function togglefun() {
    if (!countInterval) {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        countInterval = setInterval(updateTimer, 0);
    } else {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        clearInterval(countInterval);
        display.textContent = `${formatTime(hrs)}:${formatTime(min)}:${formatTime(sec)}`;
    }
}

function updateTimer() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hrs++;
        }
    }
    display.textContent = `${formatTime(hrs)}:${formatTime(min)}:${formatTime(sec)}`;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function resetdata() {
    if(countInterval){
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        clearInterval(countInterval)
    };
    display.innerText = "00:00:00";
    hrs = 0;
    min = 0;
    sec = 0;
    countInterval=null

}

resetBtn.addEventListener("click", resetdata)
