'use strict';

// Selecting Element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, isPlaying;

// Starting condition
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  // ui score
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // UI
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// start game set
init();

// switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check dice roll = 1
    if (dice !== 1) {
      //  3.2. Add dice roll to current Score based on active player
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Holding score
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // 1 Add current score to total score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2 Check score => 100
    // if true = player wins
    // if false = switch player
    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// Reset Game
btnNew.addEventListener('click', init);
