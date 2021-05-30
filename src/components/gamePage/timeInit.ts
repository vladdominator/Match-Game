import { sendRequest } from "../../service/sendRequest";
import { addForm } from "../popupScore/addCongradilation";

let seconds: number;
let minute: number;
let secondsTimer: ReturnType<typeof setTimeout>;
let count = 0;
let countFalse = 0;
function timeGame(clock: Element | undefined, init: boolean): void {
  if (init) {
    seconds = 0;
    minute = 0;
    secondsTimer = setInterval(() => {
      if (minute < 3 && clock) {
        seconds++;
        if (seconds < 10) {
          clock.textContent = `0${minute}:0${seconds}`;
        } else if(Number.isInteger(seconds / 60)) {
          minute++
          clock.textContent = `0${minute}:00`;
          seconds = 0;
        } else clock.textContent = `0${minute}:${seconds}`;
      } else {
        const numberCount = (count - countFalse) * 100 - 1800;
        sendRequest(numberCount);
        addForm(`${minute}.0${seconds}`, false, count - countFalse);
        clearInterval(secondsTimer);
      }
    }, 1000);
  } else {
    clearInterval(secondsTimer);
  }
}
function timerInit(clock: Element | undefined) {
  if (seconds < 30 && clock) {
    seconds++;
    if (seconds < 10) {
      clock.textContent = `00:0${seconds}`;
    } else clock.textContent = `00:${seconds}`;
  } else {
    clearInterval(secondsTimer);
    timeGame(clock, true);
  }
}
function timer(clock: Element | undefined): void {
  seconds = 0;
  secondsTimer = setInterval(() => timerInit(clock), 1000);
}
function countScore(itemOne: number, itemTwo: number): void {
  count = itemOne;
  countFalse = itemTwo;
}
function countScoreClose (one: number, two: number): void {
  const numberCount = (one - two) * 100 - 10 * (seconds + minute * 60);
  sendRequest(numberCount);
  if(seconds >= 0 && seconds < 10) {
    addForm(`${minute}.0${seconds}`, true, numberCount);
  } else addForm(`${minute}.${seconds}`, true, numberCount);
  clearInterval(secondsTimer);
}
export { timeGame, countScore, countScoreClose, timer }
