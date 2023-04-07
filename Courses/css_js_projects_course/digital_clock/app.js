// 4 things to manipulate are hour,
//  minute, seconds and am/pm

let hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const millisecondEl = document.getElementById("milliseconds");

function time() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

  hour = hour < 10 ? "0" + hour : hour;

  hourEl.innerText = hour;
  minuteEl.innerText = minute;
  secondEl.innerText = seconds;
  if (hour > 11) {
    hour = hour - 12;
    ampm = "PM";
  }
  ampmEl.innerText = ampm;

  // Use setTimeout() function to call this function every seconds
  // to update the secods display
  setTimeout(() => {
    time();
  }, 1000);
}
time();
