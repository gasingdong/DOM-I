// Selector queries
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

// Initialize starting values
let count = 0;
reset.disabled = true;

// Attached to the start button
function startTimer() {
  start.disabled = true;
  reset.disabled = true;
  const timer = setInterval(() => {
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
  count = 0;
  secondTens.textContent = '-';
  secondOnes.textContent = '-';
  msHundreds.textContent = '-';
  msTens.textContent = '-';
  document.querySelector('.digits').style.color = 'black';
}

start.addEventListener('click', () => startTimer());
reset.addEventListener('click', () => resetTimer());
