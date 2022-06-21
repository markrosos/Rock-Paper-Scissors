'use strict';

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
  (results.textContent = playRound('rock')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameScore());
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
  (results.textContent = playRound('paper')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameScore());
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
  (results.textContent = playRound('scissors')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameScore());
});

const container = document.querySelector('#container');

const results = document.createElement('results');
const score = document.createElement('score');
const endGame = document.createElement('endGame');

container.appendChild(results);
container.appendChild(score);
container.appendChild(endGame);

const rps = ['rock', 'paper', 'scissors'];

const computerPlay = () => {
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

const playRound = function (playerSelection, computerSelection) {
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
};

const finalScore = () => {
  // return 'Player: ' + playerScore + ' ' + 'Computer ' + computerScore; // Old method
  return `Player: ${playerScore}\u00A0\u00A0\u00A0 Computer: ${computerScore}`; // Strings between backticks = template literal. \u00A0 (Non Breaking Whitespace?) is ugly, but works?
};

const disableBtn = () => {
  document.getElementById('rockButton').disabled = true;
  document.getElementById('paperButton').disabled = true;
  document.getElementById('scissorsButton').disabled = true;
}

const enableBtn = () => {
  document.getElementById('rockButton').disabled = false;
  document.getElementById('paperButton').disabled = false;
  document.getElementById('scissorsButton').disabled = false;
}

const finishGame = () => {
  playerScore = 0;
  computerScore = 0;
  score.innerHTML = ``;
  endGame.innerHTML = ``;
  results.innerHTML = ``;
}

const resetButton = document.createElement('button'); // Has no class name until given one?

const resetBtn = () => {
  // Appends or unhides the resetButton element, hides it upon click, and re-enables other buttons
  reset.appendChild(resetButton);
  resetButton.className = 'resetButton'; // Gave element class name to style it
  resetButton.innerHTML = 'Reset Game';
  resetButton.style.visibility = 'visible';
  resetButton.addEventListener('click', () => {
    (resetButton.style.visibility = 'hidden'), finishGame(), enableBtn();
  });
}

const gameScore = () => {
  if (playerScore === 5) {
    resetBtn(), disableBtn();
    return 'You win the game.';
  } else if (computerScore === 5) {
    resetBtn(), disableBtn();
    return 'Computer wins. You lose the game.';
  }
}
