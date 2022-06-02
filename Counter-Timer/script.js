let count = 0;
let timer = 0;
let time = 0;
let timerenable = false;

function increase() {
  count = count + 1;
  document.getElementById("counter").innerHTML = count;
}

function decrese() {
  count = count - 1;
  document.getElementById("counter").innerHTML = count;
}

function reset() {
  count = 0;
  document.getElementById("counter").innerHTML = count;
}

function timeStart() {
  timerenable = true;
  console.log(timerenable);
  if (timerenable == true) {
    timer = setInterval(function () {
      timeincrement();
    }, 10);
    console.log("timer enabled");
  } else {
    clearInterval(timer);
  }
}
function timeStop() {
  timerenable = false;
  console.log(timerenable);
  if (timerenable == true) {
    timer = setInterval(function () {
      timeincrement();
    }, 10);
    console.log("timer enabled");
  } else {
    clearInterval(timer);
  }
}
function timeReset() {
  clearInterval(timer);
  time = 0;
  document.getElementById("timecounter").innerHTML = time.toFixed(2);
  console.log(time)
}

function timeincrement() {
  time = time + 0.01;
  document.getElementById("timecounter").innerHTML = time.toFixed(2);
  console.log(time);
  return;
}
