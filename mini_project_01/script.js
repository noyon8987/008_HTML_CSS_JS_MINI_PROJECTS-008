function myTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let dates = date.getDate();
  let year = date.getFullYear();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let h = hour < 10 ? "0" + hour : hour;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  if (h == 0) {
    h = 12;
  } else if (h > 12) {
    h = h - 12;
  } else {
    h;
  }

  let Time = h + ":" + m + ":" + s + " ";
  let M = hour >= 12 ? "PM" : "AM";
  let days = day[date.getDay()] + ", " + dates + " " + month[date.getMonth()];

  document.getElementsByClassName("H")[0].innerHTML = Time;
  document.getElementsByClassName("M")[0].innerHTML = M;
  document.getElementsByClassName("D")[0].innerHTML = days;
  document.getElementsByClassName("Y")[0].innerHTML = year;
}

myTime();

setInterval(() => {
  myTime();
}, 1000);
