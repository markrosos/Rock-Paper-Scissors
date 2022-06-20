'use strict';

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', function (e) {
  (results.textContent = playRound('rock')),
    ((score.textContent = finalScore()), (endGame.textContent = gameScore()));
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', function (e) {
  (results.textContent = playRound('paper')),
    ((score.textContent = finalScore()), (endGame.textContent = gameScore()));
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', function (e) {
  (results.textContent = playRound('scissors')),
    ((score.textContent = finalScore()), (endGame.textContent = gameScore()));
});

const container = document.querySelector('#container');

const results = document.createElement('results');
const score = document.createElement('score');
const endGame = document.createElement('endGame');

container.appendChild(results);
container.appendChild(score);
container.appendChild(endGame);

const rps = ['rock', 'paper', 'scissors'];

const computerPlay = function () {
  return rps[Math.floor(Math.random() * rps.length)];
};

let winRS = 'You win! Rock beats Scissors.';
let winSP = 'You Win! Scissors beats Paper.';
let winPR = 'You win! Paper beats rock.';
let loseSP = 'You Lose! Scissors beats paper';
let loseRS = 'You lose! Rock beats scissors.';
let losePR = 'You lose! Paper beats rock.';
let draw = 'You tie.';

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  if (computerSelection == 'scissors' && playerSelection == 'rock') {
    playerScore++;
    return winRS;
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    computerScore++;
    return loseSP;
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    computerScore++;
    return losePR;
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
    playerScore++;
    return winSP;
  } else if (computerSelection == 'rock' && playerSelection == 'paper') {
    playerScore++;
    return winPR;
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    computerScore++;
    return loseRS;
  } else if (computerSelection === playerSelection) {
    return draw;
  }
}

function finalScore() {
  return 'Player: ' + playerScore + ' ' + 'Computer ' + computerScore;
}

function disableBtn() {
  document.getElementById('rockButton').disabled = true;
  document.getElementById('paperButton').disabled = true;
  document.getElementById('scissorsButton').disabled = true;
}

function enableBtn() {
  document.getElementById('rockButton').disabled = false;
  document.getElementById('paperButton').disabled = false;
  document.getElementById('scissorsButton').disabled = false;
}

function finishGame() {
  playerScore = 0;
  computerScore = 0;
  score.innerHTML = ``;
  endGame.innerHTML = ``;
  results.innerHTML = ``;
}

const resetButton = document.createElement('button');

function newButton() {
  // Appends or unhides the resetButton element, hides it upon click, and re-enables other buttons
  reset.appendChild(resetButton);
  resetButton.innerHTML = 'Reset Game';
  resetButton.style.visibility = 'visible';
  resetButton.addEventListener('click', function () {
    (resetButton.style.visibility = 'hidden'), finishGame(), enableBtn();
  });
}

function gameScore() {
  if (playerScore === 5) {
    newButton(), disableBtn();
    return 'You win the game.';
  } else if (computerScore === 5) {
    newButton(), disableBtn();
    return 'Computer wins. You lose the game.';
  }
}
