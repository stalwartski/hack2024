let hours = 0;
let minutes = 0;
let seconds = 0;
function formatTime(unit) {
    if (unit < 10)
        return '0' + unit;
    else
        return unit;
}
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
            if (hours === 24) {
                hours = 0;
            }
        }
    }
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    console.log(timeString);
}
setInterval(updateTime, 1000);