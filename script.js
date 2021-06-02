'use strict';
/* 
document.querySelector('.message');
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
document.querySelector('.guess').value;
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //incorect number/invalid number
  if (!guess || guess > 20 || guess < 1) {
    // document.querySelector('.message').textContent = '👈 Enter a valid number';
    displayMessage('👈 Enter a valid number');
  }
  //correct answer
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ' 🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //guess is wrong
  else if (guess != secretNumber) {
    if (score > 0) {
      /* document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high' : '📉Too low'; */
      displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      /* document.querySelector('.message').textContent ='😖 You Lost the game. Try again!'; */
      displayMessage('😖 You Lost the game. Try again!');
    }
  }

  /* //Too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😖 You Lost the game. Try again!';
    }
  }
  //Too low
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😖 You Lost the game. Try again!';
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
