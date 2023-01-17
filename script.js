const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;

const d0 = new Date("2022-12-08")
const d1 = new Date("2023-01-07");
const d2 = new Date("2023-02-05");
const d3 = new Date("2023-03-07");
const d4 = new Date("2023-04-06");
const d5 = new Date("2023-05-05");
const d6 = new Date("2023-06-04");
const d7 = new Date("2023-07-03");
const d8 = new Date("2023-08-01");
const d9 = new Date("2023-08-31");
const d10 = new Date("2023-09-29");
const d11 = new Date("2023-10-28");
const d12 = new Date("2023-11-27");
const d13 = new Date("2024-12-27");
const d14 = new Date("2024-01-08");

const display = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

if (d > d0){
  const day = d1.getDate();
  const month = display.[d1.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d1){
  const day = d2.getDate();
  const month = display.[d2.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d2){
  const day = d3.getDate();
  const month = display.[d3.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d3){
  const day = d4.getDate();
  const month = display.[d4.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d4){
  const day = d5.getDate();
  const month = display.[d5.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d5){
  const day = d6.getDate();
  const month = display.[d6.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d6){
  const day = d7.getDate();
  const month = display.[d7.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d7){
  const day = d8.getDate();
  const month = display.[d8.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d8){
  const day = d9.getDate();
  const month = display.[d9.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d9){
  const day = d10.getDate();
  const month = display.[d10.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d10){
  const day = d11.getDate();
  const month = display.[d11.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d11){
  const day = d12.getDate();
  const month = display.[d12.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d12){
  const day = d13.getDate();
  const month = display.[d13.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}
if (d > d13){
  const day = d14.getDate();
  const month = display.[d14.getMonth()];
  const str = `${month} ${day}`;
  document.getElementById("date").innerHTML = str;
}

