let startTime;
let elapsedTime = 0;
let timerInterval;

function start() {
    if (!startTime) {
        // Start the stopwatch
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
        document.getElementById("start").textContent = "Pause";
    } else {
        // Pause the stopwatch
        clearInterval(timerInterval);
        startTime = null;
        document.getElementById("start").textContent = "Resume";
    }
}

function reset() {
    // Reset the stopwatch
    clearInterval(timerInterval);
    startTime = null;
    elapsedTime = 0;
    document.getElementById("display");
    document.getElementById("start").textContent = "Start";
    clearLaps();
}

function updateTime() {
    // Update the stopwatch display
    let now = Date.now();
    elapsedTime = now - startTime;
    displayTime(elapsedTime);
}

function displayTime(time) {
    // Format the time as hh:mm:ss.SSS
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = time % 1000;

    document.getElementById("display").textContent = 
        pad(hours, 2) + ":" + 
        pad(minutes, 2) + ":" + 
        pad(seconds, 2) + "." + 
        pad(milliseconds, 3);
}

function pad(num, size) {
    // Helper function to pad zeros
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function lap() {
    // Record lap time
    let lapTime = elapsedTime;
    let lapsList = document.getElementById("laps");
    let lapItem = document.createElement("li");
    lapItem.textContent = document.getElementById("display").textContent;
    lapsList.appendChild(lapItem);
}

function clearLaps() {
    // Clear lap times
    let lapsList = document.getElementById("laps");
    lapsList.innerHTML = "";
}