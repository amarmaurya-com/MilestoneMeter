const startDate = new Date("June 5, 2024 00:00:00").getTime();
const endDate = new Date("June 5, 2025 00:00:00").getTime();

const yearEl = document.getElementById("year");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const progressEl = document.getElementById("progress");
const percentTextEl = document.getElementById("percent-text");

function padZero(n) {
  return n < 10 ? "0" + n : n;
}

function updateCountdown() {
  const now = new Date().getTime();
  const elapsed = now - startDate;
  const duration = endDate - startDate;

  if (elapsed <= 0) {
    yearEl.innerText = "00";
    daysEl.innerText = "00";
    hoursEl.innerText = "00";
    minEl.innerText = "00";
    secEl.innerText = "00";
    progressEl.value = 0;
    percentTextEl.innerText = "0%";
    return;
  }

  const percent = (elapsed / duration) * 100;
  const totalDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365);
  const days = totalDays % 365;
  const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsed / 1000) % 60);

  yearEl.innerText = padZero(years);
  daysEl.innerText = padZero(days);
  hoursEl.innerText = padZero(hours);
  minEl.innerText = padZero(minutes);
  secEl.innerText = padZero(seconds);

  progressEl.value = percent.toFixed(2);
  percentTextEl.innerText = percent.toFixed(1) + "%";

  // Change color based on progress
  if (percent >= 100) {
    progressEl.style.background = "#0000ff";
  } else if (percent > 80) {
    progressEl.style.background = "#ff0000";
  } else if (percent > 50) {
    progressEl.style.background = "#ff9900";
  } else {
    progressEl.style.background = "#00cc00";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Run once on load
