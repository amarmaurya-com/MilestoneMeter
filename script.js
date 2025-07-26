console.log("Here we go!");

const startDate = new Date("June 5, 2024 00:00:00").getTime();
const endDate = new Date("June 5, 2025 00:00:00").getTime();

const yearEl = document.getElementById("year");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const progressEl = document.getElementById("progress");
const percentTextEl = document.getElementById("percent-text");

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function updateCountdown() {
    const now = new Date().getTime();
    const completed = now - startDate;

    if (completed < 0) {
        document.getElementById("countdown").innerHTML = "Starts in " + Math.abs(Math.floor(completed / 86400000)) + " days";
        progressEl.value = 0;
        percentTextEl.innerText = `0%`;
        return;
    }

    const days = Math.floor(completed / 86400000);
    const years = Math.floor(days / 365);
    const hours = Math.floor(completed % 86400000 / (60 * 60 * 1000));
    const minutes = Math.floor(completed % (60 * 60 * 1000) / (60 * 1000));
    const seconds = Math.floor(completed % (60 * 1000) / 1000);

    yearEl.innerHTML = padZero(years);
    daysEl.innerHTML = padZero(days);
    hoursEl.innerHTML = padZero(hours);
    minEl.innerHTML = padZero(minutes);
    secEl.innerHTML = padZero(seconds);

    document.querySelector("h2").innerText = `Going On: ${years}y ${days % 365}d ${hours}h ${minutes}m ${seconds}s`;

    const totalDuration = endDate - startDate;
    const percentCompleted = ((now - startDate) / totalDuration) * 100;
    progressEl.value = percentCompleted.toFixed(2);
    percentTextEl.innerText = `${percentCompleted.toFixed(1)}%`;

    if (percentCompleted > 80) {
        progressEl.style.background = "#ff0000"; // red
    } else if (percentCompleted > 50) {
        progressEl.style.background = "#ff9900"; // orange
    } else {
        progressEl.style.background = "#00cc00"; // green
    }
}

setInterval(updateCountdown, 1000);
updateCountdown(); // initial call
