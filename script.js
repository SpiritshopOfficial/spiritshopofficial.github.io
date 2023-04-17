var isInstagram = navigator.userAgent.match(/instagram/i);
if (isInstagram) {
  document.querySelector('html').classList.add("html-insta");
}

const y = new Date();
let year = y.getFullYear();
document.getElementById("year").innerHTML = year;

/* Full Moon Party Planner */

const display = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

const dates = [
  new Date("2023-05-05"),
  new Date("2023-06-04"),
  new Date("2023-07-03"),
  new Date("2023-08-02"),
  new Date("2023-08-31"),
  new Date("2023-09-30"),
  new Date("2023-10-30"),
  new Date("2023-11-29"),
  new Date("2023-12-29"),
  new Date("2024-01-28"),
  new Date("2024-02-27"),
  new Date("2024-03-28"),
  new Date("2024-04-26"),
  new Date("2024-05-26"),
  new Date("2024-06-25"),
  new Date("2024-07-25"),
  new Date("2024-08-23"),
  new Date("2024-09-22"),
  new Date("2024-10-22"),
  new Date("2024-11-21")
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

const day = dates[index].getDate();
const month = display[dates[index].getMonth()];
const str = `${month} ${day}`;
const dateElement = document.getElementById("date");
if (dateElement) {
  dateElement.innerHTML = str;
}

