'use strict';

let computerScore = 0;
let playerScore = 0;

const rps = ['rock', 'paper', 'scissors'];

const computerPlay = () => {
  return rps[Math.floor(Math.random() * rps.length)];
};

const playRound = function (playerSelection, computerSelection) {
  computerSelection = computerPlay();
  let lose = `You lose! ${computerSelection} beats ${playerSelection}`;
  let win = `You win! ${playerSelection} beats ${computerSelection}`;
  let draw = 'You tie.';
  if (computerSelection == 'scissors' && playerSelection == 'rock') {
    playerScore++;
    return win;
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    computerScore++;
    return lose;
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    computerScore++;
    return lose;
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    playerScore++;
    return win;
  } else if (computerSelection == 'rock' && playerSelection == 'paper') {
    playerScore++;
    return win;
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    computerScore++;
    return lose;
  } else if (computerSelection === playerSelection) {
    return draw;
  }
};

const finalScore = () => { // Displays score after each round
  return `Player: ${playerScore}\u00A0\u00A0\u00A0 Computer: ${computerScore}`; // Strings between backticks = template literal. \u00A0 (Non Breaking Whitespace?) is ugly, but works?
};

const gameResult = () => { // Shows winner or loser of game, shows reset button, disables top buttons
  if (playerScore === 5) {
    resetBtn(), disableBtn();
    return 'You win the game.';
  } else if (computerScore === 5) {
    resetBtn(), disableBtn();
    return 'Computer wins. You lose the game.';
  }
};

const resetButton = document.createElement('button'); // Has no class name until given one?

const resetBtn = () => {  // Appends and unhides the resetButton element, hides it upon click, and re-enables other buttons
  reset.appendChild(resetButton);
  resetButton.className = 'resetButton'; // Gave element class name to style it
  resetButton.innerHTML = 'Reset Game';
  resetButton.style.visibility = 'visible';
  resetButton.addEventListener('click', () => {
    (resetButton.style.visibility = 'hidden'), finishGame(), enableBtn();
  });
};

const finishGame = () => { // Resets scores
  playerScore = 0;
  computerScore = 0;
  score.innerHTML = ``;
  endGame.innerHTML = ``;
  results.innerHTML = ``;
};

const disableBtn = () => {
  document.getElementById('rockButton').disabled = true;
  document.getElementById('paperButton').disabled = true;
  document.getElementById('scissorsButton').disabled = true;
};

const enableBtn = () => {
  document.getElementById('rockButton').disabled = false;
  document.getElementById('paperButton').disabled = false;
  document.getElementById('scissorsButton').disabled = false;
};

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
  (results.textContent = playRound('rock')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameResult());
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
  (results.textContent = playRound('paper')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameResult());
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
  (results.textContent = playRound('scissors')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameResult());
});

const container = document.querySelector('#container');

const results = document.createElement('results');
const score = document.createElement('score');
const endGame = document.createElement('endGame');

container.appendChild(results);
container.appendChild(score);
container.appendChild(endGame);
