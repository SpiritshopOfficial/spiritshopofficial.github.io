var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  document.querySelector('html').classList.add("html-insta");
}

/* SFM Planner */

const y = new Date();
let year = y.getFullYear();
document.getElementById("year").innerHTML = year;

const display = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

const dates = [
  new Date("2023-05-05"),
  new Date("2023-06-04"),
  new Date("2023-07-03"),
  new Date("2023-08-01"),
  new Date("2023-08-31"),
  new Date("2023-09-29"),
  new Date("2023-10-28"),
  new Date("2023-11-27"),
  new Date("2023-12-27"),
  new Date("2024-01-25"),
  new Date("2024-02-24"),
  new Date("2024-03-25"),
  new Date("2024-04-24"),
  new Date("2024-05-23"),
  new Date("2024-06-22"),
  new Date("2024-07-21"),
  new Date("2024-08-19"),
  new Date("2024-09-18"),
  new Date("2024-10-17"),
  new Date("2024-11-15")
];

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 1);

let index = 0;
for (let i = 0; i < dates.length; i++) {
  if (currentDate > dates[i]) {
    index = i + 1;
  } else {
    break;
  }
}

const day = dates[index].toLocaleString("en-US", { day: "numeric", timeZone: "Europe/Prague" });
const month = display[dates[index].getMonth()];
const str = `${month} ${day}`;
const dateElement = document.getElementById("date");
if (dateElement) {
  dateElement.innerHTML = str;
}

