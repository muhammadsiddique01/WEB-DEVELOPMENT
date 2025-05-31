let msecCounter = 0;
let secCounter = 0;
let minCounter = 0;

let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("msec");

let interval;

// This function is called every 10 milliseconds
function timer() {
  msecCounter++;

  if (msecCounter === 100) {
    msecCounter = 0;
    secCounter++;

    if (secCounter === 60) {
      secCounter = 0;
      minCounter++;
    }
  }

  // Update the UI with leading zeros
  min.innerHTML = minCounter < 10 ? "0" + minCounter : minCounter;
  sec.innerHTML = secCounter < 10 ? "0" + secCounter : secCounter;
  msec.innerHTML = msecCounter < 10 ? "0" + msecCounter : msecCounter;
}

// Starts the timer
function startTimer() {
  if (!interval) {
    interval = setInterval(timer, 10);
  }
}

// Stops the timer
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

// Resets everything
function resetTimer() {
  stopTimer();
  msecCounter = 0;
  secCounter = 0;
  minCounter = 0;
  min.innerHTML = "00";
  sec.innerHTML = "00";
  msec.innerHTML = "00";
}
