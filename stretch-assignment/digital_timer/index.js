/* eslint-disable no-undef */
// Selector queries
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const stop = document.querySelector('.stop');

// Initialize starting values
let count = 0;
reset.disabled = true;
stop.disabled = true;
let timer;

// Attached to the start button
function startTimer() {
  start.disabled = true;
  reset.disabled = true;
  stop.disabled = false;
  timer = setInterval(() => {
    count = count + 0.01;
    secondTens.textContent = Math.floor(count / 10);
    secondOnes.textContent = Math.floor(count % 10);
    msHundreds.textContent = Math.floor((count % 1) * 10);
    msTens.textContent = Math.floor((count % 0.1) * 100);

    if (count >= 10) {
      clearInterval(timer);
      document.querySelector('.digits').style.color = 'red';
      reset.disabled = false;
    }
  }, 10);
}

// Attached to the reset button
function resetTimer() {
  start.disabled = false;
  stop.disabled = true;
  count = 0;
  secondTens.textContent = '-';
  secondOnes.textContent = '-';
  msHundreds.textContent = '-';
  msTens.textContent = '-';
  document.querySelector('.digits').style.color = 'black';
}

// Attached to the stop button
function stopTimer() {
  clearInterval(timer);
  stop.disabled = true;
  reset.disabled = false;
  start.disabled = false;
}

start.addEventListener('click', () => startTimer());
stop.addEventListener('click', () => stopTimer());
reset.addEventListener('click', () => resetTimer());
