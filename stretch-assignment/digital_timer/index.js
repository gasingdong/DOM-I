const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

function startTimer() {
  let count = 0;
  const timer = setInterval(() => {
    count = count + 0.01;
    secondTens.textContent = Math.floor(count / 10);
    secondOnes.textContent = Math.floor(count % 10);
    msHundreds.textContent = Math.floor((count % 1) * 10);
    msTens.textContent = Math.floor((count % 0.1) * 100);

    if (count >= 2) {
      clearInterval(timer);
      document.querySelector('.digits').style.color = 'red';
    }
  }, 10);
}

startTimer();
