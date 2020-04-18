"use strict";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class CountdownTimer {
  constructor(timerObj) {
    this.selector = timerObj.selector;
    this.targetDate = timerObj.targetDate;
  }
  counter() {
    setInterval(() => {
      const refs = setTimer(this.selector);
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      const count = countTime(time);

      refs.days.textContent = count.days;
      refs.hours.textContent = count.hours;
      refs.mins.textContent = String(count.mins).padStart(2, "0");
      refs.seconds.textContent = String(count.secs).padStart(2, "0");
    }, 1000);
  }
}

function setTimer(selector) {
  const timerSet = document.querySelector(selector);

  const selectors = {
    days: timerSet.querySelector(`[data-value="days"]`),
    hours: timerSet.querySelector(`[data-value="hours"]`),
    mins: timerSet.querySelector(`[data-value="mins"]`),
    seconds: timerSet.querySelector(`[data-value="secs"]`),
  };
  return selectors;
}

function countTime(time) {
  const count = {
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    secs: Math.floor((time % (1000 * 60)) / 1000),
  };
  return count;
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021"),
});

timer.counter();