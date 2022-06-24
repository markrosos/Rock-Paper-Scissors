let computerScore = 0;
let playerScore = 0;

const rps = ['Rock', 'Paper', 'Scissors'];

const computerPlay = () => {
  return rps[Math.floor(Math.random() * rps.length)];
};

const playRound = function(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  let lose = `You lose! ${computerSelection} beats ${playerSelection}.`;
  let win = `You win! ${playerSelection} beats ${computerSelection}.`;
  let draw = 'You tie.';
  if (
    (computerSelection == 'Scissors' && playerSelection == 'Rock') ||
    (computerSelection == 'Paper' && playerSelection == 'Scissors') ||
    (computerSelection == 'Rock' && playerSelection == 'Paper')
  ) {
    playerScore++;
    return win;
  } else if (
    (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
    (computerSelection == 'Paper' && playerSelection == 'Rock') ||
    (computerSelection == 'Rock' && playerSelection == 'Scissors')
  ) {
    computerScore++;
    return lose;
  } else if (computerSelection === playerSelection) {
    return draw;
  }
};

const finalScore = () => { // Displays score after each round
  return `Player: ${playerScore}\u00A0\u00A0\u00A0 Computer: ${computerScore}`; // \u00A0 (Non Breaking Whitespace?) is ugly, but works?
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

const resetBtn = () => { // Appends and unhides the resetButton element, hides it upon click, and re-enables other buttons
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
  document.querySelectorAll('#scissorsBtn,#rockBtn,#paperBtn').forEach((item) => {
      item.disabled = true;
    });
};

const enableBtn = () => {
  document.querySelectorAll('#scissorsBtn,#rockBtn,#paperBtn').forEach((item) => {
      item.disabled = false;
    });
};

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
  (results.textContent = playRound('Rock')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameResult());
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  (results.textContent = playRound('Paper')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameResult());
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
  (results.textContent = playRound('Scissors')),
    (score.textContent = finalScore()),
    (endGame.textContent = gameResult());
});

const resultContainer = document.querySelector('#resultContainer');

const results = document.createElement('results');
const score = document.createElement('score');
const endGame = document.createElement('endGame');

resultContainer.appendChild(results);
resultContainer.appendChild(score);
resultContainer.appendChild(endGame);
