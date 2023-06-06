'use strict';
// ELEMENT

const bodyEl = document.querySelector('body');
const numberEl = document.querySelector('.number');
const numberInputEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const btnResetEl = document.querySelector('.again');
const btnCheckEl = document.querySelector('.check');

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

const displayMessage = function (message) {
  messageEl.textContent = message;
};

let generateNumber = generateRandomNumber();
let score = 20;
let highScore = 0;

btnCheckEl.addEventListener('click', function () {
  const guessNumber = Number(numberInputEl.value);
  // no number input number
  if (!guessNumber) {
    displayMessage('⛔ No Number!!');

    // When player wins
  } else if (guessNumber === generateNumber) {
    displayMessage('🏆 Correct Number!!');
    // change style css
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    numberEl.textContent = generateNumber;

    // highscore set
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    // When guess is wrong
  } else if (guessNumber !== generateNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > generateNumber ? '📈 Too High' : '📉 Too Low'
      );
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      scoreEl.textContent = 0;
    }
  }

  // When guess to high
  // else if (guessNumber > generateNumber) {
  //   if (score > 1) {
  //     messageEl.textContent = '📈 Too High';
  //     score--;
  //     scoreEl.textContent = score;
  //   } else {
  //     messageEl.textContent = '💥 You lost the game';
  //     scoreEl.textContent = 0;
  //   }

  //   // When guess to low
  // } else if (guessNumber < generateNumber) {
  //   if (score > 1) {
  //     messageEl.textContent = '📉 Too Low';
  //     score--;
  //     scoreEl.textContent = score;
  //   } else {
  //     messageEl.textContent = '💥 You lost the game';
  //     scoreEl.textContent = 0;
  //   }
  // }
});

// Reset game
btnResetEl.addEventListener('click', function () {
  score = 20;
  numberEl.textContent = '?';
  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  generateNumber = generateRandomNumber();
  numberInputEl.value = '';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';

  console.log(generateNumber);
});

console.log(generateNumber);
